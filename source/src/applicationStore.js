import { createRecordId } from './recordId.js';
import { validateApplication } from './applicationConfig.js';

let databasePromise;
function database() {
  if (!databasePromise) databasePromise = new Promise((resolve, reject) => {
    const request = indexedDB.open('gpma-application-prototype', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('applications', { keyPath: 'id' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => { databasePromise = null; reject(request.error); };
  });
  return databasePromise;
}

export async function listApplications(owner) {
  const connection = await database();
  return new Promise((resolve, reject) => {
    const request = connection.transaction('applications').objectStore('applications').getAll();
    request.onsuccess = () => resolve(request.result.filter(record => record.owner === owner && record.status === 'submitted').sort((first, second) => second.updatedAt.localeCompare(first.updatedAt)));
    request.onerror = () => reject(request.error);
  });
}

export async function readApplication(id, owner) {
  return (await listApplications(owner)).find(record => record.id === id) || null;
}

export async function submitApplication(record, owner) {
  if (!owner || record.owner !== owner) throw new Error('请登录后操作自己的申请。');
  if (Object.keys(validateApplication(record.type, record.values, record.attachments, 3)).length) throw new Error('请完善必填信息与材料后提交。');
  const connection = await database();
  return new Promise((resolve, reject) => {
    const transaction = connection.transaction('applications', 'readwrite');
    const store = transaction.objectStore('applications');
    let saved;
    let failure;
    const request = store.get(record.id);
    request.onsuccess = () => {
      if (request.result && request.result.owner !== owner) { failure = new Error('无权操作此申请。'); transaction.abort(); return; }
      if (request.result?.status === 'submitted') { saved = request.result; return; }
      const now = new Date().toISOString();
      saved = { ...record, owner, status: 'submitted', updatedAt: now, createdAt: now, submittedAt: now, number: `DEMO-${now.slice(0, 10).replaceAll('-', '')}-${record.id.replaceAll('-', '').slice(0, 8).toUpperCase()}` };
      store.put(saved);
    };
    transaction.oncomplete = () => resolve(saved);
    transaction.onerror = () => reject(transaction.error || new Error('提交失败，请重试。'));
    transaction.onabort = () => reject(failure || transaction.error || new Error('提交失败，请重试。'));
  });
}

export function newApplication(type, member) {
  return { id: createRecordId(), type, applicantIdentity: 'personal', owner: member.name, values: { unit: member.profile?.unit || member.unit || '', contact:member.profile?.realName || '', phone:member.profile?.phone || '', email:member.profile?.email || '', ...(type==='expert'?{expertName:member.profile?.realName || ''}:{}) }, attachments: [] };
}
