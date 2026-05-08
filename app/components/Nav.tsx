"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#reviews", label: "REVIEWS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* top utility bar */}
      <div className="hidden md:block bg-[var(--color-navy)] text-white text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:5125550000" className="hover:text-[var(--color-orange)] transition-colors">
              (512) XXX-XXXX
            </a>
            <a href="mailto:info@specialty-roofs.com" className="hover:text-[var(--color-orange)] transition-colors">
              info@specialty-roofs.com
            </a>
          </div>
          <div className="text-white/70">Built in Austin, TX</div>
        </div>
      </div>

      {/* main nav */}
      <nav
        className={`bg-white border-b border-black/5 transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center">
            <Logo />
          </a>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide text-[var(--color-navy)]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-[var(--color-orange)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-md bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white text-sm font-bold tracking-wide transition-colors"
            >
              ROOF QUOTE
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-navy)] hover:bg-black/5"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {open ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-black/5 bg-white">
            <ul className="px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-[var(--color-navy)]">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center px-5 py-2.5 rounded-md bg-[var(--color-orange)] text-white"
                >
                  ROOF QUOTE
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
