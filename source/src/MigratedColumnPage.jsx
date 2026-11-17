import { publicFooter } from './publicFooter.js';
import { PublicSiteHeader } from './PublicSiteHeader.jsx';
import { SiteBreadcrumb } from './SiteBreadcrumb.jsx';
import { SiteSidebar } from './SiteSidebar.jsx';
import { siteNavigation } from './siteNavigation.js';
import columns from './migratedColumns.json';
import '../public/live-site/_next/static/chunks/14wuzaycbuy_m.css';
import '../public/live-site/_next/static/chunks/3gz2ulsj5zct1.css';
import '../public/live-site/_next/static/chunks/2scl0nq9je__z.css';
import './membership.css';
export function App(){
 const page=columns.pages[location.pathname+location.search]||columns.pages[location.pathname];
 const title=page.title.replace('-广东省项目管理协会','');
 const active=title==='分支机构'?'关于协会':title==='会员动态'?'会员服务':title.startsWith('团标')||title==='文件下载'?'团体标准':'评奖评优';
 const parent=siteNavigation.find(item=>item.label===active);
 const items=(parent?.children||[]).map(item=>({id:item.label,...item}));
 const content=page.html.match(/<div class="under-construction">[\s\S]*?<\/div>/)?.[0]||'<p>暂无内容</p>';
 document.title=page.title;
 return <div className="sections-root member-page"><PublicSiteHeader activePage={active}/><main className="sections-main"><div className="news-page-main"><SiteBreadcrumb><a href="/">首页</a><span>›</span><a href={parent?.href}>{active}</a><span>›</span><strong>{title}</strong></SiteBreadcrumb><div className="news-page-layout"><SiteSidebar title={active} items={items} value={title}/><section className="news-page-content"><header><h1>{title}</h1></header><div dangerouslySetInnerHTML={{__html:content}}/></section></div></div></main><div dangerouslySetInnerHTML={{__html:publicFooter}}/></div>;
}
