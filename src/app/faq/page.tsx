import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import FaqWidget from "@/components/FaqWidget";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
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
        <FaqWidget />
      </Section>

      <AboutSection />
      <QuoteSection />
      <Testimonials />
    </>
  );
}
