"use client";

import Image from "next/image";
import { BRAND, COLORS } from "../data/brand";

export default function Footer() {
  return (
    <footer
      style={{
        background: COLORS.bg,
        color: COLORS.fg,
        padding: "72px clamp(16px, 3vw, 48px) 36px",
        borderTop: `1px solid ${COLORS.border}`,
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
        <Image
          src="/logo-orange.png"
          alt="Specialty Roofing"
          width={1500}
          height={680}
          style={{
            width: "min(80%, 320px)",
            height: "auto",
            display: "block",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: COLORS.fg,
            textAlign: "center",
          }}
        >
          Honest roofing in Austin, TX.
        </p>
        <div
          style={{
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            justifyContent: "center",
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <a href="#services" style={{ color: COLORS.fg }}>Services</a>
          <a href="#about" style={{ color: COLORS.fg }}>About</a>
          <a href="#projects" style={{ color: COLORS.fg }}>Projects</a>
          <a href="#reviews" style={{ color: COLORS.fg }}>Reviews</a>
          <a href="#contact" style={{ color: COLORS.fg }}>Contact</a>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            justifyContent: "center",
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: COLORS.fgMuted,
          }}
        >
          <a href={BRAND.phoneHref}>{BRAND.phone}</a>
          <span style={{ color: `${COLORS.fgMuted}55` }}>·</span>
          <a href={BRAND.emailHref}>{BRAND.email}</a>
          <span style={{ color: `${COLORS.fgMuted}55` }}>·</span>
          <span>{BRAND.address}</span>
        </div>
        <div
          style={{
            width: 60,
            height: 1,
            background: COLORS.border,
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: COLORS.fgMuted,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} {BRAND.name} · {BRAND.location}
        </p>
      </div>
    </footer>
  );
}
