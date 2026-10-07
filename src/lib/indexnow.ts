import { getBaseUrl } from "@/lib/seo";

/** Clé IndexNow (fichier public/{key}.txt) — protocole gratuit Microsoft/Bing. */
export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY?.trim() ||
  "ef4ae294-b4cb-4cc0-a37d-a7d2241cfc18";

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
] as const;

export type IndexNowResult = {
  endpoint: string;
  status: number;
  ok: boolean;
};

export function indexNowKeyLocation(base = getBaseUrl()): string {
  return `${base.replace(/\/$/, "")}/${INDEXNOW_KEY}.txt`;
}

export function indexNowHost(base = getBaseUrl()): string {
  return new URL(base).host;
}

/**
 * Pousse des URLs vers IndexNow (Bing / Yandex / partenaires).
 * Gratuit — pas d’API Google Indexing (hors scope JobPosting).
 */
export async function submitIndexNow(
  urls: string[],
): Promise<IndexNowResult[]> {
  const unique = [...new Set(urls.map((u) => u.trim()).filter(Boolean))];
  if (unique.length === 0) {
    throw new Error("Aucune URL à soumettre");
  }
  if (unique.length > 10000) {
    throw new Error("Maximum 10 000 URLs par requête IndexNow");
  }

  const base = getBaseUrl();
  const body = {
    host: indexNowHost(base),
    key: INDEXNOW_KEY,
    keyLocation: indexNowKeyLocation(base),
    urlList: unique,
  };

  return Promise.all(
    ENDPOINTS.map(async (endpoint) => {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });
      // 200 / 202 = OK ; 422 = key mismatch (à corriger)
      return {
        endpoint,
        status: res.status,
        ok: res.status === 200 || res.status === 202,
      };
    }),
  );
}
