# Pro Pressure Washing — Site Build Spec

> Source: *Competitive SEO Audit & Action Plan* (vs. Kings of Pressure Inc.), Section 9 "Build Spec: Instructions for Claude Code" + the page/keyword tables from Section 4. Every Claude Code session should work from this spec.

## Business constants (use everywhere, never vary)

| Item | Value |
|---|---|
| Business name | Pro Pressure Washing |
| Base | Holden, MA (Worcester County) |
| Phone | (508) 736-0089 — `tel:5087360089` links everywhere |
| Current domain | clpropressurewashing.com |
| Tagline | One Call Cleans It All. |
| Hours | Open Monday–Sunday |
| Positioning | Family-owned, fully insured, honest pricing, soft washing + hot/cold water, eco-friendly solutions, free quotes |
| Proof assets | Named Google reviews (Robert L., Trever G., Tim L. — Holden), before/after photos, top-rated GBP (4.9★) |

## Technical requirements (9.2)

- **Stack:** static generator for speed (this project uses **Next.js static export** — allowed by the spec). Beating Kings of Pressure's heavy Elementor build on Core Web Vitals is a deliberate ranking lever.
- **Templating:** town & service pages generated from **structured content files**, one file per town/service, so unique copy is enforced per page — never one template with a swapped town name (that is the competitor's weakness; do not clone it).
- **Reusable components:** sticky mobile call bar (`tel:`), quote form (name/phone/address/service), before/after slider, review card (name + town), FAQ accordion that emits FAQPage JSON-LD, service-area footer with town links, breadcrumb nav with BreadcrumbList schema.
- **Schema (JSON-LD):** LocalBusiness on every page (name, phone, Holden MA address, geo, openingHours Mo-Su, areaServed = target towns, sameAs → GBP & Facebook). Service schema per service page. FAQPage wherever FAQs render. Validate with Rich Results Test.
- **Performance budget:** Lighthouse ≥ 90 mobile on every template; images WebP ≤ 200 KB, lazy-loaded below the fold; no heavy slider libs; system or single self-hosted font.
- **Redirects (keep existing equity) — 301:**
  - `/services/houses-buildings-roofs/` → `/house-washing-worcester-ma/`
  - `/services/patios-and-walkways/` → `/driveway-patio-cleaning-worcester-ma/`
  - `/services/fences-and-decks/` → `/deck-fence-cleaning-worcester-ma/`
  - `/gallery/our-work-2/` → `/gallery/`
  - `/frequently-asked-questions/` → `/faq/`
  - keep or 301 the three `/power-washing-[town]-ma/` pages to the new town slugs.
- **Also ship:** XML sitemap, robots.txt, canonicals, OG/Twitter meta per page, GA4 + Search Console, form → email + honeypot, click-to-call tracking.

## Content rules Claude Code must follow (9.3)

- One primary keyword per page (from tables below). **Title ≤ 60 chars, keyword first.** Unique **140–155 char** meta description with phone + CTA on every page.
- **Exactly one H1 per page** containing the primary keyword. H2s: power/pressure-washing variant, process, benefits, service area, FAQs.
- Service pages **600–1,000 words**; town pages **500–800 words** of town-specific content (neighborhoods, housing stock, jobs done there, local review, distance/response time from Holden). **No boilerplate reuse across town pages.**
- **3–6 unique FAQs per page.** Include a **pricing-guidance section** on service pages (ranges are fine) — the competitor refuses to publish pricing; honest pricing is Pro's brand.
- Image filenames + alt: `[service]-[town]-ma-[before|after].jpg` with descriptive alt.
- Internal links: every town page ↔ every core service page; blog posts → relevant service + town pages; vary anchor text.
- Mark copy needing real client input with `TODO(client):` (photos, exact prices, job stories).

## Pages to build (Section 4)

### 4.1 Core pages
| Slug | Primary keyword | Title tag |
|---|---|---|
| `/` | power washing Worcester MA | Power Washing Worcester MA \| Pro Pressure Washing |
| `/about/` | brand + trust | About Us \| Family-Owned Power Washing, Holden MA |
| `/contact/` | free quote power washing Worcester | Free Power Washing Quote \| Pro Pressure Washing |
| `/reviews/` | power washing reviews Worcester | Reviews \| Worcester County Power Washing |
| `/gallery/` | before and after power washing | Before & After Gallery \| Pro Pressure Washing |
| `/service-areas/` | power washing near me / service area | Service Areas \| Power Washing in Worcester County |

### 4.2 Service pages (residential)
| Slug | Primary keyword | Title tag |
|---|---|---|
| `/house-washing-worcester-ma/` | house washing Worcester MA | House Washing Worcester MA \| Soft Wash Experts |
| `/soft-washing-worcester-ma/` | soft washing Worcester MA | Soft Washing Worcester MA \| Safe House Cleaning |
| `/roof-cleaning-worcester-ma/` | roof cleaning Worcester MA | Roof Cleaning Worcester MA \| Black Streak Removal |
| `/deck-fence-cleaning-worcester-ma/` | deck cleaning Worcester MA | Deck & Fence Cleaning Worcester MA \| Pro |
| `/driveway-patio-cleaning-worcester-ma/` | driveway cleaning Worcester MA | Driveway & Patio Cleaning Worcester MA |
| `/gutter-cleaning-worcester-ma/` | gutter cleaning & brightening Worcester | Gutter Cleaning & Brightening Worcester MA |

### 4.3 Service pages (commercial)
| Slug | Primary keyword | Title tag |
|---|---|---|
| `/commercial-pressure-washing/` | commercial pressure washing Worcester MA | Commercial Pressure Washing Worcester MA |
| `/commercial-building-washing/` | building washing Massachusetts | Commercial Building Washing \| Central MA |
| `/storefront-sidewalk-cleaning/` | storefront cleaning Worcester | Storefront & Sidewalk Cleaning Worcester MA |
| `/hoa-condo-washing/` | HOA / condo power washing MA | HOA & Condo Complex Washing \| Worcester County |
| `/fleet-washing/` | fleet washing Massachusetts | Fleet Washing Central MA \| Pro Pressure Washing |
| `/graffiti-removal/` | graffiti removal Worcester MA | Graffiti Removal Worcester MA \| Fast Response |

### 4.4 Town pages — the main battleground
Slug pattern: `/pressure-washing-[town]-ma/`. Launch 10–15 high-quality pages first, expand monthly. Each must be genuinely unique: real neighborhoods/landmarks, housing stock + its cleaning problems (cedar shingles, vinyl colonials, brick multifamilies), jobs completed there with photos, a town-specific review, distance/response time from Holden, town-specific FAQs. 500–800 words.

**First wave:** Holden (home base — build first, no page today), Worcester (city page — real opening), Paxton, Princeton, Sterling, Rutland, West Boylston, Boylston, Shrewsbury, Westborough, Northborough, Southborough.
**Second wave (KoP home turf):** Auburn, Millbury, Grafton, Leicester.
> The three existing pages (Shrewsbury, Northborough, Westborough at `/power-washing-[town]-ma/`) keep equity via 301 to the new slugs, or keep old slugs.

### 4.5 Blog — first 12 posts
1. How Much Does Power Washing Cost in Worcester County? [2026 Pricing Guide] — real price ranges
2. Pressure Washing vs. Soft Washing: Which Does Your Home Need?
3. Why Your Roof Has Black Streaks (and How to Remove Them Safely)
4. Best Time of Year to Power Wash Your House in New England
5. How to Get Your House Exterior Ready to Sell: Curb Appeal Checklist
6. Vinyl Siding Cleaning: DIY vs. Professional (What Can Go Wrong)
7. Deck Cleaning Before Staining: The Complete Prep Guide
8. Removing Moss and Lichen From Roofs in Massachusetts
9. How Often Should You Power Wash Your Home? A New England Schedule
10. Post-Winter Exterior Cleanup: Salt Stains, Grime, and Mold
11. What HOAs Should Look for in a Power Washing Contractor
12. Is Pressure Washing Safe for [Cedar / Hardie Board / Brick]? Material Guide

## Build order (9.4 kickoff)
1. Content collections: `src/data` service + town files (one entry per page → dynamic routes).
2. Pages: home, about, contact, reviews, gallery, service-areas, faq, 6 residential + 6 commercial service pages, town pages — exact slugs/keywords/titles above.
3. Shared components (mostly already built): Layout, StickyCallBar (mobile), QuoteForm, BeforeAfterSlider, ReviewCard, FaqAccordion (+FAQPage JSON-LD), Breadcrumbs (+BreadcrumbList JSON-LD).
4. LocalBusiness JSON-LD sitewide + Service JSON-LD on service pages; sitemap, robots.txt, canonicals, OG, 301 redirects.
5. Draft unique copy per page per 9.3 — keyword-first titles, FAQs, pricing-range sections. `TODO(client):` for photos, exact prices, job stories.
6. Verify: Lighthouse ≥ 90 mobile (home + one service + one town), validate JSON-LD, check internal links, confirm unique titles/metas.

**Follow-ups:** add town pages Auburn, Millbury, Grafton, Leicester; add the blog (12 posts, one per week, each linking to matching service + town pages).
