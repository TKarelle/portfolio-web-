"use client";

import { useCallback, useRef, useState } from "react";
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

let calendlyPromise: Promise<void> | null = null;

function loadCalendlyAssets(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly?.initPopupWidget) return Promise.resolve();
  if (calendlyPromise) return calendlyPromise;

  calendlyPromise = new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.href = CALENDLY_CSS;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_JS}"]`,
    );
    if (existing) {
      if (window.Calendly?.initPopupWidget) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Calendly script failed")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed"));
    document.body.appendChild(script);
  });

  return calendlyPromise;
}

/** Bouton qui charge Calendly uniquement au clic, puis ouvre le popup. */
export function CalendlyButton({
  className,
  variant = "primary",
  size = "lg",
  children = CTA.book,
}: CalendlyButtonProps) {
  const [loading, setLoading] = useState(false);
  const openingRef = useRef(false);

  const openPopup = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!HAS_CALENDLY || openingRef.current) return;
    openingRef.current = true;
    setLoading(true);

    try {
      await loadCalendlyAssets();
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      }
    } catch {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    } finally {
      setLoading(false);
      openingRef.current = false;
    }
  }, []);

  if (!HAS_CALENDLY) return null;

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={openPopup}
      aria-busy={loading || undefined}
    >
      {children}
    </Button>
  );
}
