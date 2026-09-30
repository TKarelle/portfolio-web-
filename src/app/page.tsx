import type { Metadata } from "next";
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
import { BRAND_NAME, SITE_META_DESCRIPTION, SITE_META_TITLE } from "@/data/site";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: SITE_META_TITLE,
    description: SITE_META_DESCRIPTION,
    path: "/",
  }),
  // Évite le template `%s | Kopio` qui doublerait la marque déjà dans le titre défaut.
  title: { absolute: `${SITE_META_TITLE} | ${BRAND_NAME}` },
};

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
    </>
  );
}
