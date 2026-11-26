import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ArrowRight, Play, Check } from "lucide-react";
import { TestimonialItem } from "../../types/cms";

interface CustomerReviewsProps {
  onJoin: () => void;
  onOpenVideo?: () => void;
  cmsTestimonials?: TestimonialItem[];
  cmsContent?: Record<string, string>;
}

export default function CustomerReviews({
  onJoin,
  onOpenVideo,
  cmsTestimonials,
  cmsContent,
}: CustomerReviewsProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const categories = [
    "Everyday Tiffin Experience",
    "Personalized Meal Subscriptions",
    "Fresh Food & Quality",
    "Reliable Meal Delivery",
    "Family Meal Experiences",
    "Customer Service & Support",
  ];

  const statistics = [
    { stat: "200+", label: "Daily Active Tiffin's" },
    { stat: "1800+", label: "Happy Subscribers" },
    { stat: "98%", label: "Customer Satisfaction" },
    { stat: "80%", label: "Repeat Subscription Renewals" },
  ];

  const videoTestimonials = [
    {
      title: "Daily Healthy Living",
      customer: "Sneha Kapur, Dilshad Garden",
      tag: "Working Professional",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Clean Corporate Lunches",
      customer: "Vikram Malhotra, Preet Vihar",
      tag: "Office Subscription",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Homestyle Family Dining",
      customer: "Dr. Ananya & Rajiv Sharma",
      tag: "Family Meal Plan",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const defaultReviews = [
    {
      quote: "Aroma Bites has completely resolved our weekday cooking hassle. The food is light, never overly oily, and tastes just like home. Absolutely love the prompt delivery every single day!",
      author: "Neha Sharma",
      role: "Software Engineer",
      locality: "Dilshad Garden, East Delhi",
      plan: "Silver Essential Plan",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "Switched from restaurant ordering to Aroma Bites 3 months ago. Huge difference in energy levels and health. The packaging is spill-proof and meals always arrive piping hot.",
      author: "Rohan Verma",
      role: "Product Manager",
      locality: "Shalimar Garden, Ghaziabad",
      plan: "Gold Balanced Plan",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "Clean, nutritious meals with good variety through the week. The flexibility to pause when traveling makes it the most convenient tiffin service in Delhi NCR.",
      author: "Pooja Malhotra",
      role: "Banking Consultant",
      locality: "Vivek Vihar, East Delhi",
      plan: "Platinum Feast Plan",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
  ];

  // Map CMS testimonials if available
  const reviewsToRender = (cmsTestimonials && cmsTestimonials.length > 0)
    ? cmsTestimonials.map((t) => ({
        quote: t.review_text,
        author: t.customer_name,
        role: t.customer_role || "Subscriber",
        locality: t.locality || "Delhi NCR",
        plan: t.category || "Daily Tiffin Plan",
        rating: t.rating || 5,
        avatar: t.avatar_url || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      }))
    : defaultReviews;

  const badge = cmsContent?.badge || "LOVED BY CUSTOMERS";
  const heading = cmsContent?.heading || "Real Stories, Real Flavours";
  const description =
    cmsContent?.description ||
    "Read what working professionals, students and families across Delhi NCR say about our daily tiffins.";

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % reviewsToRender.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + reviewsToRender.length) % reviewsToRender.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFF9EB] text-[#402000] border-b border-[#F0E5CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Video Testimonials Strip (3 Video Preview Cards) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-poppins font-bold text-lg sm:text-xl text-[#402000]">
              🎥 Video Reviews & Daily Experience
            </h3>
            <span className="text-xs font-medium text-[#806F5C]">Watch Subscriber Stories</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((v, i) => (
              <div
                key={i}
                onClick={onOpenVideo || onJoin}
                className="group relative rounded-3xl overflow-hidden aspect-[16/10] bg-[#402000] cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#E87524] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F4B000] text-[#402000] px-2 py-0.5 rounded-md inline-block mb-1">
                    {v.tag}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base leading-tight">{v.title}</h4>
                  <p className="text-xs text-white/80">{v.customer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Review Carousel Card */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#F0E5CF] shadow-sm mb-16 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* 5 Stars */}
            <div className="flex items-center justify-center gap-1.5 text-[#F4B000]">
              {[...Array(reviewsToRender[activeSlide]?.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Quote text */}
            <p className="font-poppins font-normal text-base sm:text-xl text-[#402000] leading-relaxed italic">
              “{reviewsToRender[activeSlide]?.quote}”
            </p>

            {/* Author info */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <img
                src={reviewsToRender[activeSlide]?.avatar}
                alt={reviewsToRender[activeSlide]?.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#E87524]"
              />
              <div className="text-left">
                <h4 className="font-poppins font-bold text-sm sm:text-base text-[#402000]">
                  {reviewsToRender[activeSlide]?.author}
                </h4>
                <p className="text-xs text-[#806F5C]">
                  {reviewsToRender[activeSlide]?.role} • {reviewsToRender[activeSlide]?.locality}
                </p>
              </div>
            </div>

            {/* Navigation Dots & Arrows */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-[#F0E5CF] hover:border-[#E87524] text-[#402000] hover:text-[#E87524] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {reviewsToRender.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeSlide === i ? "w-6 bg-[#E87524]" : "w-2 bg-[#F0E5CF]"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-[#F0E5CF] hover:border-[#E87524] text-[#402000] hover:text-[#E87524] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statistics.map((s, idx) => (
            <div
              key={idx}
              className="bg-white/80 p-5 rounded-2xl border border-[#F0E5CF] text-center"
            >
              <div className="font-poppins font-black text-2xl sm:text-3xl text-[#E87524] mb-1">
                {s.stat}
              </div>
              <p className="font-poppins font-medium text-xs text-[#806F5C]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
