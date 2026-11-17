import test from 'node:test';
import assert from 'node:assert/strict';
import { canAccess, safeReturn } from '../src/memberAccess.js';
import { downloadFiles } from '../src/downloadData.js';
globalThis.location = { origin: 'http://localhost:5173' };
test('public files remain available to visitors and all member states', () => {
  for (const member of [null, {status:'registered'}, {status:'pending'}, {status:'active'}]) assert.equal(canAccess({access:'public'}, member), true);
});
test('member files require active association membership', () => {
  for (const member of [null, {status:'registered'}, {status:'pending'}, {status:'expired'}]) assert.equal(canAccess({access:'member'}, member), false);
  assert.equal(canAccess({access:'member'}, {status:'active'}), true);
});
test('return destinations preserve filters and reject external redirects', () => {
  assert.equal(safeReturn('/?page=downloads&year=2025&p=2'), '/?page=downloads&year=2025&p=2');
  for (const value of ['https://outside.example/', '//outside.example/', 'javascript:alert(1)']) assert.equal(safeReturn(value), '/?page=downloads');
});
test('example records include public and restricted data without changing list metadata', () => {
  assert.equal(downloadFiles.length, 24);
  assert.ok(downloadFiles.some(f => f.access === 'member'));
  assert.ok(downloadFiles.some(f => f.access === 'public' && !f.canPreview));
  assert.ok(downloadFiles.filter(f => f.tags.includes('入会材料')).every(f => f.access === 'public'));
});
test('application templates are available to eligible registered applicants',()=>{
 const template=downloadFiles.find(file=>file.id===1);
 assert.deepEqual(template.templateFor,['science']);
 assert.equal(canAccess(template,null),false);
 for(const status of ['registered','pending','active'])assert.equal(canAccess(template,{status}),true);
 const other=downloadFiles.find(file=>file.access==='member'&&!file.templateFor.length);
 assert.equal(canAccess(other,{status:'registered'}),false);
});
