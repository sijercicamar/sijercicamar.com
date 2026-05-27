export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 border-t border-edge">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-6">
            Let's connect
          </p>
          <h2 className="text-[clamp(2rem,7vw,6rem)] font-semibold leading-[1.05] text-fg max-w-3xl">
            Have a project in mind?
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 mb-24">
          <a
            href="mailto:sijercicamar@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg text-sm font-medium rounded-full hover:bg-accent transition-colors duration-200"
          >
            Send an email →
          </a>
          <a
            href="https://www.linkedin.com/in/amar-sijercic-7998a7b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-edge text-muted text-sm rounded-full hover:text-fg hover:border-muted/40 transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="flex items-center justify-between border-t border-edge pt-8">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Amar Sijercic</p>
          <p className="text-xs text-muted">Designed & built with care</p>
        </div>
      </div>
    </footer>
  );
}
