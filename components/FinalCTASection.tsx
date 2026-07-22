import { brand, finalCta, formatWon, links, pricing } from "@/lib/constants";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-800 px-5 py-20 text-white sm:px-8 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-600/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-brand-700/60 blur-3xl"
      />

      <div className="container-page relative max-w-3xl text-center">
        <h2 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-[2.3rem] lg:leading-[1.35]">
          {finalCta.title}
        </h2>
        <div className="mt-6 space-y-3">
          {finalCta.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[0.95rem] leading-relaxed text-brand-100 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm ring-1 ring-white/15">
          <span className="font-semibold text-clay-300">얼리버드</span>
          <span className="text-brand-200 line-through">
            {formatWon(pricing.package.regular)}
          </span>
          <span className="font-bold">{formatWon(pricing.package.earlyBird)}</span>
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-brand-800 transition-transform hover:bg-brand-50 active:scale-[0.98]"
          >
            {finalCta.primary}
          </a>
          <a
            href={links.inquiry}
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            {finalCta.secondary}
          </a>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-xs text-brand-200">
          {brand.company} · {brand.workshopTitle}
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          {brand.subtitle}
        </p>
      </div>
    </section>
  );
}
