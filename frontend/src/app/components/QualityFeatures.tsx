import React from "react";
import { Sparkles, Utensils, ShieldCheck, Calendar } from "lucide-react";

export default function QualityFeatures() {
  const cards = [
    {
      title: "Farm-Fresh Quality Ingredients",
      desc: "Carefully selected vegetables and quality ingredients for fresh, flavourful everyday meals.",
      icon: Sparkles,
      iconBg: "bg-[#38864B]/15 text-[#38864B]",
    },
    {
      title: "Chef-Crafted, Nutrition-Conscious Meals",
      desc: "Thoughtfully planned recipes with attention to food preferences, calories and protein.",
      icon: Utensils,
      iconBg: "bg-[#E87524]/15 text-[#E87524]",
    },
    {
      title: "Fresh & Secure Food Packaging",
      desc: "Convenient, spill-resistant packaging designed to keep your meals protected during delivery.",
      icon: ShieldCheck,
      iconBg: "bg-[#38864B]/15 text-[#38864B]",
    },
    {
      title: "Flexible Meal Subscriptions",
      desc: "Enjoy convenient meal plans with flexible options to manage your everyday food routine.",
      icon: Calendar,
      iconBg: "bg-[#E87524]/15 text-[#E87524]",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#FFFDF7] border-b border-[#F0E5CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-[#F0E5CF] shadow-sm hover:shadow-md hover:border-[#F4B000]/50 transition-all flex flex-col justify-start group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-poppins font-semibold text-[#402000] text-base leading-snug mb-2.5">
                  {card.title}
                </h3>
                <p className="font-poppins font-normal text-xs sm:text-sm text-[#806F5C] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
