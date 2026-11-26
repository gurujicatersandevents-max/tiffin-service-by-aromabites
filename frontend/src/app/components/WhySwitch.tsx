"use client";

import React from "react";
import { ArrowRight, Sparkles, Utensils, ShieldCheck, Calendar } from "lucide-react";

interface WhySwitchProps {
  onOpenPlan: () => void;
  cmsContent?: Record<string, string>;
}

export default function WhySwitch({ onOpenPlan, cmsContent }: WhySwitchProps) {
  const benefits = [
    {
      title: "Farm-Fresh Quality Ingredients",
      icon: Sparkles,
      iconColor: "text-[#38864B]",
    },
    {
      title: "Chef-Crafted, Nutrition-Conscious Meals",
      icon: Utensils,
      iconColor: "text-[#E87524]",
    },
    {
      title: "Fresh & Secure Food Packaging",
      icon: ShieldCheck,
      iconColor: "text-[#38864B]",
    },
    {
      title: "Flexible Meal Subscriptions",
      icon: Calendar,
      iconColor: "text-[#E87524]",
    },
  ];

  const eyebrow = cmsContent?.eyebrow || "A BETTER WAY TO EAT EVERY DAY";
  const heading = cmsContent?.heading || "WHY SWITCH TO AROMA BITES?";
  const subheading = cmsContent?.subheading || "From Everyday Food Struggles to Better Everyday Meals.";
  const description =
    cmsContent?.description ||
    "Tired of unpredictable food quality, repetitive meals and expensive daily ordering? Aroma Bites brings you freshly prepared tiffin meals, convenient subscriptions and flexible meal plans. Enjoy delicious everyday food without the stress of planning and ordering every day.";
  const ctaTitle = cmsContent?.cta_title || "Make the Switch to Better Everyday Eating.";
  const ctaDesc =
    cmsContent?.cta_desc ||
    "Start your journey with fresh, personalised tiffin subscriptions right at your doorstep.";
  const ctaBtn = cmsContent?.cta_btn || "BOOK NOW →";

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF7] text-[#402000] border-b border-[#F0E5CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three-Part Balanced Composition Layout (Equal Height items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Part 1 (Left: Headline & Description) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-[#FBE4AC] border border-[#F4B000]/50 text-[#402000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3.5 shadow-xs">
                {eyebrow}
              </span>
              <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#402000] tracking-tight leading-tight mb-2">
                {heading}
              </h2>
              <p className="font-poppins font-semibold text-base sm:text-lg text-[#E87524] mb-4">
                {subheading}
              </p>
              <p className="font-poppins font-normal text-sm sm:text-base text-[#000000] leading-relaxed mb-6">
                {description}
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#F0E5CF]/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#806F5C]">
                <span className="text-[#38864B] font-bold text-sm">✓</span>
                <span>Zero Commitment • Pause, Skip or Cancel Anytime</span>
              </div>
            </div>
          </div>

          {/* Part 2 (Middle: 4 Feature Cards with larger text) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3 sm:gap-3.5">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E5CF] shadow-2xs hover:shadow-sm hover:border-[#F4B000]/60 transition-all flex items-center gap-4 flex-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FFF9EB] flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-5 h-5 ${benefit.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm sm:text-[15px] md:text-base text-[#402000] leading-snug">
                      {benefit.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Part 3 (Right: Orange CTA Box matching left height) */}
          <div className="lg:col-span-3 flex">
            <div className="w-full bg-[#E87524] text-white rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              
              {/* Subtle background decorative shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg">
                  ✨
                </div>

                <h3 className="font-poppins font-extrabold text-xl sm:text-2xl text-white leading-tight">
                  {ctaTitle}
                </h3>

                <p className="font-poppins font-normal text-xs sm:text-sm text-white/90 leading-relaxed">
                  {ctaDesc}
                </p>
              </div>

              {/* Book Now Button */}
              <div className="pt-6 relative z-10">
                <button
                  onClick={onOpenPlan}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F4B000] hover:bg-[#ffbd14] text-[#402000] font-poppins font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-5 rounded-full shadow-md transition-all cursor-pointer"
                >
                  <span>{ctaBtn}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
