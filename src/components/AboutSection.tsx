import Link from "next/link";
import { aboutParagraphs, aboutImage } from "@/data/content";
import { Section, SectionHeading } from "@/components/Section";

export default function AboutSection() {
  return (
    <Section className="bg-neutral-50">
      <SectionHeading title="About Pro Pressure Washing" />
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="overflow-hidden rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-relaxed sm:mb-4 sm:text-base">
              {p}
            </p>
          ))}
          <Link href="/contact-us/" className="btn mt-2">
            Get In Touch
          </Link>
        </div>
      </div>
    </Section>
  );
}
