import { useDialogViewport } from './useDialogViewport.js';
import { publicFooter } from './publicFooter.js';
import { SiteBreadcrumb } from './SiteBreadcrumb.jsx';
import { previewTarget } from './filePreview.js';
import { PublicSiteHeader } from './PublicSiteHeader.jsx';
import { canAccess, readMember, memberUrl, PENDING_KEY } from './memberAccess.js';
import { SiteSidebar } from './SiteSidebar.jsx';
import { SitePagination } from './SitePagination.jsx';
import { DownloadFileRow } from './DownloadFileRow.jsx';
import { DownloadSearchPanel } from './DownloadSearchPanel.jsx';
import { parseDownloadFilters, updateDownloadFilters, filterDownloadFiles } from './downloadFilters.js';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FileText, X } from '@phosphor-icons/react';
import chrome from './liveChrome.json';
import { downloadFiles, downloadCategories } from './downloadData.js';
import '../public/live-site/_next/static/chunks/14wuzaycbuy_m.css';
import '../public/live-site/_next/static/chunks/3gz2ulsj5zct1.css';
import '../public/live-site/_next/static/chunks/2scl0nq9je__z.css';
import './downloads.css';

const PAGE_SIZE = 7;
function readFilters() { return parseDownloadFilters(location.search); }
export function App() {
  const [filters, setFilters] = useState(readFilters);
  const [draft, setDraft] = useState(filters.keyword);
  const [gate, setGate] = useState(null);
  const [message, setMessage] = useState('');
  useEffect(() => {
    document.title = '相关下载 · 交互预览 | 广东省项目管理协会';
    const restore = () => { const next = readFilters(); setFilters(next); setDraft(next.keyword); };
    window.addEventListener('popstate', restore);
    return () => window.removeEventListener('popstate', restore);
  }, []);
  const filtered = useMemo(() => filterDownloadFiles(downloadFiles, filters), [filters]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(filters.page, pageCount);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  function update(patch) {
    const next = updateDownloadFilters(filters, patch);
    setFilters(next); setDraft(next.keyword); setMessage('');
    const url = new URL(location.href);
    url.searchParams.set('page', 'downloads');
    for (const [key, value] of Object.entries({ category: next.category === '全部资料' ? '' : next.category, keyword: next.keyword, year: next.year, p: next.page === 1 ? '' : next.page })) {
      if (value) url.searchParams.set(key, String(value)); else url.searchParams.delete(key);
    }
    window.history.pushState({}, '', url);
  }
  function perform(file, action) {
    if (!canAccess(file, readMember())) { setGate({ file, action }); return; }
    if (action === 'preview') {
      const target = previewTarget(file);
      if (target) location.assign(target);
      else setMessage('此格式暂不支持在线预览，请下载后查看。');
    }
    else {
      const link = document.createElement('a'); link.href = file.url; link.download = file.filename;
      document.body.append(link); link.click(); link.remove();
      setMessage(`已发起下载：${file.title}（演示文件）`);
    }
  }
  useEffect(() => {
    const pending = sessionStorage.getItem(PENDING_KEY);
    if (!pending) return;
    sessionStorage.removeItem(PENDING_KEY);
    try { const { id, action } = JSON.parse(pending); const file = downloadFiles.find(f => f.id === id); if (file && ['preview', 'download'].includes(action)) perform(file, action); } catch { /* Discard stale prototype actions. */ }
  }, []);
  return <div className="sections-root dl-root">
    <PublicSiteHeader />
    <main className="sections-main"><div className="news-page-main">
      <SiteBreadcrumb><a href="/">首页</a><span>›</span><a href="/?page=downloads" onClick={event => { event.preventDefault(); update({ category: '全部资料' }); }}>相关下载</a><span>›</span><strong aria-current="page">{filters.category}</strong></SiteBreadcrumb>
      <div className="news-page-layout">
        <SiteSidebar title="相关下载" label="下载分类" items={downloadCategories.map(category => ({ id: category, label: category }))} value={filters.category} onChange={category => update({ category })} />

        <section className="news-page-content dl-content" aria-labelledby="downloads-title">
          <header><h1 id="downloads-title">相关下载</h1></header>
          <DownloadSearchPanel filters={filters} draft={draft} onDraftChange={setDraft} onUpdate={update} />
          <ul className="dl-file-list" aria-label="下载文件列表">{visible.map(file => <DownloadFileRow key={file.id} file={file} onPreview={file => perform(file, 'preview')} onDownload={file => perform(file, 'download')} />)}</ul>
          {!visible.length && <div className="dl-empty"><FileText size={40} /><h2>{filters.category === '全部资料' ? '暂无匹配资料' : '当前分类暂无匹配资料'}</h2><p>请尝试其他关键词或发布日期。</p>{filters.category !== '全部资料' && <button type="button" className="dl-empty-browse" onClick={() => update({ category: '全部资料' })}>在全部资料中查找</button>}</div>}
          <div className="dl-list-bottom"><p className="dl-result-range" aria-live="polite">{filtered.length ? `第 ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, filtered.length)} 条，共 ${filtered.length} 条` : '共 0 条'} · 每页 {PAGE_SIZE} 条</p><SitePagination page={page} pageCount={pageCount} onChange={page => update({ page })} label="文件分页" /></div>
          <p className="dl-download-status" role="status">{message}</p>
        </section>
      </div>
    </div></main>
    <div dangerouslySetInnerHTML={{ __html: publicFooter }} />
    {gate && <MemberGate request={gate} onClose={() => setGate(null)} />}
  </div>;
}

function MemberGate({ request, onClose }) {
  useDialogViewport();
  const dialog = useRef(null);
  const member = readMember();
  const pending = member?.status === 'pending';
  const applicantTemplate = Boolean(request.file.templateFor?.length);
  useEffect(() => { const previous=document.activeElement;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.current.showModal();dialog.current.querySelector('h2')?.focus({preventScroll:true});return ()=>{document.body.style.overflow=overflow;previous?.focus({preventScroll:true});}; }, []);
  function remember() { sessionStorage.setItem(PENDING_KEY, JSON.stringify({id: request.file.id, action: request.action})); }
  return <dialog ref={dialog} className="dl-preview member-gate" aria-labelledby="member-gate-title" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="dl-preview-heading"><div><span>{applicantTemplate ? '申请模板' : '会员专享资料'}</span><h2 id="member-gate-title" tabIndex={-1}>{applicantTemplate ? '请登录后下载申请模板' : pending ? '入会申请审核中' : member ? '该资料仅限协会会员使用' : '请登录后使用会员资料'}</h2></div><button type="button" aria-label="关闭会员提示" onClick={onClose}><X size={24} /></button></div>
    <div className="member-gate-body"><strong>{request.file.title}</strong><p>{applicantTemplate ? '登录后即可获取当前事项的申请模板，无需额外取得协会会员资格。' : pending ? '您的入会申请正在审核，审核通过后可预览和下载此资料。' : member ? '您已注册用户账号，尚未取得协会会员资格。申请入会并审核通过后，可预览和下载此资料。' : '该资料仅限有效协会会员预览和下载。已有账号请登录，尚无账号可先注册。'}</p><div className="member-gate-actions">{!member ? <><a className="member-primary" href={memberUrl('login')} onClick={remember}>用户登录</a><a className="member-secondary" href={memberUrl('register')} onClick={remember}>用户注册</a></> : <a className="member-primary" href={memberUrl('join')} onClick={remember}>{pending ? '查看入会进度' : '申请入会'}</a>}<button className="member-text-button" type="button" onClick={onClose}>继续浏览</button></div></div>
  </dialog>;
}
