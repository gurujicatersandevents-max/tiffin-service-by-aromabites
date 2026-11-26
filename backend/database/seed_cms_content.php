<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\DB;

// 1. Seed SEO settings if empty
if (DB::table("seo_settings")->count() == 0) {
    DB::table("seo_settings")->insert([
        [
            "page_route" => "home",
            "meta_title" => "Aroma Bites | Fresh, Healthy & Homestyle Daily Tiffin Subscriptions in Delhi NCR",
            "meta_description" => "Experience wholesome, hygienic daily lunch and dinner tiffin services delivered fresh across Delhi NCR. Flexible subscription plans starting at ₹119/meal.",
            "meta_keywords" => "tiffin service delhi, daily meal delivery, healthy tiffin east delhi, aromabites, ghar jaisa khana, office lunch subscription",
            "og_image" => "/logo.png",
            "created_at" => now(),
            "updated_at" => now(),
        ],
        [
            "page_route" => "contact",
            "meta_title" => "Contact Us - Aroma Bites Tiffin Service",
            "meta_description" => "Get in touch with Aroma Bites for daily tiffin meal delivery inquiries across Delhi NCR.",
            "meta_keywords" => "contact aromabites, tiffin service helpline, tiffin near me",
            "og_image" => "/logo.png",
            "created_at" => now(),
            "updated_at" => now(),
        ]
    ]);
    echo "SEO seeded successfully.\n";
}

// 2. Seed Testimonials if empty
if (DB::table("testimonials")->count() == 0) {
    $reviews = [
        [
            "customer_name" => "Neha Sharma",
            "customer_role" => "Software Engineer",
            "locality" => "Dilshad Garden, East Delhi",
            "category" => "Everyday Tiffin Experience",
            "rating" => 5,
            "review_text" => "Aroma Bites has made my daily office routine hassle-free. The food is light, never overly oily, and tastes just like home. Love the prompt delivery every single day!",
            "avatar_url" => "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
            "is_verified" => 1,
            "is_active" => 1,
            "sort_order" => 1,
            "created_at" => now(),
            "updated_at" => now(),
        ],
        [
            "customer_name" => "Rohan Verma",
            "customer_role" => "Product Manager",
            "locality" => "Shalimar Garden, Ghaziabad",
            "category" => "Everyday Tiffin Experience",
            "rating" => 5,
            "review_text" => "Switched from restaurant ordering to Aroma Bites 3 months ago. Huge difference in energy levels and health. The packaging is spill-proof and meals always arrive piping hot.",
            "avatar_url" => "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
            "is_verified" => 1,
            "is_active" => 1,
            "sort_order" => 2,
            "created_at" => now(),
            "updated_at" => now(),
        ],
        [
            "customer_name" => "Pooja Malhotra",
            "customer_role" => "Banking Consultant",
            "locality" => "Vivek Vihar, East Delhi",
            "category" => "Everyday Tiffin Experience",
            "rating" => 5,
            "review_text" => "Clean, nutritious meals with good variety through the week. The flexibility to pause when traveling makes it the most convenient tiffin service in Delhi NCR.",
            "avatar_url" => "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
            "is_verified" => 1,
            "is_active" => 1,
            "sort_order" => 3,
            "created_at" => now(),
            "updated_at" => now(),
        ]
    ];
    DB::table("testimonials")->insert($reviews);
    echo "Testimonials seeded successfully.\n";
}

// 3. Ensure all section contents exist
$sectionContents = [
    // 2. Locations
    [
        "section_id" => 2,
        "field_key" => "badge",
        "field_value" => "TIFFIN & MEAL DELIVERY AREAS",
    ],
    [
        "section_id" => 2,
        "field_key" => "heading_normal",
        "field_value" => "ACROSS",
    ],
    [
        "section_id" => 2,
        "field_key" => "heading_highlight",
        "field_value" => "DELHI NCR",
    ],
    [
        "section_id" => 2,
        "field_key" => "description",
        "field_value" => "Looking for fresh, healthy and personalised tiffin services near you? Explore our delivery locations across East Delhi, Ghaziabad, Noida and Gurugram. Find your area and discover convenient daily meal subscriptions delivered to your doorstep.",
    ],
    [
        "section_id" => 2,
        "field_key" => "notice_text",
        "field_value" => "Don't see your area listed? We are rapidly expanding our delivery fleet across Delhi NCR!",
    ],
    [
        "section_id" => 2,
        "field_key" => "cta_btn_text",
        "field_value" => "Check My Location Availability",
    ],

    // 6. Who we serve
    [
        "section_id" => 6,
        "field_key" => "badge",
        "field_value" => "DESIGNED FOR YOUR ROUTINE",
    ],
    [
        "section_id" => 6,
        "field_key" => "heading",
        "field_value" => "Who We Serve",
    ],
    [
        "section_id" => 6,
        "field_key" => "description",
        "field_value" => "Wholesome, home-style tiffin solutions crafted for professionals, students, families and seniors.",
    ],

    // 7. Struggles vs Aroma Bites
    [
        "section_id" => 7,
        "field_key" => "badge",
        "field_value" => "THE BETTER WAY",
    ],
    [
        "section_id" => 7,
        "field_key" => "heading",
        "field_value" => "The Everyday Food Struggle vs Aroma Bites",
    ],
    [
        "section_id" => 7,
        "field_key" => "subheading",
        "field_value" => "See how switching to planned home-style meals elevates your daily health and peace of mind.",
    ],

    // 8. Plans section
    [
        "section_id" => 8,
        "field_key" => "badge",
        "field_value" => "FLEXIBLE MEAL SUBSCRIPTIONS",
    ],
    [
        "section_id" => 8,
        "field_key" => "heading",
        "field_value" => "Choose Your Ideal Meal Plan",
    ],
    [
        "section_id" => 8,
        "field_key" => "description",
        "field_value" => "Wholesome, balanced and freshly prepared homestyle meals with zero preservatives. Pause or modify anytime.",
    ],

    // 9. Reviews section
    [
        "section_id" => 9,
        "field_key" => "badge",
        "field_value" => "LOVED BY CUSTOMERS",
    ],
    [
        "section_id" => 9,
        "field_key" => "heading",
        "field_value" => "Real Stories, Real Flavours",
    ],
    [
        "section_id" => 9,
        "field_key" => "description",
        "field_value" => "Read what working professionals, students and families across Delhi NCR say about our daily tiffins.",
    ],

    // 10. FAQs section
    [
        "section_id" => 10,
        "field_key" => "badge",
        "field_value" => "GOT QUESTIONS?",
    ],
    [
        "section_id" => 10,
        "field_key" => "heading",
        "field_value" => "Frequently Asked Questions",
    ],
    [
        "section_id" => 10,
        "field_key" => "description",
        "field_value" => "Everything you need to know about our daily meal delivery, ingredients, subscription management and packaging.",
    ],
];

foreach ($sectionContents as $sc) {
    DB::table("homepage_content")->updateOrInsert(
        ["section_id" => $sc["section_id"], "field_key" => $sc["field_key"]],
        ["field_value" => $sc["field_value"], "state" => "published", "updated_at" => now()]
    );
}

// 4. Update delivery areas if needed: ensure 15 areas (Old Seemapuri removed)
DB::table("delivery_areas")->where("name", "like", "%Old Seemapuri%")->delete();

echo "Database successfully enriched with SEO, Content and Testimonials.\n";
