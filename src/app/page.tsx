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
import { metiers, metierPath } from "@/data/metiers";
import { besoins, besoinPath } from "@/data/besoins";
import { comparatifs, comparatifPath } from "@/data/comparatifs";

export const metadata: Metadata = buildPageMetadata({
  title: "Site internet pour entrepreneuse | Studio web dès 89€/mois",
  description:
    "Kopio : site internet pour entrepreneuse et femmes qui entreprennent. Studio web en abonnement, alternative claire à l'agence. Dès 89 €/mois, hébergement et mises à jour inclus.",
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
      {/* Maillage pilier → toutes les pages cluster (crawl + GEO) */}
      <nav className="sr-only" id="metiers" aria-label="Pages métiers">
        {metiers.map((m) => (
          <Link key={m.slug} href={metierPath(m.slug)}>
            {m.keyword}
          </Link>
        ))}
      </nav>
      <nav className="sr-only" aria-label="Pages besoins">
        {besoins.map((b) => (
          <Link key={b.slug} href={besoinPath(b.slug)}>
            {b.keyword}
          </Link>
        ))}
      </nav>
      <nav className="sr-only" aria-label="Pages comparatifs">
        {comparatifs.map((c) => (
          <Link key={c.slug} href={comparatifPath(c.slug)}>
            {c.keyword}
          </Link>
        ))}
      </nav>
    </>
  );
}
