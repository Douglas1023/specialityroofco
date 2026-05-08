import Logo from "./Logo";

const cols = [
  {
    title: "Company",
    links: [
      { href: "#about", label: "About Us" },
      { href: "#services", label: "Services" },
      { href: "#promise", label: "Our Promise" },
      { href: "#projects", label: "Recent Work" },
    ],
  },
  {
    title: "Get a Quote",
    links: [
      { href: "#quote", label: "Free Quote Form" },
      { href: "tel:5125550000", label: "(512) XXX-XXXX" },
      { href: "mailto:info@specialty-roofs.com", label: "info@specialty-roofs.com" },
    ],
  },
  {
    title: "Visit",
    links: [
      { href: "#", label: "5306 Beckett Circle" },
      { href: "#", label: "Austin, TX 78749" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-deep)] text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Logo variant="white" />
            <p className="mt-5 text-sm leading-relaxed">
              Family-owned roofing in Austin, TX. Built on honest work.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Social label="Instagram"><InstagramIcon /></Social>
              <Social label="Facebook"><FacebookIcon /></Social>
              <Social label="LinkedIn"><LinkedInIcon /></Social>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/55">
                {c.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-[var(--color-orange)] transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Specialty Roofing · Austin, TX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-[var(--color-orange)] transition-colors"
    >
      {children}
    </a>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.46 1.5-3.82 3.78-3.82 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.88h-2.34v6.99A10 10 0 0022 12z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}
