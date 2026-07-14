import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantityStepper = ({
  quantity,
  onIncrement,
  onDecrement,
}: QuantityStepperProps) => {
  const reduce = useReducedMotion();

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-holan-line px-1 py-1">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={onDecrement}
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-holan-ink-soft transition-colors hover:bg-[rgba(255,255,255,0.7)] hover:text-holan-ink"
      >
        <Minus size={13} strokeWidth={2} />
      </button>

      <span className="inline-flex w-4 justify-center overflow-hidden text-center text-[13px] font-semibold text-holan-ink">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={quantity}
            initial={reduce ? false : { y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: 10, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-block"
          >
            {quantity}
          </motion.span>
        </AnimatePresence>
      </span>

      <button
        type="button"
        aria-label="Increase quantity"
        onClick={onIncrement}
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-holan-ink-soft transition-colors hover:bg-[rgba(255,255,255,0.7)] hover:text-holan-ink"
      >
        <Plus size={13} strokeWidth={2} />
      </button>
    </div>
  );
};

export default QuantityStepper;
