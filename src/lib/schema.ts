import { business, fullAddress } from "@/data/business";
import { faqs } from "@/data/faqs";

const abs = (path: string) =>
  path.startsWith("http") ? path : `${business.siteUrl}${path}`;

// Sitewide LocalBusiness (CleaningService) — rendered once in the root layout.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${business.siteUrl}/#business`,
    name: business.name,
    image: abs(business.ogImage),
    logo: abs(business.logo),
    url: business.siteUrl,
    telephone: business.phone.display,
    email: business.email,
    priceRange: "$$",
    slogan: business.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: business.serviceAreas.map((town) => ({
      "@type": "City",
      name: `${town}, MA`,
    })),
    sameAs: [business.reviewsUrl],
  };
}

// Service schema for a service or town page.
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: { "@id": `${business.siteUrl}/#business` },
    areaServed: opts.areaName
      ? { "@type": "City", name: `${opts.areaName}, MA` }
      : business.serviceAreas.map((t) => ({ "@type": "City", name: `${t}, MA` })),
  };
}

// FAQPage schema from an arbitrary list of {q, a} (service/town pages).
export function faqSchemaFrom(list: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// FAQPage schema built from the shared FAQ data.
export function faqSchema() {
  return faqSchemaFrom(faqs);
}

// BreadcrumbList for interior pages.
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export { abs, fullAddress };
