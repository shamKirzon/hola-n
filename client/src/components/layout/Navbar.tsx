import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, ShoppingBag, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
}

const navLinks = [
  { href: "#favorites", label: "Favorites" },
  { href: "#collection", label: "Collection" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ cartCount }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const reduce = useReducedMotion();
  const [justAdded, setJustAdded] = useState(false);
  const prevCount = useRef(cartCount);

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Flash a "new item" notification on the cart whenever the count grows.
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
    <>
      <header className="sticky top-0 z-50 bg-[rgba(245,234,231,0.72)] backdrop-blur-[10px]">
      <nav className="mx-auto flex max-w-300 items-center justify-between gap-6 px-[clamp(20px,6vw,88px)] py-4.5">
        <a href="#top" onClick={closeMenu} className="flex flex-col leading-[0.9]">
          <span className="font-holan-script text-[30px] text-holan-rose-deep sm:text-[34px]">
            Hola N.
          </span>
          <span className="pl-1 font-holan-serif text-[10px] uppercase tracking-[0.42em] text-holan-ink-soft">
            Eau de Parfum
          </span>
        </a>

        <div className="flex items-center gap-4 lg:gap-8.5">
          <div className="hidden gap-7.5 text-sm text-holan-ink-soft lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-holan-ink">
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#collection"
            onClick={closeMenu}
            aria-label={`Cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
            className="flex items-center gap-2 text-holan-rose-deep"
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

              {/* "New item added" notification dot */}
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
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center text-holan-ink lg:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ease-out lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Left slide-in drawer */}
      <aside
        aria-hidden={!menuOpen}
        className={`fixed left-0 top-0 z-50 flex h-full w-72 max-w-[80vw] flex-col bg-[#f3e6e2] shadow-[6px_0_28px_rgba(120,80,85,0.2)] transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-holan-line px-5 py-4.5">
          <a href="#top" onClick={closeMenu} className="flex flex-col leading-[0.9]">
            <span className="font-holan-script text-[26px] text-holan-rose-deep">Hola N.</span>
            <span className="pl-0.5 font-holan-serif text-[9px] uppercase tracking-[0.42em] text-holan-ink-soft">
              Eau de Parfum
            </span>
          </a>
        </div>

        <nav className="flex flex-col gap-1 p-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex min-h-12 items-center rounded-xl px-4 text-[15px] font-medium text-holan-ink-soft transition-colors hover:bg-white/50 hover:text-holan-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
