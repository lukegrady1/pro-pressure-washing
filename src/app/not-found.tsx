import Link from "next/link";
import { business } from "@/data/business";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
        404 — Page not found
      </p>
      <h1 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
        We couldn&rsquo;t find that page
      </h1>
      <p className="mt-4 text-base leading-relaxed">
        The page you&rsquo;re looking for may have moved. Let&rsquo;s get you
        back on track — or give us a call and we&rsquo;ll help right away.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn">
          Back to Home
        </Link>
        <a href={`tel:${business.phone.tel}`} className="btn bg-charcoal !border-charcoal hover:!bg-black">
          Call {business.phone.display}
        </a>
      </div>
    </section>
  );
}
