import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import Accordion from "@/components/Accordion";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import { FullFaqWidget } from "@/components/MerchyntWidgets";
import { faqs } from "@/data/faqs";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Pressure Washing FAQs | Pro Pressure Washing",
  description:
    "Answers to common pressure washing questions — pricing, eco-friendly chemicals, insurance & more — in Worcester County, MA. Call (508) 736-0089.",
  path: "/faq/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faq/" },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema()} />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking your free quote."
        crumbs={crumbs}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Section>

      {/* Q&A from the Google Business Profile (Merchynt widget). The FAQPage
          schema above covers only the site's own FAQs. */}
      <Section className="bg-neutral-50">
        <SectionHeading
          title="More Questions & Answers"
          intro="Answers to more common questions about our pressure washing, house washing and gutter cleaning services, from our Google Business Profile."
        />
        <div className="mx-auto max-w-3xl">
          <FullFaqWidget />
        </div>
      </Section>

      <AboutSection />
      <QuoteSection />
      <Testimonials />
    </>
  );
}
