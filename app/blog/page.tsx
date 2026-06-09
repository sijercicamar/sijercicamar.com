import type { Metadata } from "next"
import Nav from "@/components/Nav"
import BlogGrid from "@/components/BlogGrid"

export const metadata: Metadata = {
  title: "Blog — Amar Sijercic",
  description:
    "Notes on product design, frontend craft, and building for the web by Amar Sijercic.",
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
