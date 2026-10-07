import { blogPosts } from "@/data/blog";
import { BRAND_NAME, CONTACT_EMAIL, SITE_META_DESCRIPTION } from "@/data/site";
import { blogPostLastmod, latestBlogLastmod } from "@/lib/content-dates";
import { getBaseUrl } from "@/lib/seo";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Truncate excerpt for Atom summary (~400 chars / chunk RAG-friendly). */
function summaryText(excerpt: string): string {
  const t = excerpt.trim();
  if (t.length <= 400) return t;
  return `${t.slice(0, 397).trim()}…`;
}

/**
 * Atom 1.0 — discovery Bing / lecteurs RSS (Sem.4, 0 €).
 * GET /feed.xml
 */
export function GET() {
  const base = getBaseUrl();
  const feedUpdated = latestBlogLastmod().toISOString();

  const sorted = [...blogPosts].sort(
    (a, b) =>
      blogPostLastmod(b).getTime() - blogPostLastmod(a).getTime(),
  );

  const entries = sorted
    .map((post) => {
      const url = `${base}/blog/${post.slug}`;
      const updated = blogPostLastmod(post).toISOString();
      const published = new Date(post.date).toISOString();
      return `  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${escapeXml(url)}" rel="alternate" type="text/html"/>
    <id>${escapeXml(url)}</id>
    <published>${published}</published>
    <updated>${updated}</updated>
    <summary type="text">${escapeXml(summaryText(post.excerpt))}</summary>
    <category term="${escapeXml(post.category)}"/>
    <author>
      <name>Karelle</name>
      <email>${escapeXml(CONTACT_EMAIL)}</email>
      <uri>${escapeXml(`${base}/a-propos`)}</uri>
    </author>
  </entry>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(BRAND_NAME)} — Blog</title>
  <subtitle>${escapeXml(SITE_META_DESCRIPTION)}</subtitle>
  <link href="${escapeXml(`${base}/feed.xml`)}" rel="self" type="application/atom+xml"/>
  <link href="${escapeXml(`${base}/blog`)}" rel="alternate" type="text/html"/>
  <id>${escapeXml(`${base}/feed.xml`)}</id>
  <updated>${feedUpdated}</updated>
  <author>
    <name>Karelle</name>
    <email>${escapeXml(CONTACT_EMAIL)}</email>
    <uri>${escapeXml(`${base}/a-propos`)}</uri>
  </author>
  <rights>© ${new Date().getFullYear()} ${escapeXml(BRAND_NAME)}</rights>
${entries}
</feed>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
