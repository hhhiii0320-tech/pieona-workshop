import { formatWon, hero, links, pricing } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-cream to-cream pt-16 sm:pt-28"
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

      <div className="container-page relative px-5 pb-8 sm:px-8 sm:pb-16">
        <div className="animate-fadeUp">
          {/* 라벨 — 대상 명확화 */}
          <p className="eyebrow text-xs sm:text-sm">{hero.eyebrow}</p>

          {/* 메인 제목 */}
          <h1 className="mt-3 text-[1.6rem] font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-3xl sm:leading-snug lg:text-4xl lg:leading-snug">
            {hero.headline}
          </h1>

          {/* 핵심 질문 */}
          <p className="mt-3 text-[0.92rem] font-medium leading-relaxed text-ink sm:mt-4 sm:text-base">
            {hero.coreQuestion}
          </p>

          {/* 일정·장소·정원 */}
          <div className="mt-4 space-y-1 text-xs sm:text-sm">
            <p className="text-ink-soft">{hero.workshopInfo}</p>
            <p className="text-ink-soft">{hero.workshopDetail}</p>
          </div>

          {/* 가격·마감 */}
          <div className="mt-4 rounded-lg bg-clay-100/60 px-3 py-2.5 sm:px-4 sm:py-3">
            <p className="text-xs font-medium text-clay-600 sm:text-sm">
              {hero.earlyBirdPrice}
            </p>
            <p className="mt-1 text-xs text-clay-500">{hero.earlyBirdDeadline}</p>
          </div>

          {/* 주요 CTA */}
          <a
            href={links.applyPackage}
            className="btn-primary mt-4 w-full sm:mt-5"
          >
            {hero.primaryCta}
          </a>

          {/* CTA 보조 문구 */}
          <p className="mt-2 text-center text-xs text-ink-muted">
            {hero.primaryCtaNote}
          </p>
        </div>
      </div>
    </section>
  );
}
