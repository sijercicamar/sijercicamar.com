import type { Metadata } from "next"
import Nav from "@/components/Nav"
import WorkGrid from "@/components/WorkGrid"

export const metadata: Metadata = {
  title: "Work — Amar Sijercic",
  description:
    "Selected projects by Amar Sijercic across UX/UI design, Webflow, and WordPress.",
}

export default function WorkPage() {
  return (
    <main>
      <Nav />
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-12">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-6">
          Portfolio
        </p>
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.92] tracking-tight text-fg mb-8">
          Selected<br />Work
        </h1>
        <p className="text-lg text-muted max-w-xl leading-relaxed">
          Product design, Webflow builds, and WordPress — across startups,
          SaaS platforms, editorial products, and service businesses.
        </p>
      </div>
      <WorkGrid />
    </main>
  )
}
