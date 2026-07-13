import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import { LazyMap } from "@/components/LazyEmbed";
import JsonLd from "@/components/JsonLd";
import { business, fullAddress } from "@/data/business";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Contact Us | Free Pressure Washing Quote | Holden MA",
  description:
    "Contact Pro Pressure Washing for a free quote. Call (508) 736-0089 or send a message — we're very responsive and serve all of Worcester County, MA.",
  path: "/contact-us/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact-us/" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader
        title="Contact Us"
        subtitle="Give us a call or fill in the contact form."
        crumbs={crumbs}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="mb-6 text-base leading-relaxed">
              Feel free to ask us any questions you may have — we are very
              responsive and will get right back to you!
            </p>
            <div className="rounded-md border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <QuoteForm variant="contact" />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-md bg-neutral-50 p-6">
              <h2 className="mb-4 text-lg text-heading">Pro Pressure Washing</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPinIcon width={20} height={20} className="mt-0.5 shrink-0 text-brand-red" />
                  <span>{fullAddress}</span>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon width={20} height={20} className="mt-0.5 shrink-0 text-brand-red" />
                  <a href={`tel:${business.phone.tel}`} className="hover:text-brand-red">
                    {business.phone.display}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon width={20} height={20} className="mt-0.5 shrink-0 text-brand-red" />
                  <a href={`mailto:${business.email}`} className="break-all hover:text-brand-red">
                    {business.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon width={20} height={20} className="mt-0.5 shrink-0 text-brand-red" />
                  <span>Open Monday&ndash;Sunday</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <LazyMap query="Pro Pressure Washing" embedSrc={business.mapEmbedSrc} />
      </Section>

      <Testimonials />
    </>
  );
}
