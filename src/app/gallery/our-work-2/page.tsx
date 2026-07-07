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
  title: "Before & After Photos | Pressure Washing Worcester County MA",
  description:
    "See real before & after results from Pro Pressure Washing — house washing, decks, patios, siding, concrete, moss, rust and graffiti removal across Worcester County, MA.",
  path: "/gallery/our-work-2/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Our Work", path: "/gallery/our-work-2/" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="Our Work"
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
