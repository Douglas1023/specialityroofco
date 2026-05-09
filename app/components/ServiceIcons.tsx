import Image from "next/image";

type Props = { size?: number; color?: string; strokeWidth?: number };

const defaults = {
  size: 72,
  color: "currentColor",
  strokeWidth: 1.4,
};

export function HouseIcon({ size = defaults.size, color, strokeWidth = defaults.strokeWidth }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Roof */}
      <path d="M8 30 L32 10 L56 30" />
      {/* Chimney */}
      <path d="M44 16 L44 24" />
      {/* Walls */}
      <path d="M14 28 L14 54 L50 54 L50 28" />
      {/* Door */}
      <path d="M27 54 L27 40 L37 40 L37 54" />
      {/* Door handle */}
      <circle cx="34" cy="47" r="0.6" fill={color || "currentColor"} stroke="none" />
      {/* Left window */}
      <rect x="19" y="34" width="6" height="6" />
      {/* Right window */}
      <rect x="39" y="34" width="6" height="6" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = defaults.size, color, strokeWidth = defaults.strokeWidth }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Shield silhouette */}
      <path d="M32 6 L52 14 L52 30 C52 42 44 52 32 56 C20 52 12 42 12 30 L12 14 Z" />
      {/* Inner outline for depth */}
      <path
        d="M32 12 L46 18 L46 30 C46 39 40 46 32 49 C24 46 18 39 18 30 L18 18 Z"
        opacity="0.35"
      />
      {/* Check */}
      <path d="M24 31 L29.5 36.5 L41 25" strokeWidth={strokeWidth + 0.4} />
    </svg>
  );
}

export function RoofIcon({ size = defaults.size, color, strokeWidth = defaults.strokeWidth }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer roof silhouette */}
      <path d="M4 54 L32 10 L60 54" strokeWidth={strokeWidth * 1.3} />

      {/* Left half — shingle columns parallel to left slope */}
      <line x1="10" y1="54" x2="32" y2="19" />
      <line x1="16" y1="54" x2="32" y2="28" />
      <line x1="22" y1="54" x2="32" y2="37" />
      <line x1="27" y1="54" x2="32" y2="45" />

      {/* Left eave — scalloped arcs between each column */}
      <path d="M4 54 Q7 58 10 54" />
      <path d="M10 54 Q13 58 16 54" />
      <path d="M16 54 Q19 58 22 54" />
      <path d="M22 54 Q24.5 58 27 54" />
      <path d="M27 54 Q29.5 58 32 54" />

      {/* Right half — nested V-shapes parallel to right slope */}
      <line x1="32" y1="21" x2="54" y2="54" />
      <line x1="32" y1="31" x2="47" y2="54" />
      <line x1="32" y1="39" x2="42" y2="54" />
    </svg>
  );
}

export function ServiceIcon({
  kind,
  size,
  color,
  strokeWidth,
}: { kind: "house" | "shield" | "roof" } & Props) {
  if (kind === "house") return <HouseIcon size={size} color={color} strokeWidth={strokeWidth} />;
  if (kind === "shield") return <ShieldCheckIcon size={size} color={color} strokeWidth={strokeWidth} />;
  return <RoofIcon size={size} color={color} strokeWidth={strokeWidth} />;
}
