import { Fragment } from 'react';
import './siteComponents.css';

export function SitePagination({ page, pageCount, onChange, label = '文章分页' }) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1).filter((number) => number === 1 || number === pageCount || Math.abs(number - page) <= 2);
  return <nav className="site-pagination news-pagination numbered-pagination" aria-label={label}>
    <button type="button" disabled={page === 1} onClick={() => onChange(page - 1)} aria-label="上一页">‹</button>
    {pages.map((number, index) => <Fragment key={number}>
      {index > 0 && number - pages[index - 1] > 1 && <span className="pagination-ellipsis">…</span>}
      <button type="button" className={number === page ? 'is-active' : ''} aria-label={`第${number}页`} aria-current={number === page ? 'page' : undefined} onClick={() => onChange(number)}>{number}</button>
    </Fragment>)}
    <button type="button" disabled={page === pageCount} onClick={() => onChange(page + 1)} aria-label="下一页">›</button>
  </nav>;
}

