import { landings, getLanding, type LandingPageData } from "@/data/landings";
import { metiers, getMetier, type MetierPage } from "@/data/metiers";

export type ResolvedPage =
  | { kind: "metier"; data: MetierPage }
  | { kind: "landing"; data: LandingPageData };

/** Slugs top-level du brief : métiers SEO + landings. */
export function getAllTopLevelSlugs(): string[] {
  return [...metiers.map((m) => m.slug), ...landings.map((l) => l.slug)];
}

export function resolveTopLevelPage(slug: string): ResolvedPage | undefined {
  const metier = getMetier(slug);
  if (metier) return { kind: "metier", data: metier };

  const landing = getLanding(slug);
  if (landing) return { kind: "landing", data: landing };

  return undefined;
}
