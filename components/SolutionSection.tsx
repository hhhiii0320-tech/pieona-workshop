import { solution } from "@/lib/constants";

export default function SolutionSection() {
  return (
    <section id="solution" className="section bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Solution</p>
            <h2 className="section-title mt-3">{solution.title}</h2>
            <div className="mt-5 space-y-4">
              {solution.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[0.95rem] leading-relaxed text-ink-soft sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-cream-deep/70 p-6 sm:p-8">
            <p className="text-sm font-semibold text-brand-600">
              {solution.flowTitle}
            </p>
            <ol className="mt-6 space-y-1">
              {solution.flow.map((item, index) => (
                <li key={item.step} className="relative flex gap-4 pb-6 last:pb-0">
                  {index !== solution.flow.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[1.1rem] top-9 h-full w-px bg-brand-200"
                    />
                  )}
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {item.step}
                  </span>
                  <div className="pt-1">
                    <p className="text-[0.95rem] font-bold text-ink sm:text-base">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
