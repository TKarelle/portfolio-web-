import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/home/ContactSection";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { VideoJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Services : création, refonte, SEO et GEO | Kopio",
  description:
    "Choisissez votre point de départ : créer un site, refondre votre présence, renforcer votre SEO ou développer votre visibilité dans les IA.",
  path: "/services",
  ogVideo: "/image/videopulse.mp4",
});

const choices = [
  {
    href: "/creation-de-site-web",
    need: "Je n’ai pas encore de site",
    service: "Création",
    text: "Un site pensé autour de votre expertise, clair dès les premières secondes.",
  },
  {
    href: "/refonte-de-site-web",
    need: "Mon site ne me représente plus",
    service: "Refonte",
    text: "Structure, design et contenus actualisés pour retrouver ce qui vous distingue.",
  },
  {
    href: "/seo",
    need: "Je veux être plus visible sur Google",
    service: "SEO",
    text: "Des fondations pour être trouvée par les personnes qui cherchent votre expertise.",
  },
  {
    href: "/geo",
    need: "Je veux développer ma visibilité dans les IA",
    service: "GEO",
    text: "Des contenus plus faciles à comprendre, retenir et citer dans les réponses générées.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <VideoJsonLd pagePath="/services" />
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        title={
          <>
            Par où <TitleEm>commencer</TitleEm>&nbsp;?
          </>
        }
        description="Création, refonte, SEO ou GEO : quatre chemins selon où vous en êtes. Choisissez celui qui correspond à votre situation."
        video="/image/videopulse.mp4"
        videoPoster="/image/videopulse-poster.jpg"
        videoLabel="Aperçu d’un site livré : PULSE"
        videoByline="PULSE"
        badge="Services"
        primaryHref="/contact"
        secondaryHref="/tarifs"
        secondaryLabel="Voir les formules"
      />
      <ValueBanner />

      <section className="py-14 md:py-20 page-x bg-bg">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <SectionHead size="xl">
              Quatre points de <TitleEm>départ</TitleEm>
            </SectionHead>
          </div>

          <ul className="flex flex-col gap-3 sm:gap-4">
            {choices.map((choice) => (
              <li key={choice.href}>
                <Link
                  href={choice.href}
                  className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 rounded-[var(--rounded-large)] border border-ink/10 bg-white px-5 py-5 sm:px-6 sm:py-6 transition-colors hover:border-ink/20 hover:bg-white"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-1.5">
                      {choice.service}
                    </p>
                    <h2 className="text-lg sm:text-xl font-extrabold text-ink tracking-tight leading-snug">
                      {choice.need}
                    </h2>
                    <p className="mt-2 text-sm sm:text-[0.95rem] font-medium text-muted leading-relaxed">
                      {choice.text}
                    </p>
                  </div>
                  <span
                    className="shrink-0 text-sm font-bold text-ink/50 group-hover:text-ink transition-colors sm:self-center"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-sm sm:text-base font-medium text-muted leading-relaxed">
            Vous hésitez entre plusieurs options&nbsp;?{" "}
            <Link
              href="/sageo"
              className="font-extrabold text-ink underline underline-offset-2 decoration-ink/30 hover:decoration-ink"
            >
              Découvrez l’approche SAGEO
            </Link>
            , qui relie SEO et GEO.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
