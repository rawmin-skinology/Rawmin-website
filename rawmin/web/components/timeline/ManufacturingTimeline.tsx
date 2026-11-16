"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import styles from "./ManufacturingTimeline.module.css";

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  tagline?: string;
  image?: string;
  points?: string[];
}

interface ManufacturingTimelineProps {
  id?: string;
  heading?: string;
  badge?: string;
  subtext?: string;
  steps: TimelineStep[];
  className?: string;
  showImages?: boolean;
}

export default function ManufacturingTimeline({
  id = "manufacturing-timeline",
  heading = "Manufacturing Process",
  badge = "Step-by-Step Pathway",
  subtext,
  steps,
  className,
  showImages = true,
}: ManufacturingTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeSteps, setActiveSteps] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    // 1. Observe active steps entering the viewport
    const stepElements = containerRef.current?.querySelectorAll(`.${styles.stepItem}`);

    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px", // Highlights step around middle of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveSteps((prev) => new Set([...prev, index]));
        }
      });
    }, observerOptions);

    stepElements?.forEach((el) => observer.observe(el));

    // 2. Track smooth vertical line fill percentage on window scroll
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalHeight = rect.height;
      const currentScroll = viewportHeight / 2 - rect.top;

      let percentage = (currentScroll / totalHeight) * 100;
      percentage = Math.max(0, Math.min(100, percentage));

      setProgressHeight(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id={id} className={`${styles.section} ${className || ""}`}>
      {/* Header */}
      <div className={styles.headingWrapper}>
        {badge && (
          <div className={styles.badge}>
            <Sparkles className="w-3.5 h-3.5 text-[#B89A60]" />
            <span>{badge}</span>
          </div>
        )}
        <h2 className={styles.heading}>{heading}</h2>
        {subtext && <p className={styles.subtext}>{subtext}</p>}
      </div>

      <div className={styles.timelineContainer} ref={containerRef}>
        {/* Vertical tracking line */}
        <div className={styles.timelineLine}>
          <div
            className={styles.timelineProgress}
            style={{ height: `${progressHeight}%` }}
          />
        </div>

        {/* Process Steps */}
        <div className={styles.stepsList}>
          {steps.map((step, index) => {
            const isActive = activeSteps.has(index);

            return (
              <div
                key={step.id || index}
                data-index={index}
                className={`${styles.stepItem} ${isActive ? styles.active : ""}`}
              >
                {/* Circle Node */}
                <div className={styles.stepNode}>
                  <div className={styles.stepNodeInner} />
                </div>

                {/* Card Content */}
                <div className={styles.stepCard}>
                  <div className={styles.cardHeader}>
                    {step.tagline && (
                      <span className={styles.stepTagline}>{step.tagline.replace(/^0[1-9]\s*[—–-]\s*/, "")}</span>
                    )}
                  </div>

                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>

                  {/* Supporting points & optional image */}
                  {(step.points || (showImages && step.image)) && (
                    <div className={styles.stepDetailsGrid}>
                      {step.points && step.points.length > 0 && (
                        <div className={styles.pointsList}>
                          {step.points.map((pt, pIdx) => (
                            <div key={pIdx} className={styles.pointItem}>
                              <Check className={styles.pointCheck} />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {showImages && step.image && (
                        <div className={styles.imageContainer}>
                          <Image
                            src={step.image}
                            alt={`${step.title} - RAWMIN Skinology Process`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 240px"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

