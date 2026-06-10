import { ImageResponse } from "next/og"
import { SITE } from "@/lib/site"

export const alt = SITE.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Branded social-share image, generated at build time. Next applies this as
// og:image + twitter:image across all routes (posts override it with covers).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c0b0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 9999,
              backgroundColor: "#57ff8c",
              marginRight: 20,
            }}
          />
          <div style={{ color: "#a09890", fontSize: 30, letterSpacing: 2 }}>
            sijercicamar.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            <span style={{ color: "#f2ede4" }}>Amar Sijercic</span>
            <span style={{ color: "#57ff8c" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              color: "#57ff8c",
              fontSize: 44,
              fontWeight: 600,
              marginTop: 16,
            }}
          >
            Senior UX/UI &amp; CRO Designer
          </div>
        </div>

        <div style={{ display: "flex", color: "#a09890", fontSize: 28, maxWidth: 900 }}>
          High-converting, human-centered design for startups, SaaS &amp; e-commerce.
        </div>
      </div>
    ),
    { ...size }
  )
}
