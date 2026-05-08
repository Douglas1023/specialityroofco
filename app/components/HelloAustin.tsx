export default function HelloAustin() {
  return (
    <section id="about" className="bg-[var(--color-cream-soft)] border-y border-[var(--color-line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-up d1 order-2 lg:order-1">
            <p className="text-[11px] font-bold tracking-[0.32em] uppercase text-[var(--color-orange)]">
              Our Story
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--color-navy)]">
              Hello, Austin Texas.
            </h2>
            <div className="mt-6 space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                We started Specialty Roofing because we were tired of the way most roofing
                companies were treating Texans — late, sloppy, overpriced, and quick to
                disappear when something went wrong.
              </p>
              <p>
                We&rsquo;re a family-owned crew, born and raised in Texas, putting roofs on
                homes the way we&rsquo;d want one put on ours: on time, with quality
                materials, and standing behind every nail we drive.
              </p>
              <p>
                If your last roofer ghosted you — welcome home.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#reviews"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[var(--color-navy)] font-bold border border-[var(--color-navy)]/15 hover:border-[var(--color-orange)] transition-colors"
              >
                <GoogleG /> See Our Google Reviews
              </a>
            </div>
          </div>

          <div className="fade-up d2 order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-[var(--color-line)] shadow-xl">
              <FoundersImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

function FoundersImage() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky-fnd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe0ee" />
          <stop offset="100%" stopColor="#e3edf5" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#sky-fnd)" />
      {/* horizon */}
      <rect x="0" y="380" width="400" height="120" fill="#c19a6c" />
      <Person x={140} skin="#d8a679" shirt="#a4c0d4" />
      <Person x={260} skin="#caa07c" shirt="#a8c5d8" />
    </svg>
  );
}

function Person({ x, skin, shirt }: { x: number; skin: string; shirt: string }) {
  return (
    <g transform={`translate(${x} 200)`}>
      {/* hat */}
      <ellipse cx="0" cy="-90" rx="36" ry="8" fill="#f4ecdc" />
      <path d="M -28 -90 Q 0 -118 28 -90 Z" fill="#f4ecdc" />
      <rect x="-16" y="-93" width="32" height="6" fill="#e08544" />
      {/* head */}
      <ellipse cx="0" cy="-58" rx="22" ry="28" fill={skin} />
      {/* shirt */}
      <path d="M -45 -28 L -45 90 L 45 90 L 45 -28 Q 25 -38 0 -38 Q -25 -38 -45 -28 Z" fill={shirt} />
      <path d="M -10 -32 L 0 -16 L 10 -32 Z" fill={skin} />
      {/* belt + pants */}
      <rect x="-45" y="92" width="90" height="10" fill="#5a3a25" />
      <path d="M -45 102 L -50 220 L -10 220 L -2 110 L 2 110 L 10 220 L 50 220 L 45 102 Z" fill="#f4ecdc" />
      <rect x="-50" y="215" width="40" height="20" fill="#3a2a1e" />
      <rect x="10" y="215" width="40" height="20" fill="#3a2a1e" />
    </g>
  );
}
