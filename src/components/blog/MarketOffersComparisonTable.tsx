import { subscriptionMarketComparison } from "@/data/subscription-market-comparison";
import { BRAND_NAME } from "@/data/site";
import { cn } from "@/lib/utils";

function CheckIcon() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink"
      aria-hidden
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
        <path
          d="M2.5 6.2 5 8.7 9.5 3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * Tableau HTML sémantique (caption, th scope) + scroll mobile.
 * Colonne Kopio en fond noir, style proche de ComparisonTable.
 */
export function MarketOffersComparisonTable() {
  return (
    <figure className="w-full text-left not-prose my-8">
      <div
        className="overflow-x-auto overscroll-x-contain touch-pan-x pb-3 [scrollbar-width:thin] [-webkit-overflow-scrolling:touch]"
        tabIndex={0}
      >
        <table className="w-max min-w-full border-separate border-spacing-0 text-left">
          <caption className="caption-top mb-3 px-1 text-left text-sm font-medium text-muted leading-relaxed">
            Comparatif de quatre offres de création de site par abonnement
            (prestataires anonymisés) : mensualité, création, maintenance,
            textes, SEO, GEO, analyse de visibilité, design et engagement. La
            colonne {BRAND_NAME} Rayonnement est mise en avant.
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="w-[10.75rem] sticky left-0 z-20 bg-bg p-0"
              >
                <span className="sr-only">Critère comparé</span>
                <div className="h-16 rounded-tl-xl border border-r-0 border-ink/10 bg-white" />
              </th>
              <th
                scope="col"
                className="w-[8.75rem] p-0 text-xs sm:text-sm font-extrabold text-ink"
              >
                <div className="h-16 flex items-center justify-center border-y border-ink/10 bg-white px-2.5 text-center">
                  Offre A
                </div>
              </th>
              <th
                scope="col"
                className="w-[8.75rem] p-0 text-xs sm:text-sm font-extrabold text-ink"
              >
                <div className="h-16 flex items-center justify-center border-y border-l border-ink/10 bg-white px-2.5 text-center">
                  Offre B
                </div>
              </th>
              <th
                scope="col"
                className="w-[12.5rem] p-0 text-sm sm:text-base font-extrabold"
              >
                <div className="relative z-10 -my-3 mx-1 h-[calc(4rem+0.75rem)] flex items-center justify-center rounded-t-xl border border-b-0 border-ink/10 bg-ink px-2.5 shadow-[0_18px_50px_rgba(17,17,17,0.12)]">
                  <span className="text-lime leading-tight text-center">
                    {BRAND_NAME}
                    <span className="block text-[0.7rem] sm:text-xs font-bold text-white/80">
                      Rayonnement
                    </span>
                  </span>
                </div>
              </th>
              <th
                scope="col"
                className="w-[8.75rem] p-0 text-xs sm:text-sm font-extrabold text-ink"
              >
                <div className="h-16 flex items-center justify-center rounded-tr-xl border border-l-0 border-ink/10 bg-white px-2.5 text-center">
                  Offre C
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {subscriptionMarketComparison.map((row, i) => {
              const isLast = i === subscriptionMarketComparison.length - 1;
              const rowBorder = !isLast ? "border-b border-ink/8" : "";
              return (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="sticky left-0 z-20 bg-bg p-0 font-extrabold align-middle"
                  >
                    <div
                      className={cn(
                        "min-h-[4.75rem] flex items-center bg-white border-x border-ink/10 px-3 py-3.5",
                        rowBorder,
                        isLast && "rounded-bl-xl border-b",
                      )}
                    >
                      <span className="text-xs sm:text-sm text-ink leading-snug">
                        {row.label}
                      </span>
                    </div>
                  </th>
                  <td className="p-0 align-middle">
                    <div
                      className={cn(
                        "min-h-[4.75rem] flex items-center justify-center bg-white px-2.5 py-3.5 text-center",
                        rowBorder,
                        isLast && "border-b border-ink/10",
                      )}
                    >
                      <span className="text-xs sm:text-sm font-bold text-ink/70 leading-snug">
                        {row.offerA}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 align-middle">
                    <div
                      className={cn(
                        "min-h-[4.75rem] flex items-center justify-center bg-white border-l border-ink/10 px-2.5 py-3.5 text-center",
                        rowBorder,
                        isLast && "border-b",
                      )}
                    >
                      <span className="text-xs sm:text-sm font-bold text-ink/70 leading-snug">
                        {row.offerB}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 align-middle">
                    <div
                      className={cn(
                        "relative z-10 mx-1 min-h-[4.75rem] flex items-center gap-2 bg-ink px-2.5 py-3.5 border-t border-white/10",
                        isLast &&
                          "rounded-b-xl border border-ink/10 shadow-[0_18px_50px_rgba(17,17,17,0.12)]",
                      )}
                    >
                      <CheckIcon />
                      <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {row.brand}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 align-middle">
                    <div
                      className={cn(
                        "min-h-[4.75rem] flex items-center justify-center bg-white border-r border-ink/10 px-2.5 py-3.5 text-center",
                        rowBorder,
                        isLast && "rounded-br-xl border-b",
                      )}
                    >
                      <span className="text-xs sm:text-sm font-bold text-ink/70 leading-snug">
                        {row.offerC}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
