import { practiceSection } from "@/lib/constants";

export default function PracticeSection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <h2 className="section-title">{practiceSection.title}</h2>

        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {practiceSection.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-2xl bg-cream p-6 shadow-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-600 text-sm">
                {String(idx + 1)}
              </div>
              <p className="text-[0.95rem] font-medium leading-relaxed text-ink">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
