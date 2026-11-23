"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex flex-col items-center leading-none min-w-[1.65rem] sm:min-w-[1.85rem]">
      <span className="font-extrabold tabular-nums text-[11px] sm:text-xs text-lime">
        {value}
      </span>
      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.08em] text-white/55">
        {label}
      </span>
    </span>
  );
}

/**
 * Bannière site-wide — offre Découverte (site vitrine gratuit) jusqu’au 1er jan. 2027.
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

  if (pathname === "/tarifs") return null;
  if (ready && remaining === null) return null;

  return (
    <div className="relative bg-violet text-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)]">
      <Link
        href="/tarifs"
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 sm:gap-x-3 min-h-9 px-3 py-2 text-center touch-manipulation hover:bg-violet-soft/30 transition-colors",
        )}
      >
        <span className="inline-flex items-center rounded-[var(--rounded-large)] bg-lime text-ink text-[10px] font-extrabold uppercase tracking-[0.1em] px-2 py-0.5 shrink-0">
          Offre limitée
        </span>

        <span className="text-[11px] sm:text-xs font-semibold text-white leading-snug max-w-[22rem] sm:max-w-none">
          <span className="hidden md:inline">
            Votre expertise mérite une URL claire. Site vitrine d’une page{" "}
            <span className="font-extrabold text-lime">offert</span> jusqu’au
            1<sup className="text-[9px]">er</sup> janvier.
          </span>
          <span className="hidden sm:inline md:hidden">
            Site vitrine d’une page{" "}
            <span className="font-extrabold text-lime">offert</span> jusqu’au
            1<sup className="text-[9px]">er</sup> janvier.
          </span>
          <span className="sm:hidden">
            Site vitrine{" "}
            <span className="font-extrabold text-lime">offert</span>
          </span>
        </span>

        {remaining ? (
          <span
            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-[var(--rounded-large)] bg-white/10 px-2 py-1 border border-white/15"
            aria-label={`Il reste ${remaining.days} jours, ${remaining.hours} heures, ${remaining.minutes} minutes et ${remaining.seconds} secondes`}
          >
            <CountdownUnit value={String(remaining.days)} label="j" />
            <span className="text-white/35 text-[10px] font-bold" aria-hidden>
              :
            </span>
            <CountdownUnit value={pad(remaining.hours)} label="h" />
            <span className="text-white/35 text-[10px] font-bold" aria-hidden>
              :
            </span>
            <CountdownUnit value={pad(remaining.minutes)} label="m" />
            <span className="text-white/35 text-[10px] font-bold" aria-hidden>
              :
            </span>
            <CountdownUnit value={pad(remaining.seconds)} label="s" />
          </span>
        ) : (
          <span
            className="inline-flex h-7 min-w-[7.5rem] rounded-[var(--rounded-large)] bg-white/10 animate-pulse"
            aria-hidden
          />
        )}

        <span className="hidden sm:inline text-[11px] font-extrabold text-lime underline underline-offset-2 shrink-0">
          Obtenir mon site gratuit →
        </span>
      </Link>
    </div>
  );
}
