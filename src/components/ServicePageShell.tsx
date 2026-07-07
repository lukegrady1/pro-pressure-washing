import type { ReactNode } from "react";
import PageHeader, { type Crumb } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Section";
import ServiceSidebar from "@/components/ServiceSidebar";
import KeyBenefits from "@/components/KeyBenefits";
import Accordion from "@/components/Accordion";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import Testimonials from "@/components/Testimonials";
import { serviceAccordion } from "@/data/services";

// Layout shared by all three service detail pages.
export default function ServicePageShell({
  title,
  subtitle,
  slug,
  crumbs,
  headerImage,
  benefitsIntro,
  children,
}: {
  title: string;
  subtitle?: string;
  slug: string;
  crumbs: Crumb[];
  headerImage?: string;
  benefitsIntro?: string;
  children: ReactNode; // page-specific body content
}) {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} crumbs={crumbs} image={headerImage} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="prose-copy space-y-8">{children}</div>
          <ServiceSidebar currentSlug={slug} />
        </div>
      </Section>

      <div className="bg-neutral-50 py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <KeyBenefits intro={benefitsIntro} />
            <div>
              <h2 className="mb-4 text-2xl text-heading">More About Our Work</h2>
              <Accordion items={serviceAccordion} />
            </div>
          </div>
        </Container>
      </div>

      <AboutSection />
      <QuoteSection />
      <Testimonials />
    </>
  );
}
