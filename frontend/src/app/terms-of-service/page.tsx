import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | AromaBites Tiffin Service",
  description: "Read the Terms of Service of AromaBites. Learn about our meal plans, daily delivery, cancellations, and subscription policies.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#FAF6ED] text-[#3E2511] font-sans flex flex-col justify-between selection:bg-[#F5B318] selection:text-[#2E1B0A]">
      
      {/* ========================================================= */}
      {/* HEADER & NAVIGATION */}
      {/* ========================================================= */}
      <header className="bg-[#2E1B0A]/95 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-40 shadow-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="AromaBites Logo"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[#F5B318]" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* PAGE BANNER */}
      {/* ========================================================= */}
      <section className="bg-[#2E1B0A] text-white py-14 lg:py-16 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full sunburst-bg pointer-events-none -z-0 opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#F5B318]/40 bg-[#F5B318]/10 text-[#F5B318] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
            <FileText className="w-4 h-4" />
            <span>TERMS &amp; CONDITIONS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif uppercase tracking-tight text-white mb-3">
            Terms of Service
          </h1>
          <p className="font-script text-[#E86E37] text-2xl sm:text-3xl font-bold -rotate-1">
            Aroma Bites • Safe, Transparent &amp; Reliable
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-white/60 mt-4">
            <span><strong>Effective Date:</strong> 19 November 2026</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> 19 November 2026</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TERMS OF SERVICE CONTENT */}
      {/* ========================================================= */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 flex-1">
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-[#2E1B0A]/10 space-y-10 leading-relaxed text-sm sm:text-base text-[#3E2511]/85">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              1. Introduction
            </h2>
            <p>Welcome to <strong>Aroma Bites</strong>.</p>
            <p>
              These Terms of Service govern your access to and use of the Aroma Bites website, personalised meal plans, daily tiffin delivery services and subscription packages.
            </p>
            <p>
              By accessing our website, placing an order or purchasing a subscription, you agree to these Terms of Service.
            </p>
            <p className="bg-[#FAF6ED] p-4 rounded-xl border-l-4 border-[#2E1B0A] font-medium text-[#2E1B0A]">
              If you do not agree with these terms, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              2. About Aroma Bites
            </h2>
            <p>
              Aroma Bites provides freshly prepared daily meals and personalised tiffin subscription services designed around customers' food preferences, lifestyle requirements and nutrition goals.
            </p>
            <p>Our services may include:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-[#3E2511]/80">
              <li>Daily breakfast, lunch and dinner delivery.</li>
              <li>Vegetarian and other available meal options.</li>
              <li>Select meal subscriptions.</li>
              <li>Bespoke personalised meal plans.</li>
              <li>Macro-focused meal plans.</li>
              <li>Flexible subscription durations.</li>
              <li>Meal preferences and ingredient exclusions.</li>
              <li>Subscription pause and eligible modifications.</li>
            </ul>
            <p className="font-semibold text-[#2E1B0A] pt-1">
              Our services are currently available in selected areas of East Delhi and Ghaziabad.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              3. Eligibility
            </h2>
            <p>To use our services, you must:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Provide accurate personal and delivery information.</li>
              <li>Be legally capable of entering into a binding agreement.</li>
              <li>Have the authority to make purchases using your selected payment method.</li>
              <li>Comply with the terms and policies published on our website.</li>
            </ul>
            <p className="text-xs sm:text-sm text-[#3E2511]/75 mt-2">
              Where a purchase is made for a minor, the parent or lawful guardian must supervise and authorise the transaction as required by law.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              4. Meal Plans and Subscriptions
            </h2>
            <p>
              Aroma Bites offers different subscription packages according to meal requirements and customer preferences.
            </p>
            <p>Our plans may include:</p>
            
            <div className="space-y-3 pl-2 sm:pl-4">
              <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10">
                <h3 className="font-bold text-[#2E1B0A] text-base">Select Plan</h3>
                <p className="text-sm mt-0.5">Designed for customers seeking convenient everyday home-style meals.</p>
              </div>

              <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10">
                <h3 className="font-bold text-[#2E1B0A] text-base">Bespoke Plan</h3>
                <p className="text-sm mt-0.5">Designed for customers seeking personalised meal preferences and nutrition-oriented meal planning.</p>
              </div>

              <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10">
                <h3 className="font-bold text-[#2E1B0A] text-base">Macro Plan</h3>
                <p className="text-sm mt-0.5">Designed for customers who prioritise protein, calorie and macronutrient-focused meals.</p>
              </div>
            </div>

            <p className="text-sm">
              Breakfast, lunch and dinner options may be available depending on the selected plan and delivery location.
            </p>
            <p className="text-sm font-medium text-[#2E1B0A]">
              The actual inclusions, meal quantities, prices, duration and benefits will be displayed during the purchase process.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              5. Ordering and Payments
            </h2>
            <p>
              All subscription purchases must be completed through the payment methods made available by Aroma Bites.
            </p>
            <p className="font-semibold text-[#2E1B0A]">
              Our current payment arrangement is based on one-time payments.
            </p>
            <p>By placing an order, you authorise the applicable payment transaction for the selected subscription.</p>
            <p>Please note:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Your subscription payment is collected upfront as displayed at checkout.</li>
              <li>We do not automatically deduct recurring subscription payments.</li>
              <li>A new subscription requires a fresh order and affirmative purchase confirmation.</li>
              <li>Applicable taxes and charges will be communicated during checkout.</li>
              <li>Orders are subject to successful payment confirmation and delivery availability.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              6. Meal Preparation and Food Quality
            </h2>
            <p>Aroma Bites aims to prepare meals using suitable ingredients and hygienic food handling practices.</p>
            <p>We strive to provide:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Freshly prepared meals.</li>
              <li>Appropriate ingredient selection.</li>
              <li>Proper food handling and packaging.</li>
              <li>Consistent portioning according to the selected plan.</li>
              <li>Timely meal dispatch.</li>
            </ul>
            <p className="text-sm">
              Meal appearance, availability and seasonal ingredients may vary depending on market availability and operational requirements.
            </p>
            <p className="text-sm">
              We reserve the right to make reasonable ingredient substitutions where necessary, while considering customer preferences and applicable food safety requirements.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              7. Nutrition and Personalised Meal Plans
            </h2>
            <p>
              Our personalised meal plans are designed to support individual food preferences and general nutrition goals.
            </p>
            <p>
              Any calorie, protein or macronutrient information provided is intended as general nutritional guidance.
            </p>
            <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10 text-sm font-medium text-[#2E1B0A] space-y-1">
              <p>• Aroma Bites is not a medical treatment provider, and our meal plans are not a substitute for medical advice, diagnosis or treatment.</p>
              <p>• Customers with allergies, medical dietary requirements or specific health conditions should consult a qualified healthcare professional before selecting a meal plan.</p>
            </div>
            <p className="text-sm">
              Please inform our team of relevant food allergies or ingredient restrictions before placing an order. Although we take reasonable precautions, we cannot guarantee an entirely allergen-free preparation environment unless this has been specifically confirmed by us.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              8. Delivery Policy
            </h2>
            <p>Aroma Bites provides delivery in selected serviceable areas, including:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2 text-xs sm:text-sm font-medium text-[#2E1B0A]">
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Dilshad Garden</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Dilshad Colony</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">New Seemapuri</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Shalimar Garden</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Vivek Vihar</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Jhilmil Colony</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Jhilmil Industrial Area</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Tahirpur</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">GTB Enclave</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Old Seemapuri</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Sunder Nagri</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Harsh Vihar</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Surajmal Vihar</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Mansarovar Park</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Shahdara</span>
              <span className="bg-[#FAF6ED] p-2 rounded-lg border border-[#2E1B0A]/10 text-center">Krishna Nagar</span>
            </div>
            <p className="text-sm">
              Delivery coverage is subject to the precise address, route and operational capacity. Customers must provide accurate delivery information and ensure that someone is available to receive the meal.
            </p>
            <p className="text-sm">
              Delivery slots are communicated according to the selected subscription and availability. Unforeseen circumstances, including severe weather, traffic disruptions or operational emergencies, may occasionally affect delivery schedules. We will make reasonable efforts to communicate significant delays.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              9. Subscription Pause and Modifications
            </h2>
            <p>
              Aroma Bites offers a pause facility across all subscription plans, subject to the applicable cut-off time.
            </p>
            <p>Customers may request:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Temporary subscription pauses.</li>
              <li>Eligible delivery address changes.</li>
              <li>Meal preference modifications.</li>
              <li>Available meal slot changes.</li>
            </ul>
            <div className="bg-[#2E1B0A] text-white p-4 rounded-xl border border-white/10 font-bold text-center text-sm">
              Pause and modification requests must be submitted at least 24 hours before the affected delivery.
            </div>
            <p className="text-xs sm:text-sm text-[#3E2511]/75">
              Requests received after the cut-off may not be accommodated for meals already scheduled for preparation or dispatch. Any plan-specific limitations or modification charges will be disclosed before the change is confirmed.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              10. Cancellation Policy
            </h2>
            <p>Customers may request cancellation of their subscription by contacting Aroma Bites.</p>
            <div className="bg-[#FAF6ED] p-4 rounded-xl border-l-4 border-[#E86E37] font-semibold text-[#2E1B0A]">
              The standard cancellation cut-off is: At least 24 hours before the scheduled delivery.
            </div>
            <p className="text-sm">
              Cancellation requests should include the registered mobile number and subscription details. Cancellation and refund eligibility will be determined according to our Refund &amp; Cancellation Policy.
            </p>
            <p className="text-sm">
              Nothing in this section limits any cancellation or refund rights available to consumers under applicable law.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              11. Refunds
            </h2>
            <p>Refunds are governed by our separate Refund &amp; Cancellation Policy.</p>
            <p>
              Eligible refunds may be calculated against the unused subscription balance after deducting applicable, lawful and previously disclosed charges.
            </p>
            <p className="font-semibold text-[#2E1B0A]">
              Aroma Bites will not use these terms to exclude consumer rights or remedies that cannot legally be excluded.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              12. Customer Responsibilities
            </h2>
            <p>Customers agree to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Provide accurate contact and delivery details.</li>
              <li>Communicate allergies and dietary restrictions before ordering.</li>
              <li>Follow the applicable subscription cut-off times.</li>
              <li>Use the website and services lawfully.</li>
              <li>Avoid fraudulent transactions or misuse of offers.</li>
              <li>Notify our team of any service-related concern promptly.</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              13. Promotions and Offers
            </h2>
            <p>
              Aroma Bites may introduce promotional discounts, trial meals, referral benefits or other offers. Each promotion may have separate eligibility conditions, validity periods and usage restrictions.
            </p>
            <p className="text-sm">
              Promotional terms will be communicated when the offer is made available.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              14. Website Content and Intellectual Property
            </h2>
            <p>
              All website content, including brand identity, logos, graphics, photographs, text, designs and other original material, belongs to Aroma Bites or its respective rights holders.
            </p>
            <p className="text-sm">
              You may not reproduce, copy, distribute or commercially exploit such material without prior written permission, except where permitted by applicable law.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              15. Limitation of Liability
            </h2>
            <p>
              Aroma Bites will take reasonable care in preparing and delivering its meals. Nothing in these Terms excludes or restricts liability where such exclusion or restriction is prohibited by applicable law.
            </p>
            <p className="text-sm">
              Subject to applicable law, Aroma Bites shall not be responsible for losses caused by inaccurate information supplied by customers, misuse of products or circumstances beyond reasonable operational control.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              16. Force Majeure
            </h2>
            <p>
              Aroma Bites shall not be held responsible for delays or interruptions directly caused by events beyond reasonable control, including natural disasters, government restrictions, public emergencies, transport disruptions or other extraordinary circumstances.
            </p>
            <p className="text-sm">
              We will make reasonable efforts to notify affected customers and provide an appropriate solution.
            </p>
          </section>

          {/* Section 17 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              17. Grievance Redressal
            </h2>
            <p>For questions, complaints or disputes relating to our services, contact:</p>
            <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10 space-y-1 text-sm">
              <p className="font-bold text-[#2E1B0A]">Customer Support &amp; Grievance Officer</p>
              <p>Aroma Bites</p>
              <p><strong>Email:</strong> <a href="mailto:Support@aromabites.in" className="text-[#2E1B0A] underline">Support@aromabites.in</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919958585172" className="text-[#2E1B0A] underline">+91 9958585172</a></p>
              <p><strong>Address:</strong> Dilshad Garden, Delhi – 110095, India.</p>
              <p><strong>Support Hours:</strong> Monday to Saturday, 6 AM – 6 PM.</p>
            </div>
            <p className="text-xs text-[#3E2511]/75">
              Consumer complaints will be acknowledged within 48 hours and addressed within one month, in accordance with the applicable Consumer Protection (E-Commerce) Rules, 2020, where applicable. The name and designation of the formally appointed Grievance Officer will be displayed on the website.
            </p>
          </section>

          {/* Section 18 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              18. Governing Law and Jurisdiction
            </h2>
            <p>These Terms shall be governed by the laws of India.</p>
            <p className="text-sm">
              Any disputes shall be subject to the jurisdiction of competent courts in Delhi, subject to applicable consumer protection laws and the jurisdiction of consumer commissions.
            </p>
          </section>

          {/* Section 19 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              19. Changes to These Terms
            </h2>
            <p>Aroma Bites reserves the right to update these Terms of Service when required.</p>
            <p className="text-sm">
              Updated terms will be published on this page with the revised effective date.
            </p>
          </section>

          {/* Section 20 */}
          <section className="space-y-4 pt-4 border-t-2 border-[#2E1B0A]/10">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A]">
              20. Contact Information
            </h2>
            <p>For any questions regarding these Terms of Service:</p>
            
            <div className="bg-[#2E1B0A] text-white p-6 sm:p-8 rounded-2xl space-y-3 shadow-lg">
              <h3 className="text-lg font-bold text-[#F5B318]">Aroma Bites</h3>
              
              <div className="space-y-2 text-sm text-white/90">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F5B318] shrink-0 mt-0.5" />
                  <span><strong>Address:</strong> Dilshad Garden, Delhi – 110095, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#F5B318] shrink-0" />
                  <span><strong>Email:</strong> <a href="mailto:Support@aromabites.in" className="hover:text-[#F5B318] underline">Support@aromabites.in</a></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#F5B318] shrink-0" />
                  <span><strong>Phone / WhatsApp:</strong> <a href="tel:+919958585172" className="hover:text-[#F5B318] underline">+91 9958585172</a></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#F5B318] shrink-0" />
                  <span><strong>Support Hours:</strong> Monday to Saturday, 6 AM – 6 PM.</span>
                </div>
              </div>
            </div>

            <p className="font-bold text-center text-[#2E1B0A] text-base pt-4">
              Thank you for choosing Aroma Bites. We appreciate your trust.
            </p>
          </section>

        </div>
      </main>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}
      <footer className="bg-[#2E1B0A] text-white pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-white/10 gap-8">
            <div>
              <img
                src="/logo.png"
                alt="AromaBites Logo"
                className="h-14 sm:h-16 w-auto object-contain mb-3"
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
              <Link href="/terms-of-service" className="text-[#F5B318] font-semibold underline">Terms of Service</Link>
              <Link href="/refund-and-cancellation" className="hover:text-white transition-colors">Refund &amp; Cancellation</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
