import Link from "next/link"
import { projectsByCategory } from "@/lib/projects"

const categories = [
  "UX/UI Design",
  "Webflow",
  "WordPress & Web Design",
] as const

const categoryAccent: Record<string, string> = {
  "UX/UI Design": "text-accent",
  Webflow: "text-blue-400",
  "WordPress & Web Design": "text-emerald-400",
}

export default function Work() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-baseline gap-3 mb-20">
          <h2 className="text-3xl font-semibold text-fg">Selected Work</h2>
          <span className="text-sm text-muted">— {Object.values(projectsByCategory).flat().length} projects</span>
        </div>

        <div className="space-y-16">
          {categories.map((cat) => {
            const list = projectsByCategory[cat]
            return (
              <div key={cat}>
                <p className={`text-xs font-medium tracking-[0.2em] uppercase mb-6 ${categoryAccent[cat]}`}>
                  {cat}
                </p>
                <div className="divide-y divide-edge border-y border-edge">
                  {list.map((project, i) => (
                    <Link
                      key={project.slug}
                      href={`/work/${project.slug}`}
                      className="group flex items-center justify-between py-5 hover:bg-surface transition-colors duration-150 -mx-4 px-4"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-mono text-muted w-5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base font-medium text-fg group-hover:text-fg transition-colors">
                          {project.title}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="hidden sm:block text-sm text-muted max-w-[280px] truncate">
                          {project.tagline}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted shrink-0">{project.year}</span>
                          <span className="text-muted opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
