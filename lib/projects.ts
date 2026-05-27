export type Project = {
  slug: string
  title: string
  tagline: string
  category: "UX/UI Design" | "Webflow" | "WordPress & Web Design"
  year: string
  liveUrl: string
  tags: string[]
  role: string
  overview: string
  challenge: string
  solution: string
  outcome: string
  highlights: string[]
}

export const projects: Project[] = [
  // ── UX/UI Design ──────────────────────────────────────────────────────────

  {
    slug: "standup-republic",
    title: "Standup Republic",
    tagline: "End-to-end platform for Germany's stand-up comedy scene",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "https://app.standup-republic.com",
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
    tags: ["SaaS", "AI", "Dashboard Design", "Figma", "Webflow"],
    role: "Lead UX/UI Designer",
    overview:
      "Persuava (formerly Copywise) is an AI-powered content generation platform for e-commerce marketers — helping them create product pages, ad copy, and landing pages at scale. With 700+ early users on a no-code foundation, the product needed a complete redesign to support its growing feature set and upcoming fundraise.",
    challenge:
      "The existing platform required 36 separate steps to generate a single piece of content. Users were dropping off during onboarding, and the underlying WeWeb/Supabase architecture was hitting its ceiling. The redesign needed to dramatically simplify the UX while simultaneously adding more powerful AI features.",
    solution:
      "I redesigned the entire product experience — collapsing the core workflow from 36 steps down to 5. The new dashboard took inspiration from Notion's clarity: a clean workspace architecture with intuitive navigation between projects and output types. I designed a dedicated onboarding flow for new users, new content types (product pages, advertorials, landing page builder), and an AI audience generation module. In parallel, I designed a ~100-page Webflow marketing site with a full knowledge base.",
    outcome:
      "The new MVP was delivered in five weeks and already exceeded the original system's capabilities at launch. Shortly after, Persuava secured venture capital funding — a validation of both the product direction and the UX improvements.",
    highlights: [
      "Workflow reduced from 36 steps to 5 — core redesign challenge",
      "New dashboard architecture inspired by Notion's workspace model",
      "Designed onboarding, AI audience generator, and advertorial builder",
      "100-page Webflow marketing site delivered alongside the product",
    ],
  },

  {
    slug: "mycareer-shop",
    title: "My Career Shop",
    tagline: "A career guidance platform that earns traffic as it helps people",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "",
    tags: ["SaaS", "Marketplace", "UX Research", "Product Design", "Figma"],
    role: "Lead UX/UI Designer",
    overview:
      "My Career Shop is a career guidance platform serving Canada and the US — combining a counselor booking marketplace with an encyclopedic knowledge hub covering over 1,000 career paths. The product needed to do two things at once: convert visitors into bookings, and rank organically for career-related searches.",
    challenge:
      "The first design direction — a pure marketplace — was technically solid but wouldn't support the content-first SEO growth strategy the client needed. The pivot required rethinking the entire information architecture without throwing away the booking infrastructure already built.",
    solution:
      "I designed the platform in two iterations. The first built out the marketplace core: counselor profiles, a custom scheduling system on par with Calendly, and a complete payment flow. The second layered on a content architecture that generates thousands of unique career pages — each covering salary data, required skills, career progression paths, and embedded interviews with professionals. The two layers are woven together: content pages drive discovery, booking converts that traffic into revenue.",
    outcome:
      "The platform launched as a sustainable, dual-purpose product. It drives organic discovery through content while converting readers into counseling sessions — a model designed for long-term growth without paid acquisition.",
    highlights: [
      "Two-phase design: marketplace first, then content knowledge hub",
      "Custom scheduling system built to Calendly's standard",
      "1,000+ unique career pages with salary data and skill paths",
      "SEO architecture designed for long-term organic growth",
    ],
  },

  {
    slug: "awaypay",
    title: "Awaypay",
    tagline: "Financial management for airline crew, built for life at 35,000 ft",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "https://www.awaypay.com.au",
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
    tags: ["E-commerce", "SaaS", "Portal Design", "Figma"],
    role: "Lead UX/UI Designer",
    overview:
      "Ajándékbár is a Hungarian gift card platform built around three completely different user types — consumers buying gift cards, partner businesses managing their own gift card programs, and administrators overseeing the entire ecosystem. Each tier needed its own interface while sharing a single, coherent system underneath.",
    challenge:
      "Multi-role platforms have a classic design trap: optimizing for one user type at the expense of others. Consumers need simplicity. Partners need control. Admins need power. Designing a product that gives each group exactly what they need — without bleeding complexity from one tier into another — required careful role-based information architecture from the very start.",
    solution:
      "I designed three separate interface layers within one visual system. The consumer-facing store is clean and focused — browse, buy, send. The partner portal gives businesses full control over their gift card programs, redemption tracking, and reporting. The admin panel handles automated billing, partner onboarding, and system-wide oversight. Role-based access is invisible to each user; everyone sees only what they need.",
    outcome:
      "A scalable, fully automated gift card platform that eliminated the manual administration overhead that typically plagues B2B gifting products — while giving consumers a purchase experience that's genuinely delightful.",
    highlights: [
      "Three distinct UI layers: consumer store, partner portal, admin panel",
      "Role-based access woven into the information architecture from day one",
      "Automated partner onboarding and billing flows",
      "Full gift card lifecycle — from purchase through redemption — in one system",
    ],
  },

  {
    slug: "tozdemania",
    title: "Tőzsdémánia",
    tagline: "Real-time investment tips delivered through a trustworthy mobile experience",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "",
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
    liveUrl: "",
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
    tags: ["E-commerce", "Figma", "Product Design", "UX Design"],
    role: "UX/UI Designer",
    overview:
      "Eldelia is a premium brand that needed a shopping experience worthy of its products. Generic templates were sending the wrong signal — the checkout experience had friction, the product pages didn't communicate quality, and the overall design wasn't matching the brand's ambitions.",
    challenge:
      "Premium e-commerce design is largely about trust. Before a customer considers the price, they need to believe in the product and the brand. Every page — from the first scroll to the order confirmation — is an opportunity to build or lose that trust. The existing experience was losing it early.",
    solution:
      "I redesigned the product page architecture around sensory language: large, carefully considered imagery, material and quality details surfaced prominently, social proof woven in contextually rather than shoved in a sidebar. The cart and checkout were simplified to remove every unnecessary decision point. The result is a flow that feels effortless because it's been carefully designed to be so.",
    outcome:
      "A premium shopping experience that communicates quality from the first impression and carries that trust signal through to order completion — designed to improve conversion by reducing doubt at every stage.",
    highlights: [
      "Product page redesign with sensory-first imagery and detail hierarchy",
      "Trust signal integration woven into the browsing flow naturally",
      "Streamlined checkout reducing friction at every decision point",
      "Consistent premium visual language across all device sizes",
    ],
  },

  {
    slug: "zicer-ba",
    title: "Zicer",
    tagline: "A Bosnian digital product redesigned around real user needs",
    category: "UX/UI Design",
    year: "2023",
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
    tagline: "A mobile arcade game where the entire UI lives inside the gameplay",
    category: "UX/UI Design",
    year: "2024",
    liveUrl: "https://flappingo.app",
    tags: ["Game Design", "Mobile", "iOS", "Interaction Design", "UI Design"],
    role: "UI/UX Designer",
    overview:
      "FlappinGo is a casual arcade game for iOS built around a deceptively simple mechanic: tap left or right to navigate, collect all bubbles to complete a level. The design challenge was making the game immediately understood — with no tutorial, no text, no onboarding — while building enough visual feedback to keep players engaged across dozens of levels.",
    challenge:
      "Game UI operates under a different constraint than most product design: every interface element competes with the game itself for attention. Traditional HUDs — health bars, score counters, level indicators — can make a minimal game feel cluttered. The challenge was designing a UI that communicates everything the player needs to know without ever feeling like an overlay on top of the experience.",
    solution:
      "I embedded the interface into the game canvas itself. Progress indicators, bubble collection state, and obstacle feedback are communicated through in-world animations and visual effects rather than static UI elements. The result feels less like 'a game with a HUD' and more like a world that speaks for itself. Smooth micro-animations reward collection and communicate collision state without any text.",
    outcome:
      "Published on the App Store with immediate comprehension — players understand the rules within the first three seconds of play, which is the benchmark for casual game accessibility.",
    highlights: [
      "Zero-text UI design: the game teaches itself through play",
      "Progress and state communicated through in-world animation",
      "Micro-animation system for collection, collision, and level completion",
      "Minimal visual footprint that keeps focus on the gameplay",
    ],
  },

  // ── Webflow ────────────────────────────────────────────────────────────────

  {
    slug: "evionor",
    title: "Evionor",
    tagline: "Premium EV charging hardware, presented like the product it is",
    category: "Webflow",
    year: "2024",
    liveUrl: "",
    tags: ["E-commerce", "Shopify", "Figma", "EV", "Hungary"],
    role: "UX/UI Designer",
    overview:
      "Evionor is the Hungarian distributor of Scandinavian premium EV chargers. Entering a fast-growing market with no digital presence, they needed an e-commerce platform that could communicate technical credibility and premium quality — while handling B2C purchases and B2B fleet inquiries simultaneously.",
    challenge:
      "EV charging is a considered purchase. Buyers need technical specifications, compatibility information, and installation guidance before they'll commit — and the site needed to deliver all of that without feeling like a manual. On top of that, the platform had to serve two completely different audiences: homeowners buying a single unit and facility managers speccing corporate charging infrastructure.",
    solution:
      "I designed a Scandinavian-minimal webshop in Figma, built on Shopify, with a product catalog organized around purchase intent: wall-mounted home chargers, portable solutions, and Type 2 cables each get dedicated pages with detailed specs and vehicle compatibility guides. Educational blog content supports purchase decisions. The B2B inquiry flow is separated from the retail flow — clean, direct, and professional — so corporate clients feel served rather than filtered.",
    outcome:
      "The webshop went live and generated its first orders within days. A professional market entry into Hungary's growing EV infrastructure sector — from zero digital presence to a credible retail operation in six weeks.",
    highlights: [
      "Scandinavian-minimal design language matching the product's origin",
      "Technical product catalog with specs and vehicle compatibility guides",
      "Separate B2C and B2B purchase flows on the same platform",
      "Automated invoicing and logistics partner integration",
    ],
  },

  {
    slug: "mano-klima",
    title: "Mano Klima",
    tagline: "A modern web presence for an HVAC business built to generate leads",
    category: "Webflow",
    year: "2024",
    liveUrl: "",
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
    liveUrl: "https://interview.ba",
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
    liveUrl: "https://infohouse.ba",
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
    liveUrl: "https://orela.ba",
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
