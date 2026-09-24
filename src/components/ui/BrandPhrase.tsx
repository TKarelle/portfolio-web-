import { cn } from "@/lib/utils";

type MarkColor = "pink" | "lime" | "violet";

type BrandPhraseProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  as?: "h1" | "p";
};

export function BrandPhrase({
  className,
  size = "lg",
  as: Tag = "p",
}: BrandPhraseProps) {
  const sizes = {
    sm: "text-base md:text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl",
    hero: "text-[clamp(2.4rem,6.5vw,4.8rem)] leading-[1.05]",
  };

  const mark = (word: string, color: MarkColor) => (
    <span className={cn("mark", `mark-${color}`)}>{word}</span>
  );

  return (
    <Tag className={cn("font-extrabold tracking-tight text-ink", sizes[size], className)}>
      Ton premier site web, {mark("simple", "lime")} et{" "}
      {mark("sans prise de tête", "pink")}.
    </Tag>
  );
}
