"use client";

import { BRAND, COLORS } from "../data/brand";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        background: COLORS.dark,
        color: `${COLORS.bg}99`,
        padding: "60px clamp(16px, 3vw, 48px) 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        <Logo variant="white" width={160} />
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontStyle: "italic",
            color: COLORS.bg,
            textAlign: "center",
          }}
        >
          Honest roofing in Austin, TX.
        </p>
        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <a href="#services" style={{ color: `${COLORS.bg}aa` }}>Services</a>
          <a href="#about" style={{ color: `${COLORS.bg}aa` }}>About</a>
          <a href="#projects" style={{ color: `${COLORS.bg}aa` }}>Projects</a>
          <a href="#reviews" style={{ color: `${COLORS.bg}aa` }}>Reviews</a>
          <a href="#contact" style={{ color: `${COLORS.bg}aa` }}>Contact</a>
        </div>
        <div
          style={{
            width: 60,
            height: 1,
            background: `${COLORS.bg}22`,
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: `${COLORS.bg}55`,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} {BRAND.name} · {BRAND.location}
        </p>
      </div>
    </footer>
  );
}
