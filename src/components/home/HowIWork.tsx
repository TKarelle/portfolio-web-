"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  BRAND_SIGNATURE,
  FOUNDER_DIPLOMA,
  FOUNDER_NAME,
  FOUNDER_PHOTO,
} from "@/data/site";
import { SectionHead } from "@/components/ui/SectionHead";

export function HowIWork() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFlipped(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlipped(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 px-6 bg-chunk-violet" id="pourquoi-moi">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div ref={stageRef} className="mirror-stage w-full max-w-sm mx-auto lg:mx-0">
          <div
            className={`mirror-flip relative aspect-[4/5] w-full photo-frame photo-frame-lime ${
              flipped ? "is-visible" : ""
            }`}
          >
            <Image
              src={FOUNDER_PHOTO}
              alt={`${FOUNDER_NAME}, développeuse web indépendante`}
              fill
              className="object-cover rounded-[1.1rem]"
              sizes="400px"
            />
          </div>
        </div>

        <div className="reveal">
          <p className="text-sm font-bold text-violet mb-3">{FOUNDER_DIPLOMA}</p>

          <SectionHead
            align="left"
            stroke="violet"
            highlight="je suis"
            className="mb-5"
          >
            {"Qui je suis"}
          </SectionHead>

          <div className="space-y-4 text-muted text-base md:text-lg font-medium leading-relaxed mb-7">
            <p>
              Je m&apos;appelle <strong className="text-ink">{FOUNDER_NAME}</strong>.
              Développeuse web indépendante — pas d&apos;agence, pas
              d&apos;intermédiaire. Juste toi et moi.
            </p>
            <p>
              J&apos;aide les artisans, commerçants et indépendants à avoir un
              site clair et professionnel, sans avoir à gérer la technique.
            </p>
          </div>

          <p className="text-sm font-semibold text-ink/70 border-l-4 border-lime pl-4 leading-snug">
            {BRAND_SIGNATURE}
          </p>
        </div>
      </div>
    </section>
  );
}
