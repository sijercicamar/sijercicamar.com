const projects = [
  {
    index: "01",
    category: "Product Design",
    tags: ["UX Research", "UI Design"],
    year: "2025",
  },
  {
    index: "02",
    category: "Design System",
    tags: ["Components", "Tokens"],
    year: "2025",
  },
  {
    index: "03",
    category: "Mobile App",
    tags: ["iOS", "Interaction Design"],
    year: "2024",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-baseline gap-3 mb-16">
          <h2 className="text-3xl font-semibold text-fg">Selected Work</h2>
          <span className="text-sm text-muted">— case studies coming soon</span>
        </div>

        <div className="divide-y divide-edge border-y border-edge">
          {projects.map((project) => (
            <div
              key={project.index}
              className="group flex items-center justify-between py-7 hover:bg-surface transition-colors duration-150 -mx-4 px-4"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-muted w-5 shrink-0">
                  {project.index}
                </span>
                <div>
                  <p className="text-xs text-muted mb-1.5 tracking-[0.1em] uppercase">
                    {project.category}
                  </p>
                  <p className="text-base font-medium text-fg/20">
                    Case study in progress
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-edge text-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted shrink-0">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
