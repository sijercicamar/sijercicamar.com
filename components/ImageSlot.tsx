import Image from "next/image"
import { existsSync } from "fs"
import path from "path"
import type { ImageSlot as Slot } from "@/lib/case-studies"
import { SHOW_DRAFTS } from "@/lib/draft"

export function imageExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src))
}

/** Shows the image once Amar adds the file; until then a labelled slot (drafts only). */
export function ImageSlot({ slot, priority = false }: { slot: Slot; priority?: boolean }) {
  const exists = imageExists(slot.src)
  if (!exists && !SHOW_DRAFTS) return null
  return (
    <figure>
      {exists ? (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-edge bg-surface">
          <Image
            src={slot.src}
            alt={slot.alt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
        </div>
      ) : (
        <div className="w-full aspect-[16/10] rounded-xl border border-dashed border-yellow-400/40 bg-yellow-400/[0.03] flex flex-col items-center justify-center gap-2 p-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-yellow-300">Image slot</p>
          <p className="text-sm text-fg/70">{slot.alt}</p>
          <p className="text-xs font-mono text-muted break-all">/public{slot.src}</p>
        </div>
      )}
      {slot.caption && <figcaption className="mt-3 text-sm text-muted">{slot.caption}</figcaption>}
    </figure>
  )
}

