import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import WhyChoose from "@/components/WhyChoose";
import QuoteSection from "@/components/QuoteSection";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import CtaStrip from "@/components/CtaStrip";
import JsonLd from "@/components/JsonLd";
import { CheckIcon } from "@/components/Icons";
import {
  towns,
  getTown,
  townServices,
  townImageBlocks,
  townIntro,
} from "@/data/towns";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

// Only the known town slugs are generated (static export).
export function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ town: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) return {};
  return pageMeta({
    title: `Power Washing ${town.name} MA | Pro Pressure Washing`,
    description: `Top-rated power washing in ${town.name}, MA. House, roof, deck, fence, patio & concrete cleaning with hot/cold water and eco-friendly solutions. Free quotes.`,
    path: `/${slug}/`,
  });
}

export default async function TownPage({ params }: Params) {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) notFound();

  const intro = townIntro(town.name);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: `Power Washing ${town.name} MA`, path: `/${slug}/` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: `Power Washing in ${town.name} MA`,
          description: `Professional pressure and soft washing services for homes and businesses in ${town.name}, MA.`,
          path: `/${slug}/`,
          areaName: town.name,
        })}
      />

      <PageHeader
        title={`Power Washing ${town.name} MA`}
        subtitle={`Pro Pressure Washing — Top Rated Power Washing Service in ${town.name} MA`}
        crumbs={crumbs}
        image="/images/2021/03/Pressure-Washing-Service-House-Washing-Worcester-County-MA-960x320.jpeg"
      />

      <Section>
        <h2 className="text-2xl text-heading">
          Power washing for houses, buildings, decks, patios, fences, roofs,
          walkways, pool decks and more
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed">
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h3 className="mt-10 text-xl text-heading">
          {town.name} Pressure Washing Services For:
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {townServices.map((s) => (
            <li key={s} className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <CheckIcon width={15} height={15} />
              </span>
              <span className="text-sm font-medium text-heading">{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Four titled image blocks */}
      <Section className="pt-0">
        <div className="grid gap-6 sm:grid-cols-2">
          {townImageBlocks.map((block) => (
            <figure key={block.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className="aspect-[16/9] w-full bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={block.image}
                  alt={`${block.alt} in ${town.name} MA — Pro Pressure Washing`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-4 text-center text-base font-bold text-heading">
                {block.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaStrip
        text={`Contact Pro Pressure Washing for a FREE QUOTE in ${town.name}, MA`}
        buttons={[{ label: "Request a Quote", href: "/contact-us/" }]}
      />

      <Section className="bg-neutral-50">
        <WhyChoose />
      </Section>

      <AboutSection />
      <QuoteSection />
      <Testimonials />
    </>
  );
}
