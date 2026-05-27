"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "/work" },
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-edge backdrop-blur-md bg-bg/80" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-fg hover:text-accent transition-colors duration-200"
        >
          Amar Sijercic
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ label, href }) => {
            const isActive =
              label === "Work" && pathname.startsWith("/work");
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-fg"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
