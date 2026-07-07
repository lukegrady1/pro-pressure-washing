import Link from "next/link";
import { business } from "@/data/business";
import { MapPinIcon, PhoneIcon } from "@/components/Icons";

// Thin bar above the header: tagline, location, phone, hours + Request a Quote.
export default function TopBar() {
  return (
    <div className="bg-charcoal text-neutral-300">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 text-xs sm:px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span className="hidden font-semibold text-white/80 sm:inline">
            {business.tagline}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon width={14} height={14} />
            Holden, Massachusetts
          </span>
          <a
            href={`tel:${business.phone.tel}`}
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <PhoneIcon width={14} height={14} />
            {business.phone.display}
          </a>
          <span className="hidden md:inline">Mon–Sun</span>
        </div>
        <Link
          href="/contact-us/"
          className="rounded-sm bg-brand-red px-3 py-1.5 font-bold uppercase tracking-wide text-white hover:bg-brand-red-dark"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
