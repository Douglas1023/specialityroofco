export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[var(--color-navy)] text-white"
    >
      {/* Background gradient + texture */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1e3a5f 0%, #15294a 60%, #0f1f38 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(224,133,68,0.35), transparent 45%), radial-gradient(circle at 80% 30%, rgba(207,224,238,0.18), transparent 40%)",
          }}
        />
        {/* roof line silhouette */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 120 L0 80 L240 30 L520 80 L760 20 L1040 70 L1280 25 L1440 75 L1440 120 Z"
            fill="rgba(255,255,255,0.06)"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-44">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div className="fade-up d1">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)]" />
              Austin, TX • Family Owned
            </span>
            <h1 className="mt-6 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              A roof that&rsquo;s done <span className="text-[var(--color-orange)]">right</span>
              <br className="hidden sm:block" /> the first time.
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              From residential repairs to full roof replacements, Specialty Roofing delivers
              honest work, lasting results, and a stress-free experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3.5 rounded-md bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-bold tracking-wide transition-colors"
              >
                GET A FREE QUOTE
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/30 hover:border-white text-white font-semibold transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                Watch Our Story
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-white/70">
              <Stat label="5-Star Reviews" value="200+" />
              <div className="h-8 w-px bg-white/15" />
              <Stat label="Roofs Done" value="1,500+" />
              <div className="h-8 w-px bg-white/15" />
              <Stat label="Years in Austin" value="15" />
            </div>
          </div>

          {/* Right: stylized "card" of roof imagery */}
          <div className="fade-up d3 hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-[var(--color-blue-soft)] overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <RoofIllustration />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white text-[var(--color-navy)] px-5 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[var(--color-orange)]/15 grid place-items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">Licensed &amp; Insured</div>
                    <div className="text-sm font-bold">100% Satisfaction Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}

function RoofIllustration() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe0ee" />
          <stop offset="100%" stopColor="#e3edf5" />
        </linearGradient>
        <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#15294a" />
        </linearGradient>
        <pattern id="shingles" x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
          <rect width="20" height="10" fill="url(#roof)" />
          <path d="M0 10 L10 5 L20 10" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="url(#sky)" />
      {/* sun */}
      <circle cx="320" cy="100" r="50" fill="#f4e7cc" opacity="0.7" />
      <circle cx="320" cy="100" r="32" fill="#e08544" opacity="0.85" />
      {/* house body */}
      <rect x="60" y="280" width="280" height="180" fill="#ffffff" />
      <rect x="60" y="280" width="280" height="180" fill="none" stroke="#1e3a5f" strokeWidth="2" />
      {/* door */}
      <rect x="180" y="360" width="40" height="100" fill="#1e3a5f" />
      <circle cx="212" cy="412" r="2" fill="#e08544" />
      {/* windows */}
      <rect x="100" y="320" width="50" height="50" fill="#cfe0ee" stroke="#1e3a5f" strokeWidth="2" />
      <rect x="250" y="320" width="50" height="50" fill="#cfe0ee" stroke="#1e3a5f" strokeWidth="2" />
      {/* roof */}
      <polygon points="40,280 200,160 360,280" fill="url(#shingles)" />
      <polygon points="40,280 200,160 360,280" fill="none" stroke="#0f1f38" strokeWidth="2" />
      {/* chimney */}
      <rect x="270" y="190" width="22" height="50" fill="#15294a" />
      {/* worker on roof */}
      <g transform="translate(160 200) rotate(-25)">
        <circle cx="0" cy="-10" r="8" fill="#ebd8b6" />
        <rect x="-10" y="-2" width="20" height="22" rx="4" fill="#e08544" />
        <rect x="-2" y="20" width="6" height="14" fill="#1e3a5f" />
      </g>
      {/* ground */}
      <rect x="0" y="460" width="400" height="40" fill="#ebd8b6" />
    </svg>
  );
}
