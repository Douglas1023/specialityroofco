"use client";

import { useEffect, useState } from "react";
import { COLORS, SERVICES, type Service } from "../data/brand";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const c = () => setM(window.innerWidth < 900);
    c();
    window.addEventListener("resize", c);
    return () => window.removeEventListener("resize", c);
  }, []);
  return m;
}

function ServiceBanner({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();
  const isEven = index % 2 === 0;

  const isDark = service.bgColor === COLORS.dark;
  const bg = service.bgColor;
  const fg = service.fgColor;
  const muted = isDark ? `${COLORS.bg}99` : `${COLORS.fg}99`;
  const accent = isDark ? COLORS.accent : COLORS.accent;
  const linkBorder = isDark ? `${COLORS.bg}66` : `${COLORS.fg}55`;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: bg,
        minHeight: isMobile ? "auto" : "clamp(280px, 42vh, 420px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile ? "56px 24px" : "0 clamp(36px, 7vw, 96px)",
        alignItems: isMobile ? "flex-start" : isEven ? "flex-start" : "flex-end",
        overflow: "hidden",
        transition: "background 0.4s ease",
      }}
    >
      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at ${isEven ? "18% 55%" : "82% 45%"}, ${accent}1f, transparent 55%)`,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Decorative circle */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            ...(isEven ? { right: "8%" } : { left: "8%" }),
            top: "50%",
            transform: "translateY(-50%)",
            width: 200,
            height: 200,
            border: `1px solid ${isDark ? `${COLORS.bg}1f` : `${COLORS.accent}25`}`,
            borderRadius: "50%",
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 540,
          textAlign: isMobile ? "left" : isEven ? "left" : "right",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            fontWeight: 400,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: accent,
            background: `${accent}1c`,
            padding: "5px 12px",
            marginBottom: 18,
          }}
        >
          {service.tag}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "clamp(1.8rem, 7vw, 2.4rem)" : "clamp(2.2rem, 4vw, 3.4rem)",
            fontWeight: 600,
            color: fg,
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
            marginBottom: 16,
            transform: hovered ? `translateX(${isEven ? 6 : -6}px)` : "translateX(0)",
            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {service.name}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: muted,
            marginBottom: 22,
          }}
          dangerouslySetInnerHTML={{ __html: service.description }}
        />
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 28,
            justifyContent: !isMobile && !isEven ? "flex-end" : "flex-start",
          }}
        >
          {service.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: fg,
                background: isDark ? `${COLORS.bg}10` : `${COLORS.fg}08`,
                padding: "6px 12px",
                borderRadius: 999,
              }}
              dangerouslySetInnerHTML={{ __html: b }}
            />
          ))}
        </ul>
        <a
          href="#contact"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: fg,
            paddingBottom: 4,
            borderBottom: `1.5px solid ${linkBorder}`,
            transition: "border-color 0.3s ease",
          }}
        >
          Request Quote →
        </a>
      </div>
    </article>
  );
}

export default function ServicesBanners() {
  return (
    <section id="services" style={{ padding: "100px 0 0", background: COLORS.bg }}>
      <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 56 }}>
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
          What We Do
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
          }}
        >
          Three things, done <em style={{ color: COLORS.accent }}>well.</em>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {SERVICES.map((s, i) => (
          <ServiceBanner key={s.id} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
