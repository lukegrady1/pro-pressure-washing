// Service-in-town landing pages (e.g. interior painting in Holden). Each entry
// is one page at /[slug]/ with UNIQUE copy — same rules as the service and town
// pages (SITE-SPEC 5.1 / 9.3): no boilerplate reuse, no published prices.
//
// A page here is linked from its parent service page's town list and from the
// town page's service list, so each one has two natural internal links in.

import type { ServiceFaq, ServiceSection } from "@/data/services";

export type ServiceTownPage = {
  slug: string; // top-level URL segment, e.g. "interior-painting-holden-ma"
  serviceSlug: string; // parent service page
  townSlug: string; // parent town page
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  excerpt: string;
  intro: string[];
  sections: ServiceSection[];
  benefits: string[];
  faqs: ServiceFaq[];
};

export const serviceTownPages: ServiceTownPage[] = [
  {
    slug: "interior-painting-holden-ma",
    serviceSlug: "interior-painting-worcester-ma",
    townSlug: "pressure-washing-holden-ma",
    keyword: "interior painting Holden MA",
    title: "Interior Painting Holden MA | Local House Painters",
    metaDescription:
      "Interior painting in Holden, MA from a crew based right in town. Walls, ceilings, trim & doors with careful prep and a clean finish. Call (508) 736-0089.",
    h1: "Interior Painting in Holden, MA",
    kicker: "Holden's Local Interior Painters",
    excerpt:
      "Fresh paint for Holden homes from a crew that lives here — walls, ceilings, trim and doors, prepped properly and left clean when we're done.",
    intro: [
      "Pro Pressure Washing is based on Reservoir Street, so when a Holden homeowner wants a room repainted, the crew that shows up is a neighbor. Our interior painting covers walls, ceilings, trim, doors and closets for homes across town — from Chaffins and Jefferson to Dawson and the streets off Main — with the patching, sanding and masking done properly before any color goes on.",
      "Being in town matters more than it sounds. Scheduling is quick, and if you decide mid-project that the hallway should get done too, we're not driving in from an hour away to add it. For a lot of Holden families we already wash the outside of the house every spring; interior painting means one familiar, insured crew can take care of the inside as well.",
    ],
    sections: [
      {
        h2: "Painting Holden's colonials, capes and ranches",
        body: [
          "Holden's housing is mostly vinyl and clapboard colonials, capes and ranches, and the inside of those homes varies more than the outside. The mature neighborhoods have plaster walls, original wood trim and a few generations of paint in the corners; the newer developments have drywall, taller ceilings and open living areas where the light shows every roller mark. Our interior painting is matched to the house: we skim and sand plaster so old repairs disappear, repair drywall dings and nail pops, and cut clean lines where open floor plans run one wall color into the next.",
        ],
      },
      {
        h2: "Prep that lasts through a New England winter",
        body: [
          "Holden's wooded lots and well-shaded homes stay a little damp, and a bathroom, mudroom or basement that's been painted without the right prep shows it within a season — peeling around the window trim, mildew spots on the ceiling, caulk pulling away from the baseboards. We wash and spot-prime stained or mildewed areas, caulk gaps along trim, prime bare patches, and use mildew-resistant paint in bathrooms and other damp rooms, so the finish holds up instead of needing a redo next year.",
        ],
      },
      {
        h2: "Clean lines, even coats, the right sheen",
        body: [
          "We cut in by hand along ceilings and trim and roll walls in consistent coats so the color lays down evenly, with two full coats wherever the job calls for it. We'll also steer you to the sheen that fits each room: matte for ceilings and formal rooms, eggshell or satin for the living areas, hallways and kids' bedrooms that get wiped down, and semi-gloss on trim, doors, kitchens and baths. Not sure about a color? We'll give you honest advice rather than just painting whatever's on the chip.",
        ],
      },
      {
        h2: "A clean job and a clear price",
        body: [
          "Interior painting means working inside your home, and we treat it that way. We move and cover furniture, protect floors, keep the work contained to the rooms we're painting, and clean up at the end of each day. Most single rooms are finished in a day, and whole-house projects in Holden are scheduled room by room so you can keep living in the house while the work gets done.",
          "Pricing is straightforward. We'll look at the rooms, the condition of the walls and how much trim there is, then give you a clear quote before any work starts — the same honest, no-pressure approach our Holden customers already know from our washing services.",
        ],
      },
    ],
    benefits: [
      "Based in Holden — quick, flexible scheduling",
      "Plaster and drywall repair done before painting",
      "Mildew-resistant paint for baths, mudrooms and basements",
      "Hand-cut lines and two full coats where needed",
      "Furniture and floors protected, rooms cleaned up daily",
    ],
    faqs: [
      {
        q: "Are your painters actually local to Holden?",
        a: "Yes. Pro Pressure Washing is based on Reservoir Street in Holden, so our interior painting crew is working in its own town, usually with a quick turnaround on scheduling.",
      },
      {
        q: "Can you paint over the old plaster walls in my Holden home?",
        a: "Yes. Many of Holden's older colonials and capes have plaster walls with past repairs and hairline cracks. We skim, sand and prime those areas first so the finished wall looks smooth, not patched.",
      },
      {
        q: "How long does it take to paint a bedroom or living room?",
        a: "Usually one day for a typical room, including prep and two coats on the walls. Ceilings, lots of trim or a big color change can add time. We'll give you a realistic schedule with your quote.",
      },
      {
        q: "Can you paint the inside and wash the outside in one project?",
        a: "Absolutely. A lot of Holden customers book interior painting alongside a spring house wash or a fall roof and gutter cleaning so the whole property gets taken care of by one crew.",
      },
      {
        q: "How much does interior painting cost in Holden?",
        a: "It depends on the number of rooms, ceiling height, trim and how much prep the walls need, so we quote each home. Fill out our quick quote form or call (508) 736-0089 for a fast, free quote.",
      },
    ],
  },
  {
    slug: "interior-painting-shrewsbury-ma",
    serviceSlug: "interior-painting-worcester-ma",
    townSlug: "pressure-washing-shrewsbury-ma",
    keyword: "interior painting Shrewsbury MA",
    title: "Interior Painting Shrewsbury MA | Clean, Precise Work",
    metaDescription:
      "Interior painting in Shrewsbury, MA for family homes and custom builds. Walls, ceilings, trim & doors with crisp lines & careful prep. Call (508) 736-0089.",
    h1: "Interior Painting in Shrewsbury, MA",
    kicker: "Interior Painting for Shrewsbury Homes",
    excerpt:
      "Crisp, even interior paint for Shrewsbury's family homes and newer custom builds — from a single room refresh to a full repaint before you list or move in.",
    intro: [
      "Shrewsbury homeowners take real pride in their homes, and that doesn't stop at the front door. Our interior painting gives walls, ceilings, trim, doors and closets a fresh, even finish with the careful prep and crisp lines that a well-kept Shrewsbury home deserves — whether it's a mid-century cape near White City, a colonial off Main Street, or a newer custom home in one of the developments along Route 20.",
      "We're about 20 minutes away in Holden, and Shrewsbury is one of our busiest towns for exterior work. Interior painting lets the same insured, family-owned crew take care of the inside, too, with the same no-pressure quotes and clean, tidy job sites our customers here already expect.",
    ],
    sections: [
      {
        h2: "Painting for listings, move-ins and refreshes",
        body: [
          "Shrewsbury's housing market moves quickly, and much of our interior painting here is tied to a sale: sellers getting walls neutral and clean for listing photos and open houses, and new owners resetting every room before the furniture arrives. A fresh coat is one of the highest-return projects before a listing, and an empty house is the easiest one to paint well. We're used to tight timelines and can turn a whole-house repaint around quickly when a closing date is set.",
        ],
      },
      {
        h2: "Tall foyers, open plans and premium trim",
        body: [
          "The newer custom homes around town come with two-story foyers, open living areas and plenty of crown molding, wainscoting and built-ins. These spaces look stunning when the painting is done right and show every flaw when it isn't. We have the equipment to reach high stairwell and foyer walls safely, cut sharp lines where one open-plan color meets the next, and finish trim and built-ins in a smooth semi-gloss that stands up to daily life.",
        ],
      },
      {
        h2: "Prep that protects the finish",
        body: [
          "Good painting is mostly preparation. We fill nail holes and dings, repair drywall seams and nail pops, sand rough patches smooth, caulk the gaps along trim and prime where it's needed — stained spots, bare patches, or a dramatic color change. Shrewsbury's lakeside and tree-lined streets near Lake Quinsigamond also mean a bit more humidity, so bathrooms, mudrooms and basements get mildew-resistant paint that holds up.",
        ],
      },
      {
        h2: "Honest advice, clean work",
        body: [
          "We use quality, low-odor paints from brands you'd recognize, in the sheen that fits each room, and we'll tell you straight if a color choice is likely to need extra coats or show wear. Furniture gets moved and covered, floors protected, and each room cleaned up and put back together at the end of the day, so you get a freshly painted home rather than a project to clean up after.",
          "Quotes are clear and up front. We'll look at the rooms, ceiling heights and trim, and the condition of the walls, then give you an exact price before any work starts — no surprises on the invoice.",
        ],
      },
    ],
    benefits: [
      "Fast turnarounds for listings and move-ins",
      "Two-story foyers and stairwells reached safely",
      "Crisp lines on open-plan walls and premium trim",
      "Thorough prep: patching, caulking, priming",
      "Furniture and floors protected, daily clean-up",
    ],
    faqs: [
      {
        q: "Can you repaint a whole house before we list it?",
        a: "Yes. Pre-listing repaints are a big part of our Shrewsbury work. We'll help you pick clean, neutral colors that photograph well and schedule the job around your listing date.",
      },
      {
        q: "Can you reach the walls in a two-story foyer or stairwell?",
        a: "Yes. We have the ladders, planks and equipment to paint tall foyer and stairwell walls safely and evenly — a common request in Shrewsbury's newer custom homes.",
      },
      {
        q: "Do you paint trim, crown molding and built-ins?",
        a: "We do. Trim, crown, wainscoting, doors and built-ins are finished in a durable semi-gloss with clean lines against the wall color.",
      },
      {
        q: "How far is Shrewsbury from your base?",
        a: "About 20 minutes southeast of Holden. We're in Shrewsbury most weeks for exterior work, so scheduling interior painting here is easy. Call (508) 736-0089 for current availability.",
      },
      {
        q: "How much does interior painting cost in Shrewsbury?",
        a: "It depends on the number of rooms, ceiling heights, the amount of trim and how much prep the walls need, so we quote every home individually. Fill out our quote form or call (508) 736-0089 for a fast, free quote.",
      },
    ],
  },
];

export function getServiceTownPage(slug: string): ServiceTownPage | undefined {
  return serviceTownPages.find((p) => p.slug === slug);
}

// The dedicated page for a service in a town, if one exists — used by the
// service and town templates to link to the specific page instead of the
// generic one.
export function findServiceTownPage(
  serviceSlug: string,
  townSlug: string,
): ServiceTownPage | undefined {
  return serviceTownPages.find(
    (p) => p.serviceSlug === serviceSlug && p.townSlug === townSlug,
  );
}
