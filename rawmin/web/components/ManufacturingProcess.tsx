'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

const defaultProcessSteps: ProcessStep[] = [
  {
    id: '01',
    title: 'Distribution',
    subtitle: 'Warehousing of raw & subsidiary materials',
    desc: 'Strict climate control and automated storage for high-quality raw cosmetic components before production.',
    image: '/images/services/process-step1-idea.png',
  },
  {
    id: '02',
    title: 'Weighing',
    subtitle: 'Precision raw material measurement',
    desc: 'High-precision micro-weighing equipment ensures consistent formulation batches and regulatory compliance.',
    image: '/images/services/process-step3-formulation.png',
  },
  {
    id: '03',
    title: 'Manufacturing',
    subtitle: 'Base formulation & high-shear blending',
    desc: 'Advanced emulsification, liquid mixing, and powder blending for skincare and color cosmetic bases.',
    image: '/images/services/process-step6-cleanroom.png',
  },
  {
    id: '04',
    title: 'Moulding',
    subtitle: 'Shaping solid cosmetics & pigments',
    desc: 'Automated temperature-controlled moulding systems for solid lipsticks, foundations, and pressed powders.',
    image: '/images/services/process-step4-prototype.png',
  },
  {
    id: '05',
    title: 'Filling & Packaging',
    subtitle: 'Sterile filling & final assembly',
    desc: 'Multi-line high-speed filling into airless pumps, tubes, and bottles under cleanroom standards.',
    image: '/images/services/process-step5-packaging.png',
  },
  {
    id: '06',
    title: 'Finished Products',
    subtitle: 'Quality audit & global distribution',
    desc: 'Final batch testing, automated cartoning, palletizing, and climate-controlled dispatch.',
    image: '/images/services/process-step7-dispatch.png',
  },
];

interface ManufacturingProcessProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  steps?: ProcessStep[];
  className?: string;
}

export default function ManufacturingProcess({
  id = 'how-it-works',
  eyebrow = 'Production Capabilities',
  heading = 'Manufacturing Process',
  steps,
  className = '',
}: ManufacturingProcessProps) {
  const [activeStep, setActiveStep] = useState(0);
  const processSteps = steps && steps.length > 0 ? steps : defaultProcessSteps;

  return (
    <section id={id} className={`w-full bg-slate-950 text-white py-20 px-6 md:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#2CB6C4] font-semibold mb-2">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-100">
            {heading}
          </h2>
        </div>

        {/* Horizontal Process Tabs */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-slate-800 mb-12 scroll-smooth">
          {processSteps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`flex-shrink-0 px-6 py-4 text-left border-b-2 transition-all duration-300 ease-in-out ${
                activeStep === idx
                  ? 'border-[#2CB6C4] text-white font-medium opacity-100'
                  : 'border-transparent text-slate-400 hover:text-slate-200 opacity-60'
              }`}
            >
              <span className="block text-xs font-mono mb-1 text-[#8DE3E8]">{step.id}</span>
              <span className="text-sm md:text-base font-sans whitespace-nowrap">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Main Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[450px]">
          {/* Left Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-mono border border-slate-700">
              Step {processSteps[activeStep].id} of {String(processSteps.length).padStart(2, '0')}
            </div>
            <h3 className="text-2xl md:text-4xl font-light text-white leading-tight">
              {processSteps[activeStep].title}
            </h3>
            <h4 className="text-lg text-[#8DE3E8] font-normal">
              {processSteps[activeStep].subtitle}
            </h4>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {processSteps[activeStep].desc}
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                aria-label="Previous step"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 transition"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                disabled={activeStep === processSteps.length - 1}
                aria-label="Next step"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 transition"
              >
                →
              </button>
            </div>
          </div>

          {/* Right Image Display with Fade Effect */}
          <div className="lg:col-span-7 relative h-[350px] md:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
            {processSteps.map((step, idx) => (
              <div
                key={step.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
