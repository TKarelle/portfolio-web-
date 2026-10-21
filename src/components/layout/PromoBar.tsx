"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EBOOK_META } from "@/data/ebook-coach";
import { QUIZ_META } from "@/data/etancheite-quiz";
import { cn } from "@/lib/utils";

type PromoSlide = {
  path: string;
  label: string;
  headline: string;
  titleMobile: string;
  cta: string;
};

const SLIDES: PromoSlide[] = [
  {
    path: QUIZ_META.path,
    label: QUIZ_META.promoLabel,
    headline: QUIZ_META.headline,
    titleMobile: QUIZ_META.title,
    cta: QUIZ_META.promoCta,
  },
  {
    path: EBOOK_META.path,
    label: EBOOK_META.promoLabel,
    headline: EBOOK_META.headline,
    titleMobile: EBOOK_META.title,
    cta: EBOOK_META.promoCta,
  },
];

const ROTATE_MS = 5500;

export function PromoBar() {
  const pathname = usePathname();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const visibleSlides = SLIDES.filter((s) => s.path !== pathname);

  useEffect(() => {
    if (paused || visibleSlides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % visibleSlides.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, visibleSlides.length]);

  useEffect(() => {
    setIndex(0);
  }, [pathname]);

  if (visibleSlides.length === 0) return null;

  const safeIndex = index % visibleSlides.length;

  return (
    <div
      className="relative bg-violet text-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative min-h-8">
        {visibleSlides.map((s, i) => (
          <Link
            key={s.path}
            href={s.path}
            aria-hidden={i !== safeIndex}
            tabIndex={i === safeIndex ? 0 : -1}
            className={cn(
              "flex items-center justify-center gap-2 sm:gap-3 min-h-8 px-3 py-1.5 text-center touch-manipulation hover:bg-violet-soft/30 transition-opacity duration-500",
              i === safeIndex
                ? "relative opacity-100"
                : "absolute inset-0 opacity-0 pointer-events-none",
            )}
          >
            <span className="inline-flex items-center rounded-[var(--rounded-large)] bg-lime text-ink text-[10px] font-extrabold uppercase tracking-[0.1em] px-2 py-0.5 shrink-0">
              {s.label}
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-white leading-tight line-clamp-1">
              <span className="hidden sm:inline">{s.headline}</span>
              <span className="sm:hidden">{s.titleMobile}</span>
            </span>
            <span className="hidden sm:inline text-[11px] font-extrabold text-lime underline underline-offset-2 shrink-0">
              {s.cta} →
            </span>
          </Link>
        ))}
      </div>
      {visibleSlides.length > 1 ? (
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 hidden md:flex gap-1.5"
          aria-hidden
        >
          {visibleSlides.map((s, i) => (
            <span
              key={s.path}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i === safeIndex ? "bg-lime" : "bg-white/35",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
