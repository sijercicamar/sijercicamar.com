// Draft content is visible locally and on Vercel preview deploys only.
// See SHOW_DRAFTS in next.config.ts.
export const SHOW_DRAFTS = Boolean(process.env.SHOW_DRAFTS)

export const TODO_PATTERN = /(\{\{TODO[^}]*\}\})/

/** True when a string still contains a {{TODO}} placeholder. */
export function isTodo(text: string | undefined | null): boolean {
  return !text || TODO_PATTERN.test(text)
}

/** Text with every {{TODO}} placeholder removed. */
export function stripTodo(text: string): string {
  return text.replace(/\{\{TODO[^}]*\}\}/g, "").replace(/\s+·\s*$|^\s*·\s+/g, "").trim()
}

/** Is there anything to render for this text in the current environment? */
export function showText(text: string | undefined | null): boolean {
  if (!text) return false
  return SHOW_DRAFTS || stripTodo(text) !== ""
}
