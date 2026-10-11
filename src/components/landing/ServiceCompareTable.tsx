import { SectionHead } from "@/components/ui/SectionHead";
import { emphasizeTitle } from "@/lib/title-emphasis";

export type ServiceCompareTableData = {
  h2: string;
  h2Highlight?: string | readonly string[];
  columns: readonly string[];
  rows: readonly { criterion: string; cells: readonly string[] }[];
};

/**
 * Tableau comparatif extractible (SEO / GEO / SAGEO) — HTML sémantique pour LLM.
 */
export function ServiceCompareTable({
  data,
  className = "bg-bg",
}: {
  data: ServiceCompareTableData;
  className?: string;
}) {
  return (
    <section className={`py-14 md:py-20 page-x ${className}`}>
      <div className="w-full max-w-4xl mx-auto">
        <SectionHead size="lg" className="!max-w-none">
          {data.h2Highlight
            ? emphasizeTitle(data.h2, data.h2Highlight)
            : data.h2}
        </SectionHead>

        <div className="mt-8 md:mt-10 overflow-x-auto rounded-[var(--rounded-large)] border border-ink/10 bg-white shadow-[0_14px_44px_rgba(17,17,17,0.05)]">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <caption className="sr-only">{data.h2}</caption>
            <thead>
              <tr className="border-b border-ink/10 bg-ink/[0.03]">
                <th
                  scope="col"
                  className="px-4 py-3.5 sm:px-5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.12em] text-ink/50"
                >
                  Critère
                </th>
                {data.columns.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="px-4 py-3.5 sm:px-5 text-xs sm:text-sm font-extrabold text-ink"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr
                  key={row.criterion}
                  className="border-b border-ink/8 last:border-b-0"
                >
                  <th
                    scope="row"
                    className="px-4 py-4 sm:px-5 text-sm sm:text-base font-extrabold text-ink align-top"
                  >
                    {row.criterion}
                  </th>
                  {row.cells.map((cell, i) => (
                    <td
                      key={`${row.criterion}-${i}`}
                      className="px-4 py-4 sm:px-5 text-sm sm:text-base font-medium text-muted leading-relaxed align-top"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
