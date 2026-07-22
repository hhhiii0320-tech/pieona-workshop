import PhotoSlider from "./PhotoSlider";
import { communityGallery, communityGallerySection } from "@/lib/constants";

export default function CommunityGallerySection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <p className="eyebrow">Community</p>
        <h2 className="section-title mt-3 whitespace-pre-line">
          {communityGallerySection.title}
        </h2>
        <p className="section-lead">{communityGallerySection.lead}</p>

        <div className="mx-auto mt-9 max-w-xl">
          <PhotoSlider photos={communityGallery} aspect="aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}
