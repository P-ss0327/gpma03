const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/StandardsPage-qE4ov8lu.js","assets/2scl0nq9je__z-B7KZu8Pk.js","assets/siteComponents-cdVkPcKC.js","assets/siteComponents-Di9LE9aU.css","assets/2scl0nq9je__z-BBHSW-7u.css","assets/SiteSidebar-BKLqR05t.js","assets/SitePagination-Bja1GHr-.js","assets/DatedListRow-BSHduCof.js","assets/ArticleNavigation-DDNawyEs.js","assets/ArticleNavigation-D_RPeA_C.css","assets/StandardsPage-VlJzPhHM.css","assets/party-DqsfWZel.css","assets/SearchPage-v8X8TWZl.js","assets/newsCatalog-CsR4hIGO.js","assets/memberShowcaseData-BrKMjTcC.js","assets/downloadData-CAOmwbfd.js","assets/SearchPage-Btctl-OW.css","assets/MigratedColumnPage-CExvC368.js","assets/PartyPage-Ce9BYbu-.js","assets/MemberShowcasePage-CzJCcx8S.js","assets/memberNavigation-CvZASWDD.js","assets/MemberShowcasePage-DlRZUgUV.css","assets/ApplicationsPage-CJGh5MHI.js","assets/useDialogViewport-DCB_K5cM.js","assets/MemberApplicationTabs-BlLlqWGp.js","assets/ApplicationsPage-B5uLg4Sy.css","assets/MemberPage-XDYMyp6K.js","assets/Eye.es-BROVh2zt.js","assets/DownloadsPage-C2uxr79z.js","assets/DownloadsPage-nWjW-aKy.css","assets/App-CQyYeP7u.js","assets/styles-DCvRzbgZ.css","assets/siteTheme-D6zA0F4T.css","assets/mobile-BE5weCQC.css"])))=>i.map(i=>d[i]);
(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const Z of document.querySelectorAll('link[rel="modulepreload"]'))d(Z);new MutationObserver(Z=>{for(const L of Z)if(L.type==="childList")for(const P of L.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&d(P)}).observe(document,{childList:!0,subtree:!0});function _(Z){const L={};return Z.integrity&&(L.integrity=Z.integrity),Z.referrerPolicy&&(L.referrerPolicy=Z.referrerPolicy),Z.crossOrigin==="use-credentials"?L.credentials="include":Z.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function d(Z){if(Z.ep)return;Z.ep=!0;const L=_(Z);fetch(Z.href,L)}})();const gm="modulepreload",fm=function(h){return"/gpma03/preview-20261117/"+h},xg={},xn=function(B,_,d){let Z=Promise.resolve();if(_&&_.length>0){let P=function(v){return Promise.all(v.map(H=>Promise.resolve(H).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const I=document.querySelector("meta[property=csp-nonce]"),T=(I==null?void 0:I.nonce)||(I==null?void 0:I.getAttribute("nonce"));Z=P(_.map(v=>{if(v=fm(v),v in xg)return;xg[v]=!0;const H=v.endsWith(".css"),k=H?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${k}`))return;const Q=document.createElement("link");if(Q.rel=H?"stylesheet":gm,H||(Q.as="script"),Q.crossOrigin="",Q.href=v,T&&Q.setAttribute("nonce",T),document.head.appendChild(Q),H)return new Promise((dt,ft)=>{Q.addEventListener("load",dt),Q.addEventListener("error",()=>ft(new Error(`Unable to preload CSS for ${v}`)))})}))}function L(P){const I=new Event("vite:preloadError",{cancelable:!0});if(I.payload=P,window.dispatchEvent(I),!I.defaultPrevented)throw P}return Z.then(P=>{for(const I of P||[])I.status==="rejected"&&L(I.reason);return B().catch(L)})};function mm(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var rp={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function um(){if(zg)return Nl;zg=1;var h=Symbol.for("react.transitional.element"),B=Symbol.for("react.fragment");function _(d,Z,L){var P=null;if(L!==void 0&&(P=""+L),Z.key!==void 0&&(P=""+Z.key),"key"in Z){L={};for(var I in Z)I!=="key"&&(L[I]=Z[I])}else L=Z;return Z=L.ref,{$$typeof:h,type:d,key:P,ref:Z!==void 0?Z:null,props:L}}return Nl.Fragment=B,Nl.jsx=_,Nl.jsxs=_,Nl}var vg;function dm(){return vg||(vg=1,rp.exports=um()),rp.exports}var Ut=dm(),cp={exports:{}},O={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function ym(){if(Ng)return O;Ng=1;var h=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),P=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),Q=Symbol.iterator;function dt(c){return c===null||typeof c!="object"?null:(c=Q&&c[Q]||c["@@iterator"],typeof c=="function"?c:null)}var ft={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qt=Object.assign,Tn={};function $t(c,w,U){this.props=c,this.context=w,this.refs=Tn,this.updater=U||ft}$t.prototype.isReactComponent={},$t.prototype.setState=function(c,w){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,w,"setState")},$t.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Fn(){}Fn.prototype=$t.prototype;function jt(c,w,U){this.props=c,this.context=w,this.refs=Tn,this.updater=U||ft}var pn=jt.prototype=new Fn;pn.constructor=jt,qt(pn,$t.prototype),pn.isPureReactComponent=!0;var Sn=Array.isArray;function Dt(){}var $={H:null,A:null,T:null,S:null},Ct=Object.prototype.hasOwnProperty;function En(c,w,U){var q=U.ref;return{$$typeof:h,type:c,key:w,ref:q!==void 0?q:null,props:U}}function Qe(c,w){return En(c.type,w,c.props)}function Un(c){return typeof c=="object"&&c!==null&&c.$$typeof===h}function Yt(c){var w={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(U){return w[U]})}var Se=/\/+/g;function kn(c,w){return typeof c=="object"&&c!==null&&c.key!=null?Yt(""+c.key):w.toString(36)}function zn(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Dt,Dt):(c.status="pending",c.then(function(w){c.status==="pending"&&(c.status="fulfilled",c.value=w)},function(w){c.status==="pending"&&(c.status="rejected",c.reason=w)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function x(c,w,U,q,D){var X=typeof c;(X==="undefined"||X==="boolean")&&(c=null);var at=!1;if(c===null)at=!0;else switch(X){case"bigint":case"string":case"number":at=!0;break;case"object":switch(c.$$typeof){case h:case B:at=!0;break;case H:return at=c._init,x(at(c._payload),w,U,q,D)}}if(at)return D=D(c),at=q===""?"."+kn(c,0):q,Sn(D)?(U="",at!=null&&(U=at.replace(Se,"$&/")+"/"),x(D,w,U,"",function(_a){return _a})):D!=null&&(Un(D)&&(D=Qe(D,U+(D.key==null||c&&c.key===D.key?"":(""+D.key).replace(Se,"$&/")+"/")+at)),w.push(D)),1;at=0;var Ot=q===""?".":q+":";if(Sn(c))for(var xt=0;xt<c.length;xt++)q=c[xt],X=Ot+kn(q,xt),at+=x(q,w,U,X,D);else if(xt=dt(c),typeof xt=="function")for(c=xt.call(c),xt=0;!(q=c.next()).done;)q=q.value,X=Ot+kn(q,xt++),at+=x(q,w,U,X,D);else if(X==="object"){if(typeof c.then=="function")return x(zn(c),w,U,q,D);throw w=String(c),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return at}function E(c,w,U){if(c==null)return c;var q=[],D=0;return x(c,q,"","",function(X){return w.call(U,X,D++)}),q}function j(c){if(c._status===-1){var w=c._result;w=w(),w.then(function(U){(c._status===0||c._status===-1)&&(c._status=1,c._result=U)},function(U){(c._status===0||c._status===-1)&&(c._status=2,c._result=U)}),c._status===-1&&(c._status=0,c._result=w)}if(c._status===1)return c._result.default;throw c._result}var st=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},ct={map:E,forEach:function(c,w,U){E(c,function(){w.apply(this,arguments)},U)},count:function(c){var w=0;return E(c,function(){w++}),w},toArray:function(c){return E(c,function(w){return w})||[]},only:function(c){if(!Un(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return O.Activity=k,O.Children=ct,O.Component=$t,O.Fragment=_,O.Profiler=Z,O.PureComponent=jt,O.StrictMode=d,O.Suspense=T,O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,O.__COMPILER_RUNTIME={__proto__:null,c:function(c){return $.H.useMemoCache(c)}},O.cache=function(c){return function(){return c.apply(null,arguments)}},O.cacheSignal=function(){return null},O.cloneElement=function(c,w,U){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var q=qt({},c.props),D=c.key;if(w!=null)for(X in w.key!==void 0&&(D=""+w.key),w)!Ct.call(w,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&w.ref===void 0||(q[X]=w[X]);var X=arguments.length-2;if(X===1)q.children=U;else if(1<X){for(var at=Array(X),Ot=0;Ot<X;Ot++)at[Ot]=arguments[Ot+2];q.children=at}return En(c.type,D,q)},O.createContext=function(c){return c={$$typeof:P,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:L,_context:c},c},O.createElement=function(c,w,U){var q,D={},X=null;if(w!=null)for(q in w.key!==void 0&&(X=""+w.key),w)Ct.call(w,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(D[q]=w[q]);var at=arguments.length-2;if(at===1)D.children=U;else if(1<at){for(var Ot=Array(at),xt=0;xt<at;xt++)Ot[xt]=arguments[xt+2];D.children=Ot}if(c&&c.defaultProps)for(q in at=c.defaultProps,at)D[q]===void 0&&(D[q]=at[q]);return En(c,X,D)},O.createRef=function(){return{current:null}},O.forwardRef=function(c){return{$$typeof:I,render:c}},O.isValidElement=Un,O.lazy=function(c){return{$$typeof:H,_payload:{_status:-1,_result:c},_init:j}},O.memo=function(c,w){return{$$typeof:v,type:c,compare:w===void 0?null:w}},O.startTransition=function(c){var w=$.T,U={};$.T=U;try{var q=c(),D=$.S;D!==null&&D(U,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(Dt,st)}catch(X){st(X)}finally{w!==null&&U.types!==null&&(w.types=U.types),$.T=w}},O.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},O.use=function(c){return $.H.use(c)},O.useActionState=function(c,w,U){return $.H.useActionState(c,w,U)},O.useCallback=function(c,w){return $.H.useCallback(c,w)},O.useContext=function(c){return $.H.useContext(c)},O.useDebugValue=function(){},O.useDeferredValue=function(c,w){return $.H.useDeferredValue(c,w)},O.useEffect=function(c,w){return $.H.useEffect(c,w)},O.useEffectEvent=function(c){return $.H.useEffectEvent(c)},O.useId=function(){return $.H.useId()},O.useImperativeHandle=function(c,w,U){return $.H.useImperativeHandle(c,w,U)},O.useInsertionEffect=function(c,w){return $.H.useInsertionEffect(c,w)},O.useLayoutEffect=function(c,w){return $.H.useLayoutEffect(c,w)},O.useMemo=function(c,w){return $.H.useMemo(c,w)},O.useOptimistic=function(c,w){return $.H.useOptimistic(c,w)},O.useReducer=function(c,w,U){return $.H.useReducer(c,w,U)},O.useRef=function(c){return $.H.useRef(c)},O.useState=function(c){return $.H.useState(c)},O.useSyncExternalStore=function(c,w,U){return $.H.useSyncExternalStore(c,w,U)},O.useTransition=function(){return $.H.useTransition()},O.version="19.2.0",O}var wg;function hp(){return wg||(wg=1,cp.exports=ym()),cp.exports}var S=hp();const hm=mm(S),bm=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",opacity:"0.2"}),S.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M220.07,176.94C214.41,167.2,206,139.73,206,104a78,78,0,1,0-156,0c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H90.48a38,38,0,0,0,75,0H208a14,14,0,0,0,12.06-21.06ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218Zm81.71-33a1.9,1.9,0,0,1-1.7,1H48a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.87,170,62,139.69,62,104a66,66,0,1,1,132,0c0,35.68,8.14,65.95,15.71,79A2,2,0,0,1,209.71,185Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M218.35,178C212.58,168,204,140.13,204,104a76,76,0,1,0-152,0c0,36.13-8.59,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0H208A12,12,0,0,0,218.35,178ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220Zm83.45-34a3.91,3.91,0,0,1-3.44,2H48a3.91,3.91,0,0,1-3.44-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a68,68,0,1,1,136,0c0,35.31,8,65.17,15.44,78A4,4,0,0,1,211.45,186Z"}))]]),xm=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),S.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),zm=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M208,160H48l80-80Z",opacity:"0.2"}),S.createElement("path",{d:"M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"}))]]),vm=new Map([["bold",S.createElement(S.Fragment,null,S.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",S.createElement(S.Fragment,null,S.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),S.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",S.createElement(S.Fragment,null,S.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",S.createElement(S.Fragment,null,S.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",S.createElement(S.Fragment,null,S.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",S.createElement(S.Fragment,null,S.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),Nm=S.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Sl=S.forwardRef((h,B)=>{const{alt:_,color:d,size:Z,weight:L,mirrored:P,children:I,weights:T,...v}=h,{color:H="currentColor",size:k,weight:Q="regular",mirrored:dt=!1,...ft}=S.useContext(Nm);return S.createElement("svg",{ref:B,xmlns:"http://www.w3.org/2000/svg",width:Z??k,height:Z??k,fill:d??H,viewBox:"0 0 256 256",transform:P||dt?"scale(-1, 1)":void 0,...ft,...v},!!_&&S.createElement("title",null,_),I,T.get(L??Q))});Sl.displayName="IconBase";const Zg=S.forwardRef((h,B)=>S.createElement(Sl,{ref:B,...h,weights:bm}));Zg.displayName="BellIcon";const Sg=Zg,Og=S.forwardRef((h,B)=>S.createElement(Sl,{ref:B,...h,weights:xm}));Og.displayName="CaretDownIcon";const wm=Og,Hg=S.forwardRef((h,B)=>S.createElement(Sl,{ref:B,...h,weights:zm}));Hg.displayName="CaretUpIcon";const Sm=Hg,Dg=S.forwardRef((h,B)=>S.createElement(Sl,{ref:B,...h,weights:vm}));Dg.displayName="XIcon";const Em=Dg,Um="/gpma03/preview-20261117/site-announcement.json";function Eg(h,B){if(typeof h!="string"||!h.trim())return"";try{const _=new URL(h,B);return["http:","https:"].includes(_.protocol)?_.href:""}catch{return""}}function Mm(h,B){if(!h||h.enabled!==!0||typeof h.title!="string"||!h.title.trim())return null;const _=Eg(h.linkUrl,B);return{id:String(h.id||"site-announcement"),revision:String(h.revision||"1"),label:typeof h.label=="string"?h.label:"重要公告",title:h.title.trim(),body:typeof h.body=="string"?h.body:"",imageUrl:Eg(h.imageUrl,B),imageAlt:typeof h.imageAlt=="string"?h.imageAlt:"",linkUrl:_,linkText:_?typeof h.linkText=="string"&&h.linkText.trim()?h.linkText:"查看详情":"",frequency:h.frequency==="page"?"page":"session"}}const dp=h=>`gpma-announcement-dismissed:${h.id}:${h.revision}`;function qm(h,B,_=!1){if(!h)return!1;if(_||h.frequency==="page")return!0;try{return B.getItem(dp(h))!=="1"}catch{return!0}}async function _m(h){const B=await fetch(Um,{cache:"no-store",signal:h});return B.ok?Mm(await B.json(),location.origin):null}function Am(){const[h,B]=S.useState(!1),[_,d]=S.useState(null),[Z,L]=S.useState(!1),[P,I]=S.useState(!1);S.useEffect(()=>{const H=new URLSearchParams(location.search),k=H.get("noticePreview")==="1";if(!k&&(H.has("edit")||H.has("qa")))return;const Q=new AbortController;return _m(Q.signal).then(dt=>{let ft;try{ft=sessionStorage}catch{ft={getItem:()=>null}}if(k&&dt)try{ft.removeItem(dp(dt))}catch{}if(qm(dt,ft)){const qt=`gpma-announcement-seen:${dt.id}:${dt.revision}`;try{I(ft.getItem(qt)!=="1"),ft.setItem(qt,"1")}catch{I(!0)}d(dt)}}).catch(()=>{}),()=>Q.abort()},[]);function T(){try{sessionStorage.setItem(dp(_),"1")}catch{}d(null)}if(!_)return null;const v=_.linkUrl?"a":"div";return Ut.jsxs("aside",{className:`site-announcement${h?" mobile-notice-expanded":""}${P?" site-announcement-enter":""}`,"aria-labelledby":"site-announcement-title",children:[Ut.jsxs("div",{className:"site-announcement-header",children:[Ut.jsxs("button",{type:"button",className:"notice-mobile-toggle","aria-expanded":h,"aria-controls":"notice-mobile-content",onClick:()=>B(!h),children:[Ut.jsx(Sg,{size:17,"aria-hidden":"true"}),Ut.jsx("span",{children:h?"收起公告":_.label}),h?Ut.jsx(wm,{className:"notice-state-icon",size:20,"aria-hidden":"true"}):Ut.jsx(Sm,{className:"notice-state-icon",size:20,"aria-hidden":"true"})]}),Ut.jsxs("div",{children:[Ut.jsx(Sg,{size:17,"aria-hidden":"true"}),Ut.jsx("span",{className:"site-announcement-dot","aria-hidden":"true"}),Ut.jsx("span",{children:_.label})]}),Ut.jsx("button",{type:"button","aria-label":"关闭公告",onClick:T,children:Ut.jsx(Em,{size:20,"aria-hidden":"true"})})]}),Ut.jsxs(v,{id:"notice-mobile-content",className:"site-announcement-content",..._.linkUrl?{href:_.linkUrl}:{},children:[Ut.jsx("h2",{id:"site-announcement-title",children:_.title}),_.body&&Ut.jsx("div",{className:"site-announcement-body",children:_.body}),_.imageUrl&&!Z&&Ut.jsx("img",{className:"site-announcement-image",src:_.imageUrl,alt:_.imageAlt,onError:()=>L(!0)})]})]})}const Qm=[{id:"rules",label:"党章党规"},{id:"study",label:"学习资料"},{id:"news",label:"党建资讯"}],Tm={"/gpma03/preview-20261117/list-576a1b8f7d994abbb82a839a14b002bb.html":"rules","/gpma03/preview-20261117/list-d1758a5eca0a41daa92ddb3c6682d5d8.html":"rules","/gpma03/preview-20261117/list-d295645c8e4f49deac81ffb0e907b3f7.html":"study","/gpma03/preview-20261117/list-7243b744c05b42448f3fc4134e0ae3e2.html":"news"},Xm=[{id:"rules-1",category:"rules",title:"中国共产党章程",date:"2022-10-26",source:"新华社",publisher:"共产党员网",sourceUrl:"https://www.12371.cn/2022/10/26/ARTI1666788342244946.shtml",contentMode:"summary",isDemo:!1,paragraphs:["该页面刊载党的二十大部分修改后的党章，按总纲及各章呈现。可通过原文查阅党员、组织制度、基层组织、纪律等内容。"],attachments:[]},{id:"rules-2",category:"rules",title:"中国共产党纪律处分条例",date:"2023-12-27",source:"新华社",publisher:"共产党员网",sourceUrl:"https://www.12371.cn/2023/12/27/ARTI1703689211048182.shtml",contentMode:"summary",isDemo:!1,paragraphs:["原文展示2023年修订的条例，包含总则、分则及附则。此处仅作资料导读，具体条文与适用内容请查阅原文。"],attachments:[]},{id:"rules-3",category:"rules",title:"《中国共产党党员教育管理工作条例》系列图解",date:"2019-05-22",source:"共产党员网",publisher:"共产党员网",sourceUrl:"https://www.12371.cn/2019/05/22/ARTI1558511805563225.shtml",contentMode:"summary",isDemo:!1,paragraphs:["该页面汇集条例的图解资料，帮助读者了解党员教育管理相关内容。完整图解与配套资料可从原文页面查看。"],attachments:[]},{id:"study-1",category:"study",title:"学习资料 | 中央八项规定和中央八项规定精神",date:"2025-04-03",source:"共产党员网",publisher:"共产党员网",sourceUrl:"https://www.12371.cn/2025/03/31/ARTI1743412261487795.shtml",contentMode:"summary",isDemo:!1,paragraphs:["文章梳理中央八项规定与其精神的含义，并结合有关资料介绍作风建设相关要求。可作为专题学习的基础导读。"],attachments:[]},{id:"study-2",category:"study",title:"学习资料 | 中央八项规定精神的核心和实质",date:"2025-04-30",source:"共产党员网",publisher:"共产党员网",sourceUrl:"https://www.12371.cn/2025/04/30/ARTI1746000613628818.shtml",contentMode:"summary",isDemo:!1,paragraphs:["文章介绍中央八项规定与其精神之间的关系，并从作风建设角度解释相关要求。详细论述见来源页面。"],attachments:[]},{id:"study-3",category:"study",title:"学习资料 | 中央八项规定和“四风”问题",date:"2025-04-30",source:"共产党员网",publisher:"共产党员网",sourceUrl:"https://www.12371.cn/2025/04/30/ARTI1746000334314802.shtml",contentMode:"summary",isDemo:!1,paragraphs:["文章围绕中央八项规定与纠治“四风”的联系展开，介绍有关概念及作风建设背景，便于开展专题学习。"],attachments:[]},{id:"news-1",category:"news",title:"以好作风护航新征程——深入贯彻中央八项规定精神学习教育取得实实在在的成效",date:"2025-09-01",source:"人民日报",publisher:"共产党员网",sourceUrl:"https://www.12371.cn/2025/08/31/ARTI1756607065402321.shtml",contentMode:"summary",isDemo:!1,paragraphs:["这篇报道回顾学习教育相关实践，介绍理论学习、问题整改及推动工作等方面的情况。全文及具体案例见原文。"],attachments:[]},{id:"news-2",category:"news",title:"用铁规矩锻造好作风——全党开展深入贯彻中央八项规定精神学习教育综述",date:"2025-08-29",source:"新华社",publisher:"共产党员网",sourceUrl:"https://www.12371.cn/2025/08/29/ARTI1756468677165610.shtml",contentMode:"summary",isDemo:!1,paragraphs:["报道对学习教育的开展情况进行梳理，涉及学习研讨、问题查摆、整改落实及基层实践等内容。此处作为外部党建资讯导读。"],attachments:[]},{id:"news-3",category:"news",title:"从严从实推进深入贯彻中央八项规定精神学习教育",date:"2025-05-16",source:"求是",publisher:"共产党员网",sourceUrl:"https://www.12371.cn/2025/05/16/ARTI1747360513888765.shtml",contentMode:"summary",isDemo:!1,paragraphs:["文章讨论学习教育的推进要求，涉及理论学习、问题查找、整改以及组织落实等方面。完整论述请阅读原文。"],attachments:[]}].map(h=>({...h,contentMode:"reading-reference",sections:h.category==="rules"?[{heading:"一、学习内容",paragraphs:[h.paragraphs[0],"阅读这类资料时，可以先了解文件名称、发布背景与章节结构，再结合具体条目进行学习。涉及条文内容时，应注意正文、说明和配套解读之间的区别，准确理解相互关系。"]},{heading:"二、阅读要点",paragraphs:["学习要点一：把握文件的整体结构。围绕主要章节梳理内容脉络，将基本要求与具体规定联系起来，避免只摘取个别词句而忽略上下文。","学习要点二：区分不同内容的作用。对原则性要求、具体程序以及配套说明分别作出记录，遇到不明确的表述时结合原文件进一步核对。"]},{heading:"三、学习记录与交流",paragraphs:["学习过程中可结合工作和组织生活整理问题清单，通过集中研读、交流讨论和个人复习加深理解。记录应围绕学习内容本身展开，避免把学习笔记当作正式文件。","交流时可以选择具有代表性的章节，说明自己的理解依据和需要进一步学习的问题，形成有针对性的学习记录。"]}]:h.category==="study"?[{heading:"一、资料概览",paragraphs:[h.paragraphs[0],"专题学习可从主要概念、内容背景与实践要求三个方面展开。先通读材料，再围绕关键问题整理笔记，有助于形成清晰的学习脉络。"]},{heading:"二、重点阅读",paragraphs:["学习要点一：理解概念与背景。将关键词放回完整语境中，关注不同表述之间的联系，梳理文章提出问题、分析问题和说明要求的顺序。","学习要点二：结合资料开展交流。围绕共同关心的问题安排讨论，区分材料中的事实、论述与个人学习体会，避免用片段代替整体理解。"]},{heading:"三、学习方法",paragraphs:["个人学习可采用通读、标注、归纳与复习相结合的方式。集体学习则可先梳理讨论提纲，再交流重点与疑问，形成便于后续复习的学习记录。","学习记录宜简明、准确，明确资料名称、学习时间和讨论主题。对于尚需核实的内容，保留问题并继续查阅相关资料。"]}]:[{heading:"一、报道概览",paragraphs:[h.paragraphs[0],"阅读相关报道时，可以先把握文章关注的主题，再梳理文中介绍的工作背景与实践内容，将报道信息与个人阅读体会分别记录。"]},{heading:"二、重点关注",paragraphs:["阅读要点一：关注工作与学习的联系。结合报道中呈现的不同方面，理解学习、交流、实践与总结之间的衔接，形成完整的阅读认识。","阅读要点二：关注具体做法的背景。对不同地区和单位的情况，应结合其工作条件理解，避免将个别案例直接理解为适用于所有场景的统一安排。"]},{heading:"三、交流与思考",paragraphs:["阅读后可围绕文章主题组织交流，整理值得继续关注的问题。讨论应以文章已经介绍的信息为基础，将事实描述与个人建议清楚区分。","对于需要进一步了解的内容，可以继续查阅相关报道和公开资料，补充背景信息，形成连续、完整的阅读记录。"]}]})).sort((h,B)=>B.date.localeCompare(h.date)),km={"/gpma03/preview-20261117/list-61710a1a3f9e4f9d99f090f304fcbcd9.html":"/gpma03/preview-20261117/?page=about","/gpma03/preview-20261117/list-e5d0c88d529a4577b4a19e9ea37342f9.html":"/gpma03/preview-20261117/?page=about","/gpma03/preview-20261117/list-1da3482284c341a79ac38cdbd9256141.html":"/gpma03/preview-20261117/?page=about&section=organization","/gpma03/preview-20261117/list-6d6f3326129c4ae59759411ba40acb41.html":"/gpma03/preview-20261117/?page=about&section=charter","/gpma03/preview-20261117/list-b6675756ebb2491e8684223a6d67abf7.html":"/gpma03/preview-20261117/?page=contact","/gpma03/preview-20261117/list-68a76d59f7b1406abb6804ea791a5742.html":"/gpma03/preview-20261117/?page=integrated","/gpma03/preview-20261117/list-7daa1415db184cdab9da308e250cc83a.html":"/gpma03/preview-20261117/?page=news","/gpma03/preview-20261117/list-88f24ff9407045fb940bf906da4b610d.html":"/gpma03/preview-20261117/?page=notices","/gpma03/preview-20261117/list-a514fd06345449f7a4621261c53aa652.html":"/gpma03/preview-20261117/?page=notices&section=association","/gpma03/preview-20261117/list-8a8e7bf35173455eb0555f0ec3bc96d2.html":"/gpma03/preview-20261117/?page=news&section=industry","/gpma03/preview-20261117/list-296419fb744b43aa90a19bfc9892d218.html":"/gpma03/preview-20261117/?page=news&section=policyLaw","/gpma03/preview-20261117/list-8d99c44d052a4bf78e09571989ba765a.html":"/gpma03/preview-20261117/?page=news&section=policyLocal","/gpma03/preview-20261117/list-4223e9341d6e4e4b93fb306d39fe1ffd.html":"/gpma03/preview-20261117/?page=news&section=essays","/gpma03/preview-20261117/list-fae988cea13d4d03afe42e75dc8c673e.html":"/gpma03/preview-20261117/?page=application-catalog","/gpma03/preview-20261117/list-c3119e4fac98490180c5b50dea906af9.html":"/gpma03/preview-20261117/?page=application-catalog","/gpma03/preview-20261117/list-90c6c37730bb4a33b51bdaf423e64ae4.html":"/gpma03/preview-20261117/?page=member","/gpma03/preview-20261117/list-2c2b5068bb144c59bd01dff434f64f45.html":"/gpma03/preview-20261117/?page=experts","/gpma03/preview-20261117/list-576a1b8f7d994abbb82a839a14b002bb.html":"/gpma03/preview-20261117/?page=party","/gpma03/preview-20261117/list-d1758a5eca0a41daa92ddb3c6682d5d8.html":"/gpma03/preview-20261117/?page=party&section=rules","/gpma03/preview-20261117/list-d295645c8e4f49deac81ffb0e907b3f7.html":"/gpma03/preview-20261117/?page=party&section=study","/gpma03/preview-20261117/list-7243b744c05b42448f3fc4134e0ae3e2.html":"/gpma03/preview-20261117/?page=party&section=news","/gpma03/preview-20261117/list-ba99d6c97a6442e8b0c8e4cc1403e83a.html":"/gpma03/preview-20261117/?page=downloads","/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html":"/gpma03/preview-20261117/?page=award-catalog&section=science","/gpma03/preview-20261117/list-01cf3c5b61754611afe25db96c18e19c.html":"/gpma03/preview-20261117/?page=award-catalog&section=science","/gpma03/preview-20261117/list-905f929d1909434bb94c2e88f48c83bf.html":"/gpma03/preview-20261117/?page=award-catalog&section=evaluation","/gpma03/preview-20261117/list-ee75bf1af02c4e37bb9e516138f15ae8.html":"/gpma03/preview-20261117/?page=award-catalog&section=excellence","/gpma03/preview-20261117/list-80871392affa4f489813e8eeb608dd9f.html":"/gpma03/preview-20261117/?page=downloads&keyword=团体标准"},Bm=JSON.parse('{"/gpma03/preview-20261117/list-01cf3c5b61754611afe25db96c18e19c.html":{"title":"科技奖-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html\\">评奖评优</a></span><span style=\\"display:contents\\"><span>›</span><strong>科技奖</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html\\">评奖评优</a></h2><nav><a href=\\"/gpma03/preview-20261117/list-01cf3c5b61754611afe25db96c18e19c.html\\" class=\\"is-active\\">科技奖</a><a href=\\"/gpma03/preview-20261117/list-905f929d1909434bb94c2e88f48c83bf.html\\">科技评价</a><a href=\\"/gpma03/preview-20261117/list-ee75bf1af02c4e37bb9e516138f15ae8.html\\">评优</a></nav></aside><section class=\\"news-page-content\\"><header><h1>科技奖</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div><template id=\\"B:1\\"></template></main>"},"/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html":{"title":"科技奖-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html\\">评奖评优</a></span><span style=\\"display:contents\\"><span>›</span><strong>科技奖</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html\\">评奖评优</a></h2><nav><a href=\\"/gpma03/preview-20261117/list-01cf3c5b61754611afe25db96c18e19c.html\\" class=\\"is-active\\">科技奖</a><a href=\\"/gpma03/preview-20261117/list-905f929d1909434bb94c2e88f48c83bf.html\\">科技评价</a><a href=\\"/gpma03/preview-20261117/list-ee75bf1af02c4e37bb9e516138f15ae8.html\\">评优</a></nav></aside><section class=\\"news-page-content\\"><header><h1>科技奖</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div><template id=\\"B:1\\"></template></main>"},"/gpma03/preview-20261117/list-1df896b0f23e42bf910ec0d01e14e9ed.html":{"title":"团标展示-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html\\">团体标准</a></span><span style=\\"display:contents\\"><span>›</span><strong>团标展示</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html\\">团体标准</a></h2><nav><a href=\\"/gpma03/preview-20261117/list-f38e30fffe7d465d9aa4f8a8bf890201.html\\">团标动态</a><a href=\\"/gpma03/preview-20261117/list-1df896b0f23e42bf910ec0d01e14e9ed.html\\" class=\\"is-active\\">团标展示</a></nav></aside><section class=\\"news-page-content\\"><header><h1>团标展示</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div><template id=\\"B:1\\"></template></main>"},"/gpma03/preview-20261117/list-3acb1864f37841278492828abb264da7.html":{"title":"分支机构-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/?page=about\\">关于协会</a></span><span style=\\"display:contents\\"><span>›</span><strong>分支机构</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/?page=about\\">关于协会</a></h2><nav><a href=\\"/gpma03/preview-20261117/?page=about\\">协会简介</a><a href=\\"/gpma03/preview-20261117/?page=about&amp;section=organization\\">组织架构</a><a href=\\"/gpma03/preview-20261117/list-3acb1864f37841278492828abb264da7.html\\" class=\\"is-active\\">分支机构</a><a href=\\"/gpma03/preview-20261117/?page=about&amp;section=charter\\">协会章程</a><a href=\\"/gpma03/preview-20261117/?page=contact\\">联系我们</a></nav></aside><section class=\\"news-page-content\\"><header><h1>分支机构</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div><template id=\\"B:1\\"></template></main>"},"/gpma03/preview-20261117/list-80871392affa4f489813e8eeb608dd9f.html":{"title":"文件下载-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html\\">团体标准</a></span><span style=\\"display:contents\\"><span>›</span><strong>文件下载</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html\\">团体标准</a></h2><nav><a href=\\"/gpma03/preview-20261117/list-f38e30fffe7d465d9aa4f8a8bf890201.html\\">团标动态</a><a href=\\"/gpma03/preview-20261117/list-1df896b0f23e42bf910ec0d01e14e9ed.html\\">团标展示</a></nav></aside><section class=\\"news-page-content\\"><header><h1>文件下载</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div></main>"},"/gpma03/preview-20261117/list-905f929d1909434bb94c2e88f48c83bf.html":{"title":"科技评价-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html\\">评奖评优</a></span><span style=\\"display:contents\\"><span>›</span><strong>科技评价</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html\\">评奖评优</a></h2><nav><a href=\\"/gpma03/preview-20261117/list-01cf3c5b61754611afe25db96c18e19c.html\\">科技奖</a><a href=\\"/gpma03/preview-20261117/list-905f929d1909434bb94c2e88f48c83bf.html\\" class=\\"is-active\\">科技评价</a><a href=\\"/gpma03/preview-20261117/list-ee75bf1af02c4e37bb9e516138f15ae8.html\\">评优</a></nav></aside><section class=\\"news-page-content\\"><header><h1>科技评价</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div></main>"},"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html":{"title":"团标动态-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html\\">团体标准</a></span><span style=\\"display:contents\\"><span>›</span><strong>团标动态</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html\\">团体标准</a></h2><nav><a href=\\"/gpma03/preview-20261117/list-f38e30fffe7d465d9aa4f8a8bf890201.html\\" class=\\"is-active\\">团标动态</a><a href=\\"/gpma03/preview-20261117/list-1df896b0f23e42bf910ec0d01e14e9ed.html\\">团标展示</a></nav></aside><section class=\\"news-page-content\\"><header><h1>团标动态</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div></main>"},"/gpma03/preview-20261117/list-d9c647f792d54777860c6795aced1dea.html":{"title":"会员动态-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/?page=application-catalog\\">会员服务</a></span><span style=\\"display:contents\\"><span>›</span><strong>会员动态</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/?page=application-catalog\\">会员服务</a></h2><nav><a href=\\"/gpma03/preview-20261117/?page=application-catalog\\">会员申请</a><a href=\\"/gpma03/preview-20261117/?page=member\\">会员风采</a><a href=\\"/gpma03/preview-20261117/list-d9c647f792d54777860c6795aced1dea.html\\" class=\\"is-active\\">会员动态</a></nav></aside><section class=\\"news-page-content\\"><header><h1>会员动态</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div><template id=\\"B:1\\"></template></main>"},"/gpma03/preview-20261117/list-ee75bf1af02c4e37bb9e516138f15ae8.html":{"title":"评优-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html\\">评奖评优</a></span><span style=\\"display:contents\\"><span>›</span><strong>评优</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/list-075b726e6a45414ca0c45f3bea3cb0c3.html\\">评奖评优</a></h2><nav><a href=\\"/gpma03/preview-20261117/list-01cf3c5b61754611afe25db96c18e19c.html\\">科技奖</a><a href=\\"/gpma03/preview-20261117/list-905f929d1909434bb94c2e88f48c83bf.html\\">科技评价</a><a href=\\"/gpma03/preview-20261117/list-ee75bf1af02c4e37bb9e516138f15ae8.html\\" class=\\"is-active\\">评优</a></nav></aside><section class=\\"news-page-content\\"><header><h1>评优</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div><template id=\\"B:1\\"></template></main>"},"/gpma03/preview-20261117/list-f38e30fffe7d465d9aa4f8a8bf890201.html":{"title":"团标动态-广东省项目管理协会","html":"<main class=\\"sections-main\\"><div class=\\"news-page-main\\"><nav class=\\"news-breadcrumb\\" aria-label=\\"面包屑\\"><a href=\\"/gpma03/preview-20261117/\\">首页</a><span style=\\"display:contents\\"><span>›</span><a href=\\"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html\\">团体标准</a></span><span style=\\"display:contents\\"><span>›</span><strong>团标动态</strong></span></nav><div class=\\"news-page-layout\\"><aside class=\\"news-sidebar\\"><h2><a href=\\"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html\\">团体标准</a></h2><nav><a href=\\"/gpma03/preview-20261117/list-f38e30fffe7d465d9aa4f8a8bf890201.html\\" class=\\"is-active\\">团标动态</a><a href=\\"/gpma03/preview-20261117/list-1df896b0f23e42bf910ec0d01e14e9ed.html\\">团标展示</a></nav></aside><section class=\\"news-page-content\\"><header><h1>团标动态</h1></header><div class=\\"under-construction\\"><img src=\\"/gpma03/preview-20261117/assets/migrated/9b5c6c33fcdd44ea.svg\\" alt=\\"\\"><p><b>该功能正在建设中</b>敬请期待，我们会尽快上线</p></div></section></div></div><template id=\\"B:1\\"></template></main>"}}'),yp={aliases:km,pages:Bm},Gm=[{id:"043c1fd4028f4c3c8411092d98ec7a5e",title:"广东省项目管理协会机电工程委员会 2026年下半年工作全体会议在广州召开",date:"2026-08-11",tag:"会议",cover:"/gpma03/preview-20261117/assets/notices/notice-01-01.jpg",hasCover:!0,summary:"广东省项目管理协会机电工程委员会 2026年下半年工作全体会议在广州召开 2026年8月6日下午，广东省项目管理协会机电工程委员会（以下简称“委员会”）2026年下半年工作全体会议在广州举行，会议由委员会主办，广州市世博",content:`<section class="_editor" style="margin-bottom: unset;">\r
	<p style="text-align: center;">\r
		<strong><span style="font-size: 22px;">广东省项目管理协会机电工程委员会</span></strong></p>\r
	<p style="text-align: center;">\r
		<strong><span style="font-size: 22px;">2026年下半年工作全体会议在广州召开</span></strong></p>\r
</section>\r
<section class="_editor" data-style-id="74134" data-support="96编辑器" style="margin-bottom: unset;">\r
	<section data-align="title" style="display: flex; align-items: center; margin-bottom: 12px;">\r
		<section style="width: 1.5em; margin-left: 6px; margin-bottom: unset;">\r
			<p>\r
				&nbsp;</p>\r
		</section>\r
	</section>\r
	<section style="background-color: rgb(232, 249, 248); border-left: 3px solid rgb(36, 202, 198); border-radius: 0px 6px 6px 0px; padding: 18px 14px; margin-right: 12px; box-sizing: border-box; margin-bottom: unset;">\r
		<p style="letter-spacing: 0px; line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2em;">\r
			2026年8月6日下午，广东省项目管理协会机电工程委员会（以下简称&ldquo;委员会&rdquo;）2026年下半年工作全体会议在广州举行，会议由委员会主办，广州市世博机电设备工程有限公司、美的楼宇科技广州中心协办。广东省项目管理协会会长赖铭华、顾问潘奇俊、副秘书长戴晓伟，委员会主任、广东省建筑设计研究院集团股份有限公司集团给排水总工陈伟雄及各会员单位代表出席会议。会议由委员会副主任陈耿权主持。</p>\r
		<p style="letter-spacing: 0px; font-size: 15px; line-height: 1.75em; margin-bottom: 16px; text-align: center;">\r
			<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-01-01.jpg" style="width: 684px;" /></p>\r
		<p style="letter-spacing: 0px; line-height: 2; font-size: 15px;">\r
			&nbsp;</p>\r
		<p style="letter-spacing: 0px; line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2em;">\r
			赖铭华会长在会上强调，2026年是协会深化服务、拓宽平台、提升影响力的关键之年。委员会要切实增强责任担当，紧扣标准研制、技术创新与会员服务等核心任务，精准对接行业发展实际需求。针对团体标准研制工作，他进一步指出，要深刻认识标准制定的重要意义，准确把握其技术表达形式与正向实施效果，同时保持编制团队相对稳定，确保标准工作的专业水准与持续推进。</p>\r
		<p style="letter-spacing: 0px; line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2em;">\r
			陈伟雄主任在致辞中指出，当前机电行业正处于数字化、智能化转型关键期，委员会将紧扣协会年度工作部署，发挥平台纽带作用，扎实推进机电领域标准化建设，赋能行业高质量发展。</p>\r
		<p style="letter-spacing: 0px; line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2em;">\r
			会议重点研讨了《工程项目机电产品运行使用效果评价标准》团体标准编制工作。与会代表就分工方案、编委会组建、成员职责、进度节点及推进机制等事项进行深入讨论，明确了工作框架与实施路径。该标准的制定将为机电产品运行效果提供科学、规范的评价依据，填补行业相关领域标准空白，有利于提升产品运行效能，促进行业规范化与高质量发展。</p>\r
		<p style="letter-spacing: 0px; font-size: 15px; line-height: 1.75em; margin-bottom: 16px; text-align: center;">\r
			<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-01-02.jpg" style="width: 684px;" /></p>\r
		<p style="letter-spacing: 0px; line-height: 2; font-size: 15px;">\r
			&nbsp;</p>\r
		<p style="letter-spacing: 0px; line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2em;">\r
			在专题分享环节，陈伟雄主任作《AI大模型在机电行业的应用全景与落地路径》报告，系统解析AI大模型在机电产品研发设计、运维管理及提质增效中的应用场景与技术优势，并结合落地案例分享前沿成果与实践经验。他指出，AI大模型正加速向工业制造渗透，机电行业迎来数字化升级窗口期，呼吁企业把握技术机遇，积极探索AI与机电业务的深度融合，加快培育新质生产力。</p>\r
		<p style="letter-spacing: 0px; line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2em;">\r
			会员交流环节中，与会代表围绕委员会2026年下半年重点工作安排集中研讨，就年度目标与重点任务广泛征集意见，代表们积极建言，为下半年工作推进凝聚共识、夯实基础。</p>\r
		<p style="letter-spacing: 0px; font-size: 15px; line-height: 1.75em; margin-bottom: 16px; text-align: center;">\r
			<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-01-03.jpg" style="width: 684px;" /></p>\r
		<p style="letter-spacing: 0px; line-height: 2; font-size: 15px;">\r
			&nbsp;</p>\r
		<p style="letter-spacing: 0px; font-size: 15px; line-height: 1.75em; margin-bottom: 16px; text-indent: 2.26667em;">\r
			<span style="font-size: 17px;">本次会议圆满完成了团体标准建设、技术前沿研讨及工作部署等各项议程，标志着委员会在标准化引领、创新驱动和行业协同方面迈出坚实一步。委员会将以此次会议为契机，持续深化标准建设、推动AI技术应用、强化会员服务与行业协作，为广东省项目管理行业高质量发展提供有力支撑。</span></p>\r
	</section>\r
	<section style="width: 2em; margin-left: auto; margin-top: -20px; margin-right: 0px; z-index: 2; margin-bottom: unset;">\r
		<p>\r
			&nbsp;</p>\r
	</section>\r
</section>\r
<section class="_editor" style="margin-bottom: unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>`},{id:"22297d0e9b274dc895f222efa5581d86",title:"关于《建设工程质量检测项目管理规程》 等5项团体标准立项的公告",date:"2026-08-04",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于《建设工程质量检测项目管理规程》 等5项团体标准立项的公告 关于《建设工程质量检测项目管理规程》 等5项团体标准立项的公告 各有关单位: 根据《广东省项目管理协会标准化管理办法》相关规定，经本协会组织专家评审，决定对",content:`<p style="line-height: 1.75em; margin-bottom: 16px; text-align: center; font-size: 18px;">\r
	<span style="font-size: 22px;"><strong>关于《建设工程质量检测项目管理规程》</strong></span></p>\r
<p style="line-height: 1.75em; margin-bottom: 16px; text-align: center; font-size: 18px;">\r
	<span style="font-size: 22px;"><strong>等5项团体标准立项的公告</strong></span></p>\r
<p>\r
	&nbsp;</p>\r
<section class="_editor" data-style-id="74164" data-support="96编辑器" style="margin-bottom: unset;">\r
	<section data-width="80%" style="display: flex; flex-direction: row; justify-content: space-between; width: 581.594px; margin: 0px auto -6px;">\r
		<section style="width: 6px; height: 18px; border-radius: 3px; background-color: rgb(250, 37, 5); box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
			&nbsp;</section>\r
		<section style="width: 6px; height: 18px; border-radius: 3px; background-color: rgb(250, 37, 5); box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
			&nbsp;</section>\r
	</section>\r
	<section data-width="100%" style="background-color: rgb(168, 211, 255); border-radius: 8px; padding: 12px 10px; width: 727px; box-sizing: border-box; margin-bottom: unset;">\r
		<section data-width="100%" style="background-color: rgb(255, 255, 255); border-radius: 8px; padding: 18px 14px; width: 707px; box-sizing: border-box; margin-bottom: unset;">\r
			<p style="line-height: 1.75em; margin-bottom: 16px; text-align: center; font-size: 18px;">\r
				<strong>关于《建设工程质量检测项目管理规程》</strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; text-align: center; font-size: 18px;">\r
				<strong>等5项团体标准立项的公告</strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px;">\r
				&nbsp;</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px;">\r
				各有关单位:</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				根据《广东省项目管理协会标准化管理办法》相关规定，经本协会组织专家评审，决定对《建设工程质量检测项目管理规程》、《工程项目机电产品运行使用效果评价标准》、《广东省建设项目市场计价规范》、《广东省建设项目多层级造价指标计价规范》、《建设工程项目全过程精细化管理规范》5项团体标准予以立项。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				请牵头起草单位严格按照相关要求抓紧落实，制定实施计划，按期保质完成所承担的团体标准编制任务。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
				特此公告。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
				联系人:谢添雄，18720227761。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px;">\r
				&nbsp;</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px;">\r
				&nbsp;</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; text-align: right; font-size: 17px;">\r
				广东省项目管理协会</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; text-align: right; font-size: 17px;">\r
				2026年7月24日</p>\r
			<p style="letter-spacing: 0px; line-height: 2;">\r
				&nbsp;</p>\r
		</section>\r
	</section>\r
</section>\r
<section class="_editor" style="margin-bottom: unset;">\r
	<p>\r
		&nbsp;</p>\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<section class="_editor" data-style-id="73331" data-support="96编辑器" style="margin-bottom: unset;">\r
	<section data-width="100%" style="display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 5px; border-bottom: 1px solid rgb(62, 176, 255); width: 727px; box-sizing: border-box; margin-bottom: unset;">\r
		<section style="display: flex; align-items: center; margin-bottom: unset;">\r
			<section style="background-image: linear-gradient(90deg, rgb(58, 222, 212), rgb(62, 176, 255)); width: 8px; height: 16px; margin-right: 3px; border-radius: 2px; box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
				&nbsp;</section>\r
			<section style="background-image: linear-gradient(90deg, rgb(58, 222, 212), rgb(62, 176, 255)); width: 4px; height: 16px; margin-right: 10px; border-radius: 2px; opacity: 0.6; box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
				&nbsp;</section>\r
			<p style="font-size: 18px;">\r
				<strong>原 件</strong></p>\r
		</section>\r
	</section>\r
</section>\r
<p>\r
	&nbsp;</p>\r
<p>\r
	<a href="/gpma03/preview-20261117/assets/notices/notice-02-attachment-01.pdf"><span style="font-size:18px;">粤项管协函〔2026〕8号-关于《建设工程质量检测项目管理规程》等5项团体标准立项的公告</span></a></p>\r
<p>\r
	&nbsp;</p>\r
<p>\r
	&nbsp;</p>\r
<p>\r
	&nbsp;</p>`},{id:"a7257a3a8ac84e1fa8eb57b49b94868e",title:"《建设工程质量检测项目管理规程》等5项团体标准立项评审会顺利召开",date:"2026-07-21",tag:"会议",cover:"/gpma03/preview-20261117/assets/notices/notice-03-01.jpg",hasCover:!0,summary:"《建设工程质量检测项目管理规程》 等5项团体标准立项评审会顺利召开 7月16日，广东省项目管理协会（下称“协会”）在广州市天河区保利中盈大厦组织召开了《建设工程质量检测项目管理规程》等5项团体标准立项评审会。会议由协会副",content:`<p style="text-align: center;">\r
	<strong><span style="font-size:22px;">《建设工程质量检测项目管理规程》</span></strong></p>\r
<p style="text-align: center;">\r
	<strong><span style="font-size:22px;">等5项团体标准立项评审会顺利召开</span></strong></p>\r
<p>\r
	&nbsp;</p>\r
<section class="_editor" data-style-id="72835" data-support="96编辑器" style="margin-bottom:unset;">\r
	<section data-width="100%" style="border:2px solid rgb(152, 219, 87);border-radius:8px;padding:20px 15px 15px;width:100%;box-sizing:border-box;margin-bottom:unset;">\r
		<p style="color:#000000;line-height:2;text-align:justify;font-size:17px;text-indent:2.11765em;">\r
			7月16日，广东省项目管理协会（下称&ldquo;协会&rdquo;）在广州市天河区保利中盈大厦组织召开了《建设工程质量检测项目管理规程》等5项团体标准立项评审会。会议由协会副秘书长戴晓伟主持。广东省项目管理协会赖铭华会长、评审专家组及各团体标准申请单位代表参加会议。</p>\r
		<p style="color: rgb(0, 0, 0); line-height: 2; text-align: center;">\r
			<span style="font-size:15px;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-03-01.jpg" style="width: 100%;" /></span></p>\r
		<p style="color: rgb(0, 0, 0); line-height: 2; text-align: center;">\r
			<span style="font-size:15px;">会议现场</span></p>\r
		<p style="color:#000000;line-height:2;text-align:justify;font-size:17px;text-indent:2.11765em;margin-top:24px;">\r
			赖铭华会长在会上发表指导讲话。他强调，立项仅为起点，标准落地见效、赋能行业提质升级才是最终目标，必须摒弃&ldquo;重立项、轻落地&rdquo;的形式化思维，构建闭环工作体系，切实发挥标准的实用价值。同时，在编制、审核及实施全流程中严守质量关卡，从严把控标准的专业性、创新性与实操性，杜绝形式化和无效化成果，夯实行业标准化建设质量根基。</p>\r
		<p style="color: rgb(0, 0, 0); line-height: 2; text-align: center;">\r
			<span style="font-size:15px;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-03-02.jpg" style="width: 100%;" /></span></p>\r
		<p style="color: rgb(0, 0, 0); line-height: 2; text-align: center;">\r
			<span style="font-size:15px;">赖铭华会长讲话</span></p>\r
		<p style="color: rgb(0, 0, 0); line-height: 2; text-align: justify; text-indent: 2.57143em; margin-top: 24px;">\r
			<span style="font-size:17px;">会上，各标准牵头单位依次就申报项目的立项背景、必要性、可行性、核心内容、创新亮点及编制工作计划进行了详细汇报。与会专家围绕拟立项的5项团体标准展开深入研讨，对各项标准的立项意义与研发基础给予了充分肯定，同时结合行业发展现状与标准编制规范，对标准的内容框架、技术指标、验证方案等关键要点提出了重点指导意见。经过充分研讨论证，专家组一致认为，本次申报项目资料基本齐全，立项标准符合国家产业政策导向，所申报的团体标准均满足立项条件，同意全部通过立项审查。</span></p>\r
		<p style="color: rgb(0, 0, 0); line-height: 2; text-align: justify; text-indent: 2.57143em; margin-top: 24px;">\r
			<span style="font-size:17px;">最后，潘奇俊顾问做会议总结，他强调，本次会议顺利通过的团体标准立项申请，为行业标准化体系建设再添新成果。希望各团体标准牵头单位根据专家组提出的针对性优化指导意见，进一步强化标准的必要性与创新性，深挖行业发展需求，凸显技术与模式创新，规避内容同质化问题，紧密贴合项目管理核心特性，做实做好精准规范、定位清晰的高质量团体标准。</span></p>\r
		<p style="color: rgb(0, 0, 0); line-height: 2; text-align: center;">\r
			<span style="font-size:15px;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-03-03.jpg" style="width: 100%;" /></span></p>\r
		<p style="color: rgb(0, 0, 0); line-height: 2; text-align: center;">\r
			<span style="font-size:15px;">潘奇俊顾问总结讲话</span></p>\r
		<p style="color: rgb(0, 0, 0); line-height: 2; text-align: justify; text-indent: 2.57143em; margin-top: 24px;">\r
			<span style="font-size:17px;">本次评审会为后续标准研制与落地实施奠定了工作基础。以此为契机，协会将健全标准编制全过程跟踪督导机制，强化进度管控与质量把关，确保立项成果切实转化为实用效能。下一步，协会将持续完善闭环管理体系，推动标准化建设在破解行业痛点、引领创新升级中发挥实质性作用，为行业高质量、规范化、可持续发展提供坚实支撑。</span></p>\r
	</section>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>`},{id:"8d50498f46444b9394746081fb71fff7",title:"深耕精细运营 聚力协同创新——我会赴城规监理走访交流",date:"2026-07-21",tag:"会议",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"深耕精细运营 聚力协同创新——我会赴城规监理走访交流",content:"<p>深耕精细运营 聚力协同创新——我会赴城规监理走访交流</p>"},{id:"4b8ab4c5f91c46a589415e57898253a8",title:"会企联动深调研，共谋全咨发展新路径 ——我会赴广东省监理走访交流",date:"2026-06-22",tag:"会议",cover:"/gpma03/preview-20261117/assets/notices/notice-05-01.jpg",hasCover:!0,summary:"会企联动深调研，共谋全咨发展新路径 ——我会赴广东省监理走访交流 2026年6月16日下午，广东省项目管理协会顾问潘奇俊，数智监理委员会主任、广东炫诚工程管理有限公司常务副总经理王倩倩，常务副会长单位永道咨询工程有限公司",content:`<h1 class="rich_media_title " id="activity-name" style="white-space-collapse: collapse; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 14px; padding: 0px; outline: 0px; font-size: 22px; color: rgba(0, 0, 0, 0.9); line-height: 1.4; user-select: text; font-family: &quot;PingFang SC NEW&quot;, system-ui, -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 0.544px; text-align: center;">\r
	会企联动深调研，共谋全咨发展新路径</h1>\r
<h1 class="rich_media_title " style="white-space-collapse: collapse; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 14px; padding: 0px; outline: 0px; font-size: 22px; color: rgba(0, 0, 0, 0.9); line-height: 1.4; user-select: text; font-family: &quot;PingFang SC NEW&quot;, system-ui, -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 0.544px; text-align: center;">\r
	&mdash;&mdash;我会赴广东省监理走访交流</h1>\r
<p>\r
	&nbsp;</p>\r
<section class="_editor" style="margin-bottom: unset;">\r
	<section data-color="#1e9be8" style="margin-top: 10px; margin-bottom: 10px; letter-spacing: 0.578px; font-size: 16px; text-align: center; overflow: hidden; line-height: 0;">\r
		&nbsp;</section>\r
	<section class="_editor" data-style-id="69474" data-support="96编辑器" style="margin-bottom: unset;">\r
		<section style="border: 2px solid rgb(101, 205, 244); border-radius: 10px; padding: 15px; margin-top: 10px; box-sizing: border-box; margin-bottom: unset;">\r
			<p style="margin-bottom: 16px; letter-spacing: 2px; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
				2026年6月16日下午，广东省项目管理协会顾问潘奇俊，数智监理委员会主任、广东炫诚工程管理有限公司常务副总经理王倩倩，常务副会长单位永道咨询工程有限公司总经理助理董礼伟及秘书处一行，赴副会长单位广东省建筑工程监理有限公司（以下简称&ldquo;广东省监理&rdquo;）开展走访交流。广东省监理副总经理黄隆盛、工程咨询部部长黄伟坚、全咨事业部负责人胡国红及相关部门负责人，协会副秘书长戴晓伟、秘书处丘秀勤等参加座谈。本次活动聚焦会员企业发展需求，旨在建立常态化沟通机制，协同破解行业共性难题。</p>\r
			<section style="font-size: 15px; letter-spacing: 2px; text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-backh="300" data-backw="534" data-imgfileid="100015610" data-width="100%" src="/gpma03/preview-20261117/assets/notices/notice-05-01.jpg" style="vertical-align: bottom; width: 681px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" type="block" /></p>\r
			</section>\r
			<p style="margin-bottom: 16px; font-size: 15px; letter-spacing: 2px; line-height: 1.75em; text-align: center;">\r
				&nbsp;</p>\r
			<p style="margin-bottom: 16px; letter-spacing: 2px; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
				座谈会上，戴晓伟通报了协会2026年度重点工作推进情况及下一阶段安排，并就提升协会科技奖公信力与应用效能、团体标准编制应紧扣项目管理主题等事项，征询与会人员意见。与会代表结合行业新形势、新任务，围绕项目管理领域数字化转型及市场机遇等议题展开交流。</p>\r
			<section style="font-size: 15px; letter-spacing: 2px; text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-backh="592" data-backw="534" data-imgfileid="100015612" data-width="100%" src="/gpma03/preview-20261117/assets/notices/notice-05-02.jpg" style="vertical-align: bottom; width: 681px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" type="block" /></p>\r
			</section>\r
			<p style="margin-bottom: 16px; font-size: 15px; letter-spacing: 2px; line-height: 1.75em; text-align: center;">\r
				&nbsp;</p>\r
			<p style="margin-bottom: 16px; letter-spacing: 2px; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
				黄隆盛对协会到访表示欢迎，并介绍了公司发展历程与经营概况。他指出，作为省内监理行业的老牌国有独资企业，广东省监理持有房建、市政等四项甲级资质，拥有超过1300名专业人才，以&ldquo;监理+科技创新&rdquo;为主赛道，积极拓展全过程工程咨询及招标代理业务，致力于实现从单一监理向全链条咨询服务的转型。目前，公司正加大高科技及AI技术的投入，依托各区域公司的力量，着力构建一站式项目管理全生命周期服务体系。同时，黄隆盛也指出了当前行业发展的痛点，包括项目管理前期费用未明确、全过程咨询收费缺乏统一标准等问题，并建议协会在推动项目管理专业纳入职称评审体系方面发挥更大作用。工程咨询部部长黄伟坚、全咨事业部负责人胡国红分别就公司的业务布局与核心能力建设作了补充说明。</p>\r
			<section style="font-size: 15px; letter-spacing: 2px; text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-backh="592" data-backw="534" data-imgfileid="100015613" data-width="100%" src="/gpma03/preview-20261117/assets/notices/notice-05-03.jpg" style="vertical-align: bottom; width: 681px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" type="block" /></p>\r
			</section>\r
			<p style="margin-bottom: 16px; font-size: 15px; letter-spacing: 2px; line-height: 1.75em; text-align: center;">\r
				&nbsp;</p>\r
			<p style="margin-bottom: 16px; letter-spacing: 2px; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
				潘奇俊代表协会感谢广东省监理长期以来对协会工作的大力支持，并对其坚持技术迭代、引领行业持续发展的做法给予高度肯定。他强调，当前正值&ldquo;十五五&rdquo;规划开局之年，监理行业已步入业务转型与数字化服务提质的攻坚期。全行业应紧扣规划部署，立足项目全生命周期管理，以数字化、智能化为引擎，加快创建覆盖项目前期策划、设计、施工、运维各阶段的新型项目管理范式，切实提升项目管理的精细化与智能化水平。潘奇俊提出，数智监理委员会应充分利用其在项目管理中的工作经验和成果，进一步规范项目管理工作内容和程序，精炼跨专业技术要求，并创新性地定义&ldquo;项目管理&rdquo;概念，加快推进项目管理团体标准体系的落地实施。</p>\r
			<section style="font-size: 15px; letter-spacing: 2px; text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-backh="592" data-backw="534" data-imgfileid="100015616" data-width="100%" src="/gpma03/preview-20261117/assets/notices/notice-05-04.jpg" style="vertical-align: bottom; width: 681px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" type="block" /></p>\r
			</section>\r
			<section style="font-size: 15px; letter-spacing: 2px; text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-backh="592" data-backw="534" data-imgfileid="100015614" data-width="100%" src="/gpma03/preview-20261117/assets/notices/notice-05-05.jpg" style="vertical-align: bottom; width: 681px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" type="block" /></p>\r
			</section>\r
			<p style="margin-bottom: 16px; font-size: 15px; letter-spacing: 2px; line-height: 1.75em; text-align: center;">\r
				&nbsp;</p>\r
			<p style="margin-bottom: 16px; letter-spacing: 2px; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
				在交流环节，王倩倩、董礼伟结合协会运营实践与行业服务经验先后发言。与会人员围绕项目管理专业差异化定位、全产业链标准体系构建、评奖评优机制优化、全过程咨询取费规范等核心议题展开深入探讨，达成多项共识。</p>\r
			<section style="font-size: 15px; letter-spacing: 2px; text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-backh="300" data-backw="534" data-imgfileid="100015618" data-width="100%" src="/gpma03/preview-20261117/assets/notices/notice-05-06.jpg" style="vertical-align: bottom; width: 681px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" type="block" /></p>\r
			</section>\r
			<p style="margin-bottom: 16px; font-size: 15px; letter-spacing: 2px; line-height: 1.75em; text-align: center;">\r
				&nbsp;</p>\r
			<p style="margin-bottom: 16px; letter-spacing: 2px; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
				本次走访切实摸清了会员企业在转型发展中的痛点和难点，明确了协会下一阶段的服务重点。下一步，协会将紧扣项目管理核心价值，以团体标准编制和评优评先为抓手，持续做优精准服务，为行业专业化、标准化和高质量发展不断注入新动能。</p>\r
		</section>\r
	</section>\r
	<p>\r
		&nbsp;</p>\r
	<p>\r
		&nbsp;</p>\r
	<section data-style-id="63672" data-support="96编辑器" style="margin-bottom: unset;">\r
		<section style="display: flex; justify-content: flex-start; align-items: center; margin-bottom: unset;">\r
			<section style="z-index: 100; margin-bottom: unset;">\r
				<section style="width: 18px; height: 6px; border-radius: 50px; background-color: rgb(255, 196, 51); box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
					&nbsp;</section>\r
				<section style="margin-top: 10px; width: 18px; height: 6px; border-radius: 50px; background-color: rgb(255, 196, 51); box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
					&nbsp;</section>\r
			</section>\r
			<section data-width="97%" style="margin-left: -9px; width: 693.547px; background-color: rgb(255, 196, 51); border-radius: 8px; padding: 0px 0px 4px; box-sizing: border-box; margin-bottom: unset;">\r
				<section style="background-color: rgb(119, 203, 152); padding: 7px 24px; border-radius: 7px; box-sizing: border-box; margin-bottom: unset;">\r
					<p style="letter-spacing: 2px; color: rgb(255, 255, 255); font-size: 18px;">\r
						<strong>广东省建筑工程监理有限公司</strong></p>\r
				</section>\r
			</section>\r
		</section>\r
		<section style="width: 18px; margin-left: auto; margin-right: 30px; margin-top: -15px; margin-bottom: unset;">\r
			<p>\r
				&nbsp;</p>\r
		</section>\r
	</section>\r
	<section style="margin-bottom: unset;">\r
		<p>\r
			&nbsp;</p>\r
		<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 24px;">\r
			<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
								<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 19.55px; font-family: sans-serif;">单位概况</span></strong></strong></span></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
										<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">UNIT PROFILE</strong></span></section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: -10px -13px 0px auto; width: 30px;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
					</section>\r
				</section>\r
			</section>\r
			<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
					<p>\r
						<img data-aistatus="1" data-imgfileid="100013344" src="/gpma03/preview-20261117/assets/notices/notice-05-07.png" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); border-radius: initial; width: 715px; background-color: transparent !important; background-size: 0px !important;" /></p>\r
				</section>\r
				<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center;">\r
					&nbsp;</p>\r
				<p style="margin-bottom: 16px; line-height: 1.75em; font-size: 17px; text-indent: 2.11765em;">\r
					广东省建筑工程监理有限公司（简称&ldquo;广东省监理&rdquo;）是广东省建筑工程集团控股有限公司全资子公司，成立于1992年10月，是广东省首批成立的监理企业之一。公司注册资本3000万元，具备工程咨询、招标代理、政府采购、工程监理、造价咨询及项目代建等全过程工程咨询综合服务能力，是一家集团化管理的工程技术服务企业。</p>\r
				<p style="margin-bottom: 16px; line-height: 1.75em; font-size: 17px; text-indent: 2.11765em;">\r
					公司坚持聚焦工程建设主责主业，以打造&ldquo;华南地区工程咨询服务行业标杆企业&rdquo;为战略目标，积极对标行业一流，持续推进业务转型升级。旗下拥有参股和控股公司6家，经营地域覆盖全国，在房屋建筑、市政公用、机电安装、园林古建筑、工业厂房等领域积累了丰富经验，完成了一大批高层超高层、公共建筑、住宅小区等重点项目的全过程咨询与监理服务。</p>\r
				<p>\r
					&nbsp;</p>\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
					<p>\r
						<img data-aistatus="1" data-backh="146" data-backw="557" data-croporisrc="https://mmbiz.qlogo.cn/mmbiz_png/gMfAEWd6akhHSLH4lDXZtLQ9JgwjRH2W6yqibS1xSSPc9UdAicYvWr0jQLZqRg0AnE5P42lN8FoDba9DhY2KmuhA/0?wx_fmt=png&amp;from=appmsg" data-cropx1="0" data-cropx2="1262.4048442906574" data-cropy1="0" data-cropy2="330.89965397923874" data-imgfileid="100013310" src="/gpma03/preview-20261117/assets/notices/notice-05-08.jpg" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 715px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
				</section>\r
				<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<p>\r
									&nbsp;</p>\r
							</section>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
			<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px -10px -10px; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
									<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 19.55px; font-family: sans-serif;">资质认证</span></strong></strong></span></section>\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
											<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">QUALIFICATION CERTIFICATION</strong></span></section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: -10px -13px 0px auto; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						</section>\r
					</section>\r
				</section>\r
				<section data-id="103057" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 15px 15px 10px; border-width: 1px; border-style: solid; border-color: rgb(44, 150, 80); border-radius: 5px; box-sizing: border-box; margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
								通过了质量管理体系认证、环境管理体系认证、职业健康安全管理体系认证、信息安全管理体系认证证书和合规管理体系认证证书。</p>\r
							<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
								拥有建筑行业的监理甲级资质（房屋建筑工程、机电安装工程、市政公用工程）、环境监理甲级资格、监理乙级资质（化工石油工程、人防工程监理、电力工程）、水利工程施工监理乙级资质、造林绿化监理丙级资质、工程咨询单位甲级资质（市政公用工程专业、建筑工程专业）、招标代理资信AAA级和政府采购甲级等相关证书。</p>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 5px 0px 10px; color: rgb(0, 0, 0); letter-spacing: 2px; line-height: 2.2em; height: 0px; overflow: hidden;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
				<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\r
					&nbsp;</p>\r
				<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px -10px -10px; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
									<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 19.55px; font-family: sans-serif;">人才队伍</span></strong></strong></span></section>\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
											<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">TALENT TEAM</strong></span></section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: -10px -13px 0px auto; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						</section>\r
					</section>\r
				</section>\r
				<section data-id="148037" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 15px 15px 10px; border-width: 1px; border-style: solid; border-color: rgb(44, 150, 80); border-radius: 5px; box-sizing: border-box; margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
									广东省监理拥有一支较高专业技术水平、管理水平、经验丰富的老、中、青相结合的管理团队。</p>\r
								<p style="line-height: 1.75em; font-size: 17px; text-indent: 2.11765em;">\r
									现有各类专业技术人员近1300人，其中注册监理工程师387人，注册造价工程师34人，咨询工程师16人，教授级高级工程师10人，高中级职称人员超过600人，形成了结构合理、专业齐全的老中青结合管理团队。</p>\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 5px 0px 10px; color: rgb(0, 0, 0); letter-spacing: 2px; line-height: 2.2em; height: 0px; overflow: hidden;">\r
									&nbsp;</section>\r
							</section>\r
						</section>\r
					</section>\r
				</section>\r
				<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 5px; letter-spacing: 0.578px;">\r
					&nbsp;</p>\r
				<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px; margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px -10px -10px; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center;">\r
									<span style="color: rgb(20, 73, 151); font-family: sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px; font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">单位荣誉</strong></span></p>\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
											<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 17.25px; font-family: &quot;Microsoft YaHei Light&quot;, sans-serif;">UNIT HONOR</span></strong></span></section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: -10px -13px 0px auto; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						</section>\r
					</section>\r
				</section>\r
				<section data-id="148037" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px; margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 15px 15px 10px; border-width: 1px; border-style: solid; border-color: rgb(44, 150, 80); border-radius: 5px; box-sizing: border-box; margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
								广东省监理在省内外具有较高知名度和良好的社会信誉。公司被认定为&ldquo;国家高新技术企业&rdquo;，是中国监理协会、中国招投标协会、广东省监理协会、广东省招投标协会会员单位；广东省项目管理协会副会长单位。</p>\r
							<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
								自1998年以来一直被广东省工商行政管理局授予&ldquo;守合同重信用企业&rdquo;荣誉；荣获&ldquo;广东省先进工程监理企业&rdquo;、&ldquo;广东省诚信示范企业&rdquo;、&ldquo;广东省土木建筑科技创新先进企业&rdquo;、&ldquo;广东省环保产业信用企业AAA级单位&rdquo;；荣获&ldquo;广东省公共资源交易中心中介服务和项目响应AAA级单位&rdquo;、&ldquo;广东省招投标行业信用评价AAA级单位&rdquo;、&ldquo;中国百佳诚信招标代理机构&rdquo;、&ldquo;全国公共采购十佳代理机构&rdquo;、&ldquo;中国招标代理优质服务五星级单位&rdquo;、&ldquo;中国最具有社会责任感招标机构&rdquo;、&ldquo;中国阳光招标奖&rdquo;；获&ldquo;广东省造价协会优秀成果二等奖&rdquo;、&ldquo;国家税务总局纳税A级单位&rdquo;、&ldquo;华夏银行信用等级AAA级单位&rdquo;等荣誉。</p>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
								<p>\r
									<img data-aistatus="1" data-backh="307" data-backw="546" data-imgfileid="100013334" src="/gpma03/preview-20261117/assets/notices/notice-05-09.png" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 683px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 16px; text-align: center;">\r
								&nbsp;</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 5px 0px 10px; color: rgb(0, 0, 0); letter-spacing: 2px; line-height: 2.2em; height: 0px; overflow: hidden;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
				<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\r
					&nbsp;</p>\r
				<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px -10px -10px; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
									<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 19.55px; font-family: sans-serif;">专利技术</span></strong></strong></span></section>\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
											<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">PATENTED TECHNOLOGY</strong></span></section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: -10px -13px 0px auto; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						</section>\r
					</section>\r
				</section>\r
				<section data-id="148037" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 15px 15px 10px; border-width: 1px; border-style: solid; border-color: rgb(44, 150, 80); border-radius: 5px; box-sizing: border-box; margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
									广东省监理在技术研发领域取得了显著成果，目前拥有多项国家授权的专利技术。其中，包括发明专利7项，实用新型专利28项。</p>\r
								<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
									例如，&ldquo;数据驱动设计的基建设备能源节省方法发明专利&rdquo;涉及基建数据处理的技术领域，提供一种数据驱动设计的基建设备能源节省方法，本发明可通过能源数据模型对能源使用数据进行多维度的分析，根据分析结果给出对应的能源优化策略，有益于给出更准确的优化策略，提高优化策略的有效性。</p>\r
								<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
									此外，&ldquo;一种道路工程铺装铺筑质量检测与评价方法发明专利&rdquo;提供了一种道路工程铺装铺筑质量检测与评价方法，属于道路路面检测技术领域，本发明不仅可用于养护铺面材料的平整度评价，而且可用于不同等级公路加铺或新建公路路面平整度的评价，评价方法简单易行，可对沥青路面平整度的准确评价，能够为道路工程铺装层的质量控制和评价提供相应的参考依据。这些专利技术不仅体现了广东省监理在技术研发方面的深厚积累，也为公司的可持续发展奠定了坚实的基础。</p>\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 5px 0px 10px; color: rgb(0, 0, 0); letter-spacing: 2px; line-height: 2.2em; height: 0px; overflow: hidden;">\r
									&nbsp;</section>\r
							</section>\r
						</section>\r
					</section>\r
				</section>\r
				<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\r
					&nbsp;</p>\r
				<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px -10px -10px; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
									<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 19.55px; font-family: &quot;Microsoft YaHei Light&quot;, sans-serif;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 19.55px; font-family: sans-serif;">项目展示</span></strong></span></strong></strong></span></section>\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
											<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 17.25px; font-family: &quot;Microsoft YaHei Light&quot;, sans-serif;">PROJECTS SHOW</span></strong></span></section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: -10px -13px 0px auto; width: 30px;">\r
								<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						</section>\r
					</section>\r
				</section>\r
				<section data-id="148037" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 7px;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: flex-start;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 15px 0px 0px; display: flex; flex-direction: column; box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px -15px auto; width: 35px; z-index: 5;">\r
										<section style="margin-bottom: unset;">\r
											<p>\r
												&nbsp;</p>\r
										</section>\r
									</section>\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; align-items: center; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px 0px 0px; flex-shrink: 0; display: flex; z-index: 5;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 4px; font-size: 16px; letter-spacing: 1.5px; color: rgb(255, 255, 255); background-color: rgb(254, 207, 80); box-sizing: border-box; margin-bottom: unset;">\r
												<strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">&nbsp;</strong></section>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 0px; height: 1px; border-top: 13px solid rgb(254, 207, 80); border-bottom: 13px solid rgb(254, 207, 80); border-right: 10px solid transparent; box-sizing: border-box; margin-bottom: unset; overflow: hidden;">\r
												&nbsp;</section>\r
										</section>\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 5px 25px; background-image: linear-gradient(to right, rgb(115, 210, 202), rgb(102, 184, 113)); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); margin-bottom: unset;">\r
												<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 17px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px; text-align: center;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 17.25px; font-family: 微软雅黑, sans-serif;">无人船基地建设项目</span></strong></strong></span></section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 10px 15px; background-image: linear-gradient(to top, rgb(255, 247, 244), transparent); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 1.75em; letter-spacing: 1.5px; color: rgb(43, 13, 13); margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
										<section data-id="106574" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; text-align: center;">\r
												<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: unset;">\r
													<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 12px; margin-bottom: unset;">\r
														<section style="margin-bottom: unset;">\r
															<p>\r
																&nbsp;</p>\r
														</section>\r
													</section>\r
													<section data-brushtype="text" style="margin-bottom: unset;">\r
														<span style="font-size: 17px;">项目简介：</span></section>\r
												</section>\r
												<section style="margin-bottom: unset;">\r
													&nbsp;</section>\r
											</section>\r
										</section>\r
										<section style="margin-bottom: unset;">\r
											<p style="margin-bottom: unset; text-indent: 2em; line-height: 1.75em; font-size: 17px;">\r
												位于珠海市情侣北路与远大北一路交汇处北侧，工程规模约50000平方米(其中地下室约4000平方米)。</p>\r
											<p style="margin-bottom: unset; text-indent: 2em; line-height: 1.75em; font-size: 17px;">\r
												项目投资：1.3亿元。</p>\r
											<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center;">\r
												&nbsp;</p>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
												<p>\r
													<img data-aistatus="1" data-backh="373" data-backw="531" data-imgfileid="100013335" src="/gpma03/preview-20261117/assets/notices/notice-05-10.jpg" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 685px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 7px;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: flex-start;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 15px 0px 0px; display: flex; flex-direction: column; box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px -15px auto; width: 35px; z-index: 5;">\r
										<section style="margin-bottom: unset;">\r
											<p>\r
												&nbsp;</p>\r
										</section>\r
									</section>\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; align-items: center; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px 0px 0px; flex-shrink: 0; display: flex; z-index: 5;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 4px; font-size: 16px; letter-spacing: 1.5px; color: rgb(255, 255, 255); background-color: rgb(254, 207, 80); box-sizing: border-box; margin-bottom: unset;">\r
												<strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">&nbsp;</strong></section>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 0px; height: 1px; border-top: 13px solid rgb(254, 207, 80); border-bottom: 13px solid rgb(254, 207, 80); border-right: 10px solid transparent; box-sizing: border-box; margin-bottom: unset; overflow: hidden;">\r
												&nbsp;</section>\r
										</section>\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 5px 25px; background-image: linear-gradient(to right, rgb(115, 210, 202), rgb(102, 184, 113)); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); margin-bottom: unset;">\r
												<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 17px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 17.25px; font-family: 微软雅黑, sans-serif;">佛山市生活垃圾资源化处理提质改造项目</span></strong></span></section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 10px 15px; background-image: linear-gradient(to top, rgb(255, 247, 244), transparent); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 1.75em; letter-spacing: 1.5px; color: rgb(43, 13, 13); margin-bottom: unset;">\r
									<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 5px;">\r
										&nbsp;</p>\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
										<section data-id="106574" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; text-align: center;">\r
												<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: unset;">\r
													<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 12px; margin-bottom: unset;">\r
														<section style="margin-bottom: unset;">\r
															<p>\r
																&nbsp;</p>\r
														</section>\r
													</section>\r
													<section data-brushtype="text" style="margin-bottom: unset;">\r
														<span style="font-size: 17px;">项目简介：</span></section>\r
												</section>\r
												<section style="margin-bottom: unset;">\r
													&nbsp;</section>\r
											</section>\r
										</section>\r
										<section style="margin-bottom: unset;">\r
											<p style="margin-bottom: unset; text-indent: 2em; padding-left: 16px; padding-right: 16px;">\r
												<span style="font-size: 17px;">本项目处理生活垃圾总规模4500吨/日，其中本阶段建设规模为3000吨/日，主要建设内容为4台750吨/日机械炉排炉及2台35MW汽轮发电机组，配套建设300吨/日污泥干化系统及相关配套设施等。</span></p>\r
											<p style="margin-bottom: 16px; text-indent: 2.71429em; padding-left: 16px; padding-right: 16px;">\r
												<span style="font-size: 17px;">项目投资：18.53亿元。</span></p>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
												<p>\r
													<img data-aistatus="1" data-backh="342" data-backw="548" data-imgfileid="100013336" src="/gpma03/preview-20261117/assets/notices/notice-05-11.jpg" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 685px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 7px;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: flex-start;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 15px 0px 0px; display: flex; flex-direction: column; box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px -15px auto; width: 35px; z-index: 5;">\r
										<section style="margin-bottom: unset;">\r
											<p>\r
												&nbsp;</p>\r
										</section>\r
									</section>\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; align-items: center; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px 0px 0px; flex-shrink: 0; display: flex; z-index: 5;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 4px; font-size: 16px; letter-spacing: 1.5px; color: rgb(255, 255, 255); background-color: rgb(254, 207, 80); box-sizing: border-box; margin-bottom: unset;">\r
												<strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">&nbsp;</strong></section>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 0px; height: 1px; border-top: 13px solid rgb(254, 207, 80); border-bottom: 13px solid rgb(254, 207, 80); border-right: 10px solid transparent; box-sizing: border-box; margin-bottom: unset; overflow: hidden;">\r
												&nbsp;</section>\r
										</section>\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 5px 25px; background-image: linear-gradient(to right, rgb(115, 210, 202), rgb(102, 184, 113)); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); margin-bottom: unset;">\r
												<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 17px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 17.25px; font-family: 微软雅黑, sans-serif;">汕尾市高级技工学校一期工程</span></strong></span></section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 10px 15px; background-image: linear-gradient(to top, rgb(255, 247, 244), transparent); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 1.75em; letter-spacing: 1.5px; color: rgb(43, 13, 13); margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
										<section data-id="106574" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; text-align: center;">\r
												<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: unset;">\r
													<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 12px; margin-bottom: unset;">\r
														<section style="margin-bottom: unset;">\r
															<p>\r
																&nbsp;</p>\r
														</section>\r
													</section>\r
													<section data-brushtype="text" style="margin-bottom: unset;">\r
														<span style="font-size: 17px;">项目简介：</span></section>\r
												</section>\r
												<section style="margin-bottom: unset;">\r
													&nbsp;</section>\r
											</section>\r
										</section>\r
										<section style="margin-bottom: unset;">\r
											<p style="margin-bottom: unset; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
												项目总建筑面积238480平方米，其中计容面积220480平方米，不计容面积18000平方米。主要建设内容:教学楼、实训楼、行政楼、图书馆、体育馆、教师公寓、学生宿舍楼、学生活动中心、双创中心、后勤楼、食堂、地下车库以及400米标准跑道田径场、道路绿化等配套设施。</p>\r
											<p style="margin-bottom: 16px; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
												项目投资：11.23亿元。</p>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
												<p>\r
													<img data-aistatus="1" data-backh="279" data-backw="548" data-imgfileid="100013337" src="/gpma03/preview-20261117/assets/notices/notice-05-12.jpg" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 685px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
						</section>\r
					</section>\r
				</section>\r
				<section data-id="148037" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 7px;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: flex-start;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 15px 0px 0px; display: flex; flex-direction: column; box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px -15px auto; width: 35px; z-index: 5;">\r
										<section style="margin-bottom: unset;">\r
											<p>\r
												&nbsp;</p>\r
										</section>\r
									</section>\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; align-items: center; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px 0px 0px; flex-shrink: 0; display: flex; z-index: 5;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 4px; font-size: 16px; letter-spacing: 1.5px; color: rgb(255, 255, 255); background-color: rgb(254, 207, 80); box-sizing: border-box; margin-bottom: unset;">\r
												<strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">&nbsp;</strong></section>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 0px; height: 1px; border-top: 13px solid rgb(254, 207, 80); border-bottom: 13px solid rgb(254, 207, 80); border-right: 10px solid transparent; box-sizing: border-box; margin-bottom: unset; overflow: hidden;">\r
												&nbsp;</section>\r
										</section>\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 5px 25px; background-image: linear-gradient(to right, rgb(115, 210, 202), rgb(102, 184, 113)); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); margin-bottom: unset;">\r
												<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 17px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 17.25px; font-family: 微软雅黑, sans-serif;">南海神庙历史文化综合发展区外贸博物馆和文化总部中心工程项目</span></strong></span></section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 10px 15px; background-image: linear-gradient(to top, rgb(255, 247, 244), transparent); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 1.75em; letter-spacing: 1.5px; font-size: 15px; color: rgb(43, 13, 13); margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
										<section data-id="106574" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; text-align: center;">\r
												<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: unset;">\r
													<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 12px; margin-bottom: unset;">\r
														&nbsp;</section>\r
												</section>\r
											</section>\r
										</section>\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
											<section data-id="106574" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
												<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; text-align: center;">\r
													<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: unset;">\r
														<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 12px; margin-bottom: unset;">\r
															<section style="margin-bottom: unset;">\r
																<p>\r
																	&nbsp;</p>\r
															</section>\r
														</section>\r
														<section data-brushtype="text" style="margin-bottom: unset;">\r
															<span style="font-size: 17px;">项目简介：</span></section>\r
													</section>\r
													<section style="margin-bottom: unset;">\r
														&nbsp;</section>\r
												</section>\r
											</section>\r
											<section style="margin-bottom: unset;">\r
												<p style="margin-bottom: unset; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
													项目总建设用地面积为14009平方米，规划总建筑面积约为87000平方米，计容建筑面积约为63099平方米，容积率4.5。其中外贸博物馆总建筑面积约18000平方米，共4层，建筑高度24米；文化总部中心总建筑面积约45000平方米，共19层，建筑高度约为90米。</p>\r
												<p style="margin-bottom: 16px; line-height: 1.75em; font-size: 17px; text-indent: 2.23529em;">\r
													项目投资：约10.4亿元</p>\r
												<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
													<p>\r
														<img data-aistatus="1" data-backh="366" data-backw="548" data-imgfileid="100013338" src="/gpma03/preview-20261117/assets/notices/notice-05-13.jpg" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 685px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
													<p>\r
														&nbsp;</p>\r
												</section>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 7px;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: flex-start;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 15px 0px 0px; display: flex; flex-direction: column; box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px -15px auto; width: 35px; z-index: 5;">\r
										<section style="margin-bottom: unset;">\r
											<p>\r
												&nbsp;</p>\r
										</section>\r
									</section>\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; align-items: center; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px 0px 0px; flex-shrink: 0; display: flex; z-index: 5;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 4px; font-size: 16px; letter-spacing: 1.5px; color: rgb(255, 255, 255); background-color: rgb(254, 207, 80); box-sizing: border-box; margin-bottom: unset;">\r
												<strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">&nbsp;</strong></section>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 0px; height: 1px; border-top: 13px solid rgb(254, 207, 80); border-bottom: 13px solid rgb(254, 207, 80); border-right: 10px solid transparent; box-sizing: border-box; margin-bottom: unset; overflow: hidden;">\r
												&nbsp;</section>\r
										</section>\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 5px 25px; background-image: linear-gradient(to right, rgb(115, 210, 202), rgb(102, 184, 113)); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); margin-bottom: unset;">\r
												<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 17px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 17.25px; font-family: 微软雅黑, sans-serif;">顺德区德胜体育中心工程(一标)工程</span></strong></span></section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 10px 15px; background-image: linear-gradient(to top, rgb(255, 247, 244), transparent); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 1.75em; letter-spacing: 1.5px; color: rgb(43, 13, 13); margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
										<section data-id="106574" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; text-align: center;">\r
												<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: unset;">\r
													<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 12px; margin-bottom: unset;">\r
														<section style="margin-bottom: unset;">\r
															<p>\r
																&nbsp;</p>\r
														</section>\r
													</section>\r
													<section data-brushtype="text" style="margin-bottom: unset;">\r
														<span style="font-size: 17px;">项目简介：</span></section>\r
												</section>\r
												<section style="margin-bottom: unset;">\r
													&nbsp;</section>\r
											</section>\r
										</section>\r
										<section style="margin-bottom: unset;">\r
											<p style="line-height: 1.75em; font-size: 17px; margin-bottom: 16px; text-indent: 2.23529em;">\r
												项目主要由体育馆、训练馆、游泳馆、配套用房、市政隧道组成。本项目总建筑面积约167084平方米，综合体育馆的体育建筑等级为甲级，为大型体育馆规模;游泳馆的体育建筑等级为乙级，为中型游泳馆规模。</p>\r
											<p style="line-height: 1.75em; font-size: 17px; margin-bottom: 16px; text-indent: 2.23529em;">\r
												项目投资：约19亿元</p>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
												<p>\r
													<img data-aistatus="1" data-backh="326" data-backw="548" data-imgfileid="100013339" src="/gpma03/preview-20261117/assets/notices/notice-05-14.jpg" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 685px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 7px;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: flex-start;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 15px 0px 0px; display: flex; flex-direction: column; box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px -15px auto; width: 35px; z-index: 5;">\r
										<section style="margin-bottom: unset;">\r
											<p>\r
												&nbsp;</p>\r
										</section>\r
									</section>\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; align-items: center; margin-bottom: unset;">\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px -15px 0px 0px; flex-shrink: 0; display: flex; z-index: 5;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px 4px; font-size: 16px; letter-spacing: 1.5px; color: rgb(255, 255, 255); background-color: rgb(254, 207, 80); box-sizing: border-box; margin-bottom: unset;">\r
												<strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">&nbsp;</strong></section>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 0px; height: 1px; border-top: 13px solid rgb(254, 207, 80); border-bottom: 13px solid rgb(254, 207, 80); border-right: 10px solid transparent; box-sizing: border-box; margin-bottom: unset; overflow: hidden;">\r
												&nbsp;</section>\r
										</section>\r
										<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 5px 25px; background-image: linear-gradient(to right, rgb(115, 210, 202), rgb(102, 184, 113)); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); margin-bottom: unset;">\r
												<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 17px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 17.25px; font-family: 微软雅黑, sans-serif;">中新科技文化艺术中心之智荟塔（高端酒店）</span></strong></span></section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 10px 15px; background-image: linear-gradient(to top, rgb(255, 247, 244), transparent); background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; box-sizing: border-box; margin-bottom: unset; background-clip: initial;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 1.75em; letter-spacing: 1.5px; color: rgb(43, 13, 13); margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
										<section data-id="106574" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; text-align: center;">\r
												<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: unset;">\r
													<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 12px; margin-bottom: unset;">\r
														<section style="margin-bottom: unset;">\r
															<p>\r
																&nbsp;</p>\r
														</section>\r
													</section>\r
													<section data-brushtype="text" style="margin-bottom: unset;">\r
														<span style="font-size: 17px;">项目简介：</span></section>\r
												</section>\r
												<section style="margin-bottom: unset;">\r
													&nbsp;</section>\r
											</section>\r
										</section>\r
										<section style="margin-bottom: unset;">\r
											<p style="line-height: 1.75em; font-size: 17px; text-indent: 2.23529em; margin-bottom: 16px;">\r
												项目总建设面积134286平方米，建筑结构高度最高约180米，其中计容面积100338平方米（含办公面积60880平方米，酒店32404平方米，商业7053.50平方米）；不计容面积33949平方米（包括地下停车面积32866平方米，地上避难层面积1082.80平方米），此外还包括相关的室外工程等</p>\r
											<p style="line-height: 1.75em; font-size: 17px; text-indent: 2.23529em; margin-bottom: 16px;">\r
												项目投资：约11亿元</p>\r
											<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
												<p>\r
													<img data-aistatus="1" data-backh="402" data-backw="548" data-imgfileid="100013340" src="/gpma03/preview-20261117/assets/notices/notice-05-15.jpg" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 685px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
						</section>\r
					</section>\r
				</section>\r
				<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\r
					&nbsp;</p>\r
			</section>\r
		</section>\r
		<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px;">\r
			&nbsp;</p>\r
	</section>\r
</section>\r
<section class="_editor" style="margin-bottom: unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>`},{id:"3d6c7bd193e44363a96aa78d7c054b25",title:"共探行业数字化转型与AI赋能新路径 ——我会赴广州易达建信科技开发有限公司开展会员走访活动",date:"2026-06-12",tag:"会议",cover:"/gpma03/preview-20261117/assets/notices/notice-06-01.jpg",hasCover:!0,summary:"共探行业数字化转型与AI赋能新路径 ——我会赴广州易达建信科技开发有限公司开展会员走访活动 2026年6月10日下午，广东省项目管理协会顾问潘奇俊、数智科技委员会副主任庄承荣和秘书处一行，走进常务副会长单位——广州易达建",content:`<h1 class="rich_media_title " id="activity-name" style="white-space-collapse: collapse; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 14px; padding: 0px; outline: 0px; font-size: 22px; color: rgba(0, 0, 0, 0.9); line-height: 1.4; user-select: text; font-family: &quot;PingFang SC&quot;, system-ui, -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 0.544px; text-align: center;">\r
	<span class="js_title_inner" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px; padding: 0px; outline: 0px;">共探行业数字化转型与AI赋能新路径</span></h1>\r
<h1 class="rich_media_title " style="white-space-collapse: collapse; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px 0px 14px; padding: 0px; outline: 0px; font-size: 22px; color: rgba(0, 0, 0, 0.9); line-height: 1.4; user-select: text; font-family: &quot;PingFang SC&quot;, system-ui, -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 0.544px; text-align: center;">\r
	<span class="js_title_inner" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px; padding: 0px; outline: 0px;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 0px; padding: 0px; outline: 0px; letter-spacing: normal;">&mdash;&mdash;</span>我会赴广州易达建信科技开发有限公司开展会员走访活动</span></h1>\r
<p>\r
	&nbsp;</p>\r
<section class="_editor" style="margin-bottom: unset;">\r
	<section data-color="#1e9be8" style="margin-top: 10px; margin-bottom: 10px; letter-spacing: 0.578px; font-size: 16px; text-align: center; overflow: hidden; line-height: 0;">\r
		&nbsp;</section>\r
	<p>\r
		&nbsp;</p>\r
	<section data-pm-slice="0 0 []" data-style-id="71048" data-support="96编辑器" style="margin-bottom: unset;">\r
		<section style="display: flex; justify-content: flex-end; margin-bottom: -11px; margin-right: 33px;">\r
			<section style="width: 8px; height: 20px; background-color: rgb(56, 133, 244); border-radius: 5px; margin-right: 5px; box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
				&nbsp;</section>\r
			<section style="width: 8px; height: 20px; background-color: rgb(56, 133, 244); border-radius: 5px; box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
				&nbsp;</section>\r
		</section>\r
		<section style="background-color: rgb(191, 227, 242); padding: 15px 14px 14px; box-sizing: border-box; margin-bottom: unset;">\r
			<section style="width: 2.53em; margin-top: 0px; margin-left: 27px; margin-bottom: unset;">\r
				<p>\r
					&nbsp;</p>\r
			</section>\r
			<section style="background-color: rgb(254, 254, 254); padding: 20px 15px; border-radius: 14px; margin-top: -15px; box-sizing: border-box; margin-bottom: unset;">\r
				<p style="letter-spacing: 0px; color: rgb(0, 0, 0); line-height: 1.75em; font-size: 17px; text-indent: 2em;">\r
					2026年6月10日下午，广东省项目管理协会顾问潘奇俊、数智科技委员会副主任庄承荣和秘书处一行，走进常务副会长单位&mdash;&mdash;广州易达建信科技开发有限公司（以下简称&ldquo;易达科<span style="letter-spacing: 0px;">技&rdquo;）开展实地参访与深度座谈，双方围绕行业现状、协会服务、产业链合作等议题深入研讨。易达科技副总经理刘金山、大区经理严平平、智慧造价部经理章睿、培训策划部经理吴静平，协会副秘书长戴晓伟，秘书处丘秀勤等参加活动。</span></p>\r
				<section style="text-align: center; margin-bottom: unset;">\r
					<p>\r
						<img data-aistatus="0" data-croporisrc="https://mmbiz.qlogo.cn/sz_mmbiz_jpg/fB7rIgYqibXNjtR0vwbrpZlSGX1icpIpgsEhgfXdlMgp3TZeKuf6ibVFSNr8AwURJmwic4l8BkubicffD9gkPnibMMRCEc5mKV4Aum6obdWvgzkias/0?wx_fmt=jpeg&amp;from=appmsg" data-cropx1="127.17948717948717" data-cropx2="1193.8461538461538" data-cropy1="326.15384615384613" data-cropy2="935.3846153846152" data-imgfileid="100015575" src="/gpma03/preview-20261117/assets/notices/notice-06-01.jpg" style="vertical-align: bottom; width: 657px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
				</section>\r
				<p style="letter-spacing: 0px; color: rgb(0, 0, 0); line-height: 1.75em; font-size: 15px; text-align: center;">\r
					座谈会现场</p>\r
			</section>\r
		</section>\r
	</section>\r
	<section style="margin-bottom: unset;">\r
		<p>\r
			&nbsp;</p>\r
	</section>\r
	<section data-style-id="70985" data-support="96编辑器" style="margin-bottom: unset;">\r
		<section style="border: 5px solid rgb(191, 227, 242); padding: 20px 15px; box-sizing: border-box; margin-bottom: unset;">\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
				座谈会上，戴晓伟副秘书长汇报协会2026上半年工作及规划，就评优评奖、团体标准编制、会员交流等征求意见。各方还就协会运营及行业机遇挑战展开讨论。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
				刘金山副总经理对协会一行来访表示欢迎，并介绍公司发展情况。作为协会常务副会长单位，易达科技2001年成立以来，深度参与国家级、省级造价改革与标准编制工作，牵头承担多项住建部&ldquo;十四五&rdquo;重点科研课题。依托国家级数字造价课题研究积淀，公司实现多项核心造价场景智能化升级，规划以DIP数据架构搭建全新AI体系，打造&ldquo;AI数字员工团队&rdquo;，持续以&ldquo;咨询+平台+生态&rdquo;战略推动行业转型。目前，易达科技已从传统造价计价软件厂商，转型升级为工程咨询行业数字化转型的综合服务商。严平平、章睿、吴静平分别从公司发展历程、业务布局和核心优势等方面进行分享。</p>\r
			<section style="text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-croporisrc="https://mmbiz.qpic.cn/sz_mmbiz_jpg/fB7rIgYqibXPQqqueC4tHzWfdtribmtjmrBSNciaKm6zKrvlIOM6MumQGGsoibrER4TyTs3OYqCwFlqURXKkF9WuSV1560GV1EhxI5hiarNERnpE/0?wx_fmt=jpeg&amp;from=appmsg" data-cropx2="1280" data-cropy1="587.6579925650558" data-cropy2="1705.8736059479554" data-imgfileid="100015573" src="/gpma03/preview-20261117/assets/notices/notice-06-02.jpg" style="vertical-align: bottom; width: 675px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
			</section>\r
			<p style="line-height: 2; text-align: center; letter-spacing: 1px; color: rgb(0, 0, 0);">\r
				&nbsp;</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
				潘奇俊顾问对易达科技坚持技术创新、赋能行业表示认可，并提出三点建议：一是打通信息孤岛，建立常态化需求对接机制；二是重构全过程管理体系，以项目管理视角整合关键环节；三是以AI赋能全行业，推动技术应用与标准升级。他强调，双方应立足项目管理全链条，联合探索细分行业数字化标准体系建设。</p>\r
			<section style="text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-croporisrc="https://mmbiz.qpic.cn/mmbiz_jpg/fB7rIgYqibXPVfCyPNcOMPkTPAyDiaLxRzZPA1AqRLibbF0DuWzzB4pAb4SmKbL7KSgNT0D8344PogfMdJuEUCQ7xLKS7icyNgwia7QVdj3z4cbc/0?wx_fmt=jpeg&amp;from=appmsg" data-cropx1="142.6625386996904" data-cropx2="1208.6687306501549" data-cropy1="587.8214055420195" data-cropy2="1705.8736059479554" data-imgfileid="100015577" src="/gpma03/preview-20261117/assets/notices/notice-06-03.jpg" style="vertical-align: bottom; width: 675px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" type="block" /></p>\r
			</section>\r
			<p style="line-height: 1.75em; font-size: 15px; margin-bottom: 16px;">\r
				&nbsp;</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
				庄承荣副主任聚焦行业问题与发展方向，指出协会应发挥易达科技技术龙头作用，将其在数字化技术等方面的成果，转化为会员可共享的内容。同时，开展定向课题研究、标准研制与人才联合培养，形成协同机制，解决会员企业数字化升级、人才短缺、技术应用等共性痛点。</p>\r
			<section data-style-id="70756" data-support="96编辑器" style="margin-bottom: unset;">\r
				<section style="margin-top: 10px; margin-bottom: unset;">\r
					<section style="text-align: center; margin-bottom: unset;">\r
						<p>\r
							<img data-aistatus="1" data-croporisrc="https://mmbiz.qpic.cn/mmbiz_jpg/fB7rIgYqibXP3Jc2FQ5cb2b01b6CYMxzHQv4sHljX290b9gQiah7TnVrxYWEapLR9s49LW2kaxnpiaK6eWLufw3ricO4wicic2AxRcAYXZQmjibNHk/0?wx_fmt=jpeg&amp;from=appmsg" data-cropx1="148.60681114551085" data-cropx2="1214.6130030959753" data-cropy1="812.2261988739392" data-cropy2="1705.8736059479554" data-imgfileid="100015580" src="/gpma03/preview-20261117/assets/notices/notice-06-04.jpg" style="vertical-align: bottom; width: 675px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" type="block" /></p>\r
					</section>\r
					<p>\r
						&nbsp;</p>\r
					<p style="line-height: 1.75em; font-size: 15px; text-indent: 2.4em; margin-bottom: 16px;">\r
						<span style="font-size: 17px;">协会一行还参观了易达科技数字化展厅与研发中心，通过现场演示，进一步了解了企业发展脉络及智慧造价、BIM全生命周期管理等核心产品与最新成果。</span></p>\r
				</section>\r
			</section>\r
			<section style="text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-backh="405" data-backw="538" data-imgfileid="100015563" data-width="100%" src="/gpma03/preview-20261117/assets/notices/notice-06-05.png" style="vertical-align: bottom; width: 675px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" type="block" /></p>\r
			</section>\r
			<p style="line-height: 2; text-align: center; letter-spacing: 1px; color: rgb(0, 0, 0);">\r
				<span style="font-size: 15px;">参观易达科技展厅</span></p>\r
			<p style="line-height: 2; text-align: center; letter-spacing: 1px; color: rgb(0, 0, 0);">\r
				&nbsp;</p>\r
			<p style="letter-spacing: 1px; color: rgb(0, 0, 0); line-height: 1.75em; font-size: 15px; text-indent: 2.4em; margin-bottom: 16px;">\r
				<span style="font-size: 17px;">本次走访搭建了协会与会员单位互通桥梁，梳理了行业现状与企业成果，明确了后续合作方向。下一步，双方将深化联动机制，聚焦行业标准化建设、数字化转型、全产业链赋能、人才队伍建设等领域，推动项目管理行业高质量发展。</span></p>\r
			<section style="text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="0" data-croporisrc="https://mmbiz.qpic.cn/sz_mmbiz_jpg/fB7rIgYqibXNcf8ON4rnO8hpzII5Js1J8bWaJz7KiaAibtxejnjnjYqggJTusTpycSQ3zNScegcWMTfvrOfDBjUiau3ibb73rictbxZbnGsu7owVE/0?wx_fmt=jpeg&amp;from=appmsg" data-cropselx2="538" data-cropsely2="341" data-imgfileid="100015582" data-width="100%" src="/gpma03/preview-20261117/assets/notices/notice-06-06.jpg" style="vertical-align: bottom; width: 675px; float: left; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
			</section>\r
			<p style="line-height: 2; text-align: center; letter-spacing: 1px; color: rgb(0, 0, 0);">\r
				<span style="font-size: 15px;">参会人员合影</span></p>\r
		</section>\r
	</section>\r
	<section style="margin-bottom: unset;">\r
		<p>\r
			&nbsp;</p>\r
		<p>\r
			&nbsp;</p>\r
	</section>\r
	<section data-style-id="70810" data-support="96编辑器" style="margin-bottom: unset;">\r
		<section data-align="title" style="text-align: center; margin-bottom: unset;">\r
			<section style="display: inline-block; margin-bottom: unset;">\r
				<section style="display: flex; justify-content: center; align-items: flex-end; margin-bottom: unset;">\r
					<section style="margin-bottom: unset;">\r
						<section style="display: flex; align-items: flex-end; margin-bottom: -8px; margin-right: 20px; align-self: flex-end; z-index: 2;">\r
							<section style="width: 3px; height: 12px; background-color: rgb(45, 189, 255); margin-right: 4px; border-radius: 1px; margin-left: auto; box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
								&nbsp;</section>\r
							<section style="width: 3px; height: 20px; background-color: rgb(45, 189, 255); margin-right: 4px; border-radius: 1px; box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
								&nbsp;</section>\r
							<section style="width: 3px; height: 12px; background-color: rgb(45, 189, 255); border-radius: 1px; box-sizing: border-box; margin-bottom: unset; overflow: hidden; line-height: 0;">\r
								&nbsp;</section>\r
						</section>\r
						<section style="height: 40px; display: flex; align-items: center; padding-left: 24px; padding-right: 24px; z-index: 1; background: linear-gradient(115deg, rgb(255, 255, 255) 6%, rgb(45, 189, 255) 6.5%, rgb(11, 102, 255) 100%); border-radius: 0px 4px 4px 0px; box-sizing: border-box; margin-bottom: unset;">\r
							<p style="color: rgb(255, 255, 255); letter-spacing: 1px; font-size: 18px;">\r
								<strong>广州易达建信科技开发有限公司简介</strong></p>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
	</section>\r
	<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px; margin-bottom: unset;">\r
		<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
			<p>\r
				&nbsp;</p>\r
			<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: -10px; margin-left: -10px; width: 30px;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
								<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: 仿宋;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 19.55px; font-family: sans-serif;">单位概况</span></strong></span></strong></strong></span></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); margin-bottom: unset; box-sizing: border-box;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
										<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">UNIT PROFILE</strong></span></section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: -10px; margin-right: -13px; margin-left: auto; width: 30px; margin-bottom: unset;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
					</section>\r
				</section>\r
			</section>\r
			<p style="text-indent: 2.11765em; margin-bottom: 16px;">\r
				<span style="letter-spacing: 0.578px; font-size: 17px;">广州易达建信科技开发有限公司（简称&ldquo;易达科技&rdquo;）于2001年10月成立，总部位于广州。易达科技集软件开发、系统集成、信息服务和管理咨询于一体，是国内第一个将建设工程投资增值和智能制造技术、互联网技术、BIM与VR技术、云计算技术相结合的国家高新技术创新企业。</span></p>\r
			<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-backh="226" data-backw="402" data-imgfileid="100012636" src="/gpma03/preview-20261117/assets/notices/notice-06-07.png" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 715px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
			</section>\r
			<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; margin-top: 16px;">\r
				公司拥有双软认证、CMMI（软件能力成熟度集成模型）3级认证、国家软件集成系统4级认证，是广州市企业研究开发机构，是中国建设工程造价管理协会理事单位、广东工程造价协会副会长单位、广东项目管理协会常务副会长单位、广东省建设工程交易协会常务理事单位、广东软件行业协会会员单位、佛山市顺德区造价与监理协会副会长单位。</p>\r
			<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
				立足广东，经过近20年的发展，全新的易达科技正在用软件和大数据智能计算技术推动中国工程造价行业从传统的预结算编审业务，向全过程工程咨询、数据科技与智能计算、投资增值、智能制造、政府公共投资全过程电子监控等创新商业模式发展，服务的企业涵盖全国各地发改、财政、审计、水利、住建、公共资源交易、院校、设计、房地产、造价咨询、项目管理、建设监理、招标代理、工程施工、政府业主等。</p>\r
			<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 8px;">\r
				&nbsp;</section>\r
			<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\r
				&nbsp;</p>\r
			<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: -10px; margin-left: -10px; width: 30px;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
								<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: 仿宋;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 19.55px; font-family: sans-serif;">业务范围</span></strong></span></strong></strong></span></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
										<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">SCOPE OF BUSINESS</strong></span></section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: -10px; margin-right: -13px; margin-left: auto; width: 30px; margin-bottom: unset;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
					</section>\r
				</section>\r
			</section>\r
			<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 16px; text-indent: 2.11765em;">\r
				<span style="letter-spacing: 0.578px; font-size: 17px;">软件开发；软件销售；信息技术咨询服务；工程管理服务；工程技术服务（规划管理、勘察、设计、监理除外）；技术服务、技术开发、技术咨询、技术交流、技术转让技术推广；人工智能应用软件开发；工程和技术研究和试验发展；计算机系统服务：园林绿化工程施工；图书出租；出版物批发；出版物互联网销售。</span></p>\r
			<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-cropselx1="0" data-cropselx2="578" data-cropsely1="0" data-cropsely2="129" data-imgfileid="100012618" src="/gpma03/preview-20261117/assets/notices/notice-06-08.png" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 715px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
			</section>\r
		</section>\r
		<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
			<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\r
				&nbsp;</p>\r
			<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: -10px; margin-left: -10px; width: 30px;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
								<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="line-height: 19.55px; font-family: sans-serif;">资质认证</span></strong></strong></span></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
										<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">QUALIFICATION CERTIFICATION</strong></span></section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: -10px; margin-right: -13px; margin-left: auto; width: 30px; margin-bottom: unset;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
					</section>\r
				</section>\r
			</section>\r
			<section data-id="103057" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; text-align: center;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1em; background: rgb(250, 255, 245); box-sizing: border-box; margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; margin-bottom: unset; background-clip: initial;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 120px; margin-bottom: unset;">\r
									<section data-width="100%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 120px; margin-bottom: unset;">\r
										&nbsp;</section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: -20px; display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 1px; background: rgb(90, 159, 127); flex: 1 1 0%; margin-bottom: unset; overflow: hidden;">\r
								&nbsp;</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1.5em 1em 1em; line-height: 1.75em; letter-spacing: 1.5px; color: rgb(90, 159, 127); background: transparent; border-right: 1px solid rgb(44, 150, 80); border-bottom: 1px solid rgb(44, 150, 80); border-left: 1px solid rgb(44, 150, 80); border-top: none; box-sizing: border-box; margin-bottom: unset;">\r
							<p style="margin-bottom: 8px; font-size: 17px;">\r
								广州市企业研究开发机构</p>\r
							<p style="margin-bottom: 8px; font-size: 17px;">\r
								信息安全管理体系认证</p>\r
							<p style="margin-bottom: 8px; font-size: 17px;">\r
								质量管理体系认证证书</p>\r
							<p style="margin-bottom: 8px; font-size: 17px;">\r
								AAA级信用企业认证</p>\r
							<p style="margin-bottom: 8px; font-size: 17px;">\r
								高新技术企业认证</p>\r
							<p style="margin-bottom: 8px; font-size: 17px;">\r
								出版物经营许可证</p>\r
							<p style="margin-bottom: 8px; font-size: 17px;">\r
								CMMI3级认证</p>\r
							<p style="margin-bottom: 8px; font-size: 17px;">\r
								软件企业认证</p>\r
							<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\r
								&nbsp;</p>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<p>\r
									<img data-aistatus="1" data-backh="293" data-backw="508" data-imgfileid="100012638" src="/gpma03/preview-20261117/assets/notices/notice-06-09.png" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 657px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
							</section>\r
							<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\r
								<span style="font-family: sans-serif; font-size: 15px;">&nbsp;</span></p>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
			<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\r
				&nbsp;</p>\r
			<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: -10px; margin-left: -10px; width: 30px;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
								<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="line-height: 19.55px; font-family: sans-serif;">人才队伍</span></strong></strong></span></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
										<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">TALENT TEAM</strong></span></section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: -10px; margin-right: -13px; margin-left: auto; width: 30px; margin-bottom: unset;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
					</section>\r
				</section>\r
			</section>\r
			<p style="line-height: 1.75em; font-size: 17px; text-indent: 2.11765em;">\r
				公司员工230余人，研发人员150余人，平均研发经验10年以上，其中本科、硕士以上高精尖人才占90%以上，具有强大的造价行业软件与系统开发实力。</p>\r
			<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 5px; letter-spacing: 0.578px;">\r
				&nbsp;</p>\r
			<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px; margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: -10px; margin-left: -10px; width: 30px;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
								<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="line-height: 19.55px; font-family: &quot;Microsoft YaHei Light&quot;, sans-serif;">单位荣誉</span></strong></strong></span></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
										<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px;"><span style="line-height: 17.25px; font-family: &quot;Microsoft YaHei Light&quot;, sans-serif;">UNIT HONOR</span></strong></span></section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: -10px; margin-right: -13px; margin-left: auto; width: 30px; margin-bottom: unset;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
					</section>\r
				</section>\r
			</section>\r
			<section data-id="148037" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px; margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<p style="line-height: 1.75em; font-size: 17px; text-indent: 2.11765em;">\r
						公司已累计获得各项国家发明专利、软著及软件认证等荣誉资质100余项，是中国建设工程造价管理协会理事单位、广东省工程造价协会副会长单位、广东省建设工程交易协会常务理事单位、广东软件行业协会会员单位；是广东省建设工程标准定额站&ldquo;造价改革战略合作单位&rdquo;、广东省工程造价改革专家顾问单位；是国家造价监测数据标准、广东省造价数据标准、广东省二级水利造价工程师考试培训辅导教材的起草编写、统稿单位；连续3年获评广东省造价改革骨干团队、广东省造价大数据应用研究团队。</p>\r
				</section>\r
			</section>\r
			<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: unset;">\r
				<p>\r
					<img data-aistatus="1" data-backh="818" data-backw="578" data-imgfileid="100012639" src="/gpma03/preview-20261117/assets/notices/notice-06-10.png" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 715px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
			</section>\r
			<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 5px;">\r
				&nbsp;</p>\r
			<section data-id="145663" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto; display: flex; justify-content: center;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: -10px; margin-left: -10px; width: 30px;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M3.39,0A3.38,3.38,0,1,1,0,3.38,3.38,3.38,0,0,1,3.39,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,0a3.4,3.4,0,0,1,3.41,3.38,3.41,3.41,0,0,1-6.82,0A3.4,3.4,0,0,1,26.5,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,11.47A3.38,3.38,0,1,1,0,14.84,3.38,3.38,0,0,1,3.39,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,15,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(20, 73, 151); text-align: center; margin-bottom: unset;">\r
								<span style="font-size: 18px;"><strong data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="line-height: 19.55px; font-family: &quot;Microsoft YaHei Light&quot;, sans-serif;">项目展示</span></strong></strong></span></section>\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: flex; justify-content: center; margin-bottom: unset;">\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 1px 10px; background-color: rgb(102, 184, 113); box-sizing: border-box; margin-bottom: unset;">\r
									<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 15px; color: rgb(255, 255, 255); text-align: center; margin-bottom: unset;">\r
										<span style="font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px;"><span style="line-height: 17.25px; font-family: &quot;Microsoft YaHei Light&quot;, sans-serif;">PROJECTS SHOW</span></strong></span></section>\r
								</section>\r
							</section>\r
						</section>\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: -10px; margin-right: -13px; margin-left: auto; width: 30px; margin-bottom: unset;">\r
							<svg aria-label="插图" role="img" style="display:block;" viewbox="0 0 53 29" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><g><path d="M38.05,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,0a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,0Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,38.05,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,11.47a3.38,3.38,0,1,1-3.39,3.37A3.38,3.38,0,0,1,49.61,11.47Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M3.39,22.25A3.38,3.38,0,1,1,0,25.63,3.38,3.38,0,0,1,3.39,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M15,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,15,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M26.5,22.25a3.38,3.38,0,1,1-3.41,3.38A3.4,3.4,0,0,1,26.5,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M38.05,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,38.05,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g><g><path d="M49.61,22.25a3.38,3.38,0,1,1-3.39,3.38A3.38,3.38,0,0,1,49.61,22.25Z" style="fill:#73d2ca;fill-rule:evenodd;"></path></g></g></g></svg></section>\r
					</section>\r
				</section>\r
			</section>\r
			<section data-id="148037" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
				<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
					<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
						<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
							<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
								<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
									易达科技为全国知名工程造价类软件企业，服务的企业涵盖全国各地业主单位、发改、财政、审计、水利、住建、公共资源交易、院校、设计、房地产、造价咨询、项目管理、建设监理、招标代理、工程施工、政府等企业超过 15000 家，培训过的从业人员超过 60 万人次。</p>\r
								<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em;">\r
									部分典型用户：</p>\r
								<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; margin-bottom: 24px;">\r
									<p>\r
										<img data-aistatus="1" data-backh="333" data-backw="578" data-imgfileid="100012640" src="/gpma03/preview-20261117/assets/notices/notice-06-11.png" style="vertical-align: bottom; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 715px; border-radius: initial; background-color: transparent !important; background-size: 0px !important;" /></p>\r
								</section>\r
							</section>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
	</section>\r
	<section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); letter-spacing: 0.578px; margin-bottom: unset;">\r
		<section data-pm-slice="3 9 [&quot;para&quot;,{&quot;tagName&quot;:&quot;section&quot;,&quot;attributes&quot;:{&quot;style&quot;:&quot;-webkit-tap-highlight-color:rgba(0, 0, 0, 0); letter-spacing:0.578px; margin-bottom:unset;&quot;},&quot;namespaceURI&quot;:&quot;http://www.w3.org/1999/xhtml&quot;}]" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: unset;">\r
			<p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 5px;">\r
				&nbsp;</p>\r
		</section>\r
	</section>\r
</section>`},{id:"06fe0be627a34c04a0b5eff7d6b11944",title:"深化“咨投运建”合作交流 共谋一体化发展新路径 ——中建一局三公司来我会拜访交流",date:"2026-06-09",tag:"会议",cover:"/gpma03/preview-20261117/assets/notices/notice-07-01.jpg",hasCover:!0,summary:"深化“咨投运建”合作交流 共谋一体化发展新路径 ——中建一局三公司来我会拜访交流 2026年6月3日下午，中建一局集团第三建筑有限公司（以下简称“中建一局三公司”）副总经理林冠华、投资运营与城市更新部总经理陈浩、华南分公",content:`<p style="text-align: center;">\r
	<strong><span style="font-size: 22px;">&nbsp;深化&ldquo;咨投运建&rdquo;合作交流 共谋一体化发展新路径</span></strong></p>\r
<p style="text-align: center;">\r
	<strong><span style="font-size: 22px;">&mdash;&mdash;中建一局三公司来我会拜访交流</span></strong></p>\r
<p>\r
	&nbsp;</p>\r
<section class="article135" data-role="outer" label="edit by 135editor">\r
	<section class="_135editor" data-id="171969" data-tools="135编辑器">\r
		<section style="margin: 10px auto;">\r
			<section data-width="78%" style="width: 557.688px; height: 4px; background: linear-gradient(to left, rgb(255, 255, 255), rgb(255, 200, 123)); margin-left: auto; box-sizing: border-box; max-width: 78%;">\r
				&nbsp;</section>\r
			<section style="background-color: rgb(255, 248, 239); padding: 20px 15px; box-sizing: border-box;">\r
				<section class="135brush" data-autoskip="1" style="text-align: justify; line-height: 1.75em; letter-spacing: 1.5px; font-size: 17px; color: rgb(77, 41, 41); background-color: transparent;">\r
					<p style="text-indent: 2.17647em;">\r
						2026年6月3日下午，中建一局集团第三建筑有限公司（以下简称&ldquo;中建一局三公司&rdquo;）副总经理林冠华、投资运营与城市更新部总经理陈浩、华南分公司副总经理李强等一行到访广东省项目管理协会，双方围绕&ldquo;咨投运建&rdquo;一体化模式、城市更新项目落地及团体标准共建等议题展开深入交流。协会会长赖铭华、顾问潘奇俊，常务副会长单位永道工程咨询有限公司副总经理谢望平、副会长单位寰球设计（广东）有限公司副总经理陈焯荣及城市公共艺术研究中心（大湾区）副主任杨存卿等参加座谈会。会议由协会顾问潘奇俊主持。</p>\r
				</section>\r
			</section>\r
			<section data-width="100%" style="width: 715px; height: 4px; background: linear-gradient(to left, rgb(255, 255, 255), rgb(255, 200, 123)); box-sizing: border-box; max-width: 100%;">\r
				&nbsp;</section>\r
			<section class="assistant" style="width: 40px; margin-left: auto; margin-top: -42px; box-sizing: border-box;">\r
				&nbsp;</section>\r
		</section>\r
	</section>\r
	<section class="_135editor" data-role="paragraph">\r
		<p>\r
			&nbsp;</p>\r
		<p align="center" style="text-align: center;">\r
			<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-07-01.jpg" style="width: 715px;" /></p>\r
	</section>\r
	<section class="_135editor" data-role="paragraph">\r
		<section class="_135editor" data-id="171124" data-tools="135编辑器">\r
			<section style="margin: 10px auto;">\r
				<section style="border: 1px solid rgb(255, 200, 123); padding: 15px 10px 20px; margin-top: 15px; box-sizing: border-box;">\r
					<section class="135brush" data-autoskip="1" style="text-align: justify; line-height: 1.75em; letter-spacing: 1.5px; font-size: 15px; background-color: transparent;">\r
						<p style="line-height: 1.75; margin-bottom: 10px; text-indent: 2.46666em;">\r
							<span style="font-size: 17px;">座谈会上，赖铭华对中建一局三公司一行表示欢迎，并介绍了协会近期工作重点。他指出，协会近年来在评优评先、标准制定、资源整合等方面取得扎实成效。未来双方可在三方面深化合作：一是资源互通，依托协会覆盖珠三角及粤东西北的会员网络，精准匹配城市更新项目所需的咨询、投资、设计、建设、运营等全链条资源；二是标准共建，将中建一局三公司在&ldquo;咨投运建&rdquo;领域的实践成果转化为可推广的团体标准或典型案践；三是品牌与人才联动，欢迎企业推荐专家加入协会专家库，并在人才培训、考察交流等方面开展实质性合作，共同赋能行业高质量发展。</span></p>\r
						<p align="center" style="line-height: 1.75; text-align: center; margin-bottom: 10px;">\r
							<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-07-02.jpg" style="width: 693px;" /></p>\r
						<p align="center" style="line-height: 1.75; text-align: center; margin-bottom: 10px;">\r
							<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-07-03.jpg" style="width: 693px;" /></p>\r
						<p style="margin-bottom: 10px; text-indent: 2.46666em;">\r
							<span style="font-size: 17px;">林冠华详细介绍了中建一局三公司的发展历程与业务生态。公司成立于1952年，拥有建筑工程施工总承包特级资质，合同额约400亿元、产值近200亿元，是国内领先的国有大型建筑施工企业，同时也是中建一局海外核心运营单位。依托央企资信、投融资资源与全产业链优势，公司立足&ldquo;咨投运建&rdquo;（咨询+投资+建设+运营）一体化路径，开展了一系列落地探索：一是前置融资策划，联动政策性银行、产业资本，针对城市更新、民生基建、冷链产业园等项目匹配专项债、政策性贷款及社会资本，有效破解地方平台资本金短缺难题；二是运营前置嵌入EPC全流程，在规划设计阶段即联动康养、冷链、物业等产业运营方，根据后期运营需求优化建筑布局与配套设施，规避传统项目&ldquo;重建设、轻运营、建成闲置&rdquo;的痛点；三是全周期闭环落地，国内聚焦老旧小区、医疗基建、产业园区落地&ldquo;咨投建运&rdquo;项目，海外依托伊拉克油田配套项目延伸&ldquo;建造+长期运维&rdquo;服务，形成&ldquo;融资兜底、总承包控本、市场化运营造血&rdquo;的闭环模式，实现项目资产长效运营增值。他表示，中建一局三公司2026年战略目标正是以&ldquo;咨投运建&rdquo;模式推进城市更新项目实施，这与协会推动数智建造、投融资协同、全生命周期管理的方向高度契合。</span></p>\r
						<p align="center" style="margin-bottom: 10px; text-align: center;">\r
							<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-07-04.jpg" style="width: 693px;" /></p>\r
						<p style="margin-bottom: 10px; text-indent: 2.46666em;">\r
							<span style="font-size: 17px;">陈焯荣针对当前普遍存在的重建设轻运营等问题，提出了推行运营资源前置植入的开发逻辑。杨存卿分享了城市公共艺术研究中心联动大湾区城市更新产业联盟，构建起&ldquo;智库+专业落地服务+产业运营造血&rdquo;的三位一体生态体系。</span></p>\r
						<section class="_135editor" data-id="172748" data-tools="135编辑器">\r
							<section style="margin: 10px auto; padding-top: 40px; box-sizing: border-box;">\r
								<section style="border: 1px solid rgb(226, 200, 164); padding: 10px 10px 20px; box-sizing: border-box;">\r
									<section data-op="division" style="display: flex; justify-content: space-between; margin-top: -40px;">\r
										<section style="flex: 1 1 0%;">\r
											<section style="background-color: rgb(219, 186, 141); padding: 4px; box-sizing: border-box;">\r
												<section data-width="100%" style="width: 322.5px; box-sizing: border-box; max-width: 100%;">\r
													<img data-ratio="0.9960474308300395" data-w="253" data-width="100%" draggable="false" src="/gpma03/preview-20261117/assets/notices/notice-07-05.jpg" style="vertical-align: baseline; width: 322.5px; display: block; box-sizing: border-box;" />\r
													<p>\r
														&nbsp;</p>\r
												</section>\r
											</section>\r
										</section>\r
										<section style="flex: 1 1 0%; margin-left: 10px;">\r
											<section style="background-color: rgb(219, 186, 141); padding: 4px; box-sizing: border-box;">\r
												<section data-width="100%" style="width: 322.5px; box-sizing: border-box; max-width: 100%;">\r
													<p>\r
														&nbsp;</p>\r
													<img data-ratio="0.9960474308300395" data-w="253" data-width="100%" draggable="false" src="/gpma03/preview-20261117/assets/notices/notice-07-06.jpg" style="vertical-align: baseline; width: 322.5px; display: block; box-sizing: border-box;" /></section>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
							</section>\r
						</section>\r
						<p style="margin-bottom: 10px; text-indent: 2.46666em;">\r
							<span style="font-size: 17px;">与会各方围绕投融资、工程总承包、后期运营全链条展开深入研讨，梳理了当前项目落地中的融资难点、建设管控短板及运营资源缺位等现实问题，厘清了政策性资金申报路径与项目资金拼盘思路。</span></p>\r
						<p style="margin-bottom: 10px; text-indent: 2.46666em;">\r
							<span style="font-size: 17px;">本次交流活动增进了双方的相互了解，达成了资源互通、优势互补的合作共识。参会国企与民企立足自身资源禀赋，明确了差异化合作方向。下一步，协会将持续搭建对接桥梁，推动中建一局三公司及会员企业在团体标准编制、城市更新项目联合投资运营、专家库共建等方面尽快形成具体合作成果，共同促进行业高质量发展。</span></p>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
		<p>\r
			&nbsp;</p>\r
	</section>\r
</section>\r
<div>\r
	&nbsp;</div>`},{id:"7e0361c95f044b679ae12564dae3b236",title:"关于公布2025年度优秀项目管理单位、项目管理工程师及优秀项目评审结果的通知",date:"2026-05-28",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于公布2025年度优秀项目管理单位、项目管理工程师及优秀项目评审结果的通知 各有关单位： 根据《关于开展2025年度优秀项目管理单位、项目管理工程师及优秀项目评选工作的通知》（粤项管协函〔2026〕1号）要求，经企业申",content:`<p align="center" class="MsoNormal" style="text-align:center;line-height:28.0pt;\r
mso-line-height-rule:exactly;layout-grid-mode:char">\r
	<span style="font-size:22px;"><span style="font-family: 华文中宋;">关于公布<span lang="EN-US">2025</span>年度优秀项目管理单位、项目管理工程师及优秀项目评审结果的通知</span></span><span style="font-size:\r
20.0pt;mso-bidi-font-size:16.0pt;font-family:华文中宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋;mso-bidi-font-family:仿宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="color:#000000;"><span style="font-size:18px;"><span style="font-family: 仿宋;">各有关单位：</span></span></span><span style="font-size:16.0pt;font-family:仿宋;mso-bidi-font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="color:#000000;"><span style="font-size:18px;"><span style="font-family: 仿宋;">根据《关于开展<span lang="EN-US">2025</span>年度优秀项目管理单位、项目管理工程师及优秀项目评选工作的通知》（粤项管协函〔<span lang="EN-US">2026</span>〕<span lang="EN-US">1</span>号）要求，经企业申报、协会初审、专家评审、名单公示等程序，现将获评<span lang="EN-US">2025</span>年度优秀项目管理单位、项目管理工程师及优秀项目的名单予以公布（详见附件）。</span></span></span><span style="font-size:16.0pt;\r
font-family:仿宋;mso-bidi-font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="color:#000000;"><span style="font-size:18px;"><span style="font-family: 仿宋;">希望获奖单位和个人珍惜荣誉、再接再厉，持续发挥示范引领作用，为我省项目管理行业高质量发展作出新的更大贡献。</span></span></span><span style="font-size:16.0pt;\r
font-family:仿宋;mso-bidi-font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋;mso-bidi-font-family:仿宋">&nbsp;</span></p>\r
<p>\r
	<span style="color:#000000;"><span style="font-size:18px;"><span style="font-family: 仿宋;">附件：<a href="/gpma03/preview-20261117/assets/notices/notice-08-attachment-01.pdf">关于公布2025年度优秀项目管理单位、项目管理工程师及优秀项目评审结果的通知(1).pdf</a></span></span></span></p>`},{id:"7a435ec9db4849a5bfb4e45fd06fd715",title:"关于2025年度优秀项目管理单位、项目管理工程师及优秀项目评审结果的公示",date:"2026-05-08",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于2025年度优秀项目管理单位、项目管理工程师及优秀项目 评审结果的公示 各有关单位: 根据《关于开展2025年度优秀项目管理单位、项目管理工程师及优秀项目评选工作的通知》(粤项管协函(2026)1号)要求，我会组织专",content:`<p style="text-align: center;">\r
	<strong><span style="font-size:22px;">关于2025年度优秀项目管理单位、项目管理工程师及优秀项目</span></strong></p>\r
<p style="text-align: center;">\r
	<strong><span style="font-size:22px;">评审结果的公示</span></strong></p>\r
<p style="text-align: center;">\r
	&nbsp;</p>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p style="line-height: 1.75em; font-size: 17px; margin-bottom: 16px;">\r
		各有关单位:</p>\r
	<p style="line-height: 1.75em; font-size: 17px; margin-bottom: 16px; text-indent: 2.11765em; text-align: justify;">\r
		根据《关于开展2025年度优秀项目管理单位、项目管理工程师及优秀项目评选工作的通知》(粤项管协函(2026)1号)要求，我会组织专家组对各有关单位、个人及项目的申报材料进行了评审，现将评选结果予以公示。 公示期为5天，自2026年5月8日起至2026年5月12日止。</p>\r
	<p style="line-height: 1.75em; font-size: 17px; margin-bottom: 16px; text-indent: 2.11765em; text-align: justify;">\r
		公示期间，任何单位或个人如对评选结果有异议，请于公示期内以书面形式向协会秘书处反映。以个人名义反映的，请提供真实姓名、联系方式及地址;以单位名义反映的，请提供真实单位名称(加盖公章)、联系人、联系方式及地址。书面材料请发送至电子邮箱:gpma@vip.163.com，或邮寄至以下地址:广州市天河区华强路9号2509室(联系人:丘小姐，电话:13632411853)。</p>\r
	<p style="line-height: 1.75em; font-size: 17px; margin-bottom: 16px; text-indent: 2.11765em; text-align: justify;">\r
		&nbsp;</p>\r
	<p style="line-height: 1.75em; font-size: 17px; margin-bottom: 16px; text-indent: 2.11765em; text-align: justify;">\r
		&nbsp;</p>\r
	<section class="_editor" data-style-id="70087" data-support="96编辑器" style="margin-bottom:unset;">\r
		<section style="display:flex;align-items:flex-end;margin-bottom:unset;">\r
			<section style="background-image:linear-gradient(90deg, rgb(73, 141, 213), rgb(50, 108, 193));clip-path:polygon(0px 0px, 100% 0px, 90% 100%, 0% 100%);padding:4px 30px 4px 22px;box-sizing:border-box;margin-bottom:unset;">\r
				<p style="color:rgb(255, 255, 255);font-size:16px;line-height:1.75;letter-spacing:0px;">\r
					<span style="font-size:20px;"><strong>原&nbsp; 文&nbsp; 件</strong></span></p>\r
			</section>\r
			<section style="width:9px;height:10px;background-color:rgb(233, 203, 151);margin-left:-5px;margin-bottom:unset;overflow:hidden;line-height:0;transform:skew(-24deg);-webkit-transform:skew(-24deg);-moz-transform:skew(-24deg);-ms-transform:skew(-24deg);-o-transform:skew(-24deg);">\r
				&nbsp;</section>\r
			<section style="flex:1 1 0%;height:1px;background-color:rgb(225, 178, 125);margin-left:5px;margin-bottom:unset;overflow:hidden;line-height:0;">\r
				<p>\r
					&nbsp;</p>\r
			</section>\r
		</section>\r
	</section>\r
	<p>\r
		&nbsp;</p>\r
	<p>\r
		<span style="font-size:18px;"><a href="/gpma03/preview-20261117/assets/notices/notice-09-attachment-01.pdf">关于2025年度优秀项目管理单位、项目管理工程师及优秀项目的公示（已盖章）.pdf</a></span></p>\r
	<p>\r
		&nbsp;</p>\r
	<p>\r
		&nbsp;</p>\r
	<p>\r
		&nbsp;</p>\r
	<p>\r
		&nbsp;</p>\r
</section>`},{id:"c0517852d6a9445db2818a95bf189a8b",title:"关于征集2026年度团体标准计划项目的通知",date:"2026-04-15",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于征集2026年度团体标准计划项目的通知 各会员单位: 为进一步推动项目管理领域的技术创新与管理进步，满足市场发展、行业升级和企业实际需求，发挥团体标准在支撑和引领行业发展中的作用，根据《团体标准管理规定》《广东省项目",content:`<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<section class="_editor" data-style-id="69952" data-support="96编辑器" style="margin-bottom:unset;">\r
	<section data-align="title" style="text-align:center;margin:0px 0px;">\r
		<section style="display:inline-block;margin-bottom:unset;">\r
			<section style="background-color:#88DCEC;padding:5px;box-sizing:border-box;margin-bottom:unset;transform:rotateZ(0deg);-webkit-transform:rotateZ(0deg);-moz-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);-o-transform:rotateZ(0deg);">\r
				<section style="background-color:#fefefe;padding:8px 16px;border-radius:8px;box-sizing:border-box;margin-bottom:unset;">\r
					<p style="color: rgb(90, 195, 215); letter-spacing: 0px; line-height: 1.2; font-size: 18px;">\r
						<strong>关于征集2026年度团体标准计划项目的通知</strong></p>\r
				</section>\r
			</section>\r
		</section>\r
	</section>\r
</section>\r
<section class="_editor" data-style-id="70070" data-support="96编辑器" style="margin-bottom:unset;">\r
	<section class="_li" style="margin:15px 0px 0;">\r
		<section style="background-color:#F1FBFB;padding:20px 15px;margin-top:15px;box-sizing:border-box;margin-bottom:unset;">\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-align: justify;">\r
				各会员单位:</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				为进一步推动项目管理领域的技术创新与管理进步，满足市场发展、行业升级和企业实际需求，发挥团体标准在支撑和引领行业发展中的作用，根据《团体标准管理规定》《广东省项目管理协会团体标准管理办法》有关规定，现面向全体会员单位公开征集2026年度团体标准立项计划，有关事项通知如下:</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; margin-top: 24px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong>一、立项原则</strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				(一)合规性:符合法律法规、强制性标准及国家产业政策，不与现行国标、行标、地标相冲突，可对其补充细化或提升要求。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				(二)实用性:聚焦行业共性需求与市场急需，基于成熟技术及实践基础，具备可操作性与推广价值。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				(三)先进性:鼓励产学研用联合申报，支持跨领域、跨行业协同制定，体现标准的科学性、适用性与前瞻性。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; margin-top: 24px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">二、征集范围</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				本次立项聚焦项目管理全链条、全生命周期，重点覆盖本会会员核心领域，优先支持填补标准空白、解决行业痛点、引领技术创新、服务粤港澳大湾区建设的项目，具体包括:</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong>工程咨询类:</strong>全过程工程咨询、投资决策咨询、可行性研究、评估评价、造价咨询、招标代理、项目后评价等服务规范、质量评价、人员能力要求等。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong>建筑施工与监理类</strong>:施工项目管理、工程监理、质量安全管控、绿色施工、智慧工地、装配式建筑项目管理、BIM技术应用、全过程造价管控等标准等。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">工程设计类</span></strong>:设计管理流程、协同设计、数字化设计、设计成果交付、设计质量管控、EPC设计施工一体化管理等规范。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">工程检测类</span></strong>:工程质量检测全流程管理、检测机构数字化管理、智能无损检测与全生命周期监测、检测数据治理与信息平台、数字化监管与数据安全、检测人员能力评价、既有建筑安全鉴定与监测、绿色低碳检测等标准。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">科技与数字化类</span></strong>:项目管理数字化平台、数据治理、AI在项目管理中的应用、信息技术应用、项目管理信息化、数字孪生、智慧项目管理体系等标准。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">投融资类</span></strong>:项目投融资策划、投融资风险管控、投融资合规管理、PPP项目投融资管理、项目融资模式规范、投融资绩效评价、投融资流程标准化等标准。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">通用管理类</span></strong>:项目管理体系、项目组合管理、项目治理、项目经理能力、项目风险管理、合同管理、供应链管理、绿色低碳项目管理、信用评价、团体标准编制导则等。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; margin-top: 24px; font-size: 17px; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">三、申报条件</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">(一)申报主体</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				1.申报主体须为本会会员单位。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				2.可由单独单位申报或多家单位联合申报;联合申报时须明确主要编制单位。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				3.鼓励会员单位联合高校、科研院所、企业及相关机构共同申报。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">(二)申报要求</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				1.标准选题应无现行有效的国标、行标、地标，或现有标准无法满足行业高质量发展与市场创新需求，需制定严于或细化现有标准的团体标准。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				2.申报单位应具备相关领域的技术实力、行业影响力及标准化工作基础，能保障标准编制所需的人力、物力、经费<span style="text-indent: 2.11765em;">与时间。</span></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				3.主要起草人应熟悉项目管理业务、掌握标准化编写规范，具备丰富实践经验与组织协调能力，能全程参与编制工作。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				4.申报项目需完成前期调研，明确标准核心内容、适用范围、技术指标及编制计划，具备立项可行性。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				5.标准编制经费由主编及参编单位自筹，额度应能支撑标准编制的全过程。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				6.不涉及专利等知识产权纠纷。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; margin-top: 24px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">四、申报程序</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">(一)申报材料</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				请符合要求的申报单位填写《团体标准立项申请书》(见附件)，并附团体标准草案及其他有助于说明立项情况的文件(如有)，加盖公章后将纸质材料邮寄至协会秘书处，同时将电子文档(word及盖章版PDF)发送至邮箱gpma@vip.163.com，邮件以&ldquo;团体标准立项申请+单位名称&rdquo;形式命名。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">(二)立项审查</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				协会将根据项目申报情况，适时组织专家开展立项论证，公示并发布立项评审结果。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">(三)批次安排</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				原则上每半年集中开展一批次标准提案审查，具体评审时间另行通知。协会将根据申报情况，按批次组织立项审批。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">(四)截止时间</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				本次征集自发文之日起至5月30日止，逾期自动转入下一批次审查。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; margin-top: 24px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">五、其他事项</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				1.团体标准由协会统一归口管理、编号、发布，并在全国团体标准信息平台公示，供社会自愿采用。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				2.立项获批后，申报单位须严格按计划推进编制，确保质量与进度，不得无故中止;确需调整须书面申请并获批。3.协会将择优推荐优秀团体标准转化为地方标准或行业标准，并支持标准宣贯与应用推广。</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; margin-top: 24px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				<strong><span style="letter-spacing: 0.57834px; line-height: 26.25px;">六、联系方式</span></strong></p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				联系人:谢先生</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				电 话:18720227761</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				地址:广州市天河区华强路9号保利中盈大厦2509房</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-indent: 2.11765em; text-align: justify;">\r
				邮 箱:gpma@vip.163.com</p>\r
			<p style="text-align: justify;">\r
				&nbsp;</p>\r
			<p style="text-align: justify;">\r
				&nbsp;</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-align: right;">\r
				广东省项目管理协会</p>\r
			<p style="line-height: 1.75em; margin-bottom: 16px; font-size: 17px; text-align: right;">\r
				2026年4月15日</p>\r
			<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
				&nbsp;</p>\r
		</section>\r
		<section style="width:10px;height:10px;background-color:#80DEEA;margin-left:auto;margin-top:-5px;margin-right:23px;margin-bottom:unset;overflow:hidden;line-height:0;">\r
			&nbsp;</section>\r
	</section>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<section class="_editor" data-style-id="69624" data-support="96编辑器" style="margin-bottom:unset;">\r
	<section data-align="title" style="display:flex;justify-content:center;align-items:center;margin:0px 0px;">\r
		<section style="width:8px;height:8px;background-color:#88dcec;margin-right:15px;margin-bottom:unset;overflow:hidden;line-height:0;">\r
			<p>\r
				&nbsp;</p>\r
		</section>\r
		<section style="background-color:#88dcec;padding:8px;box-sizing:border-box;margin-bottom:unset;">\r
			<section style="border:1px solid #f0c383;padding:5px 30px;background-color:#fefefe;box-sizing:border-box;margin-bottom:unset;">\r
				<section style="text-align:center;margin-bottom:unset;">\r
					<p style="color:rgb(136, 220, 236);letter-spacing:2px;font-size:18px;">\r
						<span style="color: rgb(0, 0, 0);"><strong>附 件</strong></span></p>\r
				</section>\r
			</section>\r
		</section>\r
		<section style="width:8px;height:8px;background-color:#88dcec;margin-left:15px;margin-bottom:unset;overflow:hidden;line-height:0;">\r
			&nbsp;</section>\r
	</section>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p style="margin-top:16px;line-height:1.75em;font-size:15px;margin-bottom:16px;text-align:center;">\r
		<span style="font-size:18px;"><span leaf=""><a class="weapp_text_link" data-miniprogram-appid="wx554ecad391d8c7a5" data-miniprogram-nickname="简文档" data-miniprogram-path="pages/doc/doc?uuid=96c3012aafcc4afb840e2b571b9e5978&amp;sid=71666485" data-miniprogram-servicetype="" data-miniprogram-type="text" style="white-space-collapse: collapse;">广东省项目管理协会2026年度团体标准立项征集通知.pdf</a></span></span></p>\r
	<p style="margin-top:16px;line-height:1.75em;font-size:15px;margin-bottom:16px;text-align:center;">\r
		<span style="font-size:18px;"><span leaf=""><a class="weapp_text_link" data-miniprogram-appid="wx554ecad391d8c7a5" data-miniprogram-nickname="简文档" data-miniprogram-path="pages/doc/doc?uuid=e8d1c7900cac44878637fb45ea9886b9&amp;sid=71666485" data-miniprogram-servicetype="" data-miniprogram-type="text" style="white-space-collapse: collapse;">附件：团体标准立项申请书.pdf</a></span></span></p>\r
	<p style="line-height:1.75em;font-size:15px;margin-bottom:16px;">\r
		&nbsp;</p>\r
</section>`},{id:"9ebad7b1a1914b5aa2c87b44cfc2c084",title:"关于聘任潘奇俊同志为协会顾问的通知",date:"2026-03-05",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-11-01.png",hasCover:!0,summary:"关于聘任潘奇俊同志为协会顾问的通知 各会员单位: 为进一步加强协会专业智库建设，提升协会服务水平和管理水平，经研究，决定聘任潘奇俊同志为广东省项目管理协会顾问，聘期三年，自即日起至2029年3月6日。",content:`<p>\r
	&nbsp;</p>\r
<section class="_editor" data-style-id="69474" data-support="96编辑器" style="margin-bottom:unset;">\r
	<section style="border:2px solid #EB2501;border-radius:10px;padding:15px;margin-top:10px;box-sizing:border-box;margin-bottom:unset;">\r
		<p style="line-height:1.75em;margin-bottom:16px;text-align:center;font-size:22px;">\r
			<strong>关于聘任潘奇俊同志为协会顾问的通知</strong></p>\r
		<p>\r
			&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;">\r
			各会员单位:</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			为进一步加强协会专业智库建设，提升协会服务水平和管理水平，经研究，决定聘任潘奇俊同志为广东省项目管理协会顾问，聘期三年，自即日起至2029年3月6日。</p>\r
		<p style="line-height:1.75em;font-size:15px;margin-bottom:16px;">\r
			&nbsp;</p>\r
		<section data-width="100%" style="width:100%;margin-top:12px;margin-bottom:unset;">\r
			<p style="text-align:center;">\r
				<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-11-01.png" style="width: 100%;" /></p>\r
		</section>\r
	</section>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>`},{id:"8e36e2b0c8f444b081bdd3e336263887",title:"关于开展2025年度优秀项目管理单位、项目管理工程师及优秀项目评选工作的通知",date:"2026-01-28",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于开展2025年度优秀项目管理单位、项目管理工程师及优秀项目评选工作的通知 关于开展2025年度优秀项目管理单位、项目管理 工程师及优秀项目评选工作的通知 各有关单位： 为深入贯彻省委、省政府关于推动高质量发展、建设现",content:`<p style="line-height: 1.75em; margin-bottom: 16px; text-align: center; font-size: 19px;">\r
	<span style="font-size:22px;"><strong>关于开展2025年度优秀项目管理单位、项目管理</strong><strong>工程师及优秀项目评选工作的通知</strong></span></p>\r
<p>\r
	&nbsp;</p>\r
<section class="_editor" data-style-id="69063" data-support="96编辑器" style="margin-bottom:unset;">\r
	<section style="background-color:rgb(255, 248, 231);border:2px solid rgb(255, 102, 0);border-radius:8px;padding:15px;margin:0px auto;box-sizing:border-box;">\r
		<p style="line-height:1.75em;margin-bottom:16px;text-align:center;font-size:19px;">\r
			<strong>关于开展2025年度优秀项目管理单位、项目管理</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;text-align:center;font-size:19px;">\r
			<strong>工程师及优秀项目评选工作的通知</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-align:center;">\r
			&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;">\r
			各有关单位：</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			为深入贯彻省委、省政府关于推动高质量发展、建设现代化产业体系的战略部署，进一步发挥优秀典型的示范引领与辐射带动作用，激发行业创新活力，提升专业化、标准化与数字化管理水平，增强企业核心竞争力与品牌影响力，推动我省项目管理行业向更高层次、更优质量迈进，广东省项目管理协会（以下简称&ldquo;协会&rdquo;）决定组织开展2025年度优秀项目管理单位、优秀项目管理工程师及优秀项目评选工作。现将有关事项通知如下：</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;">\r
			&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			<strong>一、申报要求</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（一）广东省项目管理协会会员，本着自愿原则，均可报名参加评选活动；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（二）企业及管理人员严格遵守国家法律法规，在经营活动中持续保持合规经营，无严重违法违规经营行为记录；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（三）申报项目为已经完工的项目，项目期间未发生重大及以上质量安全事故。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			<strong>二、奖项设置</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（一）优秀项目管理单位；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（二）优秀项目管理工程师；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（三）优秀项目，包含项目优质管理奖、项目创新管理奖、项目绿色建造奖。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			<strong>三、申报条件</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			<strong>（一）优秀项目管理单位</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			1.从事项目管理相关工作满五年以上，无违法犯罪记录的单位；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			2.在行业内改革与发展中贡献突出，能够自觉维护行业的社会形象，在行业内起到模范带头作用；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			3.单位领导集体团结协作、廉洁自律，具有较强的凝聚力与责任感，管理制度健全；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			4.维护职员合法权益，鼓励职员学习、掌握行业新技术，高级技术人员占比高，整体素质良好，有较强的团队合作精神，科技创新力度大，知识产权保护较好；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			5.对社会贡献较大，行业代表性强，创新能力、品牌形象、社会效益和经济效益在本地区或本系统名列前茅；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			6.积极履行社会责任，热心公益事业，主动参加各类社会责任活动。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			<strong>（二）优秀项目管理工程师</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			1.从事项目管理相关工作满八年以上，无违法犯罪记录的个人；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			2.遵纪守法，爱岗敬业，热爱行业工作，有良好的职业道德和社会信誉；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			3.诚实守信，无违规违纪不良行为记录，期间曾获当地政府部门、行业协会或主流媒体等颁发的奖项或表彰证书；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			4.坚持社会主义价值观，具有较强的事业心和责任感，在业内影响力较高，项目管理经验和能力较强；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			5.工作精益求精，在项目管理专业理论研究和业务工作中贡献突出，科技创新能力强，期间项目管理业绩显著。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			<strong>（三）优秀项目</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			1.项目优质管理奖：申报项目应在项目进度管控、质量安全保障、成本优化等基础管理环节表现突出；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			2.项目创新管理奖：申报项目应在项目管理技术、模式等方面有创新突破；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			3.项目绿色建造奖：申报项目应在低碳施工、节能材料应用、建筑垃圾资源化等绿色建造实践中成效显著；</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			4.同一单位申报优秀项目申报数量不超过3个。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			<strong>四、评选程序</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			评选程序遵循&ldquo;公开、公平、公正、择优&rdquo;的原则，按照以下程序进行：</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（一）申报</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			遵循&ldquo;自愿申报、不收取费用&rdquo;的基本规则，由申报单位统一组织内部审核和申报工作。申报单位需按要求（附件7）填写提交相关申报材料（附件1-6）。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（二）评审</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			协会组织成立评审委员会，对申报材料和工作实绩进行综合考核评审，形成拟表彰优秀单位、个人、项目名单。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（三）公示</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			评审结果将在协会官网及相关信息平台进行公示，公示期不少于3个工作日，广泛征求社会各界意见。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（四）表彰</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			公示无异议的，经协会审批后，对外公布评选结果并进行通报表彰。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			<strong>五、相关要求</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（一）高度重视，精心组织。会员单位要充分认识此次评选活动的重要意义，积极组织申报工作。并以此为契机，提升项目管理服务水平，提高企业和个人的行业影响力。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（二）实事求是，诚信申报。确保所提交材料真实、准确、完整，严谨弄虚作假。一经发现申报材料不实，将取消参评资格，并记入行业诚信档案。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			（三）规范材料，按时报送。申报材料应按照要求格式填写并装订成册，一式三份，加盖单位公章后，于2026年3月13日前将纸质材料邮寄至协会秘书处，同时将扫描件（PDF格式）发送至协会邮箱。</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			<strong>六、联系方式</strong></p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			联系人：丘小姐</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			电&nbsp; 话：13632411853</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			地&nbsp; 址：广州市天河区华强路9号保利中盈大厦2509房</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;font-size:17px;text-indent:2.11765em;">\r
			邮&nbsp; 箱：gpma@vip.163.com</p>\r
		<p style="line-height: 28px; margin-bottom: 15px; font-size: 17px;">\r
			&nbsp;</p>\r
		<p style="line-height: 28px; margin-bottom: 15px; font-size: 17px;">\r
			&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;text-align:right;font-size:17px;">\r
			广东省项目管理协会&nbsp;</p>\r
		<p style="line-height:1.75em;margin-bottom:16px;text-align:right;font-size:17px;">\r
			2026年1月28日&nbsp;&nbsp;</p>\r
		<p style="line-height: 28px; margin-bottom: 15px; font-size: 15px;">\r
			&nbsp;</p>\r
	</section>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<section class="_editor" data-style-id="68999" data-support="96编辑器" style="margin-bottom:unset;">\r
	<section style="margin:0px 0;">\r
		<section style="background-color:#FF6600;padding:0px 0px 8px;box-sizing:border-box;margin-bottom:unset;">\r
			<p>\r
				&nbsp;</p>\r
			<section style="margin-top:4px;margin-left:20px;margin-bottom:unset;">\r
				<p style="color:rgb(255, 255, 255);letter-spacing:2px;font-size:18px;">\r
					<strong>附 件</strong></p>\r
			</section>\r
		</section>\r
		<section style="width:5em;margin-left:auto;margin-top:-14px;margin-right:20px;margin-bottom:unset;">\r
			<p>\r
				&nbsp;</p>\r
		</section>\r
	</section>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p style="text-align: justify;">\r
		<span style="font-size:18px;"><a href="/gpma03/preview-20261117/assets/notices/notice-12-attachment-01.docx">附件1：2025年度优秀项目管理单位申报表 </a></span></p>\r
	<p style="text-align: justify;">\r
		<span style="font-size:18px;"><a href="/gpma03/preview-20261117/assets/notices/notice-12-attachment-02.docx">附件2：2025年度优秀项目管理工程师申报表 </a></span></p>\r
	<p style="text-align: justify;">\r
		<span style="font-size:18px;"><a href="/gpma03/preview-20261117/assets/notices/notice-12-attachment-03.docx">附件3：2025年度项目优质管理奖申报表</a> </span></p>\r
	<p style="text-align: justify;">\r
		<span style="font-size:18px;"><a href="/gpma03/preview-20261117/assets/notices/notice-12-attachment-04.docx">附件4：2025年度项目创新管理奖申报表</a> </span></p>\r
	<p style="text-align: justify;">\r
		<span style="font-size:18px;"><a href="/gpma03/preview-20261117/assets/notices/notice-12-attachment-05.docx">附件5：2025年度项目绿色建造奖申报表</a> </span></p>\r
	<p style="text-align: justify;">\r
		<span style="font-size:18px;"><a href="/gpma03/preview-20261117/assets/notices/notice-12-attachment-06.xlsx">附件6：企业申报信息汇总表</a> </span></p>\r
	<p style="text-align: justify;">\r
		<span style="font-size:18px;"><a href="/gpma03/preview-20261117/assets/notices/notice-12-attachment-07.docx">附件7：申报材料清单及要求</a> </span></p>\r
	<p style="text-align: justify;">\r
		<a href="/gpma03/preview-20261117/assets/notices/notice-12-attachment-08.pdf"><span style="font-size:18px;">关于开展2025年度优秀项目管理单位、项目管理工程师及优秀项目评选工作的通知</span></a></p>\r
</section>\r
<section class="_editor" style="margin-bottom:unset;">\r
	<p>\r
		&nbsp;</p>\r
</section>`},{id:"c1ae2aa03b584444be7e72e2b9dfea18",title:"活动通知 | “数智赋能·聚势共赢”——智造建筑领域案例实践与协同发展研讨会",date:"2025-06-17",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-13-01.jpg",hasCover:!0,summary:"“数智赋能·聚势共赢” 智造建筑领域案例实践与协同发展研讨会 “数智赋能·聚势共赢” 智造建筑领域案例实践与协同发展研讨会 随着“智能制造”与“建筑工业化”的深度融合，智造建筑已成为行业转型升级的重要方向。广东省项目管理",content:`<p style="text-align: center;">\r
	&nbsp;</p>\r
<h1 class="rich_media_title " id="activity-name" style="-webkit-tap-highlight-color: transparent; margin: 0px 0px 14px; padding: 0px; outline: 0px; font-weight: 500; font-size: 22px; line-height: 1.4; user-select: text; color: rgba(0, 0, 0, 0.9); font-family: &quot;PingFang SC&quot;, system-ui, -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 0.544px; white-space-collapse: collapse; text-align: center;">\r
	<strong>&nbsp;&ldquo;数智赋能&middot;聚势共赢&rdquo;</strong></h1>\r
<h1 class="rich_media_title " style="-webkit-tap-highlight-color: transparent; margin: 0px 0px 14px; padding: 0px; outline: 0px; font-weight: 500; font-size: 22px; line-height: 1.4; user-select: text; color: rgba(0, 0, 0, 0.9); font-family: &quot;PingFang SC&quot;, system-ui, -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 0.544px; white-space-collapse: collapse; text-align: center;">\r
	<strong>智造建筑领域案例实践与协同发展研讨会</strong></h1>\r
<p>\r
	&nbsp;</p>\r
<section class="article135" data-role="outer" label="edit by 135editor">\r
	<section data-color="#1e9be8" style="margin-top: 10px; margin-bottom: 10px; letter-spacing: 0.578px; font-size: 16px; text-align: center; height: 0px;">\r
		&nbsp;</section>\r
	<section data-pm-slice="0 0 []" data-role="outer" label="edit by 135editor">\r
		<section class="_135editor" data-id="159443" data-tools="135编辑器">\r
			<section style="margin: 10px auto;">\r
				<section style="width: 45px;margin-left: auto;margin-right: 25px;margin-bottom: -6px;box-sizing:border-box;">\r
					<p>\r
						&nbsp;</p>\r
				</section>\r
				<section>\r
					<section style="display: flex;align-items: flex-end;justify-content: space-between;margin-bottom: -12px;">\r
						<section style="width: 12px;height: 12px;border-radius: 0 0 25px 0;border-right: 1px solid #00b050;border-bottom: 1px solid #00b050;border-left: 1px solid #ffffff;border-top: 1px solid #ffffff;box-sizing:border-box;">\r
							<p>\r
								&nbsp;</p>\r
						</section>\r
						<section style="width: 12px;height: 12px;border-radius: 0 0 0 25px;border-left: 1px solid #00b050;border-bottom: 1px solid #00b050;border-right: 1px solid #ffffff;border-top: 1px solid #ffffff;box-sizing:border-box;">\r
							<p>\r
								&nbsp;</p>\r
						</section>\r
					</section>\r
					<section style="border: 1px solid rgb(0, 176, 80); padding: 10px 5px 15px; box-sizing: border-box;">\r
						<section style="padding: 20px 15px 10px;box-sizing:border-box;">\r
							<section data-autoskip="1" style="text-align: justify; line-height: 1.75em; letter-spacing: 1.5px; background-color: transparent;">\r
								<section class="_135editor" data-id="159453" data-role="title" data-tools="135编辑器">\r
									<section style="margin: 10px auto;display: flex;justify-content: center;">\r
										<section>\r
											<section style="width: 45px;margin-left: auto;margin-right: -25px;margin-bottom: -17px;box-sizing:border-box;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section style="height: 25px;background: linear-gradient(to right,#ffe5cb,#ffffff);margin-left: -10px;margin-bottom: -14px;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section>\r
												<section style="background-color: #689f94;padding: 11px 25px;box-sizing:border-box;">\r
													<section style="font-size: 19px; color: #ffffff; text-align: center;">\r
														<strong data-brushtype="text">&nbsp;&ldquo;数智赋能&middot;聚势共赢&rdquo;</strong></section>\r
												</section>\r
											</section>\r
											<section style="display: flex;align-items: center;margin-top: 3px;">\r
												<section data-width="100%" style="width: 100%;height: 1px;border-top: 1px solid #edd4c2;max-width:100% !important;box-sizing:border-box;">\r
													<p>\r
														&nbsp;</p>\r
												</section>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
								<p align="center" style="text-align: center; font-size: 18px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px;">\r
									<strong>智造建筑领域案例实践与协同发展研讨会</strong></p>\r
								<p style="font-size: 15px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px;">\r
									&nbsp;</p>\r
								<p style="line-height: 1.75em; margin-bottom: 10px; text-indent: 2.17647em; font-size: 17px;">\r
									随着&ldquo;智能制造&rdquo;与&ldquo;建筑工业化&rdquo;的深度融合，智造建筑已成为行业转型升级的重要方向。广东省项目管理协会智造建筑委员会作为新成立的专项机构，旨在搭建行业交流平台，推动技术创新与资源共享。为促进会员单位间的经验互通与合作，广东省项目管理协会智造建筑委员会定于2025年6月26日下午举办&ldquo;数智赋能&middot;聚势共赢&rdquo;&mdash;&mdash;智造建筑领域案例实践与协同发展研讨会，本次会议将邀请建筑行业内领军人物和资深专家，就智能建筑的关键技术、创新点以及实际应用中遇到的挑战进行交流研讨，挖掘智造建筑领域的实践成果与痛点，助力行业高质量发展。现邀请从事工程建设领域及相关领域专业人员积极报名参加！</p>\r
								<p style="font-size: 15px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px;">\r
									&nbsp;</p>\r
								<section class="_135editor" data-id="159453" data-pm-slice="0 0 []" data-role="title" data-tools="135编辑器">\r
									<section style="margin: 10px auto;display: flex;justify-content: center;">\r
										<section>\r
											<section style="width: 45px;margin-left: auto;margin-right: -25px;margin-bottom: -17px;box-sizing:border-box;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section style="height: 25px;background: linear-gradient(to right,#ffe5cb,#ffffff);margin-left: -10px;margin-bottom: -14px;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section>\r
												<section style="background-color: #689f94;padding: 11px 25px;box-sizing:border-box;">\r
													<section style="font-size: 18px; color: #ffffff; text-align: center;">\r
														<strong data-brushtype="text">&nbsp;<strong><strong>一、活动单位</strong></strong></strong></section>\r
												</section>\r
											</section>\r
											<section style="display: flex;align-items: center;margin-top: 3px;">\r
												<section data-width="100%" style="width: 100%;height: 1px;border-top: 1px solid #edd4c2;max-width:100% !important;box-sizing:border-box;">\r
													<p>\r
														&nbsp;</p>\r
												</section>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
								<p align="center" style="font-size: 15px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px; text-align: center;">\r
									&nbsp;</p>\r
								<p align="center" style="font-size: 17px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px; text-align: center;">\r
									指导单位：广东省项目管理协会</p>\r
								<p align="center" style="font-size: 17px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px; text-align: center;">\r
									主办单位：广东省项目管理协会智造建筑委员会</p>\r
								<p style="font-size: 15px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px;">\r
									&nbsp;</p>\r
								<section class="_135editor" data-id="159453" data-pm-slice="0 0 []" data-role="title" data-tools="135编辑器">\r
									<section style="margin: 10px auto;display: flex;justify-content: center;">\r
										<section>\r
											<section style="width: 45px;margin-left: auto;margin-right: -25px;margin-bottom: -17px;box-sizing:border-box;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section style="height: 25px;background: linear-gradient(to right,#ffe5cb,#ffffff);margin-left: -10px;margin-bottom: -14px;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section>\r
												<section style="background-color: #689f94;padding: 11px 25px;box-sizing:border-box;">\r
													<section style="font-size: 18px; color: #ffffff; text-align: center;">\r
														<strong data-brushtype="text">&nbsp;<strong><strong>二、时间地点</strong></strong></strong></section>\r
												</section>\r
											</section>\r
											<section style="display: flex;align-items: center;margin-top: 3px;">\r
												<section data-width="100%" style="width: 100%;height: 1px;border-top: 1px solid #edd4c2;max-width:100% !important;box-sizing:border-box;">\r
													<p>\r
														&nbsp;</p>\r
												</section>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
								<p style="font-size: 15px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px;">\r
									&nbsp;</p>\r
								<p align="center" style="font-size: 17px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px; text-align: center;">\r
									时间：2025年6月26日（周四）14:00-17:30</p>\r
								<p align="center" style="font-size: 17px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px; text-align: center;">\r
									地点：广州市天河区华强路9号中盈大厦27楼</p>\r
								<p style="font-size: 15px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px;">\r
									&nbsp;</p>\r
								<section class="_135editor" data-id="159453" data-pm-slice="0 0 []" data-role="title" data-tools="135编辑器">\r
									<section style="margin: 10px auto;display: flex;justify-content: center;">\r
										<section>\r
											<section style="width: 45px;margin-left: auto;margin-right: -25px;margin-bottom: -17px;box-sizing:border-box;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section style="height: 25px;background: linear-gradient(to right,#ffe5cb,#ffffff);margin-left: -10px;margin-bottom: -14px;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section>\r
												<section style="background-color: #689f94;padding: 11px 25px;box-sizing:border-box;">\r
													<section style="font-size: 18px; color: #ffffff; text-align: center;">\r
														<strong data-brushtype="text">&nbsp;<strong><strong>三、会议信息</strong></strong></strong></section>\r
												</section>\r
											</section>\r
											<section style="display: flex;align-items: center;margin-top: 3px;">\r
												<section data-width="100%" style="width: 100%;height: 1px;border-top: 1px solid #edd4c2;max-width:100% !important;box-sizing:border-box;">\r
													<p>\r
														&nbsp;</p>\r
												</section>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
								<p style="font-size: 15px; text-indent: 0em; line-height: 1.75em; margin-bottom: 10px;">\r
									&nbsp;</p>\r
								<section style="text-align: center;">\r
									<img class="rich_pages wxw-img" data-backh="953" data-backw="536" data-imgfileid="100014142" data-ratio="1.7777777777777777" data-s="300,640" data-type="jpeg" data-w="1080" draggable="false" src="/gpma03/preview-20261117/assets/notices/notice-13-01.jpg" style="width: 100%; vertical-align: baseline; box-sizing: border-box;" type="block" /></section>\r
								<p>\r
									&nbsp;</p>\r
								<section class="_135editor" data-id="159453" data-pm-slice="0 0 []" data-role="title" data-tools="135编辑器">\r
									<section style="margin: 10px auto;display: flex;justify-content: center;">\r
										<section>\r
											<section style="width: 45px;margin-left: auto;margin-right: -25px;margin-bottom: -17px;box-sizing:border-box;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section style="height: 25px;background: linear-gradient(to right,#ffe5cb,#ffffff);margin-left: -10px;margin-bottom: -14px;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section>\r
												<section style="background-color: #689f94;padding: 11px 25px;box-sizing:border-box;">\r
													<section style="font-size: 18px; color: #ffffff; text-align: center;">\r
														<strong data-brushtype="text">&nbsp;<strong><strong>四、报名方式</strong></strong></strong></section>\r
												</section>\r
											</section>\r
											<section style="display: flex;align-items: center;margin-top: 3px;">\r
												<section data-width="100%" style="width: 100%;height: 1px;border-top: 1px solid #edd4c2;max-width:100% !important;box-sizing:border-box;">\r
													<p>\r
														&nbsp;</p>\r
												</section>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
								<p>\r
									&nbsp;</p>\r
								<p align="center" style="font-size: 17px; margin-bottom: 10px; line-height: 1.75em; text-align: center;">\r
									本次活动不收取任何费用，欢迎大家扫描下方二维码报名参加！</p>\r
								<section style="text-align: center;">\r
									<img class="rich_pages wxw-img" data-imgfileid="100014143" data-ratio="1.0055555555555555" data-s="300,640" data-type="png" data-w="180" draggable="false" src="/gpma03/preview-20261117/assets/notices/notice-13-02.png" style="vertical-align: baseline; width: 180px; height: 181px;" type="block" /></section>\r
								<p>\r
									&nbsp;</p>\r
								<section class="_135editor" data-id="159453" data-pm-slice="0 0 []" data-role="title" data-tools="135编辑器">\r
									<section style="margin: 10px auto;display: flex;justify-content: center;">\r
										<section>\r
											<section style="width: 45px;margin-left: auto;margin-right: -25px;margin-bottom: -17px;box-sizing:border-box;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section style="height: 25px;background: linear-gradient(to right,#ffe5cb,#ffffff);margin-left: -10px;margin-bottom: -14px;">\r
												<p>\r
													&nbsp;</p>\r
											</section>\r
											<section>\r
												<section style="background-color: #689f94;padding: 11px 25px;box-sizing:border-box;">\r
													<section style="font-size: 18px; color: #ffffff; text-align: center;">\r
														<strong data-brushtype="text">&nbsp;<strong><strong>五、联系方式</strong></strong></strong></section>\r
												</section>\r
											</section>\r
											<section style="display: flex;align-items: center;margin-top: 3px;">\r
												<section data-width="100%" style="width: 100%;height: 1px;border-top: 1px solid #edd4c2;max-width:100% !important;box-sizing:border-box;">\r
													<p>\r
														&nbsp;</p>\r
												</section>\r
											</section>\r
										</section>\r
									</section>\r
								</section>\r
								<p align="left" style="text-align: left; margin-bottom: 10px; line-height: 1.75em;">\r
									&nbsp;</p>\r
								<p align="center" style="text-align: center; font-size: 17px; margin-bottom: 10px; line-height: 1.75em;">\r
									赖老师 15915798110</p>\r
								<p align="left" style="text-align: left; margin-bottom: 10px; line-height: 1.75em;">\r
									&nbsp;</p>\r
								<p>\r
									&nbsp;</p>\r
							</section>\r
						</section>\r
						<section style="display: flex;align-items: center;">\r
							<section data-width="50%" style="display: flex;align-items: center;width: 50%;box-sizing:border-box;max-width:50% !important;">\r
								<section data-width="100%" style="width: 100%;height: 1px;border-top: 1px solid #edd4c2;max-width:100% !important;box-sizing:border-box;">\r
									<p>\r
										&nbsp;</p>\r
								</section>\r
								<section style="flex-shrink: 0;">\r
									<section style="width: 12px;box-sizing:border-box;">\r
										<svg style="display: block;" viewbox="0 0 22.92 22.92" xml:space="default" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><path d="M15.46,11.46a6.21,6.21,0,1,1-8,0,6.21,6.21,0,1,1,8,0Z" style="fill:none;stroke:#edd4c2;"></path><path d="M16.21,17.67a6.21,6.21,0,0,1-4.75-2.21,6.21,6.21,0,1,1,0-8,6.21,6.21,0,1,1,4.75,10.21Z" style="fill:none;stroke:#edd4c2;"></path></g></g></svg></section>\r
								</section>\r
							</section>\r
							<section style="flex-shrink: 0;padding: 0 5px;box-sizing:border-box;">\r
								<section style="font-size: 18px; color: rgb(237, 212, 194); text-align: center;">\r
									<span style="letter-spacing: 1px; font-family: sans-serif;">数智赋能&middot;聚势共赢</span></section>\r
							</section>\r
							<section data-width="50%" style="display: flex;align-items: center;width: 50%;box-sizing:border-box;max-width:50% !important;">\r
								<section style="flex-shrink: 0;">\r
									<section style="width: 12px;box-sizing:border-box;">\r
										<svg style="display: block;" viewbox="0 0 22.92 22.92" xml:space="default" xmlns="http://www.w3.org/2000/svg"><g data-name="图层 2"><g data-name="图层 1"><path d="M15.46,11.46a6.21,6.21,0,1,1-8,0,6.21,6.21,0,1,1,8,0Z" style="fill:none;stroke:#edd4c2;"></path><path d="M16.21,17.67a6.21,6.21,0,0,1-4.75-2.21,6.21,6.21,0,1,1,0-8,6.21,6.21,0,1,1,4.75,10.21Z" style="fill:none;stroke:#edd4c2;"></path></g></g></svg></section>\r
								</section>\r
								<section data-width="100%" style="width: 100%;height: 1px;border-top: 1px solid #edd4c2;max-width:100% !important;box-sizing:border-box;">\r
									<p>\r
										&nbsp;</p>\r
								</section>\r
							</section>\r
						</section>\r
					</section>\r
					<section style="display: flex;align-items: flex-start;justify-content: space-between;margin-top: -12px;">\r
						<section style="width: 12px;height: 12px;border-radius: 0 25px 0 0;border-right: 1px solid #00b050;border-top: 1px solid #00b050;border-left: 1px solid #ffffff;border-bottom: 1px solid #ffffff;box-sizing:border-box;">\r
							<p>\r
								&nbsp;</p>\r
						</section>\r
						<section style="width: 12px;height: 12px;border-radius: 25px 0 0 0;border-left: 1px solid #00b050;border-top: 1px solid #00b050;border-right: 1px solid #ffffff;border-bottom: 1px solid #ffffff;box-sizing:border-box;">\r
							<p>\r
								&nbsp;</p>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
	</section>\r
	<p style="margin-bottom: 0px;">\r
		&nbsp;</p>\r
	<p style="margin-bottom: 0px;">\r
		&nbsp;</p>\r
	<p style="margin-bottom: 0px;">\r
		&nbsp;</p>\r
</section>`},{id:"5c42d159724949638db1b49389887dee",title:"关于缴纳2025年度会费的通知",date:"2025-05-12",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于缴纳2025年度会费的通知 各会员单位： 为保障协会各项工作正常有序开展，切实履行协会服务职能，推动行业规范化、专业化、高质量发展，根据《广东省项目管理协会章程》有关规定，协会现启动2025年度会费收取工作。现将有关",content:`<p>\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:normal;\r
layout-grid-mode:char">\r
	<span style="font-size:24px;"><span style="font-family:黑体;">关于缴纳<span lang="EN-US">2025</span>年度会费的通知</span></span><span style="font-size:20.0pt;mso-bidi-font-size:16.0pt;\r
font-family:华文中宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="line-height:normal;layout-grid-mode:char">\r
	<span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋_GB2312">&nbsp;</span></p>\r
<p class="MsoNormal" style="line-height:normal;layout-grid-mode:char">\r
	<span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋_GB2312">&nbsp;</span></p>\r
<p class="MsoNormal" style="line-height:normal;layout-grid-mode:char">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">各会员单位：</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">为保障协会各项工作正常有序开展，切实履行协会服务职能，推动行业规范化、专业化、高质量发展，根据《广东省项目管理协会章程》有关规定，协会现启动<span lang="EN-US">2025</span>年度会费收取工作。现将有关事项通知如下：</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">一、会费标准</span></span><span style="mso-bidi-font-size:16.0pt;font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">（一）会长单位<span lang="EN-US">5</span>万元<span lang="EN-US">/</span>年；</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">（二）常务副会长、副会长、监事长单位<span lang="EN-US">3</span>万元<span lang="EN-US">/</span>年；</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">（三）理事、监事单位<span lang="EN-US">8000</span>元<span lang="EN-US">/</span>年；</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">（四）会员单位<span lang="EN-US">3000</span>元<span lang="EN-US">/</span>年。</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">二、缴费时间</span></span><span style="mso-bidi-font-size:16.0pt;font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">请各单位于<span lang="EN-US">2025</span>年<span lang="EN-US">5</span>月<span lang="EN-US">30</span>日前将会费汇到协会账户。</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">三、银行账号</span></span><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">户 <span lang="EN-US">&nbsp;&nbsp;&nbsp;</span>名：广东省项目管理协会</span></span><span lang="EN-US"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">帐 <span lang="EN-US">&nbsp;&nbsp;&nbsp;</span>号：<span lang="EN-US">440501 581108 00000047</span></span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">开户银行：中国建设银行广州天寿路支行</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">注：汇款用途请注明&ldquo;ＸＸ公司<span lang="EN-US">2025</span>年度会费&rdquo;，汇款后请及时与协会秘书处联系，并书面或邮件告知会费票据抬头。</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">感谢各会员单位对协会工作的大力支持！ </span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span lang="EN-US" style="font-family: 黑体; font-size: 18px; text-align: center;">(</span><span style="font-family: 黑体; font-size: 18px; text-align: center;">联系人：丘秀勤，</span><span lang="EN-US" style="font-family: 黑体; font-size: 18px; text-align: center;">13632411853</span><span style="font-family: 黑体; font-size: 18px; text-align: center;">，邮箱：</span><span lang="EN-US" style="font-family: 黑体; font-size: 18px; text-align: center;">gpma@vip.163.com)</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;"><span lang="EN-US">&nbsp;</span></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:normal">\r
	<span style="font-size:18px;"><span style="font-family:黑体;"><span lang="EN-US">&nbsp;</span></span></span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;line-height:normal;\r
word-break:break-all">\r
	<span style="font-size:18px;"><span style="font-family:黑体;">广东省项目管理协会</span></span></p>\r
<p style="text-align: right;">\r
	<span style="font-size:18px;"><span style="font-family:黑体;"><span lang="EN-US" style="line-height: 150%;">2025</span><span style="line-height: 150%;">年<span lang="EN-US">5</span>月<span lang="EN-US">12</span>日 </span></span></span></p>\r
<p style="text-align: right;">\r
	&nbsp;</p>\r
<p>\r
	<span style="font-size:18px;"><span style="font-family:黑体;"><span style="line-height: 150%;"><span lang="EN-US">&nbsp;&nbsp;&nbsp;</span></span></span></span></p>`},{id:"00d2b0a87cef48f9aaaffe1285921021",title:"关于公布2023-2024年度项目管理优秀单位和优秀个人评选的通知",date:"2025-02-11",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-15-01.png",hasCover:!0,summary:"",content:`<p style="text-align: center;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-15-01.png" style="width: 793px; height: 1122px;" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-15-02.png" style="width: 793px; height: 1121px;" /></p>`},{id:"3da6a8638e964fedb090525e459109a8",title:"关于2023-2024年度项目管理优秀单位和优秀个人的公示",date:"2025-01-23",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-16-01.png",hasCover:!0,summary:"",content:`<p style="text-align: center;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-16-01.png" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-16-02.png" /></p>`},{id:"ea7ae5cba2784ac08398479ed3b97f48",title:"关于召开第二次会员代表大会的通知",date:"2024-08-08",tag:"会议",cover:"/gpma03/preview-20261117/assets/notices/notice-17-01.jpg",hasCover:!0,summary:"关于召开第二次会员代表大会的通知 各会员单位： 按照《社会团体登记管理条例》《广东省行业协会条例》《全省性行业协会商会换届选举指引》以及本会章程的有关规定，协会定于2024年8月30日召开第二次会员代表大会进行换届选举工",content:`<p>\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="margin-bottom:6.0pt;mso-para-margin-bottom:\r
.5gd;text-align:center;line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:22.0pt;font-family:方正小标宋简体;mso-hansi-font-family:方正小标宋简体;\r
mso-bidi-font-family:方正小标宋简体">关于召开第二次会员代表大会的通知</span><span lang="EN-US" style="font-size:22.0pt;font-family:华文中宋"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:normal;\r
layout-grid-mode:char">\r
	<span lang="EN-US" style="mso-bidi-font-size:16.0pt;\r
font-family:仿宋_GB2312">&nbsp;</span></p>\r
<p class="MsoNormal" style="line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:16.0pt;font-family:仿宋_GB2312">各会员单位：</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋">按照《社会团体登记管理条例》《广东省行业协会条例》《全省性行业协会商会换届选举指引》以及本会章程的有关规定，协会定于<span lang="EN-US">2024</span>年<span lang="EN-US">8</span>月<span lang="EN-US">30</span>日召开第二次会员代表大会进行换届选举工作。为进一步做好本次会员代表大会筹备工作，现将有关事项通知如下：</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体">一、会议时间</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">2024</span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">年<span lang="EN-US">8</span>月<span lang="EN-US">30</span>日 下午<span lang="EN-US">14:30-17:30</span></span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体">二、会议地点</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 32pt; line-height: 28pt;">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">保利克洛维广场&middot;中盈大厦 <span lang="EN-US">27</span>楼会议室</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 32pt; line-height: 28pt;">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">地址：广州市天河区华强路<span lang="EN-US">9</span>号保利中盈大厦<span lang="EN-US">27</span>层</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体">三、参加人员</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋">协会全体会员及有关人员</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体">四、会议主要议程</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋">（一）召开理事会议，审议换届工作相关事项。</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋">（二）召开会员代表大会。</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">1.</span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">听取第一届理事会工作报告；</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">2.</span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">听取第二届理事会候选人及选举办法的情况说明；</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">3.</span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">审议第一届理事会工作报告；</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">4.</span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">审议第二届理事会候选人及选举办法；</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">5.</span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">选举产生第二届理事会。</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋">（三）召开第二届理事会第一次会议。</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体">五、有关要求</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">1.</span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">各会员单位要充分认识本次换届选举工作的重要性和严肃性，认真履行会员义务，正确行使会员民主权利，提前安排好工作，准时参加会议。</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">2.</span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">请参会人员于<span lang="EN-US">2024</span>年<span lang="EN-US">8</span>月<span lang="EN-US">23</span>日前，扫描下方小程序码提交报名信息。</span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; line-height: 28pt; text-align: center;">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-17-01.jpg" style="width: 200px; height: 200px;" /></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; line-height: 28pt;">\r
	<span style="font-size:16px;"><span lang="EN-US" style="text-indent: 31.6pt; font-family: 仿宋;">3.</span><span style="text-indent: 31.6pt; font-family: 仿宋;">会议具体议程以会议当天详细议程为准。</span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:31.6pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体">六、联系方式</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:31.6pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋">联系人：丘秀勤，<span lang="EN-US">13632411853</span>。</span></span><span style="mso-bidi-font-size:\r
16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">&nbsp;</span></span></p>\r
<p class="MsoNormal" style="line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">&nbsp;</span></span></p>\r
<p align="right" class="MsoNormal" style="margin-left:173.75pt;mso-para-margin-left:\r
2.0gd;text-align:right;text-indent:-142.15pt;mso-char-indent-count:-9.0;\r
line-height:28.0pt;mso-line-height-rule:exactly;word-break:break-all">\r
	<span style="font-size:16px;"><span lang="EN-US" style="mso-bidi-font-size:16.0pt;font-family:仿宋">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">广东省项目管理协会 <span lang="EN-US">&nbsp;&nbsp;&nbsp;</span></span></span><span style="mso-bidi-font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="right" class="MsoNormal" style="margin-right:31.6pt;text-align:right;\r
line-height:28.0pt;mso-line-height-rule:exactly;word-break:break-all">\r
	<span style="font-size:16px;"><span style="mso-bidi-font-size:16.0pt;font-family:仿宋">二<span lang="EN-US">O</span>二四年八月八日</span></span></p>\r
<p align="right" class="MsoNormal" style="margin-right:31.6pt;text-align:right;\r
line-height:28.0pt;mso-line-height-rule:exactly;word-break:break-all">\r
	&nbsp;</p>\r
<p align="right" class="MsoNormal" style="margin-right:31.6pt;text-align:right;\r
line-height:28.0pt;mso-line-height-rule:exactly;word-break:break-all">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="margin-right: 31.6pt; line-height: 28pt; word-break: break-all;">\r
	<span style="font-family: 仿宋; font-size: 16px; text-indent: 42.1333px;">原文件：</span><a href="/gpma03/preview-20261117/assets/notices/notice-17-attachment-01.pdf"><span style="font-size:16px;"><span style="font-family: 方正小标宋简体;">关于召开第二次会员代表大会的通知</span></span></a></p>`},{id:"b5c9ea49045843299460b35fac277e0e",title:"关于征集广东省项目管理协会专家库专家 （第一批）的通知",date:"2024-06-07",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于征集广东省项目管理协会专家库专家（第一批）的通知 各有关单位及专家： 为进一步提高广东省项目管理工作水平，健全完善广东省项目管理协会专家库建设，有效地发挥高层次项目管理人才在开展科学研究、技术咨询、项目评估、创新创业",content:`<p align="center" class="MsoPlainText" style="text-align:center;layout-grid-mode:\r
char">\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align:center">\r
	<span style="font-size:20.0pt;mso-bidi-font-size:16.0pt;font-family:方正小标宋简体">关于征集广东省项目管理协会专家库专家</span><span style="font-family: 方正小标宋简体; font-size: 20pt;">（第一批）的通知</span></p>\r
<p align="center" class="MsoNormal" style="text-align:center">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></p>\r
<p align="center" class="MsoNormal" style="text-align:center">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">各有关单位及专家：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">为进一步提高广东省项目管理工作水平，健全完善广东省项目管理协会专家库建设，有效地发挥高层次项目管理人才在开展科学研究、技术咨询、项目评估、创新创业等活动中的作用，促进我省项目管理行业技术创新和管理进步，我会现面向社会公开征集项目管理专家，具体事项通知如下：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:黑体">一、征集范围<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">各行业管理部门、政府机关、科研院所、高等院校、企事业单位等，从事项目管理相关工作，具有丰富专业知识和实践经验，并愿意参加广东省项目管理技术咨询及相关工作的专家。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:黑体">二、基本条件<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（一）拥护党的路线和方针，热爱项目管理事业，愿意为项目管理行业发展服务；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（二）公正诚信，廉洁自律，具有良好的信用和职业道德；工作责任心强，能够以严谨的科学精神，客观、公正、实事求是地开展各项评价咨询工作；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（三）具有严谨扎实的学术基础，具有较高的专业学术理论和业务水平；掌握并熟悉相关领域或行业的技术研发、成果转化及国内外现状和发展态势，了解全行业学术动态，具有前瞻性的独特见解；在本专业学术上具有较深的造诣、较高知名度和影响力；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（四）年龄原则上不超过<span lang="EN-US">65</span>周岁；院士、博士生导师、享受国务院或省政府特殊津贴的专家，若法定退休年龄大于<span lang="EN-US">65</span>周岁的，则从其法定退休年龄；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（五）身体健康，有足够的时间和精力完成专家库专家的各项工作；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（六）不存在学术道德问题，没有信用不良记录，没有违纪违法等不良记录。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:黑体">三、专家分类及入库条件<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（一）技术专家<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">1.</span><span style="font-size:16.0pt;font-family:仿宋">高等院校、科研院所及事业单位专家<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（<span lang="EN-US">1</span>）具有副高级及以上职称或博士学位，在相关领域开展研究工作<span lang="EN-US">5</span>年以上；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（<span lang="EN-US">2</span>）基层科研人员可适当放宽，应具有副高级及以上职称或中级职称并从事相关行业工作<span lang="EN-US">8</span>年以上。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">2</span><span style="font-size:16.0pt;font-family:仿宋">．企业专家<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（<span lang="EN-US">1</span>）具有副高级及以上职称或博士以上学历（或取得专业技术高级资格或水平证书）；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">（<span lang="EN-US">2</span>）创新龙头企业、创新型（试点）企业、高新技术企业等具有较强科研能力或实施重大科技成果转化项目的初创期科技型企业的技术负责人及技术骨干，或具有海外相应专业领域从业经历的高层次人才。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（二）管理专家<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">1.</span><span style="font-size:16.0pt;font-family:仿宋">担任高等院校、科研院所管理岗位职务超过<span lang="EN-US">5</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">2.</span><span style="font-size:16.0pt;font-family:仿宋">担任社会团体负责人，或担任中层以上职务超过<span lang="EN-US">5</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">3.</span><span style="font-size:16.0pt;font-family:仿宋">创新创业和知识产权服务机构、行业协会（学会）及科技类社会组织等的高级管理人员；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">4.</span><span style="font-size:16.0pt;font-family:仿宋">创新型龙头企业、创新型（试点）企业、高新技术企业等的高级管理人员；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">5.</span><span style="font-size:16.0pt;font-family:仿宋">长期从事科技和知识产权管理工作，熟悉相关领域科技研发与成果转化工作。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（三）财务专家<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">1.</span><span style="font-size:16.0pt;font-family:仿宋">注册会计师、税务师或具有会计、审计、经济专业副高级以上专业技术职称，或取得专业技术高级资格或水平证书，或中级职称并从事相关行业<span lang="EN-US">8</span>年以上；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">2.</span><span style="font-size:16.0pt;font-family:仿宋">高等院校、科研院所财务、审计部门负责人；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">3.</span><span style="font-size:16.0pt;font-family:仿宋">上市公司、大型国有企业与医院等财务部门负责人。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（四）风投专家<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">1.</span><span style="font-size:16.0pt;font-family:仿宋">熟悉科技、金融、财税、信贷等领域的专业理论知识、相关政策和规章制度，在金融、保险等领域具有<span lang="EN-US">5</span>年以上实际工作经验的高级管理人员；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">2.</span><span style="font-size:16.0pt;font-family:仿宋">天使投资或创业投资机构的高级管理人员。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:黑体">四、专家入库流程<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（一）入库申请。</span><span style="font-size:\r
16.0pt;font-family:仿宋">符合条件的申报人员填写《广东省项目管理协会专家库专家申请表》并提供相关证明材料，由所在单位推荐并初审确认盖章后向我会进行申报。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（二）资格审核。</span><span style="font-size:\r
16.0pt;font-family:仿宋">我会将组织对申请人提交的申请材料进行审核确认。不符合入库条件的专家不予入库，符合入库条件的专家择优入库。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（三）入库公示。</span><span style="font-size:\r
16.0pt;font-family:仿宋">通过资格审核的专家名单将通过我会官网公示<span lang="EN-US">7</span>个工作日。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（四）专家入库。</span><span style="font-size:\r
16.0pt;font-family:仿宋">经公示无异议的专家正式纳入我会专家库。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:黑体">五、申报要求<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（一）申报材料</span><span style="font-size:\r
16.0pt;font-family:仿宋">（以下材料各一份）：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">1.</span><span style="font-size:16.0pt;font-family:仿宋">《广东省项目管理协会专家库专家申请表》（附彩色免冠照片）；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">2.</span><span style="font-size:16.0pt;font-family:仿宋">申请人身份证复印件；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">3.</span><span style="font-size:16.0pt;font-family:仿宋">申请人最高学历学位证书复印件；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">4.</span><span style="font-size:16.0pt;font-family:仿宋">申请人职称证书复印件；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">5.</span><span style="font-size:16.0pt;font-family:仿宋">申请人相关执业资格证书复印件；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">6.</span><span style="font-size:16.0pt;font-family:仿宋">业绩成果证明材料；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">7.</span><span style="font-size:16.0pt;font-family:仿宋">其他有关佐证材料。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:楷体">（二）材料提交<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">上述材料请于<span lang="EN-US">2024</span>年<span lang="EN-US">7</span>月<span lang="EN-US">5</span>日<span lang="EN-US">17:30</span>前提交，纸质版寄送至广州市天河区华强路<span lang="EN-US">9</span>号保利中盈大厦<span lang="EN-US">25</span>层<span lang="EN-US">2509</span>室，电子版发送至电子邮箱：<span lang="EN-US">gpma@vip.163.com</span>。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">联系人：谢添雄，<span lang="EN-US">18720227761<o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋">附件：</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-family: 仿宋; font-size: 21.3333px; text-indent: 42.6667px;">1、<a href="/gpma03/preview-20261117/assets/notices/notice-18-attachment-01.pdf">原文件</a></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋">2、<a href="/gpma03/preview-20261117/assets/notices/notice-18-attachment-02.docx">广东省项目管理协会专家库专家申请表</a><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;text-indent:32.0pt;\r
mso-char-indent-count:2.0;word-break:break-all">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋">广东省项目管理协会 <span lang="EN-US">&nbsp;&nbsp;&nbsp;<o:p></o:p></span></span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;text-indent:32.0pt;\r
mso-char-indent-count:2.0;word-break:break-all">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">2024</span><span style="font-size:16.0pt;\r
font-family:仿宋">年<span lang="EN-US">6</span>月<span lang="EN-US">7</span>日 <span lang="EN-US">&nbsp;&nbsp;&nbsp;&nbsp;<o:p></o:p></span></span></p>`},{id:"d9dd06075149424a9b21a732332f42a5",title:"关于印发《广东省项目管理协会专家库 管理办法（试行）》的通知",date:"2024-06-07",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于印发《广东省项目管理协会专家库管理办法（试行）》的通知 各会员单位及有关单位： 为进一步规范广东省项目管理协会专家库管理，加强专家队伍建设，促进专家资源共享，充分发挥专家在推动行业高质量发展中的引领作用，我协会组织制",content:`<p>\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align:center">\r
	<span style="font-size:20.0pt;mso-bidi-font-size:16.0pt;font-family:方正小标宋简体">关于印发《广东省项目管理协会专家库</span><span style="font-family: 方正小标宋简体; font-size: 20pt;">管理办法（试行）》的通知</span></p>\r
<p align="center" class="MsoNormal" style="text-align:center">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></p>\r
<p align="center" class="MsoNormal" style="text-align:center">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></p>\r
<p class="MsoNormal">\r
	<span style="font-size:16.0pt;font-family:仿宋">各会员单位及有关单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋">为进一步规范广东省项目管理协会专家库管理，</span><span style="font-size:16.0pt;font-family:仿宋;mso-bidi-font-family:仿宋">加强专家队伍建设，促进专家资源共享，</span><span style="font-size:16.0pt;font-family:仿宋">充分发挥专家在推动行业高质量发展中的引领作用，我协会组织制定了《广东省项目管理协会专家库管理办法（试行）》。现印发给你们，请遵照执行。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋">附件：</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-family: 仿宋; font-size: 21.3333px; text-indent: 42.6667px;">1、<a href="/gpma03/preview-20261117/assets/notices/notice-19-attachment-01.pdf">文件原件</a></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋">2、<a href="/gpma03/preview-20261117/assets/notices/notice-19-attachment-02.pdf">广东省项目管理协会专家库管理办法（试行）</a><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;text-indent:32.0pt;\r
mso-char-indent-count:2.0;word-break:break-all">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋">广东省项目管理协会 <span lang="EN-US">&nbsp;&nbsp;&nbsp;<o:p></o:p></span></span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;text-indent:32.0pt;\r
mso-char-indent-count:2.0;word-break:break-all">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">2024</span><span style="font-size:16.0pt;\r
font-family:仿宋">年<span lang="EN-US">6</span>月<span lang="EN-US">7</span>日 <span lang="EN-US">&nbsp;&nbsp;&nbsp;&nbsp;<o:p></o:p></span></span></p>`},{id:"17f67a2e8d3c4ea393a5b429e7188bfc",title:"关于公开征求《广东省项目管理协会专家库管理办法(征求意见稿)》意见的通知",date:"2024-05-15",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于公开征求《广东省项目管理协会专家库管理办法(征求意见稿)》意见的通知 为进一步规范广东省项目管理协会专家库和专家管理，加强专家队伍建设、促进专家资源共享，充分发挥专家智库在推动项目管理高质量发展中的积极作用,保障项目",content:`<p>\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align:center">\r
	<b><span style="font-size:22.0pt;line-height:115%;font-family:华文中宋">关于公开征求《广东省项目管理协会专家库管理办法<span lang="EN-US">(</span>征求意见稿<span lang="EN-US">)</span>》意见的通知<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph">\r
	<span lang="EN-US" style="font-size:15.0pt;line-height:115%;font-family:华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph;\r
text-indent:30.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:15.0pt;\r
line-height:115%;font-family:华文中宋">为进一步规范广东省项目管理协会专家库和专家管理，加强专家队伍建设、促进专家资源共享，充分发挥专家智库在推动项目管理高质量发展中的积极作用<span lang="EN-US">,</span>保障项目管理行业相关项目评审、课题研究、督导调研、专业咨询等活动的公平、公正、科学开展，我会起草了《广东省项目管理协会专家库管理办法<span lang="EN-US">(</span>征求意见稿<span lang="EN-US">)</span>》，现面向社会公开征求意见。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph;\r
text-indent:30.0pt;mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:15.0pt;line-height:115%;font-family:华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph;\r
text-indent:30.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:15.0pt;\r
line-height:115%;font-family:华文中宋">公开征求意见的时间为<span lang="EN-US">2024</span>年<span lang="EN-US">5</span>月<span lang="EN-US">15</span>日至<span lang="EN-US">2024</span>年<span lang="EN-US">6</span>月<span lang="EN-US">4</span>日，为期<span lang="EN-US">15</span>个工作日，有关单位和个人可在征集意见期间填写征求意见回执<span lang="EN-US">(</span>附件<span lang="EN-US">2)</span>并发送至邮箱<span lang="EN-US">gpma@vip.163.com</span>，邮件标题请注明<span lang="EN-US">&ldquo;</span>专家库管理办法征求意见<span lang="EN-US">&rdquo;</span>字样。欢迎有关单位和社会各界人士提出宝贵意见和建议。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph">\r
	<span lang="EN-US" style="font-size:15.0pt;line-height:115%;font-family:华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph">\r
	<span lang="EN-US" style="font-size:15.0pt;line-height:115%;font-family:华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph">\r
	<span style="font-size:18px;"><span style="line-height: 115%; font-family: 华文中宋;">附件<span lang="EN-US">:</span></span></span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph">\r
	<a href="/gpma03/preview-20261117/assets/notices/notice-20-attachment-01.pdf"><strong><span style="font-size:18px;"><span style="line-height: 115%; font-family: 华文中宋;"><span lang="EN-US">原文件</span></span></span></strong></a><span style="font-size:15.0pt;line-height:115%;font-family:华文中宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph">\r
	<a href="/gpma03/preview-20261117/assets/notices/notice-20-attachment-02.pdf"><span style="font-size:18px;"><strong><span lang="EN-US" style="line-height: 115%; font-family: 华文中宋;">1.</span><span style="line-height: 115%; font-family: 华文中宋;">广东省项目管理协会专家库管理办法<span lang="EN-US">(</span>征求意见稿<span lang="EN-US">)</span></span></strong></span></a><span style="font-size:15.0pt;line-height:115%;font-family:华文中宋"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph">\r
	<a href="/gpma03/preview-20261117/assets/notices/notice-20-attachment-03.docx"><span style="font-size:18px;"><strong><span lang="EN-US" style="line-height: 115%; font-family: 华文中宋;">2.</span><span style="line-height: 115%; font-family: 华文中宋;">征求意见回执</span></strong></span></a><span lang="EN-US" style="font-size:15.0pt;line-height:115%"><o:p></o:p></span></p>\r
<p>\r
	&nbsp;</p>\r
<p>\r
	&nbsp;</p>\r
<p>\r
	&nbsp;</p>`},{id:"3b6057ba51134784a4dea872f5568a0b",title:"关于公开征求《广东省项目管理协会企业信用等级评价办法（征求意见稿）》意见的通知",date:"2024-04-09",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于公开征求《广东省项目管理协会企业信用等级评价办法（征求意见稿）》意见的通知 为推动广东省项目管理行业信用建设，进一步营造诚实守信的市场环境，增强企业诚信意识，加强行业自律，促进广东省项目管理行业健康发展，根据《国务院",content:`<p>\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:33.0pt;\r
mso-line-height-rule:exactly;mso-pagination:none">\r
	<span style="font-size:22.0pt;\r
font-family:方正小标宋简体;mso-hansi-font-family:方正小标宋简体;mso-bidi-font-family:方正小标宋简体">关于公开征求《广东省项目管理协会企业信用等级评价办法（征求意见稿）》</span><span style="font-family: 方正小标宋简体; font-size: 22pt;">意见的通知</span></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size:22.0pt;font-family:方正小标宋简体;\r
mso-hansi-font-family:方正小标宋简体;mso-bidi-font-family:方正小标宋简体">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; line-height: 28pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">为推动广东省项目管理行业信用建设，进一步营造诚实守信的市场环境，增强企业诚信意识，加强行业自律，促进广东省项目管理行业健康发展，根据《国务院关于促进市场公平竞争维护市场正常秩序的若干意见》</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">(</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">国发</span><span style="font-size:16.0pt;font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;\r
mso-hansi-font-family:&quot;Times New Roman&quot;">〔</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">2014</span><span style="font-size:16.0pt;font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;\r
mso-hansi-font-family:&quot;Times New Roman&quot;">〕</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">20</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">号</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">)</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">、《关于加快推进社会信用体系建设构建以信用为基础的新型监管机制的指导意见》</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">(</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">国发办</span><span style="font-size:16.0pt;font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;\r
mso-hansi-font-family:&quot;Times New Roman&quot;">〔</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">2019</span><span style="font-size:16.0pt;font-family:宋体;mso-ascii-font-family:&quot;Times New Roman&quot;;\r
mso-hansi-font-family:&quot;Times New Roman&quot;">〕</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">35</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">号）等有关文件精神，紧密结合行业实际情况，我单位起草了《广东省项目管理协会企业信用等级评价办法（征求意见稿）》（详见附件</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">1</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">）。</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph;\r
text-indent:32.0pt;mso-char-indent-count:2.0;line-height:28.0pt;mso-line-height-rule:\r
exactly;mso-pagination:none">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;">即日起至</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">4</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">月</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">19</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">日，面向社会公开征求意见建议，欢迎有关单位和社会各界人士提出宝贵意见建议。有关单位和个人可在征集意见期间填写并发送征求意见回执（附件</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">2</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">）至邮箱</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">gpma@vip.163.com</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">，单位提出意见需在回执上加盖单位公章，个人提出意见应署实名并附联系方式。</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p>\r
	&nbsp;</p>\r
<p class="MsoNormal" style="margin-left:80.0pt;mso-para-margin-left:3.2gd;\r
text-indent:-48.0pt;mso-char-indent-count:-3.0;line-height:28.0pt;mso-line-height-rule:\r
exactly;mso-pagination:none">\r
	<span style="color:#ff0000;"><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;">附件：</span></span><a href="/gpma03/preview-20261117/assets/notices/notice-21-attachment-01.pdf"><span style="color:#ff0000;"><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">1.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">《广东省项目管理协会企业信用等级评价办法（征求意见稿）》</span></span></a><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:80.0pt;mso-char-indent-count:5.0;\r
line-height:28.0pt;mso-line-height-rule:exactly;mso-pagination:none">\r
	<a href="/gpma03/preview-20261117/assets/notices/notice-21-attachment-02.docx"><span style="color:#ff0000;"><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">2.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">征求意见回执</span></span></a><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="margin-left:80.0pt;mso-para-margin-left:8.0gd;\r
line-height:28.0pt;mso-line-height-rule:exactly;mso-pagination:none">\r
	<span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">&nbsp;</span></p>\r
<p class="MsoNormal" style="line-height:28.0pt;mso-line-height-rule:exactly;\r
mso-pagination:none">\r
	<span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:\r
仿宋_GB2312">&nbsp;</span></p>\r
<p class="MsoNormal" style="line-height:28.0pt;mso-line-height-rule:exactly;\r
mso-pagination:none">\r
	<span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:\r
仿宋_GB2312">&nbsp;</span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;text-indent:32.0pt;\r
mso-char-indent-count:2.0;line-height:28.0pt;mso-line-height-rule:exactly;\r
mso-pagination:none">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;">广东省项目管理协会</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;text-indent:32.0pt;\r
mso-char-indent-count:2.0;line-height:28.0pt;mso-line-height-rule:exactly;\r
mso-pagination:none">\r
	<span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:\r
仿宋_GB2312">2024</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;">年</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">4</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">月</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">9</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">日</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.0pt;\r
mso-char-indent-count:2.0;line-height:28.0pt;mso-line-height-rule:exactly;\r
mso-pagination:none">\r
	<span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:\r
仿宋_GB2312">&nbsp;</span></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.0pt;\r
mso-char-indent-count:2.0;line-height:28.0pt;mso-line-height-rule:exactly;\r
mso-pagination:none">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;">（联系人：谢先生，联系电话：</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312">18720227761</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;">）</span><span lang="EN-US" style="font-size:16.0pt;mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p>\r
	&nbsp;</p>\r
<p>\r
	&nbsp;</p>`},{id:"f7f54dcb10214604b804f0f162b1f4ee",title:"关于开展2023-2024年度项目管理优秀单位和个人评选活动的通知",date:"2024-02-26",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于开展2023-2024年度项目管理优秀单位和个人评选活动的通知",content:"<p>关于开展2023-2024年度项目管理优秀单位和个人评选活动的通知</p>"},{id:"d884435a4de34ed4adaa0be1571c3ab6",title:"关于开展广东省项目管理协会标志征集活动的通知",date:"2024-02-23",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"关于开展广东省项目管理协会标志征集活动的通知 为提升广东省项目管理协会（英文名称：Guangdong Project Management Association）公众形象和影响力，规范协会对外交流宣传标识，更好地为行业",content:`<p>\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:33.0pt;\r
mso-line-height-rule:exactly">\r
	<strong><span style="font-size:22.0pt;mso-bidi-font-size:\r
16.0pt;font-family:方正小标宋简体;mso-hansi-font-family:方正小标宋简体;mso-bidi-font-family:\r
方正小标宋简体">关于开展广东省项目管理协会标志征集活动的通知</span></strong><span style="font-size:22.0pt;mso-bidi-font-size:\r
16.0pt;font-family:方正小标宋简体;mso-hansi-font-family:方正小标宋简体;mso-bidi-font-family:\r
方正小标宋简体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:33.0pt;mso-line-height-rule:exactly">\r
	<strong><span lang="EN-US" style="font-size:16.0pt;font-family:仿宋">&nbsp;</span></strong></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">为提升广东省项目管理协会（英文名称：</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">Guangdong Project Management Association</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;\r
mso-hansi-font-family:&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">）公众形象和影响力，规范协会对外交流宣传标识，更好地为行业和会员服务，现向社会公开征集广东省项目管理协会标志（</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">LOGO</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">）设计方案。具体要求如下：</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体">一、征集时间</span></strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">即日起至</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">2024</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">年</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">3</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">月</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">15</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">日。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体">二、设计要求</span></strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">1.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">设计作品需充分展现项目管理行业特性，富有美感并具有较强的视觉冲击力。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">2.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">作品采用彩色图形设计，图案整体简明大方，清晰流畅，构图主旨鲜明，创意独特，寓意贴切，易于辨识。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">3.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">设计作品必须是原创作品，此前未以任何形式发表，杜绝抄袭、雷同，严禁侵犯他人的著作权、商标权等知识产权，不得违反国家法律法规。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">4.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">标志需提交矢量文件和</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">JPG</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">两种格式，</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">JPG</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">格式不得小于</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">100x100mm</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">且需</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">300dpi</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">以上，同时附设计理念说明或内涵注释（</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">300</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">字以内），应征者可同时提交多套设计方案。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体">三、投稿要求</span></strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">1.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">作品以电子邮件投稿，可发送至广东省项目管理协会秘书处邮箱：</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">gpma@vip.163.com</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;\r
mso-hansi-font-family:&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">。请在电子邮件主题注明</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">&ldquo;LOGO</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">征集</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">&rdquo;</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">2.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">现场投稿可邮寄至：广东省广州市天河区华强路</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">9</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">号保利中盈大厦</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">25</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">层</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">2509</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">室；收件人：罗小姐，</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">19988261397</span><span style="font-size:\r
16.0pt;font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;\r
mso-hansi-font-family:&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">3.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">投稿时同时提交《广东省项目管理协会标志设计信息表》（附件）。信息表中需注明单位名称或个人真实姓名、主创者身份证号码、手机号码、通讯地址等信息。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">4.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">若是单位参选，请提供单位营业执照。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体">四、评选方式</span></strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">广东省项目管理协会秉承客观、公正的原则组织专家对征集的标识设计方案进行评选，在征集作品中确定</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">10</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">件入围，并确定</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">1</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">件（或</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">1</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">件为主体，综合其它入围作品的部分元素）录用为广东省项目管理协会标志。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体">五、奖励设置</span></strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">1.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">入围作品的作者将获得一定奖励，奖励金均以人民币形式支付，奖励金为含税金额。获奖作者若为单位的，需由参选单位提供正规等额增值税发票后支付。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">2.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">录用其作品，作为广东省项目管理协会标志使用的，给予</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">3000</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">元奖励和证书，其余</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">9</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">件入围作品的作者（或单位）分别给予</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312">500</span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:\r
&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;">元奖金和证书。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体">六、其他说明</span></strong><span style="font-size:16.0pt;\r
font-family:黑体;mso-bidi-font-family:黑体"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">1.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">对于入围的应征作品，著作权、使用权等相关权利全部归主办单位所有，主办单位享有对作品进行修改和深化设计的权利。应征者不再享有与该作品著作权有关的任何权利。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">2.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">如果出现创意相同或类似的应征作品，则以收件时间来确定第一创意者。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">3.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">应征作品恕不退还，请作者自留底稿。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">4.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">入围的应征作品因抄袭等侵权行为造成的一切后果由应征者承担。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">5.</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-ascii-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:&quot;Times New Roman&quot;;\r
mso-bidi-font-family:&quot;Times New Roman&quot;">其他未尽事宜由主办单位负责解释。</span><span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;\r
mso-fareast-font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0;\r
line-height:28.0pt;mso-line-height-rule:exactly">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:\r
仿宋_GB2312">&nbsp;</span><span style="text-align: right; text-indent: 32pt; font-size: 16pt; font-family: 仿宋_GB2312;">（联系人：罗小姐，联系电话：</span><span lang="EN-US" style="text-align: right; text-indent: 32pt; font-size: 16pt; font-family: &quot;Times New Roman&quot;, serif;">19988261397</span><span style="text-align: right; text-indent: 32pt; font-size: 16pt; font-family: 仿宋_GB2312;">）</span></p>\r
<p>\r
	&nbsp;</p>\r
<p>\r
	&nbsp;</p>\r
<p style="text-indent: 42.6667px;">\r
	&nbsp;</p>\r
<p>\r
	<span style="color:#ff0000;"><span style="font-size:18px;"><span style="font-family: 仿宋_GB2312; text-indent: 42.6667px;">附录：</span></span></span></p>\r
<p>\r
	<span>1：通知原件（原附件暂缺）</span></p>\r
<p>\r
	<span>2：信息表（原附件暂缺）</span></p>\r
<p>\r
	&nbsp;</p>`},{id:"af75a93706cf46918dc35fbf2697d14e",title:"广东省项目管理协会关于召开第二次 会员代表大会的预通知",date:"2023-09-14",tag:"会议",cover:"/gpma03/preview-20261117/assets/notices/notice-24-01.png",hasCover:!0,summary:"",content:`<p style="text-align: center;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-24-01.png" style="width: 794px; height: 1123px;" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-24-02.png" style="width: 794px; height: 1123px;" /></p>`},{id:"54f7b541672041afb630660069c4f97a",title:"关于召开换届会长办公会议的通知",date:"2022-06-30",tag:"会议",cover:"/gpma03/preview-20261117/assets/notices/notice-25-01.png",hasCover:!0,summary:"",content:`<p>\r
	&nbsp;</p>\r
<p style="text-align: center;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-25-01.png" style="width: 794px; height: 1123px;" /></p>\r
<p style="text-align: center;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-25-02.png" style="width: 794px; height: 1123px;" /></p>`},{id:"e53393b7bc964d07901ab49ea9bb4c4a",title:"广东省项目管理协会关于收取2022年会费的通知",date:"2022-05-24",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"广东省项目管理协会关于收取2022年会费的 通 知 各会员单位： 因受疫情的影响，本年度会费收取工作有所延缓。为保证协会工作的正常运作，发挥协会的枢纽和桥梁作用，向会员单位提出更优质服务，根据《广东省项目管理协会章程》第",content:`<p>\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:36.0pt;\r
mso-line-height-rule:exactly">\r
	<span style="font-size:22.0pt;font-family:方正小标宋简体;\r
mso-hansi-font-family:华文中宋">广东省项目管理协会关于收取<span lang="EN-US">2022</span>年会费的<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:36.0pt;\r
mso-line-height-rule:exactly">\r
	<span style="font-size:22.0pt;font-family:方正小标宋简体;\r
mso-hansi-font-family:华文中宋">通<span lang="EN-US">&nbsp;&nbsp;&nbsp; </span>知<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="mso-bidi-font-size:10.5pt;\r
font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-hansi-font-family:华文中宋">各会员单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">因受疫情的影响，本年度会费收取工作有所延缓。为保证协会工作的正常运作，发挥协会的枢纽和桥梁作用，向会员单位提出更优质服务，根据《广东省项目管理协会章程》第三章第十二、第十三条的规定，请你单位按照下列对应的缴费标准，于<span lang="EN-US">2022</span>年<span lang="EN-US">6</span>月<span lang="EN-US">2</span>日前通过单位基本账户将<span lang="EN-US">2022</span>年会费汇入协会基本账户：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-left: 86pt; text-indent: -54pt; text-align: justify;">\r
	<!--[if !supportLists]--><span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:\r
华文中宋;mso-bidi-font-family:仿宋_GB2312">（一）</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">会长单位缴纳会费<span lang="EN-US">2</span>万元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-left: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（二）常务副会长单位缴纳会费<span lang="EN-US">1.5</span>万元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-left: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（三）副会长单位缴纳会费<span lang="EN-US">1</span>万元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-left: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（四）常务理事单位缴纳会费<span lang="EN-US">5000</span>元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-left: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（五）理事单位缴纳会费<span lang="EN-US">3000</span>元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-left: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（六）会员单位缴纳会费<span lang="EN-US">1000</span>元<span lang="EN-US">/</span>年。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-left: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">汇款时，说明为&ldquo;<span lang="EN-US">2022</span>年会费&rdquo;，并核实以下账户信息：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-left: 32pt; text-align: justify;">\r
	<b><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:\r
华文中宋">开户名称：广东省项目管理协会<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="margin-left: 32pt; text-align: justify;">\r
	<b><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:\r
华文中宋">开户银行：中国建设银行广州天寿路支行<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="margin-left: 32pt; text-align: justify;">\r
	<b><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:\r
华文中宋">银行账号：<span lang="EN-US">440501 581108 00000047</span></span></b><span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:\r
华文中宋"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">汇款后，请将相关回执以电子文件方式发给秘书处（以其他方式缴费的，请注明单位全称），秘书处将开具专用票据作为扣税凭证。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">感谢您的大力支持和积极配合！<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:\r
华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="margin-left: 31.5pt; text-align: justify;">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">联系人：邓剑峰<span lang="EN-US">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br />\r
	电话：<span lang="EN-US">13826013319&nbsp; <o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 32pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:\r
华文中宋">E-mail</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-hansi-font-family:华文中宋">：<span lang="EN-US">gpma</span></span><span lang="EN-US" style="font-size:16.0pt;font-family:宋体">@</span><span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">vip.163.com&nbsp;&nbsp;&nbsp; <o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent: 32.25pt; text-align: justify;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">&nbsp;<o:p></o:p></span></p>\r
<p class="MsoNormal" style="margin-right: 64pt; text-align: justify;">\r
	<!--[if gte vml 1]><v:shapetype\r
 id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t"\r
 path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f">\r
 <v:stroke joinstyle="miter"/>\r
 <v:formulas>\r
  <v:f eqn="if lineDrawn pixelLineWidth 0"/>\r
  <v:f eqn="sum @0 1 0"/>\r
  <v:f eqn="sum 0 0 @1"/>\r
  <v:f eqn="prod @2 1 2"/>\r
  <v:f eqn="prod @3 21600 pixelWidth"/>\r
  <v:f eqn="prod @3 21600 pixelHeight"/>\r
  <v:f eqn="sum @0 0 1"/>\r
  <v:f eqn="prod @6 1 2"/>\r
  <v:f eqn="prod @7 21600 pixelWidth"/>\r
  <v:f eqn="sum @8 21600 0"/>\r
  <v:f eqn="prod @7 21600 pixelHeight"/>\r
  <v:f eqn="sum @10 21600 0"/>\r
 </v:formulas>\r
 <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>\r
 <o:lock v:ext="edit" aspectratio="t"/>\r
</v:shapetype><v:shape id="_x0000_s1026" type="#_x0000_t75" style='position:absolute;\r
 margin-left:266.3pt;margin-top:1.6pt;width:118.95pt;height:118.95pt;z-index:-251658240'>\r
 <v:imagedata src="file:///C:/Users/12466/AppData/Local/Temp/msohtmlclip1/01/clip_image001.png"\r
  o:title="广东省项目管理协会电子公章"/>\r
</v:shape><![endif]--><!--[if !vml]--></p>\r
<p class="MsoNormal" style="margin-right: 64pt; text-align: justify;">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="margin-right: 64pt; text-align: justify;">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="word-break: break-all; text-align: right;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312">&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312">广东省项目管理协会<span lang="EN-US">&nbsp;&nbsp;&nbsp;&nbsp; <o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="word-break: break-all; text-align: right;">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:16.0pt;\r
font-family:仿宋_GB2312">二</span><span lang="EN-US" style="font-size:16.0pt;\r
font-family:仿宋_GB2312;mso-hansi-font-family:仿宋">0</span><span style="font-size:\r
16.0pt;font-family:仿宋_GB2312">二二年五月二十四日<span lang="EN-US">&nbsp;&nbsp;&nbsp; <o:p></o:p></span></span></p>\r
<p style="text-align: justify;">\r
	&nbsp;</p>\r
<p style="text-align: justify;">\r
	&nbsp;</p>\r
<p>\r
	&nbsp;</p>`},{id:"9e4bb40bd2644d7090a37291569af2fc",title:"2019年3月14日在广州粤海喜来登大酒店举办的建筑科技高峰论坛",date:"2019-03-05",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"邀 请 函 真挚地邀请您拨冗出席由广东省项目管理协会主办、甲骨文股份有限公司承办和永道科技有限公司协办于2019年3月14日在广州粤海喜来登大酒店举办的建筑科技高峰论坛。 本次论坛主题为“未来智领，建筑慧变” 系面向建筑",content:`<p align="center" class="MsoNormal" style="text-align: center; line-height: 21px;">\r
	<b><span style="font-size: 21pt; line-height: 42px; font-family: 宋体;">邀 请 函<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p>\r
	&nbsp;</p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">真挚地邀请您拨冗出席由广东省项目管理协会主办、甲骨文股份有限公司承办和永道科技有限公司协办于<span lang="EN-US">2019</span>年<span lang="EN-US">3</span>月<span lang="EN-US">14</span>日在广州粤海喜来登大酒店举办的建筑科技高峰论坛。<span lang="EN-US">&nbsp;</span>本次论坛主题为<span lang="EN-US">&ldquo;</span>未来智领，建筑慧变<span lang="EN-US">&rdquo;&nbsp;</span>系面向建筑与工程行业的交流峰会，届时业内精英将与广东省项目管理协会客座信息化专家、甲骨文公司专家一起，共同探讨数字化如何推动建筑与工程行业发展，交流项目管理的发展趋势，分享建设领域的实践案例。<span lang="EN-US">&nbsp;</span></span></span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">我们将同与会宾客一起探讨在改革开放<span lang="EN-US">40</span>周年的新时代背景下，项目管理的信息化与数字化将如何推动建筑与工程行业的发展，以及现代化的项目管理解决方案将如何助力现代化工程项目管理。</span></span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">会议期间，您不但可以与会同行专家深入探讨，更能分享到下列精彩内容：</span></span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span lang="EN-US" style="font-size: 14pt; line-height: 28px; font-family: 宋体;">&bull;&nbsp;</span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">科技赋能工程行业数字化转型。</span></span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span lang="EN-US" style="font-size: 14pt; line-height: 28px; font-family: 宋体;">&bull;&nbsp;</span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">建筑与工程行业的发展现状与趋势。</span></span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span lang="EN-US" style="font-size: 14pt; line-height: 28px; font-family: 宋体;">&bull; </span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">甲骨文建筑与工程全球事业部如何引领行业发展。</span></span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">会议期间，您可以与国内外优秀同行深入联谊，拓展人脉。</span></span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">协会致力帮助会员在工程项目管理的数字化变革中提升项目管控能力和投资回报能力，在全球市场中获得更大成功。</span></span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">恭候您的莅临！</span></span><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 21px;">\r
	<span style="color: rgb(0, 0, 0);"><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">附：</span></span><a href="/gpma03/preview-20261117/assets/notices/notice-27-attachment-01.docx"><span style="color: rgb(51, 102, 204);"><span style="font-size: 14pt; line-height: 28px; font-family: 宋体;">参加会议回执</span></span></a></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 21px;">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 21px;">\r
	&nbsp;</p>\r
<section class="_editor" data-color="rgb(89, 195, 249)">\r
	<section _editor="bj.96weixin.com" style="margin-top:20px;">\r
		<section style="padding: 10px; text-align: center; box-shadow: rgb(221, 221, 221) 0px 3.2px 3.2px 0px; background-color: rgb(89, 195, 249); color: rgb(255, 255, 255); box-sizing: border-box;">\r
			<p style="font-size: 18px; font-weight: bold; min-width: 1px; letter-spacing: 2px;">\r
				<span style="font-size: 22px; font-family: 微软雅黑, 'Microsoft YaHei';">建筑科技高峰论坛</span></p>\r
		</section>\r
		<section style="margin-top:20px;display:flex;">\r
			<section style="flex: 1 1 0%; padding: 0.2em; margin-left: 0.5em; box-sizing: border-box;">\r
				<p class="active _brush" style="color: rgb(121, 121, 121); min-width: 1px;">\r
					<span style="color: #000000; font-family: 微软雅黑, 'Microsoft YaHei';"><strong><span style="font-size: 19px;">时间：2019年3月14日</span></strong></span></p>\r
			</section>\r
		</section>\r
		<section style="margin-top:10px;display:flex;">\r
			<p>\r
				​</p>\r
			<p>\r
				<span style="color: rgb(0, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-weight: bold; font-size: 19px;"><strong>地点：</strong>广州粤海喜来登大酒店</span></p>\r
		</section>\r
		<section style="display: inline-block; background-color: rgb(89, 195, 249); padding: 0.5em 1em; margin-top: 20px; color: rgb(255, 255, 255); box-sizing: border-box;">\r
			<p class="white title" style="font-size: 16px; min-width: 1px;">\r
				<span style="font-family: 微软雅黑, 'Microsoft YaHei';"><strong><span style="font-size: 22px;">会议议程&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></strong></span></p>\r
		</section>\r
		<p style="text-indent:32px;line-height:150%">\r
			&nbsp;</p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">01:30 p.m. &ndash; 02:30 p.m. &nbsp;</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="font-size: 19px; font-family: 微软雅黑, 'Microsoft YaHei';"><strong><span style="line-height: 150%;">签到登记</span></strong></span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="font-size: 19px;"><strong><span style="font-size: 16px; line-height: 150%;">&nbsp;</span></strong><span style="font-size: 16px; line-height: 150%;">Registration</span></span></p>\r
		<section class="_editor" data-color="rgb(89, 195, 249)">\r
			<section style="margin: 10px 0%; text-align: center;">\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid #59c3f9; box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
				<section style="display: inline-block; vertical-align: top; ">\r
					<section style="display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
				</section>\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid #59c3f9; box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
		<p style="text-indent:32px;line-height:150%">\r
			&nbsp;</p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">02:30 p.m. &ndash; 02:45 p.m.</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<strong><span style="line-height: 150%; font-size: 19px;">开幕欢迎及致辞&nbsp;</span></strong></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">Opening and Welcome Greeting</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">广东省项目管理协会会长 | 赖铭华</span></p>\r
		<section class="_editor" data-color="rgb(89, 195, 249)">\r
			<section style="margin: 10px 0%; text-align: center;">\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid rgb(89, 195, 249); box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
				<section style="display: inline-block; vertical-align: top; ">\r
					<section style="display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
				</section>\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid rgb(89, 195, 249); box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
		<p style="text-indent:32px;line-height:150%">\r
			&nbsp;</p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">02:45 p.m. &ndash; 03:40 p.m.</span></p>\r
		<p style="margin-left: 28px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<strong><span style="line-height: 150%; font-size: 19px;">主题演讲： 科技赋能建筑工程行业数字化转型</span></strong><br />\r
			<span style="line-height: 150%; font-size: 19px;">Keynote Speech：Digital transportation in the C&amp;E industry<br />\r
			广东省项目管理协会客座信息化专家 | 周青</span></p>\r
		<section class="_editor" data-color="rgb(89, 195, 249)">\r
			<section style="margin: 10px 0%; text-align: center;">\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid #59c3f9; box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
				<section style="display: inline-block; vertical-align: top; ">\r
					<section style="display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
				</section>\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid #59c3f9; box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
		<p style="margin-left:28px;line-height:150%">\r
			&nbsp;</p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">03:4</span><span style="line-height: 150%; font-size: 19px;">0 p.m. &ndash; 04:00 p.m.</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<strong><span style="line-height: 150%; font-size: 19px;">茶歇交流 </span></strong></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<strong><span style="line-height: 150%; font-size: 19px;">Tea Break</span></strong></p>\r
		<section class="_editor" data-color="rgb(89, 195, 249)">\r
			<section style="margin: 10px 0%; text-align: center;">\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid rgb(89, 195, 249); box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
				<section style="display: inline-block; vertical-align: top; ">\r
					<section style="display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
				</section>\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid rgb(89, 195, 249); box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
		<p style="text-indent:32px;line-height:150%">\r
			&nbsp;</p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">04:00 p.m. &ndash; 04:30 p.m.</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<strong><span style="line-height: 150%; font-size: 19px;">建筑与工程行业</span><span style="line-height: 150%; font-size: 19px;">数字化转型以及甲骨文建筑与工程全球事业部战略价值与发展</span></strong></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">Digital Transportation Trends in the industry and the value added of Oracle CEGBU</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">甲骨文建筑与工程全球事业部 | 高级技术顾问</span></p>\r
		<section class="_editor" data-color="rgb(89, 195, 249)">\r
			<section style="margin: 10px 0%; text-align: center;">\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid rgb(89, 195, 249); box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
				<section style="display: inline-block; vertical-align: top; ">\r
					<section style="display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
				</section>\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid rgb(89, 195, 249); box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
		<p style="text-indent:32px;line-height:150%">\r
			&nbsp;</p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">04:30 p.m. &ndash; 05:10 p.m.</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<strong><span style="line-height: 150%; font-size: 19px;">中国建筑与工程行</span><span style="line-height: 150%; font-size: 19px;">业中的数字化最佳实践</span></strong></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">CEGBU solutions best practice in China</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">甲骨文建筑与工程全球事业部 | 高级技术顾问</span></p>\r
		<section class="_editor" data-color="rgb(89, 195, 249)">\r
			<section style="margin: 10px 0%; text-align: center;">\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid rgb(89, 195, 249); box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
				<section style="display: inline-block; vertical-align: top; ">\r
					<section style="display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
					<section style="margin-left: -1px; display: inline-block; border-color: #59c3f9; border-width: 1px; border-style: solid; width: 10px; height: 10px;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);">\r
						&nbsp;</section>\r
				</section>\r
				<section data-width="35%" style="display: inline-block; vertical-align: middle; width: 35%;">\r
					<section>\r
						<section style="margin-top: 0.5em; margin-bottom: 0.5em;">\r
							<section style="border-top: 1px solid rgb(89, 195, 249); box-sizing: border-box;">\r
								&nbsp;</section>\r
						</section>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
		<p style="text-indent:32px;line-height:150%">\r
			&nbsp;</p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">05:10 p.m. &ndash; 05:30 p.m.</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<strong><span style="line-height: 150%; font-size: 19px;">闭幕总结与问答&nbsp;</span></strong></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">Seminar Wrap Up With Q&amp;A</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px; text-align: center;">\r
			<span style="line-height: 150%; font-size: 19px;">甲骨文建筑与工程全球事业部 | 销售总监 Harvey He</span></p>\r
		<p style="text-indent: 32px; line-height: 150%; margin-bottom: 5px;">\r
			&nbsp;</p>\r
		<p style="border: 1px solid #e2e2e2; box-shadow: #e2e2e2 0px 16px 1.6px -9.6px; margin-bottom: 5px;">\r
			&nbsp;</p>\r
		<p class="active _brush" style="padding: 1em; color: rgb(121, 121, 121); min-width: 1px;">\r
			&nbsp;</p>\r
	</section>\r
</section>\r
<section class="_editor">\r
	<p>\r
		&nbsp;</p>\r
</section>`},{id:"8a3ce51207124d0ea895ac3a1188476d",title:"广东省项目管理协会关于催缴会费的通知",date:"2018-12-29",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"广东省项目管理协会关于催缴会费的通知",content:"<p>广东省项目管理协会关于催缴会费的通知</p>"},{id:"ebed0aa8148c46f18de80b4c4f19d093",title:"广东省项目管理协会关于开展2017～2018年度广东省项目管理优秀单位和个人评选活动的 通 知",date:"2018-12-29",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-29-01.jpg",hasCover:!0,summary:"广东省项目管理协会关于开展2017～2018年度广东省项目管理优秀单位和个人评选活动的 通 知 各会员及相关单位： 为实现创新、协调、绿色、开放、共享的发展规划，以创新驱动发展为核心战略，推进我省经济结构战略性调整和产业",content:`<p>\r
	&nbsp;</p>\r
<section class="_editor" data-color="rgb(216, 40, 33)">\r
	<section style="margin-top: 5px; margin-bottom: 5px; padding: 1px; border: 1px solid rgb(216, 40, 33); box-sizing: border-box;">\r
		<section style="padding: 1px; border: 1px solid rgb(216, 40, 33); color: inherit; box-sizing: border-box;">\r
			<section style="padding: 15px; border: 1px solid rgb(216, 40, 33); color: inherit; box-sizing: border-box;">\r
				<section style="color: inherit; border-color: rgb(216, 40, 33); box-sizing: border-box;">\r
					<p style="text-align: center; line-height: 48px; margin-bottom: 5px;">\r
						<strong><span style="font-size:29px;font-family:方正小标宋简体">广东省项目管理协会关于开展2017～2018年度广东省项目管理优秀单位和个人评选活动的</span></strong></p>\r
					<p style="text-align: center; line-height: 48px; margin-bottom: 5px;">\r
						<strong><span style="font-size:29px;font-family:方正小标宋简体">通&nbsp;&nbsp;&nbsp; 知</span></strong></p>\r
					<p style="margin-bottom: 5px;">\r
						&nbsp;</p>\r
					<p style="margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">各会员及相关单位：</span></p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">为实现创新、协调、绿色、开放、共享的发展规划，以创新驱动发展为核心战略，推进我省经济结构战略性调整和产业转型升级，促进我省项目管理行业科学、高效和创新发展，树立项目管理行业标杆，表彰项目管理先进典范，发挥其引领、带头作用，全面提升行业竞争力，根据我省项目管理行业的实际情况，广东省项目管理协会决定在全省范围内开展2017～2018年度广东省项目管理优秀单位及个人的评选活动，现就相关工作通知如下。</span></p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">《广东省项目管理优秀单位和个人评选办法》（以下简称&ldquo;评优办法&rdquo;）经公开征求意见并由会长办公会议通过，现正式颁布施行（详见附件）。凡符合&ldquo;评优办法&rdquo;规定条件的单位和个人，均可到协会秘书处办公室领取申报表格或登录协会官方网站http://www.gpma.org.cn下载申报表格，按要求如实填写，并加具申报单位意见。</span></p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">申报时间自即日起至2018年12月31日止，申报单位和个人须在此前将申报材料（原件）提交至协会秘书处，逾期将不予受理。办公地址：广州市天河北路侨林街39号中旅商务大厦东塔25楼C室，联系电话：020-38895991，020-38895992。</span></p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						&nbsp;</p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						&nbsp;</p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">附件：</span></p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">1.</span><span style="font-size:21px;font-family:仿宋_GB2312"><a href="/gpma03/preview-20261117/assets/notices/notice-29-attachment-01.doc"><span style="color:#0000ff;">《广东省项目管理优秀单位和个人评选办法》</span></a>；</span></p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">2. <a href="/gpma03/preview-20261117/assets/notices/notice-29-attachment-02.doc"><span style="color:#0000ff;">2017</span></a></span><span style="font-size:21px;font-family:仿宋_GB2312"><a href="/gpma03/preview-20261117/assets/notices/notice-29-attachment-02.doc"><span style="color:#0000ff;">～2018年度广东省项目管理优秀单位/优秀个人申报表（材料封面）、申报声明、填表说明</span></a>；</span></p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">3.<a href="/gpma03/preview-20261117/assets/notices/notice-29-attachment-04.doc"><span style="color:#0000ff;">2017</span></a></span><span style="font-size:21px;font-family:仿宋_GB2312"><a href="/gpma03/preview-20261117/assets/notices/notice-29-attachment-04.doc"><span style="color:#0000ff;">～2018年度广东省项目管理优秀单位申报表</span></a>；</span></p>\r
					<p style="text-indent: 43px; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">4.<a href="/gpma03/preview-20261117/assets/notices/notice-29-attachment-06.doc"><span style="color:#0000ff;">2017</span></a></span><span style="font-size:21px;font-family:仿宋_GB2312"><a href="/gpma03/preview-20261117/assets/notices/notice-29-attachment-06.doc"><span style="color:#0000ff;">～2018年度广东省项目管理优秀个人申报表</span></a>。</span></p>\r
					<p style="margin-bottom: 5px;">\r
						&nbsp;</p>\r
					<p style="margin-bottom: 5px;">\r
						&nbsp;</p>\r
					<p style="text-align: right; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">广东省项目管理协会&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>\r
					<p style="text-align: right; margin-bottom: 5px;">\r
						<span style="font-size:21px;font-family:仿宋_GB2312">二○一八年十二月十日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</span></p>\r
					<p style="color: #d82821; border-color: #d82821; letter-spacing: 2px;">\r
						&nbsp;</p>\r
				</section>\r
			</section>\r
		</section>\r
	</section>\r
</section>\r
<section class="_editor">\r
	<p>\r
		&nbsp;</p>\r
</section>\r
<p>\r
	<span style="font-family: 仿宋_GB2312; font-size: 21px; text-align: right;">原文件：</span></p>\r
<p>\r
	<span style="font-family: 仿宋_GB2312; font-size: 21px; text-align: right;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-29-01.jpg" /></span></p>\r
<p>\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-29-02.jpg" /></p>\r
<p>\r
	&nbsp;</p>\r
<p>\r
	&nbsp;</p>\r
<p>\r
	&nbsp;</p>`},{id:"b9dd38939d9c40d2924e3d32ae73ac2d",title:"广东省项目管理协会关于收取2018年会费的通知",date:"2018-06-26",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"广东省项目管理协会关于收取2018年会费的通知 各会员单位： 为了发挥协会的枢纽和桥梁作用，向会员单位提供更优质服务，根据《广东省项目管理协会章程》第三章第十二、第十三条的规定，请你单位按照下列对应的缴费标准，于2018",content:`<p>\r
	&nbsp;</p>\r
<p align="center" style="margin:0cm;margin-bottom:.0001pt;text-align:center">\r
	<b><span style="font-size:21.0pt;mso-bidi-font-family:\r
Helvetica;color:black">广东省项目管理协会关于收取<span lang="EN-US">2018</span>年会费的通知<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p style="margin: 0cm 0cm 0.0001pt;">\r
	<span lang="EN-US" style="mso-bidi-font-family:Helvetica;\r
color:black">&nbsp;<o:p></o:p></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">各会员单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">为了发挥协会的枢纽和桥梁作用，向会员单位提供更优质服务，根据《广东省项目管理协会章程》第三章第十二、第十三条的规定，请你单位按照下列对应的缴费标准，于<span lang="EN-US">2018</span>年<span lang="EN-US">7</span>月<span lang="EN-US">31</span>日前通过单位基本账户将<span lang="EN-US">2018</span>年会费汇入协会基本账户：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">（一）会长单位缴纳会费<span lang="EN-US">2</span>万元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">（二）常务副会长单位缴纳会费<span lang="EN-US">1.5</span>万元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">（三）副会长单位缴纳会费<span lang="EN-US">1</span>万元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">（四）常务理事单位缴纳会费<span lang="EN-US">5000</span>元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">（五）理事单位缴纳会费<span lang="EN-US">3000</span>元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">（六）会员单位缴纳会费<span lang="EN-US">1000</span>元<span lang="EN-US">/</span>年。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">汇款时，说明为<span lang="EN-US">&ldquo;2018</span>年会费<span lang="EN-US">&rdquo;</span>，并核实如下账户信息：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<b><span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:Helvetica;\r
color:black">开户名称：广东省项目管理协会<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<b><span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:Helvetica;\r
color:black">开户银行：中国建设银行广州天寿路支行<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<b><span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:Helvetica;\r
color:black">银行账号：<span lang="EN-US">440501 581108 00000047<o:p></o:p></span></span></b></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">汇款后，请将相关回执电子文件发给秘书处（以其他方式汇款的，请注明单位全称），秘书处将开具专用票据作为扣税凭证。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">感谢您的大力支持和积极配合！<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span lang="EN-US" style="font-size:14.0pt;line-height:150%;\r
mso-bidi-font-family:Helvetica;color:black">&nbsp;<o:p></o:p></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">联 系 人：陈炽明<span lang="EN-US"> &nbsp; &nbsp;</span>电话：<span lang="EN-US">020-38895993 &nbsp;15802027878<o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">电子邮箱：<span lang="EN-US">gpma@vip.163.com &nbsp; &nbsp;908792487@qq.com<o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:\r
Helvetica;color:black">联系地址：广州市天河北路侨林街<span lang="EN-US">39</span>号中旅商务大厦东塔<span lang="EN-US">25</span>楼<span lang="EN-US">C</span>座<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span lang="EN-US" style="font-size:14.0pt;line-height:150%;\r
mso-bidi-font-family:Helvetica;color:black">&nbsp;<o:p></o:p></span></p>\r
<p style="margin: 0cm 0cm 0.0001pt; line-height: 150%;">\r
	<span lang="EN-US" style="font-size:14.0pt;line-height:150%;\r
mso-bidi-font-family:Helvetica;color:black">&nbsp;<o:p></o:p></span></p>\r
<p align="right" style="margin: 0cm 0cm 0.0001pt; text-align: right; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:Helvetica;\r
color:black">广东省项目管理协会<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="right" style="margin: 0cm 0cm 0.0001pt; text-align: right; line-height: 150%;">\r
	<span style="font-size:14.0pt;line-height:150%;mso-bidi-font-family:Helvetica;\r
color:black">二<span lang="EN-US">0</span>一八年六月二十六日<span lang="EN-US"><o:p></o:p></span></span></p>`},{id:"269a79a827904924ad3e19719dc03f75",title:"广东省项目管理协会关于收取2017年度会费的通知",date:"2017-09-05",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-31-01.jpg",hasCover:!0,summary:"广东省项目管理协会关于收取2017年度会费的通知 各会员单位： 为了发挥协会的枢纽和桥梁作用，向会员单位提供更优质服务，根据《广东省项目管理协会章程》第三章第十二、十三条的规定，请你单位按照下列对应的缴费标准，于2017",content:`<p>\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:36.0pt;\r
mso-line-height-rule:exactly">\r
	<b><span style="font-size:22.0pt;font-family:方正小标宋简体;mso-hansi-font-family:华文中宋">广东省项目管理协会关于收取<span lang="EN-US">2017</span>年度会费的通知<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-hansi-font-family:华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-hansi-font-family:华文中宋">各会员单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">为了发挥协会的枢纽和桥梁作用，向会员单位提供更优质服务，根据《广东省项目管理协会章程》第三章第十二、十三条的规定，请你单位按照下列对应的缴费标准，于<span lang="EN-US">2017</span>年<span lang="EN-US">9</span>月<span lang="EN-US">30</span>日前通过单位基本账户将<span lang="EN-US">2017</span>年会费汇入协会基本账户：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（一）会长单位缴纳会费<span lang="EN-US">2</span>万元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（二）常务副会长单位缴纳会费<span lang="EN-US">1.5</span>万元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（三）副会长单位缴纳会费<span lang="EN-US">1</span>万元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（四）常务理事单位缴纳会费<span lang="EN-US">5000</span>元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（五）理事单位缴纳会费<span lang="EN-US">3000</span>元<span lang="EN-US">/</span>年；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">（六）会员单位缴纳会费<span lang="EN-US">1000</span>元<span lang="EN-US">/</span>年。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">汇款时，说明为&ldquo;<span lang="EN-US">2017</span>年会费&rdquo;，并准确填写下列信息：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.15pt;mso-char-indent-count:2.0">\r
	<b><span style="font-size:16.0pt;font-family:\r
仿宋_GB2312;mso-hansi-font-family:华文中宋">开户名称：广东省项目管理协会<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-indent:32.15pt;mso-char-indent-count:2.0">\r
	<b><span style="font-size:16.0pt;font-family:\r
仿宋_GB2312;mso-hansi-font-family:华文中宋">开户银行：中国建设银行广州天寿路支行<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-indent:32.15pt;mso-char-indent-count:2.0">\r
	<b><span style="font-size:16.0pt;font-family:\r
仿宋_GB2312;mso-hansi-font-family:华文中宋">银行账号：<span lang="EN-US">440501 581108 00000047<o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">汇款后，请将相关回执通过电子文件的方式发给秘书处（以其它方式汇款的，请在回执上注明单位全称），秘书处将开具专用收据作为扣税凭证。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">感谢您的大力支持和积极配合！<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-hansi-font-family:华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">联 系 人：陈炽明<span lang="EN-US">&nbsp;&nbsp;&nbsp; </span>电话：<span lang="EN-US">020-38895993&nbsp; 15802027878<o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">电子邮箱：<span lang="EN-US"><a href="mailto:gpma@vip.163.com">gpma<span style="font-family:宋体">@</span>vip.163.com</a>&nbsp;&nbsp;&nbsp; 908792487</span></span><span lang="EN-US" style="font-size:16.0pt;font-family:宋体">@</span><span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">qq.com<o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">联系地址：广州市天河北路侨林街<span lang="EN-US">39</span>号中旅商务大厦东塔<span lang="EN-US">25</span>楼<span lang="EN-US">C</span>座<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-hansi-font-family:华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-hansi-font-family:华文中宋">&nbsp;</span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;word-break:break-all">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">广东省项目管理协会<span lang="EN-US">&nbsp;&nbsp;&nbsp; <o:p></o:p></span></span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;word-break:break-all">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋">二○一七年九月四日</span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;word-break:break-all">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="word-break: break-all;">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:华文中宋"><span lang="EN-US"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-31-01.jpg" />&nbsp;&nbsp;&nbsp; <o:p></o:p></span></span></p>`},{id:"f7f17a58f4f2497cad39067b2a048cf1",title:"广东省项目管理协会关于公示2016年度广东省项目管理优秀单位和个人评选结果的通知",date:"2017-06-23",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-32-01.jpg",hasCover:!0,summary:"广东省项目管理协会关于公示2016年度广东省项目管理优秀单位和个人评选结果的通知 各会员单位，相关单位： 2016年度广东省项目管理优秀单位和个人评选活动，经协会依规组建的评选委员会评选、复核，报会长办公会议审批，已经圆",content:`<p align="center" class="MsoNormal" style="text-align:center;line-height:36.0pt;\r
mso-line-height-rule:exactly">\r
	<b><span style="font-size:22.0pt;font-family:方正小标宋简体;mso-hansi-font-family:华文中宋">广东省项目管理协会关于公示<span lang="EN-US">2016</span>年度广东省项目管理优秀单位和个人评选结果的通知<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-hansi-font-family:华文中宋">&nbsp;</span></p>\r
<p class="MsoNormal">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312;\r
mso-hansi-font-family:华文中宋">各会员单位，相关单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312">2016</span><span style="font-size:16.0pt;font-family:仿宋_GB2312">年度广东省项目管理优秀单位和个人评选活动，经协会依规组建的评选委员会评选、复核，报会长办公会议审批，已经圆满完成。现对<span lang="EN-US">2016</span>年度广东省项目管理优秀单位和个人的评选结果，予以公示。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:方正小标宋简体">一、公示结果<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">（一）<span lang="EN-US">2016</span>年度广东省项目管理优秀单位（排名不分先后）如下：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">广东中美华智工程院有限公司、广东永道工程咨询有限公司、广州易达建信科技开发有限公司、广东蓬江建筑设计院有限公司、南通四建集团有限公司、惠州市惠城建筑设计院有限公司、深圳市建易达工程造价咨询有限公司、广东湘盈建筑工程有限公司、广东省城规建设监理有限公司、广东汇熙建设有限公司、广东省第五建筑工程有限公司、珠海天泽建设项目管理有限公司、广东中火炬监理咨询有限公司，共计<span lang="EN-US">12</span>家。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">（二）<span lang="EN-US">2016</span>年度广东省项目管理优秀个人（排名不分先后）如下：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">周舜英、郑<span lang="EN-US">&nbsp; </span>松、季克建、钱国新、吴镇城、关文君、雷<span lang="EN-US">&nbsp; </span>威、郑卫华、池<span lang="EN-US">&nbsp; </span>欣、何满恒、李汉坤、谭玉华、许先远、刘<span lang="EN-US">&nbsp; </span>年、余亚斌、杨盛强、伍小</span><span style="font-size:16.0pt;font-family:宋体;mso-bidi-font-family:宋体">粦</span><span style="font-size:16.0pt;font-family:仿宋_GB2312;mso-hansi-font-family:仿宋_GB2312;\r
mso-bidi-font-family:仿宋_GB2312">、黄</span><span lang="EN-US" style="font-size:\r
16.0pt;font-family:仿宋_GB2312">&nbsp; </span><span style="font-size:16.0pt;font-family:仿宋_GB2312">辉、刘福长、聂红光，共计<span lang="EN-US">20</span>人。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:方正小标宋简体">二、公示期限<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">公示期<span lang="EN-US">7</span>天，自即日起至<span lang="EN-US">2017</span>年<span lang="EN-US">6</span>月<span lang="EN-US">26</span>日止。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:方正小标宋简体">三、异议受理<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">对评选结果的任何异议，请向广东省项目管理协会秘书处反映。对符合下列要求的异议，广东省项目管理协会秘书处应予受理。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">（一）任何单位或个人对评选结果有异议的，应当在评选结果公示期限内提供书面异议材料，并提供必要的证明文件，逾期或无正当理由的，不予受理；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">（二）提出异议的单位或个人应当表明真实身份，个人提出异议的，应当在异议材料上签署真实姓名，提供身份证、职称证、资格证的复印件，提供所在单位证明和联系方式等；以单位名义提出异议的，应当由单位法人代表签名并加盖单位公章，同时对提出异议者进行保密；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">（三）匿名异议或口头异议一律不予受理。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;\r
font-family:方正小标宋简体">四、联系方式<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312">电<span lang="EN-US">&nbsp; </span>话：<span lang="EN-US">020-38895993&nbsp;&nbsp;&nbsp; </span>联系人：陈炽明<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312">地<span lang="EN-US">&nbsp; </span>址：广州市天河北路侨林街<span lang="EN-US">39</span>号中旅商务大厦东塔<span lang="EN-US">25</span>楼<span lang="EN-US">C</span>座<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312">&nbsp;</span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;word-break:break-all">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">广东省项目管理协会<span lang="EN-US">&nbsp;&nbsp;&nbsp; <o:p></o:p></span></span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;word-break:break-all">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">二○一七年六月二十日</span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;word-break:break-all">\r
	&nbsp;</p>\r
<section class="96wx-bgc" style="margin: 0px; padding: 0px 0.2em; font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; white-space: normal; display: inline-block; line-height: 1.3; font-size: 22.4px; color: rgb(255, 255, 255); background-color: rgb(255, 0, 0);">\r
	<section style="margin: 0px; padding: 0px;">\r
		<span style="margin: 0px; padding: 0px; font-size: 18px;">备注</span></section>\r
</section>\r
<p class="MsoNormal" style="word-break: break-all;">\r
	<span style="font-family: 华文中宋; font-size: 16px; color: rgb(0, 0, 0); line-height: 25.6px;">通知原文件</span></p>\r
<p class="MsoNormal" style="word-break: break-all;">\r
	<span style="font-family: 华文中宋; font-size: 16px; color: rgb(0, 0, 0); line-height: 25.6px;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-32-01.jpg" /></span></p>\r
<p class="MsoNormal" style="word-break: break-all;">\r
	<span style="font-family: 华文中宋; font-size: 16px; color: rgb(0, 0, 0); line-height: 25.6px;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-32-02.jpg" /></span></p>\r
<p class="MsoNormal" style="word-break: break-all;">\r
	<span style="font-family: 华文中宋; font-size: 16px; color: rgb(0, 0, 0); line-height: 25.6px;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-32-03.jpg" /></span></p>`},{id:"df80e5299e744c19ba2d8d7a9372ff92",title:"2017年项目管理发展研讨会圆满成功",date:"2017-06-08",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-33-01.jpg",hasCover:!0,summary:"2017年项目管理发展研讨会圆满成功 2017年6月1日，由广东省项目管理协会主办，广东永道工程咨询有限公司、广州易达建信科技开发有限公司、广东汇熙建设有限公司协办的“2017年项目管理发展研讨会”在广州市华泰宾馆举行。",content:`<p align="center" class="MsoNormal" style="text-align: center;">\r
	<b><span lang="EN-US" style="font-size: 22pt; font-family: 宋体;">2017</span></b><b><span style="font-size: 22pt; font-family: 宋体;">年项目管理发展研讨会圆满成功<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size: 16pt; font-family: 宋体;">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 宋体;">2017</span><span style="font-size: 14pt; font-family: 宋体;">年<span lang="EN-US">6</span>月<span lang="EN-US">1</span>日，由广东省项目管理协会主办，广东永道工程咨询有限公司、广州易达建信科技开发有限公司、广东汇熙建设有限公司协办的&ldquo;<span lang="EN-US">2017</span>年项目管理发展研讨会&rdquo;在广州市华泰宾馆举行。参会企业负责人及相关部门主要领导共计<span lang="EN-US">60</span>多人。其中，广东永道工程咨询有限公司周舜英总经理、广州易达建信科技开发有限公司高峰总经理、广东汇熙建设有限公司杨盛开副总经理和广东中美华智工程院有限公司周明科总经理做主题发言。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-size: 14pt; font-family: 宋体;">随着知识经济的快速发展，市场变得越来越多样化，竞争变得越来越复杂化，传统的项目管理思维定式和运作方法，已难以适应当今时代的发展，部分项目及其管理存在一定风险与隐患，有必要进一步研究项目管理发展新方向，破解阻碍项目管理发展的症结和难题。&ldquo;共赢、共享，创新驱动发展&rdquo;是这次研讨会的主题。</span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-33-01.jpg" style="height: 533px; width: 800px;" /></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-family: 宋体; font-size: 14pt; text-indent: 28pt; line-height: 26px;">会议开始，广东省项目管理协会赖铭华会长为本次研讨会致辞，赖会长指出：在落实国家&ldquo;互联网</span><span lang="EN-US" style="font-family: 宋体; font-size: 14pt; text-indent: 28pt; line-height: 26px;">+</span><span style="font-family: 宋体; font-size: 14pt; text-indent: 28pt; line-height: 26px;">&rdquo;战略的行动下，运用互联网改变传统项目管理模式，使&ldquo;互联网</span><span lang="EN-US" style="font-family: 宋体; font-size: 14pt; text-indent: 28pt; line-height: 26px;">+</span><span style="font-family: 宋体; font-size: 14pt; text-indent: 28pt; line-height: 26px;">项目管理&rdquo;驱动行业技术创新与管理变革，提升行业核心竞争力，促进行业可持续发展，已经成为未来项目管理发展的必由之路。</span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-33-02.jpg" style="height: 590px; width: 800px;" /></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-family: 宋体; font-size: 14pt; line-height: 28pt; text-indent: 28pt;">在这次研讨会上，四位企业负责人从不同的专业理念上，介绍其不同的研究、做法和经验，探索不同专业的项目管理发展之路，为项目管理的发展提供方向和指引。</span></p>\r
<p class="MsoNormal" style="text-indent: 28.1pt; line-height: 28pt;">\r
	<b><span style="font-size: 14pt; font-family: 宋体;">一、周舜英总经理的演讲：&ldquo;<span lang="EN-US">BIM</span>技术在项目投资管理方面的应用探讨&rdquo;</span></b><span lang="EN-US" style="font-size: 14pt; font-family: 宋体;"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-size: 14pt; font-family: 宋体;">探讨了<span lang="EN-US">BIM</span>技术如何协同管理平台来提高项目投资管理水平；传统投资管理方式的局限性分析；<span lang="EN-US">BIM</span>技术的实际应用方面；<span lang="EN-US">BIM</span>技术应用时间不长，应用当中存在哪些障碍，我们又如何思考与处理。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28.1pt; line-height: 28pt;">\r
	<b><span style="font-size: 14pt; font-family: 宋体;">二、周明科总经理的演讲：&ldquo;建设项目投资控制方法探讨&rdquo;<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-size: 14pt; font-family: 宋体;">探讨了目标管理与过程控制的相辅相成的作用；为什么目标的设定是一项技术活；如何抓住目标管理的核心与落脚点；如何设立目标与管理；风险的预判与应对分析。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28.1pt; line-height: 28pt;">\r
	<b><span style="font-size: 14pt; font-family: 宋体;">三、杨盛开副总经理的演讲：&ldquo;项目管理之安全管理探讨&rdquo;<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-size: 14pt; font-family: 宋体;">探讨了多变形势下安全管理的趋势及重要性；安全管理的重要性体现在哪里；安全管理的制度化与流程化的重要性与特点；现场安全文明施工的着重点。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28.1pt; line-height: 28pt;">\r
	<b><span style="font-size: 14pt; font-family: 宋体;">四、高峰总经理的演讲：&ldquo;优化企业内部治理　提升外部高端业务能力&rdquo;<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-size: 14pt; font-family: 宋体;">探讨了在市场经济改革下，工程造价行业信息化的发展及必要性；工程造价的信息化重点就是数据为王；如何做好信息化，建立自己的内部资源；内修外治的重要分析；什么是国际化的全过程工程咨询；国际化形势下的差距分析与改变之道。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-size: 14pt; font-family: 宋体;">在这次研讨会上，各参会代表踊跃发言，畅所欲言，让不同专业理念的碰撞，迸发出行业积极向上的火花，为项目管理发展之路带来智慧的亮光。研讨会时间紧凑，进程顺利，取得圆满成功，达到预期目标。</span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-size: 14pt; font-family: 宋体;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-33-03.jpg" style="height: 533px; width: 800px;" /></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<span style="font-family: 宋体; font-size: 14pt; line-height: 28pt; text-indent: 28pt;">广东省项目管理协会一直致力提高我省项目管理整体水平，推进项目管理发展的现代化、国际化和信息化。这次研讨会的顺利召开，搭建起一个共商共谋项目管理发展的交流平台，共同探索项目管理发展的长效机制，对促进项目管理产业链的协同发展，推动企业发展，增强企业市场竞争力，加强行业交流，提升社会责任心和影响力，共同打造行业融合共赢新局面有着十分重要的意义。</span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; line-height: 28pt;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-33-04.jpg" style="height: 533px; width: 800px;" /></p>`},{id:"54604d95e8a1430f988f6813dda88bc1",title:"广东省项目管理协会关于召开 2017年项目管理发展研讨会的通知",date:"2017-05-10",tag:"会议",cover:"/gpma03/preview-20261117/assets/notices/notice-34-02.jpg",hasCover:!0,summary:"广东省项目管理协会关于召开 2017年项目管理发展研讨会的通知 各会员单位，相关单位： 随着知识经济的快速发展，市场的多样化、竞争化趋于复杂，传统的项目管理思维定式和运作方法，已难以适应时代发展需要，部分项目及其管理存在",content:`<div>\r
	&nbsp;</div>\r
<div>\r
	<p align="center" class="MsoNormal" style="text-align: center; line-height: 36pt;">\r
		<span style="font-size: 22pt; font-family: 方正小标宋简体;">广东省项目管理协会关于召开<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p align="center" class="MsoNormal" style="text-align: center; line-height: 36pt;">\r
		<span lang="EN-US" style="font-size: 22pt; font-family: 方正小标宋简体;">2017</span><span style="font-size: 22pt; font-family: 方正小标宋简体;">年项目管理发展研讨会的通知<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal">\r
		<span lang="EN-US" style="font-size: 16pt; font-family: 仿宋_GB2312;">&nbsp;</span></p>\r
	<p class="MsoNormal">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">各会员单位，相关单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32.25pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">随着知识经济的快速发展，市场的多样化、竞争化趋于复杂，传统的项目管理思维定式和运作方法，已难以适应时代发展需要，部分项目及其管理存在一定风险与隐患，有必要进一步研究项目管理发展新方向。<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32.25pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">现定于<span lang="EN-US">2017</span>年<span lang="EN-US">6</span>月<span lang="EN-US">1</span>日（星期四）在广州市越秀区先烈南路<span lang="EN-US">23</span>号华泰宾馆召开<span lang="EN-US">2017</span>年项目管理发展研讨会，请你单位派员依时参加。交通、食宿费用由会员单位自行承担。<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32.25pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">本次研讨会，旨在搭建项目管理研讨平台，深化项目管理交流，探索建立长效发展机制，提高行业市场影响力，推动行业创新发展。现将有关事项通知如下：<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32.25pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;"><strong>一、会议主题：</strong>共赢 共享 创新驱动项目管理发展<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 64pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;"><strong>核心内容：</strong>多变环境下的项目管理发展<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32pt;">\r
		<span lang="EN-US" style="font-size: 16pt; font-family: 仿宋_GB2312;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size: 16pt; font-family: 仿宋_GB2312;">新发展机遇下的投资与项目管理<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32pt;">\r
		<span lang="EN-US" style="font-size: 16pt; font-family: 仿宋_GB2312;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size: 16pt; font-family: 仿宋_GB2312;">项目中合同管理的重要性<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32pt;">\r
		<span lang="EN-US" style="font-size: 16pt; font-family: 仿宋_GB2312;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size: 16pt; font-family: 仿宋_GB2312;">探索创新项目管理方式，推动发展<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;"><strong>二、报到时间：</strong><span lang="EN-US">2017</span>年<span lang="EN-US">6</span>月<span lang="EN-US">1</span>日<span lang="EN-US">13:30</span>～<span lang="EN-US">14:30<o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;"><strong>三、会议时间：</strong><span lang="EN-US">2017</span>年<span lang="EN-US">6</span>月<span lang="EN-US">1</span>日<span lang="EN-US">14:30</span>～<span lang="EN-US">18:00<o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;"><strong>四、会议地点：</strong>华泰宾馆迎宾楼<span lang="EN-US">6</span>楼珠海厅<span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 32pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;"><strong>五、联系方式：</strong><span lang="EN-US"><o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 64pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">联系电话：<span lang="EN-US">020-38895992<o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 64pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">联 系 人：李<span lang="EN-US">&nbsp; </span>雪<span lang="EN-US">15017572658&nbsp; </span>邓剑峰<span lang="EN-US">13826013319<o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 64pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">官方网址：<span lang="EN-US">http://www.gpma.org.cn<o:p></o:p></span></span></p>\r
	<p class="MsoNormal" style="text-indent: 64pt;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">回执邮箱：<span lang="EN-US">gpma@vip.163.com<o:p></o:p></span></span></p>\r
	<p class="MsoNormal">\r
		<span lang="EN-US" style="font-size: 16pt; font-family: 仿宋_GB2312;">&nbsp;</span></p>\r
	<p class="MsoNormal">\r
		<span style="position: absolute; z-index: 251660286; margin-left: 368px; margin-top: 2px; width: 159px; height: 159px;"><img height="159" src="file:///C:/Users/xf3/AppData/Local/Temp/msohtmlclip1/01/clip_image002.gif" v:shapes="图片_x0020_1" width="159" /></span></p>\r
	<p align="right" class="MsoNormal" style="text-align: right; word-break: break-all;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">广东省项目管理协会<span lang="EN-US">&nbsp;&nbsp;&nbsp; <o:p></o:p></span></span></p>\r
	<p align="right" class="MsoNormal" style="text-align: right; word-break: break-all;">\r
		<span style="font-size: 16pt; font-family: 仿宋_GB2312;">二○一七年五月九日<span lang="EN-US">&nbsp;&nbsp;&nbsp; <o:p></o:p></span></span></p>\r
	<p class="MsoNormal">\r
		<span lang="EN-US" style="font-size: 16pt; font-family: 仿宋_GB2312;">&nbsp;</span></p>\r
	<p class="MsoNormal">\r
		&nbsp;</p>\r
	<p class="MsoNormal">\r
		&nbsp;</p>\r
	<p class="MsoNormal">\r
		<a href="/gpma03/preview-20261117/assets/notices/notice-34-attachment-01.docx"><span style="color: rgb(255, 255, 255); font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; font-size: 22.4px; line-height: 1.3; background-color: rgb(255, 0, 0);">下载</span><span style="font-family: 华文中宋; font-size: 14pt; color: rgb(62, 62, 62); line-height: 25.6px;">参会回执表</span></a></p>\r
	<p class="MsoNormal">\r
		&nbsp;</p>\r
	<p class="MsoNormal">\r
		<span lang="EN-US" style="font-size: 16pt; font-family: 仿宋_GB2312;">&nbsp;</span><span style="color: rgb(255, 255, 255); font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; font-size: 22.4px; line-height: 1.3; background-color: rgb(255, 0, 0);">附</span><span style="font-family: 华文中宋; font-size: 14pt; color: rgb(62, 62, 62); line-height: 25.6px;">正式文件 </span></p>\r
	<p class="MsoNormal">\r
		<span style="font-family: 华文中宋; font-size: 14pt; color: rgb(62, 62, 62); line-height: 25.6px;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-34-02.jpg" /></span></p>\r
</div>\r
<p>\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-34-03.jpg" /></p>`},{id:"0c9dd3ec6dc54cbaa91270e7b006322e",title:"2016年度广东省项目管理优秀单位和个人评选方案",date:"2017-05-08",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-35-01.jpg",hasCover:!0,summary:"2016年度广东省项目管理优秀单位和个人 评选方案 根据《广东省项目管理协会关于印发〈广东省项目管理优秀单位和个人评选办法〉的通知》（粤管协字〔2016〕3号）以及《广东省项目管理协会关于开展2016年度广东省项目管理优",content:`<p align="center" class="MsoNormal" style="text-align: center; line-height: 36pt;">\r
	<b><span lang="EN-US" style="font-size: 22pt; font-family: 华文中宋;">2016</span></b><b><span style="font-size: 22pt; font-family: 华文中宋;">年度广东省项目管理优秀单位和个人<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align: center; line-height: 36pt;">\r
	<b><span style="font-size: 22pt; font-family: 华文中宋;">评选方案<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span style="font-size: 14pt; font-family: 仿宋_GB2312;">根据《广东省项目管理协会关于印发〈广东省项目管理优秀单位和个人评选办法〉的通知》（粤管协字〔<span lang="EN-US">2016</span>〕<span lang="EN-US">3</span>号）以及《广东省项目管理协会关于开展<span lang="EN-US">2016</span>年度广东省项目管理优秀单位及个人评选活动的通知》（粤管协字〔<span lang="EN-US">2016</span>〕<span lang="EN-US">4</span>号）文件精神，结合<span lang="EN-US">2016</span>年度广东省项目管理优秀单位和个人评选活动实际情况，拟定本方案。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28.05pt;">\r
	<b><span style="font-size: 14pt; font-family: 华文中宋;">评优目的<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;">1.</span><span style="font-size: 14pt; font-family: 仿宋_GB2312;">表彰优秀，树立标杆，促进项目管理行业的创新发展；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;">2.</span><span style="font-size: 14pt; font-family: 仿宋_GB2312;">营造积极向上的项目管理行业态势，表彰优秀单位及个人；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;">3.</span><span style="font-size: 14pt; font-family: 仿宋_GB2312;">发掘项目管理行业优秀人才，为行业发展培养和储备人才。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28.05pt;">\r
	<b><span style="font-size: 14pt; font-family: 华文中宋;">评优范围<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;">2016</span><span style="font-size: 14pt; font-family: 仿宋_GB2312;">年度申报的广东省项目管理优秀单位及个人。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28.05pt;">\r
	<b><span style="font-size: 14pt; font-family: 华文中宋;">评优原则</span></b><span lang="EN-US" style="font-size: 14pt;">&nbsp;</span><span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;">1.</span><span style="font-size: 14pt; font-family: 仿宋_GB2312;">优中选优：同样满足评选条件，在多名优秀中择最优录取；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;">2.</span><span style="font-size: 14pt; font-family: 仿宋_GB2312;">宁缺勿滥：获奖人数不足时，不再降低标准或做补充评选；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;">3.</span><span style="font-size: 14pt; font-family: 仿宋_GB2312;">采用民主与集中相结合的评选方法；<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span lang="EN-US" style="font-size: 14pt; font-family: 仿宋_GB2312;">4.</span><span style="font-size: 14pt; font-family: 仿宋_GB2312;">评选标准采取百分制形式。</span></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<strong><span style="font-family: 仿宋_GB2312; font-size: 18.6667px; text-indent: 37.3333px;">以下为详细内容：</span></strong></p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-35-01.jpg" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-35-02.jpg" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-35-03.jpg" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-35-04.jpg" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-35-05.jpg" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-35-06.jpg" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-35-07.jpg" /></p>\r
<p>\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent: 28pt;">\r
	<span style="font-size: 14pt; font-family: 仿宋_GB2312;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<div>\r
	<b style="line-height: 48px; text-align: center;"><span lang="EN-US" style="font-size: 22pt; font-family: 华文中宋;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-35-08.jpg" /></span></b></div>`},{id:"4c80bdfb620f46cdb7df79c38ebbcfe4",title:"广东省项目管理协会关于开展2016年度广东省项目管理优秀单位和个人评选活动的通知",date:"2016-11-09",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-36-01.jpg",hasCover:!0,summary:"广东省项目管理协会关于开展 2016年度广东省项目管理优秀单位和个人评选活动的 通 知 各会员单位，相关单位： 为促进我省项目管理事业创新发展，树立项目管理行业标杆，表彰项目管理先进典范，发挥其引领、带头作用，提升行业竞",content:`<p align="center" class="MsoNormal" style="text-align: center; line-height: 36pt; mso-line-height-rule: exactly;">\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align: center; line-height: 36pt; mso-line-height-rule: exactly;">\r
	<b><span style="font-family: 宋体; font-size: 21pt;">广东省项目管理协会关于开展</span></b></p>\r
<p align="center" class="MsoNormal" style="text-align: center; line-height: 36pt; mso-line-height-rule: exactly;">\r
	<b><span style="font-family: 宋体; font-size: 21pt;"><span lang="EN-US">2016</span>年度广东省项目管理优秀单位和个人评选活动的<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align: center; line-height: 36pt; mso-line-height-rule: exactly;">\r
	<b><span style="font-family: 宋体; font-size: 21pt;">通<span lang="EN-US">&nbsp;&nbsp;&nbsp; </span>知<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-family: 仿宋_GB2312; mso-bidi-font-size: 10.5pt; mso-hansi-font-family: 华文中宋;"><font face="宋体">&nbsp;</font></span></p>\r
<p class="MsoNormal" style="margin-bottom: 6pt; mso-para-margin-bottom: .5gd;">\r
	<span style="font-family: 宋体; font-size: 14pt;">各会员单位，相关单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-family: 宋体; font-size: 14pt;">为促进我省项目管理事业创新发展，树立项目管理行业标杆，表彰项目管理先进典范，发挥其引领、带头作用，提升行业竞争力，结合我省实际情况，广东省项目管理协会决定开展<span lang="EN-US">2016</span>年度广东省项目管理优秀单位和个人的评选活动。现就相关事项通知如下：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-family: 宋体; font-size: 14pt;">一、凡符合《广东省项目管理优秀单位和个人评选办法》规定条件的单位和个人，均可到协会秘书处办公室领取申报表格或登录协会官方网站<span lang="EN-US">http://www.gpma.org.cn</span>下载申报表格，按要求如实填写相关内容，并加具单位意见。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-family: 宋体; font-size: 14pt;">二、本年度评选优秀单位和个人的申报时间，自发文之日起至<span lang="EN-US">2016</span>年<span lang="EN-US">12</span>月<span lang="EN-US">16</span>日止。申报单位和个人应当在截止时间前将申报材料原件提交至协会秘书处，逾期不予受理。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-family: 宋体; font-size: 14pt;">三、申报单位的，应提供单位营业执照（副本）或法人登记证书（副本）复印件（加盖公章）；申报个人的，应提供其身份证复印件。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-family: 宋体; font-size: 14pt;">四、协会办公地址：广州市天河北路侨林街<span lang="EN-US">39</span>号中旅商务大厦东塔<span lang="EN-US">25</span>楼<span lang="EN-US">C</span>座<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-family: 宋体; font-size: 14pt;">五、联系方式<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-family: 宋体; font-size: 14pt;">联系人：陈炽明 <span lang="EN-US">15802027878&nbsp; </span>李雪 <span lang="EN-US">15017572658<o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-family: 宋体; font-size: 14pt;">联系电话：<span lang="EN-US">020-38895991</span>，<span lang="EN-US">020-38895992</span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-family: 宋体; font-size: 14pt;"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-size: 18px;"><span style="font-family: 宋体;"><a href="/gpma03/preview-20261117/assets/notices/notice-36-attachment-01.docx"><span style="color: rgb(0, 128, 128);">附件1-2016年度广东省项目管理优秀单位申报表.docx</span></a><span style="color: rgb(0, 128, 128);"> </span></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<span style="font-size: 18px;"><span style="font-family: 宋体;"><a href="/gpma03/preview-20261117/assets/notices/notice-36-attachment-02.docx"><span style="color: rgb(0, 128, 128);">附件2-2016年度广东省项目管理优秀个人申报表.docx</span></a></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	&nbsp;</p>\r
<p align="left" class="MsoNormal" style="margin: 0cm 64pt 0pt 0cm; text-align: left;">\r
	<span style="font-size: 18px;"><span style="font-family: 宋体;"><strong><span style="font-family: 宋体; font-size: 14pt;"><font color="#000000">附通知文件：</font></span></strong></span></span></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-36-01.jpg" /></p>\r
<p class="MsoNormal" style="text-indent: 28pt; margin-bottom: 6pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0;">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-36-02.jpg" /><br />\r
	&nbsp;</p>`},{id:"31ebbde1f37b48238a68fa48f9c5f8bd",title:"广东省项目管理协会关于印发《广东省项目管理优秀单位和个人评选办法》的通知",date:"2016-11-04",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-37-01.jpg",hasCover:!0,summary:"广东省项目管理协会关于印发 《广东省项目管理优秀单位和个人评选办法》的通知 各会员单位，相关单位： 《广东省项目管理优秀单位和个人评选办法》已经2016年10月20日广东省项目管理协会会长办公会议通过，现予印发，请遵照执",content:`<p align="center" class="MsoNormal" style="text-align:center;line-height:36.0pt;\r
mso-line-height-rule:exactly">\r
	<b><span lang="EN-US" style="font-size:21.0pt;font-family:宋体">&nbsp; </span></b><b><span style="font-size:21.0pt;font-family:宋体">广东省项目管理协会关于印发</span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:36.0pt;\r
mso-line-height-rule:exactly">\r
	<b><span style="font-size:21.0pt;font-family:宋体">《广东省项目管理优秀单位和个人评选办法》的通知<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="mso-bidi-font-size:10.5pt;\r
font-family:宋体">&nbsp;</span></p>\r
<p class="MsoNormal" style="line-height:200%">\r
	<span style="font-size:15.0pt;\r
line-height:200%;font-family:宋体">各会员单位，相关单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:30.0pt;mso-char-indent-count:2.0;\r
line-height:200%">\r
	<span style="font-size:15.0pt;line-height:200%;font-family:\r
宋体">《广东省项目管理优秀单位和个人评选办法》已经<span lang="EN-US">2016</span>年<span lang="EN-US">10</span>月<span lang="EN-US">20</span>日广东省项目管理协会会长办公会议通过，现予印发，请遵照执行。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:30.0pt;mso-char-indent-count:2.0;\r
line-height:200%">\r
	<span style="font-size:15.0pt;line-height:200%;font-family:\r
宋体">执行过程中的意见和建议，请径向广东省项目管理协会反映。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:30.0pt;mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:15.0pt;font-family:宋体">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent:30.0pt;mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:15.0pt;font-family:宋体">&nbsp;</span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;text-indent:30.0pt;\r
mso-char-indent-count:2.0">\r
	<span style="font-size:15.0pt;font-family:宋体">广东省项目管理协会 <span lang="EN-US"><o:p></o:p></span></span></p>\r
<div>\r
	<section class="xmyeditor" style="margin: 0px; padding: 0px;">\r
		<section style="margin: 0px; padding: 0px;">\r
			<section style="margin: 0px auto; padding: 0px; border: 0px; white-space: normal;">\r
				<section style="margin: 0px auto; padding: 0px; text-align: center;">\r
					<section style="margin: 0px; padding: 0px;">\r
						<p style="text-align: right;">\r
							<span style="font-family: 仿宋_GB2312; font-size: 16pt;">二○一六年十一月一日</span></p>\r
						<p>\r
							&nbsp;</p>\r
						<p>\r
							&nbsp;</p>\r
						<p style="text-align: left;">\r
							<strong><span style="font-family: 宋体; font-size: 20px; line-height: 40px; text-indent: 40px;">附通知文件：</span></strong></p>\r
						<p>\r
							<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-37-01.jpg" /></p>\r
						<p>\r
							<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-37-02.jpg" /></p>\r
						<p style="text-align: justify;">\r
							<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-37-03.jpg" /></p>\r
					</section>\r
				</section>\r
			</section>\r
		</section>\r
	</section>\r
</div>\r
<p align="right" class="MsoNormal" style="text-align:right;word-break:break-all">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-37-04.jpg" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-37-05.jpg" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-37-06.jpg" /><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-37-07.jpg" /></p>`},{id:"37c1df04682645e6be6c259df85f58e6",title:"2016中国项目管理发展论坛 即将在广州揭幕",date:"2016-10-09",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"2016中国项目管理发展论坛 即将在广州揭幕 在中国经济发展步入“新常态”的大环境下，“互联网+项目管理”已成为项目管理技术与管理创新的重要方向，信息化手段成为提高项目管理水平和能力的重要支撑。 项目管理该如何与信息化深",content:`<p align="center" class="MsoNormal" style="text-align:center;text-indent:42.15pt;\r
mso-char-indent-count:2.0">\r
	<b><span lang="EN-US" style="font-size:21.0pt;font-family:宋体">2016</span></b><b><span style="font-size:21.0pt;font-family:\r
宋体">中国项目管理发展论坛<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:42.15pt;\r
mso-char-indent-count:2.0">\r
	<b><span style="font-size:21.0pt;font-family:宋体">即将在广州揭幕<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:24.0pt;\r
mso-char-indent-count:2.0">\r
	<span lang="EN-US" style="font-size:12.0pt;font-family:\r
宋体">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\r
line-height:150%">\r
	<span style="font-size:14.0pt;line-height:150%;font-family:\r
宋体">在中国经济发展步入&ldquo;新常态&rdquo;的大环境下，&ldquo;互联网<span lang="EN-US">+</span>项目管理&rdquo;已成为项目管理技术与管理创新的重要方向，信息化手段成为提高项目管理水平和能力的重要支撑。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\r
line-height:150%">\r
	<span lang="EN-US" style="font-size:14.0pt;line-height:150%;\r
font-family:宋体">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\r
line-height:150%">\r
	<span style="font-size:14.0pt;line-height:150%;font-family:\r
宋体">项目管理该如何与信息化深度融合，利用科技进步驱动项目管理创新，实现技术、管理与机制的新跨越，走出一条具有核心竞争力的可持续发展之路？企业该如何提高项目管理能力，提升客户满意度，实现项目经济效益和社会效益最大化？企业该如何调整自身发展战略，变挑战为机遇，适应新形势，建立符合自身特点的项目管理体系，实现新一轮的快速健康发展？<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\r
line-height:150%">\r
	<span lang="EN-US" style="font-size:14.0pt;line-height:150%;\r
font-family:宋体">&nbsp;</span></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span style="font-size:16.0pt;line-height:150%;font-family:宋体">&ldquo;融合创新<span lang="EN-US">&nbsp; </span>联动发展&rdquo;<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span lang="EN-US" style="font-size:16.0pt;line-height:150%;font-family:\r
宋体">2016</span></b><b><span style="font-size:16.0pt;line-height:150%;font-family:宋体">中国项目管理发展论坛<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span style="font-size:16.0pt;line-height:150%;font-family:宋体">将于<span lang="EN-US">2016</span>年<span lang="EN-US">11</span>月<span lang="EN-US">28</span>日<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span style="font-size:16.0pt;line-height:150%;font-family:宋体">在广州<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span style="font-size:16.0pt;line-height:150%;font-family:宋体">盛大拉开帷幕<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span lang="EN-US" style="font-size:16.0pt;line-height:150%;font-family:\r
宋体">&nbsp;</span></b></p>\r
<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\r
line-height:150%">\r
	<span style="font-size:14.0pt;line-height:150%;font-family:\r
宋体">届时，多名业界权威专家、知名学者、企业领袖将直面项目管理现状与信息化发展方向，为您一一解读！<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:28.0pt;mso-char-indent-count:2.0;\r
line-height:150%">\r
	<span lang="EN-US" style="font-size:14.0pt;line-height:150%;\r
font-family:宋体">&nbsp;</span></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span style="font-size:16.0pt;line-height:150%;font-family:宋体">群英荟萃，共襄盛举<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span style="font-size:16.0pt;line-height:150%;font-family:宋体">广东省项目管理协会将与您<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span style="font-size:16.0pt;line-height:150%;font-family:宋体">&ldquo;共享、共创、共赢&rdquo;<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span style="font-size:16.0pt;line-height:150%;font-family:宋体">期待您拨冗莅临！<span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span lang="EN-US" style="font-size:16.0pt;line-height:150%;font-family:\r
宋体">&nbsp;</span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span lang="EN-US" style="font-size:16.0pt;line-height:150%;font-family:\r
宋体">&nbsp;</span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;text-indent:32.15pt;\r
mso-char-indent-count:2.0;line-height:150%">\r
	<b><span lang="EN-US" style="font-size:16.0pt;line-height:150%;font-family:\r
宋体">&nbsp;</span></b></p>\r
<p align="left" class="MsoNormal" style="text-indent: 24pt; line-height: 150%;">\r
	<span style="font-size:12.0pt;\r
line-height:150%;font-family:宋体">欲了解更多活动详情，请持续关注<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 24pt; line-height: 150%;">\r
	<span style="font-size:12.0pt;\r
line-height:150%;font-family:宋体">官方网站：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 24pt; line-height: 150%;">\r
	<span lang="EN-US" style="font-size:\r
12.0pt;line-height:150%;font-family:宋体;color:red"><a href="/gpma03/preview-20261117/"><span style="color:red">http://www.gpma.org.cn</span></a><o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 24pt; line-height: 150%;">\r
	<span style="font-size:12.0pt;\r
line-height:150%;font-family:宋体">官方微信：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 24pt; line-height: 150%;">\r
	<span lang="EN-US" style="font-size:\r
12.0pt;line-height:150%;font-family:宋体;color:red">gpma-org<o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 24pt; line-height: 150%;">\r
	<span style="font-size:12.0pt;\r
line-height:150%;font-family:宋体">活动协作：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 24pt; line-height: 150%;">\r
	<span lang="EN-US" style="font-size:\r
12.0pt;line-height:150%;font-family:宋体;color:red">020-38895993<o:p></o:p></span></p>`},{id:"575d8d67d5a64a81b69af9921941a122",title:"广东省项目管理协会关于征求《广东省项目管理优秀单位和个人评选办法（征求意见稿）》的通知",date:"2016-09-20",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"广东省项目管理协会关于征求 《广东省项目管理优秀单位和个人评选办法（征求意见稿）》的 通 知 各会员单位： 为实现创新、协调、绿色、开放、共享的发展规划，以创新驱动发展为核心战略，推进我省经济结构战略性调整和产业转型升级",content:`<h6 align="center" class="MsoNormal" style="text-align: center; line-height: 36pt;">\r
	&nbsp;</h6>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:30.0pt;\r
mso-line-height-rule:exactly">\r
	<b><span style="font-size:22.0pt;font-family:华文中宋">广东省项目管理协会关于征求</span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:30.0pt;\r
mso-line-height-rule:exactly">\r
	<b><span style="font-size:22.0pt;font-family:华文中宋">《广东省项目管理优秀单位和个人评选办法（征求意见稿）》的</span></b></p>\r
<p align="center" class="MsoNormal" style="text-align:center;line-height:30.0pt;\r
mso-line-height-rule:exactly">\r
	<b><span style="font-size:22.0pt;font-family:华文中宋">通<span lang="EN-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>知</span></b><b><span lang="EN-US" style="mso-bidi-font-size:\r
10.5pt;font-family:华文中宋"><o:p></o:p></span></b></p>\r
<p class="MsoNormal">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">各会员单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">为实现创新、协调、绿色、开放、共享的发展规划，以创新驱动发展为核心战略，推进我省经济结构战略性调整和产业转型升级，促进我省项目管理行业科学、高效和创新发展，树立项目管理行业标杆，表彰项目管理工作者典范，发挥其引领、带头作用，全面提升行业竞争力，根据我省项目管理行业的实际情况，决定在全省范围内开展<span lang="EN-US">2016</span>年度&ldquo;项目管理优秀单位&rdquo;及&ldquo;项目管理优秀工作者&rdquo;评选工作。</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">现将《广东省项目管理优秀单位和个人评选办法（征求意见稿）》在官网上发表，征求您们意见，请于<span lang="EN-US">9</span>月<span lang="EN-US">30</span>日前将意见和建议以书面形式反馈到协会秘书处。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">感谢您对协会工作的关心和支持！</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">联系电话：<span lang="EN-US">020-38895991</span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">电子邮箱：<span lang="EN-US"><a href="mailto:gpma@vip.163.com">gpma@vip.163.com</a><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">地址：广州市天河北路侨林街<span lang="EN-US">39</span>号中旅商务大厦东塔<span lang="EN-US">25</span>楼<span lang="EN-US">C</span>室。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-family:仿宋_gb2312;"><span style="font-size: 16pt;"><span lang="EN-US"><o:p></o:p></span></span></span></p>\r
<p class="MsoNormal">\r
	<span style="font-family:仿宋_gb2312;"><span lang="EN-US" style="font-size: 16pt;">&nbsp;</span><span style="font-size: 16pt;">附件：</span></span></p>\r
<p class="MsoNormal" style="line-height: 36pt;">\r
	<a href="/gpma03/preview-20261117/assets/notices/notice-39-attachment-01.pdf"><b><span style="font-size:16.0pt;font-family:仿宋;color:red">《广东省项目管理优秀单位和个人评选办法（征求意见稿）》</span></b></a><b><span style="font-size:16.0pt;font-family:仿宋;color:red"><span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal">\r
	<a href="/gpma03/preview-20261117/assets/notices/notice-39-attachment-02.docx"><b><span style="font-size:16.0pt;font-family:仿宋_GB2312;color:red">项目管理优秀单位申报表</span></b></a><b><span style="font-size:16.0pt;font-family:仿宋_GB2312;color:red"><span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal">\r
	<a href="/gpma03/preview-20261117/assets/notices/notice-39-attachment-03.docx"><b><span style="font-size:16.0pt;font-family:仿宋_GB2312;color:red">项目管理优秀个人申报表</span></b></a><b><span style="font-size:16.0pt;font-family:仿宋_GB2312;color:red"><span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal">\r
	<span style="font-family:仿宋_gb2312;"><span lang="EN-US" style="font-size: 16pt;">&nbsp;</span></span></p>\r
<p class="MsoNormal">\r
	&nbsp;</p>\r
<p align="right" class="MsoNormal" style="text-align:right;word-break:break-all">\r
	<span style="font-family:仿宋_gb2312;"><span lang="EN-US" style="font-size: 16pt;">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-size: 16pt;">广东省项目管理协会<span lang="EN-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span style="font-size:16.0pt;font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p align="right" class="MsoNormal" style="text-align:right;word-break:break-all">\r
	<span style="font-family:仿宋_gb2312;"><span lang="EN-US" style="font-size: 16pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</span><span style="font-size: 16pt;">二</span><span style="font-size: 16pt;">○</span><span style="font-size: 16pt;">一六年九月二十日<span lang="EN-US">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span><span style="font-size:16.0pt;font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal">\r
	<span style="font-family:仿宋_gb2312;"><span lang="EN-US" style="font-size: 16pt;">&nbsp;</span></span></p>`},{id:"ed55b81a2ae54f93b0db15dd0252b9d5",title:"广东省项目管理协会关于征求《广东省项目管理协会会员证书式样（征求意见稿）》的通知",date:"2016-09-05",tag:"通知",cover:"/gpma03/preview-20261117/assets/notices/notice-40-01.jpg",hasCover:!0,summary:"广东省项目管理协会关于征求 《广东省项目管理协会会员证书式样（征求意见稿）》的 通 知 各会员单位： 广东省项目管理协会拟近期向会员单位颁发会员证书。 为保证会员证书能反映出会员心声和行业特色，现将会员证书式样在官网上公",content:`<p align="center" class="MsoNormal" style="text-align:center">\r
	&nbsp;</p>\r
<p align="center" class="MsoNormal" style="text-align: center; line-height: 30pt;">\r
	<b><span style="font-size: 22pt; font-family: 华文中宋;">广东省项目管理协会关于征求</span></b></p>\r
<p align="center" class="MsoNormal" style="text-align: center; line-height: 30pt;">\r
	<b><span style="font-size: 22pt; font-family: 华文中宋;">《广东省项目管理协会会员证书式样（征求意见稿）》的</span></b></p>\r
<p align="center" class="MsoNormal" style="text-align: center; line-height: 30pt;">\r
	<b><span style="font-size: 22pt; font-family: 华文中宋;">通<span lang="EN-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>知</span></b></p>\r
<p class="MsoNormal">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312">&nbsp;</span></p>\r
<p class="MsoNormal">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">各会员单位：<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312">广东省项目管理协会拟近期向会员单位颁发会员证书。</span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312">为保证会员证书能反映出会员心声和行业特色，现将会员证书式样在官网上公布，征求你们的意见，请于<span lang="EN-US">9</span>月<span lang="EN-US">30</span>日前将意见和建议以书面形式反馈到协会秘书处。</span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">感谢你们对协会工作的关心和支持！</span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">联系电话：<span lang="EN-US">020-38895991<o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">电子邮箱：</span><span lang="EN-US"><a href="mailto:gpma@vip.163.com"><span style="font-size: 16pt; font-family: 仿宋_GB2312; color: windowtext;">gpma@vip.163.com</span></a></span><span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312"><o:p></o:p></span></p>\r
<p class="MsoNormal" style="text-indent:32.0pt;mso-char-indent-count:2.0">\r
	<span style="font-size:16.0pt;font-family:仿宋_GB2312">地址：广州市天河北路侨林街<span lang="EN-US">39</span>号中旅商务大厦东塔<span lang="EN-US">25</span>楼<span lang="EN-US">C</span>室。<span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span lang="EN-US" style="font-size:16.0pt;font-family:仿宋_GB2312">&nbsp;</span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<b><span style="font-size:16.0pt;font-family:仿宋_GB2312">附录：</span></b></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<b><span style="font-size:16.0pt;font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></b></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;font-family:仿宋;\r
mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r
mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA">式样<span lang="EN-US">A：</span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;\r
font-family:仿宋_GB2312"><span lang="EN-US"><o:p></o:p></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<img alt="" src="/gpma03/preview-20261117/assets/notices/notice-40-01.jpg" style="width: 800px; height: 565px;" /></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-family: 仿宋; font-size: 21.3333px;">式样</span><span lang="EN-US" style="font-family: 仿宋; font-size: 21.3333px;">B</span><span style="font-family: 仿宋; font-size: 21.3333px;">：</span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-family: 仿宋; font-size: 21.3333px;"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-40-02.jpg" style="width: 800px; height: 565px;" /></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	&nbsp;</p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;font-family:仿宋;\r
mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r
mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA">式样<span lang="EN-US">C：</span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	<span style="font-size:16.0pt;font-family:仿宋;\r
mso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\r
mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA"><span lang="EN-US"><img alt="" src="/gpma03/preview-20261117/assets/notices/notice-40-03.jpg" style="width: 800px; height: 565px;" /></span></span></p>\r
<p class="MsoNormal" style="text-indent:32.25pt">\r
	&nbsp;</p>\r
<p class="MsoNormal">\r
	&nbsp;</p>\r
<p class="MsoNormal">\r
	<span style="font-size:16.0pt;font-family:仿宋"><span lang="EN-US"><o:p></o:p></span></span></p>`},{id:"f2c5e253939f4808820499fa05b7654e",title:"广东省项目管理协会官网正式开通",date:"2016-08-17",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"广东省项目管理协会官网正式开通 广东省项目管理协会 （英文：GuangdongProjectManagement Association，缩写GPMA） 经广东省人民政府职能部门批准于2015年12月30日正式成立的项目",content:`<h1 style="margin: 0px; padding: 0px; text-align: center; font-size: 16px; color: rgb(85, 85, 85); font-family: 宋体; line-height: normal; white-space: normal;">\r
	&nbsp;</h1>\r
<p align="center" class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:\r
auto;text-align:center;mso-line-height-alt:19.5pt;mso-pagination:widow-orphan">\r
	<b><span style="font-size: 21pt; font-family: 宋体;">广东省项目管理协会官网正式开通</span></b><span lang="EN-US" style="font-size: 21pt; font-family: 宋体;"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:\r
auto;text-align:center;mso-line-height-alt:19.5pt;mso-pagination:widow-orphan">\r
	<span lang="EN-US" style="font-size: 22pt; font-family: 宋体;">&nbsp;</span><span lang="EN-US" style="font-family: 宋体;"><o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="line-height: 19.5pt;">\r
	<span lang="EN-US" style="font-family: 宋体;">&nbsp;<o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:\r
auto;text-align:center;line-height:19.5pt;mso-pagination:widow-orphan">\r
	<b><span style="font-size:16.0pt;font-family:宋体;mso-bidi-font-family:Helvetica;\r
color:#3E3E3E;mso-font-kerning:0pt">广东省项目管理协会</span></b><span lang="EN-US" style="font-size: 16pt; font-family: 宋体;"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:\r
auto;text-align:center;line-height:19.5pt;mso-pagination:widow-orphan">\r
	<b><span style="font-size:14.0pt;font-family:宋体;mso-bidi-font-family:Helvetica;\r
color:#3E3E3E;mso-font-kerning:0pt">（英文：<span lang="EN-US">GuangdongProjectManagement Association</span>，缩写<span lang="EN-US">GPMA</span>）</span></b><span lang="EN-US" style="font-size: 14pt; font-family: 宋体;"><o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 35pt; line-height: 19.5pt;">\r
	<span style="font-size:14.0pt;font-family:宋体;mso-bidi-font-family:Helvetica;\r
color:#3E3E3E;mso-font-kerning:0pt">经广东省人民政府职能部门批准于<span lang="EN-US">2015</span>年<span lang="EN-US">12</span>月<span lang="EN-US">30</span>日正式成立的项目管理最高权威机构。协会主要是面向国家需求，面向世界前沿，肩负起加强项目管理关键技术的创新与集成，搭建起先进、科学、民主、和谐的国际交流平台，努力为我省经济建设、社会安全和可持续发展作出卓越贡献。</span><span lang="EN-US" style="font-family: 宋体;"><o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="line-height: 19.5pt;">\r
	<span lang="EN-US" style="font-size:12.0pt;font-family:宋体;mso-bidi-font-family:Helvetica;\r
color:#3E3E3E;mso-font-kerning:0pt">&nbsp;</span><span lang="EN-US" style="font-family: 宋体;"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:\r
auto;text-align:center;line-height:19.5pt;mso-pagination:widow-orphan">\r
	<b><span style="font-size:16.0pt;font-family:宋体;mso-bidi-font-family:Helvetica;\r
color:#3E3E3E;mso-font-kerning:0pt">重要作用</span></b><span lang="EN-US" style="font-family: 宋体;"><o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 28pt; line-height: 19.5pt;">\r
	<span style="font-size:14.0pt;font-family:宋体;mso-bidi-font-family:Helvetica;\r
color:#3E3E3E;mso-font-kerning:0pt">打造项目管理信息移动平台，对行业内外的精华资讯进行推送，不仅有重大新闻与政策解读，还有本协会的各类精彩资讯、线上线下活动的最新发布。全面搭建先进、科学、和谐的交流平台。</span><span lang="EN-US" style="font-family: 宋体;"><o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="line-height: 19.5pt;">\r
	<span lang="EN-US" style="font-size:14.0pt;font-family:宋体;mso-bidi-font-family:Helvetica;\r
color:#3E3E3E;mso-font-kerning:0pt">&nbsp;</span><span lang="EN-US" style="font-family: 宋体;"><o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="text-indent: 28pt; line-height: 19.5pt;">\r
	<span style="font-size:14.0pt;font-family:宋体;mso-bidi-font-family:Helvetica;\r
color:#3E3E3E;mso-font-kerning:0pt">官网的正式开通，可以大大加快协会的全面建设，也加强了协会与各会员单位的沟通。</span><span lang="EN-US" style="font-family: 宋体;"><o:p></o:p></span></p>`},{id:"a7e872f400f944e29ba4ea047dc90669",title:"官方微信平台正式开通",date:"2016-08-17",tag:"通知",cover:"/gpma03/preview-20261117/assets/gpma-logo-lockup-hd.png",hasCover:!1,summary:"官方微信平台正式开通 协会公众平台 微信号：gpma-org，正式开通 打造指尖上的项目管理信息移动平台，对行业内外的精华资讯进行推送，不仅有重大新闻与政策解读，还有本协会的各类精彩资讯、线上线下活动的最新发布。全面搭建",content:`<h1 style="margin: 0px; padding: 0px; text-align: center; font-size: 16px; color: rgb(85, 85, 85); font-family: 宋体; line-height: normal; white-space: normal;">\r
	&nbsp;</h1>\r
<p align="center" class="MsoNormal">\r
	<b><span style="font-size: 21pt;">官方微信平台正式开通</span></b><span lang="EN-US" style="font-size: 21pt;"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal">\r
	<b><span lang="EN-US" style="font-size: 22pt;">&nbsp;</span></b><span lang="EN-US"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="line-height: 19.5pt;">\r
	<span lang="EN-US" style="font-size: 7.5pt;">&nbsp;</span><span lang="EN-US"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="margin-left: 21pt; text-indent: 30.05pt; line-height: 19.5pt;">\r
	<b><span style="font-size: 16pt;">协会公众平台</span></b><span lang="EN-US" style="font-size: 16pt;"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="margin-left: 21pt; text-indent: 30.05pt; line-height: 19.5pt;">\r
	<b><span style="font-size: 16pt;">微信号：<span lang="EN-US">gpma-org</span>，正式开通</span></b><span lang="EN-US" style="font-size: 16pt;"><o:p></o:p></span></p>\r
<p align="center" class="MsoNormal" style="margin-left: 21pt; text-indent: 28.05pt; line-height: 19.5pt;">\r
	<b><span lang="EN-US" style="font-size: 14pt;">&nbsp;</span></b><span lang="EN-US"><o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="margin-left: 21pt; text-indent: 28pt; line-height: 19.5pt;">\r
	<span style="font-size: 14pt; color: rgb(62, 62, 62);">打造指尖上的项目管理信息移动平台，对行业内外的精华资讯进行推送，不仅有重大新闻与政策解读，还有本协会的各类精彩资讯、线上线下活动的最新发布。全面搭建先进、科学、和谐的交流平台。</span><span lang="EN-US"><o:p></o:p></span></p>\r
<p align="left" class="MsoNormal" style="margin-left: 21pt; text-indent: 28pt; line-height: 19.5pt;">\r
	<span style="font-size: 14pt; color: rgb(62, 62, 62);">欢迎各位对公众平台的关注。</span><span lang="EN-US"><o:p></o:p></span></p>`}],Rm={"/gpma03/preview-20261117/list-d7360f55075b4ab78c69ea383d8ca988.html":"news","/gpma03/preview-20261117/list-f38e30fffe7d465d9aa4f8a8bf890201.html":"news","/gpma03/preview-20261117/list-1df896b0f23e42bf910ec0d01e14e9ed.html":"showcase"},Vm=[{id:"news",label:"团标动态"},{id:"showcase",label:"团标展示"}],Km=Gm.filter(h=>["22297d0e9b274dc895f222efa5581d86","a7257a3a8ac84e1fa8eb57b49b94868e","c0517852d6a9445db2818a95bf189a8b"].includes(h.id)).sort((h,B)=>B.date.localeCompare(h.date)),Jm=[{id:"service-sample",title:"项目管理服务规范（展示样例）",summary:"示例展示项目管理服务的适用范围、工作内容与成果要求。",paragraphs:["本条目用于展示标准详情的页面结构，不代表协会已经立项或发布同名标准。正式内容应由协会确认后维护。","标准详情可介绍适用范围、主要技术内容、起草单位、发布日期和实施日期。涉及服务管理的标准，可依次说明需求识别、服务策划、组织实施、成果交付与质量改进等内容。","正式标准发布后，可在本页引用对应的发布公告及文件，附件统一使用相关下载中的资源，不重复上传。"]},{id:"consulting-sample",title:"全过程工程咨询协同管理指南（展示样例）",summary:"示例展示咨询服务中各参与方的职责与协同安排。",paragraphs:["本条目是团标展示栏目布局样例，不是协会正式发布的标准，不具备标准编号或实施日期。","展示内容可围绕项目不同阶段的咨询协同展开，包括工作界面、职责分工、信息传递、成果衔接和问题协调，帮助读者判断标准与自身业务的关联。","正式资料接入时，应准确维护发布单位、适用范围、起草单位与版本信息，并关联发布文件。"]},{id:"digital-sample",title:"工程项目数字化管理规范（展示样例）",summary:"示例展示数字化管理场景、数据协同和成果交付要求。",paragraphs:["本条目仅供页面展示参考，不代表协会已发布同名标准。所示正文为样例说明，不提供正式标准文本下载。","标准介绍可包含项目基础数据、业务流程协同、资料归档、成果交付及信息安全等主题。详情应突出应用场景和适用对象，方便用户检索与阅读。","正式发布后，可补充真实标准编号、发布及实施日期、主要起草单位，以及有权公开的配套附件。"]}];var gp={exports:{}},wl={},fp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function jm(){return Ug||(Ug=1,(function(h){function B(x,E){var j=x.length;x.push(E);t:for(;0<j;){var st=j-1>>>1,ct=x[st];if(0<Z(ct,E))x[st]=E,x[j]=ct,j=st;else break t}}function _(x){return x.length===0?null:x[0]}function d(x){if(x.length===0)return null;var E=x[0],j=x.pop();if(j!==E){x[0]=j;t:for(var st=0,ct=x.length,c=ct>>>1;st<c;){var w=2*(st+1)-1,U=x[w],q=w+1,D=x[q];if(0>Z(U,j))q<ct&&0>Z(D,U)?(x[st]=D,x[q]=j,st=q):(x[st]=U,x[w]=j,st=w);else if(q<ct&&0>Z(D,j))x[st]=D,x[q]=j,st=q;else break t}}return E}function Z(x,E){var j=x.sortIndex-E.sortIndex;return j!==0?j:x.id-E.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;h.unstable_now=function(){return L.now()}}else{var P=Date,I=P.now();h.unstable_now=function(){return P.now()-I}}var T=[],v=[],H=1,k=null,Q=3,dt=!1,ft=!1,qt=!1,Tn=!1,$t=typeof setTimeout=="function"?setTimeout:null,Fn=typeof clearTimeout=="function"?clearTimeout:null,jt=typeof setImmediate<"u"?setImmediate:null;function pn(x){for(var E=_(v);E!==null;){if(E.callback===null)d(v);else if(E.startTime<=x)d(v),E.sortIndex=E.expirationTime,B(T,E);else break;E=_(v)}}function Sn(x){if(qt=!1,pn(x),!ft)if(_(T)!==null)ft=!0,Dt||(Dt=!0,Yt());else{var E=_(v);E!==null&&zn(Sn,E.startTime-x)}}var Dt=!1,$=-1,Ct=5,En=-1;function Qe(){return Tn?!0:!(h.unstable_now()-En<Ct)}function Un(){if(Tn=!1,Dt){var x=h.unstable_now();En=x;var E=!0;try{t:{ft=!1,qt&&(qt=!1,Fn($),$=-1),dt=!0;var j=Q;try{n:{for(pn(x),k=_(T);k!==null&&!(k.expirationTime>x&&Qe());){var st=k.callback;if(typeof st=="function"){k.callback=null,Q=k.priorityLevel;var ct=st(k.expirationTime<=x);if(x=h.unstable_now(),typeof ct=="function"){k.callback=ct,pn(x),E=!0;break n}k===_(T)&&d(T),pn(x)}else d(T);k=_(T)}if(k!==null)E=!0;else{var c=_(v);c!==null&&zn(Sn,c.startTime-x),E=!1}}break t}finally{k=null,Q=j,dt=!1}E=void 0}}finally{E?Yt():Dt=!1}}}var Yt;if(typeof jt=="function")Yt=function(){jt(Un)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,kn=Se.port2;Se.port1.onmessage=Un,Yt=function(){kn.postMessage(null)}}else Yt=function(){$t(Un,0)};function zn(x,E){$=$t(function(){x(h.unstable_now())},E)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(x){x.callback=null},h.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ct=0<x?Math.floor(1e3/x):5},h.unstable_getCurrentPriorityLevel=function(){return Q},h.unstable_next=function(x){switch(Q){case 1:case 2:case 3:var E=3;break;default:E=Q}var j=Q;Q=E;try{return x()}finally{Q=j}},h.unstable_requestPaint=function(){Tn=!0},h.unstable_runWithPriority=function(x,E){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var j=Q;Q=x;try{return E()}finally{Q=j}},h.unstable_scheduleCallback=function(x,E,j){var st=h.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?st+j:st):j=st,x){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=j+ct,x={id:H++,callback:E,priorityLevel:x,startTime:j,expirationTime:ct,sortIndex:-1},j>st?(x.sortIndex=j,B(v,x),_(T)===null&&x===_(v)&&(qt?(Fn($),$=-1):qt=!0,zn(Sn,j-st))):(x.sortIndex=ct,B(T,x),ft||dt||(ft=!0,Dt||(Dt=!0,Yt()))),x},h.unstable_shouldYield=Qe,h.unstable_wrapCallback=function(x){var E=Q;return function(){var j=Q;Q=E;try{return x.apply(this,arguments)}finally{Q=j}}}})(mp)),mp}var Mg;function Zm(){return Mg||(Mg=1,fp.exports=jm()),fp.exports}var up={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Om(){if(qg)return Zt;qg=1;var h=hp();function B(T){var v="https://react.dev/errors/"+T;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)v+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+T+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var d={d:{f:_,r:function(){throw Error(B(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},Z=Symbol.for("react.portal");function L(T,v,H){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:k==null?null:""+k,children:T,containerInfo:v,implementation:H}}var P=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function I(T,v){if(T==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Zt.createPortal=function(T,v){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(B(299));return L(T,v,null,H)},Zt.flushSync=function(T){var v=P.T,H=d.p;try{if(P.T=null,d.p=2,T)return T()}finally{P.T=v,d.p=H,d.d.f()}},Zt.preconnect=function(T,v){typeof T=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,d.d.C(T,v))},Zt.prefetchDNS=function(T){typeof T=="string"&&d.d.D(T)},Zt.preinit=function(T,v){if(typeof T=="string"&&v&&typeof v.as=="string"){var H=v.as,k=I(H,v.crossOrigin),Q=typeof v.integrity=="string"?v.integrity:void 0,dt=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;H==="style"?d.d.S(T,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:k,integrity:Q,fetchPriority:dt}):H==="script"&&d.d.X(T,{crossOrigin:k,integrity:Q,fetchPriority:dt,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Zt.preinitModule=function(T,v){if(typeof T=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var H=I(v.as,v.crossOrigin);d.d.M(T,{crossOrigin:H,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&d.d.M(T)},Zt.preload=function(T,v){if(typeof T=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var H=v.as,k=I(H,v.crossOrigin);d.d.L(T,H,{crossOrigin:k,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Zt.preloadModule=function(T,v){if(typeof T=="string")if(v){var H=I(v.as,v.crossOrigin);d.d.m(T,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:H,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else d.d.m(T)},Zt.requestFormReset=function(T){d.d.r(T)},Zt.unstable_batchedUpdates=function(T,v){return T(v)},Zt.useFormState=function(T,v,H){return P.H.useFormState(T,v,H)},Zt.useFormStatus=function(){return P.H.useHostTransitionStatus()},Zt.version="19.2.0",Zt}var _g;function Hm(){if(_g)return up.exports;_g=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(B){console.error(B)}}return h(),up.exports=Om(),up.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function Dm(){if(Ag)return wl;Ag=1;var h=Zm(),B=hp(),_=Hm();function d(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Z(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function L(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function P(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function I(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function T(t){if(L(t)!==t)throw Error(d(188))}function v(t){var n=t.alternate;if(!n){if(n=L(t),n===null)throw Error(d(188));return n!==t?null:t}for(var e=t,a=n;;){var l=e.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){e=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===e)return T(l),t;if(i===a)return T(l),n;i=i.sibling}throw Error(d(188))}if(e.return!==a.return)e=l,a=i;else{for(var s=!1,o=l.child;o;){if(o===e){s=!0,e=l,a=i;break}if(o===a){s=!0,a=l,e=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===e){s=!0,e=i,a=l;break}if(o===a){s=!0,a=i,e=l;break}o=o.sibling}if(!s)throw Error(d(189))}}if(e.alternate!==a)throw Error(d(190))}if(e.tag!==3)throw Error(d(188));return e.stateNode.current===e?t:n}function H(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=H(t),n!==null)return n;t=t.sibling}return null}var k=Object.assign,Q=Symbol.for("react.element"),dt=Symbol.for("react.transitional.element"),ft=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),Tn=Symbol.for("react.strict_mode"),$t=Symbol.for("react.profiler"),Fn=Symbol.for("react.consumer"),jt=Symbol.for("react.context"),pn=Symbol.for("react.forward_ref"),Sn=Symbol.for("react.suspense"),Dt=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),En=Symbol.for("react.activity"),Qe=Symbol.for("react.memo_cache_sentinel"),Un=Symbol.iterator;function Yt(t){return t===null||typeof t!="object"?null:(t=Un&&t[Un]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Symbol.for("react.client.reference");function kn(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qt:return"Fragment";case $t:return"Profiler";case Tn:return"StrictMode";case Sn:return"Suspense";case Dt:return"SuspenseList";case En:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ft:return"Portal";case jt:return t.displayName||"Context";case Fn:return(t._context.displayName||"Context")+".Consumer";case pn:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return n=t.displayName||null,n!==null?n:kn(t.type)||"Memo";case Ct:n=t._payload,t=t._init;try{return kn(t(n))}catch{}}return null}var zn=Array.isArray,x=B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},st=[],ct=-1;function c(t){return{current:t}}function w(t){0>ct||(t.current=st[ct],st[ct]=null,ct--)}function U(t,n){ct++,st[ct]=t.current,t.current=n}var q=c(null),D=c(null),X=c(null),at=c(null);function Ot(t,n){switch(U(X,n),U(D,t),U(q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Y0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Y0(n),t=L0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}w(q),U(q,t)}function xt(){w(q),w(D),w(X)}function _a(t){t.memoizedState!==null&&U(at,t);var n=q.current,e=L0(n,t.type);n!==e&&(U(D,t),U(q,e))}function El(t){D.current===t&&(w(q),w(D)),at.current===t&&(w(at),bl._currentValue=j)}var Qi,bp;function Ee(t){if(Qi===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Qi=n&&n[1]||"",bp=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qi+t+bp}var Xi=!1;function Vi(t,n){if(!t||Xi)return"";Xi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(y){var u=y}Reflect.construct(t,[],N)}else{try{N.call()}catch(y){u=y}t.call(N.prototype)}}else{try{throw Error()}catch(y){u=y}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(y){if(y&&u&&typeof y.stack=="string")return[y.stack,u.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),s=i[0],o=i[1];if(s&&o){var p=s.split(`
`),m=o.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===m.length)for(a=p.length-1,l=m.length-1;1<=a&&0<=l&&p[a]!==m[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==m[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==m[l]){var b=`
`+p[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=l);break}}}finally{Xi=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ee(e):""}function Cg(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Vi(t.type,!1);case 11:return Vi(t.type.render,!1);case 1:return Vi(t.type,!0);case 31:return Ee("Activity");default:return""}}function xp(t){try{var n="",e=null;do n+=Cg(t,e),e=t,t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ki=Object.prototype.hasOwnProperty,Ji=h.unstable_scheduleCallback,Wi=h.unstable_cancelCallback,Yg=h.unstable_shouldYield,Lg=h.unstable_requestPaint,Ft=h.unstable_now,Qg=h.unstable_getCurrentPriorityLevel,zp=h.unstable_ImmediatePriority,vp=h.unstable_UserBlockingPriority,Ul=h.unstable_NormalPriority,Xg=h.unstable_LowPriority,Np=h.unstable_IdlePriority,Vg=h.log,Kg=h.unstable_setDisableYieldValue,Aa=null,It=null;function In(t){if(typeof Vg=="function"&&Kg(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(Aa,t)}catch{}}var Pt=Math.clz32?Math.clz32:$g,Jg=Math.log,Wg=Math.LN2;function $g(t){return t>>>=0,t===0?32:31-(Jg(t)/Wg|0)|0}var Ml=256,ql=262144,_l=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Al(t,n,e){var a=t.pendingLanes;if(a===0)return 0;var l=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=a&134217727;return o!==0?(a=o&~i,a!==0?l=Ue(a):(s&=o,s!==0?l=Ue(s):e||(e=o&~t,e!==0&&(l=Ue(e))))):(o=a&~i,o!==0?l=Ue(o):s!==0?l=Ue(s):e||(e=a&~t,e!==0&&(l=Ue(e)))),l===0?0:n!==0&&n!==l&&(n&i)===0&&(i=l&-l,e=n&-n,i>=e||i===32&&(e&4194048)!==0)?n:l}function Ta(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fg(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wp(){var t=_l;return _l<<=1,(_l&62914560)===0&&(_l=4194304),t}function $i(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function ka(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ig(t,n,e,a,l,i){var s=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var o=t.entanglements,p=t.expirationTimes,m=t.hiddenUpdates;for(e=s&~e;0<e;){var b=31-Pt(e),N=1<<b;o[b]=0,p[b]=-1;var u=m[b];if(u!==null)for(m[b]=null,b=0;b<u.length;b++){var y=u[b];y!==null&&(y.lane&=-536870913)}e&=~N}a!==0&&Sp(t,a,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~n))}function Sp(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var a=31-Pt(n);t.entangledLanes|=n,t.entanglements[a]=t.entanglements[a]|1073741824|e&261930}function Ep(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var a=31-Pt(e),l=1<<a;l&n|t[a]&n&&(t[a]|=n),e&=~l}}function Up(t,n){var e=n&-n;return e=(e&42)!==0?1:Fi(e),(e&(t.suspendedLanes|n))!==0?0:e}function Fi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ii(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mp(){var t=E.p;return t!==0?t:(t=window.event,t===void 0?32:fg(t.type))}function qp(t,n){var e=E.p;try{return E.p=t,n()}finally{E.p=e}}var Pn=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Pn,Lt="__reactProps$"+Pn,Xe="__reactContainer$"+Pn,Pi="__reactEvents$"+Pn,Pg="__reactListeners$"+Pn,tf="__reactHandles$"+Pn,_p="__reactResources$"+Pn,Ba="__reactMarker$"+Pn;function ts(t){delete t[Tt],delete t[Lt],delete t[Pi],delete t[Pg],delete t[tf]}function Ve(t){var n=t[Tt];if(n)return n;for(var e=t.parentNode;e;){if(n=e[Xe]||e[Tt]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=$0(t);t!==null;){if(e=t[Tt])return e;t=$0(t)}return n}t=e,e=t.parentNode}return null}function Ke(t){if(t=t[Tt]||t[Xe]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ga(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(d(33))}function Je(t){var n=t[_p];return n||(n=t[_p]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _t(t){t[Ba]=!0}var Ap=new Set,Tp={};function Me(t,n){We(t,n),We(t+"Capture",n)}function We(t,n){for(Tp[t]=n,t=0;t<n.length;t++)Ap.add(n[t])}var nf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kp={},Bp={};function ef(t){return Ki.call(Bp,t)?!0:Ki.call(kp,t)?!1:nf.test(t)?Bp[t]=!0:(kp[t]=!0,!1)}function Tl(t,n,e){if(ef(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function kl(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function Bn(t,n,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+a)}}function rn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function af(t,n,e){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(s){e=""+s,i.call(this,s)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(s){e=""+s},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ns(t){if(!t._valueTracker){var n=Gp(t)?"checked":"value";t._valueTracker=af(t,n,""+t[n])}}function Rp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),a="";return t&&(a=Gp(t)?t.checked?"true":"false":t.value),t=a,t!==e?(n.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var lf=/[\n"\\]/g;function cn(t){return t.replace(lf,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function es(t,n,e,a,l,i,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),n!=null?s==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+rn(n)):t.value!==""+rn(n)&&(t.value=""+rn(n)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),n!=null?as(t,s,rn(n)):e!=null?as(t,s,rn(e)):a!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+rn(o):t.removeAttribute("name")}function jp(t,n,e,a,l,i,s,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),n!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){ns(t);return}e=e!=null?""+rn(e):"",n=n!=null?""+rn(n):e,o||n===t.value||(t.value=n),t.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=o?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),ns(t)}function as(t,n,e){n==="number"&&Bl(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function $e(t,n,e,a){if(t=t.options,n){n={};for(var l=0;l<e.length;l++)n["$"+e[l]]=!0;for(e=0;e<t.length;e++)l=n.hasOwnProperty("$"+t[e].value),t[e].selected!==l&&(t[e].selected=l),l&&a&&(t[e].defaultSelected=!0)}else{for(e=""+rn(e),n=null,l=0;l<t.length;l++){if(t[l].value===e){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Zp(t,n,e){if(n!=null&&(n=""+rn(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+rn(e):""}function Op(t,n,e,a){if(n==null){if(a!=null){if(e!=null)throw Error(d(92));if(zn(a)){if(1<a.length)throw Error(d(93));a=a[0]}e=a}e==null&&(e=""),n=e}e=rn(n),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a),ns(t)}function Fe(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var sf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hp(t,n,e){var a=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":a?t.setProperty(n,e):typeof e!="number"||e===0||sf.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function Dp(t,n,e){if(n!=null&&typeof n!="object")throw Error(d(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&e[l]!==a&&Hp(t,l,a)}else for(var i in n)n.hasOwnProperty(i)&&Hp(t,i,n[i])}function ls(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(t){return pf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Gn(){}var is=null;function ss(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ie=null,Pe=null;function Cp(t){var n=Ke(t);if(n&&(t=n.stateNode)){var e=t[Lt]||null;t:switch(t=n.stateNode,n.type){case"input":if(es(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+cn(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var a=e[n];if(a!==t&&a.form===t.form){var l=a[Lt]||null;if(!l)throw Error(d(90));es(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<e.length;n++)a=e[n],a.form===t.form&&Rp(a)}break t;case"textarea":Zp(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&$e(t,!!e.multiple,n,!1)}}}var os=!1;function Yp(t,n,e){if(os)return t(n,e);os=!0;try{var a=t(n);return a}finally{if(os=!1,(Ie!==null||Pe!==null)&&(vi(),Ie&&(n=Ie,t=Pe,Pe=Ie=null,Cp(n),t)))for(n=0;n<t.length;n++)Cp(t[n])}}function Ra(t,n){var e=t.stateNode;if(e===null)return null;var a=e[Lt]||null;if(a===null)return null;e=a[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(d(231,n,typeof e));return e}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ps=!1;if(Rn)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){ps=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{ps=!1}var te=null,rs=null,Rl=null;function Lp(){if(Rl)return Rl;var t,n=rs,e=n.length,a,l="value"in te?te.value:te.textContent,i=l.length;for(t=0;t<e&&n[t]===l[t];t++);var s=e-t;for(a=1;a<=s&&n[e-a]===l[i-a];a++);return Rl=l.slice(t,1<a?1-a:void 0)}function jl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function Qp(){return!1}function Qt(t){function n(e,a,l,i,s){this._reactName=e,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(e=t[o],this[o]=e?e(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zl:Qp,this.isPropagationStopped=Qp,this}return k(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),n}var qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Qt(qe),Za=k({},qe,{view:0,detail:0}),rf=Qt(Za),cs,gs,Oa,Hl=k({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(cs=t.screenX-Oa.screenX,gs=t.screenY-Oa.screenY):gs=cs=0,Oa=t),cs)},movementY:function(t){return"movementY"in t?t.movementY:gs}}),Xp=Qt(Hl),cf=k({},Hl,{dataTransfer:0}),gf=Qt(cf),ff=k({},Za,{relatedTarget:0}),fs=Qt(ff),mf=k({},qe,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=Qt(mf),df=k({},qe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yf=Qt(df),hf=k({},qe,{data:0}),Vp=Qt(hf),bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vf(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=zf[t])?!!n[t]:!1}function ms(){return vf}var Nf=k({},Za,{key:function(t){if(t.key){var n=bf[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wf=Qt(Nf),Sf=k({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Qt(Sf),Ef=k({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),Uf=Qt(Ef),Mf=k({},qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),qf=Qt(Mf),_f=k({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Af=Qt(_f),Tf=k({},qe,{newState:0,oldState:0}),kf=Qt(Tf),Bf=[9,13,27,32],us=Rn&&"CompositionEvent"in window,Ha=null;Rn&&"documentMode"in document&&(Ha=document.documentMode);var Gf=Rn&&"TextEvent"in window&&!Ha,Jp=Rn&&(!us||Ha&&8<Ha&&11>=Ha),Wp=" ",$p=!1;function Fp(t,n){switch(t){case"keyup":return Bf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ta=!1;function Rf(t,n){switch(t){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:($p=!0,Wp);case"textInput":return t=n.data,t===Wp&&$p?null:t;default:return null}}function jf(t,n){if(ta)return t==="compositionend"||!us&&Fp(t,n)?(t=Lp(),Rl=rs=te=null,ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jp&&n.locale!=="ko"?null:n.data;default:return null}}var Zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zf[t.type]:n==="textarea"}function tr(t,n,e,a){Ie?Pe?Pe.push(a):Pe=[a]:Ie=a,n=qi(n,"onChange"),0<n.length&&(e=new Ol("onChange","change",null,e,a),t.push({event:e,listeners:n}))}var Da=null,Ca=null;function Of(t){j0(t,0)}function Dl(t){var n=Ga(t);if(Rp(n))return t}function nr(t,n){if(t==="change")return n}var er=!1;if(Rn){var ds;if(Rn){var ys="oninput"in document;if(!ys){var ar=document.createElement("div");ar.setAttribute("oninput","return;"),ys=typeof ar.oninput=="function"}ds=ys}else ds=!1;er=ds&&(!document.documentMode||9<document.documentMode)}function lr(){Da&&(Da.detachEvent("onpropertychange",ir),Ca=Da=null)}function ir(t){if(t.propertyName==="value"&&Dl(Ca)){var n=[];tr(n,Ca,t,ss(t)),Yp(Of,n)}}function Hf(t,n,e){t==="focusin"?(lr(),Da=n,Ca=e,Da.attachEvent("onpropertychange",ir)):t==="focusout"&&lr()}function Df(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(Ca)}function Cf(t,n){if(t==="click")return Dl(n)}function Yf(t,n){if(t==="input"||t==="change")return Dl(n)}function Lf(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var tn=typeof Object.is=="function"?Object.is:Lf;function Ya(t,n){if(tn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),a=Object.keys(n);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var l=e[a];if(!Ki.call(n,l)||!tn(t[l],n[l]))return!1}return!0}function sr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function or(t,n){var e=sr(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=n&&a>=n)return{node:e,offset:n-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=sr(e)}}function pr(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pr(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Bl(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=Bl(t.document)}return n}function hs(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Qf=Rn&&"documentMode"in document&&11>=document.documentMode,na=null,bs=null,La=null,xs=!1;function cr(t,n,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;xs||na==null||na!==Bl(a)||(a=na,"selectionStart"in a&&hs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Ya(La,a)||(La=a,a=qi(bs,"onSelect"),0<a.length&&(n=new Ol("onSelect","select",null,n,e),t.push({event:n,listeners:a}),n.target=na)))}function _e(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var ea={animationend:_e("Animation","AnimationEnd"),animationiteration:_e("Animation","AnimationIteration"),animationstart:_e("Animation","AnimationStart"),transitionrun:_e("Transition","TransitionRun"),transitionstart:_e("Transition","TransitionStart"),transitioncancel:_e("Transition","TransitionCancel"),transitionend:_e("Transition","TransitionEnd")},zs={},gr={};Rn&&(gr=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Ae(t){if(zs[t])return zs[t];if(!ea[t])return t;var n=ea[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in gr)return zs[t]=n[e];return t}var fr=Ae("animationend"),mr=Ae("animationiteration"),ur=Ae("animationstart"),Xf=Ae("transitionrun"),Vf=Ae("transitionstart"),Kf=Ae("transitioncancel"),dr=Ae("transitionend"),yr=new Map,vs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vs.push("scrollEnd");function vn(t,n){yr.set(t,n),Me(n,[t])}var Cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gn=[],aa=0,Ns=0;function Yl(){for(var t=aa,n=Ns=aa=0;n<t;){var e=gn[n];gn[n++]=null;var a=gn[n];gn[n++]=null;var l=gn[n];gn[n++]=null;var i=gn[n];if(gn[n++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}i!==0&&hr(e,l,i)}}function Ll(t,n,e,a){gn[aa++]=t,gn[aa++]=n,gn[aa++]=e,gn[aa++]=a,Ns|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function ws(t,n,e,a){return Ll(t,n,e,a),Ql(t)}function Te(t,n){return Ll(t,null,null,n),Ql(t)}function hr(t,n,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var l=!1,i=t.return;i!==null;)i.childLanes|=e,a=i.alternate,a!==null&&(a.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&n!==null&&(l=31-Pt(e),t=i.hiddenUpdates,a=t[l],a===null?t[l]=[n]:a.push(n),n.lane=e|536870912),i):null}function Ql(t){if(50<gl)throw gl=0,Bo=null,Error(d(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var la={};function Jf(t,n,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,n,e,a){return new Jf(t,n,e,a)}function Ss(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jn(t,n){var e=t.alternate;return e===null?(e=nn(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function br(t,n){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Xl(t,n,e,a,l,i){var s=0;if(a=t,typeof t=="function")Ss(t)&&(s=1);else if(typeof t=="string")s=P1(t,e,q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case En:return t=nn(31,e,n,l),t.elementType=En,t.lanes=i,t;case qt:return ke(e.children,l,i,n);case Tn:s=8,l|=24;break;case $t:return t=nn(12,e,n,l|2),t.elementType=$t,t.lanes=i,t;case Sn:return t=nn(13,e,n,l),t.elementType=Sn,t.lanes=i,t;case Dt:return t=nn(19,e,n,l),t.elementType=Dt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jt:s=10;break t;case Fn:s=9;break t;case pn:s=11;break t;case $:s=14;break t;case Ct:s=16,a=null;break t}s=29,e=Error(d(130,t===null?"null":typeof t,"")),a=null}return n=nn(s,e,n,l),n.elementType=t,n.type=a,n.lanes=i,n}function ke(t,n,e,a){return t=nn(7,t,a,n),t.lanes=e,t}function Es(t,n,e){return t=nn(6,t,null,n),t.lanes=e,t}function xr(t){var n=nn(18,null,null,0);return n.stateNode=t,n}function Us(t,n,e){return n=nn(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var zr=new WeakMap;function fn(t,n){if(typeof t=="object"&&t!==null){var e=zr.get(t);return e!==void 0?e:(n={value:t,source:n,stack:xp(n)},zr.set(t,n),n)}return{value:t,source:n,stack:xp(n)}}var ia=[],sa=0,Vl=null,Qa=0,mn=[],un=0,ne=null,Mn=1,qn="";function Zn(t,n){ia[sa++]=Qa,ia[sa++]=Vl,Vl=t,Qa=n}function vr(t,n,e){mn[un++]=Mn,mn[un++]=qn,mn[un++]=ne,ne=t;var a=Mn;t=qn;var l=32-Pt(a)-1;a&=~(1<<l),e+=1;var i=32-Pt(n)+l;if(30<i){var s=l-l%5;i=(a&(1<<s)-1).toString(32),a>>=s,l-=s,Mn=1<<32-Pt(n)+l|e<<l|a,qn=i+t}else Mn=1<<i|e<<l|a,qn=t}function Ms(t){t.return!==null&&(Zn(t,1),vr(t,1,0))}function qs(t){for(;t===Vl;)Vl=ia[--sa],ia[sa]=null,Qa=ia[--sa],ia[sa]=null;for(;t===ne;)ne=mn[--un],mn[un]=null,qn=mn[--un],mn[un]=null,Mn=mn[--un],mn[un]=null}function Nr(t,n){mn[un++]=Mn,mn[un++]=qn,mn[un++]=ne,Mn=n.id,qn=n.overflow,ne=t}var kt=null,mt=null,F=!1,ee=null,dn=!1,_s=Error(d(519));function ae(t){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xa(fn(n,t)),_s}function wr(t){var n=t.stateNode,e=t.type,a=t.memoizedProps;switch(n[Tt]=t,n[Lt]=a,e){case"dialog":K("cancel",n),K("close",n);break;case"iframe":case"object":case"embed":K("load",n);break;case"video":case"audio":for(e=0;e<ml.length;e++)K(ml[e],n);break;case"source":K("error",n);break;case"img":case"image":case"link":K("error",n),K("load",n);break;case"details":K("toggle",n);break;case"input":K("invalid",n),jp(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":K("invalid",n);break;case"textarea":K("invalid",n),Op(n,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||a.suppressHydrationWarning===!0||D0(n.textContent,e)?(a.popover!=null&&(K("beforetoggle",n),K("toggle",n)),a.onScroll!=null&&K("scroll",n),a.onScrollEnd!=null&&K("scrollend",n),a.onClick!=null&&(n.onclick=Gn),n=!0):n=!1,n||ae(t,!0)}function Sr(t){for(kt=t.return;kt;)switch(kt.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:kt=kt.return}}function oa(t){if(t!==kt)return!1;if(!F)return Sr(t),F=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Jo(t.type,t.memoizedProps)),e=!e),e&&mt&&ae(t),Sr(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));mt=W0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));mt=W0(t)}else n===27?(n=mt,he(t.type)?(t=Po,Po=null,mt=t):mt=n):mt=kt?hn(t.stateNode.nextSibling):null;return!0}function Be(){mt=kt=null,F=!1}function As(){var t=ee;return t!==null&&(Jt===null?Jt=t:Jt.push.apply(Jt,t),ee=null),t}function Xa(t){ee===null?ee=[t]:ee.push(t)}var Ts=c(null),Ge=null,On=null;function le(t,n,e){U(Ts,n._currentValue),n._currentValue=e}function Hn(t){t._currentValue=Ts.current,w(Ts)}function ks(t,n,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),t===e)break;t=t.return}}function Bs(t,n,e,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=l;for(var p=0;p<n.length;p++)if(o.context===n[p]){i.lanes|=e,o=i.alternate,o!==null&&(o.lanes|=e),ks(i.return,e,t),a||(s=null);break t}i=o.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(d(341));s.lanes|=e,i=s.alternate,i!==null&&(i.lanes|=e),ks(s,e,t),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function pa(t,n,e,a){t=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var o=l.type;tn(l.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(l===at.current){if(s=l.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(bl):t=[bl])}l=l.return}t!==null&&Bs(n,t,e,a),n.flags|=262144}function Kl(t){for(t=t.firstContext;t!==null;){if(!tn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Re(t){Ge=t,On=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bt(t){return Er(Ge,t)}function Jl(t,n){return Ge===null&&Re(t),Er(t,n)}function Er(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},On===null){if(t===null)throw Error(d(308));On=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else On=On.next=n;return e}var Wf=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},$f=h.unstable_scheduleCallback,Ff=h.unstable_NormalPriority,Nt={$$typeof:jt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gs(){return{controller:new Wf,data:new Map,refCount:0}}function Va(t){t.refCount--,t.refCount===0&&$f(Ff,function(){t.controller.abort()})}var Ka=null,Rs=0,ra=0,ca=null;function If(t,n){if(Ka===null){var e=Ka=[];Rs=0,ra=Ho(),ca={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Rs++,n.then(Ur,Ur),n}function Ur(){if(--Rs===0&&Ka!==null){ca!==null&&(ca.status="fulfilled");var t=Ka;Ka=null,ra=0,ca=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Pf(t,n){var e=[],a={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return t.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<e.length;l++)(0,e[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),a}var Mr=x.S;x.S=function(t,n){c0=Ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&If(t,n),Mr!==null&&Mr(t,n)};var je=c(null);function js(){var t=je.current;return t!==null?t:gt.pooledCache}function Wl(t,n){n===null?U(je,je.current):U(je,n.pool)}function qr(){var t=js();return t===null?null:{parent:Nt._currentValue,pool:t}}var ga=Error(d(460)),Zs=Error(d(474)),$l=Error(d(542)),Fl={then:function(){}};function _r(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ar(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(Gn,Gn),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kr(t),t;default:if(typeof n.status=="string")n.then(Gn,Gn);else{if(t=gt,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=n,t.status="pending",t.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kr(t),t}throw Oe=n,ga}}function Ze(t){try{var n=t._init;return n(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Oe=e,ga):e}}var Oe=null;function Tr(){if(Oe===null)throw Error(d(459));var t=Oe;return Oe=null,t}function kr(t){if(t===ga||t===$l)throw Error(d(483))}var fa=null,Ja=0;function Il(t){var n=Ja;return Ja+=1,fa===null&&(fa=[]),Ar(fa,t,n)}function Wa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Pl(t,n){throw n.$$typeof===Q?Error(d(525)):(t=Object.prototype.toString.call(n),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Br(t){function n(g,r){if(t){var f=g.deletions;f===null?(g.deletions=[r],g.flags|=16):f.push(r)}}function e(g,r){if(!t)return null;for(;r!==null;)n(g,r),r=r.sibling;return null}function a(g){for(var r=new Map;g!==null;)g.key!==null?r.set(g.key,g):r.set(g.index,g),g=g.sibling;return r}function l(g,r){return g=jn(g,r),g.index=0,g.sibling=null,g}function i(g,r,f){return g.index=f,t?(f=g.alternate,f!==null?(f=f.index,f<r?(g.flags|=67108866,r):f):(g.flags|=67108866,r)):(g.flags|=1048576,r)}function s(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function o(g,r,f,z){return r===null||r.tag!==6?(r=Es(f,g.mode,z),r.return=g,r):(r=l(r,f),r.return=g,r)}function p(g,r,f,z){var G=f.type;return G===qt?b(g,r,f.props.children,z,f.key):r!==null&&(r.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ct&&Ze(G)===r.type)?(r=l(r,f.props),Wa(r,f),r.return=g,r):(r=Xl(f.type,f.key,f.props,null,g.mode,z),Wa(r,f),r.return=g,r)}function m(g,r,f,z){return r===null||r.tag!==4||r.stateNode.containerInfo!==f.containerInfo||r.stateNode.implementation!==f.implementation?(r=Us(f,g.mode,z),r.return=g,r):(r=l(r,f.children||[]),r.return=g,r)}function b(g,r,f,z,G){return r===null||r.tag!==7?(r=ke(f,g.mode,z,G),r.return=g,r):(r=l(r,f),r.return=g,r)}function N(g,r,f){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Es(""+r,g.mode,f),r.return=g,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case dt:return f=Xl(r.type,r.key,r.props,null,g.mode,f),Wa(f,r),f.return=g,f;case ft:return r=Us(r,g.mode,f),r.return=g,r;case Ct:return r=Ze(r),N(g,r,f)}if(zn(r)||Yt(r))return r=ke(r,g.mode,f,null),r.return=g,r;if(typeof r.then=="function")return N(g,Il(r),f);if(r.$$typeof===jt)return N(g,Jl(g,r),f);Pl(g,r)}return null}function u(g,r,f,z){var G=r!==null?r.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return G!==null?null:o(g,r,""+f,z);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case dt:return f.key===G?p(g,r,f,z):null;case ft:return f.key===G?m(g,r,f,z):null;case Ct:return f=Ze(f),u(g,r,f,z)}if(zn(f)||Yt(f))return G!==null?null:b(g,r,f,z,null);if(typeof f.then=="function")return u(g,r,Il(f),z);if(f.$$typeof===jt)return u(g,r,Jl(g,f),z);Pl(g,f)}return null}function y(g,r,f,z,G){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return g=g.get(f)||null,o(r,g,""+z,G);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case dt:return g=g.get(z.key===null?f:z.key)||null,p(r,g,z,G);case ft:return g=g.get(z.key===null?f:z.key)||null,m(r,g,z,G);case Ct:return z=Ze(z),y(g,r,f,z,G)}if(zn(z)||Yt(z))return g=g.get(f)||null,b(r,g,z,G,null);if(typeof z.then=="function")return y(g,r,f,Il(z),G);if(z.$$typeof===jt)return y(g,r,f,Jl(r,z),G);Pl(r,z)}return null}function M(g,r,f,z){for(var G=null,tt=null,A=r,Y=r=0,W=null;A!==null&&Y<f.length;Y++){A.index>Y?(W=A,A=null):W=A.sibling;var nt=u(g,A,f[Y],z);if(nt===null){A===null&&(A=W);break}t&&A&&nt.alternate===null&&n(g,A),r=i(nt,r,Y),tt===null?G=nt:tt.sibling=nt,tt=nt,A=W}if(Y===f.length)return e(g,A),F&&Zn(g,Y),G;if(A===null){for(;Y<f.length;Y++)A=N(g,f[Y],z),A!==null&&(r=i(A,r,Y),tt===null?G=A:tt.sibling=A,tt=A);return F&&Zn(g,Y),G}for(A=a(A);Y<f.length;Y++)W=y(A,g,Y,f[Y],z),W!==null&&(t&&W.alternate!==null&&A.delete(W.key===null?Y:W.key),r=i(W,r,Y),tt===null?G=W:tt.sibling=W,tt=W);return t&&A.forEach(function(Ne){return n(g,Ne)}),F&&Zn(g,Y),G}function R(g,r,f,z){if(f==null)throw Error(d(151));for(var G=null,tt=null,A=r,Y=r=0,W=null,nt=f.next();A!==null&&!nt.done;Y++,nt=f.next()){A.index>Y?(W=A,A=null):W=A.sibling;var Ne=u(g,A,nt.value,z);if(Ne===null){A===null&&(A=W);break}t&&A&&Ne.alternate===null&&n(g,A),r=i(Ne,r,Y),tt===null?G=Ne:tt.sibling=Ne,tt=Ne,A=W}if(nt.done)return e(g,A),F&&Zn(g,Y),G;if(A===null){for(;!nt.done;Y++,nt=f.next())nt=N(g,nt.value,z),nt!==null&&(r=i(nt,r,Y),tt===null?G=nt:tt.sibling=nt,tt=nt);return F&&Zn(g,Y),G}for(A=a(A);!nt.done;Y++,nt=f.next())nt=y(A,g,Y,nt.value,z),nt!==null&&(t&&nt.alternate!==null&&A.delete(nt.key===null?Y:nt.key),r=i(nt,r,Y),tt===null?G=nt:tt.sibling=nt,tt=nt);return t&&A.forEach(function(cm){return n(g,cm)}),F&&Zn(g,Y),G}function rt(g,r,f,z){if(typeof f=="object"&&f!==null&&f.type===qt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case dt:t:{for(var G=f.key;r!==null;){if(r.key===G){if(G=f.type,G===qt){if(r.tag===7){e(g,r.sibling),z=l(r,f.props.children),z.return=g,g=z;break t}}else if(r.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ct&&Ze(G)===r.type){e(g,r.sibling),z=l(r,f.props),Wa(z,f),z.return=g,g=z;break t}e(g,r);break}else n(g,r);r=r.sibling}f.type===qt?(z=ke(f.props.children,g.mode,z,f.key),z.return=g,g=z):(z=Xl(f.type,f.key,f.props,null,g.mode,z),Wa(z,f),z.return=g,g=z)}return s(g);case ft:t:{for(G=f.key;r!==null;){if(r.key===G)if(r.tag===4&&r.stateNode.containerInfo===f.containerInfo&&r.stateNode.implementation===f.implementation){e(g,r.sibling),z=l(r,f.children||[]),z.return=g,g=z;break t}else{e(g,r);break}else n(g,r);r=r.sibling}z=Us(f,g.mode,z),z.return=g,g=z}return s(g);case Ct:return f=Ze(f),rt(g,r,f,z)}if(zn(f))return M(g,r,f,z);if(Yt(f)){if(G=Yt(f),typeof G!="function")throw Error(d(150));return f=G.call(f),R(g,r,f,z)}if(typeof f.then=="function")return rt(g,r,Il(f),z);if(f.$$typeof===jt)return rt(g,r,Jl(g,f),z);Pl(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,r!==null&&r.tag===6?(e(g,r.sibling),z=l(r,f),z.return=g,g=z):(e(g,r),z=Es(f,g.mode,z),z.return=g,g=z),s(g)):e(g,r)}return function(g,r,f,z){try{Ja=0;var G=rt(g,r,f,z);return fa=null,G}catch(A){if(A===ga||A===$l)throw A;var tt=nn(29,A,null,g.mode);return tt.lanes=z,tt.return=g,tt}finally{}}}var He=Br(!0),Gr=Br(!1),ie=!1;function Os(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hs(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function se(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oe(t,n,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(et&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Ql(t),hr(t,null,e),n}return Ll(t,a,n,e),Ql(t)}function $a(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var a=n.lanes;a&=t.pendingLanes,e|=a,n.lanes=e,Ep(t,e)}}function Ds(t,n){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var l=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var s={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,e=e.next}while(e!==null);i===null?l=i=n:i=i.next=n}else l=i=n;e={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var Cs=!1;function Fa(){if(Cs){var t=ca;if(t!==null)throw t}}function Ia(t,n,e,a){Cs=!1;var l=t.updateQueue;ie=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var p=o,m=p.next;p.next=null,s===null?i=m:s.next=m,s=p;var b=t.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==s&&(o===null?b.firstBaseUpdate=m:o.next=m,b.lastBaseUpdate=p))}if(i!==null){var N=l.baseState;s=0,b=m=p=null,o=i;do{var u=o.lane&-536870913,y=u!==o.lane;if(y?(J&u)===u:(a&u)===u){u!==0&&u===ra&&(Cs=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var M=t,R=o;u=n;var rt=e;switch(R.tag){case 1:if(M=R.payload,typeof M=="function"){N=M.call(rt,N,u);break t}N=M;break t;case 3:M.flags=M.flags&-65537|128;case 0:if(M=R.payload,u=typeof M=="function"?M.call(rt,N,u):M,u==null)break t;N=k({},N,u);break t;case 2:ie=!0}}u=o.callback,u!==null&&(t.flags|=64,y&&(t.flags|=8192),y=l.callbacks,y===null?l.callbacks=[u]:y.push(u))}else y={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(m=b=y,p=N):b=b.next=y,s|=u;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;y=o,o=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);b===null&&(p=N),l.baseState=p,l.firstBaseUpdate=m,l.lastBaseUpdate=b,i===null&&(l.shared.lanes=0),fe|=s,t.lanes=s,t.memoizedState=N}}function Rr(t,n){if(typeof t!="function")throw Error(d(191,t));t.call(n)}function jr(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Rr(e[t],n)}var ma=c(null),ti=c(0);function Zr(t,n){t=Jn,U(ti,t),U(ma,n),Jn=t|n.baseLanes}function Ys(){U(ti,Jn),U(ma,ma.current)}function Ls(){Jn=ti.current,w(ma),w(ti)}var en=c(null),yn=null;function pe(t){var n=t.alternate;U(zt,zt.current&1),U(en,t),yn===null&&(n===null||ma.current!==null||n.memoizedState!==null)&&(yn=t)}function Qs(t){U(zt,zt.current),U(en,t),yn===null&&(yn=t)}function Or(t){t.tag===22?(U(zt,zt.current),U(en,t),yn===null&&(yn=t)):re()}function re(){U(zt,zt.current),U(en,en.current)}function an(t){w(en),yn===t&&(yn=null),w(zt)}var zt=c(0);function ni(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Fo(e)||Io(e)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Dn=0,C=null,ot=null,wt=null,ei=!1,ua=!1,De=!1,ai=0,Pa=0,da=null,t1=0;function ht(){throw Error(d(321))}function Xs(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!tn(t[e],n[e]))return!1;return!0}function Vs(t,n,e,a,l,i){return Dn=i,C=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,x.H=t===null||t.memoizedState===null?vc:oo,De=!1,i=e(a,l),De=!1,ua&&(i=Dr(n,e,a,l)),Hr(t),i}function Hr(t){x.H=el;var n=ot!==null&&ot.next!==null;if(Dn=0,wt=ot=C=null,ei=!1,Pa=0,da=null,n)throw Error(d(300));t===null||St||(t=t.dependencies,t!==null&&Kl(t)&&(St=!0))}function Dr(t,n,e,a){C=t;var l=0;do{if(ua&&(da=null),Pa=0,ua=!1,25<=l)throw Error(d(301));if(l+=1,wt=ot=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=Nc,i=n(e,a)}while(ua);return i}function n1(){var t=x.H,n=t.useState()[0];return n=typeof n.then=="function"?tl(n):n,t=t.useState()[0],(ot!==null?ot.memoizedState:null)!==t&&(C.flags|=1024),n}function Ks(){var t=ai!==0;return ai=0,t}function Js(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function Ws(t){if(ei){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ei=!1}Dn=0,wt=ot=C=null,ua=!1,Pa=ai=0,da=null}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?C.memoizedState=wt=t:wt=wt.next=t,wt}function vt(){if(ot===null){var t=C.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var n=wt===null?C.memoizedState:wt.next;if(n!==null)wt=n,ot=t;else{if(t===null)throw C.alternate===null?Error(d(467)):Error(d(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},wt===null?C.memoizedState=wt=t:wt=wt.next=t}return wt}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(t){var n=Pa;return Pa+=1,da===null&&(da=[]),t=Ar(da,t,n),n=C,(wt===null?n.memoizedState:wt.next)===null&&(n=n.alternate,x.H=n===null||n.memoizedState===null?vc:oo),t}function ii(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tl(t);if(t.$$typeof===jt)return Bt(t)}throw Error(d(438,String(t)))}function $s(t){var n=null,e=C.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var a=C.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=li(),C.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),a=0;a<t;a++)e[a]=Qe;return n.index++,e}function Cn(t,n){return typeof n=="function"?n(t):n}function si(t){var n=vt();return Fs(n,ot,t)}function Fs(t,n,e){var a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=t.baseQueue,i=a.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}n.baseQueue=l=i,a.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{n=l.next;var o=s=null,p=null,m=n,b=!1;do{var N=m.lane&-536870913;if(N!==m.lane?(J&N)===N:(Dn&N)===N){var u=m.revertLane;if(u===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),N===ra&&(b=!0);else if((Dn&u)===u){m=m.next,u===ra&&(b=!0);continue}else N={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},p===null?(o=p=N,s=i):p=p.next=N,C.lanes|=u,fe|=u;N=m.action,De&&e(i,N),i=m.hasEagerState?m.eagerState:e(i,N)}else u={lane:N,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},p===null?(o=p=u,s=i):p=p.next=u,C.lanes|=N,fe|=N;m=m.next}while(m!==null&&m!==n);if(p===null?s=i:p.next=o,!tn(i,t.memoizedState)&&(St=!0,b&&(e=ca,e!==null)))throw e;t.memoizedState=i,t.baseState=s,t.baseQueue=p,a.lastRenderedState=i}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Is(t){var n=vt(),e=n.queue;if(e===null)throw Error(d(311));e.lastRenderedReducer=t;var a=e.dispatch,l=e.pending,i=n.memoizedState;if(l!==null){e.pending=null;var s=l=l.next;do i=t(i,s.action),s=s.next;while(s!==l);tn(i,n.memoizedState)||(St=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),e.lastRenderedState=i}return[i,a]}function Cr(t,n,e){var a=C,l=vt(),i=F;if(i){if(e===void 0)throw Error(d(407));e=e()}else e=n();var s=!tn((ot||l).memoizedState,e);if(s&&(l.memoizedState=e,St=!0),l=l.queue,no(Qr.bind(null,a,l,t),[t]),l.getSnapshot!==n||s||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,ya(9,{destroy:void 0},Lr.bind(null,a,l,e,n),null),gt===null)throw Error(d(349));i||(Dn&127)!==0||Yr(a,n,e)}return e}function Yr(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=C.updateQueue,n===null?(n=li(),C.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function Lr(t,n,e,a){n.value=e,n.getSnapshot=a,Xr(n)&&Vr(t)}function Qr(t,n,e){return e(function(){Xr(n)&&Vr(t)})}function Xr(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!tn(t,e)}catch{return!0}}function Vr(t){var n=Te(t,2);n!==null&&Wt(n,t,2)}function Ps(t){var n=Ht();if(typeof t=="function"){var e=t;if(t=e(),De){In(!0);try{e()}finally{In(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:t},n}function Kr(t,n,e,a){return t.baseState=e,Fs(t,ot,typeof a=="function"?a:Cn)}function e1(t,n,e,a,l){if(ri(t))throw Error(d(485));if(t=n.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};x.T!==null?e(!0):i.isTransition=!1,a(i),e=n.pending,e===null?(i.next=n.pending=i,Jr(n,i)):(i.next=e.next,n.pending=e.next=i)}}function Jr(t,n){var e=n.action,a=n.payload,l=t.state;if(n.isTransition){var i=x.T,s={};x.T=s;try{var o=e(l,a),p=x.S;p!==null&&p(s,o),Wr(t,n,o)}catch(m){to(t,n,m)}finally{i!==null&&s.types!==null&&(i.types=s.types),x.T=i}}else try{i=e(l,a),Wr(t,n,i)}catch(m){to(t,n,m)}}function Wr(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){$r(t,n,a)},function(a){return to(t,n,a)}):$r(t,n,e)}function $r(t,n,e){n.status="fulfilled",n.value=e,Fr(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,Jr(t,e)))}function to(t,n,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=e,Fr(n),n=n.next;while(n!==a)}t.action=null}function Fr(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ir(t,n){return n}function Pr(t,n){if(F){var e=gt.formState;if(e!==null){t:{var a=C;if(F){if(mt){n:{for(var l=mt,i=dn;l.nodeType!==8;){if(!i){l=null;break n}if(l=hn(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){mt=hn(l.nextSibling),a=l.data==="F!";break t}}ae(a)}a=!1}a&&(n=e[0])}}return e=Ht(),e.memoizedState=e.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:n},e.queue=a,e=bc.bind(null,C,a),a.dispatch=e,a=Ps(!1),i=so.bind(null,C,!1,a.queue),a=Ht(),l={state:n,dispatch:null,action:t,pending:null},a.queue=l,e=e1.bind(null,C,l,i,e),l.dispatch=e,a.memoizedState=t,[n,e,!1]}function tc(t){var n=vt();return nc(n,ot,t)}function nc(t,n,e){if(n=Fs(t,n,Ir)[0],t=si(Cn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=tl(n)}catch(s){throw s===ga?$l:s}else a=n;n=vt();var l=n.queue,i=l.dispatch;return e!==n.memoizedState&&(C.flags|=2048,ya(9,{destroy:void 0},a1.bind(null,l,e),null)),[a,i,t]}function a1(t,n){t.action=n}function ec(t){var n=vt(),e=ot;if(e!==null)return nc(n,e,t);vt(),n=n.memoizedState,e=vt();var a=e.queue.dispatch;return e.memoizedState=t,[n,a,!1]}function ya(t,n,e,a){return t={tag:t,create:e,deps:a,inst:n,next:null},n=C.updateQueue,n===null&&(n=li(),C.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,n.lastEffect=t),t}function ac(){return vt().memoizedState}function oi(t,n,e,a){var l=Ht();C.flags|=t,l.memoizedState=ya(1|n,{destroy:void 0},e,a===void 0?null:a)}function pi(t,n,e,a){var l=vt();a=a===void 0?null:a;var i=l.memoizedState.inst;ot!==null&&a!==null&&Xs(a,ot.memoizedState.deps)?l.memoizedState=ya(n,i,e,a):(C.flags|=t,l.memoizedState=ya(1|n,i,e,a))}function lc(t,n){oi(8390656,8,t,n)}function no(t,n){pi(2048,8,t,n)}function l1(t){C.flags|=4;var n=C.updateQueue;if(n===null)n=li(),C.updateQueue=n,n.events=[t];else{var e=n.events;e===null?n.events=[t]:e.push(t)}}function ic(t){var n=vt().memoizedState;return l1({ref:n,nextImpl:t}),function(){if((et&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function sc(t,n){return pi(4,2,t,n)}function oc(t,n){return pi(4,4,t,n)}function pc(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rc(t,n,e){e=e!=null?e.concat([t]):null,pi(4,4,pc.bind(null,n,t),e)}function eo(){}function cc(t,n){var e=vt();n=n===void 0?null:n;var a=e.memoizedState;return n!==null&&Xs(n,a[1])?a[0]:(e.memoizedState=[t,n],t)}function gc(t,n){var e=vt();n=n===void 0?null:n;var a=e.memoizedState;if(n!==null&&Xs(n,a[1]))return a[0];if(a=t(),De){In(!0);try{t()}finally{In(!1)}}return e.memoizedState=[a,n],a}function ao(t,n,e){return e===void 0||(Dn&1073741824)!==0&&(J&261930)===0?t.memoizedState=n:(t.memoizedState=e,t=f0(),C.lanes|=t,fe|=t,e)}function fc(t,n,e,a){return tn(e,n)?e:ma.current!==null?(t=ao(t,e,a),tn(t,n)||(St=!0),t):(Dn&42)===0||(Dn&1073741824)!==0&&(J&261930)===0?(St=!0,t.memoizedState=e):(t=f0(),C.lanes|=t,fe|=t,n)}function mc(t,n,e,a,l){var i=E.p;E.p=i!==0&&8>i?i:8;var s=x.T,o={};x.T=o,so(t,!1,n,e);try{var p=l(),m=x.S;if(m!==null&&m(o,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var b=Pf(p,a);nl(t,n,b,on(t))}else nl(t,n,a,on(t))}catch(N){nl(t,n,{then:function(){},status:"rejected",reason:N},on())}finally{E.p=i,s!==null&&o.types!==null&&(s.types=o.types),x.T=s}}function i1(){}function lo(t,n,e,a){if(t.tag!==5)throw Error(d(476));var l=uc(t).queue;mc(t,l,n,j,e===null?i1:function(){return dc(t),e(a)})}function uc(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:j},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function dc(t){var n=uc(t);n.next===null&&(n=t.alternate.memoizedState),nl(t,n.next.queue,{},on())}function io(){return Bt(bl)}function yc(){return vt().memoizedState}function hc(){return vt().memoizedState}function s1(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=on();t=se(e);var a=oe(n,t,e);a!==null&&(Wt(a,n,e),$a(a,n,e)),n={cache:Gs()},t.payload=n;return}n=n.return}}function o1(t,n,e){var a=on();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ri(t)?xc(n,e):(e=ws(t,n,e,a),e!==null&&(Wt(e,t,a),zc(e,n,a)))}function bc(t,n,e){var a=on();nl(t,n,e,a)}function nl(t,n,e,a){var l={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(ri(t))xc(n,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,o=i(s,e);if(l.hasEagerState=!0,l.eagerState=o,tn(o,s))return Ll(t,n,l,0),gt===null&&Yl(),!1}catch{}finally{}if(e=ws(t,n,l,a),e!==null)return Wt(e,t,a),zc(e,n,a),!0}return!1}function so(t,n,e,a){if(a={lane:2,revertLane:Ho(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ri(t)){if(n)throw Error(d(479))}else n=ws(t,e,a,2),n!==null&&Wt(n,t,2)}function ri(t){var n=t.alternate;return t===C||n!==null&&n===C}function xc(t,n){ua=ei=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function zc(t,n,e){if((e&4194048)!==0){var a=n.lanes;a&=t.pendingLanes,e|=a,n.lanes=e,Ep(t,e)}}var el={readContext:Bt,use:ii,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};el.useEffectEvent=ht;var vc={readContext:Bt,use:ii,useCallback:function(t,n){return Ht().memoizedState=[t,n===void 0?null:n],t},useContext:Bt,useEffect:lc,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,oi(4194308,4,pc.bind(null,n,t),e)},useLayoutEffect:function(t,n){return oi(4194308,4,t,n)},useInsertionEffect:function(t,n){oi(4,2,t,n)},useMemo:function(t,n){var e=Ht();n=n===void 0?null:n;var a=t();if(De){In(!0);try{t()}finally{In(!1)}}return e.memoizedState=[a,n],a},useReducer:function(t,n,e){var a=Ht();if(e!==void 0){var l=e(n);if(De){In(!0);try{e(n)}finally{In(!1)}}}else l=n;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=o1.bind(null,C,t),[a.memoizedState,t]},useRef:function(t){var n=Ht();return t={current:t},n.memoizedState=t},useState:function(t){t=Ps(t);var n=t.queue,e=bc.bind(null,C,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:eo,useDeferredValue:function(t,n){var e=Ht();return ao(e,t,n)},useTransition:function(){var t=Ps(!1);return t=mc.bind(null,C,t.queue,!0,!1),Ht().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var a=C,l=Ht();if(F){if(e===void 0)throw Error(d(407));e=e()}else{if(e=n(),gt===null)throw Error(d(349));(J&127)!==0||Yr(a,n,e)}l.memoizedState=e;var i={value:e,getSnapshot:n};return l.queue=i,lc(Qr.bind(null,a,i,t),[t]),a.flags|=2048,ya(9,{destroy:void 0},Lr.bind(null,a,i,e,n),null),e},useId:function(){var t=Ht(),n=gt.identifierPrefix;if(F){var e=qn,a=Mn;e=(a&~(1<<32-Pt(a)-1)).toString(32)+e,n="_"+n+"R_"+e,e=ai++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=t1++,n="_"+n+"r_"+e.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:io,useFormState:Pr,useActionState:Pr,useOptimistic:function(t){var n=Ht();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=so.bind(null,C,!0,e),e.dispatch=n,[t,n]},useMemoCache:$s,useCacheRefresh:function(){return Ht().memoizedState=s1.bind(null,C)},useEffectEvent:function(t){var n=Ht(),e={impl:t};return n.memoizedState=e,function(){if((et&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}},oo={readContext:Bt,use:ii,useCallback:cc,useContext:Bt,useEffect:no,useImperativeHandle:rc,useInsertionEffect:sc,useLayoutEffect:oc,useMemo:gc,useReducer:si,useRef:ac,useState:function(){return si(Cn)},useDebugValue:eo,useDeferredValue:function(t,n){var e=vt();return fc(e,ot.memoizedState,t,n)},useTransition:function(){var t=si(Cn)[0],n=vt().memoizedState;return[typeof t=="boolean"?t:tl(t),n]},useSyncExternalStore:Cr,useId:yc,useHostTransitionStatus:io,useFormState:tc,useActionState:tc,useOptimistic:function(t,n){var e=vt();return Kr(e,ot,t,n)},useMemoCache:$s,useCacheRefresh:hc};oo.useEffectEvent=ic;var Nc={readContext:Bt,use:ii,useCallback:cc,useContext:Bt,useEffect:no,useImperativeHandle:rc,useInsertionEffect:sc,useLayoutEffect:oc,useMemo:gc,useReducer:Is,useRef:ac,useState:function(){return Is(Cn)},useDebugValue:eo,useDeferredValue:function(t,n){var e=vt();return ot===null?ao(e,t,n):fc(e,ot.memoizedState,t,n)},useTransition:function(){var t=Is(Cn)[0],n=vt().memoizedState;return[typeof t=="boolean"?t:tl(t),n]},useSyncExternalStore:Cr,useId:yc,useHostTransitionStatus:io,useFormState:ec,useActionState:ec,useOptimistic:function(t,n){var e=vt();return ot!==null?Kr(e,ot,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:$s,useCacheRefresh:hc};Nc.useEffectEvent=ic;function po(t,n,e,a){n=t.memoizedState,e=e(a,n),e=e==null?n:k({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var ro={enqueueSetState:function(t,n,e){t=t._reactInternals;var a=on(),l=se(a);l.payload=n,e!=null&&(l.callback=e),n=oe(t,l,a),n!==null&&(Wt(n,t,a),$a(n,t,a))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var a=on(),l=se(a);l.tag=1,l.payload=n,e!=null&&(l.callback=e),n=oe(t,l,a),n!==null&&(Wt(n,t,a),$a(n,t,a))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=on(),a=se(e);a.tag=2,n!=null&&(a.callback=n),n=oe(t,a,e),n!==null&&(Wt(n,t,e),$a(n,t,e))}};function wc(t,n,e,a,l,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,s):n.prototype&&n.prototype.isPureReactComponent?!Ya(e,a)||!Ya(l,i):!0}function Sc(t,n,e,a){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,a),n.state!==t&&ro.enqueueReplaceState(n,n.state,null)}function Ce(t,n){var e=n;if("ref"in n){e={};for(var a in n)a!=="ref"&&(e[a]=n[a])}if(t=t.defaultProps){e===n&&(e=k({},e));for(var l in t)e[l]===void 0&&(e[l]=t[l])}return e}function Ec(t){Cl(t)}function Uc(t){console.error(t)}function Mc(t){Cl(t)}function ci(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function qc(t,n,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function co(t,n,e){return e=se(e),e.tag=3,e.payload={element:null},e.callback=function(){ci(t,n)},e}function _c(t){return t=se(t),t.tag=3,t}function Ac(t,n,e,a){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;t.payload=function(){return l(i)},t.callback=function(){qc(n,e,a)}}var s=e.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){qc(n,e,a),typeof l!="function"&&(me===null?me=new Set([this]):me.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function p1(t,n,e,a,l){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=e.alternate,n!==null&&pa(n,e,l,!0),e=en.current,e!==null){switch(e.tag){case 31:case 13:return yn===null?Ni():e.alternate===null&&bt===0&&(bt=3),e.flags&=-257,e.flags|=65536,e.lanes=l,a===Fl?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([a]):n.add(a),jo(t,a,l)),!1;case 22:return e.flags|=65536,a===Fl?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([a]):e.add(a)),jo(t,a,l)),!1}throw Error(d(435,e.tag))}return jo(t,a,l),Ni(),!1}if(F)return n=en.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==_s&&(t=Error(d(422),{cause:a}),Xa(fn(t,e)))):(a!==_s&&(n=Error(d(423),{cause:a}),Xa(fn(n,e))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=fn(a,e),l=co(t.stateNode,a,l),Ds(t,l),bt!==4&&(bt=2)),!1;var i=Error(d(520),{cause:a});if(i=fn(i,e),cl===null?cl=[i]:cl.push(i),bt!==4&&(bt=2),n===null)return!0;a=fn(a,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=l&-l,e.lanes|=t,t=co(e.stateNode,a,t),Ds(e,t),!1;case 1:if(n=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(me===null||!me.has(i))))return e.flags|=65536,l&=-l,e.lanes|=l,l=_c(l),Ac(l,t,e,a),Ds(e,l),!1}e=e.return}while(e!==null);return!1}var go=Error(d(461)),St=!1;function Gt(t,n,e,a){n.child=t===null?Gr(n,null,e,a):He(n,t.child,e,a)}function Tc(t,n,e,a,l){e=e.render;var i=n.ref;if("ref"in a){var s={};for(var o in a)o!=="ref"&&(s[o]=a[o])}else s=a;return Re(n),a=Vs(t,n,e,s,i,l),o=Ks(),t!==null&&!St?(Js(t,n,l),Yn(t,n,l)):(F&&o&&Ms(n),n.flags|=1,Gt(t,n,a,l),n.child)}function kc(t,n,e,a,l){if(t===null){var i=e.type;return typeof i=="function"&&!Ss(i)&&i.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=i,Bc(t,n,i,a,l)):(t=Xl(e.type,null,a,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(i=t.child,!zo(t,l)){var s=i.memoizedProps;if(e=e.compare,e=e!==null?e:Ya,e(s,a)&&t.ref===n.ref)return Yn(t,n,l)}return n.flags|=1,t=jn(i,a),t.ref=n.ref,t.return=n,n.child=t}function Bc(t,n,e,a,l){if(t!==null){var i=t.memoizedProps;if(Ya(i,a)&&t.ref===n.ref)if(St=!1,n.pendingProps=a=i,zo(t,l))(t.flags&131072)!==0&&(St=!0);else return n.lanes=t.lanes,Yn(t,n,l)}return fo(t,n,e,a,l)}function Gc(t,n,e,a){var l=a.children,i=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,t!==null){for(a=n.child=t.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,n.child=null;return Rc(t,n,i,e,a)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(n,i!==null?i.cachePool:null),i!==null?Zr(n,i):Ys(),Or(n);else return a=n.lanes=536870912,Rc(t,n,i!==null?i.baseLanes|e:e,e,a)}else i!==null?(Wl(n,i.cachePool),Zr(n,i),re(),n.memoizedState=null):(t!==null&&Wl(n,null),Ys(),re());return Gt(t,n,l,e),n.child}function al(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rc(t,n,e,a,l){var i=js();return i=i===null?null:{parent:Nt._currentValue,pool:i},n.memoizedState={baseLanes:e,cachePool:i},t!==null&&Wl(n,null),Ys(),Or(n),t!==null&&pa(t,n,a,!0),n.childLanes=l,null}function gi(t,n){return n=mi({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function jc(t,n,e){return He(n,t.child,null,e),t=gi(n,n.pendingProps),t.flags|=2,an(n),n.memoizedState=null,t}function r1(t,n,e){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(F){if(a.mode==="hidden")return t=gi(n,a),n.lanes=536870912,al(null,t);if(Qs(n),(t=mt)?(t=J0(t,dn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ne!==null?{id:Mn,overflow:qn}:null,retryLane:536870912,hydrationErrors:null},e=xr(t),e.return=n,n.child=e,kt=n,mt=null)):t=null,t===null)throw ae(n);return n.lanes=536870912,null}return gi(n,a)}var i=t.memoizedState;if(i!==null){var s=i.dehydrated;if(Qs(n),l)if(n.flags&256)n.flags&=-257,n=jc(t,n,e);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(d(558));else if(St||pa(t,n,e,!1),l=(e&t.childLanes)!==0,St||l){if(a=gt,a!==null&&(s=Up(a,e),s!==0&&s!==i.retryLane))throw i.retryLane=s,Te(t,s),Wt(a,t,s),go;Ni(),n=jc(t,n,e)}else t=i.treeContext,mt=hn(s.nextSibling),kt=n,F=!0,ee=null,dn=!1,t!==null&&Nr(n,t),n=gi(n,a),n.flags|=4096;return n}return t=jn(t.child,{mode:a.mode,children:a.children}),t.ref=n.ref,n.child=t,t.return=n,t}function fi(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(d(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function fo(t,n,e,a,l){return Re(n),e=Vs(t,n,e,a,void 0,l),a=Ks(),t!==null&&!St?(Js(t,n,l),Yn(t,n,l)):(F&&a&&Ms(n),n.flags|=1,Gt(t,n,e,l),n.child)}function Zc(t,n,e,a,l,i){return Re(n),n.updateQueue=null,e=Dr(n,a,e,l),Hr(t),a=Ks(),t!==null&&!St?(Js(t,n,i),Yn(t,n,i)):(F&&a&&Ms(n),n.flags|=1,Gt(t,n,e,i),n.child)}function Oc(t,n,e,a,l){if(Re(n),n.stateNode===null){var i=la,s=e.contextType;typeof s=="object"&&s!==null&&(i=Bt(s)),i=new e(a,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ro,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=a,i.state=n.memoizedState,i.refs={},Os(n),s=e.contextType,i.context=typeof s=="object"&&s!==null?Bt(s):la,i.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(po(n,e,s,a),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&ro.enqueueReplaceState(i,i.state,null),Ia(n,a,i,l),Fa(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(t===null){i=n.stateNode;var o=n.memoizedProps,p=Ce(e,o);i.props=p;var m=i.context,b=e.contextType;s=la,typeof b=="object"&&b!==null&&(s=Bt(b));var N=e.getDerivedStateFromProps;b=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=n.pendingProps!==o,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||m!==s)&&Sc(n,i,a,s),ie=!1;var u=n.memoizedState;i.state=u,Ia(n,a,i,l),Fa(),m=n.memoizedState,o||u!==m||ie?(typeof N=="function"&&(po(n,e,N,a),m=n.memoizedState),(p=ie||wc(n,e,p,a,u,m,s))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=m),i.props=a,i.state=m,i.context=s,a=p):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Hs(t,n),s=n.memoizedProps,b=Ce(e,s),i.props=b,N=n.pendingProps,u=i.context,m=e.contextType,p=la,typeof m=="object"&&m!==null&&(p=Bt(m)),o=e.getDerivedStateFromProps,(m=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==N||u!==p)&&Sc(n,i,a,p),ie=!1,u=n.memoizedState,i.state=u,Ia(n,a,i,l),Fa();var y=n.memoizedState;s!==N||u!==y||ie||t!==null&&t.dependencies!==null&&Kl(t.dependencies)?(typeof o=="function"&&(po(n,e,o,a),y=n.memoizedState),(b=ie||wc(n,e,b,a,u,y,p)||t!==null&&t.dependencies!==null&&Kl(t.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,p)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=y),i.props=a,i.state=y,i.context=p,a=b):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&u===t.memoizedState||(n.flags|=1024),a=!1)}return i=a,fi(t,n),a=(n.flags&128)!==0,i||a?(i=n.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,t!==null&&a?(n.child=He(n,t.child,null,l),n.child=He(n,null,e,l)):Gt(t,n,e,l),n.memoizedState=i.state,t=n.child):t=Yn(t,n,l),t}function Hc(t,n,e,a){return Be(),n.flags|=256,Gt(t,n,e,a),n.child}var mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uo(t){return{baseLanes:t,cachePool:qr()}}function yo(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=sn),t}function Dc(t,n,e){var a=n.pendingProps,l=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(zt.current&2)!==0),s&&(l=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,t===null){if(F){if(l?pe(n):re(),(t=mt)?(t=J0(t,dn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ne!==null?{id:Mn,overflow:qn}:null,retryLane:536870912,hydrationErrors:null},e=xr(t),e.return=n,n.child=e,kt=n,mt=null)):t=null,t===null)throw ae(n);return Io(t)?n.lanes=32:n.lanes=536870912,null}var o=a.children;return a=a.fallback,l?(re(),l=n.mode,o=mi({mode:"hidden",children:o},l),a=ke(a,l,e,null),o.return=n,a.return=n,o.sibling=a,n.child=o,a=n.child,a.memoizedState=uo(e),a.childLanes=yo(t,s,e),n.memoizedState=mo,al(null,a)):(pe(n),ho(n,o))}var p=t.memoizedState;if(p!==null&&(o=p.dehydrated,o!==null)){if(i)n.flags&256?(pe(n),n.flags&=-257,n=bo(t,n,e)):n.memoizedState!==null?(re(),n.child=t.child,n.flags|=128,n=null):(re(),o=a.fallback,l=n.mode,a=mi({mode:"visible",children:a.children},l),o=ke(o,l,e,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,He(n,t.child,null,e),a=n.child,a.memoizedState=uo(e),a.childLanes=yo(t,s,e),n.memoizedState=mo,n=al(null,a));else if(pe(n),Io(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var m=s.dgst;s=m,a=Error(d(419)),a.stack="",a.digest=s,Xa({value:a,source:null,stack:null}),n=bo(t,n,e)}else if(St||pa(t,n,e,!1),s=(e&t.childLanes)!==0,St||s){if(s=gt,s!==null&&(a=Up(s,e),a!==0&&a!==p.retryLane))throw p.retryLane=a,Te(t,a),Wt(s,t,a),go;Fo(o)||Ni(),n=bo(t,n,e)}else Fo(o)?(n.flags|=192,n.child=t.child,n=null):(t=p.treeContext,mt=hn(o.nextSibling),kt=n,F=!0,ee=null,dn=!1,t!==null&&Nr(n,t),n=ho(n,a.children),n.flags|=4096);return n}return l?(re(),o=a.fallback,l=n.mode,p=t.child,m=p.sibling,a=jn(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,m!==null?o=jn(m,o):(o=ke(o,l,e,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,al(null,a),a=n.child,o=t.child.memoizedState,o===null?o=uo(e):(l=o.cachePool,l!==null?(p=Nt._currentValue,l=l.parent!==p?{parent:p,pool:p}:l):l=qr(),o={baseLanes:o.baseLanes|e,cachePool:l}),a.memoizedState=o,a.childLanes=yo(t,s,e),n.memoizedState=mo,al(t.child,a)):(pe(n),e=t.child,t=e.sibling,e=jn(e,{mode:"visible",children:a.children}),e.return=n,e.sibling=null,t!==null&&(s=n.deletions,s===null?(n.deletions=[t],n.flags|=16):s.push(t)),n.child=e,n.memoizedState=null,e)}function ho(t,n){return n=mi({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function mi(t,n){return t=nn(22,t,null,n),t.lanes=0,t}function bo(t,n,e){return He(n,t.child,null,e),t=ho(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Cc(t,n,e){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n),ks(t.return,n,e)}function xo(t,n,e,a,l,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:l,treeForkCount:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=e,s.tailMode=l,s.treeForkCount=i)}function Yc(t,n,e){var a=n.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var s=zt.current,o=(s&2)!==0;if(o?(s=s&1|2,n.flags|=128):s&=1,U(zt,s),Gt(t,n,a,e),a=F?Qa:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cc(t,e,n);else if(t.tag===19)Cc(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(e=n.child,l=null;e!==null;)t=e.alternate,t!==null&&ni(t)===null&&(l=e),e=e.sibling;e=l,e===null?(l=n.child,n.child=null):(l=e.sibling,e.sibling=null),xo(n,!1,l,e,i,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&ni(t)===null){n.child=l;break}t=l.sibling,l.sibling=e,e=l,l=t}xo(n,!0,e,null,i,a);break;case"together":xo(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Yn(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),fe|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(pa(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(d(153));if(n.child!==null){for(t=n.child,e=jn(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=jn(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function zo(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Kl(t)))}function c1(t,n,e){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),le(n,Nt,t.memoizedState.cache),Be();break;case 27:case 5:_a(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:le(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qs(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(pe(n),n.flags|=128,null):(e&n.child.childLanes)!==0?Dc(t,n,e):(pe(n),t=Yn(t,n,e),t!==null?t.sibling:null);pe(n);break;case 19:var l=(t.flags&128)!==0;if(a=(e&n.childLanes)!==0,a||(pa(t,n,e,!1),a=(e&n.childLanes)!==0),l){if(a)return Yc(t,n,e);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(zt,zt.current),a)break;return null;case 22:return n.lanes=0,Gc(t,n,e,n.pendingProps);case 24:le(n,Nt,t.memoizedState.cache)}return Yn(t,n,e)}function Lc(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)St=!0;else{if(!zo(t,e)&&(n.flags&128)===0)return St=!1,c1(t,n,e);St=(t.flags&131072)!==0}else St=!1,F&&(n.flags&1048576)!==0&&vr(n,Qa,n.index);switch(n.lanes=0,n.tag){case 16:t:{var a=n.pendingProps;if(t=Ze(n.elementType),n.type=t,typeof t=="function")Ss(t)?(a=Ce(t,a),n.tag=1,n=Oc(null,n,t,a,e)):(n.tag=0,n=fo(null,n,t,a,e));else{if(t!=null){var l=t.$$typeof;if(l===pn){n.tag=11,n=Tc(null,n,t,a,e);break t}else if(l===$){n.tag=14,n=kc(null,n,t,a,e);break t}}throw n=kn(t)||t,Error(d(306,n,""))}}return n;case 0:return fo(t,n,n.type,n.pendingProps,e);case 1:return a=n.type,l=Ce(a,n.pendingProps),Oc(t,n,a,l,e);case 3:t:{if(Ot(n,n.stateNode.containerInfo),t===null)throw Error(d(387));a=n.pendingProps;var i=n.memoizedState;l=i.element,Hs(t,n),Ia(n,a,null,e);var s=n.memoizedState;if(a=s.cache,le(n,Nt,a),a!==i.cache&&Bs(n,[Nt],e,!0),Fa(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=Hc(t,n,a,e);break t}else if(a!==l){l=fn(Error(d(424)),n),Xa(l),n=Hc(t,n,a,e);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(mt=hn(t.firstChild),kt=n,F=!0,ee=null,dn=!0,e=Gr(n,null,a,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Be(),a===l){n=Yn(t,n,e);break t}Gt(t,n,a,e)}n=n.child}return n;case 26:return fi(t,n),t===null?(e=tg(n.type,null,n.pendingProps,null))?n.memoizedState=e:F||(e=n.type,t=n.pendingProps,a=_i(X.current).createElement(e),a[Tt]=n,a[Lt]=t,Rt(a,e,t),_t(a),n.stateNode=a):n.memoizedState=tg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return _a(n),t===null&&F&&(a=n.stateNode=F0(n.type,n.pendingProps,X.current),kt=n,dn=!0,l=mt,he(n.type)?(Po=l,mt=hn(a.firstChild)):mt=l),Gt(t,n,n.pendingProps.children,e),fi(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&F&&((l=a=mt)&&(a=D1(a,n.type,n.pendingProps,dn),a!==null?(n.stateNode=a,kt=n,mt=hn(a.firstChild),dn=!1,l=!0):l=!1),l||ae(n)),_a(n),l=n.type,i=n.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,Jo(l,i)?a=null:s!==null&&Jo(l,s)&&(n.flags|=32),n.memoizedState!==null&&(l=Vs(t,n,n1,null,null,e),bl._currentValue=l),fi(t,n),Gt(t,n,a,e),n.child;case 6:return t===null&&F&&((t=e=mt)&&(e=C1(e,n.pendingProps,dn),e!==null?(n.stateNode=e,kt=n,mt=null,t=!0):t=!1),t||ae(n)),null;case 13:return Dc(t,n,e);case 4:return Ot(n,n.stateNode.containerInfo),a=n.pendingProps,t===null?n.child=He(n,null,a,e):Gt(t,n,a,e),n.child;case 11:return Tc(t,n,n.type,n.pendingProps,e);case 7:return Gt(t,n,n.pendingProps,e),n.child;case 8:return Gt(t,n,n.pendingProps.children,e),n.child;case 12:return Gt(t,n,n.pendingProps.children,e),n.child;case 10:return a=n.pendingProps,le(n,n.type,a.value),Gt(t,n,a.children,e),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,Re(n),l=Bt(l),a=a(l),n.flags|=1,Gt(t,n,a,e),n.child;case 14:return kc(t,n,n.type,n.pendingProps,e);case 15:return Bc(t,n,n.type,n.pendingProps,e);case 19:return Yc(t,n,e);case 31:return r1(t,n,e);case 22:return Gc(t,n,e,n.pendingProps);case 24:return Re(n),a=Bt(Nt),t===null?(l=js(),l===null&&(l=gt,i=Gs(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=e),l=i),n.memoizedState={parent:a,cache:l},Os(n),le(n,Nt,l)):((t.lanes&e)!==0&&(Hs(t,n),Ia(n,null,null,e),Fa()),l=t.memoizedState,i=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),le(n,Nt,a)):(a=i.cache,le(n,Nt,a),a!==l.cache&&Bs(n,[Nt],e,!0))),Gt(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function Ln(t){t.flags|=4}function vo(t,n,e,a,l){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(y0())t.flags|=8192;else throw Oe=Fl,Zs}else t.flags&=-16777217}function Qc(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ig(n))if(y0())t.flags|=8192;else throw Oe=Fl,Zs}function ui(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?wp():536870912,t.lanes|=n,za|=n)}function ll(t,n){if(!F)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ut(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(n)for(var l=t.child;l!==null;)e|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)e|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=e,n}function g1(t,n,e){var a=n.pendingProps;switch(qs(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(n),null;case 1:return ut(n),null;case 3:return e=n.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hn(Nt),xt(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(oa(n)?Ln(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,As())),ut(n),null;case 26:var l=n.type,i=n.memoizedState;return t===null?(Ln(n),i!==null?(ut(n),Qc(n,i)):(ut(n),vo(n,l,null,a,e))):i?i!==t.memoizedState?(Ln(n),ut(n),Qc(n,i)):(ut(n),n.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ln(n),ut(n),vo(n,l,t,a,e)),null;case 27:if(El(n),e=X.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==a&&Ln(n);else{if(!a){if(n.stateNode===null)throw Error(d(166));return ut(n),null}t=q.current,oa(n)?wr(n):(t=F0(l,a,e),n.stateNode=t,Ln(n))}return ut(n),null;case 5:if(El(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==a&&Ln(n);else{if(!a){if(n.stateNode===null)throw Error(d(166));return ut(n),null}if(i=q.current,oa(n))wr(n);else{var s=_i(X.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?s.createElement(l,{is:a.is}):s.createElement(l)}}i[Tt]=n,i[Lt]=a;t:for(s=n.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break t;for(;s.sibling===null;){if(s.return===null||s.return===n)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}n.stateNode=i;t:switch(Rt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ln(n)}}return ut(n),vo(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,e),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==a&&Ln(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(d(166));if(t=X.current,oa(n)){if(t=n.stateNode,e=n.memoizedProps,a=null,l=kt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[Tt]=n,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||D0(t.nodeValue,e)),t||ae(n,!0)}else t=_i(t).createTextNode(a),t[Tt]=n,n.stateNode=t}return ut(n),null;case 31:if(e=n.memoizedState,t===null||t.memoizedState!==null){if(a=oa(n),e!==null){if(t===null){if(!a)throw Error(d(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(557));t[Tt]=n}else Be(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ut(n),t=!1}else e=As(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return n.flags&256?(an(n),n):(an(n),null);if((n.flags&128)!==0)throw Error(d(558))}return ut(n),null;case 13:if(a=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=oa(n),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(d(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[Tt]=n}else Be(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ut(n),l=!1}else l=As(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(an(n),n):(an(n),null)}return an(n),(n.flags&128)!==0?(n.lanes=e,n):(e=a!==null,t=t!==null&&t.memoizedState!==null,e&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),e!==t&&e&&(n.child.flags|=8192),ui(n,n.updateQueue),ut(n),null);case 4:return xt(),t===null&&Lo(n.stateNode.containerInfo),ut(n),null;case 10:return Hn(n.type),ut(n),null;case 19:if(w(zt),a=n.memoizedState,a===null)return ut(n),null;if(l=(n.flags&128)!==0,i=a.rendering,i===null)if(l)ll(a,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(i=ni(t),i!==null){for(n.flags|=128,ll(a,!1),t=i.updateQueue,n.updateQueue=t,ui(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)br(e,t),e=e.sibling;return U(zt,zt.current&1|2),F&&Zn(n,a.treeForkCount),n.child}t=t.sibling}a.tail!==null&&Ft()>xi&&(n.flags|=128,l=!0,ll(a,!1),n.lanes=4194304)}else{if(!l)if(t=ni(i),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,ui(n,t),ll(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!F)return ut(n),null}else 2*Ft()-a.renderingStartTime>xi&&e!==536870912&&(n.flags|=128,l=!0,ll(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(t=a.last,t!==null?t.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ft(),t.sibling=null,e=zt.current,U(zt,l?e&1|2:e&1),F&&Zn(n,a.treeForkCount),t):(ut(n),null);case 22:case 23:return an(n),Ls(),a=n.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(e&536870912)!==0&&(n.flags&128)===0&&(ut(n),n.subtreeFlags&6&&(n.flags|=8192)):ut(n),e=n.updateQueue,e!==null&&ui(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==e&&(n.flags|=2048),t!==null&&w(je),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),Hn(Nt),ut(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function f1(t,n){switch(qs(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hn(Nt),xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return El(n),null;case 31:if(n.memoizedState!==null){if(an(n),n.alternate===null)throw Error(d(340));Be()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(an(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(d(340));Be()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return w(zt),null;case 4:return xt(),null;case 10:return Hn(n.type),null;case 22:case 23:return an(n),Ls(),t!==null&&w(je),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hn(Nt),null;case 25:return null;default:return null}}function Xc(t,n){switch(qs(n),n.tag){case 3:Hn(Nt),xt();break;case 26:case 27:case 5:El(n);break;case 4:xt();break;case 31:n.memoizedState!==null&&an(n);break;case 13:an(n);break;case 19:w(zt);break;case 10:Hn(n.type);break;case 22:case 23:an(n),Ls(),t!==null&&w(je);break;case 24:Hn(Nt)}}function il(t,n){try{var e=n.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var l=a.next;e=l;do{if((e.tag&t)===t){a=void 0;var i=e.create,s=e.inst;a=i(),s.destroy=a}e=e.next}while(e!==l)}}catch(o){it(n,n.return,o)}}function ce(t,n,e){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){var s=a.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,l=n;var p=e,m=o;try{m()}catch(b){it(l,p,b)}}}a=a.next}while(a!==i)}}catch(b){it(n,n.return,b)}}function Vc(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{jr(n,e)}catch(a){it(t,t.return,a)}}}function Kc(t,n,e){e.props=Ce(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){it(t,n,a)}}function sl(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(l){it(t,n,l)}}function _n(t,n){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(l){it(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){it(t,n,l)}else e.current=null}function Jc(t){var n=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(l){it(t,t.return,l)}}function No(t,n,e){try{var a=t.stateNode;G1(a,t.type,e,n),a[Lt]=n}catch(l){it(t,t.return,l)}}function Wc(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&he(t.type)||t.tag===4}function wo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wc(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&he(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function So(t,n,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(t),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=Gn));else if(a!==4&&(a===27&&he(t.type)&&(e=t.stateNode,n=null),t=t.child,t!==null))for(So(t,n,e),t=t.sibling;t!==null;)So(t,n,e),t=t.sibling}function di(t,n,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(a!==4&&(a===27&&he(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(di(t,n,e),t=t.sibling;t!==null;)di(t,n,e),t=t.sibling}function $c(t){var n=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Rt(n,a,e),n[Tt]=t,n[Lt]=e}catch(i){it(t,t.return,i)}}var Qn=!1,Et=!1,Eo=!1,Fc=typeof WeakSet=="function"?WeakSet:Set,At=null;function m1(t,n){if(t=t.containerInfo,Vo=ji,t=rr(t),hs(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var s=0,o=-1,p=-1,m=0,b=0,N=t,u=null;n:for(;;){for(var y;N!==e||l!==0&&N.nodeType!==3||(o=s+l),N!==i||a!==0&&N.nodeType!==3||(p=s+a),N.nodeType===3&&(s+=N.nodeValue.length),(y=N.firstChild)!==null;)u=N,N=y;for(;;){if(N===t)break n;if(u===e&&++m===l&&(o=s),u===i&&++b===a&&(p=s),(y=N.nextSibling)!==null)break;N=u,u=N.parentNode}N=y}e=o===-1||p===-1?null:{start:o,end:p}}else e=null}e=e||{start:0,end:0}}else e=null;for(Ko={focusedElem:t,selectionRange:e},ji=!1,At=n;At!==null;)if(n=At,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,At=t;else for(;At!==null;){switch(n=At,i=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)l=t[e],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=n,l=i.memoizedProps,i=i.memoizedState,a=e.stateNode;try{var M=Ce(e.type,l);t=a.getSnapshotBeforeUpdate(M,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(R){it(e,e.return,R)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)$o(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$o(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=n.sibling,t!==null){t.return=n.return,At=t;break}At=n.return}}function Ic(t,n,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Vn(t,e),a&4&&il(5,e);break;case 1:if(Vn(t,e),a&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(s){it(e,e.return,s)}else{var l=Ce(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(s){it(e,e.return,s)}}a&64&&Vc(e),a&512&&sl(e,e.return);break;case 3:if(Vn(t,e),a&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{jr(t,n)}catch(s){it(e,e.return,s)}}break;case 27:n===null&&a&4&&$c(e);case 26:case 5:Vn(t,e),n===null&&a&4&&Jc(e),a&512&&sl(e,e.return);break;case 12:Vn(t,e);break;case 31:Vn(t,e),a&4&&n0(t,e);break;case 13:Vn(t,e),a&4&&e0(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=N1.bind(null,e),Y1(t,e))));break;case 22:if(a=e.memoizedState!==null||Qn,!a){n=n!==null&&n.memoizedState!==null||Et,l=Qn;var i=Et;Qn=a,(Et=n)&&!i?Kn(t,e,(e.subtreeFlags&8772)!==0):Vn(t,e),Qn=l,Et=i}break;case 30:break;default:Vn(t,e)}}function Pc(t){var n=t.alternate;n!==null&&(t.alternate=null,Pc(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ts(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var yt=null,Xt=!1;function Xn(t,n,e){for(e=e.child;e!==null;)t0(t,n,e),e=e.sibling}function t0(t,n,e){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Aa,e)}catch{}switch(e.tag){case 26:Et||_n(e,n),Xn(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Et||_n(e,n);var a=yt,l=Xt;he(e.type)&&(yt=e.stateNode,Xt=!1),Xn(t,n,e),dl(e.stateNode),yt=a,Xt=l;break;case 5:Et||_n(e,n);case 6:if(a=yt,l=Xt,yt=null,Xn(t,n,e),yt=a,Xt=l,yt!==null)if(Xt)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(e.stateNode)}catch(i){it(e,n,i)}else try{yt.removeChild(e.stateNode)}catch(i){it(e,n,i)}break;case 18:yt!==null&&(Xt?(t=yt,V0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),qa(t)):V0(yt,e.stateNode));break;case 4:a=yt,l=Xt,yt=e.stateNode.containerInfo,Xt=!0,Xn(t,n,e),yt=a,Xt=l;break;case 0:case 11:case 14:case 15:ce(2,e,n),Et||ce(4,e,n),Xn(t,n,e);break;case 1:Et||(_n(e,n),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Kc(e,n,a)),Xn(t,n,e);break;case 21:Xn(t,n,e);break;case 22:Et=(a=Et)||e.memoizedState!==null,Xn(t,n,e),Et=a;break;default:Xn(t,n,e)}}function n0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qa(t)}catch(e){it(n,n.return,e)}}}function e0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qa(t)}catch(e){it(n,n.return,e)}}function u1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Fc),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Fc),n;default:throw Error(d(435,t.tag))}}function yi(t,n){var e=u1(t);n.forEach(function(a){if(!e.has(a)){e.add(a);var l=w1.bind(null,t,a);a.then(l,l)}})}function Vt(t,n){var e=n.deletions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a],i=t,s=n,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(he(o.type)){yt=o.stateNode,Xt=!1;break t}break;case 5:yt=o.stateNode,Xt=!1;break t;case 3:case 4:yt=o.stateNode.containerInfo,Xt=!0;break t}o=o.return}if(yt===null)throw Error(d(160));t0(i,s,l),yt=null,Xt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)a0(n,t),n=n.sibling}var Nn=null;function a0(t,n){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vt(n,t),Kt(t),a&4&&(ce(3,t,t.return),il(3,t),ce(5,t,t.return));break;case 1:Vt(n,t),Kt(t),a&512&&(Et||e===null||_n(e,e.return)),a&64&&Qn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var l=Nn;if(Vt(n,t),Kt(t),a&512&&(Et||e===null||_n(e,e.return)),a&4){var i=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ba]||i[Tt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Rt(i,a,e),i[Tt]=t,_t(i),a=i;break t;case"link":var s=ag("link","href",l).get(a+(e.href||""));if(s){for(var o=0;o<s.length;o++)if(i=s[o],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){s.splice(o,1);break n}}i=l.createElement(a),Rt(i,a,e),l.head.appendChild(i);break;case"meta":if(s=ag("meta","content",l).get(a+(e.content||""))){for(o=0;o<s.length;o++)if(i=s[o],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){s.splice(o,1);break n}}i=l.createElement(a),Rt(i,a,e),l.head.appendChild(i);break;default:throw Error(d(468,a))}i[Tt]=t,_t(i),a=i}t.stateNode=a}else lg(l,t.type,t.stateNode);else t.stateNode=eg(l,a,t.memoizedProps);else i!==a?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,a===null?lg(l,t.type,t.stateNode):eg(l,a,t.memoizedProps)):a===null&&t.stateNode!==null&&No(t,t.memoizedProps,e.memoizedProps)}break;case 27:Vt(n,t),Kt(t),a&512&&(Et||e===null||_n(e,e.return)),e!==null&&a&4&&No(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Vt(n,t),Kt(t),a&512&&(Et||e===null||_n(e,e.return)),t.flags&32){l=t.stateNode;try{Fe(l,"")}catch(M){it(t,t.return,M)}}a&4&&t.stateNode!=null&&(l=t.memoizedProps,No(t,l,e!==null?e.memoizedProps:l)),a&1024&&(Eo=!0);break;case 6:if(Vt(n,t),Kt(t),a&4){if(t.stateNode===null)throw Error(d(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(M){it(t,t.return,M)}}break;case 3:if(ki=null,l=Nn,Nn=Ai(n.containerInfo),Vt(n,t),Nn=l,Kt(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{qa(n.containerInfo)}catch(M){it(t,t.return,M)}Eo&&(Eo=!1,l0(t));break;case 4:a=Nn,Nn=Ai(t.stateNode.containerInfo),Vt(n,t),Kt(t),Nn=a;break;case 12:Vt(n,t),Kt(t);break;case 31:Vt(n,t),Kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yi(t,a)));break;case 13:Vt(n,t),Kt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(bi=Ft()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yi(t,a)));break;case 22:l=t.memoizedState!==null;var p=e!==null&&e.memoizedState!==null,m=Qn,b=Et;if(Qn=m||l,Et=b||p,Vt(n,t),Et=b,Qn=m,Kt(t),a&8192)t:for(n=t.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(e===null||p||Qn||Et||Ye(t)),e=null,n=t;;){if(n.tag===5||n.tag===26){if(e===null){p=e=n;try{if(i=p.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=p.stateNode;var N=p.memoizedProps.style,u=N!=null&&N.hasOwnProperty("display")?N.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(M){it(p,p.return,M)}}}else if(n.tag===6){if(e===null){p=n;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(M){it(p,p.return,M)}}}else if(n.tag===18){if(e===null){p=n;try{var y=p.stateNode;l?K0(y,!0):K0(p.stateNode,!1)}catch(M){it(p,p.return,M)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,yi(t,e))));break;case 19:Vt(n,t),Kt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,yi(t,a)));break;case 30:break;case 21:break;default:Vt(n,t),Kt(t)}}function Kt(t){var n=t.flags;if(n&2){try{for(var e,a=t.return;a!==null;){if(Wc(a)){e=a;break}a=a.return}if(e==null)throw Error(d(160));switch(e.tag){case 27:var l=e.stateNode,i=wo(t);di(t,i,l);break;case 5:var s=e.stateNode;e.flags&32&&(Fe(s,""),e.flags&=-33);var o=wo(t);di(t,o,s);break;case 3:case 4:var p=e.stateNode.containerInfo,m=wo(t);So(t,m,p);break;default:throw Error(d(161))}}catch(b){it(t,t.return,b)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function l0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;l0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Vn(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ic(t,n.alternate,n),n=n.sibling}function Ye(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ce(4,n,n.return),Ye(n);break;case 1:_n(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&Kc(n,n.return,e),Ye(n);break;case 27:dl(n.stateNode);case 26:case 5:_n(n,n.return),Ye(n);break;case 22:n.memoizedState===null&&Ye(n);break;case 30:Ye(n);break;default:Ye(n)}t=t.sibling}}function Kn(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=t,i=n,s=i.flags;switch(i.tag){case 0:case 11:case 15:Kn(l,i,e),il(4,i);break;case 1:if(Kn(l,i,e),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){it(a,a.return,m)}if(a=i,l=a.updateQueue,l!==null){var o=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)Rr(p[l],o)}catch(m){it(a,a.return,m)}}e&&s&64&&Vc(i),sl(i,i.return);break;case 27:$c(i);case 26:case 5:Kn(l,i,e),e&&a===null&&s&4&&Jc(i),sl(i,i.return);break;case 12:Kn(l,i,e);break;case 31:Kn(l,i,e),e&&s&4&&n0(l,i);break;case 13:Kn(l,i,e),e&&s&4&&e0(l,i);break;case 22:i.memoizedState===null&&Kn(l,i,e),sl(i,i.return);break;case 30:break;default:Kn(l,i,e)}n=n.sibling}}function Uo(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Va(e))}function Mo(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Va(t))}function wn(t,n,e,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)i0(t,n,e,a),n=n.sibling}function i0(t,n,e,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:wn(t,n,e,a),l&2048&&il(9,n);break;case 1:wn(t,n,e,a);break;case 3:wn(t,n,e,a),l&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Va(t)));break;case 12:if(l&2048){wn(t,n,e,a),t=n.stateNode;try{var i=n.memoizedProps,s=i.id,o=i.onPostCommit;typeof o=="function"&&o(s,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){it(n,n.return,p)}}else wn(t,n,e,a);break;case 31:wn(t,n,e,a);break;case 13:wn(t,n,e,a);break;case 23:break;case 22:i=n.stateNode,s=n.alternate,n.memoizedState!==null?i._visibility&2?wn(t,n,e,a):ol(t,n):i._visibility&2?wn(t,n,e,a):(i._visibility|=2,ha(t,n,e,a,(n.subtreeFlags&10256)!==0||!1)),l&2048&&Uo(s,n);break;case 24:wn(t,n,e,a),l&2048&&Mo(n.alternate,n);break;default:wn(t,n,e,a)}}function ha(t,n,e,a,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=t,s=n,o=e,p=a,m=s.flags;switch(s.tag){case 0:case 11:case 15:ha(i,s,o,p,l),il(8,s);break;case 23:break;case 22:var b=s.stateNode;s.memoizedState!==null?b._visibility&2?ha(i,s,o,p,l):ol(i,s):(b._visibility|=2,ha(i,s,o,p,l)),l&&m&2048&&Uo(s.alternate,s);break;case 24:ha(i,s,o,p,l),l&&m&2048&&Mo(s.alternate,s);break;default:ha(i,s,o,p,l)}n=n.sibling}}function ol(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,a=n,l=a.flags;switch(a.tag){case 22:ol(e,a),l&2048&&Uo(a.alternate,a);break;case 24:ol(e,a),l&2048&&Mo(a.alternate,a);break;default:ol(e,a)}n=n.sibling}}var pl=8192;function ba(t,n,e){if(t.subtreeFlags&pl)for(t=t.child;t!==null;)s0(t,n,e),t=t.sibling}function s0(t,n,e){switch(t.tag){case 26:ba(t,n,e),t.flags&pl&&t.memoizedState!==null&&tm(e,Nn,t.memoizedState,t.memoizedProps);break;case 5:ba(t,n,e);break;case 3:case 4:var a=Nn;Nn=Ai(t.stateNode.containerInfo),ba(t,n,e),Nn=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=pl,pl=16777216,ba(t,n,e),pl=a):ba(t,n,e));break;default:ba(t,n,e)}}function o0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function rl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var a=n[e];At=a,r0(a,t)}o0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)p0(t),t=t.sibling}function p0(t){switch(t.tag){case 0:case 11:case 15:rl(t),t.flags&2048&&ce(9,t,t.return);break;case 3:rl(t);break;case 12:rl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,hi(t)):rl(t);break;default:rl(t)}}function hi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var a=n[e];At=a,r0(a,t)}o0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ce(8,n,n.return),hi(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,hi(n));break;default:hi(n)}t=t.sibling}}function r0(t,n){for(;At!==null;){var e=At;switch(e.tag){case 0:case 11:case 15:ce(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,At=a;else t:for(e=t;At!==null;){a=At;var l=a.sibling,i=a.return;if(Pc(a),a===e){At=null;break t}if(l!==null){l.return=i,At=l;break t}At=i}}}var d1={getCacheForType:function(t){var n=Bt(Nt),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e},cacheSignal:function(){return Bt(Nt).controller.signal}},y1=typeof WeakMap=="function"?WeakMap:Map,et=0,gt=null,V=null,J=0,lt=0,ln=null,ge=!1,xa=!1,qo=!1,Jn=0,bt=0,fe=0,Le=0,_o=0,sn=0,za=0,cl=null,Jt=null,Ao=!1,bi=0,c0=0,xi=1/0,zi=null,me=null,Mt=0,ue=null,va=null,Wn=0,To=0,ko=null,g0=null,gl=0,Bo=null;function on(){return(et&2)!==0&&J!==0?J&-J:x.T!==null?Ho():Mp()}function f0(){if(sn===0)if((J&536870912)===0||F){var t=ql;ql<<=1,(ql&3932160)===0&&(ql=262144),sn=t}else sn=536870912;return t=en.current,t!==null&&(t.flags|=32),sn}function Wt(t,n,e){(t===gt&&(lt===2||lt===9)||t.cancelPendingCommit!==null)&&(Na(t,0),de(t,J,sn,!1)),ka(t,e),((et&2)===0||t!==gt)&&(t===gt&&((et&2)===0&&(Le|=e),bt===4&&de(t,J,sn,!1)),An(t))}function m0(t,n,e){if((et&6)!==0)throw Error(d(327));var a=!e&&(n&127)===0&&(n&t.expiredLanes)===0||Ta(t,n),l=a?x1(t,n):Ro(t,n,!0),i=a;do{if(l===0){xa&&!a&&de(t,n,0,!1);break}else{if(e=t.current.alternate,i&&!h1(e)){l=Ro(t,n,!1),i=!1;continue}if(l===2){if(i=n,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;t:{var o=t;l=cl;var p=o.current.memoizedState.isDehydrated;if(p&&(Na(o,s).flags|=256),s=Ro(o,s,!1),s!==2){if(qo&&!p){o.errorRecoveryDisabledLanes|=i,Le|=i,l=4;break t}i=Jt,Jt=l,i!==null&&(Jt===null?Jt=i:Jt.push.apply(Jt,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){Na(t,0),de(t,n,0,!0);break}t:{switch(a=t,i=l,i){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:de(a,n,sn,!ge);break t;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(l=bi+300-Ft(),10<l)){if(de(a,n,sn,!ge),Al(a,0,!0)!==0)break t;Wn=n,a.timeoutHandle=Q0(u0.bind(null,a,e,Jt,zi,Ao,n,sn,Le,za,ge,i,"Throttled",-0,0),l);break t}u0(a,e,Jt,zi,Ao,n,sn,Le,za,ge,i,null,-0,0)}}break}while(!0);An(t)}function u0(t,n,e,a,l,i,s,o,p,m,b,N,u,y){if(t.timeoutHandle=-1,N=n.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gn},s0(n,i,N);var M=(i&62914560)===i?bi-Ft():(i&4194048)===i?c0-Ft():0;if(M=nm(N,M),M!==null){Wn=i,t.cancelPendingCommit=M(N0.bind(null,t,n,i,e,a,l,s,o,p,b,N,null,u,y)),de(t,i,s,!m);return}}N0(t,n,i,e,a,l,s,o,p)}function h1(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var l=e[a],i=l.getSnapshot;l=l.value;try{if(!tn(i(),l))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function de(t,n,e,a){n&=~_o,n&=~Le,t.suspendedLanes|=n,t.pingedLanes&=~n,a&&(t.warmLanes|=n),a=t.expirationTimes;for(var l=n;0<l;){var i=31-Pt(l),s=1<<i;a[i]=-1,l&=~s}e!==0&&Sp(t,e,n)}function vi(){return(et&6)===0?(fl(0),!1):!0}function Go(){if(V!==null){if(lt===0)var t=V.return;else t=V,On=Ge=null,Ws(t),fa=null,Ja=0,t=V;for(;t!==null;)Xc(t.alternate,t),t=t.return;V=null}}function Na(t,n){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,Z1(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Wn=0,Go(),gt=t,V=e=jn(t.current,null),J=n,lt=0,ln=null,ge=!1,xa=Ta(t,n),qo=!1,za=sn=_o=Le=fe=bt=0,Jt=cl=null,Ao=!1,(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var l=31-Pt(a),i=1<<l;n|=t[l],a&=~i}return Jn=n,Yl(),e}function d0(t,n){C=null,x.H=el,n===ga||n===$l?(n=Tr(),lt=3):n===Zs?(n=Tr(),lt=4):lt=n===go?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ln=n,V===null&&(bt=1,ci(t,fn(n,t.current)))}function y0(){var t=en.current;return t===null?!0:(J&4194048)===J?yn===null:(J&62914560)===J||(J&536870912)!==0?t===yn:!1}function h0(){var t=x.H;return x.H=el,t===null?el:t}function b0(){var t=x.A;return x.A=d1,t}function Ni(){bt=4,ge||(J&4194048)!==J&&en.current!==null||(xa=!0),(fe&134217727)===0&&(Le&134217727)===0||gt===null||de(gt,J,sn,!1)}function Ro(t,n,e){var a=et;et|=2;var l=h0(),i=b0();(gt!==t||J!==n)&&(zi=null,Na(t,n)),n=!1;var s=bt;t:do try{if(lt!==0&&V!==null){var o=V,p=ln;switch(lt){case 8:Go(),s=6;break t;case 3:case 2:case 9:case 6:en.current===null&&(n=!0);var m=lt;if(lt=0,ln=null,wa(t,o,p,m),e&&xa){s=0;break t}break;default:m=lt,lt=0,ln=null,wa(t,o,p,m)}}b1(),s=bt;break}catch(b){d0(t,b)}while(!0);return n&&t.shellSuspendCounter++,On=Ge=null,et=a,x.H=l,x.A=i,V===null&&(gt=null,J=0,Yl()),s}function b1(){for(;V!==null;)x0(V)}function x1(t,n){var e=et;et|=2;var a=h0(),l=b0();gt!==t||J!==n?(zi=null,xi=Ft()+500,Na(t,n)):xa=Ta(t,n);t:do try{if(lt!==0&&V!==null){n=V;var i=ln;n:switch(lt){case 1:lt=0,ln=null,wa(t,n,i,1);break;case 2:case 9:if(_r(i)){lt=0,ln=null,z0(n);break}n=function(){lt!==2&&lt!==9||gt!==t||(lt=7),An(t)},i.then(n,n);break t;case 3:lt=7;break t;case 4:lt=5;break t;case 7:_r(i)?(lt=0,ln=null,z0(n)):(lt=0,ln=null,wa(t,n,i,7));break;case 5:var s=null;switch(V.tag){case 26:s=V.memoizedState;case 5:case 27:var o=V;if(s?ig(s):o.stateNode.complete){lt=0,ln=null;var p=o.sibling;if(p!==null)V=p;else{var m=o.return;m!==null?(V=m,wi(m)):V=null}break n}}lt=0,ln=null,wa(t,n,i,5);break;case 6:lt=0,ln=null,wa(t,n,i,6);break;case 8:Go(),bt=6;break t;default:throw Error(d(462))}}z1();break}catch(b){d0(t,b)}while(!0);return On=Ge=null,x.H=a,x.A=l,et=e,V!==null?0:(gt=null,J=0,Yl(),bt)}function z1(){for(;V!==null&&!Yg();)x0(V)}function x0(t){var n=Lc(t.alternate,t,Jn);t.memoizedProps=t.pendingProps,n===null?wi(t):V=n}function z0(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=Zc(e,n,n.pendingProps,n.type,void 0,J);break;case 11:n=Zc(e,n,n.pendingProps,n.type.render,n.ref,J);break;case 5:Ws(n);default:Xc(e,n),n=V=br(n,Jn),n=Lc(e,n,Jn)}t.memoizedProps=t.pendingProps,n===null?wi(t):V=n}function wa(t,n,e,a){On=Ge=null,Ws(n),fa=null,Ja=0;var l=n.return;try{if(p1(t,l,n,e,J)){bt=1,ci(t,fn(e,t.current)),V=null;return}}catch(i){if(l!==null)throw V=l,i;bt=1,ci(t,fn(e,t.current)),V=null;return}n.flags&32768?(F||a===1?t=!0:xa||(J&536870912)!==0?t=!1:(ge=t=!0,(a===2||a===9||a===3||a===6)&&(a=en.current,a!==null&&a.tag===13&&(a.flags|=16384))),v0(n,t)):wi(n)}function wi(t){var n=t;do{if((n.flags&32768)!==0){v0(n,ge);return}t=n.return;var e=g1(n.alternate,n,Jn);if(e!==null){V=e;return}if(n=n.sibling,n!==null){V=n;return}V=n=t}while(n!==null);bt===0&&(bt=5)}function v0(t,n){do{var e=f1(t.alternate,t);if(e!==null){e.flags&=32767,V=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){V=t;return}V=t=e}while(t!==null);bt=6,V=null}function N0(t,n,e,a,l,i,s,o,p){t.cancelPendingCommit=null;do Si();while(Mt!==0);if((et&6)!==0)throw Error(d(327));if(n!==null){if(n===t.current)throw Error(d(177));if(i=n.lanes|n.childLanes,i|=Ns,Ig(t,e,i,s,o,p),t===gt&&(V=gt=null,J=0),va=n,ue=t,Wn=e,To=i,ko=l,g0=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,S1(Ul,function(){return M0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,l=E.p,E.p=2,s=et,et|=4;try{m1(t,n,e)}finally{et=s,E.p=l,x.T=a}}Mt=1,w0(),S0(),E0()}}function w0(){if(Mt===1){Mt=0;var t=ue,n=va,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=x.T,x.T=null;var a=E.p;E.p=2;var l=et;et|=4;try{a0(n,t);var i=Ko,s=rr(t.containerInfo),o=i.focusedElem,p=i.selectionRange;if(s!==o&&o&&o.ownerDocument&&pr(o.ownerDocument.documentElement,o)){if(p!==null&&hs(o)){var m=p.start,b=p.end;if(b===void 0&&(b=m),"selectionStart"in o)o.selectionStart=m,o.selectionEnd=Math.min(b,o.value.length);else{var N=o.ownerDocument||document,u=N&&N.defaultView||window;if(u.getSelection){var y=u.getSelection(),M=o.textContent.length,R=Math.min(p.start,M),rt=p.end===void 0?R:Math.min(p.end,M);!y.extend&&R>rt&&(s=rt,rt=R,R=s);var g=or(o,R),r=or(o,rt);if(g&&r&&(y.rangeCount!==1||y.anchorNode!==g.node||y.anchorOffset!==g.offset||y.focusNode!==r.node||y.focusOffset!==r.offset)){var f=N.createRange();f.setStart(g.node,g.offset),y.removeAllRanges(),R>rt?(y.addRange(f),y.extend(r.node,r.offset)):(f.setEnd(r.node,r.offset),y.addRange(f))}}}}for(N=[],y=o;y=y.parentNode;)y.nodeType===1&&N.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<N.length;o++){var z=N[o];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}ji=!!Vo,Ko=Vo=null}finally{et=l,E.p=a,x.T=e}}t.current=n,Mt=2}}function S0(){if(Mt===2){Mt=0;var t=ue,n=va,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=x.T,x.T=null;var a=E.p;E.p=2;var l=et;et|=4;try{Ic(t,n.alternate,n)}finally{et=l,E.p=a,x.T=e}}Mt=3}}function E0(){if(Mt===4||Mt===3){Mt=0,Lg();var t=ue,n=va,e=Wn,a=g0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mt=5:(Mt=0,va=ue=null,U0(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(me=null),Ii(e),n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Aa,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=x.T,l=E.p,E.p=2,x.T=null;try{for(var i=t.onRecoverableError,s=0;s<a.length;s++){var o=a[s];i(o.value,{componentStack:o.stack})}}finally{x.T=n,E.p=l}}(Wn&3)!==0&&Si(),An(t),l=t.pendingLanes,(e&261930)!==0&&(l&42)!==0?t===Bo?gl++:(gl=0,Bo=t):gl=0,fl(0)}}function U0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Va(n)))}function Si(){return w0(),S0(),E0(),M0()}function M0(){if(Mt!==5)return!1;var t=ue,n=To;To=0;var e=Ii(Wn),a=x.T,l=E.p;try{E.p=32>e?32:e,x.T=null,e=ko,ko=null;var i=ue,s=Wn;if(Mt=0,va=ue=null,Wn=0,(et&6)!==0)throw Error(d(331));var o=et;if(et|=4,p0(i.current),i0(i,i.current,s,e),et=o,fl(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Aa,i)}catch{}return!0}finally{E.p=l,x.T=a,U0(t,n)}}function q0(t,n,e){n=fn(e,n),n=co(t.stateNode,n,2),t=oe(t,n,2),t!==null&&(ka(t,2),An(t))}function it(t,n,e){if(t.tag===3)q0(t,t,e);else for(;n!==null;){if(n.tag===3){q0(n,t,e);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(me===null||!me.has(a))){t=fn(e,t),e=_c(2),a=oe(n,e,2),a!==null&&(Ac(e,a,n,t),ka(a,2),An(a));break}}n=n.return}}function jo(t,n,e){var a=t.pingCache;if(a===null){a=t.pingCache=new y1;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(e)||(qo=!0,l.add(e),t=v1.bind(null,t,n,e),n.then(t,t))}function v1(t,n,e){var a=t.pingCache;a!==null&&a.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,gt===t&&(J&e)===e&&(bt===4||bt===3&&(J&62914560)===J&&300>Ft()-bi?(et&2)===0&&Na(t,0):_o|=e,za===J&&(za=0)),An(t)}function _0(t,n){n===0&&(n=wp()),t=Te(t,n),t!==null&&(ka(t,n),An(t))}function N1(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),_0(t,e)}function w1(t,n){var e=0;switch(t.tag){case 31:case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(e=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(n),_0(t,e)}function S1(t,n){return Ji(t,n)}var Ei=null,Sa=null,Zo=!1,Ui=!1,Oo=!1,ye=0;function An(t){t!==Sa&&t.next===null&&(Sa===null?Ei=Sa=t:Sa=Sa.next=t),Ui=!0,Zo||(Zo=!0,U1())}function fl(t,n){if(!Oo&&Ui){Oo=!0;do for(var e=!1,a=Ei;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var s=a.suspendedLanes,o=a.pingedLanes;i=(1<<31-Pt(42|t)+1)-1,i&=l&~(s&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,B0(a,i))}else i=J,i=Al(a,a===gt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ta(a,i)||(e=!0,B0(a,i));a=a.next}while(e);Oo=!1}}function E1(){A0()}function A0(){Ui=Zo=!1;var t=0;ye!==0&&j1()&&(t=ye);for(var n=Ft(),e=null,a=Ei;a!==null;){var l=a.next,i=T0(a,n);i===0?(a.next=null,e===null?Ei=l:e.next=l,l===null&&(Sa=e)):(e=a,(t!==0||(i&3)!==0)&&(Ui=!0)),a=l}Mt!==0&&Mt!==5||fl(t),ye!==0&&(ye=0)}function T0(t,n){for(var e=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-Pt(i),o=1<<s,p=l[s];p===-1?((o&e)===0||(o&a)!==0)&&(l[s]=Fg(o,n)):p<=n&&(t.expiredLanes|=o),i&=~o}if(n=gt,e=J,e=Al(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===n&&(lt===2||lt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Wi(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Ta(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(a!==null&&Wi(a),Ii(e)){case 2:case 8:e=vp;break;case 32:e=Ul;break;case 268435456:e=Np;break;default:e=Ul}return a=k0.bind(null,t),e=Ji(e,a),t.callbackPriority=n,t.callbackNode=e,n}return a!==null&&a!==null&&Wi(a),t.callbackPriority=2,t.callbackNode=null,2}function k0(t,n){if(Mt!==0&&Mt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Si()&&t.callbackNode!==e)return null;var a=J;return a=Al(t,t===gt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(m0(t,a,n),T0(t,Ft()),t.callbackNode!=null&&t.callbackNode===e?k0.bind(null,t):null)}function B0(t,n){if(Si())return null;m0(t,n,!0)}function U1(){O1(function(){(et&6)!==0?Ji(zp,E1):A0()})}function Ho(){if(ye===0){var t=ra;t===0&&(t=Ml,Ml<<=1,(Ml&261888)===0&&(Ml=256)),ye=t}return ye}function G0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gl(""+t)}function R0(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function M1(t,n,e,a,l){if(n==="submit"&&e&&e.stateNode===l){var i=G0((l[Lt]||null).action),s=a.submitter;s&&(n=(n=s[Lt]||null)?G0(n.formAction):s.getAttribute("formAction"),n!==null&&(i=n,s=null));var o=new Ol("action","action",null,a,l);t.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ye!==0){var p=s?R0(l,s):new FormData(l);lo(e,{pending:!0,data:p,method:l.method,action:i},null,p)}}else typeof i=="function"&&(o.preventDefault(),p=s?R0(l,s):new FormData(l),lo(e,{pending:!0,data:p,method:l.method,action:i},i,p))},currentTarget:l}]})}}for(var Do=0;Do<vs.length;Do++){var Co=vs[Do],q1=Co.toLowerCase(),_1=Co[0].toUpperCase()+Co.slice(1);vn(q1,"on"+_1)}vn(fr,"onAnimationEnd"),vn(mr,"onAnimationIteration"),vn(ur,"onAnimationStart"),vn("dblclick","onDoubleClick"),vn("focusin","onFocus"),vn("focusout","onBlur"),vn(Xf,"onTransitionRun"),vn(Vf,"onTransitionStart"),vn(Kf,"onTransitionCancel"),vn(dr,"onTransitionEnd"),We("onMouseEnter",["mouseout","mouseover"]),We("onMouseLeave",["mouseout","mouseover"]),We("onPointerEnter",["pointerout","pointerover"]),We("onPointerLeave",["pointerout","pointerover"]),Me("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Me("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Me("onBeforeInput",["compositionend","keypress","textInput","paste"]),Me("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Me("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Me("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function j0(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],l=a.event;a=a.listeners;t:{var i=void 0;if(n)for(var s=a.length-1;0<=s;s--){var o=a[s],p=o.instance,m=o.currentTarget;if(o=o.listener,p!==i&&l.isPropagationStopped())break t;i=o,l.currentTarget=m;try{i(l)}catch(b){Cl(b)}l.currentTarget=null,i=p}else for(s=0;s<a.length;s++){if(o=a[s],p=o.instance,m=o.currentTarget,o=o.listener,p!==i&&l.isPropagationStopped())break t;i=o,l.currentTarget=m;try{i(l)}catch(b){Cl(b)}l.currentTarget=null,i=p}}}}function K(t,n){var e=n[Pi];e===void 0&&(e=n[Pi]=new Set);var a=t+"__bubble";e.has(a)||(Z0(n,t,2,!1),e.add(a))}function Yo(t,n,e){var a=0;n&&(a|=4),Z0(e,t,a,n)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[Mi]){t[Mi]=!0,Ap.forEach(function(e){e!=="selectionchange"&&(A1.has(e)||Yo(e,!1,t),Yo(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Mi]||(n[Mi]=!0,Yo("selectionchange",!1,n))}}function Z0(t,n,e,a){switch(fg(n)){case 2:var l=lm;break;case 8:l=im;break;default:l=lp}e=l.bind(null,n,e,t),l=void 0,!ps||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(n,e,{capture:!0,passive:l}):t.addEventListener(n,e,!0):l!==void 0?t.addEventListener(n,e,{passive:l}):t.addEventListener(n,e,!1)}function Qo(t,n,e,a,l){var i=a;if((n&1)===0&&(n&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var o=a.stateNode.containerInfo;if(o===l)break;if(s===4)for(s=a.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;o!==null;){if(s=Ve(o),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){a=i=s;continue t}o=o.parentNode}}a=a.return}Yp(function(){var m=i,b=ss(e),N=[];t:{var u=yr.get(t);if(u!==void 0){var y=Ol,M=t;switch(t){case"keypress":if(jl(e)===0)break t;case"keydown":case"keyup":y=wf;break;case"focusin":M="focus",y=fs;break;case"focusout":M="blur",y=fs;break;case"beforeblur":case"afterblur":y=fs;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Uf;break;case fr:case mr:case ur:y=uf;break;case dr:y=qf;break;case"scroll":case"scrollend":y=rf;break;case"wheel":y=Af;break;case"copy":case"cut":case"paste":y=yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kp;break;case"toggle":case"beforetoggle":y=kf}var R=(n&4)!==0,rt=!R&&(t==="scroll"||t==="scrollend"),g=R?u!==null?u+"Capture":null:u;R=[];for(var r=m,f;r!==null;){var z=r;if(f=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||f===null||g===null||(z=Ra(r,g),z!=null&&R.push(ul(r,z,f))),rt)break;r=r.return}0<R.length&&(u=new y(u,M,null,e,b),N.push({event:u,listeners:R}))}}if((n&7)===0){t:{if(u=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",u&&e!==is&&(M=e.relatedTarget||e.fromElement)&&(Ve(M)||M[Xe]))break t;if((y||u)&&(u=b.window===b?b:(u=b.ownerDocument)?u.defaultView||u.parentWindow:window,y?(M=e.relatedTarget||e.toElement,y=m,M=M?Ve(M):null,M!==null&&(rt=L(M),R=M.tag,M!==rt||R!==5&&R!==27&&R!==6)&&(M=null)):(y=null,M=m),y!==M)){if(R=Xp,z="onMouseLeave",g="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(R=Kp,z="onPointerLeave",g="onPointerEnter",r="pointer"),rt=y==null?u:Ga(y),f=M==null?u:Ga(M),u=new R(z,r+"leave",y,e,b),u.target=rt,u.relatedTarget=f,z=null,Ve(b)===m&&(R=new R(g,r+"enter",M,e,b),R.target=f,R.relatedTarget=rt,z=R),rt=z,y&&M)n:{for(R=T1,g=y,r=M,f=0,z=g;z;z=R(z))f++;z=0;for(var G=r;G;G=R(G))z++;for(;0<f-z;)g=R(g),f--;for(;0<z-f;)r=R(r),z--;for(;f--;){if(g===r||r!==null&&g===r.alternate){R=g;break n}g=R(g),r=R(r)}R=null}else R=null;y!==null&&O0(N,u,y,R,!1),M!==null&&rt!==null&&O0(N,rt,M,R,!0)}}t:{if(u=m?Ga(m):window,y=u.nodeName&&u.nodeName.toLowerCase(),y==="select"||y==="input"&&u.type==="file")var tt=nr;else if(Pp(u))if(er)tt=Yf;else{tt=Df;var A=Hf}else y=u.nodeName,!y||y.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?m&&ls(m.elementType)&&(tt=nr):tt=Cf;if(tt&&(tt=tt(t,m))){tr(N,tt,e,b);break t}A&&A(t,u,m),t==="focusout"&&m&&u.type==="number"&&m.memoizedProps.value!=null&&as(u,"number",u.value)}switch(A=m?Ga(m):window,t){case"focusin":(Pp(A)||A.contentEditable==="true")&&(na=A,bs=m,La=null);break;case"focusout":La=bs=na=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,cr(N,e,b);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":cr(N,e,b)}var Y;if(us)t:{switch(t){case"compositionstart":var W="onCompositionStart";break t;case"compositionend":W="onCompositionEnd";break t;case"compositionupdate":W="onCompositionUpdate";break t}W=void 0}else ta?Fp(t,e)&&(W="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(W="onCompositionStart");W&&(Jp&&e.locale!=="ko"&&(ta||W!=="onCompositionStart"?W==="onCompositionEnd"&&ta&&(Y=Lp()):(te=b,rs="value"in te?te.value:te.textContent,ta=!0)),A=qi(m,W),0<A.length&&(W=new Vp(W,t,null,e,b),N.push({event:W,listeners:A}),Y?W.data=Y:(Y=Ip(e),Y!==null&&(W.data=Y)))),(Y=Gf?Rf(t,e):jf(t,e))&&(W=qi(m,"onBeforeInput"),0<W.length&&(A=new Vp("onBeforeInput","beforeinput",null,e,b),N.push({event:A,listeners:W}),A.data=Y)),M1(N,t,m,e,b)}j0(N,n)})}function ul(t,n,e){return{instance:t,listener:n,currentTarget:e}}function qi(t,n){for(var e=n+"Capture",a=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Ra(t,e),l!=null&&a.unshift(ul(t,l,i)),l=Ra(t,n),l!=null&&a.push(ul(t,l,i))),t.tag===3)return a;t=t.return}return[]}function T1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function O0(t,n,e,a,l){for(var i=n._reactName,s=[];e!==null&&e!==a;){var o=e,p=o.alternate,m=o.stateNode;if(o=o.tag,p!==null&&p===a)break;o!==5&&o!==26&&o!==27||m===null||(p=m,l?(m=Ra(e,i),m!=null&&s.unshift(ul(e,m,p))):l||(m=Ra(e,i),m!=null&&s.push(ul(e,m,p)))),e=e.return}s.length!==0&&t.push({event:n,listeners:s})}var k1=/\r\n?/g,B1=/\u0000|\uFFFD/g;function H0(t){return(typeof t=="string"?t:""+t).replace(k1,`
`).replace(B1,"")}function D0(t,n){return n=H0(n),H0(t)===n}function pt(t,n,e,a,l,i){switch(e){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Fe(t,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Fe(t,""+a);break;case"className":kl(t,"class",a);break;case"tabIndex":kl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":kl(t,e,a);break;case"style":Dp(t,a,i);break;case"data":if(n!=="object"){kl(t,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Gl(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(n!=="input"&&pt(t,n,"name",l.name,l,null),pt(t,n,"formEncType",l.formEncType,l,null),pt(t,n,"formMethod",l.formMethod,l,null),pt(t,n,"formTarget",l.formTarget,l,null)):(pt(t,n,"encType",l.encType,l,null),pt(t,n,"method",l.method,l,null),pt(t,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Gl(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=Gn);break;case"onScroll":a!=null&&K("scroll",t);break;case"onScrollEnd":a!=null&&K("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(e=a.__html,e!=null){if(l.children!=null)throw Error(d(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Gl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":K("beforetoggle",t),K("toggle",t),Tl(t,"popover",a);break;case"xlinkActuate":Bn(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bn(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bn(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bn(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bn(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Tl(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=of.get(e)||e,Tl(t,e,a))}}function Xo(t,n,e,a,l,i){switch(e){case"style":Dp(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(e=a.__html,e!=null){if(l.children!=null)throw Error(d(60));t.innerHTML=e}}break;case"children":typeof a=="string"?Fe(t,a):(typeof a=="number"||typeof a=="bigint")&&Fe(t,""+a);break;case"onScroll":a!=null&&K("scroll",t);break;case"onScrollEnd":a!=null&&K("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tp.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),n=e.slice(2,l?e.length-7:void 0),i=t[Lt]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(n,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,a,l);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):Tl(t,e,a)}}}function Rt(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",t),K("load",t);var a=!1,l=!1,i;for(i in e)if(e.hasOwnProperty(i)){var s=e[i];if(s!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:pt(t,n,i,s,e,null)}}l&&pt(t,n,"srcSet",e.srcSet,e,null),a&&pt(t,n,"src",e.src,e,null);return;case"input":K("invalid",t);var o=i=s=l=null,p=null,m=null;for(a in e)if(e.hasOwnProperty(a)){var b=e[a];if(b!=null)switch(a){case"name":l=b;break;case"type":s=b;break;case"checked":p=b;break;case"defaultChecked":m=b;break;case"value":i=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,n));break;default:pt(t,n,a,b,e,null)}}jp(t,i,o,p,m,s,l,!1);return;case"select":K("invalid",t),a=s=i=null;for(l in e)if(e.hasOwnProperty(l)&&(o=e[l],o!=null))switch(l){case"value":i=o;break;case"defaultValue":s=o;break;case"multiple":a=o;default:pt(t,n,l,o,e,null)}n=i,e=s,t.multiple=!!a,n!=null?$e(t,!!a,n,!1):e!=null&&$e(t,!!a,e,!0);return;case"textarea":K("invalid",t),i=l=a=null;for(s in e)if(e.hasOwnProperty(s)&&(o=e[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":l=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:pt(t,n,s,o,e,null)}Op(t,a,l,i);return;case"option":for(p in e)if(e.hasOwnProperty(p)&&(a=e[p],a!=null))switch(p){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:pt(t,n,p,a,e,null)}return;case"dialog":K("beforetoggle",t),K("toggle",t),K("cancel",t),K("close",t);break;case"iframe":case"object":K("load",t);break;case"video":case"audio":for(a=0;a<ml.length;a++)K(ml[a],t);break;case"image":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"embed":case"source":case"link":K("error",t),K("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in e)if(e.hasOwnProperty(m)&&(a=e[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:pt(t,n,m,a,e,null)}return;default:if(ls(n)){for(b in e)e.hasOwnProperty(b)&&(a=e[b],a!==void 0&&Xo(t,n,b,a,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(a=e[o],a!=null&&pt(t,n,o,a,e,null))}function G1(t,n,e,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,o=null,p=null,m=null,b=null;for(y in e){var N=e[y];if(e.hasOwnProperty(y)&&N!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":p=N;default:a.hasOwnProperty(y)||pt(t,n,y,null,a,N)}}for(var u in a){var y=a[u];if(N=e[u],a.hasOwnProperty(u)&&(y!=null||N!=null))switch(u){case"type":i=y;break;case"name":l=y;break;case"checked":m=y;break;case"defaultChecked":b=y;break;case"value":s=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,n));break;default:y!==N&&pt(t,n,u,y,a,N)}}es(t,s,o,p,m,b,i,l);return;case"select":y=s=o=u=null;for(i in e)if(p=e[i],e.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":y=p;default:a.hasOwnProperty(i)||pt(t,n,i,null,a,p)}for(l in a)if(i=a[l],p=e[l],a.hasOwnProperty(l)&&(i!=null||p!=null))switch(l){case"value":u=i;break;case"defaultValue":o=i;break;case"multiple":s=i;default:i!==p&&pt(t,n,l,i,a,p)}n=o,e=s,a=y,u!=null?$e(t,!!e,u,!1):!!a!=!!e&&(n!=null?$e(t,!!e,n,!0):$e(t,!!e,e?[]:"",!1));return;case"textarea":y=u=null;for(o in e)if(l=e[o],e.hasOwnProperty(o)&&l!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pt(t,n,o,null,a,l)}for(s in a)if(l=a[s],i=e[s],a.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":u=l;break;case"defaultValue":y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==i&&pt(t,n,s,l,a,i)}Zp(t,u,y);return;case"option":for(var M in e)if(u=e[M],e.hasOwnProperty(M)&&u!=null&&!a.hasOwnProperty(M))switch(M){case"selected":t.selected=!1;break;default:pt(t,n,M,null,a,u)}for(p in a)if(u=a[p],y=e[p],a.hasOwnProperty(p)&&u!==y&&(u!=null||y!=null))switch(p){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:pt(t,n,p,u,a,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in e)u=e[R],e.hasOwnProperty(R)&&u!=null&&!a.hasOwnProperty(R)&&pt(t,n,R,null,a,u);for(m in a)if(u=a[m],y=e[m],a.hasOwnProperty(m)&&u!==y&&(u!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(137,n));break;default:pt(t,n,m,u,a,y)}return;default:if(ls(n)){for(var rt in e)u=e[rt],e.hasOwnProperty(rt)&&u!==void 0&&!a.hasOwnProperty(rt)&&Xo(t,n,rt,void 0,a,u);for(b in a)u=a[b],y=e[b],!a.hasOwnProperty(b)||u===y||u===void 0&&y===void 0||Xo(t,n,b,u,a,y);return}}for(var g in e)u=e[g],e.hasOwnProperty(g)&&u!=null&&!a.hasOwnProperty(g)&&pt(t,n,g,null,a,u);for(N in a)u=a[N],y=e[N],!a.hasOwnProperty(N)||u===y||u==null&&y==null||pt(t,n,N,u,a,y)}function C0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function R1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var l=e[a],i=l.transferSize,s=l.initiatorType,o=l.duration;if(i&&o&&C0(s)){for(s=0,o=l.responseEnd,a+=1;a<e.length;a++){var p=e[a],m=p.startTime;if(m>o)break;var b=p.transferSize,N=p.initiatorType;b&&C0(N)&&(p=p.responseEnd,s+=b*(p<o?1:(o-m)/(p-m)))}if(--a,n+=8*(i+s)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vo=null,Ko=null;function _i(t){return t.nodeType===9?t:t.ownerDocument}function Y0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Jo(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wo=null;function j1(){var t=window.event;return t&&t.type==="popstate"?t===Wo?!1:(Wo=t,!0):(Wo=null,!1)}var Q0=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,O1=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(t){return X0.resolve(null).then(t).catch(H1)}:Q0;function H1(t){setTimeout(function(){throw t})}function he(t){return t==="head"}function V0(t,n){var e=n,a=0;do{var l=e.nextSibling;if(t.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"||e==="/&"){if(a===0){t.removeChild(l),qa(n);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")dl(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,dl(e);for(var i=e.firstChild;i;){var s=i.nextSibling,o=i.nodeName;i[Ba]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=s}}else e==="body"&&dl(t.ownerDocument.body);e=l}while(e);qa(n)}function K0(t,n){var e=t;t=0;do{var a=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=a}while(e)}function $o(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":$o(e),ts(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function D1(t,n,e,a){for(;t.nodeType===1;){var l=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=hn(t.nextSibling),t===null)break}return null}function C1(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=hn(t.nextSibling),t===null))return null;return t}function J0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hn(t.nextSibling),t===null))return null;return t}function Fo(t){return t.data==="$?"||t.data==="$~"}function Io(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Y1(t,n){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||e.readyState!=="loading")n();else{var a=function(){n(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function hn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Po=null;function W0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(n===0)return hn(t.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}t=t.nextSibling}return null}function $0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return t;n--}else e!=="/$"&&e!=="/&"||n++}t=t.previousSibling}return null}function F0(t,n,e){switch(n=_i(e),t){case"html":if(t=n.documentElement,!t)throw Error(d(452));return t;case"head":if(t=n.head,!t)throw Error(d(453));return t;case"body":if(t=n.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function dl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ts(t)}var bn=new Map,I0=new Set;function Ai(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $n=E.d;E.d={f:L1,r:Q1,D:X1,C:V1,L:K1,m:J1,X:$1,S:W1,M:F1};function L1(){var t=$n.f(),n=vi();return t||n}function Q1(t){var n=Ke(t);n!==null&&n.tag===5&&n.type==="form"?dc(n):$n.r(t)}var Ea=typeof document>"u"?null:document;function P0(t,n,e){var a=Ea;if(a&&typeof n=="string"&&n){var l=cn(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),I0.has(l)||(I0.add(l),t={rel:t,crossOrigin:e,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),Rt(n,"link",t),_t(n),a.head.appendChild(n)))}}function X1(t){$n.D(t),P0("dns-prefetch",t,null)}function V1(t,n){$n.C(t,n),P0("preconnect",t,n)}function K1(t,n,e){$n.L(t,n,e);var a=Ea;if(a&&t&&n){var l='link[rel="preload"][as="'+cn(n)+'"]';n==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+cn(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+cn(e.imageSizes)+'"]')):l+='[href="'+cn(t)+'"]';var i=l;switch(n){case"style":i=Ua(t);break;case"script":i=Ma(t)}bn.has(i)||(t=k({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),bn.set(i,t),a.querySelector(l)!==null||n==="style"&&a.querySelector(yl(i))||n==="script"&&a.querySelector(hl(i))||(n=a.createElement("link"),Rt(n,"link",t),_t(n),a.head.appendChild(n)))}}function J1(t,n){$n.m(t,n);var e=Ea;if(e&&t){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+cn(a)+'"][href="'+cn(t)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ma(t)}if(!bn.has(i)&&(t=k({rel:"modulepreload",href:t},n),bn.set(i,t),e.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(hl(i)))return}a=e.createElement("link"),Rt(a,"link",t),_t(a),e.head.appendChild(a)}}}function W1(t,n,e){$n.S(t,n,e);var a=Ea;if(a&&t){var l=Je(a).hoistableStyles,i=Ua(t);n=n||"default";var s=l.get(i);if(!s){var o={loading:0,preload:null};if(s=a.querySelector(yl(i)))o.loading=5;else{t=k({rel:"stylesheet",href:t,"data-precedence":n},e),(e=bn.get(i))&&tp(t,e);var p=s=a.createElement("link");_t(p),Rt(p,"link",t),p._p=new Promise(function(m,b){p.onload=m,p.onerror=b}),p.addEventListener("load",function(){o.loading|=1}),p.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ti(s,n,a)}s={type:"stylesheet",instance:s,count:1,state:o},l.set(i,s)}}}function $1(t,n){$n.X(t,n);var e=Ea;if(e&&t){var a=Je(e).hoistableScripts,l=Ma(t),i=a.get(l);i||(i=e.querySelector(hl(l)),i||(t=k({src:t,async:!0},n),(n=bn.get(l))&&np(t,n),i=e.createElement("script"),_t(i),Rt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function F1(t,n){$n.M(t,n);var e=Ea;if(e&&t){var a=Je(e).hoistableScripts,l=Ma(t),i=a.get(l);i||(i=e.querySelector(hl(l)),i||(t=k({src:t,async:!0,type:"module"},n),(n=bn.get(l))&&np(t,n),i=e.createElement("script"),_t(i),Rt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function tg(t,n,e,a){var l=(l=X.current)?Ai(l):null;if(!l)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Ua(e.href),e=Je(l).hoistableStyles,a=e.get(n),a||(a={type:"style",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Ua(e.href);var i=Je(l).hoistableStyles,s=i.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=l.querySelector(yl(t)))&&!i._p&&(s.instance=i,s.state.loading=5),bn.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},bn.set(t,e),i||I1(l,t,e,s.state))),n&&a===null)throw Error(d(528,""));return s}if(n&&a!==null)throw Error(d(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ma(e),e=Je(l).hoistableScripts,a=e.get(n),a||(a={type:"script",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function Ua(t){return'href="'+cn(t)+'"'}function yl(t){return'link[rel="stylesheet"]['+t+"]"}function ng(t){return k({},t,{"data-precedence":t.precedence,precedence:null})}function I1(t,n,e,a){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=t.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Rt(n,"link",e),_t(n),t.head.appendChild(n))}function Ma(t){return'[src="'+cn(t)+'"]'}function hl(t){return"script[async]"+t}function eg(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var a=t.querySelector('style[data-href~="'+cn(e.href)+'"]');if(a)return n.instance=a,_t(a),a;var l=k({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),_t(a),Rt(a,"style",l),Ti(a,e.precedence,t),n.instance=a;case"stylesheet":l=Ua(e.href);var i=t.querySelector(yl(l));if(i)return n.state.loading|=4,n.instance=i,_t(i),i;a=ng(e),(l=bn.get(l))&&tp(a,l),i=(t.ownerDocument||t).createElement("link"),_t(i);var s=i;return s._p=new Promise(function(o,p){s.onload=o,s.onerror=p}),Rt(i,"link",a),n.state.loading|=4,Ti(i,e.precedence,t),n.instance=i;case"script":return i=Ma(e.src),(l=t.querySelector(hl(i)))?(n.instance=l,_t(l),l):(a=e,(l=bn.get(i))&&(a=k({},e),np(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),_t(l),Rt(l,"link",a),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Ti(a,e.precedence,t));return n.instance}function Ti(t,n,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,s=0;s<a.length;s++){var o=a[s];if(o.dataset.precedence===n)i=o;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function tp(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function np(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ki=null;function ag(t,n,e){if(ki===null){var a=new Map,l=ki=new Map;l.set(e,a)}else l=ki,a=l.get(e),a||(a=new Map,l.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),l=0;l<e.length;l++){var i=e[l];if(!(i[Ba]||i[Tt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(n)||"";s=t+s;var o=a.get(s);o?o.push(i):a.set(s,[i])}}return a}function lg(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function P1(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ig(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tm(t,n,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Ua(a.href),i=n.querySelector(yl(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Bi.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=i,_t(i);return}i=n.ownerDocument||n,a=ng(a),(l=bn.get(l))&&tp(a,l),i=i.createElement("link"),_t(i);var s=i;s._p=new Promise(function(o,p){s.onload=o,s.onerror=p}),Rt(i,"link",a),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Bi.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}var ep=0;function nm(t,n){return t.stylesheets&&t.count===0&&Ri(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var a=setTimeout(function(){if(t.stylesheets&&Ri(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+n);0<t.imgBytes&&ep===0&&(ep=62500*R1());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ri(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>ep?50:800)+n);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Bi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ri(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gi=null;function Ri(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gi=new Map,n.forEach(em,t),Gi=null,Bi.call(t))}function em(t,n){if(!(n.state.loading&4)){var e=Gi.get(t);if(e)var a=e.get(null);else{e=new Map,Gi.set(t,e);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(e.set(s.dataset.precedence,s),a=s)}a&&e.set(null,a)}l=n.instance,s=l.getAttribute("data-precedence"),i=e.get(s)||a,i===a&&e.set(null,l),e.set(s,l),this.count++,a=Bi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var bl={$$typeof:jt,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function am(t,n,e,a,l,i,s,o,p){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function sg(t,n,e,a,l,i,s,o,p,m,b,N){return t=new am(t,n,e,s,p,m,b,N,o),n=1,i===!0&&(n|=24),i=nn(3,null,null,n),t.current=i,i.stateNode=t,n=Gs(),n.refCount++,t.pooledCache=n,n.refCount++,i.memoizedState={element:a,isDehydrated:e,cache:n},Os(i),t}function og(t){return t?(t=la,t):la}function pg(t,n,e,a,l,i){l=og(l),a.context===null?a.context=l:a.pendingContext=l,a=se(n),a.payload={element:e},i=i===void 0?null:i,i!==null&&(a.callback=i),e=oe(t,a,n),e!==null&&(Wt(e,t,n),$a(e,t,n))}function rg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function ap(t,n){rg(t,n),(t=t.alternate)&&rg(t,n)}function cg(t){if(t.tag===13||t.tag===31){var n=Te(t,67108864);n!==null&&Wt(n,t,67108864),ap(t,67108864)}}function gg(t){if(t.tag===13||t.tag===31){var n=on();n=Fi(n);var e=Te(t,n);e!==null&&Wt(e,t,n),ap(t,n)}}var ji=!0;function lm(t,n,e,a){var l=x.T;x.T=null;var i=E.p;try{E.p=2,lp(t,n,e,a)}finally{E.p=i,x.T=l}}function im(t,n,e,a){var l=x.T;x.T=null;var i=E.p;try{E.p=8,lp(t,n,e,a)}finally{E.p=i,x.T=l}}function lp(t,n,e,a){if(ji){var l=ip(a);if(l===null)Qo(t,n,a,Zi,e),mg(t,a);else if(om(l,t,n,e,a))a.stopPropagation();else if(mg(t,a),n&4&&-1<sm.indexOf(t)){for(;l!==null;){var i=Ke(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ue(i.pendingLanes);if(s!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var p=1<<31-Pt(s);o.entanglements[1]|=p,s&=~p}An(i),(et&6)===0&&(xi=Ft()+500,fl(0))}}break;case 31:case 13:o=Te(i,2),o!==null&&Wt(o,i,2),vi(),ap(i,2)}if(i=ip(a),i===null&&Qo(t,n,a,Zi,e),i===l)break;l=i}l!==null&&a.stopPropagation()}else Qo(t,n,a,null,e)}}function ip(t){return t=ss(t),sp(t)}var Zi=null;function sp(t){if(Zi=null,t=Ve(t),t!==null){var n=L(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=P(n),t!==null)return t;t=null}else if(e===31){if(t=I(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Zi=t,null}function fg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qg()){case zp:return 2;case vp:return 8;case Ul:case Xg:return 32;case Np:return 268435456;default:return 32}default:return 32}}var op=!1,be=null,xe=null,ze=null,xl=new Map,zl=new Map,ve=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mg(t,n){switch(t){case"focusin":case"focusout":be=null;break;case"dragenter":case"dragleave":xe=null;break;case"mouseover":case"mouseout":ze=null;break;case"pointerover":case"pointerout":xl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(n.pointerId)}}function vl(t,n,e,a,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:n,domEventName:e,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Ke(n),n!==null&&cg(n)),t):(t.eventSystemFlags|=a,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function om(t,n,e,a,l){switch(n){case"focusin":return be=vl(be,t,n,e,a,l),!0;case"dragenter":return xe=vl(xe,t,n,e,a,l),!0;case"mouseover":return ze=vl(ze,t,n,e,a,l),!0;case"pointerover":var i=l.pointerId;return xl.set(i,vl(xl.get(i)||null,t,n,e,a,l)),!0;case"gotpointercapture":return i=l.pointerId,zl.set(i,vl(zl.get(i)||null,t,n,e,a,l)),!0}return!1}function ug(t){var n=Ve(t.target);if(n!==null){var e=L(n);if(e!==null){if(n=e.tag,n===13){if(n=P(e),n!==null){t.blockedOn=n,qp(t.priority,function(){gg(e)});return}}else if(n===31){if(n=I(e),n!==null){t.blockedOn=n,qp(t.priority,function(){gg(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oi(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=ip(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);is=a,e.target.dispatchEvent(a),is=null}else return n=Ke(e),n!==null&&cg(n),t.blockedOn=e,!1;n.shift()}return!0}function dg(t,n,e){Oi(t)&&e.delete(n)}function pm(){op=!1,be!==null&&Oi(be)&&(be=null),xe!==null&&Oi(xe)&&(xe=null),ze!==null&&Oi(ze)&&(ze=null),xl.forEach(dg),zl.forEach(dg)}function Hi(t,n){t.blockedOn===n&&(t.blockedOn=null,op||(op=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,pm)))}var Di=null;function yg(t){Di!==t&&(Di=t,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){Di===t&&(Di=null);for(var n=0;n<t.length;n+=3){var e=t[n],a=t[n+1],l=t[n+2];if(typeof a!="function"){if(sp(a||e)===null)continue;break}var i=Ke(e);i!==null&&(t.splice(n,3),n-=3,lo(i,{pending:!0,data:l,method:e.method,action:a},a,l))}}))}function qa(t){function n(p){return Hi(p,t)}be!==null&&Hi(be,t),xe!==null&&Hi(xe,t),ze!==null&&Hi(ze,t),xl.forEach(n),zl.forEach(n);for(var e=0;e<ve.length;e++){var a=ve[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ve.length&&(e=ve[0],e.blockedOn===null);)ug(e),e.blockedOn===null&&ve.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var l=e[a],i=e[a+1],s=l[Lt]||null;if(typeof i=="function")s||yg(e);else if(s){var o=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[Lt]||null)o=s.formAction;else if(sp(l)!==null)continue}else o=s.action;typeof o=="function"?e[a+1]=o:(e.splice(a,3),a-=3),yg(e)}}}function hg(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function pp(t){this._internalRoot=t}Ci.prototype.render=pp.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(d(409));var e=n.current,a=on();pg(e,a,t,n,null,null)},Ci.prototype.unmount=pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;pg(t.current,2,null,t,null,null),vi(),n[Xe]=null}};function Ci(t){this._internalRoot=t}Ci.prototype.unstable_scheduleHydration=function(t){if(t){var n=Mp();t={blockedOn:null,target:t,priority:n};for(var e=0;e<ve.length&&n!==0&&n<ve[e].priority;e++);ve.splice(e,0,t),e===0&&ug(t)}};var bg=B.version;if(bg!=="19.2.0")throw Error(d(527,bg,"19.2.0"));E.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=v(n),t=t!==null?H(t):null,t=t===null?null:t.stateNode,t};var rm={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{Aa=Yi.inject(rm),It=Yi}catch{}}return wl.createRoot=function(t,n){if(!Z(t))throw Error(d(299));var e=!1,a="",l=Ec,i=Uc,s=Mc;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=sg(t,1,!1,null,null,e,a,null,l,i,s,hg),t[Xe]=n.current,Lo(t),new pp(n)},wl.hydrateRoot=function(t,n,e){if(!Z(t))throw Error(d(299));var a=!1,l="",i=Ec,s=Uc,o=Mc,p=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.formState!==void 0&&(p=e.formState)),n=sg(t,1,!0,n,e??null,a,l,p,i,s,o,hg),n.context=og(null),e=n.current,a=on(),a=Fi(a),l=se(a),l.callback=null,oe(e,l,a),e=a,n.current.lanes=e,ka(n,e),An(n),t[Xe]=n.current,Lo(t),new Ci(n)},wl.version="19.2.0",wl}var Tg;function Cm(){if(Tg)return gp.exports;Tg=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(B){console.error(B)}}return h(),gp.exports=Dm(),gp.exports}var Ym=Cm();location.pathname!=="/gpma03/preview-20261117/"&&new URLSearchParams(location.search).has("page")&&history.replaceState(null,"","/gpma03/preview-20261117/"+location.search+location.hash);const kg=yp.aliases[location.pathname];if(kg){const h=new URL(kg,location.origin);for(const[B,_]of new URLSearchParams(location.search))h.searchParams.has(B)||h.searchParams.set(B,_);history.replaceState(null,"",h.pathname+h.search+location.hash)}const Li=new URLSearchParams(location.search);(Li.get("page")==="award-catalog"&&Li.get("section")==="excellence"||Li.get("page")==="application-form"&&Li.get("type")==="excellence")&&history.replaceState(null,"","/gpma03/preview-20261117/?page=award-catalog&section=science");const Bg=new URLSearchParams(location.search).get("page")==="standards"||!!Rm[location.pathname],Gg=!!(yp.pages[location.pathname+location.search]||yp.pages[location.pathname]),we=new URLSearchParams(location.search),Rg=we.get("page")==="downloads"||location.pathname==="/gpma03/preview-20261117/list-ba99d6c97a6442e8b0c8e4cc1403e83a.html",jg=we.get("page")==="party"||!!Tm[location.pathname];async function Lm(){const h=["member-login","member-register","member-center","member-join"].includes(we.get("page")),B=["application-catalog","award-catalog","application-form","applications","application-detail","member-join"].includes(we.get("page")),{App:_}=Bg?await xn(()=>import("./StandardsPage-qE4ov8lu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])):we.get("page")==="search"?await xn(()=>import("./SearchPage-v8X8TWZl.js"),__vite__mapDeps([12,13,2,3,1,4,6,14,15,16])):Gg?await xn(()=>import("./MigratedColumnPage-CExvC368.js"),__vite__mapDeps([17,1,2,3,4,5])):jg?await xn(()=>import("./PartyPage-Ce9BYbu-.js"),__vite__mapDeps([18,1,2,3,4,8,9,5,6,7,11])):we.get("page")==="member"?await xn(()=>import("./MemberShowcasePage-CzJCcx8S.js"),__vite__mapDeps([19,1,2,3,4,7,5,6,20,14,21])):B?await xn(()=>import("./ApplicationsPage-CJGh5MHI.js"),__vite__mapDeps([22,23,1,2,3,4,5,6,24,20,15,25])):h?await xn(()=>import("./MemberPage-XDYMyp6K.js"),__vite__mapDeps([26,27,1,2,3,4,5,24,20])):Rg?await xn(()=>import("./DownloadsPage-C2uxr79z.js"),__vite__mapDeps([28,23,1,2,3,4,5,6,27,15,29])):await xn(()=>import("./App-CQyYeP7u.js"),__vite__mapDeps([30,13,14,2,3,8,9,7,6,5]));!Bg&&we.get("page")!=="search"&&!Gg&&!jg&&we.get("page")!=="member"&&!Rg&&!h&&!B&&await xn(()=>Promise.resolve({}),__vite__mapDeps([31])),await xn(()=>Promise.resolve({}),__vite__mapDeps([32])),await xn(()=>Promise.resolve({}),__vite__mapDeps([33])),Ym.createRoot(document.getElementById("root")).render(Ut.jsxs(hm.StrictMode,{children:[Ut.jsx(_,{}),Ut.jsx(Am,{})]}))}Lm();export{Rm as a,Km as b,Jm as c,Xm as d,yp as e,Tm as f,Qm as g,Sg as h,Em as i,Ut as j,wm as k,Gm as n,Sl as p,S as r,Vm as s};
