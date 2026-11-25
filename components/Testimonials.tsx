// Optional testimonials section. It renders nothing until real quotes are
// added below. Never add placeholder or invented quotes here: this array is
// shipped to the live site as-is.

type Testimonial = {
  quote: string
  name: string
  role: string // e.g. "CTO, Company"
}

const testimonials: Testimonial[] = [
  // { quote: "…", name: "…", role: "…" },
]

export default function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" className="py-32 px-6 border-t border-edge">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-10">
          What people say
        </p>
        <div className={`grid gap-4 ${testimonials.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="bg-surface border border-edge rounded-2xl p-8 flex flex-col gap-6">
              <blockquote className="text-base text-fg/85 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm font-medium text-fg">{t.name}</p>
                <p className="text-xs text-muted mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
