export const applicationTypes = {
  expert: {
    title: '专家入库申请', description: '填写专业经历、研究成果并上传申请材料。',
    fields: [
      { key: 'expertName', label: '申请人姓名', required: true },
      { key: 'title', label: '专业技术职称', required: true },
      { key: 'education', label: '最高学历', options: ['专科', '本科', '硕士研究生', '博士研究生', '其他'], required: true },
      { key: 'years', label: '从业年限', type: 'number', required: true },
      { key: 'specialty', label: '专业领域', required: true },
      { key: 'experience', label: '主要工作经历', type: 'textarea', required: true },
      { key: 'achievements', label: '代表性项目与研究成果', type: 'textarea', required: true },
    ],
    materials: [{ key: 'application', label: '入库申请表（签字/盖章版）', required: true }, { key: 'qualification', label: '职称或专业资格证明', required: true }, { key: 'additional', label: '成果证明及其他材料' }],
    templateId: 6,
  },
  science: {
    title: '科技奖申请', description: '填写项目基本情况、创新成果并上传申报材料。',
    fields: [
      { key: 'projectName', label: '申报项目名称', required: true },
      { key: 'projectCategory', label: '项目所属领域', required: true },
      { key: 'leader', label: '项目负责人', required: true },
      { key: 'team', label: '主要完成人及完成单位', type: 'textarea', required: true },
      { key: 'completionDate', label: '项目完成日期', type: 'date', required: true },
      { key: 'summary', label: '项目简介', type: 'textarea', required: true },
      { key: 'innovation', label: '主要创新点', type: 'textarea', required: true },
      { key: 'benefits', label: '应用情况与效益', type: 'textarea', required: true },
    ],
    materials: [{ key: 'application', label: '科技奖申报书（签字/盖章版）', required: true }, { key: 'report', label: '项目技术报告', required: true }, { key: 'additional', label: '成果应用证明及其他材料' }],
    templateId: 1,
  },
  membership: {
    title: '入会申请', description: '填写单位信息、业务情况并上传入会材料。',
    fields: [
      { key: 'creditCode', label: '统一社会信用代码', required: true },
      { key: 'address', label: '单位地址', required: true },
      { key: 'representative', label: '法定代表人', required: true },
      { key: 'business', label: '主营业务', type: 'textarea', required: true },
      { key: 'introduction', label: '单位简介与入会意愿', type: 'textarea', required: true },
    ],
    materials: [{ key: 'application', label: '入会申请表（盖章版）', required: true }, { key: 'license', label: '营业执照或单位登记证明', required: true }, { key: 'additional', label: '其他补充材料' }],
    templateId: 9,
  },
};

// Business grouping is independent of the shared application record store.
applicationTypes.science.group = 'awards';
applicationTypes.science.requiresMember = false;
applicationTypes.expert.group = 'members';
applicationTypes.membership.group = 'membership';
applicationTypes.evaluation = {
  group: 'awards', requiresMember: false,
  title: '科技评价申请', description: '填写成果信息并上传科技评价材料。',
  fields: [
    {key:'projectName',label:'科技成果名称',required:true},
    {key:'leader',label:'成果负责人',required:true},
    {key:'field',label:'成果所属领域',required:true},
    {key:'summary',label:'成果简介',type:'textarea',required:true},
    {key:'innovation',label:'技术创新与应用情况',type:'textarea',required:true},
  ],
  materials: [{key:'application',label:'科技评价申请表（签字/盖章版）',required:true},{key:'report',label:'成果技术报告',required:true},{key:'additional',label:'其他证明材料'}],
};
applicationTypes.excellence = {
  group:'awards', requiresMember:false,
  title:'评优申请', description:'填写参评事项并上传评优材料。',
  fields:[
    {key:'projectName',label:'参评名称',required:true},
    {key:'awardCategory',label:'参评类别（按当期通知填写）',required:true},
    {key:'leader',label:'申报负责人',required:true},
    {key:'summary',label:'参评简介',type:'textarea',required:true},
    {key:'achievements',label:'主要业绩',type:'textarea',required:true},
  ],
  materials:[{key:'application',label:'评优申报表（签字/盖章版）',required:true},{key:'proof',label:'业绩证明材料',required:true},{key:'additional',label:'其他补充材料'}],
  templateId:2,
};
export const awardSections = [
  {id:'science',label:'科技奖'}, {id:'evaluation',label:'科技评价'},
];
export function applicationAccess(type, member) {
  if (!applicationTypes[type]) return 'unknown';
  if (!member) return 'login';
  return applicationTypes[type].requiresMember && member.status !== 'active' ? 'membership' : 'allowed';
}
export const awardUrl = type => `/?page=award-catalog&section=${type}`;

// 申报说明为原型示意文案，正式申报对象、条件与阶段以协会当期通知为准。
export const awardGuideText = {
  science: {
    audience: '在广东省内从事项目管理及相关工作的企事业单位、高等院校、科研院所、社会组织及项目管理人员。',
    conditions: [
      '申报成果应围绕项目管理理论、方法、技术或实践形成创新，并已在项目中实际应用。',
      '成果应用情况与效益应提供可核验的证明材料，不存在知识产权争议。',
      '申报资格与诚信要求以当期通知为准。',
      '重复申报及已获奖成果的受理范围以当期通知为准。',
    ],
    flow: [
      { title: '通知发布', text: '协会发布当期科技奖申报通知，明确申报时间、条件与材料要求。' },
      { title: '在线填报', text: '申报单位注册或登录账号，选择科技奖填写申报信息并上传材料。' },
      { title: '形式审查', text: '协会核对材料完整性与格式，材料不全的一次性告知补正。' },
      { title: '专家评审', text: '组织专家开展评审，必要时安排答辩或现场核查。' },
      { title: '结果公示', text: '评审结果按程序公示，公示期满后公布获奖名单。' },
    ],
  },
  evaluation: {
    audience: '已完成科技成果、拟委托第三方机构开展科技评价的单位或项目团队。',
    conditions: [
      '成果权属清晰，不存在知识产权争议或权属纠纷。',
      '提交的技术资料真实、完整，能够支撑评价结论。',
      '成果已完成或具备实际应用条件，可提供应用情况证明。',
      '同一成果不得就同一事项重复申请评价。',
    ],
    flow: [
      { title: '通知发布', text: '协会公布科技评价受理安排与材料要求。' },
      { title: '在线填报', text: '申报单位提交科技评价申请及成果技术资料。' },
      { title: '材料审查', text: '审查成果权属、资料完整性与受理条件。' },
      { title: '组织评价', text: '组织专家开展评价，必要时安排答辩或现场核查。' },
      { title: '结论出具', text: '出具科技评价结论并反馈申报单位。' },
    ],
  },
  excellence: {
    audience: '在项目管理领域作出突出贡献的单位、团队及个人。',
    conditions: [
      '符合当期评优通知明确的参评范围与类别。',
      '主要业绩真实可核验，并提供相应证明材料。',
      '申报资格与诚信要求以当期通知为准。',
      '已获同类荣誉事项是否可以参评，以当期通知为准。',
    ],
    flow: [
      { title: '通知发布', text: '协会发布当期评优通知，明确参评类别与时间安排。' },
      { title: '在线填报', text: '申报单位或个人填写参评信息并上传业绩证明。' },
      { title: '资格审核', text: '核对参评范围、业绩真实性与材料完整性。' },
      { title: '组织评审', text: '组织评审并按程序确定拟入选名单。' },
      { title: '结果公示', text: '拟入选名单公示，公示期满后公布结果。' },
    ],
  },
};

export const contactFields = [
  { key: 'unit', label: '单位名称', required: true },
  { key: 'contact', label: '联系人', required: true },
  { key: 'phone', label: '联系电话', type: 'tel', required: true },
  { key: 'email', label: '电子邮箱', type: 'email', required: true },
];

export const MAX_FILE_SIZE = 20 * 1024 * 1024;
export const MAX_TOTAL_SIZE = 60 * 1024 * 1024;
export const ACCEPT_FILES = '.pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip';
export function validateAttachment(file, existing = []) {
  if (!/\.(pdf|docx?|xlsx?|jpe?g|png|zip)$/i.test(file.name)) return '请选择 PDF、Word、Excel、图片或 ZIP 文件。';
  if (!file.size) return '不能上传空文件。';
  if (file.size > MAX_FILE_SIZE) return '单个文件不能超过20 MB。';
  if (existing.reduce((total, item) => total + item.size, 0) + file.size > MAX_TOTAL_SIZE) return '一份申请的材料总大小不能超过60 MB。';
  return '';
}

export function contactFieldsFor(type){return contactFields.map(field=>type==='expert'&&field.key==='unit'?{...field,label:'工作单位',required:false}:field);}

export function validateApplication(type, values, attachments, step) {
  const config = applicationTypes[type];
  if (!config) return { form: '未找到申请类型。' };
  const errors = {};
  const fields = step === 0 ? contactFieldsFor(type) : step === 1 ? config.fields : step === 2 ? [] : [...contactFieldsFor(type), ...config.fields];
  for (const field of fields) {
    const value = String(values[field.key] || '').trim();
    if (field.required && !value) errors[field.key] = `请填写${field.label}。`;
    else if (value && field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors[field.key] = '请输入正确的电子邮箱。';
    else if (value && field.type === 'tel' && !/^\+?[\d ()-]{6,25}$/.test(value)) errors[field.key] = '请输入正确的联系电话。';
    else if (value && field.type === 'number' && (!Number.isFinite(Number(value)) || Number(value) < 0 || Number(value) > 80)) errors[field.key] = '请填写0至80之间的年限。';
  }
  if (step === 2 || step === 3) for (const material of config.materials) {
    if (material.required && !attachments.some(file => file.material === material.key)) errors[material.key] = `请上传${material.label}。`;
  }
  if ((step === 1 || step === 3) && type === 'membership' && values.creditCode && !/^[A-Z0-9]{18}$/.test(values.creditCode)) errors.creditCode = '请填写18位统一社会信用代码。';
  if ((step === 1 || step === 3) && type === 'science' && values.completionDate > new Date().toLocaleDateString('en-CA')) errors.completionDate = '完成日期不能晚于今天。';
  return errors;
}
