import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";
import TownTemplate from "@/components/TownTemplate";
import { allServices, getServicePage } from "@/data/services";
import { towns, getTown } from "@/data/towns";
import { pageMeta } from "@/lib/seo";

// One dynamic route resolves both service pages and town pages (both live at
// the top level with distinct, non-overlapping slugs).
export function generateStaticParams() {
  return [
    ...allServices.map((s) => ({ slug: s.slug })),
    ...towns.map((t) => ({ slug: t.slug })),
  ];
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (service) {
    return pageMeta({
      title: service.title,
      description: service.metaDescription,
      path: `/${slug}/`,
      ogImage: service.image,
    });
  }
  const town = getTown(slug);
  if (town) {
    return pageMeta({
      title: town.title,
      description: town.metaDescription,
      path: `/${slug}/`,
    });
  }
  return {};
}

export default async function SlugPage({ params }: Params) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (service) return <ServiceTemplate service={service} />;
  const town = getTown(slug);
  if (town) return <TownTemplate town={town} />;
  notFound();
}
