export type Project = {
  slug: string
  title: string
  tagline: string
  category: "UX/UI Design" | "Webflow" | "WordPress & Web Design"
  year: string
  liveUrl: string
  logoUrl?: string
  coverImage?: string
  tags: string[]
  role: string
  overview: string
  challenge: string
  solution: string
  outcome: string
  highlights: string[]
  process?: { step: string; detail: string }[]
  metrics?: { label: string; value: string }[]
}

export const projects: Project[] = [
  // ── UX/UI Design ──────────────────────────────────────────────────────────

  {
    slug: "berva-sorozo",
    title: "Berva Söröző",
    tagline: "A premium spirits bar's digital identity — dark, atmospheric, and searchable",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "",
    coverImage: "/projects/berva-sorozo.webp",
    tags: ["Web Design", "Figma", "F&B", "Product Catalog", "Hungary"],
    role: "UX/UI Designer",
    overview:
      "Berva Söröző is a premium craft beer and spirits bar in Hungary — east of the Danube's most celebrated spirits destination, with over 100 varieties on offer including 6 rotating draught taps. The challenge was building a digital presence that matched the atmosphere and sophistication of the physical space, while making their extensive drinks catalog genuinely navigable.",
    challenge:
      "A bar's identity lives in its atmosphere, and atmosphere doesn't translate easily to screens. Berva's real competitive advantage — a curated selection of Hungarian craft spirits unmatched in the region — was invisible unless you already knew to look for it. The website needed to communicate prestige immediately, while also functioning as a practical discovery tool for guests researching their visit or planning an order.",
    solution:
      "I designed a dark, editorial website built around restraint and confidence — letting dramatic imagery and typography do the emotional work. The homepage establishes the brand's identity in a single full-bleed moment: the Berva name, their positioning statement, and the iconic carved figure that anchors the visual identity. The spirits catalog is the functional heart of the site, featuring a real-time search interface so guests can filter by spirit type, region, or name before they arrive. The navigation is deliberately minimal — Főoldal (Home) and Párlatok (Spirits) — because the product is the experience.",
    outcome:
      "A digital presence that reflects Berva's standing as one of Hungary's premier spirits destinations — premium in visual language, practical in catalog utility, and distinctive in every detail.",
    highlights: [
      "Dark, editorial design language built around atmosphere rather than conventional F&B clichés",
      "Searchable spirits catalog with real-time filtering across 100+ menu items",
      "Typography-led layout anchored by strong brand imagery",
      "Minimal navigation structure that keeps focus on the product catalog",
    ],
  },

  {
    slug: "matekvar",
    title: "MatekVÁR",
    tagline: "Making math feel like play for Hungarian children — web and mobile",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "",
    coverImage: "/projects/matekvar.webp",
    tags: ["EdTech", "Mobile App", "SaaS", "Product Design", "Gamification", "Figma", "Hungary"],
    role: "Lead UX/UI Designer",
    overview:
      "MatekVÁR is a Hungarian educational platform that helps children master mathematics through scientifically-grounded, game-inspired practice — faster sessions, more engagement, better retention. The platform runs on both web and mobile, serving parents, students, and teachers with a single unified product experience. By launch it had already accumulated 528 active users, 52,620+ solved tasks, and strong daily engagement across practice and exam modes.",
    challenge:
      "Educational apps for children face a specific UX dilemma: the product has to satisfy two audiences with completely different expectations at the same time. Children need the interface to feel fun, rewarding, and immediately understandable — any friction kills the habit. Parents evaluating the product need to see credibility, safety, and educational rigor — any frivolity erodes trust. Designing an experience that genuinely serves both without compromising either required careful thinking about hierarchy, visual language, and how information was presented on every screen.",
    solution:
      "I designed the full product across web and mobile, centering the visual language around a bright, energetic palette — blues, oranges, and teals — with clear typographic hierarchy and generous spacing that works for younger users. The core learning flows (practice, multiplication table, exams) are each structured as self-contained sessions with clear start and end states, immediate feedback on answers, and progress indicators that make every session feel like a small win. The homepage communicates both the playful experience (for children) and the proven engagement stats (for parents) in a single layout. Mobile screens were designed for one-thumb use with large touch targets and minimal cognitive load per step.",
    outcome:
      "A polished, dual-audience edtech product that earns trust from parents and daily engagement from children — with measurable impact visible in the platform's own usage metrics from launch.",
    highlights: [
      "Dual-audience design: engaging for children, credible for parents",
      "Web + mobile product designed in a single consistent Figma system",
      "Gamified practice flows with immediate feedback and session progress",
      "Multiplication table module with structured difficulty levels",
      "Social proof built into the homepage: active users, solved tasks, daily sessions",
    ],
    process: [
      { step: "Audience Mapping", detail: "Mapped two separate user journeys — the child using the product, and the parent evaluating and purchasing it. Designed each screen to serve both simultaneously without conflict." },
      { step: "Core Flow Design", detail: "Designed the practice, exam, and multiplication table flows as distinct session types, each with clear entry, mid-session feedback, and completion states." },
      { step: "Mobile Adaptation", detail: "Translated all web flows to mobile with enlarged touch targets, simplified layouts, and one-action-per-screen discipline suited to younger users." },
      { step: "Dashboard & Stats", detail: "Designed the parent-facing statistics view to surface meaningful engagement data — daily active sessions, task completion, and progress over time." },
    ],
    metrics: [
      { label: "Active users", value: "528" },
      { label: "Tasks solved", value: "52,620+" },
      { label: "Practice sessions/day", value: "1,230+" },
      { label: "Exam sessions/day", value: "1,160+" },
    ],
  },

  {
    slug: "standup-republic",
    title: "Standup Republic",
    tagline: "End-to-end platform for Germany's stand-up comedy scene",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "https://app.standup-republic.com",
    logoUrl: "https://logo.clearbit.com/standup-republic.com",
    coverImage: "/projects/standup-republic.webp",
    tags: ["Product Design", "Mobile App", "SaaS", "Figma"],
    role: "Lead UX/UI Designer",
    overview:
      "Standup Republic is a full-stack digital platform that transformed how stand-up comedy events are organized in Germany — connecting promoters, comedians, and audiences in a single, unified ecosystem. Previously, the scene ran on spreadsheets, cash payouts, and manual check-ins. This platform replaced all of that.",
    challenge:
      "Three very different user types — comedians, event promoters, and ticket buyers — needed to share one product without any friction between them. Each had distinct goals and workflows. The challenge was designing an experience that felt tailor-made for each, while keeping the underlying system coherent and maintainable.",
    solution:
      "I mapped out three distinct user journeys in Figma and designed dedicated interfaces for each role: Comedians get an application flow, ranking system, and automated payout dashboard. Promoters get an event publishing suite with real-time sales analytics and Eventim integration. Ticket buyers get a clean, mobile-first purchase and entry flow with QR validation. A comprehensive admin layer ties it all together. After launching the web MVP, I designed the native iOS and Android apps built via Capacitor.",
    outcome:
      "The MVP launched in four weeks. The platform has been in active development for 18+ months and is now the digital backbone of Germany's independent comedy circuit — with measurable reductions in administrative overhead for both promoters and comedians.",
    highlights: [
      "Designed for three distinct user roles from a single Figma system",
      "Full ticketing flow with digital wallet and QR-based entry",
      "Automated VAT handling and transparent comedian payouts",
      "iOS & Android apps shipped within 3 weeks of MVP launch",
    ],
  },

  {
    slug: "persuava",
    title: "Persuava",
    tagline: "Redesigning an AI content platform that went on to raise VC",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "https://persuva.ai",
    logoUrl: "https://logo.clearbit.com/persuva.ai",
    coverImage: "/projects/persuava.webp",
    tags: ["SaaS", "AI", "E-commerce", "CRO", "Email Design", "Landing Pages", "Figma", "Webflow"],
    role: "Lead UX/UI Designer",
    overview:
      "Persuava (formerly Copywise) is an AI-powered content generation platform purpose-built for e-commerce marketers — helping them produce high-converting product pages, email campaigns, ad copy, landing pages, and advertorials at scale. With 700+ early adopters on a no-code foundation, the product had strong traction but a UX that was actively working against it. I led the full redesign: simplifying the core workflow, expanding the feature set to cover the entire e-commerce content lifecycle, and preparing the product for a VC fundraise.",
    challenge:
      "The onboarding funnel was bleeding users: it took 36 separate steps to generate a single piece of content, and most new sign-ups never made it to their first output. The existing interface wasn't communicating the platform's power — a marketer who arrived hoping to solve a real problem often left before seeing the value. On top of this, the team needed to add new conversion-focused output types (email templates, landing page builder, advertorials) and an AI audience generator, all while migrating off a WeWeb/Supabase architecture that had hit its ceiling.",
    solution:
      "I collapsed the core workflow from 36 steps to 5 — a single-screen experience where marketers define their product, pick an output type, and receive AI-generated content they can iterate on immediately. The dashboard was rebuilt as a clean, Notion-inspired workspace with clear project and output organization. I designed the full email template builder with modular content blocks optimized for e-commerce campaigns, a landing page builder with A/B variant generation for conversion testing, and a dedicated advertorial creation flow. Each output type was designed around its specific conversion context — email has different design constraints than a landing page, which differs from a product description. An AI audience generator was added as a core feature for precision targeting. In parallel, I designed a 100-page Webflow marketing site with knowledge base to support the fundraise.",
    outcome:
      "The MVP shipped in five weeks, already exceeding the original platform's feature coverage at launch. The redesigned onboarding flow addressed the core drop-off issue with a dramatically simplified path to first value. Persuava went on to secure venture capital funding — with the redesigned product central to the pitch.",
    highlights: [
      "Onboarding flow collapsed from 36 steps to 5 — core drop-off eliminated",
      "Email template builder designed with modular blocks for e-commerce campaigns",
      "Landing page builder with built-in A/B variant generation for CRO testing",
      "Advertorial creation flow added as a dedicated conversion-focused output type",
      "AI audience generator designed as a new core targeting feature",
      "100-page Webflow marketing site delivered alongside the product redesign",
      "VC funding secured post-launch; redesigned product featured in pitch",
    ],
    process: [
      { step: "Discovery & Audit", detail: "Mapped the existing 36-step flow and identified where users were abandoning. Reviewed session recordings and spoke with early users to understand what they actually needed." },
      { step: "Information Architecture", detail: "Rebuilt the workspace structure around how e-commerce marketers actually think: by campaign, output type, and product — not by the platform's internal logic." },
      { step: "Core Flow Redesign", detail: "Collapsed content generation to 5 key inputs. Designed a real-time preview panel so users see AI output forming as they configure — immediate value, no waiting." },
      { step: "Output Type Design", detail: "Designed each output type separately: email templates with modular blocks, landing pages with A/B variants, advertorial builder with editorial flow, product descriptions with tone controls." },
      { step: "Marketing Site", detail: "100-page Webflow site covering homepage, pricing, all feature pages, knowledge base, and blog — built to convert trial signups and support the VC fundraise narrative." },
    ],
    metrics: [
      { label: "Onboarding steps", value: "36 → 5" },
      { label: "MVP delivery", value: "5 weeks" },
      { label: "Output types designed", value: "6" },
      { label: "Marketing site pages", value: "100+" },
    ],
  },

  {
    slug: "mycareer-shop",
    title: "My Career Shop",
    tagline: "A career guidance platform that earns traffic as it helps people",
    category: "UX/UI Design",
    year: "2024",
    coverImage: "/projects/mycareer-shop.webp",
    liveUrl: "https://mycareershop.com/",
    tags: ["SaaS", "Marketplace", "Landing Pages", "Conversion Design", "UX Research", "Figma"],
    role: "Lead UX/UI Designer",
    overview:
      "My Career Shop is a career guidance platform for Canada and the US that combines two things most platforms treat as separate: a counselor booking marketplace and a 1,000+ page career knowledge hub. The product had to convert visitors into paid bookings while simultaneously generating the kind of organic search traffic that makes paid acquisition unnecessary. Both goals lived or died on design decisions.",
    challenge:
      "The original brief called for a pure marketplace — and that design was well-executed. But it wouldn't support the content-first growth strategy the client actually needed to hit their acquisition targets without a paid media budget. The pivot meant rebuilding the information architecture midway through the project — without discarding the booking infrastructure already designed — while simultaneously designing a content system that could scale to thousands of uniquely generated pages without feeling like a content farm.",
    solution:
      "I redesigned the platform in two deliberate phases. Phase one built the marketplace core: counselor profiles with structured credentialing, a custom session scheduling system comparable to Calendly, and a complete payment flow — all optimized for conversion at each handoff point (profile discovery → session booking → payment). Phase two layered on the content architecture: a system of career-path landing pages, each structured to rank for long-tail search queries and designed to convert organic visitors into trial bookings. Each career page follows a conversion-optimized template: salary data and outcomes upfront (what users actually search for), skill requirements and progression paths in the middle (building aspiration), and a counselor booking CTA at the natural decision point. The two layers are woven together by design — a visitor who lands on a 'software engineer salary Canada' page exits either having booked a session or downloaded a career guide, both of which feed the business model.",
    outcome:
      "A dual-purpose platform that drives organic discovery through content and converts that traffic into paid counseling sessions — built for long-term growth without dependence on paid acquisition. The booking conversion flow was designed to match the quality standard of dedicated scheduling tools.",
    highlights: [
      "Two-phase design: booking marketplace first, then organic content layer",
      "Conversion-optimized career page templates designed for 1,000+ pages",
      "Custom scheduling system matching Calendly's standard — designed from scratch",
      "Content-to-booking conversion path designed at every landing page",
      "SEO architecture: salary and outcomes first, progression second, CTA at decision point",
      "Full payment flow: session purchase, confirmation, and follow-up states",
    ],
    process: [
      { step: "Phase 1 — Marketplace", detail: "Designed the full booking core: counselor profiles, discovery flow, scheduling system, and payment funnel." },
      { step: "Strategy Pivot", detail: "Rearchitected the IA after the client's growth strategy shifted from paid to organic. Preserved booking infrastructure while designing the content layer." },
      { step: "Content System Design", detail: "Designed the career page template system to scale to 1,000+ pages — structured for both SEO and conversion, not just information display." },
      { step: "Conversion Path Design", detail: "Mapped the organic visitor journey from landing page to booking CTA, designing micro-conversion steps (career guide download, free assessment) as pre-booking touchpoints." },
    ],
    metrics: [
      { label: "Career pages", value: "1,000+" },
      { label: "Design phases", value: "2" },
      { label: "Conversion paths", value: "Organic + Direct" },
    ],
  },

  {
    slug: "awaypay",
    title: "Awaypay",
    tagline: "Financial management for airline crew, built for life at 35,000 ft",
    category: "UX/UI Design",
    year: "2024",
    coverImage: "/projects/awaypay.webp",
    liveUrl: "https://www.awaypay.com.au/",
    logoUrl: "https://logo.clearbit.com/awaypay.com.au",
    tags: ["Fintech", "Mobile", "SaaS", "UX Design", "Figma"],
    role: "Lead UX/UI Designer",
    overview:
      "Awaypay is a mobile-first web application designed for airline crew members — pilots and flight attendants who manage finances, track layovers, and coordinate with colleagues while constantly on the move. Built for an Australian client, it treats mobile as the primary and only experience.",
    challenge:
      "Airline crew members live different lives from typical app users: they're in different time zones daily, they need financial transparency without complexity, and existing tools weren't built with them in mind. The design had to be immediately usable with zero tolerance for friction — because when you're between flights, you don't have time to learn a new interface.",
    solution:
      "I designed a mobile-first dashboard with a clear hierarchy: flight tracking and destination weather at the top, financial tools in the middle (automated invoicing, benefit tracking, Revolut-powered currency conversion), and a social layer at the bottom — a 'Who's Nearby' feature that shows which crew members are in the same city. Every interaction was designed to work one-handed, in a hurry, in an airport. The marketing site was designed separately in Webflow.",
    outcome:
      "A platform that meaningfully reduces administrative burden for crew members while adding genuine utility — the social and events features turned a finance tool into something crew members actually enjoy opening.",
    highlights: [
      "Mobile-first design for users who are always in transit",
      "Real-time flight tracking and destination weather integration",
      "Automated invoice handling and Revolut-powered currency conversion",
      "'Who's Nearby' social feature for crew at the same layover city",
    ],
  },

  {
    slug: "ajandekbar",
    title: "Ajándékbár",
    tagline: "A three-tier gift card platform with zero manual administration",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "",
    coverImage: "/projects/ajandekbar.webp",
    tags: ["E-commerce", "SaaS", "Conversion Design", "Figma", "Portal Design", "Hungary"],
    role: "Lead UX/UI Designer",
    overview:
      "Ajándékbár is a Hungarian gift card platform that serves three completely different user types within one product: consumers buying and sending gift cards, partner businesses managing their own branded gift card programs, and platform administrators overseeing billing and the entire ecosystem. Each tier needed its own purpose-built interface, while the underlying system had to be unified, automated, and scalable — eliminating the manual overhead that typically makes B2B gifting platforms painful to run.",
    challenge:
      "Multi-role platforms have a well-known design trap: optimize for one user type and you inevitably hurt the others. Consumers need the buying flow to feel effortless — any friction at the gift selection or payment step kills conversion. Partner businesses need control and reporting visibility without complexity. Admins need power tools without burying them under consumer-facing simplicity. Designing a product where each group gets exactly what they need — without any tier's complexity bleeding into another's — required a strict role-based information architecture from day one rather than retrofitted permissions.",
    solution:
      "I designed three separate interface layers that share a visual system but operate as distinct experiences. The consumer store is built entirely around gift-giving psychology: discovery and emotional context first, clean purchase flow second, instant digital delivery third. Every conversion barrier — confusing denomination selection, unclear delivery mechanics, uncertain payment — was identified and removed. The partner portal gives businesses full control over their gift card programs: branded card design, redemption tracking, transaction reporting, and export tools — presented as a clean business dashboard with no consumer-facing noise. The admin panel handles the operational layer: automated partner onboarding, billing reconciliation, system-wide reporting, and access management. Role-based access is invisible to each user; everyone experiences a product that appears built specifically for them.",
    outcome:
      "A fully automated gift card ecosystem that eliminated manual administration overhead while delivering a genuinely smooth consumer purchase experience. Partners can onboard, customize, and manage their programs independently; consumers buy and send in minutes.",
    highlights: [
      "Consumer store designed around gift-giving psychology — discovery, emotion, and easy purchase",
      "Conversion barriers identified and eliminated at selection, payment, and delivery steps",
      "Partner portal: branded card design, redemption tracking, and reporting in one dashboard",
      "Admin panel: automated billing, partner onboarding, and system-wide oversight",
      "Role-based access invisible to users — each tier feels built specifically for them",
      "Full gift card lifecycle: purchase → delivery → redemption → reporting",
    ],
    process: [
      { step: "User Role Mapping", detail: "Mapped three distinct user journeys with separate goals, success states, and failure modes. Designed role boundaries before touching any interface." },
      { step: "Consumer Conversion Flow", detail: "Designed the purchase funnel around gift-giving psychology. Identified and eliminated friction at denomination selection, delivery method, and checkout." },
      { step: "Partner Dashboard", detail: "Designed a business-grade portal for brand management, redemption tracking, and financial reporting — clean enough for non-technical users." },
      { step: "Admin Operations Layer", detail: "Built the admin panel around operational efficiency: partner onboarding, automated billing, and full system oversight without consumer-facing complexity." },
    ],
    metrics: [
      { label: "User tiers designed", value: "3" },
      { label: "Manual admin steps", value: "Eliminated" },
      { label: "Full lifecycle", value: "Purchase → Redemption" },
    ],
  },

  {
    slug: "tozdemania",
    title: "Tőzsdémánia",
    tagline: "Real-time investment tips delivered through a trustworthy mobile experience",
    category: "UX/UI Design",
    year: "2024",
    coverImage: "/projects/tozdemania.webp",
    liveUrl: "https://play.google.com/store/apps/details?id=com.tozsdemania.app&hl=hu",
    tags: ["Mobile App", "Fintech", "iOS", "Android", "Figma"],
    role: "Lead UX/UI Designer",
    overview:
      "Tőzsdémánia is a Hungarian stock market mentoring program that needed a native mobile app to deliver real-time investment tips, push notifications, and educational content to subscribers. Financial apps have a high trust bar — the design had to feel credible before a user reads a single word.",
    challenge:
      "Investment content ranges from urgent, time-sensitive tips to slow educational material. The same app needed to serve both well — with push notifications that create the right urgency without causing anxiety, and a content library that encourages learning without overwhelming beginners.",
    solution:
      "I designed a push notification-first architecture where the tip feed is always front and center, updated in real time. Educational content sits in a separate, clearly marked section organized by topic and experience level — so beginners and experienced investors can each find their depth without colliding. The visual language leans on restraint: clean typography, confident spacing, and minimal color use to build trust rather than excitement.",
    outcome:
      "A polished financial app that connects the Tőzsdémánia community with timely market insights through an interface that feels trustworthy enough for the subject matter.",
    highlights: [
      "Push notification architecture built for time-sensitive investment tips",
      "Real-time tip feed with confidence-building visual language",
      "Educational content manager organized by topic and experience level",
      "iOS and Android: single Figma system translated to both platforms",
    ],
  },

  {
    slug: "open-forest",
    title: "Open Forest",
    tagline: "Making company formation feel as natural as it should",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "https://openforests.com",
    logoUrl: "https://logo.clearbit.com/openforests.com",
    coverImage: "/projects/open-forest.webp",
    tags: ["Webflow", "Figma", "Startup", "Web Design", "Ireland"],
    role: "UX/UI Designer",
    overview:
      "Open Forest is an Irish startup that simplifies company formation — turning a process most people dread into something straightforward. They needed a website that communicated clarity, approachability, and trust, while embodying a distinctive nature-inspired brand identity.",
    challenge:
      "Competing in a space full of dry, legal-looking platforms, Open Forest's brand differentiation was entirely in its tone and aesthetic. The website had to do the heavy lifting of making 'starting a company in Ireland' feel like something a normal person can do — without oversimplifying the actual steps involved.",
    solution:
      "I designed the complete site in Figma: homepage, how-it-works page, pricing, testimonials, and contact — all structured around a clear narrative arc that takes a visitor from 'this sounds complicated' to 'I can do this.' The nature-themed palette of greens and earth tones was applied consistently to create a brand that stands apart from every other company formation service. Built in Webflow with full CMS and blog functionality for ongoing content.",
    outcome:
      "Open Forest launched with a distinctive, credible web presence that stands apart in its category. The co-founder specifically praised the team's responsiveness and continued support after go-live.",
    highlights: [
      "Full website design from discovery to handoff in Figma",
      "Nature-inspired visual system that differentiates in a dry market",
      "Clear narrative journey: awareness → understanding → action",
      "Webflow CMS with blog for client-managed content and SEO",
    ],
  },

  {
    slug: "leadspicker",
    title: "Leadspicker",
    tagline: "50 pages of AI-powered confidence — built within two brand colors",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "https://leadspicker.com",
    logoUrl: "https://logo.clearbit.com/leadspicker.com",
    coverImage: "/projects/leadspicker.webp",
    tags: ["Webflow", "Figma", "SaaS Marketing", "Animation", "Illustration"],
    role: "UX/UI Designer",
    overview:
      "Leadspicker is an AI-driven B2B platform that automates lead generation and multichannel outreach — scraping, enriching, and sequencing prospects across LinkedIn and email. They needed a marketing site that matched the ambition of their product: large, comprehensive, and visually compelling.",
    challenge:
      "The brief came with two constraints that make designers nervous: minimal initial direction from the client, and a brand palette limited to just two colors plus white. Fifty pages of content needed to feel varied and dynamic without access to the full visual toolkit designers usually rely on.",
    solution:
      "I treated the two-color constraint as a creative brief rather than a limitation. Custom illustrations built in Adobe Illustrator became the main visual differentiator — giving each page section its own character while staying strictly within the palette. Scroll-triggered animations added dynamism without color. The result is a site where the visual system does more work precisely because it has fewer tools — making the brand feel intentional and distinctive.",
    outcome:
      "A visually striking, SEO-optimized platform covering home, pricing, solutions, integrations, guides, blog, FAQ, and careers. The client's satisfaction with the project led to continued collaboration.",
    highlights: [
      "50-page Webflow site designed within a two-color brand constraint",
      "Custom illustration system built in Adobe Illustrator",
      "Scroll-triggered animation layered throughout all major sections",
      "Full SEO foundation: meta, descriptions, and alt text across every page",
    ],
  },

  {
    slug: "fannizero",
    title: "Fannizero",
    tagline: "A hybrid fan app where community and commerce coexist",
    category: "UX/UI Design",
    year: "2024",
    coverImage: "/projects/fannizero.webp",
    liveUrl: "https://apps.apple.com/us/app/fannizero/id6754892433",
    tags: ["Mobile App", "E-commerce", "Figma", "Product Design"],
    role: "UX/UI Designer",
    overview:
      "Fannizero is a hybrid mobile application that brings together fan community content and branded merchandise in a single, integrated experience. The challenge was building something that fans would use for the content — and spend on for the products.",
    challenge:
      "Fan apps and shopping apps serve different emotional modes. A fan browsing content is in an exploratory, identity-driven mindset. A shopper is goal-oriented. Merging the two without making either feel like an afterthought required careful flow design and a clear visual hierarchy that could shift between modes without jarring the user.",
    solution:
      "I designed a mobile-first experience with distinct but connected content and commerce sections — linked by shared identity and aesthetic. The content feed keeps fans engaged and browsing; product placement is contextual rather than interruptive. ShopRenter handles the transactional layer, integrated smoothly into the experience. A custom admin panel lets the brand team manage content and products independently, without needing a developer for every update.",
    outcome:
      "An integrated fan platform that drives both engagement and revenue within a single interface — giving the brand a direct channel to its most invested audience.",
    highlights: [
      "Content feed and commerce layer designed as one cohesive experience",
      "ShopRenter e-commerce integration within the native app flow",
      "Custom admin panel for brand content and product management",
      "Mobile-first interactions optimized for habitual, daily use",
    ],
  },

  {
    slug: "lucky-punch",
    title: "Lucky Punch",
    tagline: "A bold brand identity translated into a high-impact digital presence",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "",
    coverImage: "/projects/lucky-punch.webp",
    tags: ["Web Design", "Figma", "Branding", "UX Design"],
    role: "UX/UI Designer",
    overview:
      "Lucky Punch is a bold, energy-forward brand that needed a digital presence strong enough to match its personality. The site needed to capture the brand's spirit immediately — within the first scroll — while still being navigable and conversion-focused.",
    challenge:
      "High-energy brand identities are often at war with usability. The instinct to design big and bold can produce sites that are visually exciting but functionally frustrating. The challenge was maintaining the brand's punch while making sure every user can find what they need and take action efficiently.",
    solution:
      "I focused the design on controlled contrast: large, confident type and bold imagery in the hero and section transitions, clean and minimal in the content areas. This rhythm gives users the brand hit they came for, then steps out of the way when they're ready to engage. Navigation is direct and unambiguous — no clever hiding of key actions in pursuit of aesthetics.",
    outcome:
      "A digital presence that doesn't compromise — full brand energy upfront, full usability throughout. The site communicates what Lucky Punch is within seconds, and converts that interest into action.",
    highlights: [
      "High-impact visual direction that captures the brand's energy instantly",
      "Typography-led design system with deliberate contrast hierarchy",
      "Conversion-focused page structure beneath the visual boldness",
      "Mobile-first responsive layout across all breakpoints",
    ],
  },

  {
    slug: "eldelia",
    title: "Eldelia",
    tagline: "Premium e-commerce design that earns trust before the first click",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "",
    coverImage: "/projects/eldelia.webp",
    tags: ["E-commerce", "CRO", "Conversion Optimization", "Figma", "A/B Testing", "Checkout Design"],
    role: "UX/UI Designer",
    overview:
      "Eldelia is a premium e-commerce brand where the gap between product quality and purchase experience had become a direct revenue problem. High-intent visitors were landing on product pages and leaving without converting — not because the products weren't right, but because the design wasn't earning their trust fast enough. I was brought in to redesign the full conversion funnel with a CRO-first lens: from product discovery through cart and checkout.",
    challenge:
      "The existing product pages were underperforming at every stage of the funnel. Key trust signals — materials, certifications, social proof — were either buried or absent. The checkout had unnecessary friction: too many steps, unclear progress, and a cart experience that created doubt instead of confidence. Cart abandonment was high, and the brand was effectively subsidizing poor UX with increased acquisition spend rather than fixing the underlying conversion problem.",
    solution:
      "I started with a conversion audit — mapping the full purchase funnel and identifying where and why users were dropping off. Product pages were rebuilt around sensory quality communication: hero imagery sequenced for maximum quality perception, material and craftsmanship details surfaced prominently above the fold, and verified reviews integrated at the exact decision point where doubt peaks. The cart and checkout were streamlined to a clear three-step flow — the minimum viable path from 'add to cart' to 'order placed.' Each step was designed to reduce cognitive load and reinforce trust: clear progress indicators, confident error states, and trust signals placed strategically at the payment step where abandonment is highest. I also designed A/B test variants for the key conversion elements: CTA copy and color, product page hierarchy, and checkout flow structure — giving the team a testing roadmap rather than a single fixed solution.",
    outcome:
      "A conversion-focused shopping experience designed to reduce abandonment at every funnel stage — from initial product page trust through to checkout completion. Every design decision was tied to a specific conversion hypothesis, with A/B variants built in from the start rather than retrofitted after launch.",
    highlights: [
      "Full funnel audit before design — drop-off points mapped and prioritized",
      "Product page rebuilt around sensory trust signals above the fold",
      "Social proof integrated contextually at the decision point, not in a sidebar",
      "Checkout redesigned to 3 steps — minimum path from intent to conversion",
      "Trust signals placed at payment step where abandonment is highest",
      "A/B variants designed for CTA, layout hierarchy, and checkout structure",
    ],
    process: [
      { step: "Conversion Audit", detail: "Analyzed the full purchase funnel, identified high drop-off steps, and mapped the trust signals that were missing or buried at each stage." },
      { step: "Benchmark Research", detail: "Reviewed conversion patterns from leading premium e-commerce brands to identify proven approaches to trust-building at each funnel stage." },
      { step: "Product Page Redesign", detail: "Rebuilt the page hierarchy around quality perception. Sequenced imagery, brought material details above the fold, and wove social proof at the decision point." },
      { step: "Cart & Checkout Simplification", detail: "Mapped every step and decision in the existing checkout. Removed everything non-essential. Designed 3-step flow with progress indicators and confidence-building copy." },
      { step: "A/B Test Design", detail: "Created test variants for every key conversion element — CTA copy, page layout, checkout CTA placement — giving the team a structured testing roadmap post-launch." },
    ],
    metrics: [
      { label: "Checkout steps", value: "3 steps" },
      { label: "A/B test variants", value: "12 designed" },
      { label: "Trust signals", value: "Product, cart & checkout" },
      { label: "Drop-off stages addressed", value: "4" },
    ],
  },

  {
    slug: "zicer-ba",
    title: "Zicer",
    tagline: "A Bosnian digital product redesigned around real user needs",
    category: "UX/UI Design",
    year: "2023",
    coverImage: "/projects/zicer-ba.webp",
    liveUrl: "",
    tags: ["Product Design", "UX Research", "Figma", "Mobile"],
    role: "UX/UI Designer",
    overview:
      "Zicer is a digital product serving Bosnian users — an app where the existing interface had grown organically without a coherent UX strategy, resulting in unclear flows, inconsistent patterns, and a visual language that lacked confidence.",
    challenge:
      "The core issue wasn't aesthetics — it was that the product had never been designed with the user's mental model in mind. Features existed but were hard to find. Flows started logically and then took unexpected turns. Users were completing tasks by accident rather than by design.",
    solution:
      "I started with user research: task-based testing sessions to map where people got stuck and why. From there, I rebuilt the information architecture from first principles — then redesigned the visual system to reflect the new structure. A consistent component library in Figma made the handoff clean and scalable for future features.",
    outcome:
      "A significantly clearer product experience with improved task completion across core user journeys and a visual system the development team could extend confidently.",
    highlights: [
      "User research: task-based testing sessions to identify friction points",
      "Full information architecture redesign from first principles",
      "New visual system and component library in Figma",
      "Developer-ready handoff with documented interaction specs",
    ],
  },

  {
    slug: "flappingo",
    title: "FlappinGo",
    tagline: "A community travel platform designed to make home exchange feel effortless",
    category: "UX/UI Design",
    year: "2024",
    coverImage: "/projects/flappingo.webp",
    liveUrl: "https://www.flappingo.com/home/hosts",
    logoUrl: "https://logo.clearbit.com/flappingo.com",
    tags: ["Web App", "Mobile", "Community Platform", "Travel", "UX Design", "Figma"],
    role: "UX/UI Designer",
    overview:
      "FlappinGo is a home exchange and hospitality-sharing platform connecting travellers with hosts across Europe. The product spans a responsive web app and a native mobile experience, built around the idea that meaningful travel doesn't have to be expensive — it requires trust, transparency, and a design system that makes hosts and guests feel equally comfortable. The platform supports listings, traveller profiles, exchange coordination, local meetups, and community events.",
    challenge:
      "Home exchange platforms live or die on trust. Hosts need to feel confident about who is coming into their space; travellers need enough context to commit to an unfamiliar stay. The design challenge was building an interface that communicates credibility and warmth simultaneously — with verified profiles, clear availability signals, and a browsing experience that feels personal rather than transactional, without the commercial pressure of a booking platform.",
    solution:
      "I designed the full product — web and mobile — with a calm, community-first visual language. Host profiles lead with personality: photos, descriptions written in plain language, and explicit availability windows. A badge-based verification system communicates trust without feeling bureaucratic. The exchange flow is structured around mutual agreement rather than instant booking: hosts and travellers coordinate through an in-app messaging layer before confirming. Navigation is organized around the five core actions — Accommodations, Travellers, Exchanges, Meetups, Events — so users always know where they are in the platform.",
    outcome:
      "The platform launched with hosts across Hungary, the UK, Germany, France, and Austria. The community-driven design reduced friction for first-time hosts — the profile setup flow consistently produced complete, detailed listings that gave travellers enough information to reach out with confidence.",
    highlights: [
      "Trust-first profile design with verification badges and plain-language host descriptions",
      "Mutual-agreement exchange flow replacing instant-booking pressure",
      "Five-section navigation architecture covering the full host-traveller lifecycle",
      "Responsive web platform with companion mobile app",
      "Community features: meetups and events alongside accommodation listings",
    ],
  },

  // ── Webflow ────────────────────────────────────────────────────────────────

  {
    slug: "evionor",
    title: "Evionor",
    tagline: "Premium EV charging hardware, presented like the product it is",
    category: "UX/UI Design",
    year: "2024",
    coverImage: "/projects/evionor.webp",
    liveUrl: "https://evionor.hu/",
    tags: ["E-commerce", "Shopify", "CRO", "B2C & B2B", "Figma", "Landing Pages", "Hungary"],
    role: "UX/UI Designer",
    overview:
      "Evionor is the Hungarian distributor of Scandinavian premium EV chargers, entering a fast-growing market with no digital presence. They needed a Shopify e-commerce platform that could communicate technical credibility and premium quality while simultaneously handling B2C purchases (individual homeowners) and B2B fleet inquiries (corporate facility managers) — two audiences with very different decision-making processes and content needs.",
    challenge:
      "EV charging is a considered purchase with a long research phase. Before converting, homeowners need compatibility assurance, installation guidance, and price justification. Corporate buyers need fleet specs, service agreements, and procurement-friendly inquiry paths. A single Shopify store had to serve both without one audience feeling like an afterthought — or worse, accidentally routing the wrong audience down the wrong funnel.",
    solution:
      "I designed the full Shopify webshop in Figma with a product catalog architecture organized around purchase intent rather than product type. Each product page was built to serve the conversion journey of its primary buyer: home charger pages lead with compatibility (vehicle make/model), installation simplicity, and customer reviews; commercial pages lead with fleet specifications, certifications, and direct B2B inquiry CTAs. Educational landing pages — 'Which charger do I need?' and 'Installation guide' — serve as pre-conversion content that reduces the support burden and improves purchase confidence. The B2B inquiry flow is entirely separate from the retail checkout: a dedicated landing page, a streamlined form, and a professional follow-up path. I also set up Shopify's automated transactional email flows (order confirmation, shipping updates, abandoned cart) with on-brand templates matching the store's visual language.",
    outcome:
      "The webshop went live and generated its first orders within days of launch — a market entry from zero digital presence to operational Shopify store in six weeks. B2B inquiries came in through the dedicated flow from week one, keeping commercial and retail traffic cleanly separated.",
    highlights: [
      "Shopify store built from Figma designs with full theme customization",
      "Separate conversion flows for B2C purchase and B2B fleet inquiry",
      "Product pages designed around purchase intent, not product category",
      "Educational landing pages serving as pre-conversion content",
      "Abandoned cart and transactional email templates designed on-brand",
      "First orders within days of launch — market entry in 6 weeks",
    ],
    process: [
      { step: "Audience Mapping", detail: "Mapped two distinct buyer journeys — homeowner and corporate buyer — with different research phases, decision criteria, and conversion actions." },
      { step: "Shopify Architecture", detail: "Structured the Shopify catalog, collections, and navigation to serve both audiences without overlap. Set up B2B inquiry flow as a separate landing page." },
      { step: "Product Page Design", detail: "Designed product pages around the primary buyer's conversion journey: compatibility first for B2C, specs and certifications first for B2B." },
      { step: "Educational Content", detail: "Designed pre-conversion landing pages ('Which charger?' and 'Installation guide') to reduce buyer uncertainty before reaching the product page." },
      { step: "Email & Automation", detail: "Designed on-brand transactional email templates and set up Shopify abandoned cart flows to recover high-intent drop-offs." },
    ],
    metrics: [
      { label: "Launch time", value: "6 weeks" },
      { label: "Conversion flows", value: "B2C + B2B" },
      { label: "First orders", value: "Within days" },
      { label: "Email flows set up", value: "4" },
    ],
  },

  {
    slug: "mano-klima",
    title: "Mano Klima",
    tagline: "A modern web presence for an HVAC business built to generate leads",
    category: "Webflow",
    year: "2024",
    liveUrl: "",
    coverImage: "/projects/mano-klima.webp",
    tags: ["Webflow", "Figma", "Local Business", "Lead Generation", "HVAC"],
    role: "UX/UI Designer & Webflow Developer",
    overview:
      "Mano Klima is an air conditioning and HVAC services company that needed a modern, professional web presence to compete in local search and convert visitors into quote requests. The previous site was outdated — technically and visually — and wasn't generating meaningful inbound business.",
    challenge:
      "HVAC websites live or die on two things: ranking in local search, and converting those clicks into phone calls or form submissions. Most in the category look identical — stock photos of technicians, generic service descriptions, and buried contact forms. Standing out while still hitting conversion benchmarks required a clean, trust-first design.",
    solution:
      "I designed a clean, service-focused layout in Figma with a clear visual hierarchy: what they do, where they serve, why you should call them. The contact and quote request flow is surfaced prominently on every page — never more than one click away. Service pages are structured to support local SEO with location-specific content. Built in Webflow for easy seasonal content updates by the client.",
    outcome:
      "A fast, credible web presence that positions Mano Klima professionally in local search and reduces the friction between finding the site and making contact.",
    highlights: [
      "Lead generation-first page structure with persistent contact CTAs",
      "Service pages structured for local SEO from the ground up",
      "Webflow CMS for easy seasonal and service content updates",
      "Mobile-optimized for the majority of local search traffic",
    ],
  },

  {
    slug: "ardes-music",
    title: "Ardes Music",
    tagline: "A music brand's digital home — where passion meets precision",
    category: "Webflow",
    year: "2024",
    liveUrl: "",
    coverImage: "/projects/ardes-music.webp",
    tags: ["Webflow", "Figma", "Music", "Brand", "E-commerce"],
    role: "UX/UI Designer & Webflow Developer",
    overview:
      "Ardes Music needed a digital platform that did justice to the passion behind the brand — a place where music enthusiasts could discover products, learn about the brand's story, and feel the energy of what Ardes stands for before they even hear a note.",
    challenge:
      "Music is visceral and emotional, but websites are visual. Translating the feeling of music into a digital layout — without resorting to clichés — required a design approach that built atmosphere through typography and imagery rather than sound or motion.",
    solution:
      "I designed a visually rich layout anchored by bold typographic statements and full-bleed imagery that does the emotional work. The structure moves from brand story to product catalog in a natural flow, with each section feeling like a continuation rather than a page change. Built in Webflow with optimized image handling to keep load times fast despite the heavy visual style.",
    outcome:
      "A brand-forward digital presence that communicates Ardes Music's identity before visitors read a single word of copy — and keeps them engaged through to the product catalog.",
    highlights: [
      "Emotion-led visual design anchored by typography and full-bleed imagery",
      "Brand narrative arc: story → products → engagement",
      "Performance-optimized image handling in Webflow",
      "Responsive layout that maintains the visual impact on mobile",
    ],
  },

  {
    slug: "herbstritt-haustechnik",
    title: "Herbstritt Haustechnik",
    tagline: "Modernizing a traditional German trades business without losing its character",
    category: "Webflow",
    year: "2024",
    liveUrl: "",
    coverImage: "/projects/herbstritt-haustechnik.webp",
    tags: ["Webflow", "Figma", "Germany", "B2B", "Building Services"],
    role: "UX/UI Designer & Webflow Developer",
    overview:
      "Herbstritt Haustechnik is a German building technology company specializing in heating, plumbing, and energy systems — with an established reputation in their region and zero digital presence to show for it. The project was about building credibility online without disrupting what already makes them trusted offline.",
    challenge:
      "Traditional trade businesses have a specific trust problem online: their reputation is built on word of mouth and long-term relationships, not digital signals. Translating that earned credibility into a web presence — without making it feel corporate or disconnected from the people behind the business — was the core design challenge.",
    solution:
      "I designed a clean, authoritative site that leads with expertise and certifications rather than marketing language. Service pages are built around clear problem-solution structures — visitors see their situation reflected, then see how Herbstritt solves it. A project gallery communicates craft and quality. The contact flow is direct and unhurried — matching how a traditional trade relationship actually starts. Built in Webflow and optimized for German local search.",
    outcome:
      "A modern digital presence that extends Herbstritt's offline reputation into search — credible, specific, and built to convert qualified local leads.",
    highlights: [
      "Expertise and certification-led design rather than generic marketing",
      "Problem-solution page structure matching visitor intent",
      "Project gallery communicating craft and quality of work",
      "German-language local SEO built into every page template",
    ],
  },

  {
    slug: "verdatherm",
    title: "Verdatherm",
    tagline: "Green energy solutions, presented with the confidence the category needs",
    category: "Webflow",
    year: "2024",
    liveUrl: "",
    coverImage: "/projects/verdatherm.webp",
    tags: ["Webflow", "Figma", "Green Energy", "Sustainability", "B2B"],
    role: "UX/UI Designer & Webflow Developer",
    overview:
      "Verdatherm is a sustainable heating and thermal energy company that needed a digital presence as refined as their technology. In a category full of generic 'eco' clichés — leaf icons, stock photos of solar panels, aggressive green color schemes — the goal was to stand out by being genuinely considered.",
    challenge:
      "Green energy brands face a double-edged credibility problem: too much eco-branding reads as greenwashing, too little buries the sustainability proposition that differentiates them. Finding the visual and editorial tone that feels authentically sustainable — without performing sustainability — was the central design problem.",
    solution:
      "I designed a restrained, intelligent site that communicates environmental commitment through the quality of the design itself rather than through overt signaling. A refined palette of natural tones, precise typography, and photography that focuses on technology and outcomes rather than nature scenes. Technical service pages give experts the depth they need; a clear benefits structure gives new visitors the orientation they need. Built in Webflow with CMS for ongoing content.",
    outcome:
      "A distinctive, credible digital presence that positions Verdatherm above the greenwashing noise in its category — trusted by both environmentally motivated buyers and technically sophisticated clients.",
    highlights: [
      "Restrained visual language that communicates quality over eco-cliché",
      "Technical service architecture for expert and lay audiences alike",
      "Webflow CMS for client-managed content and blog",
      "Local SEO optimization built into the page and template structure",
    ],
  },

  // ── WordPress & Web Design ─────────────────────────────────────────────────

  {
    slug: "interview-ba",
    title: "Interview.ba",
    tagline: "An independent news portal built to handle serious journalism at scale",
    category: "WordPress & Web Design",
    year: "2022",
    coverImage: "/projects/interview-ba.webp",
    liveUrl: "https://interview.ba",
    logoUrl: "https://logo.clearbit.com/interview.ba",
    tags: ["WordPress", "News", "Custom Development", "Interactive Features"],
    role: "Web Designer & Developer",
    overview:
      "Interview.ba is an independent Bosnian news portal focused on investigative journalism, politics, and community reporting. Founded by the INFOHOUSE Foundation in 2016, it covers Tuzla Canton and beyond — with a particular focus on accountability journalism and the kind of stories that don't fit neatly into mainstream media.",
    challenge:
      "High-volume editorial sites have a specific design problem: how do you create a structure that works for the 3-minute daily reader and the deep-dive researcher at the same time? Interview.ba also needed a custom feature — an interactive map tracking phantom construction projects in Tuzla Canton — that didn't have an off-the-shelf solution.",
    solution:
      "I redesigned the site around clear content categories with a navigation system that reflects how readers actually browse news — by topic, by format (article, podcast, column), and by recency. The interactive Mapa TK feature was custom-built to let readers filter infrastructure projects by municipality, type, and construction status — turning a data journalism piece into a permanent, usable public tool. Newsletter subscription and social integration were woven in without disrupting the reading experience.",
    outcome:
      "A clean, fast news platform that serves both casual readers and engaged citizens — with a data journalism tool that has become one of the site's most distinctive features.",
    highlights: [
      "Custom interactive map (Mapa TK) with multi-filter project tracking",
      "Editorial navigation system organized by topic, format, and recency",
      "Podcast section with embedded audio integration",
      "Mobile-first layout for on-the-go news consumption",
    ],
  },

  {
    slug: "infohouse-ba",
    title: "INFOHOUSE Foundation",
    tagline: "A civic institution's website that balances authority with approachability",
    category: "WordPress & Web Design",
    year: "2022",
    coverImage: "/projects/infohouse-ba.webp",
    liveUrl: "https://infohouse.ba",
    logoUrl: "https://logo.clearbit.com/infohouse.ba",
    tags: ["WordPress", "NGO", "CMS", "Information Architecture"],
    role: "Web Designer & Developer",
    overview:
      "INFOHOUSE is a Sarajevo-based foundation working at the intersection of civic engagement, media literacy, and anti-corruption education. They run programs for children, youth, and adults across Bosnia and Herzegovina — and needed a website that could clearly communicate multiple program verticals without feeling like a bureaucratic directory.",
    challenge:
      "Foundations with diverse programs often produce websites that read like org charts — impressive in scope, impossible to navigate. INFOHOUSE needed their mission and impact to be immediately clear, with each program discoverable without having to understand the organization's internal structure first.",
    solution:
      "I restructured the site's information architecture around impact and audience rather than organizational departments. The homepage leads with mission and concrete outcomes; program pages are organized by who they serve (schools, journalists, civic organizations) rather than by what they're called internally. A resource library collects publications, reports, and educational materials in a searchable format. Clean, accessible typography and a neutral, institutional palette maintain credibility without feeling cold.",
    outcome:
      "A more credible, navigable platform that accurately reflects the foundation's depth and reach — making programs genuinely discoverable for the institutions and individuals they serve.",
    highlights: [
      "Impact-first information architecture replacing org-chart navigation",
      "Program pages organized by audience, not internal structure",
      "Searchable resource library for publications and educational materials",
      "Accessible, WCAG-compatible typography and layout",
    ],
  },

  {
    slug: "kidsinfo-ba",
    title: "Kids Info",
    tagline: "A parenting magazine at scale — designed for discovery across 1,100+ pages",
    category: "WordPress & Web Design",
    year: "2022",
    liveUrl: "https://kidsinfo.ba",
    logoUrl: "https://logo.clearbit.com/kidsinfo.ba",
    tags: ["WordPress", "Publishing", "CMS", "Content Architecture"],
    role: "Web Designer & Developer",
    overview:
      "Kids Info is Bosnia's leading digital parenting magazine — covering everything from pregnancy to teenagers, with over 1,100 pages of archived content. As the platform grew, content discoverability had become the central UX problem: a parent looking for advice on a specific topic had to work too hard to find it.",
    challenge:
      "Designing a content site at scale is fundamentally a taxonomy problem. With thousands of articles across seven life-stage categories, the existing structure wasn't giving readers natural pathways through the archive — and the editorial team was spending time maintaining inconsistencies rather than producing content.",
    solution:
      "I redesigned the category and navigation architecture around the natural arc of parenthood: Pregnancy → Baby → Preschool → Elementary → Teenager. Each stage gets its own visual identity within the shared design system, so readers can orient themselves instantly. Article templates were standardized to make editorial production faster and more consistent. A downloadable magazine section and recipe hub were added as high-engagement features, with featured article placements to surface evergreen content alongside the daily feed.",
    outcome:
      "A more coherent, navigable content experience that serves both first-time visitors looking for specific advice and returning readers who want to browse — with editorial templates that make running the site significantly easier.",
    highlights: [
      "Life-stage content architecture following the natural parenting journey",
      "Standardized article templates for scalable editorial production",
      "Downloadable magazine section and recipe hub as high-engagement features",
      "SEO-optimized structure to surface the deep content archive in search",
    ],
  },

  {
    slug: "orela-ba",
    title: "Orela",
    tagline: "Hotel cosmetics, presented with the hospitality the industry demands",
    category: "WordPress & Web Design",
    year: "2023",
    coverImage: "/projects/orela-ba.webp",
    liveUrl: "https://orela.ba",
    logoUrl: "https://logo.clearbit.com/orela.ba",
    tags: ["WordPress", "WooCommerce", "B2B", "E-commerce", "Hospitality"],
    role: "Web Designer & Developer",
    overview:
      "Orela is a Sarajevo-based distributor of premium hotel cosmetics — soaps, shampoos, amenity kits, and personalized products for hotels across the region. Established since 2009 with an excellent product range, the company had no digital storefront that reflected their quality or made it easy for hospitality buyers to engage.",
    challenge:
      "B2B e-commerce for premium products has a trust problem: buyers need to believe in the quality before they can justify the cost to their own stakeholders. A generic WooCommerce template doesn't establish that trust. The site needed to feel as considered as the products themselves — while still being functional enough for procurement managers to navigate and inquire efficiently.",
    solution:
      "I designed a clean, hospitality-inspired catalog layout that organizes products by category and highlights the premium brand partners Orela represents. The product pages emphasize quality signals — materials, certifications, sustainability credentials — and the personalization/custom order inquiry flow is prominently featured for buyers who need branded products. The overall visual language borrows from premium hospitality rather than generic e-commerce.",
    outcome:
      "A polished B2B webshop that communicates Orela's quality positioning clearly — and makes it genuinely easy for hotel procurement managers to find, evaluate, and inquire about products.",
    highlights: [
      "Premium hospitality-inspired design language throughout",
      "Product catalog organized by type with brand partner showcase",
      "Personalization and custom order inquiry flow prominently featured",
      "Mobile-optimized for buyers researching on the go",
    ],
  },

  {
    slug: "irpo-ba",
    title: "IRPO",
    tagline: "A public institution's website redesigned around the people it serves",
    category: "WordPress & Web Design",
    year: "2022",
    liveUrl: "https://irpo.ba",
    logoUrl: "https://logo.clearbit.com/irpo.ba",
    tags: ["WordPress", "Education", "Government", "Information Architecture"],
    role: "Web Designer & Developer",
    overview:
      "IRPO is the public institute responsible for pre-university education development in Sarajevo Canton — coordinating teacher training, curriculum support, and professional development for educators across the region. A public institution with a large mandate and a website that buried the most important things under institutional language.",
    challenge:
      "Government and education websites share a common failure mode: they organize information by how the institution thinks about itself, rather than by what visitors actually need. Teachers visiting the site had to know the organizational structure to find what they were looking for — workshops, documents, registration forms. The redesign needed to fix that without stripping the site of its institutional authority.",
    solution:
      "I rebuilt the site's navigation around user tasks rather than org-chart hierarchy. The main navigation surfaces 'Upcoming Programs,' 'Publications,' 'Career Guidance,' and 'Online Tools' — the four things most visitors actually come for. Each section is designed with a consistent, accessible layout that works for the range of digital literacy levels among the site's educator audience. Clean institutional typography and a calm color palette maintain authority without stiffness.",
    outcome:
      "A significantly more navigable institutional site that serves its educator audience efficiently — making training programs, documents, and resources discoverable without requiring knowledge of how the institute is structured internally.",
    highlights: [
      "Navigation rebuilt around user tasks, not organizational departments",
      "Clear sections for Programs, Publications, Guidance, and Tools",
      "Accessible design suitable for a wide range of digital literacy levels",
      "Consistent templates that make institutional content easy to maintain",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null
  next: Project | null
} {
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}

export const projectsByCategory = {
  "UX/UI Design": projects.filter((p) => p.category === "UX/UI Design"),
  Webflow: projects.filter((p) => p.category === "Webflow"),
  "WordPress & Web Design": projects.filter(
    (p) => p.category === "WordPress & Web Design"
  ),
}
