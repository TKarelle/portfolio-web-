"use client";

import { useEffect, useRef } from "react";

type AutoPlayVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  "aria-label"?: string;
  title?: string;
};

/**
 * Autoplay au viewport. Le `src` reste dans le HTML (découverte Google Video)
 * avec preload="none" pour limiter le coût réseau hors viewport.
 */
export function AutoPlayVideo({
  src,
  poster,
  className,
  "aria-label": ariaLabel,
  title,
}: AutoPlayVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reduceMotion) {
            void video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { rootMargin: "40px 0px", threshold: 0.1 },
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
        title={title}
        aria-label={ariaLabel}
        className={className}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
