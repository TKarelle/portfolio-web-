import { PRICE_FROM } from "@/data/pricing";

type HeroFactsProps = {
  /**
   * Réponse directe (Information Gain / pyramide inversée).
   * Visible — pas de cloaking sr-only (Sem.6).
   */
  geoSummary: string;
  /** Preuve client courte, ex. "PULSE" */
  proof?: string;
  delivery?: string;
};

/**
 * Faits sous le hero : réponse extractible + chips Kopio.
 * Pas de label « TL;DR » (charte).
 */
export function HeroFacts({
  geoSummary,
  proof,
  delivery = "14-21 jours",
}: HeroFactsProps) {
  const chips = [
    PRICE_FROM,
    delivery,
    "Hébergement inclus",
    ...(proof ? [`Exemple : ${proof}`] : []),
  ];

  return (
    <div className="mt-6">
      <p className="text-base md:text-lg text-muted font-medium leading-relaxed max-w-2xl">
        {geoSummary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Points clés">
        {chips.map((label) => (
          <li
            key={label}
            className="inline-flex items-center rounded-full border-2 border-ink bg-surface px-3.5 py-1.5 text-xs sm:text-sm font-extrabold text-ink shadow-[3px_3px_0_0_var(--lime)]"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
