"use client";

import { COLORS } from "../data/brand";

export default function BrandStatement() {
  return (
    <section
      style={{
        padding: "120px clamp(16px, 3vw, 48px)",
        background: COLORS.dark,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, ${COLORS.accent}18, transparent 60%)`,
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>
        <p
          className="fade-up"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: COLORS.accent,
            marginBottom: 18,
          }}
        >
          A Note From The Owners
        </p>
        <blockquote
          className="fade-up d1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3.8vw, 2.6rem)",
            fontWeight: 500,
            color: COLORS.bg,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: 30,
          }}
        >
          &ldquo;World-class roofing at a fair price — that&rsquo;s the whole job.
          We don&rsquo;t finish until you&rsquo;re happy.&rdquo;
        </blockquote>
        <div
          className="fade-up d2"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <svg viewBox="0 0 240 60" style={{ width: 180, height: "auto", color: COLORS.accent }} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M10 38 C 25 16, 40 50, 55 26 C 70 5, 85 42, 100 22 Q 115 42 130 26 T 160 30 T 195 26 L 220 34" strokeLinejoin="round" />
          </svg>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: `${COLORS.bg}CC`,
            }}
          >
            The Specialty Roofing Family
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: `${COLORS.bg}66`,
            }}
          >
            Owners · Austin, TX
          </p>
        </div>
      </div>
    </section>
  );
}
