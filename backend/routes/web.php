<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminViewController;

/*
|--------------------------------------------------------------------------
| Web Routes for Blade CMS Admin Panel (/admin)
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return redirect('/admin');
});

Route::prefix('admin')->group(function () {
    // Auth
    Route::get('/login', [AdminViewController::class, 'loginView'])->name('admin.login');
    Route::post('/login', [AdminViewController::class, 'handleLogin'])->name('admin.login.post');
    Route::post('/logout', [AdminViewController::class, 'handleLogout'])->name('admin.logout');

    // Protected Admin Panel Routes (Requires Auth + 15-min Inactivity Timeout)
    Route::middleware(['web', 'admin.auth'])->group(function () {
        Route::get('/', [AdminViewController::class, 'dashboardView'])->name('admin.dashboard');
        Route::get('/dashboard', [AdminViewController::class, 'dashboardView']);
        
        // Leads
        Route::get('/leads', [AdminViewController::class, 'leadsView'])->name('admin.leads');
        Route::post('/leads/status', [AdminViewController::class, 'updateLeadStatus'])->name('admin.leads.status');
        
        // Website CMS (Sections & Full Page Content)
        Route::get('/website', [AdminViewController::class, 'websiteView'])->name('admin.website');
        Route::post('/website/sections/{id}', [AdminViewController::class, 'saveSection'])->name('admin.website.section.save');
        Route::post('/website/content/{id}', [AdminViewController::class, 'saveSectionContent'])->name('admin.website.content.save');
        Route::post('/website/content-field/delete', [AdminViewController::class, 'deleteContentField'])->name('admin.website.content.delete');
        Route::post('/website/content-field/add', [AdminViewController::class, 'addContentField'])->name('admin.website.content.add');

        // SEO Manager
        Route::get('/seo', [AdminViewController::class, 'seoView'])->name('admin.seo');
        Route::post('/seo/save', [AdminViewController::class, 'saveSeo'])->name('admin.seo.save');
        Route::delete('/seo/{id}', [AdminViewController::class, 'deleteSeo'])->name('admin.seo.delete');

        // Delivery Areas
        Route::get('/delivery-areas', [AdminViewController::class, 'deliveryAreasView'])->name('admin.delivery-areas');
        Route::post('/delivery-areas/save', [AdminViewController::class, 'saveDeliveryArea'])->name('admin.delivery-areas.save');
        Route::delete('/delivery-areas/{id}', [AdminViewController::class, 'deleteDeliveryArea'])->name('admin.delivery-areas.delete');

        // Testimonials
        Route::get('/testimonials', [AdminViewController::class, 'testimonialsView'])->name('admin.testimonials');
        Route::post('/testimonials/save', [AdminViewController::class, 'saveTestimonial'])->name('admin.testimonials.save');
        Route::delete('/testimonials/{id}', [AdminViewController::class, 'deleteTestimonial'])->name('admin.testimonials.delete');

        // Plans
        Route::get('/plans', [AdminViewController::class, 'plansView'])->name('admin.plans');
        Route::post('/plans', [AdminViewController::class, 'savePlan'])->name('admin.plans.save');
        Route::delete('/plans/{id}', [AdminViewController::class, 'deletePlan'])->name('admin.plans.delete');
        
        // FAQs
        Route::get('/faqs', [AdminViewController::class, 'faqsView'])->name('admin.faqs');
        Route::post('/faqs', [AdminViewController::class, 'saveFaq'])->name('admin.faqs.save');
        Route::delete('/faqs/{id}', [AdminViewController::class, 'deleteFaq'])->name('admin.faqs.delete');
        
        // Company Profile
        Route::get('/company-profile', [AdminViewController::class, 'profileView'])->name('admin.profile');
        Route::post('/company-profile', [AdminViewController::class, 'saveProfile'])->name('admin.profile.save');
        
        // Media
        Route::get('/media', [AdminViewController::class, 'mediaView'])->name('admin.media');
        Route::post('/media/upload', [AdminViewController::class, 'uploadMedia'])->name('admin.media.upload');
        Route::delete('/media/{id}', [AdminViewController::class, 'deleteMedia'])->name('admin.media.delete');
    });
});
