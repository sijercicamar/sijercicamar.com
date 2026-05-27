export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full py-24">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-8">
          Senior UX/UI Designer
        </p>

        <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-semibold leading-[0.9] tracking-tight mb-10">
          <span className="text-fg block">Amar</span>
          <span className="text-muted block">Sijercic</span>
        </h1>

        <p className="text-lg text-muted max-w-lg mb-12 leading-relaxed">
          I design conversion-focused digital experiences — e-commerce stores,
          landing pages, email flows, and SaaS dashboards. Strong craft,
          research-driven, built to perform.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg text-sm font-medium rounded-full hover:bg-accent hover:shadow-[0_0_18px_rgba(87,255,140,0.35)] transition-all duration-200"
          >
            View Work
            <span aria-hidden="true">↓</span>
          </a>
          <a
            href="mailto:sijercicamar@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-edge text-muted text-sm rounded-full hover:text-fg hover:border-muted/40 transition-colors duration-200"
          >
            sijercicamar@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
