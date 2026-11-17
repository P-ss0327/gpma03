import test from 'node:test';
import assert from 'node:assert/strict';
import {registrationError,profileError} from '../src/personalRegistration.js';
import {newApplication} from '../src/applicationStore.js';
const values={creditCode:'person_01',password:'example123',confirm:'example123',realName:'测试用户',phone:'13800000000',email:'test@example.com'};
test('personal registration works without company credentials, requires correct contact and confirmation',()=>{
 assert.equal(registrationError(values,{},true),'');
 assert.ok(registrationError(values,{},false));
 assert.ok(registrationError({...values,confirm:'other'}, {},true));
 assert.ok(profileError({...values,phone:'123'}));
});
test('one personal account can start both applications with independent prefilled contact snapshots',()=>{
 const member={name:'person_01',profile:{...values,unit:'测试单位'}};
 const expert=newApplication('expert',member),science=newApplication('science',member);
 assert.equal(expert.owner,science.owner);assert.equal(expert.applicantIdentity,'personal');
 assert.equal(expert.values.expertName,'测试用户');assert.equal(science.values.email,'test@example.com');
 expert.values.phone='13900000000';assert.equal(science.values.phone,'13800000000');
 assert.equal('password' in science.values,false);
});
