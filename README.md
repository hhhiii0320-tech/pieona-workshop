# 치료적 노래 만들기 워크숍 — 랜딩페이지

피어나주식회사 / Next.js 14 (App Router) + TypeScript + Tailwind CSS

---

## 1. 바로 확인하기

디자인만 먼저 보고 싶다면 `static-preview/index.html` 을 브라우저에서 열면 됩니다. (설치 불필요)

개발 서버 실행:

```bash
npm install
npm run dev      # http://localhost:3000
```

배포용 빌드:

```bash
npm run build && npm run start
```

Vercel에 그대로 올리면 바로 배포됩니다. (Import → Deploy, 별도 설정 없음)

---

## 2. 수정은 전부 `lib/constants.ts` 한 파일에서

컴포넌트 코드를 건드릴 필요 없이, 아래 항목만 바꾸면 됩니다.

| 바꾸고 싶은 것 | 수정할 위치 |
| --- | --- |
| 신청 폼 / 결제 / 문의 링크 | `links` |
| 가격, 얼리버드가 | `pricing` |
| 할인 대상·유의사항 | `discountTiers`, `pricingNotes` |
| 강사명·소개 | `instructors` |
| 커리큘럼, 진행 순서, 결과물 | `classes` |
| 신청 현황 숫자 | `workshopStatus` |
| 참여자 한마디 카드 | `participants` |
| FAQ | `faq.items` |
| 일정·장소 | `brand.schedule`, `brand.location` |

### 반드시 교체해야 하는 placeholder

```ts
applyPackage / applyClass1 / applyClass2 / waitlist : "https://forms.gle/REPLACE_ME"
payment       : "https://payment-link.example.com"
inquiry       : "mailto:hello@example.com"
kakaoChannel  : "https://pf.kakao.com/REPLACE_ME"
```

Google Form, 토스페이먼츠, 스마트스토어, Gumroad 등 어떤 링크든 그대로 넣으면 됩니다.
수강 유형(1교시 / 2교시 / 패키지)별로 폼을 나누지 않을 거라면 세 링크에 같은 주소를 넣으세요.

---

## 3. 신청자가 생기면 바꿔야 하는 3곳

### ① 모집 현황 숫자

```ts
export const workshopStatus = {
  capacity: 20,
  minimumOpen: 8,
  currentApplicants: 0,   // ← 신청자 수
  packageApplicants: 0,   // ← 그중 패키지 신청자 수
  earlyBirdDeadline: "2026-08-00",  // ← "2026-08-15" 형태로 확정 입력
};
```

`currentApplicants` 가 0이면 "현재 첫 오픈 신청을 준비 중입니다" 문구와 최소 게이지가,
1 이상이면 실제 신청 인원 / 잔여석 / 진행률이 자동으로 표시됩니다.

`earlyBirdDeadline` 의 월·일이 `00` 이면 "일정 확정 후 안내"로 표시됩니다.

### ② 참여자 카드 (과장 방지 장치)

```ts
export const participantDisplayMode = "example";  // → "real"
```

- `"example"` : 대표 고민 예시로 표기 + "※ 위 내용은 대표적인 고민 예시입니다" 안내 노출
- `"real"` : 공개 동의를 받은 실제 신청자 한마디로 표기 + 안내 문구 자동 변경

`participants` 배열의 내용을 실제 신청자 한마디로 교체한 **뒤에** 모드를 바꿔주세요.

### ③ 패키지 카드 하단 문구

```ts
export const packageProofMode = "initial";  // → "real"
```

- `"initial"` : "치료적 노래 만들기의 전체 흐름을 경험하고 싶다면 패키지 수강을 추천합니다."
- `"real"` : "현재 패키지 신청 비율이 가장 높습니다."

실제 신청 데이터가 없을 때 `"real"` 을 쓰면 사실과 다른 표현이 되므로, 신청자가 쌓인 뒤에만 바꿔주세요.

---

## 4. 페이지 구조

```
Hero              → 문제 제기 헤드라인 + 패키지 CTA
PainPoint         → 이런 순간, 그냥 지나치기 아쉬웠다면
Solution          → 작곡 수업이 아닙니다 + 5단계 흐름
ClassOverview     → 1교시 / 2교시 커리큘럼 (#curriculum)
PackageRecommend  → 패키지 강조 (짙은 블루 풀블리드)
RecommendedFor    → 이런 분께 추천합니다
Takeaway          → 워크숍 후 가져가는 것
Pricing           → 가격 카드 3종 (#pricing) — 패키지 카드 강조
Status            → 현재 모집 현황 (진행률 바)
ApplyFlow         → 신청 및 결제 안내 (#apply) — 수강 유형 선택 → 신청서
FormPreview       → 신청서에서 이런 내용을 여쭤봅니다
Participants      → 어떤 분들이 함께하나요 (모바일 가로 스와이프)
Credibility       → 피어나 소개 + 강사 카드
FAQ               → 아코디언 (#faq)
FinalCTA          → 마지막 전환 + 문의
MobileStickyCTA   → 모바일 하단 고정 바 (얼리버드가 + 패키지 신청)
```

### 전환 동선

모든 신청 CTA는 `#apply`(신청 및 결제 안내) 섹션으로 스크롤 이동하고,
거기서 수강 유형을 고른 뒤 외부 신청 폼으로 나갑니다.
패키지가 기본 선택되어 있고 "추천" 배지가 붙습니다.

---

## 5. 카피 작성 시 지켜진 원칙

- "누구나 쉽게 작곡", "치료 효과 보장", "마음을 노래로 완성해드립니다" 등 과장 표현 미사용
- "참여자의 표현을 음악적으로 포착합니다", "세션 안에서 작동하는 치료적 노래의 구조" 등 전문 표현 사용
- 신청자가 없는 상태에서 사회적 증거를 실제인 것처럼 표시하지 않음 (위 ②③ 참고)
- 잔여석 문구는 압박형이 아닌 사실 안내형("소규모 실습형으로 운영되어 정원이 제한됩니다")

## 6. 참고

- 강사 배정은 업로드해주신 엑셀의 **시트2 기준**(1교시 이신원 / 2교시 이지혜)으로 반영했습니다. 시트1은 반대로 되어 있어 확인이 필요합니다.
- 강사 소개 문구(`instructors[].bio`)는 비어 있으며, 값을 넣으면 카드에 자동으로 노출됩니다.
- 일정·장소가 확정되면 `brand.schedule`, `brand.location` 에 입력해주세요. (현재 페이지에는 미노출)
