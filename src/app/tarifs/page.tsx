import type { Metadata } from "next";
import { Pricing } from "@/components/home/Pricing";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { ContactSection } from "@/components/home/ContactSection";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tarifs site web entrepreneuse : dès 89€/mois | Kopio",
  description:
    "Sites web pour femmes entrepreneuses : dès 89 €/mois + mise en service (ou paiement unique). Complet à 129 €/mois. Livraison en 14 à 21 jours.",
  path: "/tarifs",
});

export default function TarifsPage() {
  return (
    <>
      <ServiceJsonLd
        name="Création de site web en abonnement"
        description="Création de sites web en abonnement pour femmes entrepreneuses. Dès 89 €/mois, hébergement inclus."
        url="/tarifs"
        price="89"
      />
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Tarifs", href: "/tarifs" },
        ]}
        title="Ton site, clair et prêt à convertir."
        highlight="prêt à convertir"
        description="Sites web pour femmes entrepreneuses. Hébergement et domaine inclus. Tu valides tout avant la mise en ligne."
        image="/image/independant.jpg"
        imageAlt="Entrepreneure au travail : site web dès 89 €/mois"
        badge="Dès 89 €/mois"
        secondaryHref="#forfaits"
        secondaryLabel="Voir les forfaits"
      />
      <ValueBanner />
      <Pricing />
      <ComparisonTable />
      <ContactSection />
    </>
  );
}
