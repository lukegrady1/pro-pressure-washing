import Link from "next/link";
import { asset } from "@/lib/asset";

export type Crumb = { name: string; path: string };

// Interior page title band with H1 + subtitle + breadcrumbs.
export default function PageHeader({
  title,
  subtitle,
  crumbs,
  image,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  image?: string;
}) {
  return (
    <div className="relative bg-charcoal">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(image)}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </>
      )}
      <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-white/80">{subtitle}</p>}
        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-white/70">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={c.path} className="flex items-center gap-2">
                  {last ? (
                    <span aria-current="page" className="text-brand-red">
                      {c.name}
                    </span>
                  ) : (
                    <Link href={c.path} className="hover:text-white">
                      {c.name}
                    </Link>
                  )}
                  {!last && <span aria-hidden>›</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
