import './articleNavigation.css';

export function ArticleNavigation({ index, total, section, onNavigate }) {
  return <nav className="news-detail-nav" aria-label="相邻文章">
    <button type="button" disabled={index <= 0} onClick={() => onNavigate(index - 1, section)}><span><img src="/assets/chevron-left.svg" alt="" /></span>上一篇</button>
    <button type="button" disabled={index >= total - 1} onClick={() => onNavigate(index + 1, section)}>下一篇<span><img src="/assets/chevron-right.svg" alt="" /></span></button>
  </nav>;
}
