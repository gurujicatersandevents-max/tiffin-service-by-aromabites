import React from "react";
import { Frown, Sparkles, Utensils, DollarSign, Heart, ShieldCheck, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function StrugglesComparison() {
  const struggles = [
    {
      num: "1.",
      title: "Oily & Unbalanced Meals",
      desc: "Regular food options may contain excess oil and lack the meal balance you're looking for.",
      icon: Frown,
    },
    {
      num: "2.",
      title: "Inconsistent Food Quality",
      desc: "Different cooks, changing ingredients and unpredictable taste make everyday meals frustrating.",
      icon: Utensils,
    },
    {
      num: "3.",
      title: "Expensive Daily Food Ordering",
      desc: "Repeated individual food orders, delivery charges and additional fees can increase monthly food expenses.",
      icon: DollarSign,
    },
    {
      num: "4.",
      title: "Missing the Taste of Ghar Ka Khana",
      desc: "Craving simple, comforting everyday meals like dal, roti, rice and seasonal sabzi.",
      icon: Heart,
    },
  ];

  const differences = [
    {
      num: "1.",
      title: "Quality Ingredients & Thoughtful Cooking",
      desc: "Carefully selected ingredients, freshly prepared vegetables and thoughtfully crafted everyday meals.",
      icon: ShieldCheck,
    },
    {
      num: "2.",
      title: "Freshly Prepared Daily Meals",
      desc: "Enjoy freshly cooked Indian and Continental meals prepared for your selected lunch or dinner schedule.",
      icon: Clock,
    },
    {
      num: "3.",
      title: "Affordable Meal Subscriptions",
      desc: "Choose convenient 7, 15 or 30-day plans designed to offer better value for everyday eating.",
      icon: CheckCircle2,
    },
    {
      num: "4.",
      title: "Convenient Local Delivery",
      desc: "Get your daily tiffin delivered across our serviceable locations in East Delhi and Ghaziabad.",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF7] text-[#402000] border-b border-[#F0E5CF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#FBE4AC] border border-[#F4B000]/50 text-[#402000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3.5 shadow-xs">
            COMPARISON
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#402000] tracking-tight uppercase">
            A BETTER WAY TO EAT EVERY DAY
          </h2>
          <p className="font-poppins font-normal text-sm sm:text-base text-[#806F5C] mt-3">
            See how Aroma Bites transforms your daily meal routine from a hassle into a delightful experience.
          </p>
        </div>

        {/* Two-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT SIDE — EVERYDAY FOOD STRUGGLES (Subtle Peach/Red Background) */}
          <div className="bg-[#FFF2EE] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#F8D5CB] shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FCE2DB] text-[#C0392B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                <Frown className="w-4 h-4 text-[#C0392B]" />
                <span>THE DAILY FOOD STRUGGLE</span>
              </div>

              <div className="space-y-6">
                {struggles.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#F8D5CB] text-[#C0392B] flex items-center justify-center shrink-0 font-bold text-sm">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-base text-[#402000] mb-1">
                        {item.title}
                      </h4>
                      <p className="font-poppins font-normal text-xs sm:text-sm text-[#806F5C] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — THE AROMA BITES DIFFERENCE (Soft Green Background) */}
          <div className="bg-[#F0F7F2] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#D3E9D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#DDF0E3] text-[#38864B] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                <Sparkles className="w-4 h-4 text-[#38864B]" />
                <span>EAT FRESH. EVERY DAY.</span>
              </div>

              <div className="space-y-6">
                {differences.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#D3E9D9] text-[#38864B] flex items-center justify-center shrink-0 font-bold text-sm">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-base text-[#402000] mb-1">
                        {item.title}
                      </h4>
                      <p className="font-poppins font-normal text-xs sm:text-sm text-[#806F5C] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
