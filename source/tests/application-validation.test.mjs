import { accountIdentities, registrationIdentity } from '../src/accountIdentities.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import { applicationTypes, applicationAccess, validateApplication, validateAttachment, MAX_FILE_SIZE, MAX_TOTAL_SIZE } from '../src/applicationConfig.js';

function completeRecord(type) {
  const values = { unit: '演示单位', contact: '演示联系人', phone: '020-12345678', email: 'test@example.com' };
  for (const field of applicationTypes[type].fields) values[field.key] = field.options?.[0] || '演示内容';
  if (type === 'expert') values.years = '0';
  if (type === 'science') values.completionDate = '2025-01-01';
  if (type === 'membership') values.creditCode = '91440101MA12345678';
  const attachments = applicationTypes[type].materials.filter(material => material.required).map(material => ({ material: material.key }));
  return { values, attachments };
}

test('all application types accept complete data and their own required materials', () => {
  for (const type of Object.keys(applicationTypes)) {
    const { values, attachments } = completeRecord(type);
    assert.deepEqual(validateApplication(type, values, attachments, 3), {});
    assert.ok(Object.keys(validateApplication(type, values, [], 3)).length > 0);
  }
});

test('invalid contact details block continuation without validating later steps', () => {
  const errors = validateApplication('expert', { unit: '演示单位', contact: ' ', phone: 'abc', email: 'invalid' }, [], 0);
  assert.ok(errors.contact && errors.phone && errors.email);
  assert.equal(errors.expertName, undefined);
});

test('invalid business fields block final submission', () => {
  const expert = completeRecord('expert');
  expert.values.years = '-1';
  assert.ok(validateApplication('expert', expert.values, expert.attachments, 3).years);
  const science = completeRecord('science');
  science.values.completionDate = '2999-01-01';
  assert.ok(validateApplication('science', science.values, science.attachments, 3).completionDate);
  const membership = completeRecord('membership');
  membership.values.creditCode = '123';
  assert.ok(validateApplication('membership', membership.values, membership.attachments, 3).creditCode);
});

test('file validation enforces type, nonempty files, individual and combined sizes', () => {
  assert.equal(validateAttachment({ name: '材料.PDF', size: 100 }), '');
  for (const file of [{name:'page.html',size:1}, {name:'empty.pdf',size:0}, {name:'large.pdf',size:MAX_FILE_SIZE+1}]) assert.ok(validateAttachment(file));
  assert.ok(validateAttachment({name:'more.pdf',size:100}, [{size:MAX_TOTAL_SIZE}]));
});

test('business applications separate account registration from association membership', () => {
  assert.equal(applicationTypes.membership.group,'membership');
  assert.equal(applicationTypes.expert.group,'members');
  for (const type of ['science','evaluation','excellence']) {
    assert.equal(applicationTypes[type].group,'awards');
    assert.equal(applicationAccess(type,null),'login');
    assert.equal(applicationAccess(type,{status:'registered'}),'allowed');
    assert.equal(applicationAccess(type,{status:'pending'}),'allowed');
    assert.equal(applicationAccess(type,{status:'active'}),'allowed');
  }
  assert.equal(applicationAccess('membership',{status:'registered'}),'allowed');
  assert.equal(applicationAccess('expert',{status:'registered'}),'allowed');
  assert.equal(applicationAccess('unknown',{status:'active'}),'unknown');
});

test('three account identities select the registration context without granting membership',()=>{
  assert.deepEqual(accountIdentities.map(x=>x.label),['协会会员','科技奖评价申报用户','专家库申报用户']);
  assert.equal(registrationIdentity('awards','/?page=downloads'),'awards');
  assert.equal(registrationIdentity(null,'/?page=application-form&type=expert'),'expert');
  assert.equal(registrationIdentity(null,'/?page=award-catalog&section=science'),'awards');
  assert.equal(registrationIdentity(null,'/?page=application-form&type=membership'),'association');
});
