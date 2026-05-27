"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects"
import type { Project } from "@/lib/projects"

const FILTERS = [
  "All",
  "UX/UI Design",
  "Webflow",
  "WordPress & Web Design",
] as const
type Filter = (typeof FILTERS)[number]

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

function ProjectCard({ project }: { project: Project }) {
  const screenshotUrl = project.liveUrl
    ? `https://image.thum.io/get/width/640/crop/400/noanim/${project.liveUrl}`
    : null

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-surface border border-edge rounded-xl overflow-hidden hover:border-muted/30 transition-all duration-200"
    >
      {/* Screenshot */}
      <div className="relative w-full aspect-[16/10] bg-bg overflow-hidden">
        {screenshotUrl ? (
          <Image
            src={screenshotUrl}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[clamp(1.25rem,3vw,2.5rem)] font-semibold text-fg/8 text-center px-6 leading-tight select-none">
              {project.title}
            </p>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/10 transition-colors duration-200" />
      </div>

      {/* Card body */}
      <div className="p-5 border-t border-edge">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-xs font-medium uppercase tracking-[0.12em] ${
              categoryColor[project.category] ?? "text-muted"
            }`}
          >
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

  const filtered =
    active === "All"
      ? projects
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
              <span
                className={`text-xs tabular-nums ${
                  active === f ? "opacity-60" : "opacity-40"
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

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
