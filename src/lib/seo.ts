import type { Metadata } from "next";
import { business } from "@/data/business";

type PageMetaInput = {
  title: string;
  description: string;
  path: string; // e.g. "/services/" — canonical path with trailing slash
  ogImage?: string;
};

/**
 * Builds a full Metadata object for a page: unique title/description, canonical,
 * and Open Graph + Twitter Card tags. `metadataBase` is set in the root layout.
 */
export function pageMeta({
  title,
  description,
  path,
  ogImage,
}: PageMetaInput): Metadata {
  const url = path;
  const image = ogImage ?? business.ogImage;
  // Only the default card has known dimensions (1200x630). Per-page images vary
  // (service photos are 4:3), and declaring dimensions we haven't measured makes
  // scrapers reserve the wrong box — omitting them lets the scraper measure.
  const isDefaultImage = image === business.ogImage;
  return {
    // `absolute` opts out of the layout's "%s | Pro Pressure Washing" template
    // so each page renders exactly the title we specify.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: business.name,
      images: [
        isDefaultImage
          ? { url: image, width: 1200, height: 630, alt: title }
          : { url: image, alt: title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
