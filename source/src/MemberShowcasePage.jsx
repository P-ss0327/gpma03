import { publicFooter } from './publicFooter.js';
import { SiteBreadcrumb } from './SiteBreadcrumb.jsx';
import { useState } from 'react';
import { DatedListRow } from './DatedListRow.jsx';
import { PublicSiteHeader } from './PublicSiteHeader.jsx';
import { SiteSidebar } from './SiteSidebar.jsx';
import { SitePagination } from './SitePagination.jsx';
import { memberNavigation } from './memberNavigation.js';
import { memberCompanies } from './memberShowcaseData.js';
import chrome from './liveChrome.json';
import '../public/live-site/_next/static/chunks/14wuzaycbuy_m.css';
import '../public/live-site/_next/static/chunks/3gz2ulsj5zct1.css';
import '../public/live-site/_next/static/chunks/2scl0nq9je__z.css';
import './membership.css';
import './memberShowcase.css';

// Dates visible in the user's official-site reference. Unverified dates remain empty.
const dates = ['2026-07-27','2026-07-27','2026-07-27','2026-07-27','2026-07-24'];
export function App() {
  const params = new URLSearchParams(location.search);
  const index = params.has('member') ? Number(params.get('member')) : null;
  const selectedMember = index !== null && Number.isInteger(index) ? memberCompanies[index] : null;
  const [page, setPage] = useState(1);
  const pageSize = 5;
  document.title = `${selectedMember ? selectedMember.name : '会员风采'} | 广东省项目管理协会`;
  return <div className="sections-root member-page"><PublicSiteHeader activePage="会员服务" />
    <main className="sections-main"><div className="news-page-main">
      <SiteBreadcrumb><a href="/">首页</a><span>›</span><span>会员服务</span><span>›</span>{selectedMember ? <><a href="/?page=member">会员风采</a><span>›</span><strong>会员详情</strong></> : <strong>会员风采</strong>}</SiteBreadcrumb>
      <div className="news-page-layout"><SiteSidebar title="会员服务" items={memberNavigation()} value="showcase" />
      <section className="news-page-content member-showcase-content"><header><h1>会员风采</h1></header>
      {selectedMember ? <div className="member-legacy-layout">
          <article className="member-company-detail member-company-detail-legacy">
            <h2>{selectedMember.name}</h2>
            <section><header><strong>单位概况</strong><span>UNIT PROFILE</span></header><div className="member-original-copy">{(selectedMember.profile || [selectedMember.summary]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><img className="member-original-media" src={selectedMember.detailImage || selectedMember.image} alt={`${selectedMember.name}展示图`} /></section>
            {selectedMember.history && <section><header><strong>单位历程</strong><span>UNIT HISTORY</span></header><div className="member-history-list">{selectedMember.history.map(([year, title, content]) => <article className="member-history-item" key={year}><time>{year}</time><div><h3>{title}</h3><p>{content}</p></div></article>)}</div></section>}
            {selectedMember.honorImage && <section><header><strong>单位荣誉</strong><span>UNIT HONOR</span></header><img className="member-original-media" src={selectedMember.honorImage} alt={`${selectedMember.name}单位荣誉`} /></section>}
            {selectedMember.customersImage && <section><header><strong>合作客户</strong><span>COOPERATION CUSTOMERS</span></header><img className="member-original-media" src={selectedMember.customersImage} alt={`${selectedMember.name}合作客户`} /></section>}
            {selectedMember.closing && <p className="member-closing">{selectedMember.closing}</p>}
          </article>
        </div> : <><div className="member-showcase-list">{memberCompanies.slice((page - 1) * pageSize, page * pageSize).map((company, offset) => {
        const index = (page - 1) * pageSize + offset;
        const date = dates[index];
        return <DatedListRow title={company.name} date={date} href={`/?page=member&member=${index}`} key={index} />;
      })}</div><SitePagination page={page} pageCount={Math.ceil(memberCompanies.length / pageSize)} onChange={setPage} label="会员风采分页" /></>}
      {selectedMember && <a className="member-return" href="/?page=member">返回会员风采</a>}
      </section></div></div></main><div dangerouslySetInnerHTML={{__html: publicFooter}} /></div>;
}
