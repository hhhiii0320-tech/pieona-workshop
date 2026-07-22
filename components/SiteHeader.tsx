"use client";

import { useEffect, useState } from "react";
import { brand, formatWon, pricing } from "@/lib/constants";

const navItems = [
  { href: "#pain", label: "고민" },
  { href: "#curriculum", label: "커리큘럼" },
  { href: "#pricing", label: "수강료" },
  { href: "#apply", label: "신청 방법" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/[0.06] bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex min-w-0 items-baseline gap-2">
          <span className="text-base font-bold tracking-tight text-ink">
            {brand.shortName}
          </span>
          <span className="hidden truncate text-sm text-ink-muted sm:inline">
            치료적 노래 만들기 워크숍
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#apply"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition-colors hover:bg-brand-700 sm:inline-flex"
        >
          패키지 신청
          <span className="text-brand-100">
            {formatWon(pricing.package.earlyBird)}
          </span>
        </a>
      </div>
    </header>
  );
}
