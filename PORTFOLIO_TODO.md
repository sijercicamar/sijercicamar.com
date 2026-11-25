# Portfolio repositioning: what Amar still needs to do

Branch: `portfolio-repositioning`

## How drafts work

- Any text containing `{{TODO: …}}` and any image slot whose file is missing is **shown locally and on Vercel preview deploys** (yellow, dashed), and **hidden on the production site**. You can merge before everything is filled in and nothing half-finished will be visible.
- Projects with `draft: true` in `lib/projects.ts` are excluded from production entirely (lists, sitemap, Next/Previous, the page itself returns 404).
- To fill in content, edit `lib/case-studies.ts` (case study text) and drop images into `/public/work/...` at the paths below. An image appears on the live site as soon as its file exists.

## 1. `{{TODO}}` placeholders

### `/work/persuava` (`lib/case-studies.ts`)
- Header **Team**: who you worked with (founders, developers, PM) and team size
- Header **Timeline**: total engagement length (after "MVP in 5 weeks")
- **My role**: who you collaborated with and how handoff worked
- **Process: Handoff**: how designs were handed off to the developers
- **What I'd do next**: 2–3 short learnings

### `/work/standup-republic` (`lib/case-studies.ts`)
- Header **Team**: team size and who you worked with day to day (after "Built by the Travlrd LLC development team")
- **My role**: how you worked with the developers and stakeholders
- **Process: Discovery**: how you learned how promoters, comedians and venues worked before the platform
- **Process: Wireframes**: describe the wireframing stage
- **Process: Handoff**: how designs were handed off to the Travlrd developers
- **Key decision: Event publishing for promoters**: why it mattered to promoters
- **Key decision: Native apps**: why native apps were the next step
- **Outcome**: any other real outcome you can share
- **What I'd do next**: 2–3 short learnings

### `/work/dashboards-design-system` (new, `draft: true`)
Everything is a placeholder:
- `lib/projects.ts`: `year`, `overview`, `challenge`, `solution`, `outcome`
- `lib/case-studies.ts`: Team, Timeline, Platforms, Overview, Problem, My role, all 5 process steps, the 5 approach topics (Tables, Filters & search, Bulk actions, Empty/loading/error states, Roles & permissions), Component library text, Examples text, Outcome, Learnings
- When it's ready, remove `draft: true` from the project in `lib/projects.ts` to publish it.

### Home → About (`components/About.tsx`)
- **AI in my workflow**: confirm the exact use cases. The current text says "research synthesis, copy exploration and fast prototyping" (based on your brief and the previous About copy). Delete the TODO note in the file once confirmed.

## 2. Image slots to supply

All paths are in `/public`. Recommended ratio 16:10 (they are cropped from the top).

**Persuava**
- `/public/work/persuava/flow-old-36-steps.png`: original 36-step flow map
- `/public/work/persuava/flow-new-5-steps.png`: new 5-step flow
- `/public/work/persuava/workspace-ia.png`: workspace IA diagram
- `/public/work/persuava/realtime-preview-panel.png`: real-time preview panel
- `/public/work/persuava/output-email.png`: email template builder
- `/public/work/persuava/output-landing-page.png`: landing page builder
- `/public/work/persuava/output-advertorial.png`: advertorial flow
- `/public/work/persuava/ab-variant-builder.png`: A/B variant builder
- `/public/work/persuava/marketing-site.png`: Webflow marketing site

**StandUp Republic**
- `/public/work/standup-republic/journey-comedian.png`: comedian journey map
- `/public/work/standup-republic/journey-promoter.png`: promoter journey map
- `/public/work/standup-republic/journey-ticket-buyer.png`: ticket buyer journey map
- `/public/work/standup-republic/admin.png`: admin layer
- `/public/work/standup-republic/comedian-payout-dashboard.png`: comedian application and payout dashboard
- `/public/work/standup-republic/promoter-sales-analytics.png`: promoter event publishing and sales analytics
- `/public/work/standup-republic/ticket-purchase-qr.png`: ticket purchase and QR entry (mobile)
- `/public/work/standup-republic/native-apps.png`: native app screens

**Dashboards & Design System**
- `/public/work/dashboards-design-system/component-overview.png`
- `/public/work/dashboards-design-system/token-sheet.png`
- `/public/work/dashboards-design-system/table-states.png`
- `/public/work/dashboards-design-system/dashboard-example-1.png`
- `/public/work/dashboards-design-system/dashboard-example-2.png`
- `/public/work/dashboards-design-system/dashboard-example-3.png`

Also optional: a `coverImage` for Dashboards & Design System (`lib/projects.ts`), otherwise its card shows the title as text.

## 3. Existing claims flagged (not changed, please decide)

**Site copy**
- **Evionor** (`lib/projects.ts`): highlight "Shopify store built from Figma designs with **full theme customization**", plus the "Shopify Architecture" process step ("Structured the Shopify catalog…") and "set up Shopify abandoned cart flows". These read as Shopify theme development. Keep or soften.
- **StandUp Republic** (old `outcome` field in `lib/projects.ts`): "now the digital backbone of Germany's independent comedy circuit, with measurable reductions in administrative overhead". Not a verified number. The new case study template doesn't show it, but the text is still in the data. Remove or confirm.
- **Persuava** (`lib/projects.ts` highlights): "Onboarding flow collapsed from 36 steps to 5, **core drop-off eliminated**" and the outcome line "addressed the core drop-off issue". Result claim with no number. The new template's Outcome only uses the 4 verified numbers.
- **Eldelia**: medication reminders for seniors. Not a healthcare claim as written, but worth a look given the "no healthcare" rule.

**Removed from the About section** (were not in the verified facts list; re-add any that are true):
- Expertise: "E-commerce & Shopify Design", "A/B Testing & Experimentation", "Email & Landing Page Design" (CRO stays as "CRO & e-commerce")
- Tools: Shopify, ClickUp & Loom, Framer, Maze & FigJam
- Paragraph mentioning "Shopify e-commerce" and "collaborating with performance marketing and CRO teams"

**CV** (`/public/amar-sijercic-cv.pdf`, not edited)
- "DEV: HTML, CSS, **basic React**"
- Summary: "from Shopify storefronts and email flows to **A/B tested landing pages**"
- "EXPERTISE: CRO: **A/B Testing**, Funnel Analysis, Heatmaps…"
- "Applied **A/B testing** to CTAs, page hierarchy, checkout flows, and email subject line variants."
- "Designed Evionor's **Shopify store**…" and "E-COM: Shopify, WooCommerce…"
- The CV headline still positions you as a "CRO-driven" UX/UI designer, which no longer matches the site.

## 4. Hidden or moved

- **Featured** is now Persuava → StandUp Republic → Eldelia → Dashboards & Design System. Until Dashboards is published, production shows 3 featured cards.
- **Evionor** and **Ajándékbár** moved from Featured to "Product work".
- "More work" is split into **Product work** (12 projects, cards) and **Other work** (9 web projects: collapsed list on the homepage, small text cards on `/work`). Nothing was deleted.
- **Previous / Next** on case studies now follows this order (featured → product → other). Checked on Persuava: Back → All Work, Next → Standup Republic.
- **Persuava** and **StandUp Republic** now use the new case study template. All other projects keep the old layout.
- **Testimonials** (`components/Testimonials.tsx`) are added to the homepage but render nothing until you add real quotes to the array.
- **Blog link was NOT hidden.** The brief said the blog has no posts, but it has 8 published posts, so the nav link stays. Tell me if you still want it hidden.
- Not used, but available from your facts: "Senior UX/UI Designer at Wiser Technology Solutions (since July 2026)". It's not on the site. Say if you want it in About.

## 5. Verified

- `next build` passes; typecheck passes; lint is clean on changed files (one older lint error in `components/Nav.tsx` is unchanged from `main`).
- Production build: no `{{TODO}}` text or image slots in the HTML of `/`, `/work`, `/work/persuava`, `/work/standup-republic`; `/work/dashboards-design-system` returns 404.
- Checked at 1440×900 and 375×812: home (hero, work tiers, About, Contact), Persuava, StandUp Republic, Dashboards (draft view). No horizontal scroll on mobile.
