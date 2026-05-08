"use client";

import { COLORS } from "../data/brand";

const points = [
  {
    title: "Show up on time.",
    body:
      "Which really means ten minutes early. Your time matters. We treat the appointment window like a deadline, not a suggestion.",
  },
  {
    title: "Do what we say.",
    body:
      "Exceed expectations on every part of the job — from the first inspection to the last nail. No surprise charges. No phantom problems.",
  },
  {
    title: "Leave it better.",
    body:
      "Roof done right, yard left spotless. Every nail picked up, every shingle swept, every gutter clear. Like we were never here.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      style={{
        padding: "120px clamp(16px, 3vw, 48px)",
        background: COLORS.bg,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p
            className="fade-up"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: COLORS.accent,
              marginBottom: 12,
            }}
          >
            The Specialty Promise
          </p>
          <h2
            className="fade-up d1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 600,
              color: COLORS.fg,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            We&rsquo;re not reinventing roofing.
            <br />
            We&rsquo;re just doing it <em style={{ color: COLORS.accent }}>right.</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 0,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 16,
            overflow: "hidden",
            background: COLORS.bgAlt,
          }}
        >
          {points.map((p, i) => (
            <article
              key={p.title}
              className={`fade-up d${i + 1}`}
              style={{
                padding: "44px 36px",
                borderRight: i < points.length - 1 ? `1px solid ${COLORS.border}` : "none",
                background: COLORS.bg,
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: COLORS.accent,
                  marginBottom: 18,
                  display: "block",
                }}
              >
                0{i + 1}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: COLORS.fg,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                  marginBottom: 14,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  color: COLORS.fgMuted,
                }}
              >
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
