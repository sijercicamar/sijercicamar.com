import Image from "next/image"
import { existsSync } from "fs"
import path from "path"
import Link from "next/link"

import { SHOW_DRAFTS } from "@/lib/draft"

const expertise = [
  "Product design",
  "Design systems",
  "SaaS & dashboards",
  "UX research",
  "AI products",
  "Mobile",
  "CRO & e-commerce",
  "Visual design",
]

const tools = ["Figma", "Webflow", "Adobe Creative Suite", "HTML, CSS & JS", "WordPress", "Claude & ChatGPT"]

const languages = ["English (fluent)", "German (B2)", "Bosnian / Croatian / Serbian (native)"]

export default function About() {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", "amar.jpg"))

  return (
    <section id="about" className="py-32 px-6 border-t border-edge">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[260px_1fr] gap-16 lg:gap-24 items-start">

          {/* ── Photo column ── */}
          <div className="space-y-5 md:sticky md:top-24">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-edge bg-surface">
              {hasPhoto ? (
                <Image
                  src="/amar.jpg"
                  alt="Amar Sijercic"
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-semibold text-muted tracking-tight select-none">
                    AS
                  </span>
                </div>
              )}
            </div>

            <div>
              <p className="text-base font-semibold text-fg">Amar Sijercic</p>
              <p className="text-sm text-muted mt-0.5">Senior Product Designer</p>
              <p className="text-xs text-muted/70 mt-1">Sarajevo · CET · Remote</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:sijercicamar@gmail.com"
                className="text-xs text-muted hover:text-fg transition-colors duration-150"
              >
                sijercicamar@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/amar-sijercic-7998a7b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-fg transition-colors duration-150"
              >
                LinkedIn ↗
              </a>
            </div>

            <a
              href="/amar-sijercic-cv.pdf"
              download="Amar Sijercic CV.pdf"
              className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-full border border-edge text-muted hover:text-fg hover:border-muted/40 transition-all duration-200 w-full justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          {/* ── Content column ── */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-6">
                About
              </p>
              <p className="text-xl text-muted leading-relaxed mb-6">
                I&apos;m a Senior Product Designer with 15+ years of experience
                across SaaS, AI, fintech and e-commerce products, from first
                discovery to shipped, maintained systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-edge">
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-3">
                  Leadership
                </h3>
                <p className="text-sm text-fg/80 leading-relaxed">
                  I&apos;ve led design teams of five designers at Plantech
                  Industries and two at Travlrd LLC.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-3">
                  How I work
                </h3>
                <p className="text-sm text-fg/80 leading-relaxed">
                  Discovery, flows, prototypes, systems, then handoff, working
                  closely with developers the whole way.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-3">
                  AI in my workflow
                </h3>
                <p className="text-sm text-fg/80 leading-relaxed">
                  I use Claude and ChatGPT every day for research synthesis,
                  copy exploration and fast prototyping, so more time goes into
                  the decisions that matter.
                </p>
                {SHOW_DRAFTS && (
                  <p className="mt-2 text-xs rounded bg-yellow-400/10 text-yellow-300 outline-1 outline-dashed outline-yellow-400/40 px-1">
                    {"{{TODO: Amar to confirm the exact AI use cases}}"}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-edge">
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-5">
                  Expertise
                </h3>
                <ul className="space-y-3">
                  {expertise.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-fg/80"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-5">
                  Tools
                </h3>
                <ul className="space-y-3">
                  {tools.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-fg/80"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-5">
                  Languages
                </h3>
                <ul className="space-y-3">
                  {languages.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-fg/80"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-150"
              >
                View all work →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
