export type Service = {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

// The three core service pages (shown as cards on Home + Services index).
export const servicesList: Service[] = [
  {
    slug: "houses-buildings-roofs",
    href: "/services/houses-buildings-roofs/",
    title: "Houses, Buildings and Roofs",
    shortTitle: "Houses, Buildings & Roofs",
    excerpt:
      "Low-pressure soft washing safely removes mold, mildew and algae from your siding, while our bio-degradable roof treatment clears moss, lichen and black streaks.",
    image: "/images/2020/03/house-buildings-1.jpg",
    imageAlt:
      "Soft washing a house exterior in Worcester County MA — Pro Pressure Washing",
  },
  {
    slug: "fences-and-decks",
    href: "/services/fences-and-decks/",
    title: "Fences and Decks",
    shortTitle: "Fences & Decks",
    excerpt:
      "We clean wood and vinyl fences and decks with non-toxic chemicals and low pressure to remove mold, mildew and algae without damaging the surface.",
    image: "/images/2020/07/Deck-Cleaning-and-Restoration-in-Rutland-MA-Pro-Pressure-Washing.jpg",
    imageAlt:
      "Deck cleaning and restoration in Rutland MA — Pro Pressure Washing",
  },
  {
    slug: "patios-and-walkways",
    href: "/services/patios-and-walkways/",
    title: "Patios and Walkways",
    shortTitle: "Patios & Walkways",
    excerpt:
      "Hot water, high pressure and non-toxic chemicals lift oil, grease, dirt, mold and mildew from concrete, patio pavers and masonry.",
    image:
      "/images/2021/04/Before-After-pressure-washing-cement-walkway-in-Worcester-MA-1024x312.png",
    imageAlt:
      "Before and after pressure washing a cement walkway in Worcester MA — Pro Pressure Washing",
  },
];

export function getService(slug: string): Service | undefined {
  return servicesList.find((s) => s.slug === slug);
}

// Shared "Key Benefits of the Service" block (all 3 service pages).
export const keyBenefits = [
  "Improve your home's curb appeal",
  "Prevent repairs",
  "Protect against harmful substances",
  "Increase home value",
];

// Shared accordion (all 3 service pages).
export const serviceAccordion = [
  {
    q: "Our Qualifications",
    a: "We have several years experience under our belt — we are far from amateurs.",
  },
  {
    q: "Our Capabilities",
    a: "We can handle a large variety of jobs and sizes, just give us a call!",
  },
  {
    q: "Our Commitment",
    a: "We are committed to being the best in the areas we serve — that means the best result, the best service and being on time.",
  },
];
