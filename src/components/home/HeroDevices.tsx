"use client";

import Image from "next/image";

/**
 * Maquette centrée sous le copy — carte avec ombre de profondeur.
 * Pas d’overflow:hidden pour ne pas couper l’ombre.
 */
export function HeroDevices() {
  return (
    <div
      className="hero-devices w-full max-w-[920px] mx-auto"
      aria-hidden="true"
    >
      <div
        className="hero-devices__card rounded-[var(--rounded-large)] p-1.5 sm:p-2 md:p-2.5"
        style={{
          background: "#F3F1FC",
          boxShadow:
            "0 4px 8px rgba(17,17,17,0.08), 0 16px 40px rgba(17,17,17,0.14), 0 40px 80px rgba(17,17,17,0.12)",
        }}
      >
        <Image
          src="/image/mockup.png"
          alt=""
          width={1920}
          height={1080}
          priority
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 88vw, 920px"
          className="hero-devices__img block w-full h-auto select-none pointer-events-none rounded-[var(--rounded-large)]"
        />
      </div>
    </div>
  );
}
