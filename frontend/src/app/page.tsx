"use client";

import React, { useState, useEffect } from "react";
import HeaderNavigation from "./components/HeaderNavigation";
import HeroSection from "./components/HeroSection";
import QualityFeatures from "./components/QualityFeatures";
import StrugglesComparison from "./components/StrugglesComparison";
import AboutSection from "./components/AboutSection";
import TrustStatistics from "./components/TrustStatistics";
import WhoWeServe from "./components/WhoWeServe";
import WhySwitch from "./components/WhySwitch";
import MealPlansSection from "./components/MealPlansSection";
import CustomerReviews from "./components/CustomerReviews";
import FaqSection from "./components/FaqSection";
import DeliveryAreasSection from "./components/DeliveryAreasSection";
import FinalCtaSection from "./components/FinalCtaSection";
import Footer from "./components/Footer";
import FloatingChatbot from "./components/FloatingChatbot";
import { leadService, homeService } from "../lib/services";
import { HomePageResponse } from "../types/cms";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Check,
  Star,
  Clock,
  Flame,
  ShieldCheck,
  TrendingUp,
  Award,
  Calendar,
  Zap,
  Users,
  Menu as MenuIcon,
  X,
  Play,
  RotateCcw,
  MapPin,
  Search,
  GraduationCap,
  Briefcase,
  Home as HomeIcon,
  Sparkle,
  ChevronDown,
  HelpCircle,
  Utensils,
  Frown,
  DollarSign,
  HeartCrack,
  Heart,
  Soup,
  Coffee,
  Sun,
  Moon,
  Cookie,
  ChevronLeft,
  ChevronRight,
  Quote,
  Video,
  Building2,
  Crown,
} from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(12);
  const [activeStoryFilter, setActiveStoryFilter] = useState("Weight Loss");
  const [activeTestimonialSlide, setActiveTestimonialSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeFaqTab, setActiveFaqTab] = useState<"users" | "kitchens">("users");
  const [activeDietFilter, setActiveDietFilter] = useState("All");
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [selectedMealSlot, setSelectedMealSlot] = useState<"Breakfast" | "Lunch" | "Dinner">("Lunch");
  const [cmsData, setCmsData] = useState<HomePageResponse | null>(null);

  // Fetch live CMS Content from Centralized Laravel REST API
  useEffect(() => {
    async function loadCmsContent() {
      try {
        const res = await homeService.getHomePage();
        if (res && res.data) {
          setCmsData(res.data);
          // Apply dynamic SEO title and meta description dynamically
          if (res.data.seo) {
            if (res.data.seo.meta_title) {
              document.title = res.data.seo.meta_title;
            }
            if (res.data.seo.meta_description) {
              let metaDesc = document.querySelector('meta[name="description"]');
              if (!metaDesc) {
                metaDesc = document.createElement("meta");
                metaDesc.setAttribute("name", "description");
                document.head.appendChild(metaDesc);
              }
              metaDesc.setAttribute("content", res.data.seo.meta_description);
            }
            if (res.data.seo.meta_keywords) {
              let metaKeywords = document.querySelector('meta[name="keywords"]');
              if (!metaKeywords) {
                metaKeywords = document.createElement("meta");
                metaKeywords.setAttribute("name", "keywords");
                document.head.appendChild(metaKeywords);
              }
              metaKeywords.setAttribute("content", res.data.seo.meta_keywords);
            }
          }
        }
      } catch (err) {
        console.warn("Live CMS content load notice (using baked defaults):", err);
      }
    }
    loadCmsContent();
  }, []);

  // Helper to extract content fields by section ID as key-value map
  const getSectionFields = (sectionId: number): Record<string, string> => {
    if (!cmsData?.section_content?.[sectionId]) return {};
    const items = cmsData.section_content[sectionId];
    if (Array.isArray(items)) {
      return items.reduce((acc, curr) => {
        acc[curr.field_key] = curr.field_value;
        return acc;
      }, {} as Record<string, string>);
    }
    return (items as unknown as Record<string, string>) || {};
  };

  // Plan Modal & Form State
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    streetAddress: "",
    city: "East Delhi",
    district: "East Delhi",
    state: "Delhi",
    country: "India",
    packageSelection: "Bespoke Plan (₹279/meal)",
    tastingSlot: "Lunch - 1 PM",
    descriptionAllergies: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      fullAddress: `${formData.streetAddress}, ${formData.city}, ${formData.district}, ${formData.state}, ${formData.country}`,
      recipientEmail: "leads@aromabites.in",
      submittedAt: new Date().toISOString(),
    };

    try {
      // 1. Send to Centralized Laravel REST API service
      await leadService.submitLead({
        name: formData.name,
        contactNo: formData.contactNo,
        email: formData.email,
        streetAddress: formData.streetAddress,
        city: formData.city,
        district: formData.district,
        state: formData.state,
        country: formData.country,
        packageSelection: formData.packageSelection,
        tastingSlot: formData.tastingSlot,
        descriptionAllergies: formData.descriptionAllergies,
        source_page: "Home Page Modal",
      }).catch((err) => {
        console.warn("Centralized lead submission notice:", err);
      });

      // 2. Direct email dispatcher to leads@aromabites.in (with autoresponder setup)
      await fetch("https://formsubmit.co/ajax/leads@aromabites.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "new enquiry",
          _template: "table",
          _captcha: "false",
          _from: "noreply@aromabites.in",
          _replyto: formData.email,
          _autoresponse: `Hi ${formData.name || "there"},\n\nThank you for submitting your enquiry with AromaBites! We have received your request for the ${formData.packageSelection}.\n\nOur nutrition and chef team is reviewing your preferences and will contact you on ${formData.contactNo} shortly to confirm your tasting slot (${formData.tastingSlot}).\n\nWarm regards,\nTeam AromaBites\nwww.aromabites.in\nContact: leads@aromabites.in`,
          email: formData.email,
          "Customer Name": formData.name,
          "Contact Number": formData.contactNo,
          "Email Address": formData.email || "Not Provided",
          "Package Selected": formData.packageSelection,
          "Tasting Slot": formData.tastingSlot,
          "Complete Address": `${formData.streetAddress}, ${formData.city}, ${formData.district}, ${formData.state}, ${formData.country}`,
          "Preferences / Allergies": formData.descriptionAllergies || "None",
          "Date & Time": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      }).catch((err) => {
        console.warn("Direct email delivery fallback:", err);
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
        setShowPlanModal(false);
      }, 4000);
    }
  };

  const serviceLocations = [
    { name: "Dilshad Garden", hub: "East Delhi", icon: "🏡", popular: true },
    { name: "Dilshad Colony", hub: "East Delhi", icon: "🌿", popular: false },
    { name: "New Seemapuri", hub: "East Delhi", icon: "📍", popular: false },
    { name: "Shalimar Garden", detail: "Extension 1 & 2", hub: "Ghaziabad", icon: "🏙️", popular: true },
    { name: "Vivek Vihar", detail: "Phase 1 & 2", hub: "East Delhi", icon: "✨", popular: true },
    { name: "Jhilmil Colony", hub: "East Delhi", icon: "🍱", popular: false },
    { name: "Jhilmil Industrial Area", hub: "Commercial Hub", icon: "🏢", popular: true },
    { name: "Tahirpur", hub: "East Delhi", icon: "📍", popular: false },
    { name: "GTB Enclave", hub: "East Delhi", icon: "🏥", popular: true },
    { name: "Old Seemapuri", hub: "East Delhi", icon: "📍", popular: false },
    { name: "Sunder Nagri", hub: "East Delhi", icon: "🏡", popular: false },
    { name: "Harsh Vihar", hub: "East Delhi", icon: "📍", popular: false },
    { name: "Surajmal Vihar", hub: "East Delhi", icon: "🌟", popular: true },
    { name: "Mansarovar Park", hub: "East Delhi", icon: "🌳", popular: false },
    { name: "Shahdara", hub: "East Delhi Central", icon: "🏛️", popular: true },
    { name: "Krishna Nagar", hub: "East Delhi", icon: "🛍️", popular: true },
  ];

  useEffect(() => {
    // Smooth progress counter for the preloader matching the reference (up to 100%)
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + diff);
      });
    }, 180);

    const timer = setTimeout(() => {
      setLoadingProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }, 2400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  const storyCategories = [
    "All stories",
    "Weight Loss",
    "Muscle Gain",
    "Performance",
    "Maintain & Energise",
    "Healthy Lifestyle",
    "Special Diets",
  ];

  const stories = [
    {
      name: "Vikram & Ananya Sharma",
      age: "Daily Subscribers",
      role: "Working Couple, Preet Vihar",
      initials: "VS",
      rating: 5,
      foodImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      quote:
        "AromaBites made our daily lunch & dinner routine truly effortless! The food is consistently fresh, delicious, perfectly balanced with zero excess oil, and beautifully delivered every single day.",
      category: "Weight Loss",
    },
    {
      name: "Rajesh Singhania",
      age: "Tech Director",
      role: "Corporate Hub, Noida Sec 62",
      initials: "RS",
      rating: 5,
      foodImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
      quote:
        "Subscribed to their Bespoke macro plan for 6 months now. The food hygiene is excellent, macro counts are accurate, and insulated thermal delivery ensures it's piping hot right before my lunch slot.",
      category: "Muscle Gain",
    },
    {
      name: "Dr. Arjun & Radhika Patel",
      age: "Healthcare & Law",
      role: "Medical Professionals, Vivek Vihar",
      initials: "AP",
      rating: 5,
      foodImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
      quote:
        "Between long hospital shifts and court hearings, cooking clean meals was impossible. AromaBites' home-style menu and 100% cold-pressed oil cooking have given us sustained energy and zero bloating!",
      category: "Healthy Lifestyle",
    },
    {
      name: "Pooja Malhotra",
      age: "Fitness Coach",
      role: "East Delhi Central",
      initials: "PM",
      rating: 5,
      foodImage: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=600&q=80",
      quote:
        "As a fitness trainer, finding a tiffin that genuinely delivers 40g+ clean protein without boring plain boiled food was a dream. AromaBites Macro pass is unmatched in quality!",
      category: "Performance",
    },
  ];

  const communityAvatars = [
    { name: "Rahul S.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
    { name: "Pooja V.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
    { name: "Aditya M.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { name: "Sneha G.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" },
    { name: "Neha K.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
    { name: "Aman D.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { name: "Kavita R.", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" },
    { name: "Siddharth J.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" },
  ];

  const filteredStories =
    activeStoryFilter === "All stories"
      ? stories
      : stories.filter((s) => s.category === activeStoryFilter || activeStoryFilter === "Weight Loss");

  const pressLogos = [
    "GQ",
    "GLAMOUR",
    "WOMEN'S HEALTH",
    "BUSINESS INSIDER",
    "THE TIMES",
    "BAZAAR",
    "MARIE CLAIRE",
    "STYLIST",
    "VOGUE",
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF6ED] text-[#3E2511] font-sans selection:bg-[#F5B318] selection:text-[#2E1B0A] overflow-x-clip">
      {/* ========================================================= */}
      {/* 0. ANIMATED PRELOADER & CURTAIN REVEAL (Strict Pixel-Perfect Match to Reference Image) */}
      {/* ========================================================= */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF9EB] overflow-hidden select-none font-poppins"
          >
            {/* Background Organic Wave Accents on Corners */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Top-left curved warm shape */}
              <div className="absolute -top-12 -left-12 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#F5E6CC]/40 blur-2xl" />
              {/* Bottom-right curved warm shape */}
              <div className="absolute -bottom-16 -right-16 w-72 h-72 sm:w-[450px] sm:h-[450px] rounded-full bg-[#F3E2C4]/40 blur-2xl" />
              {/* Top-right soft tint */}
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-bl from-[#F6E9D2]/30 to-transparent pointer-events-none" />
              {/* Bottom-left soft tint */}
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-tr from-[#F6E9D2]/30 to-transparent pointer-events-none" />
            </div>

            {/* Central Stage Wrapper maintaining 16:9 relative aspect ratio matching the 1024x576 reference */}
            <div className="relative w-full max-w-5xl aspect-[16/9] min-h-[480px] max-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-8">

              {/* Large, Subtle Dashed Circular / Oval Ring outline around the central composition */}
              <div className="absolute inset-x-12 sm:inset-x-20 top-12 sm:top-14 bottom-14 sm:bottom-16 border-[1.5px] border-dashed border-[#F4B000]/35 rounded-[50%] pointer-events-none z-0" />

              {/* =================================================== */}
              {/* 3. FOOD DECORATIONS (Pixel Placed from Reference) */}
              {/* =================================================== */}

              {/* Upper-Left: Avocado Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: -12,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.1 },
                  scale: { duration: 0.5, delay: 0.1 },
                  y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
                }}
                className="absolute top-[8%] left-[8%] sm:left-[10%] w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 z-10 select-none pointer-events-none"
              >
                <img
                  src="/preloader-avocado.png"
                  alt="Avocado"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
                />
              </motion.div>

              {/* Leaf near avocado */}
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                className="absolute top-[28%] left-[7%] sm:left-[8%] w-5 h-5 sm:w-7 sm:h-7 z-10 select-none pointer-events-none"
              >
                <img
                  src="/preloader-leaf-1.png"
                  alt="Leaf"
                  className="w-full h-full object-contain filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.08)]"
                />
              </motion.div>

              {/* Upper-Right: Fresh Salad Bowl */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.15 },
                  scale: { duration: 0.5, delay: 0.15 },
                  y: { repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.3 },
                }}
                className="absolute top-[8%] right-[8%] sm:right-[10%] w-18 h-18 sm:w-28 sm:h-28 md:w-32 md:h-32 z-10 select-none pointer-events-none"
              >
                <img
                  src="/preloader-salad.png"
                  alt="Fresh Salad Bowl"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.14)]"
                />
              </motion.div>

              {/* Leaf top-right near salad */}
              <motion.div
                animate={{ y: [0, -4, 0], rotate: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[7%] right-[22%] sm:right-[23%] w-5 h-5 sm:w-7 sm:h-7 z-10 select-none pointer-events-none"
              >
                <img
                  src="/preloader-leaf-2.png"
                  alt="Leaf"
                  className="w-full h-full object-contain filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.08)]"
                />
              </motion.div>

              {/* Lower-Left: Tiffin Meal Bento Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: -6,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.2 },
                  scale: { duration: 0.5, delay: 0.2 },
                  y: { repeat: Infinity, duration: 3.4, ease: "easeInOut", delay: 0.6 },
                }}
                className="absolute bottom-[10%] left-[5%] sm:left-[6%] md:left-[7%] w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 z-10 select-none pointer-events-none"
              >
                <img
                  src="/preloader-bento.png"
                  alt="Tiffin Meal Box"
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.16)]"
                />
              </motion.div>

              {/* Leaf near bento */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.9, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-[7%] left-[18%] sm:left-[19%] w-5 h-5 sm:w-6 sm:h-6 z-10 select-none pointer-events-none"
              >
                <img
                  src="/preloader-leaf-4.png"
                  alt="Leaf"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.06)]"
                />
              </motion.div>

              {/* Lower-Right: Whole Lemon Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 4,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.25 },
                  scale: { duration: 0.5, delay: 0.25 },
                  y: { repeat: Infinity, duration: 3.6, ease: "easeInOut", delay: 0.4 },
                }}
                className="absolute bottom-[10%] right-[7%] sm:right-[9%] md:right-[10%] w-18 h-18 sm:w-28 sm:h-28 md:w-32 md:h-32 z-10 select-none pointer-events-none"
              >
                <img
                  src="/preloader-lemon.png"
                  alt="Lemon"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(244,176,0,0.25)]"
                />
              </motion.div>

              {/* Leaf right above lemon */}
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.1, ease: "easeInOut", delay: 0.7 }}
                className="absolute bottom-[46%] right-[8%] sm:right-[10%] w-5 h-5 sm:w-7 sm:h-7 z-10 select-none pointer-events-none"
              >
                <img
                  src="/preloader-leaf-3.png"
                  alt="Leaf"
                  className="w-full h-full object-contain filter drop-shadow-[0_3px_6px_rgba(0,0,0,0.08)]"
                />
              </motion.div>

              {/* =================================================== */}
              {/* CENTRAL COMPOSITION CONTENT */}
              {/* =================================================== */}
              <div className="relative z-20 flex flex-col items-center text-center max-w-xl mx-auto">

                {/* 1. TOP SECTION: Chef Hat Icon + Burst Sparkles + Yellow Rounded Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center mb-3 sm:mb-4"
                >
                  {/* Small Orange Chef Hat Icon with Burst Accents */}
                  <div className="flex items-center justify-center gap-1.5 mb-1.5">
                    {/* Left 3 Orange Radiating Burst Lines */}
                    <svg className="w-4 h-4 text-[#E87524]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="8" y1="12" x2="2" y2="10" />
                      <line x1="9" y1="7" x2="4" y2="4" />
                      <line x1="13" y1="5" x2="11" y2="1" />
                    </svg>

                    {/* Chef Hat Icon */}
                    <div className="w-8 h-8 text-[#E87524] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                        <line x1="6" y1="17" x2="18" y2="17" />
                      </svg>
                    </div>

                    {/* Right 3 Orange Radiating Burst Lines */}
                    <svg className="w-4 h-4 text-[#E87524]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="16" y1="12" x2="22" y2="10" />
                      <line x1="15" y1="7" x2="20" y2="4" />
                      <line x1="11" y1="5" x2="13" y2="1" />
                    </svg>
                  </div>

                  {/* Rounded Golden-Yellow Badge */}
                  <div className="bg-[#FBE4AC] border border-[#F4B000]/50 text-[#402000] font-poppins font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.22em] px-6 sm:px-8 py-1.5 rounded-full shadow-[0_2px_8px_rgba(244,176,0,0.2)]">
                    FRESH | HEALTHY | DELICIOUS
                  </div>
                </motion.div>

                {/* 2. CENTER SECTION: Original Transparent Aroma Bites Tiffin Services Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  className="my-1 sm:my-2 flex justify-center"
                >
                  <img
                    src="/logo.png"
                    alt="Tiffin Services By Aroma Bites"
                    className="h-20 sm:h-28 md:h-36 w-auto object-contain filter drop-shadow-[0_8px_16px_rgba(244,176,0,0.3)] transition-transform"
                  />
                </motion.div>

                {/* 3. MAIN TAGLINE: "Fresh Meals, Happy Days." */}
                {/* Poppins ExtraBold (font-black), Dark Brown (#402000) for "Fresh Meals,", Vibrant Orange (#E87524) for "Happy Days." */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="relative my-2 sm:my-3"
                >
                  <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight flex items-center justify-center gap-2">
                    <span className="text-[#402000]">Fresh Meals,</span>
                    <span className="text-[#E87524]">Happy Days.</span>
                    {/* Small upper-right orange accent ticks */}
                    <span className="text-[#E87524] text-xs sm:text-sm font-black -mt-4 select-none">
                      ///
                    </span>
                  </h2>

                  {/* Warm curved swoop line beneath tagline */}
                  <div className="w-36 sm:w-56 h-[3px] bg-gradient-to-r from-transparent via-[#E87524] to-transparent rounded-full mx-auto mt-1 opacity-90" />
                </motion.div>

                {/* 4. BENEFITS ROW: 3 Benefits Displayed Horizontally */}
                {/* Small orange icons, brown text, subtle vertical separators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 font-poppins font-semibold text-xs sm:text-sm text-[#402000] mt-2 sm:mt-3"
                >
                  {/* Benefit 1: Freshly Prepared */}
                  <div className="flex items-center gap-1.5">
                    {/* Orange Cloche Cover Icon */}
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E87524] fill-current" viewBox="0 0 24 24">
                      <path d="M12 4a1 1 0 0 1 1 1v.07A9.004 9.004 0 0 1 21 14v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a9.004 9.004 0 0 1 8-8.93V5a1 1 0 0 1 1-1zm-8 14h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    </svg>
                    <span>Freshly Prepared</span>
                  </div>

                  {/* Subtle Separator */}
                  <span className="text-[#F0E5CF] font-light select-none">|</span>

                  {/* Benefit 2: Wholesome Food */}
                  <div className="flex items-center gap-1.5">
                    {/* Orange Leaves Icon */}
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E87524] fill-current" viewBox="0 0 24 24">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                    </svg>
                    <span>Wholesome Food</span>
                  </div>

                  {/* Subtle Separator */}
                  <span className="text-[#F0E5CF] font-light select-none">|</span>

                  {/* Benefit 3: Delivered Daily */}
                  <div className="flex items-center gap-1.5">
                    {/* Orange Delivery Scooter Icon */}
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E87524] fill-current" viewBox="0 0 24 24">
                      <path d="M19 13a4 4 0 1 1-4 4 4 4 0 0 1 4-4m-12 0a4 4 0 1 1-4 4 4 4 0 0 1 4-4m12 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2m-12 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2m7-5v3h3.5l1.6-3zm-2-2h-3v2h2.2l1.6 3H12v2h2a2 2 0 0 1 2 2h3a2 2 0 0 1 2-2v-1a2 2 0 0 0-2-2h-.6l-2-4A2 2 0 0 0 16.5 8H12m-6 2H3V8h3z" />
                    </svg>
                    <span>Delivered Daily</span>
                  </div>
                </motion.div>

                {/* 5. LOADING PROGRESS: Percentage Indicator + Rounded Candy-Stripe Progress Bar */}
                <div className="w-full max-w-sm sm:max-w-md mt-4 sm:mt-5">
                  {/* Percentage Indicator Above Progress Bar */}
                  <div className="w-full flex justify-end mb-1 pr-1">
                    <div className="bg-[#FBE4AC] border border-[#F4B000]/40 text-[#402000] font-poppins font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md shadow-xs">
                      {loadingProgress}%
                    </div>
                  </div>

                  {/* Long Horizontal Rounded Progress Track */}
                  <div className="w-full h-3.5 sm:h-4 bg-[#F0E5CF] rounded-full p-0.5 shadow-inner overflow-hidden border border-white">
                    <motion.div
                      className="h-full rounded-full candy-stripe-progress shadow-sm transition-all duration-200"
                      style={{ width: `${loadingProgress}%` }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Chatbot Assistant (Above WhatsApp) */}
      <FloatingChatbot onOpenPlan={() => setShowPlanModal(true)} />

      {/* Floating WhatsApp Contact Button */}
      <a
        href="https://wa.me/919958585172?text=Hi%20AromaBites,%20I%20would%20like%20to%20know%20more%20about%20your%20healthy%20tiffin%20plans!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] px-4 py-3 rounded-full flex items-center gap-2.5 transition-all duration-300 hover:scale-105 group border-2 border-white/20"
        title="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>



      {/* ========================================================= */}
      {/* REDESIGNED HOMEPAGE SECTIONS (STRICT ORDER) */}
      {/* 1. Hero */}
      {/* 2. Locations */}
      {/* 3. About Us */}
      {/* 4. Benefits */}
      {/* 5. Achievements (Trust & Statistics) */}
      {/* 6. Target Audience (Who We Serve) */}
      {/* 7. Comparison (Food Struggles vs Aroma Bites) */}
      {/* 8. Packages (Meal Subscription Plans) */}
      {/* 9. Reviews (Customer Reviews) */}
      {/* 10. FAQs */}
      {/* 11. Final CTA */}
      {/* ========================================================= */}
      <HeaderNavigation onOpenPlan={() => setShowPlanModal(true)} />

      <main>
        {/* 1. Hero */}
        <HeroSection
          onOpenPlan={() => setShowPlanModal(true)}
          onOpenVideo={() => setShowVideoModal(true)}
          cmsContent={getSectionFields(1)}
        />

        {/* 2. Locations */}
        <DeliveryAreasSection
          onCheckArea={() => setShowPlanModal(true)}
          cmsAreas={cmsData?.delivery_areas}
          cmsContent={getSectionFields(2)}
        />

        {/* 3. About Us */}
        <AboutSection
          onOpenPlan={() => setShowPlanModal(true)}
          cmsContent={getSectionFields(3)}
        />

        {/* 4. Benefits */}
        <WhySwitch
          onOpenPlan={() => setShowPlanModal(true)}
          cmsContent={getSectionFields(4)}
        />

        {/* 5. Achievements */}
        <TrustStatistics onSubscribe={() => setShowPlanModal(true)} />

        {/* 6. Target Audience */}
        <WhoWeServe onExplore={() => setShowPlanModal(true)} />

        {/* 7. Comparison */}
        <StrugglesComparison />

        {/* 8. Packages */}
        <MealPlansSection
          selectedMealSlot={selectedMealSlot}
          onSelectMealSlot={setSelectedMealSlot}
          onSelectPlan={(planName) => {
            setFormData({ ...formData, packageSelection: planName, tastingSlot: selectedMealSlot + " - Slot" });
            setShowPlanModal(true);
          }}
          cmsPlans={cmsData?.meal_plans}
          cmsContent={getSectionFields(8)}
        />

        {/* 9. Reviews */}
        <CustomerReviews
          onJoin={() => setShowPlanModal(true)}
          onOpenVideo={() => setShowVideoModal(true)}
          cmsTestimonials={cmsData?.testimonials}
          cmsContent={getSectionFields(9)}
        />

        {/* 10. FAQs */}
        <FaqSection
          cmsFaqs={cmsData?.faqs}
          cmsContent={getSectionFields(10)}
        />

        {/* 11. Final CTA */}
        <FinalCtaSection onOpenPlan={() => setShowPlanModal(true)} />
      </main>

      <Footer onOpenPlan={() => setShowPlanModal(true)} />

      {/* ========================================================= */}
      {/* 10. MODAL TO PLAY REFERENCE MP4 VIDEO DIRECTLY */}
      {/* ========================================================= */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl bg-[#402000] text-white rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
              <div className="flex items-center justify-between p-4 bg-[#2e1700] text-white">
                <span className="text-sm font-bold flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#F4B000]" />
                  How Aroma Bites Works
                </span>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/80 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-black flex items-center justify-center">
                <video
                  src="/Website%20Animation_1382p.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ========================================================= */}
      {/* 11. "CREATE MY PLAN" POPUP MODAL FORM */}
      {/* ========================================================= */}
      <AnimatePresence>
        {showPlanModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#2E1B0A] text-white rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 my-8"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 bg-[#1F1206] border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#F5B318]/15 text-[#F5B318] text-[11px] font-black uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Custom Nutrition Plan
                  </div>
                  <h3 className="text-2xl font-serif font-black text-white">Create Your Personal Plan</h3>
                </div>
                <button
                  onClick={() => setShowPlanModal(false)}
                  className="p-2 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              {formSubmitted ? (
                <div className="p-8 text-center py-16">
                  <div className="w-16 h-16 bg-[#F5B318] text-[#2E1B0A] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black shadow-lg">
                    ✓
                  </div>
                  <h4 className="text-2xl font-serif font-black text-white mb-2">Enquiry Received!</h4>
                  <p className="text-white/80 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.name || "Foodie"}</strong>. Your enquiry has been received and our team will get in touch on <strong>{formData.contactNo}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
                  {/* Name & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full bg-[#3E2511] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F5B318]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Contact No. *
                      </label>
                      <input
                        type="tel"
                        name="contactNo"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.contactNo}
                        onChange={handleFormChange}
                        className="w-full bg-[#3E2511] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F5B318]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Email ID *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full bg-[#3E2511] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F5B318]"
                    />
                  </div>

                  {/* Complete Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Complete Address (Street Address) *
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      required
                      placeholder="Flat/House No., Building, Street Name"
                      value={formData.streetAddress}
                      onChange={handleFormChange}
                      className="w-full bg-[#3E2511] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F5B318] mb-2.5"
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <input
                        type="text"
                        name="city"
                        placeholder="City/Town"
                        value={formData.city}
                        onChange={handleFormChange}
                        className="bg-[#3E2511] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F5B318]"
                      />
                      <input
                        type="text"
                        name="district"
                        placeholder="District"
                        value={formData.district}
                        onChange={handleFormChange}
                        className="bg-[#3E2511] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F5B318]"
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleFormChange}
                        className="bg-[#3E2511] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F5B318]"
                      />
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleFormChange}
                        className="bg-[#3E2511] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F5B318]"
                      />
                    </div>
                  </div>

                  {/* Package Selection & Tasting Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Package Selection *
                      </label>
                      <select
                        name="packageSelection"
                        value={formData.packageSelection}
                        onChange={handleFormChange}
                        className="w-full bg-[#3E2511] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F5B318]"
                      >
                        <option value="Select Plan (₹199/meal)">Select Plan (₹199 / meal)</option>
                        <option value="Bespoke Plan (₹279/meal)">Bespoke Plan (₹279 / meal) — Most Popular</option>
                        <option value="Macro High-Protein (₹249/meal)">Macro Plan (₹249 / meal)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Tasting Slot *
                      </label>
                      <select
                        name="tastingSlot"
                        value={formData.tastingSlot}
                        onChange={handleFormChange}
                        className="w-full bg-[#3E2511] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F5B318]"
                      >
                        <option value="Breakfast - 8 AM">Breakfast - 8 AM</option>
                        <option value="Lunch - 1 PM">Lunch - 1 PM</option>
                        <option value="Dinner - 8 PM">Dinner - 8 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Description / Any Allergies */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Description / Any Allergies
                    </label>
                    <textarea
                      name="descriptionAllergies"
                      rows={3}
                      placeholder="Mention any preferences, allergies, or fitness goals (e.g., lactose intolerant, low oil, no onions, high protein...)"
                      value={formData.descriptionAllergies}
                      onChange={handleFormChange}
                      className="w-full bg-[#3E2511] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F5B318] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F5B318] text-[#2E1B0A] hover:bg-[#FFC83B] py-3.5 px-6 rounded-full font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-[#2E1B0A] border-t-transparent rounded-full animate-spin" />
                          <span>Sending Your Plan Request...</span>
                        </div>
                      ) : (
                        <>
                          <span>Confirm &amp; Start Tasting Plan</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-white/60 text-center mt-2">
                      🔒 100% Satisfaction Guarantee • No advance payment required for tasting confirmation
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
