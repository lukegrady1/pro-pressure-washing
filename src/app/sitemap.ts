import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { servicesList } from "@/data/services";
import { towns } from "@/data/towns";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl;
  const staticPaths = [
    "/",
    "/services/",
    "/gallery/our-work-2/",
    "/contact-us/",
    "/frequently-asked-questions/",
    "/privacy-policy/",
    "/terms-of-service/",
  ];
  const servicePaths = servicesList.map((s) => s.href);
  const townPaths = towns.map((t) => `/${t.slug}/`);

  return [...staticPaths, ...servicePaths, ...townPaths].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
