import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type DataTableRow = readonly string[];

type ResponsiveDataTableProps = {
  headers: readonly string[];
  rows: readonly DataTableRow[];
  /** Légende optionnelle au-dessus du tableau */
  caption?: string;
  className?: string;
  /** Rendu enrichi d’une cellule (gras, liens…) */
  renderCell?: (text: string, columnIndex: number) => ReactNode;
};

/**
 * Une seule table dans le DOM (pas de doublon mobile / desktop pour le crawl).
 * Sur petit écran : scroll horizontal ; sur desktop : table fixe.
 */
export function ResponsiveDataTable({
  headers,
  rows,
  caption,
  className,
  renderCell,
}: ResponsiveDataTableProps) {
  const cell = (text: string, col: number) =>
    renderCell ? renderCell(text, col) : text;

  return (
    <figure
      className={cn(
        "my-8 not-prose rounded-[var(--rounded-large)] border border-ink/10 bg-white shadow-[0_14px_44px_rgba(17,17,17,0.07)] overflow-hidden",
        className,
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] md:min-w-0 text-left border-collapse table-fixed">
          {caption ? (
            <caption className="caption-top px-5 py-3.5 border-b border-ink/8 text-left text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/40">
              {caption}
            </caption>
          ) : null}
          <thead>
            <tr className="bg-ink/[0.03] border-b border-ink/10">
              {headers.map((h, hi) => (
                <th
                  key={h}
                  scope="col"
                  className="px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink/45 align-bottom"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={`r-${ri}`}
                className="border-t border-ink/8 align-top hover:bg-ink/[0.02] transition-colors"
              >
                {headers.map((_, col) =>
                  col === 0 ? (
                    <th
                      key={`r-${ri}-${col}`}
                      scope="row"
                      className="px-5 py-4 text-sm font-extrabold leading-relaxed break-words text-ink w-[26%] text-left"
                    >
                      {cell(row[col] ?? "", col)}
                    </th>
                  ) : (
                    <td
                      key={`r-${ri}-${col}`}
                      className="px-5 py-4 text-sm font-medium leading-relaxed break-words text-muted"
                    >
                      {cell(row[col] ?? "", col)}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
