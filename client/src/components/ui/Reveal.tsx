import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in seconds for sequenced reveals. */
  delay?: number;
  className?: string;
}

/**
 * Fade-and-rise on scroll into view. Motivated: storytelling — sections
 * arrive in sequence as the user scrolls. Honors prefers-reduced-motion
 * (renders static, no transform) per the motion accessibility guardrail.
 */
const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
