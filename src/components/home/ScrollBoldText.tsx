"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollBoldTextProps = {
  paragraphs: readonly string[];
  className?: string;
};

/**
 * Texte éditorial premium (Syne) : mots muted → gras au scroll.
 * Même typo pour HowIWork et VOTRE SITE / RYTHME / VISIBILITÉ.
 */
export function ScrollBoldText({
  paragraphs,
  className = "",
}: ScrollBoldTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  const wordCount = paragraphs.reduce(
    (n, p) => n + p.split(/\s+/).filter(Boolean).length,
    0,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActiveCount(wordCount);
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.9;
      const end = vh * 0.2;
      const raw =
        (start - rect.top) / (start - end + Math.max(rect.height * 0.35, 1));
      const progress = Math.min(1, Math.max(0, raw));
      setActiveCount(Math.floor(progress * wordCount));
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
  }, [wordCount]);

  let wordIndex = 0;

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-bold space-y-5 sm:space-y-6 md:space-y-7",
        className,
      )}
    >
      {paragraphs.map((paragraph, pi) => {
        const words = paragraph.split(/\s+/).filter(Boolean);
        return (
          <p key={pi} className="scroll-bold__line m-0 text-balance">
            {words.map((word, wi) => {
              const i = wordIndex++;
              const on = i < activeCount;
              return (
                <span key={`${pi}-${wi}`}>
                  <span
                    className={
                      on
                        ? "font-extrabold text-ink transition-colors duration-200"
                        : "font-semibold text-ink/25 transition-colors duration-200"
                    }
                  >
                    {word}
                  </span>
                  {wi < words.length - 1 ? " " : null}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}
