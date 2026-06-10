import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"
import { projects } from "@/lib/projects"
import { getVisiblePosts } from "@/lib/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ]

  const workRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE.url}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const postRoutes: MetadataRoute.Sitemap = getVisiblePosts().map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...workRoutes, ...postRoutes]
}
