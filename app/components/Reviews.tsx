"use client";

import { COLORS, REVIEWS } from "../data/brand";

function Stars() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 1, color: COLORS.accent }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        padding: "120px clamp(16px, 3vw, 48px)",
        background: "linear-gradient(180deg, #DCE9F2 0%, #C0D5E5 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            Reviews
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
              marginBottom: 18,
            }}
          >
            What our neighbors <em style={{ color: COLORS.accent }}>say.</em>
          </h2>
          <div
            className="fade-up d2"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: COLORS.fgMuted,
            }}
          >
            <Stars /> 4.9 / 5 from 200+ reviews
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className={`fade-up d${i + 1}`}
              style={{
                padding: "32px 28px",
                background: COLORS.bgAlt,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stars />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  lineHeight: 1.55,
                  color: COLORS.fg,
                  marginTop: 14,
                  flex: 1,
                  fontStyle: "italic",
                }}
                dangerouslySetInnerHTML={{ __html: `&ldquo;${r.quote}&rdquo;` }}
              />
              <div
                style={{
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: `1px solid ${COLORS.border}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: `${COLORS.accent}1c`,
                    color: COLORS.accent,
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 700, color: COLORS.fg }}>
                    {r.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: COLORS.fgMuted,
                      marginTop: 2,
                    }}
                  >
                    {r.location}, TX
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
