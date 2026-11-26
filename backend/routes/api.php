<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PublicApiController;
use App\Http\Controllers\Api\AdminAuthController;
use App\Http\Controllers\Api\AdminDashboardController;
use App\Http\Controllers\Api\AdminLeadController;
use App\Http\Controllers\Api\AdminWebsiteController;
use App\Http\Controllers\Api\AdminPlanController;
use App\Http\Controllers\Api\AdminFaqController;
use App\Http\Controllers\Api\AdminCompanyProfileController;
use App\Http\Controllers\Api\AdminMediaController;

/*
|--------------------------------------------------------------------------
| Versioned REST API Endpoints (/api/v1/)
|--------------------------------------------------------------------------
*/
Route::prefix('v1')->group(function () {
    // Public Endpoints
    Route::get('/home', [PublicApiController::class, 'getHomeData']);
    Route::get('/company-profile', [PublicApiController::class, 'getCompanyProfile']);
    Route::get('/meal-plans', [PublicApiController::class, 'getMealPlans']);
    Route::get('/faqs', [PublicApiController::class, 'getFaqs']);
    Route::get('/testimonials', [PublicApiController::class, 'getTestimonials']);
    Route::get('/delivery-areas', [PublicApiController::class, 'getDeliveryAreas']);
    Route::post('/leads', [PublicApiController::class, 'submitLead']);
});

/*
|--------------------------------------------------------------------------
| Legacy / Direct Public REST API Endpoints
|--------------------------------------------------------------------------
*/
Route::prefix('public')->group(function () {
    Route::get('/home', [PublicApiController::class, 'getHomeData']);
    Route::get('/company-profile', [PublicApiController::class, 'getCompanyProfile']);
    Route::get('/meal-plans', [PublicApiController::class, 'getMealPlans']);
    Route::get('/faqs', [PublicApiController::class, 'getFaqs']);
    Route::get('/testimonials', [PublicApiController::class, 'getTestimonials']);
    Route::get('/delivery-areas', [PublicApiController::class, 'getDeliveryAreas']);
    Route::post('/leads/submit', [PublicApiController::class, 'submitLead']);
});

/*
|--------------------------------------------------------------------------
| Admin Authentication API Endpoints
|--------------------------------------------------------------------------
*/
Route::prefix('admin')->group(function () {
    Route::post('/login', [AdminAuthController::class, 'login']);
    
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', [AdminAuthController::class, 'logout']);
        Route::get('/me', [AdminAuthController::class, 'me']);

        // Dashboard
        Route::get('/dashboard', [AdminDashboardController::class, 'index']);
        Route::get('/dashboard/analytics', [AdminDashboardController::class, 'analytics']);

        // Leads Management
        Route::get('/leads', [AdminLeadController::class, 'index']);
        Route::post('/leads', [AdminLeadController::class, 'store']);
        Route::get('/leads/{id}', [AdminLeadController::class, 'show']);
        Route::put('/leads/{id}', [AdminLeadController::class, 'update']);
        Route::delete('/leads/{id}', [AdminLeadController::class, 'destroy']);
        Route::patch('/leads/{id}/status', [AdminLeadController::class, 'updateStatus']);

        // Website / Homepage Content CMS
        Route::get('/website/home', [AdminWebsiteController::class, 'getHomeContent']);
        Route::put('/website/home', [AdminWebsiteController::class, 'updateHomeContent']);
        Route::get('/website/sections', [AdminWebsiteController::class, 'getSections']);
        Route::put('/website/sections/{id}', [AdminWebsiteController::class, 'updateSection']);
        Route::post('/website/sections/{id}/publish', [AdminWebsiteController::class, 'publishSection']);

        // Meal Subscription Plans
        Route::get('/website/plans', [AdminPlanController::class, 'index']);
        Route::post('/website/plans', [AdminPlanController::class, 'store']);
        Route::put('/website/plans/{id}', [AdminPlanController::class, 'update']);
        Route::delete('/website/plans/{id}', [AdminPlanController::class, 'destroy']);

        // FAQs
        Route::get('/website/faqs', [AdminFaqController::class, 'index']);
        Route::post('/website/faqs', [AdminFaqController::class, 'store']);
        Route::put('/website/faqs/{id}', [AdminFaqController::class, 'update']);
        Route::delete('/website/faqs/{id}', [AdminFaqController::class, 'destroy']);

        // Company Profile
        Route::get('/company-profile', [AdminCompanyProfileController::class, 'show']);
        Route::put('/company-profile', [AdminCompanyProfileController::class, 'update']);

        // Media Library
        Route::get('/media', [AdminMediaController::class, 'index']);
        Route::post('/media', [AdminMediaController::class, 'store']);
        Route::delete('/media/{id}', [AdminMediaController::class, 'destroy']);
    });
});
