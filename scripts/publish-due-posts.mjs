#!/usr/bin/env node
/**
 * Publish scheduled blog posts.
 *
 * Finds every post in lib/posts.ts marked `draft: true` whose `date` is today
 * or earlier (Europe/Sarajevo timezone) and flips it to `draft: false`.
 *
 * It does NOT commit or push — the caller (scheduled agent / CI) decides whether
 * to commit when this script reports that it changed something.
 *
 * Exit code 0 always. Prints a JSON summary to stdout, e.g.:
 *   {"changed":true,"published":["my-slug"]}
 *
 * Usage:
 *   node scripts/publish-due-posts.mjs          # apply changes
 *   node scripts/publish-due-posts.mjs --dry    # report only, write nothing
 */
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const POSTS_FILE = join(__dirname, "..", "lib", "posts.ts")
const DRY = process.argv.includes("--dry")
const TZ = "Europe/Sarajevo"

// Today's date (YYYY-MM-DD) in the publishing timezone.
function todayInTz(tz) {
  // en-CA gives ISO-style YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date())
}

// Split the contents of the top-level `posts` array into individual post-object
// source strings, tracking string state so braces inside text don't confuse us.
function splitPostObjects(source) {
  const startMarker = /export\s+const\s+posts\s*:\s*Post\[\]\s*=\s*\[/
  const m = source.match(startMarker)
  if (!m) throw new Error("Could not find `export const posts: Post[] = [` in posts.ts")

  const arrayStart = m.index + m[0].length // index just after the opening [
  let i = arrayStart
  let depth = 1 // we are inside the array's [ ]
  let inStr = null // current quote char or null
  let escaped = false
  let objStart = -1
  const objects = [] // { start, end } absolute indices, [start,end)

  for (; i < source.length; i++) {
    const c = source[i]

    if (inStr) {
      if (escaped) escaped = false
      else if (c === "\\") escaped = true
      else if (c === inStr) inStr = null
      continue
    }

    if (c === '"' || c === "'" || c === "`") {
      inStr = c
      continue
    }

    if (c === "[" || c === "{") {
      if (c === "{" && depth === 1) objStart = i // start of a post object
      depth++
    } else if (c === "]" || c === "}") {
      depth--
      if (c === "}" && depth === 1 && objStart !== -1) {
        objects.push({ start: objStart, end: i + 1 })
        objStart = -1
      }
      if (depth === 0) break // end of the posts array
    }
  }

  return objects
}

function main() {
  const today = todayInTz(TZ)
  const original = readFileSync(POSTS_FILE, "utf8")
  const objects = splitPostObjects(original)

  const published = []
  // Rebuild the file by splicing modified object sources back in (back to front
  // so indices stay valid).
  let result = original
  for (let k = objects.length - 1; k >= 0; k--) {
    const { start, end } = objects[k]
    const objSrc = original.slice(start, end)

    const isDraft = /\bdraft\s*:\s*true\b/.test(objSrc)
    if (!isDraft) continue

    const dateMatch = objSrc.match(/\bdate\s*:\s*["'](\d{4}-\d{2}-\d{2})["']/)
    if (!dateMatch) continue
    const date = dateMatch[1]

    // Due when the post's date is today or earlier (string compare works for
    // zero-padded ISO dates).
    if (date > today) continue

    const slugMatch = objSrc.match(/\bslug\s*:\s*["']([^"']+)["']/)
    const slug = slugMatch ? slugMatch[1] : "(unknown)"

    const newObjSrc = objSrc.replace(/\bdraft\s*:\s*true\b/, "draft: false")
    result = result.slice(0, start) + newObjSrc + result.slice(end)
    published.push(slug)
  }

  published.reverse() // report in document order
  const changed = published.length > 0

  if (changed && !DRY) writeFileSync(POSTS_FILE, result, "utf8")

  process.stdout.write(
    JSON.stringify({ changed, published, today, dryRun: DRY }) + "\n"
  )
}

main()
