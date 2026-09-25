"use client";

import { useEffect, useRef, useState } from "react";
import { pricingPlans } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { DeliveryDisclaimer } from "@/components/ui/DeliveryNote";
import { bubbleInStyle, waveDelay } from "@/lib/motion";
import { CTA } from "@/data/copy";

const waveClass = ["float-wave", "float-wave-slow", "float-wave-alt"] as const;

export function Pricing() {
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
    <section className="scroll-mt-28 py-14 md:py-20 px-6 bg-bg" id="forfaits">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-10 md:mb-12">
          <SectionHead stroke="pink" highlight="forfait">
            {"Choisis ton forfait"}
          </SectionHead>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:items-stretch"
        >
          {pricingPlans.map((plan, i) => (
            <div
              key={plan.id}
              className={plan.highlight ? "md:-translate-y-3" : undefined}
              style={bubbleInStyle(i, visible)}
            >
              <div
                className={
                  reduceMotion || !visible
                    ? undefined
                    : waveClass[i % waveClass.length]
                }
                style={
                  reduceMotion || !visible
                    ? undefined
                    : { animationDelay: waveDelay(i) }
                }
              >
                <div
                  className={`card card-hover p-7 md:p-8 flex flex-col relative h-full ${
                    plan.highlight
                      ? "!bg-violet !text-white !shadow-[6px_6px_0_#d4ff00] !border-lime"
                      : "bg-surface"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-lime !text-ink text-xs font-bold px-4 py-1 rounded-full border-2 border-ink whitespace-nowrap">
                      Le plus populaire
                    </span>
                  )}

                  <p
                    className={`text-sm font-bold uppercase tracking-wider ${
                      plan.highlight ? "text-lime" : "text-pink"
                    }`}
                  >
                    {plan.name}
                  </p>

                  <div className="mt-4 mb-2 flex items-baseline gap-1">
                    <span
                      className={`text-5xl font-extrabold tracking-tight ${
                        plan.highlight ? "text-white" : ""
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-lg font-semibold ${
                          plan.highlight ? "text-white/60" : "text-muted"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-sm mb-1 font-medium ${
                      plan.highlight ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <p
                    className={`text-xs font-bold mb-6 ${
                      plan.highlight ? "text-lime" : "text-violet"
                    }`}
                  >
                    Livraison : {plan.delivery}
                  </p>

                  <ul
                    className={`space-y-3 mb-8 flex-1 text-sm font-medium ${
                      plan.highlight ? "text-white/85" : "text-ink/80"
                    }`}
                  >
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span
                          className={plan.highlight ? "text-lime" : "text-pink"}
                        >
                          ✦
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={plan.highlight ? "primary" : "outline"}
                    className={`w-full ${plan.highlight ? "!text-ink" : ""}`}
                  >
                    {CTA.plan}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <DeliveryDisclaimer className="reveal mt-8 text-center max-w-lg mx-auto" />
      </div>
    </section>
  );
}
