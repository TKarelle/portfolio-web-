import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact : Faisons de ton site un vrai allié commercial",
  description:
    "Réservez un créneau de 15 min ou envoyez un mail pour plus de détails. Sans engagement. Pour professionnelles de l'accompagnement.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-32 min-h-screen min-h-dvh bg-bg">
      <ContactSection headingAs="h1" />
    </div>
  );
}
