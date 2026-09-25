"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { BRAND_LOGO } from "@/data/site";
import { CTA } from "@/data/copy";

const links = [
  { href: "/tarifs", label: "Tarifs" },
  { href: "/projets", label: "Projets" },
  { href: "/faq", label: "Questions" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollbarW, setScrollbarW] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

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

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/20 backdrop-blur-[2px] md:hidden transition-opacity duration-300 ease-out",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={scrollbarW ? { right: scrollbarW } : undefined}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <header
        className="fixed top-0 left-0 z-50 px-4 pt-[max(1rem,env(safe-area-inset-top))]"
        style={scrollbarW ? { right: scrollbarW } : undefined}
      >
        <nav
          aria-label="Navigation principale"
          className={cn(
            "mx-auto w-full max-w-5xl overflow-hidden border transition-[background-color,box-shadow] duration-300 ease-out",
            "rounded-[1.35rem] md:rounded-full",
            scrolled || open
              ? "glass-nav shadow-lg shadow-violet/5 border-ink/10"
              : "bg-surface/80 backdrop-blur-md border-ink/5"
          )}
        >
          <div className="flex items-center justify-between gap-3 px-5 h-14">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight shrink-0"
              onClick={() => setOpen(false)}
            >
              {BRAND_LOGO}
              <span className="text-pink">.</span>
            </Link>

            <ul className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="px-4 py-2 text-sm font-semibold text-muted hover:text-ink rounded-full hover:bg-white/60 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <Button href="/contact" size="sm">
                {CTA.primary}
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
                    open && "translate-y-[7px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] block h-0.5 w-4 bg-ink rounded-full transition-opacity duration-200",
                    open && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[14px] block h-0.5 w-4 bg-ink rounded-full transition-transform duration-300 ease-out",
                    open && "-translate-y-[7px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>

          <div
            id="mobile-nav"
            className={cn(
              "md:hidden grid transition-[grid-template-rows] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
            style={{ transitionDuration: "350ms" }}
            inert={open ? undefined : true}
            aria-hidden={!open}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="border-t border-ink/10 px-3 pb-3 pt-2">
                <ul className="flex flex-col">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        tabIndex={open ? undefined : -1}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3.5 min-h-11 text-base font-semibold text-muted hover:text-ink rounded-xl hover:bg-white/70 transition-colors touch-manipulation"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-1 px-1 pb-1">
                  <Button
                    href="/contact"
                    size="sm"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    {CTA.primary}
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
