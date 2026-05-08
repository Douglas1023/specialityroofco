"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND, COLORS } from "../data/brand";
import Logo from "./Logo";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? `${COLORS.bg}f0` : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "16px clamp(16px, 3vw, 32px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" aria-label="Specialty Roofing home" style={{ display: "flex", alignItems: "center" }}>
          <Logo width={isMobile ? 130 : 160} />
        </Link>

        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <ul style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none" }}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: COLORS.fg,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.fg; }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "12px 24px",
                background: COLORS.accent,
                color: COLORS.white,
                borderRadius: 999,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.accentDark; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = COLORS.accent; }}
            >
              Free Quote
            </a>
          </nav>
        )}

        {isMobile && (
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 40,
              height: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span style={{ display: "block", width: 22, height: 1.5, background: COLORS.fg, transition: "all 0.3s", transform: open ? "translateY(3.25px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 1.5, background: COLORS.fg, transition: "all 0.3s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", width: 22, height: 1.5, background: COLORS.fg, transition: "all 0.3s", transform: open ? "translateY(-3.25px) rotate(-45deg)" : "none" }} />
          </button>
        )}
      </div>

      {isMobile && open && (
        <div
          style={{
            background: COLORS.bg,
            borderTop: `1px solid ${COLORS.border}`,
            padding: "20px clamp(16px, 3vw, 32px)",
          }}
        >
          <ul style={{ display: "flex", flexDirection: "column", gap: 16, listStyle: "none" }}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: COLORS.fg,
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: 8 }}>
              <a
                href={BRAND.phoneHref}
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-block",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "12px 24px",
                  background: COLORS.accent,
                  color: COLORS.white,
                  borderRadius: 999,
                }}
              >
                Free Quote · {BRAND.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
