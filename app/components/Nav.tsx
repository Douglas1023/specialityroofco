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

  // Close mobile menu on outside click
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
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <nav
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: condensed ? 56 : 86,
            padding: condensed ? "0 16px" : "0 clamp(20px, 4vw, 56px)",
            background: condensed
              ? "linear-gradient(180deg, rgba(220,233,242,0.95) 0%, rgba(192,213,229,0.95) 100%)"
              : "transparent",
            backdropFilter: condensed ? "blur(16px)" : "none",
            WebkitBackdropFilter: condensed ? "blur(16px)" : "none",
            border: condensed
              ? `1px solid ${COLORS.fg}1a`
              : "1px solid transparent",
            borderRadius: condensed ? 16 : 0,
            boxShadow: condensed
              ? "0 10px 30px rgba(20,40,75,0.10)"
              : "none",
            maxWidth: condensed ? "none" : 1440,
            margin: "0 auto",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            gap: 16,
          }}
        >
          {/* LEFT — links (full) / hamburger (condensed) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: condensed ? "0 0 auto" : 1,
              minWidth: 0,
              transition: "flex 0.6s ease",
            }}
          >
            {/* Hamburger — visible when condensed */}
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
                transition: "opacity 0.4s ease, width 0.4s ease",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: COLORS.fg,
                  borderRadius: 1,
                  transition: "all 0.3s",
                  transform: menuOpen
                    ? "translateY(3.25px) rotate(45deg)"
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
                  transition: "all 0.3s",
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
                  transition: "all 0.3s",
                  transform: menuOpen
                    ? "translateY(-3.25px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>

            {/* Left link group — fades out when condensed */}
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                listStyle: "none",
                width: condensed ? 0 : "100%",
                paddingRight: condensed ? 0 : 110,
                opacity: condensed ? 0 : 1,
                pointerEvents: condensed ? "none" : "auto",
                overflow: "hidden",
                transition: "opacity 0.3s ease, width 0.5s ease",
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

          {/* CENTER — logo */}
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

          {/* RIGHT — Reviews + Contact distribute like the left, pill pinned right */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: condensed ? "0 0 auto" : 1,
              minWidth: 0,
              paddingLeft: condensed ? 0 : 110,
              transition: "flex 0.6s ease, padding 0.4s ease",
            }}
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                listStyle: "none",
                flex: condensed ? "0 0 auto" : 1,
                width: condensed ? 0 : "auto",
                opacity: condensed ? 0 : 1,
                pointerEvents: condensed ? "none" : "auto",
                overflow: "hidden",
                transition: "opacity 0.3s ease, flex 0.5s ease, width 0.5s ease",
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
            <a
              href="#contact"
              style={{
                fontSize: condensed ? "0.7rem" : "0.92rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: condensed ? "9px 16px" : "14px 26px",
                background: COLORS.accent,
                color: COLORS.white,
                borderRadius: 999,
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                whiteSpace: "nowrap",
                display: "inline-block",
                marginLeft: condensed ? 0 : 24,
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
