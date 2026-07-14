import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  heading: string;
  description: string;
  ctaLabel: string;
  onCtaClick: () => void;
}

const EmptyState = ({
  icon: Icon,
  heading,
  description,
  ctaLabel,
  onCtaClick,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center px-6 py-16 text-center">
      <Icon size={56} strokeWidth={1.5} className="mb-6 text-holan-rose-deep" />
      <h3 className="mb-2 font-holan-serif text-[26px] font-semibold text-holan-ink">
        {heading}
      </h3>
      <p className="mb-7 max-w-sm text-[14px] leading-[1.6] text-holan-ink-soft">
        {description}
      </p>
      <button
        type="button"
        onClick={onCtaClick}
        className="cursor-pointer rounded-full bg-[linear-gradient(135deg,#d49aa3,#bf7e8a)] px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_20px_rgba(120,80,85,0.28)] transition-transform hover:-translate-y-0.5"
      >
        {ctaLabel}
      </button>
    </div>
  );
};

export default EmptyState;
