"use client";

import { useEffect, useRef } from "react";

type AutoPlayVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  "aria-label"?: string;
};

/**
 * Lazy video for Lighthouse: no network until near viewport.
 * Poster shows immediately; src is attached only when approaching.
 */
export function AutoPlayVideo({
  src,
  poster,
  className,
  "aria-label": ariaLabel,
}: AutoPlayVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let attached = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!attached) {
            video.src = src;
            video.load();
            attached = true;
          }
          if (!reduceMotion) {
            void video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { rootMargin: "40px 0px", threshold: 0.1 }
    );

    observer.observe(wrap);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [src]);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <video
        ref={videoRef}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={ariaLabel}
        className={className}
      />
    </div>
  );
}
