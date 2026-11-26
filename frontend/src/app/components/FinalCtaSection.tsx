import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenPlan: () => void;
}

export default function FinalCtaSection({ onOpenPlan }: FinalCtaSectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-[#E87524] via-[#F4B000] to-[#E87524] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Sparkle icon */}
        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-6 shadow-md">
          <Sparkles className="w-6 h-6 text-white" />
        </div>

        {/* Heading */}
        <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
          Ready for Fresh, Personalised Meals?
        </h2>

        {/* Supporting text */}
        <p className="font-poppins font-normal text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed mb-8">
          Join thousands of happy customers and make everyday eating healthier, tastier and more convenient.
        </p>

        {/* Button: Create My Personal Plan → */}
        <div className="flex justify-center">
          <button
            onClick={onOpenPlan}
            className="inline-flex items-center gap-2.5 bg-[#402000] hover:bg-[#2e1700] text-[#F4B000] font-poppins font-semibold text-sm sm:text-base px-9 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Create My Personal Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
