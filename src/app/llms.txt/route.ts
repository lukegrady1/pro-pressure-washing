import { business, fullAddress } from "@/data/business";
import { aboutParagraphs } from "@/data/content";
import { faqs } from "@/data/faqs";
import { commercialServices, residentialServices } from "@/data/services";
import { serviceTownPages } from "@/data/serviceTowns";
import { towns } from "@/data/towns";

// /llms.txt (llmstxt.org): a plain-markdown summary of the business for AI
// assistants and AI search. Built from the same data as the pages, sitemap and
// schema, so it can't drift from them. Written to out/llms.txt at build time.
export const dynamic = "force-static";

const url = (path: string) => `${business.siteUrl}${path}`;

export function GET() {
  const lines = [
    `# ${business.name}`,
    "",
    `> Family-owned, fully insured pressure washing, soft washing, gutter cleaning and interior painting company based in ${business.address.city}, MA, serving homes and businesses across Worcester County, Massachusetts. "${business.tagline}"`,
    "",
    aboutParagraphs.join("\n\n"),
    "",
    "## Business details",
    "",
    `- Name: ${business.name}`,
    `- Address: ${fullAddress}`,
    `- Phone: ${business.phone.display}`,
    `- Email: ${business.email}`,
    `- Hours: ${business.hoursText}`,
    `- Service area: ${business.serviceAreas.join(", ")}, MA (Worcester County)`,
    `- Google rating: ${business.rating} from ${business.reviewCount} reviews (${business.reviewsUrl})`,
    `- Google Business Profile: ${business.mapsPlaceUrl}`,
    "- Pricing: every job is quoted individually; quotes are free",
    "",
    "## Residential services",
    "",
    ...residentialServices.map(
      (s) => `- [${s.navLabel}](${url(`/${s.slug}/`)}): ${s.excerpt}`,
    ),
    "",
    "## Commercial services",
    "",
    ...commercialServices.map(
      (s) => `- [${s.navLabel}](${url(`/${s.slug}/`)}): ${s.excerpt}`,
    ),
    "",
    "## Service areas",
    "",
    ...towns.map((t) => `- [Pressure washing in ${t.name}, MA](${url(`/${t.slug}/`)})`),
    ...serviceTownPages.map((p) => `- [${p.h1}](${url(`/${p.slug}/`)})`),
    "",
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## Pages",
    "",
    `- [Home](${url("/")})`,
    `- [All services](${url("/services/")})`,
    `- [Service areas](${url("/service-areas/")})`,
    `- [Gallery: before and after photos](${url("/gallery/")})`,
    `- [Reviews](${url("/reviews/")})`,
    `- [FAQ](${url("/faq/")})`,
    `- [About](${url("/about/")})`,
    `- [Contact and free quote](${url("/contact-us/")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
