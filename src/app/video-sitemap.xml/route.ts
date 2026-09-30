import { siteVideos } from "@/data/videos";
import { getBaseUrl } from "@/lib/seo";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Sitemap vidéo Google (extension video:), découverte séparée du sitemap pages. */
export function GET() {
  const base = getBaseUrl();

  const urls = siteVideos.flatMap((video) =>
    video.pagePaths.map((pagePath) => {
      const pageUrl = pagePath === "/" ? base : `${base}${pagePath}`;
      return `  <url>
    <loc>${escapeXml(pageUrl)}</loc>
    <video:video>
      <video:thumbnail_loc>${escapeXml(`${base}${video.thumbnailPath}`)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.name)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>
      <video:content_loc>${escapeXml(`${base}${video.contentPath}`)}</video:content_loc>
      <video:publication_date>${video.uploadDate}</video:publication_date>
      <video:duration>${video.durationSeconds}</video:duration>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
