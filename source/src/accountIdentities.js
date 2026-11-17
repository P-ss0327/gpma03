export const accountIdentities = [
  {id:'association',label:'协会会员'},
  {id:'awards',label:'科技奖评价申报用户'},
  {id:'expert',label:'专家库申报用户'},
];
export function registrationIdentity(requested, returnTo = '') {
  if(accountIdentities.some(item=>item.id===requested)) return requested;
  if(/(?:type|section)=(?:science|evaluation|excellence)/.test(returnTo)) return 'awards';
  return /type=expert/.test(returnTo) ? 'expert' : 'association';
}
export function registrationParent(returnTo,identity) {
  try {
    const url=new URL(returnTo || '/?page=application-catalog','https://local.example');
    if(url.origin!=='https://local.example')return '/?page=application-catalog';
    const page=url.searchParams.get('page');
    if(page==='application-form') {
      const type=url.searchParams.get('type');
      if(['science','evaluation','excellence'].includes(type))return `/?page=award-catalog&section=${type}`;
      return '/?page=application-catalog';
    }
    if(page==='member-login'||page==='member-register')return '/?page=application-catalog';
    return url.pathname+url.search;
  } catch {return '/?page=application-catalog';}
}
