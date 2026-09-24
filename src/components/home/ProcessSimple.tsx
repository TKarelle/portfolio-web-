"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { process } from "@/data/services";
import { bubbleInStyle, waveDelay } from "@/lib/motion";
import { CTA } from "@/data/copy";

const styles = [
  "card p-6 !bg-ink text-white border-ink h-full",
  "card p-6 !bg-surface text-ink border-ink h-full",
  "card p-6 !bg-ink text-white border-ink h-full",
  "card p-6 !bg-surface text-ink border-ink h-full",
];

const textStyles = [
  "text-white/80",
  "text-muted",
  "text-white/80",
  "text-muted",
];

const waveClass = [
  "float-wave",
  "float-wave-alt",
  "float-wave-slow",
  "float-wave",
] as const;

export function ProcessSimple() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setReduceMotion(prefersReduced);

    const el = gridRef.current;
    if (!el) return;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 bg-chunk-lime" id="processus">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-12 max-w-2xl">
          <p className="text-sm font-bold text-violet mb-3 tracking-wide">
            4 étapes simples
          </p>
          <SectionHead align="left" stroke="lime" highlight="ça marche">
            {"Comment ça marche"}
          </SectionHead>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 items-stretch"
        >
          {process.map((s, i) => (
            <div
              key={s.step}
              className="h-full"
              style={bubbleInStyle(i, visible)}
            >
              <div
                className={`h-full ${
                  reduceMotion || !visible
                    ? ""
                    : waveClass[i % waveClass.length]
                }`}
                style={
                  reduceMotion || !visible
                    ? undefined
                    : { animationDelay: waveDelay(i) }
                }
              >
                <div className={`${styles[i]} flex flex-col`}>
                  <p className="text-3xl font-extrabold opacity-40 mb-3">
                    {s.step}
                  </p>
                  <h3 className="font-extrabold text-lg mb-3">{s.title}</h3>
                  <p
                    className={`text-sm font-medium leading-relaxed flex-1 ${textStyles[i]}`}
                  >
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <Button href="#contact" size="lg">
            {CTA.primary}
          </Button>
        </div>
      </div>
    </section>
  );
}
