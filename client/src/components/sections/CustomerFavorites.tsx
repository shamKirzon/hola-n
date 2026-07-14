import { Plus } from "lucide-react";
import { favorites } from "@/data/holaN";
import { useCartStore } from "@/store/cartStore";
import bottleImg from "@/assets/hola-bottle.png";

const CustomerFavorites = () => {
  const addItem = useCartStore((state) => state.addItem);
  const [feat, ...rest] = favorites;

  return (
    <section id="favorites" className="pb-5 pt-14">
      <div className="mb-11.5 text-center">
        <div className="mb-3 text-[12px] uppercase tracking-[0.26em] text-holan-rail">
          Loved by our customers
        </div>
        <h2 className="m-0 font-holan-serif text-[32px] font-semibold text-holan-ink sm:text-[42px]">
          Customer Favorites
        </h2>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="relative grid grid-cols-1 items-center gap-6 rounded-[24px] border border-holan-line bg-[rgba(255,255,255,0.55)] px-7 py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative aspect-3/4 mx-auto w-full max-w-50 sm:mx-0 sm:max-w-none">
            <img
              src={bottleImg}
              alt={feat.name}
              className="h-full w-full object-contain drop-shadow-[0_22px_26px_rgba(120,80,85,0.2)]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="mb-3 inline-flex w-fit items-center gap-1.5 self-start rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_16px_rgba(120,80,85,0.24)]">
              ★ Most Loved
            </span>
            <h3 className="mb-1 font-holan-serif text-[34px] font-semibold text-holan-ink">
              {feat.name}
            </h3>
            <div className="mb-2.5 text-[12px] uppercase tracking-[0.16em] text-holan-ink-faint">
              Eau de Parfum · 50ml
            </div>
            <p className="mb-4 text-[14.5px] leading-[1.6] text-holan-ink-soft">
              {feat.notes}
            </p>
            <button
              type="button"
              title="Add"
              onClick={() => addItem(feat)}
              className="inline-flex h-10 w-fit cursor-pointer items-center gap-2 self-start rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] px-5.5 text-[12px] font-semibold uppercase tracking-widest text-white shadow-[0_8px_16px_rgba(120,80,85,0.26)]"
            >
              <Plus size={15} strokeWidth={2} />
              Add
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5.5">
          {rest.map((item) => (
            <div
              key={item.slug}
              className="flex flex-1 items-center gap-4.5 rounded-2xl border border-holan-line bg-[rgba(255,255,255,0.42)] px-4.5 py-4"
            >
              <div className="relative h-32 w-24 flex-none">
                <img
                  src={bottleImg}
                  alt={item.name}
                  className="h-full w-full object-contain drop-shadow-[0_14px_18px_rgba(120,80,85,0.16)]"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 text-[10px] uppercase tracking-[0.14em] text-holan-rail">
                  Also loved
                </div>
                <h4 className="mb-0.75 font-holan-serif text-[22px] font-semibold text-holan-ink">
                  {item.name}
                </h4>
                <div className="mb-3 text-[10px] uppercase tracking-[0.14em] text-holan-ink-faint">
                  Eau de Parfum · 50ml
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-holan-ink-faint">
                    Eau de Parfum
                  </span>
                  <button
                    type="button"
                    title="Add"
                    onClick={() => addItem(item)}
                    className="flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] text-white shadow-[0_6px_12px_rgba(120,80,85,0.24)]"
                  >
                    <Plus size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFavorites;
