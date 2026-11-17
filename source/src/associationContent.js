import { noticeArticles } from './noticeContent.js';

// Official association-news listing captured on 2026-10-27.
// Reuse the existing full article body by its stable official article ID.
const officialListing = [
  {
    "id": "06fe0be627a34c04a0b5eff7d6b11944",
    "title": "深化“咨投运建”合作交流 共谋一体化发展新路径  ——中建一局三公司来我会拜访交流",
    "date": "2026-10-26",
    "sourceUrl": "https://www.gpma.org.cn/view-95feb0fad87c43339342815db1bb6474-06fe0be627a34c04a0b5eff7d6b11944.html"
  },
  {
    "id": "3d6c7bd193e44363a96aa78d7c054b25",
    "title": "共探行业数字化转型与AI赋能新路径 ——我会赴广州易达建信科技开发有限公司开展会员走访活动",
    "date": "2026-10-26",
    "sourceUrl": "https://www.gpma.org.cn/view-95feb0fad87c43339342815db1bb6474-3d6c7bd193e44363a96aa78d7c054b25.html"
  },
  {
    "id": "4b8ab4c5f91c46a589415e57898253a8",
    "title": "会企联动深调研，共谋全咨发展新路径 ——我会赴广东省监理走访交流",
    "date": "2026-10-26",
    "sourceUrl": "https://www.gpma.org.cn/view-95feb0fad87c43339342815db1bb6474-4b8ab4c5f91c46a589415e57898253a8.html"
  },
  {
    "id": "8d50498f46444b9394746081fb71fff7",
    "title": "深耕精细运营 聚力协同创新——我会赴城规监理走访交流",
    "date": "2026-10-26",
    "sourceUrl": "https://www.gpma.org.cn/view-95feb0fad87c43339342815db1bb6474-8d50498f46444b9394746081fb71fff7.html"
  },
  {
    "id": "a7257a3a8ac84e1fa8eb57b49b94868e",
    "title": "《建设工程质量检测项目管理规程》等5项团体标准立项评审会顺利召开",
    "date": "2026-10-26",
    "sourceUrl": "https://www.gpma.org.cn/view-95feb0fad87c43339342815db1bb6474-a7257a3a8ac84e1fa8eb57b49b94868e.html"
  },
  {
    "id": "043c1fd4028f4c3c8411092d98ec7a5e",
    "title": "广东省项目管理协会机电工程委员会  2026年下半年工作全体会议在广州召开",
    "date": "2026-10-26",
    "sourceUrl": "https://www.gpma.org.cn/view-95feb0fad87c43339342815db1bb6474-043c1fd4028f4c3c8411092d98ec7a5e.html"
  }
];

export const associationArticles = officialListing.map(item => ({
  ...noticeArticles.find(article => article.id === item.id),
  ...item,
}));
