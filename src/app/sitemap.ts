import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { allServices } from "@/data/services";
import { towns } from "@/data/towns";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl;
  const staticPaths = [
    "/",
    "/about/",
    "/services/",
    "/service-areas/",
    "/gallery/",
    "/reviews/",
    "/faq/",
    "/contact-us/",
    "/privacy-policy/",
    "/terms-of-service/",
  ];
  const servicePaths = allServices.map((s) => `/${s.slug}/`);
  const townPaths = towns.map((t) => `/${t.slug}/`);

  return [...staticPaths, ...servicePaths, ...townPaths].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
