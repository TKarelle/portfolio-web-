"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { PromoBar } from "@/components/layout/PromoBar";
import { cn } from "@/lib/utils";
import { BRAND_LOGO } from "@/data/site";
import { CTA } from "@/data/copy";
import { QUIZ_META } from "@/data/etancheite-quiz";
import { NAV_SERVICE_LINKS } from "@/data/topic-clusters";

const links = [
  { href: "/tarifs", label: "Tarifs" },
  { href: "/projets", label: "Projets" },
  { href: "/blog", label: "Blog" },
];

function linkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollbarW, setScrollbarW] = useState(0);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLLIElement>(null);

  const servicesActive =
    linkActive(pathname, "/services") ||
    NAV_SERVICE_LINKS.some((l) => linkActive(pathname, l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      setScrollbarW(0);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      return;
    }
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    setScrollbarW(gutter);
    document.body.style.overflow = "hidden";
    if (gutter > 0) document.body.style.paddingRight = `${gutter}px`;
    return () => {
      setScrollbarW(0);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  const showPromo = pathname !== QUIZ_META.path;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/20 backdrop-blur-[2px] md:hidden transition-opacity duration-300 ease-out",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        style={scrollbarW ? { right: scrollbarW } : undefined}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {showPromo ? (
        <div className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)]">
          <PromoBar />
        </div>
      ) : null}

      {/*
        Comme avant la barre quiz : left-0 sans right → largeur = contenu.
        Ne jamais poser left+right ensemble (ça étire en full width à l’ouverture).
        Décalage promo uniquement via padding-top.
      */}
      <header
        className={cn(
          "fixed top-0 left-0 z-50 px-4 w-max max-w-[calc(100%-2rem)]",
          showPromo
            ? "pt-[calc(env(safe-area-inset-top)+2.25rem)]"
            : "pt-[max(1rem,env(safe-area-inset-top))]",
        )}
      >
        <nav
          aria-label="Navigation principale"
          className={cn(
            "w-full overflow-visible border transition-[background-color,box-shadow] duration-300 ease-out",
            "rounded-[var(--rounded-large)]",
            scrolled || open
              ? "glass-nav shadow-lg shadow-violet/5 border-ink/10"
              : "bg-surface/80 backdrop-blur-md border-ink/5",
          )}
        >
          <div className="flex items-center justify-between gap-3 px-5 h-14">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight shrink-0 touch-manipulation"
              onClick={(e) => {
                setOpen(false);
                if (pathname !== "/") return;
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                if (window.location.hash) {
                  window.history.replaceState(null, "", "/");
                }
              }}
            >
              {BRAND_LOGO}
              <span className="text-pink">.</span>
            </Link>

            <ul className="hidden md:flex items-center gap-0.5">
              <li ref={servicesRef} className="relative">
                <div
                  className={cn(
                    "inline-flex items-center rounded-[var(--rounded-large)] transition-colors",
                    servicesActive || servicesOpen
                      ? "text-ink bg-white/70"
                      : "text-muted hover:text-ink hover:bg-white/60",
                  )}
                >
                  <Link
                    href="/services"
                    className="pl-4 pr-1.5 py-2 text-sm font-semibold"
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    className="pr-3 pl-1 py-2"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    aria-label="Ouvrir le menu Services"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    <svg
                      className={cn(
                        "w-3.5 h-3.5 opacity-60 transition-transform duration-200",
                        servicesOpen && "rotate-180",
                      )}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={cn(
                    "absolute left-0 top-full z-50 pt-2 transition-[opacity,transform] duration-200 ease-out",
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none",
                  )}
                >
                  <ul
                    className="min-w-[13.5rem] rounded-[var(--rounded-large)] border border-ink/10 bg-white/95 backdrop-blur-md shadow-lg shadow-ink/10 py-1.5"
                    role="menu"
                    aria-label="Services"
                  >
                    <li role="none">
                      <Link
                        href="/services"
                        role="menuitem"
                        className={cn(
                          "block px-4 py-2.5 text-sm font-semibold transition-colors",
                          linkActive(pathname, "/services")
                            ? "text-ink bg-violet/8"
                            : "text-muted hover:text-ink hover:bg-ink/[0.04]",
                        )}
                        onClick={() => setServicesOpen(false)}
                      >
                        Vue d’ensemble
                      </Link>
                    </li>
                    {NAV_SERVICE_LINKS.map((l) => {
                      const active = linkActive(pathname, l.href);
                      return (
                        <li key={l.href} role="none">
                          <Link
                            href={l.href}
                            role="menuitem"
                            className={cn(
                              "block px-4 py-2.5 text-sm font-semibold transition-colors",
                              active
                                ? "text-ink bg-violet/8"
                                : "text-muted hover:text-ink hover:bg-ink/[0.04]",
                            )}
                            onClick={() => setServicesOpen(false)}
                          >
                            {l.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>

              {links.map((l) => {
                const active = linkActive(pathname, l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={cn(
                        "px-4 py-2 text-sm font-semibold rounded-[var(--rounded-large)] transition-colors",
                        active
                          ? "text-ink bg-white/70"
                          : "text-muted hover:text-ink hover:bg-white/60",
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:block">
              <Button href="/contact" size="sm" variant="violet">
                {CTA.nav}
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden relative w-11 h-11 shrink-0 rounded-full bg-white/80 flex items-center justify-center border border-ink/10 touch-manipulation"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className="relative w-4 h-3.5" aria-hidden>
                <span
                  className={cn(
                    "absolute left-0 top-0 block h-0.5 w-4 bg-ink rounded-full transition-transform duration-300 ease-out",
                    open && "translate-y-[7px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] block h-0.5 w-4 bg-ink rounded-full transition-opacity duration-200",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[14px] block h-0.5 w-4 bg-ink rounded-full transition-transform duration-300 ease-out",
                    open && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>

          <div
            id="mobile-nav"
            className={cn(
              "md:hidden grid transition-[grid-template-rows] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              open ? "overflow-visible" : "overflow-hidden",
            )}
            style={{ transitionDuration: "350ms" }}
            inert={open ? undefined : true}
            aria-hidden={!open}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="border-t border-ink/10 px-3 pb-3 pt-2">
                <ul className="flex flex-col">
                  <li>
                    <div className="flex items-center gap-1">
                      <Link
                        href="/services"
                        tabIndex={open ? undefined : -1}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex-1 px-4 py-3.5 min-h-11 text-base font-semibold rounded-xl transition-colors touch-manipulation",
                          servicesActive
                            ? "text-ink bg-white/70"
                            : "text-muted hover:text-ink hover:bg-white/70",
                        )}
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        tabIndex={open ? undefined : -1}
                        className="shrink-0 w-11 h-11 rounded-xl text-muted hover:bg-white/70 touch-manipulation"
                        aria-expanded={mobileServicesOpen}
                        aria-label="Ouvrir les services"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                      >
                        <svg
                          className={cn(
                            "mx-auto w-4 h-4 opacity-50 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180",
                          )}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        mobileServicesOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]",
                      )}
                    >
                      <ul className="min-h-0 overflow-hidden pl-2">
                        {NAV_SERVICE_LINKS.map((l) => {
                          const active = linkActive(pathname, l.href);
                          return (
                            <li key={l.href}>
                              <Link
                                href={l.href}
                                tabIndex={
                                  open && mobileServicesOpen ? undefined : -1
                                }
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "block px-4 py-3 min-h-11 text-[0.95rem] font-semibold rounded-xl transition-colors touch-manipulation",
                                  active
                                    ? "text-ink bg-violet/8"
                                    : "text-muted hover:text-ink hover:bg-white/70",
                                )}
                              >
                                {l.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>

                  {links.map((l) => {
                    const active = linkActive(pathname, l.href);
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          tabIndex={open ? undefined : -1}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block px-4 py-3.5 min-h-11 text-base font-semibold rounded-xl transition-colors touch-manipulation",
                            active
                              ? "text-ink bg-white/70"
                              : "text-muted hover:text-ink hover:bg-white/70",
                          )}
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-1 px-1 pb-1">
                  <Button
                    href="/contact"
                    size="sm"
                    variant="violet"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    {CTA.nav}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
