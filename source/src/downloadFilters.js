import { downloadCategories } from './downloadData.js';

export const downloadYears = ['2026', '2025', '2024', '2023', '2022'];
const legacyCategories = {
  通知公告: '通知文件',
  申报材料: '申请表格', 会员服务: '申请表格', 专家资料: '申请表格',
  标准规范: '政策文件', 政策法规: '政策文件', 团体标准: '政策文件',
  协会文件: '通知文件', 培训资料: '通知文件', 其他资料: '通知文件',
};
export function parseDownloadFilters(search) {
  const params = new URLSearchParams(search);
  const requested = params.get('category');
  const category = legacyCategories[requested] || requested;
  return {
    category: downloadCategories.includes(category) ? category : '全部资料',
    keyword: params.get('keyword') || '',
    year: downloadYears.includes(params.get('year')) ? params.get('year') : '',
    page: Math.max(1, parseInt(params.get('p'), 10) || 1),
  };
}
export function updateDownloadFilters(filters, patch) {
  return { ...filters, page: 1, ...patch };
}
export function filterDownloadFiles(files, filters) {
  const keyword = filters.keyword.trim().toLocaleLowerCase();
  return files.filter(file =>
    (filters.category === '全部资料' || file.category === filters.category) &&
    (!filters.year || file.date.startsWith(filters.year)) &&
    (!keyword || `${file.title} ${file.category} ${file.tags.join(' ')}`.toLocaleLowerCase().includes(keyword))
  ).sort((first, second) => second.date.localeCompare(first.date) || first.id - second.id);
}
