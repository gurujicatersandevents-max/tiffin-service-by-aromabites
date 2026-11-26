import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu as MenuIcon, X } from "lucide-react";

interface HeaderNavigationProps {
  onOpenPlan: () => void;
}

export default function HeaderNavigation({ onOpenPlan }: HeaderNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Meal Plans", href: "#pricing" },
    { label: "Delivery Areas", href: "#delivery-areas" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9EB]/95 backdrop-blur-md border-b border-[#F0E5CF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Original Aroma Bites Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Aroma Bites Logo"
              className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="font-poppins font-medium text-sm text-[#402000] hover:text-[#E87524] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPlan}
            className="hidden sm:inline-flex items-center gap-2 bg-[#E87524] hover:bg-[#d66518] text-white font-poppins font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-[#E87524]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Create My Personal Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#402000] hover:bg-[#FBE4AC]/40 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9EB] border-b border-[#F0E5CF] px-5 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-poppins font-medium text-base text-[#402000] hover:text-[#E87524] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-[#F0E5CF]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlan();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E87524] text-white font-poppins font-semibold text-sm py-3.5 px-6 rounded-full shadow-md"
            >
              <span>Create My Personal Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
