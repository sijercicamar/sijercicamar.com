"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects"
import type { Project } from "@/lib/projects"

// Ranked by recruiter target (CRO · A/B Testing · Email Design · Shopify · AI):
// 1. persuava   — CRO + Email Design + AI
// 2. eldelia    — CRO + A/B Testing
// 3. evionor    — Shopify + CRO
// 4. ajandekbar — E-commerce + Conversion Design
const FEATURED_SLUGS = ["persuava", "eldelia", "evionor", "ajandekbar"]

const FILTERS = [
  "All",
  "UX/UI Design",
  "Webflow",
  "WordPress & Web Design",
] as const
type Filter = (typeof FILTERS)[number]

const categoryPill: Record<string, string> = {
  "UX/UI Design":           "text-accent border-accent/25 bg-accent/5",
  "Webflow":                "text-blue-400 border-blue-400/25 bg-blue-400/5",
  "WordPress & Web Design": "text-emerald-400 border-emerald-400/25 bg-emerald-400/5",
}
const categoryColor: Record<string, string> = {
  "UX/UI Design": "text-accent",
  Webflow: "text-blue-400",
  "WordPress & Web Design": "text-emerald-400",
}

const categoryCounts = FILTERS.slice(1).reduce<Record<string, number>>(
  (acc, cat) => {
    acc[cat] = projects.filter((p) => p.category === cat).length
    return acc
  },
  {}
)

// ── Featured card (same as homepage Work.tsx) ─────────────────────────────
function FeaturedCard({ project, imageAspect = "aspect-[16/10]", className = "" }: {
  project: Project
  imageAspect?: string
  className?: string
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group flex flex-col bg-surface border border-edge rounded-2xl overflow-hidden hover:border-muted/30 transition-all duration-300 ${className}`}
    >
      <div className={`relative w-full ${imageAspect} bg-bg overflow-hidden`}>
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-3xl font-semibold text-fg/10 text-center px-8">{project.title}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/8 transition-colors duration-300" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-medium tracking-[0.14em] uppercase px-2.5 py-1 border rounded-full ${categoryPill[project.category] ?? "text-muted border-edge bg-surface"}`}>
            {project.category}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-fg group-hover:text-accent transition-colors duration-150 mb-1.5">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{project.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-1 border border-edge text-muted/60 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center gap-1">
          View case study <span>→</span>
        </p>
      </div>
    </Link>
  )
}

// ── Small grid card ───────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const screenshotUrl = !project.coverImage && project.liveUrl
    ? `https://image.thum.io/get/width/640/crop/400/noanim/${project.liveUrl}`
    : null

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-surface border border-edge rounded-xl overflow-hidden hover:border-muted/30 transition-all duration-200"
    >
      <div className="relative w-full aspect-[16/10] bg-bg overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : screenshotUrl ? (
          <Image
            src={screenshotUrl}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        ) : project.logoUrl ? (
          <div className="absolute inset-0 flex items-center justify-center bg-surface">
            <div className="relative w-24 h-24 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              <Image
                src={project.logoUrl}
                alt={`${project.title} logo`}
                fill
                className="object-contain"
                sizes="96px"
                unoptimized
              />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[clamp(1.25rem,3vw,2.5rem)] font-semibold text-fg/8 text-center px-6 leading-tight select-none">
              {project.title}
            </p>
          </div>
        )}
        <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/10 transition-colors duration-200" />
      </div>

      <div className="p-5 border-t border-edge">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-medium uppercase tracking-[0.12em] ${categoryColor[project.category] ?? "text-muted"}`}>
            {project.category}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <h3 className="text-base font-semibold text-fg mb-1.5 group-hover:text-accent transition-colors duration-150">
          {project.title}
        </h3>
        <p className="text-sm text-muted line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <span>View case study</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  )
}

export default function WorkGrid() {
  const [active, setActive] = useState<Filter>("All")

  const showFeatured = active === "All"

  const featured = FEATURED_SLUGS
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean) as Project[]

  const filtered = active === "All"
    ? projects.filter((p) => !FEATURED_SLUGS.includes(p.slug))
    : projects.filter((p) => p.category === active)

  return (
    <div className="max-w-6xl mx-auto px-6 pb-32">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-edge pb-8">
        {FILTERS.map((f) => {
          const count = f === "All" ? projects.length : (categoryCounts[f] ?? 0)
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all duration-150 cursor-pointer ${
                active === f
                  ? "bg-fg text-bg border-fg font-medium"
                  : "border-edge text-muted hover:text-fg hover:border-muted/40"
              }`}
            >
              {f}
              <span className={`text-xs tabular-nums ${active === f ? "opacity-60" : "opacity-40"}`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Featured 4 in 2×2 — only when showing All */}
      {showFeatured && featured.length > 0 && (
        <>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {featured.map((p) => (
              <FeaturedCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="flex items-center gap-4 mt-16 mb-8">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted shrink-0">More work</p>
            <div className="flex-1 border-t border-edge" />
          </div>
        </>
      )}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted text-center py-24">No projects in this category.</p>
      )}
    </div>
  )
}
