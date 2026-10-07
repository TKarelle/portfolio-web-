/** User-Agents des crawlers à tracer (Sem.1 — 0 €, logs stdout uniquement). */
export const BOT_UA_PATTERNS: readonly { id: string; re: RegExp }[] = [
  { id: "Googlebot", re: /Googlebot/i },
  { id: "Googlebot-Image", re: /Googlebot-Image/i },
  { id: "Google-Extended", re: /Google-Extended/i },
  { id: "bingbot", re: /bingbot/i },
  { id: "BingPreview", re: /BingPreview/i },
  { id: "GPTBot", re: /GPTBot/i },
  { id: "PerplexityBot", re: /PerplexityBot/i },
  { id: "ClaudeBot", re: /ClaudeBot|anthropic-ai/i },
  { id: "Bytespider", re: /Bytespider/i },
] as const;

/** Prefixe de chemins considérés comme Waste Crawl (hors contenu indexable). */
const WASTE_PREFIXES = ["/api/", "/_next/", "/favicon", "/apple-icon", "/icon"] as const;

/** Préfixes Primary (money / discovery SEO). */
const PRIMARY_PREFIXES = [
  "/site-web-pour/",
  "/besoin/",
  "/comparatif/",
  "/blog/",
  "/tarifs",
  "/projets",
  "/faq",
  "/contact",
  "/a-propos",
  "/grille-etancheite",
] as const;

export type CrawlClass = "primary" | "waste" | "other";

export function detectBot(userAgent: string): string | null {
  for (const { id, re } of BOT_UA_PATTERNS) {
    if (re.test(userAgent)) return id;
  }
  return null;
}

export function classifyPath(pathname: string): CrawlClass {
  if (pathname === "/") return "primary";
  if (WASTE_PREFIXES.some((p) => pathname.startsWith(p) || pathname === p.replace(/\/$/, ""))) {
    return "waste";
  }
  if (PRIMARY_PREFIXES.some((p) => pathname === p || pathname.startsWith(p))) {
    return "primary";
  }
  if (pathname === "/mentions-legales" || pathname === "/robots.txt" || pathname.endsWith("sitemap.xml")) {
    return "other";
  }
  return "other";
}
