# Handoff: Rebuild of clpropressurewashing.com (Pro Pressure Washing)

## Project Goal
Recreate the existing Pro Pressure Washing website (client-owned content and design) as a fast, SEO-optimized site. The current site is WordPress (theme: "The Landscaper" by QreativeThemes, SiteOrigin page builder, WooCommerce installed but unused) and has significant SEO gaps. Preserve the look/feel and all content; fix everything listed in the SEO Requirements section.

**Recommended stack:** Static or SSG (Astro or Next.js static export) — no CMS needed unless client requests one. Plain HTML/CSS/JS is also acceptable. Prioritize Core Web Vitals.

---

## 1. Business Facts (use everywhere consistently — NAP consistency matters)

- **Business name:** Pro Pressure Washing
- **Tagline:** "One Call Cleans It All."
- **Owner/operator referenced in reviews:** Chris
- **Address:** 343 Reservoir Street, Holden, MA 01520 (from existing LocalBusiness schema)
- **Phone:** (508) 736-0089 → `tel:5087360089`
- **Email:** clpropressurewashing@gmail.com
- **Hours:** Open Monday–Sunday
- **Service area:** Worcester County, MA — Holden, Paxton, Princeton, Sterling, Rutland, Shrewsbury, West Boylston, Boylston, Northborough, Westborough, Worcester
- **Google reviews link:** `https://search.google.com/local/reviews?placeid=ChIJE6yQ6Nv_44kRSP9Yvgw3rEY`
- **Positioning:** Family-owned, fully insured, top-rated, eco-friendly (non-toxic solutions), soft washing + pressure washing, hot/cold water, residential + commercial, free quotes, honest pricing.

---

## 2. Site Map / URL Structure (preserve these URLs exactly; site is being rebuilt at same domain)

| Page | URL |
|---|---|
| Home | `/` |
| Services (index) | `/services/` |
| Houses, Buildings and Roofs | `/services/houses-buildings-roofs/` |
| Patios and Walkways | `/services/patios-and-walkways/` |
| Fences and Decks | `/services/fences-and-decks/` |
| Gallery (Our Work) | `/gallery/our-work-2/` |
| Contact Us | `/contact-us/` |
| FAQs | `/frequently-asked-questions/` |
| Town: Shrewsbury | `/power-washing-shrewsbury-ma/` |
| Town: Northborough | `/power-washing-northborough-ma/` |
| Town: Westborough | `/power-washing-westborough-ma/` |
| Privacy Policy | `/privacy-policy/` |
| Terms of Service | `/terms-of-service/` |

If any URL must change, add a 301 redirect from the old path.

**Navigation (header):** Home | Services (dropdown: 3 service pages) | Our Work | Contact Us
**Footer nav:** Our Work, FAQs, Contact Us, Privacy Policy, Terms of Service + Services list + About blurb + Working hours.

---

## 3. Design System (extracted from live site computed styles)

### Colors
| Token | Value | Usage |
|---|---|---|
| Primary red | `#DD3333` (rgb 221,51,51) | Buttons, section headings (H3), nav link hover/active, accents |
| Dark charcoal | `#3A3A3A` | Header background, top bar background |
| Footer dark | `#333333` | Footer background |
| Body text gray | `#A5A5A5` | Body copy |
| Muted gray | `#7D7D7D` | Top bar text, H6 labels |
| Footer text | `#757575` | Footer copy |
| Heading dark | `#464646` | H5 / card headings |
| White | `#FFFFFF` | Hero H1 text, button text, footer headings |

### Typography (Google Fonts)
- **Headings:** Roboto Slab, weight 700
  - H1: 46px, white on hero images
  - H3 (section titles): 32px, red `#DD3333`, centered
  - H5 (card titles): 18px, `#464646`
  - H6 (small labels): 13px, gray
- **Body:** Roboto, 14px, line-height 1.6, `#A5A5A5`

### Components
- **Buttons:** solid `#DD3333`, white text, UPPERCASE, ~1px border radius (nearly square), Roboto
- **Header:** dark `#3A3A3A` bar; thin top bar above it with tagline, location ("Holden, Massachusetts"), phone, "Mon-Sun", and a red "Request a Quote" button; white logo image below/within on dark background; horizontal nav with dropdown for Services
- **Hero:** full-width image slider (4 slides), each with small uppercase kicker text (e.g. "TOP RATED SERVICE"), large white Roboto Slab H1, red CTA button. Slide images are 960x320 landscape photos
- **Section pattern:** centered red H3 title + centered gray intro paragraph + content grid
- **Service cards:** image top, H5 title, excerpt text, red "READ MORE" link/button — 3-column grid
- **"Why Choose Us":** 6 items in 3x2 grid, each with icon, H6-style bold title, short paragraph. Titles: Top Rated / Professional / Licensed & Insured / Free Consultations / Reliable Services / Experienced
- **Testimonials:** carousel of quotes with name + town, on light gray background, next/prev arrows
- **Quote form widget:** "Request A Quote" — Name, Email, Phone, dropdown (House or Building / Patio or Walkway / Fence or Deck / Other), message. Appears on home, services, service detail, FAQ pages (sidebar/section)
- **Footer:** 4 columns on `#333333` — About Us blurb (with town links to the 3 town pages), Extra Navigation, Our Services, Working Hours (Mon–Sun: OPEN). Bottom bar: copyright + "For free quote call 508-736-0089"
- **Interior page header:** page-title band with H1 + subtitle + breadcrumbs (Home > Services > Page)
- **Before/After:** paired images labeled BEFORE / AFTER; on the Patios page there is an image-comparison (slider) widget
- **Gallery:** masonry/grid of before-after photo pairs with lightbox

### Logo & favicon
- Logo: `https://clpropressurewashing.com/wp-content/uploads/2023/02/Pro-Pressure-Washing-logo.png`
- Favicon: `https://clpropressurewashing.com/wp-content/uploads/2020/03/cropped-favicon-270x270.png`

---

## 4. Page-by-Page Content (copy is client-owned; reuse verbatim unless noted)

### 4.1 Home (`/`)

**Hero slider (4 slides):**
1. Kicker: TOP RATED SERVICE — H1: "One Call Cleans It All" — CTA: "Get in Touch" → /contact-us
   - img: `/wp-content/uploads/2021/03/Pressure-Washing-Service-House-Washing-Worcester-County-MA-960x320.jpeg`
2. Kicker: WE TAKE CARE OF IT ALL — H1: "We provide pressure washing services to a wide range of clients" — CTA: "View Our Services" → /services
   - img: `/wp-content/uploads/2021/03/Fence-Pressure-Washing-Service-960x320.png`
3. Kicker: VIEW OUR WORK — H1: "We take care of the toughest stains" — CTA: "View Our Gallery" → /gallery/our-work-2/
   - img: `/wp-content/uploads/2021/03/Vinyl-Siding-Pressure-Washing-Service-960x320.png`
4. Kicker: FIVE STAR SERVICE — H1: "One Call Cleans IT ALL!" — CTA: "READ OUR REVIEWS" → Google reviews link
   - img: `/wp-content/uploads/2021/03/House-Washing-Pressure-Washing-Service-960x320.png`

**Section: Pro Services We Offer**
> "We provide exceptional pressure washing services to a wide range of commercial and residential properties using pressure washing and soft washing techniques with hot/cold water and eco friendly solutions. We take pride in being able to offer a wide range of services and satisfy all of our clients needs. Please feel free to browse our services and gallery and give us a call!"
Button: SEE ALL SERVICES → /services
Then 3 service cards (Houses/Buildings/Roofs, Fences and Decks, Patios and Walkways) with excerpts + READ MORE.
CTA strip: "See what we can do for your property!" → View Work

**Section: About Pro Pressure Washing** (3 paragraphs, reused on most pages)
> "Pro Pressure Washing is an experienced, family owned business based out of Holden Massachusetts serving all of Worcester County. Pro Pressure Washing being relatively new has been able to rise and become one of the top rated pressure washing services in Worcester County.
>
> We are fully insured and take pride in our services and our quality of work. We treat every project as if we are washing our own personal property and make sure everything is treated with care.
>
> We pride ourselves on being honest and straightforward, we do not overprice projects. Give us a call and we will come give you a free quote!"
CTA: Get In Touch. Image: `/wp-content/uploads/2025/02/Pro-Pressure-Washing-scaled.jpeg`

**Section: Request A Quote** (form — see components)

**Section: Why Choose Us?** (6 items)
- **Top Rated** — "We are one of the top rated pressure washing companies in the Worcester County area."
- **Professional** — "We use professional state of the art equipment combined with environmentally friendly cleaning agents to attain the best results."
- **Licensed & Insured** — "We are a fully insured pressure washing company."
- **Free Consultations** — "We offer free consultations for our services, and will provide you with an actual quote"
- **Reliable Services** — "We pride ourselves on being on time and being responsive to phone calls and e-mails."
- **Experienced** — "For years Pro Pressure Washing has provided residents and businesses of Worcester County with exceptional pressure cleaning services."

CTA strip: "Let's get your property cleaned up and looking like new!" — buttons: See all Services / Send a Message

**Section: Client Testimonials** (carousel)
1. "Chris was incredibly easy to work with. Scheduling was quick. Our home and fence looked brand new when he was done. We will definitely use him again and would highly recommend him to anyone." — Robert L., Holden, MA
2. "Chris did a fantastic job and he is a wonderful person to work with! He cleaned out our gutters which were half full along with unclogging the downspouts. Highly recommended! Well done and will definitely use his services again! Thanks Chris!" — Trever G., Holden, MA
3. "Chris was able to get our entire home looking immaculate! We have some very difficult areas to get to on the back of our house and they look amazing. He was able to get to those tough spots without a ladder. Worth every penny. Thank you Chris!" — William S., Massachusetts, US
4. "After this winter, I noticed some mold and spots growing along the foundation of my home. Chris came and gave me an estimate on the entire house for what I planned to pay for the foundation alone. Everything looks beautiful. Thank you again Chris!!" — Tim L., Holden, MA

**Section: map + closing** — "Give us a call if you have a project in mind. We would love to get your property in shape for summer!" + embedded Google Map of Worcester County.

### 4.2 Services index (`/services/`)
- Page title band: H1 "Services", subtitle "Enhance the look of your property with our services", breadcrumbs.
- 3 service cards (same as home), About section, quote form, CTA strip "Let us help take care of one of your largest investments.", testimonials.

### 4.3 Houses, Buildings and Roofs (`/services/houses-buildings-roofs/`)
Subtitle: "Pressure Washing Services for Houses, Building and Roofs in Worcester County MA"

Body copy:
> "Pro pressure washing uses a low pressure soft washing process to clean the siding of your home or business. A non toxic solution is applied to the surface to kill mold, mildew and algae. The surface is then rinsed using low pressure.
>
> The growth on your roof can shorten the life of your roof and cause costly, premature repairs or replacement. Our process gently treats all the moss, lichen, and mold (presents as black streaks) with a bio-degradable solution that is sprayed on the asphalt shingles, using low pressure. Once the roof is treated, the organic growth will turn white or light brown, falling off over time with the rain. Depending on the level of growth, roofs will take between 30-120 days to be clean and free from debris."

- Embedded YouTube video: `https://www.youtube.com/embed/U30b-lMT-3Y`
- Images: `/wp-content/uploads/2020/03/house-buildings-1.jpg`, `/wp-content/uploads/2020/03/house-buildings-2.jpg`, plus 3 roof-cleaning West Boylston before/after images (`/wp-content/uploads/2020/08/...`)
- **Key Benefits of the Service** (shared block on all 3 service pages): "Giving your property the clean it's been waiting for has more benefits than you may think." List: Improve your home's curb appeal / Prevent Repairs / Protect against harmful substances / Increase Home Value
- **Accordion** (shared): Our Qualifications ("We have several years experience under our belt, we are far from amateurs."), Our Capabilities ("We can handle a large variety of jobs and sizes, just give us a call!"), Our Commitment ("We are committed to being the best in the areas we serve, that means best result, best service and being on time.")
- Sidebar: services list, "Have Any Questions?" widget with equipment image + contact link
- Then shared About / quote form / CTA / testimonials blocks.

### 4.4 Patios and Walkways (`/services/patios-and-walkways/`)
Body copy:
> "Pro Pressure washing uses hot water combined with high pressure and non toxic chemicals to clean oil, grease, dirt, mold, mildew, from concrete, patio paves and masonry work."

- Before/after comparison widget (dirty vs clean stairs images: `/wp-content/uploads/2015/07/stairs1_before.jpg`, `/wp-content/uploads/2015/07/stairs1_before-1.jpg`)
- Wide before/after image: `/wp-content/uploads/2021/04/Before-After-pressure-washing-cement-walkway-in-Worcester-MA-1024x312.png`
- Shared blocks: Key Benefits, accordion, About, form, testimonials.

### 4.5 Fences and Decks (`/services/fences-and-decks/`)
Body copy:
> "Pro pressure washing cleans wood and vinyl fences and decks using a combination of non toxic chemicals and low pressure to remove mold, mildew, and algae without damaging the surface."

- BEFORE image: `/wp-content/uploads/2015/07/fence1-before.jpg`; AFTER image: `/wp-content/uploads/2020/03/fence1-after.jpg`
- Deck images: `/wp-content/uploads/2020/07/Deck-Cleaning-and-Restoration-in-Rutland-MA-Pro-Pressure-Washing.jpg`, `/wp-content/uploads/2020/07/BEFORE-deck-cleaning-pressure-washing.jpg`
- Key Benefits intro here adds: "It's not about just spraying some water and soap and calling it a day, you are making an investment."
- Extra CTA: "Interested In This Service? Send us a message!" → Get In Touch
- Shared blocks as above.

### 4.6 Gallery (`/gallery/our-work-2/`)
Title band: "Gallery — A selection of our best work". H1: "Our Work". Grid of before/after pairs with lightbox. Full image list (all under `https://clpropressurewashing.com/wp-content/uploads/`):

- 2015/07/walkway1_after-1.jpg (before walkway) / 2015/07/walkway1_after.jpg (after)
- 2015/07/stairs1_before.jpg / 2015/07/stairs1_before-1.jpg (stairs)
- 2015/07/siding3-after.jpg / 2015/07/siding3-after-1.jpg (siding)
- 2015/07/siding2-before.jpg / 2015/07/siding2-after.jpg
- 2015/07/siding1-before.jpg / 2015/07/siding1-after.jpg
- 2015/07/fence1-before.jpg / 2020/03/fence1-after.jpg
- 2015/07/BEFORE-House-washing.jpg / 2015/07/AFTER-House-Washing.jpg
- 2015/07/BEFORE-power-washing-siding.jpg / 2015/07/AFTER-power-washing-siding.jpg
- 2015/07/BEFORE-power-washing-house.jpg / 2015/07/AFTER-power-washing-house.jpg
- 2015/07/BEFORE-power-washing-house-1.jpg / 2015/07/AFTER-power-washing-house-1.jpg
- 2015/07/BEFORE-pressure-washing-house-Sterling.jpg / 2015/07/after-pressure-wash-house-near-me-Sterling.jpg (Sterling MA)
- 2015/07/before-deck-power-washing-in-Holden-NEW.jpg / 2015/07/pressure-wash-deck-Holden-NEW.jpg (Holden deck)
- 2015/07/before-deck-pressure-washing-in-Holden-NEW.jpg / 2015/07/deck-pressure-washing-in-Holden-NEW.jpg
- 2015/07/BEFORE-house-pressure-washing-service-Holden.jpg / 2015/07/Huse-Pressure-Washing-Service-Holden-AFTER.jpg
- 2015/07/BEFORE-house-washing-and-cement-walkway-power-washing.jpg / 2015/07/Power-washing-house-and-cement-walkway-Worcester-MA.jpg
- 2015/07/before-patio-pressure-washing-for-moss-removal-in-Worceester.jpg / 2015/07/patio-pressure-washing-for-moss-removal-in-Worcester.jpg
- 2015/07/before-power-washing-concrete-stairs-in-Worcester.jpg / 2015/07/power-washing-concrete-stairs-in-Worcester.jpg
- 2015/07/before-power-washing-graffiti-removal-in-Worcester.jpg / 2015/07/power-washing-graffiti-removal-in-Worcester.jpg
- 2015/07/before-pressure-washing-rust-stain-removal-in-Worcester.jpg / 2015/07/pressure-washing-rust-stain-removal-in-Worcester.jpg
- 2015/07/before-power-washing-deck-in-Worcester.jpg / 2015/07/power-washing-deck-in-Worcester.jpg
- 2015/07/before-power-washing-blue-stone-patio-in-Worcester.jpg / 2015/07/power-washing-blue-stone-patio-in-Worcester.jpg
- 2015/07/before-pressure-washing-deck-floor-in-Worcester.jpg / 2015/07/pressure-washing-deck-floor-in-Worcester.jpg
- 2015/07/BEFORE-power-washing-house-Leicester-MA.jpg / 2015/07/After-power-washing-house-Leicester-MA-2.jpg (Leicester MA)
- 2015/07/before-power-washing-walkway.jpg / 2015/07/after-power-washing-walkway.jpg
- 2015/07/Before-power-washing-siding-1.jpg / 2015/07/AFTER-power-washing-siding-1.jpg

Download all originals from the live site before rebuild. Note gallery covers extra service types worth mentioning in copy/alt text: graffiti removal, rust stain removal, moss removal, gutter cleaning (mentioned in a testimonial).

### 4.7 Contact Us (`/contact-us/`)
- Title band: "Contact Us — Give us a call or fill in the contact form"
- Intro: "Feel free to ask us any questions you may have, we are very responsive and will get right back to you!"
- Form fields: Your Name*, Your Email address*, The Subject, Your Phone number*, Message*. ("Fields marked with a * are required")
- Contact details block: Pro Pressure Washing, Holden, MA, US / Telephone (508) 736-0089 / E-mail clpropressurewashing@gmail.com
- Working hours list (Mon–Sun OPEN), Google Map embed (Worcester County), testimonials.
- Form backend: needs a form handler (e.g., Formspree/Netlify Forms/serverless endpoint) sending to clpropressurewashing@gmail.com, with spam protection (honeypot, not visual CAPTCHA if avoidable).

### 4.8 FAQs (`/frequently-asked-questions/`)
Q&A list (also use for FAQPage schema):
1. **How much does your service cost?** — "All projects are different and that is why we offer a free estimate to evaluate the size and cost of the job."
2. **Do you use harmful chemicals?** — "No, our cleaning chemicals are environmentally friendly and therefore are safe for plants and animals."
3. **Are you fully insured?** — "Yes, Pro Pressure Washing is a fully insured pressure washing company."
4. **Do you do commercial properties?** — "Yes, we can take care of commercial properties."
5. **Do you do small jobs?** — "Yes, we can take care of a large scale of jobs just give us a call."
6. **Who will work on my property?** — "Well trained, supervised personnel with the proper equipment."
Plus shared About / form / testimonials blocks.

### 4.9 Town landing pages (Shrewsbury, Northborough, Westborough — identical template)
Structure (swap town name):
- H1: "Power Washing {Town} MA"
- H2: "Pro Pressure Washing- Top Rated Power Washing Service in {Town} MA"
- H3: "Power washing for houses, buildings, decks, patios, fences, roofs, walkways, pool decks and more"
- Two intro paragraphs:
> "Pro Pressure Washing provides exceptional pressure washing services to a wide range of commercial and residential properties in {Town} MA. We use professional pressure washing and soft washing techniques with hot/cold water and eco friendly solutions. We take pride in being able to offer a wide range of services and satisfy all of our clients needs."
>
> "Dust, dirt, grease, mold and mildew can decrease the aesthetic appearance of your home, building, fence or deck. Professional pressure washing will restore your home's exterior to looking like new. Our patio and concrete pressure washing services will clean and restore the original beauty of your cement walkways, pool decks or stairs. We offer a combination of pressure washing and soft washing techniques using hot and cold water and non toxic cleaning solutions."
- H3 "{Town} Pressure Washing Services For:" list: House Washing / Vinyl Siding Power Washing / Fence Power Washing / Deck Power Washing / Roof Power Washing / Patios & Walkways Pressure Washing / Concrete Pressure Washing for Sidewalks and More
- Before/after image strips + 4 titled image blocks (House Washing, Fence Washing, Patios Walkways & Concrete, Deck Power Washing) — town-specific images exist under `/wp-content/uploads/2021/03/` with town name in filename
- Town-page testimonials (different from sitewide set): Victoria B., Jen K., Ryan G. (see live pages for full quotes)
- "Request a Quote / Contact Pro Pressure Washing for a FREE QUOTE" CTA
- "WHY CHOOSE TO WORK WITH PRO PRESSURE WASHING?" (same 6 items)
- Shared About / form / testimonials / footer.

### 4.10 Privacy Policy & Terms of Service
Fetch content from live pages (`/privacy-policy/`, `/terms-of-service/`) during build, or have the client supply updated versions.

---

## 5. SEO Requirements (the main reason for this rebuild)

### Current problems found in audit
1. **No meta descriptions** on any page.
2. **No Open Graph / Twitter Card tags** at all.
3. **Weak, duplicated title tags** — every page is "{Page} – Pro Pressure Washing-serving Worcester County Massachusetts". No keyword targeting.
4. **Multiple H1s on the homepage** (4, one per hero slide) and misused heading hierarchy sitewide (H6 for top-bar labels and footer column titles, H5 for cards, page H1s inconsistent — gallery has H2 "Gallery" above H1 "Our Work").
5. **WordPress/WooCommerce bloat** — WooCommerce 10.8.1 loads on every page though nothing is sold; slow, heavy pages; poor Core Web Vitals.
6. **Missing/weak alt text** on several images (many gallery links show raw URLs as anchor text; some imgs have empty alt).
7. **Schema:** a LocalBusiness JSON-LD block exists on the homepage (name, address 343 Reservoir St Holden MA 01520, phone, geo, hours) but there's no Service, FAQPage, or BreadcrumbList schema, and no aggregateRating.
8. **Only 3 town landing pages** despite serving 11+ towns.
9. Copyright year is hard-coded; footer says 2026.
10. Theme demo asset hotlinked from `export-xml.qreativethemes.com` (img_divider.png) — replace with local asset.

### What to implement
**Titles & metas (unique per page, ≤60 chars titles, 150–160 char descriptions).** Suggested titles:
- Home: `Pressure Washing Worcester County MA | Pro Pressure Washing`
- Services: `Pressure Washing Services | Worcester County MA | Pro Pressure Washing`
- Houses/Roofs: `House Washing & Roof Cleaning in Worcester County MA | Pro Pressure Washing`
- Patios: `Patio, Walkway & Concrete Cleaning | Worcester County MA`
- Fences/Decks: `Fence & Deck Pressure Washing | Worcester County MA`
- Gallery: `Before & After Photos | Pressure Washing Worcester County MA`
- Contact: `Contact Us | Free Pressure Washing Quote | Holden MA`
- FAQ: `Pressure Washing FAQs | Pro Pressure Washing`
- Town pages: `Power Washing {Town} MA | Pro Pressure Washing`

**Heading structure:** exactly one H1 per page. Home H1 = "Pressure Washing in Worcester County, MA — One Call Cleans It All" (visually can live in hero slide 1; other slides use styled divs, not H1). Logical H2/H3 hierarchy; footer/top-bar labels are styled `<p>`/`<div>`, not headings.

**Structured data (JSON-LD):**
- `LocalBusiness` (subtype `CleaningService` or keep LocalBusiness) sitewide: name, image, url, telephone, address (343 Reservoir Street, Holden, MA 01520), geo, openingHoursSpecification Mo–Su, areaServed (list all towns), sameAs (Google Business Profile).
- `Service` schema on each service + town page.
- `FAQPage` schema on the FAQ page (6 Q&As above).
- `BreadcrumbList` on all interior pages.

**Technical SEO:**
- Semantic HTML5 (header/nav/main/section/footer), mobile-first responsive.
- Canonical tag on every page; XML sitemap; robots.txt.
- OG + Twitter Card tags on every page (og:image = a strong before/after photo, 1200x630 version).
- Descriptive, keyword-rich alt text on every image (pattern: "Before/After house washing in {Town} MA — Pro Pressure Washing"). Descriptive filenames retained.
- Convert images to WebP/AVIF with responsive `srcset`, explicit width/height (no CLS), lazy-load below-the-fold, eager-load hero.
- Self-host or `preconnect` Google Fonts (Roboto, Roboto Slab), `font-display: swap`.
- Target Lighthouse ≥90 all categories; minimal JS (slider, lightbox, accordion, form only).
- `tel:` links on all phone numbers; click-to-email.
- Facade/lazy embed for the YouTube video and Google Map (don't load iframes until interaction/scroll).
- 404 page. HTTPS assumed.

**Content/local SEO recommendations (build into template so client can scale):**
- Town-page template ready to clone for remaining towns (Holden, Worcester, Paxton, Princeton, Sterling, Rutland, West Boylston, Boylston) — but each needs some unique copy, don't ship near-duplicates all at once.
- Internal linking: service pages ↔ town pages ↔ gallery.
- Body copy needs light editing for grammar/consistency ("Pro pressure washing" → "Pro Pressure Washing") — keep meaning identical.

---

## 6. Build Checklist
1. Scaffold site with pages/URLs from section 2.
2. Implement design system (section 3) as CSS variables/tokens.
3. Download all images from the live site (section 4 URLs) into `/images/`, convert to WebP with originals as fallback, rename nothing (filenames are SEO assets) except adding WebP variants.
4. Build shared components: header/top-bar, hero slider, service card, quote form, why-choose grid, testimonial carousel, accordion, before/after pair, footer.
5. Populate all page content verbatim from section 4.
6. Implement all SEO items from section 5.
7. Wire the two forms to a form handler emailing clpropressurewashing@gmail.com.
8. Add JSON-LD, sitemap.xml, robots.txt, canonical tags, OG tags.
9. Validate: one H1 per page, Lighthouse ≥90, schema via Rich Results Test, no broken links, mobile layout matches desktop design intent.