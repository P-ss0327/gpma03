import './siteComponents.css';

/** Existing GPMA sidebar anatomy and styles. Use href for navigation, onChange for local filters. */
export function SiteSidebar({ title, items, value, onChange, label = '栏目导航' }) {
  return <aside className="news-sidebar"><h2>{title}</h2><nav aria-label={label}>{items.map(item => {
    const active = value === item.id;
    return item.href
      ? <a key={item.id} href={item.href} className={active ? 'is-active' : ''} aria-current={active ? 'page' : undefined}>{item.label}</a>
      : <button type="button" key={item.id} className={active ? 'is-active' : ''} aria-current={active ? 'true' : undefined} onClick={() => onChange(item.id)}>{item.label}</button>;
  })}</nav></aside>;
}
