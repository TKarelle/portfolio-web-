"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Fin de l’offre Découverte gratuite (minuit heure de Paris). */
const DEADLINE_MS = new Date("2027-01-01T00:00:00+01:00").getTime();

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemaining(now: number): Remaining | null {
  const diff = DEADLINE_MS - now;
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatCountdown(r: Remaining) {
  return `${r.days}j ${pad(r.hours)}:${pad(r.minutes)}:${pad(r.seconds)}`;
}

/**
 * Bannière site-wide — offre Découverte (site vitrine gratuit).
 * Compte à rebours compact, copy vendeur, lien /tarifs.
 */
export function PromoBar() {
  const pathname = usePathname();
  const [remaining, setRemaining] = useState<Remaining | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const tick = () => {
      setRemaining(getRemaining(Date.now()));
      setReady(true);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (ready && remaining === null) return null;

  const countdownLabel = remaining
    ? `Il reste ${remaining.days} jours, ${remaining.hours} heures, ${remaining.minutes} minutes et ${remaining.seconds} secondes`
    : undefined;

  const href = pathname === "/tarifs" ? "#modeles" : "/tarifs";

  return (
    <div className="relative bg-ink text-white">
      <Link
        href={href}
        className="group flex items-center justify-center gap-2 sm:gap-3 min-h-8 px-3 py-1.5 text-center touch-manipulation transition-colors hover:bg-violet"
      >
        <span className="inline-flex items-center rounded-[var(--rounded-large)] bg-lime text-ink text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] px-2 py-0.5 shrink-0 shadow-[0_2px_0_0_#a8c400]">
          Gratuit
        </span>

        <span className="text-[11px] sm:text-xs font-semibold text-white/95 leading-none">
          <span className="hidden md:inline">
            Site vitrine d’une page{" "}
            <span className="font-extrabold text-lime">offert</span>
          </span>
          <span className="hidden sm:inline md:hidden">
            Site vitrine{" "}
            <span className="font-extrabold text-lime">offert</span>
          </span>
          <span className="sm:hidden">
            Vitrine{" "}
            <span className="font-extrabold text-lime">offerte</span>
          </span>
        </span>

        {remaining ? (
          <span
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold tabular-nums tracking-tight text-lime shrink-0"
            aria-label={countdownLabel}
          >
            <span className="text-white/30 font-semibold" aria-hidden>
              ·
            </span>
            <span>{formatCountdown(remaining)}</span>
          </span>
        ) : (
          <span
            className="inline-block h-3 w-14 rounded bg-white/15 animate-pulse shrink-0"
            aria-hidden
          />
        )}

        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-extrabold text-lime shrink-0 group-hover:translate-x-0.5 transition-transform">
          Je le veux
          <span aria-hidden>→</span>
        </span>
      </Link>
    </div>
  );
}
