import React from "react";
import { ArrowRight, Clock, ShieldCheck, Star, Award, CheckCircle2 } from "lucide-react";

interface TrustStatisticsProps {
  onSubscribe: () => void;
}

export default function TrustStatistics({ onSubscribe }: TrustStatisticsProps) {
  const stats = [
    {
      stat: "99.4%",
      label: "On-Time Lunch Dispatch",
      icon: Clock,
    },
    {
      stat: "100%",
      label: "Fresh Daily Preparation",
      icon: Award,
    },
    {
      stat: "4.9/5",
      label: "Average Customer Rating",
      icon: Star,
    },
    {
      stat: "ZERO",
      label: "Added Preservatives",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFF9EB] text-[#402000] border-b border-[#F0E5CF] text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-[#FBE4AC] border border-[#F4B000]/50 text-[#402000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs">
            TRUSTED BY OUR CUSTOMERS
          </span>
        </div>

        {/* Main Prominent Golden Statistic */}
        <div className="my-3">
          <h2 className="font-poppins font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#402000] leading-none">
            2,576<span className="text-[#E87524]">+</span>
          </h2>
          <p className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-wider text-[#402000] mt-3">
            MEALS SERVED
          </p>
          <p className="font-poppins font-semibold text-base sm:text-lg text-[#E87524] mt-1">
            Freshness You Can Count On.
          </p>
        </div>

        {/* 4 Supporting Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-10 border-t border-[#F0E5CF]">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-3xl border border-[#F0E5CF] shadow-xs flex flex-col items-center justify-center group hover:border-[#F4B000]/60 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF9EB] text-[#E87524] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#402000]">
                  {item.stat}
                </div>
                <p className="font-poppins font-medium text-xs sm:text-sm text-[#806F5C] mt-1.5 leading-snug">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing description */}
        <p className="font-poppins font-normal text-xs sm:text-sm text-[#806F5C] mt-10">
          Proudly serving fresh, delicious everyday meals since August 2023.
        </p>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onSubscribe}
            className="inline-flex items-center gap-2.5 bg-[#E87524] hover:bg-[#d66518] text-white font-poppins font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#E87524]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Subscribe To Aroma Bites</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
