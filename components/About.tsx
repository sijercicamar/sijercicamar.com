const expertise = [
  "Product Design",
  "UX Research",
  "Design Systems",
  "Interaction Design",
  "Prototyping & Testing",
  "Visual Design",
];

const tools = ["Figma", "FigJam", "Framer", "Principle", "Maze", "Notion"];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-edge">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-fg">About</h2>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
              The person behind the work
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted leading-relaxed">
              I'm a Senior UX/UI Designer with a deep passion for turning
              complex problems into clear, elegant digital products. My process
              is rooted in understanding people first — their goals,
              frustrations, and mental models — and then translating that
              understanding into interfaces that feel effortless.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Whether shaping a product from 0 to 1 or refining an existing
              experience, I bring both strategic thinking and strong craft. Good
              design, to me, is invisible — it just works.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-edge">
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
          </div>
        </div>
      </div>
    </section>
  );
}
