"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import StatCounter from "@/components/ui/stat-counter";
import { IMAGES } from "@/lib/images";
import { ArrowRight, Microscope, Factory } from "lucide-react";

export default function ScrollFlipSection() {
  return (
    <section
      id="korean-science-showcase"
      className="relative scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-[#D8F3F5] via-[#EAF7F8] to-[#CEEFF2] text-[#16393C] border-t border-[#B2E8EB] border-b border-[#B2E8EB] overflow-hidden"
    >
      {/* Subtle ambient radiant glow behind the content */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[540px] h-[540px] bg-[#2CB6C4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[360px] h-[360px] bg-[#8DE3E8]/25 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* TOP: Centered Prominent Headline, Supporting Copy & Actions */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2CB6C4]/15 border border-[#2CB6C4]/35 text-[#136B75] text-xs uppercase tracking-widest font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#2CB6C4]" />
            <span>Korean R&amp;D Formulation + Indian Production Scale</span>
          </div>

          {/* Prominent Approved Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light font-heading text-[#144246] leading-[1.15] tracking-[-0.03em]">
            Bringing Korean Formulation Expertise to Cosmetic Manufacturing in India.
          </h1>

          {/* Supporting Copy */}
          <p className="text-[#2C5256] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal font-sans">
            We help beauty brands develop, manufacture, and package high-quality skincare from your initial idea to finished bottles.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center min-h-[48px] rounded-full bg-[#2CB6C4] hover:bg-[#239DAA] text-white font-bold px-8 py-3.5 text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#2CB6C4]/25 active:scale-[0.98] apple-press"
            >
              Discuss Your Project
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center min-h-[48px] rounded-full bg-white hover:bg-[#DEF2F4] text-[#16393C] border border-[#2CB6C4]/35 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all shadow-2xs active:scale-[0.98] apple-press"
            >
              Our Services
            </Link>
            <Link
              href="/quality#certificates"
              className="inline-flex items-center justify-center min-h-[48px] rounded-full bg-transparent hover:bg-[#2CB6C4]/10 text-[#187580] hover:text-[#135A62] px-4 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all"
            >
              Certifications ↗
            </Link>
          </div>
        </div>

        {/* CENTERPIECE: RAWMIN Skinology Modern Manufacturing Facility - Enlarged, Centered, Clean without Overlays */}
        <div className="mt-10 sm:mt-12 lg:mt-14 max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-white border border-[#AEE6EA] shadow-2xl group">
            <Image
              src={IMAGES.home.rawminFacility || "/images/home/rawmin-manufacturing-facility.png"}
              alt="RAWMIN Skinology modern cosmetic manufacturing facility in Faridabad, India"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1024px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* BOTTOM: Two Core Highlights & Fast Trust Metrics */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto space-y-8">
          
          {/* Two Core Formulation Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#B2E8EB] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#2CB6C4]/15 flex items-center justify-center shrink-0 mt-0.5">
                <Microscope className="w-5 h-5 text-[#136B75]" />
              </div>
              <div>
                <p className="text-sm font-bold font-heading text-[#144246]">Korean Bio-Active Science</p>
                <p className="text-xs text-[#3F6569] mt-1 leading-relaxed">
                  Bio-ferments, biomimetic peptides, and barrier-restoring actives formulated in precision clean laboratories.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#B2E8EB] shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#B89A60]/15 flex items-center justify-center shrink-0 mt-0.5">
                <Factory className="w-5 h-5 text-[#967A42]" />
              </div>
              <div>
                <p className="text-sm font-bold font-heading text-[#144246]">Indian Cleanroom Scale</p>
                <p className="text-xs text-[#3F6569] mt-1 leading-relaxed">
                  Certified ISO 22716 &amp; GMP manufacturing facility in Faridabad with sanitary stainless steel compounding.
                </p>
              </div>
            </div>
          </div>

          {/* Fast Trust Metrics Bar */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#B2E8EB]/70 text-center">
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#144246]">
                <StatCounter end={500} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-[#3F6569] font-medium mt-1">Tested Formulations</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#2CB6C4]">
                <StatCounter prefix="ISO " end={22716} />
              </p>
              <p className="text-xs sm:text-sm text-[#3F6569] font-medium mt-1">GMP Cleanrooms</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#B89A60]">
                <StatCounter end={100} suffix="%" />
              </p>
              <p className="text-xs sm:text-sm text-[#3F6569] font-medium mt-1">Export Ready</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
