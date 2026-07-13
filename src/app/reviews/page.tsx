import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import CtaStrip from "@/components/CtaStrip";
import QuoteSection from "@/components/QuoteSection";
import JsonLd from "@/components/JsonLd";
import { StarIcon } from "@/components/Icons";
import { business } from "@/data/business";
import { testimonials } from "@/data/testimonials";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Reviews | Worcester County Power Washing",
  description:
    "Read reviews for Pro Pressure Washing — top-rated, family-owned power washing in Worcester County, MA. See why neighbors recommend us. Call (508) 736-0089.",
  path: "/reviews/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews/" },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="Customer Reviews"
        subtitle={`Rated ${business.rating} stars by ${business.reviewCount} Google reviewers across Worcester County.`}
        crumbs={crumbs}
      />

      <Section>
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-3 text-center">
          <span className="flex gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} width={22} height={22} fill="currentColor" stroke="none" />
            ))}
          </span>
          <p className="text-lg font-bold text-heading">
            {business.rating} out of 5 · {business.reviewCount} Google reviews
          </p>
          <a
            href={business.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Read & Leave a Review on Google
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name + t.quote.slice(0, 12)}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-card"
            >
              <span className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={16} height={16} fill="currentColor" stroke="none" />
                ))}
              </span>
              <blockquote className="mt-3 flex-1 text-base italic leading-relaxed text-heading">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-bold text-brand-red">
                {t.name}
                <span className="font-normal text-body-muted"> — {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        {/* TODO(client): add more named Google reviews here as they come in. */}
      </Section>

      <CtaStrip
        text="Join our happy customers — get your free quote today."
        buttons={[{ label: "Get a Free Quote", href: "/contact-us/" }]}
      />
      <QuoteSection />
    </>
  );
}
