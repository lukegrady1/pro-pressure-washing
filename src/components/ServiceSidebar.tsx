import Link from "next/link";
import { servicesList } from "@/data/services";
import { business } from "@/data/business";
import { PhoneIcon } from "@/components/Icons";

// Sidebar for service detail pages: services list + "Have Any Questions?" widget.
export default function ServiceSidebar({ currentSlug }: { currentSlug?: string }) {
  return (
    <aside className="space-y-8">
      <div className="rounded-md border border-neutral-200 bg-white p-5">
        <h2 className="mb-3 text-base font-bold uppercase tracking-wide text-heading">
          Our Services
        </h2>
        <ul className="divide-y divide-neutral-100">
          {servicesList.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className={`block py-2.5 text-sm hover:text-brand-red ${
                  s.slug === currentSlug ? "font-bold text-brand-red" : ""
                }`}
                aria-current={s.slug === currentSlug ? "page" : undefined}
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md bg-charcoal p-6 text-center text-white">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red">
          <PhoneIcon width={22} height={22} />
        </div>
        <h2 className="text-lg font-bold text-white">Have Any Questions?</h2>
        <p className="mt-2 text-sm text-white/70">
          Give us a call or send a message and we&rsquo;ll get right back to you
          with a free quote.
        </p>
        <a href={`tel:${business.phone.tel}`} className="mt-4 block text-lg font-bold text-brand-red">
          {business.phone.display}
        </a>
        <Link href="/contact-us/" className="btn mt-4 w-full">
          Contact Us
        </Link>
      </div>
    </aside>
  );
}
