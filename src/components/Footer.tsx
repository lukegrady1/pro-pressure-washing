import Link from "next/link";
import { business } from "@/data/business";
import { footerNav, residentialServiceNav, commercialServiceNav } from "@/data/nav";
import { towns } from "@/data/towns";

export default function Footer() {
  const year = 2026; // static export; bump on rebuilds (avoids client-side Date)

  return (
    <footer className="bg-footer text-footer-text">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-4">
        {/* About */}
        <div className="col-span-2 lg:col-span-1">
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide text-white">
            About Us
          </h2>
          <p className="text-sm leading-relaxed">
            Pro Pressure Washing is a family-owned, fully insured pressure
            washing company serving all of Worcester County, MA — including{" "}
            {towns.map((t, i) => (
              <span key={t.slug}>
                <Link href={`/${t.slug}/`} className="text-white hover:text-brand-red">
                  {t.name}
                </Link>
                {i < towns.length - 1 ? ", " : ". "}
              </span>
            ))}
            One call cleans it all.
          </p>
        </div>

        {/* Extra navigation */}
        <div>
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide text-white">
            Extra Navigation
          </h2>
          <ul className="space-y-2 text-sm">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-red">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide text-white">
            Our Services
          </h2>
          <ul className="space-y-2 text-sm">
            {residentialServiceNav.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-brand-red">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mb-2 mt-5 text-xs font-bold uppercase tracking-wide text-white/70">
            Commercial
          </h3>
          <ul className="space-y-2 text-sm">
            {commercialServiceNav.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-brand-red">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Working hours — condensed to a single line */}
        <div className="col-span-2 lg:col-span-1">
          <h2 className="mb-3 text-base font-bold uppercase tracking-wide text-white">
            Working Hours
          </h2>
          <p className="text-sm leading-relaxed">
            Open <span className="font-semibold text-brand-red">7 days a week</span>,
            7 AM – 7 PM. Call anytime for a free quote.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs sm:flex-row sm:px-6">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://gradydigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-red"
            >
              Grady Digital
            </a>
          </p>
          <p>
            For a free quote call{" "}
            <a
              href={`tel:${business.phone.tel}`}
              className="font-semibold text-white hover:text-brand-red"
            >
              {business.phone.display}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
