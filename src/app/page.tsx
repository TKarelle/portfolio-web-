import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { AntiFear } from "@/components/home/AntiFear";
import { ChecklistLeadMagnet } from "@/components/home/ChecklistLeadMagnet";
import { Constat } from "@/components/home/Constat";
import { RoiProof } from "@/components/home/RoiProof";
import { QuoteBand } from "@/components/home/QuoteBand";
import { HowIWork } from "@/components/home/HowIWork";
import { Pricing } from "@/components/home/Pricing";
import { ProcessSimple } from "@/components/home/ProcessSimple";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { StickyCta } from "@/components/home/StickyCta";
import { FaqJsonLd, OffersJsonLd, VideoJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { metiers, metierPath } from "@/data/metiers";
import { besoins, besoinPath } from "@/data/besoins";
import { comparatifs, comparatifPath } from "@/data/comparatifs";

export const metadata: Metadata = buildPageMetadata({
  title: "Création de site web pour professionnelle de l'accompagnement dès 89€/mois",
  description:
    "Votre site professionnel, sans la charge mentale. Dès 89 €/mois : conception, maintenance et évolution. Vous validez, je gère tout.",
  path: "/",
  ogVideo: "/image/sitewebvideo.mp4",
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <OffersJsonLd />
      <VideoJsonLd pagePath="/" />
      <Hero />
      <SocialProof />
      <AntiFear />
      <Constat />
      <ChecklistLeadMagnet />
      <RoiProof />
      <QuoteBand />
      <CaseStudies />
      <HowIWork />
      <Pricing />
      <ProcessSimple />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <StickyCta />
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
