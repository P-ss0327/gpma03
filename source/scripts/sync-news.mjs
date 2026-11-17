import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const origin = 'https://www.gpma.org.cn';
const sections = [
  { key: 'industry', slug: '20e5aefb4e6a4b74a956aa9865ef5133' },
  { key: 'picture', slug: 'a0c2924241ea41ee87ecd587b08d7f41' },
  { key: 'policyLaw', slug: '296419fb744b43aa90a19bfc9892d218' },
  { key: 'policyLocal', slug: '8d99c44d052a4bf78e09571989ba765a' },
  { key: 'essays', slug: '0f364315927f4843abcecbc198b05773' },
];
const detailDir = path.resolve('public/content/news');
const indexFile = path.resolve('src/newsContent.js');

const decode = (value = '') => value
  .replace(/&mdash;/g, '—').replace(/&ldquo;/g, '“').replace(/&rdquo;/g, '”')
  .replace(/&middot;/g, '·').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
  .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/<[^>]+>/g, '')
  .replace(/\s+/g, ' ').trim();
const toIsoDate = (value) => {
  const match = value.match(/^([A-Z][a-z]{2})\s+(\d{1,2}),\s+(\d{4})$/);
  if (!match) return value;
  const months = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
  return `${match[3]}-${months[match[1]]}-${match[2].padStart(2, '0')}`;
};
const fetchText = async (url, attempts = 3) => {
  let error;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      return await response.text();
    } catch (caught) { error = caught; }
  }
  throw error;
};
const pool = async (items, concurrency, worker) => {
  let cursor = 0;
  const runners = Array.from({ length: concurrency }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      await worker(items[index], index);
    }
  });
  await Promise.all(runners);
};

await mkdir(detailDir, { recursive: true });
const requestedKeys = new Set(process.argv.slice(2));
const selectedSections = requestedKeys.size ? sections.filter((section) => requestedKeys.has(section.key)) : sections;
let output = {};
if (requestedKeys.size) {
  const existing = await readFile(indexFile, 'utf8');
  output = JSON.parse(existing.replace(/^\/\/ Generated[^\n]*\nexport const originalNews = /, '').replace(/;\s*$/, ''));
}
for (const section of selectedSections) {
  const first = await fetchText(`${origin}/list-${section.slug}.html?pageNo=1&pageSize=15`);
  const total = Number(first.match(/共\s*(\d+)\s*条/)?.[1] || 0);
  const pages = Math.max(1, Math.ceil(total / 15));
  const pageHtml = new Array(pages);
  pageHtml[0] = first;
  await pool(Array.from({ length: pages - 1 }, (_, index) => index + 2), 8, async (page) => {
    pageHtml[page - 1] = await fetchText(`${origin}/list-${section.slug}.html?pageNo=${page}&pageSize=15`);
  });
  const items = [];
  const pattern = /<li style="[\s\S]*?<span>【([^】]+)】<\/span>[\s\S]*?<a href="([^"]+)"[\s\S]*?title="([^"]+)">/g;
  for (const html of pageHtml) for (const match of html.matchAll(pattern)) {
    if (!items.some((item) => item.url === match[2])) items.push({ date: toIsoDate(match[1]), url: match[2], title: decode(match[3]) });
  }
  const metadata = new Array(items.length);
  await pool(items, 10, async (item, index) => {
    const html = await fetchText(`${origin}${item.url}`);
    const contentMatch = html.match(/<div class="span9 sgj-contentlist-container">([\s\S]*?)<\/div><!--\/span-->/);
    let content = contentMatch?.[1]?.trim() || `<p>${item.title}</p>`;
    content = content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/\son[a-z]+="[^"]*"/gi, '');
    content = content.replace(/(src|href)="(\/userfiles\/[^"]+)"/gi, (_, attr, url) => `${attr}="${origin}${url}"`);
    const cover = content.match(/<img[^>]+src="([^"]+)"/i)?.[1] || '/assets/gpma-logo-lockup-hd.png';
    const id = item.url.match(/-([a-f0-9]+)\.html$/)?.[1] || String(index);
    await writeFile(path.join(detailDir, `${section.key}-${id}.json`), JSON.stringify({ title: item.title, date: item.date, content }));
    items[index] = { id, title: item.title, date: item.date, cover, hasCover: cover !== '/assets/gpma-logo-lockup-hd.png', summary: decode(content).slice(0, 105) };
    if ((index + 1) % 20 === 0 || index + 1 === items.length) console.log(`${section.key}: ${index + 1}/${items.length}`);
  });
  output[section.key] = items;
}
await writeFile(indexFile, `// Generated from the original GPMA website.\nexport const originalNews = ${JSON.stringify(output, null, 2)};\n`);
console.log(`Wrote news index to ${indexFile}`);
