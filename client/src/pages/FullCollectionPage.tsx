import { useEffect, useState } from "react";
import CatalogHeader from "@/components/layout/CatalogHeader";
import Footer from "@/components/layout/Footer";
import CatalogBrowser from "@/components/sections/CatalogBrowser";
import Reveal from "@/components/ui/Reveal";

const FullCollectionPage = () => {
  const [cart, setCart] = useState(0);
  const addToCart = () => setCart((c) => c + 1);

  // Land at the top when arriving from the "View Full Collection" link.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5eae7_0%,#f1e1de_55%,#f3e7e4_100%)] bg-fixed text-left font-sans text-holan-ink selection:bg-holan-rose-soft selection:text-holan-ink">
      <CatalogHeader cartCount={cart} />

      <main className="mx-auto max-w-300 px-[clamp(20px,6vw,88px)]">
        <Reveal>
          <div className="pb-4 pt-12 text-center sm:pt-16">
            <div className="mb-3 text-[12px] uppercase tracking-[0.26em] text-holan-rail">
              The full catalog
            </div>
            <h1 className="m-0 font-holan-serif text-[40px] font-semibold leading-[1.05] text-holan-ink sm:text-[58px]">
              Our Full Collection
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-[1.6] text-holan-ink-soft">
              Browse every hand-poured fragrance we carry, filter by scent
              family, and message us to order.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <CatalogBrowser onAdd={addToCart} />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

export default FullCollectionPage;
