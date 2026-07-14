// Town landing pages — one entry per town, UNIQUE copy each (SITE-SPEC 4.4 / 5.1).
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
      "Holden's housing is mostly vinyl and clapboard colonials, capes and ranches on wooded, well-treed lots — beautiful, but shade and tree cover mean mold, algae and those black roof streaks take hold fast, especially on north-facing walls and roofs near the Trout Brook and reservoir areas. We know the local housing stock: the mature neighborhoods where cedar and older vinyl need a gentle soft-wash touch, and the newer developments where a yearly maintenance wash keeps everything looking new.",
      "The most-requested pressure washing services in Holden are house soft washing and roof cleaning — the two problems our tree cover creates most — followed by deck restoration and concrete cleaning for driveways, walkways and patios. Because so many Holden lots back onto woods and wetlands, we lean on eco-friendly, biodegradable solutions that are safe for gardens, pets and the many homes here on well water.",
      "Being minutes away is the real advantage. We can handle the big jobs — a full house wash plus roof and gutters — but also the quick ones a distant company won't bother with: a single deck, a mossy front walk, a gutter brightening before the holidays. Timing matters in New England, too; we help Holden homeowners get the pollen off in late spring and the mildew and leaf stains off before winter sets in.",
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
      {
        q: "When is the best time to have my Holden home pressure washed?",
        a: "Late spring is popular for clearing off winter grime and pollen, and early fall is ideal for removing mildew and leaf stains before winter. We work year-round in Holden, though, so any time you notice buildup is a good time to call.",
      },
    ],
  },
  {
    slug: "pressure-washing-worcester-ma",
    name: "Worcester",
    keyword: "pressure washing Worcester MA",
    title: "Pressure Washing Worcester MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Worcester, MA. Soft washing for homes, triple-deckers & multifamilies. Insured, local. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Worcester, MA",
    distanceFromHolden:
      "Worcester is about 15 minutes south of our Holden base, so we cover the whole city easily and respond fast.",
    intro: [
      "Worcester is a city of neighborhoods, and its exteriors take a beating — city grime, pollution film, and the mold and algae that thrive on shaded three-deckers and closely-spaced homes. Pro Pressure Washing cleans homes and small commercial properties across the city, from the West Side and Tatnuck to Burncoat, Grafton Hill and beyond, with methods matched to each surface.",
      "Just 15 minutes from our Holden base, we're close enough to serve Worcester reliably and fast — whether it's a single-family colonial, a classic triple-decker, or a storefront that needs its sidewalk cleaned before opening.",
    ],
    local: [
      "Worcester's iconic triple-deckers and multifamilies are often vinyl or older wood clapboard packed close together, where mildew and pollution staining build up on the shaded sides. These need soft washing, not high pressure — high pressure forces water behind old clapboards and cracks aging vinyl. The city's brick multifamilies, porches and concrete stoops and stairs are a different job: durable masonry and concrete that respond beautifully to hot-water pressure washing.",
      "From Elm Park-area Victorians to newer West Side colonials, we tailor the approach to the property, and we're fully insured for tenant-occupied and rental buildings — the paperwork landlords and property managers actually ask for. Rental owners across Worcester use us to keep multi-unit exteriors presentable between tenants and to knock down the green algae that makes a well-kept building look neglected.",
      "The most common pressure washing requests we get in Worcester are house and triple-decker soft washing, concrete stair and sidewalk cleaning, and porch and deck cleaning. Being only 15 minutes away in Holden, we can quote quickly and get city jobs scheduled without the delays a company coming from farther out would have — and there's no long-distance travel padding the price.",
      "Worcester's dense neighborhoods bring their own challenges that a suburban crew doesn't always plan for: tight side yards between houses, shared driveways, on-street parking, and the need to protect a neighbor's property just a few feet away. We're used to working carefully in close quarters, controlling overspray, and keeping walkways and shared areas clear while we work — so a wash on a packed city street goes smoothly for you and the people next door.",
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
      {
        q: "Do you work with Worcester landlords and property managers?",
        a: "Yes. We provide certificates of insurance and handle multi-unit and rental properties across the city, keeping exteriors presentable between tenants and on a recurring schedule when that's easier to budget.",
      },
    ],
  },
  {
    slug: "pressure-washing-paxton-ma",
    name: "Paxton",
    keyword: "pressure washing Paxton MA",
    title: "Pressure Washing Paxton MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Paxton, MA. House soft washing, roof, deck & concrete cleaning for rural properties. Insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Paxton, MA",
    distanceFromHolden:
      "Paxton borders Holden to the west — we're about 10 minutes away and treat it like our own backyard.",
    intro: [
      "Paxton's rural, heavily-wooded character is exactly what makes exterior cleaning so important here. Tree cover and damp shade mean roofs streak, siding greens and decks grow slick with algae faster than in open suburbs. Pro Pressure Washing, based next door in Holden, keeps Paxton homes clean with the gentle soft-wash methods these shaded properties need.",
      "We're just 10 minutes from most Paxton addresses, so we can get out quickly for everything from a full house wash to a single mossy walkway.",
    ],
    local: [
      "Homes around Moore State Park, Anna Maria College and the town center sit on large, tree-shaded lots — postcard New England, but ideal conditions for roof algae and north-side mildew. Cedar shingle and older wood exteriors are common in Paxton and demand a careful low-pressure touch; a high-pressure blast would fur the wood and drive water behind the boards. Newer homes here tend toward vinyl, which we keep looking new with a gentle yearly maintenance wash.",
      "Rural properties come with their own realities, and Paxton pressure washing usually means more than just the house: long driveways and walkways streaked with moss, decks that back onto the woods and stay damp, sheds and outbuildings, and roofs under heavy canopy that develop black streaks years before homes in sunnier towns. We clean all of it at the correct pressure for each surface.",
      "Because so many Paxton homes are on private wells and surrounded by gardens and woodland, we use eco-friendly, biodegradable cleaning solutions and rinse landscaping before and after every job. It's the responsible way to work in a town like this, and it means you never have to worry about runoff into your well, your vegetable garden or the conservation land next door.",
      "Paxton's elevation and open, hilly farmland also mean wind-driven grime and pollen coat homes from every direction, not just the shaded north side. We wash the whole exterior — all four sides, the trim, the soffits and eaves — so you're not left with one clean wall and three dirty ones. And since we're right next door in Holden, a Paxton pressure washing job is one of the easiest for us to schedule quickly, even in the busy spring and early-summer stretch.",
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
      {
        q: "Do you clean sheds, outbuildings and long driveways too?",
        a: "Yes. Paxton pressure washing often includes more than the house — we clean outbuildings, fences, and the long moss-streaked driveways and walkways that come with rural lots, all in the same visit when you'd like.",
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
      "Princeton's housing skews toward larger, higher-value homes on wooded acreage, plus classic antique colonials and capes near the town common. Many have cedar, wood clapboard or premium siding that must be cleaned gently — the last thing these homes need is a high-pressure blast stripping paint or driving water behind the boards. The elevation and tree cover around Wachusett mean north-facing roofs and walls streak early and heavily, so roof cleaning and house soft washing are the services we're called for most in Princeton.",
      "Higher up, the longer damp season takes a real toll. Snow lingers, shade is constant, and moss gets a firm hold on roofs, stone walkways and the north sides of homes. We treat that moss and algae at the root rather than just rinsing it, which is the only way to keep it from racing back at this elevation — and we do it without ever putting high pressure to a roof or cedar wall.",
      "Princeton's rural, scenic lots also come with long driveways, stone and paver walkways, and hillside decks that weather fast. Our pressure washing covers all of it: concrete and stone hardscaping cleaned with the right technique, decks brightened and prepped for stain, and homes soft washed top to bottom. Everything is done with eco-friendly solutions, which matters on the well-served, garden-heavy properties that are the norm up here.",
      "Because Princeton properties are spread out and often set well back from the road, we come prepared to be self-sufficient — reaching the far sides of a home, the detached garage or barn, and the long approach walkways without needing to be right on top of a spigot. It's the kind of rural job an out-of-town company can find awkward, but for a Holden-based crew fifteen minutes away, a Princeton home tucked into the hills near Wachusett is a familiar, straightforward visit.",
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
      {
        q: "Why does moss come back so fast on my Princeton roof?",
        a: "Princeton's elevation, shade and long damp seasons are ideal for moss and algae. We kill the growth at the root instead of just rinsing it, which keeps it away far longer, and we can set up periodic maintenance for heavily shaded homes.",
      },
    ],
  },
  {
    slug: "pressure-washing-sterling-ma",
    name: "Sterling",
    keyword: "pressure washing Sterling MA",
    title: "Pressure Washing Sterling MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Sterling, MA. House soft washing, roof, deck & concrete cleaning for homes & farms. Insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Sterling, MA",
    distanceFromHolden:
      "Sterling is about 15 minutes north of Holden, and we're out that way often.",
    intro: [
      "Sterling blends classic New England town center, orchards and farmland with newer residential neighborhoods — and all of it collects the mold, algae and pollen that come with our humid summers and cold, wet winters. Pro Pressure Washing keeps Sterling homes and outbuildings clean with methods matched to each surface, from delicate siding to hard concrete.",
      "We're about 15 minutes from Sterling and cover the whole town, from the center and Route 12 corridor out to the orchard roads and lakeside homes.",
    ],
    local: [
      "Sterling has a wide mix of housing: antique colonials and farmhouses near the common, vinyl-sided colonials in the newer subdivisions, and farm properties with barns, outbuildings and long fence lines. Older wood and cedar need a gentle soft wash, while newer vinyl benefits from a yearly maintenance clean. Homes near the orchards and along shaded country roads see heavy roof algae and green north walls, which makes roof cleaning and house soft washing two of our most-requested Sterling services.",
      "Farm and country properties are a specialty of ours here. Sterling pressure washing often means barns and outbuildings, fence lines that have grayed and greened over the years, and equipment pads and concrete that pick up grime through the seasons. We match the method to each surface and use eco-friendly solutions that are safe around animals, gardens, orchards and the well water most of these properties run on.",
      "Sterling's seasons drive the work: pollen and winter grime in the spring, mildew and pond-adjacent damp through the summer, and leaf and berry staining in the fall. We help homeowners time their pressure washing to stay ahead of it — a spring house wash to reset after winter, or a fall cleanup of the deck, walkways and gutters before the snow flies.",
      "The town's fruit trees and heavy tree cover are a big part of what makes Sterling beautiful and also what makes exteriors work harder. Sap, pollen, bird droppings and berry stains land on siding, decks and cars all season, and the shade keeps everything damp enough for algae to thrive. Our soft washing lifts all of it without harming the surface underneath — and because we're only about fifteen minutes up the road in Holden, we can get out to Sterling quickly whenever you notice the buildup starting.",
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
      {
        q: "When should I schedule pressure washing in Sterling?",
        a: "Spring is great for clearing winter grime and pollen, and fall is ideal for removing mildew and leaf and berry stains before winter. We work year-round in Sterling, so whenever you notice buildup, it's a good time to call.",
      },
    ],
  },
  {
    slug: "pressure-washing-rutland-ma",
    name: "Rutland",
    keyword: "pressure washing Rutland MA",
    title: "Pressure Washing Rutland MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Rutland, MA. Soft washing for colonial subdivisions plus roof, deck & concrete cleaning. Insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Rutland, MA",
    distanceFromHolden:
      "Rutland is about 15 minutes northwest of Holden — a town we serve constantly.",
    intro: [
      "Rutland has grown fast, and many of its neighborhoods are newer vinyl-sided colonials on open and semi-wooded lots. Those homes look great — until a couple of New England seasons leave green algae streaking down the north side and grime dulling the whole exterior. Pro Pressure Washing keeps Rutland's homes looking new with a safe yearly soft wash, and we've cleaned and restored plenty of Rutland decks over the years.",
      "We're about 15 minutes away and know the town's subdivisions well, so scheduling is quick and easy.",
    ],
    local: [
      "As the geographic center of Massachusetts, Rutland gets the full range of New England weather, and its many newer vinyl colonials are prime candidates for algae and pollen buildup on shaded walls. A gentle annual soft wash is the ideal maintenance — it keeps the vinyl looking new and stops mold from ever getting established. This is the bread and butter of pressure washing in Rutland: keeping newer homes in the subdivisions off West Road, Pommogussett Road and beyond looking the way they did the day they were built.",
      "Beyond the subdivisions, Rutland has plenty of rural and semi-wooded properties with decks, fences and long concrete or paver driveways that weather in the shade of surrounding trees. Decks in particular gray and grow slick here, and we clean and brighten a lot of them — restoring the wood and prepping it for stain so homeowners get years more life out of it.",
      "Because Rutland's homes are relatively new but its weather isn't gentle, timing makes a big difference. We help homeowners set up a simple yearly rhythm: a spring house wash to clear pollen and winter film, and a deck or concrete cleaning as the outdoor season kicks off. It keeps everything looking sharp without ever letting the algae get a foothold that's harder and costlier to remove later.",
      "Rutland's newer neighborhoods also tend to have homes of a similar age and style close together, which means when one house on the street greens up, the rest usually aren't far behind. We wash a lot of Rutland homes side by side for exactly that reason, and neighbors often coordinate to have their pressure washing done around the same time. It keeps the whole street looking sharp — and there's no travel surcharge, since Rutland is only about fifteen minutes from our Holden base.",
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
      {
        q: "How often should I have my Rutland home pressure washed?",
        a: "For most newer vinyl homes here, a gentle wash once a year keeps the siding looking new and stops algae from getting established. Heavily shaded or north-facing walls may benefit from a touch-up in between.",
      },
    ],
  },
  {
    slug: "pressure-washing-west-boylston-ma",
    name: "West Boylston",
    keyword: "pressure washing West Boylston MA",
    title: "Pressure Washing West Boylston MA | Pro",
    metaDescription:
      "Pressure washing in West Boylston, MA. Soft washing, roof, deck & concrete cleaning near the Wachusett Reservoir. Insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in West Boylston, MA",
    distanceFromHolden:
      "West Boylston borders Holden to the east — we're about 10 minutes away.",
    intro: [
      "West Boylston sits along the Wachusett Reservoir, and that water means humidity — which means homes here see more than their share of roof algae, green siding and damp, mildewed decks. Pro Pressure Washing, based just next door in Holden, keeps West Boylston homes clean and protected with soft washing that's safe for the surfaces and the environment around the reservoir.",
      "We're about 10 minutes from most of town, from Oakdale to the neighborhoods overlooking the water.",
    ],
    local: [
      "Many West Boylston homes are older colonials, capes and lakeside properties, along with newer developments. The proximity to the reservoir and the Quinapoxet and Stillwater rivers keeps the air damp, so north-facing roofs and walls streak early and decks stay slick — classic soft-wash territory. Roof cleaning and house washing are the services West Boylston homeowners ask for most, precisely because the humidity here grows algae faster than in drier towns.",
      "Working this close to the Wachusett Reservoir watershed, we're especially careful with our eco-friendly, biodegradable solutions and our rinsing, so nothing runs off where it shouldn't. It's a responsibility we take seriously in West Boylston, and it's the right way to keep the pressure washing gentle on both your home and the water everyone here depends on.",
      "The lakeside setting adds specific jobs to the mix: decks and porches that face the water and never fully dry out, boathouse and shed exteriors, and stone or concrete patios and steps that grow moss in the shade. We clean older wood and cedar gently, keep newer vinyl looking new with a maintenance wash, and restore the hardscaping so the whole property makes the most of that reservoir view.",
      "Because West Boylston borders Holden, we treat it as part of our home turf — quick to reach, quick to quote, and easy to fit in for a small job as well as a big one. Whether you're in Oakdale, near the old center, or on one of the roads overlooking the water, a local crew that's ten minutes away means you're not paying for travel time and you're not waiting weeks to get on the schedule.",
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
      {
        q: "Can you clean lakeside decks and patios that stay damp?",
        a: "Yes. Waterfront decks, porches and stone or concrete patios that never fully dry out are common here and grow slick with algae. We clean and brighten them so they're safe to walk on and look their best.",
      },
    ],
  },
  {
    slug: "pressure-washing-boylston-ma",
    name: "Boylston",
    keyword: "pressure washing Boylston MA",
    title: "Pressure Washing Boylston MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Boylston, MA. Soft washing for homes on wooded lots, plus roof, deck & concrete cleaning. Insured. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Boylston, MA",
    distanceFromHolden:
      "Boylston is about 15 minutes east of Holden and part of our regular service area.",
    intro: [
      "Boylston's rural, spread-out character — larger lots, mature trees, and homes tucked into the landscape near Tower Hill Botanic Garden and the reservoir — makes for beautiful properties that also collect roof algae, siding mildew and mossy walkways. Pro Pressure Washing keeps Boylston homes clean with the gentle, effective methods these wooded lots call for.",
      "We're about 15 minutes from Boylston and serve the whole town.",
    ],
    local: [
      "Homes in Boylston range from antique colonials and farmhouses to larger custom homes on wooded acreage. Cedar, wood clapboard and premium siding are common, and all of it needs the careful low-pressure touch of soft washing rather than a high-pressure blast. The heavy tree cover and proximity to the Wachusett Reservoir keep properties damp and shaded, so roofs streak and decks gray quickly — which is why roof cleaning and house soft washing lead the pressure washing requests we get in Boylston.",
      "Estate-style lots come with estate-style hardscaping. Boylston homes often have long stone and concrete walkways, paver patios, pool decks and stone steps that pick up moss and grime in the shade. We clean all of it with the right technique for the material — controlled pressure for durable stone and concrete, gentle care for anything more delicate — and can re-sand paver joints so patios look and perform like new.",
      "Because so much of Boylston is wooded, garden-heavy and on private wells, we work exclusively with eco-friendly, biodegradable solutions and rinse landscaping thoroughly. It keeps the cleaning safe for the mature plantings, gardens and conservation areas that make the town what it is, and it's simply the right way to work on these properties.",
      "Boylston's larger lots also mean the exterior work adds up: a big house, a long roof, plenty of hardscaping and often a barn, garage or pool house as well. Rather than make you line up a different contractor for each, we handle the whole property in one visit — house, roof, gutters, deck, walkways and outbuildings — and give you a single quote for it. For homeowners near Tower Hill and the reservoir who want their property looking its best for the season, it's the simplest way to get everything done at once.",
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
      {
        q: "Are your cleaning products safe for my gardens and well?",
        a: "Yes. We use biodegradable, eco-friendly solutions and rinse landscaping before and after, which matters on Boylston's wooded, garden-heavy properties that mostly run on private wells.",
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
      "Shrewsbury's housing runs from mid-century capes and colonials to large, newer custom homes, often with premium siding, extensive hardscaping and beautiful decks that owners want kept immaculate. These are homes where a careful, professional soft wash matters — no cracked vinyl, no stripped stain, just a clean, even result. House soft washing and roof cleaning are our most-requested pressure washing services in Shrewsbury, followed closely by paver-patio and pool-deck cleaning at the higher-end homes.",
      "Properties near Lake Quinsigamond and along the town's many tree-lined streets deal with extra humidity and shade, so roof streaks and north-wall algae show up early and come back if they aren't treated properly. We kill the growth at the root rather than just rinsing the surface, which is what keeps these homes looking sharp between cleanings — important in a town where the neighbors notice.",
      "The higher-end homes here also mean more hardscaping to care for: paver patios, pool surrounds, stone walkways and long driveways. We clean pavers at a controlled pressure that protects the surface and joints, re-sand the joints on request, and restore stamped and stained concrete to an even finish. It's the detail work that makes a Shrewsbury property look genuinely maintained, not just occasionally cleaned.",
      "Shrewsbury moves fast, and a lot of our work here is tied to real estate — sellers getting a home camera-ready for listing photos and open houses, and new owners resetting a property right after they move in. A house wash, a roof cleaning and a driveway restoration are some of the highest-return curb-appeal projects there are before a sale, and we're used to turning them around on a tight timeline so your Shrewsbury home looks its best exactly when it needs to.",
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
      {
        q: "Can you re-sand my paver patio after cleaning it?",
        a: "Yes. We clean pavers at a controlled pressure that protects the joints, then re-sand them on request so your patio looks and performs like new — a popular add-on at Shrewsbury's higher-end homes.",
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
      "Westborough's newer subdivisions are full of vinyl-sided colonials that benefit from a yearly maintenance wash, while the downtown and older neighborhoods have wood and cedar homes that need a gentler soft-wash approach. Tree-lined streets and wet lowland areas near the Assabet keep roofs and north walls prone to algae, so house soft washing and roof cleaning are the pressure washing services Westborough homeowners request most.",
      "With a strong commercial and office presence near the highway corridor, Westborough is also a place we do a lot of commercial pressure washing — storefronts, office buildings, sidewalks and business exteriors, fully insured and scheduled around business hours. For property managers along Route 9 and near the I-495 interchange, we're one insured vendor who can keep an entire property presentable, from the building facade to the entrance walk.",
      "Whether it's a home or a business, the approach is the same: match the method to the surface. Delicate siding and painted facades get low-pressure soft washing; concrete walkways, loading areas and parking-lot aprons get hot-water pressure washing that lifts gum, grease and salt film evenly. It's how we keep both a Westborough family's colonial and a downtown storefront looking their best.",
      "The tech and office parks off Route 9 and Computer Drive have brought a lot of newer construction to Westborough, and those buildings — plus the apartment and condo developments around them — benefit from a regular exterior wash to stay looking current. For homeowners, the same growth means many properties are only a couple of decades old, with vinyl and Hardie siding that responds beautifully to a gentle annual soft wash. Whatever corner of Westborough you're in, we tailor the pressure washing to the property and keep it on a schedule that's easy to remember. From the historic homes near the town common to the newest subdivisions and the businesses along the highway corridor, we bring the same insured, careful work and an honest quote before we start.",
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
      {
        q: "Do you provide certificates of insurance for commercial jobs?",
        a: "Yes. We carry full liability insurance and provide COIs on request for Westborough property managers and business owners, and we schedule commercial pressure washing around your hours.",
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
      "Northborough's housing mixes antique colonials near the center with mid-century capes and newer vinyl-sided homes in the subdivisions. Older wood and cedar exteriors call for a gentle soft wash; newer vinyl benefits from a yearly maintenance clean to keep algae from taking hold. Homes near the orchards, the Assabet River and the town's many wooded, shaded streets see heavier roof algae and green north walls, which makes roof cleaning and house soft washing our most-requested Northborough pressure washing services.",
      "The apple country around town is beautiful, but it means damp, shaded, tree-heavy lots — perfect conditions for the black roof streaks and green siding we specialize in removing. We treat that growth at the root with a low-pressure soft wash so it stays gone, rather than just rinsing the surface and watching it come back within a season.",
      "Beyond the house and roof, Northborough homes come with decks, walkways and concrete that weather in the shade. We clean and brighten decks and prep them for stain, clear moss off stone and concrete walkways, and restore driveways and patios with hot-water surface cleaning. It lets a homeowner take care of the whole exterior in one visit instead of chasing each problem separately.",
      "Northborough's central location near the junction of Routes 20 and 135 and I-290 makes it an easy, regular stop on our route, so scheduling is straightforward and there's no big travel charge tacked on. From the neighborhoods around Ellsworth and Solomon Pond to the older homes near the common, we give every Northborough property the same careful, method-matched pressure washing — and an honest, up-front quote before we start.",
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
      {
        q: "Can you clean the deck and walkways at the same visit?",
        a: "Yes. Most Northborough pressure washing jobs cover more than the house — we can clean and brighten the deck, clear moss off walkways, and restore the driveway or patio in the same visit.",
      },
    ],
  },
  {
    slug: "pressure-washing-southborough-ma",
    name: "Southborough",
    keyword: "pressure washing Southborough MA",
    title: "Pressure Washing Southborough MA | Pro Pressure Washing",
    metaDescription:
      "Pressure washing in Southborough, MA. Soft washing for estate homes plus roof, deck & concrete cleaning. Insured & careful. Free quote: (508) 736-0089.",
    h1: "Pressure Washing in Southborough, MA",
    distanceFromHolden:
      "Southborough is about 30 minutes southeast of Holden and part of our service area.",
    intro: [
      "Southborough is one of the area's most affluent towns, with large homes, estate properties, horse farms and the historic campus of St. Mark's School. Homeowners here expect meticulous, careful work — and that's exactly what Pro Pressure Washing delivers, with soft washing that leaves premium siding, extensive hardscaping and beautiful grounds spotless and unharmed.",
      "We serve all of Southborough, from Fayville to the estate roads, about 30 minutes from our Holden base.",
    ],
    local: [
      "Southborough's larger custom and estate homes often feature premium siding, brick, stone and elaborate hardscaping — surfaces that demand a knowledgeable, careful hand. We soft wash siding and clean masonry, stone patios, pool decks and long driveways with the right pressure and solution for each, protecting finishes, plantings and joints. On homes of this caliber, house soft washing and careful hardscape cleaning are the pressure washing services we're trusted with most in Southborough.",
      "The town's wooded, spacious lots and horse-country properties see plenty of roof algae, mossy walkways and weathered decks and fences. We treat all of it gently and thoroughly: roofs soft washed to remove the black streaks and moss without touching the shingles, cedar and premium siding cleaned without a hint of high pressure, and stone and paver hardscaping restored to an even, finished look.",
      "Careful work here also means careful stewardship. Southborough properties come with extensive gardens, mature landscaping and, on the horse farms, animals — so we use eco-friendly, biodegradable solutions, protect and rinse plantings before and after, and control every application to avoid overspray. It's the standard these estate grounds deserve, and it's how we've earned the trust of homeowners who don't accept anything less.",
      "On a property of this size, timing and coordination matter as much as the cleaning itself. We're happy to work around landscapers, pool openings and events, and to phase a larger job so the grounds are never all torn up at once. Many Southborough homeowners put their pressure washing on a standing schedule — a spring house and hardscape wash, a fall gutter and deck cleanup — so the estate always looks its best without them having to think about it. It's the kind of reliable, no-hassle service the town's busy homeowners and property managers count on year after year.",
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
      {
        q: "Can you clean stone patios, pool decks and long driveways?",
        a: "Yes. Estate hardscaping is a big part of our Southborough pressure washing — we clean stone and paver patios, pool surrounds and long driveways at the correct pressure to protect the surface and joints.",
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
