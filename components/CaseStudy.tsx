import Image from "next/image"
import { existsSync } from "fs"
import path from "path"
import type { Project } from "@/lib/projects"
import type { CaseStudy, ImageSlot as Slot } from "@/lib/case-studies"
import { SHOW_DRAFTS, TODO_PATTERN, showText, stripTodo } from "@/lib/draft"

// ── Draft-aware primitives ─────────────────────────────────────────────────

/** Renders text; {{TODO}} parts are highlighted in drafts and dropped in production. */
function T({ text }: { text: string }) {
  if (!showText(text)) return null
  if (!SHOW_DRAFTS) return <>{stripTodo(text)}</>
  return (
    <>
      {text.split(TODO_PATTERN).map((part, i) =>
        TODO_PATTERN.test(part) ? (
          <mark key={i} className="rounded bg-yellow-400/10 text-yellow-300 outline-1 outline-dashed outline-yellow-400/40 px-1">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  )
}

function imageExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src))
}

/** Shows the image once Amar adds the file; until then a labelled slot (drafts only). */
function ImageSlot({ slot, priority = false }: { slot: Slot; priority?: boolean }) {
  const exists = imageExists(slot.src)
  if (!exists && !SHOW_DRAFTS) return null
  return (
    <figure>
      {exists ? (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-edge bg-surface">
          <Image
            src={slot.src}
            alt={slot.alt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
        </div>
      ) : (
        <div className="w-full aspect-[16/10] rounded-xl border border-dashed border-yellow-400/40 bg-yellow-400/[0.03] flex flex-col items-center justify-center gap-2 p-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-yellow-300">Image slot</p>
          <p className="text-sm text-fg/70">{slot.alt}</p>
          <p className="text-xs font-mono text-muted break-all">/public{slot.src}</p>
        </div>
      )}
      {slot.caption && <figcaption className="mt-3 text-sm text-muted">{slot.caption}</figcaption>}
    </figure>
  )
}

function visibleSlots(images?: Slot[]) {
  return (images ?? []).filter((s) => SHOW_DRAFTS || imageExists(s.src))
}

function Images({ images }: { images?: Slot[] }) {
  const slots = visibleSlots(images)
  if (slots.length === 0) return null
  return (
    <div className={`grid gap-6 mt-8 ${slots.length > 1 ? "md:grid-cols-2" : ""}`}>
      {slots.map((s) => (
        <ImageSlot key={s.src} slot={s} />
      ))}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted">{children}</p>
  )
}

/** Two-column section: label left, content right (stacks on mobile). */
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-20">
      <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
        <SectionLabel>{label}</SectionLabel>
        <div>{children}</div>
      </div>
    </section>
  )
}

// ── Template ───────────────────────────────────────────────────────────────

export default function CaseStudyTemplate({ project, study }: { project: Project; study: CaseStudy }) {
  const meta = [
    { label: "Role", value: project.role },
    { label: "Team", value: study.team },
    { label: "Timeline", value: study.timeline },
    { label: "Platforms", value: study.platforms },
  ].filter((m) => showText(m.value))

  const process = study.process.filter((p) => showText(p.detail) || visibleSlots(p.images).length > 0)
  const decisions = study.decisions.filter((d) => showText(d.why) || visibleSlots(d.images).length > 0)
  const sections = (study.sections ?? []).filter((s) => showText(s.body) || visibleSlots(s.images).length > 0)
  const learnings = study.learnings.filter((l) => showText(l))
  const hasOutcome = study.outcome.metrics.length > 0 || showText(study.outcome.text)

  return (
    <>
      {/* ── 1. Header ── */}
      <header className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <div className="mb-6">
          <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase px-3 py-1 border rounded-full text-accent border-accent/30 bg-accent/5">
            Case study
          </span>
        </div>
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tight text-fg mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-muted max-w-3xl leading-relaxed mb-10">
          <T text={study.summary} />
        </p>

        <dl className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6 border-t border-edge pt-8">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-xs text-muted uppercase tracking-[0.15em] mb-1.5">{m.label}</dt>
              <dd className="text-sm text-fg leading-relaxed">
                <T text={m.value} />
              </dd>
            </div>
          ))}
          {project.liveUrl && (
            <div>
              <dt className="text-xs text-muted uppercase tracking-[0.15em] mb-1.5">Live</dt>
              <dd className="text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-fg transition-colors break-all"
                >
                  {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                </a>
              </dd>
            </div>
          )}
        </dl>
      </header>

      {project.coverImage && (
        <div className="max-w-6xl mx-auto px-6 mb-24">
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-edge shadow-2xl bg-surface">
            <Image
              src={project.coverImage}
              alt={`${project.title} screenshot`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* ── 2–4. Overview, Problem, My role ── */}
      {showText(study.overview) && (
        <Section label="Overview">
          <p className="text-lg text-fg/80 leading-relaxed"><T text={study.overview} /></p>
        </Section>
      )}
      {showText(study.problem) && (
        <Section label="Problem">
          <p className="text-lg text-fg/80 leading-relaxed"><T text={study.problem} /></p>
        </Section>
      )}
      {showText(study.myRole) && (
        <Section label="My role">
          <p className="text-lg text-fg/80 leading-relaxed">
            <T text={study.myRole} />
          </p>
        </Section>
      )}

      {/* ── 5. Process ── */}
      {process.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-24 border-t border-edge pt-16">
          <SectionLabel>Process</SectionLabel>
          <ol className="mt-10 space-y-16">
            {process.map((p, i) => (
              <li key={p.step}>
                <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12">
                  <div className="flex gap-4">
                    <span className="text-xs font-mono text-muted/50 pt-1 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-medium text-fg">{p.step}</h3>
                  </div>
                  <p className="text-base text-muted leading-relaxed"><T text={p.detail} /></p>
                </div>
                <Images images={p.images} />
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ── 6. Key decisions ── */}
      {decisions.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-24 border-t border-edge pt-16">
          <SectionLabel>Key decisions</SectionLabel>
          <div className="mt-10 space-y-16">
            {decisions.map((d) => (
              <div key={d.title}>
                <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12">
                  <h3 className="text-lg font-medium text-fg">{d.title}</h3>
                  <p className="text-base text-muted leading-relaxed">
                    <T text={d.why} />
                  </p>
                </div>
                <Images images={d.images} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Extra sections ── */}
      {sections.map((s) => (
        <section key={s.heading} className="max-w-6xl mx-auto px-6 mb-24 border-t border-edge pt-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12">
            <SectionLabel>{s.heading}</SectionLabel>
            <p className="text-base text-muted leading-relaxed"><T text={s.body} /></p>
          </div>
          <Images images={s.images} />
        </section>
      ))}

      {/* ── 7. Outcome ── */}
      {hasOutcome && (
        <section className="max-w-6xl mx-auto px-6 mb-24 border-t border-edge pt-16">
          <SectionLabel>Outcome</SectionLabel>
          {study.outcome.metrics.length > 0 && (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-edge">
              {study.outcome.metrics.map(({ label, value }) => (
                <div key={label} className="bg-bg px-6 py-10 text-center">
                  <p className="text-2xl sm:text-3xl font-semibold text-fg mb-2 leading-tight">{value}</p>
                  <p className="text-xs text-muted uppercase tracking-[0.15em] leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          )}
          {showText(study.outcome.text) && (
            <p className="mt-10 text-lg text-fg/80 leading-relaxed max-w-3xl">
              <T text={study.outcome.text} />
            </p>
          )}
        </section>
      )}

      {/* ── 8. Learnings ── */}
      {learnings.length > 0 && (
        <Section label="What I'd do next">
          <ul className="space-y-3">
            {learnings.map((l) => (
              <li key={l} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                <span className="text-base text-fg/80 leading-relaxed"><T text={l} /></span>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}
