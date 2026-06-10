"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const links = [
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  const isActiveLink = (label: string) =>
    (label === "Work" && pathname.startsWith("/work")) ||
    (label === "Blog" && pathname.startsWith("/blog"));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-edge backdrop-blur-md bg-bg/80" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="relative z-50 text-base font-semibold text-fg hover:text-accent transition-colors duration-200 tracking-tight"
        >
          Amar Sijercic
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`text-base transition-colors duration-200 ${
                  isActiveLink(label) ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger / close button (mobile only) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative z-50 md:hidden flex h-10 w-10 -mr-2 items-center justify-center"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-fg transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-fg transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-fg transition-all duration-300 ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-bg/60 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-out frosted-glass panel */}
      <aside
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-40 h-dvh w-[78%] max-w-xs overflow-hidden border-l border-fg/12 bg-bg/90 backdrop-blur-3xl backdrop-saturate-150 shadow-[-24px_0_60px_-20px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* frosted sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-fg/[0.08] via-transparent to-transparent"
        />
        <nav className="relative z-10 flex h-full flex-col gap-7 px-7 pt-28 pb-10">
          {links.map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              className={`text-2xl font-semibold tracking-tight transition-all duration-300 ${
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              } ${
                isActiveLink(label)
                  ? "text-accent"
                  : "text-fg hover:text-accent"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="mt-auto border-t border-edge pt-6">
            <p className="text-xs text-muted">© {new Date().getFullYear()} Amar Sijercic</p>
          </div>
        </nav>
      </aside>
    </header>
  );
}
