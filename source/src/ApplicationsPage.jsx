import { createRecordId } from './recordId.js';
import { useDialogViewport } from './useDialogViewport.js';
import { publicFooter } from './publicFooter.js';
import { SiteBreadcrumb } from './SiteBreadcrumb.jsx';
import { useEffect, useRef, useState } from 'react';
import { Bell, X } from '@phosphor-icons/react';
import { PublicSiteHeader } from './PublicSiteHeader.jsx';
import { SiteSidebar } from './SiteSidebar.jsx';
import { SitePagination } from './SitePagination.jsx';
import { MemberApplicationTabs } from './MemberApplicationTabs.jsx';
import { memberNavigation } from './memberNavigation.js';
import { readMember, memberUrl } from './memberAccess.js';
import { applicationTypes, applicationAccess, awardSections, awardUrl, awardGuideText, contactFields, contactFieldsFor, ACCEPT_FILES, validateApplication, validateAttachment } from './applicationConfig.js';
import { listApplications, readApplication, newApplication, submitApplication } from './applicationStore.js';
import { downloadFiles } from './downloadData.js';
import chrome from './liveChrome.json';
import '../public/live-site/_next/static/chunks/14wuzaycbuy_m.css';
import '../public/live-site/_next/static/chunks/3gz2ulsj5zct1.css';
import '../public/live-site/_next/static/chunks/2scl0nq9je__z.css';
import './membership.css';
import './applications.css';

const dateText = value => value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '—';
const fileSize = size => size >= 1024 * 1024 ? `${(size / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.ceil(size / 1024))} KB`;
const detailUrl = id => `/?page=application-detail&id=${encodeURIComponent(id)}`;
const formUrl = type => `/?page=application-form&type=${type}`;

function downloadAttachment(file) {
  const url = URL.createObjectURL(file.blob);
  const link = document.createElement('a');
  link.href = url; link.download = file.name; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function Summary({ record }) {
  const config = applicationTypes[record.type];
  return <div className="application-summary">
    <h2>基本信息与申请信息</h2><dl>{[...contactFieldsFor(record.type), ...config.fields].map(field => <div key={field.key}><dt>{field.label}</dt><dd>{record.values[field.key] || '未填写'}</dd></div>)}</dl>
    <h2>申请材料</h2>{!record.attachments.length ? <p>暂未上传材料。</p> : <ul className="application-attachment-list">{record.attachments.map(file => <li key={file.id}><div><strong>{config.materials.find(material => material.key === file.material)?.label}</strong><span>{file.name} · {fileSize(file.size)}</span></div><button type="button" className="member-text-button" onClick={() => downloadAttachment(file)}>下载</button></li>)}</ul>}
  </div>;
}

function LoginPrompt({ type, onClose }) {
  useDialogViewport();
  const loginHref = memberUrl('login', formUrl(type));
  const dialogRef = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusables = () => [...(dialogRef.current?.querySelectorAll('a[href], button:not([disabled])') || [])];
    dialogRef.current?.focus({preventScroll:true});
    const onKey = event => {
      if (event.key === 'Escape') { event.stopPropagation(); onClose(); return; }
      if (event.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, []);
  return <div className="award-login-mask" onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="award-login-dialog" ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="award-login-title" aria-describedby="award-login-desc">
      <div className="award-login-dialog-header">
        <div><Bell size={17} aria-hidden="true" /><span>申报提示</span></div>
        <button type="button" aria-label="关闭提示" onClick={onClose}><X size={20} aria-hidden="true" /></button>
      </div>
      <div className="award-login-dialog-content">
        <h2 id="award-login-title">请先登录</h2>
        <p id="award-login-desc">登录成功后将直接进入当前事项的申报表单。</p>
        <div className="award-login-dialog-actions"><a className="member-primary" href={loginHref}>去登录</a></div>
      </div>
    </div>
  </div>;
}

function AwardGuide({ type, member, onDeclare }) {
  const config = applicationTypes[type];
  const guide = awardGuideText[type];
  const keyword = encodeURIComponent(config.title.replace('申请', ''));
  return <>
      {!member && <div className="award-guide-account award-guide-account-top"><a className="member-secondary" href={memberUrl('login', formUrl(type))}>用户登录</a><span>没有账号？<a className="award-guide-register" href={memberUrl('register', formUrl(type))}>立即注册</a></span></div>}
    <div className="application-form-section award-guide">
      <h2>{config.title.replace(/申请$/, '')}申报说明</h2>
      <p>{config.description}</p>
      <section className="award-guide-block"><h3>申报对象</h3><p>{guide.audience}</p></section>
      <section className="award-guide-block"><h3>申报条件</h3><ul>{guide.conditions.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section className="award-guide-block"><h3>办理流程</h3><ol className="award-guide-steps">{guide.flow.map((step, index) => <li key={step.title}><strong>{index + 1}. {step.title}</strong><span>{step.text}</span></li>)}</ol></section>
      <section className="award-guide-block"><h3>申报材料</h3><ul>{config.materials.map(material => <li key={material.key}>{material.label}{material.required && <b>（必需）</b>}</li>)}</ul><p className="award-guide-note">单个文件不超过20 MB，总计不超过60 MB，最多10个文件。支持 PDF、Word、Excel、JPG/PNG、ZIP。</p></section>
      <section className="award-guide-block"><h3>时间安排</h3><p>当期申报开始与截止时间以协会正式通知为准，逾期系统不再受理。</p></section>
      <p className="award-guide-note">以上为申报说明示意内容，正式申报条件、时间及材料要求以当期通知为准。</p>
    </div>
    <section className="award-guide-block award-guide-files" aria-labelledby="award-files-title"><h3 id="award-files-title">相关文件</h3><div className="award-guide-links"><a href={`/?page=downloads&keyword=${keyword}`}>申报通知与材料要求</a>{config.templateId && <a href={`/?page=downloads&keyword=${encodeURIComponent(downloadFiles.find(file=>file.id===config.templateId)?.title || config.title)}`}>申请表格模板</a>}</div></section>
    <div className="award-guide-actions">
      {member
        ? <a className="member-primary award-guide-declare" href={formUrl(type)}>在线申报</a>
        : <button type="button" className="member-primary award-guide-declare" onClick={onDeclare}>在线申报</button>}
    </div>
  </>;
}

export function App() {
  const params = new URLSearchParams(location.search);
  const page = params.get('page');
  const isAwardCatalog = page === 'award-catalog';
  const type = page === 'member-join' ? 'membership' : isAwardCatalog ? (awardSections.some(x=>x.id===params.get('section')) ? params.get('section') : 'science') : params.get('type');
  const config = applicationTypes[type];
  const isForm = page === 'application-form' || page === 'member-join';
  const isDetail = page === 'application-detail';
  const isCatalog = page === 'application-catalog';
  const isLanding = isCatalog || isAwardCatalog;
  const member = readMember();
  const [record, setRecord] = useState(null);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(!isLanding && Boolean(member));
  const [loadError, setLoadError] = useState('');
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [listPage, setListPage] = useState(1);
  const [loginPrompt, setLoginPrompt] = useState(false);
  const leavingAfterSubmit = useRef(false);
  const title = isAwardCatalog ? awardSections.find(x=>x.id===type).label : isCatalog ? '在线申请' : isForm ? config?.title || '在线申请' : isDetail ? '提交记录详情' : '我的申请';
  document.title = `${title} | 广东省项目管理协会`;

  useEffect(() => {
    if (!member || isLanding || (isForm && applicationAccess(type,member) !== 'allowed')) { setLoading(false); return; }
    let active = true;
    async function load() {
      try {
        if (isDetail || (isForm && params.get('id'))) {
          const saved = await readApplication(params.get('id'), member.name);
          if (!saved) throw new Error('未找到此账号的提交记录，请从“我的申请”重新进入。');
          if (isForm && saved.type !== type) throw new Error('申请类型不匹配，请从“我的申请”重新进入。');
          if (active) setRecord(saved);
        } else if (isForm && config) {
          if (active) setRecord(newApplication(type, member));
        } else if (!isForm) {
          const saved = await listApplications(member.name);
          if (active) setRecords(saved);
        }
      } catch (error) { if (active) setLoadError(error.message || '无法读取本地申请，请重试。'); }
      finally { if (active) setLoading(false); }
    }
    load();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    const preventLoss = event => { if (dirty && !leavingAfterSubmit.current) { event.preventDefault(); event.returnValue = ''; } };
    window.addEventListener('beforeunload', preventLoss);
    return () => window.removeEventListener('beforeunload', preventLoss);
  }, [dirty]);

  function changeValue(key, value) {
    setRecord(current => ({ ...current, values: { ...current.values, [key]: value } }));
    setDirty(true); setConfirmed(false);
    setErrors(current => ({ ...current, [key]: '' }));
  }

  function validateCurrent(index) {
    const nextErrors = validateApplication(type, record.values, record.attachments, index);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`application-${first}`)?.focus();
      return false;
    }
    return true;
  }

  function addFiles(material, input) {
    const additions = [];
    for (const file of input.files) {
      const error = validateAttachment(file, [...record.attachments, ...additions]);
      if (error || record.attachments.length + additions.length >= 10) {
        setErrors(current => ({ ...current, [material]: error || '每份申请最多上传10个文件。' })); input.value = ''; return;
      }
      additions.push({ id: createRecordId(), material, name: file.name, size: file.size, mime: file.type, blob: file });
    }
    if (additions.length) {
      setRecord(current => ({ ...current, attachments: [...current.attachments, ...additions] }));
      setDirty(true); setConfirmed(false); setErrors(current => ({ ...current, [material]: '' }));
    }
    input.value = '';
  }

  async function submit() {
    if (busy) return;
    const valid = validateCurrent(3);
    if (!valid || !confirmed) {
      if (!confirmed) { setErrors(current => ({ ...current, confirmation: '请阅读相关文件并勾选确认。' })); if (valid) document.getElementById('application-confirmation')?.focus(); }
      return;
    }
    setBusy(true);
    try {
      const saved = await submitApplication({ ...record, acknowledgement: { read: true, type: type === 'membership' ? 'charter-and-membership-documents' : 'application-documents', confirmedAt: new Date().toISOString() } }, member.name);
      setRecord(saved); setDirty(false);
      leavingAfterSubmit.current = true;
      window.history.replaceState({}, '', detailUrl(saved.id));
      location.reload();
    } catch (error) { setErrors({ form: error.name === 'QuotaExceededError' ? '浏览器存储空间不足，请减少附件后重试。' : error.message || '提交失败，请重试。' }); }
    finally { setBusy(false); }
  }

  function fieldInput(field) {
    const inputProps = { id: `application-${field.key}`, value: record.values[field.key] || '', onChange: event => changeValue(field.key, event.target.value), required: field.required, 'aria-invalid': Boolean(errors[field.key]), 'aria-describedby': errors[field.key] ? `error-${field.key}` : undefined };
    return <label key={field.key} className={field.type === 'textarea' ? 'application-wide' : ''} htmlFor={inputProps.id}><span>{field.label}{field.required && <b aria-hidden="true"> *</b>}</span>
      {field.options ? <select {...inputProps}><option value="">请选择</option>{field.options.map(option => <option key={option}>{option}</option>)}</select> : field.type === 'textarea' ? <textarea {...inputProps} rows={4} maxLength={3000} /> : <input {...inputProps} type={field.type || 'text'} onInput={field.type === 'date' ? event => changeValue(field.key, event.currentTarget.value) : undefined} maxLength={field.key === 'creditCode' ? 18 : 200} min={field.type === 'number' ? 0 : undefined} max={field.type === 'number' ? 80 : undefined} />}
      {errors[field.key] && <small id={`error-${field.key}`} className="application-error">{errors[field.key]}</small>}</label>;
  }

  const businessType = isDetail ? record?.type : type;
  const group = applicationTypes[businessType]?.group;
  const isAwards = isAwardCatalog || group === 'awards';
  const parent = isAwards ? '评奖评优' : '会员服务';
  const access = isForm ? applicationAccess(type,member) : 'allowed';
  const template = downloadFiles.find(file => file.id === config?.templateId);
  const relatedKeyword = type === 'expert' ? '专家' : config?.title.replace('申请','') || '入会';
  const filtered = records.filter(item => !keyword.trim() || `${applicationTypes[item.type].title} ${item.number || ''} ${item.values.projectName || item.values.expertName || item.values.unit || ''}`.includes(keyword.trim()));
  const pageCount = Math.max(1, Math.ceil(filtered.length / 6));
  const visible = filtered.slice((listPage - 1) * 6, listPage * 6);

  return <div className="sections-root member-page"><PublicSiteHeader activePage={parent} /><main className="sections-main"><div className="news-page-main">
    <SiteBreadcrumb><a href="/">首页</a><span>›</span><span>{parent}</span><span>›</span>{businessType === 'expert' && (isForm || isDetail) && <><a href="/?page=application-catalog">在线申请</a><span>›</span></>}<strong>{title}</strong></SiteBreadcrumb>
    <div className="news-page-layout">{isAwards ? <SiteSidebar title="评奖评优" items={awardSections.map(x=>({...x,href:awardUrl(x.id)}))} value={businessType} /> : <SiteSidebar title="会员服务" items={memberNavigation(member)} value="apply" />}
      <section className="news-page-content application-content" aria-labelledby="application-page-title"><header><h1 id="application-page-title">{title}</h1></header>{!isForm && !isDetail && !isAwards && <MemberApplicationTabs member={member} active={isCatalog ? 'apply' : 'applications'} />}
      {isAwardCatalog ? <AwardGuide type={type} member={member} onDeclare={() => setLoginPrompt(type)} /> : isCatalog ? <div className="application-catalog"><article><h2>专家入库申请</h2><p>填写个人专业经历、研究成果并上传申请材料。</p><a className="member-primary" href={formUrl('expert')} onClick={event=>{if(!member){event.preventDefault();setLoginPrompt('expert');}}}>开始申请</a></article><article><h2>科技奖申请</h2><p>查看申报说明，填写项目及申报单位信息并上传材料。</p><a className="member-primary" href={awardUrl('science')}>查看申报说明</a></article></div> : !member ? <div className="application-empty"><h2>登录后办理申请</h2><p>登录后可填写申请、提交材料和查看提交记录。</p><a className="member-primary" href={memberUrl('login')}>用户登录</a><a className="member-secondary" href={memberUrl('register')}>用户注册</a></div> : access === 'membership' ? <div className="application-empty"><h2>此项申报面向有效会员</h2><p>{member.status === 'pending' ? '入会申请审核中，审核通过后可办理此项申报。' : '当前账号尚未取得有效会员资格，请先办理入会申请。'}</p><a className="member-primary" href="/?page=application-catalog">在线申请</a><a className="member-secondary" href={awardUrl(type)}>返回申报指南</a></div> : loading ? <p role="status" className="application-intro">正在读取申请…</p> : loadError ? <div className="application-empty" role="alert"><p>{loadError}</p><a className="member-secondary" href="/?page=applications">查看我的申请</a></div> : isForm && !config ? <p role="alert">申请类型不存在，请从<a href="/?page=application-catalog">在线申请</a>重新选择。</p> : isForm && record?.status === 'submitted' ? <div className="application-empty"><p>此申请已提交，不能覆盖提交内容。</p><a className="member-primary" href={detailUrl(record.id)}>查看提交记录</a></div> : isForm && record ? <>
        <form noValidate onSubmit={event => { event.preventDefault(); submit(); }}>
          {Object.values(errors).some(Boolean) && <p className="application-error-summary" role="alert">{errors.form || errors.confirmation || '请检查标记的必填信息或申请材料。'}</p>}
          <section className="application-form-section" aria-labelledby="application-contact-title"><h2 id="application-contact-title">基本信息</h2><div className="application-fields">{contactFieldsFor(type).map(fieldInput)}</div></section>
          <section className="application-form-section" aria-labelledby="application-info-title"><h2 id="application-info-title">{type === 'membership' ? '单位信息' : '申请信息'}</h2><div className="application-fields">{config.fields.map(fieldInput)}</div></section>
          <section className="application-form-section" aria-labelledby="application-material-title"><h2 id="application-material-title">申请材料</h2><div className="application-material-heading"><p>单个文件不超过20 MB，总计不超过60 MB，最多10个文件。支持 PDF、Word、Excel、JPG/PNG、ZIP。</p><div className="application-template-links">{template && <a className="application-template-download" href={template.url} download={template.filename}>下载申请模板</a>}<a href={`/?page=downloads&keyword=${encodeURIComponent(relatedKeyword)}`} target="_blank" rel="noopener noreferrer">查看更多资料</a></div></div>{config.materials.map(material => <section className="application-material" key={material.key}><h2>{material.label}{material.required && <b> *</b>}</h2><input id={`application-${material.key}`} type="file" accept={ACCEPT_FILES} multiple aria-label={`上传${material.label}`} aria-describedby={errors[material.key] ? `error-${material.key}` : undefined} onChange={event => addFiles(material.key, event.target)} />{errors[material.key] && <p id={`error-${material.key}`} className="application-error">{errors[material.key]}</p>}<ul className="application-uploaded">{record.attachments.filter(file => file.material === material.key).map(file => <li key={file.id}><span>{file.name} · {fileSize(file.size)}</span><button type="button" className="member-text-button" aria-label={`移除${file.name}`} onClick={() => { setRecord(current => ({ ...current, attachments: current.attachments.filter(item => item.id !== file.id) })); setDirty(true); setConfirmed(false); }}>移除</button></li>)}</ul></section>)}</section>
          <div className="application-confirmation-block">
            <label className="application-confirm"><input id="application-confirmation" type="checkbox" checked={confirmed} aria-invalid={Boolean(errors.confirmation)} aria-describedby={errors.confirmation ? 'application-confirmation-error' : undefined} onChange={event => { setConfirmed(event.target.checked); setErrors(current => ({ ...current, confirmation: '' })); }} /><span>{type === 'membership' ? <>我已阅读<a href="/?page=about&section=charter" target="_blank" rel="noopener noreferrer">《协会章程》</a>及<a href="/?page=downloads&keyword=入会" target="_blank" rel="noopener noreferrer">入会文件</a>，并确认填写信息及材料真实、完整。</> : <>我已阅读<a href={`/?page=downloads&keyword=${relatedKeyword}`} target="_blank" rel="noopener noreferrer">相关申请文件</a>，并确认填写信息及材料真实、完整。</>}</span></label>
            {errors.confirmation && <p id="application-confirmation-error" className="application-error" role="alert">{errors.confirmation}</p>}
          </div>
          <div className="application-form-actions"><button className="member-primary" type="submit" disabled={busy}>{busy ? '正在提交…' : '提交申请'}</button></div>
        </form>
      </> : isDetail && record ? <><div className="application-record-heading"><div><h2>{applicationTypes[record.type].title}</h2><p>提交编号：{record.number}</p><p>提交时间：{dateText(record.submittedAt)}</p></div><span className="member-status">已提交（演示）</span></div><p className="application-notice" role="status">记录与附件已保存在当前浏览器（本地演示），未发送至协会。</p><Summary record={record} /><div className="application-form-actions"><a className="member-secondary" href="/?page=applications">查看我的申请</a><a className="member-secondary" href={isAwards ? awardUrl(record.type) : '/?page=application-catalog'}>返回办理栏目</a></div></> : <>
        <div className="application-list-tools"><label>搜索提交记录<input value={keyword} onChange={event => { setKeyword(event.target.value); setListPage(1); }} placeholder="事项名称、提交编号或单位" /></label><a className="member-secondary" href="/?page=application-form&type=expert">专家入库申请</a><a className="member-secondary" href={awardUrl('science')}>评奖评优申报</a></div>
        {!filtered.length ? <div className="application-empty"><h2>{records.length ? '暂无匹配记录' : '暂无提交记录'}</h2><p>{records.length ? '请尝试其他关键词。' : '选择办理事项，填写并提交后可在此查看记录。'}</p></div> : <ul className="application-record-list">{visible.map(item => <li key={item.id}><div><h2><a href={detailUrl(item.id)}>{item.values.projectName || item.values.expertName || item.values.unit || applicationTypes[item.type].title}</a></h2><p>{applicationTypes[item.type].title} · {item.number}</p><p>提交于 {dateText(item.submittedAt)}</p></div><span className="member-status">已提交（演示）</span><a className="member-secondary" href={detailUrl(item.id)}>查看详情</a></li>)}</ul>}
        <p className="application-count">共 {filtered.length} 条</p>{filtered.length > 6 && <SitePagination page={listPage} pageCount={pageCount} onChange={setListPage} label="提交记录分页" />}
      </>}
      </section></div></div>{loginPrompt && <LoginPrompt type={loginPrompt} onClose={() => setLoginPrompt(false)} />}</main><div dangerouslySetInnerHTML={{__html: publicFooter}} /></div>;
}
