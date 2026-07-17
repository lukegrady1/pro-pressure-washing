import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import { business } from "@/data/business";
import { pageMeta } from "@/lib/seo";

// Confirmation page the GoHighLevel form redirects to after a successful submit.
// noindex, follow: a thank-you page has no search value and can distort
// conversion tracking if it gets indexed, but its links should still be
// crawlable. Deliberately not added to sitemap.ts for the same reason.
export const metadata: Metadata = {
  ...pageMeta({
    title: "Thank You | Pro Pressure Washing",
    description:
      "Thanks for reaching out to Pro Pressure Washing. We've received your request and will get right back to you with a free, honest quote.",
    path: "/thank-you/",
  }),
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
          <CheckIcon width={32} height={32} className="text-brand-red" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-heading sm:text-4xl">
          Thank You &mdash; We&rsquo;ve Got Your Request
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-body">
          Your message came through, and it goes straight to us. We&rsquo;re
          very responsive and will get right back to you with a free, honest
          quote &mdash; usually the same day. {business.hoursText}.
        </p>

        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-body">
          Need us sooner? The fastest way to reach us is a quick phone call.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a href={`tel:${business.phone.tel}`} className="btn inline-flex items-center gap-2">
            <PhoneIcon width={18} height={18} />
            Call {business.phone.display}
          </a>
          <Link
            href="/gallery/"
            className="btn btn-outline !border-brand-red !text-brand-red hover:!bg-brand-red hover:!text-white"
          >
            See Our Recent Work
          </Link>
        </div>

        <p className="mt-8 text-sm text-body-muted">
          <Link href="/" className="font-semibold text-brand-red hover:underline">
            Return to the homepage
          </Link>
        </p>
      </div>
    </Section>
  );
}
