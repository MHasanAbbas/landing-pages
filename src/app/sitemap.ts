import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/hounslow`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/hounslow/deals`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/hounslow/ramadan-deals`,
      lastModified: new Date(),
    },
  ];
}
