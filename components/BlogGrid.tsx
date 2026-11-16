import Link from "next/link"
import { getVisiblePosts, formatDate, readingTime, AUTHOR } from "@/lib/posts"
import type { Post } from "@/lib/posts"

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-surface border border-edge rounded-2xl overflow-hidden hover:border-muted/30 transition-all duration-300"
    >
      {/* Body */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 border border-accent/25 bg-accent/5 text-accent rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-fg group-hover:text-accent transition-colors duration-150 mb-1.5">
            {post.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-3">
            {post.description}
          </p>
        </div>

        {/* Meta: author + date */}
        <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-muted">
          <span className="text-fg/80">{AUTHOR}</span>
          <span className="text-muted/40">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="text-muted/40">·</span>
          <span>{readingTime(post.body)}</span>
        </div>
      </div>
    </Link>
  )
}

export default function BlogGrid() {
  const posts = getVisiblePosts()
  return (
    <div className="max-w-6xl mx-auto px-6 pb-32">
      {posts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 sm:py-32">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">
            Coming soon
          </p>
          <p className="text-2xl sm:text-3xl font-semibold text-fg mb-3">
            New posts are on the way
          </p>
          <p className="text-muted max-w-md mx-auto leading-relaxed">
            I&apos;m putting the finishing touches on the first articles — on
            design, UX, and building for the web. Check back shortly.
          </p>
        </div>
      )}
    </div>
  )
}
