import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MeshGrainBackgroundProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

/**
 * Fond mesh gradient + grain film — lecture visuelle proche d’un mesh Dribbble,
 * avec la palette Kopio (rose / violet / lime soft sur crème lavande).
 */
export function MeshGrainBackground({
  children,
  className,
  contentClassName,
}: MeshGrainBackgroundProps) {
  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
    >
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        {/* Base crème lavande */}
        <div className="absolute inset-0 bg-[#f4f2ff]" />

        {/* Mesh : blobs organiques (plusieurs radials superposés) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 70% at 18% 12%, rgba(255, 255, 255, 0.95) 0%, transparent 55%),
              radial-gradient(ellipse 70% 65% at 78% 28%, rgba(255, 31, 113, 0.55) 0%, transparent 58%),
              radial-gradient(ellipse 55% 50% at 52% 48%, rgba(255, 77, 141, 0.38) 0%, transparent 52%),
              radial-gradient(ellipse 65% 55% at 12% 62%, rgba(124, 58, 237, 0.32) 0%, transparent 55%),
              radial-gradient(ellipse 50% 45% at 88% 72%, rgba(167, 139, 250, 0.28) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 42% 88%, rgba(212, 255, 0, 0.22) 0%, transparent 55%),
              radial-gradient(ellipse 40% 35% at 65% 8%, rgba(255, 224, 236, 0.7) 0%, transparent 45%),
              linear-gradient(165deg, #faf8ff 0%, #f4f2ff 40%, #efe8ff 100%)
            `,
          }}
        />

        {/* Soften / bloom */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10" />

        {/* Grain fort — texture film */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.42] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <filter id="hero-mesh-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.78"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.05
                      0 0 0 0 0.05
                      0 0 0 0 0.06
                      0 0 0 0.55 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-mesh-grain)" />
        </svg>

        {/* Second pass grain plus fin */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        {/* Vignette légère pour ancrer le texte */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 95% 80% at 50% 42%, transparent 40%, rgba(15, 15, 20, 0.08) 100%)",
          }}
        />
      </div>

      <div className={cn("relative z-10 h-full", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
