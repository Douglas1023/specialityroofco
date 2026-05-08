const reviews = [
  {
    name: "Sarah M.",
    quote:
      "Specialty Roofing replaced our roof after a hailstorm and the whole process was painless. Crew was on time, friendly, and left the yard spotless.",
    initials: "SM",
  },
  {
    name: "Daniel K.",
    quote:
      "Got three quotes and theirs was the most thorough — they explained everything. Repair has held up through two storms with zero issues.",
    initials: "DK",
  },
  {
    name: "Priya R.",
    quote:
      "Honest, fair pricing and the work is excellent. They actually fixed the leak the first visit, unlike the last guys we hired.",
    initials: "PR",
  },
  {
    name: "Marcus L.",
    quote:
      "From inspection to final cleanup, top-tier service. You can tell they take pride in their work. Highly recommend.",
    initials: "ML",
  },
  {
    name: "Jen H.",
    quote:
      "Family-owned and you can feel it. They treated our home like their own. We&rsquo;ll never call anyone else for roofing in Austin.",
    initials: "JH",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[var(--color-blue-soft-2)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="text-center max-w-2xl mx-auto fade-up d1">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--color-orange)]">
            REVIEWS
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy)]">
            Our clients love us.
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Stars />
            <span className="text-sm font-semibold text-[var(--color-text-muted)]">
              4.9/5 from 200+ reviews
            </span>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className={`fade-up d${(i % 4) + 1} rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col`}
            >
              <Stars />
              <p
                className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${r.quote}&rdquo;` }}
              />
              <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[var(--color-orange)]/15 grid place-items-center text-[var(--color-orange)] text-xs font-bold">
                  {r.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--color-navy)]">{r.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                    Verified Customer
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-[var(--color-orange)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
