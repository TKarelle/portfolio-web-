"use client";

import { useEffect, useRef, useState } from "react";
import { bubbleInStyle } from "@/lib/motion";

export type NumberedGainItem = {
  n: string;
  t: string;
  d: string;
};

/** Cartes numérotées percutantes (Constat + landings). */
export function NumberedGainCards({
  items,
  ariaLabel = "Points clés",
}: {
  items: readonly NumberedGainItem[];
  ariaLabel?: string;
}) {
  const listRef = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
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
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={listRef}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
      aria-label={ariaLabel}
    >
      {items.map((g, i) => (
        <li
          key={g.n}
          className="rounded-[1.25rem] border-2 border-ink bg-surface px-5 py-5 sm:px-6 sm:py-6 shadow-[3px_3px_0_#111] will-change-transform"
          style={bubbleInStyle(i, visible)}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 rounded-full bg-ink text-lime text-xs font-extrabold flex items-center justify-center shrink-0">
              {g.n}
            </span>
            <span className="text-lg sm:text-xl font-extrabold text-ink leading-snug tracking-tight">
              {g.t}
            </span>
          </div>
          <p className="text-sm sm:text-[0.95rem] text-muted font-medium leading-relaxed pl-12">
            {g.d}
          </p>
        </li>
      ))}
    </ol>
  );
}
