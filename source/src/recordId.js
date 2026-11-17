// Record identifiers also work on HTTP LAN previews where randomUUID is absent.
export function createRecordId(provider = globalThis.crypto) {
  if (typeof provider?.randomUUID === 'function') return provider.randomUUID();
  const bytes = new Uint8Array(16);
  if (typeof provider?.getRandomValues !== 'function') throw new Error('当前浏览器不支持生成申请编号，请使用新版浏览器。');
  provider.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 15) | 64;
  bytes[8] = (bytes[8] & 63) | 128;
  const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}
