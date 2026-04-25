import { motion, type Variants } from "framer-motion";

type Props = { className?: string };

// Origin = camera mounted on vehicle. Calibrated line travels straight
// horizontally; offset line angles down. Y-axis is exaggerated for clarity
// (a real 0.5° over 200ft is ~21 inches of lateral displacement, which would
// be invisible at this aspect — diagrammatic, not to scale).
const ORIGIN_X = 110;
const ORIGIN_Y = 110;
const END_X = 760;
const CAL_END_Y = ORIGIN_Y;
const OFF_END_Y = ORIGIN_Y + 70;

const ticks = [
  { x: 240, label: "50 FT" },
  { x: 370, label: "100 FT" },
  { x: 500, label: "150 FT" },
  { x: 630, label: "200 FT" },
  { x: 760, label: "250 FT" },
];

const along = (x: number, y0: number, y1: number) =>
  y0 + ((x - ORIGIN_X) / (END_X - ORIGIN_X)) * (y1 - y0);

const ease = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
};

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.0, ease },
  },
};

export function Trajectory({ className }: Props) {
  return (
    <motion.svg
      viewBox="0 0 800 280"
      className={className}
      fill="none"
      aria-hidden
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {/* Reference grid */}
      <g stroke="var(--rule)" strokeOpacity={0.55} strokeWidth={1}>
        <line
          x1="40"
          y1={ORIGIN_Y}
          x2={END_X + 10}
          y2={ORIGIN_Y}
          strokeDasharray="2 6"
        />
        <line x1="40" y1="220" x2={END_X + 10} y2="220" />
        {ticks.map((t) => (
          <line key={t.label} x1={t.x} y1="220" x2={t.x} y2="226" />
        ))}
      </g>

      {/* Vehicle silhouette (side view) */}
      <motion.g
        variants={fade}
        stroke="var(--bone-2)"
        strokeOpacity={0.7}
        strokeWidth={1}
        strokeLinecap="square"
      >
        <path d="M 30 138 L 35 130 L 50 122 L 70 116 L 90 116 L 102 124 L 115 130 L 118 138 Z" />
        <circle cx="50" cy="138" r="6" fill="var(--bg)" />
        <circle cx="100" cy="138" r="6" fill="var(--bg)" />
        <circle cx="50" cy="138" r="6" />
        <circle cx="100" cy="138" r="6" />
        <circle cx={ORIGIN_X - 18} cy={ORIGIN_Y - 4} r="1.5" fill="var(--accent)" />
      </motion.g>

      {/* Origin crosshair */}
      <motion.g variants={fade} stroke="var(--accent)" strokeWidth={1}>
        <circle cx={ORIGIN_X} cy={ORIGIN_Y} r="3" fill="var(--accent)" />
        <circle cx={ORIGIN_X} cy={ORIGIN_Y} r="9" fillOpacity={0} />
        <line x1={ORIGIN_X - 14} y1={ORIGIN_Y} x2={ORIGIN_X - 4} y2={ORIGIN_Y} />
        <line x1={ORIGIN_X + 4} y1={ORIGIN_Y} x2={ORIGIN_X + 14} y2={ORIGIN_Y} />
      </motion.g>

      {/* Calibrated trajectory */}
      <motion.line
        x1={ORIGIN_X}
        y1={ORIGIN_Y}
        x2={END_X}
        y2={CAL_END_Y}
        stroke="var(--accent)"
        strokeWidth={1.25}
        variants={draw}
      />

      {/* Offset trajectory */}
      <motion.line
        x1={ORIGIN_X}
        y1={ORIGIN_Y}
        x2={END_X}
        y2={OFF_END_Y}
        stroke="var(--bone)"
        strokeOpacity={0.55}
        strokeWidth={1}
        strokeDasharray="4 4"
        variants={draw}
      />

      {/* Drop lines + labels at each tick */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        letterSpacing="0.12em"
        fill="var(--bone-2)"
      >
        {ticks.map((t, i) => {
          const yCal = along(t.x, ORIGIN_Y, CAL_END_Y);
          const yOff = along(t.x, ORIGIN_Y, OFF_END_Y);
          const distFt = parseInt(t.label, 10);
          const inches = (Math.tan((0.5 * Math.PI) / 180) * distFt * 12).toFixed(1);
          return (
            <motion.g key={t.label} variants={fade}>
              <line
                x1={t.x}
                y1={yCal}
                x2={t.x}
                y2={yOff}
                stroke="var(--accent)"
                strokeWidth={1}
                strokeOpacity={0.45}
              />
              <text x={t.x} y="240" textAnchor="middle">
                {t.label}
              </text>
              {i >= 2 && (
                <text x={t.x + 4} y={yOff + 14} fill="var(--bone)" fontSize="9.5">
                  {inches}″
                </text>
              )}
            </motion.g>
          );
        })}
      </g>

      {/* Top-left label */}
      <motion.g
        variants={fade}
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        letterSpacing="0.14em"
      >
        <text x="40" y="38" fill="var(--accent)">
          ANGULAR DEVIATION
        </text>
        <text x="40" y="54" fill="var(--bone-2)">
          0.5° · CAMERA OFFSET
        </text>
      </motion.g>

      {/* Inline legend */}
      <motion.g
        variants={fade}
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        letterSpacing="0.12em"
      >
        <line
          x1="540"
          y1="36"
          x2="568"
          y2="36"
          stroke="var(--accent)"
          strokeWidth={1.25}
        />
        <text x="576" y="40" fill="var(--bone)">
          CALIBRATED
        </text>
        <line
          x1="540"
          y1="54"
          x2="568"
          y2="54"
          stroke="var(--bone)"
          strokeOpacity={0.55}
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        <text x="576" y="58" fill="var(--bone-2)">
          UNCALIBRATED
        </text>
      </motion.g>

      {/* Disclaimer */}
      <motion.text
        variants={fade}
        x={END_X}
        y="266"
        textAnchor="end"
        fill="var(--bone-2)"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        letterSpacing="0.14em"
        opacity={0.7}
      >
        Y-AXIS EXAGGERATED · DIAGRAMMATIC
      </motion.text>
    </motion.svg>
  );
}
