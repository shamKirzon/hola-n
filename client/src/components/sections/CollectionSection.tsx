import { Plus } from "lucide-react";
import { products } from "@/data/holaN";
import bottleImg from "@/assets/hola-bottle.png";

interface CollectionSectionProps {
  onAdd: () => void;
}

const CollectionSection = ({ onAdd }: CollectionSectionProps) => {
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
        {products.map((item) => (
          <div
            key={item.slug}
            className="flex flex-col rounded-2xl border border-holan-line bg-[rgba(255,255,255,0.5)] px-3.5 pb-4 pt-3.5"
          >
            <div className="relative mb-3.5 h-49 overflow-hidden rounded-[12px]">
              <img
                src={bottleImg}
                alt={item.name}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mb-0.5 font-holan-serif text-[20px] font-semibold text-holan-ink">
              {item.name}
            </h3>
            <div className="mb-2 text-[11px] uppercase tracking-[0.14em] text-holan-ink-faint">
              {item.family} · 50ml
            </div>
            <p className="mb-3.5 flex-1 text-[12.5px] leading-normal text-holan-ink-soft">
              {item.notes}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.12em] text-holan-ink-faint">
                Eau de Parfum
              </span>
              <button
                type="button"
                title="Add"
                onClick={onAdd}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] text-white shadow-[0_8px_16px_rgba(120,80,85,0.28)]"
              >
                <Plus size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;
