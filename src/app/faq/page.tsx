import type { Metadata } from "next";
import { FAQ } from "@/components/home/FAQ";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ site web entrepreneuse | Prix dès 89€/mois",
  description:
    "Dès 89 €/mois : prix, délais 14 jours, Instagram vs site, mises à jour par email, propriété du domaine. Réponses claires pour entrepreneuses.",
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
