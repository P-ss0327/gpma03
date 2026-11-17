# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Durable design decisions

- The “协会简介” homepage navigation and compact portal open an internal `?page=about` view in the same React/Vite prototype. The inner page reuses the homepage masthead, navigation, brand tokens, and footer; it adapts Figma node `40:2288` into a 240px left section menu plus white content panel, while using only GPMA's existing overview content and no separate title banner.

- Variant A inherits the Version 1 homepage unchanged except for 图片新闻 and 咨投建运. 图片新闻 retains the one-large/two-small rotating matrix; 咨投建运 uses a left editorial summary and CTA paired with a generated Chinese project-team image in GPMA brand blue.

- Desktop-first association homepage, minimum canvas width 1120px and a 1320px centered content shell.
- Brand palette: `#0267B7` primary blue, `#0B3157` deep blue, `#F4F9FD` pale blue background.
- Keep the horizontal logo lockup in the white masthead, followed by a slim navy navigation bar.
- Full-bleed hero uses five auto-rotating slides with manual controls and pause/resume.
- Remove the old “最新消息” strip and do not add quick-service, membership application, or member-service shortcuts.
- Place “会员风采” and “通知公告” directly below the hero and give them equal priority; member showcase uses three image slides, notices retain the seamless vertical ticker and hover states.
- Place the dedicated “图片新闻” section directly below 会员风采/通知公告. It uses a one-large/two-small matrix, rotates the entire three-story group automatically, pauses on hover/focus, and supports manual previous/next and group pagination.
- “政策法规 / 行业新闻 / 精要文汇” are equal-priority, static image-led cards with hover states and direct outbound article links; do not add carousel controls.
- “协会简介 / 会员天地” are intentionally compact, lower-priority editorial portals using a numbered two-column treatment rather than icon cards.
- “友情链接” contains exactly eight logo/name outbound links in a 4×2 grid.
- Main navigation uses hover/focus dropdown submenus inspired by ccoop.org.cn, with dark vertical panels directly beneath each nav item.
- Add “咨投建运” to the main navigation as one flexible editorial category without subdivided stages. Place its compact homepage column below 会员风采/通知公告: the left contains the single-line “咨投建运” title, description beginning with “贯通”, and detail CTA; the right contains only an editorial title and body copy, with no date, button, stage diagram, or capability band.
- Notice announcements use an eight-row vertical timeline ticker inspired by chinaasc.org.cn: gray italic date/time on the left, a central line with nodes, and a brand-blue category label plus title on the right. It scrolls upward continuously and seamlessly, pauses on hover/focus, and resumes from the same position; do not show explanatory hint text or reference-site red.
- Policy, industry news, and selected essays remain image-led but are static lists without carousel controls.
- Section-heading underline rules and all explicit pause controls are removed; hero arrows use icon assets.
- Partner logos are the eight original logo assets downloaded from gpma.org.cn rather than favicon substitutes.
- Do not show a “更多内容” action in the友情链接 section.
- Article, feature, notice, intro, and partner content opens its destination directly; do not use detail modals.
- The hero “查看详情” hover fill must match the active slide-step blue `#14A6F3`.
- Separate会员风采 and通知公告 with a light translucent blue divider.
- A local visual-editing mode is available only when the URL contains `?edit=1`; normal visitors must never see editor UI or editor launch controls.
- The editor uses a fixed right drawer and click-to-select outlines. It must expose every hero/member slide, all eight notices, all five entries in each information category, all navigation/submenu labels, all eight partners, footer content, and fine-grained layout/style/motion controls; it also supports live preview, undo/redo, per-module reset, browser-local draft saving, and JSON import/export.
- Typography controls must bind to the actual rendered elements rather than only a global base size. Card-based sections must expose background, border, radius, padding, shadow, image size, text sizes, and reusable visual presets that remain individually adjustable after application.
- Browser-local editor drafts are intentionally isolated from the normal public page. Publishing a draft requires updating source configuration and deploying a new Sites version.
- The normal Version 1 homepage uses the same restrained one-time scroll reveals as Scheme B: trigger near 70% of the viewport, move 14–22px, animate for about 760ms, and stagger peers by about 100ms. Disable these reveals in `?edit=1` and `?qa=1` modes so editor selection and visual QA remain deterministic.

- 2026-10-19 相关下载：无表头文件行，统一蓝色文件图标；标题下显示分类和发布时间；右侧预览、下载为无边框图标加文字。保留顶部搜索、常用检索、年份筛选。下载页使用当前官网公开头部/导航/页脚快照；分类栏复用原有样式，演示数据明确标注。
- 2026-10-19 后续视觉调整：用户提供浅蓝搜索区参考图，下载页顶部采用大蓝标题、简短说明、独立下载插画、胶囊关键词和年份按钮；列表更紧凑、文件图标为蓝色实心，预览和下载继续使用无边框图标文字。保留现有官网公共区域和左侧栏目。
- 2026-10-19 官网栏目框架统一：以 gpma.agtsci.cn 当前10个一级栏目及其子栏目为准。App 与下载页共用 siteNavigation.js / SiteNavigation.jsx；关于协会、新闻动态左栏按官网层级显示。官网相关下载没有子栏目左栏，因此下载页采用单栏，原演示分类移入检索区作为资料筛选，保持交互及旧URL有效。原型缺少的正式栏目保留官网链接，不虚构内容。
- 2026-10-20 最新用户要求覆盖此前单栏选择：下载页必须保留官网左右双栏框架与原 news-sidebar 样式（图1），右侧嵌入图2的下载检索与列表。分类按图2，左栏无需图标或新样式。新闻与下载页共用 SiteSidebar、SitePagination 以及 siteComponents.css；分页保留官网40px圆形样式，禁止另做下载页分页。右侧控件使用官网品牌色；文件行、检索面板独立复用。
- 2026-10-20 检索区精简：相关下载右侧标题必须使用官网 `.news-page-content > header > h1` 的18px标题和底部分隔线；不使用大标题、说明文案或下载插画。标题下只保留搜索框、常用搜索、年份筛选；不显示重置/清除全部筛选按钮。左栏、列表、共用分页保持不变。
- 2026-10-20 交互精简：搜索输入的焦点仅由外层细边框提示，覆盖输入自身的通用focus-visible以避免内外双框；其他键盘焦点指示保留。常用搜索可不选，再次点相同关键词取消；清空输入立即清除关键词筛选。去掉列表顶部的筛选摘要、演示标签及底部演示说明；演示身份保留在实际附件和预览内容，不改正式数据。
- 2026-10-20 会员权限：顶部站内搜索旁增加会员登录，所有原有页面共用登录按钮。相关下载公开浏览与检索，单文件以 access=public/member 配置；预览和下载经过同一校验，注册账号不等于有效协会会员。未登录引导登录/注册；非会员申请入会；审核中说明状态；有效会员直接使用。登录返回原筛选和文件操作。当前仅本地演示，正式认证、资格核验和受控文件接口必须后端接入，禁止把前端演示当作正式权限安全实现。
- 2026-10-20 最新精简：会员登录页删除重复品牌说明、用途副标题和大段演示提示；保留标题、登录/注册切换、表单与返回，演示账号收起到details，底部只留小字演示环境。预览不再使用文本弹窗；权限校验后直接打开浏览器支持的PDF/图片/TXT文件。Office格式仅在配置转换后的previewUrl时提供预览，否则只下载；不把私有文件送第三方预览服务。
- 2026-10-20 登录页进一步聚焦：用户登录/注册使用独立简洁页面，仅保留协会标识、标题、表单及操作按钮，移除官网导航、页脚、面包屑、演示账号提示与演示环境字样。取消登录/注册页签，登录表单下增加“没有账号？立即注册”按钮，在同一URL内展开注册表单；“返回登录”回到登录表单。已有会员中心、入会页面与原路由保留，认证仍为本地演示。
- 2026-10-20 以上独立登录页选择被最新反馈覆盖：登录、同页注册、会员中心、入会页全部回归官网头部/导航/页脚和 news-page 双栏框架，共用 SiteSidebar。右栏统一18px标题与分隔线；登录内容保持简洁，注册按钮仍在同页工作。会员中心以单位、账号、会员状态三行展示，操作与内容左对齐，避免窄块悬浮在大面积空白中。演示身份记录在交付说明，不在页面重复提示。
- 2026-10-20 用户只负责官网，不建设后台。本轮在线申请包括专家入库、科技奖、入会三类；复用官网双栏、SiteSidebar、SitePagination，支持登录返回、分步填写、附件、保存草稿、确认提交、我的申请、详情。无后台接口时用独立 applicationStore.js 的 IndexedDB 演示适配，按当前账号保存表单和真实附件Blob，明确标注本地演示提交，不伪装已发送协会或已进入正式审核；不提供管理员或模拟审批入口。正式字段、申报资格和材料要求待协会确认。
- 2026-10-20 最新决定覆盖上述草稿功能：取消官网申请的保存草稿、草稿箱、继续填写与草稿状态筛选。未提交信息只保留在当前页面内存，步骤回退仍可编辑；离开提醒保留。完整确认提交后才持久化记录与附件；我的申请/详情仅展示已提交记录，旧演示草稿不展示且不主动删除。此决定不影响原可视化编辑器自己的草稿功能或下载搜索输入状态。
- 2026-10-20 申请表统一单列：每行仅一个字段，标签在左、输入控件在右，不再使用两个输入框并排的双列布局；三类表单及各填报步骤共用该布局。

- 2026-10-21 会员服务左栏与主导航下拉统一只保留“会员申请、会员风采、会员动态”。用户登录/会员中心、在线申请、我的申请归入右侧会员申请分类导航，入会/专家入库/科技奖归入在线申请目录；原登录、表单、详情URL继续可用。会员风采采用用户提供官网截图的双栏、18px标题、纯文字行及右侧日/月日期，不再用图文卡片或摘要；复用官网公共头尾与SiteSidebar/SitePagination，保留单位详情。日期仅使用截图可核对值，未核实日期不虚构。

- 2026-10-21 输入焦点采用控件自身边框变蓝、框内淡蓝底色及轻微内阴影，不再在申请输入框外增加outline。登录/注册与三类申请表共用同一规则；按钮、链接、文件上传及复选框仍保留原键盘焦点提示。

- 2026-10-21 申请填报改为单页纵向滚动：取消四步步骤条及上/下一步，基本信息、申请信息、申请材料一次展示，仍每行一个字段。底部默认未勾选阅读确认，文件链接新标签页打开。入会表使用“我已阅读《协会章程》及入会文件”及“立即注册”；专家/科技奖使用相关申请文件确认和“提交申请”。立即注册沿用入会申请提交，不代表账号创建或会员审核通过；未接后台时仍为本地演示。提交统一校验并聚焦首个错误，仅完整确认提交后持久化。

- 2026-10-21 会员中心底部操作区只保留“退出登录”，不再重复在线申请、我的申请、返回或申请入会按钮。

- 2026-10-21 顶部会员登录/会员中心按钮沿用首页“查看详情”交互：白底亮蓝边框，悬停亮蓝填充、白字白图标、上移2px及轻阴影，键盘聚焦同样可识别，减少动态效果偏好关闭位移动画。删除申请目录顶部使用说明、底部演示环境长提示和申请表顶部演示填报说明、未提交静态提示；保留必要校验/上传限制/空状态、提交结果真实标记及离开提醒。

- 2026-10-21 多二级选项的内页统一保留左侧栏目导航，包含列表与详情。补齐通知公告/协会动态、联系我们，关于协会改用共用SiteSidebar；已有新闻、会员服务、下载侧栏保留。首页、咨投建运和专家库不加左栏。会员风采与新闻使用同一DatedListRow（标题/摘要可选/右侧日期），统一悬停浅蓝底、标题日期亮蓝、轻微右移和键盘焦点；继续复用SitePagination。官网外链栏目保持原链接，不虚构其本地页面。

- 2026-10-21 通知公告/协会动态下方卡片按用户官网参考改为右侧内容列一行三张，30px间距、3:2图片、两行常规字重标题及底部日期；保持侧栏与顶部轮播不变。

- 2026-10-21 党建之窗三个类目（党章党规、学习资料、党建资讯）统一使用新闻资讯式DatedListRow列表、共用SiteSidebar/SitePagination以及文章详情模板，主导航内链到? page=party（无空格），保留官网旧栏目路径的本地别名。参考caec-china.org.cn访问超时，不能把未核实内容声称为转载；先用明确标注“（演示）”的占位文章，后续替换正式标题、分类、时间、来源、正文和附件，后台不在本轮范围。

- 2026-10-21 最新党建内容替换：从共产党员网核对9篇公开资料（每类3篇）的真实标题、页面显示发布时间、原文来源和链接，用简短自写摘要占位，不整篇复制且不冒充本协会活动。保留原文来源，附“查看原文”。原页面脚注日期优先于URL日期。党建与新闻动态共用ArticleNavigation组件和articleNavigation.css，仅保留上一篇/下一篇及圆形箭头、首尾禁用，无正常详情页返回列表按钮；面包屑仍可回分类。

- 2026-10-21 党建正文按用户长文参考排版：移除原文外跳链接和“内容摘要”短块，改为有小标题、段落和阅读要点的学习参考正文。保留真实题目日期及“参考来源”，正文内容为自行整理的学习参考，不冒充原文全文或正式法规条款；页面无查看原文/返回列表按钮，保留共用上下篇与面包屑。下载导航精简目前仅提出方案，尚不改其分类数据和交互。

- 2026-10-21 下载分类正式采用四入口：全部资料、申请表格、通知公告、政策文件，覆盖此前8类/5类提案。右侧分类标签同步；申请表格包括登记表、说明及清单。常用检索为具体事项词，可取消选中；仅在当前分类内搜索。切分类/关键词/年份重置至第1页，保留其他条件；全部资料仅取消分类限制。空分类结果提示“当前分类暂无匹配资料”，可在全部资料中继续查找，保留关键词及年份。结果明确按日期降序，旧分类URL兼容。24条演示记录与附件分类同步，部分旧研究/培训占位改为事项通知或资料目录，仍非正式文件；预览/下载和会员权限逻辑不变。

- 2026-10-21 专家库为已审核并发布的专家展示入口，移除页面“申请入库”按钮及主导航入库申请下拉，专家库一级入口直接进入名录。入库申请仅保留在会员服务→会员申请→在线申请。正式业务为提交申请→后台审核→审核通过且确认对外发布→进入专家库；本地演示提交不自动新增公开专家，也不建设后台审核逻辑。

- 2026-10-21 全站公告：公共入口挂载 SiteAnnouncement，官网蓝白样式，包含可配置标题、纯文本正文、可选配图、可选跳转按钮；原生 dialog 支持关闭/Escape、焦点管理及正文滚动。配置 public/site-announcement.json，适配 src/siteAnnouncement.js，未来替换后台接口；当前不建设后台编辑。默认 sessionStorage 按公告 id/revision 记录关闭，当前标签页会话跨栏目不重复，新版本可再次显示；noticePreview=1 强制预览，edit/qa模式默认抑制。配置/网络失败不阻塞页面。说明见 announcement-handoff.md。

- 2026-10-22 公告最新交互覆盖此前模态弹窗：340×240px右下角固定卡片，桌面距边20px，窄屏适配。无遮罩/滚动锁/自动聚焦，无底部按钮，关闭图标无边框（保留键盘focus提示）。正文配图整体为配置链接，点击跳转不记关闭，跨本地页面持续展示；仅主动关闭后本次会话隐藏。示例正文精简，长内容内部滚动，配置结构保持兼容。

- 2026-10-22 公告强调与跨页修复：noticePreview启动时清除当前公告的旧关闭记录，正常站内跳转不再被此前关闭状态隐藏；后续仅主动关闭记录隐藏。按id/revision记录首次呈现，入场320ms淡入上浮14px、圆点闪两次，后续页面不重播；蓝底白字标题栏及悬停阴影强调，尊重减少动态效果偏好。旧官网独立域名页面未接入组件，不能声称这些外链页面也有公告。

- 2026-10-22 站内栏目本地化：主导航及会员侧栏不再跳gpma.agtsci.cn，剩余10个入口使用src/migratedColumns.json的旧官网真实静态快照，MigratedColumnPage共用头部/登录/公告。实际源站这些入口均建设中，保留原状态，不编造正文。旧路径别名统一接回已实现的本地页面；带page查询的旧路径规范至根路径，导航及页脚query链接用/?避免路径优先级错误。公共搜索改本地SearchPage，首页原搜索假结果改为真实本地索引路由。外部会员官网/备案保留。详细说明见本地栏目迁移说明.md。

- 2026-10-22 最新业务划分：用户确认三类注册身份为“协会会员 / 科技奖评价申报用户 / 专家库申报用户”，并非三种会员资格。会员申请目录展示这三个身份入口，注册页预选identity并持久化，会员中心独立展示注册身份和会员状态。科技奖/科技评价/评优归award-catalog及各表单，旧.html地址兼容；专家申请归专家库导航独立入口（覆盖此前移除下拉决定），专家名录页本身仍无申请按钮。共用登录/我的申请/提交适配；申报账号登录即可填写，不强制先成为协会会员，真实申报条件由通知/后端核验。新科技评价/评优字段为原型配置，正式字段待确认。入会提交按钮改“提交申请”，账号注册不等于入会通过。单页单列/无草稿不变。详见官网申请入口与账号身份说明.md。

- 2026-10-22 评奖评优办理页：三类业务公开展示申报说明（对象、条件、流程、材料、时间）及相关文件，内容为原型示意、正式规则以当期通知为准。“在线申报”始终保留，未登录同时显示用户登录/用户注册；点击在线申报弹出登录提示，支持去登录/取消/关闭/Escape及焦点恢复。登录和注册returnTo均为当前type表单，已登录仅显示在线申报并直接填写。登录状态不等同申报资格，不虚构真实审核或截止时间。

- 2026-10-22 申报说明视觉精简：删除guide自身、说明各节/文件区/操作区横线，保留官网栏目标题标准底线，以留白和标题区分。登录提示移除取消与装饰圆点，只保留右上角关闭及去登录主操作。未登录操作区左侧为描边用户登录＋“没有账号？立即注册”文字入口，右侧为在线申报主按钮，窄屏自动换行；保留当前事项returnTo和awards身份。

- 2026-10-22 申报页操作位置最新调整：未登录账号操作移至栏目标题下、申报说明上方；在线申报保留正文末尾，左对齐，168px最小宽/48px高/16px文字品牌色一级按钮，轻阴影。登录弹窗去掉外框边线，使蓝色标题栏两侧不再露白边。

- 2026-10-22 注册信息按用户参考图扩展：三身份共用单页单列长注册表，可整页滚动；包含单位名称/信用代码/密码确认/类型/法人/成立日期/资本（万元）/网址/地区/地址、代表人和日常联络员资料及政治面貌。信用代码作为登录账号；密码至少8位含字母数字。营业执照必传，资质证书选传，PDF/JPG/PNG且每份不超过20MB；章程/入会文件确认默认未选。注册资料和附件仅提交时保存到独立本地IndexedDB，密码不写入资料库，仅既有session账户保存哈希；注册不会成为有效会员。不增加草稿/步骤/后台。

- 2026-10-22 注册页去除顶部会员申请页签（登录页同样不显示），不再高亮用户登录误导注册状态。注册底部集中立即注册、用户登录（同页切换）、返回上一层；返回按returnTo对应业务父级解析，拒绝跨站地址，直接进入注册则回身份目录。文件选择使用共享品牌蓝::file-selector-button，42px最小高，保留原生文件可访问性。专家库再次恢复纯名录，主导航无下拉/入库入口，仅会员申请中的专家库申报用户可发起（覆盖此前独立专家导航入口）。

- 2026-10-22 先按官网收集材料定位：所有填写表单及详情移除顶部业务/会员页签；“我的申请”统一改“我的提交记录”，会员中心提供记录入口，注册与申请目录不再展示记录入口。保留原应用路由和账号隔离的已提交数据，记录详情只有编号/时间/表单/附件，去掉进度时间线，不暗示已受理/审核。公告改指向会员中心。仍为本地演示收集，不向协会发送资料，不建设补正/审批流程。

- 2026-10-22 各申请表去除基本信息/申请信息/材料及提交操作区的横向分割线，修改共享application-form-section/application-material/application-form-actions样式，保留标题与留白、输入框边线及官网栏目标题标准底线。

- 2026-10-22 团体标准只保留团标动态、团标展示，移除主导航及快照左侧文件下载入口；旧/list-80871392affa4f489813e8eeb608dd9f.html通过别名进入相关下载并检索团体标准，不另建文件库或复制附件。团体标准常用检索词保持。

- 2026-10-22 团标动态/团标展示改为StandardsPage，复用新闻DatedListRow、SiteSidebar、SitePagination、ArticleNavigation，旧3个标准路径继续可用。团标动态直接引用noticeContent三篇真实征集/评审/立项正文，不复制附件。未核实正式标准发布目录，团标展示先用三条明确标注展示样例的介绍，禁止编造正式编号、发布日期或将立项项目说成已发布。DatedListRow增加可选dateFallback供样例右侧提示，其余页面默认不变。

- 2026-10-22 全站视觉统一：所有React内页使用SiteBreadcrumb，共用siteTheme.css在路由样式后加载；14px路径字、8px间距、当前层品牌蓝粗体，公共宽度1260px/左右28px。专家目录已有shell不重复扣边距。公共品牌、文字、边框、圆角、按钮、表单焦点、分页和侧栏使用同一token；保留不同功能布局。下载路径必须包含当前分类，首页→相关下载→全部资料/申请表格/通知公告/政策文件，切分类和浏览器回退同步更新；中间相关下载入口清除分类并保留其他筛选。

- 2026-10-22 全站组件第二轮统一：页面CSS的同义品牌/文字/边框/背景色改用公共token；siteTheme统一主次按钮42px（在线申报48px大号）、上传、44px输入、120px文本域、卡片3px圆角/边框/悬停、筛选项选中态、40px圆形切换箭头、文章标题/元信息、错误提示、公告与登录弹窗的公共颜色和阴影。保留功能布局及公告340×240尺寸。公共规则须保留键盘focus、错误态和减少动画偏好。

- 2026-10-22 下载通知分类更名“通知文件”，同步左栏、面包屑、文件元数据和TXT演示附件；旧category=通知公告仍映射新分类，不影响新闻动态的通知公告。全站网站地图不再手写旧8入口，SiteMap/publicFooter直接复用siteNavigation的10个一级栏目，名称链接随配置同步，保留原页脚联系方式。

- 2026-10-22 最新提交记录入口规则覆盖仅会员中心显示的旧限制：MemberApplicationTabs只按当前登录member判断我的提交记录是否可见，会员中心、注册与申请目录、提交记录页保持一致。未登录隐藏，已注册但未登录也隐藏；不要求有效协会会员或已有提交记录。独立注册页和填报表单仍不恢复顶部页签。

- 2026-10-22 注册身份入口修正：登录页恢复MemberApplicationTabs，提供用户登录/注册与申请（已登录显示会员中心和提交记录）；注册表本身不加顶部页签。登录页“立即注册·选择身份”进入三类目录，访客目录三个入口均预选对应identity进入注册，包括协会会员不再绕回登录。登录后目录保留原业务申请行为。

- 2026-10-23 用户确认个人用户体系，覆盖此前三种注册身份/企业长表单：统一个人注册（账号、密码、姓名、手机、邮箱，工作单位/职称/地区选填），不显示身份选择及法人/资本/营业执照/协会章程。personalRegistration定义当前个人校验；registrationConfig企业配置仅保留旧兼容参考与IndexedDB存储函数，不再用于注册UI。统一用户登录/用户中心/在线申请/我的申请，在线目录仅专家入库、科技奖；专家公开名录仍纯展示。用户中心可编辑保存本人资料，当前浏览器演示持久化，登出登录读取账号资料；新申请自动快照带入个人联系方式和专家姓名，不更改旧申请。专家工作单位选填，科技奖单位信息仍在业务表单。保留旧入会/科技评价/评优URL兼容，不在个人目录新增入口；无后台审核/验证码/找回密码服务，不声称已实现。

- 2026-10-23 在线申请专家入口：未登录点击开始申请复用评奖评优LoginPrompt，不直接跳登录。弹窗仅关闭与去登录；Escape/遮罩关闭并恢复触发焦点；去登录携带expert表单returnTo，登录后进入原事项。登录用户仍直接进入。loginPrompt保存具体type，避免目录默认science导致返回错误表单。

- 2026-10-23 手机布局：main在siteTheme后载入mobile.css，1119px及以下启用窄屏布局；1120px及以上原电脑布局保留。SiteNavigation增加可展开主菜单和独立二级栏目开关（aria-expanded/controls、Esc收起并回焦点），桌面隐藏新开关。内页左栏改横向滚动分类，内容/注册/申请/新闻/专家卡片单列，下载操作换行；输入字号16px。官网首页primary-grid/integrated-main单列，关于协会固定940px内容改流式，页脚原span9独占行。手机公告默认44px公告条，可展开240px正文，主动关闭仍会话隐藏，预留页底空间；桌面340×240不变。viewport meta保留，html lang=zh-CN。浏览器验证320/390/768主要栏目无整页横向溢出、390菜单/公告/登录提示、1440桌面grid240+1000和240px公告。未声称真实iOS/Android文件选择器与软键盘已测试。

- 2026-10-23 用户要求电脑与手机移除“评优”二级栏目：共用siteNavigation和awardSections仅保留科技奖、科技评价，下载常用词去掉评优申报。一级“评奖评优”名称保留。旧excellence目录/新填报URL及旧html别名统一回科技奖指南；既有提交记录数据及读取所需配置保留，不删除历史材料。

- 2026-10-23 手机真机反馈修复：MigratedColumnPage不再注入columns.styles旧全局CSS，空栏目改用PublicSiteHeader/SiteBreadcrumb/SiteSidebar与统一布局，保留原建设中内容。手机notice-feature用高于旧侧栏选择器的单列规则，图片3:2、标签日期不拆字；placeholder logo用contain。原始新闻/通知/团标正文的内嵌固定width、min-width、侧边padding/margin在手机范围重置，编辑器装饰框简化，表格适配。首页会员区域高度自适应、分页static、与协会动态32px间距，手机通知ticker静态避免首行裁切。手机登录提示主按钮全宽，容器聚焦preventScroll而非按钮，保留键盘Tab/Esc；下载权限提示蓝色头部、无框关闭、纵向全宽操作，隐藏重复继续浏览；focus状态仍保留键盘可用。顶部search类型及enterKeyHint=search，输入焦点去双框；聚焦搜索收起菜单、打开菜单收起输入键盘。桌面保持原布局，1440检查grid240+1000、手机开关none。
