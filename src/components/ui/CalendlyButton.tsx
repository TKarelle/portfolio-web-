"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/data/copy";
import { CALENDLY_URL, HAS_CALENDLY } from "@/data/site";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

type CalendlyButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
};

/** Bouton qui ouvre Calendly en popup (même API que le badge officiel). */
export function CalendlyButton({
  className,
  variant = "primary",
  size = "lg",
  children = CTA.book,
}: CalendlyButtonProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.href = CALENDLY_CSS;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    if (window.Calendly) setReady(true);
  }, []);

  const openPopup = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (!HAS_CALENDLY) return;

      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        return;
      }

      // Script pas encore prêt : ouvrir la page Calendly en secours
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    },
    []
  );

  if (!HAS_CALENDLY) return null;

  return (
    <>
      <Script
        src={CALENDLY_JS}
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />
      <Button
        type="button"
        variant={variant}
        size={size}
        className={cn(className)}
        onClick={openPopup}
        aria-busy={!ready ? true : undefined}
      >
        {children}
      </Button>
    </>
  );
}
