'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface ScrollProcessStep {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

const defaultProcessSteps: ScrollProcessStep[] = [
  {
    id: '01',
    title: 'Distribution',
    subtitle: 'Climate-controlled Raw Material Storage',
    desc: 'Automated warehousing and strict environmental management ensure optimal material stability prior to production.',
    image: '/images/services/process-step1-idea.png',
  },
  {
    id: '02',
    title: 'Weighing',
    subtitle: 'Precision Measurement Systems',
    desc: 'Digital precision weighing and automated dosing deliver exact ratio formulation and batch reproducibility.',
    image: '/images/services/process-step3-formulation.png',
  },
  {
    id: '03',
    title: 'Manufacturing',
    subtitle: 'High-Shear Emulsification & Blending',
    desc: 'State-of-the-art mixing vessels produce smooth skincare emulsions and vibrant liquid color cosmetics.',
    image: '/images/services/process-step6-cleanroom.png',
  },
  {
    id: '04',
    title: 'Moulding',
    subtitle: 'Solid Cosmetic & Powder Shaping',
    desc: 'High-speed automated moulding systems press powders and form lipsticks with micron-level consistency.',
    image: '/images/services/process-step4-prototype.png',
  },
  {
    id: '05',
    title: 'Filling & Packaging',
    subtitle: 'Sterile Cleanroom Assembly',
    desc: 'Multi-track automated lines execute sterile container filling, seal checking, and final packaging.',
    image: '/images/services/process-step5-packaging.png',
  },
  {
    id: '06',
    title: 'Finished Products',
    subtitle: 'Global Quality Assurance & Shipping',
    desc: 'Rigorous batch quality testing, robotic palletizing, and climate-regulated dispatch to global partners.',
    image: '/images/services/process-step7-dispatch.png',
  },
];

interface ManufacturingScrollProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  steps?: ScrollProcessStep[];
  className?: string;
}

export default function ManufacturingScroll({
  id = 'how-it-works',
  eyebrow = 'Production Capabilities',
  heading = 'Manufacturing Process',
  steps,
  className = '',
}: ManufacturingScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const processSteps = steps && steps.length > 0 ? steps : defaultProcessSteps;

  // Track vertical scroll progress relative to the container height
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Map 0 -> 100% vertical scroll to horizontal translation (-X offset)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  // Map vertical scroll to overall progress bar width (0% -> 100%)
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    // Outer scroll container (height dictates the duration of the scroll effect)
    <section
      id={id}
      ref={targetRef}
      className={`relative h-[380vh] bg-slate-950 text-white ${className}`}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden px-6 md:px-16 py-10 md:py-14">
        {/* Header & Fixed Timeline Track */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#2CB6C4] font-semibold mb-2">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-slate-100 mb-6">
            {heading}
          </h2>

          {/* Timeline Bar Track */}
          <div className="relative w-full h-[3px] bg-slate-800 my-4 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#2CB6C4] via-[#8DE3E8] to-white rounded-full transition-all duration-75"
            />
          </div>
        </div>

        {/* Horizontal Track containing Cards */}
        <div className="relative flex items-center my-auto overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 md:gap-10 pl-2">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="group relative flex-shrink-0 w-[85vw] md:w-[620px] lg:w-[680px] bg-slate-900/85 border border-slate-800 rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-2xl backdrop-blur-md hover:border-[#2CB6C4]/40 transition-colors"
              >
                {/* Image */}
                <div className="w-full md:w-1/2 h-48 md:h-64 rounded-2xl overflow-hidden relative bg-slate-950 border border-slate-800/80 shrink-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 85vw, 340px"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-medium text-white mb-1.5 group-hover:text-[#8DE3E8] transition-colors">
                    {step.title}
                  </h3>
                  <h4 className="text-sm text-[#2CB6C4] font-medium mb-3">
                    {step.subtitle}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Hint */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono tracking-wider pt-2 border-t border-slate-800/60">
          <span>SCROLL DOWN TO EXPLORE PROCESS ↓</span>
          <span className="hidden sm:inline">6 CORE PRODUCTION PHASES</span>
        </div>
      </div>
    </section>
  );
}
