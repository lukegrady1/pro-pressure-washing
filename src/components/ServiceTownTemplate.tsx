import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import Accordion from "@/components/Accordion";
import CtaStrip from "@/components/CtaStrip";
import QuoteSection from "@/components/QuoteSection";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import { CheckIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";
import { business } from "@/data/business";
import { getServicePage, type ServicePage } from "@/data/services";
import { serviceTownPages, type ServiceTownPage } from "@/data/serviceTowns";
import { getTown } from "@/data/towns";
import { breadcrumbSchema, serviceSchema, faqSchemaFrom } from "@/lib/schema";

// A service in one town (e.g. interior painting in Holden). Same shape as the
// service template, but the schema and breadcrumbs are scoped to the town and
// the sidebar links up to the parent service page and the town page.
export default function ServiceTownTemplate({ page }: { page: ServiceTownPage }) {
  const service = getServicePage(page.serviceSlug);
  const town = getTown(page.townSlug);
  if (!service || !town) return null;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: service.navLabel, path: `/${service.slug}/` },
    { name: town.name, path: `/${page.slug}/` },
  ];
  const related = service.related
    .map((slug) => getServicePage(slug))
    .filter((s): s is ServicePage => Boolean(s));
  // Sibling pages: the same service in other towns.
  const siblings = serviceTownPages
    .filter((p) => p.serviceSlug === page.serviceSlug && p.slug !== page.slug)
    .map((p) => ({ page: p, town: getTown(p.townSlug) }))
    .filter((s) => Boolean(s.town));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: page.h1,
          description: page.excerpt,
          path: `/${page.slug}/`,
          areaName: town.name,
        })}
      />
      <JsonLd data={faqSchemaFrom(page.faqs)} />

      <PageHeader
        title={page.h1}
        subtitle={page.excerpt}
        crumbs={crumbs}
        image={service.image}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="prose-copy max-w-none space-y-5 text-base leading-relaxed">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              {page.kicker}
            </p>
            {page.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Distance / response-time callout, shared with the town page */}
            <div className="not-prose flex items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <MapPinIcon width={22} height={22} className="mt-0.5 shrink-0 text-brand-red" />
              <p className="text-sm text-body">{town.distanceFromHolden}</p>
            </div>

            {page.sections.map((sec) => (
              <div key={sec.h2} className="pt-2">
                <h2 className="mb-2 text-2xl text-heading">{sec.h2}</h2>
                {sec.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            <div className="pt-2">
              <h2 className="mb-3 text-2xl text-heading">
                Why {town.name} homeowners choose us
              </h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {page.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-brand-red" />
                    <span className="text-sm text-body">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card">
              <h2 className="text-lg text-heading">Get a Free Quote</h2>
              <p className="mt-2 text-sm text-body">
                Honest pricing, no pressure. Tell us about your {town.name} project and
                we&apos;ll get right back to you.
              </p>
              <a href={`tel:${business.phone.tel}`} className="btn mt-4 w-full">
                <PhoneIcon width={16} height={16} />
                {business.phone.display}
              </a>
              <Link
                href="/contact-us/"
                className="btn btn-outline mt-3 w-full !border-brand-red !text-brand-red hover:!bg-brand-red hover:!text-white"
              >
                Request Online
              </Link>

              <div className="mt-6 border-t border-neutral-200 pt-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-heading">
                  More in {town.name}
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <Link href={`/${town.slug}/`} className="text-brand-red hover:underline">
                      Pressure Washing in {town.name}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${service.slug}/`} className="text-brand-red hover:underline">
                      {service.navLabel} across Worcester County
                    </Link>
                  </li>
                </ul>
              </div>

              {related.length > 0 && (
                <div className="mt-6 border-t border-neutral-200 pt-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-heading">
                    Related Services
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`/${r.slug}/`} className="text-brand-red hover:underline">
                          {r.navLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </Section>

      {/* Fast, free quotes — we don't publish prices, we route to a quote */}
      <Section className="bg-neutral-50">
        <SectionHeading
          title="Fast, Free Quotes"
          intro={`Every ${town.name} home is different, so we give you an exact price up front — no surprises, no pressure. Fill out our quick quote form or call for a fast, free quote.`}
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact-us/" className="btn">
            Get a Free Quote
          </Link>
          <a
            href={`tel:${business.phone.tel}`}
            className="btn btn-outline !border-brand-red !text-brand-red hover:!bg-brand-red hover:!text-white"
          >
            <PhoneIcon width={16} height={16} />
            Call {business.phone.display}
          </a>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <SectionHeading title={`${town.name} ${service.navLabel} FAQs`} />
        <div className="mx-auto max-w-3xl">
          <Accordion items={page.faqs} />
        </div>
      </Section>

      {/* Same service in nearby towns + the county-wide page */}
      {siblings.length > 0 && (
        <Section className="bg-neutral-50">
          <SectionHeading
            title={`${service.navLabel} Nearby`}
            intro={`We're based in Holden and serve homes throughout Worcester County. ${service.navLabel} pages for other towns:`}
          />
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
            {siblings.map(({ page: p, town: t }) => (
              <Link
                key={p.slug}
                href={`/${p.slug}/`}
                className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-heading shadow-sm transition-colors hover:border-brand-red hover:text-brand-red"
              >
                {t!.name}
              </Link>
            ))}
            <Link
              href={`/${service.slug}/`}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-heading shadow-sm transition-colors hover:border-brand-red hover:text-brand-red"
            >
              All of Worcester County
            </Link>
          </div>
        </Section>
      )}

      <CtaStrip
        text={`Ready for a fresh coat in ${town.name}? Get your free quote today.`}
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
