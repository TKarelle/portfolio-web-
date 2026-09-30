"use client";

import { Button } from "@/components/ui/Button";
import { HeroDevices } from "@/components/home/HeroDevices";
import { CTA } from "@/data/copy";
import { highlightPhrase } from "@/lib/highlight";

const HERO = {
  badge: "Spécialiste des professionnelles de l'accompagnement",
  headline: "Votre site professionnel,\nsans la charge mentale.",
  highlight: "sans la charge mentale",
  lede: "Kopio conçoit, maintient et fait évoluer votre présence en ligne, pour que vos clientes vous trouvent, vous comprennent et réservent, pendant que vous vous concentrez sur votre pratique.",
  proof: "Une seule cliente bien suivie peut couvrir votre abonnement.*",
} as const;

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-dvh overflow-x-clip overflow-y-visible flex flex-col pt-24 pb-[max(2rem,env(safe-area-inset-bottom))] md:pb-10 px-5 sm:px-6 lg:px-0 bg-bg">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 5% 30%, rgba(255, 31, 113, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 95% 15%, rgba(124, 58, 237, 0.14) 0%, transparent 50%),
            radial-gradient(ellipse 45% 35% at 60% 90%, rgba(254, 235, 2, 0.14) 0%, transparent 45%)
          `,
        }}
      />

      <div className="relative z-10 w-full flex flex-col flex-1 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-8 lg:gap-8 xl:gap-10 items-center flex-1 pt-2 md:pt-8 mb-6 lg:mb-10">
          <div className="relative z-20 text-center lg:text-left min-w-0 flex flex-col items-center lg:items-start order-1 lg:pl-10 xl:pl-14 2xl:pl-20">
            <div className="hero-enter mb-5 sm:mb-6 max-w-xl">
              <span className="inline-block bg-ink text-lime text-[11px] sm:text-sm font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border-2 border-ink leading-snug">
                {HERO.badge}
              </span>
            </div>

            <div className="hero-copy">
              <h1 className="hero-title">
                {highlightPhrase(HERO.headline, HERO.highlight)}
              </h1>
              <p className="hero-lede">{HERO.lede}</p>
              <p className="mt-4 flex items-center justify-center lg:justify-start gap-2.5 text-sm sm:text-base font-extrabold text-ink tracking-tight whitespace-nowrap">
                <span className="proof-check shrink-0" aria-hidden="true">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 8.2 6.4 11l6.1-7"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {HERO.proof}
              </p>
            </div>

            <div className="mt-6 sm:mt-7 lg:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start w-full sm:w-auto">
              <Button href="#modeles" size="lg">
                {CTA.primary}
              </Button>
              <Button href="#projets" variant="outline" size="lg">
                {CTA.secondary}
              </Button>
            </div>
          </div>

          <div className="relative z-10 order-2 flex items-center justify-center lg:justify-end w-full min-w-0 hero-enter-d1 lg:pr-6 xl:pr-8">
            <HeroDevices />
          </div>
        </div>
      </div>
    </section>
  );
}
