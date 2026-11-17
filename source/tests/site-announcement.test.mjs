import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeAnnouncement, announcementStorageKey, shouldShowAnnouncement } from '../src/siteAnnouncement.js';

const origin = 'https://gpma.example';
const content = { id: 'important', revision: '1', enabled: true, title: '重要公告', body: '正文\n\n第二段', imageUrl: '/image.jpg', linkUrl: '/?page=application-catalog', linkText: '前往办理' };

test('the four editable content fields work and image/link are optional', () => {
  const notice = normalizeAnnouncement(content, origin);
  assert.equal(notice.title, content.title);
  assert.equal(notice.body, content.body);
  assert.equal(notice.imageUrl, `${origin}/image.jpg`);
  assert.equal(notice.linkUrl, `${origin}/?page=application-catalog`);
  const textOnly = normalizeAnnouncement({ ...content, imageUrl: '', linkUrl: '' }, origin);
  assert.equal(textOnly.imageUrl, '');
  assert.equal(textOnly.linkText, '');
  assert.equal(normalizeAnnouncement({ ...content, enabled: false }, origin), null);
  assert.equal(normalizeAnnouncement({ ...content, title: ' ' }, origin), null);
});
test('closing suppresses the same announcement across pages, but a new revision can appear', () => {
  const notice = normalizeAnnouncement(content, origin);
  const values = new Map();
  const storage = { getItem: key => values.get(key) };
  assert.equal(shouldShowAnnouncement(notice, storage), true);
  values.set(announcementStorageKey(notice), '1');
  assert.equal(shouldShowAnnouncement(notice, storage), false);
  assert.equal(shouldShowAnnouncement({ ...notice, revision: '2' }, storage), true);
  assert.equal(shouldShowAnnouncement(notice, storage, true), true);
  assert.equal(shouldShowAnnouncement({ ...notice, frequency: 'page' }, storage), true);
});
test('invalid content URLs are discarded and disabled announcements stay hidden', () => {
  const notice = normalizeAnnouncement({ ...content, imageUrl: 'javascript:alert(1)', linkUrl: 'data:text/html,example' }, origin);
  assert.equal(notice.imageUrl, '');
  assert.equal(notice.linkUrl, '');
  assert.equal(shouldShowAnnouncement(null, null, true), false);
});
test('unavailable session storage does not prevent viewing the announcement', () => {
  const storage = { getItem() { throw new Error('disabled'); } };
  assert.equal(shouldShowAnnouncement(normalizeAnnouncement(content, origin), storage), true);
});
