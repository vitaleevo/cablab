import type { MetadataRoute } from "next"
import { NAV } from "@/lib/site"
export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((item) => ({
    url: `https://www.cablab.ao${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }))
}
