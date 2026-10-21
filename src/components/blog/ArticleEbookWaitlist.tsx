"use client";

import {
  useEffect,
  useState,
  type FormEvent,
} from "react";
import Link from "next/link";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { TitleEm } from "@/components/ui/SectionHead";
import { EBOOK_META } from "@/data/ebook-coach";
import {
  readEbookGate,
  submitEbookLead,
  writeEbookGate,
  type EbookGateState,
} from "@/lib/ebook-lead";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full min-h-12 rounded-[var(--rounded-large)] border border-ink/10 bg-bg px-4 text-base text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20";

type ArticleEbookWaitlistProps = {
  id?: string;
  className?: string;
};

/**
 * Cadeau gratuit dans l’article : même lead que /ebook-preuves-coach.
 */
export function ArticleEbookWaitlist({
  id = "ebook-waitlist",
  className,
}: ArticleEbookWaitlistProps) {
  const [gate, setGate] = useState<EbookGateState | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setGate(readEbookGate());
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    if (trimmedName.length < 2) {
      setError("Indiquez votre prénom.");
      return;
    }
    if (!trimmedEmail.includes("@") || trimmedEmail.length < 5) {
      setError("Indiquez un email valide.");
      return;
    }

    setLoading(true);
    try {
      const result = await submitEbookLead(trimmedName, trimmedEmail);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      const next = { name: trimmedName, email: trimmedEmail };
      writeEbookGate(next);
      setGate(next);
    } catch {
      setError("Réseau indisponible. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside
      id={id}
      className={cn("my-10 not-prose scroll-mt-28", className)}
      aria-labelledby={`${id}-title`}
    >
      <SurfaceCard>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35">
            Cadeau gratuit
          </p>
          <span className="inline-flex items-center rounded-[var(--rounded-large)] border border-ink/10 bg-bg px-2.5 py-1 text-[11px] font-bold text-ink/70">
            50 premières places
          </span>
        </div>

        <h3
          id={`${id}-title`}
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink leading-tight text-balance"
        >
          Prouver votre valeur sans exposer vos{" "}
          <TitleEm>clients</TitleEm>
        </h3>

        <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed max-w-xl">
          {EBOOK_META.subtitle}
        </p>

        <ul className="mt-5 space-y-2.5">
          {EBOOK_META.contents.slice(0, 3).map((item) => (
            <li
              key={item.title}
              className="flex gap-2.5 text-sm font-medium text-ink/80 leading-snug"
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink text-xs font-extrabold"
                aria-hidden
              >
                ✓
              </span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        {gate ? (
          <div className="mt-6 rounded-[var(--rounded-large)] border border-ink/8 bg-bg px-4 py-4">
            <p className="text-sm font-extrabold text-ink leading-snug">
              Place réservée, {gate.name}.
            </p>
            <p className="mt-1.5 text-sm font-medium text-muted leading-relaxed">
              Vous recevrez l’ebook dès sa sortie, parmi les 50 premières.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-6 flex flex-col gap-2.5 max-w-md"
          >
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/40">
              Réserver ma place · {EBOOK_META.duration}
            </p>
            <label htmlFor={`${id}-name`} className="sr-only">
              Prénom
            </label>
            <input
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="given-name"
              required
              minLength={2}
              placeholder="Votre prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
            />
            <label htmlFor={`${id}-email`} className="sr-only">
              Email
            </label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 min-h-12 w-full rounded-[var(--rounded-large)] bg-lime text-ink text-sm sm:text-base font-bold px-7 shadow-[0_4px_0_0_#a8c400] hover:bg-lime-soft hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#a8c400] transition-all touch-manipulation disabled:opacity-60"
            >
              {loading ? "…" : EBOOK_META.ctaLabel}
            </button>
            {error ? (
              <p className="text-sm font-bold text-pink" role="alert">
                {error}
              </p>
            ) : null}
            <p className="text-xs font-medium text-ink/45 leading-relaxed">
              {EBOOK_META.trustLine}
            </p>
            <p className="text-xs font-medium text-ink/40">
              <Link
                href={EBOOK_META.path}
                className="underline underline-offset-2 hover:text-ink"
              >
                Voir la page ebook
              </Link>
            </p>
          </form>
        )}
      </SurfaceCard>
    </aside>
  );
}
