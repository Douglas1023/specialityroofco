export default function FounderNote() {
  return (
    <section className="bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 py-24 sm:py-28 text-center">
        <p className="fade-up d1 text-[11px] font-bold tracking-[0.32em] uppercase text-[var(--color-orange)]">
          A Note From The Owners
        </p>
        <h2 className="fade-up d2 mt-5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.2] tracking-tight text-[var(--color-navy)]">
          &ldquo;World-class roofing at a fair price — that&rsquo;s the whole job.
          <br />
          We don&rsquo;t finish until you&rsquo;re happy.&rdquo;
        </h2>

        <div className="fade-up d3 mt-10 flex flex-col items-center gap-2">
          <Signature />
          <p className="text-sm font-semibold text-[var(--color-navy)] tracking-wide">
            The Specialty Roofing Family
          </p>
          <p className="text-xs text-[var(--color-muted)]">Owners · Austin, TX</p>
        </div>
      </div>
    </section>
  );
}

function Signature() {
  return (
    <svg viewBox="0 0 240 70" className="h-12 w-auto text-[var(--color-navy)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M10 45 C 25 20, 40 60, 55 30 C 70 5, 85 50, 100 25 Q 115 50 130 30 T 160 35 T 195 30 L 220 40" strokeLinejoin="round" />
      <path d="M40 50 L 170 50" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
