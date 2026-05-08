type LogoProps = {
  className?: string;
  variant?: "color" | "white";
};

export default function Logo({ className = "", variant = "color" }: LogoProps) {
  const fill = variant === "white" ? "#ffffff" : "var(--color-orange)";
  const stroke = variant === "white" ? "#ffffff" : "var(--color-orange)";
  const cream = variant === "white" ? "#ffffff" : "var(--color-cream-soft)";
  return (
    <div className={`flex flex-col items-center leading-none select-none ${className}`}>
      <svg
        viewBox="0 0 200 80"
        className="h-10 sm:h-12 w-auto"
        aria-label="Specialty Roofing"
      >
        <defs>
          <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fill} />
            <stop offset="100%" stopColor={stroke} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        {/* House silhouette */}
        <path
          d="M40 38 L100 12 L160 38 L160 44 L100 18 L40 44 Z"
          fill="url(#roofGrad)"
        />
        <rect x="148" y="22" width="6" height="14" fill="url(#roofGrad)" />
        {/* Wordmark "Specialty" */}
        <text
          x="100"
          y="60"
          textAnchor="middle"
          fontFamily="Bricolage Grotesque, Inter, sans-serif"
          fontSize="22"
          fontWeight="800"
          fontStyle="italic"
          fill={fill}
          letterSpacing="-0.5"
        >
          Specialty
        </text>
        {/* Subtext "ROOFING" */}
        <text
          x="100"
          y="74"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill={cream}
          letterSpacing="6"
        >
          ROOFING
        </text>
      </svg>
    </div>
  );
}
