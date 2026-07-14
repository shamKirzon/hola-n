import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useCartCount, useCartStore } from "@/store/cartStore";

const CatalogHeader = () => {
  const cartCount = useCartCount();
  const toggleCart = useCartStore((state) => state.toggleCart);
  const reduce = useReducedMotion();
  const [justAdded, setJustAdded] = useState(false);
  const prevCount = useRef(cartCount);

  useEffect(() => {
    if (cartCount > prevCount.current) {
      setJustAdded(true);
      const t = setTimeout(() => setJustAdded(false), 1000);
      prevCount.current = cartCount;
      return () => clearTimeout(t);
    }
    prevCount.current = cartCount;
  }, [cartCount]);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(245,234,231,0.72)] backdrop-blur-[10px]">
      <nav className="mx-auto flex max-w-300 items-center justify-between gap-4 px-[clamp(20px,6vw,88px)] py-4.5">
        <Link to="/" className="flex flex-col leading-[0.9]">
          <span className="font-holan-script text-[30px] text-holan-rose-deep sm:text-[34px]">
            Hola N.
          </span>
          <span className="pl-1 font-holan-serif text-[10px] uppercase tracking-[0.42em] text-holan-ink-soft">
            Eau de Parfum
          </span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-8">
          <button
            type="button"
            onClick={toggleCart}
            aria-label={`Cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
            className="flex cursor-pointer items-center gap-2 text-holan-rose-deep"
          >
            <span className="relative inline-flex">
              <motion.span
                animate={
                  justAdded && !reduce ? { scale: [1, 1.3, 0.94, 1] } : { scale: 1 }
                }
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex"
              >
                <ShoppingBag size={19} strokeWidth={1.7} />
              </motion.span>

              <AnimatePresence>
                {justAdded && (
                  <motion.span
                    key="cart-ping"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 22 }}
                    className="pointer-events-none absolute -right-1 -top-1 h-2.5 w-2.5"
                    aria-hidden="true"
                  >
                    {!reduce && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-holan-rose-deep opacity-70" />
                    )}
                    <span className="absolute inset-0 rounded-full bg-holan-rose-deep ring-2 ring-[#f5eae7]" />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>

            <span className="inline-flex min-w-2 justify-center overflow-hidden text-center text-[13px] font-semibold">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={cartCount}
                  initial={reduce ? false : { y: -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { y: 12, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="inline-block"
                >
                  {cartCount}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>

          <Link
            to="/"
            className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-holan-ink-soft transition-colors hover:text-holan-ink"
          >
            <ArrowLeft size={16} strokeWidth={2} />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default CatalogHeader;
