"use client";

import { useEffect, useRef, useState } from "react";
import { bubbleInStyle } from "@/lib/motion";

export type NumberedGainItem = {
  n: string;
  t: string;
  d: string;
};

/** Cartes 01 / 02 / … identiques à la landing (section Constat). */
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
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
      aria-label={ariaLabel}
    >
      {items.map((g, i) => (
        <li
          key={g.n}
          className="bg-surface/80 rounded-2xl px-4 py-4 border border-ink/8 will-change-transform"
          style={bubbleInStyle(i, visible)}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 rounded-full bg-ink text-lime text-xs font-extrabold flex items-center justify-center shrink-0">
              {g.n}
            </span>
            <span className="text-sm font-extrabold text-ink leading-snug">
              {g.t}
            </span>
          </div>
          <p className="text-sm text-muted font-medium leading-relaxed pl-11">
            {g.d}
          </p>
        </li>
      ))}
    </ol>
  );
}
