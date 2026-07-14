import Link from "next/link";
import { business } from "@/data/business";
import { ArrowRightIcon, CheckIcon, PhoneIcon, StarIcon } from "@/components/Icons";

const trustPoints = ["Fully insured", "Family-owned", "Free estimates"];

// Single, static hero — one image, one message, one primary action. A charcoal
// side-gradient keeps the photo vivid on the right while protecting the copy on
// the left. No carousel: the cleanest, most confident first impression.
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal">
      {/* Background photo — real house-wash result (bright curb-appeal shot) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/2015/07/After-power-washing-house-Leicester-MA-2.jpg"
        alt="Freshly pressure-washed colonial home exterior in Worcester County, MA — Pro Pressure Washing"
        className="hero-zoom absolute inset-0 -z-10 h-full w-full object-cover object-center sm:object-[60%_center]"
        loading="eager"
        fetchPriority="high"
      />
      {/* Gradient overlays: horizontal for copy legibility, vertical for footing */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/75 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

      <div className="mx-auto flex min-h-[440px] w-full max-w-6xl flex-col items-start justify-center px-5 py-12 sm:min-h-[620px] sm:px-6 sm:py-20">
        <div className="max-w-2xl [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
          {/* Kicker with thin brand-red accent bar */}
          <div className="hero-rise flex items-center gap-3" style={{ animationDelay: "0.05s" }}>
            <span aria-hidden className="h-5 w-[3px] bg-brand-red" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/85">
              Top-Rated · Worcester County, MA
            </p>
          </div>

          {/* H1 — full keyword string kept for SEO, split for visual hierarchy */}
          <h1 className="mt-4 text-3xl font-bold leading-[1.1] text-white sm:mt-5 sm:text-5xl">
            Pressure Washing &amp; Gutter Cleaning Service
            <span className="mt-1.5 block text-xl font-medium text-white/85 sm:mt-2 sm:text-3xl">
              in Holden &amp; Worcester County, MA
            </span>
          </h1>

          <p
            className="hero-rise mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-lg"
            style={{ animationDelay: "0.15s" }}
          >
            Eco-friendly soft washing that safely restores your siding, roof,
            deck, patio, and driveway — no harsh chemicals, no damage.
          </p>

          {/* Actions */}
          <div
            className="hero-rise mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-6"
            style={{ animationDelay: "0.25s" }}
          >
            <Link href="/contact-us/" className="btn">
              Get a Free Quote
              <ArrowRightIcon width={16} height={16} />
            </Link>
            <a
              href={`tel:${business.phone.tel}`}
              className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-red"
            >
              <PhoneIcon width={18} height={18} />
              {business.phone.display}
            </a>
          </div>

          {/* Trust row — modern pill chips */}
          <ul
            className="hero-rise mt-6 flex flex-wrap items-center gap-2 sm:mt-10 sm:gap-3"
            style={{ animationDelay: "0.35s" }}
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20"
              >
                <CheckIcon width={16} height={16} className="text-brand-red" />
                {point}
              </li>
            ))}
          </ul>

          {/* Google rating card — inline on the left with the hero copy */}
          <a
            href={business.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-rise mt-6 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-card ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            style={{ animationDelay: "0.45s" }}
          >
            <span className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={16} height={16} fill="currentColor" stroke="none" />
              ))}
            </span>
            <span className="text-sm font-bold text-heading">
              {business.rating}
              <span className="ml-1.5 font-medium text-body-muted">
                · {business.reviewCount} Google reviews
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
