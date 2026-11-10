/* 강의자료실 배포 때 모든 강의안(slides.html)에 자동으로 붙는 「강의자료 모음」 버튼.
   원본 파일은 고치지 않는다. 배포 과정(.github/workflows/pages.yml)에서만 붙는다.
   화면 위 가운데에 파란 버튼으로 뜬다. 처음 열 때와 마우스를 움직일 때 보이고,
   가만히 있거나 키보드로 넘길 때는 슬라이드를 가리지 않게 숨는다. */
(function () {
  if (window.__hubButton) return; window.__hubButton = true;
  function add() {
    var css = document.createElement('style');
    css.textContent =
      '#hub-btn{all:initial;position:fixed!important;left:50%!important;top:14px!important;z-index:2147483647!important;' +
      'transform:translateX(-50%);display:inline-flex!important;align-items:center;gap:7px;padding:11px 20px!important;' +
      'border:2px solid #fff!important;border-radius:999px!important;background:#2563eb!important;color:#fff!important;' +
      'font:800 16px/1 "Pretendard","Malgun Gothic",sans-serif!important;text-decoration:none!important;cursor:pointer;' +
      'box-shadow:0 8px 24px rgba(37,99,235,.45)!important;transition:opacity .3s,transform .3s,background .15s;opacity:1}' +
      '#hub-btn:hover,#hub-btn:focus{background:#1d4ed8!important}' +
      '#hub-btn.hub-hide{opacity:0;pointer-events:none;transform:translate(-50%,-12px)}' +
      '@media print{#hub-btn{display:none!important}}';
    document.head.appendChild(css);
    var a = document.createElement('a');
    a.id = 'hub-btn';
    a.href = 'https://kain9012-bit.github.io/#lectures';
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = '📚 다른 강의자료 보기 ↗';
    a.title = '다른 강의안과 실습파일 모음';
    ['click', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'touchstart', 'touchend'].forEach(function (t) {
      a.addEventListener(t, function (e) { e.stopPropagation(); });
    });
    document.body.appendChild(a);
    var timer, over = false;
    function hide() { if (!over) a.classList.add('hub-hide'); }
    function show(ms) { a.classList.remove('hub-hide'); clearTimeout(timer); timer = setTimeout(hide, ms); }
    a.addEventListener('mouseenter', function () { over = true; show(2500); });
    a.addEventListener('mouseleave', function () { over = false; show(2500); });
    document.addEventListener('mousemove', function () { show(2500); }, { passive: true });
    document.addEventListener('touchstart', function () { show(3500); }, { passive: true });
    document.addEventListener('keydown', function () { clearTimeout(timer); hide(); });
    show(6000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add); else add();
})();
