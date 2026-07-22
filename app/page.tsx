import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import SolutionSection from "@/components/SolutionSection";
import ClassOverviewSection from "@/components/ClassOverviewSection";
import CommunityGallerySection from "@/components/CommunityGallerySection";
import RecommendedForSection from "@/components/RecommendedForSection";
import InstructorSection from "@/components/InstructorSection";
import SongwritingCaseGallerySection from "@/components/SongwritingCaseGallerySection";
import TakeawaySection from "@/components/TakeawaySection";
import ParticipantsSection from "@/components/ParticipantsSection";
import StatusSection from "@/components/StatusSection";
import PricingSection from "@/components/PricingSection";
import ApplyFlowSection from "@/components/ApplyFlowSection";
import CredibilitySection from "@/components/CredibilitySection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import SiteFooter from "@/components/SiteFooter";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 sm:pb-0">
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. 문제 인식 — 서로 다른 현재 위치 */}
        <PainPointSection />
        {/* 3. 워크숍의 차별점 — 선택지·과정 */}
        <SolutionSection />
        {/* 4. 1·2교시 커리큘럼 + 객관 정보 */}
        <ClassOverviewSection />
        {/* 피어나 현장·동료 사진 (신뢰) */}
        <CommunityGallerySection />
        {/* 5. 대상자 */}
        <RecommendedForSection />
        {/* 6. 강사 소개 */}
        <InstructorSection />
        {/* 7. 실제 사례·결과물 (과정 사진) */}
        <SongwritingCaseGallerySection />
        {/* 가져가는 것 */}
        <TakeawaySection />
        {/* 8. 신청자들의 현재 고민 */}
        <ParticipantsSection />
        {/* 모집 현황 */}
        <StatusSection />
        {/* 가격 */}
        <PricingSection />
        {/* 신청·결제 안내 */}
        <ApplyFlowSection />
        {/* 피어나 소개 */}
        <CredibilitySection />
        {/* 9. FAQ */}
        <FAQSection />
        {/* 10. Final CTA */}
        <FinalCTASection />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  );
}
