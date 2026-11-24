import { business, fullAddress } from "@/data/business";
import { faqs } from "@/data/faqs";
import { placeSameAs } from "@/data/places";

const abs = (path: string) =>
  path.startsWith("http") ? path : `${business.siteUrl}${path}`;

// A City entity for `areaServed`, linked three ways (Wikipedia, Wikidata,
// Google Knowledge Graph) so search engines resolve the exact town rather than
// matching on the name alone. Towns without IDs fall back to name only.
export function cityRef(townName: string) {
  const sameAs = placeSameAs(townName);
  return {
    "@type": "City",
    name: `${townName}, MA`,
    ...(sameAs ? { sameAs } : {}),
  };
}

// Business description and featured Google reviews, from the Merchynt-generated
// schema (2026-11-24). Rating/count come from `business` so they stay in sync.
const businessDescription =
  "Pro Pressure Washing at 343 Reservoir Street delivers top-rated Pressure Washing Service across Worcester County, MA—Westborough, Northborough, Shrewsbury & beyond. Our “One Call Cleans It All” team specializes in Exterior House Washing, Driveway Pressure Washing, and Concrete Cleaning Service to remove tough stains and restore curb appeal. We also provide Gutter Cleaning Service, Deck Pressure Washing, Patio Pressure Washing, and Window Cleaning Service for homes and commercial properties. Count on professional, reliable results and a five-star customer experience.";

const featuredReviews: { author: string; body: string; rating: number }[] = [
  {
    author: "Janet Lagerman Huehls",
    body: "Chris is professional, reasonable and fast. Highly recommend!",
    rating: 5,
  },
  {
    author: "Joe Desroches",
    body: "I have to say that Chris was a pleasure to work with.very easy to schedule to have my house and fence,deck and front stairs pressure washed. Fair pricing and prompt service thank you Chris for a great Job",
    rating: 5,
  },
  {
    author: "Andrea Cunningham",
    body: "I have used Pro Pressure washing on several occasions.  Chris is responsive and quick to book an appointment.  Always happy with the results and would recommend for your power washing needs.  5 stars from me!",
    rating: 5,
  },
  { author: "Dan Quinlivan", body: "", rating: 5 },
  {
    author: "Elle",
    body: "Chris did a great job with our pool deck! He is honest, responsive, communicative and reliable. Will definitely use his services again!",
    rating: 5,
  },
];

// Sitewide LocalBusiness — rendered once in the root layout. Typed as both a
// CleaningService and a HousePainter now that interior painting is offered.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["CleaningService", "HousePainter"],
    "@id": `${business.siteUrl}/#business`,
    name: business.name,
    description: businessDescription,
    image: abs(business.schemaImage),
    logo: abs(business.logo),
    url: business.siteUrl,
    telephone: business.phone.display,
    email: business.email,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
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
        opens: "07:00",
        closes: "19:00",
      },
    ],
    areaServed: business.serviceAreas.map(cityRef),
    sameAs: [
      business.mapsPlaceUrl,
      "https://www.facebook.com/Clpropressurewashing",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
      bestRating: 5,
    },
    review: featuredReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      ...(r.body ? { reviewBody: r.body } : {}),
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    })),
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
      ? cityRef(opts.areaName)
      : business.serviceAreas.map(cityRef),
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
