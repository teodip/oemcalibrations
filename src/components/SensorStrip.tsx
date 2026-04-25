import { motion, type MotionValue } from "framer-motion";

type Props = {
  callouts: Array<MotionValue<number> | number>;
  codes?: string[];
  className?: string;
};

const defaultCodes = ["STA", "DYN", "FFC", "RAD", "LID", "SVC", "SAS", "BSM"];

export function SensorStrip({
  callouts,
  codes = defaultCodes,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
          Sensor map · live
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          ● ACTIVE
        </span>
      </div>
      <div className="grid grid-cols-8 gap-1 border-t border-rule/60 pt-3">
        {codes.map((c, i) => {
          const op = callouts[i];
          return (
            <div
              key={`${c}-${i}`}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-bone-2">
                {c}
              </span>
              <motion.span
                aria-hidden
                className="block h-[5px] w-[5px] rounded-full bg-accent"
                style={{
                  opacity:
                    typeof op === "number" || op === undefined ? (op ?? 0) : op,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
