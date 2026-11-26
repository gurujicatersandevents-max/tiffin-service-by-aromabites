<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // 1. Admin User
        DB::table('users')->insertOrIgnore([
            'id' => 1,
            'name' => 'AromaBites Admin',
            'email' => 'admin@aromabites.in',
            'password' => Hash::make('Admin@AromaBites2024'),
            'role' => 'admin',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // 2. Company Profile
        DB::table('company_profiles')->insertOrIgnore([
            'id' => 1,
            'company_name' => 'Aroma Bites',
            'tagline' => 'Fresh Meals, Happy Days - Tiffin Services By Aroma Bites',
            'phone' => '+91 9958585172',
            'whatsapp' => '+91 9958585172',
            'email' => 'Support@aromabites.in',
            'leads_email' => 'leads@aromabites.in',
            'address' => 'Dilshad Garden, Delhi – 110095, India',
            'working_hours' => 'Monday to Saturday: 6:00 AM – 6:00 PM',
            'logo_url' => '/logo.png',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // 3. Homepage Sections
        $sections = [
            ['id' => 1, 'section_key' => 'hero', 'section_name' => 'Hero Section', 'display_order' => 1],
            ['id' => 2, 'section_key' => 'locations', 'section_name' => 'Delivery Locations', 'display_order' => 2],
            ['id' => 3, 'section_key' => 'about', 'section_name' => 'About Aroma Bites', 'display_order' => 3],
            ['id' => 4, 'section_key' => 'why_switch', 'section_name' => 'Why Switch', 'display_order' => 4],
            ['id' => 5, 'section_key' => 'trust_stats', 'section_name' => 'Achievements & Trust Stats', 'display_order' => 5],
            ['id' => 6, 'section_key' => 'who_we_serve', 'section_name' => 'Target Audience (Who We Serve)', 'display_order' => 6],
            ['id' => 7, 'section_key' => 'struggles', 'section_name' => 'Comparison (Food Struggles vs Aroma Bites)', 'display_order' => 7],
            ['id' => 8, 'section_key' => 'plans', 'section_name' => 'Meal Subscription Plans', 'display_order' => 8],
            ['id' => 9, 'section_key' => 'reviews', 'section_name' => 'Customer Reviews', 'display_order' => 9],
            ['id' => 10, 'section_key' => 'faqs', 'section_name' => 'FAQs', 'display_order' => 10],
            ['id' => 11, 'section_key' => 'final_cta', 'section_name' => 'Final Call To Action', 'display_order' => 11],
        ];

        foreach ($sections as $sec) {
            DB::table('homepage_sections')->insertOrIgnore(array_merge($sec, [
                'is_active' => true,
                'is_published' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }

        // 4. Delivery Areas
        $areas = [
            ['name' => 'Dilshad Garden', 'detail' => 'Primary Kitchen & Hub', 'icon' => '🏡'],
            ['name' => 'Dilshad Colony', 'detail' => 'Full Service Coverage', 'icon' => '📍'],
            ['name' => 'New Seemapuri', 'detail' => 'Everyday Delivery Slot', 'icon' => '🚚'],
            ['name' => 'Shalimar Garden', 'detail' => 'Ext 1 & 2 Ghaziabad', 'icon' => '🏢'],
            ['name' => 'Vivek Vihar', 'detail' => 'Phase 1 & Phase 2', 'icon' => '🌿'],
            ['name' => 'Surajmal Vihar', 'detail' => 'Residential Delivery', 'icon' => '🛵'],
            ['name' => 'Jhilmil Colony', 'detail' => 'Industrial & Res.', 'icon' => '⚡'],
            ['name' => 'Anand Vihar', 'detail' => 'Transport Hub Zone', 'icon' => '🚆'],
            ['name' => 'Preet Vihar', 'detail' => 'Commercial & PGs', 'icon' => '💼'],
            ['name' => 'Mayur Vihar', 'detail' => 'Phase 1, 2 & 3', 'icon' => '🌆'],
            ['name' => 'Indirapuram', 'detail' => 'Ghaziabad Main Hub', 'icon' => '🏙️'],
            ['name' => 'Vaishali', 'detail' => 'Sectors 1-9 Delivery', 'icon' => '🚇'],
            ['name' => 'Vasundhara', 'detail' => 'All Sectors Active', 'icon' => '🌳'],
            ['name' => 'Kaushambi', 'detail' => 'Metro Border Hub', 'icon' => '🚊'],
            ['name' => 'Shahdara', 'detail' => 'Central East Hub', 'icon' => '🏛️'],
            ['name' => 'Krishna Nagar', 'detail' => 'Retail & Residential', 'icon' => '🛍️'],
        ];

        foreach ($areas as $idx => $area) {
            DB::table('delivery_areas')->insertOrIgnore(array_merge($area, [
                'zone' => 'Delhi NCR',
                'sort_order' => $idx + 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }

        // 5. Subscription Plans & Features
        $plans = [
            [
                'id' => 1,
                'name' => 'Silver Plan',
                'tagline' => 'Essential Daily Nutrition',
                'badge' => 'Essential',
                'price_per_meal' => 199.00,
                'original_price_per_meal' => 249.00,
                'highlight_label' => 'Best for Daily Lunch / Dinner',
                'is_popular' => false,
                'sort_order' => 1,
                'features' => [
                    '3 Fresh Rotis / Parathas (100% Whole Wheat)',
                    '1 Wholesome Dal or Legume Curry',
                    '1 Fresh Seasonal Sabzi',
                    'Steamed Jeera Rice',
                    'Fresh Salad & Pickle Pack',
                    'Zero Added Preservatives',
                    'On-Time Insulated Delivery',
                ],
            ],
            [
                'id' => 2,
                'name' => 'Gold Plan',
                'tagline' => 'Most Popular Healthy Choice',
                'badge' => 'Most Popular',
                'price_per_meal' => 249.00,
                'original_price_per_meal' => 299.00,
                'highlight_label' => 'Complete Balanced Ghar-Jaisa Meal',
                'is_popular' => true,
                'sort_order' => 2,
                'features' => [
                    '4 Desi Ghee Phulkas / Multigrain Rotis',
                    'Paneer Curry or High-Protein Soya / Dal Makhani',
                    'Special Seasonal Vegetable Sabzi',
                    'Premium Basmati Jeera / Veg Pulao',
                    'Fresh Mint Raita or Sweet Curd',
                    'Daily Healthy Sweet / Gulab Jamun (Alt Days)',
                    'Priority Dispatch & Temperature-Retaining Packaging',
                ],
            ],
            [
                'id' => 3,
                'name' => 'Platinum Plan',
                'tagline' => 'Macro-Calculated & Gourmet',
                'badge' => 'Gourmet / Fitness',
                'price_per_meal' => 279.00,
                'original_price_per_meal' => 349.00,
                'highlight_label' => 'High-Protein & Tailored Calories',
                'is_popular' => false,
                'sort_order' => 3,
                'features' => [
                    'Chef-Curated High Protein Menu (30g+ Protein)',
                    'Exotic Vegetables / Grilled Paneer / Tofu',
                    'Choice of Brown Rice / Quinoa / Multigrain Rotis',
                    'Fresh Green Detox Salad & Sprout Bowl',
                    'Nutrient-Dense Soup or Premium Raita',
                    'Customizable Macros (Low Carb / High Protein)',
                    'Dedicated Dietician Support & Priority Delivery',
                ],
            ],
        ];

        foreach ($plans as $p) {
            $features = $p['features'];
            unset($p['features']);
            DB::table('subscription_plans')->insertOrIgnore(array_merge($p, [
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]));

            foreach ($features as $fidx => $feat) {
                DB::table('subscription_plan_features')->insertOrIgnore([
                    'plan_id' => $p['id'],
                    'feature_text' => $feat,
                    'is_included' => true,
                    'sort_order' => $fidx + 1,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

        // 6. FAQs (All 14 supplied FAQs)
        $faqs = [
            [
                'category' => 'General',
                'question' => 'What is Aroma Bites?',
                'answer' => 'Aroma Bites is a daily tiffin delivery and personalised meal subscription service offering freshly prepared, chef-crafted meals. We provide convenient breakfast, lunch and dinner options designed around your taste preferences, lifestyle and nutritional goals.',
            ],
            [
                'category' => 'Quality',
                'question' => 'Why should I choose Aroma Bites over regular tiffin services?',
                'answer' => 'Unlike conventional tiffin services, Aroma Bites focuses on fresh daily cooking, quality ingredients, flexible subscriptions and personalized meal options. We use Soyabean Refined Oil, Desi Ghee, freshly prepared food and carefully planned meal combinations to make everyday eating more convenient and enjoyable.',
            ],
            [
                'category' => 'Meal Plans',
                'question' => 'How does the Aroma Bites meal subscription work?',
                'answer' => 'Getting started is simple. Choose your preferred meal slot, select a suitable subscription plan, customise your food preferences and complete your subscription. Your meals will then be prepared and delivered according to your selected schedule and delivery availability.',
            ],
            [
                'category' => 'Delivery',
                'question' => 'Does Aroma Bites provide home delivery?',
                'answer' => 'Yes! Aroma Bites provides freshly prepared tiffin and meal delivery to customers in its serviceable locations across East Delhi and selected nearby areas of Ghaziabad. Delivery availability depends on your exact location.',
            ],
            [
                'category' => 'Ordering',
                'question' => 'How can I place an order or start a meal subscription?',
                'answer' => 'Visit the Aroma Bites website, select Create My Personal Plan, choose your preferred meal slot and subscription package, enter your delivery details and complete the booking process. You can also contact our customer care via WhatsApp at +91 9958585172.',
            ],
            [
                'category' => 'Customization',
                'question' => 'Can I customize my meals according to my taste or dietary preferences?',
                'answer' => 'Yes, our Bespoke and Macro plans allow personalized selections, spice adjustments, and ingredient preferences suited to your dietary routine.',
            ],
            [
                'category' => 'Meal Plans',
                'question' => 'What meal options does Aroma Bites offer?',
                'answer' => 'We offer Breakfast, Lunch and Dinner subscriptions across Silver, Gold, and Platinum meal plans, with rotating vegetarian recipes every week.',
            ],
            [
                'category' => 'Quality',
                'question' => 'Are meals prepared fresh every day?',
                'answer' => 'Absolutely. Meals are prepared fresh every morning and evening in our certified hygienic kitchen right before dispatch. We never serve leftover or chilled meals.',
            ],
            [
                'category' => 'Subscription',
                'question' => 'Can I pause or cancel my subscription?',
                'answer' => 'Yes, you can pause, resume, or cancel your tiffin subscription anytime through WhatsApp support or customer support with a short advance notice.',
            ],
            [
                'category' => 'Delivery',
                'question' => 'What are the delivery timings?',
                'answer' => 'Lunch is dispatched between 11:30 AM and 1:30 PM, and Dinner between 7:00 PM and 9:00 PM to ensure warm and on-time arrival.',
            ],
            [
                'category' => 'Billing',
                'question' => 'What payment methods are accepted?',
                'answer' => 'We accept all major UPI apps (Google Pay, PhonePe, Paytm), Net Banking, Debit/Credit Cards, and Bank Transfers.',
            ],
            [
                'category' => 'Quality',
                'question' => 'What type of oils and ingredients are used?',
                'answer' => 'We exclusively use quality Refined Soyabean Oil and pure Desi Ghee. No cheap adulterated oils or synthetic food colors are ever used.',
            ],
            [
                'category' => 'Corporate',
                'question' => 'Do you cater to corporate offices and bulk orders?',
                'answer' => 'Yes, we provide corporate lunchbox arrangements and group subscriptions for workplaces across East Delhi and Ghaziabad.',
            ],
            [
                'category' => 'General',
                'question' => 'How do I contact customer support?',
                'answer' => 'You can reach us at Support@aromabites.in or call / WhatsApp us at +91 9958585172 from Monday to Saturday, 6:00 AM to 6:00 PM.',
            ],
        ];

        foreach ($faqs as $fidx => $faq) {
            DB::table('faqs')->insertOrIgnore(array_merge($faq, [
                'sort_order' => $fidx + 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }

        // 7. Sample Leads
        DB::table('leads')->insertOrIgnore([
            [
                'id' => 1,
                'name' => 'Rahul Sharma',
                'contact_no' => '+91 9876543210',
                'email' => 'rahul.sharma@example.com',
                'street_address' => 'Flat 402, Royal Apartments, Dilshad Garden',
                'city' => 'East Delhi',
                'district' => 'East Delhi',
                'state' => 'Delhi',
                'country' => 'India',
                'package_selection' => 'Gold Plan (₹249/meal)',
                'tasting_slot' => 'Lunch - 1 PM',
                'description_allergies' => 'Less spicy, no onion during Tuesdays',
                'status' => 'new',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'name' => 'Pooja Verma',
                'contact_no' => '+91 9811223344',
                'email' => 'pooja.verma@example.com',
                'street_address' => 'Plot 12, Shalimar Garden Ext 1',
                'city' => 'Ghaziabad',
                'district' => 'Ghaziabad',
                'state' => 'Uttar Pradesh',
                'country' => 'India',
                'package_selection' => 'Platinum Plan (₹279/meal)',
                'tasting_slot' => 'Dinner - 8 PM',
                'description_allergies' => 'High protein requirement, gym diet',
                'status' => 'trial_scheduled',
                'created_at' => now()->subDay(),
                'updated_at' => now(),
            ],
        ]);
    }
}
