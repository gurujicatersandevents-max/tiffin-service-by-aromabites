import React from "react";
import { Check, CheckCircle2, ArrowRight } from "lucide-react";
import { SubscriptionPlan } from "../../types/cms";

interface MealPlansSectionProps {
  selectedMealSlot: "Breakfast" | "Lunch" | "Dinner";
  onSelectMealSlot: (slot: "Breakfast" | "Lunch" | "Dinner") => void;
  onSelectPlan: (planName: string) => void;
  cmsPlans?: SubscriptionPlan[];
  cmsContent?: Record<string, string>;
}

export default function MealPlansSection({
  selectedMealSlot,
  onSelectMealSlot,
  onSelectPlan,
  cmsPlans,
  cmsContent,
}: MealPlansSectionProps) {
  const mealSlots: Array<"Breakfast" | "Lunch" | "Dinner"> = ["Breakfast", "Lunch", "Dinner"];

  const defaultPlans = [
    {
      name: "Silver Essential Plan",
      tagline: "Essential Homestyle Nutrition",
      price_per_meal: 119,
      original_price_per_meal: 149,
      badge: "Best Value",
      is_popular: false,
      highlight_label: "Ideal for Daily Workplace Lunch",
      features: [
        "1 Fresh Sabzi / Dal Preparation",
        "4 Warm Tawa Rotis or Steamed Rice",
        "Fresh Salad & Homestyle Pickle",
        "Prepared Daily with Refined Oil",
        "Free Doorstep Insulated Delivery",
      ],
    },
    {
      name: "Gold Balanced Plan",
      tagline: "Full Gourmet Meal with Protein Choice",
      price_per_meal: 149,
      original_price_per_meal: 189,
      badge: "Most Popular",
      is_popular: true,
      highlight_label: "Recommended for Healthy Living",
      features: [
        "1 Paneer / Special Seasonal Veg",
        "1 Protein Dal / Kadhi Choice",
        "4 Soft Rotis + Fragrant Jeera Rice",
        "Fresh Green Salad, Raita & Pickle",
        "Prepared in Pure Desi Ghee blend",
        "Free Thermal Insulated Delivery",
      ],
    },
    {
      name: "Platinum Feast Plan",
      tagline: "The Ultimate Nutritional Feast",
      price_per_meal: 189,
      original_price_per_meal: 239,
      badge: "Chef Special",
      is_popular: false,
      highlight_label: "Tailored for Fitness & Complete Routine",
      features: [
        "Chef's Premium Entrée Special",
        "Rich Dal Makhani / Panchmel Dal",
        "Choice of Rotis / Parathas & Rice",
        "Sweet Treat / Dessert of the Day",
        "Fresh Sprout Salad, Raita & Chutney",
        "Priority VIP Delivery Timing",
      ],
    },
  ];

  const plansToRender = (cmsPlans && cmsPlans.length > 0) ? cmsPlans : defaultPlans;

  const badge = cmsContent?.badge || "FLEXIBLE DAILY MEAL SUBSCRIPTIONS";
  const heading = cmsContent?.heading || "FIND YOUR PERFECT MEAL PLAN";
  const description =
    cmsContent?.description ||
    "Explore affordable and personalised tiffin subscription plans from Aroma Bites. Whether you need breakfast, lunch or dinner, choose a meal plan that fits your taste, routine and nutrition goals.";

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#FFFDF7] text-[#402000] border-b border-[#F0E5CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#FBE4AC] border border-[#F4B000]/50 text-[#402000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-xs">
            {badge}
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#402000] tracking-tight uppercase mb-2">
            {heading}
          </h2>
          <p className="font-poppins font-semibold text-base sm:text-lg text-[#E87524] mb-3">
            Every Lifestyle. Every Goal. Every Meal.
          </p>
          <p className="font-poppins font-normal text-sm sm:text-base text-[#806F5C] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Interactive Meal-Slot Selector: Breakfast / Lunch / Dinner */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FFF9EB] p-1.5 rounded-full border border-[#F0E5CF] shadow-xs">
            {mealSlots.map((slot) => {
              const isSelected = selectedMealSlot === slot;
              return (
                <button
                  key={slot}
                  onClick={() => onSelectMealSlot(slot)}
                  className={`font-poppins font-semibold text-xs sm:text-sm px-5 sm:px-7 py-2.5 rounded-full transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#E87524] text-white shadow-md scale-100"
                      : "text-[#806F5C] hover:text-[#402000] hover:bg-white/60"
                  }`}
                >
                  {slot} Subscription
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Subscription Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plansToRender.map((plan, idx) => {
            const isFeatured = !!plan.is_popular;

            return (
              <div
                key={idx}
                className={`rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? "bg-[#321900] text-white shadow-2xl border-4 border-[#F4B000] scale-[1.02] md:-translate-y-2"
                    : "bg-white text-[#402000] border border-[#F0E5CF] shadow-xs hover:shadow-lg"
                }`}
              >
                {/* Popular or Highlight Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`font-poppins font-bold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm ${
                        isFeatured
                          ? "bg-[#F4B000] text-[#402000]"
                          : "bg-[#FFF9EB] text-[#E87524] border border-[#F4B000]/40"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <h3
                    className={`font-poppins font-extrabold text-xl sm:text-2xl mb-1 ${
                      isFeatured ? "text-white" : "text-[#402000]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`font-poppins font-normal text-xs mb-6 ${
                      isFeatured ? "text-[#F0E5CF]" : "text-[#806F5C]"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="mb-6 pb-6 border-b border-current/15">
                    <div className="flex items-baseline gap-2">
                      <span className="font-poppins font-black text-4xl sm:text-5xl text-[#E87524]">
                        ₹{plan.price_per_meal}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          isFeatured ? "text-[#F0E5CF]" : "text-[#806F5C]"
                        }`}
                      >
                        / meal
                      </span>
                      {plan.original_price_per_meal && (
                        <span className="text-xs line-through text-gray-400 ml-1">
                          ₹{plan.original_price_per_meal}
                        </span>
                      )}
                    </div>
                    {plan.highlight_label && (
                      <p
                        className={`text-[11px] font-medium mt-1 ${
                          isFeatured ? "text-[#F4B000]" : "text-[#38864B]"
                        }`}
                      >
                        {plan.highlight_label}
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p
                      className={`font-poppins font-bold text-xs uppercase tracking-wider ${
                        isFeatured ? "text-[#F4B000]" : "text-[#402000]"
                      }`}
                    >
                      What's Included:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features?.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              isFeatured ? "text-[#F4B000]" : "text-[#38864B]"
                            }`}
                          />
                          <span
                            className={isFeatured ? "text-white/90" : "text-[#806F5C]"}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-4 rounded-full font-poppins font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                    isFeatured
                      ? "bg-[#E87524] hover:bg-[#cf6217] text-white"
                      : "bg-[#FFF9EB] hover:bg-[#E87524] text-[#402000] hover:text-white border border-[#F0E5CF] hover:border-[#E87524]"
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
