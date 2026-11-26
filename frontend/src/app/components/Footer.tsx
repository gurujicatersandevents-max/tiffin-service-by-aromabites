import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenPlan: () => void;
}

export default function Footer({ onOpenPlan }: FooterProps) {
  return (
    <footer className="bg-[#402000] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-white/10 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="inline-block mb-3">
              <img
                src="/logo.png"
                alt="Aroma Bites Logo"
                className="h-12 sm:h-14 w-auto object-contain mx-auto md:mx-0"
              />
            </Link>
            <p className="font-poppins font-normal text-sm text-white/70 max-w-sm leading-relaxed">
              Delicious, chef-curated tiffin subscriptions tailored to your personal fitness &amp; everyday health goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenPlan}
              className="inline-flex items-center gap-2 bg-[#F4B000] hover:bg-[#ffc222] text-[#402000] font-poppins font-semibold px-6 py-3.5 rounded-full text-sm shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Navigation Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4 font-poppins font-normal">
          <p>© {new Date().getFullYear()} Aroma Bites Tiffin Service. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-and-cancellation" className="hover:text-white transition-colors">
              Refund &amp; Cancellation
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
