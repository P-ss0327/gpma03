import { useEffect, useState } from 'react';
import { MagnifyingGlass, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { publicFooter } from './publicFooter.js';
import { SiteBreadcrumb } from './SiteBreadcrumb.jsx';
import { PublicSiteHeader } from './PublicSiteHeader.jsx';
import { SitePagination } from './SitePagination.jsx';
import { searchSite } from './siteSearch.js';
import chrome from './liveChrome.json';
import '../public/live-site/_next/static/chunks/14wuzaycbuy_m.css';
import '../public/live-site/_next/static/chunks/3gz2ulsj5zct1.css';
import '../public/live-site/_next/static/chunks/2scl0nq9je__z.css';
import './membership.css';
import './search.css';
export function App() {
  const params = new URLSearchParams(location.search);
  const [keyword,setKeyword] = useState(params.get('keyword') || '');
  const [requestedPage,setPage] = useState(Number(params.get('p'))||1);
  const returnTo = params.get('returnTo');
  const cancelHref = returnTo?.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/';
  const highlight = title => { const at=title.toLocaleLowerCase().indexOf(keyword.trim().toLocaleLowerCase()); return at<0 || !keyword.trim() ? title : <>{title.slice(0,at)}<mark>{title.slice(at,at+keyword.trim().length)}</mark>{title.slice(at+keyword.trim().length)}</>; };
  const results = searchSite(keyword);
  const pageCount = Math.max(1,Math.ceil(results.length/10));
  const page = Math.min(pageCount, Math.max(1,requestedPage));
  useEffect(()=>{const url=new URL(location.href);if(keyword)url.searchParams.set('keyword',keyword);else url.searchParams.delete('keyword');if(page>1)url.searchParams.set('p',String(page));else url.searchParams.delete('p');history.replaceState(null,'',url);},[keyword,page]);
  document.title = '站内搜索 | 广东省项目管理协会';
  return <div className="sections-root member-page search-page"><PublicSiteHeader activePage="" /><div className="search-entry-bar"><a href={cancelHref} aria-label="返回上一页"><CaretLeft size={24}/></a><form role="search" onSubmit={event=>{event.preventDefault();document.activeElement?.blur();}}><MagnifyingGlass size={20}/><input type="search" aria-label="搜索站内内容" placeholder="请输入关键词" value={keyword} onChange={event=>{setKeyword(event.target.value);setPage(1);}} enterKeyHint="search" /><button type="submit">搜索</button></form><a href={cancelHref}>取消</a></div><main className="sections-main"><div className="news-page-main"><SiteBreadcrumb><a href="/">首页</a><span>›</span><strong>站内搜索</strong></SiteBreadcrumb><section className="news-page-content local-search"><header><h1>站内搜索</h1></header><p role="status" aria-live="polite">{keyword ? `“${keyword}”的搜索结果：${results.length} 条` : '请输入关键词搜索。'}</p>{results.slice((page-1)*10,page*10).map(item=><a className="local-search-result" href={item.href} key={item.href}><h2>{highlight(item.title)}</h2><CaretRight className="search-result-arrow" size={20}/><span>{item.category}{item.date ? ` · ${item.date}` : ''}</span></a>)}{keyword && !results.length && <p>暂无匹配内容，请更换关键词。</p>}{pageCount>1 && <SitePagination page={page} pageCount={pageCount} onChange={setPage} />}</section></div></main><div dangerouslySetInnerHTML={{__html:publicFooter}} /></div>;
}
