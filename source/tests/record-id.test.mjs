import test from 'node:test';
import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { createRecordId } from '../src/recordId.js';
import { newApplication } from '../src/applicationStore.js';
test('HTTP-compatible UUIDs are valid and unique without randomUUID', () => {
 const provider = { getRandomValues: bytes => webcrypto.getRandomValues(bytes) };
 const ids = Array.from({length: 100}, () => createRecordId(provider));
 assert.equal(new Set(ids).size,100);
 ids.forEach(id => assert.match(id,/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/));
});
test('new application keeps applicant data', () => {
 const result = newApplication('expert', {name:'user',profile:{realName:'测试'}});
 assert.ok(result.id);
 assert.equal(result.values.expertName,'测试');
});
