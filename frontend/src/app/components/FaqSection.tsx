import React, { useState } from "react";
import { Plus, Minus, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQItem } from "../../types/cms";

interface FaqSectionProps {
  cmsFaqs?: FAQItem[];
  cmsContent?: Record<string, string>;
}

export default function FaqSection({ cmsFaqs, cmsContent }: FaqSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [showAll, setShowAll] = useState(false);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const defaultFaqs = [
    {
      q: "Q1. What is Aroma Bites?",
      a: "Aroma Bites is a daily tiffin delivery and personalised meal subscription service offering freshly prepared, chef-crafted meals. We provide convenient breakfast, lunch and dinner options designed around your taste preferences, lifestyle and nutritional goals.",
    },
    {
      q: "Q2. Why should I choose Aroma Bites over regular tiffin services?",
      a: "Unlike conventional tiffin services, Aroma Bites focuses on fresh daily cooking, quality ingredients, flexible subscriptions and personalized meal options. We use Soyabean Refined Oil, Desi Ghee, freshly prepared food and carefully planned meal combinations to make everyday eating more convenient and enjoyable.",
    },
    {
      q: "Q3. How does the Aroma Bites meal subscription work?",
      a: "Getting started is simple. Choose your preferred meal slot, select a suitable subscription plan, customise your food preferences and complete your subscription. Your meals will then be prepared and delivered according to your selected schedule and delivery availability.",
    },
    {
      q: "Q4. Does Aroma Bites provide home delivery?",
      a: "Yes! Aroma Bites provides freshly prepared tiffin and meal delivery to customers in its serviceable locations across East Delhi and selected nearby areas of Ghaziabad. Delivery availability depends on your exact location.",
    },
    {
      q: "Q5. How can I place an order or start a meal subscription?",
      a: "Visit the Aroma Bites website, select Create My Personal Plan, choose your preferred meal slot and subscription package, enter your delivery details and complete the booking process. You can also contact our team for assistance with choosing the right meal plan.",
    },
    {
      q: "Q6. Which areas does Aroma Bites deliver to?",
      a: "We currently serve selected locations across East Delhi and nearby Ghaziabad, including Dilshad Garden, Dilshad Colony, Vivek Vihar, Jhilmil Colony, Shahdara, Krishna Nagar, Shalimar Garden and surrounding areas. Please check your location on our website to confirm delivery availability.",
    },
    {
      q: "Q7. Does Aroma Bites offer breakfast, lunch and dinner subscriptions?",
      a: "Yes! You can choose from our breakfast, lunch and dinner meal options, depending on availability in your delivery area. Select your preferred meal slot while creating your personal meal subscription.",
    },
    {
      q: "Q8. What are the different meal subscription plans offered by Aroma Bites?",
      a: "Aroma Bites offers multiple meal subscription options designed for different budgets and nutritional preferences. You can choose a standard everyday meal plan, a high-protein meal plan or a personalised meal plan based on your requirements.",
    },
    {
      q: "Q9. Can I customise my meals according to my diet and food preferences?",
      a: "Yes! Aroma Bites offers meal customisation options based on your selected plan. Depending on availability, you can specify ingredient preferences, food exclusions and nutritional requirements while creating your subscription.",
    },
  ];

  const faqsToRender = (cmsFaqs && cmsFaqs.length > 0)
    ? cmsFaqs.map((f, i) => ({
        q: `Q${i + 1}. ${f.question}`,
        a: f.answer,
      }))
    : defaultFaqs;

  const displayedFaqs = showAll ? faqsToRender : faqsToRender.slice(0, 5);

  const badge = cmsContent?.badge || "GOT QUESTIONS?";
  const heading = cmsContent?.heading || "Frequently Asked Questions";
  const description =
    cmsContent?.description ||
    "Everything you need to know about our daily meal delivery, ingredients, subscription management and packaging.";

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFF9EB] text-[#402000] border-b border-[#F0E5CF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-[#FBE4AC] border border-[#F4B000]/50 text-[#402000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-xs">
            {badge}
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#402000] tracking-tight mb-3">
            {heading}
          </h2>
          <p className="font-poppins font-normal text-sm sm:text-base text-[#806F5C]">
            {description}
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3.5 mb-10">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#F0E5CF] overflow-hidden shadow-2xs hover:border-[#F4B000]/60 transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-poppins font-bold text-sm sm:text-base text-[#402000] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#E87524] text-white"
                        : "bg-[#FFF9EB] text-[#402000]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm font-poppins font-normal text-[#806F5C] leading-relaxed border-t border-[#F0E5CF]/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* "View More Questions" / "View Less Questions" Expand Button */}
        {faqsToRender.length > 5 && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FFFDF7] text-[#402000] hover:text-[#E87524] border border-[#F0E5CF] hover:border-[#F4B000] font-poppins font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>{showAll ? "View Less Questions" : "View More Questions"}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-[#E87524]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#E87524]" />
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
