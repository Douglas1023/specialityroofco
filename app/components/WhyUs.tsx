"use client";

import Image from "next/image";
import { COLORS } from "../data/brand";
import { ServiceIcon } from "./ServiceIcons";

const ABOUT_PHOTO = "/roofcofounders.png";

const services = [
  { name: "Roof Inspections", icon: "house" as const },
  { name: "Roof Repairs", icon: "shield" as const },
  { name: "Roof Replacements", icon: "roof" as const },
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
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.4fr)",
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
                    {s.name.split(" ")[0]}<br />{s.name.split(" ").slice(1).join(" ")}
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
        background: COLORS.fg,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(20,40,75,0.18)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 880px) 100vw, 50vw"
        style={{
          objectFit: "cover",
          objectPosition: "center 5%",
          transform: "scale(1.14)",
          transformOrigin: "center top",
        }}
      />
    </div>
  );
}

