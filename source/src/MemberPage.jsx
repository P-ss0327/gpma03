import { authenticatePreview } from './demoAuthentication.js';
import { PasswordInput } from './PasswordInput.jsx';
import { publicFooter } from './publicFooter.js';
import { SiteBreadcrumb } from './SiteBreadcrumb.jsx';
import { RegistrationFields } from './RegistrationFields.jsx';
import { saveRegistrationProfile } from './registrationConfig.js';
import { registrationValidation, profileError } from './personalRegistration.js';
import { registrationParent } from './accountIdentities.js';
import { useState } from 'react';
import { PublicSiteHeader } from './PublicSiteHeader.jsx';
import { SiteSidebar } from './SiteSidebar.jsx';
import { MemberApplicationTabs } from './MemberApplicationTabs.jsx';
import { memberNavigation } from './memberNavigation.js';
import chrome from './liveChrome.json';
import { memberUrl, readMember, saveMember, signOut, safeReturn } from './memberAccess.js';
import '../public/live-site/_next/static/chunks/14wuzaycbuy_m.css';
import '../public/live-site/_next/static/chunks/3gz2ulsj5zct1.css';
import '../public/live-site/_next/static/chunks/2scl0nq9je__z.css';
import './membership.css';

export function App() {
  const params = new URLSearchParams(location.search);
  const view = params.get('page').replace('member-', '');
  const returnTo = safeReturn(params.get('returnTo') || '/?page=member-center');
  const [member, setMember] = useState(readMember);
  const [error, setError] = useState('');
  const [invalidField,setInvalidField]=useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [unit, setUnit] = useState('');
  const identity='personal';
  const [profile, setProfile] = useState(() => readMember()?.profile || {});
  const [profileMessage,setProfileMessage]=useState('');
  const [registrationFiles, setRegistrationFiles] = useState({});
  const [agreed, setAgreed] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [isRegister, setIsRegister] = useState(view === 'register');
  const isAuth = view === 'login' || view === 'register';
  const isJoin = view === 'join';
  const title = isRegister ? '个人用户注册' : isJoin ? '申请入会' : view === 'center' ? '用户中心' : '用户登录';
  const sidebarItems = memberNavigation(member, returnTo);
  function changeForm(register) {
    setIsRegister(register);
    setError('');
    setPassword('');
    setConfirm('');
  }
  document.title = `${title} | 广东省项目管理协会`;
  async function submit(e) {
    e.preventDefault(); setError('');
    if (isRegister) {
      if (registering) return;
      const registrationValues = {...profile,unit,creditCode:account,password,confirm};
      const invalid = registrationValidation(registrationValues,registrationFiles,agreed);
      if(invalid) {
        setError(invalid.message);setInvalidField(invalid.key);
        const field=e.currentTarget.querySelector(`[data-registration-key="${invalid.key}"]`);
        field?.focus({preventScroll:true});field?.scrollIntoView({behavior:'smooth',block:'center'});
        return;
      }
      setInvalidField('');
      const accounts = JSON.parse(sessionStorage.getItem('gpma-demo-accounts') || '{}');
      if (accounts[account.trim()]) return setError('该演示账号已注册，请直接登录。');
      setRegistering(true);
      try { await saveRegistrationProfile(account.trim(),identity,registrationValues,registrationFiles); }
      catch { setRegistering(false); return setError('注册资料保存失败，请检查浏览器存储空间后重试。'); }
      const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password)))).map(b => b.toString(16).padStart(2, '0')).join('');
      accounts[account.trim()] = {hash, unit: unit.trim(), identity:'personal', profile:{...profile,unit:unit.trim()}};
      sessionStorage.setItem('gpma-demo-accounts', JSON.stringify(accounts));
      saveMember({ name: account.trim(), unit: unit.trim(), identity:'personal', profile:{...profile,unit:unit.trim()}, status: 'registered' });
      location.assign(returnTo);
    } else {
      try {
        const accounts = JSON.parse(sessionStorage.getItem('gpma-demo-accounts') || '{}');
        const next = await authenticatePreview(account, password, accounts, async value => {
          if (!globalThis.crypto?.subtle) throw new Error('secure-context-required');
          return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)))).map(b => b.toString(16).padStart(2, '0')).join('');
        });
        if (!next) return setError('账号或密码不正确。');
        saveMember(next);
      } catch (error) {
        return setError(error.message === 'secure-context-required' ? '当前预览地址暂不支持自建账号登录，请使用测试账号 user，密码 demo1234。' : '登录失败，请刷新页面后重试。');
      }
      location.assign(returnTo);
    }
  }
  return <div className="sections-root member-page">
    <PublicSiteHeader activePage="会员服务" />
    <main className="sections-main"><div className="news-page-main"><SiteBreadcrumb><a href="/">首页</a><span>›</span><span>会员服务</span><span>›</span><strong>{title}</strong></SiteBreadcrumb><div className="news-page-layout">
    <SiteSidebar title="会员服务" items={sidebarItems} value="apply" />
    <section className="news-page-content member-page-content" aria-labelledby="member-page-title"><header><h1 id="member-page-title">{title}</h1></header>{!isRegister && <MemberApplicationTabs member={member} active="account" returnTo={returnTo} />}<div className={`member-page-body${isRegister ? ' member-registration-body' : ''}${!isAuth && !isJoin ? ' member-account-body' : ''}`}>
    {isAuth ? <><form className={`member-auth-form${isRegister ? ' member-registration-form' : ''}`} onSubmit={submit}>

      {isRegister ? <RegistrationFields errorField={invalidField} errorMessage={error} values={{...profile,unit,creditCode:account,password,confirm}} onChange={(key,value)=>{if(key==='unit')setUnit(value);else if(key==='creditCode')setAccount(value);else if(key==='password')setPassword(value);else if(key==='confirm')setConfirm(value);else setProfile(current=>({...current,[key]:value}));}} files={registrationFiles} onFiles={setRegistrationFiles} agreed={agreed} onAgree={setAgreed}/> : <><label>账号<input value={account} onChange={e=>setAccount(e.target.value)} required maxLength={40} autoComplete="off" placeholder="请输入登录账号" /></label><label>密码<PasswordInput aria-label="密码" value={password} onChange={e=>setPassword(e.target.value)} required maxLength={64} autoComplete="off" placeholder="请输入密码" /></label></>}
      {error && <p className="member-form-error" role="alert">{error}</p>}{isRegister ? <div className="registration-actions"><button className="member-primary" type="submit" disabled={registering}>{registering ? '正在注册…' : '立即注册'}</button><button type="button" className="member-secondary" onClick={()=>changeForm(false)}>用户登录</button><a className="member-secondary" href={registrationParent(params.has('returnTo')?returnTo:'/?page=application-catalog',identity)}>返回上一层</a></div> : <button className="member-primary member-login-submit" type="submit" aria-label="登录"><span className="member-login-label"><span>登</span><span>录</span></span></button>}</form>
      {!isRegister && <div className="member-register-prompt"><a className="member-secondary" href={memberUrl('register',returnTo)}>立即注册</a></div>}</> : isJoin ? <>{!member ? <p>请先<a href={memberUrl('login', returnTo)}>登录</a>或<a href={memberUrl('register', returnTo)}>注册账号</a>后提交入会申请。</p> : member.status === 'active' ? <p>您已是有效会员，可返回资料页面。</p> : member.status === 'pending' ? <div className="member-state"><h2>入会审核中</h2><p>申请已提交，请等待协会审核。审核通过后可使用会员专享资料。</p></div> : <form className="member-auth-form" onSubmit={e => { e.preventDefault(); const next = {...member, unit: unit.trim() || member.unit, status: 'pending'}; saveMember(next); const accounts = JSON.parse(sessionStorage.getItem('gpma-demo-accounts') || '{}'); if (accounts[member.name]) { accounts[member.name].status = 'pending'; sessionStorage.setItem('gpma-demo-accounts', JSON.stringify(accounts)); } setMember(next); }}><label>申请单位<input required maxLength={80} value={unit || member.unit || ''} onChange={e => setUnit(e.target.value)} /></label><p>此处仅演示提交与审核中状态，不会向协会提交正式申请。</p><button className="member-primary" type="submit">提交演示入会申请</button></form>}</> : member ? <div className="member-state">
        <p>登录账号：{member.name}</p><h2>个人资料</h2>
        <form className="member-auth-form" onSubmit={async e=>{e.preventDefault();setProfileMessage('');const invalid=profileError(profile);if(invalid){setProfileMessage(invalid);return;}try{await saveRegistrationProfile(member.name,'personal',profile,{});const next={...member,profile:{...profile},unit:profile.unit||''};saveMember(next);setMember(next);const accounts=JSON.parse(sessionStorage.getItem('gpma-demo-accounts')||'{}');accounts[member.name]={...accounts[member.name],profile:{...profile},unit:profile.unit||''};sessionStorage.setItem('gpma-demo-accounts',JSON.stringify(accounts));setProfileMessage('个人资料已保存（当前浏览器演示）。');}catch{setProfileMessage('保存失败，请重试。');}}}>
        {[['realName','姓名'],['phone','手机号码'],['email','电子邮箱'],['unit','工作单位'],['position','职务／职称'],['region','所在地区']].map(([key,label])=><label key={key}>{label}<input aria-label={label} type={key==='email'?'email':key==='phone'?'tel':'text'} required={['realName','phone','email'].includes(key)} maxLength={100} value={profile[key]||''} onChange={e=>setProfile({...profile,[key]:e.target.value})}/></label>)}
        <button className="member-primary member-profile-save" type="submit">保存个人资料</button>{profileMessage && <p role="status">{profileMessage}</p>}</form>
        <div className="member-account-actions"><button className="member-secondary" onClick={() => { signOut(); location.assign(memberUrl('login', returnTo)); }}>退出登录</button></div>
      </div> : <p>您尚未登录，<a className="member-signin-entry" href={memberUrl('login', returnTo)}>前往会员登录</a>。</p>}
    {isJoin && <a className="member-return" href={returnTo}>返回相关下载</a>}</div></section></div></div></main><div dangerouslySetInnerHTML={{__html: publicFooter}} /></div>;
}
