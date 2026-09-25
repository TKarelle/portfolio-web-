import { offerComparison } from "@/data/pricing";
import { SectionHead } from "@/components/ui/SectionHead";
import { BRAND_NAME } from "@/data/site";

function CheckIcon() {
  return (
    <span
      className="inline-flex h-4 w-4 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink"
      aria-hidden
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 md:h-3 md:w-3" fill="none">
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

export function ComparisonTable() {
  return (
    <section className="py-16 md:py-24 px-3 sm:px-6 bg-bg" id="comparatif">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12 px-1">
          <SectionHead stroke="pink" highlight="Wix, WordPress & agences">
            {`${BRAND_NAME} face à Wix, WordPress & agences`}
          </SectionHead>
        </div>

        <div className="flex items-stretch py-3 sm:py-5 w-full">
          {/* Labels */}
          <div className="w-[28%] sm:w-[24%] md:w-[22%] shrink-0 flex flex-col rounded-l-xl sm:rounded-l-[1.5rem] bg-surface border-2 sm:border-[3px] border-r-0 border-ink overflow-hidden">
            <div className="h-12 sm:h-14 md:h-16 border-b-2 sm:border-b-[3px] border-ink" />
            {offerComparison.map((row) => (
              <div
                key={row.label}
                className="flex-1 flex items-center px-2 sm:px-3 md:px-5 py-2.5 sm:py-3.5 border-b border-ink/10 last:border-b-0 min-h-[3.25rem] sm:min-h-[4rem] md:min-h-[4.5rem]"
              >
                <span className="text-xs sm:text-sm md:text-base font-extrabold text-ink leading-tight">
                  {row.label}
                </span>
              </div>
            ))}
          </div>

          {/* Kopio */}
          <div className="w-[24%] sm:w-[28%] md:w-[30%] shrink-0 relative z-10 -my-2 sm:-my-4 md:-my-5 flex flex-col rounded-xl sm:rounded-[1.5rem] overflow-hidden border-2 sm:border-[3px] border-ink shadow-[3px_3px_0_#ff1f71] sm:shadow-[6px_6px_0_#ff1f71] md:shadow-[8px_8px_0_#ff1f71]">
            <div className="bg-pink h-12 sm:h-14 md:h-16 flex items-center justify-center px-1">
              <p className="text-sm sm:text-base md:text-lg font-extrabold text-white leading-none">
                {BRAND_NAME}
              </p>
            </div>
            <ul className="flex-1 bg-ink flex flex-col">
              {offerComparison.map((row) => (
                <li
                  key={row.label}
                  className="flex-1 flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2.5 md:px-4 border-t border-white/10 first:border-t-0 min-h-[3.25rem] sm:min-h-[4rem] md:min-h-[4.5rem]"
                >
                  <CheckIcon />
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                    {row.brand}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Wix / WordPress */}
          <div className="w-[24%] shrink-0 flex flex-col bg-surface border-y-2 sm:border-y-[3px] border-ink overflow-hidden">
            <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center border-b-2 sm:border-b-[3px] border-ink px-1 sm:px-2">
              <p className="text-xs sm:text-sm md:text-base font-extrabold text-ink text-center leading-tight">
                Wix / WP
              </p>
            </div>
            {offerComparison.map((row) => (
              <div
                key={row.label}
                className="flex-1 flex items-center justify-center px-1 sm:px-2 md:px-3 py-2.5 sm:py-3.5 border-b border-ink/10 last:border-b-0 min-h-[3.25rem] sm:min-h-[4rem] md:min-h-[4.5rem] text-center"
              >
                <span className="text-xs sm:text-sm md:text-base font-bold text-ink/70 leading-tight">
                  {row.diy}
                </span>
              </div>
            ))}
          </div>

          {/* Agence */}
          <div className="w-[24%] shrink-0 flex flex-col rounded-r-xl sm:rounded-r-[1.5rem] bg-surface border-2 sm:border-[3px] border-l-0 border-ink overflow-hidden">
            <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center border-b-2 sm:border-b-[3px] border-ink px-1 sm:px-2">
              <p className="text-xs sm:text-sm md:text-base font-extrabold text-ink text-center leading-tight">
                Agence
              </p>
            </div>
            {offerComparison.map((row) => (
              <div
                key={row.label}
                className="flex-1 flex items-center justify-center px-1 sm:px-2 md:px-3 py-2.5 sm:py-3.5 border-b border-ink/10 last:border-b-0 min-h-[3.25rem] sm:min-h-[4rem] md:min-h-[4.5rem] text-center"
              >
                <span className="text-xs sm:text-sm md:text-base font-bold text-ink/70 leading-tight">
                  {row.agency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
