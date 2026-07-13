import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import WhyChoose from "@/components/WhyChoose";
import CtaStrip from "@/components/CtaStrip";
import QuoteSection from "@/components/QuoteSection";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import { aboutParagraphs, aboutImage } from "@/data/content";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "About Us | Family-Owned Power Washing, Holden MA",
  description:
    "Family-owned, fully insured power washing in Holden, MA, serving all of Worcester County. Honest pricing, free quotes. Call (508) 736-0089.",
  path: "/about/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="About Pro Pressure Washing"
        subtitle="Family-owned, fully insured, and proud to serve our Worcester County neighbors."
        crumbs={crumbs}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={aboutImage.src}
              alt={aboutImage.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="prose-copy space-y-4 text-base leading-relaxed">
            <h2 className="text-2xl text-heading">Your local, family-owned team</h2>
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <WhyChoose />
      </Section>

      <CtaStrip
        text="One Call Cleans It All — let's get your property looking like new."
        buttons={[{ label: "Get a Free Quote", href: "/contact-us/" }]}
      />

      <QuoteSection />
      <Testimonials />
    </>
  );
}
