import { publicFooter } from './publicFooter.js';
import { SiteBreadcrumb } from './SiteBreadcrumb.jsx';
import {PublicSiteHeader} from './PublicSiteHeader.jsx';
import {SiteSidebar} from './SiteSidebar.jsx';
import {SitePagination} from './SitePagination.jsx';
import {DatedListRow} from './DatedListRow.jsx';
import {ArticleNavigation} from './ArticleNavigation.jsx';
import {standardsPaths,standardsSections,standardsNews,standardsShowcase} from './standardsContent.js';
import chrome from './liveChrome.json';
import '../public/live-site/_next/static/chunks/14wuzaycbuy_m.css';
import '../public/live-site/_next/static/chunks/3gz2ulsj5zct1.css';
import '../public/live-site/_next/static/chunks/2scl0nq9je__z.css';
import './membership.css';
import './party.css';
import './standards.css';
const listUrl=(section,p=1)=>`/?page=standards&section=${section}${p>1?'&p='+p:''}`;
export function App(){
 const params=new URLSearchParams(location.search);
 const section=standardsSections.find(x=>x.id===(params.get('section')||standardsPaths[location.pathname]))||standardsSections[0];
 const items=section.id==='news'?standardsNews:standardsShowcase;
 const pageCount=Math.max(1,Math.ceil(items.length/5));const page=Math.min(pageCount,Math.max(1,Number(params.get('p'))||1));
 const index=items.findIndex(x=>x.id===params.get('article'));const article=items[index];
 const articleUrl=id=>`${listUrl(section.id,page)}&article=${id}`;
 document.title=`${article?.title||section.label} | 广东省项目管理协会`;
 return <div className="sections-root member-page"><PublicSiteHeader activePage="团体标准"/><main className="sections-main"><div className="news-page-main"><SiteBreadcrumb><a href="/">首页</a><span>›</span><a href={listUrl('news')}>团体标准</a><span>›</span>{article?<><a href={listUrl(section.id,page)}>{section.label}</a><span>›</span><strong>正文</strong></>:<strong>{section.label}</strong>}</SiteBreadcrumb><div className="news-page-layout"><SiteSidebar title="团体标准" items={standardsSections.map(x=>({...x,href:listUrl(x.id)}))} value={section.id}/><section className="news-page-content party-content standards-content"><header><h1>{section.label}</h1></header>{article?<article className="party-article"><h2>{article.title}</h2><p className="party-article-meta">{section.id==='news'?`发布时间：${article.date}　来源：广东省项目管理协会`:'页面展示样例 · 非正式发布标准'}</p>{section.id==='news'?<div className="standards-original-content" dangerouslySetInnerHTML={{__html:article.content}}/>:<div className="party-article-body"><h3>标准介绍</h3>{article.paragraphs.map(text=><p key={text}>{text}</p>)}</div>}<ArticleNavigation index={index} total={items.length} section={section.id} onNavigate={i=>location.assign(articleUrl(items[i].id))}/></article>:params.has('article')?<p role="alert">未找到此内容。</p>:<>{items.slice((page-1)*5,page*5).map(item=><DatedListRow key={item.id} title={item.title} date={item.date} dateFallback="展示样例" href={articleUrl(item.id)}/>)}<SitePagination page={page} pageCount={pageCount} onChange={p=>location.assign(listUrl(section.id,p))}/></>}</section></div></div></main><div dangerouslySetInnerHTML={{__html:publicFooter}}/></div>;
}
