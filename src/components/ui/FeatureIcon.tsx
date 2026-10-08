import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

/** Pastille KOPIO partagée (Constat, garanties, etc.). */
export function FeatureIconBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full border-2 border-ink bg-ink text-lime shadow-[3px_3px_0_0_var(--pink)]",
        className,
      )}
      aria-hidden
    >
      {children}
    </span>
  );
}

export function FeatureIcon({
  icon: Icon,
  className,
  iconClassName,
}: {
  icon: ComponentType<IconProps>;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <FeatureIconBadge className={className}>
      <Icon className={cn("w-8 h-8 sm:w-9 sm:h-9", iconClassName)} />
    </FeatureIconBadge>
  );
}

/* —— Glyphs (viewBox 48, trait 2.2) —— */

export function IconSearch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="22" cy="22" r="9" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M29 29 36 36"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="22" cy="22" r="3.5" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function IconBadge({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 8 28.5 17.5 39 19 31.5 26.5 33.5 37 24 32 14.5 37 16.5 26.5 9 19 19.5 17.5 24 8Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="23" r="3" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 8v8M24 32v8M8 24h8M32 24h8M13 13l5.5 5.5M29.5 29.5 35 35M35 13l-5.5 5.5M18.5 29.5 13 35"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="4.5" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function IconPath({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M12 32c4-10 8-14 12-14s8 4 12 14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="16" r="4" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M20 34h8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M16 24.5 21.2 29.5 32 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function IconSliders({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M10 16h28M10 24h28M10 32h28"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="16" r="3.5" fill="currentColor" />
      <circle cx="30" cy="24" r="3.5" fill="currentColor" />
      <circle cx="22" cy="32" r="3.5" fill="currentColor" />
    </svg>
  );
}

export function IconHome({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 10 38 22.5V36a2 2 0 0 1-2 2H28v-9h-8v9H12a2 2 0 0 1-2-2V22.5L24 10Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="22" r="3" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function IconTag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M10 22.5 22.2 10.3A3 3 0 0 1 24.3 9.5H36a2 2 0 0 1 2 2v11.7a3 3 0 0 1-.9 2.1L25.5 36.4a3 3 0 0 1-4.2 0L10 25.1a3 3 0 0 1 0-4.2Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="30.5" cy="17.5" r="2.5" fill="currentColor" />
    </svg>
  );
}
