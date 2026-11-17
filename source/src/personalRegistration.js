export const registrationFields=[
 {key:'creditCode',label:'登录账号',placeholder:'4–30位字母、数字或下划线',required:true,maxLength:30},
 {key:'password',label:'登录密码',type:'password',placeholder:'至少8位，包含字母和数字',required:true},
 {key:'confirm',label:'确认密码',type:'password',required:true},
 {key:'realName',label:'姓名',required:true},
 {key:'phone',label:'手机号码',type:'tel',required:true},
 {key:'email',label:'电子邮箱',type:'email',required:true},
 {key:'unit',label:'工作单位',placeholder:'选填，可在申请时补充'},
 {key:'position',label:'职务／职称'},
 {key:'region',label:'所在地区'},
];
export const registrationMaterials=[];
export const REGISTRATION_ACCEPT='';
export function profileError(values){
 for(const key of ['realName','phone','email'])if(!String(values[key]||'').trim())return '请填写姓名、手机号码和电子邮箱。';
 if(!/^1[3-9]\d{9}$/.test(values.phone||''))return '请填写正确的11位手机号码。';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email||''))return '请填写正确的电子邮箱。';
 return '';
}
export function registrationValidation(values,files,agreed){
 if(!/^[A-Za-z0-9_]{4,30}$/.test(values.creditCode||''))return {key:'creditCode',message:'登录账号须为4–30位字母、数字或下划线。'};
 if((values.password||'').length<8||!/[A-Za-z]/.test(values.password)||!/[0-9]/.test(values.password))return {key:'password',message:'密码至少8位，包含字母和数字。'};
 if(values.password!==values.confirm)return {key:'confirm',message:'两次密码输入不一致。'};
 const message=profileError(values);
 if(message)return {key:['realName','phone','email'].find(key=>!String(values[key]||'').trim()) || (!/^1[3-9]\d{9}$/.test(values.phone||'')?'phone':'email'),message};
 if(!agreed)return {key:'agreement',message:'请确认所填个人信息真实、准确。'};
 return null;
}
export function registrationError(values,files,agreed){return registrationValidation(values,files,agreed)?.message || '';}
