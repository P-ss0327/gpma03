import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const origin = 'https://www.gpma.org.cn';
const category = '88f24ff9407045fb940bf906da4b610d';
const assetDir = path.resolve('public/assets/notices');
const outputFile = path.resolve('src/noticeContent.js');

const decode = (value = '') => value
  .replace(/&mdash;/g, '—').replace(/&ldquo;/g, '“').replace(/&rdquo;/g, '”')
  .replace(/&middot;/g, '·').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
  .replace(/&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const toIsoDate = (value) => {
  const match = value.match(/^([A-Z][a-z]{2})\s+(\d{1,2}),\s+(\d{4})$/);
  if (!match) return value;
  const months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
  return `${match[3]}-${months[match[1]]}-${match[2].padStart(2, '0')}`;
};

const fetchWithRetry = async (url, attempts = 3) => {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      return response;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
};
const fetchText = async (url) => (await fetchWithRetry(url)).text();

await mkdir(assetDir, { recursive: true });
const listItems = [];
for (let page = 1; page <= 3; page += 1) {
  const html = await fetchText(`${origin}/list-${category}.html?pageNo=${page}&pageSize=15`);
  const itemPattern = /<li style="[\s\S]*?<span>【([^】]+)】<\/span>[\s\S]*?<a href="([^"]+)"[\s\S]*?title="([^"]+)">/g;
  for (const match of html.matchAll(itemPattern)) {
    if (!listItems.some((item) => item.url === match[2])) listItems.push({ date: toIsoDate(match[1]), url: match[2], title: decode(match[3]) });
  }
}

const articles = [];
for (let index = 0; index < listItems.length; index += 1) {
  const item = listItems[index];
  const html = await fetchText(`${origin}${item.url}`);
  const contentMatch = html.match(/<div class="span9 sgj-contentlist-container">([\s\S]*?)<\/div><!--\/span-->/);
  let content = contentMatch?.[1]?.trim() || `<p>${item.title}</p>`;
  content = content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/\son[a-z]+="[^"]*"/gi, '');
  const imageUrls = [...content.matchAll(/<img[^>]+src="([^"]+)"/gi)].map((match) => match[1]);
  const localImages = [];
  for (let imageIndex = 0; imageIndex < imageUrls.length; imageIndex += 1) {
    const source = imageUrls[imageIndex];
    const resolved = new URL(source, origin);
    if (!['http:', 'https:'].includes(resolved.protocol)) continue;
    const pathname = resolved.pathname;
    const extension = path.extname(decodeURIComponent(pathname)).toLowerCase() || '.jpg';
    const filename = `notice-${String(index + 1).padStart(2, '0')}-${String(imageIndex + 1).padStart(2, '0')}${extension}`;
    let response;
    try { response = await fetchWithRetry(resolved, 2); }
    catch { continue; }
    await writeFile(path.join(assetDir, filename), Buffer.from(await response.arrayBuffer()));
    const localPath = `/assets/notices/${filename}`;
    localImages.push(localPath);
    content = content.split(source).join(localPath);
  }
  const attachmentUrls = [...content.matchAll(/<a[^>]+href="(\/userfiles\/[^"]+)"/gi)].map((match) => match[1]);
  for (let attachmentIndex = 0; attachmentIndex < attachmentUrls.length; attachmentIndex += 1) {
    const source = attachmentUrls[attachmentIndex];
    const resolved = new URL(source, origin);
    const extension = path.extname(decodeURIComponent(resolved.pathname)).toLowerCase() || '.bin';
    const filename = `notice-${String(index + 1).padStart(2, '0')}-attachment-${String(attachmentIndex + 1).padStart(2, '0')}${extension}`;
    let response;
    try { response = await fetchWithRetry(resolved, 2); }
    catch { continue; }
    await writeFile(path.join(assetDir, filename), Buffer.from(await response.arrayBuffer()));
    content = content.split(source).join(`/assets/notices/${filename}`);
  }
  articles.push({
    id: item.url.match(/-([a-f0-9]+)\.html$/)?.[1] || String(index),
    title: item.title,
    date: item.date,
    tag: /走访|交流|会议|召开/.test(item.title) ? '会议' : '通知',
    cover: localImages[0] || '/assets/gpma-logo-lockup-hd.png',
    hasCover: localImages.length > 0,
    summary: decode(content).slice(0, 110),
    content,
  });
  process.stdout.write(`Synced ${index + 1}/${listItems.length}\n`);
}

await writeFile(outputFile, `// Generated from ${origin}/list-${category}.html\nexport const noticeArticles = ${JSON.stringify(articles, null, 2)};\n`);
console.log(`Wrote ${articles.length} notices to ${outputFile}`);
