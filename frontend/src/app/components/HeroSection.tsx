import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenPlan: () => void;
  onOpenVideo: () => void;
  cmsContent?: Record<string, string>;
}

export default function HeroSection({ onOpenPlan, onOpenVideo, cmsContent }: HeroSectionProps) {
  const eyebrow = cmsContent?.eyebrow || "HEALTHY TIFFIN";
  const heading1 = cmsContent?.heading_line1 || "PERSONALISED";
  const heading2 = cmsContent?.heading_line2 || "MEAL PLANS";
  const description =
    cmsContent?.description ||
    "Fresh, nutritious and chef-crafted meals tailored to your taste and everyday health goals.";
  const primaryCta = cmsContent?.cta_primary_text || "Create My Personal Plan";
  const secondaryCta = cmsContent?.cta_secondary_text || "Watch How It Works";

  return (
    <section className="relative bg-[#FFF9EB] text-[#402000] min-h-[calc(100vh-80px)] lg:min-h-[90vh] flex items-center pt-8 sm:pt-12 pb-16 lg:pb-20 overflow-hidden border-b border-[#F0E5CF]">
      {/* Soft warm background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-[#F4B000]/15 via-[#E87524]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#38864B]/10 via-[#F4B000]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-[#FBE4AC] text-[#402000] border border-[#F4B000]/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E87524]" />
              <span>{eyebrow}</span>
            </div>

            {/* Main heading */}
            <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight text-[#402000] uppercase leading-[1.08] mb-5">
              {heading1} <br />
              <span className="text-[#E87524]">{heading2}</span>
            </h1>

            {/* Description */}
            <p className="font-poppins font-normal text-base sm:text-lg text-[#806F5C] max-w-xl leading-relaxed mb-8">
              {description}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenPlan}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E87524] hover:bg-[#d66518] text-white font-poppins font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#E87524]/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>{primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVideo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FFFDF7] text-[#402000] border border-[#F0E5CF] hover:border-[#E87524]/40 font-poppins font-semibold text-sm sm:text-base px-7 py-4 rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-full bg-[#E87524]/10 group-hover:bg-[#E87524] text-[#E87524] group-hover:text-white flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>{secondaryCta}</span>
              </button>
            </div>

            {/* Trust highlights below CTAs */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t border-[#F0E5CF]/80 text-xs sm:text-sm font-semibold text-[#806F5C]">
              <div className="flex items-center gap-2">
                <span className="text-[#38864B] font-bold text-base">✓</span>
                <span>FSSAI Certified Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#38864B] font-bold text-base">✓</span>
                <span>Zero Artificial Preservatives</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#38864B] font-bold text-base">✓</span>
                <span>Thermal Spill-Proof Packaging</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Graphic Banner */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#FFFDF7] to-[#FBE4AC]/30 p-2 sm:p-3">
              <img
                src="/hero-banner-new.png"
                alt="Aroma Bites Fresh Delicious Meal"
                className="w-full h-full object-cover rounded-[28px]"
              />

              {/* Floating review card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F0E5CF] shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#38864B]/10 text-[#38864B] flex items-center justify-center font-bold text-lg flex-shrink-0">
                  ★
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-poppins font-bold text-xs text-[#402000]">Rated 4.9/5</span>
                    <span className="text-[10px] text-[#806F5C]">• 1,200+ Happy Customers</span>
                  </div>
                  <p className="text-[11px] text-[#806F5C] leading-snug line-clamp-1">
                    “Homestyle taste with restaurant-standard hygiene every day.”
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
