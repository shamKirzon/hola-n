import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/holaN";
import ProductCard from "@/components/ui/ProductCard";

interface CollectionSectionProps {
  onAdd: () => void;
}

/** Number of perfumes shown as a preview before "View Full Collection". */
const PREVIEW_COUNT = 8;

const CollectionSection = ({ onAdd }: CollectionSectionProps) => {
  const preview = products.slice(0, PREVIEW_COUNT);

  return (
    <section id="collection" className="pb-5 pt-14">
      <div className="mb-11 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-3 text-[12px] uppercase tracking-[0.26em] text-holan-rail">
            The full range
          </div>
          <h2 className="m-0 font-holan-serif text-[32px] font-semibold text-holan-ink sm:text-[42px]">
            Our Collection
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6.5 lg:grid-cols-4">
        {preview.map((item) => (
          <ProductCard key={item.slug} product={item} onAdd={onAdd} />
        ))}
      </div>

      <div className="mt-11 flex flex-col items-center gap-3">
        <Link
          to="/collection"
          className="group inline-flex h-12 cursor-pointer items-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] px-7 text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_20px_rgba(120,80,85,0.28)] transition-transform hover:-translate-y-0.5"
        >
          View Full Collection
          <ArrowRight
            size={16}
            strokeWidth={2}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
        <span className="text-[12px] uppercase tracking-[0.14em] text-holan-ink-faint">
          {products.length} fragrances in total
        </span>
      </div>
    </section>
  );
};

export default CollectionSection;
