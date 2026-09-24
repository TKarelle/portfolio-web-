import Image from "next/image";
import { FOUNDER_NAME, FOUNDER_PHOTO } from "@/data/site";

export function BlogAuthor() {
  return (
    <div className="flex items-center gap-4 p-5 card bg-surface">
      <div className="relative w-14 h-14 photo-frame-lime shrink-0">
        <Image
          src={FOUNDER_PHOTO}
          alt={FOUNDER_NAME}
          fill
          className="object-cover rounded-xl"
          sizes="56px"
        />
      </div>
      <div>
        <p className="font-extrabold">{FOUNDER_NAME}</p>
        <p className="text-sm text-muted font-medium">
          Développeuse web · sites vitrines dès 500 €
        </p>
      </div>
    </div>
  );
}
