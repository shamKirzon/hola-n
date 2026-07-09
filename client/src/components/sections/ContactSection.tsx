import { fbUrl } from "@/data/holaN";
import FacebookIcon from "@/components/ui/FacebookIcon";

const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-holan-line pb-10 pt-16">
      <div className="grid grid-cols-1 items-center gap-8 pt-8 lg:grid-cols-2 lg:gap-14 lg:pt-14">
        <div>
          <div className="font-holan-script text-[40px] leading-none text-holan-rose-deep">
            Hola N.
          </div>
          <h2 className="mb-4 mt-2 font-holan-serif text-[30px] font-semibold text-holan-ink sm:text-[38px]">
            Get in touch
          </h2>
          <p className="mb-6.5 max-w-95 text-[15.5px] leading-[1.65] text-holan-ink-soft">
            Ready to find your scent? Send us a message on Facebook and
            we&apos;ll help you place your order.
          </p>
          <a
            href={fbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] px-5 py-2.75 text-[13px] font-semibold uppercase tracking-[0.04em] text-white shadow-[0_10px_22px_rgba(120,80,85,0.28)] transition hover:opacity-90"
          >
            <FacebookIcon size={18} />
            Message Hola Nayan
          </a>
        </div>
        <div className="flex flex-col gap-5.5">
          <div className="border-l-2 border-holan-rose pl-4">
            <div className="mb-1 text-[12px] uppercase tracking-[0.14em] text-holan-ink-faint">
              Facebook
            </div>
            <div className="text-[16px] text-holan-ink">Hola Nayan</div>
          </div>
          <div className="border-l-2 border-holan-rose pl-4">
            <div className="mb-1 text-[12px] uppercase tracking-[0.14em] text-holan-ink-faint">
              Phone
            </div>
            <div className="text-[16px] text-holan-ink">+63 900 000 0000</div>
          </div>
          <div className="border-l-2 border-holan-rose pl-4">
            <div className="mb-1 text-[12px] uppercase tracking-[0.14em] text-holan-ink-faint">
              Pick-up address
            </div>
            <div className="text-[16px] leading-[1.4] text-holan-ink">
              123 Magandang Binibini Street,
              <br />
              Dubai, United Arab Emirates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
