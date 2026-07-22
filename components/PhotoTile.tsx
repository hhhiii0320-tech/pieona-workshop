"use client";

import { useState } from "react";

/**
 * 사진이 아직 없거나(placeholder 경로) 로드에 실패하면
 * 브랜드 톤의 부드러운 그라데이션 + alt 텍스트로 대체합니다.
 * public/images 에 실제 파일을 넣으면 자동으로 사진이 보입니다.
 */
export default function PhotoTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-brand-100 to-cream-deep p-4 text-center ${className}`}
      >
        <span className="text-[0.75rem] font-medium leading-relaxed text-brand-600/70">
          {alt}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  );
}
