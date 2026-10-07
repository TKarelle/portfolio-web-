import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [128, 256, 384],
    qualities: [70, 75, 80],
  },
  async headers() {
    return [
      {
        source: "/image/:path*.mp4",
        headers: [
          { key: "Content-Type", value: "video/mp4" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
      {
        source: "/image/captions/:path*.vtt",
        headers: [
          { key: "Content-Type", value: "text/vtt; charset=utf-8" },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      // Sem.1 — API hors index (Waste Crawl), 0 €
      {
        source: "/api/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      // Sem.3 — manifestes GEO + sitemaps (cache court = lastmod découvrable)
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
          {
            key: "Link",
            value: '</llms-full.txt>; rel="alternate"; type="text/plain"',
          },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/video-sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/site-internet-coach-consultant",
        destination: "/site-web-pour/coach",
        permanent: true,
      },
      {
        source: "/site-internet-independant",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site-internet-plombier",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site-internet-boulanger",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site-internet-coiffeur",
        destination: "/site-web-pour/estheticienne",
        permanent: true,
      },
      {
        source: "/site-internet-artisan-batiment",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site-vitrine-artisan",
        destination: "/",
        permanent: true,
      },
      {
        source: "/site-vitrine-commercant",
        destination: "/besoin/boutique-en-ligne-petite-entreprise",
        permanent: true,
      },
      {
        source: "/site-vitrine-independant",
        destination: "/besoin/site-vitrine-independante",
        permanent: true,
      },
      {
        source: "/questions",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/blog/pourquoi-plombier-besoin-site-2026",
        destination: "/blog/reconversion-professionnelle-site-web-2026",
        permanent: true,
      },
      {
        source: "/blog/combien-coute-site-internet-artisan-2026",
        destination: "/blog/combien-coute-site-web-coach-france-2026",
        permanent: true,
      },
      {
        source: "/blog/site-internet-ou-facebook-artisan",
        destination: "/blog/erreurs-a-eviter-site-independante",
        permanent: true,
      },
      {
        source: "/blog/site-vitrine-pas-cher-artisan",
        destination: "/blog/combien-coute-site-vitrine-2026",
        permanent: true,
      },
      {
        source: "/blog/seo-local-artisan-guide",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/site-web-accessible-petite-entreprise",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
