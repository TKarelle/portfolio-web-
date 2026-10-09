import { PRICE_FROM } from "@/data/pricing";

type HeroFactsProps = {
  /**
   * Réponse directe (Information Gain / pyramide inversée).
   * Visible — pas de cloaking sr-only (Sem.6).
   * Optionnel si seules les chips sont utiles (ex. articles blog).
   */
  geoSummary?: string;
  /** Preuve client courte, ex. "PULSE" */
  proof?: string;
  delivery?: string;
  /** Chips custom (sinon prix / délai / hébergement). */
  chips?: string[];
};

/**
 * Faits sous le hero : réponse extractible + chips soft.
 * Pas de label « TL;DR » (charte).
 */
export function HeroFacts({
  geoSummary,
  proof,
  delivery = "14-21 jours",
  chips: chipsProp,
}: HeroFactsProps) {
  const chips =
    chipsProp ??
    [
      PRICE_FROM,
      delivery,
      "Hébergement inclus",
      ...(proof ? [`Exemple : ${proof}`] : []),
    ];

  const summary = geoSummary?.trim();

  return (
    <div>
      {summary ? (
        <p className="text-sm md:text-base text-muted font-medium leading-relaxed max-w-xl">
          {summary}
        </p>
      ) : null}
      {chips.length > 0 ? (
        <ul
          className={`${summary ? "mt-4" : ""} flex flex-wrap gap-2`}
          aria-label="Points clés"
        >
          {chips.map((label) => (
            <li
              key={label}
              className="inline-flex items-center rounded-[var(--rounded-large)] border border-ink/10 bg-white/80 px-3.5 py-1.5 text-xs sm:text-sm font-extrabold text-ink/80 shadow-[0_8px_24px_rgba(17,17,17,0.05)]"
            >
              {label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
