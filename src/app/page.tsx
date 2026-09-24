import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { Constat } from "@/components/home/Constat";
import { QuoteBand } from "@/components/home/QuoteBand";
import { HowIWork } from "@/components/home/HowIWork";
import { Pricing } from "@/components/home/Pricing";
import { ProcessSimple } from "@/components/home/ProcessSimple";
import { SitePreview } from "@/components/home/SitePreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqJsonLd, OffersJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { metiers } from "@/data/metiers";

export const metadata: Metadata = buildPageMetadata({
  title: "Sites web pour artisans et indépendants dès 500€",
  description:
    "Création de sites vitrines clairs pour artisans et indépendants. Dès 500 €, livré en 7 à 14 jours, sans prise de tête. Discutons ensemble.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <OffersJsonLd />
      <Hero />
      <SocialProof />
      <Constat />
      <QuoteBand />
      <SitePreview />
      <HowIWork />
      <Pricing />
      <ProcessSimple />
      <Testimonials />
      <FAQ />
      <ContactSection />
      {/* Liens SEO internes (crawl) */}
      <nav className="sr-only" aria-label="Pages métiers">
        {metiers.map((m) => (
          <Link key={m.slug} href={`/${m.slug}`}>
            {m.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
