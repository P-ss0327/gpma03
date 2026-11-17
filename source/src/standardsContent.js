import { noticeArticles } from './noticeContent.js';
export const standardsPaths = {
 '/list-d7360f55075b4ab78c69ea383d8ca988.html':'news',
 '/list-f38e30fffe7d465d9aa4f8a8bf890201.html':'news',
 '/list-1df896b0f23e42bf910ec0d01e14e9ed.html':'showcase',
};
export const standardsSections=[{id:'news',label:'团标动态'},{id:'showcase',label:'团标展示'}];
export const standardsNews=noticeArticles.filter(item=>['22297d0e9b274dc895f222efa5581d86','a7257a3a8ac84e1fa8eb57b49b94868e','c0517852d6a9445db2818a95bf189a8b'].includes(item.id)).sort((a,b)=>b.date.localeCompare(a.date));
export const standardsShowcase=[
 {id:'service-sample',title:'项目管理服务规范（展示样例）',summary:'示例展示项目管理服务的适用范围、工作内容与成果要求。',paragraphs:['本条目用于展示标准详情的页面结构，不代表协会已经立项或发布同名标准。正式内容应由协会确认后维护。','标准详情可介绍适用范围、主要技术内容、起草单位、发布日期和实施日期。涉及服务管理的标准，可依次说明需求识别、服务策划、组织实施、成果交付与质量改进等内容。','正式标准发布后，可在本页引用对应的发布公告及文件，附件统一使用相关下载中的资源，不重复上传。']},
 {id:'consulting-sample',title:'全过程工程咨询协同管理指南（展示样例）',summary:'示例展示咨询服务中各参与方的职责与协同安排。',paragraphs:['本条目是团标展示栏目布局样例，不是协会正式发布的标准，不具备标准编号或实施日期。','展示内容可围绕项目不同阶段的咨询协同展开，包括工作界面、职责分工、信息传递、成果衔接和问题协调，帮助读者判断标准与自身业务的关联。','正式资料接入时，应准确维护发布单位、适用范围、起草单位与版本信息，并关联发布文件。']},
 {id:'digital-sample',title:'工程项目数字化管理规范（展示样例）',summary:'示例展示数字化管理场景、数据协同和成果交付要求。',paragraphs:['本条目仅供页面展示参考，不代表协会已发布同名标准。所示正文为样例说明，不提供正式标准文本下载。','标准介绍可包含项目基础数据、业务流程协同、资料归档、成果交付及信息安全等主题。详情应突出应用场景和适用对象，方便用户检索与阅读。','正式发布后，可补充真实标准编号、发布及实施日期、主要起草单位，以及有权公开的配套附件。']},
];
