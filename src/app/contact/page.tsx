import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { buildPageMetadata } from "@/lib/metadata";

const contactTitle =
  "Contact | Échangez sur votre projet | Kopio";
const contactDescription =
  "Contactez Karelle pour votre projet de site web, refonte, SEO ou stratégie de visibilité sur Google et les IA.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: contactTitle,
    description: contactDescription,
    path: "/contact",
  }),
  title: { absolute: contactTitle },
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-32 min-h-screen min-h-dvh bg-bg">
      <ContactSection headingAs="h1" />
    </div>
  );
}
