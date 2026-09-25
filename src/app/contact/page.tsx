import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact : Faisons de ton site un vrai allié commercial",
  description:
    "Réserve un créneau de 15 min ou envoie un mail pour plus de détails. Sans engagement.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-24 min-h-screen min-h-dvh bg-chunk-pink">
      <ContactSection />
    </div>
  );
}
