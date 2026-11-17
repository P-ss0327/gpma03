import { memberUrl } from './memberAccess.js';
export function MemberApplicationTabs({ member, active, returnTo }) {
  const items = [
    { id: 'account', label: member ? '用户中心' : '用户登录', href: memberUrl(member ? 'center' : 'login', returnTo || '/?page=application-catalog') },
    { id: 'apply', label: '在线申请', href: '/?page=application-catalog' },
    { id: 'applications', label: '我的申请', href: '/?page=applications' },
  ];
  return <nav className="member-application-tabs" aria-label="用户办事导航">{items.filter(item=>item.id!=='applications' || Boolean(member)).map(item => <a key={item.id} href={item.href} className={active === item.id ? 'is-active' : ''} aria-current={active === item.id ? 'page' : undefined}>{item.label}</a>)}</nav>;
}
