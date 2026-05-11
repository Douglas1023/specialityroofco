"use client";

import Image from "next/image";
import { BRAND, COLORS } from "../data/brand";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "82vh",
        background: COLORS.dark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <Image
        src="/hero-roof-new.png"
        alt="Specialty Roofing crew installing shingles"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
        sizes="100vw"
      />

      {/* Gradient overlay for legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(20,40,75,0.55) 0%, rgba(20,40,75,0.45) 40%, rgba(20,40,75,0.75) 100%)",
        }}
      />

      {/* Bottom fade into next section */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 140,
          zIndex: 1,
          background: `linear-gradient(180deg, transparent, ${COLORS.bg})`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "120px 24px 80px",
          maxWidth: 820,
          margin: "0 auto",
          color: COLORS.white,
        }}
      >
        <p
          className="fade-up d1"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            fontWeight: 400,
            color: COLORS.white,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            marginBottom: 22,
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
            color: COLORS.white,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            marginBottom: 14,
            textShadow: "0 2px 30px rgba(0,0,0,0.35)",
          }}
        >
          A roof done <em style={{ color: COLORS.accent, fontStyle: "italic" }}>right</em>.
        </h1>

        <div
          className="fade-up d3"
          style={{
            width: 56,
            height: 1,
            background: `${COLORS.accent}cc`,
            margin: "28px auto",
          }}
        />

        <p
          className="fade-up d4"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: `${COLORS.white}d9`,
            maxWidth: 540,
            margin: "0 auto 36px",
            textShadow: "0 2px 14px rgba(0,0,0,0.45)",
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
            className="hero-cta hero-cta-primary"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              background: COLORS.accent,
              color: COLORS.white,
              borderRadius: 999,
              transition: "all 0.3s ease",
              display: "inline-block",
              boxShadow: "0 8px 24px rgba(184,100,44,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.accentDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.accent;
            }}
          >
            Get a Free Quote
          </a>
          <a
            href={BRAND.phoneHref}
            className="hero-cta hero-cta-outline"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              background: "transparent",
              color: COLORS.white,
              border: `1px solid ${COLORS.white}66`,
              borderRadius: 999,
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = COLORS.white;
              e.currentTarget.style.background = `${COLORS.white}14`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${COLORS.white}66`;
              e.currentTarget.style.background = "transparent";
            }}
          >
            Call {BRAND.phone}
          </a>
        </div>

        <style>{`
          .hero-cta {
            font-size: 0.72rem;
            padding: 16px 38px;
          }
          @media (max-width: 640px) {
            .hero-cta {
              font-size: 0.6rem;
              padding: 9px 18px;
              letter-spacing: 0.18em;
            }
          }
        `}</style>

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
            color: `${COLORS.white}b0`,
          }}
        >
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <Stars />
            <span>4.9 / 5 · 200+ Reviews</span>
          </span>
          <span
            style={{
              width: 4,
              height: 4,
              borderRadius: 999,
              background: `${COLORS.white}55`,
            }}
          />
          <span>Licensed &amp; Insured</span>
          <span
            style={{
              width: 4,
              height: 4,
              borderRadius: 999,
              background: `${COLORS.white}55`,
            }}
          />
          <span>Family Owned</span>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        color: COLORS.accent,
      }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={12} height={12} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}
