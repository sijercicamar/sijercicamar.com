// ── Blog posts ───────────────────────────────────────────────────────────────
// Add new posts to the `posts` array below. Newest first (the list and the
// prev/next navigation both follow array order).
//
// `body` is a list of content blocks so writing a post stays simple and the
// rendering stays clean & readable. Supported block types:
//
//   { type: "heading",   text, level? }     → section heading (level 2 default, 3 = sub)
//   { type: "paragraph", text }              → body paragraph
//   { type: "quote",     text, cite? }       → pull quote
//   { type: "list",      items: string[] }   → bulleted list
//   { type: "image",     src, alt?, caption? } → 4:3 image (in /public)
//
// Inline formatting inside `text`/`items`: **bold**, *italic*, [label](url).
//
// SCHEDULING: set `draft: true` and a future `date`. The daily publisher
// (09:00 Europe/Sarajevo) flips it live once that date arrives. See
// scripts/publish-due-posts.mjs. Cover images are 4:3 — drop them in
// /public/blog/<slug>.webp.

export type ContentBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt?: string; caption?: string }

export type Post = {
  slug: string
  title: string
  description: string
  date: string // ISO date, e.g. "2026-06-09" — also the scheduled publish date
  coverImage?: string // path in /public, 4:3, e.g. "/blog/my-post.webp"
  tags: string[]
  body: ContentBlock[]
  draft?: boolean // hidden from the site until the scheduled publisher flips it
}

// The author is always Amar Sijercic.
export const AUTHOR = "Amar Sijercic"

export const posts: Post[] = [
  {
    slug: "above-the-fold-in-2026",
    title: "Above the Fold in 2026: Does It Still Matter?",
    description:
      `"Above the fold" was coined for newspapers in 1951. Web designers borrowed it, and then scrolling behavior changed everything. Here's what the research actually says today.`,
    date: "2026-07-01",
    coverImage: "/blog/above-the-fold-in-2026.webp",
    tags: ["UX", "Web Design"],
    draft: true,
    body: [
      { type: "paragraph", text: `"Above the fold" is one of those design terms that's been declared dead so many times it's almost become a cliché to discuss it. And yet — the debate continues. Does the first screen still matter? Do users actually scroll? Has infinite scroll, Instagram, and TikTok fundamentally changed how people interact with web pages?` },
      { type: "paragraph", text: `The answer, as with most things in UX, is more nuanced than either side admits.` },
      { type: "heading", text: `Where the Term Comes From` },
      { type: "paragraph", text: `"Above the fold" originated in newspaper printing. A folded newspaper displayed on a newsstand shows only the top half — the content "above the fold." Editors knew this half determined whether someone picked up the paper, so the most important content lived there.` },
      { type: "paragraph", text: `When the web emerged, designers borrowed the concept: the content visible before scrolling was "above the fold." Everything below required user action to see. The reasoning was the same as the newspaper: if the first screen doesn't hook the user, they won't scroll.` },
      { type: "heading", text: `What the Research Actually Shows` },
      { type: "paragraph", text: `The scroll-behavior research has evolved significantly, and the picture is more complex than either camp suggests.` },
      { type: "paragraph", text: `**Users do scroll** — but only when they have a reason to. A 2018 Nielsen Norman Group study found that 57% of page-viewing time is spent above the fold. That number hasn't dropped to zero, but it has declined as users have become more experienced web users. The original 80% figure from early web research is no longer accurate.` },
      { type: "paragraph", text: `**The first screen still drives the scroll decision.** Whether a user scrolls at all is largely determined by what they see above the fold. If the first screen communicates a clear, compelling reason to keep reading, users scroll. If it's confusing, generic, or doesn't address their immediate question, they leave. The scroll rate is a downstream metric — it's determined upstream by the quality of the first screen.` },
      { type: "paragraph", text: `**Long-form content performs well — when the above-fold content earns it.** Landing pages that scroll five or six screens consistently outperform short pages for complex products and services, because they give the user enough information to make an informed decision. But this only works when the above-fold content establishes enough interest to justify the scroll.` },
      { type: "heading", text: `What "Above the Fold" Means in Practice Today` },
      { type: "paragraph", text: `The concept remains valid, but it requires an important update: the fold is not a fixed line.` },
      { type: "paragraph", text: `In 2026, "above the fold" means different things on a 4K desktop monitor, a 13-inch laptop, a tablet in landscape mode, and an iPhone 15. There is no single fold. There is a probability distribution of what different users will see before scrolling.` },
      { type: "paragraph", text: `This has two practical implications:` },
      { type: "paragraph", text: `**Design for the first viewport, not a fixed pixel height.** Your critical content — the value proposition, the primary CTA, the trust signal — should be designed to appear in the first visible area regardless of screen size. This means responsive design isn't optional; it's how above-the-fold thinking works now.` },
      { type: "paragraph", text: `**Don't truncate the hero to fit a fixed fold.** The old advice to "keep everything above 600px" created artificially cramped hero sections on modern displays. Design for clarity and breathing room, then verify on multiple screen sizes that the critical elements are visible.` },
      { type: "heading", text: `The Practical Takeaway` },
      { type: "paragraph", text: `Above the fold still matters — but as a principle, not a pixel boundary.` },
      { type: "paragraph", text: `The first thing users see on your page determines whether they engage with everything else. The goal is not to fit everything into the first screen. The goal is to put enough of the right things in the first screen to earn the scroll.` },
      { type: "paragraph", text: `One compelling headline. One clear CTA. One trust signal. Some visual breathing room. That's what the first screen needs to do. Everything else can live below.` },
      { type: "paragraph", text: `The fold hasn't disappeared. It's just become a design principle rather than a dimension.` },
      { type: "paragraph", text: `Working on a landing page and unsure what deserves to live above the fold? [Let's figure it out together](mailto:sijercicamar@gmail.com).` },
    ],
  },
  {
    slug: "design-systems-101",
    title: "Design Systems 101: Why Every Serious Digital Product Needs One",
    description:
      `A design system isn't just a component library. It's the difference between a product that scales and one that becomes impossible to maintain. Here's what it is, what it does, and when you actually need one.`,
    date: "2026-06-29",
    coverImage: "/blog/design-systems-101.webp",
    tags: ["Design Systems", "Product"],
    draft: true,
    body: [
      { type: "paragraph", text: `Every design team eventually hits the same wall. The product has grown, multiple designers (or a designer and developers) are working on it, and slowly — component by component, screen by screen — it starts to diverge. A button looks slightly different on the checkout page than on the settings screen. The spacing in the mobile app is different from the website. The error messages don't follow the same pattern. None of it is catastrophically wrong. But none of it quite coheres.` },
      { type: "paragraph", text: `This is the problem a design system solves.` },
      { type: "heading", text: `What a Design System Actually Is` },
      { type: "paragraph", text: `A design system is a shared set of reusable components, guidelines, and documentation that enables teams to design and build products consistently and efficiently. It's not just a UI kit or a component library (though those are part of it). A full design system includes:` },
      { type: "paragraph", text: `**Foundation tokens.** Color palette, typography scale, spacing system, border radii, shadow styles. These are the raw materials everything else is built from. When a brand refreshes its color palette, design tokens mean you update one value and the change propagates everywhere.` },
      { type: "paragraph", text: `**Component library.** Buttons, form inputs, modals, navigation patterns, cards. Each component is documented with its variants (primary/secondary/disabled), states (hover/active/error), and usage guidelines (when to use this vs. that).` },
      { type: "paragraph", text: `**Pattern library.** Reusable solutions to common UX problems: empty states, error handling, loading patterns, onboarding flows. These are higher-level than components — they're the design decisions about how the product behaves in recurring situations.` },
      { type: "paragraph", text: `**Documentation and guidelines.** The "why" behind the "what." Why does the primary button use this specific style? When should you use a modal versus a slide-over panel? Without documentation, a design system is just a collection of assets. With it, it's a tool any designer or developer can use independently.` },
      { type: "heading", text: `Why Design Systems Save More Than They Cost` },
      { type: "paragraph", text: `The argument against building a design system is always time: "we don't have time to build one, we need to ship features." This is exactly backwards.` },
      { type: "paragraph", text: `Without a design system, every feature takes longer because designers are making the same decisions repeatedly. Every handoff creates friction because developers are rebuilding components from scratch. Every inconsistency requires a design review to catch. Every rebrand requires hunting down every instance of the old color manually.` },
      { type: "paragraph", text: `Research from Figma's industry surveys consistently shows that teams with mature design systems ship faster than those without. The upfront investment in consistency pays dividends across every future feature.` },
      { type: "heading", text: `When You Actually Need One` },
      { type: "paragraph", text: `Not every project needs a full design system. For a one-page marketing site or a short-term campaign, a lightweight style guide is enough. A design system becomes genuinely valuable when:` },
      { type: "list", items: [
        `More than one designer is working on the product`,
        `Designers and developers are working from the same source of truth`,
        `The product will grow significantly over time`,
        `Consistency between multiple surfaces (web, mobile, email) matters`,
        `The product needs to be maintained and updated over months or years`,
      ] },
      { type: "paragraph", text: `If any of these apply to your project, the cost of not having a design system grows every day.` },
      { type: "heading", text: `Where to Start` },
      { type: "paragraph", text: `The most common mistake is trying to build a complete design system upfront. Start smaller:` },
      { type: "paragraph", text: `**Audit first.** Before creating anything, document what already exists. What components are being used? Where are the inconsistencies? What are the most repeated patterns?` },
      { type: "paragraph", text: `**Start with foundations.** Agree on a color palette and a type scale. These two decisions alone eliminate an enormous amount of inconsistency.` },
      { type: "paragraph", text: `**Extract, don't invent.** Build your components from the product as it exists, not from scratch. Your button component should reflect the actual buttons in your product — refined, not reimagined.` },
      { type: "paragraph", text: `**Document as you go.** A component without documentation is a trap. Every component needs at minimum: a name, its variants, its states, and a note on when to use it.` },
      { type: "paragraph", text: `A design system is never finished. It grows with the product. But starting one — even a lightweight one — is one of the highest-leverage design investments a product team can make.` },
      { type: "paragraph", text: `Want help building or auditing a design system for your product? [Let's talk](mailto:sijercicamar@gmail.com).` },
    ],
  },
  {
    slug: "the-ux-audit-framework",
    title: "The UX Audit: A Framework for Finding What's Broken Before Your Users Do",
    description:
      `A UX audit is the fastest way to find conversion leaks, friction points, and missed opportunities — without guessing. Here's how to run one systematically.`,
    date: "2026-06-25",
    coverImage: "/blog/the-ux-audit-framework.webp",
    tags: ["UX", "Audits"],
    draft: true,
    body: [
      { type: "paragraph", text: `Most UX problems don't announce themselves. They show up as bounce rates, abandoned carts, and support tickets — symptoms rather than diagnoses. A UX audit is the process of finding the problems before your users vote with their feet.` },
      { type: "paragraph", text: `This isn't about redesigning from scratch. A proper audit tells you specifically what's broken, where it's broken, and why — so you fix the right things in the right order.` },
      { type: "heading", text: `What a UX Audit Is (and Isn't)` },
      { type: "paragraph", text: `A UX audit is a structured evaluation of your product's usability, clarity, and conversion performance against a defined set of criteria. It's different from a redesign brief (which describes what to build) and different from user research (which tells you what users say). An audit tells you what's actually happening.` },
      { type: "paragraph", text: `The three most useful types of evidence in an audit:` },
      { type: "paragraph", text: `**Behavioural data.** Heatmaps, session recordings, scroll depth, click maps. This shows you what users actually do — where they click, where they stop scrolling, what they ignore. Tools: Hotjar, Microsoft Clarity, FullStory.` },
      { type: "paragraph", text: `**Analytical data.** Conversion funnels, drop-off points, exit pages, form abandonment rates. This tells you where in the journey users are leaving. Tools: GA4, Mixpanel.` },
      { type: "paragraph", text: `**Expert evaluation.** Heuristic review against established UX principles — Nielsen's 10 Usability Heuristics are still the standard. This catches systematic issues that data can't surface directly: inconsistent interaction patterns, unclear error messages, missing feedback states.` },
      { type: "heading", text: `The Audit Framework` },
      { type: "heading", text: `Step 1: Define the Core User Journeys`, level: 3 },
      { type: "paragraph", text: `Before evaluating anything, map the two or three most important user journeys. For an e-commerce site: land → browse → add to cart → checkout. For a SaaS: land → understand → sign up → activate.` },
      { type: "paragraph", text: `Every audit finding should be evaluated in terms of how it affects these journeys. A beautiful design element that exists outside the core journey is low priority. A confusing element directly on the path to conversion is high priority.` },
      { type: "heading", text: `Step 2: Run the Heuristic Review`, level: 3 },
      { type: "paragraph", text: `Walk through each step of the core user journey and evaluate it against these core principles:` },
      { type: "list", items: [
        `**Visibility of system status:** Does the user always know what's happening? (Loading states, form submission feedback, progress indicators)`,
        `**Match between system and real world:** Does the language match how users think, not how the business thinks?`,
        `**Error prevention:** Are errors prevented before they happen, or just handled after?`,
        `**Recognition over recall:** Can users navigate by recognizing options, or are they expected to remember things?`,
        `**Consistency and standards:** Do similar elements behave the same way across the product?`,
      ] },
      { type: "heading", text: `Step 3: Analyse the Behavioural Data`, level: 3 },
      { type: "paragraph", text: `Look for these specific patterns:` },
      { type: "paragraph", text: `**Rage clicks** (repeated frustrated clicking on an element): usually indicates something that looks clickable but isn't, or a button that isn't responding as expected.` },
      { type: "paragraph", text: `**Early scroll drop-off** (users leaving the page in the first 25%): typically a headline or value proposition problem. Users didn't understand what the page was offering.` },
      { type: "paragraph", text: `**Form field abandonment**: specific fields where users stop filling in the form. Often indicates unclear labels, unexpected required fields, or trust concerns.` },
      { type: "paragraph", text: `**Dead zones**: areas of the page that receive almost no clicks. These are elements that look important but users are ignoring — a sign of unclear visual hierarchy.` },
      { type: "heading", text: `Step 4: Prioritize Findings`, level: 3 },
      { type: "paragraph", text: `Not all findings are equal. Prioritize by:` },
      { type: "list", items: [
        `**Impact on core user journey** — does it block or slow down conversion?`,
        `**Frequency** — how many users are affected?`,
        `**Ease of fix** — how much effort is required?`,
      ] },
      { type: "paragraph", text: `A finding that affects 80% of users, blocks the checkout flow, and takes two hours to fix is always priority one. A visual inconsistency in an edge case screen is a low-priority polish item.` },
      { type: "heading", text: `What a Good Audit Produces` },
      { type: "paragraph", text: `A well-run UX audit produces a prioritized action list, not a list of complaints. Each finding should include: the problem, the evidence supporting it, the user impact, and a recommended fix.` },
      { type: "paragraph", text: `This is the document that makes design decisions defensible. "We changed the checkout flow because our audit showed a 67% form abandonment rate at the address step" is a better brief than "we thought the checkout felt clunky."` },
      { type: "paragraph", text: `Data-backed design decisions move faster, get approved more easily, and produce better outcomes. The audit is how you get there.` },
      { type: "paragraph", text: `Want a professional UX audit on your product? [Let's talk](mailto:sijercicamar@gmail.com).` },
    ],
  },
  {
    slug: "mobile-first-design",
    title: `Mobile-First Design: Why "We'll Fix It for Mobile Later" Is Costing You Conversions`,
    description:
      `More than 60% of web traffic is mobile. If you're designing desktop-first, you're building for the minority and patching for the majority. Here's how to think about it differently.`,
    date: "2026-06-23",
    coverImage: "/blog/mobile-first-design.webp",
    tags: ["Mobile", "UX"],
    draft: true,
    body: [
      { type: "paragraph", text: `Mobile-first design is one of those terms that gets used so often it's started to lose its meaning. Teams say they're doing mobile-first when they mean they're testing their desktop design on a mobile screen at the end of the project. That's not mobile-first. That's mobile-last with good intentions.` },
      { type: "paragraph", text: `The distinction matters because the approach you start with determines almost everything about the outcome.` },
      { type: "heading", text: `The Numbers Are Not Ambiguous` },
      { type: "paragraph", text: `More than 60% of global web traffic comes from mobile devices. For many e-commerce verticals, it's closer to 75–80%. If your design process starts with a 1440px desktop canvas, you are building for a minority use case and then trying to make it work for the majority as an afterthought.` },
      { type: "paragraph", text: `The results are predictable: navigation that collapses awkwardly, hero sections with text too small to read, forms that are painful to fill on a touchscreen, and CTAs that are technically clickable but practically inaccessible. Users on mobile don't tolerate this. They leave.` },
      { type: "heading", text: `What Mobile-First Actually Means` },
      { type: "paragraph", text: `Mobile-first is a design philosophy, not a checklist. It means starting design decisions with mobile constraints — small screen, touch interaction, slower connection, interrupted context — and then scaling up to larger screens, rather than the reverse.` },
      { type: "paragraph", text: `The constraints of mobile are actually clarifying. A 390px-wide screen has no room for anything that doesn't need to be there. Every element has to justify its presence. This forces a kind of editorial clarity that almost always improves the desktop version too.` },
      { type: "paragraph", text: `When you design mobile-first, you're forced to answer: what is the single most important thing on this screen? What's the primary action the user is here to take? What can be cut without losing anything essential?` },
      { type: "paragraph", text: `These are good questions to ask regardless of screen size. But mobile forces you to answer them.` },
      { type: "heading", text: `The Thumb Zone` },
      { type: "paragraph", text: `Mobile UX has a geography that desktop design completely ignores: the thumb zone.` },
      { type: "paragraph", text: `When someone uses a phone one-handed (which is most of the time), the thumb covers a specific area of the screen comfortably. The bottom two-thirds of the screen is easy to reach. The top third is a stretch. The top corners are almost unreachable.` },
      { type: "paragraph", text: `This has direct implications for where CTAs should live. A primary CTA anchored to the bottom of the screen is dramatically more accessible than one placed at the top. Navigation that lives at the top — while standard on desktop — creates friction on mobile. This is why most native apps have moved their primary navigation to a bottom tab bar.` },
      { type: "paragraph", text: `Web design hasn't fully caught up with this insight. Most websites still place their primary navigation at the top and their CTAs wherever they look good on desktop.` },
      { type: "heading", text: `Mobile-Specific Patterns Worth Implementing` },
      { type: "paragraph", text: `**Sticky CTAs.** A button that stays fixed at the bottom of the viewport as the user scrolls. This keeps the primary action accessible at every point in the scroll journey, not just when the CTA happens to be in view.` },
      { type: "paragraph", text: `**Simplified forms.** Every field that appears on mobile should be genuinely necessary. Use smart defaults, autofill, and input type attributes (numeric keyboard for phone numbers, email keyboard for email addresses) to reduce friction.` },
      { type: "paragraph", text: `**Tap targets.** Buttons and links need to be at least 44x44px to be reliably tappable. Elements smaller than this create a frustrating experience where users are never sure if their tap registered.` },
      { type: "paragraph", text: `**Reduced navigation.** A desktop navigation with eight items should become three or four items on mobile, plus a hamburger menu for secondary options. Not eight items crammed into a horizontal scroll.` },
      { type: "heading", text: `Testing Mobile Honestly` },
      { type: "paragraph", text: `The fastest way to improve your mobile experience: use your own site on your phone. Not in the browser's responsive mode. On your actual phone, with your actual thumb, scrolling through it as a real user would.` },
      { type: "paragraph", text: `Do this regularly. It's the most efficient UX research available to you, and most teams never do it.` },
      { type: "paragraph", text: `Mobile-first is not a trend. It's a response to where users actually are. Design for the screen they're holding, and the screen on their desk will be fine. The reverse is not true.` },
      { type: "paragraph", text: `Struggling with a mobile experience that doesn't convert? [Let's look at it together](mailto:sijercicamar@gmail.com).` },
    ],
  },
  {
    slug: "anatomy-of-a-high-converting-hero",
    title: "The Anatomy of a High-Converting Hero Section",
    description:
      `Your hero section has 3 seconds to answer four questions. Here's exactly what it needs — and what it definitely doesn't.`,
    date: "2026-06-19",
    coverImage: "/blog/anatomy-of-a-high-converting-hero.webp",
    tags: ["Conversion", "Web Design"],
    draft: true,
    body: [
      { type: "paragraph", text: `The hero section is the most valuable real estate on your website. It's what every visitor sees first, and it's where most of them decide whether to keep reading or leave. A well-designed hero doesn't just look good — it does a specific job.` },
      { type: "paragraph", text: `That job is to answer four questions in under three seconds: What is this? Who is it for? Why should I care? What do I do next?` },
      { type: "paragraph", text: `Most hero sections fail to answer all four. Here's how to build one that doesn't.` },
      { type: "heading", text: `The Elements of a High-Converting Hero` },
      { type: "heading", text: `The Headline`, level: 3 },
      { type: "paragraph", text: `Your headline is the most important piece of copy on the page. It should do one thing: state your value proposition clearly.` },
      { type: "paragraph", text: `The best formula is simple: **[What you do] + [Who it's for] + [Key outcome or differentiator].**` },
      { type: "paragraph", text: `"Conversion-focused UX design for e-commerce brands that want to grow revenue" is better than "Designing better digital experiences." The first tells you exactly what it is, who it's for, and what you get. The second could describe anything.` },
      { type: "paragraph", text: `Avoid clever wordplay in the headline. Save that for the subheadline. The main headline needs to be immediately understood.` },
      { type: "heading", text: `The Subheadline`, level: 3 },
      { type: "paragraph", text: `If the headline makes a claim, the subheadline expands it. One or two sentences max. This is where you can add nuance, explain your approach, or address the primary hesitation your visitor is likely to have.` },
      { type: "heading", text: `The Primary CTA`, level: 3 },
      { type: "paragraph", text: `One button. One action. The label should describe the outcome, not the action: "Start Growing Revenue" is more motivating than "Sign Up." "See How It Works" is better than "Learn More."` },
      { type: "paragraph", text: `The button needs to be visually dominant — not just a different color, but larger, with enough surrounding white space that it stands out. And it should be in the hero, not below it.` },
      { type: "heading", text: `The Visual`, level: 3 },
      { type: "paragraph", text: `The hero image or illustration should reinforce the message, not just look attractive. Concrete beats abstract: a screenshot of your actual product converts better than a generic illustration. A photo of real people using your product beats stock photography. If you're a service business, a professional photo of you or your work creates more trust than any stock image.` },
      { type: "heading", text: `Social Proof`, level: 3 },
      { type: "paragraph", text: `This is the most underused element in hero sections. A single line — "Trusted by 200+ Shopify brands" or a strip of three recognizable client logos — in or immediately below the hero significantly increases conversion rate. It answers the "do I trust this?" question before the user has to go looking for evidence.` },
      { type: "heading", text: `What the Hero Section Doesn't Need` },
      { type: "paragraph", text: `**Multiple CTAs.** "Get Started" and "Learn More" and "Watch Demo" in the same hero dilutes attention and creates decision paralysis.` },
      { type: "paragraph", text: `**Long paragraphs.** The hero is not the place to explain your entire business model. That's what the sections below are for.` },
      { type: "paragraph", text: `**Animated backgrounds.** Video backgrounds and animated gradients look impressive in portfolio pieces but increase page load time, distract from the headline, and reduce readability. The conversion data almost universally favors static over animated.` },
      { type: "paragraph", text: `**Generic stock photography.** A business meeting with people pointing at a whiteboard. A diverse team laughing at a laptop. These images don't communicate anything specific about your business, and users have become extremely good at identifying and tuning them out.` },
      { type: "heading", text: `A Simple Hero Audit` },
      { type: "paragraph", text: `Before redesigning, audit what you have:` },
      { type: "list", items: [
        `Cover the logo. Can someone identify what the product or service is from the headline alone?`,
        `Is the primary CTA above the fold on both desktop and mobile?`,
        `Is there any social proof visible in the hero area?`,
        `Is the hero visual specific to your product, or could it be on any website?`,
      ] },
      { type: "paragraph", text: `If any answer is "no," you've found your fix. In most cases, improving one of these elements moves conversion more than a complete redesign.` },
      { type: "paragraph", text: `The hero section earns its place as the most scrutinized part of any website because it's where every visitor starts. Design it to answer questions, not impress an awards jury.` },
      { type: "paragraph", text: `Redesigning your hero and want an expert perspective? [Reach out](mailto:sijercicamar@gmail.com).` },
    ],
  },
  {
    slug: "white-space-like-a-senior-designer",
    title: "How to Use White Space Like a Senior Designer",
    description:
      `White space isn't empty space — it's one of the most powerful tools in a designer's toolkit. Here's how to use it intentionally to improve clarity, trust, and conversion.`,
    date: "2026-06-17",
    coverImage: "/blog/white-space-like-a-senior-designer.webp",
    tags: ["Design", "Layout"],
    draft: true,
    body: [
      { type: "paragraph", text: `Ask a junior designer what white space is, and they'll say "the empty parts." Ask a senior designer, and they'll say "everything that isn't competing for attention."` },
      { type: "paragraph", text: `That shift in framing changes everything about how you design.` },
      { type: "paragraph", text: `White space — also called negative space — is not the absence of design. It is design. It's the deliberate choice to give elements room to breathe, to create separation between ideas, and to control where the eye goes. Used well, it makes everything else on the page work harder.` },
      { type: "heading", text: `Why White Space Improves Comprehension` },
      { type: "paragraph", text: `There's solid research behind this. A study by Wichita State University found that good use of white space between paragraphs and in the left and right margins increases comprehension by almost 20%. The brain processes content faster when it's not competing with surrounding elements.` },
      { type: "paragraph", text: `This is why the clearest, most readable content on the web — think Medium articles, Apple product pages, or well-designed SaaS marketing sites — uses generous spacing. Not because it looks minimalist (though it does), but because it reduces cognitive load.` },
      { type: "paragraph", text: `Dense design feels hard to process. Spacious design feels easy. And "easy" converts.` },
      { type: "heading", text: `Three Types of White Space (and How to Use Each)` },
      { type: "paragraph", text: `**Macro white space** is the large-scale breathing room: the margins around your content, the padding between sections, the space between your navigation and your hero. This is what creates the overall feeling of a page — cramped or comfortable, overwhelming or calm.` },
      { type: "paragraph", text: `If your sections feel like they're bleeding into each other, macro white space is the fix. Increase your section padding significantly — most designers underestimate how much space sections need to feel distinct.` },
      { type: "paragraph", text: `**Micro white space** is the small-scale spacing: line height, letter spacing, padding inside buttons, space between list items. This is where reading comfort lives. A body text line height of 1.4 feels cramped. A line height of 1.7 feels comfortable. That 0.3 difference is invisible but felt by every single reader.` },
      { type: "paragraph", text: `**Active white space** is white space used intentionally to create visual tension or emphasis — an isolated element surrounded by space that forces the eye to focus on it. Apple has built an entire visual language around this. A product on a white background with nothing around it is more visually arresting than the same product surrounded by other elements.` },
      { type: "heading", text: `Common White Space Mistakes` },
      { type: "paragraph", text: `**Filling space out of fear.** The most common mistake is treating white space as a problem to solve rather than a tool to use. Every time you feel the urge to add something "because there's too much empty space," stop. Ask what job that new element is doing. If the answer is "filling space," don't add it.` },
      { type: "paragraph", text: `**Inconsistent spacing systems.** Random spacing — some elements 16px apart, others 24px, others 32px — creates visual noise even if individual spacing choices look fine in isolation. Senior designers use a spacing scale (8px, 16px, 24px, 32px, 48px, 64px) and stick to it. The consistency creates rhythm.` },
      { type: "paragraph", text: `**Ignoring mobile.** Generous desktop spacing often collapses poorly on mobile. What breathes on a 1440px screen can feel cramped on a 390px screen. Design spacing for mobile explicitly, not as an afterthought.` },
      { type: "heading", text: `The Practical Test` },
      { type: "paragraph", text: `Take any page you're working on and increase every margin and padding value by 50%. Then look at it again.` },
      { type: "paragraph", text: `Most of the time, it looks better. Sometimes it looks *significantly* better. The instinct to fill space is usually wrong. The instinct to create room is almost always right.` },
      { type: "paragraph", text: `White space is not about minimalism as an aesthetic choice. It's about respect for your user's attention. Give elements room, and they'll communicate more clearly. Pack them together, and they fight each other — and the user gives up.` },
      { type: "paragraph", text: `Need a second opinion on a design that feels cluttered? [Send it over](mailto:sijercicamar@gmail.com).` },
    ],
  },
  {
    slug: "what-users-decide-in-5-seconds",
    title: "The 5-Second Rule: What Users Decide the Moment They Land on Your Site",
    description:
      `Users form a first impression of your website in under 5 seconds. Here's what that judgment is actually based on — and how to design for it.`,
    date: "2026-06-12",
    coverImage: "/blog/what-users-decide-in-5-seconds.webp",
    tags: ["UX", "First Impressions"],
    draft: false,
    body: [
      { type: "paragraph", text: `There's a test UX designers use called the five-second test. You show someone a page for exactly five seconds, take it away, and ask: what do you remember? What was the page about? What could you do on it?` },
      { type: "paragraph", text: `The results are consistently humbling. Users remember the headline (sometimes), the hero image (usually), and the general feeling of the page. They rarely remember the subheadline. They almost never remember the feature list. And if the page felt cluttered or unclear — that's the only thing they remember.` },
      { type: "paragraph", text: `Five seconds is not a test limitation. It's reality.` },
      { type: "heading", text: `What Actually Happens in 5 Seconds` },
      { type: "paragraph", text: `When a user lands on a page, their brain is not reading. It's scanning and feeling. Two parallel processes happen simultaneously:` },
      { type: "paragraph", text: `**Cognitive:** The brain scans for structure — headline, image, CTA. It's looking for a quick answer to "what is this?" If the visual hierarchy is clear, this happens fast. If the page is cluttered or the hierarchy is weak, the brain stalls.` },
      { type: "paragraph", text: `**Emotional:** At the same time, the brain is forming an aesthetic and trust judgment. This happens in as little as 50 milliseconds according to research from Carleton University. Professional-looking, visually clean designs get a trust signal. Cluttered, outdated, or inconsistent designs get a negative signal — and that impression is extremely difficult to reverse.` },
      { type: "paragraph", text: `These two processes don't happen sequentially. They happen together, and they influence each other. A strong visual hierarchy makes the page feel more trustworthy. A trustworthy design makes the content easier to process.` },
      { type: "heading", text: `The Four Things Users Judge Immediately` },
      { type: "paragraph", text: `**Visual clarity.** Is there one dominant element that draws the eye? Or are there five things competing for attention? The eye needs a starting point. If everything is equally prominent, nothing is.` },
      { type: "paragraph", text: `**Professional quality.** This is not about being expensive-looking. It's about consistency. Mismatched fonts, inconsistent spacing, low-quality images, or off-brand colors all trigger a subconscious "something is off here" reaction that erodes trust before a word is read.` },
      { type: "paragraph", text: `**Relevance.** Does the hero image or headline immediately signal that this page is for *them*? Stock photos of generic business people in meetings are universally neutral — which means they're useless. Specific imagery that shows your actual product, your actual users, or your actual context converts better because it triggers immediate relevance.` },
      { type: "paragraph", text: `**Load speed.** This is invisible but not irrelevant. A page that loads slowly creates a negative experience before any design element has even appeared. Google's data is consistent here: conversion rate drops significantly as page load time increases. Speed is a design decision.` },
      { type: "heading", text: `Designing for the First 5 Seconds` },
      { type: "paragraph", text: `The practical implication of all this is that your above-the-fold section is doing most of the work. Here's how to audit it:` },
      { type: "paragraph", text: `**One headline, one idea.** Your headline should make a single clear claim. Not three benefits. Not a clever play on words that requires two reads. One thing, stated directly.` },
      { type: "paragraph", text: `**Hierarchy that guides the eye.** Headline → supporting visual or subheadline → CTA. In that order, with clear size and weight differences that make the sequence obvious. If a user doesn't know where to look after the headline, you've lost them.` },
      { type: "paragraph", text: `**Social proof near the top.** A single strong testimonial, a recognizable client logo strip, or a "trusted by X companies" badge near the hero significantly increases the trust signal in that first impression window. Not buried — near the top.` },
      { type: "paragraph", text: `**No carousels.** Rotating hero banners are the design equivalent of saying six things at once. They dilute attention and reduce the clarity of that first impression. A single, intentional hero message always outperforms a carousel.` },
      { type: "heading", text: `Test Your Own First Impression` },
      { type: "paragraph", text: `The simplest way to test your page: close your eyes, open it, and start a five-second timer. When the timer goes off, close it. What did you see? What do you remember? What was the page about?` },
      { type: "paragraph", text: `If you can't answer clearly — your users can't either.` },
      { type: "paragraph", text: `First impressions don't get second chances. Design the first five seconds deliberately, and everything that follows becomes easier.` },
      { type: "paragraph", text: `Want to know what users actually see when they land on your site? [Get in touch](mailto:sijercicamar@gmail.com) — a UX audit starts exactly here.` },
    ],
  },
  {
    slug: "why-your-landing-page-isnt-converting",
    title: "Why Your Landing Page Isn't Converting (And It's Not What You Think)",
    description:
      `Most landing page problems aren't about design. They're about clarity. Here's a framework for diagnosing why users leave — and what to fix first.`,
    date: "2026-06-10",
    coverImage: "/blog/why-your-landing-page-isnt-converting.webp",
    tags: ["UX", "Conversion", "Landing Pages"],
    draft: false,
    body: [
      { type: "paragraph", text: `You've invested in the design. The copy is polished. The CTA button is above the fold, bright, and impossible to miss. And yet — the conversion rate is sitting at 1.2% and nobody knows why.` },
      { type: "paragraph", text: `Most teams blame the wrong things. They A/B test button colors, tweak headlines, and rearrange sections — optimizing the surface while the real problem sits untouched underneath. This post is about how to actually diagnose a landing page that isn't converting.` },
      { type: "heading", text: `The Real Reason Most Landing Pages Fail` },
      { type: "paragraph", text: `It's not aesthetics. It's not even copy, most of the time. It's *clarity*.` },
      { type: "paragraph", text: `When a user lands on your page, they're running a subconscious checklist in roughly three seconds: *What is this? Is it for me? Do I trust it? What do I do next?* If any of those questions go unanswered — or worse, trigger uncertainty — they leave. Not because the design is ugly. Because they're confused.` },
      { type: "paragraph", text: `Confusion is the conversion killer nobody talks about.` },
      { type: "heading", text: `The Four-Question Framework` },
      { type: "paragraph", text: `Before you touch the design, run your landing page through these four questions as if you're a first-time visitor who's never heard of your product.` },
      { type: "heading", text: `1. What is this, in one sentence?`, level: 3 },
      { type: "paragraph", text: `Your headline should answer this completely. Not cleverly, not cryptically — completely. "AI-powered email marketing for e-commerce brands" is better than "Unlock your growth potential." The second headline says nothing. The first tells you exactly what you're looking at and whether it's relevant to you.` },
      { type: "paragraph", text: `Test this by covering your logo and asking someone who has never seen your site to read the headline and describe the product. If they can't, the headline is failing.` },
      { type: "heading", text: `2. Is it for me?`, level: 3 },
      { type: "paragraph", text: `The fastest way to lose a qualified visitor is to write for everyone. "For teams of all sizes" is meaningless. "For Shopify stores doing $500K–$5M in revenue" immediately qualifies and attracts the right person. Specificity is not exclusion — it's trust-building. When a visitor sees themselves in your copy, they keep reading.` },
      { type: "heading", text: `3. Do I trust this?`, level: 3 },
      { type: "paragraph", text: `Trust signals are not just testimonials. They include: how professional the design looks, whether the copy sounds like a real person wrote it, load speed, mobile responsiveness, and whether social proof appears near the point of decision — not buried at the bottom. A glowing testimonial below the fold helps no one who left on the first scroll.` },
      { type: "heading", text: `4. What do I do next?`, level: 3 },
      { type: "paragraph", text: `One page, one primary action. If you have two CTAs competing for attention — "Start Free Trial" and "Book a Demo" — you've introduced a micro-decision that some percentage of users will resolve by doing neither. Pick the primary conversion action and make everything else secondary.` },
      { type: "heading", text: `What to Audit First` },
      { type: "paragraph", text: `If you're going into a landing page audit, start with these three areas before anything else:` },
      { type: "paragraph", text: `**Above the fold.** Everything visible before the user scrolls must answer question one and two. If your hero section requires explanation, it's already failing.` },
      { type: "paragraph", text: `**The friction points.** Where do users drop off? Use a heatmap tool — Hotjar, Microsoft Clarity (free), or similar — and look at scroll depth and click maps. The drop-off point tells you where the confusion lives.` },
      { type: "paragraph", text: `**The form.** Every additional field in a form reduces completion rate. Ask only for what you genuinely need at this stage of the funnel. You can collect more information later.` },
      { type: "heading", text: `The Redesign Trap` },
      { type: "paragraph", text: `The instinct when a landing page underperforms is to redesign it. Resist this. A redesign is expensive, time-consuming, and often solves the wrong problem. Instead, run structured experiments: change one variable at a time, measure the impact, and iterate. A single headline change can move conversion rate more than a complete visual overhaul.` },
      { type: "paragraph", text: `Design is a lever — but only when pulled in the right direction. Clarity first, aesthetics second.` },
      { type: "paragraph", text: `If you're working on a landing page and want a second set of eyes on what's actually causing the drop-off, [reach out](mailto:sijercicamar@gmail.com) — this is exactly the kind of problem I work on.` },
    ],
  },
]

// Only posts that are actually published (not drafts). Everything the public
// site renders should go through this.
export function getVisiblePosts(): Post[] {
  return posts.filter((p) => !p.draft)
}

export function getPostBySlug(slug: string): Post | undefined {
  return getVisiblePosts().find((p) => p.slug === slug)
}

export function getAdjacentPosts(slug: string): {
  prev: Post | null
  next: Post | null
} {
  const visible = getVisiblePosts()
  const index = visible.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? visible[index - 1] : null,
    next: index >= 0 && index < visible.length - 1 ? visible[index + 1] : null,
  }
}

// "9 June 2026"
export function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

// Rough reading time from the post body.
export function readingTime(body: ContentBlock[]): string {
  const words = body
    .map((b) => {
      if (b.type === "paragraph" || b.type === "heading") return b.text
      if (b.type === "quote") return b.text
      if (b.type === "list") return b.items.join(" ")
      return ""
    })
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}
