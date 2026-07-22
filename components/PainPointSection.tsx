import { painPoint } from "@/lib/constants";

export default function PainPointSection() {
  return (
    <section id="pain" className="section bg-cream">
      <div className="container-page">
        <p className="eyebrow">Pain Point</p>
        <h2 className="section-title mt-3">{painPoint.title}</h2>
        <p className="section-lead">{painPoint.lead}</p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoint.items.map((item, index) => (
            <li
              key={item}
              className="card group flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.95rem] leading-relaxed text-ink-soft">
                {item}
              </p>
            </li>
          ))}

          <li className="flex flex-col justify-center gap-3 rounded-2xl border border-dashed border-brand-200 bg-brand-50/60 p-6">
            <p className="text-[0.95rem] font-semibold leading-relaxed text-brand-700">
              어느 자리에 있든,
              <br />그 지점에서 가져갈 것이 있습니다.
            </p>
            <a
              href="#solution"
              className="text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
            >
              어떻게 다루는지 보기 →
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
