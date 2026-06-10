import type { Metadata } from "next"
import Nav from "@/components/Nav"
import BlogGrid from "@/components/BlogGrid"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on UX/UI design, conversion rate optimization (CRO), and building high-converting websites — by Amar Sijercic.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Amar Sijercic",
    description:
      "Articles on UX/UI design, conversion rate optimization (CRO), and building high-converting websites.",
    url: `${SITE.url}/blog`,
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <main>
      <Nav />
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-12">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-6">
          Writing
        </p>
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.92] tracking-tight text-fg mb-8">
          Blog
        </h1>
        <p className="text-lg text-muted max-w-xl leading-relaxed">
          Thoughts on design, the craft of building fast and accessible
          websites, and the lessons in between.
        </p>
      </div>
      <BlogGrid />
    </main>
  )
}
