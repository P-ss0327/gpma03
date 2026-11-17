import test from 'node:test';
import assert from 'node:assert/strict';
import {standardsPaths,standardsNews,standardsShowcase} from '../src/standardsContent.js';
import {noticeArticles} from '../src/noticeContent.js';
test('standards news reuses verified article bodies and stays newest first',()=>{
 assert.equal(standardsNews.length,3);
 for(const item of standardsNews)assert.equal(item.content,noticeArticles.find(x=>x.id===item.id).content);
 assert.deepEqual(standardsNews.map(x=>x.date),[...standardsNews.map(x=>x.date)].sort().reverse());
});
test('showcase placeholders are explicitly samples without fabricated publication metadata',()=>{
 assert.equal(standardsShowcase.length,3);
 for(const item of standardsShowcase){assert.match(item.title,/展示样例/);assert.ok(!item.date&&!item.number);assert.ok(item.paragraphs.length>=3);}
 assert.equal(standardsPaths['/list-d7360f55075b4ab78c69ea383d8ca988.html'],'news');
 assert.equal(standardsPaths['/list-1df896b0f23e42bf910ec0d01e14e9ed.html'],'showcase');
});
