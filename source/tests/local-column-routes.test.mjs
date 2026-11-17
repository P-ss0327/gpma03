import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { siteNavigation } from '../src/siteNavigation.js';
import { memberNavigation } from '../src/memberNavigation.js';
import { searchSite } from '../src/siteSearch.js';
const columns=JSON.parse(await readFile(new URL('../src/migratedColumns.json',import.meta.url)));
test('all official navigation and member sidebar destinations remain on the local origin',()=>{
 const entries=siteNavigation.flatMap(x=>[x,...x.children||[]]).concat(memberNavigation());
 for(const item of entries){assert.ok(item.href.startsWith('/'),item.href);const u=new URL(item.href,'https://local.example');assert.equal(u.origin,'https://local.example');if(u.pathname!=='/')assert.ok(columns.pages[u.pathname]||columns.aliases[u.pathname],item.href);}
});
test('ten migrated column snapshots contain local links, safe markup and existing local assets',async()=>{
 assert.equal(Object.keys(columns.pages).length,10);
 for(const page of Object.values(columns.pages)){
  assert.ok(page.html.includes('news-page-content'));
  assert.doesNotMatch(page.html,/<script|<iframe|\son\w+=|href="https?:\/\/(?:www\.)?gpma/i);
  for(const [,src] of page.html.matchAll(/src="(\/assets\/[^"?#]+)"/g))await readFile(new URL('../public'+src,import.meta.url));
  for(const [,href] of page.html.matchAll(/href="(\/list-[^"]+)"/g))assert.ok(columns.pages[href]||columns.aliases[href],href);
 }
 assert.deepEqual(columns.failedAssets,[]);
});
test('local search finds migrated columns and routes news and downloads locally',()=>{
 assert.ok(searchSite('分支机构').some(x=>columns.pages[x.href]));
 assert.ok(searchSite('专家').length>0);
 for(const x of searchSite('申请'))assert.equal(new URL(x.href,'https://local.example').origin,'https://local.example');
 assert.deepEqual(searchSite(''),[]);
});
