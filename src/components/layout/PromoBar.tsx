"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { QUIZ_META } from "@/data/etancheite-quiz";

export function PromoBar() {
  const pathname = usePathname();
  if (pathname === QUIZ_META.path) return null;

  return (
    <div className="bg-violet text-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)]">
      <Link
        href={QUIZ_META.path}
        className="flex items-center justify-center gap-2 sm:gap-3 min-h-8 px-3 py-1.5 text-center touch-manipulation hover:bg-violet-soft/30 transition-colors"
      >
        <span className="inline-flex items-center rounded-[var(--rounded-large)] bg-lime text-ink text-[10px] font-extrabold uppercase tracking-[0.1em] px-2 py-0.5 shrink-0">
          {QUIZ_META.promoLabel}
        </span>
        <span className="text-[11px] sm:text-xs font-semibold text-white leading-tight line-clamp-1">
          <span className="hidden sm:inline">{QUIZ_META.headline}</span>
          <span className="sm:hidden">{QUIZ_META.title}</span>
        </span>
        <span className="hidden sm:inline text-[11px] font-extrabold text-lime underline underline-offset-2 shrink-0">
          {QUIZ_META.promoCta} →
        </span>
      </Link>
    </div>
  );
}
