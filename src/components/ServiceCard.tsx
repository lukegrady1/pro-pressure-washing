import Link from "next/link";
import { residentialServices, type ServicePage } from "@/data/services";
import { ArrowRightIcon } from "@/components/Icons";

export function ServiceCard({ service }: { service: ServicePage }) {
  const href = `/${service.slug}/`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <Link href={href} className="block overflow-hidden">
        <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg text-heading">
          <Link href={href} className="hover:text-brand-red">
            {service.navLabel}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{service.excerpt}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-red hover:gap-2.5"
        >
          Read More <ArrowRightIcon width={16} height={16} />
        </Link>
      </div>
    </article>
  );
}

// Homepage grid shows the six residential services.
export function ServicesGrid() {
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {residentialServices.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
