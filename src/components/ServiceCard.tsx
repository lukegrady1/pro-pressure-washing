import Link from "next/link";
import type { Service } from "@/data/services";
import { servicesList } from "@/data/services";
import { ArrowRightIcon } from "@/components/Icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-black/5 bg-white shadow-sm transition hover:shadow-lg">
      <Link href={service.href} className="block overflow-hidden">
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
          <Link href={service.href} className="hover:text-brand-red">
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{service.excerpt}</p>
        <Link
          href={service.href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-red hover:gap-2.5"
        >
          Read More <ArrowRightIcon width={16} height={16} />
        </Link>
      </div>
    </article>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {servicesList.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
