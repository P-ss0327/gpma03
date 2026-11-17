import { MobileSearchToggle } from './MobileSearchToggle.jsx';
import { MemberLoginLink } from './MemberLoginLink.jsx';
import { SiteNavigation } from './SiteNavigation.jsx';
export function PublicSiteHeader({ activePage = '相关下载' }) {
  return <><header className="masthead"><div className="shell masthead-inner"><a className="brand" href="/" aria-label="返回广东省项目管理协会首页"><img src="/live-site/gpma/logo.png" alt="广东省项目管理协会" /></a><div className="header-tools"><div className="utility-links"><button type="button">加入收藏</button><span /><button type="button">设为首页</button></div><div className="header-search-actions"><form className="search" action="/" method="get"><input type="hidden" name="page" value="search" /><input name="keyword" aria-label="站内搜索" type="search" enterKeyHint="search" placeholder="请输入关键词" /><button type="submit">搜索</button></form><MobileSearchToggle /><MemberLoginLink /></div></div></div></header><SiteNavigation activePage={activePage} /></>;
}
