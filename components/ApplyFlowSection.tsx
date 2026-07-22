import { applyFlow, links, logistics } from "@/lib/constants";

export default function ApplyFlowSection() {
  return (
    <section id="apply" className="section bg-cream">
      <div className="container-page">
        <p className="eyebrow">Apply &amp; Payment</p>
        <h2 className="section-title mt-3">{applyFlow.title}</h2>
        <p className="section-lead">{applyFlow.lead}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-10">
          {/* 3단계 */}
          <ol className="space-y-4">
            {applyFlow.steps.map((step) => (
              <li
                key={step.step}
                className="flex gap-4 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-card sm:p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <p className="text-[0.98rem] font-bold text-ink">{step.title}</p>
                  <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1.5">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg bg-cream-deep/70 px-2.5 py-1 text-[0.8rem] text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          {/* 객관 정보 + CTA */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-brand-200 bg-white p-6 shadow-lift sm:p-7">
              <p className="text-sm font-bold text-ink">진행 정보</p>

              <dl className="mt-4 space-y-3 text-[0.88rem]">
                <div className="flex gap-3">
                  <dt className="w-14 shrink-0 font-semibold text-brand-600">시간</dt>
                  <dd className="text-ink-soft">
                    {logistics.sessions.map((s) => (
                      <span key={s.label} className="block">
                        {s.label} {s.time}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="flex gap-3 border-t border-black/[0.06] pt-3">
                  <dt className="w-14 shrink-0 font-semibold text-brand-600">장소</dt>
                  <dd className="text-ink-soft">
                    {logistics.place}
                    <span className="mt-0.5 block text-[0.78rem] text-ink-muted">
                      {logistics.placeNote}
                    </span>
                  </dd>
                </div>
                <div className="flex gap-3 border-t border-black/[0.06] pt-3">
                  <dt className="w-14 shrink-0 font-semibold text-brand-600">식사</dt>
                  <dd className="text-ink-soft">{logistics.meal}</dd>
                </div>
              </dl>

              <a href={links.apply} className="btn-primary mt-6 w-full">
                {applyFlow.cta}
              </a>
              <p className="mt-3 text-center text-[0.75rem] leading-relaxed text-ink-muted">
                신청 페이지에서 수강 유형(1교시 / 2교시 / 패키지)을 선택합니다.
              </p>

              <div className="mt-5 border-t border-black/[0.06] pt-5">
                <p className="text-[0.8rem] text-ink-muted">신청 전 궁금한 점이 있으신가요?</p>
                <div className="mt-2.5 flex gap-2">
                  <a
                    href={links.inquiry}
                    className="flex-1 rounded-full border border-black/10 px-4 py-2.5 text-center text-[0.8rem] font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-600"
                  >
                    이메일 문의
                  </a>
                  <a
                    href={links.kakaoChannel}
                    className="flex-1 rounded-full border border-black/10 px-4 py-2.5 text-center text-[0.8rem] font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-600"
                  >
                    카카오톡 문의
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
