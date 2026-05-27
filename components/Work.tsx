"use client"

import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects"
import type { Project } from "@/lib/projects"

// Ranked by recruiter target (CRO · A/B Testing · Email Design · Shopify · AI):
// 1. persuava  — CRO + Email Design + AI
// 2. eldelia   — CRO + A/B Testing
// 3. evionor   — Shopify + CRO
// 4. ajandekbar — E-commerce + Conversion Design
const FEATURED_SLUGS = ["persuava", "eldelia", "evionor", "ajandekbar"]

const categoryPill: Record<string, string> = {
  "UX/UI Design":           "text-accent border-accent/25 bg-accent/5",
  "Webflow":                "text-blue-400 border-blue-400/25 bg-blue-400/5",
  "WordPress & Web Design": "text-emerald-400 border-emerald-400/25 bg-emerald-400/5",
}
const categoryDot: Record<string, string> = {
  "UX/UI Design":           "text-accent",
  "Webflow":                "text-blue-400",
  "WordPress & Web Design": "text-emerald-400",
}

// ── Featured card (large) ──────────────────────────────────────────────────
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
      {/* image — always has an explicit aspect ratio so next/image fill gets a computed height */}
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

      {/* body */}
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

// ── Small card (grid) ──────────────────────────────────────────────────────
function SmallCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-surface border border-edge rounded-xl overflow-hidden hover:border-muted/30 transition-all duration-200"
    >
      {/* image */}
      <div className="relative w-full aspect-[16/10] bg-bg overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-base font-semibold text-fg/10 text-center px-4 leading-tight">{project.title}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/10 transition-colors duration-200" />
      </div>

      {/* body */}
      <div className="p-4 border-t border-edge">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[10px] font-medium uppercase tracking-[0.12em] ${categoryDot[project.category] ?? "text-muted"}`}>
            {project.category}
          </span>
          <span className="text-[10px] text-muted">{project.year}</span>
        </div>
        <h3 className="text-sm font-semibold text-fg mb-1 group-hover:text-accent transition-colors duration-150 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-muted line-clamp-2 leading-relaxed">{project.tagline}</p>
        <div className="flex flex-wrap gap-1 mt-2.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 border border-edge text-muted/50 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

// ── Section ────────────────────────────────────────────────────────────────
export default function Work() {
  const featured = FEATURED_SLUGS
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean) as Project[]

  const rest = projects.filter((p) => !FEATURED_SLUGS.includes(p.slug))

  return (
    <section id="work" className="py-32 px-6 border-t border-edge">
      <div className="max-w-6xl mx-auto">

        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">Selected Work</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1] tracking-tight text-fg">
              {projects.length} projects
            </h2>
          </div>
          <Link
            href="/work"
            className="text-sm text-muted hover:text-fg transition-colors duration-200 flex items-center gap-1.5 mb-1"
          >
            View all →
          </Link>
        </div>

        {/* ── featured: 2×2 grid, ranked by recruiter relevance ── */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {featured.map((p) => (
            <FeaturedCard key={p.slug} project={p} />
          ))}
        </div>

        {/* ── divider + "More work" ── */}
        <div className="flex items-center gap-4 mt-16 mb-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted shrink-0">More work</p>
          <div className="flex-1 border-t border-edge" />
        </div>

        {/* ── regular grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((project) => (
            <SmallCard key={project.slug} project={project} />
          ))}
        </div>

        {/* bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg border border-edge hover:border-muted/40 px-6 py-3 rounded-full transition-all duration-200"
          >
            View all {projects.length} projects →
          </Link>
        </div>

      </div>
    </section>
  )
}
