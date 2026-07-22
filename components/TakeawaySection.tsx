import { packageSection, takeaway } from "@/lib/constants";

export default function TakeawaySection() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <p className="eyebrow">Take Away</p>
        <h2 className="section-title mt-3">{takeaway.title}</h2>
        <p className="section-lead">{takeaway.lead}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {takeaway.items.map((item, index) => (
            <div key={item} className="card flex flex-col gap-3">
              <span className="text-xs font-bold text-brand-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.92rem] font-medium leading-relaxed text-ink">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.95rem] font-semibold leading-relaxed text-ink">
            {packageSection.highlight}
          </p>
          <a href="#pricing" className="btn-primary w-full shrink-0 sm:w-auto">
            {packageSection.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
