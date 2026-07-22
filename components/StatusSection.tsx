import { formatDeadline, statusSection, workshopStatus } from "@/lib/constants";

export default function StatusSection() {
  const { capacity, minimumOpen, currentApplicants, packageApplicants, earlyBirdDeadline } =
    workshopStatus;

  const isEmpty = currentApplicants <= 0;
  const ratio = Math.min(currentApplicants / capacity, 1);
  // 0명일 때도 비어 보이지 않도록 최소 게이지를 유지합니다.
  const barWidth = isEmpty ? 6 : Math.max(ratio * 100, 8);
  const remaining = Math.max(capacity - currentApplicants, 0);
  const deadline = formatDeadline(earlyBirdDeadline);

  return (
    <section className="section bg-cream">
      <div className="container-page">
        <div className="rounded-3xl border border-black/[0.06] bg-white p-6 shadow-card sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="eyebrow">Status</p>
              <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                {statusSection.title}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-clay-100 px-3.5 py-1.5 text-xs font-bold text-clay-500">
              ★ {statusSection.badge}
            </span>
          </div>

          {/* 진행률 바 */}
          <div className="mt-7">
            <div className="flex items-end justify-between text-sm">
              <p className="font-semibold text-ink">
                {isEmpty ? (
                  <span className="text-brand-600">신청 준비 중</span>
                ) : (
                  <>
                    현재 <span className="text-brand-600">{currentApplicants}명</span> 신청
                    {packageApplicants > 0 && (
                      <span className="ml-1.5 text-xs font-medium text-ink-muted">
                        (패키지 {packageApplicants}명)
                      </span>
                    )}
                  </>
                )}
              </p>
              <p className="text-xs text-ink-muted">정원 {capacity}명</p>
            </div>

            <div className="relative mt-3 h-3 w-full overflow-hidden rounded-full bg-cream-deep">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  isEmpty
                    ? "bg-brand-200"
                    : "bg-gradient-to-r from-brand-400 to-brand-600"
                }`}
                style={{ width: `${barWidth}%` }}
              />
              {/* 최소 개설 인원 표시 */}
              <span
                aria-hidden
                className="absolute top-0 h-full w-px bg-ink/25"
                style={{ left: `${(minimumOpen / capacity) * 100}%` }}
              />
            </div>

            <div className="mt-2 flex justify-between text-[0.72rem] text-ink-muted">
              <span>0명</span>
              <span
                className="relative"
                style={{ marginRight: `${100 - (minimumOpen / capacity) * 100 - 4}%` }}
              >
                최소 개설 {minimumOpen}명
              </span>
              <span>{capacity}명</span>
            </div>
          </div>

          {isEmpty && (
            <p className="mt-6 whitespace-pre-line rounded-xl bg-brand-50 px-5 py-4 text-[0.9rem] font-medium leading-relaxed text-brand-700">
              {statusSection.emptyStateCopy}
            </p>
          )}

          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-black/[0.06] sm:grid-cols-3">
            <div className="bg-white px-5 py-4">
              <dt className="text-xs text-ink-muted">전체 정원</dt>
              <dd className="mt-1 text-lg font-bold text-ink">{capacity}명</dd>
            </div>
            <div className="bg-white px-5 py-4">
              <dt className="text-xs text-ink-muted">최소 개설 인원</dt>
              <dd className="mt-1 text-lg font-bold text-ink">{minimumOpen}명</dd>
            </div>
            <div className="bg-white px-5 py-4">
              <dt className="text-xs text-ink-muted">
                {isEmpty ? "얼리버드 마감" : "잔여석"}
              </dt>
              <dd className="mt-1 text-lg font-bold text-ink">
                {isEmpty
                  ? deadline ?? "일정 확정 후 안내"
                  : `${remaining}석`}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-4 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.85rem] leading-relaxed text-ink-muted">
              {statusSection.scarcityCopy}
              {deadline && !isEmpty && ` · 얼리버드 마감 ${deadline}`}
            </p>
            <a href="#apply" className="btn-primary w-full shrink-0 sm:w-auto">
              패키지로 신청하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
