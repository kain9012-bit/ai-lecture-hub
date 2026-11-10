"""배포 직전에 lectures/*/slides.html 마다 강의자료 모음 버튼 스크립트를 붙인다 (원본 저장소 파일은 그대로)."""
import glob, sys
root = sys.argv[1] if len(sys.argv) > 1 else '.'
tag = '<script src="../../tools/hub-button.js"></script>'
n = 0
for p in sorted(glob.glob(f'{root}/lectures/*/slides.html')):
    s = open(p, encoding='utf-8').read()
    if 'hub-button.js' in s:
        continue
    i = s.lower().rfind('</body>')
    s = s[:i] + tag + '\n' + s[i:] if i >= 0 else s + '\n' + tag + '\n'
    open(p, 'w', encoding='utf-8').write(s)
    n += 1
    print('붙임:', p)
print(f'총 {n}개')
