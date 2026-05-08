export default function CTABanner() {
  return (
    <section className="bg-[var(--color-orange)] text-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 sm:py-20 text-center">
        <p className="fade-up d1 text-[11px] font-bold tracking-[0.32em] uppercase text-white/80">
          Free · No Pressure
        </p>
        <h2 className="fade-up d2 mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
          Get a free quote.
        </h2>
        <p className="fade-up d3 mt-3 text-white/85">Within 1 business day.</p>

        <div className="fade-up d3 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:5125550000"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-navy)] hover:bg-[var(--color-navy-deep)] text-white font-bold transition-colors"
          >
            <PhoneIcon /> (512) XXX-XXXX
          </a>
          <a
            href="#quote"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-white text-[var(--color-navy)] font-bold hover:bg-white/90 transition-colors"
          >
            Request Online
          </a>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
