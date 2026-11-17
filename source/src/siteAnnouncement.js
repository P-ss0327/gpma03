// Frontend content adapter. A future CMS endpoint can return this same JSON structure.
export const ANNOUNCEMENT_CONFIG_URL = '/site-announcement.json';

function safeUrl(value, origin) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const url = new URL(value, origin);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
}

export function normalizeAnnouncement(value, origin) {
  if (!value || value.enabled !== true || typeof value.title !== 'string' || !value.title.trim()) return null;
  const linkUrl = safeUrl(value.linkUrl, origin);
  return {
    id: String(value.id || 'site-announcement'),
    revision: String(value.revision || '1'),
    label: typeof value.label === 'string' ? value.label : '重要公告',
    title: value.title.trim(),
    body: typeof value.body === 'string' ? value.body : '',
    imageUrl: safeUrl(value.imageUrl, origin),
    imageAlt: typeof value.imageAlt === 'string' ? value.imageAlt : '',
    linkUrl,
    linkText: linkUrl ? (typeof value.linkText === 'string' && value.linkText.trim() ? value.linkText : '查看详情') : '',
    frequency: value.frequency === 'page' ? 'page' : 'session',
  };
}

export const announcementStorageKey = notice => `gpma-announcement-dismissed:${notice.id}:${notice.revision}`;

export function shouldShowAnnouncement(notice, storage, force = false) {
  if (!notice) return false;
  if (force || notice.frequency === 'page') return true;
  try { return storage.getItem(announcementStorageKey(notice)) !== '1'; }
  catch { return true; }
}

export async function loadSiteAnnouncement(signal) {
  const response = await fetch(ANNOUNCEMENT_CONFIG_URL, { cache: 'no-store', signal });
  if (!response.ok) return null;
  return normalizeAnnouncement(await response.json(), location.origin);
}
