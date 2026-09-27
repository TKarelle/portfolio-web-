import type { Metadata } from "next";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ : site web pour femmes entrepreneuses",
  description:
    "Kopio : prix 2026, délais, Instagram vs site, mises à jour par email, propriété du domaine. Réponses claires.",
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
        description="Abonnement site web, prix, délais, Instagram ou site, mises à jour : les questions que se posent les entrepreneuses."
        image="/image/independant.jpg"
        imageAlt="Femme entrepreneuse : FAQ abonnement site web Kopio"
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
