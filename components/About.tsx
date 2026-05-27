import Image from "next/image"
import { existsSync } from "fs"
import path from "path"
import Link from "next/link"

const expertise = [
  "Product Design",
  "UX Research",
  "Design Systems",
  "Interaction Design",
  "Prototyping & Testing",
  "Visual Design",
]

const tools = ["Figma", "FigJam", "Framer", "Principle", "Maze", "Notion"]

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
              <p className="text-sm text-muted mt-0.5">Senior UX/UI Designer</p>
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
          </div>

          {/* ── Content column ── */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-6">
                About
              </p>
              <p className="text-xl text-muted leading-relaxed mb-6">
                I'm a Senior UX/UI Designer with a deep passion for turning
                complex problems into clear, elegant digital products.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                My process is rooted in understanding people first — their
                goals, frustrations, and mental models — and then translating
                that understanding into interfaces that feel effortless.
                Whether shaping a product from 0 to 1 or refining an existing
                experience, I bring both strategic thinking and strong craft.
                Good design, to me, is invisible — it just works.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-edge">
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
            </div>

            <div className="pt-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors duration-150"
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
