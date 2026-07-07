export type Town = {
  slug: string; // full URL path, preserved from WordPress
  name: string;
};

// Town landing pages (identical template, swap the town name).
export const towns: Town[] = [
  { slug: "power-washing-shrewsbury-ma", name: "Shrewsbury" },
  { slug: "power-washing-northborough-ma", name: "Northborough" },
  { slug: "power-washing-westborough-ma", name: "Westborough" },
];

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}

// Services list shown on every town page.
export const townServices = [
  "House Washing",
  "Vinyl Siding Power Washing",
  "Fence Power Washing",
  "Deck Power Washing",
  "Roof Power Washing",
  "Patios & Walkways Pressure Washing",
  "Concrete Pressure Washing for Sidewalks and More",
];

// Four titled image blocks on each town page (generic service imagery reused).
export const townImageBlocks = [
  {
    title: "House Washing",
    image:
      "/images/2021/03/House-Washing-Pressure-Washing-Service-960x320.png",
    alt: "House washing pressure washing service",
  },
  {
    title: "Fence Washing",
    image: "/images/2021/03/Fence-Pressure-Washing-Service-960x320.png",
    alt: "Fence pressure washing service",
  },
  {
    title: "Patios, Walkways & Concrete",
    image:
      "/images/2021/04/Before-After-pressure-washing-cement-walkway-in-Worcester-MA-1024x312.png",
    alt: "Before and after concrete walkway pressure washing",
  },
  {
    title: "Deck Power Washing",
    image:
      "/images/2020/07/Deck-Cleaning-and-Restoration-in-Rutland-MA-Pro-Pressure-Washing.jpg",
    alt: "Deck cleaning and restoration",
  },
];

export function townIntro(town: string): string[] {
  return [
    `Pro Pressure Washing provides exceptional pressure washing services to a wide range of commercial and residential properties in ${town} MA. We use professional pressure washing and soft washing techniques with hot/cold water and eco friendly solutions. We take pride in being able to offer a wide range of services and satisfy all of our clients needs.`,
    `Dust, dirt, grease, mold and mildew can decrease the aesthetic appearance of your home, building, fence or deck. Professional pressure washing will restore your home's exterior to looking like new. Our patio and concrete pressure washing services will clean and restore the original beauty of your cement walkways, pool decks or stairs. We offer a combination of pressure washing and soft washing techniques using hot and cold water and non toxic cleaning solutions.`,
  ];
}
