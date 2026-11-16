"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlueSurfaceSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  glow?: boolean;
}

/**
 * BlueSurfaceSection
 * 
 * Recreates the exact animation behaviour from the reference video:
 * 1. When the visitor scrolls into the section, the deep blue surface rises/expands into view.
 * 2. After the blue surface is in place, headings and supporting content reveal in crisp white.
 * 3. Children animate with smooth, staggered timing and high contrast.
 */
export function BlueSurfaceSection({
  children,
  id,
  className,
  innerClassName,
  glow = true,
}: BlueSurfaceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        "relative py-20 sm:py-24 lg:py-28 overflow-hidden select-none transition-colors duration-700",
        "bg-gradient-to-br from-[#0D292D] via-[#144246] to-[#0A2023] text-white border-y border-[#2CB6C4]/25",
        className
      )}
    >
      {/* Radiant ambient glow behind the blue surface */}
      {glow && (
        <>
          <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[540px] h-[540px] bg-[#2CB6C4]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-[#8DE3E8]/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      {/* Blue Surface Curtain / Reveal Container */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 36, scale: 0.99 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 36, scale: 0.99 }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full", innerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface BlueRevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * BlueRevealText
 * Smoothly reveals white headings and copy over the blue surface with staggered timing.
 */
export function BlueRevealText({ children, delay = 0.2, className }: BlueRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
