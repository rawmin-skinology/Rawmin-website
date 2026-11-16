"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_MAIN_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ScrollLogoIntro from "@/components/layout/scroll-logo-intro";
import { useIntroScroll } from "@/hooks/use-intro-scroll";
import { useInquiryModal } from "@/components/ui/inquiry-modal-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isHomePage, progress } = useIntroScroll();
  const { openInquiryModal } = useInquiryModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <ScrollLogoIntro />

      {/* Main sticky navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(44,182,196,0.12)] py-2.5 sm:py-3 border-b border-[#2CB6C4]/20"
            : "bg-white/95 backdrop-blur-md py-3 sm:py-3.5 border-b border-[#2CB6C4]/15"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo container: Cleanly positioned on the left */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] rounded-md shrink-0 mr-4 apple-press"
            aria-label="RAWMIN Skinology Home"
          >
            <div id="navbar-logo-anchor" className="relative w-[110px] sm:w-[130px] h-[36px] sm:h-[42px] flex items-center justify-center">
              <Image
                src={SITE.logoSrc}
                alt={SITE.logoAlt}
                width={755}
                height={320}
                className="w-full h-full object-contain object-center navbar-anchor-img"
                style={{
                  opacity: isHomePage ? (progress >= 0.96 ? 1 : 0) : 1,
                  transition: "opacity 0.15s ease",
                }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Row */}
          <nav className="hidden lg:flex items-center flex-1 justify-end text-[12px] xl:text-[13px] font-normal tracking-wide text-[#16393C] select-none">
            {/* Main Navigation Links */}
            <div className="flex items-center gap-3 xl:gap-5 whitespace-nowrap">
              {NAV_MAIN_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative py-1.5 px-1.5 transition-colors duration-150 hover:text-[#2CB6C4]",
                      isActive ? "text-[#187580] font-bold" : "text-[#16393C]/85"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2CB6C4] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Primary CTA button */}
            <div className="ml-6 shrink-0">
              <button
                type="button"
                onClick={() => openInquiryModal()}
                className="inline-flex items-center gap-1.5 bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm hover:shadow active:scale-[0.98] apple-press whitespace-nowrap min-h-[38px] cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFE494]" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 rounded-lg text-[#187580] hover:bg-[#E0F5F7] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown with full keyboard access & touch compliance */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#EDF8F9] border-b border-[#2CB6C4]/20 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {NAV_MAIN_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between",
                      isActive
                        ? "bg-[#2CB6C4] text-white font-semibold"
                        : "text-[#16393C] hover:bg-[#DEF2F4] font-normal"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={cn("w-4 h-4", isActive ? "text-[#FFE494]" : "text-stone-400")} />
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#2CB6C4]/20">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openInquiryModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2CB6C4] hover:bg-[#239DAA] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#FFE494]" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
