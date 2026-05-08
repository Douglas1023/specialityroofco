const projects = [
  { title: "Cedar Park Replacement", type: "Full Replacement", palette: ["#7a4a36", "#5a3a2a"] },
  { title: "Westlake Repair", type: "Storm Damage", palette: ["#3d4856", "#2a313c"] },
  { title: "South Austin Reroof", type: "Full Replacement", palette: ["#5a4034", "#3e2c24"] },
  { title: "Round Rock Inspection", type: "Inspection", palette: ["#8a5a3d", "#6a4530"] },
  { title: "East Side Repair", type: "Leak Repair", palette: ["#4a5566", "#333d4a"] },
];

export default function RecentProjects() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="flex items-end justify-between gap-6 mb-10 fade-up d1">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--color-orange)]">
              PORTFOLIO
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy)]">
              Recent Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors"
          >
            View all <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`fade-up d${(i % 4) + 1} group rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-lg transition-all`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-blue-soft)]">
                <ProjectIllustration colors={p.palette} />
              </div>
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-wider text-[var(--color-orange)] font-bold">
                  {p.type}
                </div>
                <div className="mt-1 text-sm font-bold text-[var(--color-navy)]">
                  {p.title}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectIllustration({ colors }: { colors: string[] }) {
  const [c1, c2] = colors;
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`sky-${c1}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe0ee" />
          <stop offset="100%" stopColor="#e3edf5" />
        </linearGradient>
        <pattern id={`sh-${c1}`} x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
          <rect width="20" height="10" fill={c1} />
          <path d="M0 10 L10 5 L20 10" fill="none" stroke={c2} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={`url(#sky-${c1})`} />
      {/* trees */}
      <circle cx="40" cy="200" r="40" fill="#1e3a5f" opacity="0.15" />
      <circle cx="370" cy="190" r="35" fill="#1e3a5f" opacity="0.12" />
      {/* house */}
      <rect x="80" y="170" width="240" height="100" fill="#ffffff" />
      <rect x="80" y="170" width="240" height="100" fill="none" stroke="#1e3a5f" strokeWidth="1.5" />
      <rect x="180" y="210" width="40" height="60" fill="#1e3a5f" />
      <rect x="110" y="190" width="40" height="40" fill="#cfe0ee" stroke="#1e3a5f" strokeWidth="1.5" />
      <rect x="250" y="190" width="40" height="40" fill="#cfe0ee" stroke="#1e3a5f" strokeWidth="1.5" />
      {/* roof */}
      <polygon points="60,170 200,80 340,170" fill={`url(#sh-${c1})`} />
      <polygon points="60,170 200,80 340,170" fill="none" stroke="#0f1f38" strokeWidth="1.5" />
      <rect x="270" y="100" width="18" height="40" fill={c2} />
      {/* ground */}
      <rect x="0" y="270" width="400" height="30" fill="#ebd8b6" />
    </svg>
  );
}
