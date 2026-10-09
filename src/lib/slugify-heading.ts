/**
 * Slug stable pour ancres H2 (sommaire GEO / deep links).
 */
export function slugifyHeading(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[''']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Extrait les H2 markdown `## …` d'un article blog (blocks string[]). */
export function extractHeadingsFromBlocks(
  blocks: string[],
): { id: string; label: string }[] {
  const seen = new Map<string, number>();
  const out: { id: string; label: string }[] = [];

  for (const block of blocks) {
    if (!block.startsWith("## ")) continue;
    const label = block.slice(3).trim();
    if (!label) continue;
    let id = slugifyHeading(label);
    const n = seen.get(id) ?? 0;
    seen.set(id, n + 1);
    if (n > 0) id = `${id}-${n + 1}`;
    out.push({ id, label });
  }

  return out;
}
