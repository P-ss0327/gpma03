import test from 'node:test';
import assert from 'node:assert/strict';
import {registrationFields,registrationError} from '../src/registrationConfig.js';
function sample(){const values=Object.fromEntries(registrationFields.map(f=>[f.key,f.options?.[0] || (f.type==='email'?'a@example.com':f.type==='tel'?'02012345678':'示例')]));return {...values,creditCode:'91440101MA12345678',password:'Test12345',confirm:'Test12345',capital:'10',establishedAt:'2020-01-01'};}
const files={license:{name:'license.pdf',size:100}};
test('complete registration requires license and explicit reading confirmation',()=>{
 assert.equal(registrationError(sample(),files,true),'');
 assert.match(registrationError(sample(),{},true),/营业执照/);
 assert.match(registrationError(sample(),files,false),/勾选/);
});
test('registration validates business code, matching alphanumeric password and attachments',()=>{
 assert.match(registrationError({...sample(),creditCode:'123'},files,true),/18位/);
 assert.match(registrationError({...sample(),password:'12345678'},files,true),/字母/);
 assert.match(registrationError({...sample(),confirm:'different'},files,true),/不一致/);
 assert.match(registrationError(sample(),{license:{name:'script.html',size:100}},true),/PDF/);
 assert.match(registrationError({...sample(),capital:'-1'},files,true),/注册资本/);
});

test('registration back targets the parent business page and rejects external destinations',async()=>{
 const {registrationParent}=await import('../src/accountIdentities.js');
 assert.equal(registrationParent('/?page=application-form&type=evaluation'),'/?page=award-catalog&section=evaluation');
 assert.equal(registrationParent('/?page=application-form&type=expert'),'/?page=application-catalog');
 assert.equal(registrationParent('https://other.example/'),'/?page=application-catalog');
});
