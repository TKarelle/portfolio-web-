import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Constat } from "@/components/home/Constat";
import { DemoVideos } from "@/components/home/DemoVideos";
import { QuoteBand } from "@/components/home/QuoteBand";
import { HowIWork } from "@/components/home/HowIWork";
import { Pricing } from "@/components/home/Pricing";
import { ProcessSimple } from "@/components/home/ProcessSimple";
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
  title: { absolute: `${SITE_META_TITLE} | ${BRAND_NAME}` },
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <OffersJsonLd />
      <VideoJsonLd pagePath="/" />
      <div className="relative">
        <Hero />
        <Constat />
      </div>
      <DemoVideos />
      <HowIWork />
      <Pricing />
      <QuoteBand />
      <ProcessSimple />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <StickyCta />
    </>
  );
}
