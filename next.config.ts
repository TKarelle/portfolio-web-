import type { NextConfig } from "next";

function securityHeaders(): { key: string; value: string }[] {
  const isProd = process.env.NODE_ENV === "production";
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    "https://assets.calendly.com",
    "https://va.vercel-scripts.com",
    "https://www.googletagmanager.com",
    ...(isProd ? [] : ["'unsafe-eval'"]),
  ].join(" ");

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
    "img-src 'self' data: blob: https://assets.calendly.com https://calendly.com",
    "font-src 'self' https://assets.calendly.com",
    "connect-src 'self' https://api.web3forms.com https://va.vercel-scripts.com https://vitals.vercel-insights.com https://calendly.com https://assets.calendly.com https://www.google-analytics.com https://region1.google-analytics.com",
    "frame-src https://calendly.com https://assets.calendly.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self' https://api.web3forms.com",
    "object-src 'none'",
    ...(isProd ? ["upgrade-insecure-requests"] : []),
  ].join("; ");

  return [
    { key: "Content-Security-Policy", value: csp },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "X-Frame-Options", value: "DENY" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), payment=()",
    },
  ];
}

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
        source: "/(.*)",
        headers: securityHeaders(),
      },
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
        source: "/entities.json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
          { key: "Content-Type", value: "application/json; charset=utf-8" },
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
      {
        source: "/feed.xml",
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
        source: "/blog/ingenierie-inverse-sageo-chatgpt-json",
        destination: "/blog/comment-chatgpt-cherche-sur-le-web",
        permanent: true,
      },
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
