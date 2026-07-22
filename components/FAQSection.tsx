"use client";

import { useState } from "react";
import { faq, links } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title mt-3">{faq.title}</h2>

        <ul className="mt-9 divide-y divide-black/[0.07] border-y border-black/[0.07]">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[0.95rem] font-semibold leading-snug text-ink sm:text-base">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-deep text-sm font-bold text-brand-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-10 text-[0.9rem] leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-cream p-6 text-center">
          <p className="text-[0.9rem] text-ink-soft">
            더 궁금한 점이 있다면 편하게 물어보세요.
          </p>
          <a href={links.inquiry} className="btn-secondary">
            신청 전 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
