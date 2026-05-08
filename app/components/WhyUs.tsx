"use client";

import Image from "next/image";
import { COLORS } from "../data/brand";

/**
 * About section photo.
 * To swap: save your photo to /public/ (e.g. /public/founders.jpg) and
 * change ABOUT_PHOTO to the new path. Recommended: 4:5 portrait,
 * 1000x1250+ for retina.
 */
const ABOUT_PHOTO = "/roofcofounders.jpg";

const services = [
  { name: "Roof Inspections", icon: "house" as const },
  { name: "Roof Repairs", icon: "shield" as const },
  { name: "Roof Replacements", icon: "handshake" as const },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      style={{
        padding: "120px clamp(16px, 3vw, 48px)",
        background: COLORS.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint decorative house silhouette */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-6%",
          top: "10%",
          width: 720,
          height: 720,
          opacity: 0.18,
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 600 600" width="100%" height="100%">
          <g fill="none" stroke={COLORS.fg} strokeWidth="2" opacity="0.5">
            <path d="M120 360 L300 200 L480 360" />
            <path d="M160 360 L160 520 L440 520 L440 360" />
            <rect x="270" y="380" width="60" height="140" />
            <rect x="200" y="400" width="40" height="50" />
            <rect x="360" y="400" width="40" height="50" />
          </g>
        </svg>
      </div>

      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.3fr)",
            gap: "clamp(36px, 5vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* Photo slot */}
          <div className="fade-up d1">
            <PhotoFrame src={ABOUT_PHOTO} alt="The Specialty Roofing crew" />
          </div>

          {/* Content */}
          <div className="fade-up d2">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: COLORS.accent,
                marginBottom: 18,
              }}
            >
              About Us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                fontWeight: 800,
                color: COLORS.fg,
                letterSpacing: "0.005em",
                lineHeight: 1.05,
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              A Roofing Company You Can Trust
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                color: COLORS.fg,
                marginBottom: 44,
                maxWidth: 600,
              }}
            >
              At Specialty Roofing, we believe a great roof starts with honest
              work and ends with a job done right. From residential repairs to
              full roof replacements, we deliver lasting results and a
              stress-free experience.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 16,
                marginBottom: 36,
                maxWidth: 600,
              }}
            >
              {services.map((s) => (
                <div
                  key={s.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                    textAlign: "center",
                  }}
                >
                  <ServiceIcon kind={s.icon} />
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: COLORS.fg,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {s.name}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#about"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "16px 30px",
                background: COLORS.accent,
                color: COLORS.white,
                borderRadius: 6,
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.accentDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.accent;
              }}
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "4 / 5",
        background: COLORS.soft,
        border: `2px solid ${COLORS.fg}`,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(20,40,75,0.12)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 880px) 100vw, 50vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          transform: "scale(1.08)",
        }}
      />
    </div>
  );
}

function ServiceIcon({ kind }: { kind: "house" | "shield" | "handshake" }) {
  const stroke = COLORS.fg;
  const sw = 1.6;
  return (
    <svg
      width={72}
      height={72}
      viewBox="0 0 64 64"
      fill="none"
      stroke={stroke}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "house" && (
        <>
          <path d="M10 30 L32 12 L54 30" />
          <path d="M16 28 L16 52 L48 52 L48 28" />
          <rect x="28" y="36" width="8" height="16" />
          <rect x="20" y="34" width="6" height="8" />
          <rect x="38" y="34" width="6" height="8" />
        </>
      )}
      {kind === "shield" && (
        <>
          <path d="M32 8 L52 16 L52 32 C52 44 42 52 32 56 C22 52 12 44 12 32 L12 16 Z" />
          <path d="M22 32 L29 39 L42 26" />
        </>
      )}
      {kind === "handshake" && (
        <>
          <path d="M6 32 L14 24 L22 30 L30 22 L38 30 L46 22 L58 32" />
          <path d="M14 32 L22 40 L30 32 L38 40 L46 32" />
          <path d="M32 28 C32 28 28 32 28 36 C28 40 32 42 32 42" />
        </>
      )}
    </svg>
  );
}
