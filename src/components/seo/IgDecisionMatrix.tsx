/**
 * Matrice de décision — Information Gain (Sem.6).
 * Tableau d’autorité extractible (RAG / featured snippets).
 */
export function IgDecisionMatrix({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: readonly [string, string, string];
  rows: readonly (readonly [string, string, string])[];
}) {
  return (
    <figure className="my-8 overflow-x-auto rounded-[1.25rem] border-2 border-ink bg-surface shadow-[4px_4px_0_#111]">
      <figcaption className="px-4 py-3 border-b-2 border-ink text-sm font-extrabold text-ink">
        {caption}
      </figcaption>
      <table className="w-full min-w-[28rem] text-left text-sm">
        <thead>
          <tr className="bg-ink text-white">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-extrabold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-ink/10">
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`px-4 py-3 font-medium leading-snug ${
                    i === 0 ? "text-ink font-extrabold" : "text-muted"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
