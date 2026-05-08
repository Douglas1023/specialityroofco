const tiles = [
  { kind: "house", palette: ["#3a2c22", "#211710"] },
  { kind: "crew", palette: ["#2c3543", "#1a2029"] },
  { kind: "house", palette: ["#4a3528", "#2c1f17"] },
  { kind: "house", palette: ["#3d2a1e", "#241710"] },
  { kind: "crew", palette: ["#2a3a52", "#172238"] },
  { kind: "house", palette: ["#5a3d2a", "#352010"] },
  { kind: "house", palette: ["#28323e", "#161e28"] },
  { kind: "crew", palette: ["#3f2c1d", "#241510"] },
];

export default function Gallery() {
  return (
    <section id="projects" className="bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-28">
        <div className="text-center max-w-2xl mx-auto fade-up d1">
          <p className="text-[11px] font-bold tracking-[0.32em] uppercase text-[var(--color-orange)]">
            Recent Work
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--color-navy)]">
            Roofs we&rsquo;re proud of.
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Every roof tells a story. Here&rsquo;s a few from around Austin.
          </p>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative">
        <div className="flex w-max gap-4 marquee-track">
          {[...tiles, ...tiles].map((t, i) => (
            <div
              key={i}
              className="h-72 w-96 rounded-2xl overflow-hidden ring-1 ring-[var(--color-line)] shrink-0"
            >
              {t.kind === "house" ? <HouseTile colors={t.palette} /> : <CrewTile colors={t.palette} />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 relative">
        <div className="flex w-max gap-4 marquee-track" style={{ animationDirection: "reverse", animationDuration: "50s" }}>
          {[...tiles.slice().reverse(), ...tiles.slice().reverse()].map((t, i) => (
            <div
              key={i}
              className="h-72 w-96 rounded-2xl overflow-hidden ring-1 ring-[var(--color-line)] shrink-0"
            >
              {t.kind === "house" ? <HouseTile colors={t.palette} /> : <CrewTile colors={t.palette} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HouseTile({ colors }: { colors: string[] }) {
  const [c1, c2] = colors;
  const id = c1.replace("#", "");
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`gsky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe0ee" />
          <stop offset="100%" stopColor="#e3edf5" />
        </linearGradient>
        <pattern id={`gsh-${id}`} x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
          <rect width="20" height="10" fill={c1} />
          <path d="M0 10 L10 5 L20 10" fill="none" stroke={c2} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={`url(#gsky-${id})`} />
      <circle cx="50" cy="200" r="42" fill="#1e3a5f" opacity="0.16" />
      <circle cx="360" cy="190" r="36" fill="#1e3a5f" opacity="0.14" />
      <rect x="80" y="170" width="240" height="100" fill="#ffffff" />
      <rect x="180" y="210" width="40" height="60" fill="#1e3a5f" />
      <rect x="110" y="190" width="40" height="40" fill="#cfe0ee" stroke="#1e3a5f" strokeWidth="1.5" />
      <rect x="250" y="190" width="40" height="40" fill="#cfe0ee" stroke="#1e3a5f" strokeWidth="1.5" />
      <polygon points="60,170 200,80 340,170" fill={`url(#gsh-${id})`} />
      <polygon points="60,170 200,80 340,170" fill="none" stroke="#0f1f38" strokeWidth="1.5" />
      <rect x="270" y="100" width="18" height="40" fill={c2} />
      <rect x="0" y="270" width="400" height="30" fill="#ebd8b6" />
    </svg>
  );
}

function CrewTile({ colors }: { colors: string[] }) {
  const [c1] = colors;
  const id = c1.replace("#", "");
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={`csh-${id}`} x="0" y="0" width="22" height="11" patternUnits="userSpaceOnUse">
          <rect width="22" height="11" fill={c1} />
          <path d="M0 11 L11 5 L22 11" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="#cfe0ee" />
      <circle cx="320" cy="60" r="40" fill="#f4d8a8" opacity="0.55" />
      <polygon points="0,300 0,160 400,90 400,300" fill={`url(#csh-${id})`} />
      <g transform="translate(120 130)">
        <ellipse cx="0" cy="-30" rx="18" ry="20" fill="#d8a679" />
        <rect x="-22" y="-12" width="44" height="50" rx="6" fill="#e08544" />
      </g>
      <g transform="translate(260 145)">
        <ellipse cx="0" cy="-30" rx="18" ry="20" fill="#caa07c" />
        <rect x="-22" y="-12" width="44" height="50" rx="6" fill="#1e3a5f" />
      </g>
    </svg>
  );
}
