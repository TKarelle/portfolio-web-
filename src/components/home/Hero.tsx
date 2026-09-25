"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/data/copy";
import { pricingPlans } from "@/data/pricing";
import { HeroFormulas } from "@/components/home/HeroFormulas";
import { highlightPhrase } from "@/lib/highlight";

function HeroOrbit() {
  return (
    <div className="hero-orbit hero-orbit--side" aria-hidden="true">
      <div className="hero-orbit__core" />
      <div className="hero-orbit__ring hero-orbit__ring--a" />
      <div className="hero-orbit__ring hero-orbit__ring--b" />
      <div className="hero-orbit__ring hero-orbit__ring--c" />

      <div className="hero-orbit__track">
        <div
          className="hero-orbit__chip"
          style={{ transform: "rotate(0deg) translate(8rem) rotate(0deg)" }}
        />
        <div
          className="hero-orbit__chip hero-orbit__chip--2"
          style={{ transform: "rotate(120deg) translate(8rem) rotate(-120deg)" }}
        />
        <div
          className="hero-orbit__chip hero-orbit__chip--3"
          style={{ transform: "rotate(240deg) translate(8rem) rotate(-240deg)" }}
        />
      </div>

      <div className="hero-orbit__track hero-orbit__track--slow">
        <div
          className="hero-orbit__chip hero-orbit__chip--2"
          style={{
            transform: "rotate(60deg) translate(5.75rem) rotate(-60deg)",
            opacity: 0.85,
          }}
        />
        <div
          className="hero-orbit__chip"
          style={{
            transform: "rotate(200deg) translate(5.75rem) rotate(-200deg)",
            opacity: 0.85,
            boxShadow: "4px 4px 0 var(--violet)",
          }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  const [activeId, setActiveId] = useState<string>(pricingPlans[0].id);
  const active = pricingPlans.find((p) => p.id === activeId) ?? pricingPlans[0];
  const { headline, highlight, body } = active.persona;

  return (
    <section className="relative min-h-screen min-h-dvh overflow-hidden flex flex-col pt-24 pb-[max(2rem,env(safe-area-inset-bottom))] md:pb-10 px-5 sm:px-6 bg-bg">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 5% 30%, rgba(255, 31, 113, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 95% 15%, rgba(124, 58, 237, 0.14) 0%, transparent 50%),
            radial-gradient(ellipse 45% 35% at 60% 90%, rgba(212, 255, 0, 0.12) 0%, transparent 45%)
          `,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col flex-1">
        <div className="order-1 lg:order-2 lg:mt-auto mb-6 lg:mb-0 lg:pt-4">
          <HeroFormulas
            plans={pricingPlans}
            activeId={activeId}
            onChange={setActiveId}
          />
        </div>

        <div className="order-2 lg:order-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center flex-1 pt-2 md:pt-8 mb-6 lg:mb-14">
          <div className="text-center lg:text-left">
            <div className="hero-enter mb-4 lg:mb-6">
              <span className="inline-block bg-ink text-lime text-[11px] sm:text-sm font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border-2 border-ink">
                Dès 500&nbsp;€ · sans engagement
              </span>
            </div>

            <div className="flex justify-center lg:justify-start">
              <h1 className="hero-title">
                {highlightPhrase(headline, highlight)}
              </h1>
            </div>

            <div className="mt-4 lg:mt-6 flex justify-center lg:justify-start">
              <p className="hero-lede mx-auto lg:mx-0">{body}</p>
            </div>

            <div className="mt-7 lg:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start">
              <Button href="#contact" size="lg">
                {CTA.primary}
              </Button>
              <Button href="#forfaits" variant="outline" size="lg">
                {CTA.secondary}
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center min-h-[340px]">
            <HeroOrbit />
          </div>

          <div className="relative flex lg:hidden items-center justify-center min-h-[200px] -mt-1 opacity-80">
            <HeroOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
