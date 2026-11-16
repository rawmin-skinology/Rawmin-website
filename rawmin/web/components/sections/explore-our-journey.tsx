"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface Milestone {
  year: string;
  tag: string;
  heading: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2023",
    tag: "The Beginning",
    heading: "Where the Rawmin Skinology journey began.",
    description:
      "In 2023, Rawmin Skinology was set up to be a manufacturing partner that helps beauty and personal-care brands turn ideas into market-ready products. Our focus was simple: Understand the brand. Develop the product. Manufacture it right.",
    highlights: [
      "Inception of Rawmin Skinology as a dedicated B2B manufacturing partner",
      "Core focus on brand vision alignment & formulation feasibility",
      "Setup of foundational cleanroom and laboratory infrastructure",
    ],
    image: "/images/about/journey-2023.jpg",
    alt: "Rawmin Skinology founding team & formulation desk in 2023",
  },
  {
    year: "2024",
    tag: "Building the Foundation",
    heading: "Setting up processes from concept to production.",
    description:
      "As we progressed, Rawmin built up its capabilities in formulation, product development and manufacturing. The focus shifted from the initial vision to setting up the processes needed to support brands from concept and sampling through to production.",
    highlights: [
      "Standardised R&D, stability testing and sampling workflows",
      "Establishment of precision compounding and quality control lines",
      "Onboarding of our initial cohort of indie beauty and skincare brands",
    ],
    image: "/images/about/journey-2024.jpg",
    alt: "Rawmin Skinology cleanroom lab and overhead mixing facilities in 2024",
  },
  {
    year: "2025",
    tag: "Expanding Our Range",
    heading: "Widening capabilities across 7 core categories.",
    description:
      "With stronger capabilities, Rawmin widened its range to cover skin care, hair care, body care, lip care, bath & shower, men's grooming and baby care. Our role grew beyond manufacturing. We now help brands develop products around their own vision.",
    highlights: [
      "Expansion into 7 complete personal-care and cosmetic categories",
      "High-speed filling, automated induction sealing and packaging solutions",
      "GMP and ISO-compliant documentation & regulatory guidance",
    ],
    image: "/images/about/journey-2025.jpg",
    alt: "Rawmin Skinology formulation library and warehouse inventory in 2025",
  },
  {
    year: "2026",
    tag: "Where We Are Today",
    heading: "Helping brands build products that belong to them.",
    description:
      "Today, Rawmin Skinology brings together R&D, formulation, private label manufacturing, packaging, quality systems and end-to-end product support to take brands from idea to finished product. From custom cosmetics to private label, our focus stays the same: Helping brands build products that belong to them.",
    highlights: [
      "Full-scale production in modern stainless-steel compounding facilities",
      "Over 19 verified brand partners across India and overseas markets",
      "End-to-end turnaround: formulation, packaging, QA and export support",
    ],
    image: "/images/about/journey-2026.jpg",
    alt: "Rawmin Skinology modern industrial compounding facility in 2026",
  },
];

export default function ExploreOurJourney() {
  const [selectedIndex, setSelectedIndex] = useState(3); // Default to current year 2026
  const activeMilestone = MILESTONES[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : MILESTONES.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < MILESTONES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="explore-journey"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#E6F6F8] via-[#EDF8F9] to-[#DEF2F4] border-b border-[#B2E8EB] overflow-hidden"
      aria-label="Explore Our Journey 2023 to 2026"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#136B75] bg-[#2CB6C4]/15 border border-[#2CB6C4]/35 px-3.5 py-1.5 rounded-full mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#2CB6C4]" />
            <span>Milestones &amp; Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#144246] tracking-tight leading-tight">
            Explore Our Journey (2023–2026)
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2C5256] leading-relaxed font-normal">
            From our founding vision to an integrated cosmetic and personal-care manufacturing partner. Click each year to explore our growth.
          </p>
        </div>

        {/* Large Accessible Year Selector Buttons */}
        <div
          role="tablist"
          aria-label="Journey Years"
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          {MILESTONES.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={item.year}
                role="tab"
                id={`tab-${item.year}`}
                aria-selected={isSelected}
                aria-controls={`panel-${item.year}`}
                onClick={() => setSelectedIndex(idx)}
                className={cn(
                  "relative min-h-[58px] sm:min-h-[64px] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 text-left transition-all duration-200 border cursor-pointer select-none active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2CB6C4]",
                  isSelected
                    ? "bg-[#2CB6C4] text-white border-[#24A6B5] shadow-lg shadow-[#2CB6C4]/25 ring-2 ring-[#2CB6C4]/30"
                    : "bg-white/95 text-[#144246] border-[#B2E8EB] hover:bg-[#DEF2F4] hover:border-[#2CB6C4]/50 shadow-xs"
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "font-mono text-2xl sm:text-3xl font-extrabold tracking-tight",
                      isSelected ? "text-white" : "text-[#187580]"
                    )}
                  >
                    {item.year}
                  </span>
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      isSelected ? "bg-[#FFE89E] scale-125" : "bg-[#2CB6C4]/40"
                    )}
                  />
                </div>
                <p
                  className={cn(
                    "text-xs sm:text-sm font-medium mt-1 truncate",
                    isSelected ? "text-white/95" : "text-[#2C5256]"
                  )}
                >
                  {item.tag}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card Showcase */}
        <div
          id={`panel-${activeMilestone.year}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeMilestone.year}`}
          className="relative bg-white border border-[#B2E8EB] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-md overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.year}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Authentic Uploaded Milestone Image */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#B2E8EB] bg-stone-100 group">
                  <Image
                    src={activeMilestone.image}
                    alt={activeMilestone.alt}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#0D292D]/85 backdrop-blur-md text-[#8DE3E8] border border-[#2CB6C4]/40 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold">
                    RAWMIN • {activeMilestone.year}
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Key Achievements */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#2CB6C4]">
                    {activeMilestone.year}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#136B75] bg-[#2CB6C4]/15 border border-[#2CB6C4]/35 px-3 py-1 rounded-full">
                    {activeMilestone.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#144246] leading-snug">
                  {activeMilestone.heading}
                </h3>

                <p className="text-[#2C5256] text-base sm:text-lg leading-relaxed font-normal">
                  {activeMilestone.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#B2E8EB]">
                  {activeMilestone.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#16393C]">
                      <CheckCircle2 className="w-4 h-4 text-[#2CB6C4] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation and Link to Full About Timeline */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous milestone year"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#B2E8EB] bg-[#EDF8F9] text-[#144246] hover:bg-[#2CB6C4] hover:text-white transition-colors cursor-pointer active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next milestone year"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#B2E8EB] bg-[#EDF8F9] text-[#144246] hover:bg-[#2CB6C4] hover:text-white transition-colors cursor-pointer active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-[#2C5256] font-mono pl-1">
                      {selectedIndex + 1} of {MILESTONES.length}
                    </span>
                  </div>

                  <Link
                    href="/about#journey"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#187580] hover:text-[#2CB6C4] hover:underline"
                  >
                    <span>Read Full Story in About Us</span>
                    <ArrowRight className="w-4 h-4 text-[#B89A60]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

