import './siteComponents.css';

/** Shared official-site text/date row for news and member showcase lists. */
export function DatedListRow({ title, date, href, summary, onClick, dateFallback = '日期待补充' }) {
  return <a className="dated-list-row" href={href} onClick={onClick}>
    <div><h2>{title}</h2>{summary && <p>{summary}</p>}</div>
    {date ? <time dateTime={date}><b>{date.slice(8, 10)}</b><span>{date.slice(0, 7)}</span></time> : <span className="dated-list-date-empty">{dateFallback}</span>}
  </a>;
}
