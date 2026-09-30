"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

/**
 * Injecte Vercel Analytics après idle / première interaction
 * pour ne pas concurrencer le LCP / le main thread.
 */
export function DeferredAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let done = false;
    const enable = () => {
      if (done) return;
      done = true;
      setEnabled(true);
      cleanup();
    };

    const onInteract = () => enable();
    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(() => enable(), { timeout: 4000 })
        : undefined;
    const timeoutId = window.setTimeout(enable, 3500);

    window.addEventListener("pointerdown", onInteract, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, {
      once: true,
      passive: true,
    });

    function cleanup() {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("scroll", onInteract);
      window.clearTimeout(timeoutId);
      if (idleId != null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    }

    return cleanup;
  }, []);

  if (!enabled) return null;
  return <Analytics />;
}
