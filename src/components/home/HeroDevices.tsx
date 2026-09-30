"use client";

import Image from "next/image";

/**
 * Mockup dans une carte avec ombre de profondeur.
 * Pas d’overflow:hidden pour ne pas couper l’ombre des devices.
 */
export function HeroDevices() {
  return (
    <div
      className="hero-devices w-full max-w-[560px] lg:max-w-none mx-auto lg:ml-auto lg:mr-0"
      aria-hidden="true"
    >
      <div
        className="hero-devices__card rounded-[1.75rem] md:rounded-[2rem] p-2 md:p-2.5"
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
          sizes="(max-width: 1024px) 90vw, 560px"
          className="hero-devices__img block w-full h-auto select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
