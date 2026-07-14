import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import Accordion from "@/components/Accordion";
import CtaStrip from "@/components/CtaStrip";
import QuoteSection from "@/components/QuoteSection";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, MapPinIcon } from "@/components/Icons";
import { business } from "@/data/business";
import { residentialServices } from "@/data/services";
import { type Town } from "@/data/towns";
import { breadcrumbSchema, serviceSchema, faqSchemaFrom } from "@/lib/schema";

export default function TownTemplate({ town }: { town: Town }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas/" },
    { name: town.name, path: `/${town.slug}/` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: `Pressure Washing in ${town.name}, MA`,
          description: `Professional pressure washing and soft washing for homes and businesses in ${town.name}, MA.`,
          path: `/${town.slug}/`,
          areaName: town.name,
        })}
      />
      <JsonLd data={faqSchemaFrom(town.faqs)} />

      <PageHeader
        title={town.h1}
        subtitle={`House washing, roof cleaning, deck & concrete cleaning for ${town.name} homes and businesses.`}
        crumbs={crumbs}
        image="/images/2015/07/AFTER-House-Washing.jpg"
      />

      {/* Unique local content */}
      <Section>
        <div className="prose-copy mx-auto max-w-3xl space-y-5 text-base leading-relaxed">
          {town.intro.map((p, i) => (
            <p key={`intro-${i}`}>{p}</p>
          ))}
          <h2 className="pt-2 text-2xl text-heading">
            Pressure washing built for {town.name}&apos;s homes
          </h2>
          {town.local.map((p, i) => (
            <p key={`local-${i}`}>{p}</p>
          ))}

          {/* Distance / response-time callout */}
          <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 not-prose">
            <MapPinIcon width={22} height={22} className="mt-0.5 shrink-0 text-brand-red" />
            <p className="text-sm text-body">{town.distanceFromHolden}</p>
          </div>
        </div>
      </Section>

      {/* Services offered in this town — internal links to every service page */}
      <Section className="bg-neutral-50">
        <SectionHeading
          title={`Our Services in ${town.name}`}
          intro="One call cleans it all — here's what we clean for your home or business."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {residentialServices.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="font-semibold text-heading group-hover:text-brand-red">
                {s.navLabel}
              </span>
              <ArrowRightIcon width={18} height={18} className="shrink-0 text-brand-red" />
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/services/"
            className="text-sm font-bold uppercase tracking-wide text-brand-red hover:underline"
          >
            See all residential &amp; commercial services →
          </Link>
        </div>
      </Section>

      <Section>
        <WhyChoose />
      </Section>

      {/* Town-specific FAQs */}
      <Section className="bg-neutral-50">
        <SectionHeading title={`${town.name} Pressure Washing FAQs`} />
        <div className="mx-auto max-w-3xl">
          <Accordion items={town.faqs} />
        </div>
      </Section>

      <CtaStrip
        text={`Get your ${town.name} property looking like new — request a free quote.`}
        buttons={[
          { label: "Get a Free Quote", href: "/contact-us/" },
          { label: `Call ${business.phone.display}`, href: `tel:${business.phone.tel}`, outline: true },
        ]}
      />

      <QuoteSection />
      <Testimonials />
    </>
  );
}
