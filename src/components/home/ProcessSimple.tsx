"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { process } from "@/data/services";
import { CTA } from "@/data/copy";
import { cn } from "@/lib/utils";

/**
 * Processus — timeline éditoriale animée au scroll.
 * Rail 01──02──03──04 + focus progressif sur chaque étape.
 */
export function ProcessSimple() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(reduce);
    if (reduce) {
      setProgress(1);
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Animation sur la traversée de la section (entrée → milieu)
      const start = vh * 0.85;
      const end = vh * 0.25;
      const raw = (start - rect.top) / (start - end + rect.height * 0.35);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const n = process.length;
  // Chaque étape s’allume sur une portion du progress (avec chevauchement doux)
  const stepProgress = (i: number) => {
    const start = i / (n + 0.35);
    const end = (i + 1.15) / (n + 0.35);
    return Math.min(1, Math.max(0, (progress - start) / (end - start)));
  };
  const activeIndex = Math.min(
    n - 1,
    Math.max(0, Math.floor(progress * n * 0.98)),
  );

  return (
    <section
      ref={sectionRef}
      className="process-section relative z-10 py-20 sm:py-24 md:py-28 lg:py-32 px-5 sm:px-8 md:px-10 bg-bg"
      id="processus"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="reveal text-center max-w-3xl mx-auto mb-14 sm:mb-16 md:mb-20">
          <SectionHead size="xl">
            De votre <TitleEm>idée</TitleEm> à votre <TitleEm>site</TitleEm>
          </SectionHead>
        </div>

        {/* Rail numéros — desktop */}
        <ol
          className="hidden md:flex items-center w-full mb-12 lg:mb-16"
          aria-hidden
        >
          {process.map((s, i) => {
            const sp = stepProgress(i);
            const lineSp = i < n - 1 ? stepProgress(i + 0.15) : 0;
            return (
              <li key={s.step} className="flex items-center min-w-0 flex-1">
                <span
                  className={cn(
                    "process-rail__num shrink-0 text-[clamp(2.75rem,5vw,4.5rem)] font-extrabold tracking-tight leading-none tabular-nums",
                    i === activeIndex ? "text-ink" : "text-ink/25",
                  )}
                  style={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0.2 + sp * 0.8,
                          transform: `translateY(${(1 - sp) * 18}px) scale(${0.92 + sp * 0.08})`,
                        }
                  }
                >
                  {s.step}
                </span>
                {i < n - 1 ? (
                  <span className="process-rail__track mx-4 lg:mx-6 h-px flex-1 bg-ink/10 overflow-hidden">
                    <span
                      className="process-rail__fill block h-full origin-left bg-ink/45"
                      style={{
                        transform: `scaleX(${reduceMotion ? 1 : lineSp})`,
                      }}
                    />
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>

        {/* Éditorial */}
        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 lg:gap-8 mb-12 sm:mb-14">
          <span
            className="md:hidden absolute left-[1.15rem] top-3 bottom-3 w-px bg-ink/10 overflow-hidden"
            aria-hidden
          >
            <span
              className="absolute inset-x-0 top-0 w-full origin-top bg-ink/40"
              style={{
                height: "100%",
                transform: `scaleY(${reduceMotion ? 1 : progress})`,
              }}
            />
          </span>

          {process.map((s, i) => {
            const sp = stepProgress(i);
            const isActive = i === activeIndex;
            const reveal = 0.12 + sp * 0.88;
            const focus =
              reduceMotion || isActive || progress < 0.1 ? 1 : 0.48;
            return (
              <li
                key={s.step}
                className="process-step relative pl-12 md:pl-0 will-change-[opacity,transform]"
                style={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: reveal * focus,
                        transform: `translateY(${(1 - sp) * 28}px)`,
                      }
                }
              >
                <span
                  className={cn(
                    "md:hidden absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink text-sm font-extrabold tabular-nums transition-all duration-500",
                    isActive || sp > 0.6
                      ? "bg-ink text-lime shadow-[2px_2px_0_0_var(--pink)] scale-105"
                      : "bg-bg text-ink/40 shadow-none scale-100",
                  )}
                >
                  {s.step}
                </span>

                <h3 className="text-lg sm:text-xl font-extrabold text-ink tracking-tight leading-snug">
                  <span className="md:hidden">{s.step} — </span>
                  {s.title}
                </h3>

                <div className="mt-3 space-y-3">
                  {s.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="text-sm sm:text-[0.95rem] font-medium text-muted leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="reveal text-center">
          <Button href="#contact" size="lg" variant="primary">
            {CTA.discovery}
          </Button>
        </div>
      </div>
    </section>
  );
}
