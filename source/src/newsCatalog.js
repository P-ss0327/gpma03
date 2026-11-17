import { originalNews as sourceNews } from './newsContent.js';

// Keep existing article indexes stable while exposing picture stories in News Information.
const existingIds = new Set(sourceNews.industry.map(article => article.id));
export const originalNews = {
  ...sourceNews,
  industry: [...sourceNews.industry, ...sourceNews.picture.filter(article => !existingIds.has(article.id)).map(article => ({...article, contentSection: 'picture'}))],
};
export const pictureNewsIndex = article => originalNews.industry.findIndex(item => item.id === article.id);
