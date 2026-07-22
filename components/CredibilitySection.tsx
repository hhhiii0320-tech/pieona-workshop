import { brand, credibility } from "@/lib/constants";

export default function CredibilitySection() {
  return (
    <section className="section bg-cream">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">{brand.company}</p>
        <h2 className="section-title mt-3">{credibility.title}</h2>
        <div className="mt-5 space-y-4">
          {credibility.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[0.95rem] leading-relaxed text-ink-soft"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {credibility.fields.map((field) => (
            <li
              key={field}
              className="rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-[0.8rem] font-medium text-ink-soft"
            >
              {field}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
