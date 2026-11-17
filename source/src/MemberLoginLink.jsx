import { UserCircle } from '@phosphor-icons/react';
import { memberUrl, readMember } from './memberAccess.js';
import './membership.css';
export function MemberLoginLink() {
  const member = readMember();
  return <a className="member-login-link" aria-label={member ? '用户中心' : '用户登录'} href={memberUrl(member ? 'center' : 'login')}><UserCircle size={19} aria-hidden="true" /><span>{member ? '用户中心' : '用户登录'}</span></a>;
}
