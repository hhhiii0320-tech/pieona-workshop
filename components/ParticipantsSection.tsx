import {
  links,
  participantDisplayMode,
  participants,
  participantsSection,
} from "@/lib/constants";

export default function ParticipantsSection() {
  return (
    <section id="participants" className="section bg-white">
      <div className="container-page">
        <p className="eyebrow">Who Joins</p>
        <h2 className="section-title mt-3">{participantsSection.title}</h2>
        <p className="section-lead">{participantsSection.lead}</p>
      </div>

      {/* 모바일: 가로 스와이프 / 데스크톱: 그리드 */}
      <div className="mt-9">
        <ul className="swipe-row container-page flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-8">
          {participants.map((person) => (
            <li
              key={person.name}
              className="w-[80%] shrink-0 snap-start rounded-2xl border border-black/[0.06] bg-cream p-6 shadow-card sm:w-[46%] lg:w-auto"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-600">
                  {person.name.replace(/님$/, "").slice(-1)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[0.85rem] font-bold text-ink">
                    {person.name}
                  </p>
                  <p className="truncate text-[0.72rem] text-brand-600">
                    {person.type}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-soft">
                “{person.quote}”
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page mt-6 px-5 sm:px-8">
        <p className="text-[0.78rem] leading-relaxed text-ink-muted">
          {participantsSection.disclaimer[participantDisplayMode]}
        </p>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-cream-deep/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.9rem] font-medium leading-relaxed text-ink">
            아직 신청이 망설여진다면, 고민을 남겨주세요. 오픈 소식과 커리큘럼을
            먼저 안내해드립니다.
          </p>
          <a
            href={links.waitlist}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full shrink-0 sm:w-auto"
          >
            {participantsSection.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
