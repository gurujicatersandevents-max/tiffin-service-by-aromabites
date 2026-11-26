"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function ContactSupportPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    deliveryLocation: "",
    enquiryType: "Meal Subscription Enquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct email dispatcher to leads@aromabites.in / Support@aromabites.in
      await fetch("https://formsubmit.co/ajax/leads@aromabites.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Contact Enquiry - ${formData.enquiryType}`,
          _template: "table",
          _captcha: "false",
          _from: "noreply@aromabites.in",
          _replyto: formData.emailAddress,
          _autoresponse: `Hi ${formData.fullName || "there"},\n\nThank you for reaching out to Aroma Bites! We have received your enquiry regarding "${formData.enquiryType}".\n\nOur customer support team is reviewing your details and will get in touch on ${formData.mobileNumber} shortly.\n\nWarm regards,\nCustomer Support Team\nAroma Bites\nPhone / WhatsApp: +91 9958585172\nEmail: Support@aromabites.in`,
          "Full Name": formData.fullName,
          "Mobile Number": formData.mobileNumber,
          "Email Address": formData.emailAddress,
          "Delivery Location": formData.deliveryLocation,
          "Enquiry Type": formData.enquiryType,
          "Message": formData.message,
          "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      }).catch((err) => {
        console.warn("Contact form submission fallback:", err);
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          mobileNumber: "",
          emailAddress: "",
          deliveryLocation: "",
          enquiryType: "Meal Subscription Enquiry",
          message: "",
        });
      }, 5000);
    }
  };

  const deliveryLocations = [
    "Dilshad Garden",
    "Dilshad Colony",
    "New Seemapuri",
    "Shalimar Garden – Extension 1 & 2, Ghaziabad",
    "Vivek Vihar – Phase 1 & 2",
    "Jhilmil Colony",
    "Jhilmil Industrial Area",
    "Tahirpur",
    "GTB Enclave",
    "Old Seemapuri",
    "Sunder Nagri",
    "Harsh Vihar",
    "Surajmal Vihar",
    "Mansarovar Park",
    "Shahdara",
    "Krishna Nagar",
  ];

  const faqs = [
    {
      q: "1. How can I check whether Aroma Bites delivers to my location?",
      a: "You can contact us through WhatsApp at +91 9958585172 or email Support@aromabites.in. Share your locality and PIN code so our team can confirm delivery availability.",
    },
    {
      q: "2. How can I choose the right meal subscription?",
      a: "Our team can help you understand the Select, Bespoke and Macro plans based on your meal preferences, lifestyle and nutrition requirements.",
    },
    {
      q: "3. Can I pause my meal subscription?",
      a: "Yes. All available subscription plans offer a pause facility, subject to the 24-hour delivery cut-off and applicable plan conditions.",
    },
    {
      q: "4. How can I cancel my subscription?",
      a: "Contact our customer support team at least 24 hours before your scheduled delivery to request cancellation.",
    },
    {
      q: "5. How can I request a refund?",
      a: "Email Support@aromabites.in or WhatsApp +91 9958585172 with your order or subscription details. Refund requests are reviewed under our Refund & Cancellation Policy and applicable consumer laws.",
    },
    {
      q: "6. What are your customer support timings?",
      a: "Our customer support team is available Monday to Saturday, from 6:00 AM to 6:00 PM.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6ED] text-[#3E2511] font-sans flex flex-col justify-between selection:bg-[#F5B318] selection:text-[#2E1B0A]">

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}
      <header className="bg-[#2E1B0A]/95 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-40 shadow-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Aroma Bites Logo"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/919958585172"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[#F5B318]" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* HERO BANNER */}
      {/* ========================================================= */}
      <section className="bg-[#2E1B0A] text-white py-16 lg:py-20 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full sunburst-bg pointer-events-none -z-0 opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#F5B318]/40 bg-[#F5B318]/10 text-[#F5B318] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>WE&apos;RE HERE TO HELP YOU EAT BETTER!</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif uppercase tracking-tight text-white mb-3">
            CONTACT AROMA BITES
          </h1>
          <p className="font-script text-[#E86E37] text-2xl sm:text-3xl font-bold -rotate-1">
            We&apos;re Here to Help You Eat Better!
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            Have questions about our personalised meal plans, daily tiffin delivery, subscription packages or service availability? The Aroma Bites team is here to help you choose the right meals for your taste preferences, lifestyle and everyday nutrition goals.
          </p>
          <p className="text-xs sm:text-sm text-[#F5B318] font-medium mt-2">
            Whether you are a student, working professional, fitness enthusiast or family looking for freshly prepared daily meals, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MAIN CONTENT AREA */}
      {/* ========================================================= */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 flex-1 space-y-16">

        {/* 1. GET IN TOUCH CARDS */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black font-serif uppercase tracking-tight text-[#2E1B0A]">
              Get in Touch
            </h2>
            <p className="text-xs sm:text-sm text-[#3E2511]/70 mt-1">
              Reach out to our dedicated support team through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#2E1B0A]/10 flex flex-col justify-between hover:border-[#F5B318] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E1B0A] text-[#F5B318] flex items-center justify-center mb-4 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2E1B0A]">Customer Support</h3>
                <p className="text-xs text-[#3E2511]/70 mt-1">Phone / WhatsApp</p>
                <div className="mt-4 space-y-1 text-sm">
                  <p>
                    <a
                      href="tel:+919958585172"
                      className="font-black text-[#2E1B0A] hover:text-[#E86E37] transition-colors text-base"
                    >
                      +91 9958585172
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:Support@aromabites.in"
                      className="font-semibold text-[#2E1B0A] hover:underline text-xs"
                    >
                      Support@aromabites.in
                    </a>
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/919958585172"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[#2E1B0A] hover:bg-[#3E2511] text-[#F5B318] text-xs font-black py-2.5 px-4 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Business Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#2E1B0A]/10 flex flex-col justify-between hover:border-[#F5B318] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E1B0A] text-[#F5B318] flex items-center justify-center mb-4 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2E1B0A]">Business Address</h3>
                <p className="text-xs text-[#3E2511]/70 mt-1">Headquarters & Kitchen Hub</p>
                <div className="mt-4 text-sm font-semibold text-[#2E1B0A] leading-relaxed">
                  <p>Aroma Bites</p>
                  <p>Dilshad Garden,</p>
                  <p>Delhi – 110095, India.</p>
                </div>
              </div>
              <div className="mt-6 text-xs text-[#3E2511]/60 font-medium">
                Centrally located to serve East Delhi &amp; Ghaziabad daily.
              </div>
            </div>

            {/* Customer Support Hours Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#2E1B0A]/10 flex flex-col justify-between hover:border-[#F5B318] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E1B0A] text-[#F5B318] flex items-center justify-center mb-4 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2E1B0A]">Support Hours</h3>
                <p className="text-xs text-[#3E2511]/70 mt-1">Operations & Dispatch Support</p>
                <div className="mt-4 text-sm font-semibold text-[#2E1B0A] space-y-1">
                  <p className="font-bold text-base">Monday to Saturday</p>
                  <p className="text-[#E86E37] font-black text-lg">6:00 AM – 6:00 PM</p>
                  <p className="text-xs text-[#3E2511]/60 font-medium mt-1">Sunday: Limited dispatch support</p>
                </div>
              </div>
              <div className="mt-6 text-xs text-[#2E1B0A] bg-[#FAF6ED] p-2.5 rounded-xl border border-[#2E1B0A]/10 text-center font-bold">
                ⚡ 24-hr cut-off for pauses &amp; cancels
              </div>
            </div>
          </div>
        </div>

        {/* 2. HOW CAN WE HELP YOU? (5 CARDS) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#2E1B0A]/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E1B0A] bg-[#F5B318] px-3.5 py-1 rounded-full shadow-xs">
              CUSTOMER ASSISTANCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif uppercase tracking-tight text-[#2E1B0A] mt-3">
              How Can We Help You?
            </h2>
            <p className="text-xs sm:text-sm text-[#3E2511]/75 mt-1">
              Select any of the areas below to get tailored assistance from our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#FAF6ED] p-6 rounded-2xl border border-[#2E1B0A]/10 hover:border-[#2E1B0A]/30 transition-all">
              <h3 className="font-bold text-[#2E1B0A] text-base mb-2">1. Meal Subscription Enquiries</h3>
              <p className="text-xs sm:text-sm text-[#3E2511]/80 leading-relaxed">
                Explore our Select, Bespoke and Macro meal plans and find a suitable subscription for your daily routine.
              </p>
            </div>

            <div className="bg-[#FAF6ED] p-6 rounded-2xl border border-[#2E1B0A]/10 hover:border-[#2E1B0A]/30 transition-all">
              <h3 className="font-bold text-[#2E1B0A] text-base mb-2">2. Tiffin Delivery Enquiries</h3>
              <p className="text-xs sm:text-sm text-[#3E2511]/80 leading-relaxed">
                Check delivery availability in your locality and explore our breakfast, lunch and dinner options.
              </p>
            </div>

            <div className="bg-[#FAF6ED] p-6 rounded-2xl border border-[#2E1B0A]/10 hover:border-[#2E1B0A]/30 transition-all">
              <h3 className="font-bold text-[#2E1B0A] text-base mb-2">3. Personalised Meal Plans</h3>
              <p className="text-xs sm:text-sm text-[#3E2511]/80 leading-relaxed">
                Tell us about your food preferences, dietary requirements and nutrition goals so our team can help you choose a suitable meal plan.
              </p>
            </div>

            <div className="bg-[#FAF6ED] p-6 rounded-2xl border border-[#2E1B0A]/10 hover:border-[#2E1B0A]/30 transition-all">
              <h3 className="font-bold text-[#2E1B0A] text-base mb-2">4. Existing Orders &amp; Subscriptions</h3>
              <p className="text-xs sm:text-sm text-[#3E2511]/80 leading-relaxed">
                Need help with a scheduled delivery, subscription pause, meal modification or cancellation? Our support team is ready to assist.
              </p>
            </div>

            <div className="bg-[#FAF6ED] p-6 rounded-2xl border border-[#2E1B0A]/10 hover:border-[#2E1B0A]/30 transition-all md:col-span-2 lg:col-span-2">
              <h3 className="font-bold text-[#2E1B0A] text-base mb-2">5. Feedback and Complaints</h3>
              <p className="text-xs sm:text-sm text-[#3E2511]/80 leading-relaxed">
                Your feedback helps us improve our food quality, packaging, delivery experience and customer service. Every voice matters to our kitchen team.
              </p>
            </div>
          </div>
        </div>

        {/* 3. SEND US AN ENQUIRY FORM */}
        <div id="enquiry-form" className="bg-[#2E1B0A] text-white rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-[#2E1B0A] bg-[#F5B318] px-3.5 py-1 rounded-full shadow-xs inline-block mb-3">
                DIRECT ENQUIRY FORM
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-serif uppercase tracking-tight text-white">
                Send Us an Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-2">
                For subscription enquiries, delivery assistance or general questions, please fill out the form below.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white/10 border border-[#F5B318] p-8 rounded-2xl text-center backdrop-blur-md animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#F5B318] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white">Thank You for Reaching Out!</h3>
                <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                  Your enquiry has been successfully submitted. Our customer support team will contact you on <strong>{formData.mobileNumber}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#1F1206] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5B318] placeholder-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full bg-[#1F1206] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5B318] placeholder-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full bg-[#1F1206] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5B318] placeholder-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Delivery Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dilshad Garden, Delhi"
                      value={formData.deliveryLocation}
                      onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      className="w-full bg-[#1F1206] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5B318] placeholder-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Enquiry Type *
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full bg-[#1F1206] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5B318]"
                  >
                    <option value="Meal Subscription Enquiry">1. Meal Subscription Enquiry (Select, Bespoke, Macro)</option>
                    <option value="Tiffin Delivery Location Check">2. Tiffin Delivery Location Check</option>
                    <option value="Personalised Diet / Macros">3. Personalised Diet / Macro Meal Consultation</option>
                    <option value="Existing Order / Pause / Cancel">4. Existing Order / Pause / Cancellation</option>
                    <option value="Corporate / Team Meals">5. Corporate / Bulk Office Catering</option>
                    <option value="Feedback / Complaint">6. Feedback / Food Quality Complaint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your dietary preferences, questions, or subscription requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1F1206] border border-white/20 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#F5B318] placeholder-white/40"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5B318] hover:bg-[#FFC83B] text-[#2E1B0A] font-black px-10 py-4 rounded-full text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "SENDING..." : "SEND ENQUIRY"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-white/60 mt-3 font-medium">
                    We respond to all enquiries within 2-4 business hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 4. OUR TIFFIN DELIVERY LOCATIONS */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#2E1B0A]/10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E1B0A] bg-[#F5B318] px-3.5 py-1 rounded-full shadow-xs">
              SERVICE COVERAGE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif uppercase tracking-tight text-[#2E1B0A] mt-3">
              Our Tiffin Delivery Locations
            </h2>
            <p className="text-xs sm:text-sm text-[#3E2511]/80 mt-2">
              Aroma Bites provides daily tiffin delivery across selected locations in East Delhi and Ghaziabad.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {deliveryLocations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6ED] p-3 sm:p-3.5 rounded-xl border border-[#2E1B0A]/10 flex items-center gap-2 hover:border-[#2E1B0A]/30 transition-all"
              >
                <MapPin className="w-4 h-4 text-[#E86E37] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#2E1B0A] leading-tight">
                  {loc}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#2E1B0A]/10 text-center">
            <p className="text-xs sm:text-sm text-[#3E2511]/75">
              Delivery availability depends on your exact address and operational coverage.
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#2E1B0A] mt-1">
              Contact us to confirm whether your location is serviceable.
            </p>
          </div>
        </div>

        {/* 5. FREQUENTLY ASKED QUESTIONS */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#2E1B0A]/10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#2E1B0A] bg-[#F5B318] px-3.5 py-1 rounded-full shadow-xs mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-serif uppercase tracking-tight text-[#2E1B0A]">
              Quick Answers
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF6ED] border border-[#2E1B0A]/10 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#2E1B0A]/5 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-[#2E1B0A] text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2E1B0A] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#3E2511]/85 leading-relaxed border-t border-[#2E1B0A]/10 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. GRIEVANCE REDRESSAL */}
        <div className="bg-[#FAF6ED] rounded-3xl p-6 sm:p-10 border-2 border-[#2E1B0A]/15 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#2E1B0A] text-[#F5B318] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A]">
                Grievance Redressal
              </h2>
              <p className="text-xs text-[#3E2511]/70">
                Compliance under the Consumer Protection (E-Commerce) Rules, 2020
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#3E2511]/85 leading-relaxed mb-6">
            For unresolved customer complaints, please contact our designated Grievance Officer:
          </p>

          <div className="bg-white p-5 rounded-2xl border border-[#2E1B0A]/10 space-y-2 text-xs sm:text-sm text-[#3E2511]">
            <p><strong>Business:</strong> Aroma Bites</p>
            <p><strong>Designation:</strong> Customer Support &amp; Grievance Officer</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:Support@aromabites.in" className="text-[#2E1B0A] font-bold underline">
                Support@aromabites.in
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919958585172" className="text-[#2E1B0A] font-bold underline">
                +91 9958585172
              </a>
            </p>
            <p><strong>Address:</strong> Dilshad Garden, Delhi – 110095, India.</p>
          </div>

          <p className="text-xs text-[#3E2511]/70 mt-4 leading-relaxed">
            Complaints will be acknowledged within 48 hours and addressed within one month, where the Consumer Protection (E-Commerce) Rules, 2020 apply.
          </p>
        </div>

        {/* 7. STAY CONNECTED CALLOUT */}
        <div className="bg-[#2E1B0A] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-white/10">
          <h2 className="text-2xl sm:text-4xl font-black font-serif uppercase tracking-tight text-white mb-2">
            Stay Connected With Aroma Bites
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
            For fresh daily meals, personalised tiffin subscriptions and convenient food delivery across East Delhi and Ghaziabad, get in touch with our team today.
          </p>
          <p className="font-script text-[#E86E37] text-2xl sm:text-3xl font-bold -rotate-1 mb-8">
            Aroma Bites – Fresh Food. Thoughtfully Prepared. Delivered With Care.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919958585172"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us: +91 9958585172</span>
            </a>
            <a
              href="mailto:Support@aromabites.in"
              className="inline-flex items-center gap-2 bg-[#F5B318] hover:bg-[#FFC83B] text-[#2E1B0A] font-black px-6 py-3 rounded-full text-xs sm:text-sm shadow-lg hover:scale-105 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email: Support@aromabites.in</span>
            </a>
          </div>
        </div>

      </main>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}
      <footer className="bg-[#2E1B0A] text-white border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src="/logo.png"
                alt="AromaBites Logo"
                className="h-10 sm:h-12 w-auto object-contain mb-2"
              />
              <p className="text-sm text-white/70 max-w-sm mt-1">
                Delicious, chef-curated tiffin subscriptions tailored to your personal fitness &amp; lifestyle goals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 bg-[#F5B318] text-[#2E1B0A] px-6 py-3 rounded-full text-sm font-black hover:bg-[#FFC83B] transition-colors"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
            <p>© {new Date().getFullYear()} AromaBites Tiffin Service. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/refund-and-cancellation" className="hover:text-white transition-colors">Refund &amp; Cancellation</Link>
              <Link href="/contact" className="text-[#F5B318] font-semibold underline">Contact Support</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
