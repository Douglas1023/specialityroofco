"use client";

import Image from "next/image";
import { COLORS } from "../data/brand";
import { ServiceIcon } from "./ServiceIcons";

/**
 * Services section photo.
 * To swap: save your photo to /public/ (e.g. /public/services.jpg) and
 * change SERVICES_PHOTO to the new path. Recommended: ~3:2 landscape,
 * 1400x950+ for retina.
 */
const SERVICES_PHOTO = "/servicespic.png";

const services = [
  { name: "Roof Inspections", icon: "house" as const },
  { name: "Roof Repairs", icon: "shield" as const },
  { name: "Roof Replacements", icon: "roof" as const },
];

export default function ServicesBanners() {
  return (
    <section
      id="services"
      style={{
        padding: "120px clamp(16px, 3vw, 48px)",
        background: "linear-gradient(180deg, #DCE9F2 0%, #C0D5E5 100%)",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.3fr)",
            gap: "clamp(32px, 5vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* Left content */}
          <div className="fade-up d1">
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
              Services
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
                marginBottom: 56,
              }}
            >
              Built in Austin, TX
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 16,
                marginBottom: 44,
                maxWidth: 520,
              }}
            >
              {services.map((s) => (
                <div
                  key={s.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 14,
                    textAlign: "center",
                  }}
                >
                  <ServiceIcon kind={s.icon} size={84} />
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
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
              href="#contact"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "14px 28px",
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
              Learn More
            </a>
          </div>

          {/* Right photo */}
          <div className="fade-up d2">
            <PhotoFrame src={SERVICES_PHOTO} alt="Specialty Roofing crew member on a roof" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .services-grid { grid-template-columns: 1fr !important; }
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
        aspectRatio: "3 / 2",
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
        sizes="(max-width: 880px) 100vw, 60vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          transform: "scale(1.1)",
        }}
      />
    </div>
  );
}

