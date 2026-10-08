import type { Metadata } from "next";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ site web accompagnement : prix dès 89€/mois",
  description:
    "Dès 89 €/mois : prix, délai 21 jours, Instagram vs site, mises à jour, propriété du domaine. Réponses claires pour professionnelles de l'accompagnement.",
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
        description="Abonnement site web, prix, délais, Instagram ou site, mises à jour : les questions que se posent les professionnelles de l'accompagnement."
        image="/image/independant.jpg"
        imageAlt="Femme entrepreneuse : FAQ abonnement site web Kopio"
        badge="FAQ"
        secondaryHref="/tarifs"
      />
      <ValueBanner />
      <FAQ showRoiDisclaimer />
      <ContactSection />
    </>
  );
}
