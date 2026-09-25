import { faqItems } from "@/data/faq";
import { pricingPlans } from "@/data/pricing";
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  FOUNDER_NAME,
  FOUNDER_PHOTO,
} from "@/data/site";
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
            priceRange: "500€-800€+",
            description:
              "Développeuse web indépendante spécialisée dans la création de sites vitrines abordables pour artisans et indépendants (plombiers, boulangers, coiffeurs…). Dès 500 €.",
            areaServed: { "@type": "Country", name: "France" },
            founder: { "@id": `${base}/#person` },
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
          "Ton site web, sans compétences techniques. Sites vitrines dès 500 €.",
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
}: {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
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
        author: {
          "@type": "Person",
          name: FOUNDER_NAME,
          url: `${base}/a-propos`,
        },
        publisher: {
          "@type": "Organization",
          name: BRAND_NAME,
          url: base,
        },
        image: image.startsWith("http") ? image : `${base}${image}`,
        mainEntityOfPage: `${base}/blog/${slug}`,
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
          const isQuote = plan.price === "Devis";
          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: `Forfait ${plan.name}`,
              description: plan.description,
              provider: { "@type": "Person", name: FOUNDER_NAME },
              offers: {
                "@type": "Offer",
                ...(isQuote
                  ? { priceSpecification: { "@type": "PriceSpecification", priceCurrency: "EUR" } }
                  : { price: plan.price, priceCurrency: "EUR" }),
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
