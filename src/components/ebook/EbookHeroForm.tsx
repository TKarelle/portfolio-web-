"use client";

import { useState, type FormEvent } from "react";
import { EBOOK_META } from "@/data/ebook-coach";
import {
  submitEbookLead,
  writeEbookGate,
  type EbookGateState,
} from "@/lib/ebook-lead";
import { surfaceCardClassName } from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full min-h-12 rounded-[var(--rounded-large)] border border-ink/10 bg-bg px-4 text-base text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20";

type EbookHeroFormProps = {
  onUnlocked: (g: EbookGateState) => void;
};

export function EbookHeroForm({ onUnlocked }: EbookHeroFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
      const gate = { name: trimmedName, email: trimmedEmail };
      writeEbookGate(gate);
      onUnlocked(gate);
      requestAnimationFrame(() => {
        document.getElementById("ebook-confirme")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } catch {
      setError("Réseau indisponible. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="ebook-form" className="w-full max-w-xl scroll-mt-28">
      <form
        onSubmit={onSubmit}
        className={cn(surfaceCardClassName, "flex flex-col gap-2 p-2 sm:p-2.5")}
      >
        <div className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="ebook-name" className="sr-only">
            Prénom
          </label>
          <input
            id="ebook-name"
            name="name"
            type="text"
            autoComplete="given-name"
            required
            minLength={2}
            placeholder="Prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={cn(fieldClass, "sm:w-[38%]")}
          />
          <label htmlFor="ebook-email" className="sr-only">
            Email
          </label>
          <input
            id="ebook-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            placeholder="vous@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(fieldClass, "flex-1")}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 min-h-12 w-full rounded-[var(--rounded-large)] bg-lime text-ink text-sm sm:text-base font-bold px-5 shadow-[0_4px_0_0_#a8c400] hover:bg-lime-soft hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#a8c400] transition-all touch-manipulation disabled:opacity-60"
        >
          {loading ? "…" : EBOOK_META.ctaLabel}
        </button>
      </form>
      {error ? (
        <p className="mt-2 text-sm font-bold text-pink" role="alert">
          {error}
        </p>
      ) : null}
      <p className="mt-3 text-xs font-medium text-ink/45 leading-relaxed">
        {EBOOK_META.trustLine}
      </p>
    </div>
  );
}
