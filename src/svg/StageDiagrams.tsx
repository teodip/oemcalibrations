import { motion, type Variants } from "framer-motion";

type Props = { className?: string };

const monoFont = "JetBrains Mono, monospace";
const ease = [0.16, 1, 0.3, 1];

// Single observer per SVG. Children animate via variant propagation —
// reliable on iOS Safari and inside horizontally-scrolled snap carousels.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.55, ease } },
};
const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, ease },
  },
};
const grow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.4, ease },
  },
};

const svgProps = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, amount: 0.2 },
  variants: container,
};

// 01 — Pre-scan
export function PreScan({ className }: Props) {
  const rows = [
    { code: "FCM-01", label: "FORWARD CAMERA", state: "fault" },
    { code: "RAD-01", label: "FRONT RADAR", state: "fault" },
    { code: "BSM-LR", label: "BLIND SPOT L/R", state: "ok" },
    { code: "SVC-04", label: "SURROUND VIEW", state: "fault" },
    { code: "SAS-01", label: "STEERING ANGLE", state: "warn" },
    { code: "ABS-01", label: "ABS / ESC", state: "ok" },
  ];
  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      aria-hidden
      {...svgProps}
    >
      <g fontFamily={monoFont} fontSize="8" letterSpacing="0.14em">
        <text x="12" y="20" fill="var(--bone-2)">
          DTC INVENTORY · PRE
        </text>
        <text x="228" y="20" textAnchor="end" fill="var(--accent)">
          REC
        </text>
      </g>
      <line x1="12" y1="28" x2="228" y2="28" stroke="var(--rule)" strokeWidth={1} />

      {rows.map((r, i) => {
        const y = 50 + i * 24;
        const dotColor =
          r.state === "fault"
            ? "var(--accent)"
            : r.state === "warn"
              ? "var(--bone)"
              : "var(--bone-2)";
        return (
          <motion.g key={r.code} variants={fade}>
            <line
              x1="12"
              y1={y + 8}
              x2="228"
              y2={y + 8}
              stroke="var(--rule)"
              strokeOpacity={0.5}
              strokeWidth={1}
            />
            <text
              x="12"
              y={y}
              fontFamily={monoFont}
              fontSize="8.5"
              letterSpacing="0.1em"
              fill="var(--bone)"
            >
              {r.code}
            </text>
            <text
              x="62"
              y={y}
              fontFamily={monoFont}
              fontSize="8"
              letterSpacing="0.1em"
              fill="var(--bone-2)"
            >
              {r.label}
            </text>
            <rect
              x="200"
              y={y - 6}
              width="20"
              height="8"
              fill="none"
              stroke="var(--rule)"
              strokeWidth={1}
            />
            <rect
              x="202"
              y={y - 4}
              width={r.state === "ok" ? 4 : r.state === "warn" ? 10 : 16}
              height="4"
              fill={dotColor}
              fillOpacity={r.state === "ok" ? 0.4 : 1}
            />
          </motion.g>
        );
      })}

      <line x1="12" y1="200" x2="228" y2="200" stroke="var(--rule)" strokeWidth={1} />
      <motion.g
        variants={fade}
        fontFamily={monoFont}
        fontSize="8"
        letterSpacing="0.14em"
      >
        <text x="12" y="216" fill="var(--bone-2)">
          FAULTS
        </text>
        <text x="12" y="228" fill="var(--accent)" fontSize="11">
          12
        </text>
        <text x="120" y="216" fill="var(--bone-2)">
          MODULES
        </text>
        <text x="120" y="228" fill="var(--bone)" fontSize="11">
          06
        </text>
      </motion.g>
    </motion.svg>
  );
}

// 02 — Setup
export function Setup({ className }: Props) {
  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      aria-hidden
      {...svgProps}
    >
      <line x1="12" y1="170" x2="228" y2="170" stroke="var(--rule)" strokeWidth={1} />
      <line
        x1="12"
        y1="174"
        x2="228"
        y2="174"
        stroke="var(--rule)"
        strokeOpacity={0.5}
        strokeDasharray="2 4"
      />

      <motion.g
        variants={fade}
        stroke="var(--bone-2)"
        strokeOpacity={0.7}
        strokeWidth={1}
        strokeLinecap="square"
      >
        <path d="M 96 70 Q 100 52 120 48 Q 140 52 144 70 L 144 162 Q 140 168 120 170 Q 100 168 96 162 Z" />
        <line x1="96" y1="92" x2="144" y2="92" />
        <line x1="96" y1="148" x2="144" y2="148" />
        <line x1="96" y1="108" x2="144" y2="108" strokeOpacity={0.4} />
        <line x1="96" y1="132" x2="144" y2="132" strokeOpacity={0.4} />
        <rect x="88" y="98" width="8" height="14" />
        <rect x="144" y="98" width="8" height="14" />
        <rect x="88" y="138" width="8" height="14" />
        <rect x="144" y="138" width="8" height="14" />
        <line
          x1="120"
          y1="48"
          x2="120"
          y2="170"
          strokeDasharray="2 4"
          strokeOpacity={0.4}
        />
      </motion.g>

      <g fontFamily={monoFont} fontSize="8" letterSpacing="0.14em">
        <text x="12" y="20" fill="var(--bone-2)">
          PRE-FLIGHT · LEVEL CHECK
        </text>
      </g>
      <line x1="12" y1="28" x2="228" y2="28" stroke="var(--rule)" />

      <motion.g
        variants={fade}
        fontFamily={monoFont}
        fontSize="8"
        letterSpacing="0.12em"
      >
        <line x1="120" y1="40" x2="120" y2="48" stroke="var(--accent)" />
        <circle cx="120" cy="38" r="2" fill="var(--accent)" />
        <text x="120" y="32" textAnchor="middle" fill="var(--accent)">
          LEVEL ±0.05°
        </text>

        <line
          x1="40"
          y1="105"
          x2="86"
          y2="105"
          stroke="var(--accent)"
          strokeWidth={1}
        />
        <circle cx="38" cy="105" r="2" fill="var(--accent)" />
        <text x="14" y="100" fill="var(--bone-2)">
          TIRE PSI
        </text>
        <text x="14" y="112" fill="var(--bone)">
          OEM SPEC
        </text>

        <line
          x1="154"
          y1="120"
          x2="200"
          y2="120"
          stroke="var(--accent)"
          strokeWidth={1}
        />
        <circle cx="202" cy="120" r="2" fill="var(--accent)" />
        <text x="206" y="115" fill="var(--bone-2)">
          RIDE
        </text>
        <text x="206" y="127" fill="var(--bone)">
          ±5 MM
        </text>

        <line x1="120" y1="180" x2="120" y2="190" stroke="var(--accent)" />
        <text x="120" y="200" textAnchor="middle" fill="var(--accent)">
          FUEL
        </text>
        <text x="120" y="212" textAnchor="middle" fill="var(--bone)">
          ½ TANK
        </text>
      </motion.g>

      <line x1="12" y1="224" x2="228" y2="224" stroke="var(--rule)" />
    </motion.svg>
  );
}

// 03 — Targets
export function Targets({ className }: Props) {
  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      aria-hidden
      {...svgProps}
    >
      <g fontFamily={monoFont} fontSize="8" letterSpacing="0.14em">
        <text x="12" y="20" fill="var(--bone-2)">
          OEM TARGET · DISTANCE
        </text>
        <text x="228" y="20" textAnchor="end" fill="var(--accent)">
          ±0.1°
        </text>
      </g>
      <line x1="12" y1="28" x2="228" y2="28" stroke="var(--rule)" />

      <motion.g variants={fade} stroke="var(--bone-2)" strokeOpacity={0.5}>
        <rect x="40" y="46" width="160" height="160" />
        <line x1="40" y1="126" x2="200" y2="126" strokeDasharray="2 6" />
        <line x1="120" y1="46" x2="120" y2="206" strokeDasharray="2 6" />
      </motion.g>

      <motion.g variants={draw} stroke="var(--accent)" fill="none">
        <circle cx="120" cy="126" r="40" />
        <circle cx="120" cy="126" r="22" />
        <circle cx="120" cy="126" r="8" />
      </motion.g>

      <motion.g variants={fade} stroke="var(--accent)">
        <line x1="80" y1="126" x2="160" y2="126" />
        <line x1="120" y1="86" x2="120" y2="166" />
        <circle cx="120" cy="126" r="2.5" fill="var(--accent)" />
      </motion.g>

      <g
        fontFamily={monoFont}
        fontSize="8"
        letterSpacing="0.12em"
        fill="var(--bone-2)"
      >
        <text x="40" y="222">
          1500 MM
        </text>
        <text x="200" y="222" textAnchor="end">
          OFFSET 0
        </text>
      </g>
    </motion.svg>
  );
}

// 04 — Calibration
export function CalibrationDiagram({ className }: Props) {
  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      aria-hidden
      {...svgProps}
    >
      <g fontFamily={monoFont} fontSize="8" letterSpacing="0.14em">
        <text x="12" y="20" fill="var(--bone-2)">
          SCAN TOOL · ACTIVE
        </text>
        <text x="228" y="20" textAnchor="end" fill="var(--accent)">
          J2534
        </text>
      </g>
      <line x1="12" y1="28" x2="228" y2="28" stroke="var(--rule)" />

      <motion.g variants={fade} stroke="var(--bone-2)" strokeOpacity={0.7}>
        <rect x="32" y="48" width="176" height="124" />
        <rect x="32" y="48" width="176" height="14" fill="var(--bg-2)" />
        <circle cx="42" cy="55" r="1.5" fill="var(--accent)" />
        <circle cx="50" cy="55" r="1.5" fill="var(--bone-2)" />
        <circle cx="58" cy="55" r="1.5" fill="var(--bone-2)" opacity={0.4} />
      </motion.g>

      <motion.g variants={fade} fontFamily={monoFont} letterSpacing="0.1em">
        <text x="40" y="80" fontSize="9" fill="var(--bone)">
          MODULE
        </text>
        <text x="200" y="80" fontSize="9" textAnchor="end" fill="var(--accent)">
          ADAS · FFC
        </text>

        <text x="40" y="100" fontSize="9" fill="var(--bone)">
          PROCEDURE
        </text>
        <text x="200" y="100" fontSize="9" textAnchor="end" fill="var(--bone-2)">
          STATIC · CAM-A
        </text>

        <text x="40" y="120" fontSize="9" fill="var(--bone)">
          STATUS
        </text>
        <text x="200" y="120" fontSize="9" textAnchor="end" fill="var(--accent)">
          RUNNING
        </text>
      </motion.g>

      <g>
        <rect
          x="40"
          y="138"
          width="160"
          height="8"
          stroke="var(--rule)"
          strokeWidth={1}
          fill="none"
        />
        <motion.rect
          x="40"
          y="138"
          width="108"
          height="8"
          fill="var(--accent)"
          variants={grow}
          style={{ transformOrigin: "40px 142px" }}
        />
        <text
          x="200"
          y="160"
          fontFamily={monoFont}
          fontSize="8"
          letterSpacing="0.14em"
          textAnchor="end"
          fill="var(--bone-2)"
        >
          67 / 100
        </text>
      </g>

      <g
        stroke="var(--bone-2)"
        strokeOpacity={0.5}
        strokeWidth={1}
        strokeLinecap="square"
      >
        <line x1="120" y1="172" x2="120" y2="200" />
        <rect x="108" y="200" width="24" height="14" />
        <line x1="100" y1="222" x2="140" y2="222" strokeDasharray="2 4" />
      </g>
      <text
        x="120"
        y="234"
        fontFamily={monoFont}
        fontSize="7.5"
        letterSpacing="0.14em"
        textAnchor="middle"
        fill="var(--bone-2)"
      >
        OBD-II
      </text>
    </motion.svg>
  );
}

// 05 — Post-scan
export function PostScan({ className }: Props) {
  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      aria-hidden
      {...svgProps}
    >
      <g fontFamily={monoFont} fontSize="8" letterSpacing="0.14em">
        <text x="12" y="20" fill="var(--bone-2)">
          DTC DIFF · PRE / POST
        </text>
        <text x="228" y="20" textAnchor="end" fill="var(--accent)">
          PASS
        </text>
      </g>
      <line x1="12" y1="28" x2="228" y2="28" stroke="var(--rule)" />

      <g fontFamily={monoFont} letterSpacing="0.14em">
        <text x="58" y="58" fontSize="9" textAnchor="middle" fill="var(--bone-2)">
          PRE
        </text>
        <text x="182" y="58" fontSize="9" textAnchor="middle" fill="var(--bone-2)">
          POST
        </text>
      </g>

      <motion.g variants={fade}>
        {Array.from({ length: 12 }).map((_, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const cx = 38 + col * 16;
          const cy = 78 + row * 16;
          return (
            <rect
              key={i}
              x={cx - 4}
              y={cy - 4}
              width="8"
              height="8"
              fill="var(--accent)"
            />
          );
        })}
      </motion.g>

      <motion.g variants={fade}>
        {Array.from({ length: 12 }).map((_, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const cx = 162 + col * 16;
          const cy = 78 + row * 16;
          return (
            <rect
              key={i}
              x={cx - 4}
              y={cy - 4}
              width="8"
              height="8"
              fill="none"
              stroke="var(--rule)"
              strokeWidth={1}
            />
          );
        })}
      </motion.g>

      <motion.g variants={fade} fontFamily={monoFont} letterSpacing="0.05em">
        <text x="58" y="180" fontSize="22" textAnchor="middle" fill="var(--accent)">
          12
        </text>
        <text x="120" y="180" fontSize="14" textAnchor="middle" fill="var(--bone-2)">
          →
        </text>
        <text x="182" y="180" fontSize="22" textAnchor="middle" fill="var(--bone)">
          00
        </text>
      </motion.g>

      <line x1="12" y1="200" x2="228" y2="200" stroke="var(--rule)" />
      <g fontFamily={monoFont} fontSize="8" letterSpacing="0.14em">
        <text x="12" y="216" fill="var(--bone-2)">
          ROAD TEST
        </text>
        <text x="228" y="216" textAnchor="end" fill="var(--bone)">
          COMPLETE
        </text>
      </g>
    </motion.svg>
  );
}

// 06 — Documentation
export function Documentation({ className }: Props) {
  return (
    <motion.svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      aria-hidden
      {...svgProps}
    >
      <g fontFamily={monoFont} fontSize="8" letterSpacing="0.14em">
        <text x="12" y="20" fill="var(--bone-2)">
          DELIVERABLE · SIGNED
        </text>
        <text x="228" y="20" textAnchor="end" fill="var(--accent)">
          PDF
        </text>
      </g>
      <line x1="12" y1="28" x2="228" y2="28" stroke="var(--rule)" />

      <motion.g variants={fade}>
        <rect
          x="64"
          y="60"
          width="128"
          height="156"
          stroke="var(--rule)"
          strokeOpacity={0.45}
          fill="var(--bg-2)"
          strokeWidth={1}
        />
        <rect
          x="58"
          y="54"
          width="128"
          height="156"
          stroke="var(--rule)"
          strokeOpacity={0.65}
          fill="var(--bg-2)"
          strokeWidth={1}
        />
        <rect
          x="52"
          y="48"
          width="128"
          height="156"
          stroke="var(--bone-2)"
          fill="var(--bg)"
          strokeWidth={1}
        />
      </motion.g>

      <motion.g variants={fade}>
        <rect x="60" y="58" width="112" height="3" fill="var(--accent)" />
        <text
          x="60"
          y="74"
          fontFamily={monoFont}
          fontSize="6.5"
          letterSpacing="0.14em"
          fill="var(--bone-2)"
        >
          CALIBRATION REPORT
        </text>
        <text
          x="60"
          y="84"
          fontFamily={monoFont}
          fontSize="9"
          letterSpacing="0.05em"
          fill="var(--bone)"
        >
          2024 RAV4 XLE
        </text>

        {[100, 110, 120, 130, 140, 150].map((y, i) => (
          <line
            key={y}
            x1="60"
            y1={y}
            x2={i % 2 === 0 ? 168 : 154}
            y2={y}
            stroke="var(--rule)"
            strokeWidth={1}
            strokeOpacity={0.7}
          />
        ))}

        <line
          x1="60"
          y1="162"
          x2="172"
          y2="162"
          stroke="var(--accent)"
          strokeOpacity={0.5}
        />

        <text
          x="60"
          y="178"
          fontFamily={monoFont}
          fontSize="6"
          letterSpacing="0.14em"
          fill="var(--bone-2)"
        >
          TECHNICIAN
        </text>
        <path
          d="M 60 192 q 6 -6 12 -2 q 6 4 12 -2 q 6 -4 14 2"
          stroke="var(--bone)"
          strokeWidth={1}
          fill="none"
        />
        <text
          x="172"
          y="192"
          textAnchor="end"
          fontFamily={monoFont}
          fontSize="6"
          letterSpacing="0.14em"
          fill="var(--accent)"
        >
          24-04-29
        </text>
      </motion.g>

      <motion.g variants={fade}>
        <circle
          cx="200"
          cy="200"
          r="22"
          stroke="var(--accent)"
          strokeWidth={1}
          fill="var(--bg)"
        />
        <circle
          cx="200"
          cy="200"
          r="18"
          stroke="var(--accent)"
          strokeOpacity={0.5}
          strokeWidth={1}
          fill="none"
        />
        <text
          x="200"
          y="196"
          textAnchor="middle"
          fontFamily={monoFont}
          fontSize="6.5"
          letterSpacing="0.14em"
          fill="var(--accent)"
        >
          OEM
        </text>
        <text
          x="200"
          y="206"
          textAnchor="middle"
          fontFamily={monoFont}
          fontSize="5.5"
          letterSpacing="0.14em"
          fill="var(--accent)"
        >
          J2534
        </text>
      </motion.g>
    </motion.svg>
  );
}

// Lookup helper to match step number → diagram
export function StageDiagram({ num, className }: { num: string; className?: string }) {
  switch (num) {
    case "01":
      return <PreScan className={className} />;
    case "02":
      return <Setup className={className} />;
    case "03":
      return <Targets className={className} />;
    case "04":
      return <CalibrationDiagram className={className} />;
    case "05":
      return <PostScan className={className} />;
    case "06":
      return <Documentation className={className} />;
    default:
      return <Targets className={className} />;
  }
}
