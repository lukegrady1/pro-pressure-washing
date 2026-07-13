"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/data/business";
import { primaryNav, residentialServiceNav } from "@/data/nav";
import { ChevronDownIcon } from "@/components/Icons";
import TopBar from "@/components/TopBar";

// Shared underline-on-hover treatment for desktop nav links.
const linkBase =
  "relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors after:absolute after:-bottom-0.5 after:left-4 after:right-4 after:h-[2px] after:origin-center after:bg-brand-red after:transition-transform after:duration-200";
const linkState = (active: boolean) =>
  active
    ? "text-brand-red after:scale-x-100"
    : "text-charcoal after:scale-x-0 hover:text-brand-red hover:after:scale-x-100";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div className="border-b border-neutral-200 bg-white shadow-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
          <Link href="/" className="shrink-0" aria-label={`${business.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={business.logo}
              alt={`${business.name} logo`}
              width={190}
              height={60}
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    onMouseEnter={() => setServicesOpen(true)}
                    className={`flex items-center gap-1 ${linkBase} ${linkState(
                      isActive(link.href)
                    )}`}
                  >
                    {link.label}
                    <ChevronDownIcon width={14} height={14} />
                  </Link>
                  <div
                    className={`absolute left-0 top-full mt-1 w-64 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg transition ${
                      servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                  >
                    {residentialServiceNav.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block border-t border-neutral-100 px-4 py-3 text-sm text-charcoal transition-colors first:border-t-0 hover:bg-brand-red hover:text-white"
                      >
                        {s.label}
                      </Link>
                    ))}
                    <Link
                      href="/services/"
                      className="block border-t border-neutral-100 bg-neutral-50 px-4 py-3 text-sm font-semibold text-brand-red transition-colors hover:bg-brand-red hover:text-white"
                    >
                      Commercial &amp; All Services →
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${linkBase} ${linkState(isActive(link.href))}`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact-us/" className="btn ml-3">
              Free Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-charcoal" />
              <span className="block h-0.5 w-6 bg-charcoal" />
              <span className="block h-0.5 w-6 bg-charcoal" />
            </div>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="border-t border-neutral-200 bg-white lg:hidden"
            aria-label="Mobile"
          >
            {primaryNav.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block border-b border-neutral-100 px-5 py-3 text-sm font-semibold uppercase ${
                    isActive(link.href) ? "text-brand-red" : "text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
                {link.label === "Services" &&
                  residentialServiceNav.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-neutral-100 bg-neutral-50 px-8 py-2.5 text-sm text-body"
                    >
                      {s.label}
                    </Link>
                  ))}
              </div>
            ))}
            <div className="p-4">
              <Link
                href="/contact-us/"
                onClick={() => setMobileOpen(false)}
                className="btn w-full"
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
