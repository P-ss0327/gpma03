import { applicationAccess } from './applicationConfig.js';
// Frontend prototype only. Production must replace this adapter with server authentication
// and authorize every preview/download response; public demo assets are not protected files.
const SESSION_KEY = 'gpma-demo-member';
export const PENDING_KEY = 'gpma-demo-file-action';
export function readMember() {
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)) || null; } catch { return null; }
}
export function saveMember(member) { sessionStorage.setItem(SESSION_KEY, JSON.stringify(member)); }
export function signOut() { sessionStorage.removeItem(SESSION_KEY); }
export function canAccess(file, member) { return file.access !== 'member' || member?.status === 'active' || Boolean(file.templateFor?.some(type => applicationAccess(type,member) === 'allowed')); }
export function safeReturn(value) {
  try { const url = new URL(value || '/?page=downloads', location.origin); return url.origin === location.origin ? url.pathname + url.search : '/?page=downloads'; } catch { return '/?page=downloads'; }
}
export function memberUrl(view = 'login', returnTo) {
  returnTo ||= new URLSearchParams(location.search).get('page')?.startsWith('member-') ? new URLSearchParams(location.search).get('returnTo') : location.pathname + location.search;
  return `/?page=member-${view}&returnTo=${encodeURIComponent(safeReturn(returnTo))}`;
}
