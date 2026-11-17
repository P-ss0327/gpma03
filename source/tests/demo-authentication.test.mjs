import test from 'node:test';
import assert from 'node:assert/strict';
import { authenticatePreview } from '../src/demoAuthentication.js';

test('LAN demo login succeeds even when secure-context crypto is unavailable', async () => {
  const unavailable = () => { throw new Error('No crypto.subtle on HTTP'); };
  assert.equal((await authenticatePreview(' user ', 'demo1234', {}, unavailable)).name, 'user');
  assert.equal((await authenticatePreview('member', 'demo1234', {}, unavailable)).status, 'active');
  assert.equal(await authenticatePreview('user', 'wrong', {}, unavailable), null);
});
test('registered preview accounts still require a matching password digest', async () => {
  const accounts = { alice: {hash:'correct',profile:{realName:'Alice'}} };
  assert.equal(await authenticatePreview('alice', 'wrong', accounts, async () => 'wrong'), null);
  assert.equal((await authenticatePreview('alice', 'valid', accounts, async () => 'correct')).profile.realName, 'Alice');
});
