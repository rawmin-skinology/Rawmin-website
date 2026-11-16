"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { FileText, Leaf, FlaskConical, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: string;
  name: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  points: string[];
}

const STEPS: Step[] = [
  {
    id: "step-brief",
    name: "Brief",
    subtitle: "Concept & Hero Actives",
    desc: "Define your product vision, target skin benefits, benchmark textures, hero active ingredients, and brand requirements.",
    icon: FileText,
    points: [
      "Target skin feel, claims & benchmarks",
      "Key Korean bio-ferments & active selection",
      "Packaging preferences & launch timeline",
    ],
  },
  {
    id: "step-ingredient",
    name: "Ingredient",
    subtitle: "Sourcing & Compatibility",
    desc: "Source certified Korean bio-ferments, biomimetic peptides, and barrier-repair actives with full safety and regulatory screening.",
    icon: Leaf,
    points: [
      "Certified bio-ferment & peptide sourcing",
      "Active ingredient synergy & stability check",
      "Safety, toxicity & regulatory verification",
    ],
  },
  {
    id: "step-formulation",
    name: "Formulation",
    subtitle: "Laboratory Compounding",
    desc: "Our cosmetic chemists compound your bespoke formula in our laboratory, balancing emulsion stability, pH, and sensory skin feel.",
    icon: FlaskConical,
    points: [
      "Precision bench chemistry & micro-emulsion",
      "Viscosity, pH and texture sensory balancing",
      "Prototype sample preparation for your approval",
    ],
  },
];

export default function ServicesPathway() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.35) {
        setActiveStep(0);
      } else if (latest < 0.7) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Line progress percentage
  // 0% when activeStep === 0, 50% when activeStep === 1, 100% when activeStep === 2
  const lineProgress = activeStep === 0 ? 0 : activeStep === 1 ? 50 : 100;

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-[#0D292D] via-[#144246] to-[#0A2023] text-white border-y border-[#2CB6C4]/30 select-none overflow-hidden"
      aria-label="Development Steps: From Initial Idea to Approved Sample"
    >
      {/* Radiant ambient glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[540px] h-[540px] bg-[#2CB6C4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[380px] h-[380px] bg-[#8DE3E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2CB6C4]/20 border border-[#2CB6C4]/40 text-[#8DE3E8] text-xs font-semibold uppercase tracking-widest mb-3 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFE89E]" />
            <span>Development Pathway</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading text-white tracking-[-0.03em] leading-tight"
          >
            From Initial Idea to Approved Sample
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-2xl mx-auto font-sans"
          >
            A connected, progressive formulation journey from your initial brief to sample approval.
          </motion.p>
        </div>

        {/* CONNECTED HORIZONTAL PATHWAY: Brief → Ingredient → Formulation */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Horizontal Connecting Pipeline Line (Hidden on small mobile, prominent on md+) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[3px] bg-white/15 rounded-full z-0 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#2CB6C4] to-[#8DE3E8] rounded-full transition-all duration-700 ease-out shadow-[0_0_12px_rgba(44,182,196,0.8)]"
              style={{ width: `${lineProgress}%` }}
            />
          </div>

          {/* 3 Process Pathway Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep >= idx;
              const isCurrent = activeStep === idx;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "rounded-3xl p-6 sm:p-7 transition-all duration-500 cursor-pointer flex flex-col justify-between backdrop-blur-md border",
                    isActive
                      ? "bg-white/12 border-[#2CB6C4] shadow-xl shadow-[#2CB6C4]/15 -translate-y-1"
                      : "bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/8"
                  )}
                >
                  <div>
                    {/* Top Node Indicator & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                          isActive
                            ? "bg-[#2CB6C4] text-white shadow-lg shadow-[#2CB6C4]/35 scale-105"
                            : "bg-white/10 text-white/60"
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Illuminated Pathway Node */}
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "w-3 h-3 rounded-full transition-all duration-500",
                            isCurrent
                              ? "bg-[#2CB6C4] ring-4 ring-[#2CB6C4]/30 animate-pulse"
                              : isActive
                              ? "bg-[#8DE3E8]"
                              : "bg-white/20"
                          )}
                        />
                        <span className="text-[11px] font-mono tracking-wider uppercase text-white/50">
                          {idx === 0 ? "Step 1" : idx === 1 ? "Step 2" : "Step 3"}
                        </span>
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <span className="text-xs uppercase tracking-widest text-[#8DE3E8] font-semibold block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-2">
                      {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal mb-5">
                      {step.desc}
                    </p>
                  </div>

                  {/* Key Checkpoint Bullets */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {step.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-white/85">
                        <CheckCircle2
                          className={cn(
                            "w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors",
                            isActive ? "text-[#2CB6C4]" : "text-white/40"
                          )}
                        />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Navigation Hint */}
          <div className="mt-8 text-center">
            <span className="text-xs text-white/50 font-medium">
              Brief → Ingredient → Formulation • Scroll or click cards to advance the pathway
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
