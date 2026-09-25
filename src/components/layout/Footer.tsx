import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  BRAND_NAME,
  BRAND_LOGO,
  BRAND_SIGNATURE,
  CONTACT_EMAIL,
  HAS_CALENDLY,
  CALENDLY_URL,
} from "@/data/site";
import { CTA } from "@/data/copy";
import { metiers } from "@/data/metiers";

const footerLinks = [
  { href: "/tarifs", label: "Tarifs" },
  { href: "/projets", label: "Projets" },
  { href: "/faq", label: "FAQ" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
];

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white overflow-x-hidden rounded-t-[2rem] md:rounded-t-[2.75rem] border-t-[3px] border-x-[3px] border-ink shadow-[0_-6px_0_#ff1f71] pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-5 md:px-10 md:pt-10 md:pb-6">
        <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="max-w-xs">
            <p className="text-sm font-semibold text-white/50 leading-snug">
              {BRAND_SIGNATURE}
            </p>
            <p className="mt-1.5 text-xs font-medium text-white/35">
              Dès 500&nbsp;€ · Devis clair avant de démarrer
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Demande de détails : site web")}`}
                className="text-sm font-semibold text-lime hover:underline underline-offset-2"
              >
                Envoyer un mail
              </a>
              {HAS_CALENDLY && (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
                >
                  Réserver un créneau
                </a>
              )}
            </div>
            <Button href="/contact" size="sm" className="mt-4">
              {CTA.primary}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1 w-full max-w-md">
            <nav aria-label="Pied de page">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-white/35 mb-2 px-2">
                Navigation
              </p>
              <ul className="flex flex-col gap-0.5">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block px-2 py-1 text-sm font-semibold text-white/55 hover:text-ink hover:bg-lime rounded-full transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Secteurs">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-white/35 mb-2 px-2">
                Secteurs
              </p>
              <ul className="flex flex-col gap-0.5">
                {metiers.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/${m.slug}`}
                      className="inline-block px-2 py-1 text-sm font-semibold text-white/55 hover:text-ink hover:bg-lime rounded-full transition-colors"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-t border-white/10 pt-4">
          <p className="text-white/30 text-xs font-medium">
            © {new Date().getFullYear()} {BRAND_NAME} · France
          </p>
          <p className="text-white/25 text-xs font-medium">Prix TTC indicatifs</p>
        </div>
      </div>

      <div
        className="relative px-3 sm:px-4 md:px-6 pt-2 pb-0 overflow-visible select-none pointer-events-none"
        aria-hidden
      >
        <p
          className="font-extrabold tracking-tighter leading-[0.78] text-center text-white translate-y-[0.08em]"
          style={{ fontSize: "clamp(4.5rem, 22vw, 10rem)" }}
        >
          {BRAND_LOGO}
          <span className="text-pink">.</span>
        </p>
      </div>
    </footer>
  );
}
