import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getProjectBySlug, getAdjacentProjects, projects } from "@/lib/projects"
import { SITE } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  const images = project.coverImage ? [project.coverImage] : undefined
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.tagline,
      url: `${SITE.url}/work/${project.slug}`,
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
      images,
    },
  }
}

const categoryColor: Record<string, string> = {
  "UX/UI Design": "text-accent border-accent/30 bg-accent/5",
  Webflow: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  "WordPress & Web Design": "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
}

function ScreenshotOrPlaceholder({
  liveUrl,
  logoUrl,
  coverImage,
  title,
}: {
  liveUrl: string
  logoUrl?: string
  coverImage?: string
  title: string
}) {
  // 1. Local cover image (highest priority)
  if (coverImage) {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-edge shadow-2xl">
        <div className="relative w-full aspect-[16/10] bg-surface">
          <Image
            src={coverImage}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
    )
  }

  // 2. No live URL — logo or text placeholder
  if (!liveUrl) {
    if (logoUrl) {
      return (
        <div className="w-full aspect-[16/9] rounded-xl bg-surface border border-edge flex items-center justify-center overflow-hidden">
          <div className="relative w-40 h-40 opacity-60">
            <Image
              src={logoUrl}
              alt={`${title} logo`}
              fill
              className="object-contain"
              sizes="160px"
              unoptimized
            />
          </div>
        </div>
      )
    }
    return (
      <div className="w-full aspect-[16/9] rounded-xl bg-surface border border-edge flex items-center justify-center overflow-hidden">
        <p className="text-[clamp(2rem,6vw,5rem)] font-semibold text-fg/10 text-center px-8 leading-tight">
          {title}
        </p>
      </div>
    )
  }

  // 3. thum.io live screenshot
  const screenshotUrl = `https://image.thum.io/get/width/1400/crop/875/noanim/${liveUrl}`

  return (
    <div className="w-full rounded-xl overflow-hidden border border-edge shadow-2xl">
      {/* browser chrome */}
      <div className="bg-surface border-b border-edge px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-edge" />
          <span className="w-3 h-3 rounded-full bg-edge" />
          <span className="w-3 h-3 rounded-full bg-edge" />
        </div>
        <div className="flex-1 bg-bg rounded-md px-3 py-1">
          <p className="text-xs text-muted truncate">
            {liveUrl.replace(/^https?:\/\//, "")}
          </p>
        </div>
      </div>
      <div className="relative w-full aspect-[16/10] bg-surface">
        <Image
          src={screenshotUrl}
          alt={`${title} screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 1200px"
          unoptimized
        />
      </div>
    </div>
  )
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)
  const tagClass = categoryColor[project.category] ?? "text-muted border-edge bg-surface"

  return (
    <main className="min-h-screen bg-bg">
      {/* ── Nav ── */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-0">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors duration-200"
        >
          <span aria-hidden="true">←</span>
          All Work
        </Link>
      </div>

      {/* ── Header ── */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <div className="mb-6">
          <span
            className={`inline-block text-xs font-medium tracking-[0.15em] uppercase px-3 py-1 border rounded-full ${tagClass}`}
          >
            {project.category}
          </span>
        </div>
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tight text-fg mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-muted max-w-2xl leading-relaxed mb-10">
          {project.tagline}
        </p>

        {/* meta row */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <div>
            <p className="text-xs text-muted uppercase tracking-[0.15em] mb-1">Role</p>
            <p className="text-sm text-fg">{project.role}</p>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-[0.15em] mb-1">Year</p>
            <p className="text-sm text-fg">{project.year}</p>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-[0.15em] mb-1">
              Deliverables
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 border border-edge text-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {project.liveUrl && (
            <div>
              <p className="text-xs text-muted uppercase tracking-[0.15em] mb-1">
                {project.liveUrl.includes("apps.apple.com") ? "App Store" : "Live Site"}
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-fg transition-colors"
              >
                {project.liveUrl.includes("apps.apple.com")
                  ? "Download on iOS"
                  : project.liveUrl.replace(/^https?:\/\//, "")} ↗
              </a>
            </div>
          )}
        </div>
      </header>

      {/* ── Screenshot ── */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <ScreenshotOrPlaceholder liveUrl={project.liveUrl} logoUrl={project.logoUrl} coverImage={project.coverImage} title={project.title} />
      </div>

      {/* ── Overview ── */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
              Overview
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">{project.overview}</p>
        </div>
      </section>

      {/* ── Challenge / Solution / Outcome ── */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-3 gap-px bg-edge">
          {[
            { label: "Challenge", body: project.challenge },
            { label: "Solution", body: project.solution },
            { label: "Outcome", body: project.outcome },
          ].map(({ label, body }) => (
            <div key={label} className="bg-bg p-8 md:p-10">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-5">
                {label}
              </p>
              <p className="text-base text-fg/75 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="max-w-6xl mx-auto px-6 mb-24 border-t border-edge pt-16">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-8">
          Key Highlights
        </p>
        <ul className="grid sm:grid-cols-2 gap-4">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
              <span className="text-base text-fg/80 leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Key Metrics ── */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div
            className={`grid grid-cols-2 gap-px bg-edge ${
              project.metrics.length >= 4
                ? "sm:grid-cols-4"
                : project.metrics.length === 3
                ? "sm:grid-cols-3"
                : ""
            }`}
          >
            {project.metrics.map(({ label, value }) => (
              <div key={label} className="bg-bg px-8 py-10 text-center">
                <p className="text-2xl sm:text-3xl font-semibold text-fg mb-2 leading-tight">
                  {value}
                </p>
                <p className="text-xs text-muted uppercase tracking-[0.15em] leading-relaxed">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Design Process ── */}
      {project.process && project.process.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-24 border-t border-edge pt-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-10">
            Design Process
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.process.map(({ step, detail }, i) => (
              <div key={step} className="flex gap-4">
                <span className="text-xs font-mono text-muted/40 pt-0.5 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-medium text-fg mb-2">{step}</p>
                  <p className="text-sm text-muted leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      {project.liveUrl && (
        <div className="max-w-6xl mx-auto px-6 mb-24">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg text-sm font-medium rounded-full hover:bg-accent transition-colors duration-200"
          >
            {project.liveUrl.includes("apps.apple.com")
              ? "View on App Store ↗"
              : "Visit live site ↗"}
          </a>
        </div>
      )}

      {/* ── Prev / Next ── */}
      <nav className="border-t border-edge">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2">
          <div className="border-r border-edge py-10 pr-8">
            {prev ? (
              <Link href={`/work/${prev.slug}`} className="group block">
                <p className="text-xs text-muted uppercase tracking-[0.15em] mb-2">
                  ← Previous
                </p>
                <p className="text-lg font-medium text-fg/60 group-hover:text-fg transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <Link href="/#work" className="group block">
                <p className="text-xs text-muted uppercase tracking-[0.15em] mb-2">
                  ← Back
                </p>
                <p className="text-lg font-medium text-fg/60 group-hover:text-fg transition-colors">
                  All Work
                </p>
              </Link>
            )}
          </div>
          <div className="py-10 pl-8 text-right">
            {next && (
              <Link href={`/work/${next.slug}`} className="group block">
                <p className="text-xs text-muted uppercase tracking-[0.15em] mb-2">
                  Next →
                </p>
                <p className="text-lg font-medium text-fg/60 group-hover:text-fg transition-colors">
                  {next.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </main>
  )
}
