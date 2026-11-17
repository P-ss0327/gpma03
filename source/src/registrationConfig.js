export const registrationFields = [
 {key:'unit',label:'单位名称',placeholder:'请按营业执照信息输入',required:true},
 {key:'creditCode',label:'统一社会信用代码',placeholder:'请按营业执照信息输入，作为登录账号',required:true,maxLength:18},
 {key:'password',label:'登录密码',type:'password',placeholder:'至少8位，包含字母及数字',required:true},
 {key:'confirm',label:'确认密码',type:'password',placeholder:'请再次输入密码',required:true},
 {key:'unitType',label:'单位类型',options:['勘察企业','设计企业','施工企业','工程咨询企业','监理企业','科研院所','高等院校','其他'],required:true},
 {key:'legalRepresentative',label:'法定代表人',required:true},
 {key:'establishedAt',label:'成立时间',type:'date',required:true},
 {key:'capital',label:'注册资本',type:'number',suffix:'万元',required:true},
 {key:'website',label:'单位网址',type:'url',placeholder:'https://'},
 {key:'region',label:'所在地区',placeholder:'城市或地区',required:true},
 {key:'address',label:'通讯地址',required:true},
 {key:'representative',label:'推荐代表人',required:true},
 {key:'representativePhone',label:'代表人手机',type:'tel',placeholder:'单位代表的手机',required:true},
 {key:'representativePosition',label:'代表人职务',placeholder:'单位代表的职务',required:true},
 {key:'representativeEmail',label:'代表人邮箱',type:'email',placeholder:'单位代表的常用邮箱',required:true},
 {key:'politicalStatus',label:'政治面貌',required:true},
 {key:'liaison',label:'日常联络员',placeholder:'与协会对接的联络员',required:true},
 {key:'liaisonPosition',label:'联络员职务',placeholder:'联络员的职务',required:true},
 {key:'liaisonPhone',label:'联络员手机',type:'tel',placeholder:'联络员的手机号码',required:true},
 {key:'officePhone',label:'办公电话',type:'tel',placeholder:'联络员的办公电话',required:true},
 {key:'liaisonEmail',label:'联络员常用邮箱',type:'email',placeholder:'联络员的常用邮箱',required:true},
];
export const registrationMaterials=[{key:'license',label:'营业执照',required:true},{key:'qualification',label:'资质证书'}];
export const REGISTRATION_ACCEPT='.pdf,.jpg,.jpeg,.png';
export function registrationError(values,files,agreed) {
 for(const field of registrationFields) {
  const value=String(values[field.key] ?? '').trim();
  if(field.required&&!value)return `请填写${field.label}。`;
  if(value&&field.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))return `请填写正确的${field.label}。`;
  if(value&&field.type==='tel'&&!/^\+?[\d ()-]{6,25}$/.test(value))return `请填写正确的${field.label}。`;
 }
 if(!/^[A-Z0-9]{18}$/.test(values.creditCode))return '统一社会信用代码须为18位大写字母或数字。';
 if(values.password.length<8||!/[A-Za-z]/.test(values.password)||!/[0-9]/.test(values.password))return '登录密码至少8位，须包含字母及数字。';
 if(values.password!==values.confirm)return '两次输入的密码不一致。';
 if(!Number.isFinite(Number(values.capital))||Number(values.capital)<0)return '请填写有效的注册资本。';
 if(values.establishedAt>new Date().toLocaleDateString('en-CA'))return '成立时间不能晚于今天。';
 for(const material of registrationMaterials){
  const file=files[material.key];
  if(material.required&&!file)return `请上传${material.label}。`;
  if(file&&(!/\.(pdf|jpe?g|png)$/i.test(file.name)||file.size<=0||file.size>20*1024*1024))return `${material.label}请选择20 MB以内的PDF、JPG或PNG文件。`;
 }
 return agreed ? '' : '请阅读协会章程及入会文件，并勾选确认。';
}
export async function saveRegistrationProfile(account,identity,values,files) {
 const {password,confirm,...profile}=values;
 return new Promise((resolve,reject)=>{
  const request=indexedDB.open('gpma-registration-prototype',1);
  request.onupgradeneeded=()=>request.result.createObjectStore('profiles',{keyPath:'account'});
  request.onerror=()=>reject(request.error);
  request.onsuccess=()=>{
   const db=request.result;const transaction=db.transaction('profiles','readwrite');
   transaction.objectStore('profiles').put({account,identity,profile,files,createdAt:new Date().toISOString()});
   transaction.oncomplete=()=>{db.close();resolve();};
   transaction.onerror=()=>{db.close();reject(transaction.error);};
  };
 });
}
