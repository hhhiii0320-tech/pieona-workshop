import { recommendedFor } from "@/lib/constants";

export default function RecommendedForSection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <p className="eyebrow">Recommended For</p>
        <h2 className="section-title mt-3">{recommendedFor.title}</h2>

        <ul className="mt-9 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-2">
          {recommendedFor.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-b border-black/[0.06] py-3.5 text-[0.93rem] leading-relaxed text-ink-soft"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[0.65rem] font-bold text-brand-600"
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 rounded-2xl bg-brand-50 px-5 py-4 text-[0.9rem] font-semibold leading-relaxed text-brand-700">
          {recommendedFor.note}
        </p>
      </div>
    </section>
  );
}
