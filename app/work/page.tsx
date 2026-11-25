import type { Metadata } from "next"
import Nav from "@/components/Nav"
import WorkGrid from "@/components/WorkGrid"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design case studies by Amar Sijercic: SaaS, AI products, dashboards and design systems, plus web and e-commerce work.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Amar Sijercic",
    description:
      "Product design case studies by Amar Sijercic: SaaS, AI products, dashboards and design systems.",
    url: `${SITE.url}/work`,
    type: "website",
  },
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
          Product design case studies across SaaS, AI and mobile, followed by
          more product work and websites for businesses and organisations.
        </p>
      </div>
      <WorkGrid />
    </main>
  )
}
