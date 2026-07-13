// Town landing pages — one entry per town, UNIQUE copy each (SITE-SPEC 4.4).
// No boilerplate reuse: real neighborhoods, housing stock, distance/response
// time from Holden, and town-specific FAQs. This is how we beat the
// competitor's near-duplicate town pages.

export type TownFaq = { q: string; a: string };

export type Town = {
  slug: string; // "/pressure-washing-[town]-ma/" segment
  oldSlug?: string; // legacy "/power-washing-[town]-ma/" → 301 to slug
  name: string;
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  distanceFromHolden: string; // response-time line
  intro: string[]; // unique opening (why us, here)
  local: string[]; // neighborhoods / housing stock / landmarks — town-specific
  faqs: TownFaq[];
  // TODO(client): add a town-specific Google review + before/after photos per town.
};

export const towns: Town[] = [
  {
    slug: "pressure-washing-holden-ma",
    name: "Holden",
    keyword: "pressure washing Holden MA",
    title: "Pressure Washing Holden MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Holden, MA from a local, family-owned team. House, roof, deck & concrete cleaning right here in town. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Holden, MA",
    distanceFromHolden:
      "Holden is our home base — we're your neighbors, and we can often be at your door the same week you call.",
    intro: [
      "Pro Pressure Washing is based right here in Holden, and it's the town we know best. We're the local, family-owned crew our neighbors call when their vinyl colonial has gone green on the north side, the deck out back has turned gray, or the walkway to the front door is slick with moss. Because we're in town, there's no travel surcharge and no waiting weeks for an out-of-area company to fit you in.",
      "From Chaffins and Jefferson to Dawson and the neighborhoods off Reservoir Street and Main Street, we soft wash homes, clean roofs, restore decks and pressure wash concrete for Holden families every week.",
    ],
    local: [
      "Holden's housing is mostly vinyl and clapboard colonials, capes and ranches on wooded, well-treed lots — beautiful, but shade and tree cover mean mold, algae and those black roof streaks take hold fast, especially on north-facing walls and roofs near the Trout Brook and reservoir areas.",
      "We know the local housing stock: the mature neighborhoods where cedar and older vinyl need a gentle soft-wash touch, and the newer developments where a yearly maintenance wash keeps everything looking new. Being minutes away means we can also handle quick jobs — a single deck, a walkway, a gutter brightening — without it being a whole production.",
    ],
    faqs: [
      {
        q: "Are you actually based in Holden?",
        a: "Yes — Pro Pressure Washing is a Holden-based, family-owned business. When you hire us you're hiring a local neighbor, not an out-of-town crew, and there's no travel fee within town.",
      },
      {
        q: "How soon can you get to my Holden home?",
        a: "Because we're right here in town, Holden jobs are usually the quickest to schedule — often within the same week. Call (508) 736-0089 for our current availability.",
      },
      {
        q: "My roof and north wall are covered in black streaks — can you help?",
        a: "Absolutely. Holden's shaded, tree-lined lots make black roof streaks and green siding very common. We remove both safely with low-pressure soft washing that won't harm your shingles or siding.",
      },
    ],
  },
  {
    slug: "pressure-washing-worcester-ma",
    name: "Worcester",
    keyword: "pressure washing Worcester MA",
    title: "Pressure Washing Worcester MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Worcester, MA. Soft washing for homes, triple-deckers & multifamilies plus concrete cleaning. Insured, local. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Worcester, MA",
    distanceFromHolden:
      "Worcester is about 15 minutes south of our Holden base, so we cover the whole city easily and respond fast.",
    intro: [
      "Worcester is a city of neighborhoods, and its exteriors take a beating — city grime, pollution film, and the mold and algae that thrive on shaded three-deckers and closely-spaced homes. Pro Pressure Washing cleans homes and small commercial properties across the city, from the West Side and Tatnuck to Burncoat, Grafton Hill and beyond, with methods matched to each surface.",
      "Just 15 minutes from our Holden base, we're close enough to serve Worcester reliably and fast — whether it's a single-family colonial, a classic triple-decker, or a storefront that needs its sidewalk cleaned before opening.",
    ],
    local: [
      "Worcester's iconic triple-deckers and multifamilies are often vinyl or older wood clapboard packed close together, where mildew and pollution staining build up on the shaded sides. These need soft washing, not high pressure — high pressure forces water behind old clapboards and cracks aging vinyl. We clean them the safe way.",
      "The city's brick multifamilies, porches and concrete stoops and stairs are a different job — durable masonry and concrete that respond beautifully to hot-water pressure washing. From Elm Park-area Victorians to newer West Side colonials, we tailor the approach to the property, and we're fully insured for tenant-occupied and rental buildings.",
    ],
    faqs: [
      {
        q: "Do you clean triple-deckers and multifamily homes in Worcester?",
        a: "Yes, regularly. We soft wash the siding on triple-deckers and multifamilies so we never force water behind old clapboards or crack aging vinyl, and we're fully insured for tenant-occupied and rental properties.",
      },
      {
        q: "Can you clean city sidewalks and concrete stairs?",
        a: "Definitely. Worcester's concrete stoops, stairs and sidewalks clean up great with our hot-water surface cleaners, which remove gum, grime and salt film evenly with no wand stripes.",
      },
      {
        q: "How quickly can you reach Worcester?",
        a: "We're only about 15 minutes away in Holden, so we serve the entire city quickly. Call (508) 736-0089 for scheduling.",
      },
    ],
  },
  {
    slug: "pressure-washing-paxton-ma",
    name: "Paxton",
    keyword: "pressure washing Paxton MA",
    title: "Pressure Washing Paxton MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Paxton, MA. House soft washing, roof, deck & concrete cleaning for wooded rural properties. Local & insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Paxton, MA",
    distanceFromHolden:
      "Paxton borders Holden to the west — we're about 10 minutes away and treat it like our own backyard.",
    intro: [
      "Paxton's rural, heavily-wooded character is exactly what makes exterior cleaning so important here. Tree cover and damp shade mean roofs streak, siding greens and decks grow slick with algae faster than in open suburbs. Pro Pressure Washing, based next door in Holden, keeps Paxton homes clean with the gentle soft-wash methods these shaded properties need.",
      "We're just 10 minutes from most Paxton addresses, so we can get out quickly for everything from a full house wash to a single mossy walkway.",
    ],
    local: [
      "Homes around Moore State Park, Anna Maria College and the town center sit on large, tree-shaded lots — postcard New England, but ideal conditions for roof algae and north-side mildew. Cedar shingle and older wood exteriors are common and demand a careful low-pressure touch.",
      "We handle the realities of rural properties: long driveways and walkways streaked with moss, decks that back onto the woods and stay damp, and roofs under heavy canopy that develop black streaks years before homes in sunnier towns. Everything is cleaned at the right pressure for the surface, with eco-friendly solutions safe for well water and gardens.",
    ],
    faqs: [
      {
        q: "My Paxton home is surrounded by trees and the roof is streaked — can you fix it?",
        a: "Yes, this is one of our most common jobs in Paxton. Heavy tree cover causes black roof algae and green siding; we remove both with low-pressure soft washing that's safe for your shingles and cedar.",
      },
      {
        q: "Are your cleaning solutions safe for well water and gardens?",
        a: "Yes. We use biodegradable, eco-friendly solutions and rinse landscaping before and after, which matters on Paxton's rural, well-served properties.",
      },
      {
        q: "How far is Paxton from your base?",
        a: "Paxton borders Holden, so we're only about 10 minutes away and can usually schedule quickly. Call (508) 736-0089.",
      },
    ],
  },
  {
    slug: "pressure-washing-princeton-ma",
    name: "Princeton",
    keyword: "pressure washing Princeton MA",
    title: "Pressure Washing Princeton MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Princeton, MA. Soft washing for homes near Wachusett, plus roof, deck & concrete cleaning. Insured, local. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Princeton, MA",
    distanceFromHolden:
      "Princeton is about 15 minutes north of Holden — an easy, regular route for our crew.",
    intro: [
      "Up in the hills around Wachusett Mountain, Princeton homes face weather that few other Worcester County towns do: more moisture, more shade, longer damp seasons, and the kind of exposure that grows algae on roofs and siding quickly. Pro Pressure Washing brings the right soft-wash approach to these elevated, wooded properties, protecting the finish while getting them genuinely clean.",
      "We're about 15 minutes from Princeton and serve the whole town, from the center to East Princeton and the homes scattered along the mountain roads.",
    ],
    local: [
      "Princeton's housing skews toward larger, higher-value homes on wooded acreage, plus classic antique colonials and capes near the town common. Many have cedar, wood clapboard or premium siding that must be cleaned gently — the last thing these homes need is a high-pressure blast stripping paint or driving water behind the boards.",
      "The elevation and tree cover around Wachusett mean north-facing roofs and walls streak early and heavily. We treat that algae and moss at the root, and we handle the long driveways, stone walkways and hillside decks that come with Princeton's rural, scenic lots.",
    ],
    faqs: [
      {
        q: "Do you service homes up near Wachusett Mountain?",
        a: "Yes. We regularly clean homes throughout Princeton, including the wooded, elevated properties near Wachusett where roof and siding algae are especially common.",
      },
      {
        q: "My home has cedar siding — is pressure washing safe?",
        a: "We never high-pressure cedar. We soft wash it with low pressure and gentle solution, which cleans the wood thoroughly without furring the grain or stripping any finish.",
      },
      {
        q: "Is Princeton within your service area?",
        a: "Absolutely — it's about 15 minutes north of our Holden base and part of our regular route. Call (508) 736-0089 for a free quote.",
      },
    ],
  },
  {
    slug: "pressure-washing-sterling-ma",
    name: "Sterling",
    keyword: "pressure washing Sterling MA",
    title: "Pressure Washing Sterling MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Sterling, MA. House soft washing, roof, deck & concrete cleaning for homes & farm properties. Local, insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Sterling, MA",
    distanceFromHolden:
      "Sterling is about 15 minutes north of Holden, and we're out that way often.",
    intro: [
      "Sterling blends classic New England town center, orchards and farmland with newer residential neighborhoods — and all of it collects the mold, algae and pollen that come with our humid summers and cold, wet winters. Pro Pressure Washing keeps Sterling homes and outbuildings clean with methods matched to each surface, from delicate siding to hard concrete.",
      "We're about 15 minutes from Sterling and cover the whole town, from the center and Route 12 corridor out to the orchard roads and lakeside homes.",
    ],
    local: [
      "Sterling has a wide mix: antique colonials and farmhouses near the common, vinyl-sided colonials in the newer subdivisions, and farm properties with barns, outbuildings and long fence lines. Older wood and cedar need a gentle soft wash, while newer vinyl benefits from a yearly maintenance clean.",
      "Homes near the orchards and along shaded country roads see heavy roof algae and green north walls, and the area's farm fencing and decks weather quickly. We clean it all — houses, roofs, decks, fences and concrete — with eco-friendly solutions that are safe around gardens, animals and well water.",
    ],
    faqs: [
      {
        q: "Do you clean farm properties and outbuildings in Sterling?",
        a: "Yes. Along with houses, we clean barns, outbuildings, fence lines and concrete on Sterling's farm and country properties, using eco-friendly solutions that are safe around animals, gardens and well water.",
      },
      {
        q: "Can you clean an older farmhouse without damaging it?",
        a: "Yes — antique and farmhouse exteriors are exactly why soft washing exists. Low pressure and gentle solution clean the wood and remove mildew without harming aged clapboards or trim.",
      },
      {
        q: "How far is Sterling from your base?",
        a: "About 15 minutes north of Holden. We're out that way regularly, so scheduling is easy — call (508) 736-0089.",
      },
    ],
  },
  {
    slug: "pressure-washing-rutland-ma",
    name: "Rutland",
    keyword: "pressure washing Rutland MA",
    title: "Pressure Washing Rutland MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Rutland, MA. Soft washing for colonial subdivisions plus roof, deck & concrete cleaning. Local & insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Rutland, MA",
    distanceFromHolden:
      "Rutland is about 15 minutes northwest of Holden — a town we serve constantly.",
    intro: [
      "Rutland has grown fast, and many of its neighborhoods are newer vinyl-sided colonials on open and semi-wooded lots. Those homes look great — until a couple of New England seasons leave green algae streaking down the north side and grime dulling the whole exterior. Pro Pressure Washing keeps Rutland's homes looking new with a safe yearly soft wash, and we've cleaned and restored plenty of Rutland decks over the years.",
      "We're about 15 minutes away and know the town's subdivisions well, so scheduling is quick and easy.",
    ],
    local: [
      "As the geographic center of Massachusetts, Rutland gets the full range of New England weather, and its many newer vinyl colonials are prime candidates for algae and pollen buildup on shaded walls. A gentle annual soft wash is the ideal maintenance — it keeps the vinyl looking new and stops mold from getting established.",
      "Beyond the subdivisions, Rutland has rural properties with decks, fences and long concrete or paver driveways that weather in the shade of surrounding woods. We clean all of it, matching pressure to the surface and using eco-friendly solutions safe for lawns, gardens and pets.",
    ],
    faqs: [
      {
        q: "My newer Rutland home already has green streaks — is that normal?",
        a: "Very. New vinyl colonials on shaded lots start showing algae within a couple of seasons here. A gentle soft wash removes it and, done yearly, keeps your siding looking new.",
      },
      {
        q: "Do you clean decks in Rutland?",
        a: "Yes — we've cleaned and restored many Rutland decks. We wash wood and composite decks at the correct pressure and can prep them for staining.",
      },
      {
        q: "Is Rutland in your service area?",
        a: "Yes, it's about 15 minutes northwest of our Holden base and a town we serve constantly. Call (508) 736-0089 for a free quote.",
      },
    ],
  },
  {
    slug: "pressure-washing-west-boylston-ma",
    name: "West Boylston",
    keyword: "pressure washing West Boylston MA",
    title: "Pressure Washing West Boylston MA | Pro",
    metaDescription:
      "Pressure washing in West Boylston, MA. House soft washing, roof, deck & concrete cleaning near the Wachusett Reservoir. Insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in West Boylston, MA",
    distanceFromHolden:
      "West Boylston borders Holden to the east — we're about 10 minutes away.",
    intro: [
      "West Boylston sits along the Wachusett Reservoir, and that water means humidity — which means homes here see more than their share of roof algae, green siding and damp, mildewed decks. Pro Pressure Washing, based just next door in Holden, keeps West Boylston homes clean and protected with soft washing that's safe for the surfaces and the environment around the reservoir.",
      "We're about 10 minutes from most of town, from Oakdale to the neighborhoods overlooking the water.",
    ],
    local: [
      "Many West Boylston homes are older colonials, capes and lakeside properties, along with newer developments. The proximity to the reservoir and the Quinapoxet and Stillwater rivers keeps the air damp, so north-facing roofs and walls streak early and decks stay slick — classic soft-wash territory.",
      "We're especially careful with eco-friendly, biodegradable solutions given the watershed, and we clean everything from lakeside decks and docks-adjacent structures to concrete patios and long driveways. Older wood and cedar get a gentle touch; newer vinyl gets a maintenance wash that keeps it new.",
    ],
    faqs: [
      {
        q: "Do you use environmentally safe products near the reservoir?",
        a: "Yes. We use biodegradable, eco-friendly cleaning solutions and careful rinsing, which is especially important for West Boylston properties near the Wachusett Reservoir and its feeder rivers.",
      },
      {
        q: "Why does my West Boylston roof streak so badly?",
        a: "The humidity off the reservoir and rivers creates ideal conditions for roof algae. We remove those black streaks with a low-pressure soft-wash treatment that's safe for your shingles.",
      },
      {
        q: "How close are you to West Boylston?",
        a: "West Boylston borders Holden, so we're only about 10 minutes away. Call (508) 736-0089 to schedule.",
      },
    ],
  },
  {
    slug: "pressure-washing-boylston-ma",
    name: "Boylston",
    keyword: "pressure washing Boylston MA",
    title: "Pressure Washing Boylston MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Boylston, MA. Soft washing for homes on wooded lots, plus roof, deck & concrete cleaning. Local, insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Boylston, MA",
    distanceFromHolden:
      "Boylston is about 15 minutes east of Holden and part of our regular service area.",
    intro: [
      "Boylston's rural, spread-out character — larger lots, mature trees, and homes tucked into the landscape near Tower Hill Botanic Garden and the reservoir — makes for beautiful properties that also collect roof algae, siding mildew and mossy walkways. Pro Pressure Washing keeps Boylston homes clean with the gentle, effective methods these wooded lots call for.",
      "We're about 15 minutes from Boylston and serve the whole town.",
    ],
    local: [
      "Homes in Boylston range from antique colonials and farmhouses to larger custom homes on wooded acreage. Cedar, wood clapboard and premium siding are common, and all of it needs the careful low-pressure touch of soft washing rather than a high-pressure blast.",
      "The heavy tree cover and proximity to the Wachusett Reservoir keep properties damp and shaded, so roofs streak and decks gray quickly. We clean houses, roofs, decks and the long stone or concrete walkways and patios that come with Boylston's estate-style lots — all with eco-friendly solutions safe for gardens and well water.",
    ],
    faqs: [
      {
        q: "Do you handle larger homes on wooded Boylston lots?",
        a: "Yes. We regularly clean larger custom and antique homes on Boylston's wooded acreage, matching our method to cedar, wood or premium siding so nothing is damaged.",
      },
      {
        q: "Can you clean long stone and concrete walkways?",
        a: "Definitely. We pressure wash concrete and clean stone walkways and patios, removing the moss and grime that build up on Boylston's shaded, tree-lined properties.",
      },
      {
        q: "Is Boylston within your service area?",
        a: "Yes — about 15 minutes east of Holden and part of our regular route. Call (508) 736-0089 for a free quote.",
      },
    ],
  },
  {
    slug: "pressure-washing-shrewsbury-ma",
    oldSlug: "power-washing-shrewsbury-ma",
    name: "Shrewsbury",
    keyword: "pressure washing Shrewsbury MA",
    title: "Pressure Washing Shrewsbury MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Shrewsbury, MA. House soft washing, roof, deck & concrete cleaning near Lake Quinsigamond. Insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Shrewsbury, MA",
    distanceFromHolden:
      "Shrewsbury is about 20 minutes southeast of Holden — a busy town for us.",
    intro: [
      "Shrewsbury is one of the region's most sought-after suburbs, with a mix of established neighborhoods and newer high-end homes — and homeowners here take real pride in curb appeal. Pro Pressure Washing helps them keep it, with safe soft washing that removes the mold, algae and grime that dull siding and streak roofs across town.",
      "We serve all of Shrewsbury, from the Lake Quinsigamond shoreline and White City area to the newer developments off Route 20 and Main Street, about 20 minutes from our Holden base.",
    ],
    local: [
      "Shrewsbury's housing runs from mid-century capes and colonials to large, newer custom homes, often with premium siding, extensive hardscaping and beautiful decks that owners want kept immaculate. These are homes where a careful, professional soft wash matters — no cracked vinyl, no stripped stain, just a clean, even result.",
      "Properties near Lake Quinsigamond and the town's many tree-lined streets deal with extra humidity and shade, so roof streaks and north-wall algae are common. We also clean the paver patios, pool decks and long driveways that come with Shrewsbury's higher-end homes.",
    ],
    faqs: [
      {
        q: "Can you clean high-end homes with premium siding and hardscaping?",
        a: "Yes — that's much of our Shrewsbury work. We soft wash premium siding safely and clean paver patios, pool decks and hardscaping at the correct pressure, protecting the surfaces and the joints.",
      },
      {
        q: "Do you clean homes near Lake Quinsigamond?",
        a: "We do. Lakeside and tree-lined Shrewsbury properties see extra humidity and roof algae, which we remove with a safe low-pressure soft wash.",
      },
      {
        q: "How far is Shrewsbury from you?",
        a: "About 20 minutes southeast of our Holden base, and a town we serve often. Call (508) 736-0089 for a free quote.",
      },
    ],
  },
  {
    slug: "pressure-washing-westborough-ma",
    oldSlug: "power-washing-westborough-ma",
    name: "Westborough",
    keyword: "pressure washing Westborough MA",
    title: "Pressure Washing Westborough MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Westborough, MA. Home soft washing, roof, deck & concrete cleaning plus commercial. Insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Westborough, MA",
    distanceFromHolden:
      "Westborough is about 30 minutes southeast of Holden, near the Route 9 / I-495 corridor.",
    intro: [
      "Westborough mixes a charming historic downtown with newer residential developments and a busy commercial corridor along Route 9 and I-495. Pro Pressure Washing serves both sides of town — keeping family homes clean with safe soft washing, and helping local businesses and offices maintain sharp, welcoming exteriors.",
      "We're about 30 minutes from Westborough and cover the whole town, residential and commercial.",
    ],
    local: [
      "Westborough's newer subdivisions are full of vinyl-sided colonials that benefit from a yearly maintenance wash, while the downtown and older neighborhoods have wood and cedar homes that need a gentler soft-wash approach. Tree-lined streets and wet lowland areas keep roofs and north walls prone to algae.",
      "With a strong commercial and office presence near the highway corridor, Westborough is also a place we clean storefronts, office buildings, sidewalks and business exteriors — fully insured and scheduled around business hours. Whatever the property, we match the method to the surface.",
    ],
    faqs: [
      {
        q: "Do you do both residential and commercial work in Westborough?",
        a: "Yes. We soft wash homes and also clean storefronts, offices, sidewalks and commercial buildings along Westborough's Route 9 and I-495 corridor, fully insured and scheduled around business hours.",
      },
      {
        q: "Can you clean a newer colonial's vinyl siding safely?",
        a: "Yes — Westborough's newer vinyl colonials are ideal for a gentle soft wash that removes algae and pollen without cracking or fading the siding.",
      },
      {
        q: "Is Westborough within your service area?",
        a: "Yes, it's about 30 minutes southeast of Holden. Call (508) 736-0089 for a free quote.",
      },
    ],
  },
  {
    slug: "pressure-washing-northborough-ma",
    oldSlug: "power-washing-northborough-ma",
    name: "Northborough",
    keyword: "pressure washing Northborough MA",
    title: "Pressure Washing Northborough MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Northborough, MA. House soft washing, roof, deck & concrete cleaning from a local, insured team. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Northborough, MA",
    distanceFromHolden:
      "Northborough is about 25 minutes southeast of Holden and part of our regular route.",
    intro: [
      "Northborough pairs a classic downtown Main Street with orchards, conservation land and comfortable residential neighborhoods — and like every Worcester County town, its homes collect mold, algae and grime through our humid summers and wet winters. Pro Pressure Washing keeps Northborough homes clean and protected with safe, effective soft washing.",
      "We're about 25 minutes from Northborough and serve the whole town, from downtown to the neighborhoods off Church Street and the Assabet area.",
    ],
    local: [
      "Northborough's housing mixes antique colonials near the center with mid-century capes and newer vinyl-sided homes in the subdivisions. Older wood and cedar exteriors call for a gentle soft wash; newer vinyl benefits from a yearly maintenance clean to keep algae from taking hold.",
      "Homes near the orchards, the Assabet River and the town's many wooded, shaded streets see heavier roof algae and green north walls. We clean houses, roofs, decks and concrete throughout town, always matching the pressure and solution to the surface.",
    ],
    faqs: [
      {
        q: "Can you remove the black streaks from my Northborough roof?",
        a: "Yes. Those streaks are algae, common on Northborough's shaded, tree-lined lots. We remove them with a low-pressure soft-wash treatment that's safe for your shingles and won't strip the granules.",
      },
      {
        q: "Do you clean older colonial homes near downtown?",
        a: "Yes — antique and older colonials near Northborough's Main Street are cleaned with a careful soft wash that removes mildew and grime without harming aged wood or trim.",
      },
      {
        q: "How far is Northborough from your base?",
        a: "About 25 minutes southeast of Holden and part of our regular route. Call (508) 736-0089 for a free quote.",
      },
    ],
  },
  {
    slug: "pressure-washing-southborough-ma",
    name: "Southborough",
    keyword: "pressure washing Southborough MA",
    title: "Pressure Washing Southborough MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Southborough, MA. Soft washing for estate homes plus roof, deck & concrete cleaning. Insured, careful, local. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Southborough, MA",
    distanceFromHolden:
      "Southborough is about 30 minutes southeast of Holden and part of our service area.",
    intro: [
      "Southborough is one of the area's most affluent towns, with large homes, estate properties, horse farms and the historic campus of St. Mark's School. Homeowners here expect meticulous, careful work — and that's exactly what Pro Pressure Washing delivers, with soft washing that leaves premium siding, extensive hardscaping and beautiful grounds spotless and unharmed.",
      "We serve all of Southborough, from Fayville to the estate roads, about 30 minutes from our Holden base.",
    ],
    local: [
      "Southborough's larger custom and estate homes often feature premium siding, brick, stone and elaborate hardscaping — surfaces that demand a knowledgeable, careful hand. We soft wash siding and clean masonry, stone patios, pool decks and long driveways with the right pressure and solution for each, protecting finishes, plantings and joints.",
      "The town's wooded, spacious lots and horse-country properties see plenty of roof algae, mossy walkways and weathered decks and fences. We treat all of it gently and thoroughly, with eco-friendly solutions safe for extensive landscaping, gardens and animals.",
    ],
    faqs: [
      {
        q: "Do you work on large estate homes in Southborough?",
        a: "Yes. Much of our Southborough work is on larger custom and estate properties, where careful soft washing and precise hardscape cleaning protect premium siding, stone, brick and landscaping.",
      },
      {
        q: "Are your products safe around extensive landscaping and animals?",
        a: "Yes — we use biodegradable, eco-friendly solutions and careful rinsing, which matters on Southborough's estate grounds, gardens and horse properties.",
      },
      {
        q: "Is Southborough within your service area?",
        a: "Yes, it's about 30 minutes southeast of Holden. Call (508) 736-0089 for a free, no-obligation quote.",
      },
    ],
  },
];

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}

export const townSlugs = towns.map((t) => t.slug);

// Legacy /power-washing-[town]-ma/ → new /pressure-washing-[town]-ma/ (301s).
export const townRedirects = towns
  .filter((t) => t.oldSlug)
  .map((t) => ({ from: `/${t.oldSlug}/`, to: `/${t.slug}/` }));
