import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-deep)] text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo variant="white" />
          <div className="text-xs">
            © {new Date().getFullYear()} Specialty Roofing. All rights reserved.
          </div>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Services</a>
          <a href="#reviews" className="hover:text-white">Reviews</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
