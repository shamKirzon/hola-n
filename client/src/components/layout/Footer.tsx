import { fbUrl } from "@/data/holaN";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-holan-line">
      <div className="mx-auto flex max-w-300 flex-col items-start justify-between gap-8 px-[clamp(20px,6vw,88px)] py-9 sm:flex-row sm:flex-wrap lg:py-11">
        <div>
          <div className="font-holan-script text-[30px] text-holan-rose-deep">
            Hola N.
          </div>
          <div className="mb-3.5 font-holan-serif text-[10px] uppercase tracking-[0.42em] text-holan-ink-soft">
            Eau de Parfum
          </div>
          <p className="max-w-62.5 text-[13px] leading-[1.6] text-holan-ink-faint">
            Hand-poured fragrance, made with love and finished with our
            signature label.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 sm:gap-14">
          <div>
            <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-holan-ink">
              Shop
            </div>
            <div className="flex flex-col gap-2.25 text-[13px]">
              <a
                href="#favorites"
                className="text-holan-ink-soft hover:text-holan-ink"
              >
                Favorites
              </a>
              <a
                href="#collection"
                className="text-holan-ink-soft hover:text-holan-ink"
              >
                Collection
              </a>
              <a
                href="#about"
                className="text-holan-ink-soft hover:text-holan-ink"
              >
                About
              </a>
            </div>
          </div>
          <div>
            <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-holan-ink">
              Contact
            </div>
            <div className="flex flex-col gap-2.25 text-[13px] text-holan-ink-soft">
              <a
                href={fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-holan-ink-soft hover:text-holan-ink"
              >
                Hola Nayan
              </a>
              <span>+63 900 000 0000</span>
              <span>Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-holan-line">
        <div className="mx-auto max-w-300 px-[clamp(20px,6vw,88px)] py-4.5 text-center text-[12px] text-holan-ink-faint">
          © {year} Hola N. Eau de Parfum · Hand-poured with love. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
