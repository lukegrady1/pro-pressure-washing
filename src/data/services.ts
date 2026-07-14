// Rich per-page service content (one entry = one page). Drives the /[slug]/
// service template, the Services hub, homepage cards, nav, sitemap and schema.
// Copy is unique per page per SITE-SPEC 9.3 — no boilerplate reuse.
//
// Pricing: we do NOT publish prices. Anything price-related routes to the quote
// CTA ("fill out the form or call for a fast, free quote").

export type ServiceCategory = "residential" | "commercial";

export type ServiceFaq = { q: string; a: string };

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
  faqs: ServiceFaq[];
  related: string[]; // related service slugs
};

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
    image: "/images/2015/07/AFTER-House-Washing.webp",
    imageAlt: "Freshly soft-washed house exterior in Worcester County, MA — Pro Pressure Washing",
    intro: [
      "The green and black streaks creeping across your siding aren't just dirt — they're living mold, mildew and algae feeding on the surface. Blasting them with high pressure drives water behind the siding and can etch the finish. Pro Pressure Washing does house washing across Worcester the right way: a low-pressure soft wash that uses biodegradable cleaning solution to kill the growth at the root, then a gentle rinse that leaves your home genuinely clean.",
      "We soft wash vinyl, aluminum, cedar shingle, clapboard and fiber-cement (Hardie) siding on homes throughout Worcester and the surrounding towns. Every job is fully insured, and we treat your landscaping, windows and trim with the same care we'd give our own home.",
    ],
    sections: [
      {
        h2: "Our house washing process, step by step",
        body: [
          "First we walk the property and note problem areas — north-facing walls, shaded corners, wasp nests and stubborn staining. We pre-wet and protect nearby plants, shrubs and grass so nothing gets stressed by the cleaning solution.",
          "Next we apply a professional-grade, biodegradable solution that breaks down mold, mildew, algae and oxidation. We let it dwell so it actually kills the growth, then rinse with a soft, low-pressure flow that lifts the grime away instead of driving it into the wall. Because the organic growth is killed rather than just knocked loose, a proper house washing stays clean far longer than a quick pressure-blast.",
        ],
      },
      {
        h2: "What soft washing removes from your siding",
        body: [
          "Green algae and black streaks, mildew and mold, spider webs and wasp nests under the eaves, road film, tree pollen, and the chalky oxidation that dulls older vinyl. On the shaded, tree-lined lots that are so common in Worcester County — where growth comes back fastest — soft washing is the only method we recommend, because high pressure on the wrong surface causes more harm than good.",
        ],
      },
      {
        h2: "Safe for every siding type in New England",
        body: [
          "Vinyl can crack and warp under high pressure; cedar shingle furs and gouges; older clapboard lets water in behind the boards; and Hardie board has a factory finish you don't want to strip. Our house washing uses the low pressure and correct solution for each of these materials, so you get a deep, even clean with zero risk to the siding, the paint or the seals around your windows and doors.",
        ],
      },
    ],
    benefits: [
      "Kills mold and algae at the root for a longer-lasting clean",
      "Safe for vinyl, cedar, aluminum and Hardie siding",
      "No water forced behind siding or into wall cavities",
      "Instantly restores curb appeal and protects your paint",
      "Fully insured, eco-friendly, and gentle on landscaping",
    ],
    faqs: [
      {
        q: "Will soft washing damage my siding or plants?",
        a: "No. Soft washing uses low pressure and biodegradable solutions. We pre-wet and rinse landscaping so plants are protected, and the low pressure won't crack vinyl or strip paint the way high-pressure blasting can.",
      },
      {
        q: "How long does a house washing last?",
        a: "Because soft washing kills the mold and algae rather than just rinsing it off, most homes stay clean for one to three years. Shaded, north-facing and tree-lined lots common in Worcester County may need a refresh sooner.",
      },
      {
        q: "How much does house washing cost in Worcester?",
        a: "Every home is different — size, height, siding type and how much growth there is all matter — so we give you an exact price up front, not a vague range. Fill out our quick quote form or call (508) 736-0089 for a fast, free quote.",
      },
      {
        q: "Do I need to be home during the service?",
        a: "Not usually. As long as we have access to the exterior and an outdoor water spigot, most house washes are completed while you're at work. Just let us know how to reach you.",
      },
      {
        q: "How often should I have my house washed?",
        a: "Most Worcester County homes benefit from a house washing every one to two years. Homes with heavy tree cover, a lot of shade or a north-facing wall that greens up quickly may want a yearly wash to stay ahead of it.",
      },
    ],
    related: ["roof-cleaning-worcester-ma", "soft-washing-worcester-ma", "window-cleaning-worcester-ma"],
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
    image: "/images/2021/03/House-Washing-Pressure-Washing-Service-960x320.webp",
    imageAlt: "Soft washing a home exterior in Worcester, MA — Pro Pressure Washing",
    intro: [
      "Soft washing is the technique behind almost every safe exterior clean we do. Instead of relying on high pressure — which can gouge wood, crack vinyl, void roof warranties and force water where it shouldn't go — soft washing uses low pressure paired with biodegradable cleaning agents that dissolve mold, algae and grime chemically.",
      "It's the method the manufacturers of asphalt shingles and vinyl siding actually recommend, and it's what Pro Pressure Washing uses on homes across Worcester and Worcester County every day. If a surface can be scratched, faded or forced apart by water pressure, soft washing is the answer.",
    ],
    sections: [
      {
        h2: "Soft washing vs. pressure washing",
        body: [
          "Pressure washing uses water force to clean hard surfaces like concrete and pavers. Soft washing uses cleaning solution and a gentle rinse to clean delicate surfaces like siding and roofs. Using high pressure on the wrong surface is the single most common way homeowners damage their own homes — cracked vinyl, stripped stain, water behind the boards — and it's the most common repair we're called in to clean up after.",
          "The other big difference is how long it lasts. A pressure rinse just knocks the surface grime off, so it grows back quickly. Soft washing kills the mold, mildew and algae at the root, so the clean holds for months to years longer.",
        ],
      },
      {
        h2: "Where we use soft washing",
        body: [
          "Vinyl, cedar, aluminum and Hardie siding; asphalt and cedar roofs; screened porches and vinyl fencing; stucco and EIFS; awnings, soffits and eaves; and any painted or coated surface. On the shaded, humid lots throughout Worcester County, these surfaces green up fast, and soft washing is the safe way to bring them back.",
        ],
      },
      {
        h2: "Eco-friendly and safe around your home",
        body: [
          "Our soft washing solutions are biodegradable and, applied correctly, safe for your family, pets and plantings. We pre-wet and rinse landscaping before and after, control our application so there's no overspray drift, and never send high-pressure water toward windows, light fixtures or vents. The result is a thorough clean that's gentle on your property and the environment.",
        ],
      },
    ],
    benefits: [
      "Manufacturer-approved for roofs and siding",
      "Eco-friendly, biodegradable cleaning solutions",
      "Kills organic growth so results last far longer",
      "Zero-risk alternative to high-pressure blasting",
      "Safe around kids, pets, plants and well water",
    ],
    faqs: [
      {
        q: "Is soft washing safe for my roof?",
        a: "Yes — it's the only method roofing manufacturers approve. High pressure strips the protective granules off asphalt shingles; soft washing removes the black algae (Gloeocapsa magma) with solution and a gentle rinse, protecting your warranty.",
      },
      {
        q: "What chemicals do you use for soft washing?",
        a: "Professional, biodegradable cleaning solutions that break down mold, mildew and algae. We pre-wet and rinse surrounding plants and grass so your landscaping is protected throughout the job.",
      },
      {
        q: "How is soft washing better than pressure washing for my house?",
        a: "It cleans deeper and lasts longer without the risk. Because the solution kills the organic growth instead of just rinsing the surface, your home stays clean months to years longer than a straight pressure rinse — with no cracked vinyl or stripped paint.",
      },
      {
        q: "Is there a best time of year for soft washing?",
        a: "Soft washing works spring through fall in our climate, and we work as long as temperatures allow. Late spring clears winter grime and pollen; early fall removes the summer's mildew before the cold sets in. We'll help you pick the right time for your home.",
      },
      {
        q: "How much does soft washing cost?",
        a: "It depends on the surface, size and how much buildup there is, so we don't quote a blanket price. Fill out our quick quote form or call (508) 736-0089 and we'll give you a fast, free, exact quote.",
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
    image: "/images/2015/07/Huse-Pressure-Washing-Service-Holden-AFTER.webp",
    imageAlt: "Home with a freshly cleaned roof in Worcester County, MA — Pro Pressure Washing",
    intro: [
      "The dark streaks running down New England roofs are a blue-green algae called Gloeocapsa magma, and the fuzzy green patches are moss holding moisture against your shingles. Left alone, both shorten the life of your roof. Our roof cleaning removes them with a soft-wash treatment that kills the growth without ever putting a pressure washer to your shingles.",
      "High-pressure roof cleaning blasts the protective granules off asphalt shingles and can void your manufacturer's warranty. Our low-pressure, solution-based method is the approach recommended by shingle manufacturers and the ARMA — safe for asphalt, cedar and metal roofs across Worcester County.",
    ],
    sections: [
      {
        h2: "Why roofs streak and grow moss in New England",
        body: [
          "Our humid summers and shaded, tree-lined lots are ideal for algae and moss. North-facing roof slopes stay damp the longest and streak first. Once algae is established it spreads across the whole roof, and moss works its roots under the shingle edges, lifting them and letting water in.",
          "That's why treating it early is worth it: roof cleaning while the growth is young is far cheaper than replacing shingles that moss has pried loose. It also keeps your home looking cared-for, which matters a lot if you're selling or refinancing.",
        ],
      },
      {
        h2: "Our low-pressure roof cleaning treatment",
        body: [
          "We apply a professional soft-wash solution that kills algae, moss and lichen, then let it do the work. The growth releases and continues to wash away with the rain over the following weeks. There's no pounding, no aggressive scrubbing, and no high-pressure water anywhere near your granules, flashing or vents — just a safe, thorough roof cleaning that protects the roof you paid for.",
        ],
      },
      {
        h2: "Protecting your warranty and your investment",
        body: [
          "A roof is one of the most expensive parts of your home, and the wrong cleaning can cost you the warranty. We follow the manufacturer-approved soft-wash method, work safely from ladders and the ground wherever possible, and never walk a roof more than necessary. You get the black streaks and moss gone without any of the risk that comes from a high-pressure roof cleaning.",
        ],
      },
    ],
    benefits: [
      "Removes black streaks, moss, algae and lichen",
      "Protects your shingle warranty — no high pressure",
      "Extends the life of your roof",
      "Restores curb appeal for sale or refinance",
      "Safe for asphalt, cedar and metal roofs",
    ],
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
        q: "Will the algae and moss come back?",
        a: "Our treatment kills the current growth. Depending on shade and tree cover, roofs in Worcester County typically stay clean for several years. We're happy to set up periodic maintenance for heavily shaded homes.",
      },
      {
        q: "Do you have to walk on my roof to clean it?",
        a: "We minimize time on the roof. Our soft-wash method lets us treat most roofs from ladders, the edge and the ground, so we're not putting foot traffic and weight across your shingles the way a scrub-and-blast approach would.",
      },
      {
        q: "How much does roof cleaning cost?",
        a: "It depends on the size and pitch of your roof and how much moss and algae there is, so we quote each roof individually. Fill out our quick quote form or call (508) 736-0089 for a fast, free quote.",
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
    image: "/images/2015/07/pressure-wash-deck-Holden-NEW.webp",
    imageAlt: "Freshly cleaned wood deck in Holden, MA — Pro Pressure Washing",
    intro: [
      "A deck takes a beating in New England — sun, snow, pollen and the constant damp that turns wood gray and grows a slick film of algae on the boards. Our deck cleaning brings wood, composite and vinyl decks and fences back to life, lifting off the gray, mildew and grime at the correct pressure for each material to reveal the surface underneath.",
      "If you're planning to stain or seal, a proper deck cleaning is the most important prep step there is — stain simply won't bond to a dirty or graying board. We clean and prep decks and fences throughout Worcester and the surrounding towns.",
    ],
    sections: [
      {
        h2: "Deck cleaning matched to the material",
        body: [
          "Softwood decking, pressure-treated pine, cedar, mahogany, composite (Trex and similar) and vinyl fencing each call for a different touch. We use lower pressure and more solution on softer woods to avoid furring and gouging, and we brighten the wood so it looks freshly milled rather than blasted.",
          "Composite and vinyl still grow mold and algae in the texture and grain, and they clean up beautifully with low pressure and the right solution — no hazing, no damage, just the color back the way it looked when it was new.",
        ],
      },
      {
        h2: "Prepping a deck for stain or sealant",
        body: [
          "If you plan to re-stain, we clean and, where needed, brighten the wood to open the grain so the new finish penetrates and lasts. Deck cleaning is the step most DIY stain jobs skip — and it's the reason so many of them peel within a year. Getting the surface truly clean and neutralized first is what makes a stain job hold.",
        ],
      },
      {
        h2: "Cleaning fences and railings, too",
        body: [
          "Wood and vinyl fences pick up the same green algae and gray weathering as decks, especially along the shaded, ground-level bottom rails. We clean fence lines, railings, lattice and gates so the whole yard looks cared-for — a natural add-on when we're already cleaning your deck.",
        ],
      },
    ],
    benefits: [
      "Correct pressure for wood, composite or vinyl",
      "Removes gray weathering, mold, algae and mildew",
      "Perfect prep for staining or sealing",
      "Makes decks safer — no more slippery algae film",
      "Fences, railings and gates cleaned too",
    ],
    faqs: [
      {
        q: "Can you clean a composite (Trex) deck?",
        a: "Yes. Composite decking still grows mold and algae in the grain. We clean it with low pressure and the right solution so we lift the growth without hazing or damaging the surface.",
      },
      {
        q: "Do you stain or seal decks too?",
        a: "We specialize in the cleaning and prep, and can clean and brighten the wood so it's ready for stain. TODO(client): confirm whether staining/sealing is offered in-house or referred out.",
      },
      {
        q: "My deck is gray — can it look new again?",
        a: "Usually, yes. Gray is weathered surface fiber and mildew; deck cleaning and brightening removes it and restores much of the original wood tone. Very old, rotted boards are the exception, and we'll tell you honestly what to expect.",
      },
      {
        q: "How long after cleaning before I can stain the deck?",
        a: "Generally you'll want to let the wood dry for at least one to two dry days after cleaning before staining or sealing, though it depends on the weather and the wood. We'll let you know what to expect for your specific deck so the finish bonds properly.",
      },
      {
        q: "How much does deck cleaning cost?",
        a: "It depends on the size and condition of the deck or fence and whether you're prepping for stain, so we quote each one. Fill out our quick quote form or call (508) 736-0089 for a fast, free quote.",
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
    image: "/images/2015/07/power-washing-concrete-stairs-in-Worcester.webp",
    imageAlt: "Concrete steps being pressure washed in Worcester, MA — Pro Pressure Washing",
    intro: [
      "Concrete and pavers are the surfaces where real pressure washing shines. Our driveway cleaning uses commercial hot-water equipment and surface cleaners to strip years of dirt, moss, oil, tire marks and mildew out of driveways, patios, walkways, pool decks and steps — leaving an even, streak-free finish instead of the zebra-striping a wand leaves behind.",
      "We clean poured concrete, stamped concrete, brick and paver patios, bluestone, and masonry across Worcester and Worcester County, matching the pressure and technique to the surface so it comes clean without getting damaged.",
    ],
    sections: [
      {
        h2: "Surface cleaning done right",
        body: [
          "A flat-surface cleaner spins two nozzles under a shroud to clean concrete evenly and fast, without the wand stripes that DIY jobs leave behind. For pavers, we clean at a controlled pressure to protect the surface and the joints, and we can re-sand the joints afterward on request so the patio looks and performs like new.",
          "Hot water is the difference-maker for driveway cleaning. Cold water spreads grease and oil around; hot water and a degreaser actually lift them out of the concrete, which is why our results on stained driveways hold up so much better.",
        ],
      },
      {
        h2: "Tough stains we handle",
        body: [
          "Oil and transmission drips, rust, moss and algae in shaded walkways, efflorescence, leaf and berry staining, and the general gray film that builds up on north-facing concrete. Some deep, older oil stains lighten significantly rather than vanish completely — we'll always tell you honestly what to expect before we start, so there are no surprises.",
        ],
      },
      {
        h2: "Pool decks, steps and walkways",
        body: [
          "Concrete around pools, front steps, and long walkways get slippery as algae builds up in the shade — a safety issue as much as an appearance one. Our concrete and paver cleaning clears that film away, restores traction, and makes the whole approach to your home look sharp. It's a fast, high-impact upgrade to your curb appeal.",
        ],
      },
    ],
    benefits: [
      "Even, stripe-free finish with commercial surface cleaners",
      "Hot water lifts oil and grease cold water can't",
      "Safe for pavers, stamped concrete and masonry",
      "Reduces slippery algae on steps and pool decks",
      "Optional joint re-sanding on paver patios",
    ],
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
        a: "We offer sealing as an add-on. Sealing helps concrete and pavers resist stains and slows the regrowth of moss and algae. TODO(client): confirm sealing availability.",
      },
      {
        q: "How often should I have my driveway or patio cleaned?",
        a: "Most homeowners in our area do it every one to two years to stay ahead of moss, algae and stains. Shaded, north-facing concrete and heavily used patios or pool decks may benefit from a yearly cleaning to keep them safe and looking sharp. If you're already having the house washed, adding the driveway or patio to the same visit is an easy way to reset the whole property at once.",
      },
      {
        q: "How much does driveway or patio cleaning cost?",
        a: "It depends on the square footage, the surface and how much staining there is, so we price each job individually. Fill out our quick quote form or call (508) 736-0089 for a fast, free quote.",
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
    image: "/images/2021/03/House-Washing-Pressure-Washing-Service-960x320.webp",
    imageAlt: "Home gutters cleaned and brightened in Worcester, MA — Pro Pressure Washing",
    intro: [
      "In New England, gutters fill fast — oak and maple leaves, pine needles, shingle grit and seed pods. Clogged gutters overflow, rot fascia boards, flood basements and grow the black streaks that run down the face of the gutter. Our gutter cleaning clears the clogs, and our brightening service removes those oxidation 'tiger stripes' the whole neighborhood can see.",
      "Gutter cleaning pairs naturally with a house wash or roof cleaning — it's the detail that makes the whole exterior look finished, and it protects the structure of your home at the same time.",
    ],
    sections: [
      {
        h2: "Interior cleaning: clear the flow",
        body: [
          "We remove leaves, needles and debris from the gutter troughs by hand, check that the downspouts run free, flush them out, and bag the debris to haul away. Clear gutters protect your fascia, soffits, foundation and basement from water damage — cheap insurance against expensive repairs, especially heading into a New England winter of freeze-thaw and ice dams.",
        ],
      },
      {
        h2: "Exterior brightening: kill the black stripes",
        body: [
          "Those black vertical streaks aren't dirt you can rinse off — they're oxidation and pollution bonded to the aluminum. Our gutter-brightening solution dissolves them so the gutter face matches the clean trim again. It's the difference between gutters that look dirty and gutters that look new, and it's what most homeowners don't realize can even be fixed.",
        ],
      },
      {
        h2: "Gutter guards to stay clean longer",
        body: [
          "Tired of cleaning gutters twice a year? We can install gutter guards that keep leaves, needles and debris out while letting water flow through — a smart upgrade for the pine- and oak-heavy properties common across Worcester County. Ask us whether guards make sense for your roof and tree cover when we come out.",
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
    faqs: [
      {
        q: "What's the difference between gutter cleaning and gutter brightening?",
        a: "Cleaning clears the debris out of the inside so water flows freely. Brightening removes the black oxidation stripes from the outside face of the gutter. Most homeowners want both for a truly finished look.",
      },
      {
        q: "How often should I have my gutters cleaned?",
        a: "In leaf-heavy Worcester County, twice a year — late spring and late fall — is ideal. Homes surrounded by pines or oaks may need more frequent gutter cleaning to stay ahead of the debris.",
      },
      {
        q: "Do you install gutter guards?",
        a: "Yes. If you're tired of clearing gutters every season, we can install gutter guards that block leaves and needles while letting water through, and we'll tell you honestly whether they make sense for your roof. TODO(client): confirm gutter-guard products.",
      },
      {
        q: "Can clogged gutters really cause that much damage?",
        a: "Yes. Overflowing gutters rot fascia and soffits, send water down foundation walls into basements, and in winter feed ice dams that push water up under your shingles. By the time you see interior water stains or peeling paint, the hidden damage is often well underway. Keeping the gutters clear is one of the cheapest ways to prevent some genuinely expensive repairs down the road.",
      },
      {
        q: "How much does gutter cleaning cost?",
        a: "It depends on the size of your home, the number of stories and whether you want brightening or guards, so we quote each one. Fill out our quick quote form or call (508) 736-0089 for a fast, free quote.",
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
    image: "/images/2015/07/After-power-washing-house-Leicester-MA-2.webp",
    imageAlt: "Home with freshly cleaned windows in Worcester, MA — Pro Pressure Washing",
    intro: [
      "Clean windows change how a whole home or storefront feels — more light, a clearer view, and a finished look that a freshly washed house exterior deserves. Our window cleaning covers glass inside and out across Worcester and the surrounding towns, hand-detailing the glass and frames for a genuinely streak-free result, not a quick spray-and-rinse.",
      "It's the perfect finishing touch after a house wash, and a service homeowners and small businesses schedule on its own each spring and fall to keep the whole property looking sharp.",
    ],
    sections: [
      {
        h2: "Inside and out, streak-free",
        body: [
          "We clean exterior glass, and — when you'd like — interior glass too, along with the frames and sills. Our window cleaning process removes hard-water spots, pollen, salt film, cobwebs and the general haze that builds up over the seasons, finishing each pane so there are no streaks left when the low afternoon sun hits them.",
        ],
      },
      {
        h2: "Screens, tracks and skylights",
        body: [
          "Windows are more than glass. We wipe down screens, clear the dirt and dead bugs out of the tracks, and reach the high, awkward windows and skylights that homeowners can't safely get to. For roofs with skylights, we clean the glass while we're up there for a roof soft wash, so it all gets done in one visit.",
        ],
      },
      {
        h2: "Homes and storefronts across Worcester County",
        body: [
          "Bright, spotless glass matters as much for a business as it does for a home — it's the first thing a customer notices. We provide window cleaning for houses, condos, offices and storefronts, on a one-time basis or a recurring seasonal schedule, so your glass always looks its best.",
        ],
      },
      {
        h2: "Why professional window cleaning looks different",
        body: [
          "Most streaky windows aren't dirty so much as poorly dried — DIY cleaning leaves detergent film and lint behind that show up the moment the sun hits at an angle. Our window cleaning uses professional squeegee technique and the right solution to pull the water and grime off cleanly, so there's no film, no lint and no streaks left in the corners.",
          "It also lasts. Because we clean the frames, sills and tracks — not just the glass — dirt doesn't immediately wash back down onto a freshly cleaned pane in the next rain. That attention to the whole window is the difference between glass that looks clean for a day and glass that stays clear for the season.",
        ],
      },
    ],
    benefits: [
      "Streak-free hand-detailed glass, inside and out",
      "Screens, sills and tracks cleaned too",
      "Skylights and hard-to-reach windows handled safely",
      "The perfect finish after a house wash",
      "One-time or recurring seasonal service",
    ],
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
        a: "We do. Clean storefront glass makes a big difference to customers — we clean commercial windows on a one-time or recurring schedule.",
      },
      {
        q: "How often should windows be cleaned?",
        a: "Twice a year — spring and fall — keeps most homes looking their best, clearing winter grime and salt in spring and pollen and summer film in fall. Storefronts and homes on busy or dusty roads often want it more frequently.",
      },
      {
        q: "How much does window cleaning cost?",
        a: "It depends on the number and type of windows and whether you want interior and exterior, so we quote each home or business. Fill out our quick quote form or call (508) 736-0089 for a fast, free quote.",
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
    image: "/images/2025/02/Pro-Pressure-Washing-scaled.webp",
    imageAlt: "Pro Pressure Washing commercial service truck and equipment in Worcester County, MA",
    intro: [
      "A customer's first impression of your business is the exterior — the sidewalk they walk across, the entrance they walk through, the building they see from the road. Our commercial pressure washing keeps properties across Worcester County looking sharp, with fully insured service scheduled around your hours so we're never in your customers' way.",
      "From a single storefront to a multi-building property, we bring commercial hot-water equipment, the right certificates of insurance, and a crew that shows up when we say we will.",
    ],
    sections: [
      {
        h2: "Commercial properties we service",
        body: [
          "Retail storefronts and plazas, restaurants and their dumpster pads, office buildings, medical and professional offices, industrial and warehouse exteriors, apartment and condo complexes, and municipal facilities. Whatever the property, our commercial pressure washing is matched to the surface — hot-water pressure for concrete and hard surfaces, gentle soft washing for siding and painted facades.",
          "We work early mornings, evenings and weekends so cleaning never interrupts business or gets in the way of your customers and staff.",
        ],
      },
      {
        h2: "Insured, scheduled, dependable",
        body: [
          "We carry full liability insurance and provide certificates on request for your property manager or corporate office. Recurring maintenance schedules — monthly, quarterly or seasonal — keep your property consistently clean and your budget predictable, so a dirty storefront never sneaks up on you.",
        ],
      },
      {
        h2: "One vendor for the whole exterior",
        body: [
          "Instead of juggling separate contractors for the building, the sidewalks, the dumpster pad and the parking lot, you get one insured company for all of it. That means one point of contact, one schedule and one quote — and a property that stays consistently presentable from the road to the front door.",
        ],
      },
      {
        h2: "Why a clean exterior pays for itself",
        body: [
          "A dingy entrance, algae-streaked siding or a gum-spotted sidewalk quietly tells customers you don't sweat the details — and it's often the first thing they notice. Regular commercial pressure washing protects that first impression, and it protects the building itself: mold, algae and ground-in grime break down surfaces and finishes over time, so removing them is maintenance, not just appearance. For food-service, medical and retail tenants especially, a visibly clean exterior is part of the brand.",
          "It also reduces liability. Slippery, algae-covered walkways and greasy dumpster pads are a real slip-and-fall risk; keeping them clean is a simple, documented way to lower that exposure across your property.",
        ],
      },
    ],
    benefits: [
      "Fully insured — COIs provided on request",
      "Scheduled around your business hours",
      "One vendor for storefronts, buildings, lots and walks",
      "Recurring maintenance plans available",
      "Hot-water and soft-wash methods for any surface",
    ],
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
        a: "We do. Monthly, quarterly and seasonal maintenance plans keep your property consistently clean at contract pricing.",
      },
      {
        q: "Do we need to close or move vehicles while you work?",
        a: "Rarely. We plan the work around your operation — cleaning sections at a time, working off-hours, and coordinating on anything that needs to be moved. The goal is to keep your business running normally while we clean.",
      },
      {
        q: "How much does commercial pressure washing cost?",
        a: "Commercial jobs vary widely by property, surface and scope, so we quote each one after a quick walkthrough. Fill out our quote form or call (508) 736-0089 for a fast, free quote.",
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
    image: "/images/2025/02/Pro-Pressure-Washing-scaled.webp",
    imageAlt: "Commercial building exterior washing in Central MA — Pro Pressure Washing",
    intro: [
      "The exterior of your building takes years of weather, pollution and organic growth. Professional building washing removes the dirt, mold, algae and atmospheric staining that make a property look dated and neglected — and does it with methods matched to the facade so nothing gets damaged.",
      "Pro Pressure Washing cleans commercial building exteriors across Worcester County and Central Massachusetts, using soft washing on delicate facades and appropriate pressure on hard masonry.",
    ],
    sections: [
      {
        h2: "Facades we clean",
        body: [
          "Brick and block, painted concrete, metal and composite panel systems, EIFS and stucco, vinyl and Hardie, and mixed-material facades. We match the method to the material — soft washing for anything that can be damaged by pressure, controlled pressure for durable masonry — so your building washing comes out clean and even without harming the finish or the seals.",
        ],
      },
      {
        h2: "Safe on every surface, at any height",
        body: [
          "We survey the facade first, protect windows, entries, signage and landscaping, and use biodegradable solutions. For multi-story exteriors we use soft-wash reach systems and the right equipment to clean safely from the ground wherever possible, keeping the job efficient and low-risk for a working property.",
        ],
      },
      {
        h2: "A better first impression for tenants and customers",
        body: [
          "A clean building signals a well-run business and a well-managed property. Regular building washing removes the staining and streaking that make tenants' and customers' first impressions worse than they should be, protects the facade materials from long-term organic damage, and keeps your property looking like an asset rather than a liability.",
        ],
      },
      {
        h2: "Protecting the facade for the long run",
        body: [
          "Mold, algae, lichen and atmospheric pollution don't just look bad — they hold moisture against the facade and slowly degrade paint, sealants, mortar joints and panel finishes. Left for years, that organic growth turns a cleaning job into a repair job. Scheduled building washing removes the growth before it does structural or cosmetic harm, extending the life of the exterior and pushing off expensive repainting and repointing.",
          "For managers, a documented annual or semi-annual wash is also an easy line item to justify to owners: it's preventive maintenance that visibly protects the property's value and its curb appeal at the same time.",
        ],
      },
    ],
    benefits: [
      "Soft washing protects delicate facades",
      "Removes pollution staining, mold and algae",
      "Improves tenant and customer impressions",
      "Safe multi-story cleaning from the ground",
      "Insured, with COIs on request",
    ],
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
        a: "Most buildings benefit from an annual wash; shaded, tree-lined or food-service properties may want it twice a year. We can set up a recurring schedule.",
      },
      {
        q: "Do you supply your own water and equipment?",
        a: "Yes. We arrive with commercial equipment and can work from your water source or bring our own as needed. We handle the setup, the cleaning and the cleanup, so all you have to do is point us at the building.",
      },
      {
        q: "How much does building washing cost?",
        a: "It depends on the size, height and material of the facade, so we quote after a walkthrough. Fill out our quote form or call (508) 736-0089 for a fast, free quote.",
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
    image: "/images/2015/07/power-washing-concrete-stairs-in-Worcester.webp",
    imageAlt: "Storefront sidewalk being pressure washed in Worcester, MA — Pro Pressure Washing",
    intro: [
      "The sidewalk and entrance in front of your business say a lot before a customer ever walks in. Spilled coffee, gum, grease tracked from a kitchen, salt residue and general city grime build up fast on a busy storefront. Our storefront cleaning keeps entrances and walkways clean and presentable with hot-water surface cleaning that lifts what a broom and hose can't.",
      "We service retail, restaurants, plazas and office entrances across Worcester — before opening, after closing, or on a recurring schedule that keeps the front of your business consistently sharp.",
    ],
    sections: [
      {
        h2: "What we remove from your storefront",
        body: [
          "Gum, coffee and drink stains, grease and food spills, cigarette residue, salt and ice-melt film, algae in shaded corners, and the gray grime that dulls concrete. Hot water and a flat-surface cleaner leave the walkway evenly clean, corner to corner, with none of the wand stripes a pressure wand leaves behind.",
        ],
      },
      {
        h2: "Safety and appearance together",
        body: [
          "A clean walkway isn't just about looks — algae, grease and grime make concrete slippery, which is a real liability at a business entrance. Regular storefront cleaning reduces that slip hazard while keeping the front of your store inviting, so you're protecting both your image and your customers.",
        ],
      },
      {
        h2: "Scheduled around your hours",
        body: [
          "We clean before you open or after you close, so there's never a wet walkway or equipment in the way during business hours. High-traffic storefronts often go on a weekly or monthly schedule, which keeps the entrance consistently clean and spreads the cost into a predictable routine instead of an occasional scramble.",
        ],
      },
      {
        h2: "Restaurants, retail and plazas",
        body: [
          "Different storefronts collect different messes. Restaurants deal with grease that gets tracked from the kitchen to the entrance and dumpster area; cafes battle coffee and drink stains; retail and office fronts pick up gum, cigarette residue and general foot-traffic grime. We tailor the storefront cleaning to what your business actually accumulates, using hot water and the right degreasers so the walkway comes genuinely clean rather than just wet.",
          "For plazas and multi-tenant properties, we can clean the shared sidewalks and entrances on one schedule, keeping the whole strip consistent so no single storefront drags down the look of the center.",
        ],
      },
    ],
    benefits: [
      "Removes gum, grease, stains and salt film",
      "Even, stripe-free hot-water surface cleaning",
      "Reduces slip hazards at your entrance",
      "Before-open / after-close scheduling",
      "Weekly, monthly or one-time service",
    ],
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
      {
        q: "How long does a storefront cleaning take?",
        a: "Most single storefronts and their sidewalks are done in well under an hour, so it fits easily into a before-open or after-close window. Larger plazas take longer, and we schedule those so the whole center is handled without disrupting any one tenant.",
      },
      {
        q: "How much does storefront cleaning cost?",
        a: "It depends on your frontage and how much traffic and buildup there is, so we quote each site. Fill out our quote form or call (508) 736-0089 for a fast, free quote.",
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
    image: "/images/2025/02/Pro-Pressure-Washing-scaled.webp",
    imageAlt: "Condo complex exterior washing in Worcester County, MA — Pro Pressure Washing",
    intro: [
      "Managing a condo association or HOA means keeping dozens of units looking consistent and cared-for, on a budget the board can plan around. Pro Pressure Washing works with property managers and boards across Worcester County to clean building exteriors, unit siding, shared walkways, decks, fences and common areas — with one point of contact and one clear quote.",
      "We're fully insured, we provide certificates of insurance for your management company, and we can phase larger communities so the work fits the budget cycle.",
    ],
    sections: [
      {
        h2: "Whole-community service",
        body: [
          "Unit and building soft washing, breezeways and stairwells, shared walkways and entry sidewalks, community decks and fences, mailbox kiosks and signage. We handle it all under one vendor so the board isn't juggling contractors or chasing separate quotes for every surface.",
        ],
      },
      {
        h2: "Built for boards and property managers",
        body: [
          "We provide clear written scopes and COIs, schedule around residents with proper notice, and offer multi-year maintenance plans that keep pricing predictable. Phased proposals let large associations spread the work across seasons or budget years, so a big community can stay on top of its exteriors without a single overwhelming bill.",
        ],
      },
      {
        h2: "Consistent curb appeal protects property values",
        body: [
          "Streaked siding, mossy walkways and green north walls drag down how a whole community looks — and how much its units are worth. Regular washing keeps every building consistent, protects the siding and hardscaping from long-term organic damage, and keeps owners happy that their association fees are being spent on visible, lasting upkeep.",
        ],
      },
      {
        h2: "Soft washing that's safe for occupied units",
        body: [
          "Condo and HOA buildings are occupied while we work, so our low-pressure soft washing is exactly the right method — no high-pressure water blasting near windows, sliders, dryer vents or light fixtures, and no risk of forcing water into a unit. We use biodegradable solutions, protect and rinse the landscaping the association pays to maintain, and work building-by-building so residents always know what to expect.",
          "It's a cleaning approach that respects both the buildings and the people living in them, which is why property managers keep us on a recurring schedule instead of scrambling for a new vendor every year.",
        ],
      },
    ],
    benefits: [
      "One insured vendor for the whole community",
      "COIs and written scopes for your manager",
      "Resident-friendly scheduling with notice",
      "Phased and multi-year plans for budgeting",
      "Consistent curb appeal that protects values",
    ],
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
      {
        q: "How do you keep the cost predictable for the board?",
        a: "We provide a clear written scope and lock in pricing up front, and for larger communities we can set multi-year plans so the board knows the number in advance. Recurring schedules also let us spread the work into predictable, budget-friendly stages.",
      },
      {
        q: "How much does HOA or condo washing cost?",
        a: "It depends on the size of the community and the scope, so we walk the property and quote it out. Fill out our quote form or call (508) 736-0089 for a fast, free quote.",
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
    image: "/images/2025/02/Pro-Pressure-Washing-scaled.webp",
    imageAlt: "Fleet vehicle washing in Central MA — Pro Pressure Washing",
    intro: [
      "Every vehicle in your fleet is a billboard for your business — and a dirty, road-salted truck sends the wrong message. Our fleet washing keeps trucks, vans, trailers and equipment clean and professional across Central Massachusetts, done on-site so your drivers never lose time at a wash bay.",
      "We come to your yard on a schedule that fits your operation — weekly, biweekly or monthly — and keep your branding looking crisp year-round, even through a salty New England winter.",
    ],
    sections: [
      {
        h2: "On-site, on your schedule",
        body: [
          "We bring the water and equipment to your lot and wash the fleet where it parks, before or after shifts. Recurring fleet washing keeps every vehicle consistently clean and your per-vehicle cost predictable, and it means your drivers are on the road instead of waiting in line at a wash.",
        ],
      },
      {
        h2: "Vehicles we wash",
        body: [
          "Box trucks and vans, pickups, trailers, dump bodies and more. We remove road salt, mud, brake dust and grime that corrode vehicle bodies and undercarriages and hide your logos and lettering, so your fleet looks as professional as the work you do.",
        ],
      },
      {
        h2: "Heavy equipment cleaning",
        body: [
          "Beyond road vehicles, we clean heavy construction and landscaping equipment — excavators, loaders, skid steers, mowers and attachments. Caked-on mud, clay and grease don't just look bad; they hide leaks and wear and accelerate corrosion. Regular washing keeps your equipment inspection-ready and extends its service life, protecting a serious investment.",
        ],
      },
      {
        h2: "A clean fleet is cheaper to run",
        body: [
          "Beyond the professional image, keeping vehicles clean is genuinely good for the equipment. Road salt and brine are relentless in a New England winter, and left on a truck they eat through paint, panels and undercarriages until small problems become expensive ones. Washing the salt and grime off on a regular schedule slows that corrosion and helps your vehicles hold their resale value.",
          "Clean bodies and windows are also safer — clear glass and lights and readable lettering matter on the road. With on-site fleet washing you get all of that without pulling drivers off their routes to sit at a wash bay, so the upkeep pays for itself in time saved as well as trucks protected.",
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
        q: "Do you clean heavy construction equipment?",
        a: "Yes. Along with trucks and vans, we clean heavy construction and landscaping equipment — excavators, loaders, skid steers and mowers — removing caked mud and grease to keep them inspection-ready and protected from corrosion.",
      },
      {
        q: "Is there a minimum number of vehicles for on-site service?",
        a: "On-site fleet washing makes the most sense once you have several vehicles parked at one location, since we're bringing the equipment to you. Tell us your fleet size and where it's based and we'll let you know the best way to set it up.",
      },
      {
        q: "How much does fleet washing cost?",
        a: "Per-vehicle pricing drops with fleet size and frequency, so we quote based on your fleet. Fill out our quote form or call (508) 736-0089 for a fast, free quote. TODO(client): confirm fleet washing is currently offered.",
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
    image: "/images/2015/07/power-washing-graffiti-removal-in-Worcester.webp",
    imageAlt: "Graffiti being removed from a wall in Worcester, MA — Pro Pressure Washing",
    intro: [
      "Graffiti is a magnet for more graffiti, so speed matters — the faster a tag comes down, the less likely it is to come back. Our graffiti removal clears tags from commercial and municipal surfaces across Worcester using hot water, specialized removers and the right technique for each surface, so the wall comes clean without being damaged.",
      "We help businesses, property managers and municipalities keep buildings, retaining walls, dumpster enclosures and utility surfaces tag-free and looking cared-for.",
    ],
    sections: [
      {
        h2: "Surfaces we clean",
        body: [
          "Brick and block, concrete and retaining walls, metal doors and dumpster enclosures, painted surfaces and storefronts. Porous surfaces like brick take more work; our graffiti removal uses hot water and surface-appropriate removers to lift the paint out of the pores rather than just smearing it deeper into the masonry.",
        ],
      },
      {
        h2: "Why fast response matters",
        body: [
          "Quick removal discourages repeat tagging and keeps your property looking cared-for — a wall that gets cleaned within a day or two of being tagged is far less likely to be hit again. For businesses and properties that see recurring graffiti, we offer priority response so tags are gone before they multiply.",
        ],
      },
      {
        h2: "For businesses and municipalities",
        body: [
          "We work with local businesses, property managers and municipal facilities to keep buildings, underpasses, signage and utility surfaces clean. Whether it's a one-time tag or an ongoing problem spot, our graffiti removal restores the surface and helps keep the whole area feeling safe and maintained.",
        ],
      },
      {
        h2: "Matching the method to the surface",
        body: [
          "Not all graffiti comes off the same way. Spray paint on smooth metal or sealed concrete often lifts cleanly with hot water and the right remover, while paint on raw brick, block or porous stone soaks into the pores and takes more care to draw out without etching or lightening the surface underneath. We assess the surface first and choose the approach that removes the tag without leaving a 'ghost' or a clean patch that stands out from the rest of the wall.",
          "For surfaces that are tagged repeatedly, we can also talk with you about anti-graffiti coatings that make future removal faster and easier — a practical option for chronic problem spots.",
        ],
      },
    ],
    benefits: [
      "Fast response before tags spread",
      "Safe for brick, concrete, metal and storefronts",
      "Hot water lifts paint out of porous surfaces",
      "Priority service for repeat-target properties",
      "Works with businesses and municipalities",
    ],
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
      {
        q: "Will removal leave a clean spot that stands out?",
        a: "We work to avoid that. On surfaces where removing the tag would leave an obvious clean patch, we feather the cleaning into the surrounding area or clean a wider section so the result looks even rather than spotlighting where the graffiti was.",
      },
      {
        q: "How much does graffiti removal cost?",
        a: "It depends on the surface and the size of the tag, so we quote each job. Fill out our quote form or call (508) 736-0089 for a fast, free quote and fast turnaround.",
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
