"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

interface BrandPartner {
  id: string;
  name: string;
  category: string;
  logo: string;
  isDark?: boolean;
}

// Exactly 19 verified brand partners
const ALL_BRANDS: BrandPartner[] = [
  // Slide 1 (6 brands)
  { id: "herbaush", name: "Herbaush", category: "Ayurvedic & Natural", logo: IMAGES.brands.herbaush },
  { id: "amedria-labs", name: "Amedria Labs", category: "Active Hair & Skin", logo: IMAGES.brands.amedriaLabs },
  { id: "mufasa-man", name: "Mufasa Man", category: "Men's Grooming", logo: IMAGES.brands.mufasaMan },
  { id: "healthcon", name: "Healthcon", category: "Conscious Skincare", logo: IMAGES.brands.healthcon },
  { id: "la-arhea", name: "La Arhea", category: "Prestige Beauty", logo: IMAGES.brands.laArhea },
  { id: "groom-essence", name: "Groom Essence", category: "Grooming & Shaving", logo: IMAGES.brands.groomEssence },

  // Slide 2 (6 brands)
  { id: "la-vende", name: "La Vendé", category: "Luxury Botanicals", logo: IMAGES.brands.laVende },
  { id: "dab-and-dew", name: "Dab & Dew", category: "Clean Hydration", logo: IMAGES.brands.dabAndDew },
  { id: "amrisa-organics", name: "Amrisa Organics", category: "Organic Care", logo: IMAGES.brands.amrisaOrganics },
  { id: "kohl-and-spice", name: "Kohl & Spice", category: "Color & Clean", logo: IMAGES.brands.kohlAndSpice },
  { id: "skinceutics", name: "Skin Ceutics", category: "Dermatological", logo: IMAGES.brands.skinceutics },
  { id: "seranyx", name: "Seranyx", category: "Clinical Beauty", logo: IMAGES.brands.seranyx },

  // Slide 3 (7 brands)
  { id: "skindulge", name: "Skindulge", category: "Facial Care", logo: IMAGES.brands.skindulge },
  { id: "perr-cherry", name: "Perr Cherry", category: "Specialty Beauty", logo: IMAGES.brands.perrCherry },
  { id: "womenhood", name: "Womenhood", category: "Intimate & Body", logo: IMAGES.brands.womenhood },
  { id: "121-glam", name: "#121-GLAM", category: "Cosmetics & Glamour", logo: IMAGES.brands.glam121 },
  { id: "purearth", name: "Pūrearth", category: "Conscious Wellness", logo: IMAGES.brands.purearth },
  { id: "gnv-commodities", name: "GNV Commodities", category: "Raw Material & Trade", logo: IMAGES.brands.gnvCommodities },
  { id: "loreal", name: "L’Oréal Paris", category: "Global Benchmark", logo: IMAGES.brands.loreal },
];

// 3 slides partitioning all 19 brands
const SLIDES: BrandPartner[][] = [
  ALL_BRANDS.slice(0, 6),
  ALL_BRANDS.slice(6, 12),
  ALL_BRANDS.slice(12, 19),
];

export default function BrandPartnersSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatic slideshow changing slides every 3 seconds (3000ms) continuously
  // Works infinitely regardless of hover, click, or scroll position
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="brand-partners"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0D292D] via-[#144246] to-[#0A2023] text-white border-y border-[#2CB6C4]/30 select-none overflow-hidden transition-colors duration-700"
      aria-label="Our Trusted Brand Partners"
    >
      {/* Radiant ambient glow behind the blue surface */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[540px] h-[540px] bg-[#2CB6C4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-[#8DE3E8]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Blue Surface & Staggered White Text Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={mounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header - Staggered White Text Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={mounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2CB6C4]/20 border border-[#2CB6C4]/40 text-[#8DE3E8] text-xs font-semibold uppercase tracking-widest mb-3 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFE89E]" />
            <span>19 Verified Brand Partners</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={mounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading text-white tracking-[-0.03em] leading-tight"
          >
            Our Trusted Brand Partners
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={mounted || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-normal font-sans max-w-2xl mx-auto"
          >
            From emerging D2C innovators to established prestige beauty houses, we formulate and manufacture market-ready skincare for our trusted brand partners.
          </motion.p>
        </div>

        {/* Automatic Slideshow Container */}
        <div className="relative min-h-[340px] sm:min-h-[220px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 items-stretch"
            >
              {SLIDES[currentSlide].map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white/10 hover:bg-white/18 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between border border-[#2CB6C4]/25 hover:border-[#2CB6C4] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[140px]"
                >
                  {/* Brand Logo Container */}
                  <div className="relative w-full h-14 sm:h-16 flex items-center justify-center my-auto px-2 bg-white/95 rounded-xl shadow-inner">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} official logo`}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                    />
                  </div>

                  {/* Brand Meta */}
                  <div className="mt-3 text-center w-full pt-2 border-t border-white/15">
                    <p className="text-xs font-bold text-white group-hover:text-[#8DE3E8] transition-colors truncate">
                      {brand.name}
                    </p>
                    <p className="text-[10px] text-white/60 uppercase tracking-wider truncate">
                      {brand.category}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Continuous Slide Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                currentSlide === idx ? "w-8 bg-[#2CB6C4]" : "w-2 bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}
