type Props = { className?: string; variant?: "color" | "white" };

export default function Logo({ className = "", variant = "color" }: Props) {
  const main = variant === "white" ? "#ffffff" : "var(--color-orange)";
  const sub = variant === "white" ? "rgba(255,255,255,0.85)" : "var(--color-navy)";
  return (
    <div className={`select-none leading-none ${className}`}>
      <svg viewBox="0 0 220 70" className="h-11 w-auto" aria-label="Specialty Roofing">
        <path d="M70 10 L110 22 L150 10 L150 16 L110 28 L70 16 Z" fill={main} />
        <text
          x="110" y="48" textAnchor="middle"
          fontFamily="Bricolage Grotesque, Inter, sans-serif"
          fontSize="26" fontWeight="800" fontStyle="italic"
          fill={main} letterSpacing="-0.5"
        >Specialty</text>
        <text
          x="110" y="62" textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="8" fontWeight="700"
          fill={sub} letterSpacing="6"
        >ROOFING</text>
      </svg>
    </div>
  );
}
