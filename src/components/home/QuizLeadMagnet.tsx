"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { TitleEm } from "@/components/ui/SectionHead";
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
      <div id={id} className="mt-8 pt-6 border-t border-white/10">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/30 mb-2">
          Cadeau · {QUIZ_META.duration}
        </p>
        <p className="text-sm font-extrabold text-white leading-snug tracking-tight">
          {QUIZ_META.headline}
        </p>
        <p className="mt-1.5 text-xs font-medium text-white/45 leading-snug">
          10 points pour voir ce que Google et ChatGPT disent vraiment de toi.
        </p>
        <Link
          href={QUIZ_META.path}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 min-h-11 rounded-[var(--rounded-large)] bg-white/10 text-white text-sm font-bold px-4 hover:bg-white/15 transition-colors touch-manipulation"
        >
          <QuizIcon />
          {QUIZ_META.promoCta}
        </Link>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <aside id={id} className="my-10 not-prose" aria-labelledby={`${id}-title`}>
        <SurfaceCard>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-3">
            Cadeau gratuit
          </p>
          <h3
            id={`${id}-title`}
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink leading-tight"
          >
            Ton site te représente-t-il <TitleEm>encore</TitleEm>&nbsp;?
          </h3>
          <p className="mt-3 text-sm font-medium text-muted leading-relaxed">
            10 questions simples pour voir ce qui bloque encore sur ton site.
            Deux minutes, ton propre site, tes propres chiffres.
          </p>
          <div className="mt-5">
            <Button href={QUIZ_META.path} size="lg">
              <QuizIcon className="w-5 h-5" />
              {QUIZ_META.promoCta}
            </Button>
          </div>
        </SurfaceCard>
      </aside>
    );
  }

  return (
    <section
      id={id}
      className="scroll-mt-28 py-16 md:py-20 px-5 sm:px-8 bg-bg"
      aria-labelledby={`${id}-title`}
    >
      <div className="max-w-3xl mx-auto">
        <SurfaceCard className="!px-6 !py-8 sm:!px-8 sm:!py-10 md:!px-10 md:!py-12">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-3">
            Cadeau gratuit · {QUIZ_META.duration}
          </p>
          <h2
            id={`${id}-title`}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink leading-tight"
          >
            Que disent Google et ChatGPT <TitleEm>de toi</TitleEm>&nbsp;?
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed max-w-xl">
            {QUIZ_META.subtitle}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {[QUIZ_META.duration, ...QUIZ_META.bullets].map((item) => (
              <li
                key={item}
                className="inline-flex items-center rounded-[var(--rounded-large)] border border-ink/10 bg-bg px-3 py-1.5 text-xs font-bold text-ink/70"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button href={QUIZ_META.path} size="lg">
              <QuizIcon className="w-5 h-5" />
              {QUIZ_META.promoCta}
            </Button>
          </div>
        </SurfaceCard>
      </div>
    </section>
  );
}
