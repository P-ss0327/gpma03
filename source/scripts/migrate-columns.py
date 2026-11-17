"""Snapshot remaining public GPMA columns; never execute remote markup."""
import json,re,subprocess,hashlib,os,concurrent.futures
from html.parser import HTMLParser
from urllib.parse import urljoin,urlparse
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; ORIGIN='https://gpma.agtsci.cn'
class Node:
 def __init__(self,tag='',attrs=(),parent=None): self.tag=tag;self.attrs=dict(attrs);self.children=[];self.parent=parent
 def find(self,pred):
  if pred(self):return self
  for c in self.children:
   if isinstance(c,Node):
    v=c.find(pred)
    if v:return v
 def text(self):return ''.join(c.text() if isinstance(c,Node) else c for c in self.children)
class Parser(HTMLParser):
 def __init__(self,html):
  super().__init__(convert_charrefs=True);self.root=Node();self.cur=self.root;self.feed(html)
 def handle_starttag(self,t,a):
  n=Node(t,a,self.cur);self.cur.children.append(n)
  if t not in ['img','input','br','hr','meta','link','source','wbr','area','embed']:self.cur=n
 def handle_startendtag(self,t,a):self.handle_starttag(t,a);self.handle_endtag(t)
 def handle_endtag(self,t):
  n=self.cur
  while n.parent:
   if n.tag==t:self.cur=n.parent;return
   n=n.parent
 def handle_data(self,d):self.cur.children.append(d)
def fetch(url):
 r=subprocess.run(['curl','-fLsS','--max-time','30',url],capture_output=True)
 if r.returncode:raise RuntimeError(url+' '+r.stderr.decode()[:100])
 return r.stdout
# Existing local routes preserve their implemented behavior.
known={
'61710a1a3f9e4f9d99f090f304fcbcd9':'?page=about','e5d0c88d529a4577b4a19e9ea37342f9':'?page=about','1da3482284c341a79ac38cdbd9256141':'?page=about&section=organization','6d6f3326129c4ae59759411ba40acb41':'?page=about&section=charter','b6675756ebb2491e8684223a6d67abf7':'?page=contact','68a76d59f7b1406abb6804ea791a5742':'?page=integrated','7daa1415db184cdab9da308e250cc83a':'?page=news','88f24ff9407045fb940bf906da4b610d':'?page=notices','a514fd06345449f7a4621261c53aa652':'?page=notices&section=association','8a8e7bf35173455eb0555f0ec3bc96d2':'?page=news&section=industry','296419fb744b43aa90a19bfc9892d218':'?page=news&section=policyLaw','8d99c44d052a4bf78e09571989ba765a':'?page=news&section=policyLocal','4223e9341d6e4e4b93fb306d39fe1ffd':'?page=news&section=essays','fae988cea13d4d03afe42e75dc8c673e':'?page=application-catalog','c3119e4fac98490180c5b50dea906af9':'?page=application-catalog','90c6c37730bb4a33b51bdaf423e64ae4':'?page=member','2c2b5068bb144c59bd01dff434f64f45':'?page=experts','576a1b8f7d994abbb82a839a14b002bb':'?page=party','d1758a5eca0a41daa92ddb3c6682d5d8':'?page=party&section=rules','d295645c8e4f49deac81ffb0e907b3f7':'?page=party&section=study','7243b744c05b42448f3fc4134e0ae3e2':'?page=party&section=news','ba99d6c97a6442e8b0c8e4cc1403e83a':'?page=downloads'}
aliases={'/list-'+k+'.html':'/'+v for k,v in known.items()}
nav=(ROOT/'src/siteNavigation.js').read_text()
seeds=list(dict.fromkeys(re.findall(r'https://gpma.agtsci.cn(/list-[^"\s]+)',nav)))
# Run even after nav has been localized.
if not seeds:seeds=json.loads((ROOT/'src/migratedColumns.json').read_text())['seeds']
pages={}; failures={}; assets={}; css=set(); queue=set(seeds); count=0
while queue:
 batch=sorted(queue-set(pages)-set(failures));queue=set()
 if not batch:break
 with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
  results=list(pool.map(lambda p:(p,fetch(ORIGIN+p)),batch))
 for path,data in results:
  doc=Parser(data.decode()).root;main=doc.find(lambda n:n.tag=='main')
  if not main:failures[path]='no main';continue
  title=doc.find(lambda n:n.tag=='title'); pages[path]={'title':title.text() if title else '广东省项目管理协会','node':main}
  def scan(n):
   if n.tag=='a' and n.attrs.get('href'):
    u=urlparse(urljoin(ORIGIN+path,n.attrs['href']));dest=u.path+('?' + u.query if u.query else '')
    if u.netloc=='gpma.agtsci.cn' and re.match(r'/(?:list|view|article|content)-.*\.html$',u.path) and u.path not in aliases and dest not in pages:queue.add(dest)
   for attr in ['src','href']:
    if attr in n.attrs:
     u=urlparse(urljoin(ORIGIN+path,n.attrs[attr]))
     if u.netloc=='gpma.agtsci.cn' and (n.tag=='img' or re.search(r'\.(?:pdf|docx?|xlsx?|zip|rar)(?:$|\?)',u.path,re.I)):assets[u.geturl()]=None
   for c in n.children:
    if isinstance(c,Node):scan(c)
  scan(main)
  for link in re.findall(r'<link[^>]+href="([^"]+\.css)"',data.decode()):css.add(urljoin(ORIGIN,link))
 print('pages',len(pages),'pending',len(queue),'assets',len(assets),flush=True)
 if len(pages)>250:raise RuntimeError('Unexpected large crawl; review before continuing')
assetdir=ROOT/'public/assets/migrated';assetdir.mkdir(parents=True,exist_ok=True)
def saveasset(url):
 ext=os.path.splitext(urlparse(url).path)[1] or '.bin';name=hashlib.sha256(url.encode()).hexdigest()[:16]+ext
 try:(assetdir/name).write_bytes(fetch(url));return url,'/assets/migrated/'+name
 except Exception as e:return url,None
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:assets=dict(pool.map(saveasset,list(assets)))
csspaths=[]
for url in css:
 name=hashlib.sha256(url.encode()).hexdigest()[:16]+'.css';(assetdir/name).write_bytes(fetch(url));csspaths.append('/assets/migrated/'+name)
from html import escape
void={'img','input','br','hr','meta','link','source','wbr','area','embed'}
def render(n,base):
 if isinstance(n,str):return escape(n)
 if n.tag in ['script','iframe','object','embed','form']:return ''
 attrs=[]
 for k,v in n.attrs.items():
  if k.startswith('on') or k in ['srcset','action','target','autofocus'] or v is None:continue
  if k in ['href','src']:
   url=urljoin(ORIGIN+base,v);u=urlparse(url)
   if u.scheme not in ['https','http']:continue
   if url in assets:v=assets[url] or ''
   elif u.netloc=='gpma.agtsci.cn':v=aliases.get(u.path,u.path+('?' + u.query if u.query else '')+('#'+u.fragment if u.fragment else ''))
  if k=='style' and re.search(r'url\(|expression',v,re.I):continue
  attrs.append(f' {k}="{escape(v,quote=True)}"')
 return '<'+n.tag+''.join(attrs)+'>'+('' if n.tag in void else ''.join(render(c,base) for c in n.children)+'</'+n.tag+'>')
out={'seeds':seeds,'aliases':aliases,'styles':csspaths,'pages':{p:{'title':v['title'],'html':render(v['node'],p)} for p,v in pages.items()},'failures':failures,'failedAssets':[u for u,v in assets.items() if not v]}
(ROOT/'src/migratedColumns.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
print('DONE',len(pages),'pages',len(assets),'assets',len(out['failedAssets']),'failed assets',flush=True)
