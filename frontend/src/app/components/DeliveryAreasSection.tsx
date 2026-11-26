import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { DeliveryArea } from "../../types/cms";

interface DeliveryAreasSectionProps {
  onCheckArea: () => void;
  cmsAreas?: DeliveryArea[];
  cmsContent?: Record<string, string>;
}

export default function DeliveryAreasSection({
  onCheckArea,
  cmsAreas,
  cmsContent,
}: DeliveryAreasSectionProps) {
  // Default 15 hubs fallback
  const defaultHubs = [
    { name: "Dilshad Garden", detail: "East Delhi Hub", icon: "🏡" },
    { name: "Dilshad Colony", detail: "East Delhi", icon: "📍" },
    { name: "New Seemapuri", detail: "East Delhi", icon: "🏙️" },
    { name: "Shalimar Garden", detail: "Ext 1 & 2, Ghaziabad", icon: "🌸" },
    { name: "Vivek Vihar", detail: "Phase 1 & 2", icon: "🌳" },
    { name: "Jhilmil Colony", detail: "East Delhi", icon: "🏢" },
    { name: "Jhilmil Ind. Area", detail: "Industrial Cluster", icon: "🏭" },
    { name: "Tahirpur", detail: "East Delhi", icon: "✨" },
    { name: "GTB Enclave", detail: "Hospital Zone", icon: "🏥" },
    { name: "Sunder Nagri", detail: "East Delhi", icon: "🌿" },
    { name: "Harsh Vihar", detail: "East Delhi", icon: "🏡" },
    { name: "Surajmal Vihar", detail: "Prime East", icon: "🌟" },
    { name: "Mansarovar Park", detail: "East Delhi", icon: "🍃" },
    { name: "Shahdara", detail: "Central East Hub", icon: "🏛️" },
    { name: "Krishna Nagar", detail: "Retail & Residential", icon: "🛍️" },
  ];

  const hubsToRender = (cmsAreas && cmsAreas.length > 0) ? cmsAreas : defaultHubs;

  const badge = cmsContent?.badge || "TIFFIN & MEAL DELIVERY AREAS";
  const headingNormal = cmsContent?.heading_normal || "Across";
  const headingHighlight = cmsContent?.heading_highlight || "Delhi NCR";
  const description =
    cmsContent?.description ||
    "Looking for fresh, healthy and personalised tiffin services near you? Explore our delivery locations across East Delhi, Ghaziabad, Noida and Gurugram. Find your area and discover convenient daily meal subscriptions delivered to your doorstep.";
  const noticeText =
    cmsContent?.notice_text ||
    "Don't see your area listed? We are rapidly expanding our delivery fleet across Delhi NCR!";
  const ctaBtnText = cmsContent?.cta_btn_text || "Check My Location Availability";

  return (
    <section id="delivery-areas" className="py-20 lg:py-24 bg-[#FFFDF7] text-[#402000] border-b border-[#F0E5CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-[#FBE4AC] border border-[#F4B000]/50 text-[#402000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-xs">
            {badge}
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#402000] tracking-tight uppercase mb-3">
            {headingNormal} <span className="text-[#E87524]">{headingHighlight}</span>
          </h2>
          <p className="font-poppins font-normal text-sm sm:text-base text-[#806F5C] leading-relaxed">
            {description}
          </p>
        </div>

        {/* 15 Hubs Grid (5 Columns per Row on Desktop) in Premium Light Theme Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {hubsToRender.map((hub, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E5CF] shadow-2xs hover:shadow-md hover:border-[#F4B000]/60 transition-all flex items-center gap-3 group cursor-pointer"
              onClick={onCheckArea}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF9EB] group-hover:bg-[#FBE4AC]/70 flex items-center justify-center text-lg sm:text-xl flex-shrink-0 transition-colors">
                {hub.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-poppins font-bold text-xs sm:text-sm text-[#402000] group-hover:text-[#E87524] transition-colors leading-tight truncate">
                  {hub.name}
                </h4>
                <p className="font-poppins font-normal text-[11px] text-[#806F5C] leading-tight mt-0.5 truncate">
                  {Boolean((hub as any).detail) ? (hub as any).detail : (Boolean((hub as any).zone) ? (hub as any).zone : "Delhi NCR Hub")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 text-center">
          <p className="font-poppins font-medium text-xs sm:text-sm text-[#806F5C] mb-4">
            {noticeText}
          </p>
          <button
            onClick={onCheckArea}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#FFF9EB] text-[#402000] hover:text-[#E87524] border border-[#F0E5CF] hover:border-[#F4B000] font-poppins font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-2xs hover:shadow-sm transition-all cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#E87524]" />
            <span>{ctaBtnText}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
