import { publicFooter } from './publicFooter.js';
import { SiteBreadcrumb } from './SiteBreadcrumb.jsx';
import { ArticleNavigation } from './ArticleNavigation.jsx';
import { PublicSiteHeader } from './PublicSiteHeader.jsx';
import { SiteSidebar } from './SiteSidebar.jsx';
import { SitePagination } from './SitePagination.jsx';
import { DatedListRow } from './DatedListRow.jsx';
import { partySections, partyPathSections, partyArticles } from './partyContent.js';
import chrome from './liveChrome.json';
import '../public/live-site/_next/static/chunks/14wuzaycbuy_m.css';
import '../public/live-site/_next/static/chunks/3gz2ulsj5zct1.css';
import '../public/live-site/_next/static/chunks/2scl0nq9je__z.css';
import './membership.css';
import './party.css';

const listUrl = (section, page = 1) => `/?page=party&section=${section}${page > 1 ? `&p=${page}` : ''}`;
const articleUrl = (section, id, page) => `${listUrl(section, page)}&article=${id}`;

export function App() {
  const params = new URLSearchParams(location.search);
  const requestedSection = params.get('section') || partyPathSections[location.pathname];
  const section = partySections.find(item => item.id === requestedSection) || partySections[0];
  const articles = partyArticles.filter(item => item.category === section.id);
  const pageSize = 5;
  const pageCount = Math.max(1, Math.ceil(articles.length / pageSize));
  const requestedPage = Number(params.get('p'));
  const page = Number.isInteger(requestedPage) ? Math.max(1, Math.min(pageCount, requestedPage)) : 1;
  const articleId = params.get('article');
  const articleIndex = articles.findIndex(item => item.id === articleId);
  const article = articles[articleIndex];
  document.title = `${article?.title || section.label} | 广东省项目管理协会`;
  return <div className="sections-root member-page"><PublicSiteHeader activePage="党建之窗" />
    <main className="sections-main"><div className="news-page-main">
      <SiteBreadcrumb><a href="/">首页</a><span>›</span><a href="/?page=party">党建之窗</a><span>›</span>{articleId ? <><a href={listUrl(section.id, page)}>{section.label}</a><span>›</span><strong>正文</strong></> : <strong>{section.label}</strong>}</SiteBreadcrumb>
      <div className="news-page-layout"><SiteSidebar title="党建之窗" value={section.id} items={partySections.map(item => ({ ...item, href: listUrl(item.id) }))} />
        <section className="news-page-content party-content"><header><h1>{section.label}</h1></header>
          {articleId ? article ? <article className="party-article"><h2>{article.title}</h2><p className="party-article-meta">发布时间：<time dateTime={article.date}>{article.date}</time>　参考来源：{article.source}　学习参考</p><div className="party-article-body">{article.sections.map(section => <section key={section.heading}><h3>{section.heading}</h3>{section.paragraphs.map((text, index) => <p key={index}>{text}</p>)}</section>)}</div>
            <ArticleNavigation index={articleIndex} total={articles.length} section={section.id} onNavigate={index => location.assign(articleUrl(section.id, articles[index].id, page))} />
          </article> : <div className="party-article" role="alert"><p>未找到此文章。</p><a href={listUrl(section.id)}>返回{section.label}</a></div> : <><div className="party-article-list">{articles.slice((page - 1) * pageSize, page * pageSize).map(item => <DatedListRow key={item.id} title={item.title} date={item.date} href={articleUrl(section.id, item.id, page)} />)}</div><SitePagination page={page} pageCount={pageCount} onChange={next => location.assign(listUrl(section.id, next))} label={`${section.label}分页`} /></>}
        </section></div></div></main><div dangerouslySetInnerHTML={{__html: publicFooter}} /></div>;
}
