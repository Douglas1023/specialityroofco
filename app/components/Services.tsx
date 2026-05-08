const services = [
  {
    title: "Roof Inspections",
    desc: "Thorough top-to-bottom inspections that catch problems before they become expensive.",
    icon: "house",
  },
  {
    title: "Roof Repairs",
    desc: "Leak repairs, shingle replacement, flashing, and storm damage — fixed right the first time.",
    icon: "shield",
  },
  {
    title: "Roof Replacements",
    desc: "Full residential roof replacements with quality materials and a lasting warranty.",
    icon: "handshake",
  },
];

export default function Services() {
  return (
    <section id="projects" className="bg-[var(--color-cream-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="fade-up d1">
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--color-orange)]">
              SERVICES
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy)]">
              Built in Austin, TX.
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)] max-w-lg">
              Locally owned and operated. Every roof we install is built to handle Texas
              weather — heat, hail, and everything in between.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-orange)]/10 grid place-items-center text-[var(--color-orange)]">
                    {s.icon === "house" && <HouseIcon />}
                    {s.icon === "shield" && <ShieldIcon />}
                    {s.icon === "handshake" && <HandshakeIcon />}
                  </div>
                  <div className="mt-3 text-sm font-bold text-[var(--color-navy)] leading-tight">
                    {s.title}
                  </div>
                  <p className="mt-1.5 text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center px-6 py-3 rounded-md bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-bold tracking-wide transition-colors"
            >
              LEARN MORE
            </a>
          </div>

          <div className="fade-up d2">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-xl">
              <RooferIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HouseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function HandshakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l5-5 4 4 4-4 5 5" /><path d="M7 16l5 5 5-5" /><path d="M12 11v10" />
    </svg>
  );
}

function RooferIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="shingles2" x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
          <rect width="24" height="12" fill="#3a4a5e" />
          <path d="M0 12 L12 6 L24 12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="#cfe0ee" />
      <circle cx="320" cy="60" r="36" fill="#f4e7cc" />
      {/* roof slope */}
      <polygon points="0,300 0,180 400,80 400,300" fill="url(#shingles2)" />
      {/* worker */}
      <g transform="translate(180 130)">
        <ellipse cx="0" cy="-30" rx="20" ry="22" fill="#ebd8b6" />
        <rect x="-25" y="-12" width="50" height="60" rx="8" fill="#e08544" />
        <text x="0" y="22" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="800" fill="#fff">SPECIALTY</text>
        <rect x="-20" y="48" width="14" height="50" fill="#1e3a5f" />
        <rect x="6" y="48" width="14" height="50" fill="#1e3a5f" />
        {/* tool belt */}
        <rect x="-28" y="44" width="56" height="8" fill="#15294a" />
      </g>
    </svg>
  );
}
