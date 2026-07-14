import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/holaN";

const TestimonialsSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="pb-10 pt-14 lg:pb-14 lg:pt-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-10">
        <div>
          <div className="mb-3 text-[12px] uppercase tracking-[0.26em] text-holan-rail">
            What people say
          </div>
          <h2 className="m-0 font-holan-serif text-[32px] font-semibold text-holan-ink sm:text-[42px]">
            Reflections of Satisfaction
          </h2>
        </div>
        <div className="flex items-center gap-5.5">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByAmount(-362)}
            className="flex cursor-pointer items-center border-none bg-transparent p-0 text-holan-ink-soft"
          >
            <ChevronLeft size={26} strokeWidth={1.6} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByAmount(362)}
            className="flex cursor-pointer items-center border-none bg-transparent p-0 text-holan-rose-deep"
          >
            <ChevronRight size={26} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-0.5 pb-2 pt-1 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r) => (
          <div
            key={r.name}
            className="flex shrink-0 grow-0 basis-full flex-col snap-start border-t border-holan-line pt-6.5 sm:basis-82.5"
          >
            <div className="h-6.5 font-holan-serif text-[56px] leading-[0.4] text-holan-rose-soft">
              &ldquo;
            </div>
            <p className="mb-6.5 text-[15px] leading-[1.7] text-holan-ink-soft">
              {r.quote}
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-holan-rose-soft text-[15px] font-semibold text-holan-rose-deep">
                {r.initial}
              </div>
              <div>
                <div className="text-sm font-semibold text-holan-ink">
                  {r.name}
                </div>
                <div className="text-[12px] text-holan-ink-faint">
                  {r.place}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
