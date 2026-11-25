// Deep case studies. Projects listed here render with the full case study
// template on /work/[slug]; every other project keeps the standard layout.
//
// Rules: no invented metrics or quotes. Anything Amar still has to write is a
// {{TODO: ...}} string, and every image is a path Amar supplies in /public.
// Both are hidden on the production site until filled in (see lib/draft.ts).

export type ImageSlot = { src: string; alt: string; caption?: string }

export type CaseStudy = {
  summary: string
  team: string
  timeline: string
  platforms: string
  overview: string
  problem: string
  myRole: string
  process: { step: string; detail: string; images?: ImageSlot[] }[]
  decisions: { title: string; why: string; images?: ImageSlot[] }[]
  /** Extra sections between Key decisions and Outcome (e.g. a component library). */
  sections?: { heading: string; body: string; images?: ImageSlot[] }[]
  outcome: { metrics: { label: string; value: string }[]; text: string }
  learnings: string[]
}

export const caseStudies: Record<string, CaseStudy> = {
  // ── Persuava ────────────────────────────────────────────────────────────────
  persuava: {
    summary:
      "Redesign of an AI content platform for e-commerce marketers: onboarding cut from 36 steps to 5, MVP shipped in 5 weeks, and the product became central to a VC raise.",
    team: "{{TODO: who you worked with (founders, developers, PM) and team size}}",
    timeline: "MVP in 5 weeks · {{TODO: total engagement length}}",
    platforms: "Web app (SaaS), Webflow marketing site",
    overview:
      "Persuava (formerly Copywise) is an AI-powered platform that helps e-commerce marketers produce product pages, email campaigns, ad copy, landing pages and advertorials at scale. With 700+ early adopters the product had traction, but its UX was working against it. I led the full redesign and prepared the product for a VC fundraise.",
    problem:
      "It took 36 separate steps to generate a single piece of content, and most new sign-ups never reached their first output. Marketers who arrived with a real problem often left before they saw the value. At the same time the team needed new output types (email templates, a landing page builder, advertorials) and an AI audience generator, while migrating off a WeWeb/Supabase stack that had hit its ceiling.",
    myRole:
      "I led the redesign end to end: simplifying the core workflow, expanding the feature set to cover the full e-commerce content lifecycle, and designing the 100+ page Webflow marketing site that supported the fundraise. {{TODO: who you collaborated with and how handoff worked}}",
    process: [
      {
        step: "Discovery & audit",
        detail:
          "Mapped the existing 36-step flow and identified where users were abandoning. Reviewed session recordings and spoke with early users to understand what they actually needed.",
        images: [
          {
            src: "/work/persuava/flow-old-36-steps.png",
            alt: "Map of the original 36-step content generation flow",
            caption: "The original 36-step flow, mapped during the audit",
          },
        ],
      },
      {
        step: "Flows",
        detail:
          "Collapsed content generation to 5 key inputs on a single screen: define the product, pick an output type, get content to iterate on immediately.",
        images: [
          {
            src: "/work/persuava/flow-new-5-steps.png",
            alt: "The new 5-step content generation flow",
            caption: "The new 5-step flow",
          },
        ],
      },
      {
        step: "Information architecture",
        detail:
          "Rebuilt the workspace around how e-commerce marketers think (by campaign, output type and product) instead of the platform's internal logic.",
        images: [
          {
            src: "/work/persuava/workspace-ia.png",
            alt: "Workspace information architecture diagram",
            caption: "Workspace IA: campaigns, outputs and products",
          },
        ],
      },
      {
        step: "UI",
        detail:
          "A clean, Notion-inspired workspace with clear project and output organisation, and a real-time preview panel so users see the AI output forming while they configure.",
        images: [
          {
            src: "/work/persuava/realtime-preview-panel.png",
            alt: "Real-time preview panel next to the generation inputs",
            caption: "Real-time preview panel",
          },
        ],
      },
      {
        step: "Handoff",
        detail: "{{TODO: how designs were handed off to the developers (specs, components, reviews)}}",
      },
    ],
    decisions: [
      {
        title: "36 steps down to 5 inputs on one screen",
        why: "Most new sign-ups never reached their first output. Getting users to value in one screen mattered more than exposing every option up front.",
      },
      {
        title: "Show the output while it is being configured",
        why: "A real-time preview panel gives immediate value with no waiting, so users understand what the product does before they finish setting it up.",
      },
      {
        title: "Each output type designed for its own context",
        why: "An email has different constraints than a landing page, and both differ from a product description. Email templates got modular content blocks, landing pages got A/B variants, and advertorials got an editorial flow.",
        images: [
          { src: "/work/persuava/output-email.png", alt: "Email template builder with modular blocks", caption: "Email template builder" },
          { src: "/work/persuava/output-landing-page.png", alt: "Landing page builder", caption: "Landing page builder" },
          { src: "/work/persuava/output-advertorial.png", alt: "Advertorial creation flow", caption: "Advertorial flow" },
        ],
      },
      {
        title: "A/B variants built into the landing page builder",
        why: "Variant generation sits inside the builder, so marketers can set up conversion tests without leaving the tool.",
        images: [
          { src: "/work/persuava/ab-variant-builder.png", alt: "A/B variant builder", caption: "A/B variant builder" },
        ],
      },
      {
        title: "Marketing site designed alongside the product",
        why: "The 100+ page Webflow site (pricing, feature pages, knowledge base, blog) was built to convert trial sign-ups and support the fundraise narrative.",
        images: [
          { src: "/work/persuava/marketing-site.png", alt: "Persuava marketing site", caption: "Webflow marketing site" },
        ],
      },
    ],
    outcome: {
      metrics: [
        { label: "Onboarding steps", value: "36 → 5" },
        { label: "MVP delivery", value: "5 weeks" },
        { label: "Output types designed", value: "6" },
        { label: "Marketing site pages", value: "100+" },
      ],
      text: "The MVP shipped in five weeks and already covered more than the original platform at launch. Persuava went on to raise venture capital, with the redesigned product central to the pitch.",
    },
    learnings: ["{{TODO: what you would do next or what you learned (2–3 short points)}}"],
  },

  // ── StandUp Republic ────────────────────────────────────────────────────────
  "standup-republic": {
    summary:
      "A three-sided platform for Germany's stand-up comedy scene (comedians, promoters and ticket buyers, plus an admin layer) across web and native apps.",
    team: "Built by the Travlrd LLC development team · {{TODO: team size and who you worked with day to day}}",
    timeline: "MVP in 4 weeks · native apps 3 weeks later · 18+ months in active development",
    platforms: "Web app, iOS and Android (Capacitor)",
    overview:
      "Standup Republic connects promoters, comedians and audiences in one product. Before it, the scene ran on spreadsheets, cash payouts and manual check-ins. I designed the whole system, and the Travlrd dev team built it.",
    problem:
      "Three very different user types needed to share one product without friction. Comedians wanted to apply for shows and get paid transparently. Promoters needed to publish events and see sales. Ticket buyers wanted a quick purchase and easy entry. Each role needed an experience that felt made for them, while the system underneath stayed coherent and maintainable.",
    myRole:
      "I designed the whole system: the comedian, promoter, ticket buyer and admin experiences, first for the web MVP and then for the native iOS and Android apps. The Travlrd development team built it. {{TODO: how you worked with the developers and stakeholders}}",
    process: [
      {
        step: "Discovery",
        detail: "{{TODO: how you learned how promoters, comedians and venues actually worked before the platform}}",
      },
      {
        step: "User journeys",
        detail: "Mapped three distinct journeys in Figma (comedian, promoter and ticket buyer) before designing any screens.",
        images: [
          { src: "/work/standup-republic/journey-comedian.png", alt: "Comedian user journey map", caption: "Comedian journey" },
          { src: "/work/standup-republic/journey-promoter.png", alt: "Promoter user journey map", caption: "Promoter journey" },
          { src: "/work/standup-republic/journey-ticket-buyer.png", alt: "Ticket buyer user journey map", caption: "Ticket buyer journey" },
        ],
      },
      {
        step: "Wireframes",
        detail: "{{TODO: describe the wireframing stage}}",
      },
      {
        step: "UI",
        detail:
          "Dedicated interfaces for each role from a single Figma system, tied together by a comprehensive admin layer.",
        images: [
          { src: "/work/standup-republic/admin.png", alt: "Admin layer", caption: "Admin layer" },
        ],
      },
      {
        step: "Handoff",
        detail: "{{TODO: how designs were handed off to the Travlrd developers}}",
      },
    ],
    decisions: [
      {
        title: "One system, a dedicated interface per role",
        why: "Comedians, promoters and ticket buyers have completely different goals. Separate interfaces built from one Figma system let each feel tailor-made while the product stayed coherent.",
      },
      {
        title: "Applications, rankings and automated payouts for comedians",
        why: "The scene ran on spreadsheets and cash payouts. Comedians get an application flow, a ranking system and a payout dashboard with automated VAT handling.",
        images: [
          {
            src: "/work/standup-republic/comedian-payout-dashboard.png",
            alt: "Comedian application and payout dashboard",
            caption: "Comedian application and payout dashboard",
          },
        ],
      },
      {
        title: "Event publishing with real-time sales for promoters",
        why: "Promoters publish events and follow sales as they happen, with Eventim integration. {{TODO: why this mattered to promoters}}",
        images: [
          {
            src: "/work/standup-republic/promoter-sales-analytics.png",
            alt: "Promoter event publishing and sales analytics",
            caption: "Event publishing and sales analytics",
          },
        ],
      },
      {
        title: "Mobile-first purchase with QR entry",
        why: "Manual check-ins were replaced by a short mobile purchase flow, a digital wallet and QR validation at the door.",
        images: [
          {
            src: "/work/standup-republic/ticket-purchase-qr.png",
            alt: "Mobile ticket purchase and QR entry",
            caption: "Ticket purchase and QR entry (mobile)",
          },
        ],
      },
      {
        title: "Native apps right after the web MVP",
        why: "After the web MVP launched, I designed the native iOS and Android apps, built with Capacitor and shipped 3 weeks later. {{TODO: why native apps were the next step}}",
        images: [
          { src: "/work/standup-republic/native-apps.png", alt: "Native iOS and Android app screens", caption: "Native app screens" },
        ],
      },
    ],
    outcome: {
      metrics: [
        { label: "MVP delivery", value: "4 weeks" },
        { label: "Native apps", value: "+3 weeks" },
        { label: "Active development", value: "18+ months" },
        { label: "User roles", value: "3 + admin" },
      ],
      text: "The web MVP launched in four weeks and the native apps followed three weeks later. The platform has been in active development for more than 18 months. {{TODO: any other real outcome you can share}}",
    },
    learnings: ["{{TODO: what you would do next or what you learned (2–3 short points)}}"],
  },

  // ── Dashboards & Design System ─────────────────────────────────────────────
  "dashboards-design-system": {
    summary:
      "I have designed hundreds of admin dashboards. This is how I approach data-dense interfaces, and the component systems that keep them consistent.",
    team: "{{TODO: typical team setup}}",
    timeline: "{{TODO: period}}",
    platforms: "{{TODO: web, desktop, tablet…}}",
    overview: "{{TODO: 2–3 sentences on your dashboard and design system work}}",
    problem: "{{TODO: what makes admin UIs hard for the people who use them every day}}",
    myRole: "{{TODO: what you personally owned (dashboards, component library, documentation) and who you worked with}}",
    process: [
      { step: "Discovery", detail: "{{TODO}}" },
      { step: "Flows", detail: "{{TODO}}" },
      { step: "Wireframes", detail: "{{TODO}}" },
      { step: "UI", detail: "{{TODO}}" },
      { step: "Handoff", detail: "{{TODO}}" },
    ],
    decisions: [
      {
        title: "Tables",
        why: "{{TODO: how you design data tables (density, sorting, column control, row actions)}}",
        images: [
          { src: "/work/dashboards-design-system/table-states.png", alt: "Table component states", caption: "Table component states" },
        ],
      },
      { title: "Filters & search", why: "{{TODO}}" },
      { title: "Bulk actions", why: "{{TODO}}" },
      { title: "Empty, loading and error states", why: "{{TODO}}" },
      { title: "Roles & permissions", why: "{{TODO}}" },
    ],
    sections: [
      {
        heading: "Component library",
        body: "{{TODO: tokens, variants, and how components are documented in Figma}}",
        images: [
          { src: "/work/dashboards-design-system/component-overview.png", alt: "Component library overview", caption: "Component overview" },
          { src: "/work/dashboards-design-system/token-sheet.png", alt: "Design token sheet", caption: "Token sheet" },
        ],
      },
      {
        heading: "Examples",
        body: "{{TODO: 2–3 NDA-safe dashboard examples, blurred where needed}}",
        images: [
          { src: "/work/dashboards-design-system/dashboard-example-1.png", alt: "Dashboard example 1" },
          { src: "/work/dashboards-design-system/dashboard-example-2.png", alt: "Dashboard example 2" },
          { src: "/work/dashboards-design-system/dashboard-example-3.png", alt: "Dashboard example 3" },
        ],
      },
    ],
    outcome: { metrics: [], text: "{{TODO: real outcomes only}}" },
    learnings: ["{{TODO}}"],
  },
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug]
}
