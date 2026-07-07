import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";
import BeforeAfterPair from "@/components/BeforeAfterPair";
import JsonLd from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Fence & Deck Pressure Washing | Worcester County MA",
  description:
    "We clean wood and vinyl fences and decks with non-toxic chemicals and low pressure — removing mold, mildew and algae without damaging the surface.",
  path: "/services/fences-and-decks/",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services/" },
  { name: "Fences and Decks", path: "/services/fences-and-decks/" },
];

export default function FencesDecksPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Fence & Deck Pressure Washing",
          description:
            "Cleaning wood and vinyl fences and decks using a combination of non-toxic chemicals and low pressure to remove mold, mildew and algae without damaging the surface.",
          path: "/services/fences-and-decks/",
        })}
      />
      <ServicePageShell
        title="Fences and Decks"
        subtitle="Wood & Vinyl Fence and Deck Cleaning in Worcester County MA"
        slug="fences-and-decks"
        crumbs={crumbs}
        headerImage="/images/2020/07/Deck-Cleaning-and-Restoration-in-Rutland-MA-Pro-Pressure-Washing.jpg"
        benefitsIntro="It's not about just spraying some water and soap and calling it a day — you are making an investment. Giving your property the clean it's been waiting for has more benefits than you may think."
      >
        <p>
          Pro Pressure Washing cleans wood and vinyl fences and decks using a
          combination of non-toxic chemicals and low pressure to remove mold,
          mildew and algae without damaging the surface.
        </p>

        <h2 className="text-2xl text-heading">Fence Cleaning — Before &amp; After</h2>
        <BeforeAfterPair
          before="/images/2015/07/fence1-before.jpg"
          after="/images/2020/03/fence1-after.jpg"
          beforeAlt="Before pressure washing a wood fence — Pro Pressure Washing"
          afterAlt="After pressure washing a wood fence — Pro Pressure Washing"
        />

        <h2 className="text-2xl text-heading">Deck Cleaning &amp; Restoration</h2>
        <BeforeAfterPair
          before="/images/2020/07/BEFORE-deck-cleaning-pressure-washing.jpg"
          after="/images/2020/07/Deck-Cleaning-and-Restoration-in-Rutland-MA-Pro-Pressure-Washing.jpg"
          beforeAlt="Before deck cleaning and pressure washing in Rutland MA — Pro Pressure Washing"
          afterAlt="After deck cleaning and restoration in Rutland MA — Pro Pressure Washing"
        />

        <div className="rounded-md bg-brand-red/5 p-6 text-center">
          <p className="text-lg font-bold text-heading">
            Interested in this service? Send us a message!
          </p>
          <Link href="/contact-us/" className="btn mt-4">
            Get In Touch
          </Link>
        </div>
      </ServicePageShell>
    </>
  );
}
