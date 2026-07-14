import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import CtaStrip from "@/components/CtaStrip";
import QuoteSection from "@/components/QuoteSection";
import ReviewsWidget from "@/components/ReviewsWidget";
import JsonLd from "@/components/JsonLd";
import { StarIcon } from "@/components/Icons";
import { business } from "@/data/business";
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

        <ReviewsWidget />
      </Section>

      <CtaStrip
        text="Join our happy customers — get your free quote today."
        buttons={[{ label: "Get a Free Quote", href: "/contact-us/" }]}
      />
      <QuoteSection />
    </>
  );
}
