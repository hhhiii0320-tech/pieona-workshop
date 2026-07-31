export default function StatusSection() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <div className="rounded-3xl border border-black/[0.06] bg-white p-6 shadow-card sm:p-9">
          <p className="eyebrow">모집 현황</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-ink">20명</span>
              <span className="text-[0.9rem] text-ink-soft">소규모</span>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-ink-soft">
              결제 완료 시 신청이 확정됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
