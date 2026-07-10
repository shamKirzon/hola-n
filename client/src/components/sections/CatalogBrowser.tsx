import { useMemo, useState } from "react";
import { Droplet, Search } from "lucide-react";
import { products } from "@/data/holaN";
import { scentCategories, matchesCategory } from "@/lib/scentCategories";
import type { ScentCategory } from "@/lib/scentCategories";
import ProductCard from "@/components/ui/ProductCard";

interface CatalogBrowserProps {
  onAdd: () => void;
}

const PAGE_SIZE = 12;

/**
 * The interactive catalog: free-text search, scent-family filter pills, a
 * responsive product grid, and progressive "Load More" paging. Filtering and
 * search reset the visible page so results always start from the top.
 */
const CatalogBrowser = ({ onAdd }: CatalogBrowserProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ScentCategory>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (!matchesCategory(p, category)) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.family.toLowerCase().includes(q) ||
        p.notes.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleQuery = (value: string) => {
    setQuery(value);
    setVisible(PAGE_SIZE);
  };

  const handleCategory = (next: ScentCategory) => {
    setCategory(next);
    setVisible(PAGE_SIZE);
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setVisible(PAGE_SIZE);
  };

  return (
    <section className="pb-4">
      {/* Search */}
      <div className="mx-auto mb-6 max-w-2xl">
        <label className="relative flex items-center">
          <Search
            size={18}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-5 text-holan-ink-faint"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
            placeholder="Search perfumes by name or scent..."
            aria-label="Search perfumes by name or scent"
            className="h-13 w-full rounded-full border border-holan-line bg-[rgba(255,255,255,0.6)] pl-13 pr-5 text-[14px] text-holan-ink placeholder:text-holan-ink-faint focus:border-holan-rose focus:outline-none focus:ring-2 focus:ring-holan-rose-soft"
          />
        </label>
      </div>

      {/* Filter pills */}
      <div className="mb-9 flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {scentCategories.map((cat) => {
          const active = cat === category;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategory(cat)}
              aria-pressed={active}
              className={`cursor-pointer rounded-full border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors sm:px-5 sm:py-2.5 sm:text-[13px] ${
                active
                  ? "border-transparent bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] text-white shadow-[0_8px_16px_rgba(120,80,85,0.24)]"
                  : "border-holan-rose/50 text-holan-rose-deep hover:bg-[rgba(255,255,255,0.5)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid or empty state */}
      {shown.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6.5 lg:grid-cols-4">
          {shown.map((item) => (
            <ProductCard key={item.slug} product={item} onAdd={onAdd} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center px-6 py-16 text-center">
          <Droplet
            size={56}
            strokeWidth={1.5}
            className="mb-6 text-holan-rose-deep"
          />
          <h3 className="mb-2 font-holan-serif text-[26px] font-semibold text-holan-ink">
            {query.trim()
              ? `No perfumes found for "${query.trim()}"`
              : "No perfumes found"}
          </h3>
          <p className="mb-7 max-w-sm text-[14px] leading-[1.6] text-holan-ink-soft">
            Try a different scent family or search term, or clear your
            filters to see the full collection.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="cursor-pointer rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_20px_rgba(120,80,85,0.28)] transition-transform hover:-translate-y-0.5"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="mt-11 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="cursor-pointer rounded-full border border-holan-rose/60 px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-holan-rose-deep transition-colors hover:bg-[rgba(255,255,255,0.5)]"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default CatalogBrowser;
