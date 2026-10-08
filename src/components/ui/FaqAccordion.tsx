import { cn } from "@/lib/utils";

export type FaqAccordionItem = {
  question: string;
  answer: string;
};

/**
 * FAQ éditoriale Apple-like : séparateurs fins, pas de cards brutales.
 * `<details>` natif — réponses dans le HTML initial (SEO / GEO).
 */
export function FaqAccordion({
  items,
  className,
  openFirst = true,
}: {
  items: readonly FaqAccordionItem[];
  className?: string;
  openFirst?: boolean;
}) {
  return (
    <div
      className={cn(
        "divide-y divide-ink/10 border-y border-ink/10",
        className,
      )}
    >
      {items.map((item, i) => (
        <details
          key={item.question}
          className="group"
          open={openFirst && i === 0 ? true : undefined}
        >
          <summary className="flex items-center justify-between gap-5 py-5 sm:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden touch-manipulation">
            <span className="text-[0.95rem] sm:text-base md:text-lg font-extrabold text-ink tracking-tight leading-snug text-left pr-2">
              {item.question}
            </span>
            <span
              className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-ink/6 text-ink flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45 group-open:bg-ink group-open:text-lime"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <div className="pb-5 sm:pb-6 -mt-1 pr-12 sm:pr-14">
            <p className="text-sm sm:text-[0.95rem] font-medium text-muted leading-relaxed">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
