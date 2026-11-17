from pathlib import Path
import re,hashlib,subprocess
root=Path(__file__).resolve().parents[1];p=root/'src/noticeContent.js';s=p.read_text()
for url in sorted(set(re.findall(r'href=\\"(/userfiles/[^"<>]+?)\\"',s))):
 ext=Path(url).suffix;name='legacy-'+hashlib.sha256(url.encode()).hexdigest()[:12]+ext
 dest=root/'public/assets/notices'/name
 r=subprocess.run(['curl','-fLsS','--max-time','30','https://www.gpma.org.cn'+url],capture_output=True)
 if r.returncode:print('FAILED',url,flush=True);continue
 if not (r.stdout.startswith(b'%PDF') or r.stdout.startswith(b'PK')):print('INVALID',url,flush=True);continue
 dest.write_bytes(r.stdout);s=s.replace(url,'/assets/notices/'+name);print('SAVED',name,flush=True)
p.write_text(s)
