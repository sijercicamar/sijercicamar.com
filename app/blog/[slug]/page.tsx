import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  getPostBySlug,
  getAdjacentPosts,
  getVisiblePosts,
  formatDate,
  readingTime,
  AUTHOR,
} from "@/lib/posts"
import type { ContentBlock } from "@/lib/posts"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getVisiblePosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Amar Sijercic`,
    description: post.description,
  }
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-2xl font-semibold text-fg tracking-tight mt-14 mb-4">
          {block.text}
        </h2>
      )
    case "paragraph":
      return (
        <p className="text-lg text-fg/80 leading-[1.8] mb-6">{block.text}</p>
      )
    case "quote":
      return (
        <blockquote className="my-10 pl-6 border-l-2 border-accent">
          <p className="text-xl text-fg leading-relaxed italic">
            “{block.text}”
          </p>
          {block.cite && (
            <cite className="block mt-3 text-sm text-muted not-italic">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      )
    case "list":
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-3" />
              <span className="text-lg text-fg/80 leading-[1.8]">{item}</span>
            </li>
          ))}
        </ul>
      )
    case "image":
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-edge bg-surface">
            <Image
              src={block.src}
              alt={block.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-sm text-muted text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    default:
      return null
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { prev, next } = getAdjacentPosts(slug)

  return (
    <main className="min-h-screen bg-bg">
      {/* ── Back link ── */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors duration-200"
        >
          <span aria-hidden="true">←</span>
          All posts
        </Link>
      </div>

      {/* ── Header ── */}
      <header className="max-w-3xl mx-auto px-6 pt-12 pb-10">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium tracking-[0.14em] uppercase px-2.5 py-1 border border-accent/25 bg-accent/5 text-accent rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-fg mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-muted leading-relaxed mb-8">
          {post.description}
        </p>

        {/* Byline */}
        <div className="flex items-center gap-2 text-sm text-muted border-t border-edge pt-6">
          <span className="text-fg">{AUTHOR}</span>
          <span className="text-muted/40">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="text-muted/40">·</span>
          <span>{readingTime(post.body)}</span>
        </div>
      </header>

      {/* ── Cover ── */}
      {post.coverImage && (
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-edge bg-surface">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      )}

      {/* ── Body ── */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </article>

      {/* ── Prev / Next ── */}
      <nav className="border-t border-edge">
        <div className="max-w-3xl mx-auto px-6 grid grid-cols-2">
          <div className="border-r border-edge py-10 pr-8">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group block">
                <p className="text-xs text-muted uppercase tracking-[0.15em] mb-2">
                  ← Previous
                </p>
                <p className="text-lg font-medium text-fg/60 group-hover:text-fg transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <Link href="/blog" className="group block">
                <p className="text-xs text-muted uppercase tracking-[0.15em] mb-2">
                  ← Back
                </p>
                <p className="text-lg font-medium text-fg/60 group-hover:text-fg transition-colors">
                  All posts
                </p>
              </Link>
            )}
          </div>
          <div className="py-10 pl-8 text-right">
            {next && (
              <Link href={`/blog/${next.slug}`} className="group block">
                <p className="text-xs text-muted uppercase tracking-[0.15em] mb-2">
                  Next →
                </p>
                <p className="text-lg font-medium text-fg/60 group-hover:text-fg transition-colors">
                  {next.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </main>
  )
}
