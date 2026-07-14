import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import Accordion from "@/components/Accordion";
import CtaStrip from "@/components/CtaStrip";
import QuoteSection from "@/components/QuoteSection";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import { business } from "@/data/business";
import { getServicePage, type ServicePage } from "@/data/services";
import { breadcrumbSchema, serviceSchema, faqSchemaFrom } from "@/lib/schema";

export default function ServiceTemplate({ service }: { service: ServicePage }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: service.navLabel, path: `/${service.slug}/` },
  ];
  const related = service.related
    .map((slug) => getServicePage(slug))
    .filter((s): s is ServicePage => Boolean(s));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.h1,
          description: service.excerpt,
          path: `/${service.slug}/`,
        })}
      />
      <JsonLd data={faqSchemaFrom(service.faqs)} />

      <PageHeader
        title={service.h1}
        subtitle={service.excerpt}
        crumbs={crumbs}
        image={service.image}
      />

      {/* Intro + body, with a sticky quote sidebar */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="prose-copy max-w-none space-y-5 text-base leading-relaxed">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              {service.kicker}
            </p>
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {service.sections.map((sec) => (
              <div key={sec.h2} className="pt-2">
                <h2 className="mb-2 text-2xl text-heading">{sec.h2}</h2>
                {sec.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            <div className="pt-2">
              <h2 className="mb-3 text-2xl text-heading">Why homeowners choose us</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {service.benefits.map((b) => (
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
                Honest pricing, no pressure. Tell us about your project and we&apos;ll
                get right back to you.
              </p>
              <a href={`tel:${business.phone.tel}`} className="btn mt-4 w-full">
                <PhoneIcon width={16} height={16} />
                {business.phone.display}
              </a>
              <Link href="/contact-us/" className="btn btn-outline mt-3 w-full !border-brand-red !text-brand-red hover:!bg-brand-red hover:!text-white">
                Request Online
              </Link>
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
          intro="Every property is different, so we give you an exact price up front — no surprises, no pressure. Fill out our quick quote form or call for a fast, free quote."
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
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mx-auto max-w-3xl">
          <Accordion items={service.faqs} />
        </div>
      </Section>

      <CtaStrip
        text="Ready for a cleaner, brighter property? Get your free quote today."
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
