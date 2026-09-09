import type { MetadataRoute } from "next"
import { LEGAL_LINKS, NAV } from "@/lib/site"
export default function sitemap(): MetadataRoute.Sitemap {
  const main = NAV.map((item) => ({
    url: `https://www.cablab.ao${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }))
  const legal = LEGAL_LINKS.map((item) => ({
    url: `https://www.cablab.ao${item.href}`,
    changeFrequency: "yearly",
    priority: 0.3,
  }))
  return [...main, ...legal] as MetadataRoute.Sitemap
}
