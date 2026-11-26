"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface AboutSectionProps {
  onOpenPlan: () => void;
  cmsContent?: Record<string, string>;
}

export default function AboutSection({ onOpenPlan, cmsContent }: AboutSectionProps) {
  // 4 Bottom feature cards - titles only without descriptions
  const qualityFeatures = [
    {
      title: "Farm-Fresh Quality Ingredients",
      icon: "🌱",
    },
    {
      title: "Chef-Crafted, Nutrition-Conscious Meals",
      icon: "👨‍🍳",
    },
    {
      title: "Fresh & Secure Food Packaging",
      icon: "📦",
    },
    {
      title: "Flexible Meal Subscriptions",
      icon: "📅",
    },
  ];

  // Right card: 3 Core Pillars
  const promiseStats = [
    {
      label: "Our Promise",
      detail: "Pure Ingredients. Zero Shortcuts. Real Nutrition.",
    },
    {
      label: "Freshly Prepared Meals",
      detail: "Daily cooking with quality ingredients and fresh flavours.",
    },
    {
      label: "Personalised for You",
      detail: "Meal plans tailored to your taste, lifestyle and health goals.",
    },
  ];

  const eyebrow = cmsContent?.eyebrow || "ABOUT AROMA BITES";
  const heading = cmsContent?.heading || "Good Food,";
  const subheading = cmsContent?.subheading || "thoughtfully crafted.";
  const descriptionP1 =
    cmsContent?.description_p1 ||
    "At Aroma Bites, we believe healthy eating should be delicious, convenient and made around you. We bring together freshly prepared meals, quality ingredients and personalised meal plans to make everyday eating easier and more enjoyable.";
  const descriptionP2 =
    cmsContent?.description_p2 ||
    "From comforting Indian favourites to flavourful Continental dishes, every meal is thoughtfully prepared with a focus on freshness, taste and your everyday food preferences. Our goal is to bring the warmth of ghar-jaisa swaad with the convenience of a daily meal subscription.";

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFF9EB] text-[#402000] border-b border-[#F0E5CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column (7 cols): Story, Typography & 4 Feature Tiles */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Category Eyebrow Badge with proper space in "ABOUT AROMA BITES" */}
              <div className="inline-flex items-center gap-2 bg-[#FBE4AC] text-[#402000] border border-[#F4B000]/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E87524]" />
                <span>{eyebrow}</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-[#402000] uppercase leading-[1.1] mb-2">
                {heading} <br />
                <span className="text-[#38864B] font-bold lowercase italic">{subheading}</span>
              </h2>

              {/* Freshness in Every Bite Tagline */}
              <p className="font-poppins font-bold text-base sm:text-lg text-[#E87524] mb-6">
                Freshness in Every Bite. Care in Every Meal.
              </p>

              {/* About description story: Pure Black #000000 */}
              <div className="space-y-4 font-poppins font-normal text-sm sm:text-base text-[#000000] leading-relaxed mb-8">
                <p>{descriptionP1}</p>
                <p>{descriptionP2}</p>
              </div>
            </div>

            {/* 4 Feature Tiles (2x2 Grid) - Titles only without descriptions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {qualityFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E5CF] shadow-2xs hover:shadow-sm hover:border-[#F4B000]/60 transition-all flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9EB] flex items-center justify-center text-xl flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xs sm:text-sm text-[#402000] leading-snug">
                      {feat.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Dark Brown Promise Card matching left height */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-[#321900] text-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 flex flex-col justify-between shadow-2xl border-4 border-white relative overflow-hidden">
              
              {/* Subtle warm decorative glow inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E87524]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <span className="inline-block bg-[#F4B000] text-[#402000] font-poppins font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
                  OUR PROMISE
                </span>

                <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                  Pure Ingredients. <br />
                  Zero Shortcuts. <br />
                  Real Nutrition.
                </h3>

                <p className="font-poppins font-normal text-xs sm:text-sm text-white/80 leading-relaxed">
                  We care about what goes into your meals. From carefully selected ingredients and freshly prepared vegetables to thoughtfully planned recipes, we pay attention to the details that make everyday food better.
                </p>

                {/* 3 Core Promise Rows */}
                <div className="space-y-3 pt-2">
                  {promiseStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-1 backdrop-blur-xs"
                    >
                      <span className="font-poppins font-bold text-xs sm:text-sm text-[#F4B000]">
                        {stat.label}
                      </span>
                      <span className="font-poppins font-medium text-xs text-white/80 leading-snug">
                        {stat.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button inside dark card */}
              <div className="pt-8 relative z-10">
                <button
                  onClick={onOpenPlan}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F4B000] hover:bg-[#ffbd14] text-[#402000] font-poppins font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-full shadow-lg transition-all cursor-pointer"
                >
                  <span>Taste the Difference</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
