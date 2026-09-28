/*
  강의 목록 — 새 강의를 올릴 때는 이 파일만 고치면 됩니다.
  1) lectures/폴더이름/ 안에 파일을 넣습니다 (slides.html, slides.pdf, practice.zip 등)
  2) 아래 배열 맨 위에 항목 하나를 복사해 붙이고 내용을 바꿉니다
  files.type: "slides"(강의안 보기) · "pdf" · "zip"(실습파일) · "link"(기타 자료)
*/
window.LECTURES = [
  {
    id: "2026-audit-ai",
    date: "2026.09",
    title: "AI를 활용한 감사보고서 작성",
    subtitle: "감사 업무에서 AI를 쓸 곳과 쓰지 않을 곳",
    audience: "감사관실 직원",
    duration: "90분 · 이론",
    tags: ["감사", "보고서 작성", "생성형 AI"],
    summary: "공개 감사결과 자료를 AI로 분석한 사례로 시작해, 보고서 작성에 AI를 쓰는 법과 한계를 다룹니다.",
    files: [
      { type: "slides", label: "강의안 보기", href: "lectures/2026-audit-ai/slides.html" },
      { type: "pdf", label: "강의안 PDF", href: "lectures/2026-audit-ai/slides.pdf", download: "감사관실_AI감사_강의안.pdf" },
      { type: "link", label: "학교감사 지적유형 35", href: "lectures/2026-audit-ai/audit-findings.html" }
    ]
  },
  {
    id: "2026-staff-ai-180",
    date: "2026.09",
    title: "AI 활용 업무 자동화 실기연수",
    subtitle: "내 업무 도구를 직접 만듭니다",
    audience: "교육지원청 직원(행정직·장학사)",
    duration: "180분 · 실습",
    tags: ["바이브코딩", "JB업무ON", "개인정보 마스킹", "크롬 확장"],
    summary: "업무를 단계로 펼쳐 자동화할 곳을 고르고, JB업무ON 실습과 마스킹 도구·확장 프로그램 제작까지 해 봅니다.",
    files: [
      { type: "slides", label: "강의안 보기", href: "lectures/2026-staff-ai-180/slides.html" },
      { type: "pdf", label: "강의안 PDF", href: "lectures/2026-staff-ai-180/slides.pdf", download: "AI활용_업무자동화_실기연수_180분.pdf" },
      { type: "zip", label: "실습파일", href: "lectures/2026-staff-ai-180/practice.zip", download: "실습파일_180분.zip" }
    ]
  },
  {
    id: "2026-staff-ai-90",
    date: "2026.09",
    title: "AI 활용 교직원 연수",
    subtitle: "뒤섞인 파일 29개를 보고서 한 개로",
    audience: "교직원 전체",
    duration: "90분 · 실습",
    tags: ["JB업무ON", "파일 정리", "HTML 추첨기"],
    summary: "JB업무ON으로 파일명 정리·엑셀 병합·PDF 통합을 실습하고, AI로 추첨기를 만들어 배포합니다.",
    files: [
      { type: "slides", label: "강의안 보기", href: "lectures/2026-staff-ai-90/slides.html" },
      { type: "pdf", label: "강의안 PDF", href: "lectures/2026-staff-ai-90/slides.pdf", download: "AI활용_교직원연수_90분.pdf" },
      { type: "zip", label: "실습파일", href: "lectures/2026-staff-ai-90/practice.zip", download: "실습파일_90분.zip" }
    ]
  },
  {
    id: "2026-vibecoding",
    date: "2026.07",
    title: "바이브코딩으로 업무도구 만들기",
    subtitle: "이론 → HTML → Console → 확장 프로그램",
    audience: "교직원",
    duration: "180분 · 실습",
    tags: ["바이브코딩", "메타 프롬프트", "크롬 확장"],
    summary: "대화로 코드를 만드는 바이브코딩의 개념과 메타 프롬프트를 익히고, 업무도구를 직접 만들어 봅니다.",
    files: [
      { type: "slides", label: "강의안 보기", href: "lectures/2026-vibecoding/slides.html" }
    ]
  }
];
