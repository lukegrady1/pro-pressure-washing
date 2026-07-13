import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import CtaStrip from "@/components/CtaStrip";
import QuoteSection from "@/components/QuoteSection";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, MapPinIcon } from "@/components/Icons";
import { towns } from "@/data/towns";
import { residentialServices, commercialServices } from "@/data/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Service Areas | Power Washing in Worcester County",
  description:
    "Pro Pressure Washing serves Holden, Worcester, Paxton, Shrewsbury & all of Worcester County, MA. Find your town for local power washing. Call (508) 736-0089.",
  path: "/service-areas/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/service-areas/" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="Power Washing Service Areas"
        subtitle="Based in Holden and serving all of Worcester County, MA."
        crumbs={crumbs}
        image="/images/2015/07/AFTER-House-Washing.jpg"
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center text-base leading-relaxed">
          <p>
            Pro Pressure Washing is a family-owned company based in{" "}
            <strong>Holden, Massachusetts</strong>, serving homeowners and
            businesses throughout Worcester County. Choose your town below for
            local details, or{" "}
            <Link href="/contact-us/" className="text-brand-red hover:underline">
              request a free quote
            </Link>{" "}
            and we&rsquo;ll take it from there.
          </p>
        </div>
      </Section>

      <Section className="bg-neutral-50 pt-0">
        <SectionHeading title="Towns We Serve" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {towns.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.slug}/`}
              className="group flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <MapPinIcon width={20} height={20} className="shrink-0 text-brand-red" />
              <span className="font-semibold text-heading group-hover:text-brand-red">
                {t.name}, MA
              </span>
            </Link>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-body-muted">
          Don&rsquo;t see your town? We serve the surrounding communities too —
          just give us a call and ask.
        </p>
      </Section>

      <Section>
        <SectionHeading
          title="What We Clean"
          intro="Every service is available across our entire service area."
        />
        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {[...residentialServices, ...commercialServices].map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-sm transition-colors hover:border-brand-red"
            >
              <span className="font-medium text-heading group-hover:text-brand-red">
                {s.navLabel}
              </span>
              <ArrowRightIcon width={16} height={16} className="shrink-0 text-brand-red" />
            </Link>
          ))}
        </div>
      </Section>

      <CtaStrip
        text="Serving all of Worcester County — get your free quote today."
        buttons={[{ label: "Get a Free Quote", href: "/contact-us/" }]}
      />
      <QuoteSection />
    </>
  );
}
