import { faqItems } from "@/data/faq";
import { pricingPlans } from "@/data/pricing";
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  FOUNDER_NAME,
  FOUNDER_PHOTO,
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

export function OrganizationJsonLd() {
  const base = getBaseUrl();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfessionalService",
            "@id": `${base}/#business`,
            name: `${BRAND_NAME} : Création de sites web`,
            url: base,
            image: `${base}${FOUNDER_PHOTO}`,
            email: CONTACT_EMAIL,
            priceRange: "89€/mois+",
            description:
              "Création de site web pour femme entrepreneuse dès 89 €/mois. Design sur-mesure, hébergement inclus, livré en 21 jours.",
            areaServed: { "@type": "Country", name: "France" },
            founder: { "@id": `${base}/#person` },
            logo: `${base}/favicon.svg`,
          },
          {
            "@type": "Person",
            "@id": `${base}/#person`,
            name: FOUNDER_NAME,
            jobTitle: "Développeuse web indépendante",
            description: "Diplômée en développement web",
            image: `${base}${FOUNDER_PHOTO}`,
            worksFor: { "@id": `${base}/#business` },
            url: `${base}/a-propos`,
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

export function WebSiteJsonLd() {
  const base = getBaseUrl();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: BRAND_NAME,
        url: base,
        description:
          "Création de site web pour femme entrepreneuse dès 89 €/mois. Design sur-mesure, hébergement inclus, livré en 21 jours.",
        inLanguage: "fr-FR",
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
        author: {
          "@type": "Person",
          name: FOUNDER_NAME,
          url: `${base}/a-propos`,
        },
        publisher: {
          "@type": "Organization",
          name: BRAND_NAME,
          url: base,
          logo: {
            "@type": "ImageObject",
            url: `${base}/favicon.svg`,
          },
        },
        image: image.startsWith("http") ? image : `${base}${image}`,
        mainEntityOfPage: `${base}/blog/${slug}`,
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
    publisher: {
      "@type": "Organization",
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
    return <JsonLd data={{ "@context": "https://schema.org", ...videoObjectLd(videos[0], pagePath, base) }} />;
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
              provider: { "@type": "Person", name: FOUNDER_NAME },
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

/** Service + Organization pour pages métier / besoin / service */
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
        "@graph": [
          {
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
          },
          {
            "@type": "Organization",
            "@id": `${base}/#business`,
            name: BRAND_NAME,
            url: base,
            email: CONTACT_EMAIL,
          },
        ],
      }}
    />
  );
}
