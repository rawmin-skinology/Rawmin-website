"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ManufacturingStage {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

// 7 selected manufacturing stages matching the real photography in /public
const MANUFACTURING_STAGES: ManufacturingStage[] = [
  {
    id: "formula-development",
    title: "Formula Development",
    subtitle: "Creating customised cosmetic formulations based on your brand's vision.",
    image: "/18.png",
  },
  {
    id: "ingredient-weighing",
    title: "Ingredient Sourcing & Weighing",
    subtitle: "Precision measurement of high-purity actives and botanical extracts.",
    image: "/19.png",
  },
  {
    id: "texture-crafting",
    title: "Texture & Emulsion Crafting",
    subtitle: "Refining viscosity, absorption and sensory feel for optimal performance.",
    image: "/20.png",
  },
  {
    id: "cleanroom-manufacturing",
    title: "Controlled Manufacturing",
    subtitle: "Batch compounding in sanitary stainless-steel cleanroom vessels.",
    image: "/22.png",
  },
  {
    id: "quality-validation",
    title: "Quality Testing & Validation",
    subtitle: "Rigorous microbiological, stability and compliance testing for every batch.",
    image: "/24.png",
  },
  {
    id: "packaging-release",
    title: "Packaging & Batch Release",
    subtitle: "Sterile filling, carton packaging and documented batch sign-off.",
    image: "/23.png",
  },
  {
    id: "finished-products",
    title: "Finished Cosmetic Goods",
    subtitle: "Market-ready formulations packaged and prepared for commercial dispatch.",
    image: "/25.png",
  },
];

export default function HorizontalManufacturingJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate total horizontal travel dynamically
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth + (window.innerWidth < 640 ? 40 : 100));
      };

      const scrollDistance = Math.max(track.scrollWidth - window.innerWidth + 500, 2400);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // 1. Horizontal track movement: right to left
      tl.to(
        track,
        {
          x: getScrollAmount,
          ease: "none",
          duration: 1,
        },
        0
      );

      // 2. Synchronized progressive connecting line animation:
      // Each gap line starts with scaleX = 0, emerges from the right edge of stage[i],
      // extends through the gap, and connects to stage[i+1] exactly as it arrives.
      const lines = lineRefs.current.filter(Boolean) as HTMLDivElement[];
      const totalLines = lines.length;

      lines.forEach((line, idx) => {
        // Distribute start times evenly across the horizontal scroll travel
        const segmentStart = (idx / totalLines) * 0.88 + 0.02;
        const segmentDuration = 0.72 / totalLines;

        tl.fromTo(
          line,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            ease: "power1.inOut",
            duration: segmentDuration,
          },
          segmentStart
        );
      });
    }, section);

    // Refresh measurements once layout stabilizes
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manufacturing-journey"
      data-no-reveal="true"
      className="relative w-full bg-[#FBF9F5] text-[#121614] overflow-hidden select-none border-b border-[#2E5A44]/15"
      aria-label="From Formula to Finished Goods Manufacturing Journey"
    >
      {/* Pinned Viewport Container - Height budget guarantees text is never cut off */}
      <div className="w-full h-screen min-h-[660px] max-h-[960px] flex flex-col justify-between py-6 sm:py-8 lg:py-10">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 shrink-0">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading text-[#121614] tracking-[-0.03em] leading-tight">
              From Formula to Finished Goods
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#121614]/75 font-sans font-normal leading-relaxed">
              From initial formulation to final packaging, every stage is part of our manufacturing journey.
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Track - flex-1 with overflow-hidden horizontally */}
        <div className="relative w-full flex-1 flex items-center overflow-x-hidden overflow-y-visible my-auto py-2">
          <div
            ref={trackRef}
            className="flex items-start will-change-transform pl-4 sm:pl-8 lg:pl-16 pr-12 sm:pr-24 lg:pr-36"
          >
            {MANUFACTURING_STAGES.map((stage, idx) => (
              <div key={stage.id} className="flex items-start shrink-0">
                
                {/* Individual Stage Card */}
                <div className="flex flex-col shrink-0">
                  {/* Image Container with 16/10 aspect ratio - perfectly height-safe for all screens */}
                  <div className="relative w-[280px] sm:w-[380px] md:w-[440px] lg:w-[480px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#F5F5F0] border border-[#2E5A44]/25 shadow-lg z-10">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 440px, 480px"
                      priority={idx <= 1}
                    />
                  </div>

                  {/* Clean Minimal Typography - Fixed generous spacing, NO truncation or cutoffs */}
                  <div className="mt-4 sm:mt-5 max-w-[280px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] pb-4">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold font-heading text-[#121614] tracking-tight leading-snug">
                      {stage.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#121614]/75 font-sans leading-relaxed font-normal">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>

                {/* Progressive Animated Connecting Line Bridge - Exactly at vertical center of image */}
                {idx < MANUFACTURING_STAGES.length - 1 && (
                  <div
                    className="relative shrink-0 w-16 sm:w-24 lg:w-32 -mx-[1px] self-start mt-[88px] sm:mt-[119px] md:mt-[137px] lg:mt-[150px] z-0"
                    aria-hidden="true"
                  >
                    {/* Overflow container clips the line until scroll extends it */}
                    <div className="w-full h-[2px] bg-transparent overflow-hidden">
                      <div
                        ref={(el) => {
                          lineRefs.current[idx] = el;
                        }}
                        className="w-full h-full bg-[#2E5A44] origin-left will-change-transform"
                        style={{
                          transform: "scaleX(0)",
                          transformOrigin: "left center",
                        }}
                      />
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Safety Buffer */}
        <div className="h-2 sm:h-4 shrink-0" />
      </div>
    </section>
  );
}
