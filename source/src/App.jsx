import { associationArticles } from './associationContent.js';
import { CaretRight } from '@phosphor-icons/react';
import { expertProfiles } from './expertProfiles.js';
import { memberCompanies } from './memberShowcaseData.js';
import { MobileSearchToggle } from './MobileSearchToggle.jsx';
import { SiteMap } from './SiteMap.jsx';
import { SiteBreadcrumb } from './SiteBreadcrumb.jsx';
import { ArticleNavigation } from './ArticleNavigation.jsx';
import { DatedListRow } from './DatedListRow.jsx';
import { MemberLoginLink } from './MemberLoginLink.jsx';
import { SitePagination as NumberedPagination } from './SitePagination.jsx';
import { SiteSidebar } from './SiteSidebar.jsx';
import { siteNavigation } from './siteNavigation.js';
import { SiteNavigation } from './SiteNavigation.jsx';
import { Fragment, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { VisualEditor } from './VisualEditor';
import { noticeArticles } from './noticeContent';
import { originalNews, pictureNewsIndex } from './newsCatalog.js';

// Retired picture-news URLs now resolve to the unified news-information column.
const legacyNewsParams = new URLSearchParams(location.search);
if (legacyNewsParams.get('page') === 'news' && legacyNewsParams.get('section') === 'picture') {
  const legacyIndex = legacyNewsParams.get('article');
  legacyNewsParams.set('section', 'industry');
  if (legacyIndex !== null) {
    const story = originalNews.picture[Number(legacyIndex)];
    if (story) legacyNewsParams.set('article', String(pictureNewsIndex(story)));
    else legacyNewsParams.delete('article');
  }
  history.replaceState(null, '', location.pathname + '?' + legacyNewsParams.toString());
}

const isQaStatic = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('qa');
const isEditMode = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('edit');
const isAboutPage = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('page') === 'about';
const isNewsPage = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('page') === 'news';
const isContactPage = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('page') === 'contact';
const isNoticePage = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('page') === 'notices';
const isExpertPage = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('page') === 'experts';
const isIntegratedPage = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('page') === 'integrated';

function useScrollReveal(disabled) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const sharedRevealTargets = [
      '.about-breadcrumb', '.news-breadcrumb', '.member-page-breadcrumb', '.notice-breadcrumb',
      '.integrated-page-breadcrumb', '.expert-breadcrumb', '.about-sidebar', '.news-sidebar',
    ];
    const alwaysVisiblePanels = [
      '.about-content', '.contact-panel', '.member-page-panel', '.notice-page-panel',
      '.notice-detail-layout', '.news-page-content', '.integrated-detail-panel', '.expert-panel',
    ];
    document.querySelectorAll(alwaysVisiblePanels.join(',')).forEach((element) => {
      element.removeAttribute('data-reveal');
      element.classList.remove('is-visible');
    });
    document.querySelectorAll(sharedRevealTargets.join(',')).forEach((element) => {
      if (!element.dataset.reveal) element.dataset.reveal = element.matches('.about-sidebar, .news-sidebar') ? 'left' : 'soft-up';
    });
    const staggerGroups = [
      '.association-value-grid', '.integrated-stage-grid',
    ];
    document.querySelectorAll(staggerGroups.join(',')).forEach((group) => {
      [...group.children].forEach((element, index) => {
        if (!element.dataset.reveal) element.dataset.reveal = 'soft-up';
        element.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 45}ms`);
      });
    });
    const elements = [...document.querySelectorAll('.site-canvas [data-reveal]')];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (disabled || reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    root.classList.add('motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove('motion-ready');
    };
  }, [disabled]);
}
const links = {
  home: './',
  about: '?page=about',
  newsCenter: '?page=news&section=industry',
  pictureNews: '?page=news&section=industry',
  member: '?page=member',
  notices: '?page=notices&section=association',
  notice1: '?page=notices&article=0',
  notice2: '?page=notices&article=1',
  notice3: '?page=notices&article=2',
  notice4: '?page=notices&article=3',
  policy: '?page=news&section=policyLaw',
  news: '?page=news&section=industry',
  essay: '?page=news&section=essays',
  contact: '?page=contact',
  experts: '?page=experts',
  integrated: '?page=integrated',
};

const heroSlides = [
  { image: '/assets/hero-bridge.png', eyebrow: '湾区视野 · 专业协同', title: '专业引领  标准驱动  价值共创', subtitle: '推动项目管理高质量发展\n助力粤港澳大湾区建设', position: 'center', href: links.about },
  { image: '/assets/industry.png', eyebrow: '行业洞察 · 一线实践', title: '汇聚专业力量  赋能重大项目', subtitle: '链接行业资源与创新经验\n共建项目管理专业生态', position: 'center 54%', href: links.news },
  { image: '/assets/member-visit.png', eyebrow: '会员同行 · 共建共享', title: '走进项目现场  共话管理提升', subtitle: '深化会员走访与交流互鉴\n让专业价值落到项目一线', position: 'center 46%', href: links.member },
  { image: '/assets/essay.png', eyebrow: '知识传播 · 创新发展', title: '凝聚行业智慧  传播前沿方法', subtitle: '沉淀优秀实践与专业成果\n推动项目管理知识创新', position: 'center 50%', href: links.essay },
  { image: '/assets/member-conference.png', eyebrow: '开放合作 · 携手未来', title: '连接优秀组织  共创行业价值', subtitle: '打造有温度的会员交流平台\n构建高质量发展共同体', position: 'center 40%', href: links.member },
];

const memberSlides = memberCompanies.slice(0, 3).map((company, index) => ({ image: company.image, title: company.name, meta: company.summary, href: `/?page=member&member=${index}` }));

const pictureNewsGroups = [
  [
    { image: '/assets/member-conference.png', tag: '重点', date: '2026-08-21', title: '广东省项目管理协会年度重点工作会议顺利召开', summary: '聚焦行业高质量发展，共商项目管理专业化、数字化与协同创新路径。', href: links.news },
    { image: '/assets/member-training.png', tag: '活动', date: '2026-08-18', title: '协会重点项目管理成果交流活动举行', summary: '会员代表围绕项目实践成果与创新经验开展深入交流。', href: links.member },
    { image: '/assets/industry.png', tag: '调研', date: '2026-08-15', title: '深入项目一线开展行业调研交流', summary: '协会持续链接项目现场，汇聚行业实践与专业智慧。', href: links.news },
  ],
  [
    { image: '/assets/member-visit.png', tag: '走访', date: '2026-08-12', title: '走进会员单位，共话项目全过程管理新实践', summary: '通过实地走访与专题座谈，推动会员单位经验互鉴与资源协同。', href: links.member },
    { image: '/assets/hero-bridge.png', tag: '湾区', date: '2026-08-09', title: '服务湾区重大项目建设与管理创新', summary: '以专业协同助力粤港澳大湾区项目管理能力提升。', href: links.news },
    { image: '/assets/essay.png', tag: '成果', date: '2026-08-06', title: '项目管理优秀成果发布交流', summary: '传播优秀案例与专业方法，促进成果转化与行业共享。', href: links.essay },
  ],
  [
    { image: '/assets/member-training.png', tag: '培训', date: '2026-08-03', title: '项目经理专业能力提升专题培训圆满举行', summary: '围绕关键能力、实践方法与行业趋势开展系统学习与交流。', href: links.member },
    { image: '/assets/member-conference.png', tag: '会议', date: '2026-07-30', title: '协会理事会会议凝聚行业发展共识', summary: '汇聚会员单位力量，部署协会重点工作与专业服务。', href: links.news },
    { image: '/assets/policy.png', tag: '发布', date: '2026-07-26', title: '工程建设项目管理专业成果集中发布', summary: '持续沉淀行业研究、标准建设与实践创新成果。', href: links.policy },
  ],
];

const notices = associationArticles.slice(0, 8).map((item, index) => {
  const [, month = '', day = ''] = item.date.match(/\d{4}-(\d{2})-(\d{2})/) || [];
  return { date: `${month}月${day}日`, time: '协会发布', heading: '协会动态', title: item.title, href: `?page=notices&section=association&article=${index}` };
});

const infoData = [
  { id: 'policies', section: 'policyLaw', title: '政策法规', image: '/assets/policy.png', href: links.policy, slides: [['《广东省发展和改革委员会等九部门关于进一步加强工程建设项目全过程咨询改革的通知》', '2026-08-07'], ['清远市住房和城乡建设局关于进一步规范工程管理的实施意见', '2026-08-04'], ['广东省建筑业联合会等九部门发布建设行业高质量发展指引', '2026-07-28'], ['《佛山市城市更新项目管理办法》正式发布', '2026-07-21'], ['公共资源交易中心招标投标评标标准优化说明', '2026-07-17']] },
  { id: 'news', section: 'industry', title: '行业新闻', image: '/assets/industry.png', href: links.news, slides: [['国家发改委：下半年八项重点任务明确！', '2026-08-07'], ['当人工智能走进工程现场：项目管理的新机遇', '2026-08-04'], ['住房城乡建设部进一步加强建筑市场监管', '2026-07-31'], ['“十五五”重点项目管理方法与实践观察', '2026-07-28'], ['粤港澳大湾区重大基础设施建设取得新进展', '2026-07-24']] },
  { id: 'essays', section: 'essays', title: '精要文汇', image: '/assets/essay.png', href: links.essay, slides: [['项目经理成长四步曲', '2026-08-07'], ['大型收尾项目管理方法与实践经验分享', '2026-08-04'], ['工程造价咨询的难点及解决办法', '2026-07-31'], ['AI项目管理：如何优化软件项目管控', '2026-07-28'], ['瀑布式思维：你的团队适合哪种项目管理方式', '2026-07-24']] },
];

const partners = [
  ['agt.cn', '永道工程咨询', '/assets/partner-01.png'], ['scutad.com.cn', '华工设计院', '/assets/partner-02.png'],
  ['gdadri.com', '建筑设计研究院', '/assets/partner-03.png'], ['ydjx.com.cn', '易达科技', '/assets/partner-04.png'],
  ['zxgdtz.com', '中鑫（广东）投资', '/assets/partner-05.png'], ['gdzgjl.com', '省建筑工程监理', '/assets/partner-06.png'],
  ['hqcec.com', '寰球设计（广东）', '/assets/partner-07.png'], ['agtsci.cn', '永道科技', '/assets/partner-08.png'],
];


const navItems = siteNavigation;

const aboutParagraphs = [
  '广东省项目管理协会（Guangdong Project Management Association，缩写GPMA），是广东省跨行业综合项目管理协会，由广东省从事项目管理业务及其相关业务单位自愿组成，并经广东省民政厅批准成立的非营利性专业社会组织。',
  '协会立足广东客观实际、面向全国发展要求、放眼世界潮流趋势，围绕宗旨，搭建项目管理综合服务平台和智库中心，助力中国项目管理高水平应用实践，助力中国经济社会高质量发展。协会以“赋能项目、赋美中国”为使命，发挥桥梁纽带作用和网络效应，连接专业技术、资源更好服务项目管理组织和行业，助推项目管理行业标准化、专业化、国际化发展，助力项目管理创造更美好的世界。',
  '协会以服务会员为本，搭建学习、交流、智力、信息、宣传和资源平台，聚力促兴、协力共进。开展的业务活动有：组织召开全国性项目管理高峰论坛、项目管理发展研讨会、行业评奖评优活动、组织行业标准体系和诚信体系建设、专家智库建设、研究出版等。围绕会员开展企业项目管理培训服务、企业项目管理信息和咨询服务、项目管理人才猎头服务等，持续为组织竞争力赋能。',
];

const aboutSections = [
  { id: 'overview', label: '协会简介' },
  { id: 'construction', label: '协会建设', legacy: true },
  { id: 'charter', label: '协会章程' },
  { id: 'organization', label: '组织架构' },
];

const associationValues = [
  { title: '协会使命', text: '赋能项目、赋美中国', image: '/assets/about-mission.png' },
  { title: '协会愿景', text: '成为一流项目管理协会', image: '/assets/about-vision.png' },
  { title: '协会价值观', text: '追求卓越、敏捷开放、务实敢为', image: '/assets/about-values.png' },
  { title: '协会宗旨', text: '搭建项目管理综合服务平台和智库中心，助力中国项目管理高水平应用实践，助力中国经济社会高质量发展', image: '/assets/about-purpose.png' },
];

const charterContent = [
  ['第一章　总　则', '第一条 本会的名称是广东省项目管理协会。英文名称：Guangdong Project Management Association，缩写：GPMA。', '第二条 本会是由广东省从事项目管理业务及其相关业务单位自愿组成的专业性、行业性的非营利性社会团体法人。', '第三条 本会的宗旨：遵守宪法、法律、法规和国家政策，践行社会主义核心价值观，遵守社会道德风尚，弘扬爱国主义精神；坚持行业自律原则，发挥桥梁纽带作用，维护行业合法权益，提高行业技术水平，推动行业诚信体系建设，促进行业可持续发展。', '第四条 本会坚持中国共产党的全面领导，根据中国共产党章程的规定，设立中国共产党的组织，开展党的活动，为党组织的活动提供必要条件。', '第五条 本会的登记管理机关是广东省民政厅。本会接受登记管理机关以及行业管理部门和其他部门依法在其职权范围内的监督管理和指导服务。', '第六条 本会可以根据工作需要设立分支机构、代表机构。本会的分支机构、代表机构是本会的组成部分，不具有法人资格，在授权范围内开展活动，法律责任由本会承担。', '第七条 本会的活动地域为广东省。', '第八条 本会的住所设在广东省广州市。'],
  ['第二章　业务范围和活动原则', '第九条 本会的业务范围：', '（一）宣传贯彻党和国家政策法规，研究探讨项目管理行业改革发展理论、方针、政策，开展调研，为政府制定相关政策法规提供理论支持与参考。', '（二）协助政府部门制定并实施行业发展规划；参与国家和行业标准制修订及团体标准制定；建立规范行业与会员行为机制。', '（三）参与社会信用体系建设，制定行业自律公约，加强会员诚信自律与经营，维护公平竞争。', '（四）协调会员与政府部门及其他单位关系，反映合理诉求，维护会员与行业合法权益。', '（五）提供技术、信息、法律等咨询服务；承担项目策划咨询、论证评估、评审鉴定等工作；组织学术课题研究，推广行业科技成果。', '（六）组织学术交流、人才培训、技术讲座、考察学习等活动，提高从业人员技术与业务水平。', '第十条 本会开展业务活动，遵循诚实守信、公正公平和科学办会原则，建立决策机构、执行机构及监督机构相互监督机制。'],
  ['第三章　会　员', '第十一条 本会会员由省内从事项目管理业务及其相关行业的经济组织组成。会员为单位会员。', '第十二条 申请加入本会，应当拥护本会章程，有加入本会的意愿，并在本行业领域内具有一定影响。', '第十三条 会员入会的程序包括提交入会申请书、经理事会讨论通过、发给会员证、载入会员名册并予以公告。', '第十四条 本会建立全体会员名册，明确会员、理事、监事以及协会负责人职务。', '第十五条 会员享有出席会员代表大会、参加本会活动、选举和被选举、获得本会服务、提出建议和监督等权利。', '第十六条 会员应遵守本会章程、执行本会决议、维护本会合法权益、完成本会交办工作并按规定交纳会费。'],
  ['第四章　组织机构', '第二十一条 本会实行民主办会。领导机构的产生和重大事项的决策，须经民主表决通过。', '第二十二条 会员代表大会是本会的最高权力机构，负责制订或修改章程，决定本会工作目标和发展规划，选举理事会、监事会及协会负责人。', '第二十六条 本会设理事会。理事会为会员代表大会的执行机构，依照会员代表大会决议和本会章程履行职责。', '第三十一条 本会设监事会，依法检查本会财务报告，对理事履行职务的行为进行监督。'],
  ['第五章　内部管理', '本会设日常办事机构秘书处，处理本会日常事务性工作，并建立健全会员管理、财务管理、分支机构管理、档案和印章等内部管理制度。'],
  ['第六章　财产管理和使用', '本会经费必须用于本章程规定的业务范围和事业发展，执行国家规定的财务管理制度，接受会员代表大会和有关部门监督。'],
  ['第七章　终止程序及终止后的财产处理', '本会完成宗旨、自行解散或由于分立、合并等原因需要注销的，依照章程规定履行终止程序和清算手续。'],
  ['第八章　附　则', '本章程经会员代表大会表决通过，自登记管理机关核准之日起生效。本章程的解释权属本会理事会。'],
];

const organizationContent = [
  ['第一章　总　则', '第一条 为规范广东省项目管理协会（以下简称“协会”）理事会管理，依据《广东省行业协会条例》和《广东省项目管理协会章程》制定本制度。'],
  ['第二章　理事会的成立', '第二条 会员代表大会选举理事，组成理事会。理事会为会员代表大会的执行机构，负责领导协会开展日常工作，对会员代表大会负责。理事会成员的人数一般不超过会员人数的三分之一。理事会任期5年。', '第三条 协会理事应坚持党的路线、方针、政策，在协会业务领域内有较大影响，具有完全民事行为能力，能够勤勉履行职责、维护协会和会员的合法权益。', '第四条 单位理事的代表由该单位的主要负责人担任。单位调整理事代表，由其书面通知协会，报理事会备案。', '第五条 理事会到期应当召开会员代表大会进行换届选举。如因特殊情况不能按时换届，应按规定履行审批程序。'],
  ['第三章　理事会职权', '第六条 理事会负责筹备和召集会员代表大会，执行会员代表大会决议，决定协会具体工作业务，审议年度工作报告、工作计划及财务收支预算、决算，决定内部机构、分支机构和代表机构的设立、变更和终止。', '第七条 理事会每半年至少召开一次会议，情况特殊的，也可采用通讯形式召开。', '第八条 理事会会议由会长召集和主持；会长不能履行职责时，由副会长或推举的负责人召集和主持。', '第九条 理事会须有三分之二以上理事出席方能召开，其决议须经到会理事三分之二以上表决通过方能生效。', '第十条 理事会应当对决议形成会议纪要，出席会议的理事应当在会议记录上签名，并向全体理事公告。', '第十一条 召开理事会会议需提前3日通知全体理事并告知会议议题。', '第十二条 协会理事会进行表决，应当采取民主方式进行。选举协会负责人，应当采取无记名投票方式进行。'],
  ['第四章　附　则', '第十三条 本制度经理事会审议通过后生效，由协会秘书处负责解释。'],
];

const chevronLeft = '/assets/chevron-left.svg';
const chevronRight = '/assets/chevron-right.svg';

const DEFAULT_CONFIG = {
  theme: { brand: '#266aa7', brandDark: '#266aa7', accent: '#266aa7', mist: '#f4f9fd', text: '#17324a', muted: '#6d7f8f', line: '#dbe7f1', shellWidth: 1320, baseFontSize: 16, sectionTitleSize: 25, sectionTitleWeight: 700 },
  header: { searchPlaceholder: '请输入关键词', searchButton: '搜索', favoriteText: '加入收藏', homeText: '设为首页', logo: '/assets/gpma-logo-lockup-hd.png', mastheadHeight: 122, logoWidth: 500, searchWidth: 390, navHeight: 58, navBackground: '#266aa7', submenuBackground: '#ffffff', navFontSize: 16, submenuFontSize: 14, utilityFontSize: 13, searchFontSize: 14, navLetterSpacing: 4, navItems },
  hero: { autoplay: true, interval: 5200, buttonText: '查看详情', buttonHover: '#28a7f2', height: 585, contentTop: 106, titleSize: 48, titleWeight: 700, titleLineHeight: 135, titleLetterSpacing: 8, eyebrowSize: 16, subtitleSize: 24, subtitleLineHeight: 170, buttonSize: 16, overlayOpacity: 78, buttonRadius: 0, showArrows: true, showSteps: true, transitionDuration: 750, slides: heroSlides },
  pictureNews: { title: '图片新闻', autoplay: true, interval: 5000, groups: pictureNewsGroups },
  member: { title: '会员风采', autoplay: true, interval: 4300, height: 408, mainRatio: 2, sideRatio: .9, gap: 14, radius: 2, cardBackground: '#dce9f3', borderColor: '#dbe7f1', borderWidth: 0, shadowBlur: 34, shadowOpacity: 13, captionOpacity: 96, titleSize: 18, metaSize: 13, miniSize: 13, showPagination: true, slides: memberSlides },
  notices: { title: '协会动态', categoryLabel: '协会动态', autoScroll: true, pauseOnHover: true, duration: 18, categoryColor: '#266aa7', rowHeight: 56, rowRadius: 0, rowPadding: 12, titleSize: 12, titleWeight: 400, categorySize: 14, dateSize: 12, timeSize: 11, hoverBackground: '#e8f1f9', dividerColor: '#8f99a1', items: notices },
  infoStyle: { sectionBackground: '#f4f9fd', gap: 25, cardBackground: '#ffffff', borderColor: '#dbe7f1', borderWidth: 1, cardRadius: 0, cardPadding: 18, imageHeight: 205, cardShadowBlur: 32, cardShadowOpacity: 7, sectionTitleSize: 23, featureTitleSize: 15, listTitleSize: 13, dateSize: 11, showDates: true },
  info: Object.fromEntries(infoData.map((item) => [item.id, { title: item.title, image: item.image, featureTitle: item.slides[0][0], href: item.href, items: item.slides }])),
  intro: {
    aboutTitle: '协会简介', aboutText: '了解协会定位、组织架构与发展历程，认识广东项目管理行业的专业协同平台。', aboutCta: '点击查看',
    standardsTitle: '团标动态', standardsText: '汇聚团体标准编制、发布与实施动态，助力行业规范化与高质量发展。', standardsCta: '点击查看',
  },
  introStyle: { gap: 24, minHeight: 144, radius: 0, padding: 30, background: '#f7fbfe', borderColor: '#dbe7f1', borderWidth: 1, shadowBlur: 34, shadowOpacity: 6, titleSize: 21, bodySize: 13, ctaSize: 12, indexSize: 56 },
  partners: { title: '会员单位', columns: 4, gap: 14, cardHeight: 116, radius: 0, padding: 20, background: '#ffffff', borderColor: '#dde7ef', borderWidth: 1, shadowBlur: 24, shadowOpacity: 12, logoWidth: 112, logoHeight: 58, nameSize: 15, items: partners },
  footer: { wechatTitle: '官方微信', wechatId: 'gpma-org', qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https%3A%2F%2Fwww.gpma.org.cn%2F', contactTitle: '联系我们', address: '广州市越秀区东风中路363号国信大厦12楼', phone: '020-83641954', email: 'gpma@vip.163.com', copyright: 'Copyright © 2026 广东省项目管理协会　 粤ICP备16071372号', background: '#266aa7', minHeight: 250, headingSize: 18, bodySize: 13, copyrightSize: 12 },
  effects: { cardLift: true, imageZoom: true, hoverLift: 3, imageScale: 1.04, motionDuration: 240 },
};

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function cleanOriginalMarkup(markup = '') {
  let cleaned = markup
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\/?(?:o:p|font)[^>]*>/gi, '')
    .replace(/\s(?:style|class|id|data-[\w-]+|align|width|height|border|cellpadding|cellspacing|bgcolor|color|face|size)=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s(?:onclick|onload|onerror|onmouseover|onfocus)=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/&nbsp;/gi, ' ');
  for (let pass = 0; pass < 4; pass += 1) cleaned = cleaned.replace(/<(p|div|section|span|strong|b)>\s*<\/\1>/gi, '');
  return cleaned.trim();
}
function mergeConfig(base, incoming) {
  if (Array.isArray(base)) return Array.isArray(incoming) ? incoming : base;
  if (!base || typeof base !== 'object') return incoming === undefined ? base : incoming;
  const result = { ...base };
  Object.keys(base).forEach((key) => { result[key] = mergeConfig(base[key], incoming?.[key]); });
  return result;
}
function setPath(source, path, value) {
  const next = clone(source);
  const keys = path.split('.');
  let cursor = next;
  keys.slice(0, -1).forEach((key) => { cursor = cursor[key]; });
  cursor[keys.at(-1)] = value;
  return next;
}
function setPaths(source, changes) {
  return Object.entries(changes).reduce((next, [path, value]) => setPath(next, path, value), source);
}

function useAutoplay(length, delay, paused, allowInQa = false) {
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (paused || (isQaStatic && !allowInQa)) return undefined;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((value) => (value + 1) % length);
    }, delay);
    return () => window.clearInterval(timer);
  }, [allowInQa, cycle, delay, length, paused]);
  const selectIndex = (next) => {
    setIndex(next);
    setCycle((value) => value + 1);
  };
  return [index, selectIndex];
}

function SectionTitle({ children, href, more = true }) {
  return <div className="section-title-row"><div className="section-title-wrap"><h2>{children}</h2></div>{more && <a className="text-link" href={href || links.home} target="_blank" rel="noreferrer">更多内容</a>}</div>;
}

function Hero({ config }) {
  const [hovered, setHovered] = useState(false);
  const slides = config.hero.slides;
  const [index, setIndex] = useAutoplay(slides.length, config.hero.interval, hovered || !config.hero.autoplay);
  const slide = slides[index];
  const go = (direction) => setIndex((index + direction + slides.length) % slides.length);
  return (
    <section className="hero" data-edit-target="hero" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {slides.map((item, slideIndex) => <div className={`hero-image ${slideIndex === index ? 'is-active' : ''}`} key={`${item.title}-${slideIndex}`} style={{ backgroundImage: `url(${item.image})`, backgroundPosition: item.position }} />)}
      <div className="hero-shade" />
      <div className="hero-content shell"><p className="hero-eyebrow">{slide.eyebrow}</p><h1>{slide.title}</h1><p className="hero-subtitle">{slide.subtitle}</p><a className="hero-button" href={slide.href} target="_blank" rel="noreferrer">{config.hero.buttonText}</a></div>
      {config.hero.showArrows && <><button className="hero-arrow hero-arrow-left" type="button" onClick={() => go(-1)} aria-label="上一张"><img src={chevronLeft} alt="" /></button><button className="hero-arrow hero-arrow-right" type="button" onClick={() => go(1)} aria-label="下一张"><img src={chevronRight} alt="" /></button></>}
      {config.hero.showSteps && <div className="hero-controls shell"><div className="hero-steps" aria-label="轮播切换">{slides.map((item, step) => <button className={step === index ? 'is-active' : ''} type="button" key={`${item.title}-${step}`} onClick={() => setIndex(step)}><span>{String(step + 1).padStart(2, '0')}</span><i /></button>)}</div></div>}
    </section>
  );
}

function PictureNews({ config }) {
  const [paused, setPaused] = useState(false);
  const stories = originalNews.picture.slice(0, 3).map((item, articleIndex) => ({ ...item, image: item.cover, tag: '图片新闻', articleIndex: pictureNewsIndex(item) }));
  const [index, setIndex] = useAutoplay(stories.length, config.pictureNews.interval, paused || !config.pictureNews.autoplay, true);
  const feature = stories[index];
  const detailHref = `?page=news&section=industry&article=${feature.articleIndex}`;
  const go = (direction) => setIndex((index + direction + stories.length) % stories.length);
  return (
    <section id="picture-news" className="picture-news shell" data-edit-target="pictureNews" data-reveal="up" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)} aria-roledescription="carousel" aria-label="协会图片新闻">
      <SectionTitle href={links.pictureNews}>{config.pictureNews.title}</SectionTitle>
      <div className="picture-news-feature" key={`${feature.title}-${index}`} aria-live="polite">
        <a className="picture-news-photo" href={detailHref}>
          <img src={feature.image} alt={feature.title} />
        </a>
        <div className="picture-news-detail">
          <div className="picture-news-meta"><b>{feature.tag}</b><time>{feature.date}</time></div>
          <a href={detailHref}><h3>{feature.title}</h3></a>
          <p>{feature.summary}</p>
          <div className="picture-news-arrows">
            <button type="button" aria-label="上一条图片新闻" onClick={() => go(-1)}><img src={chevronLeft} alt="" /></button>
            <button type="button" aria-label="下一条图片新闻" onClick={() => go(1)}><img src={chevronRight} alt="" /></button>
          </div>
        </div>
      </div>
      <div className="picture-news-thumbs" aria-label="图片新闻详情">
        {stories.map((item, thumbIndex) => (
          <a className={thumbIndex === index ? 'is-active' : ''} href={`/?page=news&section=industry&article=${item.articleIndex}`} aria-label={`查看：${item.title}`} aria-current={thumbIndex === index ? 'true' : undefined} key={item.title}>
            <img src={item.image} alt="" />
            <strong>{item.title}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function MemberShowcase({ config }) {
  const [paused, setPaused] = useState(false);
  const slides = config.member.slides;
  const [index, setIndex] = useAutoplay(slides.length, config.member.interval, paused || !config.member.autoplay);
  const ordered = useMemo(() => slides.map((_, offset) => slides[(index + offset) % slides.length]), [index, slides]);
  return (
    <section id="members" className="member-panel" data-edit-target="member" data-reveal="up" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <SectionTitle href={links.member}>{config.member.title}</SectionTitle>
      <div className="member-layout">
        <a className="member-feature" href={ordered[0].href}><img src={ordered[0].image} alt="协会会员活动" /><span className="member-caption"><strong>{ordered[0].title}</strong><small>{ordered[0].meta}</small></span></a>
        <div className="member-side">{ordered.slice(1).map((item) => <a className="member-mini" href={item.href} key={item.title}><img src={item.image} alt="会员活动现场" /><span>{item.title}</span></a>)}</div>
      </div>
      {config.member.showPagination && <div className="member-pagination"><button type="button" onClick={() => setIndex((index - 1 + slides.length) % slides.length)} aria-label="上一张"><img src={chevronLeft} alt="" /></button><div>{slides.map((item, dot) => <button aria-label={`切换到第${dot + 1}张`} className={dot === index ? 'is-active' : ''} type="button" key={`${item.title}-${dot}`} onClick={() => setIndex(dot)} />)}</div><button type="button" onClick={() => setIndex((index + 1) % slides.length)} aria-label="下一张"><img src={chevronRight} alt="" /></button></div>}
    </section>
  );
}

function Notices({ config }) {
  const items = config.notices.items;
  return (
    <section id="notices" className={`notices-panel ${config.notices.pauseOnHover ? '' : 'notice-no-pause'}`} data-edit-target="notices" data-reveal="up" style={{ '--reveal-delay': '100ms', '--notice-aligned-row-height': `${config.member.height / Math.max(items.length, 1)}px` }}>
      <SectionTitle href={links.notices}>{config.notices.title}</SectionTitle>
      <div className="notice-viewport" aria-label="自动滚动协会动态，悬浮可暂停">
        <div className="notice-list" style={{ animationDuration: `${config.notices.duration}s`, animationName: config.notices.autoScroll ? 'noticeTicker' : 'none' }}>
          {[...items, ...items].map((notice, noticeIndex) => (
            <a className="notice-row" href={notice.href} key={`${notice.title}-${noticeIndex}`}>
              <time><strong>{notice.date}</strong><small>协会动态</small></time><span className="timeline-dot" /><span className="notice-copy"><b>协会动态</b><strong>{notice.title}</strong></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ data, config, revealDelay = 0 }) {
  const editable = config.info[data.id];
  const [featured, ...rows] = editable.items;
  const detailHref = (articleIndex) => `?page=news&section=${data.section}&article=${articleIndex}`;
  return (
    <article id={data.id} className="info-card" data-edit-target={data.id} data-reveal="up" style={{ '--reveal-delay': `${revealDelay}ms` }}>
      <SectionTitle href={editable.href}>{editable.title}</SectionTitle>
      <a className="info-feature" href={detailHref(0)}><img src={editable.image} alt={`${editable.title}专题图片`} /><span>{editable.featureTitle || featured[0]}</span></a>
      <div className="info-list">{rows.slice(0, 4).map(([title, date], rowIndex) => <a href={detailHref(rowIndex + 1)} key={`${title}-${rowIndex}`}><span className="info-number">{String(rowIndex + 2).padStart(2, '0')}</span><strong>{title}</strong>{config.infoStyle.showDates && <time>{date.slice(5)}</time>}</a>)}</div>
    </article>
  );
}

function AppHeader({ config, activePage = '网站首页' }) {
  const [query, setQuery] = useState('');
  return (
    <div data-edit-target="header"><header className="masthead"><div className="shell masthead-inner"><a className="brand" href={links.home} aria-label="返回广东省项目管理协会首页"><img src={config.header.logo} alt="广东省项目管理协会" /></a><div className="header-tools"><div className="utility-links"><button type="button">{config.header.favoriteText}</button><span /><button type="button">{config.header.homeText}</button></div><div className="header-search-actions"><form className="search" onSubmit={(event) => { event.preventDefault(); location.assign(`/?page=search&keyword=${encodeURIComponent(query.trim())}`); }}><input value={query} onChange={(event) => { setQuery(event.target.value); }} placeholder={config.header.searchPlaceholder} aria-label="站内搜索" type="search" enterKeyHint="search" /><button type="submit">{config.header.searchButton}</button></form><MobileSearchToggle /><MemberLoginLink /></div></div></div></header>
      <SiteNavigation items={config.header.navItems} activePage={activePage} /></div>
  );
}

function SiteFooter({ config }) {
  return <footer id="contact" data-edit-target="footer"><div className="shell footer-main"><div className="wechat"><img src={config.footer.qrImage} alt="协会官网二维码" /><div><h3>{config.footer.wechatTitle}</h3><p>微信二维码扫一扫</p><p>微信号：{config.footer.wechatId}</p></div></div><div className="footer-contact"><h3>{config.footer.contactTitle}</h3><p>主办单位：广东省项目管理协会</p><p>办公地址：{config.footer.address}</p><p>联系电话：{config.footer.phone}</p><p>电子邮箱：{config.footer.email}</p></div><SiteMap /></div><div className="copyright">{config.footer.copyright}</div></footer>;
}

function ContactPage() {
  const config = DEFAULT_CONFIG;
  const styleVars = {
    '--brand': config.theme.brand, '--brand-dark': config.theme.brandDark, '--accent': '#28a7f2', '--text': config.theme.text,
    '--shell-width': `${config.theme.shellWidth}px`, '--masthead-height': `${config.header.mastheadHeight}px`, '--logo-width': `${config.header.logoWidth}px`,
    '--search-width': `${config.header.searchWidth}px`, '--nav-height': `${config.header.navHeight}px`, '--nav-bg': config.header.navBackground,
    '--submenu-bg': config.header.submenuBackground, '--nav-font-size': `${config.header.navFontSize}px`, '--submenu-font-size': `${config.header.submenuFontSize}px`,
    '--utility-font-size': `${config.header.utilityFontSize}px`, '--search-font-size': `${config.header.searchFontSize}px`, '--nav-letter-spacing': `${config.header.navLetterSpacing / 100}em`,
    '--footer-bg': config.footer.background, '--footer-height': `${config.footer.minHeight}px`, '--footer-heading-size': `${config.footer.headingSize}px`,
    '--footer-body-size': `${config.footer.bodySize}px`, '--footer-copyright-size': `${config.footer.copyrightSize}px`,
  };
  return <div id="top" className="contact-site" style={styleVars}><div className="site-canvas">
    <AppHeader config={config} activePage="联系我们" />
    <main className="contact-page-main">
      <SiteBreadcrumb><a href="./">首页</a><span>›</span><a href="?page=about">关于协会</a><span>›</span><strong>联系我们</strong></SiteBreadcrumb>
      <div className="news-page-layout"><SiteSidebar title="关于协会" items={siteNavigation.find(item => item.label === '关于协会').children.map(item => ({ ...item, id: item.label }))} value="联系我们" /><article className="news-page-content contact-panel contact-panel-in-section">
        <header><h1>联系我们</h1></header>
        <section className="contact-details">
          <div className="contact-copy"><h2>广东省项目管理协会</h2><p><strong>秘书处电话：</strong><a href="tel:02038895993">020-38895993</a></p><p><strong>协会地址：</strong>广州市天河区华强路9号保利中盈大厦25层2508室</p><p><strong>E-mail：</strong><a href="mailto:gpma@vip.163.com">gpma@vip.163.com</a></p></div>
          <img className="contact-qr" src="/assets/contact-figma/raw-7.png" alt="广东省项目管理协会二维码" />
        </section>
        <section className="contact-map" aria-label="广东省项目管理协会位置地图">
          <iframe
            title="广东省项目管理协会位置地图"
            src="https://www.openstreetmap.org/export/embed.html?bbox=113.30958%2C23.12405%2C113.31958%2C23.13405&layer=mapnik&marker=23.12905%2C113.31458"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="contact-map-bubble" role="note">
            <strong>广东省项目管理协会</strong>
            <span>广州市天河区华强路9号保利中盈大厦25层2508室</span>
          </div>
          <a href="https://www.amap.com/place/B0H2PAOV3S" target="_blank" rel="noreferrer">在高德地图查看路线</a>
        </section>
      </article></div>
    </main>
    <SiteFooter config={config} />
  </div></div>;
}

function IntegratedDelivery() {
  return (
    <section className="integrated-delivery" id="integrated-delivery" aria-labelledby="integrated-delivery-title">
      <div className="shell integrated-main">
        <div className="integrated-copy" data-reveal="left">
          <h2 id="integrated-delivery-title">咨投建运一体化</h2>
          <p>贯通咨询策划、投资决策、工程建设与运营管理，推动项目全生命周期的信息协同、资源整合与价值创造。</p>
          <a className="integrated-cta" href={links.integrated}><span className="integrated-cta-desktop">查看详情 <span aria-hidden="true">→</span></span><span className="integrated-cta-mobile">了解更多</span></a>
        </div>
        <figure className="integrated-image" data-reveal="right" style={{ '--reveal-delay': '100ms' }}>
          <img src="/assets/integrated-engineering-office-v3.png" alt="中国工程师围绕项目图纸与建筑模型开展全过程协同" />
          <figcaption>项目全生命周期协同</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Homepage() {
  const [config, setConfig] = useState(() => {
    if (!isEditMode) return clone(DEFAULT_CONFIG);
    try {
      const merged = mergeConfig(clone(DEFAULT_CONFIG), JSON.parse(window.localStorage.getItem('gpma-site-config') || '{}'));
      merged.notices.items = merged.notices.items.map((item, index) => ({ ...item, heading: item.heading || DEFAULT_CONFIG.notices.items[index]?.heading || item.title }));
      return merged;
    }
    catch { return clone(DEFAULT_CONFIG); }
  });
  const [selected, setSelected] = useState('global');
  const [editorOpen, setEditorOpen] = useState(isEditMode);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [dirty, setDirty] = useState(false);

  const updateConfig = (path, value) => {
    setHistory((items) => [...items.slice(-39), clone(config)]);
    setFuture([]);
    setConfig(setPath(config, path, value));
    setDirty(true);
  };
  const batchUpdateConfig = (changes) => {
    setHistory((items) => [...items.slice(-39), clone(config)]);
    setFuture([]);
    setConfig(setPaths(config, changes));
    setDirty(true);
  };
  const undo = () => {
    if (!history.length) return;
    const previous = history.at(-1);
    setFuture((items) => [clone(config), ...items]);
    setHistory((items) => items.slice(0, -1));
    setConfig(previous);
    setDirty(true);
  };
  const redo = () => {
    if (!future.length) return;
    const next = future[0];
    setHistory((items) => [...items, clone(config)]);
    setFuture((items) => items.slice(1));
    setConfig(next);
    setDirty(true);
  };
  const save = () => { window.localStorage.setItem('gpma-site-config', JSON.stringify(config)); setDirty(false); };
  const importConfig = (incoming) => {
    setHistory((items) => [...items.slice(-39), clone(config)]);
    setFuture([]);
    setConfig(mergeConfig(clone(DEFAULT_CONFIG), incoming));
    setDirty(true);
  };
  const resetModule = (target) => {
    const path = ['policies', 'news', 'essays'].includes(target) ? `info.${target}` : target === 'global' ? 'theme' : target;
    const defaults = path.split('.').reduce((value, key) => value[key], DEFAULT_CONFIG);
    updateConfig(path, clone(defaults));
  };
  const selectFromPage = (event) => {
    if (!isEditMode || !editorOpen || event.target.closest('[data-editor-ui]')) return;
    const target = event.target.closest('[data-edit-target]');
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    setSelected(target.dataset.editTarget);
  };
  const styleVars = {
    '--brand': config.theme.brand, '--brand-dark': config.theme.brandDark, '--brand-deep': config.theme.brandDark,
    '--accent': config.theme.accent, '--mist': config.theme.mist, '--text': config.theme.text, '--muted': config.theme.muted, '--line': config.theme.line,
    '--shell-width': `${config.theme.shellWidth}px`, '--base-font-size': `${config.theme.baseFontSize}px`, '--section-title-size': `${config.theme.sectionTitleSize}px`, '--section-title-weight': config.theme.sectionTitleWeight,
    '--masthead-height': `${config.header.mastheadHeight}px`, '--logo-width': `${config.header.logoWidth}px`, '--search-width': `${config.header.searchWidth}px`, '--nav-height': `${config.header.navHeight}px`, '--nav-bg': config.header.navBackground, '--submenu-bg': config.header.submenuBackground, '--nav-font-size': `${config.header.navFontSize}px`, '--submenu-font-size': `${config.header.submenuFontSize}px`, '--utility-font-size': `${config.header.utilityFontSize}px`, '--search-font-size': `${config.header.searchFontSize}px`, '--nav-letter-spacing': `${config.header.navLetterSpacing / 100}em`,
    '--hero-height': `${config.hero.height}px`, '--hero-content-top': `${config.hero.contentTop}px`, '--hero-title-size': `${config.hero.titleSize}px`, '--hero-title-weight': config.hero.titleWeight, '--hero-title-line-height': config.hero.titleLineHeight / 100, '--hero-title-letter-spacing': `${config.hero.titleLetterSpacing / 100}em`, '--hero-eyebrow-size': `${config.hero.eyebrowSize}px`, '--hero-subtitle-size': `${config.hero.subtitleSize}px`, '--hero-subtitle-line-height': config.hero.subtitleLineHeight / 100, '--hero-button-size': `${config.hero.buttonSize}px`, '--hero-overlay': config.hero.overlayOpacity / 100, '--hero-button-radius': `${config.hero.buttonRadius}px`, '--hero-transition': `${config.hero.transitionDuration}ms`, '--hero-button-hover': config.hero.buttonHover,
    '--member-height': `${config.member.height}px`, '--member-main-ratio': `${config.member.mainRatio}fr`, '--member-side-ratio': `${config.member.sideRatio}fr`, '--member-gap': `${config.member.gap}px`, '--member-radius': `${config.member.radius}px`, '--member-bg': config.member.cardBackground, '--member-border': config.member.borderColor, '--member-border-width': `${config.member.borderWidth}px`, '--member-shadow-blur': `${config.member.shadowBlur}px`, '--member-shadow-opacity': config.member.shadowOpacity / 100, '--member-caption-opacity': config.member.captionOpacity / 100, '--member-title-size': `${config.member.titleSize}px`, '--member-meta-size': `${config.member.metaSize}px`, '--member-mini-size': `${config.member.miniSize}px`,
    '--notice-category': config.notices.categoryColor, '--notice-row-height': `${config.notices.rowHeight}px`, '--notice-distance': `${config.notices.rowHeight * config.notices.items.length}px`, '--notice-row-radius': `${config.notices.rowRadius}px`, '--notice-row-padding': `${config.notices.rowPadding}px`, '--notice-title-size': `${config.notices.titleSize}px`, '--notice-title-weight': config.notices.titleWeight, '--notice-category-size': `${config.notices.categorySize}px`, '--notice-date-size': `${config.notices.dateSize}px`, '--notice-time-size': `${config.notices.timeSize}px`, '--notice-hover-bg': config.notices.hoverBackground, '--notice-divider': config.notices.dividerColor,
    '--info-bg': config.infoStyle.sectionBackground, '--info-gap': `${config.infoStyle.gap}px`, '--info-card-bg': config.infoStyle.cardBackground, '--info-border': config.infoStyle.borderColor, '--info-border-width': `${config.infoStyle.borderWidth}px`, '--info-card-radius': `${config.infoStyle.cardRadius}px`, '--info-card-padding': `${config.infoStyle.cardPadding}px`, '--info-image-height': `${config.infoStyle.imageHeight}px`, '--info-shadow-blur': `${config.infoStyle.cardShadowBlur}px`, '--info-shadow-opacity': config.infoStyle.cardShadowOpacity / 100, '--info-section-title-size': `${config.infoStyle.sectionTitleSize}px`, '--info-feature-size': `${config.infoStyle.featureTitleSize}px`, '--info-list-size': `${config.infoStyle.listTitleSize}px`, '--info-date-size': `${config.infoStyle.dateSize}px`,
    '--intro-gap': `${config.introStyle.gap}px`, '--intro-height': `${config.introStyle.minHeight}px`, '--intro-radius': `${config.introStyle.radius}px`, '--intro-padding': `${config.introStyle.padding}px`, '--intro-bg': config.introStyle.background, '--intro-border': config.introStyle.borderColor, '--intro-border-width': `${config.introStyle.borderWidth}px`, '--intro-shadow-blur': `${config.introStyle.shadowBlur}px`, '--intro-shadow-opacity': config.introStyle.shadowOpacity / 100, '--intro-title-size': `${config.introStyle.titleSize}px`, '--intro-body-size': `${config.introStyle.bodySize}px`, '--intro-cta-size': `${config.introStyle.ctaSize}px`, '--intro-index-size': `${config.introStyle.indexSize}px`,
    '--partner-columns': config.partners.columns, '--partner-gap': `${config.partners.gap}px`, '--partner-height': `${config.partners.cardHeight}px`, '--partner-radius': `${config.partners.radius}px`, '--partner-padding': `${config.partners.padding}px`, '--partner-bg': config.partners.background, '--partner-border': config.partners.borderColor, '--partner-border-width': `${config.partners.borderWidth}px`, '--partner-shadow-blur': `${config.partners.shadowBlur}px`, '--partner-shadow-opacity': config.partners.shadowOpacity / 100, '--partner-logo-width': `${config.partners.logoWidth}px`, '--partner-logo-height': `${config.partners.logoHeight}px`, '--partner-name-size': `${config.partners.nameSize}px`,
    '--footer-bg': config.footer.background, '--footer-height': `${config.footer.minHeight}px`, '--footer-heading-size': `${config.footer.headingSize}px`, '--footer-body-size': `${config.footer.bodySize}px`, '--footer-copyright-size': `${config.footer.copyrightSize}px`, '--hover-lift': `${config.effects.hoverLift}px`, '--image-scale': config.effects.imageScale, '--motion-duration': `${config.effects.motionDuration}ms`,
  };
  return (
    <div id="top" className={`${isQaStatic ? 'qa-static' : ''} ${isEditMode ? 'edit-mode' : ''} ${editorOpen ? 'editor-open' : ''} ${config.effects.cardLift ? '' : 'no-card-lift'} ${config.effects.imageZoom ? '' : 'no-image-zoom'}`} style={styleVars}>
      <div className="site-canvas" onClickCapture={selectFromPage}>
        <AppHeader config={config} />
        <main>
          <section className="shell primary-grid primary-grid-first"><MemberShowcase config={config} /><Notices config={config} /></section>
          <PictureNews config={config} />
          <IntegratedDelivery />
          <section className="news-band"><div className="shell info-grid">{infoData.map((data, index) => <InfoCard data={data} config={config} revealDelay={index * 100} key={data.title} />)}</div></section>
          <section className="shell intro-portals" data-edit-target="intro">
            <a id="about" className="intro-portal" data-reveal="up" href={links.about}><span className="intro-index">01</span><div className="intro-copy"><small>ABOUT GPMA</small><h2>{config.intro.aboutTitle}</h2><p>{config.intro.aboutText}</p></div><span className="intro-cta">{config.intro.aboutCta} <b>→</b></span></a>
            <a id="group-standards" className="intro-portal" data-reveal="up" style={{ '--reveal-delay': '100ms' }} href="/?page=standards&section=news"><span className="intro-index">02</span><div className="intro-copy"><small>GROUP STANDARDS</small><h2>{config.intro.standardsTitle}</h2><p>{config.intro.standardsText}</p></div><span className="intro-cta">{config.intro.standardsCta} <b>→</b></span></a>
          </section>
          <section className="shell partner-section" id="partners" data-edit-target="partners" data-reveal="up"><SectionTitle more={false}>{config.partners.title}</SectionTitle><div className="partner-grid">{config.partners.items.map(([domain, name, logo], partnerIndex) => <a href={domain.startsWith('http') ? domain : `https://${domain}`} target="_blank" rel="noreferrer" key={`${domain}-${partnerIndex}`} aria-label={`访问${name}官网`}><img src={logo} alt={`${name}标志`} /><strong>{name}</strong></a>)}</div></section>
        </main>
        <SiteFooter config={config} />
      </div>
      {isEditMode && <VisualEditor key={selected} config={config} selected={selected} open={editorOpen} dirty={dirty} canUndo={history.length > 0} canRedo={future.length > 0} onOpen={() => setEditorOpen(true)} onClose={() => setEditorOpen(false)} onSelect={setSelected} onUpdate={updateConfig} onBatchUpdate={batchUpdateConfig} onUndo={undo} onRedo={redo} onSave={save} onReset={resetModule} onImport={importConfig} />}
    </div>
  );
}

function AboutPage() {
  const config = DEFAULT_CONFIG;
  const initialSection = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('section') : null;
  const [activeSection, setActiveSection] = useState(aboutSections.some((item) => item.id === initialSection) ? initialSection : 'overview');
  const currentSection = aboutSections.find((item) => item.id === activeSection) || aboutSections[0];
  const changeSection = (id) => {
    setActiveSection(id);
    const url = new URL(window.location.href);
    url.searchParams.set('section', id);
    window.history.replaceState({}, '', url);
  };
  const styleVars = {
    '--brand': config.theme.brand,
    '--brand-dark': config.theme.brandDark,
    '--accent': '#28a7f2',
    '--mist': config.theme.mist,
    '--line': config.theme.line,
    '--text': config.theme.text,
    '--shell-width': `${config.theme.shellWidth}px`,
    '--masthead-height': `${config.header.mastheadHeight}px`,
    '--logo-width': `${config.header.logoWidth}px`,
    '--search-width': `${config.header.searchWidth}px`,
    '--nav-height': `${config.header.navHeight}px`,
    '--nav-bg': config.header.navBackground,
    '--submenu-bg': config.header.submenuBackground,
    '--nav-font-size': `${config.header.navFontSize}px`,
    '--submenu-font-size': `${config.header.submenuFontSize}px`,
    '--utility-font-size': `${config.header.utilityFontSize}px`,
    '--search-font-size': `${config.header.searchFontSize}px`,
    '--nav-letter-spacing': `${config.header.navLetterSpacing / 100}em`,
    '--footer-bg': config.footer.background,
    '--footer-height': `${config.footer.minHeight}px`,
    '--footer-heading-size': `${config.footer.headingSize}px`,
    '--footer-body-size': `${config.footer.bodySize}px`,
    '--footer-copyright-size': `${config.footer.copyrightSize}px`,
  };
  return (
    <div id="top" className="about-site" style={styleVars}>
      <div className="site-canvas">
        <AppHeader config={config} activePage="协会概况" />
        <main className="about-page-main">
          <SiteBreadcrumb><a href="./">首页</a><span>›</span><a href="?page=about&section=overview">关于协会</a><span>›</span><strong>{currentSection.label}</strong></SiteBreadcrumb>
          <div className="about-layout">
            <SiteSidebar title="关于协会" items={siteNavigation.find(item => item.label === '关于协会').children.map(item => ({ ...item, id: item.label }))} value={currentSection.label} />
            <article className={`about-content about-content-${activeSection}`} id={activeSection}>
              <header className="about-content-header">
                <h1>{currentSection.label}</h1>
              </header>
              {activeSection === 'overview' && <>
                <section className="about-feature" aria-label="协会简介概览"><div className="about-feature-copy"><h2>协会简介</h2><p>{aboutParagraphs[0]}</p></div><img src="/assets/about-guangzhou-new.png" alt="广州城市天际线" /></section>
                <section className="about-copy" aria-label="协会简介正文">{aboutParagraphs.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
              </>}
              {activeSection === 'construction' && <section className="association-value-grid" aria-label="协会建设理念">{associationValues.map((item) => <div className="association-value-card" tabIndex={0} key={item.title}><div><h2>{item.title}</h2><p>{item.text}</p></div><img src={item.image} alt="" /></div>)}</section>}
              {activeSection === 'charter' && <section className="about-long-copy" aria-label="广东省项目管理协会章程"><h2>广东省项目管理协会章程</h2>{charterContent.map(([title, ...paragraphs]) => <div className="about-document-section" key={title}><h3>{title}</h3>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>)}</section>}
              {activeSection === 'organization' && <section className="about-long-copy" aria-label="广东省项目管理协会理事会制度"><h2>广东省项目管理协会理事会制度</h2>{organizationContent.map(([title, ...paragraphs]) => <div className="about-document-section" key={title}><h3>{title}</h3>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>)}</section>}
            </article>
          </div>
        </main>
        <SiteFooter config={config} />
      </div>
    </div>
  );
}

const industryArticles = [
  ['广州市设计院集团有序推进广东电网小型基建项目“可研评审＋设计评审”一体化咨询服务', '聚焦全过程咨询服务，以专业协同提升项目决策与建设管理效能。', '24', '2025-09'],
  ['粤港澳大湾区重大基础设施建设取得新进展', '一批重点工程加快推进，为区域高质量发展注入新动能。', '18', '2025-09'],
  ['工程建设领域数字化转型与项目管理创新研讨会举行', '行业专家围绕数智技术、协同管理和实践应用展开交流。', '12', '2025-09'],
  ['全过程工程咨询服务标准化建设持续推进', '通过标准研究和案例总结，促进咨询服务专业化、规范化发展。', '06', '2025-09'],
  ['项目管理专业人才培养与能力评价体系不断完善', '进一步强化专业人才支撑，服务重大项目高质量建设。', '29', '2025-08'],
  ['广东建设行业绿色低碳发展实践成果发布', '分享绿色建造与精益管理经验，推动行业可持续发展。', '22', '2025-08'],
  ['城市更新项目全过程管理实践交流活动举办', '围绕策划、投资、建设及运营一体化分享实践成果。', '16', '2025-08'],
  ['智能建造赋能工程项目精细化管理', '数字技术推动工程现场管理模式和组织协同方式持续升级。', '08', '2025-08'],
  ['广东省重点项目建设管理经验交流会召开', '凝聚行业共识，推广优秀项目管理方法与实践案例。', '01', '2025-08'],
];

const essayArticles = [
  ['普通人如何培养强者气息？从做项目开始！', '01', '2026-09'],
  ['项目经理、总工、总监：在工地上分别干啥？', '28', '2026-08'],
  ['为什么总有人觉得，项目管理根本没用？', '25', '2026-08'],
  ['以产品目标为牵引，把QCDT捏合成一张网——大VAN项目管理实战', '18', '2026-08'],
  ['新的项目管理视角：关注VBS，而不是WBS', '14', '2026-08'],
  ['从启动到收尾：项目管理的七步闭环', '11', '2026-08'],
  ['项目经理成长四步曲', '07', '2026-08'],
  ['大型炼化工程项目管理方法与经验分享', '04', '2026-08'],
  ['工程结算审核时超预算怎么办？', '31', '2026-07'],
  ['AI项目管理：和传统软件项目管理有什么区别', '28', '2026-07'],
  ['瀑布还是敏捷？你的团队适合哪种项目管理方式？', '24', '2026-07'],
  ['从计划到干系人管理，24个项目规划过程干货合集', '21', '2026-07'],
  ['质量经理常用的8种项目管理工具', '14', '2026-07'],
  ['估算、概算、预算、结算的差异与管控重点！', '14', '2026-07'],
  ['“项目成功”的测量困境：当所有指标都说成功，用户却说不好用', '14', '2026-07'],
];

const newsDetailParagraphs = [
  '为贯彻落实《国家标准化发展纲要》，推动团体标准规范优质发展，近日，广东省市场监督管理局在广州组织召开两场团体标准政策宣贯会。线上线下1200余名团体标准组织负责人、标准化业务负责人参加。我会委派负责同志参会学习，及时把握政策导向，为进一步推动我省项目管理行业标准化高质量发展夯实工作基础。',
  '宣贯会针对当前团体标准“多而不精、快而不优”的突出问题，围绕合规管理与提质培优主线，明确了近期团体标准监管工作的重点任务，系统解读《标准化法》《团体标准管理规定》等法律法规政策、讲解团体标准全流程操作规范、合规风险防控要点与培优建设实施路径，紧密对接各类团体标准组织业务实际，为团体标准组织规范开展团体标准化工作提供专业指导，统一了全省团体标准发展工作思路，明晰合规管理红线、细化培优提升路径，有效强化团体标准组织责任意识与合规意识。',
  '对发布团体标准特别少、标准化工作活跃度较低的团体标准组织，广东省市场监督管理局先后发出644份提醒敦促函，指导相关团体标准组织开展自查：对超业务范围制定、违反强制性国家标准、不符合产业政策的标准，该废止的应废止、该修订的应列入年度修订计划；对自身不具备标准化工作能力的团体标准组织，要求其主动在全国团体标准信息平台注销账户，并逐步转型为标准化需求收集及应用推广单位，将其会员的标准化需求整合提交给具有行业影响力的团体标准组织。',
  '下一步，广东省市场监督管理局将建立“宣贯—督导—整改”一体化监管服务机制，持续推动团体标准发展从“重数量”向“重质量、强实效”转型，服务全省经济高质量发展。',
];

const newsGallery = pictureNewsGroups.flat();

function NoticePage() {
  const config = DEFAULT_CONFIG;
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const isAssociation = params.get('section') === 'association';
  const articles = isAssociation ? associationArticles : noticeArticles;
  const sectionLabel = isAssociation ? '协会动态' : '通知公告';
  const listUrl = sectionLabel === '协会动态' ? '?page=notices&section=association' : '?page=notices';
  const initialArticle = params.get('article');
  const [articleIndex, setArticleIndex] = useState(initialArticle === null ? null : Math.max(0, Math.min(articles.length - 1, Number(initialArticle) || 0)));
  const [paused, setPaused] = useState(false);
  const [featured, setFeatured] = useAutoplay(articles.length, 5000, isAssociation || paused || articleIndex !== null, true);
  const [visible, setVisible] = useState(6);
  const styleVars = {
    '--brand': config.theme.brand, '--brand-dark': config.theme.brandDark, '--accent': '#28a7f2', '--text': config.theme.text,
    '--shell-width': `${config.theme.shellWidth}px`, '--masthead-height': `${config.header.mastheadHeight}px`, '--logo-width': `${config.header.logoWidth}px`,
    '--search-width': `${config.header.searchWidth}px`, '--nav-height': `${config.header.navHeight}px`, '--nav-bg': config.header.navBackground,
    '--submenu-bg': config.header.submenuBackground, '--nav-font-size': `${config.header.navFontSize}px`, '--submenu-font-size': `${config.header.submenuFontSize}px`,
    '--utility-font-size': `${config.header.utilityFontSize}px`, '--search-font-size': `${config.header.searchFontSize}px`, '--nav-letter-spacing': `${config.header.navLetterSpacing / 100}em`,
    '--footer-bg': config.footer.background, '--footer-height': `${config.footer.minHeight}px`, '--footer-heading-size': `${config.footer.headingSize}px`,
    '--footer-body-size': `${config.footer.bodySize}px`, '--footer-copyright-size': `${config.footer.copyrightSize}px`,
  };
  const openArticle = (index) => {
    setArticleIndex(index);
    const url = new URL(window.location.href);
    url.searchParams.set('article', String(index));
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const closeArticle = () => {
    setArticleIndex(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('article');
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const selected = articles[featured];
  return <div id="top" className="notice-site" style={styleVars}><div className="site-canvas">
    <AppHeader config={config} activePage="协会动态" />
    <main className="notice-page-main">
      <SiteBreadcrumb><a href="./">首页</a><span>›</span><a href="?page=news">新闻动态</a><span>›</span>{articleIndex !== null ? <><a href={listUrl} onClick={(event) => { event.preventDefault(); closeArticle(); }}>{sectionLabel}</a><span>›</span><strong>公告详情</strong></> : <strong>{sectionLabel}</strong>}</SiteBreadcrumb>
      <div className="news-page-layout notice-with-sidebar"><SiteSidebar title="新闻动态" label="新闻栏目" items={siteNavigation.find(item => item.label === '新闻动态').children.map(item => ({ ...item, id: item.label }))} value={sectionLabel} />
      {articleIndex !== null ? <div className="notice-detail-layout"><article className="news-page-content"><header><h1>{sectionLabel}</h1></header><NoticeArticleDetail article={articles[articleIndex]} index={articleIndex} total={articles.length} onNavigate={openArticle} /></article>
      </div> : <article className="news-page-content notice-page-panel">
        <header><h1>{sectionLabel}</h1></header>
        {isAssociation ? <div className="industry-list">{articles.map((item,index) => <DatedListRow key={item.id} title={item.title} date={item.date} href={`${listUrl}&article=${index}`} onClick={event => {event.preventDefault();openArticle(index);}} />)}</div> : <>
          <section className="notice-feature" key={selected.id} aria-label="自动轮播重点通知公告" aria-live="polite" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
            <a className={selected.hasCover ? '' : 'is-placeholder'} href={`${listUrl}&article=${featured}`} onClick={(event) => { event.preventDefault(); openArticle(featured); }}><img src={selected.cover} alt={selected.title} /></a>
            <div><p className="notice-feature-meta"><b>{selected.tag}</b><time>{selected.date}</time></p><a href={`${listUrl}&article=${featured}`} onClick={(event) => { event.preventDefault(); openArticle(featured); }}><h2>{selected.title}</h2></a><p>{selected.summary || selected.title}</p><div className="notice-feature-controls"><button type="button" onClick={() => setFeatured((featured - 1 + articles.length) % articles.length)} aria-label="上一条"><img src={chevronLeft} alt="" /></button><button type="button" onClick={() => setFeatured((featured + 1) % articles.length)} aria-label="下一条"><img src={chevronRight} alt="" /></button></div></div>
          </section>
          <div className="notice-card-grid">{articles.slice(0, visible).map((item, index) => <a href={`${listUrl}&article=${index}`} onClick={(event) => { event.preventDefault(); openArticle(index); }} key={item.id}><span className={`notice-card-image ${item.hasCover ? '' : 'is-placeholder'}`}><img src={item.cover} alt="" /></span><strong>{item.title}</strong><time>{item.date}</time></a>)}</div>
          {visible < articles.length && <button className="load-more" type="button" onClick={() => setVisible(articles.length)}>加载更多</button>}
        </>}
      </article>}</div>
    </main>
    <SiteFooter config={config} />
  </div></div>;
}

function NoticeArticleDetail({ article, index, total = noticeArticles.length, onNavigate }) {
  return <section className="notice-detail" aria-label="通知公告详情">
    <h2>{article.title}</h2>
    <p className="notice-detail-meta">发布时间：{article.date}　来源：广东省项目管理协会</p>
    <div className="notice-detail-copy notice-original-content" dangerouslySetInnerHTML={{ __html: cleanOriginalMarkup(article.content) }} />
    <ArticleNavigation index={index} total={total} section="notices" onNavigate={onNavigate} />
  </section>;
}

function TextNewsList({ articles, section, visible, onOpen, onLoadMore, page = 1, pageSize = 0 }) {
  const startIndex = pageSize ? (page - 1) * pageSize : 0;
  const entries = articles.map((item,index) => ({item,index}));
  if (section === 'industry') entries.sort((a,b) => b.item.date.localeCompare(a.item.date));
  const displayedArticles = pageSize ? entries.slice(startIndex, startIndex + pageSize) : entries.slice(0, visible);
  return <>
    <div className="industry-list">{displayedArticles.map(({item,index}) => {
      return <DatedListRow title={item.title} date={item.date} summary={item.summary} href={`?page=news&section=${section}&article=${index}`} onClick={(event) => { event.preventDefault(); onOpen(index, section); }} key={item.id} />;
    })}</div>
    {!pageSize && visible < articles.length && <button className="load-more" onClick={onLoadMore}>加载更多</button>}
  </>;
}


function NewsPage() {
  const config = DEFAULT_CONFIG;
  const initialParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const initialSection = initialParams.get('section') || 'industry';
  const initialArticle = initialParams.get('article');
  const availableSections = ['industry', 'picture', 'essays', 'policyLaw', 'policyLocal'];
  const [section, setSection] = useState(availableSections.includes(initialSection) ? initialSection : 'industry');
  const initialArticleTotal = (originalNews[initialSection] || originalNews.industry).length;
  const [articleIndex, setArticleIndex] = useState(initialArticle === null ? null : Math.max(0, Math.min(initialArticleTotal - 1, Number(initialArticle) || 0)));
  const [visible, setVisible] = useState(6);
  const [listPage, setListPage] = useState(1);
  const [picturePaused, setPicturePaused] = useState(false);
  const [featured, setFeatured] = useAutoplay(
    originalNews.picture.length,
    5000,
    picturePaused || section !== 'picture' || articleIndex !== null,
  );
  const changeSection = (next) => {
    setSection(next);
    setArticleIndex(null);
    setVisible(6);
    setListPage(1);
    const url = new URL(window.location.href);
    url.searchParams.set('section', next);
    url.searchParams.delete('article');
    window.history.replaceState({}, '', url);
  };
  const openArticle = (index, targetSection = section) => {
    setSection(targetSection);
    setArticleIndex(index);
    const url = new URL(window.location.href);
    url.searchParams.set('section', targetSection);
    url.searchParams.set('article', String(index));
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const closeArticle = () => {
    setArticleIndex(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('article');
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const styleVars = {
    '--brand': config.theme.brand, '--brand-dark': config.theme.brandDark, '--accent': '#28a7f2', '--text': config.theme.text,
    '--shell-width': `${config.theme.shellWidth}px`, '--masthead-height': `${config.header.mastheadHeight}px`, '--logo-width': `${config.header.logoWidth}px`,
    '--search-width': `${config.header.searchWidth}px`, '--nav-height': `${config.header.navHeight}px`, '--nav-bg': config.header.navBackground,
    '--submenu-bg': config.header.submenuBackground, '--nav-font-size': `${config.header.navFontSize}px`, '--submenu-font-size': `${config.header.submenuFontSize}px`,
    '--utility-font-size': `${config.header.utilityFontSize}px`, '--search-font-size': `${config.header.searchFontSize}px`, '--nav-letter-spacing': `${config.header.navLetterSpacing / 100}em`,
    '--footer-bg': config.footer.background, '--footer-height': `${config.footer.minHeight}px`, '--footer-heading-size': `${config.footer.headingSize}px`,
    '--footer-body-size': `${config.footer.bodySize}px`, '--footer-copyright-size': `${config.footer.copyrightSize}px`,
  };
  const isPolicySection = section === 'policyLaw' || section === 'policyLocal';
  const activeArticles = originalNews[section] || originalNews.industry;
  const selected = originalNews.picture[featured];
  const isEssaySection = section === 'essays';
  const sectionLabel = isEssaySection ? '精要文汇' : section === 'industry' ? '新闻资讯' : section === 'picture' ? '图片新闻' : section === 'policyLaw' ? '法律法规' : '地方政策法规';
  const pageLabel = '新闻动态';
  const textPageSize = 10;
  const textPageCount = Math.ceil(activeArticles.length / textPageSize);
  const changeListPage = (nextPage) => {
    setListPage(Math.max(1, Math.min(textPageCount, nextPage)));
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };
  return <div id="top" className="news-site" style={styleVars}><div className="site-canvas">
    <AppHeader config={config} activePage={pageLabel} />
    <main className="news-page-main">
      <SiteBreadcrumb><a href="./">首页</a><span>›</span><a href="?page=news">新闻动态</a><span>›</span>{articleIndex !== null ? <><a href={`?page=news&section=${section}`} onClick={(event) => { event.preventDefault(); closeArticle(); }}>{sectionLabel}</a><span>›</span><strong>详情</strong></> : <strong>{sectionLabel}</strong>}</SiteBreadcrumb>
      <div className="news-page-layout">
        <SiteSidebar title="新闻动态" label="新闻栏目" items={siteNavigation.find(item => item.label === '新闻动态').children.map(item => ({ ...item, id: item.label }))} value={section === 'industry' ? '新闻资讯' : section === 'policyLaw' ? '法律法规' : section === 'policyLocal' ? '地方政策法规' : section === 'essays' ? '精要文汇' : ''} />
        <article className="news-page-content">
          <header><h1>{sectionLabel}</h1></header>
          {articleIndex !== null ? <OriginalNewsArticle article={activeArticles[articleIndex]} index={articleIndex} section={section} total={activeArticles.length} onNavigate={openArticle} /> : section === 'industry' || isEssaySection ? <>
            <TextNewsList articles={activeArticles} section={section} onOpen={openArticle} page={listPage} pageSize={textPageSize} />
            <NumberedPagination page={listPage} pageCount={textPageCount} onChange={changeListPage} label={`${sectionLabel}分页`} />
          </> : isPolicySection ? <>
            <TextNewsList articles={activeArticles} section={section} onOpen={openArticle} page={listPage} pageSize={textPageSize} />
            <NumberedPagination page={listPage} pageCount={textPageCount} onChange={changeListPage} label={`${sectionLabel}分页`} />
          </> : <>
            <section
              key={selected.id}
              className="gallery-feature"
              aria-live="polite"
              aria-roledescription="carousel"
              aria-label="重点图片新闻自动轮播"
              onMouseEnter={() => setPicturePaused(true)}
              onMouseLeave={() => setPicturePaused(false)}
              onFocusCapture={() => setPicturePaused(true)}
              onBlurCapture={() => setPicturePaused(false)}
            ><a className={selected.hasCover ? '' : 'is-placeholder'} href={`?page=news&section=picture&article=${featured}`} onClick={(event) => { event.preventDefault(); openArticle(featured, 'picture'); }}><img src={selected.cover} alt={selected.title} /></a><div><p className="gallery-meta"><b>图片新闻</b><time>{selected.date}</time></p><a href={`?page=news&section=picture&article=${featured}`} onClick={(event) => { event.preventDefault(); openArticle(featured, 'picture'); }}><h2>{selected.title}</h2></a><p>{selected.summary}</p><div className="gallery-controls"><button type="button" onClick={() => setFeatured((featured - 1 + originalNews.picture.length) % originalNews.picture.length)} aria-label="上一条"><img src={chevronLeft} alt="" /></button><button type="button" onClick={() => setFeatured((featured + 1) % originalNews.picture.length)} aria-label="下一条"><img src={chevronRight} alt="" /></button></div></div></section>
            <div className="gallery-grid">{originalNews.picture.slice(0, visible).map((item, index) => <a href={`?page=news&section=picture&article=${index}`} className={featured === index ? 'is-active' : ''} onClick={(event) => { event.preventDefault(); openArticle(index, 'picture'); }} key={item.id}><span className={`gallery-card-image ${item.hasCover ? '' : 'is-placeholder'}`}><img src={item.cover} alt={item.title} /></span><strong>{item.title}</strong><time>{item.date}</time></a>)}</div>
            {visible < originalNews.picture.length && <button className="load-more" onClick={() => setVisible((count) => Math.min(count + 15, originalNews.picture.length))}>加载更多</button>}
          </>}
        </article>
      </div>
    </main>
    <SiteFooter config={config} />
  </div></div>;
}

function NewsArticleDetail({ article, index, section, onNavigate }) {
  const isPicture = section === 'picture';
  const title = isPicture ? article.title : article[0];
  const total = isPicture ? newsGallery.length : industryArticles.length;
  if (isPicture) return <article className="news-detail is-picture" aria-label="图片新闻详情">
    <h2>{title}</h2>
    <div className="picture-detail-copy">
      <p>2026年8月28日，广东省项目管理协会团体标准《建设工程质量检测项目管理规程》编制启动会暨第一次会议在广州举行。会议由协会会员单位广东真正工程检测有限公司牵头召集，来自全省检测、施工、监理、设计等领域的十余家骨干单位代表参会，标志着该标准编制工作正式进入实质性推进阶段。</p>
      <p>当前，我省建设工程质量检测领域普遍面临项目管理标准不统一、流程口径差异大、质量管控水平参差不齐等突出短板，亟需以标准化手段统一管理规则、规范执业行为、提升服务一致性。作为广东省首个覆盖建设工程质量检测全流程项目管理的团体标准，该规程的出台将有效填补行业制度空白，为项目管理行业高质量发展提供技术支撑，并有力助推质量强省建设与工程安全保障。</p>
      <figure><img src="/assets/picture-detail-01.png" alt="会议代表交流标准编制工作" /><figcaption>黄潮科副总经理致欢迎辞</figcaption></figure>
      <p>会议伊始，广东真正副总经理黄潮科致欢迎辞，对协会及各参编单位代表的到来表示诚挚感谢。他表示，团体标准是行业治理体系的重要组成部分，本次标准编制是我省工程检测行业规范化、专业化升级的重要契机，牵头单位将切实扛起主体责任，携手各参编单位高质量完成编制任务，不辜负协会与行业的信任。</p>
      <p>广东省项目管理协会顾问潘奇俊宣读编制组成员名单，对前期筹备工作给予充分肯定，并明确协会将全程做好协调服务与技术支撑，打通沟通渠道，确保编制工作规范有序推进。</p>
      <figure><img src="/assets/picture-detail-02.png" alt="协会顾问在会议现场发言" /><figcaption>潘奇俊顾问指导发言</figcaption></figure>
      <p>编制组前期已开展多轮调研论证，会上围绕政策背景与战略意义、行业现状与短板分析、标准定位与编制原则、章节结构框架、重点难点问题、调研验证方案及人员分工与进度计划等七大核心模块作系统汇报。与会代表就编制大纲深度、职责划分、时间节点等议题深入研讨，结合各方实践经验提出针对性建议，进一步优化技术路线与实施方案。</p>
      <figure><img src="/assets/picture-detail-03.png" alt="主编单位汇报标准编制准备情况" /><figcaption>主编单位介绍编制工作准备情况</figcaption></figure>
      <p>下一步，编制组将按计划推进草案撰写与意见征询工作，力求标准兼具科学性、适用性与前瞻性，以标准化引领我省工程检测行业迈向规范化、专业化发展新阶段。</p>
    </div>
    <ArticleNavigation index={index} total={total} section={section} onNavigate={onNavigate} />
  </article>;
  return <article className="news-detail" aria-label="新闻详情">
    <h2>{title}</h2>
    <div className="news-detail-copy">{newsDetailParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    <ArticleNavigation index={index} total={total} section={section} onNavigate={onNavigate} />
  </article>;
}

function OriginalNewsArticle({ article, index, section, total, onNavigate }) {
  const [detail, setDetail] = useState(null);
  const detailLabel = section === 'picture' ? '图片新闻' : section === 'essays' ? '精要文汇' : section.startsWith('policy') ? '政策法规' : '新闻资讯';
  useEffect(() => {
    let active = true;
    setDetail(null);
    fetch(`/content/news/${article.contentSection || section}-${article.id}.json`)
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('detail unavailable')))
      .then((data) => { if (active) setDetail(data); })
      .catch(() => { if (active) setDetail({ title: article.title, date: article.date, content: `<p>${article.summary}</p>` }); });
    return () => { active = false; };
  }, [article.id, article.date, article.summary, article.title, article.contentSection, section]);
  return <article className={`news-detail original-news-detail ${section === 'picture' ? 'is-picture' : ''} ${section === 'essays' ? 'is-essay' : ''}`} aria-label={`${detailLabel}详情`}>
    <h2>{article.title}</h2>
    <p className="original-news-meta">发布时间：{article.date}　来源：广东省项目管理协会</p>
    {detail ? <div className="original-news-content" dangerouslySetInnerHTML={{ __html: cleanOriginalMarkup(detail.content) }} /> : <div className="detail-loading">正文加载中…</div>}
    <ArticleNavigation index={index} total={total} section={section} onNavigate={onNavigate} />
  </article>;
}


const integratedStages = [
  { title: '咨询策划', image: '/assets/integrated-figma/card-1.png', icon: '/assets/integrated-figma/icon-1.svg', text: '聚焦前期研究、需求研判与方案策划，为项目科学启动提供专业依据。' },
  { title: '投资决策', image: '/assets/integrated-figma/card-2.png', icon: '/assets/integrated-figma/icon-2.svg', text: '统筹投资测算、风险评估与决策论证，提升投资质量与资源配置效率。' },
  { title: '工程建设', image: '/assets/integrated-figma/card-3.png', icon: '/assets/integrated-figma/icon-3.svg', text: '协同推进设计、采购、施工与项目管理，保障建设目标高质量落地。' },
  { title: '运营管理', image: '/assets/integrated-figma/card-4.png', icon: '/assets/integrated-figma/icon-4.svg', text: '关注资产运营、绩效提升与持续优化，释放全生命周期长期价值。' },
];

function IntegratedDeliveryPage() {
  const config = DEFAULT_CONFIG;
  const styleVars = {
    '--brand': config.theme.brand, '--brand-dark': config.theme.brandDark, '--accent': '#28a7f2', '--text': config.theme.text,
    '--shell-width': `${config.theme.shellWidth}px`, '--masthead-height': `${config.header.mastheadHeight}px`, '--logo-width': `${config.header.logoWidth}px`,
    '--search-width': `${config.header.searchWidth}px`, '--nav-height': `${config.header.navHeight}px`, '--nav-bg': config.header.navBackground,
    '--submenu-bg': config.header.submenuBackground, '--nav-font-size': `${config.header.navFontSize}px`, '--submenu-font-size': `${config.header.submenuFontSize}px`,
    '--utility-font-size': `${config.header.utilityFontSize}px`, '--search-font-size': `${config.header.searchFontSize}px`, '--nav-letter-spacing': `${config.header.navLetterSpacing / 100}em`,
    '--footer-bg': config.footer.background, '--footer-height': `${config.footer.minHeight}px`, '--footer-heading-size': `${config.footer.headingSize}px`,
    '--footer-body-size': `${config.footer.bodySize}px`, '--footer-copyright-size': `${config.footer.copyrightSize}px`,
  };
  return <div id="top" className="integrated-page-site" style={styleVars}><div className="site-canvas">
    <AppHeader config={config} activePage="咨投建运" />
    <main className="integrated-page-main">
      <SiteBreadcrumb><a href="./">首页</a><span>›</span><strong>咨投建运</strong></SiteBreadcrumb>
      <div className="integrated-detail-panel">
        <header className="integrated-content-header"><h1>咨投建运</h1></header>
        <section className="integrated-detail-hero"><div className="integrated-detail-copy"><h2>咨投建运一体化</h2><p>贯通咨询策划、投资决策、工程建设与运营管理，推动项目全生命周期的信息协同、资源整合与价值创造。</p></div><figure><img src="/assets/integrated-figma/hero.png" alt="工程师围绕工程图纸与建筑模型协同工作" /></figure></section>
        <section className="integrated-stage-section"><header><h2>全生命周期专业服务</h2><p>覆盖项目从前期策划到持续运营的全过程服务体系</p></header><div className="integrated-stage-grid">{integratedStages.map((stage) => <article className="integrated-stage-card" tabIndex={0} key={stage.title}><div className="integrated-stage-visual"><img src={stage.image} alt="" /></div><div className="integrated-stage-copy"><img className="integrated-stage-icon" src={stage.icon} alt="" /><h3>{stage.title}</h3><p>{stage.text}</p></div></article>)}</div></section>
      </div>
    </main>
    <SiteFooter config={config} />
  </div></div>;
}



function ExpertPage() {
  const config = DEFAULT_CONFIG;
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const initialExpert = params.get('expert');
  const [selectedIndex, setSelectedIndex] = useState(initialExpert === null ? null : Math.max(0, Math.min(expertProfiles.length - 1, Number(initialExpert) || 0)));
  const pageSize = 9;
  const [requestedPage, setRequestedPage] = useState(() => Math.max(1, Number(params.get('p')) || 1));
  useEffect(() => {
    const syncLocation = () => {
      const next = new URLSearchParams(window.location.search);
      const index = next.get('expert');
      setSelectedIndex(index === null ? null : Math.max(0, Math.min(expertProfiles.length - 1, Number(index) || 0)));
      setRequestedPage(Math.max(1, Number(next.get('p')) || 1));
    };
    window.addEventListener('popstate', syncLocation);
    return () => window.removeEventListener('popstate', syncLocation);
  }, []);
  const [keyword, setKeyword] = useState('');
  const [field, setField] = useState('');
  const [region, setRegion] = useState('');
  const filtered = expertProfiles.filter((expert) => {
    const haystack = [expert.name, expert.type, expert.title, expert.specialty, ...expert.fields].join('');
    return (!keyword.trim() || haystack.includes(keyword.trim())) && (!field || expert.type.includes(field) || expert.fields.includes(field)) && (!region || expert.region === region);
  });
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(pageCount, requestedPage);
  const visibleExperts = filtered.slice((page - 1) * pageSize, page * pageSize);
  useEffect(() => { document.querySelector('.expert-panel')?.scrollIntoView({block: 'start', behavior: 'instant'}); }, [page]);
  const changePage = nextPage => {
    setRequestedPage(nextPage);
    const url = new URL(window.location.href);
    if (nextPage > 1) url.searchParams.set('p', String(nextPage));
    else url.searchParams.delete('p');
    window.history.pushState({}, '', url);
  };
  const styleVars = {
    '--brand': config.theme.brand, '--brand-dark': config.theme.brandDark, '--accent': '#28a7f2', '--text': config.theme.text,
    '--shell-width': `${config.theme.shellWidth}px`, '--masthead-height': `${config.header.mastheadHeight}px`, '--logo-width': `${config.header.logoWidth}px`,
    '--search-width': `${config.header.searchWidth}px`, '--nav-height': `${config.header.navHeight}px`, '--nav-bg': config.header.navBackground,
    '--submenu-bg': config.header.submenuBackground, '--nav-font-size': `${config.header.navFontSize}px`, '--submenu-font-size': `${config.header.submenuFontSize}px`,
    '--utility-font-size': `${config.header.utilityFontSize}px`, '--search-font-size': `${config.header.searchFontSize}px`, '--nav-letter-spacing': `${config.header.navLetterSpacing / 100}em`,
    '--footer-bg': config.footer.background, '--footer-height': `${config.footer.minHeight}px`, '--footer-heading-size': `${config.footer.headingSize}px`,
    '--footer-body-size': `${config.footer.bodySize}px`, '--footer-copyright-size': `${config.footer.copyrightSize}px`,
  };
  const openExpert = (index) => {
    setSelectedIndex(index);
    const url = new URL(window.location.href);
    url.searchParams.set('expert', String(index));
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const closeExpert = () => {
    setSelectedIndex(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('expert');
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const selected = selectedIndex === null ? null : expertProfiles[selectedIndex];
  return <div id="top" className="expert-site" style={styleVars}><div className="site-canvas">
    <AppHeader config={config} activePage="专家库" />
    <main className="expert-page-main">
      {selected ? <section className="expert-detail">
        <SiteBreadcrumb><a href="./">首页</a><span>›</span><a href="?page=experts" onClick={(event) => { event.preventDefault(); closeExpert(); }}>专家库</a><span>›</span><strong>专家详情</strong></SiteBreadcrumb>
        <article className="expert-panel expert-detail-panel">
          <header className="expert-panel-header"><h1>专家详情</h1></header>
          <button className="expert-back" type="button" onClick={closeExpert}>‹ 返回专家名录</button>
          <div className="expert-detail-card"><img src={selected.image} alt={`${selected.name}专家`} /><div><p>{selected.type}</p><h1>{selected.name}</h1><h2>{selected.title}</h2><div className="expert-tags">{selected.fields.map((item) => <span key={item}>{item}</span>)}</div><h3>专业特长</h3><p className="expert-specialty">{selected.specialty}</p><h3>理论成果</h3><p className="expert-theory">{selected.theory || '无'}</p></div></div>
        </article>
      </section> : <section className="expert-directory shell">
        <SiteBreadcrumb><a href="./">首页</a><span>›</span><strong>专家库</strong></SiteBreadcrumb>
        <div className="expert-panel"><header className="expert-panel-header"><h1>专家库</h1></header>
        <div className="expert-grid">{visibleExperts.map((expert) => { const originalIndex = expertProfiles.indexOf(expert); return <article className="expert-card" key={expert.name}><img src={expert.image} alt={`${expert.name}专家`} /><div><h2>{expert.name}</h2><div className="expert-tags"><span>{expert.type}</span><span>{expert.title}</span></div><p><b>专业特长：</b>{expert.specialty}</p><a className="expert-card-link" href={`/?page=experts&expert=${originalIndex}`} onClick={event => {event.preventDefault();openExpert(originalIndex);}} aria-label={`查看${expert.name}专家详情`}>查看详情<CaretRight size={16} aria-hidden="true" /></a></div></article>; })}</div>
        {!filtered.length && <p className="expert-empty">暂无专家资料。</p>}{pageCount > 1 && <NumberedPagination page={page} pageCount={pageCount} onChange={changePage} label="专家库分页" />}</div>
      </section>}
    </main>
    <SiteFooter config={config} />
  </div></div>;
}

export function App() {
  useScrollReveal(isEditMode || isQaStatic);
  if (isIntegratedPage) return <IntegratedDeliveryPage />;
  if (isExpertPage) return <ExpertPage />;
  if (isContactPage) return <ContactPage />;
  if (isNoticePage) return <NoticePage />;
  if (isAboutPage) return <AboutPage />;
  if (isNewsPage) return <NewsPage />;
  return <Homepage />;
}
