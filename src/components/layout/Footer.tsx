import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { QuizLeadMagnet } from "@/components/home/QuizLeadMagnet";
import {
  BRAND_NAME,
  BRAND_LOGO,
  BRAND_SIGNATURE,
  CONTACT_EMAIL,
  HAS_CALENDLY,
  CALENDLY_URL,
} from "@/data/site";
import { CTA } from "@/data/copy";
import { metiers, metierPath } from "@/data/metiers";
import { besoins, besoinPath } from "@/data/besoins";
import { comparatifs, comparatifPath } from "@/data/comparatifs";
import {
  FOOTER_BESOIN_SLUGS,
  FOOTER_HUB_LINKS,
  FOOTER_METIER_SLUGS,
} from "@/data/topic-clusters";

function FooterNav({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/30 mb-3">
        {title}
      </p>
      <ul className="flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm font-medium text-white/55 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Footer soft — aligné DA Apple/premium (sans cards / ombres offset).
 */
export function Footer() {
  const metierLinks = FOOTER_METIER_SLUGS.map((slug) => {
    const m = metiers.find((x) => x.slug === slug);
    return {
      href: metierPath(slug),
      label: m?.label ?? slug,
    };
  });

  const besoinLinks = FOOTER_BESOIN_SLUGS.map((slug) => {
    const b = besoins.find((x) => x.slug === slug);
    return {
      href: besoinPath(slug),
      label: b?.label ?? slug,
    };
  });

  const comparatifLinks = comparatifs.map((c) => ({
    href: comparatifPath(c.slug),
    label: c.keyword,
  }));

  return (
    <footer className="relative z-10 bg-ink text-white overflow-hidden pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-8 sm:px-8 md:px-10 md:pt-16 md:pb-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-sm shrink-0">
            <p className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug">
              {BRAND_SIGNATURE}
            </p>
            <p className="mt-2 text-sm font-medium text-white/40">
              Dès 89&nbsp;€/mois · hébergement inclus
            </p>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Demande de détails : site web")}`}
                className="text-sm font-semibold text-lime hover:text-white transition-colors"
              >
                {CTA.mail}
              </a>
              {HAS_CALENDLY ? (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/50 hover:text-white transition-colors"
                >
                  {CTA.discovery}
                </a>
              ) : null}
            </div>

            <Button href="/contact" size="sm" className="mt-6">
              {CTA.nav}
            </Button>

            <QuizLeadMagnet variant="footer" id="grille-footer" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 w-full">
            <FooterNav title="Le site" links={[...FOOTER_HUB_LINKS]} />
            <FooterNav title="Par métier" links={metierLinks} />
            <FooterNav title="Par besoin" links={besoinLinks} />
            <FooterNav title="Comparer" links={comparatifLinks} />
          </div>
        </div>

        <div className="mt-12 md:mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-white/10 pt-6">
          <p className="text-white/30 text-xs font-medium">
            © {new Date().getFullYear()} {BRAND_NAME} · France ·{" "}
            <Link
              href="/mentions-legales"
              className="hover:text-white/55 transition-colors"
            >
              Mentions légales
            </Link>
          </p>
          <p className="text-white/25 text-xs font-medium">
            Prix TTC indicatifs
          </p>
        </div>
      </div>

      <div
        className="relative px-3 sm:px-4 md:px-6 pt-2 pb-0 overflow-hidden select-none pointer-events-none"
        aria-hidden
      >
        <p
          className="font-extrabold tracking-tighter leading-[0.78] text-center text-white/8 translate-y-[0.08em] whitespace-nowrap"
          style={{ fontSize: "clamp(3.5rem, 18vw, 8rem)" }}
        >
          {BRAND_LOGO}
          <span className="text-pink/40">.</span>
        </p>
      </div>
    </footer>
  );
}
