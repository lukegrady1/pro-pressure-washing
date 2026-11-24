import Link from "next/link";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { proServicesIntro } from "@/data/content";
import Hero from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ServicesGrid } from "@/components/ServiceCard";
import CtaStrip from "@/components/CtaStrip";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Accordion from "@/components/Accordion";
import { ImagesWidget, LocalPostsWidget } from "@/components/MerchyntWidgets";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import { LazyMap } from "@/components/LazyEmbed";
import { faqs } from "@/data/faqs";
import { featuredPairs } from "@/data/gallery";
import { getMerchyntFaqs } from "@/lib/merchyntFaqs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pro Pressure Washing Service Holden Worcester Shrewsbury MA",
  description:
    "Pro Pressure Washing: pressure washing service, gutter cleaning service, exterior house washing, driveway pressure washing in Holden, Worcester & Shrewsbury, MA.",
  path: "/",
});

export default async function HomePage() {
  // First 5 Q&As from the Google Business Profile (via Merchynt); the site's own
  // FAQs if that can't be fetched at build time.
  const googleFaqs = await getMerchyntFaqs();
  const homeFaqs = (googleFaqs.length >= 5 ? googleFaqs : faqs).slice(0, 5);

  return (
    <>
      <Hero />

      {/* Live Google reviews, just under the hero */}
      <Testimonials />

      {/* Pro Services We Offer */}
      <Section>
        <SectionHeading title="Pro Services We Offer" intro={proServicesIntro} />
        <div className="mb-6 text-center sm:mb-10">
          <Link href="/services/" className="btn">
            See All Services
          </Link>
        </div>
        <ServicesGrid />
      </Section>

      <CtaStrip
        text="See what we can do for your property!"
        buttons={[{ label: "View Our Work", href: "/gallery/" }]}
      />

      {/* Interactive before/after sliders */}
      <Section>
        <SectionHeading
          title="See the Difference — Before & After"
          intro="Drag the slider on each photo to reveal the transformation. Real pressure washing results from jobs across Worcester County, MA."
        />
        <BeforeAfterShowcase pairs={featuredPairs} />
        <div className="mt-6 text-center sm:mt-10">
          <Link href="/gallery/" className="btn">
            View Full Gallery
          </Link>
        </div>
      </Section>

      <AboutSection />

      {/* Google Business Profile photos (Merchynt widget) */}
      <Section>
        <SectionHeading
          title="Photos From Our Jobs"
          intro="Recent photos from our Google Business Profile — pressure washing, house washing and gutter cleaning across Worcester County, MA."
        />
        <ImagesWidget />
      </Section>

      <QuoteSection />

      <Section className="bg-neutral-50">
        <WhyChoose />
      </Section>

      <CtaStrip
        text="Let's get your property cleaned up and looking like new!"
        buttons={[
          { label: "See All Services", href: "/services/" },
          { label: "Send a Message", href: "/contact-us/", outline: true },
        ]}
      />

      {/* Map + closing */}
      <Section>
        <SectionHeading
          title="Serving All of Worcester County"
          intro="Give us a call if you have a project in mind. We would love to get your property in shape for summer!"
        />
        <LazyMap query="Pro Pressure Washing" embedSrc={business.mapEmbedSrc} />
      </Section>

      {/* Recent Google posts (Merchynt widget) */}
      <Section>
        <SectionHeading
          title="Latest Updates"
          intro="Our most recent posts on Google."
        />
        <LocalPostsWidget />
      </Section>

      {/* FAQ teaser: 5 Q&As from the Google Business Profile. "View More" goes
          to /faq/, which has the full Merchynt widget. No FAQPage schema here —
          /faq/ carries it for the site's own FAQs. */}
      <Section className="bg-neutral-50">
        <SectionHeading
          title="Frequently Asked Questions"
          intro="Common questions about our pressure washing, gutter cleaning, exterior washing and interior painting services in Holden, Worcester & Shrewsbury, MA."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={homeFaqs} />
        </div>
        <div className="mt-6 text-center sm:mt-8">
          <Link href="/faq/" className="btn">
            View More
          </Link>
        </div>
      </Section>
    </>
  );
}
