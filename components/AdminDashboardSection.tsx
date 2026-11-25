import Image from "next/image"
import type { Project } from "@/lib/projects"
import { ImageSlot, imageExists } from "@/components/ImageSlot"
import { SHOW_DRAFTS } from "@/lib/draft"

type Img = NonNullable<NonNullable<Project["adminDashboard"]>["images"]>[number]

/** One admin screenshot. Screens with known dimensions keep their natural ratio, so tall pages aren't cropped. */
function Shot({ image, title }: { image: Img; title: string }) {
  const alt = `${title} admin: ${image.caption ?? "dashboard"}`
  if (image.width && image.height && imageExists(image.src)) {
    return (
      <figure>
        <Image
          src={image.src}
          alt={alt}
          width={image.width}
          height={image.height}
          className="w-full h-auto rounded-xl border border-edge bg-surface"
          sizes="(max-width: 768px) 100vw, 1100px"
        />
        {image.caption && <figcaption className="mt-3 text-sm text-muted">{image.caption}</figcaption>}
      </figure>
    )
  }
  return <ImageSlot slot={{ src: image.src, alt, caption: image.caption }} aspect="aspect-[1440/1024]" />
}

/** "Admin dashboard" section on a project page, for projects that had one. */
export default function AdminDashboardSection({ project }: { project: Project }) {
  const admin = project.adminDashboard
  if (!admin) return null
  const images = (admin.images ?? []).filter((i) => SHOW_DRAFTS || imageExists(i.src))
  const [first, ...rest] = images

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
      {first && (
        <div className="mt-10">
          <Shot image={first} title={project.title} />
        </div>
      )}
      {rest.length > 0 && (
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          {rest.map((i) => (
            <Shot key={i.src} image={i} title={project.title} />
          ))}
        </div>
      )}
    </section>
  )
}
