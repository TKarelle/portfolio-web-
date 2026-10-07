import { faqItems } from "@/data/faq";
import { pricingPlans } from "@/data/pricing";
import {
  BRAND_SAME_AS,
  FOUNDER_CREDENTIAL,
  FOUNDER_SAME_AS,
  KNOWS_ABOUT,
} from "@/data/entities-lod";
import {
  BRAND_LOGO_IMAGE,
  BRAND_NAME,
  CONTACT_EMAIL,
  FOUNDER_DIPLOMA,
  FOUNDER_NAME,
  FOUNDER_PHOTO,
  SITE_META_DESCRIPTION,
} from "@/data/site";
import {
  getVideosForPage,
  iso8601Duration,
  type SiteVideo,
} from "@/data/videos";
import { getBaseUrl } from "@/lib/seo";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** @graph LOD Sem.9 — Organization ↔ Person ↔ ProfessionalService ↔ WebSite */
export function OrganizationJsonLd() {
  const base = getBaseUrl();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${base}/#website`,
            name: BRAND_NAME,
            url: base,
            description: SITE_META_DESCRIPTION,
            inLanguage: "fr-FR",
            publisher: { "@id": `${base}/#organization` },
            about: { "@id": `${base}/#business` },
            author: { "@id": `${base}/#person` },
          },
          {
            "@type": "Organization",
            "@id": `${base}/#organization`,
            name: BRAND_NAME,
            url: base,
            email: CONTACT_EMAIL,
            logo: {
              "@type": "ImageObject",
              url: `${base}${BRAND_LOGO_IMAGE}`,
              width: 512,
              height: 512,
            },
            founder: { "@id": `${base}/#person` },
            knowsAbout: [...KNOWS_ABOUT],
            ...(BRAND_SAME_AS.length > 0 ? { sameAs: [...BRAND_SAME_AS] } : {}),
          },
          {
            "@type": "ProfessionalService",
            "@id": `${base}/#business`,
            name: `${BRAND_NAME} : Création de sites web`,
            url: base,
            image: `${base}${FOUNDER_PHOTO}`,
            email: CONTACT_EMAIL,
            priceRange: "EUR 89-179 per month",
            description: SITE_META_DESCRIPTION,
            areaServed: { "@type": "Country", name: "France" },
            founder: { "@id": `${base}/#person` },
            logo: `${base}${BRAND_LOGO_IMAGE}`,
            parentOrganization: { "@id": `${base}/#organization` },
            knowsAbout: [...KNOWS_ABOUT],
            serviceType: [
              "Création de site web",
              "Abonnement site internet",
              "Maintenance de site web",
            ],
            ...(BRAND_SAME_AS.length > 0 ? { sameAs: [...BRAND_SAME_AS] } : {}),
          },
          {
            "@type": "Person",
            "@id": `${base}/#person`,
            name: FOUNDER_NAME,
            jobTitle: "Développeuse web indépendante",
            description: `${FOUNDER_DIPLOMA}, spécialisée dans les sites des professionnelles de l'accompagnement`,
            image: `${base}${FOUNDER_PHOTO}`,
            email: CONTACT_EMAIL,
            worksFor: { "@id": `${base}/#business` },
            url: `${base}/a-propos`,
            knowsAbout: [...KNOWS_ABOUT],
            hasCredential: { ...FOUNDER_CREDENTIAL },
            ...(FOUNDER_SAME_AS.length > 0
              ? { sameAs: [...FOUNDER_SAME_AS] }
              : {}),
          },
        ],
      }}
    />
  );
}

export function FaqJsonLd({
  items,
}: {
  items?: readonly { question: string; answer: string }[];
}) {
  const source = items ?? faqItems;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: source.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

/** Conservé pour compat imports — le WebSite vit dans OrganizationJsonLd @graph. */
export function WebSiteJsonLd() {
  return null;
}

/** ProfilePage LOD pour /a-propos (E-E-A-T Person). */
export function ProfilePageJsonLd() {
  const base = getBaseUrl();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${base}/a-propos#profile`,
        url: `${base}/a-propos`,
        name: `${FOUNDER_NAME} — À propos`,
        mainEntity: { "@id": `${base}/#person` },
        isPartOf: { "@id": `${base}/#website` },
      }}
    />
  );
}

export function HowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: readonly { name: string; text: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        step: steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.name,
          text: step.text,
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  date,
  image,
  slug,
  dateModified,
}: {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  dateModified?: string;
}) {
  const base = getBaseUrl();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished: date,
        dateModified: dateModified ?? date,
        author: { "@id": `${base}/#person` },
        publisher: { "@id": `${base}/#organization` },
        image: image.startsWith("http") ? image : `${base}${image}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${base}/blog/${slug}`,
          isPartOf: { "@id": `${base}/#website` },
        },
      }}
    />
  );
}

function videoObjectLd(video: SiteVideo, pagePath: string, base: string) {
  return {
    "@type": "VideoObject",
    "@id": `${base}${pagePath}#video-${video.id}`,
    name: video.name,
    description: video.description,
    thumbnailUrl: `${base}${video.thumbnailPath}`,
    contentUrl: `${base}${video.contentPath}`,
    embedUrl: `${base}${pagePath === "/" ? "" : pagePath}`,
    uploadDate: video.uploadDate,
    duration: iso8601Duration(video.durationSeconds),
    inLanguage: "fr-FR",
    isFamilyFriendly: true,
    transcript: video.description,
    publisher: {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: BRAND_NAME,
      url: base,
    },
  };
}

/** VideoObject pour une page (home, projets…). */
export function VideoJsonLd({ pagePath }: { pagePath: string }) {
  const base = getBaseUrl();
  const videos = getVideosForPage(pagePath);
  if (videos.length === 0) return null;

  if (videos.length === 1) {
    return (
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...videoObjectLd(videos[0], pagePath, base),
        }}
      />
    );
  }

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": videos.map((v) => videoObjectLd(v, pagePath, base)),
      }}
    />
  );
}

export function OffersJsonLd() {
  const base = getBaseUrl();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: pricingPlans.map((plan, i) => {
          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: `Modèle ${plan.name}`,
              description: plan.description,
              provider: { "@id": `${base}/#business` },
              offers: {
                "@type": "Offer",
                price: plan.price,
                priceCurrency: "EUR",
                url: `${base}/tarifs`,
                availability: "https://schema.org/InStock",
              },
            },
          };
        }),
      }}
    />
  );
}

/** Service pour pages métier / besoin / comparatif (référence #business, sans réémettre Organization). */
export function ServiceJsonLd({
  name,
  description,
  url,
  price,
}: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) {
  const base = getBaseUrl();
  const path = url.startsWith("http") ? url : `${base}${url}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: path,
        provider: { "@id": `${base}/#business` },
        areaServed: { "@type": "Country", name: "France" },
        ...(price
          ? {
              offers: {
                "@type": "Offer",
                price,
                priceCurrency: "EUR",
                url: `${base}/tarifs`,
                availability: "https://schema.org/InStock",
              },
            }
          : {}),
      }}
    />
  );
}
