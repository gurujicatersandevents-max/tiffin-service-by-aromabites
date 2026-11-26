<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PublicApiController extends Controller
{
    /**
     * Complete homepage published data bundle
     */
    public function getHomeData()
    {
        $sections = DB::table('homepage_sections')
            ->where('is_active', true)
            ->where('is_published', true)
            ->orderBy('display_order', 'asc')
            ->get();

        $content = DB::table('homepage_content')
            ->where('state', 'published')
            ->get()
            ->groupBy('section_id');

        $cards = DB::table('homepage_cards')
            ->where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->groupBy('section_id');

        $plans = DB::table('subscription_plans')
            ->where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($plan) {
                $plan->features = DB::table('subscription_plan_features')
                    ->where('plan_id', $plan->id)
                    ->where('is_included', true)
                    ->orderBy('sort_order', 'asc')
                    ->pluck('feature_text');
                return $plan;
            });

        $deliveryAreas = DB::table('delivery_areas')
            ->where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        $faqs = DB::table('faqs')
            ->where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        $testimonials = DB::table('testimonials')
            ->where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        $seo = DB::table('seo_settings')
            ->where('page_route', 'home')
            ->first();

        $company = DB::table('company_profiles')->first();

        return response()->json([
            'status' => 'success',
            'data' => [
                'company' => $company,
                'seo' => $seo,
                'sections' => $sections,
                'section_content' => $content,
                'section_cards' => $cards,
                'meal_plans' => $plans,
                'delivery_areas' => $deliveryAreas,
                'testimonials' => $testimonials,
                'faqs' => $faqs,
            ],
        ]);
    }

    public function getCompanyProfile()
    {
        $company = DB::table('company_profiles')->first();
        return response()->json(['status' => 'success', 'data' => $company]);
    }

    public function getMealPlans()
    {
        $plans = DB::table('subscription_plans')
            ->where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($plan) {
                $plan->features = DB::table('subscription_plan_features')
                    ->where('plan_id', $plan->id)
                    ->where('is_included', true)
                    ->orderBy('sort_order', 'asc')
                    ->pluck('feature_text');
                return $plan;
            });

        return response()->json(['status' => 'success', 'data' => $plans]);
    }

    public function getFaqs()
    {
        $faqs = DB::table('faqs')
            ->where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json(['status' => 'success', 'data' => $faqs]);
    }

    public function getTestimonials()
    {
        $reviews = DB::table('testimonials')
            ->where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json(['status' => 'success', 'data' => $reviews]);
    }

    public function getDeliveryAreas()
    {
        $areas = DB::table('delivery_areas')
            ->where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json(['status' => 'success', 'data' => $areas]);
    }

    public function submitLead(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:150',
            'contactNo' => 'required|string|max:30',
            'email' => 'nullable|email|max:150',
            'streetAddress' => 'nullable|string',
            'packageSelection' => 'nullable|string|max:100',
            'tastingSlot' => 'nullable|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $leadId = DB::table('leads')->insertGetId([
            'name' => $request->input('name'),
            'contact_no' => $request->input('contactNo'),
            'email' => $request->input('email'),
            'street_address' => $request->input('streetAddress'),
            'city' => $request->input('city', 'East Delhi'),
            'district' => $request->input('district', 'East Delhi'),
            'state' => $request->input('state', 'Delhi'),
            'country' => $request->input('country', 'India'),
            'package_selection' => $request->input('packageSelection', 'Bespoke Plan'),
            'tasting_slot' => $request->input('tastingSlot'),
            'description_allergies' => $request->input('descriptionAllergies'),
            'status' => 'new',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Lead received successfully! Our team will contact you shortly.',
            'lead_id' => $leadId,
        ]);
    }
}
