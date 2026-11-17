import { siteNavigation } from './siteNavigation.js';
export function SiteMap(){return <nav className="site-map" aria-label="网站地图"><h3>网站地图</h3><div>{siteNavigation.map(item=><a key={item.label} href={item.href}>{item.label}</a>)}</div></nav>}
