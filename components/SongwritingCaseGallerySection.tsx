import PhotoSlider from "./PhotoSlider";
import { songwritingGallery, songwritingGallerySection } from "@/lib/constants";

export default function SongwritingCaseGallerySection() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <p className="eyebrow">Songwriting Process</p>
        <h2 className="section-title mt-3">{songwritingGallerySection.title}</h2>
        <p className="section-lead">{songwritingGallerySection.lead}</p>

        <div className="mx-auto mt-9 max-w-xl">
          <PhotoSlider photos={songwritingGallery} aspect="aspect-[4/3]" />
        </div>

        <p className="mt-6 whitespace-pre-line text-[0.75rem] leading-relaxed text-ink-muted">
          {songwritingGallerySection.disclaimer}
        </p>
      </div>
    </section>
  );
}
