import type { MetadataRoute } from "next";
import { seo } from "@/data/seo";

const lastModified = new Date("2026-06-13");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seo.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${seo.url}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
