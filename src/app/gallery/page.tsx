import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import Gallery from "@/components/Gallery";
import CtaStrip from "@/components/CtaStrip";
import JsonLd from "@/components/JsonLd";
import { galleryPairs } from "@/data/gallery";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Before & After Gallery | Pro Pressure Washing",
  description:
    "Real before & after power washing results across Worcester County, MA — houses, decks, patios, concrete, moss & graffiti. Free quote: (508) 736-0089.",
  path: "/gallery/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery/" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="Before & After Gallery"
        subtitle="A selection of our best work — before &amp; after."
        crumbs={crumbs}
      />

      <Section>
        <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed">
          From house washing and deck restoration to moss, rust and graffiti
          removal, here&rsquo;s a look at what a professional clean can do.
          Tap any photo to view it larger.
        </p>
        <Gallery pairs={galleryPairs} />
      </Section>

      <CtaStrip
        text="Ready to see results like these on your property?"
        buttons={[{ label: "Get a Free Quote", href: "/contact-us/" }]}
      />
    </>
  );
}
