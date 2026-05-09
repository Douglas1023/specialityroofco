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
      {/* Peaked roof */}
      <path d="M4 38 L32 14 L60 38" />
      {/* Eave */}
      <path d="M2 40 L62 40" />
      {/* Chimney */}
      <path d="M46 30 L46 22 L52 22 L52 30" />
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
