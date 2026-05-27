import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_460px] lg:grid-cols-[1fr_560px] xl:grid-cols-[1fr_620px] items-end gap-8">

          {/* ── Text column ── */}
          <div className="pb-20 lg:pb-28">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-8">
              Senior UX/UI Designer
            </p>

            <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-semibold leading-[0.9] tracking-tight mb-10">
              <span className="text-fg block">Amar</span>
              <span className="text-muted block">Sijercic</span>
            </h1>

            <p className="text-lg text-muted max-w-lg mb-12 leading-relaxed">
              I design conversion-focused digital experiences - ecommerce stores,
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

          {/* ── Photo column (hidden on mobile) ── */}
          <div className="hidden md:block relative self-end">
            {/* bottom fade to blend with bg */}
            <div
              className="absolute bottom-0 inset-x-0 h-32 pointer-events-none z-10"
              style={{ background: "linear-gradient(to top, var(--color-bg) 30%, transparent)" }}
            />
            {/* large ambient glow rising behind the figure */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[75%] blur-3xl opacity-[0.08] z-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 90%, #57ff8c 0%, transparent 65%)" }}
            />
            {/* tight floor glow — subtle pool at feet */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-10 blur-2xl opacity-30 z-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #57ff8c, transparent 70%)" }}
            />
            <Image
              src="/amar-nobg.png"
              alt="Amar Sijercic"
              width={620}
              height={680}
              className="relative z-[5] w-full h-auto object-contain object-bottom select-none"
              style={{
                filter:
                  "drop-shadow(0 0 12px rgba(87,255,140,0.15)) drop-shadow(0 0 35px rgba(87,255,140,0.06))",
              }}
              priority
              quality={95}
              draggable={false}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
