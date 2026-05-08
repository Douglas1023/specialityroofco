const services = [
  "Roof Inspections",
  "Roof Repairs",
  "Full Roof Replacements",
  "Storm &amp; Hail Damage",
  "Leak Repairs",
  "Shingle Replacement",
  "Flashing Repair",
  "Gutter Cleaning",
  "Skylight Service",
  "Insurance Claims",
  "Emergency Tarping",
  "Roof Maintenance",
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-up d1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-[var(--color-line)] bg-[var(--color-blue-2)]">
              <RooferImage />
            </div>
          </div>

          <div className="fade-up d2">
            <p className="text-[11px] font-bold tracking-[0.32em] uppercase text-[var(--color-orange)]">
              Our Services
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--color-navy)]">
              We take pride in our work, no matter the project.
            </h2>
            <p className="mt-5 text-[var(--color-muted)] max-w-md">
              From a single missing shingle to a complete tear-off and replacement,
              every job gets the same attention to detail and the same lifetime-craftsmanship guarantee.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 max-w-md">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#quote"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors"
                    dangerouslySetInnerHTML={{
                      __html: `<span class="h-1.5 w-1.5 rounded-full bg-[var(--color-orange)] group-hover:scale-125 transition-transform inline-block" style="display:inline-block"></span> ${s}`,
                    }}
                  />
                </li>
              ))}
            </ul>

            <a
              href="#quote"
              className="mt-10 inline-flex items-center px-6 py-3 rounded-full bg-[var(--color-navy)] hover:bg-[var(--color-navy-deep)] text-white font-bold transition-colors"
            >
              Get a Free Quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RooferImage() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-svc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe0ee" />
          <stop offset="100%" stopColor="#e3edf5" />
        </linearGradient>
        <pattern id="sh-svc" x="0" y="0" width="22" height="11" patternUnits="userSpaceOnUse">
          <rect width="22" height="11" fill="#3a3530" />
          <path d="M0 11 L11 5 L22 11" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="url(#sky-svc)" />
      <circle cx="320" cy="80" r="50" fill="#f4d8a8" opacity="0.5" />
      {/* roof slope */}
      <polygon points="0,500 0,320 400,180 400,500" fill="url(#sh-svc)" />
      {/* worker */}
      <g transform="translate(200 280)">
        <ellipse cx="0" cy="-50" rx="22" ry="26" fill="#d8a679" />
        <rect x="-30" y="-26" width="60" height="70" rx="10" fill="#e08544" />
        <rect x="-30" y="-26" width="60" height="14" fill="#1e3a5f" />
        <text x="0" y="14" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="800" fill="#fff">SPECIALTY</text>
        <rect x="-22" y="44" width="20" height="60" fill="#f4ecdc" />
        <rect x="2" y="44" width="20" height="60" fill="#f4ecdc" />
        <rect x="-30" y="40" width="60" height="8" fill="#3a2218" />
      </g>
    </svg>
  );
}
