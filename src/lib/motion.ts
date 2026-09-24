import type { CSSProperties } from "react";

/** Rythme d’animation unique — cards « De l’idée… » */
export const MOTION = {
  duration: 1.4, // seconds
  stagger: 0.38, // seconds between items
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export function bubbleInStyle(index: number, visible: boolean): CSSProperties {
  if (!visible) {
    return {
      opacity: 0,
      transform: "translateY(28px) scale(0.88)",
    };
  }
  return {
    animation: `bubble-in ${MOTION.duration}s ${MOTION.ease} ${index * MOTION.stagger}s both`,
  };
}

export function waveDelay(index: number): string {
  return `${index * MOTION.stagger + MOTION.duration * 0.85}s`;
}
