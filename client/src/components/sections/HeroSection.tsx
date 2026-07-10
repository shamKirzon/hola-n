import { SprayCan } from "lucide-react";
import { fbUrl } from "@/data/holaN";
import bottleImg from "@/assets/hola-bottle.png";
import FacebookIcon from "@/components/ui/FacebookIcon";

interface HeroSectionProps {
  onAdd: () => void;
}

const HeroSection = ({ onAdd }: HeroSectionProps) => {
  return (
    <section className="relative pb-12 pt-9">
      <svg
        className="absolute -left-7.5 -top-1.5 z-0 hidden h-47.5 w-47.5 text-holan-rose opacity-[0.26] lg:block"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      >
        <path d="M40 170 C60 120 70 90 95 60"></path>
        <path
          d="M95 60 c-18 -6 -30 4 -30 20 c16 2 28 -6 30 -20Z"
          fill="currentColor"
          fillOpacity={0.16}
        ></path>
        <path
          d="M78 108 c-18 -4 -30 6 -28 22 c16 0 27 -8 28 -22Z"
          fill="currentColor"
          fillOpacity={0.12}
        ></path>
        <circle cx={98} cy={52} r={4} fill="currentColor"></circle>
      </svg>

      <div className="relative z-2 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[56px_1fr_0.9fr] lg:items-center lg:gap-0">
        <div className="hidden items-center gap-4.5 sm:flex sm:flex-row sm:justify-start lg:flex-col lg:justify-center">
          <div className="hidden h-30 w-px bg-holan-line lg:block"></div>
          <div className="rotate-0 text-[11px] uppercase tracking-[0.32em] text-holan-rail [writing-mode:horizontal-tb] lg:rotate-180 lg:[writing-mode:vertical-rl]">
            Hand-poured · Hola Nayan
          </div>
          <a
            href={fbUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-holan-rail"
          >
            <FacebookIcon size={17} />
          </a>
        </div>

        <div className="px-0 lg:px-7">
          <div className="hidden mb-3.5 text-[12px] uppercase tracking-[0.3em] text-holan-hero-eyebrow sm:block sm:text-[13px]">
            Hand-poured eau de parfum
          </div>
          <h1 className="m-0 font-holan-serif text-[40px] font-bold leading-[0.95] tracking-[-0.01em] text-holan-hero-title sm:text-[52px] lg:text-[70px]">
            Your everyday
            <br />
            signature <em className="font-medium italic">scent</em>
          </h1>
          <div className="mb-6.5 mt-5.5 flex items-center gap-3.5">
            <span className="h-[1.5px] w-8.5 bg-holan-rose"></span>
            <span className="text-[15px] uppercase tracking-[0.14em] text-holan-hero-sub">
              Hola N. · Eau de Parfum
            </span>
          </div>
          <p className="mb-7.5 max-w-100 text-[16px] leading-[1.65] text-holan-ink-soft">
            Soft, long-lasting fragrance poured by hand and finished with our
            signature label — featuring our customers' favorite perfumes,
            made to stay with you all day.
          </p>
          <div className="mb-7.5 flex items-center gap-3.5">
            <SprayCan
              size={32}
              strokeWidth={1.4}
              color="var(--color-holan-hero-eyebrow)"
            />
            <div className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] px-5 py-2.25 text-sm font-semibold tracking-[0.06em] text-white shadow-[0_8px_18px_rgba(120,80,85,0.28)]">
              50 ML
            </div>
            <span className="text-[13px] text-holan-rail">
              Single size · 1.7 fl.oz
            </span>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6.5">
            <a
              href={fbUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onAdd}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-white shadow-[0_10px_22px_rgba(120,80,85,0.28)] transition hover:opacity-90 sm:w-auto sm:py-2.75"
            >
              <FacebookIcon size={16} />
              Message to order
            </a>
            <a
              href="#collection"
              className="flex w-full items-center justify-center border-b-[1.5px] border-holan-rose pb-2 text-[12px] font-semibold uppercase tracking-widest text-holan-ink sm:w-auto sm:pb-1"
            >
              Explore the collection
            </a>
          </div>
        </div>

        <div className="relative flex min-h-80 items-center justify-center lg:min-h-100">
          <div className="absolute h-60 w-60 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.7),rgba(255,255,255,0)_72%)] sm:h-72 sm:w-72 lg:h-82.5 lg:w-82.5"></div>
          <div className="absolute h-56 w-56 rounded-full border border-holan-line sm:h-64 sm:w-64 lg:h-75 lg:w-75"></div>
          <img
            src={bottleImg}
            alt="Hola N. eau de parfum bottle"
            className="relative z-2 h-80 max-w-full rotate-[-7deg] object-contain drop-shadow-[0_26px_30px_rgba(120,80,85,0.32)] sm:h-96 lg:h-115"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
