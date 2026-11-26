import React from "react";
import { ArrowRight, GraduationCap, Home as HomeIcon, Briefcase, Sparkles, Building2, Crown } from "lucide-react";

interface WhoWeServeProps {
  onExplore: () => void;
}

export default function WhoWeServe({ onExplore }: WhoWeServeProps) {
  const cards = [
    {
      title: "School & College Students",
      desc: "Affordable, freshly prepared daily meals for students who need convenient, wholesome food between classes, studies and campus life.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Small Family Meals",
      desc: "Delicious everyday meals for small families looking for convenient, freshly prepared food without the daily cooking hassle.",
      icon: HomeIcon,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Working Professionals",
      desc: "Save time with convenient daily lunch and dinner subscriptions designed to fit around busy office schedules and work routines.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Bachelors & PG Residents",
      desc: "Enjoy convenient, hygienic and delicious everyday meals without worrying about grocery shopping, cooking or daily food arrangements.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Corporate Tiffin Services",
      desc: "Convenient office meal solutions for teams and workplaces looking for organised daily lunch delivery and reliable food arrangements.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Premium Meal Plans",
      desc: "For those who appreciate elevated everyday dining, enjoy thoughtfully curated meals featuring quality ingredients, delicious combinations and a premium food experience.",
      icon: Crown,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFF9EB] text-[#402000] border-b border-[#F0E5CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#FBE4AC] border border-[#F4B000]/50 text-[#402000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-xs">
            MEALS FOR EVERY LIFESTYLE
          </span>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#806F5C]">
            WHO WE SERVE
          </p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#402000] tracking-tight mt-2 mb-4">
            Good Food for Every Kind of Day.
          </h2>
          <p className="font-poppins font-normal text-sm sm:text-base text-[#806F5C] leading-relaxed">
            Whether you&apos;re a student living away from home, a busy professional, a growing family or someone who enjoys premium everyday meals, Aroma Bites has meal options designed around your lifestyle. Enjoy freshly prepared food, convenient tiffin delivery and flexible meal subscriptions across our serviceable locations in Delhi NCR.
          </p>
        </div>

        {/* 6 Image-Based Lifestyle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#F0E5CF] shadow-xs hover:shadow-lg hover:border-[#F4B000]/60 transition-all flex flex-col group cursor-pointer"
                onClick={onExplore}
              >
                {/* Image Container with Consistent Proportions */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF6ED]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md text-[#E87524] flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-poppins font-semibold text-lg sm:text-xl text-[#402000] mb-2.5 group-hover:text-[#E87524] transition-colors">
                      {card.title}
                    </h3>
                    <p className="font-poppins font-normal text-xs sm:text-sm text-[#806F5C] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Tagline & CTA */}
        <div className="mt-16 text-center">
          <p className="font-poppins font-semibold text-base sm:text-lg text-[#402000] mb-4">
            Whatever Your Lifestyle, There&apos;s an Aroma Bites Meal for You.
          </p>
          <button
            onClick={onExplore}
            className="inline-flex items-center gap-2 bg-[#E87524] hover:bg-[#d66518] text-white font-poppins font-semibold text-sm px-8 py-3.5 rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>EXPLORE YOUR MEAL PLAN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
