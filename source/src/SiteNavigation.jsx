import { useEffect, useState } from 'react';
import { List, X, CaretDown } from '@phosphor-icons/react';
import { siteNavigation } from './siteNavigation.js';
const parentLabels = { '协会概况': '关于协会', '联系我们': '关于协会', '行业新闻': '新闻动态', '协会动态': '新闻动态', '政策法规': '新闻动态', '精要文汇': '新闻动态', '会员风采': '会员服务' };
export function SiteNavigation({ items = siteNavigation, activePage = '网站首页' }) {
  const [open,setOpen]=useState(false);
  const [expanded,setExpanded]=useState(null);
  useEffect(()=>{const closeForSearch=event=>{if(event.target instanceof HTMLInputElement && event.target.closest('.search'))setOpen(false);};document.addEventListener('focusin',closeForSearch);return ()=>document.removeEventListener('focusin',closeForSearch);},[]);
  const selected = parentLabels[activePage] || activePage;
  return <nav className={`main-nav${open ? ' mobile-nav-open' : ''}`} aria-label="主导航" onKeyDown={event=>{if(event.key==='Escape'){setOpen(false);event.currentTarget.querySelector('.mobile-menu-toggle')?.focus();}}}><button className="mobile-menu-toggle" aria-label={open ? "收起菜单" : "网站导航"} type="button" aria-expanded={open} aria-controls="public-nav-items" onClick={()=>{if(document.activeElement instanceof HTMLInputElement)document.activeElement.blur();setOpen(!open);}}>{open?<X size={22}/>:<List size={22}/>}<span>{open?'收起菜单':'网站导航'}</span></button><div className="shell" id="public-nav-items">{items.map(item => <div className={`nav-item ${`${item.label === selected ? 'is-active' : ''}${expanded===item.label ? ' mobile-submenu-open' : ''}`}`} key={item.label}>
    <a href={item.href} aria-current={item.label === selected ? 'page' : undefined}>{item.label}</a>
    {!!item.children?.length && <><button type="button" className="mobile-submenu-toggle" aria-label={`${expanded===item.label?'收起':'展开'}${item.label}子栏目`} aria-expanded={expanded===item.label} aria-controls={`nav-children-${item.label}`} onClick={()=>setExpanded(expanded===item.label?null:item.label)}><CaretDown size={20}/></button><div className="submenu" id={`nav-children-${item.label}`}> {item.children.map((child, index) => { const label = typeof child === 'string' ? child : child.label; const href = typeof child === 'string' ? item.href : child.href; return <a key={`${label}-${index}`} href={href}>{label}</a>; })}</div></>}
  </div>)}</div></nav>;
}
