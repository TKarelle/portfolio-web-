import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]";

  const variants = {
    primary: "bg-lime text-ink hover:bg-lime-soft shadow-[0_4px_0_0_#a8c400] hover:shadow-[0_2px_0_0_#a8c400] hover:translate-y-0.5",
    secondary: "bg-pink text-white hover:bg-pink-hot shadow-[0_4px_0_0_#c40055] hover:shadow-[0_2px_0_0_#c40055] hover:translate-y-0.5",
    outline: "bg-surface text-ink border-2 border-ink/10 hover:border-violet hover:bg-violet/5",
    dark: "bg-ink text-white hover:bg-ink/90",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
