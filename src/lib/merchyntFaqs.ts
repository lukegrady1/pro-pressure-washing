import type { Faq } from "@/data/faqs";

// Q&A from the Google Business Profile, read from the Merchynt FAQ widget's
// HTML. The site is a static export, so this runs at build time: the homepage
// picks up new questions on the next deploy. Returns [] on any failure so the
// caller can fall back to the site's own FAQs.
const FAQ_URL =
  "https://www.localmarketingmanager.com/api/questions/pro-pressure-washing-frequently-asked-questions?textColor=%23000000&backgroundColor=%23ffffff&showTitle=true&borderRadius=10px&visibility=showAllExpanded&isTransparentBackgroundApplied=false";

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function toText(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e: string) => {
      if (e[0] === "#") {
        const code =
          e[1] === "x" || e[1] === "X"
            ? parseInt(e.slice(2), 16)
            : parseInt(e.slice(1), 10);
        return Number.isFinite(code) ? String.fromCodePoint(code) : m;
      }
      return ENTITIES[e.toLowerCase()] ?? m;
    })
    .replace(/\s+/g, " ")
    .trim();
}

export async function getMerchyntFaqs(): Promise<Faq[]> {
  try {
    const res = await fetch(FAQ_URL, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) return [];
    const html = await res.text();
    const items = html.split('class="accordion-item"').slice(1);
    return items
      .map((item) => {
        const q = item.match(
          /class="accordion-title"[^>]*>([\s\S]*?)<\/span>/,
        )?.[1];
        const a = item.match(
          /class="accordion-content"[^>]*>([\s\S]*?)<\/div>/,
        )?.[1];
        return q && a ? { q: toText(q), a: toText(a) } : null;
      })
      .filter((f): f is Faq => f !== null && f.q !== "" && f.a !== "");
  } catch {
    return [];
  }
}
