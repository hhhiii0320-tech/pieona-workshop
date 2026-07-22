"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PhotoTile from "./PhotoTile";

type Photo = { src: string; alt: string; caption: string };

/**
 * 사진 4장 이상이면 자동으로 넘어가는 슬라이더.
 * 4장 미만이면 자동 슬라이드 없이 정적 그리드로 표시합니다.
 * 마우스 오버 / 터치 중에는 자동 재생을 잠시 멈춥니다.
 */
export default function PhotoSlider({
  photos,
  intervalMs = 4000,
  aspect = "aspect-[4/5]",
}: {
  photos: Photo[];
  intervalMs?: number;
  aspect?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoSlide = photos.length >= 4;

  const goTo = useCallback(
    (i: number) => setIndex(((i % photos.length) + photos.length) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    if (!autoSlide || paused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoSlide, paused, intervalMs, photos.length]);

  if (!autoSlide) {
    return (
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {photos.map((photo) => (
          <li
            key={photo.src}
            className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-card"
          >
            <PhotoTile src={photo.src} alt={photo.alt} className={`w-full ${aspect}`} />
            <p className="px-3.5 py-3 text-[0.8rem] leading-snug text-ink-soft">
              {photo.caption}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-card">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {photos.map((photo) => (
            <div key={photo.src} className="w-full shrink-0">
              <PhotoTile src={photo.src} alt={photo.alt} className={`w-full ${aspect}`} />
            </div>
          ))}
        </div>
        <p className="px-4 py-3 text-[0.85rem] leading-snug text-ink-soft">
          {photos[index].caption}
        </p>
      </div>

      {/* 이전/다음 */}
      <button
        type="button"
        aria-label="이전 사진"
        onClick={() => goTo(index - 1)}
        className="absolute left-2 top-[38%] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-card transition hover:bg-white"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="다음 사진"
        onClick={() => goTo(index + 1)}
        className="absolute right-2 top-[38%] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-card transition hover:bg-white"
      >
        ›
      </button>

      {/* 인디케이터 */}
      <div className="mt-3 flex justify-center gap-1.5">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`${i + 1}번째 사진으로 이동`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-brand-500" : "w-1.5 bg-brand-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
