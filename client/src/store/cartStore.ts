import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types/product";
import type { CartItem } from "@/types/cart";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  incrementItem: (slug: string) => void;
  decrementItem: (slug: string) => void;
  removeItem: (slug: string) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,

      addItem: (product) =>
        set((state) => {
          const existing = state.items.find(
            (item) => item.product.slug === product.slug,
          );
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.product.slug === product.slug
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return { items: [...state.items, { product, quantity: 1 }] };
        }),

      incrementItem: (slug) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.slug === slug
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        })),

      decrementItem: (slug) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.product.slug === slug
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      removeItem: (slug) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.slug !== slug),
        })),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "holan-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export const useCartCount = () =>
  useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
