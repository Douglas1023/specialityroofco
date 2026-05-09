"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BRAND, COLORS } from "../data/brand";

const leftLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
];

const rightLinks = [
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const condensed = scrolled || isMobile;

  const linkStyle: React.CSSProperties = {
    fontSize: "0.98rem",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: COLORS.fg,
    transition: "color 0.2s ease",
    whiteSpace: "nowrap",
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: condensed ? "12px 12px" : "0",
        background: condensed
          ? "transparent"
          : "linear-gradient(180deg, #DCE9F2 0%, #C0D5E5 100%)",
        transition:
          "padding 0.6s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease",
      }}
    >
      <div
        ref={menuRef}
        style={{
          width: condensed ? (isMobile ? "100%" : "min(58vw, 720px)") : "100%",
          minWidth: condensed ? 280 : "auto",
          transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <nav
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: condensed ? 56 : 86,
            padding: condensed ? "0 16px" : "0 clamp(20px, 4vw, 56px)",
            background: condensed
              ? "linear-gradient(180deg, rgba(220,233,242,0.45) 0%, rgba(192,213,229,0.45) 100%)"
              : "transparent",
            backdropFilter: condensed ? "blur(20px) saturate(140%)" : "none",
            WebkitBackdropFilter: condensed ? "blur(20px) saturate(140%)" : "none",
            border: condensed
              ? `1px solid ${COLORS.fg}1a`
              : "1px solid transparent",
            borderRadius: condensed ? 16 : 0,
            boxShadow: condensed
              ? "0 10px 30px rgba(20,40,75,0.10)"
              : "none",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* LEFT — flex:1 always; only opacity/width inside transition */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              minWidth: 0,
            }}
          >
            {/* Hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                width: condensed ? 40 : 0,
                height: 40,
                opacity: condensed ? 1 : 0,
                pointerEvents: condensed ? "auto" : "none",
                overflow: "hidden",
                flexShrink: 0,
                transition:
                  "opacity 0.4s ease, width 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: COLORS.fg,
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? "translateY(6.5px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: COLORS.fg,
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: COLORS.fg,
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>

            {/* Left links — opacity only, no layout changes */}
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                listStyle: "none",
                flex: 1,
                margin: 0,
                paddingRight: 110,
                opacity: condensed ? 0 : 1,
                pointerEvents: condensed ? "none" : "auto",
                transition: "opacity 0.35s ease",
              }}
            >
              {leftLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = COLORS.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = COLORS.fg;
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER — logo, absolute */}
          <Link
            href="/"
            aria-label="Specialty Roofing home"
            style={{
              flexShrink: 0,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/logo-orange.png"
              alt="Specialty Roofing"
              width={170}
              height={75}
              priority
              style={{
                width: "auto",
                height: condensed ? 36 : 70,
                transition: "height 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "block",
              }}
            />
          </Link>

          {/* RIGHT — flex:1 always; pill anchored to right edge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              minWidth: 0,
              paddingLeft: 110,
              justifyContent: "flex-end",
            }}
          >
            {/* Right links — opacity only, no layout changes */}
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                listStyle: "none",
                flex: 1,
                margin: 0,
                padding: 0,
                opacity: condensed ? 0 : 1,
                pointerEvents: condensed ? "none" : "auto",
                transition: "opacity 0.35s ease",
              }}
            >
              {rightLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = COLORS.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = COLORS.fg;
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Roof Quote — always in DOM, transitions size only */}
            <a
              href="#contact"
              style={{
                fontSize: isMobile ? "0.55rem" : condensed ? "0.7rem" : "0.92rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: isMobile ? "6px 10px" : condensed ? "9px 16px" : "14px 26px",
                background: COLORS.accent,
                color: COLORS.white,
                borderRadius: 999,
                transition: "font-size 0.5s cubic-bezier(0.16, 1, 0.3, 1), padding 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease",
                whiteSpace: "nowrap",
                display: "inline-block",
                marginLeft: 12,
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.accentDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.accent;
              }}
            >
              Roof Quote
            </a>
          </div>
        </nav>

        {/* Dropdown menu when condensed + open */}
        {condensed && menuOpen && (
          <div
            style={{
              marginTop: 8,
              padding: "20px 24px",
              background: COLORS.soft,
              border: `1px solid ${COLORS.fg}1a`,
              borderRadius: 16,
              boxShadow: "0 10px 30px rgba(20,40,75,0.10)",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                listStyle: "none",
              }}
            >
              {[...leftLinks, ...rightLinks].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={linkStyle}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li
                style={{
                  marginTop: 8,
                  paddingTop: 14,
                  borderTop: `1px solid ${COLORS.fg}1a`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: COLORS.fgMuted,
                  }}
                >
                  Call Us
                </span>
                <a
                  href={BRAND.phoneHref}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: COLORS.fg,
                  }}
                >
                  {BRAND.phone}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
