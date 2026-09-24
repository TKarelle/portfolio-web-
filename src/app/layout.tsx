import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { SITE_URL, BRAND_NAME } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const defaultMeta = buildPageMetadata({
  title: "Sites web pour artisans et indépendants dès 500€",
  description:
    "Création de sites vitrines clairs pour artisans et indépendants. Dès 500 €, livré en 7 à 14 jours, sans prise de tête. Discutons ensemble.",
  path: "/",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Sites web pour artisans et indépendants dès 500€ | Karelle",
    template: "%s | Karelle — Sites web pour indépendants",
  },
  description: defaultMeta.description,
  openGraph: {
    ...defaultMeta.openGraph,
    locale: "fr_FR",
    siteName: BRAND_NAME,
  },
  twitter: defaultMeta.twitter,
  robots: { index: true, follow: true },
  alternates: defaultMeta.alternates,
  icons: {
    icon: "/image/pp.jpg",
    apple: "/image/pp.jpg",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
