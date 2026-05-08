"use client";

import { useState } from "react";

const serviceOptions = [
  "Roof Inspection",
  "Roof Repair",
  "Full Replacement",
  "Storm Damage",
  "Leak Repair",
  "Gutter Service",
  "Skylight Repair",
  "Flashing Repair",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [services, setServices] = useState<string[]>([]);

  function toggle(s: string) {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  return (
    <section id="quote" className="bg-[var(--color-blue)]">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 sm:py-24">
        <div className="text-center max-w-2xl mx-auto fade-up d1">
          <p className="text-[11px] font-bold tracking-[0.32em] uppercase text-[var(--color-orange)]">
            Free Quote
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--color-navy)]">
            Tell us about your roof.
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            We&rsquo;ll get back to you within one business day with a no-pressure quote.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-10 bg-white rounded-3xl p-6 sm:p-10 shadow-xl ring-1 ring-black/5 fade-up d2"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Address" name="address" />
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--color-navy)]">
              Service Needed (select all that apply)
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {serviceOptions.map((s) => {
                const active = services.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggle(s)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                      active
                        ? "bg-[var(--color-orange)] border-[var(--color-orange)] text-white"
                        : "bg-white border-[var(--color-line)] text-[var(--color-navy)] hover:border-[var(--color-orange)]"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <Select label="How urgent?" name="urgency" options={["Within a week", "Within a month", "Just exploring"]} />
            <Select label="How did you hear about us?" name="referral" options={["Google", "Friend / Neighbor", "Facebook", "Instagram", "Other"]} />
          </div>

          <div className="mt-8">
            <label className="block text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--color-navy)]">
              Anything else we should know?
            </label>
            <textarea
              name="message"
              rows={3}
              className="mt-2 w-full rounded-xl border border-[var(--color-line)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] resize-none"
            />
          </div>

          <label className="mt-6 flex items-start gap-3 text-xs text-[var(--color-muted)]">
            <input type="checkbox" defaultChecked className="mt-0.5 accent-[var(--color-orange)]" />
            <span>
              I agree to be contacted about my project by phone, email, or text. We never share your info.
            </span>
          </label>

          <button
            type="submit"
            className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-bold tracking-wide transition-colors shadow-lg"
          >
            {submitted ? "Thanks — we'll be in touch within 1 business day" : "Request My Free Quote"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--color-navy)]">
        {label} {required && <span className="text-[var(--color-orange)]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-[var(--color-line)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--color-navy)]">
        {label}
      </label>
      <select
        name={name}
        className="mt-2 w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
