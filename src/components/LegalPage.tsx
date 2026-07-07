import type { ReactNode } from "react";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export default function LegalPage({
  title,
  path,
  children,
}: {
  title: string;
  path: string;
  children: ReactNode;
}) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: title, path },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHeader title={title} crumbs={crumbs} />
      <Section>
        <div className="prose-copy mx-auto max-w-3xl space-y-5 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:text-heading [&_p]:leading-relaxed">
          {children}
        </div>
      </Section>
    </>
  );
}
