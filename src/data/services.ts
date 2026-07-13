// Rich per-page service content (one entry = one page). Drives the /[slug]/
// service template, the Services hub, homepage cards, nav, sitemap and schema.
// Copy is unique per page per SITE-SPEC 9.3 — no boilerplate reuse.

export type ServiceCategory = "residential" | "commercial";

export type ServiceFaq = { q: string; a: string };

export type PricingRow = { label: string; range: string; note?: string };

export type ServiceSection = { h2: string; body: string[] };

export type ServicePage = {
  slug: string; // top-level URL segment, e.g. "house-washing-worcester-ma"
  category: ServiceCategory;
  navLabel: string; // short label for menus / cards
  keyword: string; // primary keyword
  title: string; // <title>, keyword-first, <= ~60 chars
  metaDescription: string; // 140–155 chars, phone + CTA
  h1: string; // single H1, contains keyword
  kicker: string; // hero eyebrow
  excerpt: string; // card / hub blurb
  image: string;
  imageAlt: string;
  intro: string[];
  sections: ServiceSection[];
  benefits: string[];
  pricing: PricingRow[];
  pricingNote: string;
  faqs: ServiceFaq[];
  related: string[]; // related service slugs
};

const PHONE = "(508) 736-0089";

export const residentialServices: ServicePage[] = [
  {
    slug: "house-washing-worcester-ma",
    category: "residential",
    navLabel: "House Washing",
    keyword: "house washing Worcester MA",
    title: "House Washing Worcester MA | Soft Wash Experts",
    metaDescription:
      "Professional house washing in Worcester, MA. Safe low-pressure soft washing removes mold, mildew & algae from siding. Free quote — call (508) 736-0089.",
    h1: "House Washing in Worcester, MA",
    kicker: "Residential Soft Washing",
    excerpt:
      "Low-pressure soft washing that safely strips mold, mildew, algae and pollen from vinyl, aluminum, cedar and Hardie siding — without forcing water behind it.",
    image: "/images/2015/07/AFTER-House-Washing.jpg",
    imageAlt: "Freshly soft-washed house exterior in Worcester County, MA — Pro Pressure Washing",
    intro: [
      "The green and black streaks creeping across your siding aren't just dirt — they're living mold, mildew and algae feeding on the surface. Blasting them with high pressure drives water behind the siding and can etch the finish. Pro Pressure Washing cleans houses across Worcester the right way: a low-pressure soft wash that uses biodegradable cleaning solution to kill the growth at the root, then a gentle rinse.",
      "We soft wash vinyl, aluminum, cedar shingle, clapboard and fiber-cement (Hardie) siding on homes throughout Worcester and the surrounding towns. Every job is fully insured, and we treat your landscaping, windows and trim with the same care we'd give our own home.",
    ],
    sections: [
      {
        h2: "Our soft washing process",
        body: [
          "We start by protecting plants and shrubs, then apply a professional-grade cleaning solution that breaks down mold, mildew, algae and oxidation. After it dwells, we rinse with a soft, low-pressure flow that lifts the grime away instead of driving it into the wall. The result is a siding surface that stays cleaner far longer than a quick pressure-blast, because the organic growth is actually killed rather than just knocked loose.",
        ],
      },
      {
        h2: "What soft washing removes",
        body: [
          "Green algae and black streaks, mildew and mold, spider webs and wasp nests under the eaves, road film, tree pollen and general oxidation. On north-facing walls and shaded Worcester lots — where growth comes back fastest — soft washing is the only method we recommend.",
        ],
      },
    ],
    benefits: [
      "Kills mold and algae at the root for a longer-lasting clean",
      "Safe for vinyl, cedar, aluminum and Hardie siding",
      "No water forced behind siding or into wall cavities",
      "Instantly restores curb appeal and protects your paint",
    ],
    pricing: [
      { label: "Single-story home", range: "$250–$400", note: "typical ranch / cape" },
      { label: "Two-story home", range: "$400–$650", note: "colonial / larger footprint" },
      { label: "Add gutter brightening", range: "from $75" },
    ],
    pricingNote:
      "Every home is different, so we give an exact quote for free after a quick look. TODO(client): confirm current price ranges before publishing.",
    faqs: [
      {
        q: "Will soft washing damage my siding or plants?",
        a: "No. Soft washing uses low pressure and biodegradable solutions. We pre-wet and rinse landscaping so plants are protected, and the low pressure won't crack vinyl or strip paint the way high-pressure blasting can.",
      },
      {
        q: "How long does a house washing last?",
        a: "Because soft washing kills the mold and algae rather than just rinsing it off, most homes stay clean for 1–3 years. Shaded, north-facing and tree-lined lots common in Worcester County may need a refresh sooner.",
      },
      {
        q: "How much does house washing cost in Worcester?",
        a: "Most single-story homes fall around $250–$400 and two-story homes around $400–$650, depending on size and condition. We give a firm, no-obligation quote before we start.",
      },
      {
        q: "Do I need to be home during the service?",
        a: "Not usually. As long as we have access to the exterior and an outdoor water spigot, most house washes are completed while you're at work. Just give us a call at " + PHONE + ".",
      },
    ],
    related: ["roof-cleaning-worcester-ma", "soft-washing-worcester-ma", "gutter-cleaning-worcester-ma"],
  },
  {
    slug: "soft-washing-worcester-ma",
    category: "residential",
    navLabel: "Soft Washing",
    keyword: "soft washing Worcester MA",
    title: "Soft Washing Worcester MA | Safe House Cleaning",
    metaDescription:
      "Soft washing in Worcester, MA — the low-pressure, eco-friendly way to clean siding, roofs & delicate surfaces. Family-owned, insured. Call (508) 736-0089.",
    h1: "Soft Washing in Worcester, MA",
    kicker: "The Gentle, Longer-Lasting Clean",
    excerpt:
      "A low-pressure cleaning method that uses specialized solutions — not brute force — to safely clean siding, roofs, and other surfaces that pressure washing can damage.",
    image: "/images/2021/03/House-Washing-Pressure-Washing-Service-960x320.png",
    imageAlt: "Soft washing a home exterior in Worcester, MA — Pro Pressure Washing",
    intro: [
      "Soft washing is the technique behind almost every safe exterior clean we do. Instead of relying on high pressure — which can gouge wood, crack vinyl, void roof warranties and force water where it shouldn't go — soft washing uses low pressure paired with biodegradable cleaning agents that dissolve mold, algae and grime chemically.",
      "It's the method the manufacturers of asphalt shingles and vinyl siding actually recommend, and it's what Pro Pressure Washing uses on homes across Worcester and Worcester County every day.",
    ],
    sections: [
      {
        h2: "Soft washing vs. pressure washing",
        body: [
          "Pressure washing uses water force to clean hard surfaces like concrete. Soft washing uses solution and a gentle rinse to clean delicate surfaces like siding and roofs. Using high pressure on the wrong surface is the single most common way homeowners damage their own homes — and the most common repair we're called to clean up after. We choose the right method for each surface so you get a deep clean with zero risk.",
        ],
      },
      {
        h2: "Where we use soft washing",
        body: [
          "Vinyl, cedar, aluminum and Hardie siding; asphalt and cedar roofs; screened porches and vinyl fencing; stucco and EIFS; and any painted or coated surface. If a surface can be scratched, faded or forced apart by water pressure, we soft wash it.",
        ],
      },
    ],
    benefits: [
      "Manufacturer-approved for roofs and siding",
      "Eco-friendly, biodegradable cleaning solutions",
      "Kills organic growth so results last far longer",
      "Zero-risk alternative to high-pressure blasting",
    ],
    pricing: [
      { label: "Siding soft wash", range: "$250–$650", note: "by home size" },
      { label: "Roof soft wash", range: "$400–$900", note: "by roof size / pitch" },
    ],
    pricingNote:
      "Pricing depends on surface, size and condition — we quote every job for free. TODO(client): confirm current ranges.",
    faqs: [
      {
        q: "Is soft washing safe for my roof?",
        a: "Yes — it's the only method roofing manufacturers approve. High pressure strips the protective granules off asphalt shingles; soft washing removes the black algae (Gloeocapsa magma) with solution and a gentle rinse, protecting your warranty.",
      },
      {
        q: "What chemicals do you use?",
        a: "Professional, biodegradable cleaning solutions that break down mold, mildew and algae. We pre-wet and rinse surrounding plants and grass so your landscaping is protected.",
      },
      {
        q: "How is soft washing better than pressure washing for my house?",
        a: "It cleans deeper and lasts longer without the risk. Because the solution kills the organic growth instead of just rinsing the surface, your home stays clean months to years longer than a straight pressure rinse.",
      },
    ],
    related: ["house-washing-worcester-ma", "roof-cleaning-worcester-ma", "deck-fence-cleaning-worcester-ma"],
  },
  {
    slug: "roof-cleaning-worcester-ma",
    category: "residential",
    navLabel: "Roof Cleaning",
    keyword: "roof cleaning Worcester MA",
    title: "Roof Cleaning Worcester MA | Black Streak Removal",
    metaDescription:
      "Roof cleaning in Worcester, MA. We safely remove black streaks, moss & algae with soft washing — no shingle damage. Free quote: call (508) 736-0089.",
    h1: "Roof Cleaning in Worcester, MA",
    kicker: "Black Streak & Moss Removal",
    excerpt:
      "Those black streaks are algae eating your shingles. We remove them safely with low-pressure soft washing that protects your roof's warranty and granules.",
    image: "/images/2015/07/Huse-Pressure-Washing-Service-Holden-AFTER.jpg",
    imageAlt: "Home with a freshly cleaned roof in Worcester County, MA — Pro Pressure Washing",
    intro: [
      "The dark streaks running down New England roofs are a blue-green algae called Gloeocapsa magma, and the fuzzy green patches are moss holding moisture against your shingles. Left alone, both shorten the life of your roof. Pro Pressure Washing removes them with a soft-wash treatment that kills the growth without ever putting a pressure washer to your shingles.",
      "High-pressure roof cleaning blasts the protective granules off asphalt shingles and can void your manufacturer's warranty. Our low-pressure, solution-based method is the approach recommended by shingle manufacturers and the ARMA — safe for asphalt, cedar and metal roofs across Worcester County.",
    ],
    sections: [
      {
        h2: "Why roofs streak in New England",
        body: [
          "Our humid summers and shaded, tree-lined lots are ideal for algae and moss. North-facing roof slopes stay damp longest and streak first. Once established, algae spreads across the whole roof and moss works its roots under the shingle edges — which is why treating it early saves you money.",
        ],
      },
      {
        h2: "Our low-pressure roof treatment",
        body: [
          "We apply a professional soft-wash solution that kills algae, moss and lichen, then let it work. The growth releases and continues to wash away with the rain over the following weeks. There's no pounding, no walking damage from aggressive scrubbing, and no risk to your granules or flashing.",
        ],
      },
    ],
    benefits: [
      "Removes black streaks, moss, algae and lichen",
      "Protects your shingle warranty — no high pressure",
      "Extends the life of your roof",
      "Restores curb appeal for sale or refinance",
    ],
    pricing: [
      { label: "Ranch / single-story roof", range: "$400–$600" },
      { label: "Two-story roof", range: "$600–$900", note: "by size / pitch" },
    ],
    pricingNote:
      "Steep pitches and heavy moss add labor — we confirm an exact price for free. TODO(client): confirm ranges.",
    faqs: [
      {
        q: "Will roof cleaning damage my shingles?",
        a: "No. We never put high pressure on a roof. Our soft-wash method uses solution and a gentle rinse, which is what asphalt-shingle manufacturers recommend. It removes the algae and moss without disturbing the granules that protect your roof.",
      },
      {
        q: "How long until the black streaks disappear?",
        a: "Many streaks lift immediately; the rest continue to fade over the following days and weeks as the treated algae dies off and rain rinses it away.",
      },
      {
        q: "Will the algae come back?",
        a: "Our treatment kills the current growth. Depending on shade and tree cover, roofs in Worcester County typically stay clean for several years. We're happy to set up periodic maintenance for heavily shaded homes.",
      },
    ],
    related: ["house-washing-worcester-ma", "soft-washing-worcester-ma", "gutter-cleaning-worcester-ma"],
  },
  {
    slug: "deck-fence-cleaning-worcester-ma",
    category: "residential",
    navLabel: "Deck & Fence Cleaning",
    keyword: "deck cleaning Worcester MA",
    title: "Deck & Fence Cleaning Worcester MA | Pro",
    metaDescription:
      "Deck & fence cleaning in Worcester, MA. Gentle washing removes mold, algae & gray weathering from wood, composite & vinyl. Free quote: (508) 736-0089.",
    h1: "Deck & Fence Cleaning in Worcester, MA",
    kicker: "Wood, Composite & Vinyl",
    excerpt:
      "We bring gray, slippery, algae-covered decks and fences back to life — cleaned at the right pressure for the material, and prepped perfectly for staining.",
    image: "/images/2015/07/pressure-wash-deck-Holden-NEW.jpg",
    imageAlt: "Freshly cleaned wood deck in Holden, MA — Pro Pressure Washing",
    intro: [
      "A deck takes a beating in New England — sun, snow, pollen and the constant damp that turns wood gray and grows a slick film of algae on the boards. Pro Pressure Washing cleans wood, composite and vinyl decks and fences at the correct pressure for each material, lifting off the gray, mildew and grime to reveal the surface underneath.",
      "If you're planning to stain or seal, a proper cleaning is the most important prep step there is — stain won't bond to a dirty or graying board. We clean and prep decks throughout Worcester and the surrounding towns.",
    ],
    sections: [
      {
        h2: "Cleaning matched to the material",
        body: [
          "Softwood decking, pressure-treated pine, cedar, mahogany, composite (Trex and similar) and vinyl fencing each call for a different touch. We use lower pressure and more solution on softer woods to avoid furring and gouging, and we brighten the wood so it looks freshly milled — not blasted.",
        ],
      },
      {
        h2: "Prepping for stain or sealant",
        body: [
          "If you plan to re-stain, we clean and, where needed, brighten the wood to open the grain so the new finish penetrates and lasts. Cleaning is the step most DIY stain jobs skip — and the reason they peel a year later.",
        ],
      },
    ],
    benefits: [
      "Correct pressure for wood, composite or vinyl",
      "Removes gray weathering, mold, algae and mildew",
      "Perfect prep for staining or sealing",
      "Makes decks safer — no more slippery algae film",
    ],
    pricing: [
      { label: "Deck cleaning", range: "$200–$500", note: "by size / condition" },
      { label: "Fence cleaning", range: "$1.50–$3.00 / linear ft" },
    ],
    pricingNote:
      "Heavily grayed wood and brightening add labor — quoted free on site. TODO(client): confirm ranges.",
    faqs: [
      {
        q: "Can you clean a composite (Trex) deck?",
        a: "Yes. Composite decking still grows mold and algae in the grain. We clean it with low pressure and the right solution so we lift the growth without hazing or damaging the surface.",
      },
      {
        q: "Do you stain or seal decks too?",
        a: "We specialize in the cleaning and prep. We can clean and brighten the wood so it's ready for stain — TODO(client): confirm whether staining/sealing is offered in-house or referred out.",
      },
      {
        q: "My deck is gray — can it look new again?",
        a: "Usually, yes. Gray is weathered surface fiber and mildew; cleaning and brightening removes it and restores much of the original wood tone. Very old, rotted boards are the exception and we'll tell you honestly what to expect.",
      },
    ],
    related: ["house-washing-worcester-ma", "driveway-patio-cleaning-worcester-ma", "soft-washing-worcester-ma"],
  },
  {
    slug: "driveway-patio-cleaning-worcester-ma",
    category: "residential",
    navLabel: "Driveway & Patio Cleaning",
    keyword: "driveway cleaning Worcester MA",
    title: "Driveway & Patio Cleaning Worcester MA",
    metaDescription:
      "Driveway, patio & concrete cleaning in Worcester, MA. We lift oil, dirt, moss & stains from concrete, pavers & masonry. Free quote: (508) 736-0089.",
    h1: "Driveway & Patio Cleaning in Worcester, MA",
    kicker: "Concrete, Pavers & Masonry",
    excerpt:
      "Hot water, high pressure and non-toxic solutions lift oil, grease, dirt, moss and mildew out of concrete, patio pavers, walkways and masonry.",
    image: "/images/2015/07/power-washing-concrete-stairs-in-Worcester.jpg",
    imageAlt: "Concrete steps being pressure washed in Worcester, MA — Pro Pressure Washing",
    intro: [
      "Concrete and pavers are the surfaces where real pressure washing shines. Pro Pressure Washing uses commercial hot-water equipment and surface cleaners to strip years of dirt, moss, oil, tire marks and mildew out of driveways, patios, walkways, pool decks and steps — leaving an even, streak-free finish instead of the zebra-striping a wand leaves behind.",
      "We clean poured concrete, stamped concrete, brick and paver patios, bluestone, and masonry across Worcester and Worcester County.",
    ],
    sections: [
      {
        h2: "Surface cleaning done right",
        body: [
          "A flat-surface cleaner spins two nozzles under a shroud to clean concrete evenly and fast, without the wand stripes that DIY jobs leave. For pavers, we clean at a controlled pressure to protect the joints, and we can re-sand joints afterward on request. Hot water dramatically improves results on grease and oil that cold water just spreads around.",
        ],
      },
      {
        h2: "Tough stains we handle",
        body: [
          "Oil and transmission drips, rust, moss and algae in shaded walkways, efflorescence, leaf and berry staining, and the general gray film that builds up on north-facing concrete. Some deep oil stains lighten rather than vanish completely — we'll always tell you honestly what to expect before we start.",
        ],
      },
    ],
    benefits: [
      "Even, stripe-free finish with commercial surface cleaners",
      "Hot water lifts oil and grease cold water can't",
      "Safe for pavers, stamped concrete and masonry",
      "Optional joint re-sanding and sealing",
    ],
    pricing: [
      { label: "Driveway (2-car)", range: "$150–$300" },
      { label: "Patio / walkway", range: "$0.30–$0.60 / sq ft" },
      { label: "Paver re-sanding", range: "quoted on site" },
    ],
    pricingNote:
      "Sealing and heavy oil treatment are add-ons — quoted free. TODO(client): confirm ranges.",
    faqs: [
      {
        q: "Can you remove oil stains from my driveway?",
        a: "In most cases we lighten or remove them. Fresh oil comes up well with hot water and degreaser; older, deeply soaked stains often lighten significantly but may not vanish entirely. We'll set honest expectations before we begin.",
      },
      {
        q: "Will pressure washing damage my pavers?",
        a: "Not when it's done correctly. We use controlled pressure to protect the surface and joints, and we can re-sand the joints afterward so your patio looks and performs like new.",
      },
      {
        q: "Do you seal concrete or pavers after cleaning?",
        a: "We offer sealing as an add-on. Sealing helps concrete and pavers resist stains and slows regrowth of moss and algae. TODO(client): confirm sealing availability and pricing.",
      },
    ],
    related: ["house-washing-worcester-ma", "deck-fence-cleaning-worcester-ma", "gutter-cleaning-worcester-ma"],
  },
  {
    slug: "gutter-cleaning-worcester-ma",
    category: "residential",
    navLabel: "Gutter Cleaning",
    keyword: "gutter cleaning & brightening Worcester",
    title: "Gutter Cleaning & Brightening Worcester MA",
    metaDescription:
      "Gutter cleaning & exterior brightening in Worcester, MA. We clear clogs and remove those black tiger stripes from your gutters. Free quote: (508) 736-0089.",
    h1: "Gutter Cleaning & Brightening in Worcester, MA",
    kicker: "Clear the Clogs, Kill the Stripes",
    excerpt:
      "We clear out clogged gutters so water flows where it should — and brighten the exterior of the gutters to remove those black 'tiger stripe' oxidation stains.",
    image: "/images/2021/03/House-Washing-Pressure-Washing-Service-960x320.png",
    imageAlt: "Home gutters cleaned and brightened in Worcester, MA — Pro Pressure Washing",
    intro: [
      "In New England, gutters fill fast — oak and maple leaves, pine needles, shingle grit and seed pods. Clogged gutters overflow, rot fascia boards, flood basements and grow the black streaks that run down the face of the gutter. Pro Pressure Washing clears the clogs and, with our brightening service, removes those oxidation 'tiger stripes' the whole neighborhood can see.",
      "Gutter cleaning pairs naturally with a house wash or roof cleaning — it's the detail that makes the whole exterior look finished.",
    ],
    sections: [
      {
        h2: "Interior cleaning: clear the flow",
        body: [
          "We remove leaves, needles and debris from the gutter troughs, check that downspouts run free, and bag the debris. Clear gutters protect your fascia, soffits, foundation and basement from water damage — cheap insurance against expensive repairs.",
        ],
      },
      {
        h2: "Exterior brightening: kill the stripes",
        body: [
          "Those black vertical streaks aren't dirt you can rinse off — they're oxidation and pollution bonded to the aluminum. Our gutter-brightening solution dissolves them so the gutter face matches the clean trim again. It's the difference between gutters that look dirty and gutters that look new.",
        ],
      },
      {
        h2: "Gutter guards to stay clean longer",
        body: [
          "Tired of cleaning gutters twice a year? We can install gutter guards that keep leaves, needles and debris out while letting water flow through — a smart upgrade for the pine- and oak-heavy properties common across Worcester County. Ask us whether guards make sense for your home when we come out for a quote.",
        ],
      },
    ],
    benefits: [
      "Prevents overflow, fascia rot and basement flooding",
      "Removes black 'tiger stripe' oxidation stains",
      "Gutter guard installation available to cut future cleanings",
      "Pairs perfectly with a house wash or roof cleaning",
      "Debris bagged and hauled away",
    ],
    pricing: [
      { label: "Gutter cleaning (single-story)", range: "$100–$200" },
      { label: "Gutter cleaning (two-story)", range: "$150–$300" },
      { label: "Exterior brightening", range: "from $75" },
    ],
    pricingNote:
      "Bundled with a house wash for less — quoted free. TODO(client): confirm ranges.",
    faqs: [
      {
        q: "What's the difference between gutter cleaning and gutter brightening?",
        a: "Cleaning clears the debris out of the inside so water flows freely. Brightening removes the black oxidation stripes from the outside face of the gutter. Most homeowners want both for a truly finished look.",
      },
      {
        q: "How often should I have my gutters cleaned?",
        a: "In leaf-heavy Worcester County, twice a year — late spring and late fall — is ideal. Homes surrounded by pines or oaks may need more frequent service.",
      },
      {
        q: "Can you remove the black streaks on my gutters?",
        a: "Yes. Those streaks are oxidation bonded to the aluminum, not loose dirt. Our brightening treatment dissolves them and restores the original finish.",
      },
      {
        q: "Do you install gutter guards?",
        a: "Yes. If you're tired of clearing gutters every season, we can install gutter guards that block leaves and needles while letting water through. We'll tell you honestly whether they make sense for your roof and tree cover. TODO(client): confirm gutter-guard products and pricing.",
      },
    ],
    related: ["house-washing-worcester-ma", "roof-cleaning-worcester-ma", "window-cleaning-worcester-ma"],
  },
  {
    slug: "window-cleaning-worcester-ma",
    category: "residential",
    navLabel: "Window Cleaning",
    keyword: "window cleaning Worcester MA",
    title: "Window Cleaning Worcester MA | Streak-Free Shine",
    metaDescription:
      "Interior & exterior window cleaning in Worcester, MA. Streak-free glass, screens, tracks & skylights for homes and storefronts. Free quote: (508) 736-0089.",
    h1: "Window Cleaning in Worcester, MA",
    kicker: "Interior & Exterior Glass",
    excerpt:
      "Streak-free windows inside and out — glass, screens, tracks and skylights — so your home or storefront lets in all the light it should.",
    image: "/images/2015/07/After-power-washing-house-Leicester-MA-2.jpg",
    imageAlt: "Home with freshly cleaned windows in Worcester, MA — Pro Pressure Washing",
    intro: [
      "Clean windows change how a whole home or storefront feels — more light, a clearer view, and a finished look that a freshly washed house exterior deserves. Pro Pressure Washing cleans windows inside and out across Worcester and the surrounding towns, hand-detailing the glass and frames for a genuinely streak-free result, not a quick spray-and-rinse.",
      "It's the perfect finishing touch after a house wash, and a service homeowners and small businesses schedule on its own each spring and fall.",
    ],
    sections: [
      {
        h2: "Inside and out, streak-free",
        body: [
          "We clean exterior glass, and — when you'd like — interior glass too, along with the frames and sills. Our process removes hard-water spots, pollen, cobwebs and the film that builds up over the seasons, finishing each pane so there are no streaks left in the low afternoon sun.",
        ],
      },
      {
        h2: "Screens, tracks & skylights",
        body: [
          "Windows are more than glass. We wipe down screens, clear out the dirt and dead bugs from the tracks, and reach the high, awkward windows and skylights that homeowners can't safely get to. For roofs with skylights, we clean the glass while we're up there for a roof soft wash.",
        ],
      },
    ],
    benefits: [
      "Streak-free hand-detailed glass, inside and out",
      "Screens, sills and tracks cleaned too",
      "Skylights and hard-to-reach windows handled safely",
      "The perfect finish after a house wash",
    ],
    pricing: [
      { label: "Exterior windows (whole home)", range: "$150–$300", note: "by window count" },
      { label: "Interior + exterior", range: "$250–$450" },
      { label: "Skylights / add-ons", range: "quoted on site" },
    ],
    pricingNote:
      "Price depends on the number and type of windows — we quote every job for free. TODO(client): confirm window-cleaning ranges and whether interior cleaning is offered.",
    faqs: [
      {
        q: "Do you clean the inside of the windows too?",
        a: "Yes — we offer interior and exterior window cleaning. Many homeowners do exterior only in spring and both inside and out for a deeper seasonal clean. Just let us know what you'd like.",
      },
      {
        q: "Can you reach high windows and skylights?",
        a: "Yes. We have the equipment to safely clean high, hard-to-reach windows and skylights, including glass on second and third stories that you can't get to from a ladder.",
      },
      {
        q: "Do you clean windows for storefronts and offices?",
        a: "We do. Clean storefront glass makes a big difference to customers — we clean commercial windows on a one-time or recurring schedule. Call (508) 736-0089 to set it up.",
      },
      {
        q: "Should I get windows cleaned after a house wash?",
        a: "It's the ideal time. A house wash can leave spots on the glass; finishing with a window cleaning gives the whole exterior a truly complete, polished look.",
      },
    ],
    related: ["house-washing-worcester-ma", "gutter-cleaning-worcester-ma", "roof-cleaning-worcester-ma"],
  },
];

export const commercialServices: ServicePage[] = [
  {
    slug: "commercial-pressure-washing",
    category: "commercial",
    navLabel: "Commercial Pressure Washing",
    keyword: "commercial pressure washing Worcester MA",
    title: "Commercial Pressure Washing Worcester MA",
    metaDescription:
      "Commercial pressure washing in Worcester, MA. Storefronts, buildings, lots & sidewalks cleaned on your schedule, fully insured. Free quote: (508) 736-0089.",
    h1: "Commercial Pressure Washing in Worcester, MA",
    kicker: "For Businesses & Property Managers",
    excerpt:
      "Clean, well-kept exteriors bring customers in. We handle storefronts, buildings, sidewalks and lots for businesses across Worcester County — on your schedule.",
    image: "/images/2025/02/Pro-Pressure-Washing-scaled.jpeg",
    imageAlt: "Pro Pressure Washing commercial service truck and equipment in Worcester County, MA",
    intro: [
      "A customer's first impression of your business is the exterior — the sidewalk they walk across, the entrance they walk through, the building they see from the road. Pro Pressure Washing keeps commercial properties across Worcester County looking sharp, with fully insured service scheduled around your hours so we're never in your customers' way.",
      "From a single storefront to a multi-building property, we bring commercial hot-water equipment, the right certificates of insurance, and a crew that shows up when we say we will.",
    ],
    sections: [
      {
        h2: "Commercial properties we service",
        body: [
          "Retail storefronts and plazas, restaurants and their dumpster pads, office buildings, medical and professional offices, industrial and warehouse exteriors, apartment and condo complexes, and municipal facilities. We work early mornings, evenings and weekends so cleaning never interrupts business.",
        ],
      },
      {
        h2: "Insured, scheduled, dependable",
        body: [
          "We carry full liability insurance and provide certificates on request for your property manager or corporate office. Recurring maintenance schedules — monthly, quarterly or seasonal — keep your property consistently clean and your quote consistent too.",
        ],
      },
    ],
    benefits: [
      "Fully insured — COIs provided on request",
      "Scheduled around your business hours",
      "One vendor for storefronts, buildings, lots and walks",
      "Recurring maintenance plans available",
    ],
    pricing: [
      { label: "One-time commercial clean", range: "quoted per site" },
      { label: "Recurring maintenance", range: "discounted contract pricing" },
    ],
    pricingNote:
      "Commercial jobs are quoted per property and scope. Call " + PHONE + " for a walkthrough. TODO(client): confirm commercial rate structure.",
    faqs: [
      {
        q: "Can you work outside our business hours?",
        a: "Yes. We schedule commercial work early mornings, evenings and weekends so there's no disruption to your customers or staff.",
      },
      {
        q: "Are you insured for commercial work?",
        a: "Yes, we carry full liability insurance and will provide a certificate of insurance to your property manager or corporate office on request.",
      },
      {
        q: "Do you offer recurring cleaning contracts?",
        a: "We do. Monthly, quarterly and seasonal maintenance plans keep your property consistently clean at contract pricing. Call us to set up a schedule.",
      },
    ],
    related: ["commercial-building-washing", "storefront-sidewalk-cleaning", "hoa-condo-washing"],
  },
  {
    slug: "commercial-building-washing",
    category: "commercial",
    navLabel: "Building Washing",
    keyword: "building washing Massachusetts",
    title: "Commercial Building Washing | Central MA",
    metaDescription:
      "Commercial building washing across Central MA. Safe soft washing removes dirt, mold & staining from any facade. Insured. Free quote: (508) 736-0089.",
    h1: "Commercial Building Washing in Central MA",
    kicker: "Full-Facade Exterior Cleaning",
    excerpt:
      "From brick and block to metal panel, EIFS and vinyl, we soft wash commercial building exteriors to remove dirt, mold, algae and pollution staining.",
    image: "/images/2025/02/Pro-Pressure-Washing-scaled.jpeg",
    imageAlt: "Commercial building exterior washing in Central MA — Pro Pressure Washing",
    intro: [
      "The exterior of your building takes years of weather, pollution and organic growth. A professional wash removes the dirt, mold, algae and atmospheric staining that make a building look dated and neglected — and does it with methods matched to the facade so nothing gets damaged.",
      "Pro Pressure Washing cleans commercial building exteriors across Worcester County and Central Massachusetts, using soft washing on delicate facades and appropriate pressure on hard masonry.",
    ],
    sections: [
      {
        h2: "Facades we clean",
        body: [
          "Brick and block, painted concrete, metal and composite panel systems, EIFS and stucco, vinyl and Hardie, and mixed-material facades. We match the method to the material — soft washing for anything that can be damaged by pressure, controlled pressure for durable masonry.",
        ],
      },
      {
        h2: "Safe on every surface",
        body: [
          "We survey the facade first, protect windows, entries and landscaping, and use biodegradable solutions. For multi-story exteriors we use the reach and equipment to clean safely from the ground wherever possible.",
        ],
      },
    ],
    benefits: [
      "Soft washing protects delicate facades",
      "Removes pollution staining, mold and algae",
      "Improves tenant and customer impressions",
      "Insured, with COIs on request",
    ],
    pricing: [
      { label: "Building wash", range: "quoted per building" },
      { label: "Multi-building / recurring", range: "contract pricing" },
    ],
    pricingNote:
      "Facade size, height and material set the price — we quote free after a walkthrough. TODO(client): confirm rates.",
    faqs: [
      {
        q: "Can you clean multi-story buildings?",
        a: "Yes. We use soft-wash reach systems and appropriate equipment to clean multi-story exteriors safely, most of it from the ground.",
      },
      {
        q: "Will washing damage our brick or EIFS?",
        a: "No — we match the method to the material. Brick tolerates controlled pressure; EIFS, stucco and panel systems are soft washed with low pressure and solution so the finish is never harmed.",
      },
      {
        q: "How often should a commercial building be washed?",
        a: "Most buildings benefit from an annual wash; shaded or tree-lined properties and food-service sites may want twice a year. We can set up a recurring schedule.",
      },
    ],
    related: ["commercial-pressure-washing", "storefront-sidewalk-cleaning", "hoa-condo-washing"],
  },
  {
    slug: "storefront-sidewalk-cleaning",
    category: "commercial",
    navLabel: "Storefront & Sidewalk Cleaning",
    keyword: "storefront cleaning Worcester",
    title: "Storefront & Sidewalk Cleaning Worcester MA",
    metaDescription:
      "Storefront & sidewalk cleaning in Worcester, MA. Remove gum, grime, grease & stains from entrances and walkways. Insured. Free quote: (508) 736-0089.",
    h1: "Storefront & Sidewalk Cleaning in Worcester, MA",
    kicker: "First Impressions at the Front Door",
    excerpt:
      "Grimy sidewalks, gum spots and greasy entrances turn customers away. We keep your storefront and walkways clean, bright and safe to walk on.",
    image: "/images/2015/07/power-washing-concrete-stairs-in-Worcester.jpg",
    imageAlt: "Storefront sidewalk being pressure washed in Worcester, MA — Pro Pressure Washing",
    intro: [
      "The sidewalk and entrance in front of your business say a lot before a customer ever walks in. Spilled coffee, gum, grease tracked from a kitchen, salt residue and general city grime build up fast on a busy storefront. Pro Pressure Washing keeps entrances and walkways clean and presentable with hot-water surface cleaning that lifts what a broom and hose can't.",
      "We service retail, restaurants, plazas and office entrances across Worcester — before opening, after closing, or on a recurring schedule.",
    ],
    sections: [
      {
        h2: "What we remove",
        body: [
          "Gum, coffee and drink stains, grease and food spills, cigarette residue, salt and ice-melt film, algae in shaded corners, and the gray grime that dulls concrete. Hot water and a flat-surface cleaner leave the walkway evenly clean — no wand stripes.",
        ],
      },
      {
        h2: "Safety and appearance together",
        body: [
          "A clean walkway isn't just about looks — algae and grease make concrete slippery. Regular cleaning reduces slip hazards at your entrance while keeping the storefront inviting.",
        ],
      },
    ],
    benefits: [
      "Removes gum, grease, stains and salt film",
      "Even, stripe-free hot-water surface cleaning",
      "Reduces slip hazards at your entrance",
      "Before-open / after-close scheduling",
    ],
    pricing: [
      { label: "Storefront + sidewalk", range: "quoted per site" },
      { label: "Recurring service", range: "discounted contract pricing" },
    ],
    pricingNote:
      "Frontage size and traffic set the price. TODO(client): confirm rates.",
    faqs: [
      {
        q: "Can you remove gum from the sidewalk?",
        a: "Yes. Hot water combined with our surface cleaner removes gum, grease and stubborn stains that cold water and a broom leave behind.",
      },
      {
        q: "Can you clean before we open?",
        a: "Absolutely. We schedule storefront cleaning before opening or after closing so it never interferes with customers.",
      },
      {
        q: "Do you offer weekly or monthly service?",
        a: "Yes — high-traffic storefronts often go on a weekly or monthly schedule at contract pricing to stay consistently clean.",
      },
    ],
    related: ["commercial-pressure-washing", "commercial-building-washing", "graffiti-removal"],
  },
  {
    slug: "hoa-condo-washing",
    category: "commercial",
    navLabel: "HOA & Condo Washing",
    keyword: "HOA / condo power washing MA",
    title: "HOA & Condo Complex Washing | Worcester County",
    metaDescription:
      "HOA & condo power washing in Worcester County, MA. Buildings, walkways, decks & common areas cleaned on schedule, insured. Free quote: (508) 736-0089.",
    h1: "HOA & Condo Complex Washing in Worcester County",
    kicker: "Community & Association Property",
    excerpt:
      "One insured vendor for the whole community — buildings, walkways, decks, fences and common areas cleaned on a schedule the board can budget around.",
    image: "/images/2025/02/Pro-Pressure-Washing-scaled.jpeg",
    imageAlt: "Condo complex exterior washing in Worcester County, MA — Pro Pressure Washing",
    intro: [
      "Managing a condo association or HOA means keeping dozens of units looking consistent and cared-for, on a budget the board can plan around. Pro Pressure Washing works with property managers and boards across Worcester County to clean building exteriors, unit siding, shared walkways, decks, fences and common areas — with one point of contact and one clear quote.",
      "We're fully insured, we provide certificates of insurance for your management company, and we can phase larger communities so the work fits the budget cycle.",
    ],
    sections: [
      {
        h2: "Whole-community service",
        body: [
          "Unit and building soft washing, breezeways and stairwells, shared walkways and entry sidewalks, community decks and fences, mailbox kiosks and signage. We handle it all under one vendor so the board isn't juggling contractors.",
        ],
      },
      {
        h2: "Built for boards and managers",
        body: [
          "We provide clear written scopes and COIs, schedule around residents with notice, and offer multi-year maintenance plans that keep pricing predictable. Phased proposals let large associations spread the work across seasons or budget years.",
        ],
      },
    ],
    benefits: [
      "One insured vendor for the whole community",
      "COIs and written scopes for your manager",
      "Resident-friendly scheduling with notice",
      "Phased and multi-year plans for budgeting",
    ],
    pricing: [
      { label: "Per-building / per-unit", range: "quoted per community" },
      { label: "Annual maintenance plan", range: "contract pricing" },
    ],
    pricingNote:
      "Community size and scope set pricing — we'll walk the property and quote free. TODO(client): confirm structure.",
    faqs: [
      {
        q: "Do you work with property managers and boards?",
        a: "Yes — most of our HOA and condo work is coordinated with a property manager or board. We provide written scopes, COIs, and a single point of contact for the whole community.",
      },
      {
        q: "Can the work be phased to fit our budget?",
        a: "Definitely. For larger associations we phase the work across buildings or seasons so it fits your budget cycle, with pricing locked in up front.",
      },
      {
        q: "How do you handle resident notice and scheduling?",
        a: "We coordinate with management to notify residents, schedule around access needs, and work efficiently building-by-building to minimize disruption.",
      },
    ],
    related: ["commercial-building-washing", "commercial-pressure-washing", "storefront-sidewalk-cleaning"],
  },
  {
    slug: "fleet-washing",
    category: "commercial",
    navLabel: "Fleet Washing",
    keyword: "fleet washing Massachusetts",
    title: "Fleet Washing Central MA | Pro Pressure Washing",
    metaDescription:
      "Fleet washing across Central MA. Keep trucks, vans & equipment clean and professional with on-site service, fully insured. Free quote: (508) 736-0089.",
    h1: "Fleet Washing in Central MA",
    kicker: "Trucks, Vans & Equipment",
    excerpt:
      "A clean fleet is rolling advertising. We wash trucks, vans, trailers and equipment on-site so your vehicles look professional and your branding stays sharp.",
    image: "/images/2025/02/Pro-Pressure-Washing-scaled.jpeg",
    imageAlt: "Fleet vehicle washing in Central MA — Pro Pressure Washing",
    intro: [
      "Every vehicle in your fleet is a billboard for your business — and a dirty, road-salted truck sends the wrong message. Pro Pressure Washing offers on-site fleet washing across Central Massachusetts so your trucks, vans, trailers and equipment stay clean and professional without your drivers losing time at a wash bay.",
      "We come to your yard on a schedule that fits your operation — weekly, biweekly or monthly — and keep your branding looking crisp year-round.",
    ],
    sections: [
      {
        h2: "On-site, on your schedule",
        body: [
          "We bring the water and equipment to your lot and wash the fleet where it parks, before or after shifts. Recurring schedules keep every vehicle consistently clean and your per-vehicle cost predictable.",
        ],
      },
      {
        h2: "Vehicles and equipment we wash",
        body: [
          "Box trucks and vans, pickups, trailers, dump bodies, landscaping and construction equipment, and more. We remove road salt, mud, brake dust and grime that corrode vehicles and hide your logos.",
        ],
      },
      {
        h2: "Heavy equipment cleaning",
        body: [
          "Beyond road vehicles, we clean heavy construction and landscaping equipment — excavators, loaders, skid steers, mowers and attachments. Caked-on mud, clay and grease don't just look bad; they hide leaks and wear and accelerate corrosion. Regular washing keeps your equipment inspection-ready and extends its service life.",
        ],
      },
    ],
    benefits: [
      "On-site service — no lost driver time",
      "Removes corrosive road salt and grime",
      "Heavy construction & landscaping equipment cleaned too",
      "Keeps branding and logos looking sharp",
      "Weekly, biweekly or monthly schedules",
    ],
    pricing: [
      { label: "Per-vehicle (recurring)", range: "quoted per fleet" },
      { label: "One-time fleet wash", range: "quoted per site" },
    ],
    pricingNote:
      "Per-vehicle pricing drops with fleet size and frequency. TODO(client): confirm fleet rates and whether this service is currently offered.",
    faqs: [
      {
        q: "Do you come to our location?",
        a: "Yes — fleet washing is done on-site at your yard or lot, before or after shifts, so your vehicles and drivers stay productive.",
      },
      {
        q: "Can you handle road salt in the winter?",
        a: "Yes. Regular washing through the winter removes corrosive road salt and brine that eat at vehicle bodies and undercarriages.",
      },
      {
        q: "How often should we wash our fleet?",
        a: "Most fleets go weekly or biweekly to stay presentable and protect the vehicles. We'll recommend a schedule based on your routes and usage.",
      },
      {
        q: "Do you clean heavy construction equipment?",
        a: "Yes. Along with trucks and vans, we clean heavy construction and landscaping equipment — excavators, loaders, skid steers and mowers — removing caked mud and grease to keep them inspection-ready and protected from corrosion.",
      },
    ],
    related: ["commercial-pressure-washing", "commercial-building-washing", "storefront-sidewalk-cleaning"],
  },
  {
    slug: "graffiti-removal",
    category: "commercial",
    navLabel: "Graffiti Removal",
    keyword: "graffiti removal Worcester MA",
    title: "Graffiti Removal Worcester MA | Fast Response",
    metaDescription:
      "Fast graffiti removal in Worcester, MA. We remove tags from brick, concrete, metal & storefronts before they spread. Insured. Call (508) 736-0089.",
    h1: "Graffiti Removal in Worcester, MA",
    kicker: "Fast, Clean Tag Removal",
    excerpt:
      "Graffiti attracts more graffiti — the faster it's gone, the better. We remove tags from brick, concrete, metal and storefronts quickly and cleanly.",
    image: "/images/2015/07/power-washing-graffiti-removal-in-Worcester.jpg",
    imageAlt: "Graffiti being removed from a wall in Worcester, MA — Pro Pressure Washing",
    intro: [
      "Graffiti is a magnet for more graffiti, so speed matters — the faster a tag comes down, the less likely it is to come back. Pro Pressure Washing removes graffiti from commercial and municipal surfaces across Worcester using hot water, specialized removers and the right technique for each surface, so the wall is clean without being damaged.",
      "We help businesses, property managers and municipalities keep buildings, retaining walls, dumpster enclosures and utility surfaces tag-free.",
    ],
    sections: [
      {
        h2: "Surfaces we clean",
        body: [
          "Brick and block, concrete and retaining walls, metal doors and dumpster enclosures, painted surfaces and storefronts. Porous surfaces like brick take more work; we use hot water and surface-appropriate removers to lift the paint out of the pores rather than just smearing it.",
        ],
      },
      {
        h2: "Fast response matters",
        body: [
          "Quick removal discourages repeat tagging and keeps your property looking cared-for. For businesses that see recurring graffiti, we offer priority response so tags are gone before they multiply.",
        ],
      },
    ],
    benefits: [
      "Fast response before tags spread",
      "Safe for brick, concrete, metal and storefronts",
      "Hot water lifts paint out of porous surfaces",
      "Priority service for repeat-target properties",
    ],
    pricing: [
      { label: "Graffiti removal", range: "quoted per job" },
      { label: "Priority / recurring", range: "contract pricing" },
    ],
    pricingNote:
      "Surface type and tag size set the price — call " + PHONE + " for fast turnaround. TODO(client): confirm rates.",
    faqs: [
      {
        q: "How fast can you remove graffiti?",
        a: "We prioritize graffiti jobs because fast removal discourages repeat tagging. Call us and we'll get out as quickly as possible — often same or next day for local commercial clients.",
      },
      {
        q: "Can you remove graffiti from brick?",
        a: "Yes. Brick is porous, so it takes more work, but hot water and the right removers lift the paint out of the pores instead of smearing it deeper.",
      },
      {
        q: "Do you offer recurring graffiti service?",
        a: "For properties that are repeat targets, we offer priority and recurring service so tags are removed quickly every time.",
      },
    ],
    related: ["storefront-sidewalk-cleaning", "commercial-pressure-washing", "commercial-building-washing"],
  },
];

export const allServices: ServicePage[] = [
  ...residentialServices,
  ...commercialServices,
];

export function getServicePage(slug: string): ServicePage | undefined {
  return allServices.find((s) => s.slug === slug);
}

export const serviceSlugs = allServices.map((s) => s.slug);
