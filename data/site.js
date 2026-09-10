/* ═══════════════════════════════════════════════════════
   블루라인 홈페이지 — 사이트 공통 문구
   이 파일만 메모장으로 수정하면 사이트 글이 바뀝니다. (UTF-8 저장)
   규칙:  |  = 줄바꿈      [[글자]] = 파란 강조
   ※ 작품별 글은 assets/works/각 폴더/info.js 에 있습니다
   ※ 카톡 공유 미리보기 문구만 index.html 상단(og:...)에서 수정
   ═══════════════════════════════════════════════════════ */
registerSite({

  /* 상단 메뉴 */
  nav: [
    { text: "WORKS",   href: "#works" },
    { text: "CONTACT", href: "#contact" },
    { text: "RECRUIT", href: "#recruit" }
  ],

  /* 첫 화면 */
  tagline: "이야기에 선을 긋다",                 /* 헤더 파란 선 아래 문구 */
  heroTitle: "ONE [[LINE]],|EVERY STORY.",      /* 대형 슬로건 */

  /* 연재작 소개 머리글 */
  worksEyebrow: "WORKS — FEATURED",
  worksTitle: "NOW|[[ONGOING]]",
  worksSub: "블루라인만의 색과 이야기를 담은 주요 연재작을 소개합니다.",

  /* 전체 작품 그리드 머리글 */
  allEyebrow: "ALL WORKS",
  allTitle: "EVERY [[LINE]]|WE DREW",
  // allNote: "새 작품은 assets/works 폴더에 숫자 폴더를 추가하면 자동으로 나타납니다.",

  /* CONTACT */
  contactEyebrow: "CONTACT US",
  contactTitle: "GET IN TOUCH|WITH [[BLUE LINE]]",
  contactDesc: "블루라인 스튜디오의 소식과 작품을 만나는 채널입니다.",
  sns: [
    { label: "INSTAGRAM", value: "@bluelinestudio2021", link: "https://www.instagram.com/bluelinestudio2021" },          /* link 비우면 클릭 안 됨 */
    { label: "YOUTUBE",   value: "@StudioBlueLine ↗", link: "https://www.youtube.com/@StudioBlueLine" },
    { label: "MAIL",      value: "blueline2021@bluelinestudio.kr", link: "mailto:blueline2021@bluelinestudio.kr" },
    { label: "MAIL (예비)", value: "blueline2021@naver.com", link: "mailto:blueline2021@naver.com" }
  ],
  // contactNote: "※ SNS 계정과 이메일은 자리표시자입니다. 실제 주소 확정 시 교체해 주세요.",

  /* RECRUIT */
  recruitEyebrow: "RECRUIT",
  recruitTitle: "좋은 이야기를|[[좋은 사람들과]]",
  recruitBody: "각색, 콘티, 작화, 후반 — 블루라인의 다음 연재를 함께 만들 작가님과 웹툰화를 고민 중인 원작을 기다립니다.|함께한 작품에는 이름이 남고, 정산은 투명하게. 블루라인이 지키는 원칙입니다.",
  apply: [
    { label: "모집 분야",   value: "각색 · 콘티 · 작화 · 후반 (상시 검토)" },
    { label: "보내주실 것", value: "포트폴리오 3~5컷 또는 링크, 간단한 자기소개" },
    { label: "회신",       value: "검토 후 2주 이내에 답변드립니다" }
  ],
  recruitButton: "작가 · 제휴 문의하기",
  recruitMail: "mailto:blueline2021@naver.com?subject=%5B%EC%9E%91%EA%B0%80%20%EC%A7%80%EC%9B%90%5D%20%EC%9D%B4%EB%A6%84%20%2F%20%EB%B6%84%EC%95%BC",
  recruitNote: "버튼을 누르면 제목이 채워진 메일이 열립니다 · 원작 웹툰화 문의도 같은 주소로 받습니다",

  /* 하단 사업자 정보 */
  footer: [
    { label: "상호",         value: "(주)블루라인 스튜디오" },
    { label: "대표자",       value: "이철한" },
    { label: "사업자등록번호", value: "377-87-02267" },
    { label: "주소",         value: "인천광역시 연수구 송도과학로 32 . 송도 테크노파크 IT센터 M동 1201호" },
    { label: "비즈니스 문의",  value: "blueline2021@bluelinestudio.kr" },
    { label: "연재 · 채용 문의", value: "blueline2021@bluelinestudio.kr (예비 blueline2021@naver.com)" }
  ],
  copyright: "© 2026 BLUE LINE STUDIO. All rights reserved. · A portfolio company of WON START Venture",
  footNote: ""
});
