import { business } from "@/data/business";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";

// Slim charcoal info bar above the white main nav: tagline + location/phone/hours.
export default function TopBar() {
  return (
    <div className="bg-charcoal text-neutral-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-x-6 px-5 py-2 text-xs sm:px-6">
        <span className="hidden font-semibold uppercase tracking-wide text-white/85 sm:inline">
          {business.tagline}
        </span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon width={14} height={14} className="text-brand-red" />
            Holden, MA
          </span>
          <a
            href={`tel:${business.phone.tel}`}
            className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-brand-red"
          >
            <PhoneIcon width={14} height={14} className="text-brand-red" />
            {business.phone.display}
          </a>
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <ClockIcon width={14} height={14} className="text-brand-red" />
            Open 7 Days
          </span>
        </div>
      </div>
    </div>
  );
}
