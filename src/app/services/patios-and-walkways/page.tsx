import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";
import BeforeAfter from "@/components/BeforeAfter";
import JsonLd from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Patio, Walkway & Concrete Cleaning | Worcester County MA",
  description:
    "Hot-water, high-pressure cleaning that lifts oil, grease, dirt, mold and mildew from concrete, patio pavers and masonry throughout Worcester County, MA.",
  path: "/services/patios-and-walkways/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services/" },
  { name: "Patios and Walkways", path: "/services/patios-and-walkways/" },
];

export default function PatiosPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Patio, Walkway & Concrete Cleaning",
          description:
            "Hot water combined with high pressure and non-toxic chemicals to clean oil, grease, dirt, mold and mildew from concrete, patio pavers and masonry.",
          path: "/services/patios-and-walkways/",
        })}
      />
      <ServicePageShell
        title="Patios and Walkways"
        subtitle="Concrete, Paver & Masonry Pressure Washing in Worcester County MA"
        slug="patios-and-walkways"
        crumbs={crumbs}
        headerImage="/images/2021/04/Before-After-pressure-washing-cement-walkway-in-Worcester-MA-1024x312.png"
      >
        <p>
          Pro Pressure Washing uses hot water combined with high pressure and
          non-toxic chemicals to clean oil, grease, dirt, mold and mildew from
          concrete, patio pavers and masonry work.
        </p>

        <h2 className="text-2xl text-heading">Drag to Compare — Before &amp; After</h2>
        <BeforeAfter
          before="/images/2015/07/stairs1_before.jpg"
          after="/images/2015/07/stairs1_before-1.jpg"
          beforeAlt="Before pressure washing dirty concrete stairs — Pro Pressure Washing"
          afterAlt="After pressure washing clean concrete stairs — Pro Pressure Washing"
        />

        <h2 className="text-2xl text-heading">Cement Walkway — Worcester, MA</h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/2021/04/Before-After-pressure-washing-cement-walkway-in-Worcester-MA-1024x312.png"
          alt="Before and after pressure washing a cement walkway in Worcester MA — Pro Pressure Washing"
          loading="lazy"
          className="w-full rounded-md object-cover"
        />
      </ServicePageShell>
    </>
  );
}
