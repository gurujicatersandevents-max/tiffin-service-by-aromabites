import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | AromaBites Tiffin Service",
  description: "Read the Refund & Cancellation Policy of AromaBites. Learn about our pause policy, cancellation cut-off, refund eligibility, and resolution process.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RefundCancellationPage() {
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
            <RefreshCw className="w-4 h-4" />
            <span>TRANSPARENT ASSURANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif uppercase tracking-tight text-white mb-3">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="font-script text-[#E86E37] text-2xl sm:text-3xl font-bold -rotate-1">
            Aroma Bites • Fair, Transparent &amp; Customer-First
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-white/60 mt-4">
            <span><strong>Effective Date:</strong> 19 November 2026</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> 19 November 2026</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* POLICY CONTENT */}
      {/* ========================================================= */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 flex-1">
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-[#2E1B0A]/10 space-y-10 leading-relaxed text-sm sm:text-base text-[#3E2511]/85">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              1. Introduction
            </h2>
            <p>
              At <strong>Aroma Bites</strong>, we want every customer to have a convenient and satisfying meal subscription experience.
            </p>
            <p>
              This Refund &amp; Cancellation Policy explains the conditions for cancelling orders, pausing subscriptions, requesting refunds and resolving delivery or food quality complaints.
            </p>
            <p className="bg-[#FAF6ED] p-4 rounded-xl border-l-4 border-[#2E1B0A] font-medium text-[#2E1B0A]">
              By purchasing a meal subscription from Aroma Bites, you acknowledge this policy, subject to your rights under applicable consumer protection laws.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              2. Subscription Cancellation
            </h2>
            <p>Customers may request cancellation of an active meal subscription.</p>
            <div className="bg-[#2E1B0A] text-white p-4 rounded-xl border border-white/10 font-bold text-center text-sm">
              Standard cancellation cut-off: 24 hours before the scheduled delivery.
            </div>
            <p>To request cancellation:</p>
            <ol className="list-decimal list-inside space-y-1.5 pl-2">
              <li>Contact our customer support team through WhatsApp, phone or email.</li>
              <li>Provide your registered mobile number.</li>
              <li>Share your subscription or order details.</li>
              <li>Clearly mention your cancellation request.</li>
            </ol>
            <p className="text-sm">
              Our team will review your request and communicate the applicable cancellation and refund eligibility.
            </p>
            <p className="text-sm">
              Requests received within the required cut-off period will be processed according to the subscription terms and applicable refund conditions.
            </p>
            <p className="text-xs sm:text-sm text-[#3E2511]/75">
              Requests received less than 24 hours before a scheduled delivery may not be accommodated for meals already prepared or dispatched. However, this does not affect any refund or other remedy available under applicable law, including where Aroma Bites is responsible for a service failure.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              3. Subscription Pause Policy
            </h2>
            <p>
              We understand that customers may occasionally need to pause their meal subscriptions because of travel, holidays, personal commitments or changes in routine.
            </p>
            <p>
              Aroma Bites provides subscription pause facilities across all available plans.
            </p>
            <p>Customers can request a pause subject to the following conditions:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Pause requests must be submitted at least 24 hours before the affected delivery.</li>
              <li>Requests must be confirmed by our customer support team.</li>
              <li>The applicable unused subscription balance will be adjusted according to the approved pause arrangement.</li>
              <li>The resumed delivery schedule will be communicated after confirmation.</li>
            </ul>
            <p className="text-xs sm:text-sm text-[#3E2511]/75 italic">
              A pause request received after the cut-off may not be applied to meals already scheduled for preparation or dispatch.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              4. Refund Eligibility
            </h2>
            <p>Customers may request refunds in the following circumstances:</p>

            <div className="space-y-3 pl-2 sm:pl-4">
              <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10">
                <h3 className="font-bold text-[#2E1B0A] text-base">A. Unused Subscription Balance</h3>
                <p className="text-sm mt-0.5">
                  If a customer cancels an active subscription, the unused eligible subscription balance may be refunded after deducting applicable and previously disclosed charges.
                </p>
              </div>

              <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10">
                <h3 className="font-bold text-[#2E1B0A] text-base">B. Duplicate Payment</h3>
                <p className="text-sm mt-0.5">
                  If a customer is charged more than once for the same transaction, the duplicate payment will be reviewed and refunded where verified.
                </p>
              </div>

              <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10">
                <h3 className="font-bold text-[#2E1B0A] text-base">C. Order Cancellation by Aroma Bites</h3>
                <p className="text-sm mt-0.5">
                  If Aroma Bites cancels a confirmed order or subscription without being able to provide the purchased service, an appropriate refund or alternative remedy will be provided in accordance with applicable law.
                </p>
              </div>

              <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10">
                <h3 className="font-bold text-[#2E1B0A] text-base">D. Incorrect or Missing Meals</h3>
                <p className="text-sm mt-0.5">
                  If a customer receives an incorrect or incomplete order, they should contact our support team promptly with the relevant order details. Depending on the circumstances, an appropriate replacement, adjustment or refund may be provided.
                </p>
              </div>

              <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10">
                <h3 className="font-bold text-[#2E1B0A] text-base">E. Food Quality or Safety Concerns</h3>
                <p className="text-sm mt-0.5">
                  If a meal is damaged, spoiled, contaminated or otherwise raises a genuine food safety concern, customers should report it immediately. Aroma Bites will investigate the issue and provide an appropriate remedy in accordance with applicable law.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              5. Refund Calculation
            </h2>
            <p>For eligible subscription cancellations, the refund will generally be calculated as follows:</p>
            <div className="bg-[#2E1B0A] text-[#F5B318] p-4 rounded-xl font-mono text-center text-sm font-bold shadow-sm">
              Refund Amount = Eligible Unused Subscription Balance – Applicable Disclosed Deductions
            </div>
            <p>Deductions may include:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
              <li>The value of meals already delivered or consumed.</li>
              <li>Applicable promotional discounts or benefits, where their adjustment conditions were disclosed at purchase.</li>
              <li>Other reasonable and lawful charges expressly disclosed before purchase.</li>
            </ul>
            <p className="text-sm font-medium text-[#2E1B0A]">
              No arbitrary or undisclosed deduction will be applied. The customer will be informed of the refund calculation where a refund is approved.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              6. Non-Refundable or Restricted Refund Situations
            </h2>
            <p>A refund may not be available for:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Meals already delivered and consumed in accordance with the order.</li>
              <li>Meals prepared or dispatched before a late cancellation request, subject to applicable law.</li>
              <li>Incorrect delivery information supplied by the customer where it prevents successful delivery, subject to the circumstances.</li>
              <li>Promotional benefits that are expressly identified as non-refundable under their disclosed conditions.</li>
            </ul>
            <p className="text-xs sm:text-sm text-[#3E2511]/75 pt-1">
              These restrictions do not apply where a refund or other remedy is required under applicable consumer protection or food safety laws.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              7. Refund Processing Time
            </h2>
            <p>Once a refund request is approved:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Our team will communicate the approved refund amount.</li>
              <li>Refunds will ordinarily be processed through the original payment method, wherever possible.</li>
              <li>The actual crediting time may depend on the bank, payment gateway or payment provider.</li>
              <li>Refunds will be initiated within a reasonable period and in accordance with applicable legal and payment-system requirements.</li>
            </ul>
            <p className="text-sm">
              Customers may contact our support team if an approved refund has not been received within the communicated timeframe.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              8. Promotional Offers and Money-Back Guarantees
            </h2>
            <p>
              Certain subscriptions or promotional campaigns may include special refund benefits or money-back guarantees.
            </p>
            <p className="text-sm">
              Where such a guarantee is advertised, its specific eligibility conditions, applicable period, exclusions and refund process will be disclosed with that offer.
            </p>
            <p className="text-sm font-semibold text-[#2E1B0A]">
              A promotional guarantee does not limit any statutory consumer rights.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              9. How to Request a Refund
            </h2>
            <p>To request a cancellation or refund, please contact us through:</p>
            <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10 space-y-1 text-sm font-semibold text-[#2E1B0A]">
              <p>Email: <a href="mailto:Support@aromabites.in" className="underline">Support@aromabites.in</a></p>
              <p>Phone / WhatsApp: <a href="tel:+919958585172" className="underline">+91 9958585172</a></p>
            </div>
            <p className="pt-1">Please provide:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
              <li>Full name.</li>
              <li>Registered mobile number.</li>
              <li>Subscription or order ID.</li>
              <li>Reason for the cancellation or refund request.</li>
              <li>Supporting photographs or other relevant information, where applicable.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              10. Delivery Complaints and Food Quality Issues
            </h2>
            <p>
              For missing meals, incorrect orders, delayed delivery or food quality concerns, please contact us as soon as reasonably possible.
            </p>
            <p className="text-sm">
              We recommend reporting food quality or safety concerns immediately and retaining relevant order details and photographs, where available. Our team will investigate the matter and communicate an appropriate resolution.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              11. Consumer Rights
            </h2>
            <p>
              Nothing in this Refund &amp; Cancellation Policy is intended to waive, restrict or override any rights or remedies available to consumers under applicable Indian laws.
            </p>
            <p className="text-sm font-medium text-[#2E1B0A]">
              Where any provision of this policy conflicts with a mandatory legal requirement, the applicable legal requirement shall prevail.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4 pt-4 border-t-2 border-[#2E1B0A]/10">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A]">
              12. Contact Information
            </h2>
            <p>For cancellation, subscription pause, refund or delivery-related assistance:</p>
            
            <div className="bg-[#2E1B0A] text-white p-6 sm:p-8 rounded-2xl space-y-3 shadow-lg">
              <h3 className="text-lg font-bold text-[#F5B318]">Aroma Bites</h3>
              
              <div className="space-y-2 text-sm text-white/90">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F5B318] shrink-0 mt-0.5" />
                  <span><strong>Address:</strong> Dilshad Garden, Delhi – 110095, India.</span>
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
              Aroma Bites – Your meals, your routine, our commitment.
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
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/refund-and-cancellation" className="text-[#F5B318] font-semibold underline">Refund Policy</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
