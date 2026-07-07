import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServiceCard";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import CtaStrip from "@/components/CtaStrip";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Pressure Washing Services | Worcester County MA | Pro Pressure Washing",
  description:
    "Explore our pressure & soft washing services in Worcester County, MA: houses, buildings & roofs, patios & walkways, fences & decks. Free, honest quotes.",
  path: "/services/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services/" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="Services"
        subtitle="Enhance the look of your property with our services."
        crumbs={crumbs}
      />

      <Section>
        <ServicesGrid />
      </Section>

      <AboutSection />
      <QuoteSection />

      <CtaStrip
        text="Let us help take care of one of your largest investments."
        buttons={[{ label: "Get a Free Quote", href: "/contact-us/" }]}
      />

      <Testimonials />
    </>
  );
}
