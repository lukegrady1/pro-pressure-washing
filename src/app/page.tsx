import Link from "next/link";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { proServicesIntro } from "@/data/content";
import HeroSlider, { type Slide } from "@/components/HeroSlider";
import { Section, SectionHeading } from "@/components/Section";
import { ServicesGrid } from "@/components/ServiceCard";
import CtaStrip from "@/components/CtaStrip";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import { LazyMap } from "@/components/LazyEmbed";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pressure Washing Worcester County MA | Pro Pressure Washing",
  description:
    "Top-rated, family-owned pressure & soft washing in Worcester County, MA. House, roof, deck, fence, patio & concrete cleaning with eco-friendly solutions. Free quotes.",
  path: "/",
});

const slides: Slide[] = [
  {
    kicker: "Top Rated Service",
    heading: "Pressure Washing in Worcester County, MA — One Call Cleans It All",
    ctaLabel: "Get in Touch",
    ctaHref: "/contact-us/",
    image:
      "/images/2021/03/Pressure-Washing-Service-House-Washing-Worcester-County-MA-960x320.jpeg",
    alt: "House washing pressure washing service in Worcester County MA — Pro Pressure Washing",
  },
  {
    kicker: "We Take Care of It All",
    heading: "We provide pressure washing services to a wide range of clients",
    ctaLabel: "View Our Services",
    ctaHref: "/services/",
    image: "/images/2021/03/Fence-Pressure-Washing-Service-960x320.png",
    alt: "Fence pressure washing service — Pro Pressure Washing",
  },
  {
    kicker: "View Our Work",
    heading: "We take care of the toughest stains",
    ctaLabel: "View Our Gallery",
    ctaHref: "/gallery/our-work-2/",
    image: "/images/2021/03/Vinyl-Siding-Pressure-Washing-Service-960x320.png",
    alt: "Vinyl siding pressure washing service — Pro Pressure Washing",
  },
  {
    kicker: "Five Star Service",
    heading: "One Call Cleans It All!",
    ctaLabel: "Read Our Reviews",
    ctaHref: business.reviewsUrl,
    external: true,
    image: "/images/2021/03/House-Washing-Pressure-Washing-Service-960x320.png",
    alt: "House washing pressure washing service — Pro Pressure Washing",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={slides} />

      {/* Pro Services We Offer */}
      <Section>
        <SectionHeading title="Pro Services We Offer" intro={proServicesIntro} />
        <div className="mb-10 text-center">
          <Link href="/services/" className="btn">
            See All Services
          </Link>
        </div>
        <ServicesGrid />
      </Section>

      <CtaStrip
        text="See what we can do for your property!"
        buttons={[{ label: "View Our Work", href: "/gallery/our-work-2/" }]}
      />

      <AboutSection />

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

      <Testimonials />

      {/* Map + closing */}
      <Section>
        <SectionHeading
          title="Serving All of Worcester County"
          intro="Give us a call if you have a project in mind. We would love to get your property in shape for summer!"
        />
        <LazyMap query="Worcester County, MA" />
      </Section>
    </>
  );
}
