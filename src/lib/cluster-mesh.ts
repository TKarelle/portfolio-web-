import {
  besoinSiblingSlugs,
  metierSiblingSlugs,
} from "@/data/topic-clusters";
import clusterNeighbors from "@/data/generated/cluster-neighbors.json";

type Neighbor = { slug: string; score: number };

function cosineSlugs(url: string): string[] {
  const list = (
    clusterNeighbors as { neighbors: Record<string, Neighbor[]> }
  ).neighbors[url];
  return list?.map((n) => n.slug) ?? [];
}

function mergeUnique(primary: string[], fallback: string[], limit: number) {
  const out: string[] = [];
  for (const s of [...primary, ...fallback]) {
    if (!out.includes(s)) out.push(s);
    if (out.length >= limit) break;
  }
  return out;
}

/** Siblings métier : cosine TF-IDF puis sous-cluster éditorial. */
export function resolveMetierSiblings(slug: string, limit = 5): string[] {
  return mergeUnique(
    cosineSlugs(`/site-web-pour/${slug}`),
    metierSiblingSlugs(slug, limit),
    limit,
  );
}

/** Siblings besoin : cosine puis sous-cluster. */
export function resolveBesoinSiblings(slug: string, limit = 4): string[] {
  return mergeUnique(
    cosineSlugs(`/besoin/${slug}`),
    besoinSiblingSlugs(slug, limit),
    limit,
  );
}
