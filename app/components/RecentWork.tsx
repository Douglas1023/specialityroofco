"use client";

import Image from "next/image";
import { COLORS, PROJECTS, type Project } from "../data/brand";

function ProjectImage({ palette }: { palette: [string, string] }) {
  const [c1, c2] = palette;
  const id = c1.replace("#", "");
  return (
    <svg
      viewBox="0 0 400 500"
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        transition: "transform 0.7s ease",
      }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe0ee" />
          <stop offset="100%" stopColor="#e3edf5" />
        </linearGradient>
        <pattern
          id={`sh-${id}`}
          x="0"
          y="0"
          width="22"
          height="11"
          patternUnits="userSpaceOnUse"
        >
          <rect width="22" height="11" fill={c1} />
          <path d="M0 11 L11 5 L22 11" fill="none" stroke={c2} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill={`url(#sky-${id})`} />
      <circle cx="60" cy="350" r="52" fill="#1e3a5f" opacity="0.18" />
      <circle cx="350" cy="320" r="62" fill="#1e3a5f" opacity="0.14" />
      <rect x="60" y="290" width="280" height="170" fill="#FAF6EE" />
      <rect x="60" y="290" width="280" height="170" fill="none" stroke="#1c2530" strokeWidth="1.5" />
      <rect x="180" y="370" width="40" height="90" fill="#1c2530" />
      <rect x="100" y="320" width="50" height="50" fill="#cfe0ee" stroke="#1c2530" strokeWidth="1.5" />
      <rect x="250" y="320" width="50" height="50" fill="#cfe0ee" stroke="#1c2530" strokeWidth="1.5" />
      <polygon points="40,290 200,160 360,290" fill={`url(#sh-${id})`} />
      <polygon points="40,290 200,160 360,290" fill="none" stroke="#0d1320" strokeWidth="1.5" />
      <rect x="270" y="190" width="20" height="50" fill={c2} />
      <rect x="0" y="460" width="400" height="40" fill="#EBD8B6" />
    </svg>
  );
}

function Card({ project, delay }: { project: Project; delay: number }) {
  return (
    <article
      className={`fade-up d${delay}`}
      style={{
        position: "relative",
        background: COLORS.bg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 12,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 18px 40px rgba(20,40,75,0.12)";
        const img = e.currentTarget.querySelector<SVGSVGElement>("svg");
        if (img) img.style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        const img = e.currentTarget.querySelector<SVGSVGElement>("svg");
        if (img) img.style.transform = "scale(1)";
      }}
    >
      <div style={{ aspectRatio: "4/5", overflow: "hidden", background: COLORS.soft2, position: "relative" }}>
        {project.photo ? (
          <Image
            src={project.photo}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        ) : (
          <ProjectImage palette={project.palette} />
        )}
      </div>
      <div style={{ padding: "20px 22px 22px" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: COLORS.accent,
            marginBottom: 6,
          }}
        >
          {project.type}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: COLORS.fg,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: 4,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
            color: COLORS.fgMuted,
          }}
        >
          {project.location}
        </p>
      </div>
    </article>
  );
}

export default function RecentWork() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px clamp(16px, 3vw, 48px)",
        background: COLORS.bgAlt,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 56,
          }}
        >
          <div>
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
              Recent Work
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
              Roofs we&rsquo;re <em style={{ color: COLORS.accent }}>proud of.</em>
            </h2>
          </div>
          <a
            href="#contact"
            className="fade-up d2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "12px 28px",
              border: `1px solid ${COLORS.fg}33`,
              borderRadius: 999,
              color: COLORS.fg,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.fg;
              e.currentTarget.style.color = COLORS.bg;
              e.currentTarget.style.borderColor = COLORS.fg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = COLORS.fg;
              e.currentTarget.style.borderColor = `${COLORS.fg}33`;
            }}
          >
            Get a Quote →
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {PROJECTS.map((p, i) => (
            <Card key={p.id} project={p} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
