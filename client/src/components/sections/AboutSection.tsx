import { Clock, Droplets, Sprout } from "lucide-react";
import aboutImg from "@/assets/images/perfume-with-box-example-nobg.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 items-center gap-8 pb-10 pt-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 lg:pb-14 lg:pt-20"
    >
      <div className="relative h-72 sm:h-80 lg:h-95">
        <img
          src={aboutImg}
          alt="Hola N. perfume with its signature box"
          className="h-full w-full object-contain drop-shadow-[0_26px_34px_rgba(120,80,85,0.22)]"
        />
      </div>
      <div>
        <div className="mb-3.5 text-[12px] uppercase tracking-[0.26em] text-holan-rail">
          Our story
        </div>
        <h2 className="mb-5 font-holan-serif text-[32px] font-semibold text-holan-ink sm:text-[40px]">
          All about{" "}
          <span className="font-holan-script text-[38px] font-normal text-holan-rose-deep sm:text-[46px]">
            Hola N.
          </span>
        </h2>
        <p className="mb-3.75 text-[15.5px] leading-[1.65] text-holan-ink-soft">
          Hola N. began as a small family passion — the simple wish to make
          beautiful, long-lasting fragrance something everyone could enjoy.
          Every bottle is filled by hand and finished with our signature label.
        </p>
        <p className="mb-7.5 text-[15.5px] leading-[1.65] text-holan-ink-soft">
          We recreate the scents you already adore in soft, wearable eau de
          parfum — from bright florals to warm, cozy ambers — so your favourite
          fragrance can stay with you all day.
        </p>
        <div className="flex flex-wrap gap-10">
          <div className="text-center">
            <Clock
              size={30}
              strokeWidth={1.4}
              color="var(--color-holan-rose-deep)"
              className="mx-auto mb-2.25"
            />
            <div className="text-[13px] font-semibold text-holan-ink">
              Long lasting
            </div>
          </div>
          <div className="text-center">
            <Sprout
              size={30}
              strokeWidth={1.4}
              color="var(--color-holan-rose-deep)"
              className="mx-auto mb-2.25"
            />
            <div className="text-[13px] font-semibold text-holan-ink">
              Hand-poured
            </div>
          </div>
          <div className="text-center">
            <Droplets
              size={30}
              strokeWidth={1.4}
              color="var(--color-holan-rose-deep)"
              className="mx-auto mb-2.25"
            />
            <div className="text-[13px] font-semibold text-holan-ink">
              Fresh scent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
