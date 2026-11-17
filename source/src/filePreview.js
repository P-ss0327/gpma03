// Office files require a server-generated PDF/HTML preview; do not send private files
// to a third-party Office viewer. Browsers can display these native formats directly.
const nativeTypes = new Set(['PDF', 'TXT', 'PNG', 'JPG', 'JPEG', 'GIF', 'WEBP']);
export function previewTarget(file) {
  if (file.canPreview === false) return null;
  const candidate = file.previewUrl || file.url;
  const type = (file.previewType || (file.previewUrl ? candidate.split('?')[0].split('.').pop() : file.type) || '').toUpperCase();
  if (!nativeTypes.has(type)) return null;
  // Only ordinary local/HTTPS file URLs; never execute an injected URL scheme.
  if (!candidate || (!candidate.startsWith('/') && !candidate.startsWith('https://')) || candidate.startsWith('//')) return null;
  return candidate;
}
