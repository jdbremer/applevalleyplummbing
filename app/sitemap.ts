import type { MetadataRoute } from "next";
import { business, serviceCities, citySlug } from "@/lib/business";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticPaths = [
    "",
    "/services",
    "/service-area",
    "/about",
    "/why-choose-us",
    "/reviews",
    "/coupons",
    "/news",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityEntries: MetadataRoute.Sitemap = serviceCities.map((c) => ({
    url: `${base}/service-area/${citySlug(c)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...cityEntries];
}
