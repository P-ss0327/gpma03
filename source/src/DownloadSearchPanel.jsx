import { MagnifyingGlass, X, CalendarBlank, CaretDown } from '@phosphor-icons/react';

import { downloadYears } from './downloadFilters.js';
const popular = ['科技奖申报', '入会申请', '专家入库', '团体标准', '培训通知'];

export function DownloadSearchPanel({ filters, draft, onDraftChange, onUpdate }) {
  return <div className="dl-search-area">
    <form className="dl-search-form" role="search" aria-label="资料搜索" onSubmit={event => { event.preventDefault(); onUpdate({ keyword: draft.trim() }); }}>
      <div className="dl-search-box"><MagnifyingGlass size={21} aria-hidden="true" /><input aria-label="搜索文件名称或关键词" type="search" enterKeyHint="search" placeholder="请输入文件名称或关键词" value={draft} onChange={event => { const value = event.target.value; onDraftChange(value); if (!value.trim()) onUpdate({ keyword: '' }); }} />{draft && <button type="button" aria-label="清空关键词" onClick={() => onUpdate({ keyword: '' })}><X size={16} /></button>}</div>
      <button className="dl-search-submit" type="submit">搜索</button>
    </form>
    <div className="dl-filter-row"><span className="dl-filter-label">常用检索：</span><div className="dl-popular">{popular.map(word => <button type="button" key={word} aria-pressed={filters.keyword === word} onClick={() => onUpdate({ keyword: filters.keyword === word ? '' : word })}>{word}</button>)}</div></div>
    <div className="dl-filter-row dl-year-row"><span className="dl-filter-label" id="dl-year-label">发布日期：</span><div className="dl-year-select"><CalendarBlank size={18} aria-hidden="true"/><select className="dl-mobile-year" aria-label="发布日期" value={filters.year} onChange={event=>onUpdate({year:event.target.value})}><option value="">全部年份</option>{downloadYears.map(year=><option value={year} key={year}>{year}年</option>)}</select><CaretDown size={16} className="dl-year-caret" aria-hidden="true"/></div><div className="dl-years" role="group" aria-labelledby="dl-year-label">{['', ...downloadYears].map(year => <button type="button" key={year || 'all'} aria-pressed={filters.year === year} aria-label={year ? `${year}年` : '全部年份'} onClick={() => onUpdate({ year })}>{year || '全部'}</button>)}</div></div>
  </div>;
}
