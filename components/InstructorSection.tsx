"use client";

import { useState } from "react";
import PhotoTile from "./PhotoTile";
import { instructorSection, instructors } from "@/lib/constants";

function InstructorCard({
  instructor,
}: {
  instructor: (typeof instructors)[number];
}) {
  const [open, setOpen] = useState(false);
  const hasCredentials = instructor.credentials.length > 0;

  return (
    <li className="flex flex-col gap-5 rounded-2xl border border-black/[0.06] bg-cream p-6 shadow-card sm:flex-row sm:p-7">
      {instructor.photo ? (
        <PhotoTile
          src={instructor.photo}
          alt={`${instructor.name} 강사`}
          className="h-20 w-20 shrink-0 rounded-full sm:h-24 sm:w-24"
        />
      ) : (
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-200 text-2xl font-bold text-brand-700 sm:h-24 sm:w-24">
          {instructor.name.slice(0, 1)}
        </div>
      )}

      <div className="min-w-0">
        <p className="text-xs font-semibold text-brand-600">{instructor.role}</p>
        <h3 className="mt-1 text-lg font-bold text-ink">{instructor.name}</h3>
        <p className="mt-0.5 text-[0.85rem] font-medium text-ink-soft">
          {instructor.sessionTitle}
        </p>

        <p className="mt-3 text-[0.85rem] leading-relaxed text-ink-soft">
          {instructor.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {instructor.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white px-2.5 py-1 text-[0.72rem] font-medium text-brand-600 ring-1 ring-brand-200"
            >
              #{tag}
            </li>
          ))}
        </ul>

        {hasCredentials && (
          <div className="mt-5">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="flex items-center gap-1.5 text-[0.8rem] font-semibold text-brand-600"
            >
              주요 이력 {open ? "접기" : "펼치기"}
              <span
                aria-hidden
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <ul className="overflow-hidden">
                {instructor.credentials.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 border-t border-black/[0.06] py-1.5 text-[0.82rem] leading-relaxed text-ink-soft first:border-t-0"
                  >
                    <span aria-hidden className="text-brand-300">
                      ·
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default function InstructorSection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <p className="eyebrow">Instructors</p>
        <h2 className="section-title mt-3">{instructorSection.title}</h2>
        <p className="section-lead">{instructorSection.lead}</p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.role} instructor={instructor} />
          ))}
        </ul>

        <p className="mt-6 text-[0.75rem] leading-relaxed text-ink-muted">
          ※ 강사 소개는 담당 주제 중심의 안내이며, 확정 이력 확인 후 상세 프로필로 교체될 수 있습니다.
        </p>
      </div>
    </section>
  );
}
