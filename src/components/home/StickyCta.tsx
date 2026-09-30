"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/data/copy";

const CLEARANCE_VAR = "--sticky-cta-clearance";
/** Bouton 52 + pt-2 (8) + pb mini 12, hors safe-area / toolbar navigateur */
const BAR_CORE_PX = 72;

/**
 * CTA sticky mobile — Safari & Chrome :
 * - `env(safe-area-inset-bottom)` : home indicator
 * - `visualViewport` : barre d’URL / toolbar qui monte ou descend
 * - `--sticky-cta-clearance` : exposé pour remonter le contenu au-dessus du barreau
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [vvBottom, setVvBottom] = useState(0);

  useEffect(() => {
    const readVvBottom = () => {
      const vv = window.visualViewport;
      if (!vv) return 0;
      return Math.max(
        0,
        Math.round(window.innerHeight - vv.height - vv.offsetTop),
      );
    };

    const setClearance = (show: boolean, inset: number) => {
      document.documentElement.style.setProperty(
        CLEARANCE_VAR,
        show
          ? `calc(${BAR_CORE_PX + inset}px + env(safe-area-inset-bottom, 0px))`
          : "0px",
      );
    };

    const sync = () => {
      const inset = readVvBottom();
      setVvBottom(inset);

      const scrolled = window.scrollY > window.innerHeight * 0.7;
      const contact = document.getElementById("contact");
      const nearContact =
        contact != null &&
        contact.getBoundingClientRect().top < window.innerHeight * 0.85;
      const show = scrolled && !nearContact;
      setVisible(show);
      setClearance(show, inset);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    const vv = window.visualViewport;
    vv?.addEventListener("resize", sync);
    vv?.addEventListener("scroll", sync);

    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      vv?.removeEventListener("resize", sync);
      vv?.removeEventListener("scroll", sync);
      document.documentElement.style.removeProperty(CLEARANCE_VAR);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 z-40 md:hidden pointer-events-none"
      style={{ bottom: vvBottom }}
    >
      <div
        className="pointer-events-auto px-3 pt-2 bg-gradient-to-t from-bg via-bg/95 to-transparent"
        style={{
          paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
        }}
      >
        <Button
          href="#contact"
          size="md"
          className="w-full !min-h-[52px] !rounded-2xl text-sm shadow-[0_4px_0_0_#a8c400]"
        >
          {CTA.sticky}
        </Button>
      </div>
    </div>
  );
}
