import type { ServiceFeatureBand as Band } from "@/data/services";
import { FeaturePoints } from "@/components/ui/FeaturePoints";
import { SectionCta } from "@/components/ui/SectionCta";
import {
  IconBadge,
  IconCheck,
  IconHome,
  IconPath,
  IconSearch,
  IconSliders,
  IconSpark,
  IconTag,
} from "@/components/ui/FeatureIcon";
import { emphasizeTitle } from "@/lib/title-emphasis";

const ICONS = {
  search: IconSearch,
  badge: IconBadge,
  spark: IconSpark,
  path: IconPath,
  check: IconCheck,
  sliders: IconSliders,
  home: IconHome,
  tag: IconTag,
} as const;

/**
 * Bande « Soyez… » hubs services — même FeaturePoints que l’accueil.
 */
export function ServiceFeatureBand({ data }: { data: Band }) {
  const columns = data.items.length === 3 ? 3 : 4;
  const showHeading = !data.omitHeading;

  return (
    <FeaturePoints
      glass
      columns={columns}
      eyebrow={showHeading ? data.eyebrow : undefined}
      title={
        showHeading
          ? emphasizeTitle(
              data.title,
              data.titleHighlight,
              data.titleBreakAfter,
            )
          : null
      }
      afterTitle={
        showHeading && data.lede ? (
          <div className="max-w-2xl mx-auto text-center space-y-4">
            {data.lede.split("\n\n").map((para) => (
              <p
                key={para.slice(0, 48)}
                className="text-base md:text-lg font-medium text-muted leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        ) : undefined
      }
      ariaLabel={data.title}
      items={data.items.map((item) => ({
        id: item.id,
        title: item.title,
        text: item.text,
        icon: ICONS[item.icon],
      }))}
      cta={
        data.cta ? (
          <SectionCta
            href={data.cta.href}
            secondaryHref={data.cta.secondaryHref}
            secondaryLabel={data.cta.secondaryLabel}
          >
            {data.cta.label}
          </SectionCta>
        ) : (
          false
        )
      }
    />
  );
}
