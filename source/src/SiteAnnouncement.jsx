import { useEffect, useState } from 'react';
import { Bell, X, CaretUp, CaretDown } from '@phosphor-icons/react';
import { loadSiteAnnouncement, announcementStorageKey, shouldShowAnnouncement } from './siteAnnouncement.js';
import './siteAnnouncement.css';

export function SiteAnnouncement() {
  const [mobileExpanded,setMobileExpanded]=useState(false);
  const [notice, setNotice] = useState(null);
  const [imageFailed, setImageFailed] = useState(false);
  const [entrance, setEntrance] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const force = params.get('noticePreview') === '1';
    if (!force && (params.has('edit') || params.has('qa'))) return;
    const controller = new AbortController();
    loadSiteAnnouncement(controller.signal).then(value => {
      let storage;
      try { storage = sessionStorage; } catch { storage = { getItem: () => null }; }
      // A forced preview starts a fresh visible session, so later normal routes
      // do not fall back to an older dismissal record.
      if (force && value) {
        try { storage.removeItem(announcementStorageKey(value)); } catch { /* Optional storage. */ }
      }
      if (shouldShowAnnouncement(value, storage)) {
        const seenKey = `gpma-announcement-seen:${value.id}:${value.revision}`;
        try {
          setEntrance(storage.getItem(seenKey) !== '1');
          storage.setItem(seenKey, '1');
        } catch { setEntrance(true); }
        setNotice(value);
      }
    }).catch(() => { /* An unavailable announcement must never block normal page use. */ });
    return () => controller.abort();
  }, []);

  function dismiss() {
    try { sessionStorage.setItem(announcementStorageKey(notice), '1'); } catch { /* Storage can be disabled. */ }
    setNotice(null);
  }

  if (!notice) return null;
  const Content = notice.linkUrl ? 'a' : 'div';
  return <aside className={`site-announcement${mobileExpanded ? ' mobile-notice-expanded' : ''}${entrance ? ' site-announcement-enter' : ''}`} aria-labelledby="site-announcement-title">
    <div className="site-announcement-header"><button type="button" className="notice-mobile-toggle" aria-expanded={mobileExpanded} aria-controls="notice-mobile-content" onClick={()=>setMobileExpanded(!mobileExpanded)}><Bell size={17} aria-hidden="true"/><span>{mobileExpanded?'收起公告':notice.label}</span>{mobileExpanded ? <CaretDown className="notice-state-icon" size={20} aria-hidden="true"/> : <CaretUp className="notice-state-icon" size={20} aria-hidden="true"/>}</button><div><Bell size={17} aria-hidden="true" /><span className="site-announcement-dot" aria-hidden="true" /><span>{notice.label}</span></div><button type="button" aria-label="关闭公告" onClick={dismiss}><X size={20} aria-hidden="true" /></button></div>
    <Content id="notice-mobile-content" className="site-announcement-content" {...(notice.linkUrl ? { href: notice.linkUrl } : {})}>
      <h2 id="site-announcement-title">{notice.title}</h2>
      {notice.body && <div className="site-announcement-body">{notice.body}</div>}
      {notice.imageUrl && !imageFailed && <img className="site-announcement-image" src={notice.imageUrl} alt={notice.imageAlt} onError={() => setImageFailed(true)} />}
    </Content>
  </aside>;
}
