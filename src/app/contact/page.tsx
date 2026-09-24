import type { Metadata } from "next";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  HAS_PHONE,
  HAS_WHATSAPP,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
} from "@/data/site";
import { SectionHead } from "@/components/ui/SectionHead";
import { ContactForm } from "@/components/ui/ContactForm";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact — Discutons ensemble",
  description:
    "Tu as besoin d’être trouvé, compris, et joignable. Dis-moi ton métier — on voit ensemble ce qu’il te faut. Réponse sous 24h.",
  path: "/contact",
});

const whatsappHref = HAS_WHATSAPP
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "";

export default function ContactPage() {
  return (
    <section className="pt-28 md:pt-36 pb-16 px-6 min-h-screen bg-bg">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 max-w-xl">
          <p className="text-sm font-bold text-pink mb-3 tracking-wide">
            Contact
          </p>
          <SectionHead stroke="pink" align="left" highlight="ensemble">
            {"Discutons ensemble"}
          </SectionHead>
          <p className="mt-6 text-muted text-lg font-medium leading-relaxed">
            Tu as besoin d&apos;être trouvé, compris, et joignable. Dis-moi ton
            métier — on voit ensemble ce qu&apos;il te faut.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold text-ink">
            {HAS_PHONE && (
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="hover:text-pink transition-colors"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            )}
            {HAS_WHATSAPP && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink transition-colors"
              >
                WhatsApp
              </a>
            )}
            <span className="text-muted font-medium">
              Réponse sous 24h · Sans engagement
            </span>
          </div>
        </div>

        <ContactForm
          className="card p-7 md:p-10 bg-surface border-ink"
          idPrefix="contact-"
        />
      </div>
    </section>
  );
}
