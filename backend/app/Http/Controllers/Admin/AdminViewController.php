<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AdminViewController extends Controller
{
    public function loginView()
    {
        return view('admin.login');
    }

    public function handleLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $throttleKey = Str::lower($request->input('email')) . '|' . $request->ip();

        if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = RateLimiter::availableIn($throttleKey);
            $minutes = ceil($seconds / 60);
            return back()->withErrors([
                'email' => "Too many failed login attempts. Please try again in {$minutes} minute(s).",
            ])->withInput($request->only('email'));
        }

        $user = DB::table('users')->where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            RateLimiter::clear($throttleKey);
            $request->session()->regenerate();
            session([
                'admin_logged_in' => true,
                'admin_user' => $user->name,
                'admin_email' => $user->email,
                'admin_last_activity' => time(),
            ]);
            return redirect()->route('admin.dashboard');
        }

        RateLimiter::hit($throttleKey, 900); // 15-minute lockout window

        return back()->withErrors(['email' => 'Invalid email or password.'])->withInput($request->only('email'));
    }

    public function handleLogout(Request $request)
    {
        $request->session()->forget(['admin_logged_in', 'admin_user', 'admin_email', 'admin_last_activity']);
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('admin.login');
    }

    public function dashboardView()
    {
        $totalLeads = DB::table('leads')->count();
        $newLeads = DB::table('leads')->where('status', 'new')->count();
        $activePlans = DB::table('subscription_plans')->where('is_active', true)->count();
        $totalFaqs = DB::table('faqs')->count();
        $totalTestimonials = DB::table('testimonials')->count();
        $totalAreas = DB::table('delivery_areas')->count();
        $recentLeads = DB::table('leads')->orderBy('created_at', 'desc')->limit(8)->get();

        return view('admin.dashboard', compact('totalLeads', 'newLeads', 'activePlans', 'totalFaqs', 'totalTestimonials', 'totalAreas', 'recentLeads'));
    }

    public function leadsView(Request $request)
    {
        $query = DB::table('leads')->orderBy('created_at', 'desc');
        if ($request->has('status') && $request->status) {
            $query->where('status', $request->status);
        }
        $leads = $query->paginate(20);
        return view('admin.leads', compact('leads'));
    }

    public function updateLeadStatus(Request $request)
    {
        $request->validate(['lead_id' => 'required', 'status' => 'required']);
        DB::table('leads')->where('id', $request->lead_id)->update([
            'status' => $request->status,
            'updated_at' => now(),
        ]);
        return back()->with('success', 'Lead status updated successfully!');
    }

    // ==========================================
    // WEBSITE CMS (SECTIONS & CONTENT KEY-VALUES)
    // ==========================================
    public function websiteView(Request $request)
    {
        $sections = DB::table('homepage_sections')->orderBy('display_order', 'asc')->get();
        $selectedSectionId = $request->get('section', $sections->first()->id ?? 1);
        $activeSection = DB::table('homepage_sections')->where('id', $selectedSectionId)->first();
        
        $contents = DB::table('homepage_content')
            ->where('section_id', $selectedSectionId)
            ->orderBy('id', 'asc')
            ->get();

        return view('admin.website', compact('sections', 'activeSection', 'contents', 'selectedSectionId'));
    }

    public function saveSection(Request $request, $id)
    {
        DB::table('homepage_sections')->where('id', $id)->update([
            'section_name' => $request->input('section_name'),
            'is_active' => $request->has('is_active') ? 1 : 0,
            'is_published' => $request->has('is_published') ? 1 : 0,
            'display_order' => (int)$request->input('display_order', 1),
            'updated_at' => now(),
        ]);
        return back()->with('success', 'Section settings updated successfully!');
    }

    public function saveSectionContent(Request $request, $id)
    {
        $fields = $request->input('fields', []); // array of [id => value]
        foreach ($fields as $fieldId => $val) {
            DB::table('homepage_content')->where('id', $fieldId)->where('section_id', $id)->update([
                'field_value' => $val,
                'updated_at' => now(),
            ]);
        }
        return back()->with('success', 'Section content fields updated successfully!');
    }

    public function addContentField(Request $request)
    {
        $request->validate([
            'section_id' => 'required',
            'field_key' => 'required|string',
            'field_value' => 'nullable|string',
        ]);

        DB::table('homepage_content')->insert([
            'section_id' => $request->section_id,
            'field_key' => trim($request->field_key),
            'field_value' => $request->field_value ?? '',
            'state' => 'published',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return back()->with('success', 'New content field added successfully!');
    }

    public function deleteContentField(Request $request)
    {
        $fieldId = $request->input('field_id');
        DB::table('homepage_content')->where('id', $fieldId)->delete();
        return back()->with('success', 'Content field deleted.');
    }

    // ==========================================
    // SEO SETTINGS MANAGER
    // ==========================================
    public function seoView()
    {
        $seoList = DB::table('seo_settings')->orderBy('id', 'asc')->get();
        return view('admin.seo', compact('seoList'));
    }

    public function saveSeo(Request $request)
    {
        $request->validate([
            'page_route' => 'required|string',
            'meta_title' => 'required|string',
        ]);

        if ($request->has('id') && $request->id) {
            DB::table('seo_settings')->where('id', $request->id)->update([
                'page_route' => $request->page_route,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
                'og_image' => $request->og_image,
                'updated_at' => now(),
            ]);
            return back()->with('success', 'SEO settings updated successfully!');
        } else {
            DB::table('seo_settings')->insert([
                'page_route' => $request->page_route,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
                'og_image' => $request->og_image,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            return back()->with('success', 'New page SEO settings created!');
        }
    }

    public function deleteSeo($id)
    {
        DB::table('seo_settings')->where('id', $id)->delete();
        return back()->with('success', 'SEO settings deleted.');
    }

    // ==========================================
    // DELIVERY AREAS
    // ==========================================
    public function deliveryAreasView()
    {
        $areas = DB::table('delivery_areas')->orderBy('sort_order', 'asc')->get();
        return view('admin.delivery_areas', compact('areas'));
    }

    public function saveDeliveryArea(Request $request)
    {
        $request->validate(['name' => 'required|string']);

        $data = [
            'name' => $request->name,
            'zone' => $request->zone ?? 'East Delhi',
            'detail' => $request->detail,
            'icon' => $request->icon ?? '📍',
            'is_active' => $request->has('is_active') ? 1 : 0,
            'sort_order' => (int)$request->sort_order,
            'updated_at' => now(),
        ];

        if ($request->has('id') && $request->id) {
            DB::table('delivery_areas')->where('id', $request->id)->update($data);
            return back()->with('success', 'Delivery area updated successfully!');
        } else {
            $data['created_at'] = now();
            DB::table('delivery_areas')->insert($data);
            return back()->with('success', 'Delivery area created successfully!');
        }
    }

    public function deleteDeliveryArea($id)
    {
        DB::table('delivery_areas')->where('id', $id)->delete();
        return back()->with('success', 'Delivery area deleted.');
    }

    // ==========================================
    // TESTIMONIALS
    // ==========================================
    public function testimonialsView()
    {
        $testimonials = DB::table('testimonials')->orderBy('sort_order', 'asc')->get();
        return view('admin.testimonials', compact('testimonials'));
    }

    public function saveTestimonial(Request $request)
    {
        $request->validate([
            'customer_name' => 'required|string',
            'review_text' => 'nullable|string',
            'avatar_file' => 'nullable|file|mimes:jpg,jpeg,png,webp,svg|max:10240',
            'video_file' => 'nullable|file|mimes:mp4,webm,mov,ogg|max:51200',
        ]);

        $avatarUrl = $request->avatar_url;
        if ($request->hasFile('avatar_file')) {
            $avatarFile = $request->file('avatar_file');
            $avatarName = time() . '_avatar_' . preg_replace('/[^a-zA-Z0-9._-]/', '', $avatarFile->getClientOriginalName());
            $avatarFile->move(public_path('uploads/testimonials'), $avatarName);
            $avatarUrl = '/uploads/testimonials/' . $avatarName;
        }

        $videoUrl = $request->video_url;
        if ($request->hasFile('video_file')) {
            $videoFile = $request->file('video_file');
            $videoName = time() . '_video_' . preg_replace('/[^a-zA-Z0-9._-]/', '', $videoFile->getClientOriginalName());
            $videoFile->move(public_path('uploads/videos'), $videoName);
            $videoUrl = '/uploads/videos/' . $videoName;
        }

        $isVideo = $request->has('is_video') || !empty($videoUrl) || $request->hasFile('video_file');

        $data = [
            'customer_name' => $request->customer_name,
            'customer_role' => $request->customer_role,
            'locality' => $request->locality,
            'category' => $request->category ?? 'Everyday Tiffin Experience',
            'rating' => (int)($request->rating ?? 5),
            'review_text' => $request->review_text ?? '',
            'avatar_url' => $avatarUrl,
            'video_url' => $videoUrl,
            'video_title' => $request->video_title,
            'is_video' => $isVideo ? 1 : 0,
            'is_verified' => $request->has('is_verified') ? 1 : 0,
            'is_active' => $request->has('is_active') ? 1 : 0,
            'sort_order' => (int)($request->sort_order ?? 0),
            'updated_at' => now(),
        ];

        if ($request->has('id') && $request->id) {
            DB::table('testimonials')->where('id', $request->id)->update($data);
            return back()->with('success', 'Testimonial updated successfully!');
        } else {
            $data['created_at'] = now();
            DB::table('testimonials')->insert($data);
            return back()->with('success', 'Testimonial added successfully!');
        }
    }

    public function deleteTestimonial($id)
    {
        DB::table('testimonials')->where('id', $id)->delete();
        return back()->with('success', 'Testimonial deleted.');
    }

    // ==========================================
    // MEAL PLANS
    // ==========================================
    public function plansView()
    {
        $plans = DB::table('subscription_plans')->orderBy('sort_order', 'asc')->get()->map(function ($p) {
            $p->features = DB::table('subscription_plan_features')->where('plan_id', $p->id)->orderBy('sort_order', 'asc')->get();
            return $p;
        });
        return view('admin.plans', compact('plans'));
    }

    public function savePlan(Request $request)
    {
        $data = [
            'name' => $request->name,
            'tagline' => $request->tagline,
            'badge' => $request->badge,
            'price_per_meal' => $request->price_per_meal,
            'original_price_per_meal' => $request->original_price_per_meal,
            'highlight_label' => $request->highlight_label,
            'is_popular' => $request->has('is_popular') ? 1 : 0,
            'is_active' => $request->has('is_active') ? 1 : 0,
            'sort_order' => (int)$request->sort_order,
            'updated_at' => now(),
        ];

        if ($request->has('id') && $request->id) {
            DB::table('subscription_plans')->where('id', $request->id)->update($data);
            $planId = $request->id;
        } else {
            $data['created_at'] = now();
            $planId = DB::table('subscription_plans')->insertGetId($data);
        }

        // Handle features if provided as lines of text
        if ($request->has('features_list')) {
            DB::table('subscription_plan_features')->where('plan_id', $planId)->delete();
            $lines = explode("\n", str_replace("\r", "", $request->features_list));
            $order = 0;
            foreach ($lines as $line) {
                $trimmed = trim($line);
                if (!empty($trimmed)) {
                    DB::table('subscription_plan_features')->insert([
                        'plan_id' => $planId,
                        'feature_text' => $trimmed,
                        'is_included' => true,
                        'sort_order' => $order++,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }
        }

        return back()->with('success', 'Meal plan saved successfully!');
    }

    public function deletePlan($id)
    {
        DB::table('subscription_plans')->where('id', $id)->delete();
        return back()->with('success', 'Meal plan deleted.');
    }

    // ==========================================
    // FAQS
    // ==========================================
    public function faqsView()
    {
        $faqs = DB::table('faqs')->orderBy('sort_order', 'asc')->get();
        return view('admin.faqs', compact('faqs'));
    }

    public function saveFaq(Request $request)
    {
        $data = [
            'category' => $request->category ?? 'General',
            'question' => $request->question,
            'answer' => $request->answer,
            'is_active' => $request->has('is_active') ? 1 : 0,
            'sort_order' => (int)($request->sort_order ?? 0),
            'updated_at' => now(),
        ];

        if ($request->has('id') && $request->id) {
            DB::table('faqs')->where('id', $request->id)->update($data);
        } else {
            $data['created_at'] = now();
            DB::table('faqs')->insert($data);
        }
        return back()->with('success', 'FAQ saved successfully!');
    }

    public function deleteFaq($id)
    {
        DB::table('faqs')->where('id', $id)->delete();
        return back()->with('success', 'FAQ removed.');
    }

    // ==========================================
    // COMPANY PROFILE
    // ==========================================
    public function profileView()
    {
        $profile = DB::table('company_profiles')->first();
        return view('admin.profile', compact('profile'));
    }

    public function saveProfile(Request $request)
    {
        DB::table('company_profiles')->where('id', 1)->update([
            'company_name' => $request->company_name,
            'tagline' => $request->tagline,
            'phone' => $request->phone,
            'whatsapp' => $request->whatsapp,
            'email' => $request->email,
            'leads_email' => $request->leads_email,
            'address' => $request->address,
            'working_hours' => $request->working_hours,
            'logo_url' => $request->logo_url ?? '/logo.png',
            'facebook_url' => $request->facebook_url,
            'instagram_url' => $request->instagram_url,
            'twitter_url' => $request->twitter_url,
            'updated_at' => now(),
        ]);
        return back()->with('success', 'Company Profile updated successfully!');
    }

    // ==========================================
    // MEDIA
    // ==========================================
    public function mediaView()
    {
        $media = DB::table('media')->orderBy('created_at', 'desc')->get();
        return view('admin.media', compact('media'));
    }

    public function uploadMedia(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '_' . preg_replace('/[^a-zA-Z0-9._-]/', '', $file->getClientOriginalName());
            $file->move(public_path('uploads'), $filename);

            DB::table('media')->insert([
                'filename' => $filename,
                'original_name' => $file->getClientOriginalName(),
                'mime_type' => $file->getClientMimeType() ?? 'image/jpeg',
                'path' => '/uploads/' . $filename,
                'size_bytes' => filesize(public_path('uploads/' . $filename)),
                'alt_text' => $request->alt_text ?? '',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            return back()->with('success', 'Media uploaded successfully!');
        }
        return back()->withErrors(['file' => 'Please select a valid file to upload.']);
    }

    public function deleteMedia($id)
    {
        $item = DB::table('media')->where('id', $id)->first();
        if ($item) {
            $filePath = public_path('uploads/' . $item->filename);
            if (file_exists($filePath)) {
                @unlink($filePath);
            }
            DB::table('media')->where('id', $id)->delete();
        }
        return back()->with('success', 'Media asset deleted.');
    }
}
