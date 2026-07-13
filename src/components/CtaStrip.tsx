import Link from "next/link";
import { Container } from "@/components/Section";

type CtaButton = { label: string; href: string; outline?: boolean };

// Full-width red call-to-action strip used between sections.
export default function CtaStrip({
  text,
  buttons,
}: {
  text: string;
  buttons: CtaButton[];
}) {
  return (
    <div className="bg-gradient-to-br from-brand-red to-brand-red-dark py-12">
      <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <p className="max-w-2xl text-xl font-bold text-white sm:text-2xl [font-family:var(--font-heading)]">
          {text}
        </p>
        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          {buttons.map((b) => (
            <Link
              key={b.href + b.label}
              href={b.href}
              className={b.outline ? "btn btn-outline" : "btn bg-white !text-brand-red !border-white hover:!bg-charcoal hover:!text-white hover:!border-charcoal"}
            >
              {b.label}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
