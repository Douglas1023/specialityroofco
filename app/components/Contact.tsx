"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[var(--color-navy)] text-white relative overflow-hidden">
      {/* decorative roof line */}
      <svg
        className="absolute top-0 left-0 right-0 w-full opacity-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 0 L0 40 L240 10 L520 50 L760 5 L1040 45 L1280 8 L1440 50 L1440 0 Z"
          fill="rgba(255,255,255,0.5)"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="fade-up d1">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--color-orange)]">
              CONTACT US
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ready for a roof done right?
            </h2>
            <p className="mt-4 text-white/75 max-w-md">
              Free quotes, no pressure. Reach out and we&rsquo;ll have someone out for an
              inspection within 48 hours.
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow
                icon={<PhoneIcon />}
                label="Phone"
                value="(512) XXX-XXXX"
                href="tel:5125550000"
              />
              <ContactRow
                icon={<MailIcon />}
                label="Email"
                value="info@specialty-roofs.com"
                href="mailto:info@specialty-roofs.com"
              />
              <ContactRow
                icon={<PinIcon />}
                label="Office"
                value="5306 Beckett Circle, Austin, TX 78749"
              />
            </div>

            <div className="mt-10">
              <div className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-3">
                Follow Us
              </div>
              <div className="flex items-center gap-3">
                <SocialBtn href="#" label="LinkedIn"><LinkedInIcon /></SocialBtn>
                <SocialBtn href="#" label="Facebook"><FacebookIcon /></SocialBtn>
                <SocialBtn href="#" label="Instagram"><InstagramIcon /></SocialBtn>
              </div>
            </div>
          </div>

          <div className="fade-up d2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl bg-white text-[var(--color-text)] p-6 sm:p-8 shadow-2xl ring-1 ring-white/10"
            >
              <h3 className="text-xl font-extrabold text-[var(--color-navy)]">
                Get a free roof quote
              </h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                We&rsquo;ll get back to you within one business day.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
                <Field label="Address" name="address" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="mt-1.5 w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"
                  >
                    <option>Roof Inspection</option>
                    <option>Roof Repair</option>
                    <option>Roof Replacement</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-bold tracking-wide transition-colors"
              >
                {submitted ? "THANKS — WE'LL BE IN TOUCH" : "REQUEST FREE QUOTE"}
              </button>
              <p className="mt-3 text-[11px] text-[var(--color-text-muted)] text-center">
                By submitting, you agree to be contacted about your project. We never share your info.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]">
        {label} {required && <span className="text-[var(--color-orange)]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="h-11 w-11 shrink-0 rounded-xl bg-white/10 grid place-items-center text-[var(--color-orange)]">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">
          {label}
        </div>
        <div className="text-base font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:text-[var(--color-orange)] transition-colors">
      {inner}
    </a>
  ) : (
    inner
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-11 w-11 grid place-items-center rounded-xl bg-white/10 hover:bg-[var(--color-orange)] transition-colors"
    >
      {children}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.46 1.5-3.82 3.78-3.82 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
