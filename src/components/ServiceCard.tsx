import Link from "next/link";
import { residentialServices, type ServicePage } from "@/data/services";
import { asset } from "@/lib/asset";
import { ArrowRightIcon } from "@/components/Icons";

export function ServiceCard({ service }: { service: ServicePage }) {
  const href = `/${service.slug}/`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <Link href={href} className="block overflow-hidden">
        <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(service.image)}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      {/* Compact on mobile (image + title); full card from sm up */}
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="text-center text-sm text-heading sm:text-left sm:text-lg">
          <Link href={href} className="hover:text-brand-red">
            {service.navLabel}
          </Link>
        </h3>
        <p className="mt-3 hidden flex-1 text-sm leading-relaxed sm:block">
          {service.excerpt}
        </p>
        <Link
          href={href}
          className="mt-5 hidden items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-red hover:gap-2.5 sm:inline-flex"
        >
          Read More <ArrowRightIcon width={16} height={16} />
        </Link>
      </div>
    </article>
  );
}

// Homepage grid shows the six residential services — 2-up and compact on
// mobile, 3-up on desktop.
export function ServicesGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-7 lg:grid-cols-3">
      {residentialServices.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
