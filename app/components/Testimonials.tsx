const reviews = [
  {
    quote: "Best roof I&rsquo;ve ever had. They showed up early, finished a day ahead, and you can&rsquo;t even tell they were here — except for the new roof.",
    name: "Sarah M.",
    location: "Cedar Park",
  },
  {
    quote: "Got three quotes after the hailstorm. Specialty was honest about what we did and didn&rsquo;t need. The other two tried to sell us a full replacement we didn&rsquo;t have to do.",
    name: "Daniel K.",
    location: "Westlake",
  },
  {
    quote: "Finally a roofer that actually fixes the leak. Two other companies came out and just kept charging me for &ldquo;mystery&rdquo; problems. One visit from Specialty and it&rsquo;s done.",
    name: "Priya R.",
    location: "South Austin",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[var(--color-blue-2)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-28">
        <div className="text-center max-w-2xl mx-auto fade-up d1">
          <p className="text-[11px] font-bold tracking-[0.32em] uppercase text-[var(--color-orange)]">
            Reviews
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--color-navy)]">
            What our neighbors say.
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <Stars />
            <span className="text-sm font-semibold text-[var(--color-muted)]">4.9 / 5 from 200+ reviews</span>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className={`fade-up d${(i % 3) + 1} bg-white rounded-3xl p-7 ring-1 ring-black/5 shadow-sm flex flex-col`}
            >
              <Stars />
              <p
                className="mt-4 text-[15px] leading-relaxed text-[var(--color-text)] flex-1"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${r.quote}&rdquo;` }}
              />
              <div className="mt-6 pt-5 border-t border-[var(--color-line)] flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[var(--color-orange)]/15 grid place-items-center text-[var(--color-orange)] font-bold text-sm">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-navy)]">{r.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">{r.location}, TX</p>
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
    <span className="inline-flex items-center gap-0.5 text-[var(--color-orange)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}
