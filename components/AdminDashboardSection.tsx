import type { Project } from "@/lib/projects"
import { ImageSlot } from "@/components/ImageSlot"

/** "Admin dashboard" section on a project page, for projects that had one. */
export default function AdminDashboardSection({ project }: { project: Project }) {
  const admin = project.adminDashboard
  if (!admin) return null

  return (
    <section className="max-w-6xl mx-auto px-6 mb-24 border-t border-edge pt-16">
      <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted">Admin dashboard</p>
        </div>
        <div>
          <p className="text-lg text-fg/80 leading-relaxed">{admin.summary}</p>
          {admin.points && admin.points.length > 0 && (
            <ul className="mt-6 space-y-3">
              {admin.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5" />
                  <span className="text-base text-muted leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {admin.image && (
        <div className="mt-10">
          <ImageSlot slot={{ src: admin.image, alt: `${project.title} admin dashboard` }} />
        </div>
      )}
    </section>
  )
}
