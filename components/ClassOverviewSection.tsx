import { classOverview, classes, logistics } from "@/lib/constants";

export default function ClassOverviewSection() {
  return (
    <section id="curriculum" className="section bg-cream">
      <div className="container-page">
        <p className="eyebrow">Curriculum</p>
        <h2 className="section-title mt-3">{classOverview.title}</h2>
        <p className="section-lead">{classOverview.lead}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {classes.map((cls) => (
            <article
              key={cls.id}
              className="flex flex-col rounded-2xl border border-black/[0.06] bg-white p-6 shadow-card sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
                  {cls.label}
                </span>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                  {cls.tagline}
                </span>
                <span className="text-xs font-medium text-ink-muted">
                  {cls.time} · {cls.duration} · {cls.instructor} 진행
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold leading-snug text-ink sm:text-[1.4rem]">
                {cls.title}
              </h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-ink-soft">
                {cls.summary}
              </p>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                  핵심 내용
                </p>
                <ul className="mt-3 space-y-2">
                  {cls.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-soft"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-xl bg-cream-deep/60 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                  진행 순서
                </p>
                <ul className="mt-3 space-y-2">
                  {cls.timetable.map((row) => (
                    <li key={row.label} className="flex gap-3 text-[0.85rem]">
                      <span className="w-14 shrink-0 font-semibold text-brand-600">
                        {row.time}
                      </span>
                      <span className="text-ink-soft">
                        <strong className="font-semibold text-ink">{row.label}</strong>
                        {row.desc ? ` — ${row.desc}` : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                  참여자 결과물
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cls.outcome.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-brand-50 px-3 py-1.5 text-[0.8rem] font-medium text-brand-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.8rem] text-ink-muted">
                  포함 사항 · {cls.includes}
                </p>
              </div>

              <a href="#pricing" className="btn-secondary mt-7 w-full">
                {cls.applyLabel}
              </a>
            </article>
          ))}
        </div>

        {/* 객관 정보 스트립 */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-card sm:flex-row sm:items-center sm:gap-6 sm:px-7">
          <div className="flex items-center gap-2 text-[0.85rem]">
            <span className="font-semibold text-brand-600">시간</span>
            <span className="text-ink-soft">
              1교시 {logistics.sessions[0].time} · 2교시 {logistics.sessions[1].time}
            </span>
          </div>
          <div className="hidden h-4 w-px bg-black/10 sm:block" />
          <div className="flex items-center gap-2 text-[0.85rem]">
            <span className="font-semibold text-brand-600">장소</span>
            <span className="text-ink-soft">{logistics.place}</span>
          </div>
          <div className="hidden h-4 w-px bg-black/10 sm:block" />
          <div className="flex items-center gap-2 text-[0.85rem]">
            <span className="rounded-full bg-clay-100 px-2.5 py-0.5 text-[0.72rem] font-semibold text-clay-500">
              패키지 혜택
            </span>
            <span className="text-ink-soft">샌드위치 제공</span>
          </div>
        </div>
        <p className="mt-2 text-[0.75rem] text-ink-muted">{logistics.placeNote}</p>
      </div>
    </section>
  );
}
