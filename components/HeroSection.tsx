import { brand, formatWon, hero, pricing } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-cream to-cream pt-28 sm:pt-32"
    >
      {/* 배경 장식 — 악보/음표 대신 부드러운 톤의 면 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-clay-100/70 blur-3xl"
      />

      <div className="container-page relative px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="max-w-3xl animate-fadeUp">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="mt-5 whitespace-pre-line text-[1.9rem] font-bold leading-[1.35] tracking-tight text-ink sm:text-4xl sm:leading-[1.3] lg:text-[3.1rem] lg:leading-[1.25]">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ink-soft sm:text-lg sm:leading-relaxed">
            {hero.subcopy}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#apply" className="btn-primary w-full sm:w-auto">
              {hero.primaryCta}
            </a>
            <a href="#curriculum" className="btn-secondary w-full sm:w-auto">
              {hero.secondaryCta}
            </a>
          </div>

          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-clay-100 px-3 py-1 text-xs font-semibold text-clay-500">
              얼리버드
            </span>
            {hero.note}
          </p>
        </div>

        {/* 핵심 정보 스트립 */}
        <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] shadow-card sm:mt-16">
          {hero.facts.map((fact) => (
            <div key={fact.label} className="bg-white px-4 py-5 text-center sm:px-6 sm:py-6">
              <dt className="text-xs font-medium text-ink-muted sm:text-sm">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-base font-bold text-ink sm:text-xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-center text-xs text-ink-muted sm:text-sm">
          {brand.workshopTitle} · {brand.subtitle} · 얼리버드 패키지{" "}
          <strong className="font-semibold text-brand-600">
            {formatWon(pricing.package.earlyBird)}
          </strong>
        </p>
      </div>
    </section>
  );
}
