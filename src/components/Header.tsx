"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/data/business";
import { primaryNav, services } from "@/data/nav";
import { ChevronDownIcon } from "@/components/Icons";
import TopBar from "@/components/TopBar";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div className="bg-charcoal shadow-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
          <Link href="/" className="shrink-0" aria-label={`${business.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={business.logo}
              alt={`${business.name} logo`}
              width={190}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="group relative"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    onMouseEnter={() => setServicesOpen(true)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                      isActive(link.href)
                        ? "text-brand-red"
                        : "text-white hover:text-brand-red"
                    }`}
                  >
                    {link.label}
                    <ChevronDownIcon width={14} height={14} />
                  </Link>
                  <div
                    className={`absolute left-0 top-full w-64 bg-charcoal shadow-lg transition ${
                      servicesOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block border-t border-white/10 px-4 py-3 text-sm text-white hover:bg-brand-red"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                    isActive(link.href)
                      ? "text-brand-red"
                      : "text-white hover:text-brand-red"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
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
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="border-t border-white/10 bg-charcoal lg:hidden"
            aria-label="Mobile"
          >
            {primaryNav.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-white/10 px-5 py-3 text-sm font-medium uppercase text-white"
                >
                  {link.label}
                </Link>
                {link.label === "Services" &&
                  services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-white/10 bg-black/20 px-8 py-2.5 text-sm text-white/80"
                    >
                      {s.label}
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
