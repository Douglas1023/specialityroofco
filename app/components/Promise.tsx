const promises = [
  {
    n: "01",
    title: "Show up on time.",
    body:
      "Which really means ten minutes early. Your time matters. We treat the appointment window like a deadline, not a suggestion.",
    icon: "clock",
  },
  {
    n: "02",
    title: "Do what we say we'll do.",
    body:
      "Exceed expectations on every part of the job — from the first inspection to the last nail. No surprise charges. No phantom problems.",
    icon: "check",
  },
  {
    n: "03",
    title: "Leave it better than we found it.",
    body:
      "Your roof gets done right and your yard goes home spotless. Every nail picked up. Every shingle swept. Every gutter clear.",
    icon: "home",
  },
];

export default function Promise() {
  return (
    <section id="promise" className="bg-[var(--color-navy)] text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-28">
        <div className="text-center max-w-3xl mx-auto fade-up d1">
          <p className="text-[11px] font-bold tracking-[0.32em] uppercase text-[var(--color-orange)]">
            The Specialty Promise
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
            Three things you can count on.
          </h2>
          <p className="mt-4 text-white/70">
            We&rsquo;re not reinventing roofing — we&rsquo;re just doing it the way it should be done.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {promises.map((p, i) => (
            <article
              key={p.n}
              className={`fade-up d${(i % 3) + 1} relative bg-white/[0.04] backdrop-blur rounded-3xl p-8 ring-1 ring-white/10 hover:ring-[var(--color-orange)]/60 transition-colors`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.3em] text-[var(--color-orange)]">
                  {p.n}
                </span>
                <div className="h-12 w-12 grid place-items-center rounded-full bg-[var(--color-orange)]/15 text-[var(--color-orange)]">
                  {p.icon === "clock" && <ClockIcon />}
                  {p.icon === "check" && <CheckIcon />}
                  {p.icon === "home" && <HomeIcon />}
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}
