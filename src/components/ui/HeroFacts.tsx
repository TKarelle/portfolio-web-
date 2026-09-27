import { PRICE_FROM } from "@/data/pricing";

type HeroFactsProps = {
  /** Texte long réservé aux crawlers IA (non visible) */
  geoSummary: string;
  /** Preuve client courte, ex. "PULSE" */
  proof?: string;
  delivery?: string;
};

/**
 * Faits utiles sous le hero : design chips Kopio.
 * Le résumé GEO reste en sr-only pour l’extraction IA.
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
    <>
      <p className="sr-only">{geoSummary}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Points clés">
        {chips.map((label) => (
          <li
            key={label}
            className="inline-flex items-center rounded-full border-2 border-ink bg-surface px-3.5 py-1.5 text-xs sm:text-sm font-extrabold text-ink shadow-[3px_3px_0_0_var(--lime)]"
          >
            {label}
          </li>
        ))}
      </ul>
    </>
  );
}
