import test from 'node:test';
import assert from 'node:assert/strict';
import { previewTarget } from '../src/filePreview.js';
test('native formats open their actual file', () => {
  for (const type of ['PDF','TXT','PNG','JPG','WEBP']) assert.equal(previewTarget({type,url:'/files/demo.'+type.toLowerCase()}), '/files/demo.'+type.toLowerCase());
});
test('Office preview requires converted content; archives download only', () => {
  assert.equal(previewTarget({type:'DOCX',url:'/files/form.docx'}), null);
  assert.equal(previewTarget({type:'XLSX',url:'/files/form.xlsx',previewUrl:'/files/form.pdf'}), '/files/form.pdf');
  assert.equal(previewTarget({type:'ZIP',url:'/files/form.zip',canPreview:false}), null);
});
test('reject active content URLs and external relative hosts', () => {
  for (const url of ['javascript:alert(1)', 'data:text/html,test', '//outside.test/file.pdf']) assert.equal(previewTarget({type:'PDF',url}), null);
});
