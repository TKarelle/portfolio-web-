import { ResponsiveDataTable } from "@/components/ui/ResponsiveDataTable";

/**
 * Matrice de décision — Information Gain (Sem.6).
 * Réutilise ResponsiveDataTable (cartes mobile, table soft desktop).
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
    <ResponsiveDataTable
      caption={caption}
      headers={[...headers]}
      rows={rows.map((row) => [...row])}
    />
  );
}
