import { associationArticles } from './associationContent.js';
import { expertProfiles } from './expertProfiles.js';
import { originalNews } from './newsCatalog.js';
import { noticeArticles } from './noticeContent.js';
import { partyArticles } from './partyContent.js';
import { memberCompanies } from './memberShowcaseData.js';
import { downloadFiles } from './downloadData.js';
import { siteNavigation } from './siteNavigation.js';
export const siteSearchEntries = [
  ...expertProfiles.map((item,index)=>({title:`${item.name} · ${item.title}`,category:'专家库',href:`/?page=experts&expert=${index}`})),
  ...siteNavigation.flatMap(parent => [parent, ...(parent.children || [])]).map(item => ({ title:item.label, href:item.href, category:'栏目' })),
  ...Object.entries(originalNews).filter(([section]) => section !== 'picture').flatMap(([section, items]) => items.map((item,index) => ({ title:item.title, date:item.date, category:'新闻动态', href:`/?page=news&section=${section}&article=${index}` }))),
  ...associationArticles.map((item,index) => ({ title:item.title,date:item.date,category:'协会动态',href:`/?page=notices&section=association&article=${index}` })),
  ...noticeArticles.map((item,index) => ({ title:item.title,date:item.date,category:'通知公告',href:`/?page=notices&article=${index}` })),
  ...partyArticles.map(item => ({title:item.title,date:item.date,category:'党建之窗',href:`/?page=party&section=${item.category}&article=${item.id}`})),
  ...memberCompanies.map((item,index) => ({title:item.name,category:'会员风采',href:`/?page=member&member=${index}`})),
  ...downloadFiles.map(item => ({title:item.title,category:'相关下载',href:`/?page=downloads&keyword=${encodeURIComponent(item.title)}`})),
];
export function searchSite(keyword) {
  const query = keyword.trim().toLocaleLowerCase();
  if (!query) return [];
  const seen = new Set();
  return siteSearchEntries.filter(item => item.title?.toLocaleLowerCase().includes(query)).filter(item => { if(seen.has(item.href)) return false;seen.add(item.href);return true; });
}
