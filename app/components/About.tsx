export default function About() {
  return (
    <section id="about" className="bg-[var(--color-blue-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo card */}
          <div className="fade-up d1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-xl">
                <CrewIllustration />
              </div>
              <div className="absolute -top-4 -left-4 rounded-2xl bg-[var(--color-orange)] text-white px-4 py-2 shadow-lg text-xs font-bold tracking-widest uppercase">
                Family Owned
              </div>
            </div>
          </div>

          <div className="fade-up d2">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--color-orange)]">
              ABOUT US
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy)]">
              A roofing company you can trust.
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-xl">
              At Specialty Roofing, we believe a great roof starts with honest work and ends
              with a job done right. From residential repairs to full roof replacements, we
              deliver lasting results and a stress-free experience.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Pill icon={<HouseIcon />} label="Roof Inspections" />
              <Pill icon={<ShieldIcon />} label="Roof Repairs" />
              <Pill icon={<HandshakeIcon />} label="Replacements" />
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex items-center px-6 py-3 rounded-md bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-bold tracking-wide transition-colors"
            >
              LEARN MORE ABOUT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl bg-white/70 backdrop-blur p-3 flex flex-col items-center text-center gap-2 ring-1 ring-white">
      <div className="text-[var(--color-orange)]">{icon}</div>
      <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-navy)] leading-tight">
        {label}
      </div>
    </div>
  );
}

function HouseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function HandshakeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l5-5 4 4 4-4 5 5" /><path d="M7 16l5 5 5-5" /><path d="M12 11v10" />
    </svg>
  );
}

function CrewIllustration() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e3edf5" />
          <stop offset="100%" stopColor="#cfe0ee" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#bgGrad)" />
      {/* trees */}
      <circle cx="60" cy="340" r="50" fill="#1e3a5f" opacity="0.15" />
      <circle cx="340" cy="320" r="60" fill="#1e3a5f" opacity="0.12" />
      {/* two figures */}
      <g transform="translate(130 160)">
        <ellipse cx="0" cy="-40" rx="28" ry="32" fill="#ebd8b6" />
        <rect x="-40" y="-10" width="80" height="120" rx="14" fill="#1e3a5f" />
        <rect x="-40" y="-10" width="80" height="36" rx="6" fill="#e08544" />
        <text x="0" y="14" textAnchor="middle" fontFamily="Inter" fontSize="11" fontWeight="800" fill="#fff" letterSpacing="1">
          SPECIALTY
        </text>
        <rect x="-30" y="110" width="22" height="100" fill="#e3edf5" />
        <rect x="8" y="110" width="22" height="100" fill="#e3edf5" />
      </g>
      <g transform="translate(260 170)">
        <ellipse cx="0" cy="-40" rx="28" ry="32" fill="#ebd8b6" />
        <rect x="-40" y="-10" width="80" height="120" rx="14" fill="#1e3a5f" />
        <rect x="-40" y="-10" width="80" height="36" rx="6" fill="#e08544" />
        <text x="0" y="14" textAnchor="middle" fontFamily="Inter" fontSize="11" fontWeight="800" fill="#fff" letterSpacing="1">
          ROOFING
        </text>
        <rect x="-30" y="110" width="22" height="100" fill="#e3edf5" />
        <rect x="8" y="110" width="22" height="100" fill="#e3edf5" />
      </g>
      {/* ground */}
      <rect x="0" y="430" width="400" height="70" fill="#ebd8b6" />
    </svg>
  );
}
