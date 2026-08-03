import {
  discountTiers,
  formatWon,
  packageProofCopy,
  packageProofMode,
  pricing,
  pricingNotes,
} from "@/lib/constants";

const singleCards = [pricing.class1, pricing.class2];

export default function PricingSection() {
  const pkg = pricing.package;

  return (
    <section id="pricing" className="section bg-white">
      <div className="container-page">
        <p className="eyebrow">Pricing</p>
        <h2 className="section-title mt-3">수강료 안내</h2>
        <p className="section-lead">
          현재 정가 기간 할인가가 적용됩니다. 단독 수강도 가능하지만, 두 강의가
          하나의 흐름으로 이어지는 패키지 수강을 가장 추천합니다.
        </p>

        {/* 패키지 카드 — 모바일에서 가장 먼저 보이도록 order 조정 */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-start">
          <div className="order-1 rounded-[1.4rem] bg-gradient-to-b from-brand-600 to-brand-700 p-[3px] shadow-lift lg:order-2 lg:-mt-4">
            <div className="relative flex h-full flex-col rounded-[1.25rem] bg-white p-6 sm:p-7">
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-clay-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                ★ {pkg.badge}
              </span>

              <div className="mt-2">
                <h3 className="text-xl font-bold text-ink">{pkg.title}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-600">
                  {pkg.subtitle}
                </p>
              </div>

              <div className="mt-5 border-y border-black/[0.06] py-5">
                <p className="text-sm text-ink-muted">
                  정가{" "}
                  <span className="line-through">{formatWon(pkg.regular)}</span>
                </p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="rounded-md bg-clay-500 px-1.5 py-0.5 text-[0.7rem] font-bold text-white">
                    {pkg.discountRate}%
                  </span>
                  <span className="text-3xl font-bold tracking-tight text-ink sm:text-[2.1rem]">
                    {formatWon(pkg.earlyBird)}
                  </span>
                </p>
                <p className="mt-1.5 text-xs text-ink-muted">{pkg.duration}</p>
              </div>

              <ul className="mt-5 flex-1 space-y-2.5">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-[0.88rem] leading-relaxed text-ink-soft"
                  >
                    <span aria-hidden className="font-bold text-brand-500">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#apply" className="btn-primary mt-6 w-full text-base">
                {pkg.cta}
              </a>
              <p className="mt-3 text-center text-[0.78rem] leading-relaxed text-ink-muted">
                {packageProofCopy[packageProofMode]}
              </p>
            </div>
          </div>

          {/* 단독 카드 */}
          {singleCards.map((card, index) => (
            <div
              key={card.key}
              className={`flex h-full flex-col rounded-2xl border border-black/[0.07] bg-cream p-6 ${
                index === 0 ? "order-2 lg:order-1" : "order-3 lg:order-3"
              }`}
            >
              <h3 className="text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{card.subtitle}</p>

              <div className="mt-5 border-y border-black/[0.06] py-5">
                <p className="text-sm text-ink-muted">
                  정가{" "}
                  <span className="line-through">
                    {formatWon(card.regular)}
                  </span>
                </p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="rounded-md bg-clay-500 px-1.5 py-0.5 text-[0.7rem] font-bold text-white">
                    {card.discountRate}%
                  </span>
                  <span className="text-2xl font-bold tracking-tight text-ink">
                    {formatWon(card.earlyBird)}
                  </span>
                </p>
                <p className="mt-1.5 text-xs text-ink-muted">{card.duration}</p>
              </div>

              <ul className="mt-5 flex-1 space-y-2.5">
                {card.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-[0.85rem] leading-relaxed text-ink-soft"
                  >
                    <span aria-hidden className="text-brand-300">
                      ·
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#apply" className="btn-ghost mt-6 w-full bg-white">
                {card.cta}
              </a>
            </div>
          ))}
        </div>

        {/* 할인 안내 */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl bg-cream-deep/60 p-6">
            <p className="text-sm font-bold text-ink">
              정가 기간 할인 대상
            </p>
            <div className="mt-4 space-y-4">
              {discountTiers.map((tier) => (
                <div key={tier.rate} className="flex gap-4">
                  <span className="mt-0.5 h-fit shrink-0 rounded-lg bg-brand-600 px-2.5 py-1 text-xs font-bold text-white">
                    {tier.rate}
                  </span>
                  <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[0.85rem] text-ink-soft">
                    {tier.targets.map((target) => (
                      <li key={target} className="after:ml-2 after:text-ink-muted/50 after:content-['·'] last:after:content-['']">
                        {target}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <ul className="space-y-2.5 rounded-2xl border border-black/[0.06] p-6">
            {pricingNotes.map((note) => (
              <li
                key={note}
                className="flex gap-2 text-[0.85rem] leading-relaxed text-ink-muted"
              >
                <span aria-hidden>·</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
