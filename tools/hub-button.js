/* 강의자료실 배포 때 모든 강의안(slides.html)에 자동으로 붙는 「강의자료 모음」 버튼.
   원본 파일은 고치지 않는다. 배포 과정(.github/workflows/pages.yml)에서만 붙는다. */
(function () {
  if (window.__hubButton) return; window.__hubButton = true;
  function add() {
    var css = document.createElement('style');
    css.textContent =
      '#hub-btn{all:initial;position:fixed!important;left:14px!important;bottom:14px!important;z-index:2147483647!important;' +
      'display:inline-flex!important;align-items:center;gap:6px;padding:10px 20px!important;' +
      'border:2px solid #fff!important;border-radius:999px!important;background:#0f172a!important;color:#fff!important;' +
      'font:700 17px/1 "Pretendard","Malgun Gothic",sans-serif!important;text-decoration:none!important;cursor:pointer;' +
      'box-shadow:0 4px 14px rgba(0,0,0,.35)!important;transition:background .15s}' +
      '#hub-btn:hover,#hub-btn:focus{background:#1e293b!important}' +
      '@media print{#hub-btn{display:none!important}}';
    document.head.appendChild(css);
    var a = document.createElement('a');
    a.id = 'hub-btn';
    a.href = 'https://kain9012-bit.github.io/#lectures';
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = '강의자료 모음 ↗';
    a.title = '다른 강의안과 실습파일 보기';
    ['click', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'touchstart', 'touchend'].forEach(function (t) {
      a.addEventListener(t, function (e) { e.stopPropagation(); });
    });
    document.body.appendChild(a);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add); else add();
})();
