import type { Metadata } from "next";
import { Pricing } from "@/components/home/Pricing";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { ContactSection } from "@/components/home/ContactSection";
import { PageIntro } from "@/components/ui/PageIntro";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Tarifs sites vitrines : dès 500€",
  description:
    "Forfaits clairs pour ton site vitrine : 500 € pour démarrer, 800 € pour un site complet, devis sur mesure. Livraison en 7 à 14 jours.",
  path: "/tarifs",
});

export default function TarifsPage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Tarifs", href: "/tarifs" },
        ]}
        title="Ton site vitrine, clair et prêt à convertir."
        highlight="prêt à convertir"
        description="Design pensé pour Google et le mobile. Tu valides tout avant la mise en ligne."
        image="/image/independant.jpg"
        imageAlt="Indépendant au travail : site vitrine dès 500 €"
        badge="Dès 500 €"
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
