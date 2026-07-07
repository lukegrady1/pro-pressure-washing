import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-16 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

// Centered red section heading + optional intro (the site's signature block).
export function SectionHeading({
  title,
  intro,
  as: Tag = "h2",
}: {
  title: string;
  intro?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <Tag className="section-title">{title}</Tag>
      {intro && <p className="mt-4 text-base leading-relaxed">{intro}</p>}
    </div>
  );
}
