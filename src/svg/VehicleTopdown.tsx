import { motion, type MotionValue } from "framer-motion";

type Props = {
  className?: string;
  /** opacity values 0..1 for each of the 8 callouts; defaults to all 1 */
  callouts?: Array<MotionValue<number> | number>;
};

const labels = [
  "Forward camera",
  "Forward radar",
  "Surround view (front)",
  "Lidar",
  "Corner radar L/R",
  "Surround view (rear)",
  "Rear radar",
  "Steering angle",
];

const dots: Array<{ cx: number; cy: number; lx: number; ly: number; align: "start" | "end" }> = [
  // Forward camera (windshield base)
  { cx: 200, cy: 220, lx: 360, ly: 220, align: "start" },
  // Forward radar (front bumper center)
  { cx: 200, cy: 110, lx: 360, ly: 110, align: "start" },
  // Surround view front
  { cx: 200, cy: 175, lx: 40, ly: 175, align: "end" },
  // Lidar (roof front)
  { cx: 200, cy: 285, lx: 40, ly: 285, align: "end" },
  // Corner radars
  { cx: 145, cy: 510, lx: 40, ly: 470, align: "end" },
  // Surround view rear
  { cx: 200, cy: 660, lx: 360, ly: 660, align: "start" },
  // Rear radar
  { cx: 200, cy: 720, lx: 40, ly: 720, align: "end" },
  // Steering angle (cabin)
  { cx: 200, cy: 380, lx: 360, ly: 380, align: "start" },
];

export function VehicleTopdown({ className, callouts }: Props) {
  return (
    <svg
      viewBox="0 0 400 800"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden
    >
      {/* Body outline (top-down) */}
      <g stroke="var(--bone-2)" strokeOpacity={0.55} strokeLinecap="square">
        {/* Roof / cabin */}
        <path d="M 130 230 L 130 540 Q 130 560 145 565 L 255 565 Q 270 560 270 540 L 270 230 Z" />
        {/* Body */}
        <path d="M 110 100 Q 120 70 200 60 Q 280 70 290 100 L 290 700 Q 280 740 200 750 Q 120 740 110 700 Z" />
        {/* Hood line */}
        <line x1="120" y1="160" x2="280" y2="160" />
        {/* Trunk line */}
        <line x1="120" y1="640" x2="280" y2="640" />
        {/* Windshield */}
        <line x1="130" y1="230" x2="270" y2="230" />
        <line x1="130" y1="540" x2="270" y2="540" />
        {/* Wheels */}
        <rect x="98" y="170" width="14" height="44" />
        <rect x="288" y="170" width="14" height="44" />
        <rect x="98" y="600" width="14" height="44" />
        <rect x="288" y="600" width="14" height="44" />
        {/* Centerline */}
        <line
          x1="200"
          y1="40"
          x2="200"
          y2="760"
          strokeDasharray="2 6"
          strokeOpacity={0.35}
        />
        {/* Steering wheel suggestion */}
        <circle cx="170" cy="380" r="14" />
      </g>

      {/* Callouts */}
      {dots.map((d, i) => {
        const callout = callouts?.[i];
        const op =
          typeof callout === "number" || callout === undefined ? callout ?? 1 : undefined;
        const Wrapper = motion.g;
        return (
          <Wrapper
            key={i}
            style={{ opacity: op !== undefined ? op : (callout as MotionValue<number>) }}
          >
            {/* Connector hairline */}
            <line
              x1={d.cx}
              y1={d.cy}
              x2={d.lx}
              y2={d.ly}
              stroke="var(--accent)"
              strokeWidth={1}
              strokeOpacity={0.85}
            />
            {/* Dot at sensor */}
            <circle cx={d.cx} cy={d.cy} r={3} fill="var(--accent)" />
            <circle
              cx={d.cx}
              cy={d.cy}
              r={8}
              stroke="var(--accent)"
              strokeOpacity={0.4}
              fill="none"
            />
            {/* Label endpoint */}
            <circle cx={d.lx} cy={d.ly} r={2} fill="var(--accent)" />
            <text
              x={d.align === "start" ? d.lx + 8 : d.lx - 8}
              y={d.ly + 4}
              fill="var(--bone)"
              fontFamily="JetBrains Mono, monospace"
              fontSize="11"
              letterSpacing="0.08em"
              textAnchor={d.align === "start" ? "start" : "end"}
              style={{ textTransform: "uppercase" }}
            >
              {labels[i]}
            </text>
          </Wrapper>
        );
      })}
    </svg>
  );
}
