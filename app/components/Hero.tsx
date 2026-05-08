export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden min-h-[78vh] flex items-center">
      {/* Background photo (placeholder) */}
      <div className="absolute inset-0 -z-10">
        <RoofBackdrop />
        {/* Dark gradient for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,30,55,0.55) 0%, rgba(15,30,55,0.65) 50%, rgba(15,30,55,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative w-full mx-auto max-w-5xl px-6 lg:px-10 py-20 sm:py-28 text-center text-white">
        <p className="fade-up d1 text-[11px] sm:text-xs font-bold tracking-[0.32em] uppercase text-[var(--color-cream)]">
          Austin · Round Rock · Cedar Park · Westlake
        </p>
        <h1 className="fade-up d2 mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.98] tracking-tight">
          Specialty Roofing
          <br />
          <span className="text-[var(--color-orange)]">Austin, TX</span>
        </h1>
        <p className="fade-up d3 mt-6 text-base sm:text-lg text-white/85 max-w-xl mx-auto">
          Honest work. Lasting roofs. Done right the first time.
        </p>

        <div className="fade-up d4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:5125550000"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white font-bold text-base transition-colors shadow-lg"
          >
            <PhoneIcon />
            (512) XXX-XXXX
          </a>
          <a
            href="#quote"
            className="inline-flex items-center px-7 py-4 rounded-full bg-white text-[var(--color-navy)] font-bold text-base hover:bg-white/90 transition-colors shadow-lg"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Trust strip */}
        <div className="fade-up d4 mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/75">
          <span className="flex items-center gap-2"><Stars /> 4.9 / 5 · 200+ Reviews</span>
          <span>· Licensed &amp; Insured</span>
          <span>· Family Owned</span>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5 text-[var(--color-orange)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/** Editorial roof scene — replace with a real photo at /public/hero.jpg */
function RoofBackdrop() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d5a7c" />
          <stop offset="100%" stopColor="#5a7ea3" />
        </linearGradient>
        <linearGradient id="hroof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3530" />
          <stop offset="100%" stopColor="#211e1b" />
        </linearGradient>
        <pattern id="hshingles" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <rect width="40" height="20" fill="url(#hroof)" />
          <path d="M0 20 L20 10 L40 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1600" height="900" fill="url(#hsky)" />
      <circle cx="1380" cy="180" r="200" fill="#f3e3c8" opacity="0.35" />
      <polygon points="0,900 0,540 1600,260 1600,900" fill="url(#hshingles)" />
    </svg>
  );
}
