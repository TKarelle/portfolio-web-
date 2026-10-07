"use client";

import Link from "next/link";
import { QUIZ_META } from "@/data/etancheite-quiz";

type QuizLeadMagnetProps = {
  variant?: "section" | "footer" | "inline";
  id?: string;
};

function QuizIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuizLeadMagnet({
  variant = "section",
  id = "grille",
}: QuizLeadMagnetProps) {
  if (variant === "footer") {
    return (
      <div
        id={id}
        className="mt-5 rounded-2xl border border-dashed border-pink/50 bg-pink/10 p-4"
      >
        <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-pink mb-1.5">
          Cadeau · {QUIZ_META.duration}
        </p>
        <p className="text-sm font-extrabold text-white leading-snug">
          {QUIZ_META.headline}
        </p>
        <p className="mt-1 text-[11px] font-semibold text-pink/90 leading-snug">
          {QUIZ_META.title}
        </p>
        <p className="mt-1.5 text-xs font-medium text-white/55 leading-snug">
          10 points pour voir ce que Google et ChatGPT disent vraiment de toi.
        </p>
        <Link
          href={QUIZ_META.path}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 min-h-11 rounded-xl bg-pink text-white text-sm font-bold px-4 hover:bg-pink-hot transition-colors touch-manipulation border-2 border-white/10"
        >
          <QuizIcon />
          {QUIZ_META.promoCta}
        </Link>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <aside
        id={id}
        className="my-10 relative rounded-[1.5rem] border-2 border-dashed border-ink bg-chunk-pink p-6 sm:p-8 shadow-[6px_6px_0_#ff1f71] not-prose"
        aria-labelledby={`${id}-title`}
      >
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 bg-pink text-white text-[11px] font-extrabold uppercase tracking-[0.12em] px-3 py-1 rounded-full border-2 border-ink">
          Cadeau gratuit
        </span>
        <p className="text-sm font-bold text-pink mb-2 tracking-wide mt-1">
          Le Test des 10 Secondes
        </p>
        <h3
          id={`${id}-title`}
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink leading-tight"
        >
          Ton site te représente-t-il encore ?
        </h3>
        <p className="mt-3 text-sm font-medium text-muted leading-relaxed">
          10 questions simples pour voir ce qui bloque encore sur ton site.
          Deux minutes, ton propre site, tes propres chiffres.
        </p>
        <Link
          href={QUIZ_META.path}
          className="mt-5 inline-flex items-center justify-center gap-2.5 min-h-12 rounded-xl bg-pink text-white text-sm font-bold px-5 border-2 border-ink shadow-[4px_4px_0_#111] hover:translate-y-0.5 hover:shadow-[2px_2px_0_#111] transition-all touch-manipulation"
        >
          <QuizIcon className="w-5 h-5" />
          {QUIZ_META.promoCta}
        </Link>
      </aside>
    );
  }

  return (
    <section
      id={id}
      className="scroll-mt-28 py-12 md:py-14 px-5 sm:px-6 bg-chunk-pink"
      aria-labelledby={`${id}-title`}
    >
      <div className="max-w-3xl mx-auto relative rounded-[1.5rem] border-2 border-dashed border-ink bg-surface p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_#ff1f71]">
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 bg-pink text-white text-[11px] font-extrabold uppercase tracking-[0.12em] px-3 py-1 rounded-full border-2 border-ink">
          Cadeau gratuit
        </span>

        <p className="text-sm font-bold text-pink mb-2 tracking-wide mt-1">
          {QUIZ_META.title}
        </p>
        <h2
          id={`${id}-title`}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink leading-tight"
        >
          {QUIZ_META.headline}
        </h2>
        <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed max-w-xl">
          {QUIZ_META.subtitle}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {[QUIZ_META.duration, ...QUIZ_META.bullets].map((item) => (
            <li
              key={item}
              className="inline-flex items-center rounded-full border-2 border-ink/10 bg-bg px-3 py-1 text-xs font-bold text-ink"
            >
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={QUIZ_META.path}
          className="mt-6 inline-flex items-center justify-center gap-2.5 min-h-12 rounded-xl bg-pink text-white text-sm sm:text-base font-bold px-5 sm:px-6 border-2 border-ink shadow-[4px_4px_0_#111] hover:translate-y-0.5 hover:shadow-[2px_2px_0_#111] transition-all touch-manipulation"
        >
          <QuizIcon className="w-5 h-5" />
          {QUIZ_META.promoCta}
        </Link>
      </div>
    </section>
  );
}
