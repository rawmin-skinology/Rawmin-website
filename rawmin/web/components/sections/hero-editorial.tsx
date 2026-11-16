"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Microscope, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroEditorial() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#FBF9F5] text-[#121614] overflow-hidden pt-8 pb-16 border-b border-[#121614]/10">
      {/* Subtle organic background mesh */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#2CB6C4_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(197,155,86,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Copy */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Positioning Statement Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2CB6C4]/10 border border-[#2CB6C4]/20 text-[#2CB6C4] text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B89A60]" />
              <span>SKINCARE MANUFACTURING, MADE IN INDIA, FORMULATED WITH KOREA</span>
            </div>

            {/* Approved Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#121614] leading-[1.05]">
                Bringing Korean Formulation Expertise to Cosmetic Manufacturing in India.
              </h1>

              {/* Supporting Copy from PDF */}
              <p className="text-base sm:text-xl text-[#121614]/80 leading-relaxed font-light max-w-2xl">
                <strong className="font-semibold text-[#121614]">RAWMIN Skinology</strong> helps skincare and personal care brands turn formulation ideas into production-ready products through private label manufacturing, custom formulation, Korean R&amp;D and ingredient sourcing, packaging support, and compliant manufacturing in India.
              </p>
            </div>

            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {["Private Label", "Custom Cosmetics", "Korean R&D", "ISO 22716 Plant", "GMP Certified"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-[#F3EFE6] border border-[#121614]/10 text-xs font-mono text-[#121614]/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#2CB6C4] text-[#FBF9F5] px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-[#1b3629] transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#121614] border border-[#121614]/25 hover:border-[#2CB6C4] hover:bg-black/5 px-7 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>

            {/* Credibility metrics bar */}
            <div className="pt-6 border-t border-[#121614]/10 grid grid-cols-3 gap-6 text-left">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-mono text-[#2CB6C4]">15+</span>
                <span className="block text-xs font-medium text-[#121614]/65 uppercase tracking-wider mt-0.5">Years Experience</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-mono text-[#B89A60]">2,500+</span>
                <span className="block text-xs font-medium text-[#121614]/65 uppercase tracking-wider mt-0.5">Formulations Library</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold font-mono text-[#121614]">50,000</span>
                <span className="block text-xs font-medium text-[#121614]/65 uppercase tracking-wider mt-0.5">Sq. Ft. Plant</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Composition with Scroll Parallax */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Editorial Card with Parallax */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-white">
              <div className="relative h-96 sm:h-[460px] w-full">
                <Image
                  src="/pdf-images/page_030_0_X30.jpg"
                  alt="RAWMIN Skinology cleanroom manufacturing facility and automated filling lines"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B89A60]">
                    Plant Floor • Faridabad, India
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold mt-1 tracking-tight">
                    Cleanroom Formulation &amp; High-Speed Filling
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 mt-1 font-light">
                    GMP certified batching, mixing, tube sealing, and automated packaging.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating laboratory credential chip with enhanced Parallax rate */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md border border-[#121614]/10 rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-xs transition-transform duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-xl bg-[#2CB6C4]/15 flex items-center justify-center text-[#2CB6C4] shrink-0">
                <Microscope className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="block font-bold text-[#121614]">Korean R&amp;D Synergy</span>
                <span className="block text-[#121614]/70">Bio-fermented actives &amp; peptide delivery systems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
