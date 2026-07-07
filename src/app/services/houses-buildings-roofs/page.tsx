import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";
import { LazyYouTube } from "@/components/LazyEmbed";
import BeforeAfterPair from "@/components/BeforeAfterPair";
import JsonLd from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "House Washing & Roof Cleaning in Worcester County MA | Pro Pressure Washing",
  description:
    "Gentle soft washing for house siding and bio-degradable roof cleaning that removes mold, mildew, algae, moss and black streaks across Worcester County, MA.",
  path: "/services/houses-buildings-roofs/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services/" },
  { name: "Houses, Buildings and Roofs", path: "/services/houses-buildings-roofs/" },
];

export default function HousesRoofsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "House Washing & Roof Cleaning",
          description:
            "Low-pressure soft washing for house and building siding, plus bio-degradable roof treatment for moss, lichen and black-streak algae.",
          path: "/services/houses-buildings-roofs/",
        })}
      />
      <ServicePageShell
        title="Houses, Buildings and Roofs"
        subtitle="Pressure Washing Services for Houses, Buildings and Roofs in Worcester County MA"
        slug="houses-buildings-roofs"
        crumbs={crumbs}
        headerImage="/images/2020/03/house-buildings-1.jpg"
      >
        <p>
          Pro Pressure Washing uses a low-pressure soft washing process to clean
          the siding of your home or business. A non-toxic solution is applied to
          the surface to kill mold, mildew and algae. The surface is then rinsed
          using low pressure.
        </p>
        <p>
          The growth on your roof can shorten the life of your roof and cause
          costly, premature repairs or replacement. Our process gently treats all
          the moss, lichen and mold (which presents as black streaks) with a
          bio-degradable solution that is sprayed on the asphalt shingles using low
          pressure. Once the roof is treated, the organic growth will turn white or
          light brown, falling off over time with the rain. Depending on the level
          of growth, roofs will take between 30&ndash;120 days to be clean and free
          from debris.
        </p>

        <LazyYouTube id="U30b-lMT-3Y" title="Soft washing and roof cleaning by Pro Pressure Washing" />

        <div className="grid gap-4 sm:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/2020/03/house-buildings-1.jpg"
            alt="Soft washing a house exterior in Worcester County MA — Pro Pressure Washing"
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/2020/03/house-buildings-2.jpg"
            alt="Cleaned building siding in Worcester County MA — Pro Pressure Washing"
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
        </div>

        <h2 className="text-2xl text-heading">Roof Cleaning — Before &amp; After</h2>
        <BeforeAfterPair
          before="/images/2015/07/BEFORE-power-washing-house.jpg"
          after="/images/2015/07/AFTER-power-washing-house.jpg"
          beforeAlt="Before roof and house cleaning in West Boylston MA — Pro Pressure Washing"
          afterAlt="After roof and house cleaning in West Boylston MA — Pro Pressure Washing"
        />
      </ServicePageShell>
    </>
  );
}
