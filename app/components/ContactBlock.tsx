"use client";

import { useState } from "react";
import { BRAND, COLORS } from "../data/brand";

const SERVICE_CATEGORIES = [
  {
    id: "inspection",
    label: "Inspection & Assessment",
    subs: [
      "Routine roof inspections",
      "Pre-purchase / real estate inspections",
      "Insurance claim inspections",
      "Drone or infrared moisture inspections",
    ],
  },
  {
    id: "repair",
    label: "Repair Services",
    subs: [
      "Leak detection and repair",
      "Shingle replacement",
      "Flashing repair (chimneys, vents, skylights)",
      "Soffit and fascia repair",
      "Chimney repair and re-flashing",
      "Skylight repair or replacement",
      "Sagging roof repair",
    ],
  },
  {
    id: "replacement",
    label: "Replacement & Installation",
    subs: [
      "Full roof replacement (tear-off and reroof)",
      "Roof-overs (installing over existing roof)",
      "New construction roofing",
      "Asphalt shingle install",
      "Metal roof install",
      "Tile / slate / wood shake install",
      "Flat / TPO / EPDM install",
    ],
  },
  {
    id: "storm",
    label: "Storm & Emergency",
    subs: [
      "Hail damage repair",
      "Wind damage repair",
      "Tree impact repair",
      "Emergency tarping",
      "Insurance claim assistance",
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance & Cleaning",
    subs: [
      "Gutter cleaning, repair, and installation",
      "Moss, algae, and lichen removal",
      "Roof washing / soft washing",
      "Debris removal",
      "Annual maintenance plans",
    ],
  },
  {
    id: "weatherproofing",
    label: "Weatherproofing & Efficiency",
    subs: [
      "Attic ventilation installation",
      "Insulation upgrades",
      "Ice dam prevention and removal",
      "Waterproofing and sealing",
      "Cool roof or reflective coatings",
      "Solar panel installation or coordination",
    ],
  },
  {
    id: "specialty",
    label: "Specialty & Commercial",
    subs: [
      "Flat / low-slope commercial roofing",
      "Green / living roof installation",
      "Snow removal",
      "Roof coatings and restoration",
      "Historic roof restoration",
    ],
  },
];

export default function ContactBlock() {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("");
  const [subService, setSubService] = useState("");
  const selectedCat = SERVICE_CATEGORIES.find((c) => c.id === category);

  return (
    <section
      id="contact"
      style={{
        padding: "120px clamp(16px, 3vw, 48px)",
        background: COLORS.bg,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
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
            Free Quote · No Pressure
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
              marginBottom: 14,
            }}
          >
            Tell us about your <em style={{ color: COLORS.accent }}>roof.</em>
          </h2>
          <p
            className="fade-up d2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: COLORS.fgMuted,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            We&rsquo;ll get back to you within one business day with a no-pressure quote.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
            gap: 32,
          }}
          className="contact-grid"
        >
          {/* Contact info */}
          <div className="fade-up d2" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Row label="Phone" value={BRAND.phone} href={BRAND.phoneHref} />
            <Row label="Email" value={BRAND.email} href={BRAND.emailHref} />
            <Row label="Office" value={BRAND.address} />
            <div style={{ marginTop: 12 }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: COLORS.fgMuted,
                  marginBottom: 12,
                }}
              >
                Follow Us
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <Social href={BRAND.instagram} label="Instagram"><InstagramIcon /></Social>
                <Social href={BRAND.facebook} label="Facebook"><FacebookIcon /></Social>
                <Social href={BRAND.google} label="Google Reviews"><GoogleIcon /></Social>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            className="fade-up d3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{
              padding: "36px 32px",
              background: COLORS.bgAlt,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 16,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required full />
              <Field label="Address" name="address" full />
              <div style={{ gridColumn: "1 / -1" }}>
                <Label>Service Needed</Label>
                {/* Category dropdown */}
                <select
                  name="service_category"
                  value={category}
                  onChange={(e) => { setCategory(e.target.value); setSubService(""); }}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: COLORS.bg,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 8,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    color: category ? COLORS.fg : COLORS.fgMuted,
                    marginBottom: selectedCat ? 14 : 0,
                    cursor: "pointer",
                  }}
                >
                  <option value="">Select a service category…</option>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>

                {/* Sub-options */}
                {selectedCat && (
                  <div
                    style={{
                      padding: "14px 16px",
                      background: COLORS.bg,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 10,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.58rem",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: COLORS.fgMuted,
                        marginBottom: 10,
                      }}
                    >
                      Specify
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {selectedCat.subs.map((sub) => (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => setSubService(sub)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: 999,
                            border: `1px solid ${subService === sub ? COLORS.accent : COLORS.border}`,
                            background: subService === sub ? `${COLORS.accent}1a` : "transparent",
                            color: subService === sub ? COLORS.accent : COLORS.fgMuted,
                            fontFamily: "var(--font-body)",
                            fontSize: "0.75rem",
                            fontWeight: subService === sub ? 700 : 400,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <input type="hidden" name="service_detail" value={subService} />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Label>Anything else?</Label>
                <textarea
                  name="message"
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: COLORS.bg,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 8,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.92rem",
                    color: COLORS.fg,
                    resize: "none",
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                marginTop: 22,
                width: "100%",
                padding: "16px 28px",
                background: submitted ? COLORS.fg : COLORS.accent,
                color: COLORS.white,
                fontFamily: "var(--font-body)",
                fontSize: "0.74rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                borderRadius: 999,
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!submitted) e.currentTarget.style.background = COLORS.accentDark;
              }}
              onMouseLeave={(e) => {
                if (!submitted) e.currentTarget.style.background = COLORS.accent;
              }}
            >
              {submitted ? "Thanks — we'll be in touch" : "Request Free Quote"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: COLORS.fgMuted,
          marginBottom: 6,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.15rem",
          fontWeight: 500,
          color: COLORS.fg,
          letterSpacing: "-0.005em",
          lineHeight: 1.35,
        }}
      >
        {value}
      </p>
    </>
  );
  return href ? (
    <a
      href={href}
      style={{ display: "block", transition: "color 0.2s ease" }}
      onMouseEnter={(e) => { (e.currentTarget.querySelector("p:last-child") as HTMLElement).style.color = COLORS.accent; }}
      onMouseLeave={(e) => { (e.currentTarget.querySelector("p:last-child") as HTMLElement).style.color = COLORS.fg; }}
    >
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "0.6rem",
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: COLORS.fg,
        marginBottom: 6,
      }}
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  full,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <div style={{ gridColumn: full ? "1 / -1" : undefined }}>
      <Label>
        {label} {required && <span style={{ color: COLORS.accent }}>*</span>}
      </Label>
      <input
        name={name}
        type={type}
        required={required}
        style={{
          width: "100%",
          padding: "12px 14px",
          background: COLORS.bg,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 8,
          fontFamily: "var(--font-body)",
          fontSize: "0.92rem",
          color: COLORS.fg,
        }}
      />
    </div>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: 40,
        height: 40,
        display: "grid",
        placeItems: "center",
        borderRadius: "50%",
        background: COLORS.bgAlt,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.fg,
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = COLORS.accent;
        e.currentTarget.style.color = COLORS.white;
        e.currentTarget.style.borderColor = COLORS.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = COLORS.bgAlt;
        e.currentTarget.style.color = COLORS.fg;
        e.currentTarget.style.borderColor = COLORS.border;
      }}
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.46 1.5-3.82 3.78-3.82 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z" />
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24">
      <path fill="currentColor" d="M21.35 11.1H12v3.83h5.36c-.5 2.4-2.5 3.5-5.36 3.5a6 6 0 010-12 5.4 5.4 0 013.84 1.5l2.83-2.83A9.46 9.46 0 0012 2.5a9.5 9.5 0 109.35 8.6z" />
    </svg>
  );
}
