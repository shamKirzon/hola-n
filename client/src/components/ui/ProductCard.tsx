import { Plus } from "lucide-react";
import type { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { getProductImage } from "@/lib/productImages";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="flex flex-col rounded-2xl border border-holan-line bg-[rgba(255,255,255,0.5)] px-3.5 pb-4 pt-3.5">
      <div className="relative mb-3.5 h-49 overflow-hidden rounded-[12px]">
        <img
          src={getProductImage(product.image)}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="mb-0.5 font-holan-serif text-[20px] font-semibold text-holan-ink">
        {product.name}
      </h3>
      <div className="mb-2 text-[11px] uppercase tracking-[0.14em] text-holan-ink-faint">
        {product.family} · 50ml
      </div>
      <p className="mb-3.5 flex-1 text-[12.5px] leading-normal text-holan-ink-soft">
        {product.notes}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.12em] text-holan-ink-faint">
          Eau de Parfum
        </span>
        <button
          type="button"
          title="Add"
          onClick={() => addItem(product)}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] text-white shadow-[0_8px_16px_rgba(120,80,85,0.28)]"
        >
          <Plus size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
