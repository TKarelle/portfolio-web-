import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { DeferredAnalytics } from "@/components/seo/DeferredAnalytics";
import {
  SITE_URL,
  BRAND_NAME,
  SITE_META_TITLE,
  SITE_META_DESCRIPTION,
} from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4f2ff",
};
const defaultMeta = buildPageMetadata({
  title: SITE_META_TITLE,
  description: SITE_META_DESCRIPTION,
  path: "/",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_META_TITLE} | ${BRAND_NAME}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: defaultMeta.description,
  openGraph: {
    ...defaultMeta.openGraph,
    locale: "fr_FR",
    siteName: BRAND_NAME,
  },
  twitter: defaultMeta.twitter,
  robots: { index: true, follow: true },
  alternates: {
    ...defaultMeta.alternates,
    types: {
      "application/atom+xml": `${SITE_URL.replace(/\/$/, "")}/feed.xml`,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <GoogleAnalytics />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Insights script only exists on Vercel — skip locally to avoid Lighthouse 404 */}
        {process.env.VERCEL ? <DeferredAnalytics /> : null}
      </body>
    </html>
  );
}
