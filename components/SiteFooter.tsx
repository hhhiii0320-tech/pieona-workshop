import { brand, links } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-cream-deep/50 px-5 py-10 sm:px-8">
      <div className="container-page flex flex-col items-center gap-5 text-center">
        <p className="text-sm font-bold text-ink">{brand.company}</p>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-[0.82rem] font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-600"
          >
            공식 홈페이지
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-[0.82rem] font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-600"
          >
            인스타그램
          </a>
          <a
            href={links.inquiry}
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-[0.82rem] font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-600"
          >
            이메일 문의
          </a>
        </div>

        <p className="text-[0.75rem] text-ink-muted">
          © {new Date().getFullYear()} {brand.company}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
