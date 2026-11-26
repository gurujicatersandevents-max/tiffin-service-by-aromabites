<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAromabitesCmsTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // 1. users
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('role')->default('admin'); // admin, editor
            $table->rememberToken();
            $table->timestamps();
        });

        // 2. leads
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('contact_no', 30);
            $table->string('email')->nullable();
            $table->text('street_address')->nullable();
            $table->string('city', 100)->default('East Delhi');
            $table->string('district', 100)->default('East Delhi');
            $table->string('state', 100)->default('Delhi');
            $table->string('country', 100)->default('India');
            $table->string('package_selection', 100)->default('Bespoke Plan');
            $table->string('tasting_slot', 100)->nullable();
            $table->text('description_allergies')->nullable();
            $table->enum('status', ['new', 'contacted', 'trial_scheduled', 'converted', 'cancelled'])->default('new');
            $table->timestamps();
        });

        // 3. lead_notes
        Schema::create('lead_notes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lead_id')->constrained('leads')->onDelete('cascade');
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('set null');
            $table->text('note');
            $table->timestamps();
        });

        // 4. lead_activities
        Schema::create('lead_activities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lead_id')->constrained('leads')->onDelete('cascade');
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('set null');
            $table->string('activity_type', 50); // status_change, call, email, note
            $table->text('details')->nullable();
            $table->timestamps();
        });

        // 5. homepage_sections
        Schema::create('homepage_sections', function (Blueprint $table) {
            $table->id();
            $table->string('section_key', 50)->unique(); // hero, locations, about, why_switch, trust_stats, who_we_serve, struggles, plans, reviews, faqs, final_cta
            $table->string('section_name', 100);
            $table->integer('display_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });

        // 6. homepage_content
        Schema::create('homepage_content', function (Blueprint $table) {
            $table->id();
            $table->foreignId('section_id')->constrained('homepage_sections')->onDelete('cascade');
            $table->string('field_key', 100); // eyebrow, heading, subheading, description, cta_text, cta_link, etc.
            $table->text('field_value')->nullable();
            $table->enum('state', ['draft', 'published'])->default('published');
            $table->timestamps();
        });

        // 7. homepage_cards
        Schema::create('homepage_cards', function (Blueprint $table) {
            $table->id();
            $table->foreignId('section_id')->constrained('homepage_sections')->onDelete('cascade');
            $table->string('card_type', 50); // quality_feature, lifestyle_target, struggle_point, difference_point
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('icon', 100)->nullable();
            $table->string('badge', 50)->nullable();
            $table->string('image_url')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 8. delivery_areas
        Schema::create('delivery_areas', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('zone', 100)->default('East Delhi'); // East Delhi, Ghaziabad, Noida, Gurugram
            $table->string('detail')->nullable(); // Metro Hub, Retail, Commercial, etc.
            $table->string('icon', 50)->default('📍');
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 9. subscription_plans
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100); // Silver, Gold, Platinum
            $table->string('tagline')->nullable();
            $table->string('badge', 50)->nullable(); // Most Popular, etc.
            $table->decimal('price_per_meal', 8, 2);
            $table->decimal('original_price_per_meal', 8, 2)->nullable();
            $table->string('highlight_label', 100)->nullable(); // Best for Daily Essentials
            $table->boolean('is_popular')->default(false);
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 10. subscription_plan_features
        Schema::create('subscription_plan_features', function (Blueprint $table) {
            $table->id();
            $table->foreignId('plan_id')->constrained('subscription_plans')->onDelete('cascade');
            $table->string('feature_text');
            $table->boolean('is_included')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 11. testimonial_categories
        Schema::create('testimonial_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->unique();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 12. testimonials
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('customer_name', 100);
            $table->string('customer_role', 100)->nullable();
            $table->string('locality', 100)->nullable();
            $table->string('category', 100)->default('Everyday Tiffin Experience');
            $table->integer('rating')->default(5);
            $table->text('review_text');
            $table->string('avatar_url')->nullable();
            $table->boolean('is_verified')->default(true);
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 13. faqs
        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->string('category', 50)->default('General'); // General, Delivery, Meal Plans, Quality, Billing
            $table->text('question');
            $table->text('answer');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 14. navigation_items
        Schema::create('navigation_items', function (Blueprint $table) {
            $table->id();
            $table->string('label', 100);
            $table->string('url');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 15. footer_links
        Schema::create('footer_links', function (Blueprint $table) {
            $table->id();
            $table->string('column_name', 50)->default('quick_links'); // quick_links, legal, contact
            $table->string('label', 100);
            $table->string('url');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 16. media
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('filename');
            $table->string('original_name');
            $table->string('mime_type', 100);
            $table->string('path');
            $table->unsignedBigInteger('size_bytes')->default(0);
            $table->string('alt_text')->nullable();
            $table->timestamps();
        });

        // 17. company_profiles
        Schema::create('company_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('company_name')->default('Aroma Bites');
            $table->string('tagline')->default('Tiffin Services By Aroma Bites');
            $table->string('phone', 50)->default('+91 9958585172');
            $table->string('whatsapp', 50)->default('+91 9958585172');
            $table->string('email', 100)->default('Support@aromabites.in');
            $table->string('leads_email', 100)->default('leads@aromabites.in');
            $table->text('address')->nullable();
            $table->string('working_hours', 100)->default('Monday to Saturday: 6:00 AM – 6:00 PM');
            $table->string('logo_url')->default('/logo.png');
            $table->string('facebook_url')->nullable();
            $table->string('instagram_url')->nullable();
            $table->string('twitter_url')->nullable();
            $table->timestamps();
        });

        // 18. seo_settings
        Schema::create('seo_settings', function (Blueprint $table) {
            $table->id();
            $table->string('page_route', 100)->default('home');
            $table->string('meta_title');
            $table->text('meta_description')->nullable();
            $table->text('meta_keywords')->nullable();
            $table->string('og_image')->nullable();
            $table->timestamps();
        });

        // 19. activity_logs
        Schema::create('activity_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('set null');
            $table->string('action', 100);
            $table->string('module', 50); // leads, website, plans, faqs, auth
            $table->text('description')->nullable();
            $table->string('ip_address', 50)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activity_logs');
        Schema::dropIfExists('seo_settings');
        Schema::dropIfExists('company_profiles');
        Schema::dropIfExists('media');
        Schema::dropIfExists('footer_links');
        Schema::dropIfExists('navigation_items');
        Schema::dropIfExists('faqs');
        Schema::dropIfExists('testimonials');
        Schema::dropIfExists('testimonial_categories');
        Schema::dropIfExists('subscription_plan_features');
        Schema::dropIfExists('subscription_plans');
        Schema::dropIfExists('delivery_areas');
        Schema::dropIfExists('homepage_cards');
        Schema::dropIfExists('homepage_content');
        Schema::dropIfExists('homepage_sections');
        Schema::dropIfExists('lead_activities');
        Schema::dropIfExists('lead_notes');
        Schema::dropIfExists('leads');
        Schema::dropIfExists('users');
    }
}
