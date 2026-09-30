import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { CTA } from "@/data/copy";
import { antiFear } from "@/data/pricing";

const itemIcons = [
  // Hébergeur / CMS
  <svg key="host" viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <path d="M4 7h16v4H4V7Zm0 6h16v4H4v-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="7" cy="9" r="1" fill="currentColor" />
    <circle cx="7" cy="15" r="1" fill="currentColor" />
  </svg>,
  // Page blanche / rédaction
  <svg key="write" viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <path d="M6 4h9l3 3v13H6V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M9 11h6M9 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Sécurité / sauvegarde
  <svg key="lock" viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Devis / paiement
  <svg key="pay" viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
    <path d="M7 15h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Prestataire injoignable
  <svg key="phone" viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <path
      d="M8.5 4.5 10 8l-2 1.5a12 12 0 0 0 6.5 6.5L16 14l3.5 1.5v2.2a2 2 0 0 1-2.2 2A16 16 0 0 1 4.3 6.7a2 2 0 0 1 2-2.2H8.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M15 5l4 4M19 5l-1.5 4.5L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function AntiFear() {
  return (
    <section
      className="relative overflow-hidden scroll-mt-28 py-12 md:py-16 px-5 sm:px-6 bg-surface"
      id="anti-peur"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 15% 40%, rgba(255, 31, 113, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 45% 45% at 90% 70%, rgba(212, 255, 0, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 55% 10%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="reveal mb-8 md:mb-10 max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold text-pink mb-2.5 tracking-wide">
            {antiFear.eyebrow}
          </p>
          <SectionHead
            align="center"
            stroke="pink"
            highlight="jamais à faire"
            className="mb-0 !text-[1.7rem] sm:!text-3xl md:!text-[2.35rem] !leading-[1.15]"
          >
            {antiFear.headline}
          </SectionHead>
        </div>

        <ul className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 md:mb-8">
          {antiFear.items.map((item, i) => (
            <li
              key={item}
              className="flex flex-col items-center text-center rounded-[1.25rem] border-2 border-ink bg-bg px-3 sm:px-4 py-5 sm:py-6 shadow-[3px_3px_0_#111]"
            >
              <span
                className="mb-3.5 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-ink bg-surface text-pink shadow-[3px_3px_0_0_var(--lime)]"
                aria-hidden="true"
              >
                {itemIcons[i]}
              </span>
              <span className="text-[0.8rem] sm:text-sm font-bold text-ink leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="reveal rounded-[1.35rem] border-2 border-ink bg-ink text-white px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 shadow-[4px_4px_0_#d4ff00]">
          <div className="min-w-0">
            <p className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight leading-snug">
              {antiFear.punchline}
            </p>
            <p className="mt-2 text-xs sm:text-sm font-medium text-white/65 leading-relaxed max-w-2xl">
              {antiFear.anchor}
            </p>
          </div>
          <Button href="#contact" size="lg" className="w-full sm:w-auto shrink-0">
            {CTA.discovery}
          </Button>
        </div>
      </div>
    </section>
  );
}
