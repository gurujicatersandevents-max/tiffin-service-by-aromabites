import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AromaBites Tiffin Service",
  description: "Read the Privacy Policy of AromaBites. Learn how we collect, use, and protect your personal and subscription information.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-4 h-4" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif uppercase tracking-tight text-white mb-3">
            Privacy Policy
          </h1>
          <p className="font-script text-[#E86E37] text-2xl sm:text-3xl font-bold -rotate-1">
            Aroma Bites • Safe, Transparent &amp; Secure
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-white/60 mt-4">
            <span><strong>Effective Date:</strong> 19 November 2026</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> 19 November 2026</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PRIVACY POLICY CONTENT */}
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
              At Aroma Bites, we respect your privacy and are committed to protecting your personal information when you visit our website, enquire about our services, purchase a meal subscription or communicate with our team.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, process and protect your personal information when you use our website and services.
            </p>
            <p className="bg-[#FAF6ED] p-4 rounded-xl border-l-4 border-[#2E1B0A] font-medium text-[#2E1B0A]">
              By using our website or placing an order, you acknowledge that you have read this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              2. Information We Collect
            </h2>
            <p>We may collect the following categories of information:</p>

            <div className="space-y-3 pl-2 sm:pl-4">
              <div>
                <h3 className="font-bold text-[#2E1B0A] text-base mb-1">A. Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-[#3E2511]/80 pl-2">
                  <li>Full name</li>
                  <li>Mobile number</li>
                  <li>Email address</li>
                  <li>Delivery address</li>
                  <li>Locality and PIN code</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#2E1B0A] text-base mb-1">B. Meal Preferences and Dietary Information</h3>
                <p className="mb-2">To provide personalised meal plans, we may collect information such as:</p>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-[#3E2511]/80 pl-2">
                  <li>Food preferences (vegetarian, non-vegetarian, etc.)</li>
                  <li>Dietary restrictions and ingredient exclusions</li>
                  <li>Preferred meal timings</li>
                  <li>Fitness or nutrition goals voluntarily shared by you</li>
                  <li>Calorie, protein or macronutrient preferences, where applicable</li>
                </ul>
                <p className="text-xs sm:text-sm text-[#3E2511]/70 mt-2 italic">
                  You should only share information necessary for your meal requirements. We do not intend to collect medical information beyond what is necessary to address a specific dietary request.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#2E1B0A] text-base mb-1">C. Order and Subscription Information</h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-[#3E2511]/80 pl-2">
                  <li>Selected subscription plan</li>
                  <li>Breakfast, lunch and dinner preferences</li>
                  <li>Order history</li>
                  <li>Subscription duration</li>
                  <li>Pause, cancellation and refund requests</li>
                  <li>Delivery instructions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#2E1B0A] text-base mb-1">D. Payment Information</h3>
                <p>Payments are processed through the payment methods made available on our website.</p>
                <p>We may receive transaction references, payment status and other necessary transaction information.</p>
                <p className="font-medium text-[#2E1B0A]">We do not intend to store complete debit card, credit card or banking credentials on our own servers.</p>
              </div>

              <div>
                <h3 className="font-bold text-[#2E1B0A] text-base mb-1">E. Technical Information</h3>
                <p className="mb-2">When you visit our website, we or our service providers may collect:</p>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-[#3E2511]/80 pl-2">
                  <li>IP address</li>
                  <li>Browser and device information</li>
                  <li>Website usage information</li>
                  <li>Cookies and similar technologies, where enabled</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              3. How We Use Your Information
            </h2>
            <p>We use your information for legitimate business and service-related purposes, including:</p>
            <ol className="list-decimal list-inside space-y-1.5 pl-2">
              <li>Processing meal subscription purchases and orders.</li>
              <li>Preparing and delivering your selected meals.</li>
              <li>Creating personalised meal plans based on your preferences.</li>
              <li>Coordinating delivery schedules and addresses.</li>
              <li>Managing subscription pauses, modifications and cancellations.</li>
              <li>Processing eligible refund requests.</li>
              <li>Responding to customer enquiries and complaints.</li>
              <li>Improving food quality and customer experience.</li>
              <li>Sending essential order and delivery updates.</li>
              <li>Meeting applicable legal, tax, accounting and regulatory obligations.</li>
            </ol>
            <p className="mt-2 font-semibold text-[#2E1B0A]">
              We will not use your personal information for unrelated purposes without an appropriate lawful basis.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              4. Sharing of Personal Information
            </h2>
            <p><strong>Aroma Bites does not sell your personal information to third parties.</strong></p>
            <p>We may share limited information with trusted service providers where necessary to operate our business, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Delivery personnel and logistics partners.</li>
              <li>Payment gateway and transaction service providers.</li>
              <li>Website hosting and technical service providers.</li>
              <li>Customer communication and support platforms.</li>
              <li>Professional advisers, auditors and legal authorities where required.</li>
            </ul>
            <p className="text-xs sm:text-sm text-[#3E2511]/75 mt-2">
              These parties should receive only the information necessary to perform their respective services and must handle it in accordance with applicable contractual and legal obligations.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              5. Payment Security
            </h2>
            <p>We aim to maintain secure payment practices.</p>
            <p>
              Online transactions may be handled by third-party payment service providers. Their privacy policies and security practices will also apply to the payment information processed through their systems.
            </p>
            <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#2E1B0A]/10 space-y-1 text-sm font-medium text-[#2E1B0A]">
              <p>• Aroma Bites does not offer automatic recurring subscription deductions under its current one-time payment arrangement.</p>
              <p>• Customers must actively place a new order to purchase another subscription.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              6. Cookies and Website Tracking
            </h2>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Improve website functionality.</li>
              <li>Remember user preferences.</li>
              <li>Understand website traffic.</li>
              <li>Analyse website performance.</li>
              <li>Improve the browsing experience.</li>
            </ul>
            <p className="text-sm">
              You may manage or disable cookies through your browser settings. Some website features may not function properly if certain cookies are disabled.
            </p>
            <p className="text-sm">
              Where required, we will obtain appropriate consent before using non-essential cookies or tracking technologies.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              7. Data Retention
            </h2>
            <p>We retain personal information only for as long as reasonably necessary for the purposes described in this policy.</p>
            <p>Certain records may be retained for longer periods where required for:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Tax and accounting obligations.</li>
              <li>Legal compliance.</li>
              <li>Resolving disputes.</li>
              <li>Preventing fraud.</li>
              <li>Maintaining transaction records.</li>
            </ul>
            <p className="text-sm">
              When personal information is no longer required, we will take reasonable steps to securely delete or anonymise it, subject to applicable legal retention requirements.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              8. Data Security
            </h2>
            <p>Aroma Bites takes reasonable technical and organisational measures to protect personal information against:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Unauthorised access.</li>
              <li>Accidental disclosure.</li>
              <li>Data loss.</li>
              <li>Misuse or alteration.</li>
              <li>Unauthorised processing.</li>
            </ul>
            <p className="text-sm">
              However, no internet-based platform or electronic transmission can be guaranteed to be completely secure. In the event of a personal data breach, we will take appropriate steps in accordance with applicable law.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              9. Your Privacy Rights
            </h2>
            <p>Subject to applicable law, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Request access to personal information held about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of information where legally permissible.</li>
              <li>Withdraw consent for optional data processing.</li>
              <li>Raise concerns about how your information is handled.</li>
              <li>Seek grievance redressal through our support channels.</li>
            </ul>
            <p className="text-sm">
              Requests can be submitted using the contact details provided below.
            </p>
            <p className="text-xs sm:text-sm bg-[#FAF6ED] p-3 rounded-lg border border-[#2E1B0A]/10 font-semibold text-[#2E1B0A]">
              The Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 will be followed as and when their respective provisions become applicable.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              10. Third-Party Websites
            </h2>
            <p>
              Our website may contain links to third-party websites, payment gateways or communication platforms.
            </p>
            <p>
              Aroma Bites is not responsible for the privacy policies, content or security practices of external websites. We recommend reviewing their privacy policies before sharing personal information.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              11. Children's Privacy
            </h2>
            <p>
              Our website and subscription services are not intended to independently collect personal information from children without appropriate authorisation.
            </p>
            <p>
              Where information relating to a child is required for a meal order, it should be provided by a parent or lawful guardian, subject to applicable law.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A] border-b border-[#2E1B0A]/10 pb-2">
              12. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, technology or applicable laws. Updated versions will be published on this page with a revised date.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4 pt-4 border-t-2 border-[#2E1B0A]/10">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#2E1B0A]">
              13. Contact Us
            </h2>
            <p>For privacy-related questions, data requests or complaints, please contact:</p>
            
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
              Your privacy matters to us. Thank you for trusting Aroma Bites.
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
              <Link href="/privacy-policy" className="text-[#F5B318] font-semibold underline">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/refund-and-cancellation" className="hover:text-white transition-colors">Refund &amp; Cancellation</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
