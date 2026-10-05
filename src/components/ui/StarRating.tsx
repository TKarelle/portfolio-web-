type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
  size?: "sm" | "md";
};

export function StarRating({
  rating,
  max = 5,
  className = "",
  size = "md",
}: StarRatingProps) {
  const starSize = size === "sm" ? "text-sm" : "text-base";

  return (
    <span
      className={`inline-flex items-center gap-0.5 ${starSize} ${className}`}
      role="img"
      aria-label={`${rating} sur ${max} étoiles`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-500" : "text-ink/15"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </span>
  );
}
