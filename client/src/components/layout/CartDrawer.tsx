import { useNavigate } from "react-router-dom";
import { Dialog } from "@base-ui/react/dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ShoppingBag, Trash2, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import bottleImg from "@/assets/hola-bottle.png";
import QuantityStepper from "@/components/ui/QuantityStepper";
import EmptyState from "@/components/ui/EmptyState";

const CartDrawer = () => {
  const isOpen = useCartStore((state) => state.isOpen);
  const items = useCartStore((state) => state.items);
  const closeCart = useCartStore((state) => state.closeCart);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const reduce = useReducedMotion();
  const navigate = useNavigate();

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/30 opacity-100 transition-opacity duration-500 ease-out data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none motion-reduce:duration-0" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex w-full translate-x-0 flex-col bg-[#f5eae7] shadow-[-14px_0_40px_rgba(120,80,85,0.22)] transition-transform duration-300 ease-out data-starting-style:translate-x-full data-ending-style:translate-x-full motion-reduce:transition-none motion-reduce:duration-0 sm:w-105">
          <div className="flex items-center justify-between border-b border-holan-line px-6 py-5">
            <Dialog.Title className="m-0 font-holan-serif text-[24px] font-semibold text-holan-ink">
              Your Bag
            </Dialog.Title>
            <Dialog.Close
              aria-label="Close bag"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-holan-ink-soft transition-colors hover:bg-[rgba(255,255,255,0.6)] hover:text-holan-ink"
            >
              <X size={20} strokeWidth={1.8} />
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto">
            {items.length > 0 ? (
              <ul className="divide-y divide-holan-line">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.li
                      key={item.product.slug}
                      layout
                      initial={reduce ? false : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="flex items-start gap-4 overflow-hidden px-6 py-5"
                    >
                      <div className="h-18 w-18 flex-none overflow-hidden rounded-[10px] bg-[rgba(255,255,255,0.5)]">
                        <img
                          src={bottleImg}
                          alt={item.product.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="mb-0.5 truncate font-holan-serif text-[17px] font-semibold text-holan-ink">
                          {item.product.name}
                        </h4>
                        <div className="mb-2.5 text-[10.5px] uppercase tracking-[0.14em] text-holan-ink-faint">
                          {item.product.family}
                        </div>
                        <QuantityStepper
                          quantity={item.quantity}
                          onIncrement={() => incrementItem(item.product.slug)}
                          onDecrement={() => decrementItem(item.product.slug)}
                        />
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.product.name} from bag`}
                        onClick={() => removeItem(item.product.slug)}
                        className="flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-full text-holan-ink-faint transition-colors hover:bg-[rgba(255,255,255,0.6)] hover:text-holan-rose-deep"
                      >
                        <Trash2 size={16} strokeWidth={1.8} />
                      </button>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            ) : (
              <EmptyState
                icon={ShoppingBag}
                heading="Your bag is empty"
                description="Browse the collection and add a few signature scents to get started."
                ctaLabel="Browse Collection"
                onCtaClick={() => {
                  closeCart();
                  navigate("/collection");
                }}
              />
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-holan-line px-6 py-4.5 text-center text-[12px] uppercase tracking-[0.14em] text-holan-ink-faint">
              {totalCount} item{totalCount === 1 ? "" : "s"} in your bag
            </div>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CartDrawer;
