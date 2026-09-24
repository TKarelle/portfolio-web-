import type { Metadata } from "next";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ — Sites web pour artisans",
  description:
    "Prix, délais, Facebook vs site, modifications… Les réponses claires aux questions des artisans et indépendants.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
        title="Les réponses claires avant de te lancer."
        highlight="réponses claires"
        stroke="violet"
        description="Prix, délais, Facebook ou site, modifications… Tout ce que les artisans me demandent — simplement."
        image="/image/artisan.jpg"
        imageAlt="Artisan indépendant — questions fréquentes sur la création de site"
        badge="FAQ"
        frame="violet"
        secondaryHref="/tarifs"
      />
      <ValueBanner />
      <FAQ />
      <ContactSection />
    </>
  );
}
