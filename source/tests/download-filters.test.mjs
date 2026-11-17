import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { downloadCategories, downloadFiles } from '../src/downloadData.js';
import { parseDownloadFilters, updateDownloadFilters, filterDownloadFiles } from '../src/downloadFilters.js';

test('one science-award keyword finds forms, notices and policy materials by selected purpose', () => {
  for (const category of downloadCategories.slice(1)) {
    const found = filterDownloadFiles(downloadFiles, { category, keyword: '科技奖申报', year: '' });
    assert.ok(found.length > 0, `missing ${category} example`);
    assert.ok(found.every(file => file.category === category));
  }
});
test('changing purpose preserves keyword/year and resets pagination, including all-files fallback', () => {
  const selected = { category: '申请表格', keyword: '科技奖申报', year: '2026', page: 3 };
  const notice = updateDownloadFilters(selected, { category: '通知文件' });
  assert.deepEqual(notice, { ...selected, category: '通知文件', page: 1 });
  const empty = updateDownloadFilters(notice, { category: '政策文件' });
  assert.equal(filterDownloadFiles(downloadFiles, empty).length, 0);
  const all = updateDownloadFilters(empty, { category: '全部资料' });
  assert.equal(all.keyword, selected.keyword);
  assert.equal(all.year, selected.year);
  assert.ok(filterDownloadFiles(downloadFiles, all).length > 0);
});
test('old category links work and mixed file results sort newest first', () => {
  const parsed = parseDownloadFilters('?category=申报材料&keyword=入会申请&year=2025&p=2');
  assert.deepEqual(parsed, { category: '申请表格', keyword: '入会申请', year: '2025', page: 2 });
  const found = filterDownloadFiles([...downloadFiles].reverse(), { category: '全部资料', keyword: '', year: '' });
  assert.equal(found.length, 24);
  for (let i = 1; i < found.length; i++) assert.ok(found[i - 1].date >= found[i].date);
});
test('visible purpose labels match demo attachment content and every file has a valid category', async () => {
  for (const file of downloadFiles) {
    assert.ok(downloadCategories.slice(1).includes(file.category));
    if (file.type !== 'TXT') continue;
    const content = await readFile(new URL(`../public${file.url}`, import.meta.url), 'utf8');
    assert.ok(content.includes(file.title));
    assert.ok(content.includes(`分类：${file.category}`));
    assert.ok(content.includes('演示文件'));
  }
});
