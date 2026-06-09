// ── Blog posts ───────────────────────────────────────────────────────────────
// Add new posts to the `posts` array below. Newest first (the list and the
// prev/next navigation both follow array order).
//
// `body` is a list of content blocks so writing a post stays simple and the
// rendering stays clean & readable. Supported block types:
//
//   { type: "heading",   text }              → section heading
//   { type: "paragraph", text }              → body paragraph
//   { type: "quote",     text, cite? }       → pull quote
//   { type: "list",      items: string[] }   → bulleted list
//   { type: "image",     src, alt?, caption? } → full-width image (in /public)

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt?: string; caption?: string }

export type Post = {
  slug: string
  title: string
  description: string
  date: string // ISO date, e.g. "2026-06-09" — also the scheduled publish date
  coverImage?: string // path in /public, e.g. "/blog/my-post.webp"
  tags: string[]
  body: ContentBlock[]
  // Scheduling: set `draft: true` and a future `date`. The scheduled publisher
  // (runs daily at 09:00 Europe/Sarajevo) flips this to false once `date`
  // arrives, which commits + deploys the post live. A draft never shows on the
  // site. See scripts/publish-due-posts.mjs.
  draft?: boolean
}

// The author is always Amar Sijercic.
export const AUTHOR = "Amar Sijercic"

export const posts: Post[] = [
  // No posts yet — add them here, newest first. Copy the template below.
  //
  // To SCHEDULE a post: set `draft: true` and the future `date`. The daily
  // publisher (09:00 Europe/Sarajevo) flips it live once that date arrives.
  // To publish immediately: just omit `draft` (or set it to false).
  //
  // {
  //   slug: "my-first-post",            // URL: /blog/my-first-post
  //   title: "My first post",
  //   description: "One or two sentences shown on the card and at the top.",
  //   date: "2026-06-15",               // publish date (also shown as the date)
  //   draft: true,                       // hidden until `date` arrives
  //   coverImage: "/blog/my-first-post.webp", // optional, put file in /public/blog
  //   tags: ["Design", "Web"],
  //   body: [
  //     { type: "paragraph", text: "..." },
  //     { type: "heading", text: "A section" },
  //     { type: "paragraph", text: "..." },
  //     { type: "list", items: ["one", "two", "three"] },
  //     { type: "quote", text: "A quote", cite: "Someone" },
  //     { type: "image", src: "/blog/figure.webp", alt: "...", caption: "..." },
  //   ],
  // },
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
