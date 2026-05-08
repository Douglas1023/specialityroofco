"use client";

import { BRAND, COLORS } from "../data/brand";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "82vh",
        background: COLORS.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Subtle warm glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 50% 35%, ${COLORS.accent}10 0%, transparent 55%)`,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 820,
          margin: "0 auto",
        }}
      >
        <p
          className="fade-up d1"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            fontWeight: 400,
            color: COLORS.accent,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Austin · Round Rock · Cedar Park
        </p>

        <h1
          className="fade-up d2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 7vw, 5.4rem)",
            fontWeight: 600,
            color: COLORS.fg,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            marginBottom: 14,
          }}
        >
          A roof done <em style={{ color: COLORS.accent, fontStyle: "italic" }}>right</em>
          <br />
          the first time.
        </h1>

        <div
          className="fade-up d3"
          style={{
            width: 56,
            height: 1,
            background: `${COLORS.accent}99`,
            margin: "28px auto",
          }}
        />

        <p
          className="fade-up d4"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: COLORS.fgMuted,
            maxWidth: 540,
            margin: "0 auto 36px",
          }}
        >
          {BRAND.subtitle}
        </p>

        <div
          className="fade-up d5"
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "16px 38px",
              background: COLORS.accent,
              color: COLORS.white,
              borderRadius: 999,
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.accentDark; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = COLORS.accent; }}
          >
            Get a Free Quote
          </a>
          <a
            href={BRAND.phoneHref}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "16px 38px",
              background: "transparent",
              color: COLORS.fg,
              border: `1px solid ${COLORS.fg}33`,
              borderRadius: 999,
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.fg; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${COLORS.fg}33`; }}
          >
            Call {BRAND.phone}
          </a>
        </div>

        {/* Trust strip */}
        <div
          className="fade-up d6"
          style={{
            marginTop: 48,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 28,
            flexWrap: "wrap",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: COLORS.fgMuted,
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Stars />
            <span>4.9 / 5 · 200+ Reviews</span>
          </span>
          <span style={{ width: 4, height: 4, borderRadius: 999, background: `${COLORS.fgMuted}55` }} />
          <span>Licensed &amp; Insured</span>
          <span style={{ width: 4, height: 4, borderRadius: 999, background: `${COLORS.fgMuted}55` }} />
          <span>Family Owned</span>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 1, color: COLORS.accent }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={12} height={12} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}
