import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import CtaStrip from "@/components/CtaStrip";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon } from "@/components/Icons";
import { residentialServices, commercialServices } from "@/data/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Pressure Washing Services | Worcester County MA",
  description:
    "Residential and commercial pressure washing across Worcester County, MA — houses, roofs, decks, concrete, storefronts and more. Call (508) 736-0089.",
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
        title="Our Pressure Washing Services"
        subtitle="Residential and commercial exterior cleaning across Worcester County, MA."
        crumbs={crumbs}
      />

      <Section>
        <SectionHeading
          title="Residential Services"
          intro="Safe, effective cleaning for every part of your home's exterior."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-7 lg:grid-cols-3">
          {residentialServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <SectionHeading
          title="Commercial Services"
          intro="Keep your business, building or community property looking its best — fully insured, on your schedule."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-7 lg:grid-cols-3">
          {commercialServices.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="group flex flex-col justify-between gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:gap-4 sm:p-6"
            >
              <div>
                <h3 className="text-sm text-heading group-hover:text-brand-red sm:text-lg">
                  {s.navLabel}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed sm:mt-2 sm:text-sm">
                  {s.excerpt}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-red sm:text-sm">
                Learn More <ArrowRightIcon width={16} height={16} />
              </span>
            </Link>
          ))}
        </div>
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
