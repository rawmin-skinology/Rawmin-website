"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ScrollRevealManager
 * Global premium scroll-reveal animation system for RAWMIN Skinology.
 * 
 * Provides consistent, subtle fade-up and image reveal animations across
 * all website pages without interfering with pinned or fixed elements.
 * 
 * Target attributes:
 * - data-reveal="fade-up": 25-35px upward smooth fade
 * - data-reveal="heading": primary section heading reveal
 * - data-reveal="subheading": delayed text fade
 * - data-reveal="image": subtle 1.025 to 1 scale + opacity fade
 * - data-reveal="stagger": grid/card container whose children animate sequentially
 * - data-reveal="card": individual card fade-up
 */
export default function ScrollRevealManager() {
  const pathname = usePathname();
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Safely disable any lingering ScrollTrigger listeners from previous route without mutating DOM during React reconcilation
    ScrollTrigger.getAll().forEach((st) => {
      st.kill(false);
    });

    // Safely disable any lingering ScrollTrigger listeners from previous route without mutating DOM during React reconcilation
    ScrollTrigger.getAll().forEach((st) => {
      st.kill(false);
    });

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Ensure all elements are visible without motion
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      });
      return;
    }

    // Give DOM time to settle after route change
    const timer = setTimeout(() => {
      // Revert previous context cleanly
      if (ctxRef.current) {
        ctxRef.current.revert();
      }

      ctxRef.current = gsap.context(() => {
        // Query elements that are NOT inside pinned sections, navbars, or modals
        const isEligible = (el: Element): boolean => {
          return !el.closest(
            "#manufacturing-journey, header, aside, #inquiry-modal, [data-no-reveal]"
          );
        };

        // 1. Explicit data-reveal="fade-up" or data-reveal="heading"
        const fadeUpElements = Array.from(
          document.querySelectorAll('[data-reveal="fade-up"], [data-reveal="heading"]')
        ).filter(isEligible);

        fadeUpElements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });

        // 2. Explicit data-reveal="subheading" (slight delay after heading)
        const subheadingElements = Array.from(
          document.querySelectorAll('[data-reveal="subheading"]')
        ).filter(isEligible);

        subheadingElements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });

        // 3. Explicit data-reveal="image" (subtle scale 1.025 to 1 + fade)
        const imageElements = Array.from(
          document.querySelectorAll('[data-reveal="image"]')
        ).filter(isEligible);

        imageElements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 1.025 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });

        // 4. Stagger containers (data-reveal="stagger")
        const staggerContainers = Array.from(
          document.querySelectorAll('[data-reveal="stagger"]')
        ).filter(isEligible);

        staggerContainers.forEach((container) => {
          const children = Array.from(container.children);
          if (children.length === 0) return;

          gsap.fromTo(
            children,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        });

        // 5. Automatic detection for standard section headings across all pages
        const autoHeadings = Array.from(
          document.querySelectorAll("main section h2:not([data-reveal])")
        ).filter(isEligible);

        autoHeadings.forEach((h2) => {
          gsap.fromTo(
            h2,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: h2,
                start: "top 88%",
                toggleActions: "play reverse play reverse",
              },
            }
          );

          // Find adjacent subtitle / paragraph if present and animate with subtle delay
          const nextPara = h2.nextElementSibling;
          if (
            nextPara &&
            (nextPara.tagName === "P" || nextPara.tagName === "DIV") &&
            !nextPara.hasAttribute("data-reveal")
          ) {
            gsap.fromTo(
              nextPara,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: h2,
                  start: "top 88%",
                  toggleActions: "play reverse play reverse",
                },
              }
            );
          }
        });

        // Refresh triggers after registering
        ScrollTrigger.refresh();
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
    };
  }, [pathname]);

  return null;
}
