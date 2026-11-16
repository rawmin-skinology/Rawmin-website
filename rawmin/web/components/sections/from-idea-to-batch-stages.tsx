"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStage {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  points: string[];
}

const STAGES: ProcessStage[] = [
  {
    id: "stage-brief",
    title: "Project Brief",
    tagline: "Concept Consultation & Target Goals",
    desc: "Share your product concept, target ingredients, reference benchmark products, desired texture, and launch goals.",
    image: "/images/services/process-step1-idea.png",
    points: [
      "Formula brief, hero actives & benchmark matching",
      "Clean beauty preferences & regulatory requirements",
      "Packaging container preferences & launch timeline",
    ],
  },
  {
    id: "stage-feasibility",
    title: "Feasibility Review",
    tagline: "Technical Formulation Analysis",
    desc: "Our chemists review active ingredient stability, pH balance, Korean ingredient sourcing, and production costs.",
    image: "/images/services/process-step2-feasibility.png",
    points: [
      "Active ingredient compatibility & stability review",
      "Korean active sourcing & compliance verification",
      "Production scale-up economics & batch estimation",
    ],
  },
  {
    id: "stage-sampling",
    title: "Lab Sample",
    tagline: "Prototype Formulation & Sampling",
    desc: "We compound prototype samples in our laboratory and send them to you for feedback on texture, scent, and skin feel.",
    image: "/images/services/process-step3-formulation.png",
    points: [
      "Laboratory bench chemistry & emulsion crafting",
      "Hands-on prototype samples delivered for evaluation",
      "Refined by our cosmetic chemists until approved",
    ],
  },
  {
    id: "stage-packaging",
    title: "Packaging Compatibility",
    tagline: "Container & Dispenser Verification",
    desc: "We test your formula inside your chosen bottles, jars, or pumps to ensure smooth dispensing and leak-free performance.",
    image: "/images/services/process-step5-packaging.png",
    points: [
      "Airless pumps, droppers, tubes & jars testing",
      "40°C accelerated temperature & leak verification",
      "Regulatory check for label artwork and claims",
    ],
  },
  {
    id: "stage-cleanroom",
    title: "Cleanroom Production",
    tagline: "Certified ISO 22716 Compounding",
    desc: "We manufacture your batch in our certified ISO 22716 cleanroom facility in Faridabad with complete batch records.",
    image: "/images/services/process-step6-cleanroom.png",
    points: [
      "Sanitary stainless-steel jacketed compounding tanks",
      "Certified ISO 22716 & GMP cleanrooms with HEPA air",
      "Automated filling nozzles & induction sealing lines",
    ],
  },
  {
    id: "stage-dispatch",
    title: "QC Release & Dispatch",
    tagline: "Analytical Testing & Safe Delivery",
    desc: "Finished batches undergo final laboratory release testing, receive a Certificate of Analysis (COA), and dispatch safely.",
    image: "/images/services/process-step7-dispatch.png",
    points: [
      "Microbiology, heavy metals & pH release analysis",
      "Official batch Certificate of Analysis (COA)",
      "Secure export carton packing & warehouse dispatch",
    ],
  },
];

export default function FromIdeaToBatchStages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Scroll tracking across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate active stage from vertical scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const rawIndex = Math.min(
        STAGES.length - 1,
        Math.max(0, Math.floor(latest * STAGES.length))
      );
      if (rawIndex !== activeStageIndex) {
        setDirection(rawIndex > activeStageIndex ? 1 : -1);
        setActiveStageIndex(rawIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, activeStageIndex]);

  const activeStage = STAGES[activeStageIndex];

  // Jump to stage programmatically
  const goToStage = (targetIdx: number) => {
    const clamped = Math.max(0, Math.min(STAGES.length - 1, targetIdx));
    if (clamped === activeStageIndex) return;
    setDirection(clamped > activeStageIndex ? 1 : -1);
    setActiveStageIndex(clamped);

    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (clamped / (STAGES.length - 1)) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Continuous line progress percentage (0% to 100%)
  const lineProgressPercent = (activeStageIndex / (STAGES.length - 1)) * 100;

  return (
    <section
      id="idea-to-batch"
      ref={containerRef}
      className="relative min-h-[300vh] bg-gradient-to-b from-[#F7F5F0] via-[#EAF7F8] to-[#DEF2F4] border-b border-[#B2E8EB] select-none"
      aria-label="From Idea to Finished Batch - Manufacturing Pathway"
    >
      {/* Sticky Viewport Container - Perfectly sized to prevent clipping */}
      <div className="sticky top-[68px] sm:top-[76px] lg:top-[80px] h-[calc(100vh-68px)] sm:h-[calc(100vh-76px)] lg:h-[calc(100vh-80px)] max-h-[860px] w-full flex flex-col justify-between py-3 sm:py-5 lg:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* TOP: Section Header - Initially shows "From Idea to Finished Batch" and no stage numbers */}
        <div className="w-full shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2CB6C4]/15 border border-[#2CB6C4]/35 text-[#136B75] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1 shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#B89A60]" />
                <span>Manufacturing Pathway</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light font-heading text-[#144246] tracking-[-0.03em] leading-tight">
                From Idea to Finished Batch
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#2C5256] max-w-md font-normal hidden md:block text-right">
              A step-by-step connected manufacturing journey from your brief to warehouse dispatch.
            </p>
          </div>
        </div>

        {/* MIDDLE: Dual-Column Process Card - Complete Photograph & Crisp Points with Zero Clipping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center my-auto w-full">
          
          {/* LEFT COLUMN: Stage Details (Enters smoothly from the left) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, x: direction > 0 ? -24 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? 24 : -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-2.5 sm:space-y-3"
              >
                {/* Stage Tagline */}
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#187580] block">
                  {activeStage.tagline}
                </span>

                {/* Main Heading - Clean and Bold without Numbers */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#144246] tracking-[-0.02em] leading-tight">
                  {activeStage.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#2C5256] leading-relaxed font-normal">
                  {activeStage.desc}
                </p>

                {/* 3 Crisp Supporting Points */}
                <div className="space-y-2 sm:space-y-2.5 pt-1.5 sm:pt-2">
                  {activeStage.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#144246] font-medium bg-white/90 backdrop-blur-xs p-2.5 sm:p-3 rounded-xl border border-[#B2E8EB] shadow-2xs hover:border-[#2CB6C4] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2CB6C4] shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: HD Photograph with Integrated Horizontal Connecting Pathway */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* The Photograph Frame with Connected Pathway Anchors */}
            <div className="relative w-full max-w-[440px] lg:max-w-[480px]">
              
              {/* Outer Glow & Pipeline Pathway Line running directly into and out of the photograph */}
              <div className="relative aspect-[4/3] max-h-[260px] sm:max-h-[300px] lg:max-h-[340px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#AEE6EA] bg-white group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage.id}
                    initial={{ opacity: 0, scale: 1.04, x: direction > 0 ? 30 : -30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: direction > 0 ? -30 : 30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeStage.image}
                      alt={`${activeStage.title} - RAWMIN Skinology manufacturing stage`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient base for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#144246]/50 via-transparent to-transparent pointer-events-none" />

                    {/* Integrated Stage Pill Inside Photo Bottom */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xs text-[#144246]">
                      <span className="text-xs font-bold font-heading">{activeStage.title}</span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#187580] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6C4] animate-pulse" />
                        Connected Pipeline
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Horizontal Connecting Pipeline Bar Directly Below the Photo */}
              <div className="mt-4 sm:mt-5 w-full">
                {/* Continuous Connecting Line */}
                <div className="relative w-full h-[3px] bg-[#B2E8EB] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#2CB6C4] rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(44,182,196,0.6)]"
                    style={{ width: `${lineProgressPercent}%` }}
                  />
                </div>

                {/* Clickable Stage Pipeline Nodes without Numbers */}
                <div className="flex justify-between items-center mt-2.5">
                  {STAGES.map((s, idx) => {
                    const isActive = activeStageIndex === idx;
                    const isCompleted = activeStageIndex > idx;

                    return (
                      <button
                        key={s.id}
                        onClick={() => goToStage(idx)}
                        className={cn(
                          "group flex flex-col items-center focus:outline-none transition-transform active:scale-95 cursor-pointer",
                          isActive ? "scale-110" : "hover:scale-105"
                        )}
                        aria-label={`Jump to ${s.title}`}
                      >
                        <span
                          className={cn(
                            "w-3 h-3 rounded-full transition-all duration-300",
                            isActive
                              ? "bg-[#2CB6C4] ring-4 ring-[#2CB6C4]/30 shadow-md"
                              : isCompleted
                              ? "bg-[#187580]"
                              : "bg-[#B2E8EB] group-hover:bg-[#8DE3E8]"
                          )}
                        />
                        <span
                          className={cn(
                            "text-[10px] sm:text-[11px] font-semibold mt-1 transition-colors hidden sm:block",
                            isActive
                              ? "text-[#144246] font-bold"
                              : isCompleted
                              ? "text-[#187580]"
                              : "text-[#3F6569]/50 group-hover:text-[#3F6569]"
                          )}
                        >
                          {s.title.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM CONTROLS: Arrow Navigation & Progress Indicator */}
        <div className="w-full shrink-0 flex items-center justify-between text-xs text-[#3F6569] pt-2 sm:pt-3 border-t border-[#B2E8EB]/60">
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToStage(activeStageIndex - 1)}
              disabled={activeStageIndex === 0}
              className="p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white border border-[#B2E8EB] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs active:scale-95 cursor-pointer"
              aria-label="Previous Stage"
            >
              <ChevronLeft className="w-4 h-4 text-[#144246]" />
            </button>
            <button
              onClick={() => goToStage(activeStageIndex + 1)}
              disabled={activeStageIndex === STAGES.length - 1}
              className="p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white border border-[#B2E8EB] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs active:scale-95 cursor-pointer"
              aria-label="Next Stage"
            >
              <ChevronRight className="w-4 h-4 text-[#144246]" />
            </button>
            <span className="text-[11px] sm:text-xs text-[#187580] font-medium hidden sm:inline ml-1">
              Scroll down to advance through the manufacturing pathway
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#144246]">
            <span className="w-2 h-2 rounded-full bg-[#2CB6C4]" />
            <span>{activeStage.title}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
