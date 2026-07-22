"use client";

import { useEffect, useState } from "react";
import { formatWon, links, pricing } from "@/lib/constants";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/[0.07] bg-white/95 backdrop-blur-md transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="text-[0.68rem] font-semibold text-clay-500">
            얼리버드 패키지
          </p>
          <p className="flex items-baseline gap-1.5">
            <span className="text-[1.05rem] font-bold text-ink">
              {formatWon(pricing.package.earlyBird)}
            </span>
            <span className="text-[0.7rem] text-ink-muted line-through">
              {formatWon(pricing.package.regular)}
            </span>
          </p>
        </div>
        <a
          href={links.applyPackage}
          className="shrink-0 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lift active:scale-[0.98]"
        >
          패키지 신청
        </a>
      </div>
    </div>
  );
}
