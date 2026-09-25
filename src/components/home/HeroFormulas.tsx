"use client";

import { useCallback, useEffect, useId } from "react";
import type { PricingPlan } from "@/data/pricing";

type HeroFormulasProps = {
  plans: readonly PricingPlan[];
  activeId: string;
  onChange: (id: string) => void;
};

export function HeroFormulas({ plans, activeId, onChange }: HeroFormulasProps) {
  const baseId = useId();

  const select = useCallback(
    (id: string) => {
      onChange(id);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#formule-${id}`);
      }
    },
    [onChange]
  );

  useEffect(() => {
    const fromHash = () => {
      const raw = window.location.hash.replace(/^#formule-/, "");
      if (plans.some((p) => p.id === raw)) onChange(raw);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [plans, onChange]);

  return (
    <nav aria-label="Choisir selon ton besoin" className="w-full">
      {/* Contenu texte caché pour le SEO : crawlable, hors UI */}
      <div className="sr-only">
        {plans.map((plan) => (
          <article key={plan.id} id={`formule-${plan.id}`}>
            <h2>{plan.persona.headline}</h2>
            <p>{plan.persona.body}</p>
            <p>
              {plan.name} : {plan.period === "€" ? `${plan.price} €` : plan.price},{" "}
              {plan.delivery}
            </p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div
        role="tablist"
        aria-orientation="horizontal"
        className="grid grid-cols-3 border-b-2 lg:border-b-0 lg:border-t-2 border-ink/15"
      >
        {plans.map((plan, i) => {
          const isActive = plan.id === activeId;
          const tabId = `${baseId}-tab-${plan.id}`;

          return (
            <button
              key={plan.id}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={isActive}
              aria-controls={`formule-${plan.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(plan.id)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                e.preventDefault();
                const next =
                  e.key === "ArrowRight"
                    ? plans[(i + 1) % plans.length]
                    : plans[(i - 1 + plans.length) % plans.length];
                select(next.id);
                document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
              }}
              className={`text-center lg:text-left px-1.5 py-3.5 sm:px-3 sm:py-4 md:px-5 min-h-12 border-r-2 last:border-r-0 border-ink/10 transition-opacity touch-manipulation ${
                isActive
                  ? "opacity-100 border-b-2 border-b-pink lg:border-b-transparent"
                  : "opacity-40 hover:opacity-70 border-b-2 border-b-transparent"
              }`}
            >
              <span className="block text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.06em] sm:tracking-[0.12em] text-ink leading-snug min-h-[2.4em] sm:min-h-[2.8em] md:min-h-[3em] px-0.5">
                <span className="sm:hidden">{plan.persona.labelShort}</span>
                <span className="hidden sm:inline">{plan.persona.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
