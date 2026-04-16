(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ws(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Fe={},vr=[],nn=()=>{},cc=()=>!1,Ya=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Es=e=>e.startsWith("onUpdate:"),st=Object.assign,xs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},df=Object.prototype.hasOwnProperty,Le=(e,t)=>df.call(e,t),ue=Array.isArray,br=e=>ca(e)==="[object Map]",uc=e=>ca(e)==="[object Set]",lo=e=>ca(e)==="[object Date]",pe=e=>typeof e=="function",Ke=e=>typeof e=="string",Ht=e=>typeof e=="symbol",Se=e=>e!==null&&typeof e=="object",dc=e=>(Se(e)||pe(e))&&pe(e.then)&&pe(e.catch),fc=Object.prototype.toString,ca=e=>fc.call(e),ff=e=>ca(e).slice(8,-1),pc=e=>ca(e)==="[object Object]",Xa=e=>Ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ur=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ja=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},pf=/-\w/g,Lt=Ja(e=>e.replace(pf,t=>t.slice(1).toUpperCase())),mf=/\B([A-Z])/g,Bn=Ja(e=>e.replace(mf,"-$1").toLowerCase()),Za=Ja(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sa=Ja(e=>e?`on${Za(e)}`:""),Dn=(e,t)=>!Object.is(e,t),hi=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},mc=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},gf=e=>{const t=parseFloat(e);return isNaN(t)?e:t},hf=e=>{const t=Ke(e)?Number(e):NaN;return isNaN(t)?e:t};let co;const Qa=()=>co||(co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Un(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Ke(r)?_f(r):Un(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(Ke(e)||Se(e))return e}const yf=/;(?![^(]*\))/g,vf=/:([^]+)/,bf=/\/\*[^]*?\*\//g;function _f(e){const t={};return e.replace(bf,"").split(yf).forEach(n=>{if(n){const r=n.split(vf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xe(e){let t="";if(Ke(e))t=e;else if(ue(e))for(let n=0;n<e.length;n++){const r=Xe(e[n]);r&&(t+=r+" ")}else if(Se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ei(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ke(t)&&(e.class=Xe(t)),n&&(e.style=Un(n)),e}const kf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wf=ws(kf);function gc(e){return!!e||e===""}function Ef(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=As(e[r],t[r]);return n}function As(e,t){if(e===t)return!0;let n=lo(e),r=lo(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Ht(e),r=Ht(t),n||r)return e===t;if(n=ue(e),r=ue(t),n||r)return n&&r?Ef(e,t):!1;if(n=Se(e),r=Se(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const s in e){const o=e.hasOwnProperty(s),l=t.hasOwnProperty(s);if(o&&!l||!o&&l||!As(e[s],t[s]))return!1}}return String(e)===String(t)}const hc=e=>!!(e&&e.__v_isRef===!0),M=e=>Ke(e)?e:e==null?"":ue(e)||Se(e)&&(e.toString===fc||!pe(e.toString))?hc(e)?M(e.value):JSON.stringify(e,yc,2):String(e),yc=(e,t)=>hc(t)?yc(e,t.value):br(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a],i)=>(n[yi(r,i)+" =>"]=a,n),{})}:uc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>yi(n))}:Ht(t)?yi(t):Se(t)&&!ue(t)&&!pc(t)?String(t):t,yi=(e,t="")=>{var n;return Ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let bt;class vc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=bt,!t&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=bt;try{return bt=this,t()}finally{bt=n}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){this._on>0&&--this._on===0&&(bt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Ts(e){return new vc(e)}function bc(){return bt}function xf(e,t=!1){bt&&bt.cleanups.push(e)}let Be;const vi=new WeakSet;class _c{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vi.has(this)&&(vi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uo(this),Ec(this);const t=Be,n=Gt;Be=this,Gt=!0;try{return this.fn()}finally{xc(this),Be=t,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ps(t);this.deps=this.depsTail=void 0,uo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ji(this)&&this.run()}get dirty(){return ji(this)}}let kc=0,jr,Gr;function wc(e,t=!1){if(e.flags|=8,t){e.next=Gr,Gr=e;return}e.next=jr,jr=e}function Is(){kc++}function Cs(){if(--kc>0)return;if(Gr){let t=Gr;for(Gr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;jr;){let t=jr;for(jr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ec(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function xc(e){let t,n=e.depsTail,r=n;for(;r;){const a=r.prevDep;r.version===-1?(r===n&&(n=a),Ps(r),Af(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=a}e.deps=t,e.depsTail=n}function ji(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ac(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ac(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Xr)||(e.globalVersion=Xr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ji(e))))return;e.flags|=2;const t=e.dep,n=Be,r=Gt;Be=e,Gt=!0;try{Ec(e);const a=e.fn(e._value);(t.version===0||Dn(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{Be=n,Gt=r,xc(e),e.flags&=-3}}function Ps(e,t=!1){const{dep:n,prevSub:r,nextSub:a}=e;if(r&&(r.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ps(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Af(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Gt=!0;const Tc=[];function bn(){Tc.push(Gt),Gt=!1}function _n(){const e=Tc.pop();Gt=e===void 0?!0:e}function uo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Be;Be=void 0;try{t()}finally{Be=n}}}let Xr=0;class Tf{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ss{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Be||!Gt||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new Tf(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,Ic(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(t){this.version++,Xr++,this.notify(t)}notify(t){Is();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cs()}}}function Ic(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ic(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ma=new WeakMap,or=Symbol(""),Gi=Symbol(""),Jr=Symbol("");function _t(e,t,n){if(Gt&&Be){let r=Ma.get(e);r||Ma.set(e,r=new Map);let a=r.get(n);a||(r.set(n,a=new Ss),a.map=r,a.key=n),a.track()}}function hn(e,t,n,r,a,i){const s=Ma.get(e);if(!s){Xr++;return}const o=l=>{l&&l.trigger()};if(Is(),t==="clear")s.forEach(o);else{const l=ue(e),u=l&&Xa(n);if(l&&n==="length"){const c=Number(r);s.forEach((d,f)=>{(f==="length"||f===Jr||!Ht(f)&&f>=c)&&o(d)})}else switch((n!==void 0||s.has(void 0))&&o(s.get(n)),u&&o(s.get(Jr)),t){case"add":l?u&&o(s.get("length")):(o(s.get(or)),br(e)&&o(s.get(Gi)));break;case"delete":l||(o(s.get(or)),br(e)&&o(s.get(Gi)));break;case"set":br(e)&&o(s.get(or));break}}Cs()}function If(e,t){const n=Ma.get(e);return n&&n.get(t)}function fr(e){const t=Ie(e);return t===e?t:(_t(t,"iterate",Jr),Mt(e)?t:t.map(qt))}function ti(e){return _t(e=Ie(e),"iterate",Jr),e}function Nn(e,t){return kn(e)?xr(lr(e)?qt(t):t):qt(t)}const Cf={__proto__:null,[Symbol.iterator](){return bi(this,Symbol.iterator,e=>Nn(this,e))},concat(...e){return fr(this).concat(...e.map(t=>ue(t)?fr(t):t))},entries(){return bi(this,"entries",e=>(e[1]=Nn(this,e[1]),e))},every(e,t){return ln(this,"every",e,t,void 0,arguments)},filter(e,t){return ln(this,"filter",e,t,n=>n.map(r=>Nn(this,r)),arguments)},find(e,t){return ln(this,"find",e,t,n=>Nn(this,n),arguments)},findIndex(e,t){return ln(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ln(this,"findLast",e,t,n=>Nn(this,n),arguments)},findLastIndex(e,t){return ln(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ln(this,"forEach",e,t,void 0,arguments)},includes(...e){return _i(this,"includes",e)},indexOf(...e){return _i(this,"indexOf",e)},join(e){return fr(this).join(e)},lastIndexOf(...e){return _i(this,"lastIndexOf",e)},map(e,t){return ln(this,"map",e,t,void 0,arguments)},pop(){return Nr(this,"pop")},push(...e){return Nr(this,"push",e)},reduce(e,...t){return fo(this,"reduce",e,t)},reduceRight(e,...t){return fo(this,"reduceRight",e,t)},shift(){return Nr(this,"shift")},some(e,t){return ln(this,"some",e,t,void 0,arguments)},splice(...e){return Nr(this,"splice",e)},toReversed(){return fr(this).toReversed()},toSorted(e){return fr(this).toSorted(e)},toSpliced(...e){return fr(this).toSpliced(...e)},unshift(...e){return Nr(this,"unshift",e)},values(){return bi(this,"values",e=>Nn(this,e))}};function bi(e,t,n){const r=ti(e),a=r[t]();return r!==e&&!Mt(e)&&(a._next=a.next,a.next=()=>{const i=a._next();return i.done||(i.value=n(i.value)),i}),a}const Pf=Array.prototype;function ln(e,t,n,r,a,i){const s=ti(e),o=s!==e&&!Mt(e),l=s[t];if(l!==Pf[t]){const d=l.apply(e,i);return o?qt(d):d}let u=n;s!==e&&(o?u=function(d,f){return n.call(this,Nn(e,d),f,e)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,e)}));const c=l.call(s,u,r);return o&&a?a(c):c}function fo(e,t,n,r){const a=ti(e);let i=n;return a!==e&&(Mt(e)?n.length>3&&(i=function(s,o,l){return n.call(this,s,o,l,e)}):i=function(s,o,l){return n.call(this,s,Nn(e,o),l,e)}),a[t](i,...r)}function _i(e,t,n){const r=Ie(e);_t(r,"iterate",Jr);const a=r[t](...n);return(a===-1||a===!1)&&ni(n[0])?(n[0]=Ie(n[0]),r[t](...n)):a}function Nr(e,t,n=[]){bn(),Is();const r=Ie(e)[t].apply(e,n);return Cs(),_n(),r}const Sf=ws("__proto__,__v_isRef,__isVue"),Cc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ht));function Of(e){Ht(e)||(e=String(e));const t=Ie(this);return _t(t,"has",e),t.hasOwnProperty(e)}class Pc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Bf:Nc:i?Lc:Oc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=ue(t);if(!a){let l;if(s&&(l=Cf[n]))return l;if(n==="hasOwnProperty")return Of}const o=Reflect.get(t,n,Je(t)?t:r);if((Ht(n)?Cc.has(n):Sf(n))||(a||_t(t,"get",n),i))return o;if(Je(o)){const l=s&&Xa(n)?o:o.value;return a&&Se(l)?Hi(l):l}return Se(o)?a?Hi(o):$n(o):o}}class Sc extends Pc{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];const s=ue(t)&&Xa(n);if(!this._isShallow){const u=kn(i);if(!Mt(r)&&!kn(r)&&(i=Ie(i),r=Ie(r)),!s&&Je(i)&&!Je(r))return u||(i.value=r),!0}const o=s?Number(n)<t.length:Le(t,n),l=Reflect.set(t,n,r,Je(t)?t:a);return t===Ie(a)&&(o?Dn(r,i)&&hn(t,"set",n,r):hn(t,"add",n,r)),l}deleteProperty(t,n){const r=Le(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&hn(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Ht(n)||!Cc.has(n))&&_t(t,"has",n),r}ownKeys(t){return _t(t,"iterate",ue(t)?"length":or),Reflect.ownKeys(t)}}class Lf extends Pc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Nf=new Sc,Rf=new Lf,Mf=new Sc(!0);const Vi=e=>e,ba=e=>Reflect.getPrototypeOf(e);function Df(e,t,n){return function(...r){const a=this.__v_raw,i=Ie(a),s=br(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,u=a[e](...r),c=n?Vi:t?xr:qt;return!t&&_t(i,"iterate",l?Gi:or),st(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:o?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function _a(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function $f(e,t){const n={get(a){const i=this.__v_raw,s=Ie(i),o=Ie(a);e||(Dn(a,o)&&_t(s,"get",a),_t(s,"get",o));const{has:l}=ba(s),u=t?Vi:e?xr:qt;if(l.call(s,a))return u(i.get(a));if(l.call(s,o))return u(i.get(o));i!==s&&i.get(a)},get size(){const a=this.__v_raw;return!e&&_t(Ie(a),"iterate",or),a.size},has(a){const i=this.__v_raw,s=Ie(i),o=Ie(a);return e||(Dn(a,o)&&_t(s,"has",a),_t(s,"has",o)),a===o?i.has(a):i.has(a)||i.has(o)},forEach(a,i){const s=this,o=s.__v_raw,l=Ie(o),u=t?Vi:e?xr:qt;return!e&&_t(l,"iterate",or),o.forEach((c,d)=>a.call(i,u(c),u(d),s))}};return st(n,e?{add:_a("add"),set:_a("set"),delete:_a("delete"),clear:_a("clear")}:{add(a){!t&&!Mt(a)&&!kn(a)&&(a=Ie(a));const i=Ie(this);return ba(i).has.call(i,a)||(i.add(a),hn(i,"add",a,a)),this},set(a,i){!t&&!Mt(i)&&!kn(i)&&(i=Ie(i));const s=Ie(this),{has:o,get:l}=ba(s);let u=o.call(s,a);u||(a=Ie(a),u=o.call(s,a));const c=l.call(s,a);return s.set(a,i),u?Dn(i,c)&&hn(s,"set",a,i):hn(s,"add",a,i),this},delete(a){const i=Ie(this),{has:s,get:o}=ba(i);let l=s.call(i,a);l||(a=Ie(a),l=s.call(i,a)),o&&o.call(i,a);const u=i.delete(a);return l&&hn(i,"delete",a,void 0),u},clear(){const a=Ie(this),i=a.size!==0,s=a.clear();return i&&hn(a,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=Df(a,e,t)}),n}function Os(e,t){const n=$f(e,t);return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Le(n,a)&&a in r?n:r,a,i)}const zf={get:Os(!1,!1)},Ff={get:Os(!1,!0)},Wf={get:Os(!0,!1)};const Oc=new WeakMap,Lc=new WeakMap,Nc=new WeakMap,Bf=new WeakMap;function Uf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jf(e){return e.__v_skip||!Object.isExtensible(e)?0:Uf(ff(e))}function $n(e){return kn(e)?e:Ls(e,!1,Nf,zf,Oc)}function Rc(e){return Ls(e,!1,Mf,Ff,Lc)}function Hi(e){return Ls(e,!0,Rf,Wf,Nc)}function Ls(e,t,n,r,a){if(!Se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=jf(e);if(i===0)return e;const s=a.get(e);if(s)return s;const o=new Proxy(e,i===2?r:n);return a.set(e,o),o}function lr(e){return kn(e)?lr(e.__v_raw):!!(e&&e.__v_isReactive)}function kn(e){return!!(e&&e.__v_isReadonly)}function Mt(e){return!!(e&&e.__v_isShallow)}function ni(e){return e?!!e.__v_raw:!1}function Ie(e){const t=e&&e.__v_raw;return t?Ie(t):e}function Mc(e){return!Le(e,"__v_skip")&&Object.isExtensible(e)&&mc(e,"__v_skip",!0),e}const qt=e=>Se(e)?$n(e):e,xr=e=>Se(e)?Hi(e):e;function Je(e){return e?e.__v_isRef===!0:!1}function ve(e){return Dc(e,!1)}function ua(e){return Dc(e,!0)}function Dc(e,t){return Je(e)?e:new Gf(e,t)}class Gf{constructor(t,n){this.dep=new Ss,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ie(t),this._value=n?t:qt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Mt(t)||kn(t);t=r?t:Ie(t),Dn(t,n)&&(this._rawValue=t,this._value=r?t:qt(t),this.dep.trigger())}}function Vf(e){e.dep&&e.dep.trigger()}function p(e){return Je(e)?e.value:e}function Vt(e){return pe(e)?e():p(e)}const Hf={get:(e,t,n)=>t==="__v_raw"?e:p(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Je(a)&&!Je(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function $c(e){return lr(e)?e:new Proxy(e,Hf)}function zn(e){const t=ue(e)?new Array(e.length):{};for(const n in e)t[n]=zc(e,n);return t}class qf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=Ie(t);let a=!0,i=t;if(!ue(t)||!Xa(String(n)))do a=!ni(i)||Mt(i);while(a&&(i=i.__v_raw));this._shallow=a}get value(){let t=this._object[this._key];return this._shallow&&(t=p(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Je(this._raw[this._key])){const n=this._object[this._key];if(Je(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return If(this._raw,this._key)}}class Kf{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Yf(e,t,n){return Je(e)?e:pe(e)?new Kf(e):Se(e)&&arguments.length>1?zc(e,t,n):ve(e)}function zc(e,t,n){return new qf(e,t,n)}class Xf{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ss(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return wc(this,!0),!0}get value(){const t=this.dep.track();return Ac(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Jf(e,t,n=!1){let r,a;return pe(e)?r=e:(r=e.get,a=e.set),new Xf(r,a,n)}const ka={},Da=new WeakMap;let rr;function Zf(e,t=!1,n=rr){if(n){let r=Da.get(n);r||Da.set(n,r=[]),r.push(e)}}function Qf(e,t,n=Fe){const{immediate:r,deep:a,once:i,scheduler:s,augmentJob:o,call:l}=n,u=E=>a?E:Mt(E)||a===!1||a===0?yn(E,1):yn(E);let c,d,f,m,A=!1,x=!1;if(Je(e)?(d=()=>e.value,A=Mt(e)):lr(e)?(d=()=>u(e),A=!0):ue(e)?(x=!0,A=e.some(E=>lr(E)||Mt(E)),d=()=>e.map(E=>{if(Je(E))return E.value;if(lr(E))return u(E);if(pe(E))return l?l(E,2):E()})):pe(e)?t?d=l?()=>l(e,2):e:d=()=>{if(f){bn();try{f()}finally{_n()}}const E=rr;rr=c;try{return l?l(e,3,[m]):e(m)}finally{rr=E}}:d=nn,t&&a){const E=d,z=a===!0?1/0:a;d=()=>yn(E(),z)}const T=bc(),C=()=>{c.stop(),T&&T.active&&xs(T.effects,c)};if(i&&t){const E=t;t=(...z)=>{E(...z),C()}}let O=x?new Array(e.length).fill(ka):ka;const w=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(t){const z=c.run();if(a||A||(x?z.some((R,j)=>Dn(R,O[j])):Dn(z,O))){f&&f();const R=rr;rr=c;try{const j=[z,O===ka?void 0:x&&O[0]===ka?[]:O,m];O=z,l?l(t,3,j):t(...j)}finally{rr=R}}}else c.run()};return o&&o(w),c=new _c(d),c.scheduler=s?()=>s(w,!1):w,m=E=>Zf(E,!1,c),f=c.onStop=()=>{const E=Da.get(c);if(E){if(l)l(E,4);else for(const z of E)z();Da.delete(c)}},t?r?w(!0):O=c.run():s?s(w.bind(null,!0),!0):c.run(),C.pause=c.pause.bind(c),C.resume=c.resume.bind(c),C.stop=C,C}function yn(e,t=1/0,n){if(t<=0||!Se(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Je(e))yn(e.value,t,n);else if(ue(e))for(let r=0;r<e.length;r++)yn(e[r],t,n);else if(uc(e)||br(e))e.forEach(r=>{yn(r,t,n)});else if(pc(e)){for(const r in e)yn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&yn(e[r],t,n)}return e}function da(e,t,n,r){try{return r?e(...r):e()}catch(a){ri(a,t,n)}}function Kt(e,t,n,r){if(pe(e)){const a=da(e,t,n,r);return a&&dc(a)&&a.catch(i=>{ri(i,t,n)}),a}if(ue(e)){const a=[];for(let i=0;i<e.length;i++)a.push(Kt(e[i],t,n,r));return a}}function ri(e,t,n,r=!0){const a=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||Fe;if(t){let o=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}o=o.parent}if(i){bn(),da(i,null,10,[e,l,u]),_n();return}}ep(e,n,a,r,s)}function ep(e,t,n,r=!0,a=!1){if(a)throw e;console.error(e)}const Ct=[];let Zt=-1;const _r=[];let Rn=null,mr=0;const Fc=Promise.resolve();let $a=null;function sn(e){const t=$a||Fc;return e?t.then(this?e.bind(this):e):t}function tp(e){let t=Zt+1,n=Ct.length;for(;t<n;){const r=t+n>>>1,a=Ct[r],i=Zr(a);i<e||i===e&&a.flags&2?t=r+1:n=r}return t}function Ns(e){if(!(e.flags&1)){const t=Zr(e),n=Ct[Ct.length-1];!n||!(e.flags&2)&&t>=Zr(n)?Ct.push(e):Ct.splice(tp(t),0,e),e.flags|=1,Wc()}}function Wc(){$a||($a=Fc.then(Uc))}function np(e){ue(e)?_r.push(...e):Rn&&e.id===-1?Rn.splice(mr+1,0,e):e.flags&1||(_r.push(e),e.flags|=1),Wc()}function po(e,t,n=Zt+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Bc(e){if(_r.length){const t=[...new Set(_r)].sort((n,r)=>Zr(n)-Zr(r));if(_r.length=0,Rn){Rn.push(...t);return}for(Rn=t,mr=0;mr<Rn.length;mr++){const n=Rn[mr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rn=null,mr=0}}const Zr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Uc(e){try{for(Zt=0;Zt<Ct.length;Zt++){const t=Ct[Zt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),da(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Zt<Ct.length;Zt++){const t=Ct[Zt];t&&(t.flags&=-2)}Zt=-1,Ct.length=0,Bc(),$a=null,(Ct.length||_r.length)&&Uc()}}let mt=null,jc=null;function za(e){const t=mt;return mt=e,jc=e&&e.type.__scopeId||null,t}function _(e,t=mt,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ba(-1);const i=za(t);let s;try{s=e(...a)}finally{za(i),r._d&&Ba(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Pe(e,t){if(mt===null)return e;const n=li(mt),r=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[i,s,o,l=Fe]=t[a];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&yn(s),r.push({dir:i,instance:n,value:s,oldValue:void 0,arg:o,modifiers:l}))}return e}function Xn(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(bn(),Kt(l,n,8,[e.el,o,e,t]),_n())}}function kr(e,t){if(kt){let n=kt.provides;const r=kt.parent&&kt.parent.provides;r===n&&(n=kt.provides=Object.create(r)),n[e]=t}}function Dt(e,t,n=!1){const r=Pt();if(r||Er){let a=Er?Er._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return n&&pe(t)?t.call(r&&r.proxy):t}}const rp=Symbol.for("v-scx"),ap=()=>Dt(rp);function wn(e,t){return Rs(e,null,t)}function ct(e,t,n){return Rs(e,t,n)}function Rs(e,t,n=Fe){const{immediate:r,deep:a,flush:i,once:s}=n,o=st({},n),l=t&&r||!t&&i!=="post";let u;if(na){if(i==="sync"){const m=ap();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=nn,m.resume=nn,m.pause=nn,m}}const c=kt;o.call=(m,A,x)=>Kt(m,c,A,x);let d=!1;i==="post"?o.scheduler=m=>{vt(m,c&&c.suspense)}:i!=="sync"&&(d=!0,o.scheduler=(m,A)=>{A?m():Ns(m)}),o.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const f=Qf(e,t,o);return na&&(u?u.push(f):l&&f()),f}function ip(e,t,n){const r=this.proxy,a=Ke(e)?e.includes(".")?Gc(r,e):()=>r[e]:e.bind(r,r);let i;pe(t)?i=t:(i=t.handler,n=t);const s=ga(this),o=Rs(a,i.bind(r),n);return s(),o}function Gc(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}const Vc=Symbol("_vte"),Hc=e=>e.__isTeleport,Vr=e=>e&&(e.disabled||e.disabled===""),mo=e=>e&&(e.defer||e.defer===""),go=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ho=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,qi=(e,t)=>{const n=e&&e.to;return Ke(n)?t?t(n):null:n},qc={name:"Teleport",__isTeleport:!0,process(e,t,n,r,a,i,s,o,l,u){const{mc:c,pc:d,pbc:f,o:{insert:m,querySelector:A,createText:x,createComment:T}}=u,C=Vr(t.props);let{shapeFlag:O,children:w,dynamicChildren:E}=t;if(e==null){const z=t.el=x(""),R=t.anchor=x("");m(z,n,r),m(R,n,r);const j=(L,oe)=>{O&16&&c(w,L,oe,a,i,s,o,l)},$=()=>{const L=t.target=qi(t.props,A),oe=Ki(L,t,x,m);L&&(s!=="svg"&&go(L)?s="svg":s!=="mathml"&&ho(L)&&(s="mathml"),a&&a.isCE&&(a.ce._teleportTargets||(a.ce._teleportTargets=new Set)).add(L),C||(j(L,oe),Oa(t,!1)))};C&&(j(n,R),Oa(t,!0)),mo(t.props)?(t.el.__isMounted=!1,vt(()=>{$(),delete t.el.__isMounted},i)):$()}else{if(mo(t.props)&&e.el.__isMounted===!1){vt(()=>{qc.process(e,t,n,r,a,i,s,o,l,u)},i);return}t.el=e.el,t.targetStart=e.targetStart;const z=t.anchor=e.anchor,R=t.target=e.target,j=t.targetAnchor=e.targetAnchor,$=Vr(e.props),L=$?n:R,oe=$?z:j;if(s==="svg"||go(R)?s="svg":(s==="mathml"||ho(R))&&(s="mathml"),E?(f(e.dynamicChildren,E,L,a,i,s,o),Ws(e,t,!0)):l||d(e,t,L,oe,a,i,s,o,!1),C)$?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):wa(t,n,z,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const fe=t.target=qi(t.props,A);fe&&wa(t,fe,null,u,0)}else $&&wa(t,R,j,u,1);Oa(t,C)}},remove(e,t,n,{um:r,o:{remove:a}},i){const{shapeFlag:s,children:o,anchor:l,targetStart:u,targetAnchor:c,target:d,props:f}=e;if(d&&(a(u),a(c)),i&&a(l),s&16){const m=i||!Vr(f);for(let A=0;A<o.length;A++){const x=o[A];r(x,t,n,m,!!x.dynamicChildren)}}},move:wa,hydrate:sp};function wa(e,t,n,{o:{insert:r},m:a},i=2){i===0&&r(e.targetAnchor,t,n);const{el:s,anchor:o,shapeFlag:l,children:u,props:c}=e,d=i===2;if(d&&r(s,t,n),(!d||Vr(c))&&l&16)for(let f=0;f<u.length;f++)a(u[f],t,n,2);d&&r(o,t,n)}function sp(e,t,n,r,a,i,{o:{nextSibling:s,parentNode:o,querySelector:l,insert:u,createText:c}},d){function f(T,C){let O=C;for(;O;){if(O&&O.nodeType===8){if(O.data==="teleport start anchor")t.targetStart=O;else if(O.data==="teleport anchor"){t.targetAnchor=O,T._lpa=t.targetAnchor&&s(t.targetAnchor);break}}O=s(O)}}function m(T,C){C.anchor=d(s(T),C,o(T),n,r,a,i)}const A=t.target=qi(t.props,l),x=Vr(t.props);if(A){const T=A._lpa||A.firstChild;t.shapeFlag&16&&(x?(m(e,t),f(A,T),t.targetAnchor||Ki(A,t,c,u,o(e)===A?e:null)):(t.anchor=s(e),f(A,T),t.targetAnchor||Ki(A,t,c,u),d(T&&s(T),t,A,n,r,a,i))),Oa(t,x)}else x&&t.shapeFlag&16&&(m(e,t),t.targetStart=e,t.targetAnchor=s(e));return t.anchor&&s(t.anchor)}const op=qc;function Oa(e,t){const n=e.ctx;if(n&&n.ut){let r,a;for(t?(r=e.el,a=e.anchor):(r=e.targetStart,a=e.targetAnchor);r&&r!==a;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Ki(e,t,n,r,a=null){const i=t.targetStart=n(""),s=t.targetAnchor=n("");return i[Vc]=s,e&&(r(i,e,a),r(s,e,a)),s}const Qt=Symbol("_leaveCb"),Rr=Symbol("_enterCb");function lp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return An(()=>{e.isMounted=!0}),si(()=>{e.isUnmounting=!0}),e}const $t=[Function,Array],Kc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},Yc=e=>{const t=e.subTree;return t.component?Yc(t.component):t},cp={name:"BaseTransition",props:Kc,setup(e,{slots:t}){const n=Pt(),r=lp();return()=>{const a=t.default&&Zc(t.default(),!0);if(!a||!a.length)return;const i=Xc(a),s=Ie(e),{mode:o}=s;if(r.isLeaving)return ki(i);const l=yo(i);if(!l)return ki(i);let u=Yi(l,s,r,n,d=>u=d);l.type!==pt&&Qr(l,u);let c=n.subTree&&yo(n.subTree);if(c&&c.type!==pt&&!ar(c,l)&&Yc(n).type!==pt){let d=Yi(c,s,r,n);if(Qr(c,d),o==="out-in"&&l.type!==pt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},ki(i);o==="in-out"&&l.type!==pt?d.delayLeave=(f,m,A)=>{const x=Jc(r,c);x[String(c.key)]=c,f[Qt]=()=>{m(),f[Qt]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Xc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==pt){t=n;break}}return t}const up=cp;function Jc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Yi(e,t,n,r,a){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:A,onLeaveCancelled:x,onBeforeAppear:T,onAppear:C,onAfterAppear:O,onAppearCancelled:w}=t,E=String(e.key),z=Jc(n,e),R=(L,oe)=>{L&&Kt(L,r,9,oe)},j=(L,oe)=>{const fe=oe[1];R(L,oe),ue(L)?L.every(V=>V.length<=1)&&fe():L.length<=1&&fe()},$={mode:s,persisted:o,beforeEnter(L){let oe=l;if(!n.isMounted)if(i)oe=T||l;else return;L[Qt]&&L[Qt](!0);const fe=z[E];fe&&ar(e,fe)&&fe.el[Qt]&&fe.el[Qt](),R(oe,[L])},enter(L){let oe=u,fe=c,V=d;if(!n.isMounted)if(i)oe=C||u,fe=O||c,V=w||d;else return;let ce=!1;L[Rr]=We=>{ce||(ce=!0,We?R(V,[L]):R(fe,[L]),$.delayedLeave&&$.delayedLeave(),L[Rr]=void 0)};const Me=L[Rr].bind(null,!1);oe?j(oe,[L,Me]):Me()},leave(L,oe){const fe=String(e.key);if(L[Rr]&&L[Rr](!0),n.isUnmounting)return oe();R(f,[L]);let V=!1;L[Qt]=Me=>{V||(V=!0,oe(),Me?R(x,[L]):R(A,[L]),L[Qt]=void 0,z[fe]===e&&delete z[fe])};const ce=L[Qt].bind(null,!1);z[fe]=e,m?j(m,[L,ce]):ce()},clone(L){const oe=Yi(L,t,n,r,a);return a&&a(oe),oe}};return $}function ki(e){if(ai(e))return e=En(e),e.children=null,e}function yo(e){if(!ai(e))return Hc(e.type)&&e.children?Xc(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&pe(n.default))return n.default()}}function Qr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Qr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Zc(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let s=e[i];const o=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===_e?(s.patchFlag&128&&a++,r=r.concat(Zc(s.children,t,o))):(t||s.type!==pt)&&r.push(o!=null?En(s,{key:o}):s)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Te(e,t){return pe(e)?st({name:e.name},t,{setup:e}):e}function dp(){const e=Pt();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Qc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function vo(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Fa=new WeakMap;function Hr(e,t,n,r,a=!1){if(ue(e)){e.forEach((x,T)=>Hr(x,t&&(ue(t)?t[T]:t),n,r,a));return}if(wr(r)&&!a){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Hr(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?li(r.component):r.el,s=a?null:i,{i:o,r:l}=e,u=t&&t.r,c=o.refs===Fe?o.refs={}:o.refs,d=o.setupState,f=Ie(d),m=d===Fe?cc:x=>vo(c,x)?!1:Le(f,x),A=(x,T)=>!(T&&vo(c,T));if(u!=null&&u!==l){if(bo(t),Ke(u))c[u]=null,m(u)&&(d[u]=null);else if(Je(u)){const x=t;A(u,x.k)&&(u.value=null),x.k&&(c[x.k]=null)}}if(pe(l))da(l,o,12,[s,c]);else{const x=Ke(l),T=Je(l);if(x||T){const C=()=>{if(e.f){const O=x?m(l)?d[l]:c[l]:A()||!e.k?l.value:c[e.k];if(a)ue(O)&&xs(O,i);else if(ue(O))O.includes(i)||O.push(i);else if(x)c[l]=[i],m(l)&&(d[l]=c[l]);else{const w=[i];A(l,e.k)&&(l.value=w),e.k&&(c[e.k]=w)}}else x?(c[l]=s,m(l)&&(d[l]=s)):T&&(A(l,e.k)&&(l.value=s),e.k&&(c[e.k]=s))};if(s){const O=()=>{C(),Fa.delete(e)};O.id=-1,Fa.set(e,O),vt(O,n)}else bo(e),C()}}}function bo(e){const t=Fa.get(e);t&&(t.flags|=8,Fa.delete(e))}Qa().requestIdleCallback;Qa().cancelIdleCallback;const wr=e=>!!e.type.__asyncLoader,ai=e=>e.type.__isKeepAlive;function fp(e,t){eu(e,"a",t)}function pp(e,t){eu(e,"da",t)}function eu(e,t,n=kt){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ii(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ai(a.parent.vnode)&&mp(r,t,n,a),a=a.parent}}function mp(e,t,n,r){const a=ii(t,e,r,!0);cr(()=>{xs(r[t],a)},n)}function ii(e,t,n=kt,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{bn();const o=ga(n),l=Kt(t,n,e,s);return o(),_n(),l});return r?a.unshift(i):a.push(i),i}}const xn=e=>(t,n=kt)=>{(!na||e==="sp")&&ii(e,(...r)=>t(...r),n)},tu=xn("bm"),An=xn("m"),gp=xn("bu"),nu=xn("u"),si=xn("bum"),cr=xn("um"),hp=xn("sp"),yp=xn("rtg"),vp=xn("rtc");function bp(e,t=kt){ii("ec",e,t)}const Ms="components",_p="directives";function Ds(e,t){return $s(Ms,e,!0,t)||e}const ru=Symbol.for("v-ndc");function Fn(e){return Ke(e)?$s(Ms,e,!1)||e:e||ru}function fa(e){return $s(_p,e)}function $s(e,t,n=!0,r=!1){const a=mt||kt;if(a){const i=a.type;if(e===Ms){const o=nm(i,!1);if(o&&(o===t||o===Lt(t)||o===Za(Lt(t))))return i}const s=_o(a[e]||i[e],t)||_o(a.appContext[e],t);return!s&&r?i:s}}function _o(e,t){return e&&(e[t]||e[Lt(t)]||e[Za(Lt(t))])}function je(e,t,n,r){let a;const i=n,s=ue(e);if(s||Ke(e)){const o=s&&lr(e);let l=!1,u=!1;o&&(l=!Mt(e),u=kn(e),e=ti(e)),a=new Array(e.length);for(let c=0,d=e.length;c<d;c++)a[c]=t(l?u?xr(qt(e[c])):qt(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i)}else if(Se(e))if(e[Symbol.iterator])a=Array.from(e,(o,l)=>t(o,l,void 0,i));else{const o=Object.keys(e);a=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];a[l]=t(e[c],c,l,i)}}else a=[];return a}function he(e,t,n={},r,a){if(mt.ce||mt.parent&&wr(mt.parent)&&mt.parent.ce){const u=Object.keys(n).length>0;return t!=="default"&&(n.name=t),D(),ee(_e,null,[k("slot",n,r)],u?-2:64)}let i=e[t];i&&i._c&&(i._d=!1),D();const s=i&&au(i(n)),o=n.key||s&&s.key,l=ee(_e,{key:(o&&!Ht(o)?o:`_${t}`)+(!s&&r?"_fb":"")},s||[],s&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function au(e){return e.some(t=>ta(t)?!(t.type===pt||t.type===_e&&!au(t.children)):!0)?e:null}const Xi=e=>e?Eu(e)?li(e):Xi(e.parent):null,qr=st(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xi(e.parent),$root:e=>Xi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>su(e),$forceUpdate:e=>e.f||(e.f=()=>{Ns(e.update)}),$nextTick:e=>e.n||(e.n=sn.bind(e.proxy)),$watch:e=>ip.bind(e)}),wi=(e,t)=>e!==Fe&&!e.__isScriptSetup&&Le(e,t),kp={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;if(t[0]!=="$"){const f=s[t];if(f!==void 0)switch(f){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(wi(r,t))return s[t]=1,r[t];if(a!==Fe&&Le(a,t))return s[t]=2,a[t];if(Le(i,t))return s[t]=3,i[t];if(n!==Fe&&Le(n,t))return s[t]=4,n[t];Ji&&(s[t]=0)}}const u=qr[t];let c,d;if(u)return t==="$attrs"&&_t(e.attrs,"get",""),u(e);if((c=o.__cssModules)&&(c=c[t]))return c;if(n!==Fe&&Le(n,t))return s[t]=4,n[t];if(d=l.config.globalProperties,Le(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return wi(a,t)?(a[t]=n,!0):r!==Fe&&Le(r,t)?(r[t]=n,!0):Le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,props:i,type:s}},o){let l;return!!(n[o]||e!==Fe&&o[0]!=="$"&&Le(e,o)||wi(t,o)||Le(i,o)||Le(r,o)||Le(qr,o)||Le(a.config.globalProperties,o)||(l=s.__cssModules)&&l[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Le(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ko(e){return ue(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ji=!0;function wp(e){const t=su(e),n=e.proxy,r=e.ctx;Ji=!1,t.beforeCreate&&wo(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:m,updated:A,activated:x,deactivated:T,beforeDestroy:C,beforeUnmount:O,destroyed:w,unmounted:E,render:z,renderTracked:R,renderTriggered:j,errorCaptured:$,serverPrefetch:L,expose:oe,inheritAttrs:fe,components:V,directives:ce,filters:Me}=t;if(u&&Ep(u,r,null),s)for(const be in s){const ke=s[be];pe(ke)&&(r[be]=ke.bind(n))}if(a){const be=a.call(n,n);Se(be)&&(e.data=$n(be))}if(Ji=!0,i)for(const be in i){const ke=i[be],nt=pe(ke)?ke.bind(n,n):pe(ke.get)?ke.get.bind(n,n):nn,ne=!pe(ke)&&pe(ke.set)?ke.set.bind(n):nn,Ge=se({get:nt,set:ne});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ve=>Ge.value=Ve})}if(o)for(const be in o)iu(o[be],r,n,be);if(l){const be=pe(l)?l.call(n):l;Reflect.ownKeys(be).forEach(ke=>{kr(ke,be[ke])})}c&&wo(c,e,"c");function ye(be,ke){ue(ke)?ke.forEach(nt=>be(nt.bind(n))):ke&&be(ke.bind(n))}if(ye(tu,d),ye(An,f),ye(gp,m),ye(nu,A),ye(fp,x),ye(pp,T),ye(bp,$),ye(vp,R),ye(yp,j),ye(si,O),ye(cr,E),ye(hp,L),ue(oe))if(oe.length){const be=e.exposed||(e.exposed={});oe.forEach(ke=>{Object.defineProperty(be,ke,{get:()=>n[ke],set:nt=>n[ke]=nt,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===nn&&(e.render=z),fe!=null&&(e.inheritAttrs=fe),V&&(e.components=V),ce&&(e.directives=ce),L&&Qc(e)}function Ep(e,t,n=nn){ue(e)&&(e=Zi(e));for(const r in e){const a=e[r];let i;Se(a)?"default"in a?i=Dt(a.from||r,a.default,!0):i=Dt(a.from||r):i=Dt(a),Je(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function wo(e,t,n){Kt(ue(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function iu(e,t,n,r){let a=r.includes(".")?Gc(n,r):()=>n[r];if(Ke(e)){const i=t[e];pe(i)&&ct(a,i)}else if(pe(e))ct(a,e.bind(n));else if(Se(e))if(ue(e))e.forEach(i=>iu(i,t,n,r));else{const i=pe(e.handler)?e.handler.bind(n):t[e.handler];pe(i)&&ct(a,i,e)}}function su(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Wa(l,u,s,!0)),Wa(l,t,s)),Se(t)&&i.set(t,l),l}function Wa(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Wa(e,i,n,!0),a&&a.forEach(s=>Wa(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=xp[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const xp={data:Eo,props:xo,emits:xo,methods:Br,computed:Br,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Br,directives:Br,watch:Tp,provide:Eo,inject:Ap};function Eo(e,t){return t?e?function(){return st(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function Ap(e,t){return Br(Zi(e),Zi(t))}function Zi(e){if(ue(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function At(e,t){return e?[...new Set([].concat(e,t))]:t}function Br(e,t){return e?st(Object.create(null),e,t):t}function xo(e,t){return e?ue(e)&&ue(t)?[...new Set([...e,...t])]:st(Object.create(null),ko(e),ko(t??{})):t}function Tp(e,t){if(!e)return t;if(!t)return e;const n=st(Object.create(null),e);for(const r in t)n[r]=At(e[r],t[r]);return n}function ou(){return{app:null,config:{isNativeTag:cc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ip=0;function Cp(e,t){return function(r,a=null){pe(r)||(r=st({},r)),a!=null&&!Se(a)&&(a=null);const i=ou(),s=new WeakSet,o=[];let l=!1;const u=i.app={_uid:Ip++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:am,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&pe(c.install)?(s.add(c),c.install(u,...d)):pe(c)&&(s.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,f){if(!l){const m=u._ceVNode||k(r,a);return m.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(m,c,f),l=!0,u._container=c,c.__vue_app__=u,li(m.component)}},onUnmount(c){o.push(c)},unmount(){l&&(Kt(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=Er;Er=u;try{return c()}finally{Er=d}}};return u}}let Er=null;const Pp=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Lt(t)}Modifiers`]||e[`${Bn(t)}Modifiers`];function Sp(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Fe;let a=n;const i=t.startsWith("update:"),s=i&&Pp(r,t.slice(7));s&&(s.trim&&(a=n.map(c=>Ke(c)?c.trim():c)),s.number&&(a=n.map(gf)));let o,l=r[o=Sa(t)]||r[o=Sa(Lt(t))];!l&&i&&(l=r[o=Sa(Bn(t))]),l&&Kt(l,e,6,a);const u=r[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Kt(u,e,6,a)}}const Op=new WeakMap;function lu(e,t,n=!1){const r=n?Op:t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!pe(e)){const l=u=>{const c=lu(u,t,!0);c&&(o=!0,st(s,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(Se(e)&&r.set(e,null),null):(ue(i)?i.forEach(l=>s[l]=null):st(s,i),Se(e)&&r.set(e,s),s)}function oi(e,t){return!e||!Ya(t)?!1:(t=t.slice(2).replace(/Once$/,""),Le(e,t[0].toLowerCase()+t.slice(1))||Le(e,Bn(t))||Le(e,t))}function Ao(e){const{type:t,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:s,attrs:o,emit:l,render:u,renderCache:c,props:d,data:f,setupState:m,ctx:A,inheritAttrs:x}=e,T=za(e);let C,O;try{if(n.shapeFlag&4){const E=a||r,z=E;C=en(u.call(z,E,c,d,m,f,A)),O=o}else{const E=t;C=en(E.length>1?E(d,{attrs:o,slots:s,emit:l}):E(d,null)),O=t.props?o:Lp(o)}}catch(E){Kr.length=0,ri(E,e,1),C=k(pt)}let w=C;if(O&&x!==!1){const E=Object.keys(O),{shapeFlag:z}=w;E.length&&z&7&&(i&&E.some(Es)&&(O=Np(O,i)),w=En(w,O,!1,!0))}return n.dirs&&(w=En(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Qr(w,n.transition),C=w,za(T),C}const Lp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ya(n))&&((t||(t={}))[n]=e[n]);return t},Np=(e,t)=>{const n={};for(const r in e)(!Es(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Rp(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?To(r,s,u):!!s;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(cu(s,r,f)&&!oi(u,f))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?To(r,s,u):!0:!!s;return!1}function To(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(cu(t,e,i)&&!oi(n,i))return!0}return!1}function cu(e,t,n){const r=e[n],a=t[n];return n==="style"&&Se(r)&&Se(a)?!As(r,a):r!==a}function Mp({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const uu={},du=()=>Object.create(uu),fu=e=>Object.getPrototypeOf(e)===uu;function Dp(e,t,n,r=!1){const a={},i=du();e.propsDefaults=Object.create(null),pu(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Rc(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function $p(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=Ie(a),[l]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(oi(e.emitsOptions,f))continue;const m=t[f];if(l)if(Le(i,f))m!==i[f]&&(i[f]=m,u=!0);else{const A=Lt(f);a[A]=Qi(l,o,A,m,e,!1)}else m!==i[f]&&(i[f]=m,u=!0)}}}else{pu(e,t,a,i)&&(u=!0);let c;for(const d in o)(!t||!Le(t,d)&&((c=Bn(d))===d||!Le(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Qi(l,o,d,void 0,e,!0)):delete a[d]);if(i!==o)for(const d in i)(!t||!Le(t,d))&&(delete i[d],u=!0)}u&&hn(e.attrs,"set","")}function pu(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(Ur(l))continue;const u=t[l];let c;a&&Le(a,c=Lt(l))?!i||!i.includes(c)?n[c]=u:(o||(o={}))[c]=u:oi(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,s=!0)}if(i){const l=Ie(n),u=o||Fe;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Qi(a,l,d,u[d],e,!Le(u,d))}}return s}function Qi(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=Le(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&pe(l)){const{propsDefaults:u}=a;if(n in u)r=u[n];else{const c=ga(a);r=u[n]=l.call(null,t),c()}}else r=l;a.ce&&a.ce._setProp(n,r)}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Bn(n))&&(r=!0))}return r}const zp=new WeakMap;function mu(e,t,n=!1){const r=n?zp:t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!pe(e)){const c=d=>{l=!0;const[f,m]=mu(d,t,!0);st(s,f),m&&o.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return Se(e)&&r.set(e,vr),vr;if(ue(i))for(let c=0;c<i.length;c++){const d=Lt(i[c]);Io(d)&&(s[d]=Fe)}else if(i)for(const c in i){const d=Lt(c);if(Io(d)){const f=i[c],m=s[d]=ue(f)||pe(f)?{type:f}:st({},f),A=m.type;let x=!1,T=!0;if(ue(A))for(let C=0;C<A.length;++C){const O=A[C],w=pe(O)&&O.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(T=!1)}else x=pe(A)&&A.name==="Boolean";m[0]=x,m[1]=T,(x||Le(m,"default"))&&o.push(d)}}const u=[s,o];return Se(e)&&r.set(e,u),u}function Io(e){return e[0]!=="$"&&!Ur(e)}const zs=e=>e==="_"||e==="_ctx"||e==="$stable",Fs=e=>ue(e)?e.map(en):[en(e)],Fp=(e,t,n)=>{if(t._n)return t;const r=_((...a)=>Fs(t(...a)),n);return r._c=!1,r},gu=(e,t,n)=>{const r=e._ctx;for(const a in e){if(zs(a))continue;const i=e[a];if(pe(i))t[a]=Fp(a,i,r);else if(i!=null){const s=Fs(i);t[a]=()=>s}}},hu=(e,t)=>{const n=Fs(t);e.slots.default=()=>n},yu=(e,t,n)=>{for(const r in t)(n||!zs(r))&&(e[r]=t[r])},Wp=(e,t,n)=>{const r=e.slots=du();if(e.vnode.shapeFlag&32){const a=t._;a?(yu(r,t,n),n&&mc(r,"_",a,!0)):gu(t,r)}else t&&hu(e,t)},Bp=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=Fe;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:yu(a,t,n):(i=!t.$stable,gu(t,a)),s=t}else t&&(hu(e,t),s={default:1});if(i)for(const o in a)!zs(o)&&s[o]==null&&delete a[o]},vt=Hp;function Up(e){return jp(e)}function jp(e,t){const n=Qa();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:m=nn,insertStaticContent:A}=e,x=(y,b,v,N=null,G=null,U=null,Y=void 0,K=null,g=!!b.dynamicChildren)=>{if(y===b)return;y&&!ar(y,b)&&(N=B(y),Ve(y,G,U,!0),y=null),b.patchFlag===-2&&(g=!1,b.dynamicChildren=null);const{type:h,ref:S,shapeFlag:F}=b;switch(h){case pa:T(y,b,v,N);break;case pt:C(y,b,v,N);break;case xi:y==null&&O(b,v,N,Y);break;case _e:V(y,b,v,N,G,U,Y,K,g);break;default:F&1?z(y,b,v,N,G,U,Y,K,g):F&6?ce(y,b,v,N,G,U,Y,K,g):(F&64||F&128)&&h.process(y,b,v,N,G,U,Y,K,g,ae)}S!=null&&G?Hr(S,y&&y.ref,U,b||y,!b):S==null&&y&&y.ref!=null&&Hr(y.ref,null,U,y,!0)},T=(y,b,v,N)=>{if(y==null)r(b.el=o(b.children),v,N);else{const G=b.el=y.el;b.children!==y.children&&u(G,b.children)}},C=(y,b,v,N)=>{y==null?r(b.el=l(b.children||""),v,N):b.el=y.el},O=(y,b,v,N)=>{[y.el,y.anchor]=A(y.children,b,v,N,y.el,y.anchor)},w=({el:y,anchor:b},v,N)=>{let G;for(;y&&y!==b;)G=f(y),r(y,v,N),y=G;r(b,v,N)},E=({el:y,anchor:b})=>{let v;for(;y&&y!==b;)v=f(y),a(y),y=v;a(b)},z=(y,b,v,N,G,U,Y,K,g)=>{if(b.type==="svg"?Y="svg":b.type==="math"&&(Y="mathml"),y==null)R(b,v,N,G,U,Y,K,g);else{const h=y.el&&y.el._isVueCE?y.el:null;try{h&&h._beginPatch(),L(y,b,G,U,Y,K,g)}finally{h&&h._endPatch()}}},R=(y,b,v,N,G,U,Y,K)=>{let g,h;const{props:S,shapeFlag:F,transition:X,dirs:q}=y;if(g=y.el=s(y.type,U,S&&S.is,S),F&8?c(g,y.children):F&16&&$(y.children,g,null,N,G,Ei(y,U),Y,K),q&&Xn(y,null,N,"created"),j(g,y,y.scopeId,Y,N),S){for(const W in S)W!=="value"&&!Ur(W)&&i(g,W,null,S[W],U,N);"value"in S&&i(g,"value",null,S.value,U),(h=S.onVnodeBeforeMount)&&Jt(h,N,y)}q&&Xn(y,null,N,"beforeMount");const P=Gp(G,X);P&&X.beforeEnter(g),r(g,b,v),((h=S&&S.onVnodeMounted)||P||q)&&vt(()=>{h&&Jt(h,N,y),P&&X.enter(g),q&&Xn(y,null,N,"mounted")},G)},j=(y,b,v,N,G)=>{if(v&&m(y,v),N)for(let U=0;U<N.length;U++)m(y,N[U]);if(G){let U=G.subTree;if(b===U||_u(U.type)&&(U.ssContent===b||U.ssFallback===b)){const Y=G.vnode;j(y,Y,Y.scopeId,Y.slotScopeIds,G.parent)}}},$=(y,b,v,N,G,U,Y,K,g=0)=>{for(let h=g;h<y.length;h++){const S=y[h]=K?gn(y[h]):en(y[h]);x(null,S,b,v,N,G,U,Y,K)}},L=(y,b,v,N,G,U,Y)=>{const K=b.el=y.el;let{patchFlag:g,dynamicChildren:h,dirs:S}=b;g|=y.patchFlag&16;const F=y.props||Fe,X=b.props||Fe;let q;if(v&&Jn(v,!1),(q=X.onVnodeBeforeUpdate)&&Jt(q,v,b,y),S&&Xn(b,y,v,"beforeUpdate"),v&&Jn(v,!0),(F.innerHTML&&X.innerHTML==null||F.textContent&&X.textContent==null)&&c(K,""),h?oe(y.dynamicChildren,h,K,v,N,Ei(b,G),U):Y||ke(y,b,K,null,v,N,Ei(b,G),U,!1),g>0){if(g&16)fe(K,F,X,v,G);else if(g&2&&F.class!==X.class&&i(K,"class",null,X.class,G),g&4&&i(K,"style",F.style,X.style,G),g&8){const P=b.dynamicProps;for(let W=0;W<P.length;W++){const le=P[W],xe=F[le],Ye=X[le];(Ye!==xe||le==="value")&&i(K,le,xe,Ye,G,v)}}g&1&&y.children!==b.children&&c(K,b.children)}else!Y&&h==null&&fe(K,F,X,v,G);((q=X.onVnodeUpdated)||S)&&vt(()=>{q&&Jt(q,v,b,y),S&&Xn(b,y,v,"updated")},N)},oe=(y,b,v,N,G,U,Y)=>{for(let K=0;K<b.length;K++){const g=y[K],h=b[K],S=g.el&&(g.type===_e||!ar(g,h)||g.shapeFlag&198)?d(g.el):v;x(g,h,S,null,N,G,U,Y,!0)}},fe=(y,b,v,N,G)=>{if(b!==v){if(b!==Fe)for(const U in b)!Ur(U)&&!(U in v)&&i(y,U,b[U],null,G,N);for(const U in v){if(Ur(U))continue;const Y=v[U],K=b[U];Y!==K&&U!=="value"&&i(y,U,K,Y,G,N)}"value"in v&&i(y,"value",b.value,v.value,G)}},V=(y,b,v,N,G,U,Y,K,g)=>{const h=b.el=y?y.el:o(""),S=b.anchor=y?y.anchor:o("");let{patchFlag:F,dynamicChildren:X,slotScopeIds:q}=b;q&&(K=K?K.concat(q):q),y==null?(r(h,v,N),r(S,v,N),$(b.children||[],v,S,G,U,Y,K,g)):F>0&&F&64&&X&&y.dynamicChildren&&y.dynamicChildren.length===X.length?(oe(y.dynamicChildren,X,v,G,U,Y,K),(b.key!=null||G&&b===G.subTree)&&Ws(y,b,!0)):ke(y,b,v,S,G,U,Y,K,g)},ce=(y,b,v,N,G,U,Y,K,g)=>{b.slotScopeIds=K,y==null?b.shapeFlag&512?G.ctx.activate(b,v,N,Y,g):Me(b,v,N,G,U,Y,g):We(y,b,g)},Me=(y,b,v,N,G,U,Y)=>{const K=y.component=Jp(y,N,G);if(ai(y)&&(K.ctx.renderer=ae),Zp(K,!1,Y),K.asyncDep){if(G&&G.registerDep(K,ye,Y),!y.el){const g=K.subTree=k(pt);C(null,g,b,v),y.placeholder=g.el}}else ye(K,y,b,v,G,U,Y)},We=(y,b,v)=>{const N=b.component=y.component;if(Rp(y,b,v))if(N.asyncDep&&!N.asyncResolved){be(N,b,v);return}else N.next=b,N.update();else b.el=y.el,N.vnode=b},ye=(y,b,v,N,G,U,Y)=>{const K=()=>{if(y.isMounted){let{next:F,bu:X,u:q,parent:P,vnode:W}=y;{const ft=vu(y);if(ft){F&&(F.el=W.el,be(y,F,Y)),ft.asyncDep.then(()=>{vt(()=>{y.isUnmounted||h()},G)});return}}let le=F,xe;Jn(y,!1),F?(F.el=W.el,be(y,F,Y)):F=W,X&&hi(X),(xe=F.props&&F.props.onVnodeBeforeUpdate)&&Jt(xe,P,F,W),Jn(y,!0);const Ye=Ao(y),xt=y.subTree;y.subTree=Ye,x(xt,Ye,d(xt.el),B(xt),y,G,U),F.el=Ye.el,le===null&&Mp(y,Ye.el),q&&vt(q,G),(xe=F.props&&F.props.onVnodeUpdated)&&vt(()=>Jt(xe,P,F,W),G)}else{let F;const{el:X,props:q}=b,{bm:P,m:W,parent:le,root:xe,type:Ye}=y,xt=wr(b);Jn(y,!1),P&&hi(P),!xt&&(F=q&&q.onVnodeBeforeMount)&&Jt(F,le,b),Jn(y,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(Ye);const ft=y.subTree=Ao(y);x(null,ft,v,N,y,G,U),b.el=ft.el}if(W&&vt(W,G),!xt&&(F=q&&q.onVnodeMounted)){const ft=b;vt(()=>Jt(F,le,ft),G)}(b.shapeFlag&256||le&&wr(le.vnode)&&le.vnode.shapeFlag&256)&&y.a&&vt(y.a,G),y.isMounted=!0,b=v=N=null}};y.scope.on();const g=y.effect=new _c(K);y.scope.off();const h=y.update=g.run.bind(g),S=y.job=g.runIfDirty.bind(g);S.i=y,S.id=y.uid,g.scheduler=()=>Ns(S),Jn(y,!0),h()},be=(y,b,v)=>{b.component=y;const N=y.vnode.props;y.vnode=b,y.next=null,$p(y,b.props,N,v),Bp(y,b.children,v),bn(),po(y),_n()},ke=(y,b,v,N,G,U,Y,K,g=!1)=>{const h=y&&y.children,S=y?y.shapeFlag:0,F=b.children,{patchFlag:X,shapeFlag:q}=b;if(X>0){if(X&128){ne(h,F,v,N,G,U,Y,K,g);return}else if(X&256){nt(h,F,v,N,G,U,Y,K,g);return}}q&8?(S&16&&Ae(h,G,U),F!==h&&c(v,F)):S&16?q&16?ne(h,F,v,N,G,U,Y,K,g):Ae(h,G,U,!0):(S&8&&c(v,""),q&16&&$(F,v,N,G,U,Y,K,g))},nt=(y,b,v,N,G,U,Y,K,g)=>{y=y||vr,b=b||vr;const h=y.length,S=b.length,F=Math.min(h,S);let X;for(X=0;X<F;X++){const q=b[X]=g?gn(b[X]):en(b[X]);x(y[X],q,v,null,G,U,Y,K,g)}h>S?Ae(y,G,U,!0,!1,F):$(b,v,N,G,U,Y,K,g,F)},ne=(y,b,v,N,G,U,Y,K,g)=>{let h=0;const S=b.length;let F=y.length-1,X=S-1;for(;h<=F&&h<=X;){const q=y[h],P=b[h]=g?gn(b[h]):en(b[h]);if(ar(q,P))x(q,P,v,null,G,U,Y,K,g);else break;h++}for(;h<=F&&h<=X;){const q=y[F],P=b[X]=g?gn(b[X]):en(b[X]);if(ar(q,P))x(q,P,v,null,G,U,Y,K,g);else break;F--,X--}if(h>F){if(h<=X){const q=X+1,P=q<S?b[q].el:N;for(;h<=X;)x(null,b[h]=g?gn(b[h]):en(b[h]),v,P,G,U,Y,K,g),h++}}else if(h>X)for(;h<=F;)Ve(y[h],G,U,!0),h++;else{const q=h,P=h,W=new Map;for(h=P;h<=X;h++){const Nt=b[h]=g?gn(b[h]):en(b[h]);Nt.key!=null&&W.set(Nt.key,h)}let le,xe=0;const Ye=X-P+1;let xt=!1,ft=0;const Yn=new Array(Ye);for(h=0;h<Ye;h++)Yn[h]=0;for(h=q;h<=F;h++){const Nt=y[h];if(xe>=Ye){Ve(Nt,G,U,!0);continue}let Xt;if(Nt.key!=null)Xt=W.get(Nt.key);else for(le=P;le<=X;le++)if(Yn[le-P]===0&&ar(Nt,b[le])){Xt=le;break}Xt===void 0?Ve(Nt,G,U,!0):(Yn[Xt-P]=h+1,Xt>=ft?ft=Xt:xt=!0,x(Nt,b[Xt],v,null,G,U,Y,K,g),xe++)}const gi=xt?Vp(Yn):vr;for(le=gi.length-1,h=Ye-1;h>=0;h--){const Nt=P+h,Xt=b[Nt],so=b[Nt+1],oo=Nt+1<S?so.el||bu(so):N;Yn[h]===0?x(null,Xt,v,oo,G,U,Y,K,g):xt&&(le<0||h!==gi[le]?Ge(Xt,v,oo,2):le--)}}},Ge=(y,b,v,N,G=null)=>{const{el:U,type:Y,transition:K,children:g,shapeFlag:h}=y;if(h&6){Ge(y.component.subTree,b,v,N);return}if(h&128){y.suspense.move(b,v,N);return}if(h&64){Y.move(y,b,v,ae);return}if(Y===_e){r(U,b,v);for(let F=0;F<g.length;F++)Ge(g[F],b,v,N);r(y.anchor,b,v);return}if(Y===xi){w(y,b,v);return}if(N!==2&&h&1&&K)if(N===0)K.beforeEnter(U),r(U,b,v),vt(()=>K.enter(U),G);else{const{leave:F,delayLeave:X,afterLeave:q}=K,P=()=>{y.ctx.isUnmounted?a(U):r(U,b,v)},W=()=>{U._isLeaving&&U[Qt](!0),F(U,()=>{P(),q&&q()})};X?X(U,P,W):W()}else r(U,b,v)},Ve=(y,b,v,N=!1,G=!1)=>{const{type:U,props:Y,ref:K,children:g,dynamicChildren:h,shapeFlag:S,patchFlag:F,dirs:X,cacheIndex:q}=y;if(F===-2&&(G=!1),K!=null&&(bn(),Hr(K,null,v,y,!0),_n()),q!=null&&(b.renderCache[q]=void 0),S&256){b.ctx.deactivate(y);return}const P=S&1&&X,W=!wr(y);let le;if(W&&(le=Y&&Y.onVnodeBeforeUnmount)&&Jt(le,b,y),S&6)Ne(y.component,v,N);else{if(S&128){y.suspense.unmount(v,N);return}P&&Xn(y,null,b,"beforeUnmount"),S&64?y.type.remove(y,b,v,ae,N):h&&!h.hasOnce&&(U!==_e||F>0&&F&64)?Ae(h,b,v,!1,!0):(U===_e&&F&384||!G&&S&16)&&Ae(g,b,v),N&&Et(y)}(W&&(le=Y&&Y.onVnodeUnmounted)||P)&&vt(()=>{le&&Jt(le,b,y),P&&Xn(y,null,b,"unmounted")},v)},Et=y=>{const{type:b,el:v,anchor:N,transition:G}=y;if(b===_e){dt(v,N);return}if(b===xi){E(y);return}const U=()=>{a(v),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(y.shapeFlag&1&&G&&!G.persisted){const{leave:Y,delayLeave:K}=G,g=()=>Y(v,U);K?K(y.el,U,g):g()}else U()},dt=(y,b)=>{let v;for(;y!==b;)v=f(y),a(y),y=v;a(b)},Ne=(y,b,v)=>{const{bum:N,scope:G,job:U,subTree:Y,um:K,m:g,a:h}=y;Co(g),Co(h),N&&hi(N),G.stop(),U&&(U.flags|=8,Ve(Y,y,b,v)),K&&vt(K,b),vt(()=>{y.isUnmounted=!0},b)},Ae=(y,b,v,N=!1,G=!1,U=0)=>{for(let Y=U;Y<y.length;Y++)Ve(y[Y],b,v,N,G)},B=y=>{if(y.shapeFlag&6)return B(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const b=f(y.anchor||y.el),v=b&&b[Vc];return v?f(v):b};let Q=!1;const H=(y,b,v)=>{let N;y==null?b._vnode&&(Ve(b._vnode,null,null,!0),N=b._vnode.component):x(b._vnode||null,y,b,null,null,null,v),b._vnode=y,Q||(Q=!0,po(N),Bc(),Q=!1)},ae={p:x,um:Ve,m:Ge,r:Et,mt:Me,mc:$,pc:ke,pbc:oe,n:B,o:e};return{render:H,hydrate:void 0,createApp:Cp(H)}}function Ei({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Jn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Gp(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ws(e,t,n=!1){const r=e.children,a=t.children;if(ue(r)&&ue(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=gn(a[i]),o.el=s.el),!n&&o.patchFlag!==-2&&Ws(s,o)),o.type===pa&&(o.patchFlag===-1&&(o=a[i]=gn(o)),o.el=s.el),o.type===pt&&!o.el&&(o.el=s.el)}}function Vp(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<u?i=o+1:s=o;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}function vu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:vu(t)}function Co(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function bu(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?bu(t.subTree):null}const _u=e=>e.__isSuspense;function Hp(e,t){t&&t.pendingBranch?ue(e)?t.effects.push(...e):t.effects.push(e):np(e)}const _e=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),xi=Symbol.for("v-stc"),Kr=[];let Rt=null;function D(e=!1){Kr.push(Rt=e?null:[])}function qp(){Kr.pop(),Rt=Kr[Kr.length-1]||null}let ea=1;function Ba(e,t=!1){ea+=e,e<0&&Rt&&t&&(Rt.hasOnce=!0)}function ku(e){return e.dynamicChildren=ea>0?Rt||vr:null,qp(),ea>0&&Rt&&Rt.push(e),e}function J(e,t,n,r,a,i){return ku(I(e,t,n,r,a,i,!0))}function ee(e,t,n,r,a){return ku(k(e,t,n,r,a,!0))}function ta(e){return e?e.__v_isVNode===!0:!1}function ar(e,t){return e.type===t.type&&e.key===t.key}const wu=({key:e})=>e??null,La=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ke(e)||Je(e)||pe(e)?{i:mt,r:e,k:t,f:!!n}:e:null);function I(e,t=null,n=null,r=0,a=null,i=e===_e?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wu(t),ref:t&&La(t),scopeId:jc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:mt};return o?(Bs(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),ea>0&&!s&&Rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rt.push(l),l}const k=Kp;function Kp(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ru)&&(e=pt),ta(e)){const o=En(e,t,!0);return n&&Bs(o,n),ea>0&&!i&&Rt&&(o.shapeFlag&6?Rt[Rt.indexOf(e)]=o:Rt.push(o)),o.patchFlag=-2,o}if(rm(e)&&(e=e.__vccOpts),t){t=ma(t);let{class:o,style:l}=t;o&&!Ke(o)&&(t.class=Xe(o)),Se(l)&&(ni(l)&&!ue(l)&&(l=st({},l)),t.style=Un(l))}const s=Ke(e)?1:_u(e)?128:Hc(e)?64:Se(e)?4:pe(e)?2:0;return I(e,t,n,r,a,s,i,!0)}function ma(e){return e?ni(e)||fu(e)?st({},e):e:null}function En(e,t,n=!1,r=!1){const{props:a,ref:i,patchFlag:s,children:o,transition:l}=e,u=t?Ze(a||{},t):a,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&wu(u),ref:t&&t.ref?n&&i?ue(i)?i.concat(La(t)):[i,La(t)]:La(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&En(e.ssContent),ssFallback:e.ssFallback&&En(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&Qr(c,l.clone(c)),c}function te(e=" ",t=0){return k(pa,null,e,t)}function Wt(e="",t=!1){return t?(D(),ee(pt,null,e)):k(pt,null,e)}function en(e){return e==null||typeof e=="boolean"?k(pt):ue(e)?k(_e,null,e.slice()):ta(e)?gn(e):k(pa,null,String(e))}function gn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:En(e)}function Bs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ue(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Bs(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!fu(t)?t._ctx=mt:a===3&&mt&&(mt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:mt},n=32):(t=String(t),r&64?(n=16,t=[te(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ze(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Xe([t.class,r.class]));else if(a==="style")t.style=Un([t.style,r.style]);else if(Ya(a)){const i=t[a],s=r[a];s&&i!==s&&!(ue(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Jt(e,t,n,r=null){Kt(e,t,7,[n,r])}const Yp=ou();let Xp=0;function Jp(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Yp,i={uid:Xp++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(r,a),emitsOptions:lu(r,a),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Sp.bind(null,i),e.ce&&e.ce(i),i}let kt=null;const Pt=()=>kt||mt;let Ua,es;{const e=Qa(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(s=>s(i)):a[0](i)}};Ua=t("__VUE_INSTANCE_SETTERS__",n=>kt=n),es=t("__VUE_SSR_SETTERS__",n=>na=n)}const ga=e=>{const t=kt;return Ua(e),e.scope.on(),()=>{e.scope.off(),Ua(t)}},Po=()=>{kt&&kt.scope.off(),Ua(null)};function Eu(e){return e.vnode.shapeFlag&4}let na=!1;function Zp(e,t=!1,n=!1){t&&es(t);const{props:r,children:a}=e.vnode,i=Eu(e);Dp(e,r,i,t),Wp(e,a,n||t);const s=i?Qp(e,t):void 0;return t&&es(!1),s}function Qp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,kp);const{setup:r}=n;if(r){bn();const a=e.setupContext=r.length>1?tm(e):null,i=ga(e),s=da(r,e,0,[e.props,a]),o=dc(s);if(_n(),i(),(o||e.sp)&&!wr(e)&&Qc(e),o){if(s.then(Po,Po),t)return s.then(l=>{So(e,l)}).catch(l=>{ri(l,e,0)});e.asyncDep=s}else So(e,s)}else xu(e)}function So(e,t,n){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Se(t)&&(e.setupState=$c(t)),xu(e)}function xu(e,t,n){const r=e.type;e.render||(e.render=r.render||nn);{const a=ga(e);bn();try{wp(e)}finally{_n(),a()}}}const em={get(e,t){return _t(e,"get",""),e[t]}};function tm(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,em),slots:e.slots,emit:e.emit,expose:t}}function li(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy($c(Mc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qr)return qr[n](e)},has(t,n){return n in t||n in qr}})):e.proxy}function nm(e,t=!0){return pe(e)?e.displayName||e.name:e.name||t&&e.__name}function rm(e){return pe(e)&&"__vccOpts"in e}const se=(e,t)=>Jf(e,t,na);function Ot(e,t,n){try{Ba(-1);const r=arguments.length;return r===2?Se(t)&&!ue(t)?ta(t)?k(e,null,[t]):k(e,t):k(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),k(e,t,n))}finally{Ba(1)}}const am="3.5.28";let ts;const Oo=typeof window<"u"&&window.trustedTypes;if(Oo)try{ts=Oo.createPolicy("vue",{createHTML:e=>e})}catch{}const Au=ts?e=>ts.createHTML(e):e=>e,im="http://www.w3.org/2000/svg",sm="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,Lo=mn&&mn.createElement("template"),om={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?mn.createElementNS(im,e):t==="mathml"?mn.createElementNS(sm,e):n?mn.createElement(e,{is:n}):mn.createElement(e);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mn.createTextNode(e),createComment:e=>mn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Lo.innerHTML=Au(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=Lo.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},In="transition",Mr="animation",ra=Symbol("_vtc"),Tu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lm=st({},Kc,Tu),cm=e=>(e.displayName="Transition",e.props=lm,e),Iu=cm((e,{slots:t})=>Ot(up,um(e),t)),Zn=(e,t=[])=>{ue(e)?e.forEach(n=>n(...t)):e&&e(...t)},No=e=>e?ue(e)?e.some(t=>t.length>1):e.length>1:!1;function um(e){const t={};for(const V in e)V in Tu||(t[V]=e[V]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=s,appearToClass:c=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,A=dm(a),x=A&&A[0],T=A&&A[1],{onBeforeEnter:C,onEnter:O,onEnterCancelled:w,onLeave:E,onLeaveCancelled:z,onBeforeAppear:R=C,onAppear:j=O,onAppearCancelled:$=w}=t,L=(V,ce,Me,We)=>{V._enterCancelled=We,Qn(V,ce?c:o),Qn(V,ce?u:s),Me&&Me()},oe=(V,ce)=>{V._isLeaving=!1,Qn(V,d),Qn(V,m),Qn(V,f),ce&&ce()},fe=V=>(ce,Me)=>{const We=V?j:O,ye=()=>L(ce,V,Me);Zn(We,[ce,ye]),Ro(()=>{Qn(ce,V?l:i),cn(ce,V?c:o),No(We)||Mo(ce,r,x,ye)})};return st(t,{onBeforeEnter(V){Zn(C,[V]),cn(V,i),cn(V,s)},onBeforeAppear(V){Zn(R,[V]),cn(V,l),cn(V,u)},onEnter:fe(!1),onAppear:fe(!0),onLeave(V,ce){V._isLeaving=!0;const Me=()=>oe(V,ce);cn(V,d),V._enterCancelled?(cn(V,f),zo(V)):(zo(V),cn(V,f)),Ro(()=>{V._isLeaving&&(Qn(V,d),cn(V,m),No(E)||Mo(V,r,T,Me))}),Zn(E,[V,Me])},onEnterCancelled(V){L(V,!1,void 0,!0),Zn(w,[V])},onAppearCancelled(V){L(V,!0,void 0,!0),Zn($,[V])},onLeaveCancelled(V){oe(V),Zn(z,[V])}})}function dm(e){if(e==null)return null;if(Se(e))return[Ai(e.enter),Ai(e.leave)];{const t=Ai(e);return[t,t]}}function Ai(e){return hf(e)}function cn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ra]||(e[ra]=new Set)).add(t)}function Qn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[ra];n&&(n.delete(t),n.size||(e[ra]=void 0))}function Ro(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fm=0;function Mo(e,t,n,r){const a=e._endId=++fm,i=()=>{a===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:s,timeout:o,propCount:l}=pm(e,t);if(!s)return r();const u=s+"end";let c=0;const d=()=>{e.removeEventListener(u,f),i()},f=m=>{m.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},o+1),e.addEventListener(u,f)}function pm(e,t){const n=window.getComputedStyle(e),r=A=>(n[A]||"").split(", "),a=r(`${In}Delay`),i=r(`${In}Duration`),s=Do(a,i),o=r(`${Mr}Delay`),l=r(`${Mr}Duration`),u=Do(o,l);let c=null,d=0,f=0;t===In?s>0&&(c=In,d=s,f=i.length):t===Mr?u>0&&(c=Mr,d=u,f=l.length):(d=Math.max(s,u),c=d>0?s>u?In:Mr:null,f=c?c===In?i.length:l.length:0);const m=c===In&&/\b(?:transform|all)(?:,|$)/.test(r(`${In}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:m}}function Do(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>$o(n)+$o(e[r])))}function $o(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function zo(e){return(e?e.ownerDocument:document).body.offsetHeight}function mm(e,t,n){const r=e[ra];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ja=Symbol("_vod"),Cu=Symbol("_vsh"),gm={name:"show",beforeMount(e,{value:t},{transition:n}){e[ja]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Dr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Dr(e,!0),r.enter(e)):r.leave(e,()=>{Dr(e,!1)}):Dr(e,t))},beforeUnmount(e,{value:t}){Dr(e,t)}};function Dr(e,t){e.style.display=t?e[ja]:"none",e[Cu]=!t}const hm=Symbol(""),ym=/(?:^|;)\s*display\s*:/;function vm(e,t,n){const r=e.style,a=Ke(n);let i=!1;if(n&&!a){if(t)if(Ke(t))for(const s of t.split(";")){const o=s.slice(0,s.indexOf(":")).trim();n[o]==null&&Na(r,o,"")}else for(const s in t)n[s]==null&&Na(r,s,"");for(const s in n)s==="display"&&(i=!0),Na(r,s,n[s])}else if(a){if(t!==n){const s=r[hm];s&&(n+=";"+s),r.cssText=n,i=ym.test(n)}}else t&&e.removeAttribute("style");ja in e&&(e[ja]=i?r.display:"",e[Cu]&&(r.display="none"))}const Fo=/\s*!important$/;function Na(e,t,n){if(ue(n))n.forEach(r=>Na(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bm(e,t);Fo.test(n)?e.setProperty(Bn(r),n.replace(Fo,""),"important"):e[r]=n}}const Wo=["Webkit","Moz","ms"],Ti={};function bm(e,t){const n=Ti[t];if(n)return n;let r=Lt(t);if(r!=="filter"&&r in e)return Ti[t]=r;r=Za(r);for(let a=0;a<Wo.length;a++){const i=Wo[a]+r;if(i in e)return Ti[t]=i}return t}const Bo="http://www.w3.org/1999/xlink";function Uo(e,t,n,r,a,i=wf(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Bo,t.slice(6,t.length)):e.setAttributeNS(Bo,t,n):n==null||i&&!gc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ht(n)?String(n):n)}function jo(e,t,n,r,a){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Au(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=gc(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(a||t)}function _m(e,t,n,r){e.addEventListener(t,n,r)}function km(e,t,n,r){e.removeEventListener(t,n,r)}const Go=Symbol("_vei");function wm(e,t,n,r,a=null){const i=e[Go]||(e[Go]={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Em(t);if(r){const u=i[t]=Tm(r,a);_m(e,o,u,l)}else s&&(km(e,o,s,l),i[t]=void 0)}}const Vo=/(?:Once|Passive|Capture)$/;function Em(e){let t;if(Vo.test(e)){t={};let r;for(;r=e.match(Vo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Bn(e.slice(2)),t]}let Ii=0;const xm=Promise.resolve(),Am=()=>Ii||(xm.then(()=>Ii=0),Ii=Date.now());function Tm(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Kt(Im(r,n.value),t,5,[r])};return n.value=e,n.attached=Am(),n}function Im(e,t){if(ue(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ho=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Cm=(e,t,n,r,a,i)=>{const s=a==="svg";t==="class"?mm(e,r,s):t==="style"?vm(e,n,r):Ya(t)?Es(t)||wm(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pm(e,t,r,s))?(jo(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Uo(e,t,r,s,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ke(r))?jo(e,Lt(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Uo(e,t,r,s))};function Pm(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ho(t)&&pe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Ho(t)&&Ke(n)?!1:t in e}const Sm=["ctrl","shift","alt","meta"],Om={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Sm.some(n=>e[`${n}Key`]&&!t.includes(n))},Lm=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((a,...i)=>{for(let s=0;s<t.length;s++){const o=Om[t[s]];if(o&&o(a,t))return}return e(a,...i)}))},Nm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Rm=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(a=>{if(!("key"in a))return;const i=Bn(a.key);if(t.some(s=>s===i||Nm[s]===i))return e(a)}))},Mm=st({patchProp:Cm},om);let qo;function Dm(){return qo||(qo=Up(Mm))}const $m=((...e)=>{const t=Dm().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Fm(r);if(!a)return;const i=t._component;!pe(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const s=n(a,!1,zm(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t});function zm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Fm(e){return Ke(e)?document.querySelector(e):e}const Pu="/logo.png";const Wm=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const Ko=e=>e==="";const Bm=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();const Yo=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Um=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());const jm=e=>{const t=Um(e);return t.charAt(0).toUpperCase()+t.slice(1)};var $r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Gm=({name:e,iconNode:t,absoluteStrokeWidth:n,"absolute-stroke-width":r,strokeWidth:a,"stroke-width":i,size:s=$r.width,color:o=$r.stroke,...l},{slots:u})=>Ot("svg",{...$r,...l,width:s,height:s,stroke:o,"stroke-width":Ko(n)||Ko(r)||n===!0||r===!0?Number(a||i||$r["stroke-width"])*24/Number(s):a||i||$r["stroke-width"],class:Bm("lucide",l.class,...e?[`lucide-${Yo(jm(e))}-icon`,`lucide-${Yo(e)}`]:["lucide-icon"]),...!u.default&&!Wm(l)&&{"aria-hidden":"true"}},[...t.map(c=>Ot(...c)),...u.default?[u.default()]:[]]);const qe=(e,t)=>(n,{slots:r,attrs:a})=>Ot(Gm,{...a,...n,iconNode:t,name:e},r);const Ar=qe("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const Vm=qe("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);const Hm=qe("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);const qm=qe("brain-circuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);const Km=qe("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);const ns=qe("clipboard-check",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);const Ym=qe("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);const Su=qe("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const Ga=qe("file-search",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);const Xm=qe("git-branch",[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]);const Xo=qe("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);const Va=qe("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);const Jm=qe("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const Zm=qe("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);const Qm=qe("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);const eg=qe("orbit",[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]);const tg=qe("scale",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]);const ng=qe("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);const rg=qe("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);const Ou=qe("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const ag=qe("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);const ig=qe("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);const sg=qe("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const rs=qe("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);const og=qe("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const gr=typeof document<"u";function Lu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function lg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Lu(e.default)}const Oe=Object.assign;function Ci(e,t){const n={};for(const r in t){const a=t[r];n[r]=Yt(a)?a.map(e):e(a)}return n}const Yr=()=>{},Yt=Array.isArray;function Jo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}let Qe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Nu=Symbol("");Qe.MATCHER_NOT_FOUND+"",Qe.NAVIGATION_GUARD_REDIRECT+"",Qe.NAVIGATION_ABORTED+"",Qe.NAVIGATION_CANCELLED+"",Qe.NAVIGATION_DUPLICATED+"";function Tr(e,t){return Oe(new Error,{type:e,[Nu]:!0},t)}function un(e,t){return e instanceof Error&&Nu in e&&(t==null||!!(e.type&t))}const cg=["params","query","hash"];function ug(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of cg)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const dg=Symbol(""),Zo=Symbol(""),Us=Symbol(""),js=Symbol(""),as=Symbol("");function Or(e){return Dt(js)}const Ru=/#/g,fg=/&/g,pg=/\//g,mg=/=/g,gg=/\?/g,Mu=/\+/g,hg=/%5B/g,yg=/%5D/g,Du=/%5E/g,vg=/%60/g,$u=/%7B/g,bg=/%7C/g,zu=/%7D/g,_g=/%20/g;function Gs(e){return e==null?"":encodeURI(""+e).replace(bg,"|").replace(hg,"[").replace(yg,"]")}function kg(e){return Gs(e).replace($u,"{").replace(zu,"}").replace(Du,"^")}function is(e){return Gs(e).replace(Mu,"%2B").replace(_g,"+").replace(Ru,"%23").replace(fg,"%26").replace(vg,"`").replace($u,"{").replace(zu,"}").replace(Du,"^")}function wg(e){return is(e).replace(mg,"%3D")}function Eg(e){return Gs(e).replace(Ru,"%23").replace(gg,"%3F")}function xg(e){return Eg(e).replace(pg,"%2F")}function aa(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Ag=/\/$/,Tg=e=>e.replace(Ag,"");function Pi(e,t,n="/"){let r,a={},i="",s="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(r=t.slice(0,l),i=t.slice(l,o>0?o:t.length),a=e(i.slice(1))),o>=0&&(r=r||t.slice(0,o),s=t.slice(o,t.length)),r=Sg(r??t,n),{fullPath:r+i+s,path:r,query:a,hash:aa(s)}}function Ig(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Qo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Cg(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Ir(t.matched[r],n.matched[a])&&Fu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ir(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Fu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Pg(e[n],t[n]))return!1;return!0}function Pg(e,t){return Yt(e)?el(e,t):Yt(t)?el(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function el(e,t){return Yt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Sg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s).join("/")}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ss=(function(e){return e.pop="pop",e.push="push",e})({}),Si=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Og(e){if(!e)if(gr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tg(e)}const Lg=/^[^#]+#/;function Ng(e,t){return e.replace(Lg,"#")+t}function Rg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ci=()=>({left:window.scrollX,top:window.scrollY});function Mg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Rg(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function tl(e,t){return(history.state?history.state.position-t:-1)+e}const os=new Map;function Dg(e,t){os.set(e,t)}function $g(e){const t=os.get(e);return os.delete(e),t}function zg(e){return typeof e=="string"||e&&typeof e=="object"}function Wu(e){return typeof e=="string"||typeof e=="symbol"}function Fg(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const a=n[r].replace(Mu," "),i=a.indexOf("="),s=aa(i<0?a:a.slice(0,i)),o=i<0?null:aa(a.slice(i+1));if(s in t){let l=t[s];Yt(l)||(l=t[s]=[l]),l.push(o)}else t[s]=o}return t}function nl(e){let t="";for(let n in e){const r=e[n];if(n=wg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Yt(r)?r.map(a=>a&&is(a)):[r&&is(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Wg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Yt(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function zr(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Mn(e,t,n,r,a,i=s=>s()){const s=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,l)=>{const u=f=>{f===!1?l(Tr(Qe.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?l(f):zg(f)?l(Tr(Qe.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(s&&r.enterCallbacks[a]===s&&typeof f=="function"&&s.push(f),o())},c=i(()=>e.call(r&&r.instances[a],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(f=>l(f))})}function Oi(e,t,n,r,a=i=>i()){const i=[];for(const s of e)for(const o in s.components){let l=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(Lu(l)){const u=(l.__vccOpts||l)[t];u&&i.push(Mn(u,n,r,s,o,a))}else{let u=l();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${s.path}"`);const d=lg(c)?c.default:c;s.mods[o]=c,s.components[o]=d;const f=(d.__vccOpts||d)[t];return f&&Mn(f,n,r,s,o,a)()}))}}return i}function Bg(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const o=t.matched[s];o&&(e.matched.find(u=>Ir(u,o))?r.push(o):n.push(o));const l=e.matched[s];l&&(t.matched.find(u=>Ir(u,l))||a.push(l))}return[n,r,a]}let Ug=()=>location.protocol+"//"+location.host;function Bu(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,o=a.slice(s);return o[0]!=="/"&&(o="/"+o),Qo(o,"")}return Qo(n,e)+r+a}function jg(e,t,n,r){let a=[],i=[],s=null;const o=({state:f})=>{const m=Bu(e,location),A=n.value,x=t.value;let T=0;if(f){if(n.value=m,t.value=f,s&&s===A){s=null;return}T=x?f.position-x.position:0}else r(m);a.forEach(C=>{C(n.value,A,{delta:T,type:ss.pop,direction:T?T>0?Si.forward:Si.back:Si.unknown})})};function l(){s=n.value}function u(f){a.push(f);const m=()=>{const A=a.indexOf(f);A>-1&&a.splice(A,1)};return i.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Oe({},f.state,{scroll:ci()}),"")}}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function rl(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?ci():null}}function Gg(e){const{history:t,location:n}=window,r={value:Bu(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Ug()+e+l;try{t[c?"replaceState":"pushState"](u,"",f),a.value=u}catch(m){console.error(m),n[c?"replace":"assign"](f)}}function s(l,u){i(l,Oe({},t.state,rl(a.value.back,l,a.value.forward,!0),u,{position:a.value.position}),!0),r.value=l}function o(l,u){const c=Oe({},a.value,t.state,{forward:l,scroll:ci()});i(c.current,c,!0),i(l,Oe({},rl(r.value,l,null),{position:c.position+1},u),!1),r.value=l}return{location:r,state:a,push:o,replace:s}}function Vg(e){e=Og(e);const t=Gg(e),n=jg(e,t.state,t.location,t.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const a=Oe({location:"",base:e,go:r,createHref:Ng.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}let sr=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var at=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(at||{});const Hg={type:sr.Static,value:""},qg=/[a-zA-Z0-9_]/;function Kg(e){if(!e)return[[]];if(e==="/")return[[Hg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=at.Static,r=n;const a=[];let i;function s(){i&&a.push(i),i=[]}let o=0,l,u="",c="";function d(){u&&(n===at.Static?i.push({type:sr.Static,value:u}):n===at.Param||n===at.ParamRegExp||n===at.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:sr.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==at.ParamRegExp){r=n,n=at.EscapeNext;continue}switch(n){case at.Static:l==="/"?(u&&d(),s()):l===":"?(d(),n=at.Param):f();break;case at.EscapeNext:f(),n=r;break;case at.Param:l==="("?n=at.ParamRegExp:qg.test(l)?f():(d(),n=at.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case at.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=at.ParamRegExpEnd:c+=l;break;case at.ParamRegExpEnd:d(),n=at.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:t("Unknown state");break}}return n===at.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),a}const al="[^/]+?",Yg={sensitive:!1,strict:!1,start:!0,end:!0};var It=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(It||{});const Xg=/[.+*?^${}()[\]/\\]/g;function Jg(e,t){const n=Oe({},Yg,t),r=[];let a=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[It.Root];n.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=It.Segment+(n.sensitive?It.BonusCaseSensitive:0);if(f.type===sr.Static)d||(a+="/"),a+=f.value.replace(Xg,"\\$&"),m+=It.Static;else if(f.type===sr.Param){const{value:A,repeatable:x,optional:T,regexp:C}=f;i.push({name:A,repeatable:x,optional:T});const O=C||al;if(O!==al){m+=It.BonusCustomRegExp;try{new RegExp(`(${O})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${A}" (${O}): `+E.message)}}let w=x?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(w=T&&u.length<2?`(?:/${w})`:"/"+w),T&&(w+="?"),a+=w,m+=It.Dynamic,T&&(m+=It.BonusOptional),x&&(m+=It.BonusRepeatable),O===".*"&&(m+=It.BonusWildcard)}c.push(m)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=It.BonusStrict}n.strict||(a+="/?"),n.end?a+="$":n.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const s=new RegExp(a,n.sensitive?"":"i");function o(u){const c=u.match(s),d={};if(!c)return null;for(let f=1;f<c.length;f++){const m=c[f]||"",A=i[f-1];d[A.name]=m&&A.repeatable?m.split("/"):m}return d}function l(u){let c="",d=!1;for(const f of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of f)if(m.type===sr.Static)c+=m.value;else if(m.type===sr.Param){const{value:A,repeatable:x,optional:T}=m,C=A in u?u[A]:"";if(Yt(C)&&!x)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const O=Yt(C)?C.join("/"):C;if(!O)if(T)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=O}}return c||"/"}return{re:s,score:r,keys:i,parse:o,stringify:l}}function Zg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===It.Static+It.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===It.Static+It.Segment?1:-1:0}function Uu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Zg(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(il(r))return 1;if(il(a))return-1}return a.length-r.length}function il(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Qg={strict:!1,end:!0,sensitive:!1};function eh(e,t,n){const r=Jg(Kg(e.path),n),a=Oe(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function th(e,t){const n=[],r=new Map;t=Jo(Qg,t);function a(d){return r.get(d)}function i(d,f,m){const A=!m,x=ol(d);x.aliasOf=m&&m.record;const T=Jo(t,d),C=[x];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of E)C.push(ol(Oe({},x,{components:m?m.record.components:x.components,path:z,aliasOf:m?m.record:x})))}let O,w;for(const E of C){const{path:z}=E;if(f&&z[0]!=="/"){const R=f.record.path,j=R[R.length-1]==="/"?"":"/";E.path=f.record.path+(z&&j+z)}if(O=eh(E,f,T),m?m.alias.push(O):(w=w||O,w!==O&&w.alias.push(O),A&&d.name&&!ll(O)&&s(d.name)),ju(O)&&l(O),x.children){const R=x.children;for(let j=0;j<R.length;j++)i(R[j],O,m&&m.children[j])}m=m||O}return w?()=>{s(w)}:Yr}function s(d){if(Wu(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function o(){return n}function l(d){const f=ah(d,n);n.splice(f,0,d),d.record.name&&!ll(d)&&r.set(d.record.name,d)}function u(d,f){let m,A={},x,T;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Tr(Qe.MATCHER_NOT_FOUND,{location:d});T=m.record.name,A=Oe(sl(f.params,m.keys.filter(w=>!w.optional).concat(m.parent?m.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&sl(d.params,m.keys.map(w=>w.name))),x=m.stringify(A)}else if(d.path!=null)x=d.path,m=n.find(w=>w.re.test(x)),m&&(A=m.parse(x),T=m.record.name);else{if(m=f.name?r.get(f.name):n.find(w=>w.re.test(f.path)),!m)throw Tr(Qe.MATCHER_NOT_FOUND,{location:d,currentLocation:f});T=m.record.name,A=Oe({},f.params,d.params),x=m.stringify(A)}const C=[];let O=m;for(;O;)C.unshift(O.record),O=O.parent;return{name:T,path:x,params:A,matched:C,meta:rh(C)}}e.forEach(d=>i(d));function c(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:s,clearRoutes:c,getRoutes:o,getRecordMatcher:a}}function sl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ol(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:nh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function nh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ll(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function rh(e){return e.reduce((t,n)=>Oe(t,n.meta),{})}function ah(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Uu(e,t[i])<0?r=i:n=i+1}const a=ih(e);return a&&(r=t.lastIndexOf(a,r-1)),r}function ih(e){let t=e;for(;t=t.parent;)if(ju(t)&&Uu(e,t)===0)return t}function ju({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function cl(e){const t=Dt(Us),n=Dt(js),r=se(()=>{const l=p(e.to);return t.resolve(l)}),a=se(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const f=d.findIndex(Ir.bind(null,c));if(f>-1)return f;const m=ul(l[u-2]);return u>1&&ul(c)===m&&d[d.length-1].path!==m?d.findIndex(Ir.bind(null,l[u-2])):f}),i=se(()=>a.value>-1&&ch(n.params,r.value.params)),s=se(()=>a.value>-1&&a.value===n.matched.length-1&&Fu(n.params,r.value.params));function o(l={}){if(lh(l)){const u=t[p(e.replace)?"replace":"push"](p(e.to)).catch(Yr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:se(()=>r.value.href),isActive:i,isExactActive:s,navigate:o}}function sh(e){return e.length===1?e[0]:e}const oh=Te({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:cl,setup(e,{slots:t}){const n=$n(cl(e)),{options:r}=Dt(Us),a=se(()=>({[dl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[dl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&sh(t.default(n));return e.custom?i:Ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),ir=oh;function lh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ch(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Yt(a)||a.length!==r.length||r.some((i,s)=>i.valueOf()!==a[s].valueOf()))return!1}return!0}function ul(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const dl=(e,t,n)=>e??t??n,uh=Te({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Dt(as),a=se(()=>e.route||r.value),i=Dt(Zo,0),s=se(()=>{let u=p(i);const{matched:c}=a.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),o=se(()=>a.value.matched[s.value]);kr(Zo,se(()=>s.value+1)),kr(dg,o),kr(as,a);const l=ve();return ct(()=>[l.value,o.value,e.name],([u,c,d],[f,m,A])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===f&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!Ir(c,m)||!f)&&(c.enterCallbacks[d]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=a.value,c=e.name,d=o.value,f=d&&d.components[c];if(!f)return fl(n.default,{Component:f,route:u});const m=d.props[c],A=m?m===!0?u.params:typeof m=="function"?m(u):m:null,T=Ot(f,Oe({},A,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return fl(n.default,{Component:T,route:u})||T}}});function fl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const dh=uh;function fh(e){const t=th(e.routes,e),n=e.parseQuery||Fg,r=e.stringifyQuery||nl,a=e.history,i=zr(),s=zr(),o=zr(),l=ua(Cn);let u=Cn;gr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ci.bind(null,B=>""+B),d=Ci.bind(null,xg),f=Ci.bind(null,aa);function m(B,Q){let H,ae;return Wu(B)?(H=t.getRecordMatcher(B),ae=Q):ae=B,t.addRoute(ae,H)}function A(B){const Q=t.getRecordMatcher(B);Q&&t.removeRoute(Q)}function x(){return t.getRoutes().map(B=>B.record)}function T(B){return!!t.getRecordMatcher(B)}function C(B,Q){if(Q=Oe({},Q||l.value),typeof B=="string"){const v=Pi(n,B,Q.path),N=t.resolve({path:v.path},Q),G=a.createHref(v.fullPath);return Oe(v,N,{params:f(N.params),hash:aa(v.hash),redirectedFrom:void 0,href:G})}let H;if(B.path!=null)H=Oe({},B,{path:Pi(n,B.path,Q.path).path});else{const v=Oe({},B.params);for(const N in v)v[N]==null&&delete v[N];H=Oe({},B,{params:d(v)}),Q.params=d(Q.params)}const ae=t.resolve(H,Q),me=B.hash||"";ae.params=c(f(ae.params));const y=Ig(r,Oe({},B,{hash:kg(me),path:ae.path})),b=a.createHref(y);return Oe({fullPath:y,hash:me,query:r===nl?Wg(B.query):B.query||{}},ae,{redirectedFrom:void 0,href:b})}function O(B){return typeof B=="string"?Pi(n,B,l.value.path):Oe({},B)}function w(B,Q){if(u!==B)return Tr(Qe.NAVIGATION_CANCELLED,{from:Q,to:B})}function E(B){return j(B)}function z(B){return E(Oe(O(B),{replace:!0}))}function R(B,Q){const H=B.matched[B.matched.length-1];if(H&&H.redirect){const{redirect:ae}=H;let me=typeof ae=="function"?ae(B,Q):ae;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=O(me):{path:me},me.params={}),Oe({query:B.query,hash:B.hash,params:me.path!=null?{}:B.params},me)}}function j(B,Q){const H=u=C(B),ae=l.value,me=B.state,y=B.force,b=B.replace===!0,v=R(H,ae);if(v)return j(Oe(O(v),{state:typeof v=="object"?Oe({},me,v.state):me,force:y,replace:b}),Q||H);const N=H;N.redirectedFrom=Q;let G;return!y&&Cg(r,ae,H)&&(G=Tr(Qe.NAVIGATION_DUPLICATED,{to:N,from:ae}),Ge(ae,ae,!0,!1)),(G?Promise.resolve(G):oe(N,ae)).catch(U=>un(U)?un(U,Qe.NAVIGATION_GUARD_REDIRECT)?U:ne(U):ke(U,N,ae)).then(U=>{if(U){if(un(U,Qe.NAVIGATION_GUARD_REDIRECT))return j(Oe({replace:b},O(U.to),{state:typeof U.to=="object"?Oe({},me,U.to.state):me,force:y}),Q||N)}else U=V(N,ae,!0,b,me);return fe(N,ae,U),U})}function $(B,Q){const H=w(B,Q);return H?Promise.reject(H):Promise.resolve()}function L(B){const Q=dt.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(B):B()}function oe(B,Q){let H;const[ae,me,y]=Bg(B,Q);H=Oi(ae.reverse(),"beforeRouteLeave",B,Q);for(const v of ae)v.leaveGuards.forEach(N=>{H.push(Mn(N,B,Q))});const b=$.bind(null,B,Q);return H.push(b),Ae(H).then(()=>{H=[];for(const v of i.list())H.push(Mn(v,B,Q));return H.push(b),Ae(H)}).then(()=>{H=Oi(me,"beforeRouteUpdate",B,Q);for(const v of me)v.updateGuards.forEach(N=>{H.push(Mn(N,B,Q))});return H.push(b),Ae(H)}).then(()=>{H=[];for(const v of y)if(v.beforeEnter)if(Yt(v.beforeEnter))for(const N of v.beforeEnter)H.push(Mn(N,B,Q));else H.push(Mn(v.beforeEnter,B,Q));return H.push(b),Ae(H)}).then(()=>(B.matched.forEach(v=>v.enterCallbacks={}),H=Oi(y,"beforeRouteEnter",B,Q,L),H.push(b),Ae(H))).then(()=>{H=[];for(const v of s.list())H.push(Mn(v,B,Q));return H.push(b),Ae(H)}).catch(v=>un(v,Qe.NAVIGATION_CANCELLED)?v:Promise.reject(v))}function fe(B,Q,H){o.list().forEach(ae=>L(()=>ae(B,Q,H)))}function V(B,Q,H,ae,me){const y=w(B,Q);if(y)return y;const b=Q===Cn,v=gr?history.state:{};H&&(ae||b?a.replace(B.fullPath,Oe({scroll:b&&v&&v.scroll},me)):a.push(B.fullPath,me)),l.value=B,Ge(B,Q,H,b),ne()}let ce;function Me(){ce||(ce=a.listen((B,Q,H)=>{if(!Ne.listening)return;const ae=C(B),me=R(ae,Ne.currentRoute.value);if(me){j(Oe(me,{replace:!0,force:!0}),ae).catch(Yr);return}u=ae;const y=l.value;gr&&Dg(tl(y.fullPath,H.delta),ci()),oe(ae,y).catch(b=>un(b,Qe.NAVIGATION_ABORTED|Qe.NAVIGATION_CANCELLED)?b:un(b,Qe.NAVIGATION_GUARD_REDIRECT)?(j(Oe(O(b.to),{force:!0}),ae).then(v=>{un(v,Qe.NAVIGATION_ABORTED|Qe.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===ss.pop&&a.go(-1,!1)}).catch(Yr),Promise.reject()):(H.delta&&a.go(-H.delta,!1),ke(b,ae,y))).then(b=>{b=b||V(ae,y,!1),b&&(H.delta&&!un(b,Qe.NAVIGATION_CANCELLED)?a.go(-H.delta,!1):H.type===ss.pop&&un(b,Qe.NAVIGATION_ABORTED|Qe.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),fe(ae,y,b)}).catch(Yr)}))}let We=zr(),ye=zr(),be;function ke(B,Q,H){ne(B);const ae=ye.list();return ae.length?ae.forEach(me=>me(B,Q,H)):console.error(B),Promise.reject(B)}function nt(){return be&&l.value!==Cn?Promise.resolve():new Promise((B,Q)=>{We.add([B,Q])})}function ne(B){return be||(be=!B,Me(),We.list().forEach(([Q,H])=>B?H(B):Q()),We.reset()),B}function Ge(B,Q,H,ae){const{scrollBehavior:me}=e;if(!gr||!me)return Promise.resolve();const y=!H&&$g(tl(B.fullPath,0))||(ae||!H)&&history.state&&history.state.scroll||null;return sn().then(()=>me(B,Q,y)).then(b=>b&&Mg(b)).catch(b=>ke(b,B,Q))}const Ve=B=>a.go(B);let Et;const dt=new Set,Ne={currentRoute:l,listening:!0,addRoute:m,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:x,resolve:C,options:e,push:E,replace:z,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:s.add,afterEach:o.add,onError:ye.add,isReady:nt,install(B){B.component("RouterLink",ir),B.component("RouterView",dh),B.config.globalProperties.$router=Ne,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>p(l)}),gr&&!Et&&l.value===Cn&&(Et=!0,E(a.location).catch(ae=>{}));const Q={};for(const ae in Cn)Object.defineProperty(Q,ae,{get:()=>l.value[ae],enumerable:!0});B.provide(Us,Ne),B.provide(js,Rc(Q)),B.provide(as,l);const H=B.unmount;dt.add(B),B.unmount=function(){dt.delete(B),dt.size<1&&(u=Cn,ce&&ce(),ce=null,l.value=Cn,Et=!1,be=!1),H()}}};function Ae(B){return B.reduce((Q,H)=>Q.then(()=>L(H)),Promise.resolve())}return Ne}function Gu(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Gu(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Vu(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Gu(e))&&(r&&(r+=" "),r+=t);return r}const pl=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,ml=Vu,Hu=(e,t)=>n=>{var r;if(t?.variants==null)return ml(e,n?.class,n?.className);const{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(u=>{const c=n?.[u],d=i?.[u];if(c===null)return null;const f=pl(c)||pl(d);return a[u][f]}),o=n&&Object.entries(n).reduce((u,c)=>{let[d,f]=c;return f===void 0||(u[d]=f),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,c)=>{let{class:d,className:f,...m}=c;return Object.entries(m).every(A=>{let[x,T]=A;return Array.isArray(T)?T.includes({...i,...o}[x]):{...i,...o}[x]===T})?[...u,d,f]:u},[]);return ml(e,s,l,n?.class,n?.className)};function ha(e,t){const n=typeof e=="string"&&!t?`${e}Context`:t,r=Symbol(n);return[s=>{const o=Dt(r,s);if(o||o===null)return o;throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},s=>(kr(r,s),s)]}function rn(){let e=document.activeElement;if(e==null)return null;for(;e!=null&&e.shadowRoot!=null&&e.shadowRoot.activeElement!=null;)e=e.shadowRoot.activeElement;return e}function qu(e,t,n){const r=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),r.dispatchEvent(a)}function ph(e){return e==null}function mh(e,t){return bc()?(xf(e,t),!0):!1}function gh(e){let t=!1,n;const r=Ts(!0);return((...a)=>(t||(n=r.run(()=>e(...a)),t=!0),n))}const on=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const hh=e=>typeof e<"u",yh=Object.prototype.toString,vh=e=>yh.call(e)==="[object Object]",gl=bh();function bh(){var e,t,n;return on&&!!(!((e=window)===null||e===void 0||(e=e.navigator)===null||e===void 0)&&e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window)===null||t===void 0||(t=t.navigator)===null||t===void 0?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test((n=window)===null||n===void 0?void 0:n.navigator.userAgent))}function Li(e){return Array.isArray(e)?e:[e]}function _h(e){return Pt()}function kh(e){if(!on)return e;let t=0,n,r;const a=()=>{t-=1,r&&t<=0&&(r.stop(),n=void 0,r=void 0)};return((...i)=>(t+=1,r||(r=Ts(!0),n=r.run(()=>e(...i))),mh(a),n))}function wh(e){return $n(Je(e)?new Proxy({},{get(t,n,r){return p(Reflect.get(e.value,n,r))},set(t,n,r){return Je(e.value[n])&&!Je(r)?e.value[n].value=r:e.value[n]=r,!0},deleteProperty(t,n){return Reflect.deleteProperty(e.value,n)},has(t,n){return Reflect.has(e.value,n)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}}):e)}function Eh(e){return wh(se(e))}function Tn(e,...t){const n=t.flat(),r=n[0];return Eh(()=>Object.fromEntries(typeof r=="function"?Object.entries(zn(e)).filter(([a,i])=>!r(Vt(i),a)):Object.entries(zn(e)).filter(a=>!n.includes(a[0]))))}function xh(e,t){_h()&&si(e,t)}function Ah(e,t,n){return ct(e,t,{...n,immediate:!0})}const Vs=on?window:void 0;function ya(e){var t;const n=Vt(e);return(t=n?.$el)!==null&&t!==void 0?t:n}function Ku(...e){const t=(r,a,i,s)=>(r.addEventListener(a,i,s),()=>r.removeEventListener(a,i,s)),n=se(()=>{const r=Li(Vt(e[0])).filter(a=>a!=null);return r.every(a=>typeof a!="string")?r:void 0});return Ah(()=>{var r,a;return[(r=(a=n.value)===null||a===void 0?void 0:a.map(i=>ya(i)))!==null&&r!==void 0?r:[Vs].filter(i=>i!=null),Li(Vt(n.value?e[1]:e[0])),Li(p(n.value?e[2]:e[1])),Vt(n.value?e[3]:e[2])]},([r,a,i,s],o,l)=>{if(!r?.length||!a?.length||!i?.length)return;const u=vh(s)?{...s}:s,c=r.flatMap(d=>a.flatMap(f=>i.map(m=>t(d,f,m,u))));l(()=>{c.forEach(d=>d())})},{flush:"post"})}function Th(){const e=ua(!1),t=Pt();return t&&An(()=>{e.value=!0},t),e}function Ih(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function Ch(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:a=Vs,eventName:i="keydown",passive:s=!1,dedupe:o=!1}=r,l=Ih(t);return Ku(a,i,c=>{c.repeat&&Vt(o)||l(c)&&n(c)},s)}function Ph(e){return JSON.parse(JSON.stringify(e))}function Hs(e,t,n,r={}){var a,i;const{clone:s=!1,passive:o=!1,eventName:l,deep:u=!1,defaultValue:c,shouldEmit:d}=r,f=Pt(),m=n||f?.emit||(f==null||(a=f.$emit)===null||a===void 0?void 0:a.bind(f))||(f==null||(i=f.proxy)===null||i===void 0||(i=i.$emit)===null||i===void 0?void 0:i.bind(f?.proxy));let A=l;t||(t="modelValue"),A=A||`update:${t.toString()}`;const x=O=>s?typeof s=="function"?s(O):Ph(O):O,T=()=>hh(e[t])?x(e[t]):c,C=O=>{d?d(O)&&m(A,O):m(A,O)};if(o){const O=ve(T());let w=!1;return ct(()=>e[t],E=>{w||(w=!0,O.value=x(E),sn(()=>w=!1))}),ct(O,E=>{!w&&(E!==e[t]||u)&&C(E)},{deep:u}),O}else return se({get(){return T()},set(O){C(O)}})}function qs(e){return e?e.flatMap(t=>t.type===_e?qs(t.children):[t]):[]}const[Yu]=ha("ConfigProvider");function Ni(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function ls(e,t,n=".",r){if(!Ni(t))return ls(e,{},n,r);const a={...t};for(const i of Object.keys(e)){if(i==="__proto__"||i==="constructor")continue;const s=e[i];s!=null&&(r&&r(a,i,s,n)||(Array.isArray(s)&&Array.isArray(a[i])?a[i]=[...s,...a[i]]:Ni(s)&&Ni(a[i])?a[i]=ls(s,a[i],(n?`${n}.`:"")+i.toString(),r):a[i]=s))}return a}function Sh(e){return(...t)=>t.reduce((n,r)=>ls(n,r,"",e),{})}const Oh=Sh(),Lh=kh(()=>{const e=ve(new Map),t=ve(),n=se(()=>{for(const s of e.value.values())if(s)return!0;return!1}),r=Yu({scrollBody:ve(!0)});let a=null;const i=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.documentElement.style.removeProperty("--scrollbar-width"),document.body.style.overflow=t.value??"",gl&&a?.(),t.value=void 0};return ct(n,(s,o)=>{if(!on)return;if(!s){o&&i();return}t.value===void 0&&(t.value=document.body.style.overflow);const l=window.innerWidth-document.documentElement.clientWidth,u={padding:l,margin:0},c=r.scrollBody?.value?typeof r.scrollBody.value=="object"?Oh({padding:r.scrollBody.value.padding===!0?l:r.scrollBody.value.padding,margin:r.scrollBody.value.margin===!0?l:r.scrollBody.value.margin},u):u:{padding:0,margin:0};l>0&&(document.body.style.paddingRight=typeof c.padding=="number"?`${c.padding}px`:String(c.padding),document.body.style.marginRight=typeof c.margin=="number"?`${c.margin}px`:String(c.margin),document.documentElement.style.setProperty("--scrollbar-width",`${l}px`),document.body.style.overflow="hidden"),gl&&(a=Ku(document,"touchmove",d=>Rh(d),{passive:!1})),sn(()=>{n.value&&(document.body.style.pointerEvents="none",document.body.style.overflow="hidden")})},{immediate:!0,flush:"sync"}),e});function Nh(e){const t=Math.random().toString(36).substring(2,7),n=Lh();n.value.set(t,e);const r=se({get:()=>n.value.get(t)??!1,set:a=>n.value.set(t,a)});return xh(()=>{n.value.delete(t)}),r}function Xu(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!(n instanceof Element)||n.tagName==="BODY"?!1:Xu(n)}}function Rh(e){const t=e||window.event,n=t.target;return n instanceof Element&&Xu(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.cancelable&&t.preventDefault(),!1)}function Ju(e){const t=Yu({dir:ve("ltr")});return se(()=>e?.value||t.dir?.value||"ltr")}function ui(e){const t=Pt(),n=t?.type.emits,r={};return n?.length||console.warn(`No emitted event found. Please check component: ${t?.type.__name}`),n?.forEach(a=>{r[Sa(Lt(a))]=(...i)=>e(a,...i)}),r}function ht(){const e=Pt(),t=ve(),n=se(()=>r());nu(()=>{n.value!==r()&&Vf(t)});function r(){return t.value&&"$el"in t.value&&["#text","#comment"].includes(t.value.$el.nodeName)?t.value.$el.nextElementSibling:ya(t)}const a=Object.assign({},e.exposed),i={};for(const o in e.props)Object.defineProperty(i,o,{enumerable:!0,configurable:!0,get:()=>e.props[o]});if(Object.keys(a).length>0)for(const o in a)Object.defineProperty(i,o,{enumerable:!0,configurable:!0,get:()=>a[o]});Object.defineProperty(i,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=i;function s(o){if(t.value=o,!!o&&(Object.defineProperty(i,"$el",{enumerable:!0,configurable:!0,get:()=>o instanceof Element?o:o.$el}),!(o instanceof Element)&&!Object.hasOwn(o,"$el"))){const l=o.$.exposed,u=Object.assign({},i);for(const c in l)Object.defineProperty(u,c,{enumerable:!0,configurable:!0,get:()=>l[c]});e.exposed=u}}return{forwardRef:s,currentRef:t,currentElement:n}}function Zu(e){const t=Pt(),n=Object.keys(t?.type.props??{}).reduce((a,i)=>{const s=(t?.type.props[i]).default;return s!==void 0&&(a[i]=s),a},{}),r=Yf(e);return se(()=>{const a={},i=t?.vnode.props??{};return Object.keys(i).forEach(s=>{a[Lt(s)]=i[s]}),Object.keys({...n,...a}).reduce((s,o)=>(r.value[o]!==void 0&&(s[o]=r.value[o]),s),{})})}function Ks(e,t){const n=Zu(e),r=t?ui(t):{};return se(()=>({...n.value,...r}))}var Mh=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},pr=new WeakMap,Ea=new WeakMap,xa={},Ri=0,Qu=function(e){return e&&(e.host||Qu(e.parentNode))},Dh=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Qu(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},$h=function(e,t,n,r){var a=Dh(t,Array.isArray(e)?e:[e]);xa[n]||(xa[n]=new WeakMap);var i=xa[n],s=[],o=new Set,l=new Set(a),u=function(d){!d||o.has(d)||(o.add(d),u(d.parentNode))};a.forEach(u);var c=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(f){if(o.has(f))c(f);else try{var m=f.getAttribute(r),A=m!==null&&m!=="false",x=(pr.get(f)||0)+1,T=(i.get(f)||0)+1;pr.set(f,x),i.set(f,T),s.push(f),x===1&&A&&Ea.set(f,!0),T===1&&f.setAttribute(n,"true"),A||f.setAttribute(r,"true")}catch(C){console.error("aria-hidden: cannot operate on ",f,C)}})};return c(t),o.clear(),Ri++,function(){s.forEach(function(d){var f=pr.get(d)-1,m=i.get(d)-1;pr.set(d,f),i.set(d,m),f||(Ea.has(d)||d.removeAttribute(r),Ea.delete(d)),m||d.removeAttribute(n)}),Ri--,Ri||(pr=new WeakMap,pr=new WeakMap,Ea=new WeakMap,xa={})}},zh=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=Mh(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live], script"))),$h(r,a,n,"aria-hidden")):function(){return null}};function Fh(e){let t;ct(()=>ya(e),n=>{let r=!1;try{r=!!n?.closest("[popover]:not(:popover-open)")}catch{}n&&!r?t=zh(n):t&&t()}),cr(()=>{t&&t()})}function ia(e,t="reka"){let n;return n=dp?.(),t?`${t}-${n}`:n}function Wh(e,t){const n=ve(e);function r(i){return t[n.value][i]??n.value}return{state:n,dispatch:i=>{n.value=r(i)}}}function Bh(e,t){const n=ve({}),r=ve("none"),a=ve(e),i=e.value?"mounted":"unmounted";let s;const o=t.value?.ownerDocument.defaultView??Vs,{state:l,dispatch:u}=Wh(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),c=T=>{if(on){const C=new CustomEvent(T,{bubbles:!1,cancelable:!1});t.value?.dispatchEvent(C)}};ct(e,async(T,C)=>{const O=C!==T;if(await sn(),O){const w=r.value,E=Aa(t.value);T?(u("MOUNT"),c("enter"),E==="none"&&c("after-enter")):E==="none"||E==="undefined"||n.value?.display==="none"?(u("UNMOUNT"),c("leave"),c("after-leave")):C&&w!==E?(u("ANIMATION_OUT"),c("leave")):(u("UNMOUNT"),c("after-leave"))}},{immediate:!0});const d=T=>{const C=Aa(t.value),O=C.includes(CSS.escape(T.animationName)),w=l.value==="mounted"?"enter":"leave";if(T.target===t.value&&O&&(c(`after-${w}`),u("ANIMATION_END"),!a.value)){const E=t.value.style.animationFillMode;t.value.style.animationFillMode="forwards",s=o?.setTimeout(()=>{t.value?.style.animationFillMode==="forwards"&&(t.value.style.animationFillMode=E)})}T.target===t.value&&C==="none"&&u("ANIMATION_END")},f=T=>{T.target===t.value&&(r.value=Aa(t.value))},m=ct(t,(T,C)=>{T?(n.value=getComputedStyle(T),T.addEventListener("animationstart",f),T.addEventListener("animationcancel",d),T.addEventListener("animationend",d)):(u("ANIMATION_END"),s!==void 0&&o?.clearTimeout(s),C?.removeEventListener("animationstart",f),C?.removeEventListener("animationcancel",d),C?.removeEventListener("animationend",d))},{immediate:!0}),A=ct(l,()=>{const T=Aa(t.value);r.value=l.value==="mounted"?T:"none"});return cr(()=>{m(),A()}),{isPresent:se(()=>["mounted","unmountSuspended"].includes(l.value))}}function Aa(e){return e&&getComputedStyle(e).animationName||"none"}var Ys=Te({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(e,{slots:t,expose:n}){const{present:r,forceMount:a}=zn(e),i=ve(),{isPresent:s}=Bh(r,i);n({present:s});let o=t.default({present:s.value});o=qs(o||[]);const l=Pt();if(o&&o?.length>1){const u=l?.parent?.type.name?`<${l.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${u}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(c=>`  - ${c}`).join(`
`)].join(`
`))}return()=>a.value||r.value||s.value?Ot(t.default({present:s.value})[0],{ref:u=>{const c=ya(u);return typeof c?.hasAttribute>"u"||(c?.hasAttribute("data-reka-popper-content-wrapper")?i.value=c.firstElementChild:i.value=c),c}}):null}});const cs=Te({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:n}){return()=>{if(!n.default)return null;const r=qs(n.default()),a=r.findIndex(l=>l.type!==pt);if(a===-1)return r;const i=r[a];delete i.props?.ref;const s=i.props?Ze(t,i.props):t,o=En({...i,props:{}},s);return r.length===1?o:(r[a]=o,r)}}}),Uh=["area","img","input"],yt=Te({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:n}){const r=e.asChild?"template":e.as;return typeof r=="string"&&Uh.includes(r)?()=>Ot(r,t):r!=="template"?()=>Ot(e.as,t,{default:n.default}):()=>Ot(cs,t,{default:n.default})}});function hl(){const e=ve(),t=se(()=>["#text","#comment"].includes(e.value?.$el.nodeName)?e.value?.$el.nextElementSibling:ya(e));return{primitiveElement:e,currentElement:t}}const[jn,jh]=ha("DialogRoot");var Gh=Te({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,required:!1,default:void 0},defaultOpen:{type:Boolean,required:!1,default:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(e,{emit:t}){const n=e,a=Hs(n,"open",t,{defaultValue:n.defaultOpen,passive:n.open===void 0}),i=ve(),s=ve(),{modal:o}=zn(n);return jh({open:a,modal:o,openModal:()=>{a.value=!0},onOpenChange:l=>{a.value=l},onOpenToggle:()=>{a.value=!a.value},contentId:"",titleId:"",descriptionId:"",triggerElement:i,contentElement:s}),(l,u)=>he(l.$slots,"default",{open:p(a),close:()=>a.value=!1})}}),Vh=Gh,Hh=Te({__name:"DialogClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e;ht();const n=jn();return(r,a)=>(D(),ee(p(yt),Ze(t,{type:r.as==="button"?"button":void 0,onClick:a[0]||(a[0]=i=>p(n).onOpenChange(!1))}),{default:_(()=>[he(r.$slots,"default")]),_:3},16,["type"]))}}),qh=Hh;const Kh="dismissableLayer.pointerDownOutside",Yh="dismissableLayer.focusOutside";function ed(e,t){if(!(t instanceof Element))return!1;const n=t.closest("[data-dismissable-layer]"),r=e.dataset.dismissableLayer===""?e:e.querySelector("[data-dismissable-layer]"),a=Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));return!!(n&&(r===n||a.indexOf(r)<a.indexOf(n)))}function Xh(e,t,n=!0){const r=t?.value?.ownerDocument??globalThis?.document,a=ve(!1),i=ve(()=>{});return wn(s=>{if(!on||!Vt(n))return;const o=async u=>{const c=u.target;if(!(!t?.value||!c)){if(ed(t.value,c)){a.value=!1;return}if(u.target&&!a.value){let m=function(){qu(Kh,e,f)};var d=m;const f={originalEvent:u};u.pointerType==="touch"?(r.removeEventListener("click",i.value),i.value=m,r.addEventListener("click",i.value,{once:!0})):m()}else r.removeEventListener("click",i.value);a.value=!1}},l=window.setTimeout(()=>{r.addEventListener("pointerdown",o)},0);s(()=>{window.clearTimeout(l),r.removeEventListener("pointerdown",o),r.removeEventListener("click",i.value)})}),{onPointerDownCapture:()=>{Vt(n)&&(a.value=!0)}}}function Jh(e,t,n=!0){const r=t?.value?.ownerDocument??globalThis?.document,a=ve(!1);return wn(i=>{if(!on||!Vt(n))return;const s=async o=>{if(!t?.value)return;await sn(),await sn();const l=o.target;!t.value||!l||ed(t.value,l)||o.target&&!a.value&&qu(Yh,e,{originalEvent:o})};r.addEventListener("focusin",s),i(()=>r.removeEventListener("focusin",s))}),{onFocusCapture:()=>{Vt(n)&&(a.value=!0)},onBlurCapture:()=>{Vt(n)&&(a.value=!1)}}}const zt=$n({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,originalBodyPointerEvents:void 0,branches:new Set});var Zh=Te({__name:"DismissableLayer",props:{disableOutsidePointerEvents:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(e,{emit:t}){const n=e,r=t,{forwardRef:a,currentElement:i}=ht(),s=se(()=>i.value?.ownerDocument??globalThis.document),o=se(()=>zt.layersRoot),l=se(()=>i.value?Array.from(o.value).indexOf(i.value):-1),u=se(()=>zt.layersWithOutsidePointerEventsDisabled.size>0),c=se(()=>{const m=Array.from(o.value),[A]=[...zt.layersWithOutsidePointerEventsDisabled].slice(-1),x=m.indexOf(A);return l.value>=x}),d=Xh(async m=>{const A=[...zt.branches].some(x=>x?.contains(m.target));!c.value||A||(r("pointerDownOutside",m),r("interactOutside",m),await sn(),m.defaultPrevented||r("dismiss"))},i),f=Jh(m=>{[...zt.branches].some(x=>x?.contains(m.target))||(r("focusOutside",m),r("interactOutside",m),m.defaultPrevented||r("dismiss"))},i);return Ch("Escape",m=>{l.value===o.value.size-1&&(r("escapeKeyDown",m),m.defaultPrevented||r("dismiss"))}),wn(m=>{i.value&&(n.disableOutsidePointerEvents&&(zt.layersWithOutsidePointerEventsDisabled.size===0&&(zt.originalBodyPointerEvents=s.value.body.style.pointerEvents,s.value.body.style.pointerEvents="none"),zt.layersWithOutsidePointerEventsDisabled.add(i.value)),o.value.add(i.value),m(()=>{n.disableOutsidePointerEvents&&zt.layersWithOutsidePointerEventsDisabled.size===1&&!ph(zt.originalBodyPointerEvents)&&(s.value.body.style.pointerEvents=zt.originalBodyPointerEvents)}))}),wn(m=>{m(()=>{i.value&&(o.value.delete(i.value),zt.layersWithOutsidePointerEventsDisabled.delete(i.value))})}),(m,A)=>(D(),ee(p(yt),{ref:p(a),"as-child":m.asChild,as:m.as,"data-dismissable-layer":"",style:Un({pointerEvents:u.value?c.value?"auto":"none":void 0}),onFocusCapture:p(f).onFocusCapture,onBlurCapture:p(f).onBlurCapture,onPointerdownCapture:p(d).onPointerDownCapture},{default:_(()=>[he(m.$slots,"default")]),_:3},8,["as-child","as","style","onFocusCapture","onBlurCapture","onPointerdownCapture"]))}}),Qh=Zh;const ey=gh(()=>ve([]));function ty(){const e=ey();return{add(t){const n=e.value[0];t!==n&&n?.pause(),e.value=yl(e.value,t),e.value.unshift(t)},remove(t){e.value=yl(e.value,t),e.value[0]?.resume()}}}function yl(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}const Mi="focusScope.autoFocusOnMount",Di="focusScope.autoFocusOnUnmount",vl={bubbles:!1,cancelable:!0};function ny(e,{select:t=!1}={}){const n=rn();for(const r of e)if(Ln(r,{select:t}),rn()!==n)return!0}function ry(e){const t=td(e),n=bl(t,e),r=bl(t.reverse(),e);return[n,r]}function td(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function bl(e,t){for(const n of e)if(!ay(n,{upTo:t}))return n}function ay(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function iy(e){return e instanceof HTMLInputElement&&"select"in e}function Ln(e,{select:t=!1}={}){if(e&&e.focus){const n=rn();e.focus({preventScroll:!0}),e!==n&&iy(e)&&t&&e.select()}}var sy=Te({__name:"FocusScope",props:{loop:{type:Boolean,required:!1,default:!1},trapped:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["mountAutoFocus","unmountAutoFocus"],setup(e,{emit:t}){const n=e,r=t,{currentRef:a,currentElement:i}=ht(),s=ve(null),o=ty(),l=$n({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});wn(c=>{if(!on)return;const d=i.value;if(!n.trapped)return;function f(T){if(l.paused||!d)return;const C=T.target;d.contains(C)?s.value=C:Ln(s.value,{select:!0})}function m(T){if(l.paused||!d)return;const C=T.relatedTarget;C!==null&&(d.contains(C)||Ln(s.value,{select:!0}))}function A(T){const C=s.value;if(C===null||!T.some(E=>E.removedNodes.length>0))return;d.contains(C)||Ln(d)}document.addEventListener("focusin",f),document.addEventListener("focusout",m);const x=new MutationObserver(A);d&&x.observe(d,{childList:!0,subtree:!0}),c(()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",m),x.disconnect()})}),wn(async c=>{const d=i.value;if(await sn(),!d)return;o.add(l);const f=rn();if(!d.contains(f)){const A=new CustomEvent(Mi,vl);d.addEventListener(Mi,x=>r("mountAutoFocus",x)),d.dispatchEvent(A),A.defaultPrevented||(ny(td(d),{select:!0}),rn()===f&&Ln(d))}c(()=>{d.removeEventListener(Mi,T=>r("mountAutoFocus",T));const A=new CustomEvent(Di,vl),x=T=>{r("unmountAutoFocus",T)};d.addEventListener(Di,x),d.dispatchEvent(A),setTimeout(()=>{A.defaultPrevented||Ln(f??document.body,{select:!0}),d.removeEventListener(Di,x),o.remove(l)},0)})});function u(c){if(!n.loop&&!n.trapped||l.paused)return;const d=c.key==="Tab"&&!c.altKey&&!c.ctrlKey&&!c.metaKey,f=rn();if(d&&f){const m=c.currentTarget,[A,x]=ry(m);A&&x?!c.shiftKey&&f===x?(c.preventDefault(),n.loop&&Ln(A,{select:!0})):c.shiftKey&&f===A&&(c.preventDefault(),n.loop&&Ln(x,{select:!0})):f===m&&c.preventDefault()}}return(c,d)=>(D(),ee(p(yt),{ref_key:"currentRef",ref:a,tabindex:"-1","as-child":c.asChild,as:c.as,onKeydown:u},{default:_(()=>[he(c.$slots,"default")]),_:3},8,["as-child","as"]))}}),oy=sy;function ly(e){return e?"open":"closed"}var cy=Te({__name:"DialogContentImpl",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,r=t,a=jn(),{forwardRef:i,currentElement:s}=ht();return a.titleId||=ia(void 0,"reka-dialog-title"),a.descriptionId||=ia(void 0,"reka-dialog-description"),An(()=>{a.contentElement=s,rn()!==document.body&&(a.triggerElement.value=rn())}),(o,l)=>(D(),ee(p(oy),{"as-child":"",loop:"",trapped:n.trapFocus,onMountAutoFocus:l[5]||(l[5]=u=>r("openAutoFocus",u)),onUnmountAutoFocus:l[6]||(l[6]=u=>r("closeAutoFocus",u))},{default:_(()=>[k(p(Qh),Ze({id:p(a).contentId,ref:p(i),as:o.as,"as-child":o.asChild,"disable-outside-pointer-events":o.disableOutsidePointerEvents,role:"dialog","aria-describedby":p(a).descriptionId,"aria-labelledby":p(a).titleId,"data-state":p(ly)(p(a).open.value)},o.$attrs,{onDismiss:l[0]||(l[0]=u=>p(a).onOpenChange(!1)),onEscapeKeyDown:l[1]||(l[1]=u=>r("escapeKeyDown",u)),onFocusOutside:l[2]||(l[2]=u=>r("focusOutside",u)),onInteractOutside:l[3]||(l[3]=u=>r("interactOutside",u)),onPointerDownOutside:l[4]||(l[4]=u=>r("pointerDownOutside",u))}),{default:_(()=>[he(o.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),nd=cy,uy=Te({__name:"DialogContentModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,r=t,a=jn(),i=ui(r),{forwardRef:s,currentElement:o}=ht();return Fh(o),(l,u)=>(D(),ee(nd,Ze({...n,...p(i)},{ref:p(s),"trap-focus":p(a).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:u[0]||(u[0]=c=>{c.defaultPrevented||(c.preventDefault(),p(a).triggerElement.value?.focus())}),onPointerDownOutside:u[1]||(u[1]=c=>{const d=c.detail.originalEvent,f=d.button===0&&d.ctrlKey===!0;(d.button===2||f)&&c.preventDefault()}),onFocusOutside:u[2]||(u[2]=c=>{c.preventDefault()})}),{default:_(()=>[he(l.$slots,"default")]),_:3},16,["trap-focus"]))}}),dy=uy,fy=Te({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,a=ui(t);ht();const i=jn(),s=ve(!1),o=ve(!1);return(l,u)=>(D(),ee(nd,Ze({...n,...p(a)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:u[0]||(u[0]=c=>{c.defaultPrevented||(s.value||p(i).triggerElement.value?.focus(),c.preventDefault()),s.value=!1,o.value=!1}),onInteractOutside:u[1]||(u[1]=c=>{c.defaultPrevented||(s.value=!0,c.detail.originalEvent.type==="pointerdown"&&(o.value=!0));const d=c.target;p(i).triggerElement.value?.contains(d)&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&o.value&&c.preventDefault()})}),{default:_(()=>[he(l.$slots,"default")]),_:3},16))}}),py=fy,my=Te({__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,r=t,a=jn(),i=ui(r),{forwardRef:s}=ht();return(o,l)=>(D(),ee(p(Ys),{present:o.forceMount||p(a).open.value},{default:_(()=>[p(a).modal.value?(D(),ee(dy,Ze({key:0,ref:p(s)},{...n,...p(i),...o.$attrs}),{default:_(()=>[he(o.$slots,"default")]),_:3},16)):(D(),ee(py,Ze({key:1,ref:p(s)},{...n,...p(i),...o.$attrs}),{default:_(()=>[he(o.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),gy=my,hy=Te({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=jn();return Nh(!0),ht(),(n,r)=>(D(),ee(p(yt),{as:n.as,"as-child":n.asChild,"data-state":p(t).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:_(()=>[he(n.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),yy=hy,vy=Te({__name:"DialogOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=jn(),{forwardRef:n}=ht();return(r,a)=>p(t)?.modal.value?(D(),ee(p(Ys),{key:0,present:r.forceMount||p(t).open.value},{default:_(()=>[k(yy,Ze(r.$attrs,{ref:p(n),as:r.as,"as-child":r.asChild}),{default:_(()=>[he(r.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):Wt("v-if",!0)}}),by=vy,_y=Te({__name:"Teleport",props:{to:{type:null,required:!1,default:"body"},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const t=Th();return(n,r)=>p(t)||n.forceMount?(D(),ee(op,{key:0,to:n.to,disabled:n.disabled,defer:n.defer},[he(n.$slots,"default")],8,["to","disabled","defer"])):Wt("v-if",!0)}}),ky=_y,wy=Te({__name:"DialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const t=e;return(n,r)=>(D(),ee(p(ky),ei(ma(t)),{default:_(()=>[he(n.$slots,"default")]),_:3},16))}}),Ey=wy,xy=Te({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e,n=jn(),{forwardRef:r,currentElement:a}=ht();return n.contentId||=ia(void 0,"reka-dialog-content"),An(()=>{n.triggerElement.value=a.value}),(i,s)=>(D(),ee(p(yt),Ze(t,{ref:p(r),type:i.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":p(n).open.value||!1,"aria-controls":p(n).open.value?p(n).contentId:void 0,"data-state":p(n).open.value?"open":"closed",onClick:p(n).onOpenToggle}),{default:_(()=>[he(i.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),Ay=xy;const _l="data-reka-collection-item";function rd(e={}){const{key:t="",isProvider:n=!1}=e,r=`${t}CollectionProvider`;let a;n?(a={collectionRef:ve(),itemMap:ve(new Map)},kr(r,a)):a=Dt(r);const i=(c=!1)=>{const d=a.collectionRef.value;if(!d)return[];const f=Array.from(d.querySelectorAll(`[${_l}]`)),A=Array.from(a.itemMap.value.values()).sort((x,T)=>f.indexOf(x.ref)-f.indexOf(T.ref));return c?A:A.filter(x=>x.ref.dataset.disabled!=="")},s=Te({name:"CollectionSlot",inheritAttrs:!1,setup(c,{slots:d,attrs:f}){const{primitiveElement:m,currentElement:A}=hl();return ct(A,()=>{a.collectionRef.value=A.value}),()=>Ot(cs,{ref:m,...f},d)}}),o=Te({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(c,{slots:d,attrs:f}){const{primitiveElement:m,currentElement:A}=hl();return wn(x=>{if(A.value){const T=Mc(A.value);a.itemMap.value.set(T,{ref:A.value,value:c.value}),x(()=>a.itemMap.value.delete(T))}}),()=>Ot(cs,{...f,[_l]:"",ref:m},d)}}),l=se(()=>Array.from(a.itemMap.value.values())),u=se(()=>a.itemMap.value.size);return{getItems:i,reactiveItems:l,itemMapSize:u,CollectionSlot:s,CollectionItem:o}}const Ty="rovingFocusGroup.onEntryFocus",Iy={bubbles:!1,cancelable:!0},Cy={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Py(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Sy(e,t,n){const r=Py(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Cy[r]}function ad(e,t=!1){const n=rn();for(const r of e)if(r===n||(r.focus({preventScroll:t}),rn()!==n))return}function Oy(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const[id,Ly]=ha("AvatarRoot");var Ny=Te({__name:"AvatarRoot",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){return ht(),Ly({imageLoadingStatus:ve("idle")}),(t,n)=>(D(),ee(p(yt),{"as-child":t.asChild,as:t.as},{default:_(()=>[he(t.$slots,"default")]),_:3},8,["as-child","as"]))}}),Ry=Ny,My=Te({__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const t=e,n=id();ht();const r=ve(t.delayMs===void 0);return wn(a=>{if(t.delayMs&&on){const i=window.setTimeout(()=>{r.value=!0},t.delayMs);a(()=>{window.clearTimeout(i)})}}),(a,i)=>r.value&&p(n).imageLoadingStatus.value!=="loaded"?(D(),ee(p(yt),{key:0,"as-child":a.asChild,as:a.as},{default:_(()=>[he(a.$slots,"default")]),_:3},8,["as-child","as"])):Wt("v-if",!0)}}),Dy=My;function kl(e,t){return e?t?(e.src!==t&&(e.src=t),e.complete&&e.naturalWidth>0?"loaded":"loading"):"error":"idle"}function $y(e,{referrerPolicy:t,crossOrigin:n}={}){const r=ve(!1),a=ve(null),i=se(()=>r.value?(!a.value&&on&&(a.value=new window.Image),a.value):null),s=ve(kl(i.value,e.value)),o=l=>()=>{r.value&&(s.value=l)};return An(()=>{r.value=!0,wn(l=>{const u=i.value;if(!u)return;s.value=kl(u,e.value);const c=o("loaded"),d=o("error");u.addEventListener("load",c),u.addEventListener("error",d),t?.value&&(u.referrerPolicy=t.value),typeof n?.value=="string"&&(u.crossOrigin=n.value),l(()=>{u.removeEventListener("load",c),u.removeEventListener("error",d)})})}),cr(()=>{r.value=!1}),s}var zy=Te({__name:"AvatarImage",props:{src:{type:String,required:!0},referrerPolicy:{type:null,required:!1},crossOrigin:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"img"}},emits:["loadingStatusChange"],setup(e,{emit:t}){const n=e,r=t,{src:a,referrerPolicy:i,crossOrigin:s}=zn(n);ht();const o=id(),l=$y(a,{referrerPolicy:i,crossOrigin:s});return ct(l,u=>{r("loadingStatusChange",u),u!=="idle"&&(o.imageLoadingStatus.value=u)},{immediate:!0}),(u,c)=>Pe((D(),ee(p(yt),{role:"img","as-child":u.asChild,as:u.as,src:p(a),referrerpolicy:p(i),crossorigin:p(s)},{default:_(()=>[he(u.$slots,"default")]),_:3},8,["as-child","as","src","referrerpolicy","crossorigin"])),[[gm,p(l)==="loaded"]])}}),Fy=zy;const[Wy,By]=ha("RovingFocusGroup");var Uy=Te({__name:"RovingFocusGroup",props:{orientation:{type:String,required:!1,default:void 0},dir:{type:String,required:!1},loop:{type:Boolean,required:!1,default:!1},currentTabStopId:{type:[String,null],required:!1},defaultCurrentTabStopId:{type:String,required:!1},preventScrollOnEntryFocus:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["entryFocus","update:currentTabStopId"],setup(e,{expose:t,emit:n}){const r=e,a=n,{loop:i,orientation:s,dir:o}=zn(r),l=Ju(o),u=Hs(r,"currentTabStopId",a,{defaultValue:r.defaultCurrentTabStopId,passive:r.currentTabStopId===void 0}),c=ve(!1),d=ve(!1),f=ve(0),{getItems:m,CollectionSlot:A}=rd({isProvider:!0});function x(C){const O=!d.value;if(C.currentTarget&&C.target===C.currentTarget&&O&&!c.value){const w=new CustomEvent(Ty,Iy);if(C.currentTarget.dispatchEvent(w),a("entryFocus",w),!w.defaultPrevented){const E=m().map(L=>L.ref).filter(L=>L.dataset.disabled!==""),z=E.find(L=>L.getAttribute("data-active")===""),R=E.find(L=>L.getAttribute("data-highlighted")===""),j=E.find(L=>L.id===u.value),$=[z,R,j,...E].filter(Boolean);ad($,r.preventScrollOnEntryFocus)}}d.value=!1}function T(){setTimeout(()=>{d.value=!1},1)}return t({getItems:m}),By({loop:i,dir:l,orientation:s,currentTabStopId:u,onItemFocus:C=>{u.value=C},onItemShiftTab:()=>{c.value=!0},onFocusableItemAdd:()=>{f.value++},onFocusableItemRemove:()=>{f.value--}}),(C,O)=>(D(),ee(p(A),null,{default:_(()=>[k(p(yt),{tabindex:c.value||f.value===0?-1:0,"data-orientation":p(s),as:C.as,"as-child":C.asChild,dir:p(l),style:{outline:"none"},onMousedown:O[0]||(O[0]=w=>d.value=!0),onMouseup:T,onFocus:x,onBlur:O[1]||(O[1]=w=>c.value=!1)},{default:_(()=>[he(C.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"])]),_:3}))}}),jy=Uy,Gy=Te({__name:"RovingFocusItem",props:{tabStopId:{type:String,required:!1},focusable:{type:Boolean,required:!1,default:!0},active:{type:Boolean,required:!1},allowShiftKey:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const t=e,n=Wy(),r=ia(),a=se(()=>t.tabStopId||r),i=se(()=>n.currentTabStopId.value===a.value),{getItems:s,CollectionItem:o}=rd();An(()=>{t.focusable&&n.onFocusableItemAdd()}),cr(()=>{t.focusable&&n.onFocusableItemRemove()});function l(u){if(u.key==="Tab"&&u.shiftKey){n.onItemShiftTab();return}if(u.target!==u.currentTarget)return;const c=Sy(u,n.orientation.value,n.dir.value);if(c!==void 0){if(u.metaKey||u.ctrlKey||u.altKey||!t.allowShiftKey&&u.shiftKey)return;u.preventDefault();let d=[...s().map(f=>f.ref).filter(f=>f.dataset.disabled!=="")];if(c==="last")d.reverse();else if(c==="prev"||c==="next"){c==="prev"&&d.reverse();const f=d.indexOf(u.currentTarget);d=n.loop.value?Oy(d,f+1):d.slice(f+1)}sn(()=>ad(d))}}return(u,c)=>(D(),ee(p(o),null,{default:_(()=>[k(p(yt),{tabindex:i.value?0:-1,"data-orientation":p(n).orientation.value,"data-active":u.active?"":void 0,"data-disabled":u.focusable?void 0:"",as:u.as,"as-child":u.asChild,onMousedown:c[0]||(c[0]=d=>{u.focusable?p(n).onItemFocus(a.value):d.preventDefault()}),onFocus:c[1]||(c[1]=d=>p(n).onItemFocus(a.value)),onKeydown:l},{default:_(()=>[he(u.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),Vy=Gy,Hy=Te({__name:"BaseSeparator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e,n=["horizontal","vertical"];function r(o){return n.includes(o)}const a=se(()=>r(t.orientation)?t.orientation:"horizontal"),i=se(()=>a.value==="vertical"?t.orientation:void 0),s=se(()=>t.decorative?{role:"none"}:{"aria-orientation":i.value,role:"separator"});return(o,l)=>(D(),ee(p(yt),Ze({as:o.as,"as-child":o.asChild,"data-orientation":a.value},s.value),{default:_(()=>[he(o.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),qy=Hy,Ky=Te({__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),ee(qy,ei(ma(t)),{default:_(()=>[he(n.$slots,"default")]),_:3},16))}}),Yy=Ky;const[Xs,Xy]=ha("TabsRoot");var Jy=Te({__name:"TabsRoot",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},activationMode:{type:String,required:!1,default:"automatic"},modelValue:{type:null,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,{orientation:a,unmountOnHide:i,dir:s}=zn(n),o=Ju(s);ht();const l=Hs(n,"modelValue",r,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),u=ve(),c=ua(new Set);return Xy({modelValue:l,changeModelValue:d=>{l.value=d},orientation:a,dir:o,unmountOnHide:i,activationMode:n.activationMode,baseId:ia(void 0,"reka-tabs"),tabsList:u,contentIds:c,registerContent:d=>{c.value=new Set([...c.value,d])},unregisterContent:d=>{const f=new Set(c.value);f.delete(d),c.value=f}}),(d,f)=>(D(),ee(p(yt),{dir:p(o),"data-orientation":p(a),"as-child":d.asChild,as:d.as},{default:_(()=>[he(d.$slots,"default",{modelValue:p(l)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),Zy=Jy;function sd(e,t){return`${e}-trigger-${t}`}function od(e,t){return`${e}-content-${t}`}var Qy=Te({__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e,{forwardRef:n}=ht(),r=Xs(),a=se(()=>sd(r.baseId,t.value)),i=se(()=>od(r.baseId,t.value)),s=se(()=>t.value===r.modelValue.value),o=ve(s.value);return An(()=>{r.registerContent(t.value),requestAnimationFrame(()=>{o.value=!1})}),si(()=>{r.unregisterContent(t.value)}),(l,u)=>(D(),ee(p(Ys),{present:l.forceMount||s.value,"force-mount":""},{default:_(({present:c})=>[k(p(yt),{id:i.value,ref:p(n),"as-child":l.asChild,as:l.as,role:"tabpanel","data-state":s.value?"active":"inactive","data-orientation":p(r).orientation.value,"aria-labelledby":a.value,hidden:!c,tabindex:"0",style:Un({animationDuration:o.value?"0s":void 0})},{default:_(()=>[!p(r).unmountOnHide.value||c?he(l.$slots,"default",{key:0}):Wt("v-if",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),ev=Qy,tv=Te({__name:"TabsList",props:{loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e,{loop:n}=zn(t),{forwardRef:r,currentElement:a}=ht(),i=Xs();return i.tabsList=a,(s,o)=>(D(),ee(p(jy),{"as-child":"",orientation:p(i).orientation.value,dir:p(i).dir.value,loop:p(n)},{default:_(()=>[k(p(yt),{ref:p(r),role:"tablist","as-child":s.asChild,as:s.as,"aria-orientation":p(i).orientation.value},{default:_(()=>[he(s.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}}),nv=tv,rv=Te({__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e,{forwardRef:n}=ht(),r=Xs(),a=se(()=>sd(r.baseId,t.value)),i=se(()=>r.contentIds.value.has(t.value)?od(r.baseId,t.value):void 0),s=se(()=>t.value===r.modelValue.value);return(o,l)=>(D(),ee(p(Vy),{"as-child":"",focusable:!o.disabled,active:s.value},{default:_(()=>[k(p(yt),{id:a.value,ref:p(n),role:"tab",type:o.as==="button"?"button":void 0,as:o.as,"as-child":o.asChild,"aria-selected":s.value?"true":"false","aria-controls":i.value,"data-state":s.value?"active":"inactive",disabled:o.disabled,"data-disabled":o.disabled?"":void 0,"data-orientation":p(r).orientation.value,onMousedown:l[0]||(l[0]=Lm(u=>{!o.disabled&&u.ctrlKey===!1?p(r).changeModelValue(o.value):u.preventDefault()},["left"])),onKeydown:l[1]||(l[1]=Rm(u=>p(r).changeModelValue(o.value),["enter","space"])),onFocus:l[2]||(l[2]=()=>{const u=p(r).activationMode!=="manual";!s.value&&!o.disabled&&u&&p(r).changeModelValue(o.value)})},{default:_(()=>[he(o.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),av=rv;const iv=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},sv=(e,t)=>({classGroupId:e,validator:t}),ld=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Ha="-",wl=[],ov="arbitrary..",lv=e=>{const t=uv(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{if(s.startsWith("[")&&s.endsWith("]"))return cv(s);const o=s.split(Ha),l=o[0]===""&&o.length>1?1:0;return cd(o,l,t)},getConflictingClassGroupIds:(s,o)=>{if(o){const l=r[s],u=n[s];return l?u?iv(u,l):l:u||wl}return n[s]||wl}}},cd=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const a=e[t],i=n.nextPart.get(a);if(i){const u=cd(e,t+1,i);if(u)return u}const s=n.validators;if(s===null)return;const o=t===0?e.join(Ha):e.slice(t).join(Ha),l=s.length;for(let u=0;u<l;u++){const c=s[u];if(c.validator(o))return c.classGroupId}},cv=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?ov+r:void 0})(),uv=e=>{const{theme:t,classGroups:n}=e;return dv(n,t)},dv=(e,t)=>{const n=ld();for(const r in e){const a=e[r];Js(a,n,r,t)}return n},Js=(e,t,n,r)=>{const a=e.length;for(let i=0;i<a;i++){const s=e[i];fv(s,t,n,r)}},fv=(e,t,n,r)=>{if(typeof e=="string"){pv(e,t,n);return}if(typeof e=="function"){mv(e,t,n,r);return}gv(e,t,n,r)},pv=(e,t,n)=>{const r=e===""?t:ud(t,e);r.classGroupId=n},mv=(e,t,n,r)=>{if(hv(e)){Js(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(sv(n,e))},gv=(e,t,n,r)=>{const a=Object.entries(e),i=a.length;for(let s=0;s<i;s++){const[o,l]=a[s];Js(l,ud(t,o),n,r)}},ud=(e,t)=>{let n=e;const r=t.split(Ha),a=r.length;for(let i=0;i<a;i++){const s=r[i];let o=n.nextPart.get(s);o||(o=ld(),n.nextPart.set(s,o)),n=o}return n},hv=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,yv=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const a=(i,s)=>{n[i]=s,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(i){let s=n[i];if(s!==void 0)return s;if((s=r[i])!==void 0)return a(i,s),s},set(i,s){i in n?n[i]=s:a(i,s)}}},us="!",El=":",vv=[],xl=(e,t,n,r,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:a}),bv=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=a=>{const i=[];let s=0,o=0,l=0,u;const c=a.length;for(let x=0;x<c;x++){const T=a[x];if(s===0&&o===0){if(T===El){i.push(a.slice(l,x)),l=x+1;continue}if(T==="/"){u=x;continue}}T==="["?s++:T==="]"?s--:T==="("?o++:T===")"&&o--}const d=i.length===0?a:a.slice(l);let f=d,m=!1;d.endsWith(us)?(f=d.slice(0,-1),m=!0):d.startsWith(us)&&(f=d.slice(1),m=!0);const A=u&&u>l?u-l:void 0;return xl(i,m,f,A)};if(t){const a=t+El,i=r;r=s=>s.startsWith(a)?i(s.slice(a.length)):xl(vv,!1,s,void 0,!0)}if(n){const a=r;r=i=>n({className:i,parseClassName:a})}return r},_v=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let a=[];for(let i=0;i<n.length;i++){const s=n[i],o=s[0]==="[",l=t.has(s);o||l?(a.length>0&&(a.sort(),r.push(...a),a=[]),r.push(s)):a.push(s)}return a.length>0&&(a.sort(),r.push(...a)),r}},kv=e=>({cache:yv(e.cacheSize),parseClassName:bv(e),sortModifiers:_v(e),...lv(e)}),wv=/\s+/,Ev=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=t,s=[],o=e.trim().split(wv);let l="";for(let u=o.length-1;u>=0;u-=1){const c=o[u],{isExternal:d,modifiers:f,hasImportantModifier:m,baseClassName:A,maybePostfixModifierPosition:x}=n(c);if(d){l=c+(l.length>0?" "+l:l);continue}let T=!!x,C=r(T?A.substring(0,x):A);if(!C){if(!T){l=c+(l.length>0?" "+l:l);continue}if(C=r(A),!C){l=c+(l.length>0?" "+l:l);continue}T=!1}const O=f.length===0?"":f.length===1?f[0]:i(f).join(":"),w=m?O+us:O,E=w+C;if(s.indexOf(E)>-1)continue;s.push(E);const z=a(C,T);for(let R=0;R<z.length;++R){const j=z[R];s.push(w+j)}l=c+(l.length>0?" "+l:l)}return l},xv=(...e)=>{let t=0,n,r,a="";for(;t<e.length;)(n=e[t++])&&(r=dd(n))&&(a&&(a+=" "),a+=r);return a},dd=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=dd(e[r]))&&(n&&(n+=" "),n+=t);return n},Av=(e,...t)=>{let n,r,a,i;const s=l=>{const u=t.reduce((c,d)=>d(c),e());return n=kv(u),r=n.cache.get,a=n.cache.set,i=o,o(l)},o=l=>{const u=r(l);if(u)return u;const c=Ev(l,n);return a(l,c),c};return i=s,(...l)=>i(xv(...l))},Tv=[],rt=e=>{const t=n=>n[e]||Tv;return t.isThemeGetter=!0,t},fd=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,pd=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Iv=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Cv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Pv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Sv=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ov=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Lv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Pn=e=>Iv.test(e),we=e=>!!e&&!Number.isNaN(Number(e)),Sn=e=>!!e&&Number.isInteger(Number(e)),$i=e=>e.endsWith("%")&&we(e.slice(0,-1)),dn=e=>Cv.test(e),md=()=>!0,Nv=e=>Pv.test(e)&&!Sv.test(e),Zs=()=>!1,Rv=e=>Ov.test(e),Mv=e=>Lv.test(e),Dv=e=>!re(e)&&!ie(e),$v=e=>Gn(e,yd,Zs),re=e=>fd.test(e),er=e=>Gn(e,vd,Nv),Al=e=>Gn(e,Vv,we),zv=e=>Gn(e,_d,md),Fv=e=>Gn(e,bd,Zs),Tl=e=>Gn(e,gd,Zs),Wv=e=>Gn(e,hd,Mv),Ta=e=>Gn(e,kd,Rv),ie=e=>pd.test(e),Fr=e=>ur(e,vd),Bv=e=>ur(e,bd),Il=e=>ur(e,gd),Uv=e=>ur(e,yd),jv=e=>ur(e,hd),Ia=e=>ur(e,kd,!0),Gv=e=>ur(e,_d,!0),Gn=(e,t,n)=>{const r=fd.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},ur=(e,t,n=!1)=>{const r=pd.exec(e);return r?r[1]?t(r[1]):n:!1},gd=e=>e==="position"||e==="percentage",hd=e=>e==="image"||e==="url",yd=e=>e==="length"||e==="size"||e==="bg-size",vd=e=>e==="length",Vv=e=>e==="number",bd=e=>e==="family-name",_d=e=>e==="number"||e==="weight",kd=e=>e==="shadow",Hv=()=>{const e=rt("color"),t=rt("font"),n=rt("text"),r=rt("font-weight"),a=rt("tracking"),i=rt("leading"),s=rt("breakpoint"),o=rt("container"),l=rt("spacing"),u=rt("radius"),c=rt("shadow"),d=rt("inset-shadow"),f=rt("text-shadow"),m=rt("drop-shadow"),A=rt("blur"),x=rt("perspective"),T=rt("aspect"),C=rt("ease"),O=rt("animate"),w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],E=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],z=()=>[...E(),ie,re],R=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],$=()=>[ie,re,l],L=()=>[Pn,"full","auto",...$()],oe=()=>[Sn,"none","subgrid",ie,re],fe=()=>["auto",{span:["full",Sn,ie,re]},Sn,ie,re],V=()=>[Sn,"auto",ie,re],ce=()=>["auto","min","max","fr",ie,re],Me=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],We=()=>["start","end","center","stretch","center-safe","end-safe"],ye=()=>["auto",...$()],be=()=>[Pn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...$()],ke=()=>[Pn,"screen","full","dvw","lvw","svw","min","max","fit",...$()],nt=()=>[Pn,"screen","full","lh","dvh","lvh","svh","min","max","fit",...$()],ne=()=>[e,ie,re],Ge=()=>[...E(),Il,Tl,{position:[ie,re]}],Ve=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Et=()=>["auto","cover","contain",Uv,$v,{size:[ie,re]}],dt=()=>[$i,Fr,er],Ne=()=>["","none","full",u,ie,re],Ae=()=>["",we,Fr,er],B=()=>["solid","dashed","dotted","double"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>[we,$i,Il,Tl],ae=()=>["","none",A,ie,re],me=()=>["none",we,ie,re],y=()=>["none",we,ie,re],b=()=>[we,ie,re],v=()=>[Pn,"full",...$()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[dn],breakpoint:[dn],color:[md],container:[dn],"drop-shadow":[dn],ease:["in","out","in-out"],font:[Dv],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[dn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[dn],shadow:[dn],spacing:["px",we],text:[dn],"text-shadow":[dn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Pn,re,ie,T]}],container:["container"],columns:[{columns:[we,re,ie,o]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:z()}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:L()}],"inset-x":[{"inset-x":L()}],"inset-y":[{"inset-y":L()}],start:[{"inset-s":L(),start:L()}],end:[{"inset-e":L(),end:L()}],"inset-bs":[{"inset-bs":L()}],"inset-be":[{"inset-be":L()}],top:[{top:L()}],right:[{right:L()}],bottom:[{bottom:L()}],left:[{left:L()}],visibility:["visible","invisible","collapse"],z:[{z:[Sn,"auto",ie,re]}],basis:[{basis:[Pn,"full","auto",o,...$()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[we,Pn,"auto","initial","none",re]}],grow:[{grow:["",we,ie,re]}],shrink:[{shrink:["",we,ie,re]}],order:[{order:[Sn,"first","last","none",ie,re]}],"grid-cols":[{"grid-cols":oe()}],"col-start-end":[{col:fe()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":oe()}],"row-start-end":[{row:fe()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ce()}],"auto-rows":[{"auto-rows":ce()}],gap:[{gap:$()}],"gap-x":[{"gap-x":$()}],"gap-y":[{"gap-y":$()}],"justify-content":[{justify:[...Me(),"normal"]}],"justify-items":[{"justify-items":[...We(),"normal"]}],"justify-self":[{"justify-self":["auto",...We()]}],"align-content":[{content:["normal",...Me()]}],"align-items":[{items:[...We(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...We(),{baseline:["","last"]}]}],"place-content":[{"place-content":Me()}],"place-items":[{"place-items":[...We(),"baseline"]}],"place-self":[{"place-self":["auto",...We()]}],p:[{p:$()}],px:[{px:$()}],py:[{py:$()}],ps:[{ps:$()}],pe:[{pe:$()}],pbs:[{pbs:$()}],pbe:[{pbe:$()}],pt:[{pt:$()}],pr:[{pr:$()}],pb:[{pb:$()}],pl:[{pl:$()}],m:[{m:ye()}],mx:[{mx:ye()}],my:[{my:ye()}],ms:[{ms:ye()}],me:[{me:ye()}],mbs:[{mbs:ye()}],mbe:[{mbe:ye()}],mt:[{mt:ye()}],mr:[{mr:ye()}],mb:[{mb:ye()}],ml:[{ml:ye()}],"space-x":[{"space-x":$()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":$()}],"space-y-reverse":["space-y-reverse"],size:[{size:be()}],"inline-size":[{inline:["auto",...ke()]}],"min-inline-size":[{"min-inline":["auto",...ke()]}],"max-inline-size":[{"max-inline":["none",...ke()]}],"block-size":[{block:["auto",...nt()]}],"min-block-size":[{"min-block":["auto",...nt()]}],"max-block-size":[{"max-block":["none",...nt()]}],w:[{w:[o,"screen",...be()]}],"min-w":[{"min-w":[o,"screen","none",...be()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[s]},...be()]}],h:[{h:["screen","lh",...be()]}],"min-h":[{"min-h":["screen","lh","none",...be()]}],"max-h":[{"max-h":["screen","lh",...be()]}],"font-size":[{text:["base",n,Fr,er]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Gv,zv]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",$i,re]}],"font-family":[{font:[Bv,Fv,t]}],"font-features":[{"font-features":[re]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,ie,re]}],"line-clamp":[{"line-clamp":[we,"none",ie,Al]}],leading:[{leading:[i,...$()]}],"list-image":[{"list-image":["none",ie,re]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ie,re]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:ne()}],"text-color":[{text:ne()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:[we,"from-font","auto",ie,er]}],"text-decoration-color":[{decoration:ne()}],"underline-offset":[{"underline-offset":[we,"auto",ie,re]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ie,re]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ie,re]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Ge()}],"bg-repeat":[{bg:Ve()}],"bg-size":[{bg:Et()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Sn,ie,re],radial:["",ie,re],conic:[Sn,ie,re]},jv,Wv]}],"bg-color":[{bg:ne()}],"gradient-from-pos":[{from:dt()}],"gradient-via-pos":[{via:dt()}],"gradient-to-pos":[{to:dt()}],"gradient-from":[{from:ne()}],"gradient-via":[{via:ne()}],"gradient-to":[{to:ne()}],rounded:[{rounded:Ne()}],"rounded-s":[{"rounded-s":Ne()}],"rounded-e":[{"rounded-e":Ne()}],"rounded-t":[{"rounded-t":Ne()}],"rounded-r":[{"rounded-r":Ne()}],"rounded-b":[{"rounded-b":Ne()}],"rounded-l":[{"rounded-l":Ne()}],"rounded-ss":[{"rounded-ss":Ne()}],"rounded-se":[{"rounded-se":Ne()}],"rounded-ee":[{"rounded-ee":Ne()}],"rounded-es":[{"rounded-es":Ne()}],"rounded-tl":[{"rounded-tl":Ne()}],"rounded-tr":[{"rounded-tr":Ne()}],"rounded-br":[{"rounded-br":Ne()}],"rounded-bl":[{"rounded-bl":Ne()}],"border-w":[{border:Ae()}],"border-w-x":[{"border-x":Ae()}],"border-w-y":[{"border-y":Ae()}],"border-w-s":[{"border-s":Ae()}],"border-w-e":[{"border-e":Ae()}],"border-w-bs":[{"border-bs":Ae()}],"border-w-be":[{"border-be":Ae()}],"border-w-t":[{"border-t":Ae()}],"border-w-r":[{"border-r":Ae()}],"border-w-b":[{"border-b":Ae()}],"border-w-l":[{"border-l":Ae()}],"divide-x":[{"divide-x":Ae()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ae()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...B(),"hidden","none"]}],"divide-style":[{divide:[...B(),"hidden","none"]}],"border-color":[{border:ne()}],"border-color-x":[{"border-x":ne()}],"border-color-y":[{"border-y":ne()}],"border-color-s":[{"border-s":ne()}],"border-color-e":[{"border-e":ne()}],"border-color-bs":[{"border-bs":ne()}],"border-color-be":[{"border-be":ne()}],"border-color-t":[{"border-t":ne()}],"border-color-r":[{"border-r":ne()}],"border-color-b":[{"border-b":ne()}],"border-color-l":[{"border-l":ne()}],"divide-color":[{divide:ne()}],"outline-style":[{outline:[...B(),"none","hidden"]}],"outline-offset":[{"outline-offset":[we,ie,re]}],"outline-w":[{outline:["",we,Fr,er]}],"outline-color":[{outline:ne()}],shadow:[{shadow:["","none",c,Ia,Ta]}],"shadow-color":[{shadow:ne()}],"inset-shadow":[{"inset-shadow":["none",d,Ia,Ta]}],"inset-shadow-color":[{"inset-shadow":ne()}],"ring-w":[{ring:Ae()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:ne()}],"ring-offset-w":[{"ring-offset":[we,er]}],"ring-offset-color":[{"ring-offset":ne()}],"inset-ring-w":[{"inset-ring":Ae()}],"inset-ring-color":[{"inset-ring":ne()}],"text-shadow":[{"text-shadow":["none",f,Ia,Ta]}],"text-shadow-color":[{"text-shadow":ne()}],opacity:[{opacity:[we,ie,re]}],"mix-blend":[{"mix-blend":[...Q(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Q()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[we]}],"mask-image-linear-from-pos":[{"mask-linear-from":H()}],"mask-image-linear-to-pos":[{"mask-linear-to":H()}],"mask-image-linear-from-color":[{"mask-linear-from":ne()}],"mask-image-linear-to-color":[{"mask-linear-to":ne()}],"mask-image-t-from-pos":[{"mask-t-from":H()}],"mask-image-t-to-pos":[{"mask-t-to":H()}],"mask-image-t-from-color":[{"mask-t-from":ne()}],"mask-image-t-to-color":[{"mask-t-to":ne()}],"mask-image-r-from-pos":[{"mask-r-from":H()}],"mask-image-r-to-pos":[{"mask-r-to":H()}],"mask-image-r-from-color":[{"mask-r-from":ne()}],"mask-image-r-to-color":[{"mask-r-to":ne()}],"mask-image-b-from-pos":[{"mask-b-from":H()}],"mask-image-b-to-pos":[{"mask-b-to":H()}],"mask-image-b-from-color":[{"mask-b-from":ne()}],"mask-image-b-to-color":[{"mask-b-to":ne()}],"mask-image-l-from-pos":[{"mask-l-from":H()}],"mask-image-l-to-pos":[{"mask-l-to":H()}],"mask-image-l-from-color":[{"mask-l-from":ne()}],"mask-image-l-to-color":[{"mask-l-to":ne()}],"mask-image-x-from-pos":[{"mask-x-from":H()}],"mask-image-x-to-pos":[{"mask-x-to":H()}],"mask-image-x-from-color":[{"mask-x-from":ne()}],"mask-image-x-to-color":[{"mask-x-to":ne()}],"mask-image-y-from-pos":[{"mask-y-from":H()}],"mask-image-y-to-pos":[{"mask-y-to":H()}],"mask-image-y-from-color":[{"mask-y-from":ne()}],"mask-image-y-to-color":[{"mask-y-to":ne()}],"mask-image-radial":[{"mask-radial":[ie,re]}],"mask-image-radial-from-pos":[{"mask-radial-from":H()}],"mask-image-radial-to-pos":[{"mask-radial-to":H()}],"mask-image-radial-from-color":[{"mask-radial-from":ne()}],"mask-image-radial-to-color":[{"mask-radial-to":ne()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":E()}],"mask-image-conic-pos":[{"mask-conic":[we]}],"mask-image-conic-from-pos":[{"mask-conic-from":H()}],"mask-image-conic-to-pos":[{"mask-conic-to":H()}],"mask-image-conic-from-color":[{"mask-conic-from":ne()}],"mask-image-conic-to-color":[{"mask-conic-to":ne()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Ge()}],"mask-repeat":[{mask:Ve()}],"mask-size":[{mask:Et()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ie,re]}],filter:[{filter:["","none",ie,re]}],blur:[{blur:ae()}],brightness:[{brightness:[we,ie,re]}],contrast:[{contrast:[we,ie,re]}],"drop-shadow":[{"drop-shadow":["","none",m,Ia,Ta]}],"drop-shadow-color":[{"drop-shadow":ne()}],grayscale:[{grayscale:["",we,ie,re]}],"hue-rotate":[{"hue-rotate":[we,ie,re]}],invert:[{invert:["",we,ie,re]}],saturate:[{saturate:[we,ie,re]}],sepia:[{sepia:["",we,ie,re]}],"backdrop-filter":[{"backdrop-filter":["","none",ie,re]}],"backdrop-blur":[{"backdrop-blur":ae()}],"backdrop-brightness":[{"backdrop-brightness":[we,ie,re]}],"backdrop-contrast":[{"backdrop-contrast":[we,ie,re]}],"backdrop-grayscale":[{"backdrop-grayscale":["",we,ie,re]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[we,ie,re]}],"backdrop-invert":[{"backdrop-invert":["",we,ie,re]}],"backdrop-opacity":[{"backdrop-opacity":[we,ie,re]}],"backdrop-saturate":[{"backdrop-saturate":[we,ie,re]}],"backdrop-sepia":[{"backdrop-sepia":["",we,ie,re]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":$()}],"border-spacing-x":[{"border-spacing-x":$()}],"border-spacing-y":[{"border-spacing-y":$()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ie,re]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[we,"initial",ie,re]}],ease:[{ease:["linear","initial",C,ie,re]}],delay:[{delay:[we,ie,re]}],animate:[{animate:["none",O,ie,re]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[x,ie,re]}],"perspective-origin":[{"perspective-origin":z()}],rotate:[{rotate:me()}],"rotate-x":[{"rotate-x":me()}],"rotate-y":[{"rotate-y":me()}],"rotate-z":[{"rotate-z":me()}],scale:[{scale:y()}],"scale-x":[{"scale-x":y()}],"scale-y":[{"scale-y":y()}],"scale-z":[{"scale-z":y()}],"scale-3d":["scale-3d"],skew:[{skew:b()}],"skew-x":[{"skew-x":b()}],"skew-y":[{"skew-y":b()}],transform:[{transform:[ie,re,"","none","gpu","cpu"]}],"transform-origin":[{origin:z()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:v()}],"translate-x":[{"translate-x":v()}],"translate-y":[{"translate-y":v()}],"translate-z":[{"translate-z":v()}],"translate-none":["translate-none"],accent:[{accent:ne()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:ne()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ie,re]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mbs":[{"scroll-mbs":$()}],"scroll-mbe":[{"scroll-mbe":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pbs":[{"scroll-pbs":$()}],"scroll-pbe":[{"scroll-pbe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ie,re]}],fill:[{fill:["none",...ne()]}],"stroke-w":[{stroke:[we,Fr,er,Al]}],stroke:[{stroke:["none",...ne()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},qv=Av(Hv);function ot(...e){return qv(Vu(e))}const wt={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e;return(n,r)=>(D(),ee(p(yt),{"data-slot":"button","data-variant":e.variant,"data-size":e.size,as:e.as,"as-child":e.asChild,class:Xe(p(ot)(p(Kv)({variant:e.variant,size:e.size}),t.class))},{default:_(()=>[he(n.$slots,"default")]),_:3},8,["data-variant","data-size","as","as-child","class"]))}},Kv=Hu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",outline:"border border-border bg-background shadow-xs hover:bg-card",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-card",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),wd={__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=Tn(t,"class");return(r,a)=>(D(),ee(p(Yy),Ze({"data-slot":"separator"},p(n),{class:p(ot)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",t.class)}),null,16,["class"]))}},Ed=["en","tr"],ds=[{name:"home",labelKey:"navbar.home"},{name:"about",labelKey:"navbar.about"},{name:"governance",labelKey:"navbar.governance"},{name:"research",labelKey:"navbar.research"},{name:"services",labelKey:"navbar.services"},{name:"products",labelKey:"navbar.products"},{name:"privacy",labelKey:"navbar.privacy"},{name:"team",labelKey:"navbar.ourTeams"}],xd=[{titleKey:"publications.diceExtended.title",descriptionKey:"publications.diceExtended.description",href:"https://link.springer.com/chapter/10.1007/978-3-032-08384-5_25"},{titleKey:"publications.highStakes.title",descriptionKey:"publications.highStakes.description",href:""}],Yv=[{name:"Prof. Dr. Sureyya Ozogur-Akyuz",roleKey:"teamMembers.sureyya.role",bioKey:"teamMembers.sureyya.bio",image:"/SA.JPG",imagePosition:"center top",initials:"SA"},{name:"Qazaleh Afrough",roleKey:"teamMembers.qazaleh.role",bioKey:"teamMembers.qazaleh.bio",image:"/QA.JPG",imagePosition:"center center",initials:"QA"},{name:"Faramarz Mehrnami",roleKey:"teamMembers.faramarz.role",bioKey:"teamMembers.faramarz.bio",image:"/FM.JPG",imagePosition:"center 18%",initials:"FM"},{name:"Dilara Karaduman",roleKey:"teamMembers.dilara.role",bioKey:"teamMembers.dilara.bio",image:"/DL.JPG",imagePosition:"43% center",initials:"DK"},{name:"Nisa Yegin",roleKey:"teamMembers.nisa.role",bioKey:"teamMembers.nisa.bio",image:"/NY.JPG",imagePosition:"center center",initials:"NY"},{name:"Arya Sokhangoo",roleKey:"teamMembers.arya.role",bioKey:"teamMembers.arya.bio",image:"/AS.jpeg",imagePosition:"center center",initials:"AS"}];function va(e){return Ed.includes(e)?e:"en"}function fs(){return typeof window>"u"?"en":va(window.localStorage.getItem("locale")||"en")}const Xv={class:"px-4 pb-8 sm:px-6 lg:px-8"},Jv={class:"mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-primary/10 bg-primary px-6 py-8 text-white shadow-[0_24px_54px_-36px_rgba(23,56,75,0.38)]"},Zv={class:"grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]"},Qv={class:"space-y-4"},eb={class:"flex items-center gap-3"},tb={class:"text-sm text-white/72"},nb={href:"mailto:info@trustai.com.tr"},rb={class:"space-y-3"},ab={class:"text-sm font-bold uppercase tracking-[0.2em] text-accent"},ib={class:"grid gap-1"},sb={class:"space-y-3"},ob={class:"text-sm font-bold uppercase tracking-[0.2em] text-accent"},lb={class:"flex items-start gap-3 text-sm leading-7 text-white/72"},cb={class:"flex items-start gap-3 text-sm leading-7 text-white/72"},ub={class:"text-sm text-white/60"},db={__name:"Footer",setup(e){const t=Or(),n=se(()=>va(t.params.locale));return(r,a)=>(D(),J("footer",Xv,[I("div",Jv,[a[4]||(a[4]=I("div",{class:"absolute"},null,-1)),I("div",Zv,[I("div",Qv,[I("div",eb,[a[1]||(a[1]=I("img",{src:Pu,alt:"TrustAI",class:"h-14 w-auto object-contain"},null,-1)),I("div",null,[a[0]||(a[0]=I("p",{class:"text-sm font-black uppercase tracking-[0.28em] text-accent"},"TrustAI",-1)),I("p",tb,M(r.$t("footer.tagline")),1)])]),k(p(wt),{"as-child":"",class:"rounded-full bg-accent text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.5)] hover:bg-accent/90"},{default:_(()=>[I("a",nb,[k(p(Va),{class:"size-4"}),a[2]||(a[2]=te(" info@trustai.com.tr ",-1))])]),_:1})]),I("div",rb,[I("p",ab,M(r.$t("footer.navigation")),1),I("div",ib,[(D(!0),J(_e,null,je(p(ds),i=>(D(),ee(p(ir),{key:i.name,to:{name:i.name,params:{locale:n.value}},class:"w-fit text-sm font-medium text-white/72 transition hover:text-white"},{default:_(()=>[te(M(r.$t(i.labelKey)),1)]),_:2},1032,["to"]))),128))])]),I("div",sb,[I("p",ob,M(r.$t("footer.contact")),1),I("div",lb,[k(p(Jm),{class:"mt-1 size-4 text-accent"}),I("p",null,M(r.$t("footer.address")),1)]),I("div",cb,[k(p(Va),{class:"mt-1 size-4 text-accent"}),a[3]||(a[3]=I("a",{class:"transition hover:text-white",href:"mailto:info@trustai.com.tr"}," info@trustai.com.tr ",-1))])])]),k(p(wd),{class:"my-6 bg-white/10"}),I("p",ub," © "+M(new Date().getFullYear())+" "+M(r.$t("footer.rights")),1)])]))}},fb={__name:"Sheet",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(e,{emit:t}){const a=Ks(e,t);return(i,s)=>(D(),ee(p(Vh),Ze({"data-slot":"sheet"},p(a)),{default:_(o=>[he(i.$slots,"default",ei(ma(o)))]),_:3},16))}},pb={__name:"SheetOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=Tn(t,"class");return(r,a)=>(D(),ee(p(by),Ze({"data-slot":"sheet-overlay",class:p(ot)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",t.class)},p(n)),{default:_(()=>[he(r.$slots,"default")]),_:3},16,["class"]))}},mb=Object.assign({inheritAttrs:!1},{__name:"SheetContent",props:{class:{type:null,required:!1},side:{type:String,required:!1,default:"right"},forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,r=t,a=Tn(n,"class","side"),i=Ks(a,r);return(s,o)=>(D(),ee(p(Ey),null,{default:_(()=>[k(pb),k(p(gy),Ze({"data-slot":"sheet-content",class:p(ot)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",e.side==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",e.side==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",e.side==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",e.side==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",n.class)},{...s.$attrs,...p(i)}),{default:_(()=>[he(s.$slots,"default"),k(p(qh),{class:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"},{default:_(()=>[k(p(og),{class:"size-4"}),o[0]||(o[0]=I("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),gb={__name:"SheetTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),ee(p(Ay),Ze({"data-slot":"sheet-trigger"},t),{default:_(()=>[he(n.$slots,"default")]),_:3},16))}},hb={class:"relative z-50 px-4 pb-3 pt-[17px] sm:px-6 lg:fixed lg:inset-x-0 lg:top-0 lg:px-8"},yb={class:"mx-auto flex max-w-7xl items-center justify-between rounded-full bg-linear-to-l from-[#4d7984] via-primary to-[#213d48] px-3 py-2 shadow-[0_20px_44px_-28px_rgba(48,86,105,0.4)]"},vb={class:"hidden items-center gap-1 lg:flex"},bb={class:"hidden items-center gap-2 lg:flex"},_b={href:"mailto:info@trustai.com.tr"},kb={class:"flex items-center gap-2 lg:hidden"},wb={class:"flex h-full flex-col"},Eb={class:"px-6 pb-4 pt-8"},xb={class:"mt-2 text-sm leading-7 text-muted-foreground"},Ab={class:"flex flex-1 flex-col gap-1 px-3"},Tb={class:"space-y-3 border-t border-border px-6 py-6"},Ib={href:"mailto:info@trustai.com.tr"},Cb={__name:"Navbar",setup(e){const t=Or(),n=ve(!1),r=se(()=>va(t.params.locale)),a=se(()=>typeof t.name=="string"?t.name:"home"),i=se(()=>r.value==="en"?"tr":"en"),s=se(()=>({name:a.value,params:{...t.params,locale:i.value}}));ct(()=>t.fullPath,()=>{n.value=!1});function o(l){return t.name===l}return(l,u)=>(D(),J("header",hb,[I("div",yb,[k(p(ir),{to:{name:"home",params:{locale:r.value}},class:"inline-flex h-12 shrink-0 items-center rounded-full px-1"},{default:_(()=>[...u[1]||(u[1]=[I("img",{src:Pu,alt:"TrustAI",class:"pointer-events-none block h-8 w-auto rounded-full object-contain drop-shadow-[0_6px_18px_rgba(44,104,123,0.12)]"},null,-1)])]),_:1},8,["to"]),I("nav",vb,[(D(!0),J(_e,null,je(p(ds),c=>(D(),ee(p(ir),{key:c.name,to:{name:c.name,params:{locale:r.value}},class:Xe(p(ot)("inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold transition",o(c.name)?"bg-white text-primary shadow-[0_10px_26px_-20px_rgba(17,33,43,0.22)]":"text-white/84 hover:bg-white/12 hover:text-white"))},{default:_(()=>[te(M(l.$t(c.labelKey)),1)]),_:2},1032,["to","class"]))),128))]),I("div",bb,[k(p(wt),{"as-child":"",variant:"outline",class:"rounded-full border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white"},{default:_(()=>[k(p(ir),{to:s.value},{default:_(()=>[k(p(Xo),{class:"size-4"}),te(" "+M(r.value.toUpperCase()),1)]),_:1},8,["to"])]),_:1}),k(p(wt),{"as-child":"",class:"rounded-full bg-accent text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.6)] hover:bg-accent/90"},{default:_(()=>[I("a",_b,[k(p(Va),{class:"size-4"}),te(" "+M(l.$t("cta.contact")),1)])]),_:1})]),I("div",kb,[k(p(wt),{"as-child":"",variant:"outline",size:"icon",class:"rounded-full border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white"},{default:_(()=>[k(p(ir),{to:s.value,"aria-label":l.$t("common.switchLanguage",{locale:i.value.toUpperCase()})},{default:_(()=>[k(p(Xo),{class:"size-4"})]),_:1},8,["to","aria-label"])]),_:1}),k(p(fb),{open:n.value,"onUpdate:open":u[0]||(u[0]=c=>n.value=c)},{default:_(()=>[k(p(gb),{"as-child":""},{default:_(()=>[k(p(wt),{variant:"outline",size:"icon",class:"rounded-full border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white"},{default:_(()=>[k(p(Zm),{class:"size-4"})]),_:1})]),_:1}),k(p(mb),{side:"right",class:"w-[310px] border-l border-border bg-card px-0"},{default:_(()=>[I("div",wb,[I("div",Eb,[u[2]||(u[2]=I("p",{class:"text-sm font-black uppercase tracking-[0.28em] text-primary"},"TrustAI",-1)),I("p",xb,M(l.$t("footer.tagline")),1)]),I("div",Ab,[(D(!0),J(_e,null,je(p(ds),c=>(D(),ee(p(ir),{key:c.name,to:{name:c.name,params:{locale:r.value}},class:Xe(p(ot)("rounded-2xl px-4 py-3 text-sm font-semibold transition",o(c.name)?"bg-white text-primary":"text-muted-foreground hover:bg-white hover:text-foreground"))},{default:_(()=>[te(M(l.$t(c.labelKey)),1)]),_:2},1032,["to","class"]))),128))]),I("div",Tb,[k(p(wt),{"as-child":"",class:"w-full rounded-full bg-accent text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.6)] hover:bg-accent/90"},{default:_(()=>[I("a",Ib,[k(p(Va),{class:"size-4"}),te(" "+M(l.$t("cta.contact")),1)])]),_:1})])])]),_:1})]),_:1},8,["open"])])])]))}},Pb={class:"min-h-screen"},Sb={class:"px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-36"},Ob={__name:"App",setup(e){return(t,n)=>{const r=Ds("router-view");return D(),J("div",Pb,[k(Cb),I("main",Sb,[k(r)]),k(db)])}}};function Lb(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const qa=typeof window<"u",Vn=(e,t=!1)=>t?Symbol.for(e):Symbol(e),Nb=(e,t,n)=>Rb({l:e,k:t,s:n}),Rb=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),et=e=>typeof e=="number"&&isFinite(e),Mb=e=>Td(e)==="[object Date]",Wn=e=>Td(e)==="[object RegExp]",di=e=>ge(e)&&Object.keys(e).length===0,gt=Object.assign,Db=Object.create,ze=(e=null)=>Db(e);let Cl;const vn=()=>Cl||(Cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:ze());function Pl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Sl(e){return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $b(e){return e=e.replace(/(\w+)\s*=\s*"([^"]*)"/g,(r,a,i)=>`${a}="${Sl(i)}"`),e=e.replace(/(\w+)\s*=\s*'([^']*)'/g,(r,a,i)=>`${a}='${Sl(i)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e)&&(e=e.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(r=>{e=e.replace(r,"$1javascript&#58;")}),e}const zb=Object.prototype.hasOwnProperty;function Ut(e,t){return zb.call(e,t)}const He=Array.isArray,Ue=e=>typeof e=="function",Z=e=>typeof e=="string",Ee=e=>typeof e=="boolean",Ce=e=>e!==null&&typeof e=="object",Fb=e=>Ce(e)&&Ue(e.then)&&Ue(e.catch),Ad=Object.prototype.toString,Td=e=>Ad.call(e),ge=e=>{if(!Ce(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t.constructor===Object},Wb=e=>e==null?"":He(e)||ge(e)&&e.toString===Ad?JSON.stringify(e,null,2):String(e);function Bb(e,t=""){return e.reduce((n,r,a)=>a===0?n+r:n+t+r,"")}function fi(e){let t=e;return()=>++t}const Ca=e=>!Ce(e)||He(e);function Ra(e,t){if(Ca(e)||Ca(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:r,des:a}=n.pop();Object.keys(r).forEach(i=>{i!=="__proto__"&&(Ce(r[i])&&!Ce(a[i])&&(a[i]=Array.isArray(r[i])?[]:ze()),Ca(a[i])||Ca(r[i])?a[i]=r[i]:n.push({src:r[i],des:a[i]}))})}}function Ub(e,t,n){return{line:e,column:t,offset:n}}function Ka(e,t,n){return{start:e,end:t}}const jb=/\{([0-9a-zA-Z]+)\}/g;function Id(e,...t){return t.length===1&&Gb(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(jb,(n,r)=>t.hasOwnProperty(r)?t[r]:"")}const Cd=Object.assign,Ol=e=>typeof e=="string",Gb=e=>e!==null&&typeof e=="object";function Pd(e,t=""){return e.reduce((n,r,a)=>a===0?n+r:n+t+r,"")}const Qs={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},Vb={[Qs.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function Hb(e,t,...n){const r=Id(Vb[e],...n||[]),a={message:String(r),code:e};return t&&(a.location=t),a}const de={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},qb={[de.EXPECTED_TOKEN]:"Expected token: '{0}'",[de.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[de.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[de.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[de.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[de.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[de.EMPTY_PLACEHOLDER]:"Empty placeholder",[de.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[de.INVALID_LINKED_FORMAT]:"Invalid linked format",[de.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[de.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[de.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[de.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[de.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[de.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Lr(e,t,n={}){const{domain:r,messages:a,args:i}=n,s=Id((a||qb)[e]||"",...i||[]),o=new SyntaxError(String(s));return o.code=e,t&&(o.location=t),o.domain=r,o}function Kb(e){throw e}const fn=" ",Yb="\r",Tt=`
`,Xb="\u2028",Jb="\u2029";function Zb(e){const t=e;let n=0,r=1,a=1,i=0;const s=j=>t[j]===Yb&&t[j+1]===Tt,o=j=>t[j]===Tt,l=j=>t[j]===Jb,u=j=>t[j]===Xb,c=j=>s(j)||o(j)||l(j)||u(j),d=()=>n,f=()=>r,m=()=>a,A=()=>i,x=j=>s(j)||l(j)||u(j)?Tt:t[j],T=()=>x(n),C=()=>x(n+i);function O(){return i=0,c(n)&&(r++,a=0),s(n)&&n++,n++,a++,t[n]}function w(){return s(n+i)&&i++,i++,t[n+i]}function E(){n=0,r=1,a=1,i=0}function z(j=0){i=j}function R(){const j=n+i;for(;j!==n;)O();i=0}return{index:d,line:f,column:m,peekOffset:A,charAt:x,currentChar:T,currentPeek:C,next:O,peek:w,reset:E,resetPeek:z,skipToPeek:R}}const On=void 0,Qb=".",Ll="'",e_="tokenizer";function t_(e,t={}){const n=t.location!==!1,r=Zb(e),a=()=>r.index(),i=()=>Ub(r.line(),r.column(),r.index()),s=i(),o=a(),l={currentType:14,offset:o,startLoc:s,endLoc:s,lastType:14,lastOffset:o,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},u=()=>l,{onError:c}=t;function d(g,h,S,...F){const X=u();if(h.column+=S,h.offset+=S,c){const q=n?Ka(X.startLoc,h):null,P=Lr(g,q,{domain:e_,args:F});c(P)}}function f(g,h,S){g.endLoc=i(),g.currentType=h;const F={type:h};return n&&(F.loc=Ka(g.startLoc,g.endLoc)),S!=null&&(F.value=S),F}const m=g=>f(g,14);function A(g,h){return g.currentChar()===h?(g.next(),h):(d(de.EXPECTED_TOKEN,i(),0,h),"")}function x(g){let h="";for(;g.currentPeek()===fn||g.currentPeek()===Tt;)h+=g.currentPeek(),g.peek();return h}function T(g){const h=x(g);return g.skipToPeek(),h}function C(g){if(g===On)return!1;const h=g.charCodeAt(0);return h>=97&&h<=122||h>=65&&h<=90||h===95}function O(g){if(g===On)return!1;const h=g.charCodeAt(0);return h>=48&&h<=57}function w(g,h){const{currentType:S}=h;if(S!==2)return!1;x(g);const F=C(g.currentPeek());return g.resetPeek(),F}function E(g,h){const{currentType:S}=h;if(S!==2)return!1;x(g);const F=g.currentPeek()==="-"?g.peek():g.currentPeek(),X=O(F);return g.resetPeek(),X}function z(g,h){const{currentType:S}=h;if(S!==2)return!1;x(g);const F=g.currentPeek()===Ll;return g.resetPeek(),F}function R(g,h){const{currentType:S}=h;if(S!==8)return!1;x(g);const F=g.currentPeek()===".";return g.resetPeek(),F}function j(g,h){const{currentType:S}=h;if(S!==9)return!1;x(g);const F=C(g.currentPeek());return g.resetPeek(),F}function $(g,h){const{currentType:S}=h;if(!(S===8||S===12))return!1;x(g);const F=g.currentPeek()===":";return g.resetPeek(),F}function L(g,h){const{currentType:S}=h;if(S!==10)return!1;const F=()=>{const q=g.currentPeek();return q==="{"?C(g.peek()):q==="@"||q==="%"||q==="|"||q===":"||q==="."||q===fn||!q?!1:q===Tt?(g.peek(),F()):V(g,!1)},X=F();return g.resetPeek(),X}function oe(g){x(g);const h=g.currentPeek()==="|";return g.resetPeek(),h}function fe(g){const h=x(g),S=g.currentPeek()==="%"&&g.peek()==="{";return g.resetPeek(),{isModulo:S,hasSpace:h.length>0}}function V(g,h=!0){const S=(X=!1,q="",P=!1)=>{const W=g.currentPeek();return W==="{"?q==="%"?!1:X:W==="@"||!W?q==="%"?!0:X:W==="%"?(g.peek(),S(X,"%",!0)):W==="|"?q==="%"||P?!0:!(q===fn||q===Tt):W===fn?(g.peek(),S(!0,fn,P)):W===Tt?(g.peek(),S(!0,Tt,P)):!0},F=S();return h&&g.resetPeek(),F}function ce(g,h){const S=g.currentChar();return S===On?On:h(S)?(g.next(),S):null}function Me(g){const h=g.charCodeAt(0);return h>=97&&h<=122||h>=65&&h<=90||h>=48&&h<=57||h===95||h===36}function We(g){return ce(g,Me)}function ye(g){const h=g.charCodeAt(0);return h>=97&&h<=122||h>=65&&h<=90||h>=48&&h<=57||h===95||h===36||h===45}function be(g){return ce(g,ye)}function ke(g){const h=g.charCodeAt(0);return h>=48&&h<=57}function nt(g){return ce(g,ke)}function ne(g){const h=g.charCodeAt(0);return h>=48&&h<=57||h>=65&&h<=70||h>=97&&h<=102}function Ge(g){return ce(g,ne)}function Ve(g){let h="",S="";for(;h=nt(g);)S+=h;return S}function Et(g){T(g);const h=g.currentChar();return h!=="%"&&d(de.EXPECTED_TOKEN,i(),0,h),g.next(),"%"}function dt(g){let h="";for(;;){const S=g.currentChar();if(S==="{"||S==="}"||S==="@"||S==="|"||!S)break;if(S==="%")if(V(g))h+=S,g.next();else break;else if(S===fn||S===Tt)if(V(g))h+=S,g.next();else{if(oe(g))break;h+=S,g.next()}else h+=S,g.next()}return h}function Ne(g){T(g);let h="",S="";for(;h=be(g);)S+=h;return g.currentChar()===On&&d(de.UNTERMINATED_CLOSING_BRACE,i(),0),S}function Ae(g){T(g);let h="";return g.currentChar()==="-"?(g.next(),h+=`-${Ve(g)}`):h+=Ve(g),g.currentChar()===On&&d(de.UNTERMINATED_CLOSING_BRACE,i(),0),h}function B(g){return g!==Ll&&g!==Tt}function Q(g){T(g),A(g,"'");let h="",S="";for(;h=ce(g,B);)h==="\\"?S+=H(g):S+=h;const F=g.currentChar();return F===Tt||F===On?(d(de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),F===Tt&&(g.next(),A(g,"'")),S):(A(g,"'"),S)}function H(g){const h=g.currentChar();switch(h){case"\\":case"'":return g.next(),`\\${h}`;case"u":return ae(g,h,4);case"U":return ae(g,h,6);default:return d(de.UNKNOWN_ESCAPE_SEQUENCE,i(),0,h),""}}function ae(g,h,S){A(g,h);let F="";for(let X=0;X<S;X++){const q=Ge(g);if(!q){d(de.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${h}${F}${g.currentChar()}`);break}F+=q}return`\\${h}${F}`}function me(g){return g!=="{"&&g!=="}"&&g!==fn&&g!==Tt}function y(g){T(g);let h="",S="";for(;h=ce(g,me);)S+=h;return S}function b(g){let h="",S="";for(;h=We(g);)S+=h;return S}function v(g){const h=S=>{const F=g.currentChar();return F==="{"||F==="%"||F==="@"||F==="|"||F==="("||F===")"||!F||F===fn?S:(S+=F,g.next(),h(S))};return h("")}function N(g){T(g);const h=A(g,"|");return T(g),h}function G(g,h){let S=null;switch(g.currentChar()){case"{":return h.braceNest>=1&&d(de.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),g.next(),S=f(h,2,"{"),T(g),h.braceNest++,S;case"}":return h.braceNest>0&&h.currentType===2&&d(de.EMPTY_PLACEHOLDER,i(),0),g.next(),S=f(h,3,"}"),h.braceNest--,h.braceNest>0&&T(g),h.inLinked&&h.braceNest===0&&(h.inLinked=!1),S;case"@":return h.braceNest>0&&d(de.UNTERMINATED_CLOSING_BRACE,i(),0),S=U(g,h)||m(h),h.braceNest=0,S;default:{let X=!0,q=!0,P=!0;if(oe(g))return h.braceNest>0&&d(de.UNTERMINATED_CLOSING_BRACE,i(),0),S=f(h,1,N(g)),h.braceNest=0,h.inLinked=!1,S;if(h.braceNest>0&&(h.currentType===5||h.currentType===6||h.currentType===7))return d(de.UNTERMINATED_CLOSING_BRACE,i(),0),h.braceNest=0,Y(g,h);if(X=w(g,h))return S=f(h,5,Ne(g)),T(g),S;if(q=E(g,h))return S=f(h,6,Ae(g)),T(g),S;if(P=z(g,h))return S=f(h,7,Q(g)),T(g),S;if(!X&&!q&&!P)return S=f(h,13,y(g)),d(de.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,S.value),T(g),S;break}}return S}function U(g,h){const{currentType:S}=h;let F=null;const X=g.currentChar();switch((S===8||S===9||S===12||S===10)&&(X===Tt||X===fn)&&d(de.INVALID_LINKED_FORMAT,i(),0),X){case"@":return g.next(),F=f(h,8,"@"),h.inLinked=!0,F;case".":return T(g),g.next(),f(h,9,".");case":":return T(g),g.next(),f(h,10,":");default:return oe(g)?(F=f(h,1,N(g)),h.braceNest=0,h.inLinked=!1,F):R(g,h)||$(g,h)?(T(g),U(g,h)):j(g,h)?(T(g),f(h,12,b(g))):L(g,h)?(T(g),X==="{"?G(g,h)||F:f(h,11,v(g))):(S===8&&d(de.INVALID_LINKED_FORMAT,i(),0),h.braceNest=0,h.inLinked=!1,Y(g,h))}}function Y(g,h){let S={type:14};if(h.braceNest>0)return G(g,h)||m(h);if(h.inLinked)return U(g,h)||m(h);switch(g.currentChar()){case"{":return G(g,h)||m(h);case"}":return d(de.UNBALANCED_CLOSING_BRACE,i(),0),g.next(),f(h,3,"}");case"@":return U(g,h)||m(h);default:{if(oe(g))return S=f(h,1,N(g)),h.braceNest=0,h.inLinked=!1,S;const{isModulo:X,hasSpace:q}=fe(g);if(X)return q?f(h,0,dt(g)):f(h,4,Et(g));if(V(g))return f(h,0,dt(g));break}}return S}function K(){const{currentType:g,offset:h,startLoc:S,endLoc:F}=l;return l.lastType=g,l.lastOffset=h,l.lastStartLoc=S,l.lastEndLoc=F,l.offset=a(),l.startLoc=i(),r.currentChar()===On?f(l,14):Y(r,l)}return{nextToken:K,currentOffset:a,currentPosition:i,context:u}}const n_="parser",r_=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function a_(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(t||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function i_(e={}){const t=e.location!==!1,{onError:n,onWarn:r}=e;function a(w,E,z,R,...j){const $=w.currentPosition();if($.offset+=R,$.column+=R,n){const L=t?Ka(z,$):null,oe=Lr(E,L,{domain:n_,args:j});n(oe)}}function i(w,E,z,R,...j){const $=w.currentPosition();if($.offset+=R,$.column+=R,r){const L=t?Ka(z,$):null;r(Hb(E,L,j))}}function s(w,E,z){const R={type:w};return t&&(R.start=E,R.end=E,R.loc={start:z,end:z}),R}function o(w,E,z,R){t&&(w.end=E,w.loc&&(w.loc.end=z))}function l(w,E){const z=w.context(),R=s(3,z.offset,z.startLoc);return R.value=E,o(R,w.currentOffset(),w.currentPosition()),R}function u(w,E){const z=w.context(),{lastOffset:R,lastStartLoc:j}=z,$=s(5,R,j);return $.index=parseInt(E,10),w.nextToken(),o($,w.currentOffset(),w.currentPosition()),$}function c(w,E,z){const R=w.context(),{lastOffset:j,lastStartLoc:$}=R,L=s(4,j,$);return L.key=E,z===!0&&(L.modulo=!0),w.nextToken(),o(L,w.currentOffset(),w.currentPosition()),L}function d(w,E){const z=w.context(),{lastOffset:R,lastStartLoc:j}=z,$=s(9,R,j);return $.value=E.replace(r_,a_),w.nextToken(),o($,w.currentOffset(),w.currentPosition()),$}function f(w){const E=w.nextToken(),z=w.context(),{lastOffset:R,lastStartLoc:j}=z,$=s(8,R,j);return E.type!==12?(a(w,de.UNEXPECTED_EMPTY_LINKED_MODIFIER,z.lastStartLoc,0),$.value="",o($,R,j),{nextConsumeToken:E,node:$}):(E.value==null&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,z.lastStartLoc,0,Bt(E)),$.value=E.value||"",o($,w.currentOffset(),w.currentPosition()),{node:$})}function m(w,E){const z=w.context(),R=s(7,z.offset,z.startLoc);return R.value=E,o(R,w.currentOffset(),w.currentPosition()),R}function A(w){const E=w.context(),z=s(6,E.offset,E.startLoc);let R=w.nextToken();if(R.type===9){const j=f(w);z.modifier=j.node,R=j.nextConsumeToken||w.nextToken()}switch(R.type!==10&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Bt(R)),R=w.nextToken(),R.type===2&&(R=w.nextToken()),R.type){case 11:R.value==null&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Bt(R)),z.key=m(w,R.value||"");break;case 5:R.value==null&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Bt(R)),z.key=c(w,R.value||"");break;case 6:R.value==null&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Bt(R)),z.key=u(w,R.value||"");break;case 7:R.value==null&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Bt(R)),z.key=d(w,R.value||"");break;default:{a(w,de.UNEXPECTED_EMPTY_LINKED_KEY,E.lastStartLoc,0);const j=w.context(),$=s(7,j.offset,j.startLoc);return $.value="",o($,j.offset,j.startLoc),z.key=$,o(z,j.offset,j.startLoc),{nextConsumeToken:R,node:z}}}return o(z,w.currentOffset(),w.currentPosition()),{node:z}}function x(w){const E=w.context(),z=E.currentType===1?w.currentOffset():E.offset,R=E.currentType===1?E.endLoc:E.startLoc,j=s(2,z,R);j.items=[];let $=null,L=null;do{const V=$||w.nextToken();switch($=null,V.type){case 0:V.value==null&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Bt(V)),j.items.push(l(w,V.value||""));break;case 6:V.value==null&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Bt(V)),j.items.push(u(w,V.value||""));break;case 4:L=!0;break;case 5:V.value==null&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Bt(V)),j.items.push(c(w,V.value||"",!!L)),L&&(i(w,Qs.USE_MODULO_SYNTAX,E.lastStartLoc,0,Bt(V)),L=null);break;case 7:V.value==null&&a(w,de.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Bt(V)),j.items.push(d(w,V.value||""));break;case 8:{const ce=A(w);j.items.push(ce.node),$=ce.nextConsumeToken||null;break}}}while(E.currentType!==14&&E.currentType!==1);const oe=E.currentType===1?E.lastOffset:w.currentOffset(),fe=E.currentType===1?E.lastEndLoc:w.currentPosition();return o(j,oe,fe),j}function T(w,E,z,R){const j=w.context();let $=R.items.length===0;const L=s(1,E,z);L.cases=[],L.cases.push(R);do{const oe=x(w);$||($=oe.items.length===0),L.cases.push(oe)}while(j.currentType!==14);return $&&a(w,de.MUST_HAVE_MESSAGES_IN_PLURAL,z,0),o(L,w.currentOffset(),w.currentPosition()),L}function C(w){const E=w.context(),{offset:z,startLoc:R}=E,j=x(w);return E.currentType===14?j:T(w,z,R,j)}function O(w){const E=t_(w,Cd({},e)),z=E.context(),R=s(0,z.offset,z.startLoc);return t&&R.loc&&(R.loc.source=w),R.body=C(E),e.onCacheKey&&(R.cacheKey=e.onCacheKey(w)),z.currentType!==14&&a(E,de.UNEXPECTED_LEXICAL_ANALYSIS,z.lastStartLoc,0,w[z.offset]||""),o(R,E.currentOffset(),E.currentPosition()),R}return{parse:O}}function Bt(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function s_(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Nl(e,t){for(let n=0;n<e.length;n++)eo(e[n],t)}function eo(e,t){switch(e.type){case 1:Nl(e.cases,t),t.helper("plural");break;case 2:Nl(e.items,t);break;case 6:{eo(e.key,t),t.helper("linked"),t.helper("type");break}case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function o_(e,t={}){const n=s_(e);n.helper("normalize"),e.body&&eo(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function l_(e){const t=e.body;return t.type===2?Rl(t):t.cases.forEach(n=>Rl(n)),e}function Rl(e){if(e.items.length===1){const t=e.items[0];(t.type===3||t.type===9)&&(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;t.push(r.value)}if(t.length===e.items.length){e.static=Pd(t);for(let n=0;n<e.items.length;n++){const r=e.items[n];(r.type===3||r.type===9)&&delete r.value}}}}const c_="minifier";function hr(e){switch(e.t=e.type,e.type){case 0:{const t=e;hr(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let r=0;r<n.length;r++)hr(n[r]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let r=0;r<n.length;r++)hr(n[r]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;hr(t.key),t.k=t.key,delete t.key,t.modifier&&(hr(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}default:throw Lr(de.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:c_,args:[e.type]})}delete e.type}const u_="parser";function d_(e,t){const{filename:n,breakLineCode:r,needIndent:a}=t,i=t.location!==!1,s={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:a,indentLevel:0};i&&e.loc&&(s.source=e.loc.source);const o=()=>s;function l(x,T){s.code+=x}function u(x,T=!0){const C=T?r:"";l(a?C+"  ".repeat(x):C)}function c(x=!0){const T=++s.indentLevel;x&&u(T)}function d(x=!0){const T=--s.indentLevel;x&&u(T)}function f(){u(s.indentLevel)}return{context:o,push:l,indent:c,deindent:d,newline:f,helper:x=>`_${x}`,needIndent:()=>s.needIndent}}function f_(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),Cr(e,t.key),t.modifier?(e.push(", "),Cr(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function p_(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const a=t.items.length;for(let i=0;i<a&&(Cr(e,t.items[i]),i!==a-1);i++)e.push(", ");e.deindent(r()),e.push("])")}function m_(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const a=t.cases.length;for(let i=0;i<a&&(Cr(e,t.cases[i]),i!==a-1);i++)e.push(", ");e.deindent(r()),e.push("])")}}function g_(e,t){t.body?Cr(e,t.body):e.push("null")}function Cr(e,t){const{helper:n}=e;switch(t.type){case 0:g_(e,t);break;case 1:m_(e,t);break;case 2:p_(e,t);break;case 6:f_(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:throw Lr(de.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:u_,args:[t.type]})}}const h_=(e,t={})=>{const n=Ol(t.mode)?t.mode:"normal",r=Ol(t.filename)?t.filename:"message.intl";t.sourceMap;const a=t.breakLineCode!=null?t.breakLineCode:n==="arrow"?";":`
`,i=t.needIndent?t.needIndent:n!=="arrow",s=e.helpers||[],o=d_(e,{filename:r,breakLineCode:a,needIndent:i});o.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(i),s.length>0&&(o.push(`const { ${Pd(s.map(c=>`${c}: _${c}`),", ")} } = ctx`),o.newline()),o.push("return "),Cr(o,e),o.deindent(i),o.push("}"),delete e.helpers;const{code:l,map:u}=o.context();return{ast:e,code:l,map:u?u.toJSON():void 0}};function y_(e,t={}){const n=Cd({},t),r=!!n.jit,a=!!n.minify,i=n.optimize==null?!0:n.optimize,o=i_(n).parse(e);return r?(i&&l_(o),a&&hr(o),{ast:o,code:""}):(o_(o,n),h_(o,n))}function v_(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(vn().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(vn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(vn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function an(e){return Ce(e)&&to(e)===0&&(Ut(e,"b")||Ut(e,"body"))}const Sd=["b","body"];function b_(e){return Hn(e,Sd)}const Od=["c","cases"];function __(e){return Hn(e,Od,[])}const Ld=["s","static"];function k_(e){return Hn(e,Ld)}const Nd=["i","items"];function w_(e){return Hn(e,Nd,[])}const Rd=["t","type"];function to(e){return Hn(e,Rd)}const Md=["v","value"];function Pa(e,t){const n=Hn(e,Md);if(n!=null)return n;throw sa(t)}const Dd=["m","modifier"];function E_(e){return Hn(e,Dd)}const $d=["k","key"];function x_(e){const t=Hn(e,$d);if(t)return t;throw sa(6)}function Hn(e,t,n){for(let r=0;r<t.length;r++){const a=t[r];if(Ut(e,a)&&e[a]!=null)return e[a]}return n}const zd=[...Sd,...Od,...Ld,...Nd,...$d,...Dd,...Md,...Rd];function sa(e){return new Error(`unhandled node type: ${e}`)}const qn=[];qn[0]={w:[0],i:[3,0],"[":[4],o:[7]};qn[1]={w:[1],".":[2],"[":[4],o:[7]};qn[2]={w:[2],i:[3,0],0:[3,0]};qn[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};qn[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};qn[5]={"'":[4,0],o:8,l:[5,0]};qn[6]={'"':[4,0],o:8,l:[6,0]};const A_=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function T_(e){return A_.test(e)}function I_(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function C_(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function P_(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:T_(t)?I_(t):"*"+t}function S_(e){const t=[];let n=-1,r=0,a=0,i,s,o,l,u,c,d;const f=[];f[0]=()=>{s===void 0?s=o:s+=o},f[1]=()=>{s!==void 0&&(t.push(s),s=void 0)},f[2]=()=>{f[0](),a++},f[3]=()=>{if(a>0)a--,r=4,f[0]();else{if(a=0,s===void 0||(s=P_(s),s===!1))return!1;f[1]()}};function m(){const A=e[n+1];if(r===5&&A==="'"||r===6&&A==='"')return n++,o="\\"+A,f[0](),!0}for(;r!==null;)if(n++,i=e[n],!(i==="\\"&&m())){if(l=C_(i),d=qn[r],u=d[l]||d.l||8,u===8||(r=u[0],u[1]!==void 0&&(c=f[u[1]],c&&(o=i,c()===!1))))return;if(r===7)return t}}const Ml=new Map;function O_(e,t){return Ce(e)?e[t]:null}function L_(e,t){if(!Ce(e))return null;let n=Ml.get(t);if(n||(n=S_(t),n&&Ml.set(t,n)),!n)return null;const r=n.length;let a=e,i=0;for(;i<r;){const s=n[i];if(zd.includes(s)&&an(a))return null;const o=a[s];if(o===void 0||Ue(a))return null;a=o,i++}return a}const N_=e=>e,R_=e=>"",M_="text",D_=e=>e.length===0?"":Bb(e),$_=Wb;function Dl(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function z_(e){const t=et(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(et(e.named.count)||et(e.named.n))?et(e.named.count)?e.named.count:et(e.named.n)?e.named.n:t:t}function F_(e,t){t.count||(t.count=e),t.n||(t.n=e)}function W_(e={}){const t=e.locale,n=z_(e),r=Ce(e.pluralRules)&&Z(t)&&Ue(e.pluralRules[t])?e.pluralRules[t]:Dl,a=Ce(e.pluralRules)&&Z(t)&&Ue(e.pluralRules[t])?Dl:void 0,i=C=>C[r(n,C.length,a)],s=e.list||[],o=C=>s[C],l=e.named||ze();et(e.pluralIndex)&&F_(n,l);const u=C=>l[C];function c(C){const O=Ue(e.messages)?e.messages(C):Ce(e.messages)?e.messages[C]:!1;return O||(e.parent?e.parent.message(C):R_)}const d=C=>e.modifiers?e.modifiers[C]:N_,f=ge(e.processor)&&Ue(e.processor.normalize)?e.processor.normalize:D_,m=ge(e.processor)&&Ue(e.processor.interpolate)?e.processor.interpolate:$_,A=ge(e.processor)&&Z(e.processor.type)?e.processor.type:M_,T={list:o,named:u,plural:i,linked:(C,...O)=>{const[w,E]=O;let z="text",R="";O.length===1?Ce(w)?(R=w.modifier||R,z=w.type||z):Z(w)&&(R=w||R):O.length===2&&(Z(w)&&(R=w||R),Z(E)&&(z=E||z));const j=c(C)(T),$=z==="vnode"&&He(j)&&R?j[0]:j;return R?d(R)($,z):$},message:c,type:A,interpolate:m,normalize:f,values:gt(ze(),s,l)};return T}let oa=null;function B_(e){oa=e}function U_(e,t,n){oa&&oa.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}const j_=G_("function:translate");function G_(e){return t=>oa&&oa.emit(e,t)}const V_=Qs.__EXTEND_POINT__,tr=fi(V_),H_={FALLBACK_TO_TRANSLATE:tr(),CANNOT_FORMAT_NUMBER:tr(),FALLBACK_TO_NUMBER_FORMAT:tr(),CANNOT_FORMAT_DATE:tr(),FALLBACK_TO_DATE_FORMAT:tr(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:tr(),__EXTEND_POINT__:tr()},Fd=de.__EXTEND_POINT__,nr=fi(Fd),jt={INVALID_ARGUMENT:Fd,INVALID_DATE_ARGUMENT:nr(),INVALID_ISO_DATE_ARGUMENT:nr(),NOT_SUPPORT_NON_STRING_MESSAGE:nr(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:nr(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:nr(),NOT_SUPPORT_LOCALE_TYPE:nr(),__EXTEND_POINT__:nr()};function tn(e){return Lr(e,null,void 0)}function no(e,t){return t.locale!=null?$l(t.locale):$l(e.locale)}let zi;function $l(e){if(Z(e))return e;if(Ue(e)){if(e.resolvedOnce&&zi!=null)return zi;if(e.constructor.name==="Function"){const t=e();if(Fb(t))throw tn(jt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return zi=t}else throw tn(jt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw tn(jt.NOT_SUPPORT_LOCALE_TYPE)}function q_(e,t,n){return[...new Set([n,...He(t)?t:Ce(t)?Object.keys(t):Z(t)?[t]:[n]])]}function Wd(e,t,n){const r=Z(n)?n:Pr,a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let i=a.__localeChainCache.get(r);if(!i){i=[];let s=[n];for(;He(s);)s=zl(i,s,t);const o=He(t)||!ge(t)?t:t.default?t.default:null;s=Z(o)?[o]:o,He(s)&&zl(i,s,!1),a.__localeChainCache.set(r,i)}return i}function zl(e,t,n){let r=!0;for(let a=0;a<t.length&&Ee(r);a++){const i=t[a];Z(i)&&(r=K_(e,t[a],n))}return r}function K_(e,t,n){let r;const a=t.split("-");do{const i=a.join("-");r=Y_(e,i,n),a.splice(-1,1)}while(a.length&&r===!0);return r}function Y_(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const a=t.replace(/!/g,"");e.push(a),(He(n)||ge(n))&&n[a]&&(r=n[a])}return r}const X_="9.14.5",pi=-1,Pr="en-US",Fl="",Wl=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function J_(){return{upper:(e,t)=>t==="text"&&Z(e)?e.toUpperCase():t==="vnode"&&Ce(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&Z(e)?e.toLowerCase():t==="vnode"&&Ce(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&Z(e)?Wl(e):t==="vnode"&&Ce(e)&&"__v_isVNode"in e?Wl(e.children):e}}let Bd;function Bl(e){Bd=e}let Ud;function Z_(e){Ud=e}let jd;function Q_(e){jd=e}let Gd=null;const e1=e=>{Gd=e},t1=()=>Gd;let Vd=null;const Ul=e=>{Vd=e},n1=()=>Vd;let jl=0;function r1(e={}){const t=Ue(e.onWarn)?e.onWarn:Lb,n=Z(e.version)?e.version:X_,r=Z(e.locale)||Ue(e.locale)?e.locale:Pr,a=Ue(r)?Pr:r,i=He(e.fallbackLocale)||ge(e.fallbackLocale)||Z(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:a,s=ge(e.messages)?e.messages:Fi(a),o=ge(e.datetimeFormats)?e.datetimeFormats:Fi(a),l=ge(e.numberFormats)?e.numberFormats:Fi(a),u=gt(ze(),e.modifiers,J_()),c=e.pluralRules||ze(),d=Ue(e.missing)?e.missing:null,f=Ee(e.missingWarn)||Wn(e.missingWarn)?e.missingWarn:!0,m=Ee(e.fallbackWarn)||Wn(e.fallbackWarn)?e.fallbackWarn:!0,A=!!e.fallbackFormat,x=!!e.unresolving,T=Ue(e.postTranslation)?e.postTranslation:null,C=ge(e.processor)?e.processor:null,O=Ee(e.warnHtmlMessage)?e.warnHtmlMessage:!0,w=!!e.escapeParameter,E=Ue(e.messageCompiler)?e.messageCompiler:Bd,z=Ue(e.messageResolver)?e.messageResolver:Ud||O_,R=Ue(e.localeFallbacker)?e.localeFallbacker:jd||q_,j=Ce(e.fallbackContext)?e.fallbackContext:void 0,$=e,L=Ce($.__datetimeFormatters)?$.__datetimeFormatters:new Map,oe=Ce($.__numberFormatters)?$.__numberFormatters:new Map,fe=Ce($.__meta)?$.__meta:{};jl++;const V={version:n,cid:jl,locale:r,fallbackLocale:i,messages:s,modifiers:u,pluralRules:c,missing:d,missingWarn:f,fallbackWarn:m,fallbackFormat:A,unresolving:x,postTranslation:T,processor:C,warnHtmlMessage:O,escapeParameter:w,messageCompiler:E,messageResolver:z,localeFallbacker:R,fallbackContext:j,onWarn:t,__meta:fe};return V.datetimeFormats=o,V.numberFormats=l,V.__datetimeFormatters=L,V.__numberFormatters=oe,__INTLIFY_PROD_DEVTOOLS__&&U_(V,n,fe),V}const Fi=e=>({[e]:ze()});function ro(e,t,n,r,a){const{missing:i,onWarn:s}=e;if(i!==null){const o=i(e,n,t,a);return Z(o)?o:t}else return t}function Wr(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function a1(e,t){return e===t?!1:e.split("-")[0]===t.split("-")[0]}function i1(e,t){const n=t.indexOf(e);if(n===-1)return!1;for(let r=n+1;r<t.length;r++)if(a1(e,t[r]))return!0;return!1}function Wi(e){return n=>s1(n,e)}function s1(e,t){const n=b_(t);if(n==null)throw sa(0);if(to(n)===1){const i=__(n);return e.plural(i.reduce((s,o)=>[...s,Gl(e,o)],[]))}else return Gl(e,n)}function Gl(e,t){const n=k_(t);if(n!=null)return e.type==="text"?n:e.normalize([n]);{const r=w_(t).reduce((a,i)=>[...a,ps(e,i)],[]);return e.normalize(r)}}function ps(e,t){const n=to(t);switch(n){case 3:return Pa(t,n);case 9:return Pa(t,n);case 4:{const r=t;if(Ut(r,"k")&&r.k)return e.interpolate(e.named(r.k));if(Ut(r,"key")&&r.key)return e.interpolate(e.named(r.key));throw sa(n)}case 5:{const r=t;if(Ut(r,"i")&&et(r.i))return e.interpolate(e.list(r.i));if(Ut(r,"index")&&et(r.index))return e.interpolate(e.list(r.index));throw sa(n)}case 6:{const r=t,a=E_(r),i=x_(r);return e.linked(ps(e,i),a?ps(e,a):void 0,e.type)}case 7:return Pa(t,n);case 8:return Pa(t,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const Hd=e=>e;let yr=ze();function qd(e,t={}){let n=!1;const r=t.onError||Kb;return t.onError=a=>{n=!0,r(a)},{...y_(e,t),detectError:n}}const o1=(e,t)=>{if(!Z(e))throw tn(jt.NOT_SUPPORT_NON_STRING_MESSAGE);{Ee(t.warnHtmlMessage)&&t.warnHtmlMessage;const r=(t.onCacheKey||Hd)(e),a=yr[r];if(a)return a;const{code:i,detectError:s}=qd(e,t),o=new Function(`return ${i}`)();return s?o:yr[r]=o}};function l1(e,t){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&Z(e)){Ee(t.warnHtmlMessage)&&t.warnHtmlMessage;const r=(t.onCacheKey||Hd)(e),a=yr[r];if(a)return a;const{ast:i,detectError:s}=qd(e,{...t,location:!1,jit:!0}),o=Wi(i);return s?o:yr[r]=o}else{const n=e.cacheKey;if(n){const r=yr[n];return r||(yr[n]=Wi(e))}else return Wi(e)}}const Vl=()=>"",Ft=e=>Ue(e);function Hl(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:a,messageCompiler:i,fallbackLocale:s,messages:o}=e,[l,u]=ms(...t),c=Ee(u.missingWarn)?u.missingWarn:e.missingWarn,d=Ee(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,f=Ee(u.escapeParameter)?u.escapeParameter:e.escapeParameter,m=!!u.resolvedMessage,A=Z(u.default)||Ee(u.default)?Ee(u.default)?i?l:()=>l:u.default:n?i?l:()=>l:"",x=n||A!=="",T=no(e,u);f&&c1(u);let[C,O,w]=m?[l,T,o[T]||ze()]:Kd(e,l,T,s,d,c),E=C,z=l;if(!m&&!(Z(E)||an(E)||Ft(E))&&x&&(E=A,z=E),!m&&(!(Z(E)||an(E)||Ft(E))||!Z(O)))return a?pi:l;let R=!1;const j=()=>{R=!0},$=Ft(E)?E:Yd(e,l,O,E,z,j);if(R)return E;const L=f1(e,O,w,u),oe=W_(L),fe=u1(e,$,oe);let V=r?r(fe,l):fe;if(f&&Z(V)&&(V=$b(V)),__INTLIFY_PROD_DEVTOOLS__){const ce={timestamp:Date.now(),key:Z(l)?l:Ft(E)?E.key:"",locale:O||(Ft(E)?E.locale:""),format:Z(E)?E:Ft(E)?E.source:"",message:V};ce.meta=gt({},e.__meta,t1()||{}),j_(ce)}return V}function c1(e){He(e.list)?e.list=e.list.map(t=>Z(t)?Pl(t):t):Ce(e.named)&&Object.keys(e.named).forEach(t=>{Z(e.named[t])&&(e.named[t]=Pl(e.named[t]))})}function Kd(e,t,n,r,a,i){const{messages:s,onWarn:o,messageResolver:l,localeFallbacker:u}=e,c=u(e,r,n);let d=ze(),f,m=null;const A="translate";for(let x=0;x<c.length&&(f=c[x],d=s[f]||ze(),(m=l(d,t))===null&&(m=d[t]),!(Z(m)||an(m)||Ft(m)));x++)if(!i1(f,c)){const T=ro(e,t,f,i,A);T!==t&&(m=T)}return[m,f,d]}function Yd(e,t,n,r,a,i){const{messageCompiler:s,warnHtmlMessage:o}=e;if(Ft(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||t,u}if(s==null){const u=(()=>r);return u.locale=n,u.key=t,u}const l=s(r,d1(e,n,a,r,o,i));return l.locale=n,l.key=t,l.source=r,l}function u1(e,t,n){return t(n)}function ms(...e){const[t,n,r]=e,a=ze();if(!Z(t)&&!et(t)&&!Ft(t)&&!an(t))throw tn(jt.INVALID_ARGUMENT);const i=et(t)?String(t):(Ft(t),t);return et(n)?a.plural=n:Z(n)?a.default=n:ge(n)&&!di(n)?a.named=n:He(n)&&(a.list=n),et(r)?a.plural=r:Z(r)?a.default=r:ge(r)&&gt(a,r),[i,a]}function d1(e,t,n,r,a,i){return{locale:t,key:n,warnHtmlMessage:a,onError:s=>{throw i&&i(s),s},onCacheKey:s=>Nb(t,n,s)}}function f1(e,t,n,r){const{modifiers:a,pluralRules:i,messageResolver:s,fallbackLocale:o,fallbackWarn:l,missingWarn:u,fallbackContext:c}=e,f={locale:t,modifiers:a,pluralRules:i,messages:m=>{let A=s(n,m);if(A==null&&c){const[,,x]=Kd(c,m,t,o,l,u);A=s(x,m)}if(Z(A)||an(A)){let x=!1;const C=Yd(e,m,t,A,m,()=>{x=!0});return x?Vl:C}else return Ft(A)?A:Vl}};return e.processor&&(f.processor=e.processor),r.list&&(f.list=r.list),r.named&&(f.named=r.named),et(r.plural)&&(f.pluralIndex=r.plural),f}function ql(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:a,onWarn:i,localeFallbacker:s}=e,{__datetimeFormatters:o}=e,[l,u,c,d]=gs(...t),f=Ee(c.missingWarn)?c.missingWarn:e.missingWarn;Ee(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn;const m=!!c.part,A=no(e,c),x=s(e,a,A);if(!Z(l)||l==="")return new Intl.DateTimeFormat(A,d).format(u);let T={},C,O=null;const w="datetime format";for(let R=0;R<x.length&&(C=x[R],T=n[C]||{},O=T[l],!ge(O));R++)ro(e,l,C,f,w);if(!ge(O)||!Z(C))return r?pi:l;let E=`${C}__${l}`;di(d)||(E=`${E}__${JSON.stringify(d)}`);let z=o.get(E);return z||(z=new Intl.DateTimeFormat(C,gt({},O,d)),o.set(E,z)),m?z.formatToParts(u):z.format(u)}const Xd=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function gs(...e){const[t,n,r,a]=e,i=ze();let s=ze(),o;if(Z(t)){const l=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw tn(jt.INVALID_ISO_DATE_ARGUMENT);const u=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(u);try{o.toISOString()}catch{throw tn(jt.INVALID_ISO_DATE_ARGUMENT)}}else if(Mb(t)){if(isNaN(t.getTime()))throw tn(jt.INVALID_DATE_ARGUMENT);o=t}else if(et(t))o=t;else throw tn(jt.INVALID_ARGUMENT);return Z(n)?i.key=n:ge(n)&&Object.keys(n).forEach(l=>{Xd.includes(l)?s[l]=n[l]:i[l]=n[l]}),Z(r)?i.locale=r:ge(r)&&(s=r),ge(a)&&(s=a),[i.key||"",o,i,s]}function Kl(e,t,n){const r=e;for(const a in n){const i=`${t}__${a}`;r.__datetimeFormatters.has(i)&&r.__datetimeFormatters.delete(i)}}function Yl(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:a,onWarn:i,localeFallbacker:s}=e,{__numberFormatters:o}=e,[l,u,c,d]=hs(...t),f=Ee(c.missingWarn)?c.missingWarn:e.missingWarn;Ee(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn;const m=!!c.part,A=no(e,c),x=s(e,a,A);if(!Z(l)||l==="")return new Intl.NumberFormat(A,d).format(u);let T={},C,O=null;const w="number format";for(let R=0;R<x.length&&(C=x[R],T=n[C]||{},O=T[l],!ge(O));R++)ro(e,l,C,f,w);if(!ge(O)||!Z(C))return r?pi:l;let E=`${C}__${l}`;di(d)||(E=`${E}__${JSON.stringify(d)}`);let z=o.get(E);return z||(z=new Intl.NumberFormat(C,gt({},O,d)),o.set(E,z)),m?z.formatToParts(u):z.format(u)}const Jd=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function hs(...e){const[t,n,r,a]=e,i=ze();let s=ze();if(!et(t))throw tn(jt.INVALID_ARGUMENT);const o=t;return Z(n)?i.key=n:ge(n)&&Object.keys(n).forEach(l=>{Jd.includes(l)?s[l]=n[l]:i[l]=n[l]}),Z(r)?i.locale=r:ge(r)&&(s=r),ge(a)&&(s=a),[i.key||"",o,i,s]}function Xl(e,t,n){const r=e;for(const a in n){const i=`${t}__${a}`;r.__numberFormatters.has(i)&&r.__numberFormatters.delete(i)}}v_();const p1="9.14.5";function m1(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(vn().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(vn().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(vn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(vn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(vn().__INTLIFY_PROD_DEVTOOLS__=!1)}const g1=H_.__EXTEND_POINT__,pn=fi(g1);pn(),pn(),pn(),pn(),pn(),pn(),pn(),pn(),pn();const Zd=jt.__EXTEND_POINT__,St=fi(Zd),it={UNEXPECTED_RETURN_TYPE:Zd,INVALID_ARGUMENT:St(),MUST_BE_CALL_SETUP_TOP:St(),NOT_INSTALLED:St(),NOT_AVAILABLE_IN_LEGACY_MODE:St(),REQUIRED_VALUE:St(),INVALID_VALUE:St(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:St(),NOT_INSTALLED_WITH_PROVIDE:St(),UNEXPECTED_ERROR:St(),NOT_COMPATIBLE_LEGACY_VUE_I18N:St(),BRIDGE_SUPPORT_VUE_2_ONLY:St(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:St(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:St(),__EXTEND_POINT__:St()};function ut(e,...t){return Lr(e,null,void 0)}const ys=Vn("__translateVNode"),vs=Vn("__datetimeParts"),bs=Vn("__numberParts"),Qd=Vn("__setPluralRules"),ef=Vn("__injectWithOption"),_s=Vn("__dispose");function la(e){if(!Ce(e)||an(e))return e;for(const t in e)if(Ut(e,t))if(!t.includes("."))Ce(e[t])&&la(e[t]);else{const n=t.split("."),r=n.length-1;let a=e,i=!1;for(let s=0;s<r;s++){if(n[s]==="__proto__")throw new Error(`unsafe key: ${n[s]}`);if(n[s]in a||(a[n[s]]=ze()),!Ce(a[n[s]])){i=!0;break}a=a[n[s]]}if(i||(an(a)?zd.includes(n[r])||delete e[t]:(a[n[r]]=e[t],delete e[t])),!an(a)){const s=a[n[r]];Ce(s)&&la(s)}}return e}function mi(e,t){const{messages:n,__i18n:r,messageResolver:a,flatJson:i}=t,s=ge(n)?n:He(r)?ze():{[e]:ze()};if(He(r)&&r.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:u}=o;l?(s[l]=s[l]||ze(),Ra(u,s[l])):Ra(u,s)}else Z(o)&&Ra(JSON.parse(o),s)}),a==null&&i)for(const o in s)Ut(s,o)&&la(s[o]);return s}function tf(e){return e.type}function nf(e,t,n){let r=Ce(t.messages)?t.messages:ze();"__i18nGlobal"in n&&(r=mi(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const a=Object.keys(r);a.length&&a.forEach(i=>{e.mergeLocaleMessage(i,r[i])});{if(Ce(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(s=>{e.mergeDateTimeFormat(s,t.datetimeFormats[s])})}if(Ce(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(s=>{e.mergeNumberFormat(s,t.numberFormats[s])})}}}function Jl(e){return k(pa,null,e,0)}const Zl="__INTLIFY_META__",Ql=()=>[],h1=()=>!1;let ec=0;function tc(e){return((t,n,r,a)=>e(n,r,Pt()||void 0,a))}const y1=()=>{const e=Pt();let t=null;return e&&(t=tf(e)[Zl])?{[Zl]:t}:null};function ao(e={},t){const{__root:n,__injectWithOption:r}=e,a=n===void 0,i=e.flatJson,s=qa?ve:ua,o=!!e.translateExistCompatible;let l=Ee(e.inheritLocale)?e.inheritLocale:!0;const u=s(n&&l?n.locale.value:Z(e.locale)?e.locale:Pr),c=s(n&&l?n.fallbackLocale.value:Z(e.fallbackLocale)||He(e.fallbackLocale)||ge(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:u.value),d=s(mi(u.value,e)),f=s(ge(e.datetimeFormats)?e.datetimeFormats:{[u.value]:{}}),m=s(ge(e.numberFormats)?e.numberFormats:{[u.value]:{}});let A=n?n.missingWarn:Ee(e.missingWarn)||Wn(e.missingWarn)?e.missingWarn:!0,x=n?n.fallbackWarn:Ee(e.fallbackWarn)||Wn(e.fallbackWarn)?e.fallbackWarn:!0,T=n?n.fallbackRoot:Ee(e.fallbackRoot)?e.fallbackRoot:!0,C=!!e.fallbackFormat,O=Ue(e.missing)?e.missing:null,w=Ue(e.missing)?tc(e.missing):null,E=Ue(e.postTranslation)?e.postTranslation:null,z=n?n.warnHtmlMessage:Ee(e.warnHtmlMessage)?e.warnHtmlMessage:!0,R=!!e.escapeParameter;const j=n?n.modifiers:ge(e.modifiers)?e.modifiers:{};let $=e.pluralRules||n&&n.pluralRules,L;L=(()=>{a&&Ul(null);const P={version:p1,locale:u.value,fallbackLocale:c.value,messages:d.value,modifiers:j,pluralRules:$,missing:w===null?void 0:w,missingWarn:A,fallbackWarn:x,fallbackFormat:C,unresolving:!0,postTranslation:E===null?void 0:E,warnHtmlMessage:z,escapeParameter:R,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};P.datetimeFormats=f.value,P.numberFormats=m.value,P.__datetimeFormatters=ge(L)?L.__datetimeFormatters:void 0,P.__numberFormatters=ge(L)?L.__numberFormatters:void 0;const W=r1(P);return a&&Ul(W),W})(),Wr(L,u.value,c.value);function fe(){return[u.value,c.value,d.value,f.value,m.value]}const V=se({get:()=>u.value,set:P=>{u.value=P,L.locale=u.value}}),ce=se({get:()=>c.value,set:P=>{c.value=P,L.fallbackLocale=c.value,Wr(L,u.value,P)}}),Me=se(()=>d.value),We=se(()=>f.value),ye=se(()=>m.value);function be(){return Ue(E)?E:null}function ke(P){E=P,L.postTranslation=P}function nt(){return O}function ne(P){P!==null&&(w=tc(P)),O=P,L.missing=w}const Ge=(P,W,le,xe,Ye,xt)=>{fe();let ft;try{__INTLIFY_PROD_DEVTOOLS__,a||(L.fallbackContext=n?n1():void 0),ft=P(L)}finally{__INTLIFY_PROD_DEVTOOLS__,a||(L.fallbackContext=void 0)}if(le!=="translate exists"&&et(ft)&&ft===pi||le==="translate exists"&&!ft){const[Yn,gi]=W();return n&&T?xe(n):Ye(Yn)}else{if(xt(ft))return ft;throw ut(it.UNEXPECTED_RETURN_TYPE)}};function Ve(...P){return Ge(W=>Reflect.apply(Hl,null,[W,...P]),()=>ms(...P),"translate",W=>Reflect.apply(W.t,W,[...P]),W=>W,W=>Z(W))}function Et(...P){const[W,le,xe]=P;if(xe&&!Ce(xe))throw ut(it.INVALID_ARGUMENT);return Ve(W,le,gt({resolvedMessage:!0},xe||{}))}function dt(...P){return Ge(W=>Reflect.apply(ql,null,[W,...P]),()=>gs(...P),"datetime format",W=>Reflect.apply(W.d,W,[...P]),()=>Fl,W=>Z(W))}function Ne(...P){return Ge(W=>Reflect.apply(Yl,null,[W,...P]),()=>hs(...P),"number format",W=>Reflect.apply(W.n,W,[...P]),()=>Fl,W=>Z(W))}function Ae(P){return P.map(W=>Z(W)||et(W)||Ee(W)?Jl(String(W)):W)}const Q={normalize:Ae,interpolate:P=>P,type:"vnode"};function H(...P){return Ge(W=>{let le;const xe=W;try{xe.processor=Q,le=Reflect.apply(Hl,null,[xe,...P])}finally{xe.processor=null}return le},()=>ms(...P),"translate",W=>W[ys](...P),W=>[Jl(W)],W=>He(W))}function ae(...P){return Ge(W=>Reflect.apply(Yl,null,[W,...P]),()=>hs(...P),"number format",W=>W[bs](...P),Ql,W=>Z(W)||He(W))}function me(...P){return Ge(W=>Reflect.apply(ql,null,[W,...P]),()=>gs(...P),"datetime format",W=>W[vs](...P),Ql,W=>Z(W)||He(W))}function y(P){$=P,L.pluralRules=$}function b(P,W){return Ge(()=>{if(!P)return!1;const le=Z(W)?W:u.value,xe=G(le),Ye=L.messageResolver(xe,P);return o?Ye!=null:an(Ye)||Ft(Ye)||Z(Ye)},()=>[P],"translate exists",le=>Reflect.apply(le.te,le,[P,W]),h1,le=>Ee(le))}function v(P){let W=null;const le=Wd(L,c.value,u.value);for(let xe=0;xe<le.length;xe++){const Ye=d.value[le[xe]]||{},xt=L.messageResolver(Ye,P);if(xt!=null){W=xt;break}}return W}function N(P){const W=v(P);return W??(n?n.tm(P)||{}:{})}function G(P){return d.value[P]||{}}function U(P,W){if(i){const le={[P]:W};for(const xe in le)Ut(le,xe)&&la(le[xe]);W=le[P]}d.value[P]=W,L.messages=d.value}function Y(P,W){d.value[P]=d.value[P]||{};const le={[P]:W};if(i)for(const xe in le)Ut(le,xe)&&la(le[xe]);W=le[P],Ra(W,d.value[P]),L.messages=d.value}function K(P){return f.value[P]||{}}function g(P,W){f.value[P]=W,L.datetimeFormats=f.value,Kl(L,P,W)}function h(P,W){f.value[P]=gt(f.value[P]||{},W),L.datetimeFormats=f.value,Kl(L,P,W)}function S(P){return m.value[P]||{}}function F(P,W){m.value[P]=W,L.numberFormats=m.value,Xl(L,P,W)}function X(P,W){m.value[P]=gt(m.value[P]||{},W),L.numberFormats=m.value,Xl(L,P,W)}ec++,n&&qa&&(ct(n.locale,P=>{l&&(u.value=P,L.locale=P,Wr(L,u.value,c.value))}),ct(n.fallbackLocale,P=>{l&&(c.value=P,L.fallbackLocale=P,Wr(L,u.value,c.value))}));const q={id:ec,locale:V,fallbackLocale:ce,get inheritLocale(){return l},set inheritLocale(P){l=P,P&&n&&(u.value=n.locale.value,c.value=n.fallbackLocale.value,Wr(L,u.value,c.value))},get availableLocales(){return Object.keys(d.value).sort()},messages:Me,get modifiers(){return j},get pluralRules(){return $||{}},get isGlobal(){return a},get missingWarn(){return A},set missingWarn(P){A=P,L.missingWarn=A},get fallbackWarn(){return x},set fallbackWarn(P){x=P,L.fallbackWarn=x},get fallbackRoot(){return T},set fallbackRoot(P){T=P},get fallbackFormat(){return C},set fallbackFormat(P){C=P,L.fallbackFormat=C},get warnHtmlMessage(){return z},set warnHtmlMessage(P){z=P,L.warnHtmlMessage=P},get escapeParameter(){return R},set escapeParameter(P){R=P,L.escapeParameter=P},t:Ve,getLocaleMessage:G,setLocaleMessage:U,mergeLocaleMessage:Y,getPostTranslationHandler:be,setPostTranslationHandler:ke,getMissingHandler:nt,setMissingHandler:ne,[Qd]:y};return q.datetimeFormats=We,q.numberFormats=ye,q.rt=Et,q.te=b,q.tm=N,q.d=dt,q.n=Ne,q.getDateTimeFormat=K,q.setDateTimeFormat=g,q.mergeDateTimeFormat=h,q.getNumberFormat=S,q.setNumberFormat=F,q.mergeNumberFormat=X,q[ef]=r,q[ys]=H,q[vs]=me,q[bs]=ae,q}function v1(e){const t=Z(e.locale)?e.locale:Pr,n=Z(e.fallbackLocale)||He(e.fallbackLocale)||ge(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,r=Ue(e.missing)?e.missing:void 0,a=Ee(e.silentTranslationWarn)||Wn(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,i=Ee(e.silentFallbackWarn)||Wn(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,s=Ee(e.fallbackRoot)?e.fallbackRoot:!0,o=!!e.formatFallbackMessages,l=ge(e.modifiers)?e.modifiers:{},u=e.pluralizationRules,c=Ue(e.postTranslation)?e.postTranslation:void 0,d=Z(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,f=!!e.escapeParameterHtml,m=Ee(e.sync)?e.sync:!0;let A=e.messages;if(ge(e.sharedMessages)){const R=e.sharedMessages;A=Object.keys(R).reduce(($,L)=>{const oe=$[L]||($[L]={});return gt(oe,R[L]),$},A||{})}const{__i18n:x,__root:T,__injectWithOption:C}=e,O=e.datetimeFormats,w=e.numberFormats,E=e.flatJson,z=e.translateExistCompatible;return{locale:t,fallbackLocale:n,messages:A,flatJson:E,datetimeFormats:O,numberFormats:w,missing:r,missingWarn:a,fallbackWarn:i,fallbackRoot:s,fallbackFormat:o,modifiers:l,pluralRules:u,postTranslation:c,warnHtmlMessage:d,escapeParameter:f,messageResolver:e.messageResolver,inheritLocale:m,translateExistCompatible:z,__i18n:x,__root:T,__injectWithOption:C}}function ks(e={},t){{const n=ao(v1(e)),{__extender:r}=e,a={id:n.id,get locale(){return n.locale.value},set locale(i){n.locale.value=i},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(i){n.fallbackLocale.value=i},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(i){},get missing(){return n.getMissingHandler()},set missing(i){n.setMissingHandler(i)},get silentTranslationWarn(){return Ee(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(i){n.missingWarn=Ee(i)?!i:i},get silentFallbackWarn(){return Ee(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(i){n.fallbackWarn=Ee(i)?!i:i},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(i){n.fallbackFormat=i},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(i){n.setPostTranslationHandler(i)},get sync(){return n.inheritLocale},set sync(i){n.inheritLocale=i},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(i){n.warnHtmlMessage=i!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(i){n.escapeParameter=i},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(i){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...i){const[s,o,l]=i,u={};let c=null,d=null;if(!Z(s))throw ut(it.INVALID_ARGUMENT);const f=s;return Z(o)?u.locale=o:He(o)?c=o:ge(o)&&(d=o),He(l)?c=l:ge(l)&&(d=l),Reflect.apply(n.t,n,[f,c||d||{},u])},rt(...i){return Reflect.apply(n.rt,n,[...i])},tc(...i){const[s,o,l]=i,u={plural:1};let c=null,d=null;if(!Z(s))throw ut(it.INVALID_ARGUMENT);const f=s;return Z(o)?u.locale=o:et(o)?u.plural=o:He(o)?c=o:ge(o)&&(d=o),Z(l)?u.locale=l:He(l)?c=l:ge(l)&&(d=l),Reflect.apply(n.t,n,[f,c||d||{},u])},te(i,s){return n.te(i,s)},tm(i){return n.tm(i)},getLocaleMessage(i){return n.getLocaleMessage(i)},setLocaleMessage(i,s){n.setLocaleMessage(i,s)},mergeLocaleMessage(i,s){n.mergeLocaleMessage(i,s)},d(...i){return Reflect.apply(n.d,n,[...i])},getDateTimeFormat(i){return n.getDateTimeFormat(i)},setDateTimeFormat(i,s){n.setDateTimeFormat(i,s)},mergeDateTimeFormat(i,s){n.mergeDateTimeFormat(i,s)},n(...i){return Reflect.apply(n.n,n,[...i])},getNumberFormat(i){return n.getNumberFormat(i)},setNumberFormat(i,s){n.setNumberFormat(i,s)},mergeNumberFormat(i,s){n.mergeNumberFormat(i,s)},getChoiceIndex(i,s){return-1}};return a.__extender=r,a}}const io={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function b1({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,a)=>[...r,...a.type===_e?a.children:[a]],[]):t.reduce((n,r)=>{const a=e[r];return a&&(n[r]=a()),n},ze())}function rf(e){return _e}const _1=Te({name:"i18n-t",props:gt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>et(e)||!isNaN(e)}},io),setup(e,t){const{slots:n,attrs:r}=t,a=e.i18n||dr({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(d=>d!=="_"),s=ze();e.locale&&(s.locale=e.locale),e.plural!==void 0&&(s.plural=Z(e.plural)?+e.plural:e.plural);const o=b1(t,i),l=a[ys](e.keypath,o,s),u=gt(ze(),r),c=Z(e.tag)||Ce(e.tag)?e.tag:rf();return Ot(c,u,l)}}}),nc=_1;function k1(e){return He(e)&&!Z(e[0])}function af(e,t,n,r){const{slots:a,attrs:i}=t;return()=>{const s={part:!0};let o=ze();e.locale&&(s.locale=e.locale),Z(e.format)?s.key=e.format:Ce(e.format)&&(Z(e.format.key)&&(s.key=e.format.key),o=Object.keys(e.format).reduce((f,m)=>n.includes(m)?gt(ze(),f,{[m]:e.format[m]}):f,ze()));const l=r(e.value,s,o);let u=[s.key];He(l)?u=l.map((f,m)=>{const A=a[f.type],x=A?A({[f.type]:f.value,index:m,parts:l}):[f.value];return k1(x)&&(x[0].key=`${f.type}-${m}`),x}):Z(l)&&(u=[l]);const c=gt(ze(),i),d=Z(e.tag)||Ce(e.tag)?e.tag:rf();return Ot(d,c,u)}}const w1=Te({name:"i18n-n",props:gt({value:{type:Number,required:!0},format:{type:[String,Object]}},io),setup(e,t){const n=e.i18n||dr({useScope:e.scope,__useComponent:!0});return af(e,t,Jd,(...r)=>n[bs](...r))}}),rc=w1,E1=Te({name:"i18n-d",props:gt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},io),setup(e,t){const n=e.i18n||dr({useScope:e.scope,__useComponent:!0});return af(e,t,Xd,(...r)=>n[vs](...r))}}),ac=E1;function x1(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function A1(e){const t=s=>{const{instance:o,modifiers:l,value:u}=s;if(!o||!o.$)throw ut(it.UNEXPECTED_ERROR);const c=x1(e,o.$),d=ic(u);return[Reflect.apply(c.t,c,[...sc(d)]),c]};return{created:(s,o)=>{const[l,u]=t(o);qa&&e.global===u&&(s.__i18nWatcher=ct(u.locale,()=>{o.instance&&o.instance.$forceUpdate()})),s.__composer=u,s.textContent=l},unmounted:s=>{qa&&s.__i18nWatcher&&(s.__i18nWatcher(),s.__i18nWatcher=void 0,delete s.__i18nWatcher),s.__composer&&(s.__composer=void 0,delete s.__composer)},beforeUpdate:(s,{value:o})=>{if(s.__composer){const l=s.__composer,u=ic(o);s.textContent=Reflect.apply(l.t,l,[...sc(u)])}},getSSRProps:s=>{const[o]=t(s);return{textContent:o}}}}function ic(e){if(Z(e))return{path:e};if(ge(e)){if(!("path"in e))throw ut(it.REQUIRED_VALUE,"path");return e}else throw ut(it.INVALID_VALUE)}function sc(e){const{path:t,locale:n,args:r,choice:a,plural:i}=e,s={},o=r||{};return Z(n)&&(s.locale=n),et(a)&&(s.plural=a),et(i)&&(s.plural=i),[t,o,s]}function T1(e,t,...n){const r=ge(n[0])?n[0]:{},a=!!r.useI18nComponentName;(!Ee(r.globalInstall)||r.globalInstall)&&([a?"i18n":nc.name,"I18nT"].forEach(s=>e.component(s,nc)),[rc.name,"I18nN"].forEach(s=>e.component(s,rc)),[ac.name,"I18nD"].forEach(s=>e.component(s,ac))),e.directive("t",A1(t))}function I1(e,t,n){return{beforeCreate(){const r=Pt();if(!r)throw ut(it.UNEXPECTED_ERROR);const a=this.$options;if(a.i18n){const i=a.i18n;if(a.__i18n&&(i.__i18n=a.__i18n),i.__root=t,this===this.$root)this.$i18n=oc(e,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=ks(i);const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}}else if(a.__i18n)if(this===this.$root)this.$i18n=oc(e,a);else{this.$i18n=ks({__i18n:a.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:t});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=e;a.__i18nGlobal&&nf(t,a,a),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,s)=>this.$i18n.te(i,s),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=Pt();if(!r)throw ut(it.UNEXPECTED_ERROR);const a=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,a.__disposer&&(a.__disposer(),delete a.__disposer,delete a.__extender),n.__deleteInstance(r),delete this.$i18n}}}function oc(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[Qd](t.pluralizationRules||e.pluralizationRules);const n=mi(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(r=>e.mergeLocaleMessage(r,n[r])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r,t.datetimeFormats[r])),t.numberFormats&&Object.keys(t.numberFormats).forEach(r=>e.mergeNumberFormat(r,t.numberFormats[r])),e}const C1=Vn("global-vue-i18n");function P1(e={},t){const n=__VUE_I18N_LEGACY_API__&&Ee(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,r=Ee(e.globalInjection)?e.globalInjection:!0,a=__VUE_I18N_LEGACY_API__&&n?!!e.allowComposition:!0,i=new Map,[s,o]=S1(e,n),l=Vn("");function u(f){return i.get(f)||null}function c(f,m){i.set(f,m)}function d(f){i.delete(f)}{const f={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return a},async install(m,...A){if(m.__VUE_I18N_SYMBOL__=l,m.provide(m.__VUE_I18N_SYMBOL__,f),ge(A[0])){const C=A[0];f.__composerExtend=C.__composerExtend,f.__vueI18nExtend=C.__vueI18nExtend}let x=null;!n&&r&&(x=F1(m,f.global)),__VUE_I18N_FULL_INSTALL__&&T1(m,f,...A),__VUE_I18N_LEGACY_API__&&n&&m.mixin(I1(o,o.__composer,f));const T=m.unmount;m.unmount=()=>{x&&x(),f.dispose(),T()}},get global(){return o},dispose(){s.stop()},__instances:i,__getInstance:u,__setInstance:c,__deleteInstance:d};return f}}function dr(e={}){const t=Pt();if(t==null)throw ut(it.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw ut(it.NOT_INSTALLED);const n=O1(t),r=N1(n),a=tf(t),i=L1(e,a);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!e.__useComponent){if(!n.allowComposition)throw ut(it.NOT_AVAILABLE_IN_LEGACY_MODE);return $1(t,i,r,e)}if(i==="global")return nf(r,e,a),r;if(i==="parent"){let l=R1(n,t,e.__useComponent);return l==null&&(l=r),l}const s=n;let o=s.__getInstance(t);if(o==null){const l=gt({},e);"__i18n"in a&&(l.__i18n=a.__i18n),r&&(l.__root=r),o=ao(l),s.__composerExtend&&(o[_s]=s.__composerExtend(o)),D1(s,t,o),s.__setInstance(t,o)}return o}function S1(e,t,n){const r=Ts();{const a=__VUE_I18N_LEGACY_API__&&t?r.run(()=>ks(e)):r.run(()=>ao(e));if(a==null)throw ut(it.UNEXPECTED_ERROR);return[r,a]}}function O1(e){{const t=Dt(e.isCE?C1:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw ut(e.isCE?it.NOT_INSTALLED_WITH_PROVIDE:it.UNEXPECTED_ERROR);return t}}function L1(e,t){return di(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function N1(e){return e.mode==="composition"?e.global:e.global.__composer}function R1(e,t,n=!1){let r=null;const a=t.root;let i=M1(t,n);for(;i!=null;){const s=e;if(e.mode==="composition")r=s.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const o=s.__getInstance(i);o!=null&&(r=o.__composer,n&&r&&!r[ef]&&(r=null))}if(r!=null||a===i)break;i=i.parent}return r}function M1(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function D1(e,t,n){An(()=>{},t),cr(()=>{const r=n;e.__deleteInstance(t);const a=r[_s];a&&(a(),delete r[_s])},t)}function $1(e,t,n,r={}){const a=t==="local",i=ua(null);if(a&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw ut(it.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const s=Ee(r.inheritLocale)?r.inheritLocale:!Z(r.locale),o=ve(!a||s?n.locale.value:Z(r.locale)?r.locale:Pr),l=ve(!a||s?n.fallbackLocale.value:Z(r.fallbackLocale)||He(r.fallbackLocale)||ge(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:o.value),u=ve(mi(o.value,r)),c=ve(ge(r.datetimeFormats)?r.datetimeFormats:{[o.value]:{}}),d=ve(ge(r.numberFormats)?r.numberFormats:{[o.value]:{}}),f=a?n.missingWarn:Ee(r.missingWarn)||Wn(r.missingWarn)?r.missingWarn:!0,m=a?n.fallbackWarn:Ee(r.fallbackWarn)||Wn(r.fallbackWarn)?r.fallbackWarn:!0,A=a?n.fallbackRoot:Ee(r.fallbackRoot)?r.fallbackRoot:!0,x=!!r.fallbackFormat,T=Ue(r.missing)?r.missing:null,C=Ue(r.postTranslation)?r.postTranslation:null,O=a?n.warnHtmlMessage:Ee(r.warnHtmlMessage)?r.warnHtmlMessage:!0,w=!!r.escapeParameter,E=a?n.modifiers:ge(r.modifiers)?r.modifiers:{},z=r.pluralRules||a&&n.pluralRules;function R(){return[o.value,l.value,u.value,c.value,d.value]}const j=se({get:()=>i.value?i.value.locale.value:o.value,set:v=>{i.value&&(i.value.locale.value=v),o.value=v}}),$=se({get:()=>i.value?i.value.fallbackLocale.value:l.value,set:v=>{i.value&&(i.value.fallbackLocale.value=v),l.value=v}}),L=se(()=>i.value?i.value.messages.value:u.value),oe=se(()=>c.value),fe=se(()=>d.value);function V(){return i.value?i.value.getPostTranslationHandler():C}function ce(v){i.value&&i.value.setPostTranslationHandler(v)}function Me(){return i.value?i.value.getMissingHandler():T}function We(v){i.value&&i.value.setMissingHandler(v)}function ye(v){return R(),v()}function be(...v){return i.value?ye(()=>Reflect.apply(i.value.t,null,[...v])):ye(()=>"")}function ke(...v){return i.value?Reflect.apply(i.value.rt,null,[...v]):""}function nt(...v){return i.value?ye(()=>Reflect.apply(i.value.d,null,[...v])):ye(()=>"")}function ne(...v){return i.value?ye(()=>Reflect.apply(i.value.n,null,[...v])):ye(()=>"")}function Ge(v){return i.value?i.value.tm(v):{}}function Ve(v,N){return i.value?i.value.te(v,N):!1}function Et(v){return i.value?i.value.getLocaleMessage(v):{}}function dt(v,N){i.value&&(i.value.setLocaleMessage(v,N),u.value[v]=N)}function Ne(v,N){i.value&&i.value.mergeLocaleMessage(v,N)}function Ae(v){return i.value?i.value.getDateTimeFormat(v):{}}function B(v,N){i.value&&(i.value.setDateTimeFormat(v,N),c.value[v]=N)}function Q(v,N){i.value&&i.value.mergeDateTimeFormat(v,N)}function H(v){return i.value?i.value.getNumberFormat(v):{}}function ae(v,N){i.value&&(i.value.setNumberFormat(v,N),d.value[v]=N)}function me(v,N){i.value&&i.value.mergeNumberFormat(v,N)}const y={get id(){return i.value?i.value.id:-1},locale:j,fallbackLocale:$,messages:L,datetimeFormats:oe,numberFormats:fe,get inheritLocale(){return i.value?i.value.inheritLocale:s},set inheritLocale(v){i.value&&(i.value.inheritLocale=v)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(u.value)},get modifiers(){return i.value?i.value.modifiers:E},get pluralRules(){return i.value?i.value.pluralRules:z},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:f},set missingWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackWarn(){return i.value?i.value.fallbackWarn:m},set fallbackWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackRoot(){return i.value?i.value.fallbackRoot:A},set fallbackRoot(v){i.value&&(i.value.fallbackRoot=v)},get fallbackFormat(){return i.value?i.value.fallbackFormat:x},set fallbackFormat(v){i.value&&(i.value.fallbackFormat=v)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:O},set warnHtmlMessage(v){i.value&&(i.value.warnHtmlMessage=v)},get escapeParameter(){return i.value?i.value.escapeParameter:w},set escapeParameter(v){i.value&&(i.value.escapeParameter=v)},t:be,getPostTranslationHandler:V,setPostTranslationHandler:ce,getMissingHandler:Me,setMissingHandler:We,rt:ke,d:nt,n:ne,tm:Ge,te:Ve,getLocaleMessage:Et,setLocaleMessage:dt,mergeLocaleMessage:Ne,getDateTimeFormat:Ae,setDateTimeFormat:B,mergeDateTimeFormat:Q,getNumberFormat:H,setNumberFormat:ae,mergeNumberFormat:me};function b(v){v.locale.value=o.value,v.fallbackLocale.value=l.value,Object.keys(u.value).forEach(N=>{v.mergeLocaleMessage(N,u.value[N])}),Object.keys(c.value).forEach(N=>{v.mergeDateTimeFormat(N,c.value[N])}),Object.keys(d.value).forEach(N=>{v.mergeNumberFormat(N,d.value[N])}),v.escapeParameter=w,v.fallbackFormat=x,v.fallbackRoot=A,v.fallbackWarn=m,v.missingWarn=f,v.warnHtmlMessage=O}return tu(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw ut(it.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const v=i.value=e.proxy.$i18n.__composer;t==="global"?(o.value=v.locale.value,l.value=v.fallbackLocale.value,u.value=v.messages.value,c.value=v.datetimeFormats.value,d.value=v.numberFormats.value):a&&b(v)}),y}const z1=["locale","fallbackLocale","availableLocales"],lc=["t","rt","d","n","tm","te"];function F1(e,t){const n=Object.create(null);return z1.forEach(a=>{const i=Object.getOwnPropertyDescriptor(t,a);if(!i)throw ut(it.UNEXPECTED_ERROR);const s=Je(i.value)?{get(){return i.value.value},set(o){i.value.value=o}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,a,s)}),e.config.globalProperties.$i18n=n,lc.forEach(a=>{const i=Object.getOwnPropertyDescriptor(t,a);if(!i||!i.value)throw ut(it.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,i)}),()=>{delete e.config.globalProperties.$i18n,lc.forEach(a=>{delete e.config.globalProperties[`$${a}`]})}}m1();__INTLIFY_JIT_COMPILATION__?Bl(l1):Bl(o1);Z_(L_);Q_(Wd);if(__INTLIFY_PROD_DEVTOOLS__){const e=vn();e.__INTLIFY__=!0,B_(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const W1={home:"Home",about:"About",governance:"AI Governance",research:"Research",services:"Services",products:"Products",privacy:"Privacy",ourTeams:"Our Team"},B1={tagline:"Research-based AI governance for regulated environments.",rights:"All Rights Reserved",navigation:"Navigation",contact:"Contact",address:"Dijital Park Teknokent, Atasehir / Istanbul"},U1={switchLanguage:"Switch language to {locale}",showServiceDetails:"See service details",hideServiceDetails:"Hide service details",showProductDetails:"See product details",hideProductDetails:"Hide product details"},j1={title:"Ready to Strengthen Your AI Governance Framework?",description:"We help your teams turn AI governance questions into clear controls, evidence, and operating practices.",contact:"Contact Us",research:"Explore Our Research"},G1={eyebrow:"Contact Request",title:"Tell us what you need",description:"Share a few details and we will use this as the starting point for the right conversation.",close:"Close contact form",cancel:"Close",fields:{name:"Full name",email:"Email",organization:"Organization",topic:"Topic",message:"Message"},placeholders:{name:"Your name",email:"name@company.com",organization:"Company or institution",message:"Tell us what you are working on or what kind of support you need."},topics:[{value:"governance",label:"AI governance or compliance"},{value:"products",label:"TrustAI products"},{value:"research",label:"Research collaboration"},{value:"other",label:"Other"}],button:{idle:"Send request",sending:"Preparing your note...",sent:"Request ready"},toastTitle:"Request received",toastDescription:"Thank you. We will review your message and get back to you soon."},V1={label:"Research-Driven AI Governance",title:"AI Governance and Explainability for High-Risk Models",description:"We develop research-based solutions that improve model transparency, traceability, and audit readiness in regulated environments.",button:"Explore Our Research"},H1={focusAreas:"Focus Areas",servicesDescription:"Composable governance workflows built for transparent, regulated AI delivery.",researchDescription:"Selected work that informs our platform architecture, governance patterns, and explainability methods.",ctaDescription:"Have a question about TrustAI or our research? We would be happy to hear from you."},q1={label:"What We Do?",title:"We provide structured AI governance and explainability solutions for regulated environments.",explainability:{title:"Explainability",description:"Generate interpretable insights into model decisions for audit and regulatory review."},traceability:{title:"Model Traceability",description:"Track model versions, changes, and decision logic across the lifecycle."},workflows:{title:"Governance Workflows",description:"Structured approval processes and documentation for high-risk AI systems."},audit:{title:"Audit Readiness",description:"Produce compliance-ready reports aligned with regulatory expectations."}},K1={label:"About Us",title:"Research-Based AI Governance for Regulated Environments",intro:"We help organizations apply research-based AI governance from Türkiye to improve explainability, reliability, and oversight.",sectorFocus:"Our current solutions are tailored to the financial sector, where regulatory oversight, transparency, and risk management are of critical importance. In the near future, we plan to expand our services to high-impact domains such as healthcare, manufacturing, and public services.",approach:"We transform the latest research into practical solutions that are transparent, fair, and audit-ready for high-risk financial applications such as credit risk scoring, fraud detection, and compliance monitoring.",team:"We bring together experts in explainable AI (XAI), optimization, model risk, and MLOps, combining academic depth with industry experience for financial institutions that value trust, compliance, and resilience."},Y1={label:"Why TrustAI?",title:"We combine academic rigor with practical governance solutions for high-risk AI systems.",foundation:{title:"Research-Driven Foundation",description:"Built on peer-reviewed research and academic expertise in explainable and trustworthy AI."},sector:{title:"Financial Sector Focus",description:"Designed specifically for regulated financial environments and high-impact AI applications."},governance:{title:"Governance by Design",description:"Structured workflows, documentation, and traceability embedded from the start."},audit:{title:"Audit-Ready Architecture",description:"Clear model explanations and reporting aligned with regulatory expectations."}},X1={title:"Research & Publications",subtitle:"Advancing Trustworthy and Explainable AI",publicationBtn:"View Publication"},J1={label:"Evidence Base",title:"Research & References",description:"TrustAI integrates rigorous academic inquiry with practical governance solutions. Below are publications and references that exemplify our contribution to trustworthy and explainable artificial intelligence.",subtitle:"Our Publications"},Z1={hero:{label:"Research-Led Foundations",title:"About TrustAI",subtitle:"TrustAI combines academic rigor with production-ready engineering to help organizations build transparent, auditable, and regulation-ready AI systems in high-risk sectors."},whoWeAre:{title:"Who We Are",p1:"We help organizations in Türkiye and regulated markets connect academic AI governance research with practical implementation.",p2:"We help teams address explainability, fairness, robustness, and regulatory compliance for high-risk AI systems — particularly in regulated sectors such as finance.",p3:"We combine academic rigor with production-ready engineering to help organizations deliver AI systems that are transparent, auditable, and compliant by design."},vision:{title:"Our Vision",description:"To build a Türkiye-based, academically grounded governance platform that helps financial institutions and other regulated sectors deploy high-risk AI systems with transparency, auditability, and confidence."},mission:{title:"Our Mission",items:["Make AI systems explainable and accountable","Reduce model risk in regulated environments","Support compliance with EU AI Act, ISO/IEC 42001, and national AI regulations","Build domestic AI technology with strong scientific foundations"]},difference:{title:"What Makes TrustAI Different",p1:"We provide more than a toolkit: an integrated governance framework that brings together explainability, fairness analysis, robustness monitoring, automated compliance reporting, and MLOps-native architecture within a unified and structured system.",p2:"We ensure AI systems are designed to be compliant, transparent, and operationally resilient from inception."},platform:{title:"TrustAI-X Platform",description:"We provide TrustAI-X as a trustworthy and auditable artificial intelligence infrastructure for high-risk environments."},coreCapabilities:{title:"Core Capabilities",items:["SHAP, LIME, and DiCE-Extended counterfactual explanations","Bias detection and mitigation algorithms","Drift detection (PSI, KS, ADWIN)","Calibration monitoring (ECE, Brier, Platt Scaling)","EU AI Act compliant technical documentation","Automated audit trail and reporting"]},architecture:{title:"Platform Architecture",items:["MLOps-native","Container-based","API-first","Kubernetes compatible","On-Prem / SaaS / Hybrid deployable"]},scientific:{title:"Scientific Foundation",p1:"We build TrustAI on peer-reviewed research, including DiCE-Extended: A Robust Approach to Counterfactual Explanations, presented at MCO 2025 and published by Springer.",p2:"Our research focuses on the stability of counterfactual explanations, multi-criteria optimization, and robust and fair AI decision systems.",p3:"We aim to produce SCI/SSCI indexed publications, patent applications, graduate-level research outputs, and open-source contributions."},regulatory:{title:"Regulatory Alignment",p1:"We embed regulatory compliance from the beginning and align our framework with:",items:["EU AI Act (2024/1689)","ISO/IEC 42001:2023","ISO/IEC 24029","NIST AI Risk Management Framework","National AI Strategy (2021–2025)"],p2:"We ensure AI systems are documented, traceable, auditable, and continuously monitored."},sectors:{title:"Target Sectors",p1:"We focus primarily on high-risk AI systems in banking, credit scoring, fraud detection, financial risk modeling, and regulated enterprise AI environments.",p2:"We help adapt the platform for manufacturing, public sector, and healthcare domains that require structured governance frameworks."},team:{title:"Our Team",p1:"We operate through a multidisciplinary structure that combines academic leadership, AI and data science researchers, software engineers, MLOps specialists, regulatory experts, and industry advisors.",p2:"We work with university R&D infrastructure and research networks to ensure scientific depth and applied innovation."},closing:{statement:"AI must be explainable. AI must be measurable. AI must be accountable. AI must be scientifically grounded and regulation-ready.",highlight:"TrustAI exists to make that possible."},tabs:{whoWeAre:"Who We Are",platform:"Platform",alignment:"Alignment"}},Q1={diceExtended:{title:"DiCE-Extended: A Robust Approach to Counterfactual Explanations in Machine Learning",description:"DiCE-Extended enhances counterfactual explanation generation by integrating multi-objective optimization to improve robustness while preserving interpretability. It introduces a stability-aware design that produces more reliable and decision-aligned explanations across diverse machine learning models."},highStakes:{title:"Trustworthy and Responsible AI for High-Stakes Decision Environments",description:"This work designs an optimization-based ensemble pruning approach that strengthens model stability, interpretability, and robustness, helping organizations build transparent and accountable decision-support systems."}},e0={hero:{label:"Trust, Risk & Accountability",title:"AI Governance: Importance and Impact",subtitle:"We help organizations design and implement AI governance frameworks for high-impact systems across finance, healthcare, public services, and critical infrastructure, addressing risks related to bias, opacity, accountability, and regulatory exposure."},whatIs:{title:"What is AI Governance?",p1:"AI governance refers to the structured framework of principles, policies, operational controls, and accountability mechanisms that guide how artificial intelligence systems are designed, deployed, monitored, and corrected.",p2:"It ensures that AI systems operate in alignment with legal standards, ethical norms, institutional objectives, and long-term societal interests. Governance is not a single compliance checkbox; it is a continuous lifecycle discipline."},whyItMatters:{title:"Why AI Governance Matters",cards:{bias:{title:"Bias & Discrimination Risks",description:"Without governance, AI models can reinforce historical biases, leading to unfair credit decisions, exclusionary outcomes, or systemic discrimination."},opacity:{title:"Opacity & Explainability Gaps",description:"Black-box models undermine trust. Governance frameworks require transparent documentation, explainability techniques, and interpretability controls."},regulatory:{title:"Regulatory & Legal Exposure",description:"Regulatory environments increasingly demand traceability, auditability, and documented risk controls for AI systems."}}},pillars:{title:"Core Governance Pillars",accountability:{title:"Accountability",description:"Clear ownership of model decisions, defined responsibility structures, and escalation mechanisms for high-risk AI systems."},traceability:{title:"Traceability",description:"Full documentation of model versions, training data sources, validation procedures, and deployment changes across the lifecycle."},monitoring:{title:"Monitoring & Risk Management",description:"Continuous oversight of model drift, performance degradation, and emerging compliance risks."}},financialSector:{title:"AI Governance in the Financial Sector",p1:"In regulated financial environments, AI systems influence credit risk scoring, fraud detection, anti-money laundering processes, and compliance monitoring. These applications directly impact individuals, institutions, and markets.",p2:"Financial regulators require demonstrable transparency, fairness, and model validation standards. Governance frameworks provide structured workflows, documentation, and reporting mechanisms that ensure models remain defensible and audit-ready."},closing:{title:"Building Trust Through Structured Governance",description:"Effective AI governance transforms advanced machine learning systems into transparent, accountable, and resilient decision infrastructures. It bridges academic research with practical regulatory implementation, ensuring innovation does not compromise fairness, legality, or public trust.",cta:"Contact TrustAI"}},t0={sectionDescription:"Selected publications and working directions behind TrustAI's explainability and governance tooling.",publicationLabel:"Publication",publicationRequest:"Publication details are available upon request.",collaborateTitle:"Collaborate With TrustAI Research",collaborateDescription:"We turn academic work into deployable governance practices for finance and other high-impact sectors."},n0={hero:{label:"Policy & Transparency",title:"Privacy Policy",subtitle:"This notice reflects the current website setup while TrustAI does not run a backend, active contact form storage, cookies, or analytics."},policyDetails:"Privacy Notice",noticeTitle:"Website Data Practices",noticeIntro:"This website is provided for informational purposes. Personal data is not collected or stored through the website itself.",noticeItems:["Cookies, advertising trackers, and website analytics tools are not used.","Contact form submissions are not collected or stored.","Email inquiries are used only to respond to the sender's request.","The hosting provider may process basic technical logs for security and site delivery."],contactTitle:"Questions",contactDescription:"If you have questions about this notice, contact us directly.",generalPrinciples:{title:"1. General Principles",p1:"We only collect personal data that you provide voluntarily, such as email addresses or contact information submitted through forms or correspondence. We respect your rights to privacy and transparency regarding your personal information.",p2:"We do not sell, rent, or share your personal data with third parties for marketing purposes. Any sharing of data is limited and governed by legal obligations or trusted service requirements."},whatWeCollect:{title:"2. What We Collect",intro:"When you interact with us, we may collect the following types of information:",items:{"contact-title":"Contact Information:",contact:"Email addresses, names, and titles.","usage-title":"Usage Data:",usage:"We do not run website analytics. Basic technical logs may be processed by the hosting provider for security and delivery.","communications-title":"Communications:",communications:"Any message content you voluntarily send by email."}},howWeUse:{title:"3. How We Use Your Information",intro:"We use your information to:",items:["Respond to inquiries and requests","Respond to messages you voluntarily send by email","Improve the functionality and performance of our services","Meet legal or regulatory obligations"]},dataSecurity:{title:"4. Data Security",description:"We implement reasonable administrative, technical, and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no system is completely secure — absolute protection cannot be guaranteed."},yourRights:{title:"5. Your Rights",intro:"Depending on your jurisdiction, you may have the right to:",items:["Request access to the personal data we hold about you","Correct or update your information","Withdraw consent for processing","Request deletion of your data"],contact:"To exercise any of these rights, contact us at info{'@'}trustai.com.tr."},cookies:{title:"6. Cookies & Tracking",description:"We do not currently use cookies, advertising trackers, or website analytics tools."},updates:{title:"7. Updates to This Policy",description:"This policy may be updated to reflect legal, technological, or business changes. Updated versions will be posted on this page with a revised effective date."}},r0={hero:{label:"People Behind The Work",title:"Team",subtitle:"Meet the multidisciplinary team behind TrustAI, combining academic rigor with practical expertise in AI governance and trustworthy artificial intelligence."}},a0={structureTitle:"Team Structure",howWeWorkTitle:"How We Work",howWeWorkDescription:"Research depth, product execution, and governance discipline move together in every delivery.",howWeWorkItems:{academic:"Academic and applied research aligned",engineering:"Engineering focused on trustworthy deployment",governance:"Governance and compliance embedded by design"}},i0={sureyya:{role:"Founder & CEO, TrustAI",bio:"Founder and CEO of TrustAI, driving the development of explainable, reliable, and compliant AI solutions for high-risk systems."},qazaleh:{role:"Researcher, AI & Software Engineer | UI/Web Developer",bio:"Designing and building intelligent, reliable, and user-friendly web and software solutions."},faramarz:{role:"Researcher, AI & Software Engineer | Backend Developer",bio:"Designing and building intelligent, reliable, and robust backend and software solutions."},dilara:{role:"Researcher | AI Governance & Ethics",bio:"Researching algorithmic fairness, AI governance, and the ethical dimensions of high-risk AI systems with a background in psychology and human-centered AI."},nisa:{role:"Intern",bio:"An artificial intelligence engineering student focusing on AI safety, AI governance, and responsible AI systems."},arya:{role:"AI Engineering Student",bio:"AI Engineering student with hands-on experience in machine learning and LLM systems, focusing on explainability, model reliability, and responsible AI."}},s0={hero:{label:"Governance Product Suite",title:"Platforms For Models, Agents, and AI Oversight",subtitle:"We help organizations govern predictive models and agent-based systems with the same principles: transparency, control, auditability, and operational trust."},overview:{label:"Product Ecosystem",title:"Two complementary layers for modern AI governance",description:"We help organizations govern machine learning systems across their lifecycle with TrustAI-X and control autonomous behavior at runtime with TrustAI-UX."},trustaiX:{name:"TrustAI-X",category:"AI Governance Platform",overview:"We help teams govern machine learning models with clear controls for transparency, fairness, robustness, and compliance.",whatItDoesTitle:"What It Does",whatItDoes:["We explain model decisions","We detect bias and evaluate fairness across outcomes and groups","We monitor performance, data drift, and model drift","We provide structured audit trails and reporting outputs"],featuresTitle:"Key Features",features:["Explainability tools","Bias and fairness checks","Drift monitoring","Audit-ready reporting"],deploymentTitle:"Deployment",deployment:["On-premise","Cloud (SaaS)","Hybrid"],valueTitle:"Value",value:["We reduce compliance risk","We improve trust and transparency","We centralize model governance"]},trustaiUX:{name:"TrustAI-UX",category:"Agent Governance Layer",overview:"We help teams control autonomous and agent-based AI systems with policy enforcement, monitoring, and audit logs.",whatItDoesTitle:"What It Does",whatItDoes:["We control agent permissions and actions","We monitor behavior in real time","We enforce governance policies","We log decisions for auditability"],featuresTitle:"Key Features",features:["Policy-based controls","Real-time monitoring","Human-in-the-loop workflows","Full audit logs"],compatibilityTitle:"Compatibility",compatibility:["LangChain","CrewAI","Other agent frameworks","API-first integration"],valueTitle:"Value",value:["We prevent unsafe agent behavior","We ensure compliance for agent systems","We provide full visibility and control"]},ecosystem:{label:"How They Work Together",title:"One stack for lifecycle governance and runtime control",description:"We help teams explain and evaluate models with TrustAI-X before and after deployment, then enforce policy and control agent behavior with TrustAI-UX during execution.",items:["We explain, evaluate, and document model behavior with TrustAI-X","We govern agent permissions, actions, and interventions at runtime with TrustAI-UX","We connect model governance with live operational oversight"]}},o0={hero:{label:"Advisory & Delivery Services",title:"Services For Governance, Compliance, and AI Safety",subtitle:"We help organizations design governance frameworks, implement responsible AI controls, and build compliance-ready operating models for high-risk systems."},cta:{title:"Need Support With Governance, Compliance, or AI Safety?"},overview:{label:"How We Support Teams",title:"From framework design to continuous assurance",description:"We combine governance strategy, technical implementation, and ongoing monitoring to help organizations move from fragmented controls to a structured and defensible AI operating model."},framework:{name:"AI Governance Framework Consulting",category:"Design & Implementation",overview:"We help teams design practical AI governance frameworks for their systems, risks, and regulatory requirements.",whatWeDoTitle:"What We Do",whatWeDo:["We identify AI use cases and risk levels","We define governance structure and internal policies","We align workflows with EU AI Act, ISO 42001","We support implementation across legal, risk, product, and engineering teams"],deliverablesTitle:"Deliverables",deliverables:["Governance framework design","Policy definitions","Risk classification","Documentation templates"],valueTitle:"Value",value:["We provide clear governance structure","We accelerate compliance readiness","We reduce operational risk"]},assurance:{name:"Responsible AI Governance, Compliance & AI Safety",category:"Assessment, Implementation & Monitoring",overview:"We ensure your AI systems are compliant, safe, and continuously monitored in real operations.",whatWeDoTitle:"What We Do",whatWeDo:["We evaluate current AI systems through gap analysis","We implement explainability, fairness, and monitoring tools","We prepare audit-ready documentation","We enable continuous compliance tracking"],capabilitiesTitle:"Core Capabilities",capabilities:["Explainability and transparency","Fairness and bias mitigation","Drift and performance monitoring","Audit and compliance reporting"],valueTitle:"Value",value:["We support EU AI Act, and ISO-aligned readiness","We help build safer and more reliable AI systems","We prepare audit-ready outputs"]},process:{label:"Delivery Process",title:"A practical path from discovery to continuous monitoring",description:"We use a structured, collaborative, and implementation-focused engagement model so governance becomes part of daily operations rather than a disconnected compliance exercise.",steps:[{title:"Discovery",description:"We understand systems, stakeholders, use cases, and risk exposure."},{title:"Assessment",description:"We evaluate governance maturity, control gaps, and regulatory readiness."},{title:"Implementation",description:"We apply governance workflows, technical controls, and reporting structures."},{title:"Assurance",description:"We prepare evidence, documentation, and review-ready outputs."},{title:"Monitoring",description:"We track compliance, performance, and governance signals over time."}]}},l0={services:{label:"What We Deliver",title:"Service Views Can Now Use the Same UI System",description:"This placeholder keeps the file aligned with the shadcn-vue and Tailwind rewrite, even though it is not currently wired into the router.",cardTitle:"Future Service Page",cardDescription:"Add service-specific content here when you are ready to expand the navigation."},products:{label:"Platform & Modules",title:"Product Views Are Ready For shadcn-vue",description:"This file is no longer part of the active router, but it now follows the same Tailwind and shadcn-vue patterns as the rest of the project.",contact:"Contact TrustAI",cardTitle:"Placeholder Product Surface",cardDescription:"This view is available if you want to add product-specific routes later."}},c0={navbar:W1,footer:B1,common:U1,cta:j1,contactForm:G1,researchHero:V1,homePage:H1,whatWeDo:q1,about:K1,why:Y1,researchSection:X1,researchReferences:J1,aboutPage:Z1,publications:Q1,aiGovernancePage:e0,researchPage:t0,privacyPage:n0,ourTeamsPage:r0,teamPage:a0,teamMembers:i0,productsPage:s0,servicesPage:o0,placeholderPages:l0},u0={home:"Ana Sayfa",about:"Hakkımızda",governance:"Yapay Zeka Yönetişimi",research:"Araştırma",services:"Hizmetler",products:"Ürünler",privacy:"Gizlilik",ourTeams:"Ekibimiz"},d0={tagline:"Regüle edilmiş sektörler için araştırma temelli yapay zeka yönetişimi.",rights:"Tüm Hakları Saklıdır",navigation:"Navigasyon",contact:"İletişim",address:"Dijital Park Teknokent, Ataşehir / İstanbul"},f0={switchLanguage:"Dili {locale} olarak değiştir",showServiceDetails:"Hizmet detayları",hideServiceDetails:"Detayları gizle",showProductDetails:"Ürün detayları",hideProductDetails:"Detayları gizle"},p0={title:"Yapay Zeka Yönetişimi Çerçevenizi Güçlendirmeye Hazır mısınız?",description:"Ekiplerinizin yapay zeka yönetişimi sorularını net kontrollere, kanıtlara ve uygulanabilir işleyiş pratiklerine dönüştürmesine yardımcı oluyoruz.",contact:"Bizimle İletişime Geçin",research:"Araştırmalarımızı Keşfedin"},m0={eyebrow:"İletişim Talebi",title:"Nasıl destek olabileceğimizi anlatın",description:"Birkaç detay paylaşın; doğru görüşme için başlangıç noktası olarak kullanalım.",close:"İletişim formunu kapat",cancel:"Kapat",fields:{name:"Ad soyad",email:"E-posta",organization:"Kurum",topic:"Konu",message:"Mesaj"},placeholders:{name:"Adınız",email:"ad@kurum.com",organization:"Şirket veya kurum",message:"Üzerinde çalıştığınız konuyu veya ihtiyaç duyduğunuz desteği yazın."},topics:[{value:"governance",label:"Yapay zeka yönetişimi veya uyum"},{value:"products",label:"TrustAI ürünleri"},{value:"research",label:"Araştırma iş birliği"},{value:"other",label:"Diğer"}],button:{idle:"Talebi gönder",sending:"Notunuz hazırlanıyor...",sent:"Talep hazır"},toastTitle:"Talebiniz alındı",toastDescription:"Teşekkürler. Mesajınızı inceleyip en kısa sürede size dönüş yapacağız."},g0={label:"Araştırma Odaklı Yapay Zeka Yönetişimi",title:"Yüksek Riskli Modeller için Yapay Zeka Yönetişimi ve Açıklanabilirlik",description:"Regüle edilmiş sektörlerde model şeffaflığını, izlenebilirliğini ve denetim hazırlığını artıran araştırma temelli çözümler geliştiriyoruz.",button:"Araştırmalarımızı Keşfedin"},h0={focusAreas:"Odak Alanları",servicesDescription:"Şeffaf ve regüle ortamlarda yapay zeka sunumu için bileşen bazlı yönetişim iş akışları.",researchDescription:"Platform mimarimizi, yönetişim kalıplarımızı ve açıklanabilirlik yöntemlerimizi şekillendiren seçili çalışmalar.",ctaDescription:"TrustAI veya araştırmalarımız hakkında sorularınız varsa sizinle konuşmaktan memnuniyet duyarız."},y0={label:"Ne Yapıyoruz?",title:"Regüle edilmiş sektörler için yapılandırılmış yapay zeka yönetişimi ve açıklanabilirlik çözümleri sunuyoruz.",explainability:{title:"Açıklanabilirlik",description:"Denetim ve düzenleyici incelemeler için model kararlarına yönelik yorumlanabilir içgörüler üretir."},traceability:{title:"Model İzlenebilirliği",description:"Model versiyonlarını, değişiklikleri ve karar mantığını yaşam döngüsü boyunca takip eder."},workflows:{title:"Yönetişim İş Akışları",description:"Yüksek riskli yapay zeka sistemleri için yapılandırılmış onay süreçleri ve dokümantasyon sağlar."},audit:{title:"Denetim Hazırlığı",description:"Düzenleyici beklentilerle uyumlu, uyumluluk odaklı raporlar üretir."}},v0={label:"Hakkımızda",title:"Regüle Edilmiş Sektörler için Araştırma Temelli Yapay Zeka Yönetişimi",intro:"Türkiye merkezli araştırma temelli yapay zeka yönetişimini kullanarak kurumların açıklanabilirliği, güvenilirliği ve gözetimi güçlendirmesine yardımcı oluyoruz.",sectorFocus:"Mevcut çözümlerimiz, düzenleyici denetimin, şeffaflığın ve risk yönetiminin kritik öneme sahip olduğu finans sektörüne yöneliktir. Yakın gelecekte sağlık, üretim ve kamu hizmetleri gibi yüksek etki alanlarına açılmayı planlıyoruz.",approach:"En güncel araştırmaları; kredi riski skorlama, dolandırıcılık tespiti ve uyum izleme gibi yüksek riskli finansal uygulamalar için şeffaf, adil ve denetime hazır pratik çözümlere dönüştürüyoruz.",team:"Açıklanabilir yapay zeka (XAI), optimizasyon, model riski ve MLOps uzmanlarını bir araya getirerek güven, uyum ve dayanıklılığı önemseyen finans kuruluşları için akademik derinliği sektör deneyimiyle birleştiriyoruz."},b0={label:"Neden TrustAI?",title:"Yüksek riskli yapay zeka sistemleri için akademik titizliği pratik yönetişim çözümleriyle birleştiriyoruz.",foundation:{title:"Araştırma Temelli Altyapı",description:"Açıklanabilir ve güvenilir yapay zeka alanında hakemli akademik araştırmalara ve uzmanlığa dayanır."},sector:{title:"Finans Sektörüne Odaklılık",description:"Regüle edilmiş finansal ortamlar ve yüksek etki alanlı yapay zeka uygulamaları için özel olarak tasarlanmıştır."},governance:{title:"Tasarımdan İtibaren Yönetişim",description:"Yapılandırılmış iş akışları, dokümantasyon ve izlenebilirlik başlangıçtan itibaren entegre edilir."},audit:{title:"Denetime Hazır Mimari",description:"Düzenleyici beklentilerle uyumlu, açık model açıklamaları ve raporlama yapısı sunar."}},_0={title:"Araştırmalar ve Yayınlar",subtitle:"Güvenilir ve Açıklanabilir Yapay Zeka Alanında İleri Araştırmalar",publicationBtn:"Araştırmayi gör"},k0={label:"Bilimsel Dayanak",title:"Araştırmalar ve Referanslar",description:"TrustAI, akademik titizliği pratik yönetişim çözümleriyle birleştirir. Aşağıda, güvenilir ve açıklanabilir yapay zeka alanındaki katkılarımızı yansıtan yayınlar ve referanslar yer almaktadır.",subtitle:"Yayınlarımız"},w0={hero:{label:"Araştırma Odaklı Temeller",title:"TrustAI Hakkında",subtitle:"TrustAI, akademik titizliği üretime hazır mühendislikle birleştirerek kurumların yüksek riskli sektörlerde şeffaf, denetlenebilir ve regülasyona hazır yapay zeka sistemleri kurmasına yardımcı olur."},whoWeAre:{title:"Biz Kimiz",p1:"Türkiye’deki ve regüle pazarlardaki kurumların akademik yapay zeka yönetişimi araştırmasını pratik uygulamayla birleştirmesine yardımcı oluyoruz.",p2:"Özellikle finans gibi regüle sektörlerde yüksek riskli yapay zeka sistemleri için açıklanabilirlik, adillik, dayanıklılık ve düzenleyici uyumu ele almalarına yardımcı oluyoruz.",p3:"Akademik titizliği üretime hazır mühendislikle birleştirerek kurumların tasarımdan itibaren şeffaf, denetlenebilir ve uyumlu yapay zeka sistemleri sunmasına yardımcı oluyoruz."},vision:{title:"Vizyonumuz",description:"Türkiye merkezli ve akademik temelli bir yönetişim platformu geliştirerek finans kurumlarının ve diğer regüle sektörlerin yüksek riskli yapay zeka sistemlerini şeffaf, denetlenebilir ve güvenle devreye almasına yardımcı olmak."},mission:{title:"Misyonumuz",items:["Yapay zeka sistemlerini açıklanabilir ve hesap verebilir hale getirmek","Regüle edilmiş ortamlarda model riskini azaltmak","EU AI Act, ISO/IEC 42001 ve ulusal yapay zeka düzenlemeleriyle uyumu desteklemek","Güçlü bilimsel temellere dayalı yerli yapay zeka teknolojileri geliştirmek"]},difference:{title:"TrustAI’ı Farklı Kılan Nedir",p1:"Yalnızca bir araç seti değil; açıklanabilirlik, adillik analizi, dayanıklılık izleme, otomatik uyum raporlama ve MLOps uyumlu mimariyi tek ve yapılandırılmış bir sistemde birleştiren entegre bir yönetişim çerçevesi sunuyoruz.",p2:"Yapay zeka sistemlerinin başlangıçtan itibaren uyumlu, şeffaf ve operasyonel olarak dayanıklı şekilde tasarlanmasını sağlıyoruz."},platform:{title:"TrustAI-X Platformu",description:"TrustAI-X’i yüksek riskli ortamlar için güvenilir ve denetlenebilir bir yapay zeka altyapısı olarak sunuyoruz."},coreCapabilities:{title:"Temel Yetenekler"},architecture:{title:"Platform Mimarisi"},scientific:{title:"Bilimsel Temel",p1:"TrustAI’ı hakemli akademik araştırmalar üzerine inşa ediyoruz. Çalışmalarımız arasında MCO 2025’te sunulan ve Springer tarafından yayımlanan DiCE-Extended yer almaktadır.",p2:"Araştırmalarımız karşı-olgusal açıklamaların istikrarı, çok kriterli optimizasyon ve dayanıklı ve adil yapay zeka karar sistemleri üzerine odaklanmaktadır.",p3:"SCI/SSCI indeksli yayınlar, patent başvuruları, lisansüstü araştırma çıktıları ve açık kaynak katkıları üretmeyi hedefliyoruz."},regulatory:{title:"Düzenleyici Uyum",p1:"Düzenleyici uyumu başlangıçtan itibaren sürece entegre ediyor ve çerçevemizi aşağıdaki düzenlemelerle uyumlu hale getiriyoruz:",p2:"Yapay zeka sistemlerinin dokümante edilmiş, izlenebilir, denetlenebilir ve sürekli izlenen bir yapıda olmasını sağlıyoruz."},sectors:{title:"Hedef Sektörler",p1:"Bankacılık, kredi skorlama, dolandırıcılık tespiti, finansal risk modelleme ve regüle edilmiş kurumsal yapay zeka ortamlarında yüksek riskli sistemlere odaklanıyoruz.",p2:"Platformu; üretim, kamu ve sağlık gibi yapılandırılmış yönetişim çerçeveleri gerektiren alanlara uyarlamanıza yardımcı oluyoruz."},team:{title:"Ekibimiz",p1:"Akademik liderlik, yapay zeka ve veri bilimi araştırmacıları, yazılım mühendisleri, MLOps uzmanları, düzenleyici uzmanlar ve sektör danışmanlarını bir araya getiren çok disiplinli bir yapıyla çalışıyoruz.",p2:"Bilimsel derinlik ve uygulamalı inovasyon sağlamak için üniversite Ar-Ge altyapısı ve araştırma ağlarıyla çalışıyoruz."},closing:{statement:"Yapay zeka açıklanabilir olmalıdır. Ölçülebilir olmalıdır. Hesap verebilir olmalıdır. Bilimsel temellere dayanmalı ve regülasyona hazır olmalıdır.",highlight:"TrustAI bunu mümkün kılmak için vardır."},tabs:{whoWeAre:"Biz Kimiz",platform:"Platform",alignment:"Uyum"}},E0={diceExtended:{title:"DiCE-Extended: A Robust Approach to Counterfactual Explanations in Machine Learning",description:"DiCE-Extended, çok amaçlı optimizasyon yaklaşımını entegre ederek karşı-olgusal açıklama üretimini daha dayanıklı hale getirirken yorumlanabilirliği korur. Çeşitli makine öğrenimi modellerinde daha güvenilir ve kararlarla daha uyumlu açıklamalar üreten istikrar odaklı bir tasarım sunar."},highStakes:{title:"Trustworthy and Responsible AI for High-Stakes Decision Environments",description:"Bu çalışma, model istikrarını, yorumlanabilirliği ve dayanıklılığı güçlendiren optimizasyon tabanlı bir topluluk budama yaklaşımı tasarlayarak kuruluşların daha şeffaf ve hesap verebilir karar destek sistemleri kurmasına yardımcı olur."}},x0={hero:{label:"Güven, Risk ve Hesap Verebilirlik",title:"Yapay Zeka Yönetişimi: Önemi ve Etkisi",subtitle:"Finans, sağlık, kamu hizmetleri ve kritik altyapı gibi alanlardaki yüksek etkili sistemler için kurumların yapay zeka yönetişimi çerçeveleri tasarlamasına ve uygulamasına yardımcı oluruz; önyargı, şeffaflık eksikliği, hesap verebilirlik ve düzenleyici riskleri birlikte ele alırız."},whatIs:{title:"Yapay Zeka Yönetişimi Nedir?",p1:"Yapay zeka yönetişimi; yapay zeka sistemlerinin tasarımı, devreye alınması, izlenmesi ve gerektiğinde düzeltilmesini yönlendiren ilke, politika, operasyonel kontrol ve hesap verebilirlik mekanizmalarından oluşan yapılandırılmış bir çerçevedir.",p2:"Bu yaklaşım, yapay zeka sistemlerinin hukuki standartlara, etik normlara, kurumsal hedeflere ve uzun vadeli toplumsal çıkarlara uygun şekilde çalışmasını sağlar. Yönetişim tek seferlik bir uyum kontrolü değil, yaşam döngüsü boyunca devam eden bir disiplindir."},whyItMatters:{title:"Neden Yapay Zeka Yönetişimi Önemlidir?",cards:{bias:{title:"Önyargı ve Ayrımcılık Riskleri",description:"Yönetişim olmadan yapay zeka modelleri tarihsel önyargıları pekiştirebilir; bu da adil olmayan kredi kararlarına, dışlayıcı sonuçlara veya sistematik ayrımcılığa yol açabilir."},opacity:{title:"Şeffaflık ve Açıklanabilirlik Eksiklikleri",description:"Kara kutu modeller güveni zedeler. Yönetişim çerçeveleri şeffaf dokümantasyon, açıklanabilirlik teknikleri ve yorumlanabilirlik kontrolleri gerektirir."},regulatory:{title:"Düzenleyici ve Hukuki Riskler",description:"Düzenleyici ortamlar, yapay zeka sistemleri için izlenebilirlik, denetlenebilirlik ve belgelenmiş risk kontrolleri talep etmektedir."}}},pillars:{title:"Temel Yönetişim Sütunları",accountability:{title:"Hesap Verebilirlik",description:"Model kararları için açık sahiplik, tanımlanmış sorumluluk yapıları ve yüksek riskli sistemler için eskalasyon mekanizmaları."},traceability:{title:"İzlenebilirlik",description:"Model versiyonları, eğitim verisi kaynakları, doğrulama süreçleri ve dağıtım değişikliklerinin yaşam döngüsü boyunca eksiksiz şekilde belgelenmesi."},monitoring:{title:"İzleme ve Risk Yönetimi",description:"Model sapması, performans düşüşü ve ortaya çıkan uyum risklerinin sürekli gözetimi."}},financialSector:{title:"Finans Sektöründe Yapay Zeka Yönetişimi",p1:"Regüle edilmiş finansal ortamlarda yapay zeka sistemleri; kredi risk skorlama, dolandırıcılık tespiti, kara para aklama ile mücadele süreçleri ve uyum izleme alanlarında kullanılmaktadır. Bu uygulamalar bireyleri, kurumları ve piyasaları doğrudan etkiler.",p2:"Finansal düzenleyiciler; kanıtlanabilir şeffaflık, adillik ve model doğrulama standartları talep etmektedir. Yönetişim çerçeveleri, modellerin savunulabilir ve denetime hazır kalmasını sağlayan yapılandırılmış iş akışları, dokümantasyon ve raporlama mekanizmaları sunar."},closing:{title:"Yapılandırılmış Yönetişim ile Güven İnşa Etmek",description:"Etkili yapay zeka yönetişimi, gelişmiş makine öğrenimi sistemlerini şeffaf, hesap verebilir ve dayanıklı karar altyapılarına dönüştürür. Akademik araştırma ile düzenleyici uygulamayı birleştirerek inovasyonun adalet, hukuk ve kamu güvenini zedelememesini sağlar.",cta:"TrustAI ile İletişime Geçin"}},A0={sectionDescription:"TrustAI’ın açıklanabilirlik ve yönetişim araçlarını şekillendiren seçili yayınlar ve çalışma başlıkları.",publicationLabel:"Yayın",publicationRequest:"Yayın detayları talep üzerine paylaşılabilir.",collaborateTitle:"TrustAI Araştırmaları ile İş Birliği Yapın",collaborateDescription:"Akademik çalışmaları finans ve diğer yüksek etkili sektörler için uygulanabilir yönetişim pratiklerine dönüştürüyoruz."},T0={hero:{label:"Politika ve Şeffaflık",title:"Gizlilik Politikası",subtitle:"Bu bilgilendirme, TrustAI web sitesinde şu anda backend, aktif iletişim formu kaydı, çerez veya analitik kullanılmadığı mevcut durumu yansıtır."},policyDetails:"Gizlilik Bildirimi",noticeTitle:"Web Sitesi Veri Uygulamaları",noticeIntro:"Bu web sitesi bilgilendirme amaçlı sunulmaktadır. Kişisel veriler web sitesinin kendisi üzerinden toplanmaz veya saklanmaz.",noticeItems:["Çerezler, reklam takip araçları ve web sitesi analitik araçları kullanılmaz.","İletişim formu gönderimleri toplanmaz veya saklanmaz.","E-posta yoluyla iletilen talepler yalnızca gönderen kişinin talebine yanıt vermek için kullanılır.","Barındırma sağlayıcısı güvenlik ve site sunumu için temel teknik kayıtları işleyebilir."],contactTitle:"Sorular",contactDescription:"Bu bilgilendirme hakkında sorularınız varsa bizimle doğrudan iletişime geçin.",generalPrinciples:{title:"1. Genel İlkeler",p1:"Yalnızca gönüllü olarak sağladığınız kişisel verileri toplarız; örneğin formlar veya yazışmalar aracılığıyla ilettiğiniz e-posta adresleri ve iletişim bilgileri. Kişisel verileriniz konusunda gizlilik ve şeffaflık haklarınıza saygı gösteririz.",p2:"Kişisel verilerinizi pazarlama amacıyla üçüncü taraflara satmayız, kiralamayız veya paylaşmayız. Herhangi bir veri paylaşımı yalnızca yasal yükümlülükler veya güvenilir hizmet gereklilikleri kapsamında ve sınırlı şekilde yapılır."},whatWeCollect:{title:"2. Hangi Verileri Topluyoruz",intro:"Bizimle etkileşime geçtiğinizde aşağıdaki türde bilgileri toplayabiliriz:",items:{"contact-title":"İletişim Bilgileri:",contact:"E-posta adresleri, isimler ve unvanlar.","usage-title":"Kullanım Verileri:",usage:"Web sitesi analitik aracı çalıştırmıyoruz. Temel teknik kayıtlar güvenlik ve site sunumu için barındırma sağlayıcısı tarafından işlenebilir.","communications-title":"İletişim İçeriği:",communications:"E-posta ile gönüllü olarak gönderdiğiniz mesaj içerikleri."}},howWeUse:{title:"3. Bilgilerinizi Nasıl Kullanıyoruz",intro:"Bilgilerinizi şu amaçlarla kullanırız:",items:["Taleplerinize ve sorularınıza yanıt vermek","E-posta ile gönüllü olarak gönderdiğiniz mesajlara yanıt vermek","Hizmetlerimizin işlevselliğini ve performansını iyileştirmek","Yasal veya düzenleyici yükümlülükleri yerine getirmek"]},dataSecurity:{title:"4. Veri Güvenliği",description:"Kişisel verilerinizi yetkisiz erişim, değişiklik, ifşa veya imhaya karşı korumak amacıyla makul idari, teknik ve organizasyonel önlemler uygularız. Ancak hiçbir sistem tamamen güvenli değildir — mutlak koruma garanti edilemez."},yourRights:{title:"5. Haklarınız",intro:"Bulunduğunuz yargı alanına bağlı olarak aşağıdaki haklara sahip olabilirsiniz:",items:["Hakkınızda tuttuğumuz kişisel verilere erişim talep etmek","Bilgilerinizi düzeltmek veya güncellemek","İşleme faaliyetleri için verdiğiniz onayı geri çekmek","Verilerinizin silinmesini talep etmek"],contact:"Bu haklardan herhangi birini kullanmak için info{'@'}trustai.com.tr adresinden bizimle iletişime geçebilirsiniz."},cookies:{title:"6. Çerezler ve İzleme",description:"Şu anda çerez, reklam takip aracı veya web sitesi analitik aracı kullanmıyoruz."},updates:{title:"7. Politika Güncellemeleri",description:"Bu politika; hukuki, teknolojik veya ticari değişiklikleri yansıtmak amacıyla güncellenebilir. Güncellenmiş sürümler, revize edilmiş yürürlük tarihi ile birlikte bu sayfada yayımlanacaktır."}},I0={hero:{label:"İşin Arkasındaki Ekip",title:"Ekibimiz",subtitle:"TrustAI’ın arkasındaki çok disiplinli ekibi tanıyın; akademik titizliği yapay zeka yönetişimi ve güvenilir yapay zeka konusundaki pratik uzmanlıkla birleştiriyoruz."}},C0={structureTitle:"Ekip Yapısı",howWeWorkTitle:"Nasıl Çalışıyoruz",howWeWorkDescription:"Araştırma derinliği, ürün geliştirme ve yönetişim disiplini her teslimatta birlikte ilerler.",howWeWorkItems:{academic:"Akademik ve uygulamalı araştırma uyum içinde ilerler",engineering:"Mühendislik, güvenilir dağıtımı merkeze alır",governance:"Yönetişim ve uyumluluk tasarımdan itibaren entegredir"}},P0={sureyya:{role:"Kurucu & CEO, TrustAI",bio:"TrustAI’ın kurucusu ve CEO’su olarak yüksek riskli sistemler için açıklanabilir, güvenilir ve uyumlu yapay zeka çözümlerinin geliştirilmesine liderlik etmektedir."},qazaleh:{role:"Araştırmacı, Yapay Zeka ve Yazılım Mühendisi | UI/Web Geliştirici",bio:"Akıllı, güvenilir ve kullanıcı dostu web ve yazılım çözümleri tasarlayıp geliştirir."},faramarz:{role:"Araştırmacı, Yapay Zeka ve Yazılım Mühendisi | Backend Geliştirici",bio:"Akıllı, güvenilir ve sağlam backend ile yazılım çözümleri tasarlayıp geliştirir."},dilara:{role:"Araştırmacı | Yapay Zeka Yönetişimi ve Etik",bio:"Psikoloji ve insan odaklı yapay zeka altyapısıyla, yüksek riskli yapay zeka sistemlerinde algoritmik adalet, yönetişim ve etik boyutları araştırır."},nisa:{role:"Stajyer",bio:"Yapay zeka güvenliği, yapay zeka yönetişimi ve sorumlu yapay zeka sistemlerine odaklanan bir yapay zeka mühendisliği öğrencisidir."},arya:{role:"Yapay Zeka Mühendisliği Öğrencisi",bio:"Makine öğrenmesi ve LLM sistemlerinde uygulamalı deneyime sahip, açıklanabilirlik, model güvenilirliği ve sorumlu yapay zeka alanlarına odaklanan bir Yapay Zeka Mühendisliği öğrencisidir."}},S0={hero:{label:"Yönetişim Ürün Paketi",title:"Modeller, Ajanlar ve Yapay Zeka Gözetimi İçin Platformlar",subtitle:"Kestirimsel modelleri ve ajan tabanlı sistemleri aynı ilkelerle yönetmenize yardımcı oluyoruz: şeffaflık, kontrol, denetlenebilirlik ve operasyonel güven."},overview:{label:"Ürün Ekosistemi",title:"Modern yapay zeka yönetişimi için iki tamamlayıcı katman",description:"TrustAI-X ile makine öğrenmesi sistemlerini yaşam döngüsü boyunca yönetmenize, TrustAI-UX ile otonom davranışı çalışma anında kontrol etmenize yardımcı oluyoruz."},trustaiX:{name:"TrustAI-X",category:"Yapay Zeka Yönetişim Platformu",overview:"Ekiplerin TrustAI-X ile makine öğrenmesi modellerini şeffaflık, adillik, dayanıklılık ve uyumluluk kontrolleriyle yönetmesine yardımcı oluyoruz.",whatItDoesTitle:"Ne Yapar",whatItDoes:["Model kararlarını açıklıyoruz","Önyargıyı tespit ediyor ve adillik değerlendirmesi yapıyoruz","Performans, veri sapması ve model sapmasını izliyoruz","Yapılandırılmış denetim izi ve raporlama çıktıları sağlıyoruz"],featuresTitle:"Temel Özellikler",features:["Açıklanabilirlik araçları","Önyargı ve adillik kontrolleri","Sapma ve performans izleme","Denetime hazır raporlama"],deploymentTitle:"Dağıtım",deployment:["On-premise","Bulut (SaaS)","Hibrit"],valueTitle:"Sağladığı Değer",value:["Uyumluluk riskini azaltıyoruz","Güven ve şeffaflığı artırıyoruz","Model yönetişimini merkezileştiriyoruz"]},trustaiUX:{name:"TrustAI-UX",category:"Ajan Yönetişim Katmanı",overview:"TrustAI-UX ile otonom ve ajan tabanlı sistemleri politika uygulama, izleme ve denetim kayıtlarıyla kontrol etmenize yardımcı oluyoruz.",whatItDoesTitle:"Ne Yapar",whatItDoes:["Ajan izinlerini ve eylemlerini kontrol ediyoruz","Davranışı gerçek zamanlı izliyoruz","Yönetişim politikalarını uyguluyoruz","Kararları denetlenebilirlik için kaydediyoruz"],featuresTitle:"Temel Özellikler",features:["Politika tabanlı kontroller","Gerçek zamanlı izleme","Human-in-the-loop iş akışları","Tam denetim kayıtları"],compatibilityTitle:"Uyumluluk",compatibility:["LangChain","CrewAI","Diğer ajan frameworkleri","API-first entegrasyon"],valueTitle:"Sağladığı Değer",value:["Güvensiz ajan davranışını önlüyoruz","Ajan sistemleri için uyumluluğu destekliyoruz","Tam görünürlük ve kontrol sunuyoruz"]},ecosystem:{label:"Birlikte Nasıl Çalışırlar",title:"Yaşam döngüsü yönetişimi ve çalışma anı kontrolü için tek yapı",description:"TrustAI-X ile modelleri dağıtımdan önce ve sonra açıklamanıza ve değerlendirmenize, TrustAI-UX ile çalışma sırasında ajan davranışını politika ve kontrol mekanizmalarıyla yönetmenize yardımcı oluyoruz.",items:["TrustAI-X ile model davranışını açıklıyor, değerlendiriyor ve belgeliyoruz","TrustAI-UX ile ajan izinlerini, eylemlerini ve müdahaleleri çalışma anında yönetiyoruz","Model yönetişimini canlı operasyonel gözetimle birleştiriyoruz"]}},O0={hero:{label:"Danışmanlık ve Uygulama Hizmetleri",title:"Yönetişim, Uyumluluk ve Yapay Zeka Güvenliği İçin Hizmetler",subtitle:"Kurumların yönetişim çerçeveleri tasarlamasına, sorumlu yapay zeka kontrolleri uygulamasına ve yüksek riskli sistemler için uyumluluğa hazır işletim modelleri kurmasına yardımcı oluyoruz."},cta:{title:"Yönetişim, Uyumluluk veya Yapay Zeka Güvenliği İçin Desteğe mi İhtiyacınız Var?"},overview:{label:"Nasıl Destek Veriyoruz",title:"Çerçeve tasarımından sürekli güvenceye",description:"Yönetişim stratejisini, teknik uygulamayı ve sürekli izlemeyi bir araya getirerek kurumların parçalı kontrollerden yapılandırılmış ve savunulabilir bir yapay zeka işletim modeline geçmesine yardımcı oluyoruz."},framework:{name:"Yapay Zeka Yönetişimi Çerçeve Danışmanlığı",category:"Tasarım ve Uygulama",overview:"Ekiplerin sistem, risk ve düzenleyici gereksinimlerine uygun pratik yapay zeka yönetişimi çerçeveleri tasarlamasına yardımcı oluyoruz.",whatWeDoTitle:"Ne Yapıyoruz",whatWeDo:["Yapay zeka kullanım alanlarını ve risk seviyelerini belirleriz","Yönetişim yapısını ve iç politika setlerini tanımlarız","İş akışlarını EU AI Act, ISO 42001","Hukuk, risk, ürün ve mühendislik ekipleri arasında uygulamayı destekleriz"],deliverablesTitle:"Teslimatlar",deliverables:["Yönetişim çerçevesi tasarımı","Politika tanımları","Risk sınıflandırması","Dokümantasyon şablonları"],valueTitle:"Sağladığı Değer",value:["Net yönetişim yapısı sağlıyoruz","Uyumluluk hazırlığını hızlandırıyoruz","Operasyonel riski azaltıyoruz"]},assurance:{name:"Sorumlu Yapay Zeka Yönetişimi, Uyumluluk ve Yapay Zeka Güvenliği",category:"Değerlendirme, Uygulama ve İzleme",overview:"Yapay zeka sistemlerinizin gerçek operasyonlarda uyumlu, güvenli ve sürekli izlenebilir olmasını sağlıyoruz.",whatWeDoTitle:"Ne Yapıyoruz",whatWeDo:["Mevcut yapay zeka sistemlerini gap analysis ile değerlendiririz","Açıklanabilirlik, adillik ve izleme araçlarını hayata geçiririz","Denetime hazır dokümantasyon hazırlarız","Sürekli uyumluluk takibini mümkün kılarız"],capabilitiesTitle:"Temel Yetenekler",capabilities:["Açıklanabilirlik ve şeffaflık","Adillik ve önyargı azaltımı","Sapma ve performans izleme","Denetim ve uyumluluk raporlama"],valueTitle:"Sağladığı Değer",value:["EU AI Act, ve ISO uyumlu hazırlığı destekliyoruz","Daha güvenli ve daha güvenilir yapay zeka sistemleri kurmanıza yardımcı oluyoruz","Denetime hazır çıktılar hazırlıyoruz"]},process:{label:"Teslim Süreci",title:"Keşiften sürekli izlemeye pratik bir yol",description:"Yapılandırılmış, iş birliğine açık ve uygulama odaklı bir çalışma modeli kullanarak yönetişimin kopuk bir uyum faaliyeti olmak yerine günlük operasyonların parçası haline gelmesine yardımcı oluyoruz.",steps:[{title:"Keşif",description:"Sistemleri, paydaşları, kullanım senaryolarını ve risk maruziyetini anlıyoruz."},{title:"Değerlendirme",description:"Yönetişim olgunluğunu, kontrol açıklarını ve düzenleyici hazırlığı değerlendiriyoruz."},{title:"Uygulama",description:"Yönetişim iş akışlarını, teknik kontrolleri ve raporlama yapılarını hayata geçiriyoruz."},{title:"Güvence",description:"Kanıtları, dokümantasyonu ve incelemeye hazır çıktıları hazırlıyoruz."},{title:"İzleme",description:"Uyumluluk, performans ve yönetişim sinyallerini zaman içinde takip ediyoruz."}]}},L0={services:{label:"Neler Sunuyoruz",title:"Hizmet Görünümleri Artık Aynı UI Sistemini Kullanabilir",description:"Bu yer tutucu sayfa, şu anda router'a bağlı olmasa da shadcn-vue ve Tailwind yeniden düzenlemesiyle uyumlu kalır.",cardTitle:"Gelecekteki Hizmet Sayfası",cardDescription:"Navigasyonu genişletmeye hazır olduğunuzda hizmete özel içeriği buraya ekleyebilirsiniz."},products:{label:"Platform ve Modüller",title:"Ürün Görünümleri shadcn-vue İçin Hazır",description:"Bu dosya artık aktif router'ın bir parçası değil, ancak projenin geri kalanı gibi shadcn-vue desenlerini takip ediyor.",contact:"TrustAI ile İletişime Geçin",cardTitle:"Yer Tutucu Ürün Alanı",cardDescription:"Daha sonra ürün odaklı route'lar eklemek isterseniz bu görünüm kullanılabilir."}},N0={navbar:u0,footer:d0,common:f0,cta:p0,contactForm:m0,researchHero:g0,homePage:h0,whatWeDo:y0,about:v0,why:b0,researchSection:_0,researchReferences:k0,aboutPage:w0,publications:E0,aiGovernancePage:x0,researchPage:A0,privacyPage:T0,ourTeamsPage:I0,teamPage:C0,teamMembers:P0,productsPage:S0,servicesPage:O0,placeholderPages:L0},R0=()=>{const e=localStorage.getItem("locale");if(e)return e;const t=navigator.language.split("-")[0];return["en","tr"].includes(t)?t:"en"},sf=P1({legacy:!1,locale:R0(),fallbackLocale:"en",globalInjection:!0,messages:{en:c0,tr:N0}}),M0={class:"space-y-5"},D0={key:0,class:"section-label"},$0={class:"space-y-3"},z0={class:"hero-title text-balance"},F0={key:0,class:"hero-description"},W0={key:1,class:"flex flex-col gap-3 sm:flex-row"},Kn={__name:"PageHero",props:{label:{type:String,default:""},title:{type:String,required:!0},description:{type:String,default:""},asideWidth:{type:String,default:"22rem"},asideClass:{type:String,default:""},contentAlign:{type:String,default:"end"},asideChrome:{type:Boolean,default:!0},compact:{type:Boolean,default:!1}},setup(e){const t=e,n=se(()=>t.contentAlign==="center"?"lg:items-center":"lg:items-end");return(r,a)=>(D(),J("section",{class:Xe(["relative overflow-hidden rounded-[2.25rem] border border-border/80 bg-card px-6 text-foreground shadow-[0_18px_40px_-34px_rgba(23,56,75,0.14)] sm:px-8 lg:px-10",e.compact?"py-7 lg:py-8":"py-10 lg:py-12"]),style:Un({"--page-hero-aside-width":e.asideWidth})},[a[0]||(a[0]=I("div",{class:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"},null,-1)),a[1]||(a[1]=I("div",{class:"absolute -left-16 top-0 size-56 rounded-full bg-accent/12 blur-3xl"},null,-1)),a[2]||(a[2]=I("div",{class:"absolute right-0 bottom-0 size-56 rounded-full bg-primary/8 blur-3xl"},null,-1)),I("div",{class:Xe(["relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,var(--page-hero-aside-width))]",n.value])},[I("div",M0,[e.label?(D(),J("p",D0,M(e.label),1)):Wt("",!0),I("div",$0,[I("h1",z0,M(e.title),1),e.description?(D(),J("p",F0,M(e.description),1)):Wt("",!0)]),r.$slots.actions?(D(),J("div",W0,[he(r.$slots,"actions")])):Wt("",!0)]),r.$slots.aside?(D(),J("div",{key:0,class:Xe([e.asideChrome?"rounded-[1.9rem] border border-border/80 bg-background/82 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-sm":"",e.asideClass])},[he(r.$slots,"aside")],2)):Wt("",!0)],2)],6))}},of={__name:"Badge",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},variant:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=Tn(t,"class");return(r,a)=>(D(),ee(p(yt),Ze({"data-slot":"badge",class:p(ot)(p(B0)({variant:e.variant}),t.class)},p(n)),{default:_(()=>[he(r.$slots,"default")]),_:3},16,["class"]))}},B0=Hu("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20",outline:"text-foreground [a&]:hover:bg-card"}},defaultVariants:{variant:"default"}}),Re={__name:"Card",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),J("div",{"data-slot":"card",class:Xe(p(ot)("bg-card text-card-foreground flex flex-col gap-6 rounded-[1.85rem] border border-border/80 py-6 shadow-[0_18px_45px_-34px_rgba(23,56,75,0.12)]",t.class))},[he(n.$slots,"default")],2))}},tt={__name:"CardContent",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),J("div",{"data-slot":"card-content",class:Xe(p(ot)("px-6",t.class))},[he(n.$slots,"default")],2))}},lt={__name:"CardDescription",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),J("p",{"data-slot":"card-description",class:Xe(p(ot)("text-foreground text-sm leading-7",t.class))},[he(n.$slots,"default")],2))}},De={__name:"CardHeader",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),J("div",{"data-slot":"card-header",class:Xe(p(ot)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t.class))},[he(n.$slots,"default")],2))}},$e={__name:"CardTitle",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),J("h3",{"data-slot":"card-title",class:Xe(p(ot)("leading-none font-semibold",t.class))},[he(n.$slots,"default")],2))}},U0={__name:"Tabs",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1},dir:{type:String,required:!1},activationMode:{type:String,required:!1},modelValue:{type:null,required:!1},unmountOnHide:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,a=Tn(n,"class"),i=Ks(a,r);return(s,o)=>(D(),ee(p(Zy),Ze({"data-slot":"tabs"},p(i),{class:p(ot)("flex flex-col gap-2",n.class)}),{default:_(l=>[he(s.$slots,"default",ei(ma(l)))]),_:3},16,["class"]))}},Bi={__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=Tn(t,"class");return(r,a)=>(D(),ee(p(ev),Ze({"data-slot":"tabs-content",class:p(ot)("flex-1 outline-none",t.class)},p(n)),{default:_(()=>[he(r.$slots,"default")]),_:3},16,["class"]))}},j0={__name:"TabsList",props:{loop:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=Tn(t,"class");return(r,a)=>(D(),ee(p(nv),Ze({"data-slot":"tabs-list"},p(n),{class:p(ot)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",t.class)}),{default:_(()=>[he(r.$slots,"default")]),_:3},16,["class"]))}},Ui={__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=Tn(t,"class"),r=Zu(n);return(a,i)=>(D(),ee(p(av),Ze({"data-slot":"tabs-trigger",class:p(ot)("text-muted-foreground data-[state=active]:border-border data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t.class)},p(r)),{default:_(()=>[he(a.$slots,"default")]),_:3},16,["class"]))}},G0={class:"page-shell"},V0={href:"mailto:info@trustai.com.tr"},H0={class:"grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"},q0={class:"grid gap-4"},K0={class:"space-y-3"},Y0={class:"grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"},X0={class:"grid gap-4"},J0={class:"space-y-3"},Z0={class:"space-y-3"},Q0={class:"grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"},ek={class:"grid gap-4"},tk={class:"flex flex-wrap gap-2"},nk={class:"content-copy"},rk={class:"content-copy-lg"},ak={class:"content-title max-w-none"},ik={__name:"About",setup(e){Or();const{tm:t}=dr(),n=se(()=>{const s=t("aboutPage.mission.items");return Array.isArray(s)?s:[]}),r=se(()=>{const s=t("aboutPage.coreCapabilities.items");return Array.isArray(s)?s:[]}),a=se(()=>{const s=t("aboutPage.architecture.items");return Array.isArray(s)?s:[]}),i=se(()=>{const s=t("aboutPage.regulatory.items");return Array.isArray(s)?s:[]});return(s,o)=>(D(),J("div",G0,[k(Kn,{label:s.$t("aboutPage.hero.label"),title:s.$t("aboutPage.hero.title"),description:s.$t("aboutPage.hero.subtitle")},{actions:_(()=>[k(p(wt),{"as-child":"",variant:"outline",size:"lg",class:"rounded-full"},{default:_(()=>[I("a",V0,M(s.$t("cta.contact")),1)]),_:1})]),_:1},8,["label","title","description"]),k(p(U0),{"default-value":"who-we-are",class:"gap-6"},{default:_(()=>[k(p(j0),{class:"grid w-full grid-cols-1 rounded-[1.5rem] bg-secondary/80 p-1 md:grid-cols-3"},{default:_(()=>[k(p(Ui),{value:"who-we-are"},{default:_(()=>[te(M(s.$t("aboutPage.tabs.whoWeAre")),1)]),_:1}),k(p(Ui),{value:"platform"},{default:_(()=>[te(M(s.$t("aboutPage.tabs.platform")),1)]),_:1}),k(p(Ui),{value:"alignment"},{default:_(()=>[te(M(s.$t("aboutPage.tabs.alignment")),1)]),_:1})]),_:1}),k(p(Bi),{value:"who-we-are"},{default:_(()=>[I("div",H0,[k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(s.$t("aboutPage.whoWeAre.title")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,M(s.$t("aboutPage.whoWeAre.p1")),1),I("p",null,M(s.$t("aboutPage.whoWeAre.p2")),1),I("p",null,M(s.$t("aboutPage.whoWeAre.p3")),1)]),_:1})]),_:1}),I("div",q0,[k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(s.$t("aboutPage.vision.title")),1)]),_:1}),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(s.$t("aboutPage.vision.description")),1)]),_:1})]),_:1})]),_:1}),k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(s.$t("aboutPage.mission.title")),1)]),_:1})]),_:1}),k(p(tt),null,{default:_(()=>[I("ul",K0,[(D(!0),J(_e,null,je(n.value,l=>(D(),J("li",{key:l,class:"content-chip"},M(l),1))),128))])]),_:1})]),_:1})])])]),_:1}),k(p(Bi),{value:"platform"},{default:_(()=>[I("div",Y0,[k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(s.$t("aboutPage.platform.title")),1)]),_:1}),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(s.$t("aboutPage.platform.description")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,M(s.$t("aboutPage.difference.p1")),1),I("p",null,M(s.$t("aboutPage.difference.p2")),1)]),_:1})]),_:1}),I("div",X0,[k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(s.$t("aboutPage.coreCapabilities.title")),1)]),_:1})]),_:1}),k(p(tt),null,{default:_(()=>[I("ul",J0,[(D(!0),J(_e,null,je(r.value,l=>(D(),J("li",{key:l,class:"content-chip"},M(l),1))),128))])]),_:1})]),_:1}),k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(s.$t("aboutPage.architecture.title")),1)]),_:1})]),_:1}),k(p(tt),null,{default:_(()=>[I("ul",Z0,[(D(!0),J(_e,null,je(a.value,l=>(D(),J("li",{key:l,class:"content-chip"},M(l),1))),128))])]),_:1})]),_:1})])])]),_:1}),k(p(Bi),{value:"alignment"},{default:_(()=>[I("div",Q0,[k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(s.$t("aboutPage.scientific.title")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,M(s.$t("aboutPage.scientific.p1")),1),I("p",null,M(s.$t("aboutPage.scientific.p2")),1),I("p",null,M(s.$t("aboutPage.scientific.p3")),1)]),_:1})]),_:1}),I("div",ek,[k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(s.$t("aboutPage.regulatory.title")),1)]),_:1}),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(s.$t("aboutPage.regulatory.p1")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-4"},{default:_(()=>[I("div",tk,[(D(!0),J(_e,null,je(i.value,l=>(D(),ee(p(of),{key:l,variant:"secondary",class:"rounded-full px-3 py-1"},{default:_(()=>[te(M(l),1)]),_:2},1024))),128))]),k(p(wd)),I("p",nk,M(s.$t("aboutPage.regulatory.p2")),1)]),_:1})]),_:1}),k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(s.$t("aboutPage.sectors.title")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,M(s.$t("aboutPage.sectors.p1")),1),I("p",null,M(s.$t("aboutPage.sectors.p2")),1)]),_:1})]),_:1})])])]),_:1})]),_:1}),k(p(Re),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(tt),{class:"space-y-4 px-6 py-8 text-center"},{default:_(()=>[I("p",rk,M(s.$t("aboutPage.closing.statement")),1),I("p",ak,M(s.$t("aboutPage.closing.highlight")),1)]),_:1})]),_:1})]))}},sk={key:0,class:"section-label"},ok={class:"space-y-2"},lk={class:"section-title max-w-3xl"},ck={key:0,class:"section-description"},Sr={__name:"SectionHeading",props:{label:{type:String,default:""},title:{type:String,required:!0},description:{type:String,default:""},class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),J("div",{class:Xe(p(ot)("space-y-4",t.class))},[e.label?(D(),J("p",sk,M(e.label),1)):Wt("",!0),I("div",ok,[I("h2",lk,M(e.title),1),e.description?(D(),J("p",ck,M(e.description),1)):Wt("",!0)])],2))}},uk={class:"page-shell"},dk={class:"grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"},fk={class:"space-y-6"},pk={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},mk={class:"flex size-11 items-center justify-center rounded-2xl bg-accent/50 text-primary"},gk={class:"space-y-2"},hk={class:"space-y-6"},yk={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},vk={class:"flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary"},bk={class:"space-y-2"},_k={__name:"AIGovernance",setup(e){Or();const t=[{icon:sg,titleKey:"aiGovernancePage.whyItMatters.cards.bias.title",descriptionKey:"aiGovernancePage.whyItMatters.cards.bias.description"},{icon:Su,titleKey:"aiGovernancePage.whyItMatters.cards.opacity.title",descriptionKey:"aiGovernancePage.whyItMatters.cards.opacity.description"},{icon:tg,titleKey:"aiGovernancePage.whyItMatters.cards.regulatory.title",descriptionKey:"aiGovernancePage.whyItMatters.cards.regulatory.description"}],n=[{icon:Ou,titleKey:"aiGovernancePage.pillars.accountability.title",descriptionKey:"aiGovernancePage.pillars.accountability.description"},{icon:Ga,titleKey:"aiGovernancePage.pillars.traceability.title",descriptionKey:"aiGovernancePage.pillars.traceability.description"},{icon:Km,titleKey:"aiGovernancePage.pillars.monitoring.title",descriptionKey:"aiGovernancePage.pillars.monitoring.description"}];return(r,a)=>{const i=fa("reveal");return D(),J("div",uk,[Pe(k(Kn,{label:r.$t("aiGovernancePage.hero.label"),title:r.$t("aiGovernancePage.hero.title"),description:r.$t("aiGovernancePage.hero.subtitle")},null,8,["label","title","description"]),[[i]]),Pe((D(),J("section",dk,[k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(r.$t("aiGovernancePage.whatIs.title")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,M(r.$t("aiGovernancePage.whatIs.p1")),1),I("p",null,M(r.$t("aiGovernancePage.whatIs.p2")),1)]),_:1})]),_:1}),k(p(Re),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(r.$t("aiGovernancePage.financialSector.title")),1)]),_:1}),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(r.$t("aiGovernancePage.financialSector.p1")),1)]),_:1})]),_:1}),k(p(tt),{class:"content-copy"},{default:_(()=>[te(M(r.$t("aiGovernancePage.financialSector.p2")),1)]),_:1})]),_:1})])),[[i,{delay:120}]]),Pe((D(),J("section",fk,[k(Sr,{title:r.$t("aiGovernancePage.whyItMatters.title")},null,8,["title"]),I("div",pk,[(D(),J(_e,null,je(t,s=>k(p(Re),{key:s.titleKey,class:"content-card"},{default:_(()=>[k(p(De),{class:"gap-4"},{default:_(()=>[I("div",mk,[(D(),ee(Fn(s.icon),{class:"size-5"}))]),I("div",gk,[k(p($e),{class:"content-subtitle"},{default:_(()=>[te(M(r.$t(s.titleKey)),1)]),_:2},1024),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(r.$t(s.descriptionKey)),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024)),64))])])),[[i,{delay:180}]]),Pe((D(),J("section",hk,[k(Sr,{title:r.$t("aiGovernancePage.pillars.title")},null,8,["title"]),I("div",yk,[(D(),J(_e,null,je(n,s=>k(p(Re),{key:s.titleKey,class:"content-card"},{default:_(()=>[k(p(De),{class:"gap-4"},{default:_(()=>[I("div",vk,[(D(),ee(Fn(s.icon),{class:"size-5"}))]),I("div",bk,[k(p($e),{class:"content-subtitle"},{default:_(()=>[te(M(r.$t(s.titleKey)),1)]),_:2},1024),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(r.$t(s.descriptionKey)),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024)),64))])])),[[i,{delay:220}]]),Pe((D(),ee(p(Re),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(De),{class:"space-y-3"},{default:_(()=>[k(p($e),{class:"section-title max-w-3xl"},{default:_(()=>[te(M(r.$t("aiGovernancePage.closing.title")),1)]),_:1}),k(p(lt),{class:"section-description"},{default:_(()=>[te(M(r.$t("aiGovernancePage.closing.description")),1)]),_:1})]),_:1})]),_:1})),[[i,{delay:280}]])])}}},kk=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>TrustAI – Dashboard Card</title>\r
    <style>\r
        *,\r
        *::before,\r
        *::after {\r
            box-sizing: border-box;\r
            margin: 0;\r
            padding: 0;\r
        }\r
\r
        :root {\r
            /* ── Exact website palette ── */\r
            --background: #faf7f0;\r
            --surface: #fffdf8;\r
            --primary: #305669;\r
            --primary-dark: #1e3d4f;\r
            --primary-mid: #3d6b82;\r
            --primary-light: #6b9eb4;\r
            --primary-xlight: #c8dae2;\r
            --secondary: #FAEAB1;\r
            --foreground: #0f2b2c;\r
            --foreground-muted: #174143;\r
            --accent: #f5ba42;\r
            --accent-dark: #c4911a;\r
            --accent-light: #fdf0cc;\r
            --border: #e6dece;\r
            --border-strong: #c8bfaa;\r
            --radius: 1.25rem;\r
\r
            /* ── Status — palette-mapped, no traffic lights ── */\r
            --flagged-bg: #fdf0cc;\r
            /* accent-light */\r
            --flagged-color: #7a4e08;\r
            /* dark amber */\r
            --flagged-border: #e8c060;\r
            --monitored-bg: #e8f0f4;\r
            /* primary-xlight */\r
            --monitored-color: #1e3d4f;\r
            /* primary-dark */\r
            --monitored-border: #a0c0d0;\r
            --neutral-bg: #f0ece4;\r
            --neutral-color: #305669;\r
            --neutral-border: #c8bfaa;\r
\r
            --shadow-lg: 0 8px 40px rgba(15, 43, 44, 0.16);\r
        }\r
\r
        body {\r
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;\r
            background: var(--background);\r
            color: var(--foreground);\r
            min-height: 100vh;\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            padding: 3rem 2rem;\r
        }\r
\r
        /* ── Card wrapper ────────────────────────────────────── */\r
        .card-wrap {\r
            perspective: 900px;\r
            max-width: 520px;\r
            width: 100%;\r
        }\r
\r
        .dash-card {\r
            background: var(--surface);\r
            border: 1.5px solid var(--border);\r
            border-radius: var(--radius);\r
            padding: 20px 22px 18px;\r
            box-shadow: var(--shadow-lg);\r
            opacity: 0;\r
            transform: translateY(20px) scale(0.98);\r
            transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s;\r
            will-change: transform;\r
        }\r
\r
        .dash-card.visible {\r
            opacity: 1;\r
            transform: translateY(0) scale(1);\r
        }\r
\r
        /* ── Top bar ─────────────────────────────────────────── */\r
        .dash-topbar {\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            margin-bottom: 14px;\r
        }\r
\r
        .dash-logo {\r
            height: 28px;\r
            width: auto;\r
            object-fit: contain;\r
        }\r
\r
\r
\r
        /* ── Title block ─────────────────────────────────────── */\r
        .dash-title-block {\r
            display: flex;\r
            flex-direction: column;\r
            margin-bottom: 14px;\r
            padding-bottom: 12px;\r
            border-bottom: 1.5px solid var(--border);\r
        }\r
\r
        .dash-label {\r
            font-size: 10px;\r
            font-weight: 700;\r
            letter-spacing: 0.1em;\r
            text-transform: uppercase;\r
            color: var(--accent-dark);\r
            margin-bottom: 3px;\r
        }\r
\r
        .dash-heading {\r
            font-size: 17px;\r
            font-weight: 700;\r
            color: var(--foreground);\r
        }\r
\r
        /* ── KPI row ─────────────────────────────────────────── */\r
        /* Dark-teal-anchored tiles — primary bg, accent/surface text */\r
        .kpi-row {\r
            display: grid;\r
            grid-template-columns: repeat(4, 1fr);\r
            gap: 8px;\r
            margin-bottom: 14px;\r
        }\r
\r
        .kpi-card {\r
            background: var(--primary);\r
            border: 1px solid var(--primary-dark);\r
            border-radius: 10px;\r
            padding: 10px 9px 9px;\r
            display: flex;\r
            flex-direction: column;\r
            gap: 2px;\r
            cursor: default;\r
            transition: transform 0.18s, box-shadow 0.18s, background 0.18s;\r
        }\r
\r
        .kpi-card:hover {\r
            transform: translateY(-3px) scale(1.03);\r
            box-shadow: 0 6px 20px rgba(48, 86, 105, 0.30);\r
            background: var(--primary-dark);\r
        }\r
\r
        .kpi-value {\r
            font-size: 19px;\r
            font-weight: 700;\r
            color: var(--surface);\r
            line-height: 1;\r
        }\r
\r
        .kpi-text {\r
            font-size: 14px;\r
            font-weight: 700;\r
            color: var(--surface);\r
        }\r
\r
        .kpi-name {\r
            font-size: 10px;\r
            font-weight: 600;\r
            color: var(--primary-light);\r
            line-height: 1.25;\r
            margin-top: 3px;\r
        }\r
\r
        .kpi-caption {\r
            font-size: 9px;\r
            color: var(--primary-light);\r
            opacity: 0.8;\r
            line-height: 1.25;\r
        }\r
\r
        /* ── Mid row ─────────────────────────────────────────── */\r
        .mid-row {\r
            display: grid;\r
            grid-template-columns: 1.15fr 1fr;\r
            gap: 10px;\r
            margin-bottom: 12px;\r
        }\r
\r
        /* ── Panels ──────────────────────────────────────────── */\r
        .panel {\r
            background: var(--background);\r
            border: 1px solid var(--border);\r
            border-radius: 11px;\r
            padding: 11px 13px;\r
            transition: box-shadow 0.25s, transform 0.25s;\r
            transform-style: preserve-3d;\r
            will-change: transform;\r
        }\r
\r
        .panel:hover {\r
            box-shadow: 0 10px 28px rgba(15, 43, 44, 0.12);\r
        }\r
\r
        .panel-explain {\r
            display: flex;\r
            flex-direction: column;\r
        }\r
\r
        .panel-header {\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            margin-bottom: 10px;\r
        }\r
\r
        .panel-title {\r
            font-size: 10.5px;\r
            font-weight: 700;\r
            color: var(--foreground);\r
        }\r
\r
        .panel-tag {\r
            font-size: 9px;\r
            font-weight: 700;\r
            background: var(--primary);\r
            color: var(--secondary);\r
            border: 1px solid var(--primary-dark);\r
            padding: 2px 8px;\r
            border-radius: 20px;\r
        }\r
\r
        /* ── Feature bars ────────────────────────────────────── */\r
        /* Palette-mapped — no red/green traffic lights */\r
        .feat-bars {\r
            display: flex;\r
            flex-direction: column;\r
            gap: 6px;\r
            margin-bottom: 10px;\r
        }\r
\r
        .feat-row {\r
            display: grid;\r
            grid-template-columns: 92px 1fr 42px;\r
            align-items: center;\r
            gap: 6px;\r
        }\r
\r
        .feat-label {\r
            font-size: 9.5px;\r
            font-weight: 500;\r
            color: var(--foreground-muted);\r
            white-space: nowrap;\r
            overflow: hidden;\r
            text-overflow: ellipsis;\r
        }\r
\r
        .feat-track {\r
            height: 7px;\r
            background: var(--primary-xlight);\r
            border-radius: 4px;\r
            overflow: hidden;\r
        }\r
\r
        .feat-bar {\r
            height: 100%;\r
            border-radius: 4px;\r
            width: 0;\r
            transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);\r
        }\r
\r
        /* Positive = primary teal gradient */\r
        .feat-bar.pos {\r
            background: linear-gradient(70deg, var(--primary-dark), var(--primary-light));\r
        }\r
\r
        /* Negative = foreground-muted teal, slightly lighter */\r
        .feat-bar.neg {\r
            background: linear-gradient(70deg, var(--foreground-muted), #2e6568);\r
        }\r
\r
        .feat-track.neg-track {\r
            background: var(--primary-xlight);\r
        }\r
\r
        .feat-pct {\r
            font-size: 9.5px;\r
            font-weight: 700;\r
            text-align: right;\r
        }\r
\r
        .feat-pct.p {\r
            color: var(--primary);\r
        }\r
\r
        .feat-pct.n {\r
            color: var(--foreground-muted);\r
        }\r
\r
        /* ── Risk distribution donut ─────────────────────────── */\r
        /* Segments: primary-dark → primary → accent → border */\r
        .risk-section {\r
            border-top: 1px solid var(--border);\r
            padding-top: 5px;\r
            flex: 1;\r
            display: flex;\r
            flex-direction: column;\r
        }\r
\r
        .risk-title {\r
            font-size: 10px;\r
            font-weight: 700;\r
            color: var(--foreground);\r
            display: block;\r
            margin-bottom: 8px;\r
        }\r
\r
        .risk-donut-wrap {\r
            flex: 1;\r
            display: flex;\r
            align-items: center;\r
            gap: 12px;\r
        }\r
\r
        .risk-donut-center {\r
            position: relative;\r
            width: 90px;\r
            height: 90px;\r
            flex-shrink: 0;\r
        }\r
\r
        .risk-donut {\r
            width: 90px;\r
            height: 90px;\r
            transform: rotate(-90deg);\r
            display: block;\r
        }\r
\r
        .risk-donut-label {\r
            position: absolute;\r
            top: 50%;\r
            left: 50%;\r
            transform: translate(-50%, -50%);\r
            text-align: center;\r
            pointer-events: none;\r
        }\r
\r
        .risk-donut-total {\r
            display: block;\r
            font-size: 11px;\r
            font-weight: 700;\r
            color: var(--foreground);\r
            line-height: 1;\r
        }\r
\r
        .risk-donut-sub {\r
            display: block;\r
            font-size: 8px;\r
            color: var(--foreground-muted);\r
            margin-top: 2px;\r
        }\r
\r
        .risk-legend {\r
            display: flex;\r
            flex-direction: column;\r
            gap: 6px;\r
            flex: 1;\r
        }\r
\r
        .risk-leg-row {\r
            display: flex;\r
            align-items: center;\r
            gap: 6px;\r
            font-size: 10px;\r
            color: var(--foreground-muted);\r
        }\r
\r
        .risk-leg-dot {\r
            width: 8px;\r
            height: 8px;\r
            border-radius: 50%;\r
            flex-shrink: 0;\r
        }\r
\r
        .risk-leg-name {\r
            flex: 1;\r
        }\r
\r
        .risk-leg-pct {\r
            font-weight: 700;\r
            color: var(--foreground);\r
            min-width: 28px;\r
            text-align: right;\r
        }\r
\r
        /* ── Fairness rows ───────────────────────────────────── */\r
        .fairness-rows {\r
            display: flex;\r
            flex-direction: column;\r
            gap: 6px;\r
            margin-bottom: 10px;\r
        }\r
\r
        .fairness-row {\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            gap: 4px;\r
        }\r
\r
        .fairness-metric {\r
            font-size: 10px;\r
            color: var(--foreground-muted);\r
        }\r
\r
        /* Palette-mapped badges — no red/green */\r
        .pill {\r
            font-size: 9px;\r
            font-weight: 700;\r
            padding: 2px 9px;\r
            border-radius: 20px;\r
            white-space: nowrap;\r
        }\r
\r
        .pill-flagged {\r
            background: var(--flagged-bg);\r
            color: var(--flagged-color);\r
            border: 1px solid var(--flagged-border);\r
        }\r
\r
        .pill-monitored {\r
            background: var(--monitored-bg);\r
            color: var(--monitored-color);\r
            border: 1px solid var(--monitored-border);\r
        }\r
\r
        .pill-neutral {\r
            background: var(--neutral-bg);\r
            color: var(--neutral-color);\r
            border: 1px solid var(--neutral-border);\r
        }\r
\r
        /* ── Eval context ────────────────────────────────────── */\r
        .eval-context {\r
            background: var(--surface);\r
            border: 1px solid var(--border);\r
            border-radius: 9px;\r
            padding: 9px 10px;\r
            margin-bottom: 10px;\r
        }\r
\r
        .eval-header {\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            margin-bottom: 8px;\r
        }\r
\r
        .eval-title {\r
            font-size: 10px;\r
            font-weight: 700;\r
            color: var(--foreground);\r
        }\r
\r
        /* Active badge = primary */\r
        .eval-badge {\r
            font-size: 9px;\r
            font-weight: 700;\r
            background: var(--primary);\r
            color: var(--surface);\r
            border: 1px solid var(--primary-dark);\r
            padding: 2px 8px;\r
            border-radius: 20px;\r
        }\r
\r
        .eval-grid {\r
            display: grid;\r
            grid-template-columns: 1fr 1fr;\r
            gap: 5px;\r
        }\r
\r
        .eval-full {\r
            grid-column: 1 / -1;\r
        }\r
\r
        .eval-meta-card {\r
            background: var(--background);\r
            border: 1px solid var(--border);\r
            border-radius: 7px;\r
            padding: 5px 8px;\r
            display: flex;\r
            flex-direction: column;\r
            gap: 2px;\r
        }\r
\r
        .eval-meta-label {\r
            font-size: 8.5px;\r
            font-weight: 700;\r
            color: var(--primary);\r
            text-transform: uppercase;\r
            letter-spacing: 0.07em;\r
        }\r
\r
        .eval-meta-val {\r
            font-size: 10px;\r
            font-weight: 600;\r
            color: var(--foreground);\r
        }\r
\r
        .eval-meta-mono {\r
            font-family: 'Courier New', monospace;\r
            font-size: 9px;\r
            color: var(--foreground-muted);\r
        }\r
\r
        /* ── Progress bars ───────────────────────────────────── */\r
        .progress-section {\r
            display: flex;\r
            flex-direction: column;\r
            gap: 7px;\r
        }\r
\r
        .progress-label-row {\r
            display: flex;\r
            justify-content: space-between;\r
            align-items: center;\r
            margin-bottom: 4px;\r
        }\r
\r
        .progress-name {\r
            font-size: 10px;\r
            font-weight: 500;\r
            color: var(--foreground-muted);\r
        }\r
\r
        .progress-pct {\r
            font-size: 10px;\r
            font-weight: 700;\r
            color: var(--primary);\r
        }\r
\r
        .progress-track {\r
            height: 6px;\r
            background: var(--primary-xlight);\r
            border-radius: 4px;\r
            overflow: hidden;\r
        }\r
\r
        .progress-fill {\r
            height: 100%;\r
            border-radius: 4px;\r
            width: 0;\r
            transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);\r
        }\r
\r
        /* Both bars = primary teal family */\r
        .fill-primary {\r
            background: linear-gradient(90deg, var(--primary-dark), var(--primary-mid));\r
        }\r
\r
        .fill-accent {\r
            background: linear-gradient(90deg, var(--accent-dark), var(--accent));\r
        }\r
\r
        /* ── Bottom chips ────────────────────────────────────── */\r
        /* border bg + primary text / invert on hover */\r
        .bottom-chips {\r
            display: flex;\r
            flex-wrap: wrap;\r
            gap: 7px;\r
            border-top: 1.5px solid var(--border);\r
            padding-top: 12px;\r
        }\r
\r
        .chip {\r
            font-size: 10px;\r
            font-weight: 600;\r
            color: var(--primary);\r
            background: var(--border);\r
            border: 1px solid var(--border-strong);\r
            padding: 5px 12px;\r
            border-radius: 20px;\r
            cursor: default;\r
            transition: background 0.18s, color 0.18s, border-color 0.18s, transform 0.15s;\r
        }\r
\r
        .chip .ck {\r
            color: var(--accent-dark);\r
            margin-left: 2px;\r
        }\r
\r
        .chip:hover {\r
            background: var(--primary);\r
            color: var(--surface);\r
            border-color: var(--primary-dark);\r
            transform: translateY(-1px);\r
        }\r
\r
        .chip:hover .ck {\r
            color: var(--accent);\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
\r
    <div class="card-wrap" id="cardWrap">\r
        <div class="dash-card" id="dashCard">\r
\r
            <!-- Top bar -->\r
            <!-- <div class="dash-topbar">\r
                <img src="logo.png" alt="TrustAI" class="dash-logo" />\r
\r
            </div> -->\r
\r
            <!-- Title -->\r
            <div class="dash-title-block">\r
                <span class="dash-label">AI Governance Snapshot</span>\r
                <span class="dash-heading">Evaluation Overview</span>\r
            </div>\r
\r
            <!-- KPI row — dark teal tiles -->\r
            \r
\r
            <!-- Mid row -->\r
            <div class="mid-row">\r
\r
                <!-- Left panel -->\r
                <div class="panel panel-explain" id="panelExplain">\r
                    <div class="panel-header">\r
                        <span class="panel-title">Record-Level Explanation Snapshot</span>\r
                        <span class="panel-tag">Top Features</span>\r
                    </div>\r
\r
                    <div class="feat-bars">\r
                        <div class="feat-row">\r
                            <span class="feat-label">Income Stability</span>\r
                            <div class="feat-track">\r
                                <div class="feat-bar pos" data-width="92"></div>\r
                            </div>\r
                            <span class="feat-pct p">+22.9%</span>\r
                        </div>\r
                        <div class="feat-row">\r
                            <span class="feat-label">Credit History</span>\r
                            <div class="feat-track">\r
                                <div class="feat-bar pos" data-width="76"></div>\r
                            </div>\r
                            <span class="feat-pct p">+16.5%</span>\r
                        </div>\r
                        <div class="feat-row">\r
                            <span class="feat-label">Debt Ratio</span>\r
                            <div class="feat-track neg-track">\r
                                <div class="feat-bar neg" data-width="58"></div>\r
                            </div>\r
                            <span class="feat-pct n">−11.6%</span>\r
                        </div>\r
                        <div class="feat-row">\r
                            <span class="feat-label">Account Age</span>\r
                            <div class="feat-track">\r
                                <div class="feat-bar pos" data-width="64"></div>\r
                            </div>\r
                            <span class="feat-pct p">+10.4%</span>\r
                        </div>\r
                        <!-- <div class="feat-row">\r
                            <span class="feat-label">Repayment Pattern</span>\r
                            <div class="feat-track">\r
                                <div class="feat-bar pos" data-width="60"></div>\r
                            </div>\r
                            <span class="feat-pct p">+9.5%</span>\r
                        </div> -->\r
                    </div>\r
\r
                    <!-- Donut — palette segments -->\r
                    <div class="risk-section">\r
                        <span class="risk-title">Risk Distribution</span>\r
                        <div class="risk-donut-wrap">\r
                            <div class="risk-donut-center">\r
                                <svg class="risk-donut" viewBox="0 0 100 100" id="riskDonut"></svg>\r
                                <div class="risk-donut-label">\r
                                    <span class="risk-donut-total">100%</span>\r
                                    <span class="risk-donut-sub">Records</span>\r
                                </div>\r
                            </div>\r
                            <div class="risk-legend">\r
                                <div class="risk-leg-row">\r
                                    <span class="risk-leg-dot" style="background:#1e3d4f"></span>\r
                                    <span class="risk-leg-name">Critical</span>\r
                                    <span class="risk-leg-pct">16%</span>\r
                                </div>\r
                                <div class="risk-leg-row">\r
                                    <span class="risk-leg-dot" style="background:#305669"></span>\r
                                    <span class="risk-leg-name">High</span>\r
                                    <span class="risk-leg-pct">24%</span>\r
                                </div>\r
                                <div class="risk-leg-row">\r
                                    <span class="risk-leg-dot" style="background:#f5ba42"></span>\r
                                    <span class="risk-leg-name">Med</span>\r
                                    <span class="risk-leg-pct">28%</span>\r
                                </div>\r
                                <div class="risk-leg-row">\r
                                    <span class="risk-leg-dot" style="background:#c2d8e2"></span>\r
                                    <span class="risk-leg-name">Low</span>\r
                                    <span class="risk-leg-pct">32%</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Right panel -->\r
                <div class="panel" id="panelFairness">\r
                    <div class="panel-header">\r
                        <span class="panel-title">Governance Review</span>\r
                    </div>\r
\r
                    <div class="fairness-rows">\r
                        <div class="fairness-row">\r
                            <span class="fairness-metric">Policy Coverage</span>\r
                            <span class="pill pill-monitored">Active</span>\r
                        </div>\r
                        <div class="fairness-row">\r
                            <span class="fairness-metric">Control Evidence</span>\r
                            <span class="pill pill-monitored">Ready</span>\r
                        </div>\r
                        <div class="fairness-row">\r
                            <span class="fairness-metric">Monitoring Cadence</span>\r
                            <span class="pill pill-neutral">Ongoing</span>\r
                        </div>\r
                        <div class="fairness-row">\r
                            <span class="fairness-metric">Review Status</span>\r
                            <span class="pill pill-neutral">In Progress</span>\r
                        </div>\r
                    </div>\r
\r
                    <div class="eval-context">\r
                        <div class="eval-header">\r
                            <span class="eval-title">Governance Context</span>\r
                            <span class="eval-badge">Active</span>\r
                        </div>\r
                        <div class="eval-grid">\r
                            <div class="eval-meta-card">\r
                                <span class="eval-meta-label">Scope</span>\r
                                <span class="eval-meta-val">AI Lifecycle</span>\r
                            </div>\r
                            <div class="eval-meta-card">\r
                                <span class="eval-meta-label">Focus</span>\r
                                <span class="eval-meta-val">Governance Controls</span>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="progress-section">\r
                        <div class="progress-item">\r
                            <div class="progress-label-row">\r
                                <span class="progress-name">Explainability Readiness</span>\r
                                <span class="progress-pct">94%</span>\r
                            </div>\r
                            <div class="progress-track">\r
                                <div class="progress-fill fill-primary" data-width="94"></div>\r
                            </div>\r
                        </div>\r
                        <div class="progress-item">\r
                            <div class="progress-label-row">\r
                                <span class="progress-name">Fairness Monitoring</span>\r
                                <span class="progress-pct">88%</span>\r
                            </div>\r
                            <div class="progress-track">\r
                                <div class="progress-fill fill-accent" data-width="88"></div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
            </div>\r
\r
            <!-- Chips — border bg + primary text, accent checkmark -->\r
            <div class="bottom-chips">\r
                <span class="chip">Explainability <span class="ck">✓</span></span>\r
                <span class="chip">Fairness <span class="ck">✓</span></span>\r
                <span class="chip">Traceability <span class="ck">✓</span></span>\r
                <span class="chip">Report Generated <span class="ck">✓</span></span>\r
            </div>\r
\r
        </div>\r
    </div>\r
\r
    <script>\r
        document.addEventListener('DOMContentLoaded', () => {\r
\r
            const card = document.getElementById('dashCard');\r
            const cardWrap = document.getElementById('cardWrap');\r
\r
            /* Entrance */\r
            setTimeout(() => { card.classList.add('visible'); runAnimations(); }, 120);\r
\r
            /* Outer card tilt */\r
            cardWrap.addEventListener('mousemove', e => {\r
                const r = card.getBoundingClientRect();\r
                const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);\r
                const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);\r
                card.style.transform = \`rotateX(\${dy * -4}deg) rotateY(\${dx * 4}deg) scale(1.01)\`;\r
                card.style.boxShadow = \`\${-dx * 4}px \${dy * 4}px 32px rgba(15,43,44,0.18)\`;\r
            });\r
            cardWrap.addEventListener('mouseleave', () => {\r
                card.style.transform = '';\r
                card.style.boxShadow = '';\r
            });\r
\r
            /* Panel tilt */\r
            ['panelExplain', 'panelFairness'].forEach(id => {\r
                const p = document.getElementById(id);\r
                p.addEventListener('mousemove', e => {\r
                    e.stopPropagation();\r
                    const r = p.getBoundingClientRect();\r
                    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);\r
                    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);\r
                    p.style.transform = \`rotateX(\${dy * -6}deg) rotateY(\${dx * 6}deg) translateZ(8px) scale(1.025)\`;\r
                    p.style.boxShadow = \`\${-dx * 3}px \${dy * 3}px 22px rgba(15,43,44,0.18)\`;\r
                    p.style.transition = 'box-shadow 0.1s, transform 0.1s';\r
                    p.style.zIndex = '10';\r
                });\r
                p.addEventListener('mouseleave', () => {\r
                    p.style.transform = 'rotateX(0) rotateY(0) translateZ(0) scale(1)';\r
                    p.style.boxShadow = '';\r
                    p.style.transition = 'box-shadow 0.4s, transform 0.4s';\r
                    p.style.zIndex = '';\r
                });\r
            });\r
\r
            /* Animations */\r
            function runAnimations() {\r
                /* Counters */\r
                document.querySelectorAll('[data-target]').forEach(el => {\r
                    counter(el, parseInt(el.dataset.target), 1100);\r
                });\r
                /* Feature bars */\r
                setTimeout(() => {\r
                    document.querySelectorAll('.feat-bar[data-width]').forEach(b => {\r
                        b.style.width = b.dataset.width + '%';\r
                    });\r
                }, 300);\r
                /* Donut */\r
                setTimeout(drawDonut, 420);\r
                /* Progress bars */\r
                setTimeout(() => {\r
                    document.querySelectorAll('.progress-fill[data-width]').forEach(f => {\r
                        f.style.width = f.dataset.width + '%';\r
                    });\r
                }, 650);\r
            }\r
\r
            function counter(el, target, dur) {\r
                const start = performance.now();\r
                (function tick(now) {\r
                    const p = Math.min((now - start) / dur, 1);\r
                    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));\r
                    if (p < 1) requestAnimationFrame(tick);\r
                })(performance.now());\r
            }\r
\r
            function drawDonut() {\r
                const svg = document.getElementById('riskDonut');\r
                const ns = 'http://www.w3.org/2000/svg';\r
                const cx = 50, cy = 50, r = 36, sw = 14;\r
                const C = 2 * Math.PI * r;\r
                /* Palette-mapped: dark→light = Critical→Low */\r
                const segs = [\r
                    { pct: 16, color: '#1e3d4f' }, /* Critical — primary-dark  */\r
                    { pct: 24, color: '#305669' }, /* High     — primary       */\r
                    { pct: 28, color: '#f5ba42' }, /* Med      — accent        */\r
                    { pct: 32, color: '#c2d8e2' }, /* Low      — primary-light */\r
                ];\r
                const gapDeg = 3;\r
\r
                /* Background track */\r
                const bg = document.createElementNS(ns, 'circle');\r
                bg.setAttribute('cx', cx); bg.setAttribute('cy', cy); bg.setAttribute('r', r);\r
                bg.setAttribute('fill', 'none'); bg.setAttribute('stroke', '#e6dece');\r
                bg.setAttribute('stroke-width', sw);\r
                svg.appendChild(bg);\r
\r
                let angle = 0;\r
                segs.forEach(seg => {\r
                    const el = document.createElementNS(ns, 'circle');\r
                    el.setAttribute('cx', cx); el.setAttribute('cy', cy); el.setAttribute('r', r);\r
                    el.setAttribute('fill', 'none'); el.setAttribute('stroke', seg.color);\r
                    el.setAttribute('stroke-width', sw); el.setAttribute('stroke-linecap', 'butt');\r
                    const len = ((seg.pct / 100 * 360 - gapDeg) / 360) * C;\r
                    const offset = -((angle / 360) * C);\r
                    el.setAttribute('stroke-dasharray', \`0 \${C}\`);\r
                    el.setAttribute('stroke-dashoffset', offset);\r
                    svg.appendChild(el);\r
                    requestAnimationFrame(() => requestAnimationFrame(() => {\r
                        el.style.transition = 'stroke-dasharray 1s cubic-bezier(0.22,1,0.36,1)';\r
                        el.setAttribute('stroke-dasharray', \`\${len} \${C - len}\`);\r
                    }));\r
                    angle += seg.pct / 100 * 360;\r
                });\r
            }\r
\r
        });\r
    <\/script>\r
</body>\r
\r
</html>\r
`,wk=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TrustAI — Governance diagram (single-file embed)</title>
  <style>
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem;background:#eae6de;font-family:system-ui,sans-serif;}
.trustai-diagram-embed{width:100%;max-width:min(1160px,100%);display:flex;justify-content:center;}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  min-height: 100%;
  background: var(--background);
  color: var(--foreground);
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.trustai-diagram-host {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 4vw, 2.5rem);
  width: 100%;
  max-width: min(1160px, 100%);
  margin-inline: auto;
}

/* TrustAI — circular governance diagram (restored) */

:root {
  --background: #faf7f0;
  --surface: #fffdf8;
  --primary: #1d465e;
  --secondary: #e3ebee;
  --foreground: #11212b;
  --foreground-muted: #667885;
  --accent: #f5ba42;
  --border: #e6dece;
  --radius: 1.25rem;
  --ta-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ta-ease-spring: cubic-bezier(0.34, 1.45, 0.64, 1);
  --ta-shadow-node: 0 4px 18px rgba(29, 70, 94, 0.12);
  --ta-shadow-node-hover: 0 10px 28px rgba(29, 70, 94, 0.18);
  --trustai-diagram-max-width: 460px;
  --trustai-diagram-width: 100%;
}

@media (max-width: 900px) {
  :root {
    --trustai-diagram-max-width: min(360px, 88vw);
  }
}

@media (max-width: 600px) {
  :root {
    --trustai-diagram-max-width: min(300px, 90vw);
  }
}

.trustai-diagram {
  position: relative;
  box-sizing: border-box;
  width: var(--trustai-diagram-width, 100%);
  max-width: min(var(--trustai-diagram-max-width, 460px), 100%);
  min-width: 0;
  margin-inline: auto;
  aspect-ratio: 1;
  border-radius: var(--radius);
  background: var(--background);
  isolation: isolate;
}

.trustai-diagram__svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

/* ——— Ambient glow behind core ——— */
.ta-ambient {
  transition: fill-opacity 1.4s ease;
}

.trustai-diagram--play-flow .ta-ambient {
  fill-opacity: 0.055;
  animation: ta-ambient-breathe 5s ease-in-out infinite;
}

@keyframes ta-ambient-breathe {
  0%,
  100% {
    fill-opacity: 0.04;
  }
  50% {
    fill-opacity: 0.08;
  }
}

/* ——— Orbit ring ——— */
.ta-orbit-ring--dash {
  opacity: 0;
  transition: opacity 0.9s ease;
}

.ta-orbit-ring--highlight {
  opacity: 0;
  transition: opacity 0.9s ease 0.08s;
  transform-origin: 250px 250px;
  animation: ta-orbit-highlight-rotate 36s linear infinite;
}

.trustai-diagram--play-lines .ta-orbit-ring--dash,
.trustai-diagram--play-lines .ta-orbit-ring--highlight {
  opacity: 1;
}

@keyframes ta-orbit-highlight-rotate {
  to {
    transform: rotate(360deg);
  }
}

.ta-orbit-dot {
  transition: opacity 0.8s ease;
}

.trustai-diagram--play-flow .ta-orbit-dot {
  opacity: 0.92;
}

/* ——— Radial connections ——— */
.ta-line {
  stroke: var(--primary);
  stroke-width: 1.25;
  stroke-opacity: 0.2;
  fill: none;
  stroke-dasharray: var(--ta-dash, 1) var(--ta-dash, 1);
  stroke-dashoffset: var(--ta-dash-offset, 0);
  transition:
    stroke-dashoffset 1s var(--ta-ease-out),
    stroke-opacity 0.55s ease,
    stroke 0.35s ease;
  animation: ta-line-pulse 4s ease-in-out infinite;
}

.trustai-diagram--play-lines .ta-line {
  stroke-dashoffset: 0;
}

@keyframes ta-line-pulse {
  0%,
  100% {
    stroke-opacity: 0.17;
  }
  50% {
    stroke-opacity: 0.26;
  }
}

.ta-line.is-active {
  stroke: var(--accent);
  stroke-opacity: 0.55;
  animation: none;
}

.ta-radial-flow {
  transition: opacity 0.7s ease;
}

.trustai-diagram--play-flow .ta-radial-flow {
  opacity: 1;
}

/* ——— Base ——— */
.ta-base-shadow,
.ta-base-rings {
  opacity: 0;
  transition: opacity 0.7s ease 0.15s;
}

.trustai-diagram--play-lines .ta-base-shadow,
.trustai-diagram--play-lines .ta-base-rings {
  opacity: 1;
}

/* ——— Center core ——— */
.ta-center {
  transform-box: fill-box;
  transform-origin: 50% 50%;
}

.ta-center__entrance {
  opacity: 0;
  transform: scale(0.84);
  transition:
    opacity 0.55s ease,
    transform 0.72s var(--ta-ease-spring);
}

.trustai-diagram--play .ta-center__entrance {
  opacity: 1;
  transform: scale(1);
}

.ta-center__idle {
  transform-origin: 250px 250px;
  transform-box: view-box;
  animation: ta-core-breathe 4.8s ease-in-out infinite;
}

@keyframes ta-core-breathe {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.018);
  }
}

.ta-core-pulse-ring {
  animation: ta-core-ring-pulse 4.8s ease-in-out infinite;
}

@keyframes ta-core-ring-pulse {
  0%,
  100% {
    stroke-opacity: 0.14;
  }
  50% {
    stroke-opacity: 0.06;
  }
}

.ta-center.is-glow .ta-core-glow {
  fill-opacity: 0.11;
}

.ta-center.is-glow .ta-core-pulse-ring {
  stroke-opacity: 0.22;
}

/* ——— Joints ——— */
.ta-joints {
  transition: opacity 0.55s ease 0.2s;
}

.trustai-diagram--play-lines .ta-joints {
  opacity: 1;
}

.ta-joint {
  animation: ta-joint-pulse 2.8s ease-in-out infinite;
}

.ta-joint:nth-child(odd) {
  animation-delay: 0.4s;
}

@keyframes ta-joint-pulse {
  0%,
  100% {
    opacity: 0.75;
  }
  50% {
    opacity: 1;
  }
}

/* ——— Nodes ——— */
.ta-node__entrance {
  opacity: 0;
  transform: scale(0.46);
  transition:
    opacity 0.48s ease,
    transform 0.62s var(--ta-ease-spring);
}

.trustai-diagram--play .ta-node[data-i="0"] .ta-node__entrance {
  transition-delay: 0.22s;
}
.trustai-diagram--play .ta-node[data-i="1"] .ta-node__entrance {
  transition-delay: 0.3s;
}
.trustai-diagram--play .ta-node[data-i="2"] .ta-node__entrance {
  transition-delay: 0.38s;
}
.trustai-diagram--play .ta-node[data-i="3"] .ta-node__entrance {
  transition-delay: 0.46s;
}
.trustai-diagram--play .ta-node[data-i="4"] .ta-node__entrance {
  transition-delay: 0.54s;
}
.trustai-diagram--play .ta-node[data-i="5"] .ta-node__entrance {
  transition-delay: 0.62s;
}

.trustai-diagram--play .ta-node__entrance {
  opacity: 1;
  transform: scale(1);
}

.ta-node__float {
  transform-origin: 0 0;
  animation: ta-node-float 5s ease-in-out infinite;
}

.ta-node[data-i="0"] .ta-node__float {
  animation-delay: 0s;
}
.ta-node[data-i="1"] .ta-node__float {
  animation-delay: 0.35s;
}
.ta-node[data-i="2"] .ta-node__float {
  animation-delay: 0.7s;
}
.ta-node[data-i="3"] .ta-node__float {
  animation-delay: 1.05s;
}
.ta-node[data-i="4"] .ta-node__float {
  animation-delay: 1.4s;
}
.ta-node[data-i="5"] .ta-node__float {
  animation-delay: 1.75s;
}

@keyframes ta-node-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3.5px);
  }
}

.ta-node__outer {
  fill: var(--surface);
  stroke: var(--border);
  stroke-width: 1.5;
  transition:
    r 0.38s var(--ta-ease-spring),
    stroke 0.35s ease,
    filter 0.35s ease;
}

.ta-node__inner {
  fill: var(--background);
  pointer-events: none;
}

.ta-node__accent {
  pointer-events: none;
  animation: ta-accent-spin 14s linear infinite;
}

@keyframes ta-accent-spin {
  to {
    stroke-dashoffset: -251;
  }
}

.ta-node__hit {
  cursor: pointer;
  outline: none;
  transition:
    transform 0.38s var(--ta-ease-spring),
    filter 0.38s ease;
}

.ta-node__hit:hover,
.ta-node__hit:focus-visible {
  transform: scale(1.07);
  filter: drop-shadow(var(--ta-shadow-node-hover));
}

.ta-node__hit:hover .ta-node__outer,
.ta-node__hit:focus-visible .ta-node__outer {
  r: 43;
  stroke: rgba(245, 186, 66, 0.45);
}

.ta-node__hit:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

/* Tooltip */
.trustai-diagram__tooltip {
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(12px, -36px);
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--primary);
  color: var(--surface);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  box-shadow: 0 6px 20px rgba(17, 33, 43, 0.12);
  z-index: 2;
  white-space: nowrap;
}

.trustai-diagram__tooltip.is-visible {
  opacity: 1;
  visibility: visible;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .ta-orbit-ring--highlight,
  .ta-node__float,
  .ta-center__idle,
  .ta-core-pulse-ring,
  .ta-line,
  .ta-joint,
  .ta-node__accent {
    animation: none !important;
  }

  .trustai-diagram--play .ta-line {
    stroke-dashoffset: 0;
  }
}

  </style>
</head>
<body>
  <div class="trustai-diagram-embed">
<div
      class="trustai-diagram"
      id="trustai-diagram"
      role="img"
      aria-label="Animated TrustAI governance architecture: central orchestration connected to knowledge, compliance, monitoring, robustness, fairness, and explainability modules."
    >
<svg class="trustai-diagram__svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <filter id="ta-glow-center" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="ta-glow-node" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="5" result="bn" />
            <feMerge>
              <feMergeNode in="bn" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="ta-shadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="5" stdDeviation="10" flood-color="#1d465e" flood-opacity="0.14" />
          </filter>
          <filter id="ta-shadow-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#1d465e" flood-opacity="0.12" />
          </filter>
          <radialGradient id="ta-core-grad" cx="50%" cy="32%" r="70%">
            <stop offset="0%" stop-color="#2a5f7a" />
            <stop offset="100%" stop-color="#0f2d3d" />
          </radialGradient>
          <linearGradient id="ta-platform-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#d4e4eb" />
            <stop offset="100%" stop-color="#a8c4d2" />
          </linearGradient>
          <linearGradient id="ta-ring-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#1d465e" stop-opacity="0.2" />
            <stop offset="45%" stop-color="#f5ba42" stop-opacity="0.65" />
            <stop offset="100%" stop-color="#1d465e" stop-opacity="0.2" />
          </linearGradient>
          <!-- Motion path for ring particle (r=172) -->
          <path
            id="ta-orbit-motion"
            fill="none"
            d="M 250,78 A 172,172 0 1 1 249.99 78"
          />
          <path id="ta-path-0" d="M250,250 L250,92" />
          <path id="ta-path-1" d="M250,250 L398.9,164" />
          <path id="ta-path-2" d="M250,250 L398.9,336" />
          <path id="ta-path-3" d="M250,250 L250,408" />
          <path id="ta-path-4" d="M250,250 L101.1,336" />
          <path id="ta-path-5" d="M250,250 L101.1,164" />
        </defs>

        <!-- Ambient glow (fades in last) -->
        <circle class="ta-ambient" cx="250" cy="248" r="120" fill="#f5ba42" fill-opacity="0" />

        <!-- Outer dashed orbit -->
        <g class="ta-orbit-group" transform-origin="250px 250px">
          <circle
            class="ta-orbit-ring ta-orbit-ring--dash"
            cx="250"
            cy="250"
            r="172"
            fill="none"
            stroke="#1d465e"
            stroke-width="1"
            stroke-dasharray="5 7"
            stroke-opacity="0.22"
          />
          <circle
            class="ta-orbit-ring ta-orbit-ring--highlight"
            cx="250"
            cy="250"
            r="172"
            fill="none"
            stroke="url(#ta-ring-highlight)"
            stroke-width="2.2"
            stroke-dasharray="72 1008"
            stroke-linecap="round"
          />
        </g>

        <!-- Radial connections -->
        <g class="ta-connections" stroke-linecap="round">
          <line class="ta-line" data-i="0" x1="250" y1="250" x2="250" y2="92" />
          <line class="ta-line" data-i="1" x1="250" y1="250" x2="398.9" y2="164" />
          <line class="ta-line" data-i="2" x1="250" y1="250" x2="398.9" y2="336" />
          <line class="ta-line" data-i="3" x1="250" y1="250" x2="250" y2="408" />
          <line class="ta-line" data-i="4" x1="250" y1="250" x2="101.1" y2="336" />
          <line class="ta-line" data-i="5" x1="250" y1="250" x2="101.1" y2="164" />
        </g>

        <!-- Flow dots along radials (SMIL, lightweight) -->
        <g class="ta-radial-flow" opacity="0">
          <circle r="3" fill="#f5ba42">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin="0s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#ta-path-0" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.85;0" dur="2.8s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle r="2.8" fill="#1d465e">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.45s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#ta-path-1" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.75;0" dur="2.8s" repeatCount="indefinite" begin="0.45s" />
          </circle>
          <circle r="3" fill="#f5ba42">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.9s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#ta-path-2" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.85;0" dur="2.8s" repeatCount="indefinite" begin="0.9s" />
          </circle>
          <circle r="2.8" fill="#1d465e">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.35s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#ta-path-3" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.75;0" dur="2.8s" repeatCount="indefinite" begin="1.35s" />
          </circle>
          <circle r="3" fill="#f5ba42">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.8s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#ta-path-4" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.85;0" dur="2.8s" repeatCount="indefinite" begin="1.8s" />
          </circle>
          <circle r="2.8" fill="#1d465e">
            <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.25s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#ta-path-5" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.75;0" dur="2.8s" repeatCount="indefinite" begin="2.25s" />
          </circle>
        </g>

        <!-- Ring flow particle -->
        <circle class="ta-orbit-dot" r="3.2" fill="#f5ba42" opacity="0">
          <animateMotion dur="22s" repeatCount="indefinite" rotate="auto">
            <mpath href="#ta-orbit-motion" />
          </animateMotion>
        </circle>

        <!-- Base platform -->
        <ellipse class="ta-base-shadow" cx="250" cy="308" rx="92" ry="20" fill="#1d465e" opacity="0.07" />
        <g class="ta-base-rings" transform="translate(250 302)">
          <ellipse rx="86" ry="16" fill="none" stroke="#e3ebee" stroke-width="1.2" stroke-opacity="0.9" />
          <ellipse rx="74" ry="13" fill="none" stroke="#1d465e" stroke-width="0.8" stroke-opacity="0.12" stroke-dasharray="3 5" class="ta-base-ring-spin">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="48s" repeatCount="indefinite" />
          </ellipse>
        </g>
        <ellipse cx="250" cy="298" rx="94" ry="24" fill="url(#ta-platform-grad)" opacity="0.35" />

        <!-- Center core -->
        <g class="ta-center" id="ta-center" transform-origin="250px 250px">
          <g class="ta-center__entrance">
            <g class="ta-center__idle">
              <circle class="ta-core-glow" cx="250" cy="250" r="78" fill="#f5ba42" fill-opacity="0.06" />
              <circle class="ta-core-pulse-ring" cx="250" cy="250" r="70" fill="none" stroke="#1d465e" stroke-width="1.2" stroke-opacity="0.14" />
              <circle class="ta-core-disk" cx="250" cy="250" r="62" fill="url(#ta-core-grad)" filter="url(#ta-shadow)" />
              <circle cx="250" cy="250" r="62" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="7" stroke-dasharray="55 340" stroke-linecap="round" transform="rotate(-48 250 250)" />
              <!-- Gear + shield: shift so visual centroid is at origin, scale, then place on disk -->
              <g class="ta-core-mark" transform="translate(250 250) translate(2.25 1.75)">
                <g transform="scale(1.24)">
                  <g transform="translate(9 24.875)">
                    <g transform="translate(-30, -44)" fill="#fffdf8" fill-opacity="0.92">
                      <path
                        d="M28 15c0-.55-.04-1.08-.12-1.6l3.35-2.62-3.15-5.45-3.98 1.5a11.8 11.8 0 00-2.05-1.2L20.5 1h-6.3l-1.26 4.23c-.74.3-1.44.68-2.08 1.15l-3.98-1.5-3.15 5.45 3.35 2.62A11.6 11.6 0 009.5 15c0 .52.04 1.04.12 1.55l-3.35 2.62 3.15 5.45 3.98-1.5c.64.47 1.34.88 2.08 1.2L14.2 29h6.3l1.26-4.2c.72-.32 1.4-.7 2.05-1.2l3.98 1.5 3.15-5.45-3.35-2.62c.08-.52.12-1.05.12-1.58zM18.5 20a5 5 0 110-10 5 5 0 010 10z"
                      />
                    </g>
                    <g transform="translate(-11, -29)" fill="#f5ba42" fill-opacity="0.92">
                      <path d="M9 0L0 3.2v5.4c0 4.8 3.7 9.2 9 10.3 5.3-1.1 9-5.5 9-10.3V3.2L9 0z" />
                      <polyline points="3.5,8 7,12 14.5,5" stroke="#fffdf8" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>

        <!-- Endpoint joints -->
        <g class="ta-joints" opacity="0">
          <circle cx="250" cy="92" r="3.5" fill="#f5ba42" class="ta-joint" />
          <circle cx="398.9" cy="164" r="3.5" fill="#1d465e" class="ta-joint" />
          <circle cx="398.9" cy="336" r="3.5" fill="#f5ba42" class="ta-joint" />
          <circle cx="250" cy="408" r="3.5" fill="#1d465e" class="ta-joint" />
          <circle cx="101.1" cy="336" r="3.5" fill="#f5ba42" class="ta-joint" />
          <circle cx="101.1" cy="164" r="3.5" fill="#1d465e" class="ta-joint" />
        </g>

        <!-- Nodes: position groups + inner entrance/float -->
        <g class="ta-node" data-i="0" transform="translate(250 92)">
          <g class="ta-node__entrance">
            <g class="ta-node__float">
              <g class="ta-node__hit" data-label="Knowledge" tabindex="0" role="button">
                <circle r="40" class="ta-node__outer" />
                <circle r="40" class="ta-node__accent" fill="none" stroke="#f5ba42" stroke-width="2" stroke-opacity="0.55" stroke-dasharray="251" />
                <circle r="32" class="ta-node__inner" />
                <g transform="translate(-12,-12)" fill="none" stroke="#1d465e" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </g>
                <circle cx="10" cy="-20" r="6" fill="#f5ba42" />
                <g stroke="#fffdf8" stroke-width="1.1" stroke-linecap="round" opacity="0.9">
                  <line x1="10" y1="-28" x2="10" y2="-26" />
                  <line x1="4" y1="-25" x2="5.5" y2="-23.5" />
                  <line x1="16" y1="-25" x2="14.5" y2="-23.5" />
                </g>
              </g>
            </g>
          </g>
        </g>

        <g class="ta-node" data-i="1" transform="translate(398.9 164)">
          <g class="ta-node__entrance">
            <g class="ta-node__float">
              <g class="ta-node__hit" data-label="Compliance" tabindex="0" role="button">
                <circle r="40" class="ta-node__outer" />
                <circle r="40" class="ta-node__accent" fill="none" stroke="#1d465e" stroke-width="2" stroke-opacity="0.35" stroke-dasharray="251" />
                <circle r="32" class="ta-node__inner" />
                <g transform="translate(-12,-12)" fill="none" stroke="#1d465e" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="3" y1="22" x2="21" y2="22" />
                  <rect x="5" y="11" width="3" height="11" />
                  <rect x="11" y="11" width="3" height="11" />
                  <rect x="17" y="11" width="3" height="11" />
                  <polyline points="3,11 12,2 21,11" />
                </g>
                <path d="M-6,-18 L6,-18 L6,-8 L-6,-8 Z" fill="#1d465e" fill-opacity="0.85" />
                <polyline points="-3,-14 0,-11 3,-14" stroke="#fffdf8" stroke-width="1.3" fill="none" stroke-linecap="round" />
              </g>
            </g>
          </g>
        </g>

        <g class="ta-node" data-i="2" transform="translate(398.9 336)">
          <g class="ta-node__entrance">
            <g class="ta-node__float">
              <g class="ta-node__hit" data-label="Monitoring" tabindex="0" role="button">
                <circle r="40" class="ta-node__outer" />
                <circle r="40" class="ta-node__accent" fill="none" stroke="#f5ba42" stroke-width="2" stroke-opacity="0.45" stroke-dasharray="251" />
                <circle r="32" class="ta-node__inner" />
                <g transform="translate(-12,-13)" fill="none" stroke="#1d465e" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <line x1="8" y1="8" x2="16" y2="8" />
                  <line x1="8" y1="12" x2="14" y2="12" />
                  <line x1="8" y1="16" x2="12" y2="16" />
                </g>
                <rect x="-10" y="-22" width="14" height="10" rx="1" fill="none" stroke="#1d465e" stroke-width="1.2" />
                <path d="M-10,-17 h14" stroke="#f5ba42" stroke-width="1.5" stroke-linecap="round" />
              </g>
            </g>
          </g>
        </g>

        <g class="ta-node" data-i="3" transform="translate(250 408)">
          <g class="ta-node__entrance">
            <g class="ta-node__float">
              <g class="ta-node__hit" data-label="Robustness" tabindex="0" role="button">
                <circle r="40" class="ta-node__outer" />
                <circle r="40" class="ta-node__accent" fill="none" stroke="#1d465e" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="251" />
                <circle r="32" class="ta-node__inner" />
                <g transform="translate(-12,-12)" fill="none" stroke="#1d465e" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3l8 4v6c0 5-3.5 9.6-8 10.8C7.5 22.6 4 18 4 13V7l8-4z" />
                  <path d="M9 12l3 3 6-6" />
                </g>
                <circle cx="14" cy="-18" r="5" fill="#f5ba42" fill-opacity="0.9" />
                <line x1="14" y1="-20" x2="14" y2="-17" stroke="#11212b" stroke-width="1.3" stroke-linecap="round" />
                <circle cx="14" cy="-14.8" r="1" fill="#11212b" />
              </g>
            </g>
          </g>
        </g>

        <g class="ta-node" data-i="4" transform="translate(101.1 336)">
          <g class="ta-node__entrance">
            <g class="ta-node__float">
              <g class="ta-node__hit" data-label="Fairness" tabindex="0" role="button">
                <circle r="40" class="ta-node__outer" />
                <circle r="40" class="ta-node__accent" fill="none" stroke="#1d465e" stroke-width="2" stroke-opacity="0.32" stroke-dasharray="251" />
                <circle r="32" class="ta-node__inner" />
                <g transform="translate(-12,-13)" fill="none" stroke="#1d465e" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <path d="M5 21h14" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M3 6l4 7c0 2-1.8 3.5-4 3.5S-1 15 0 13L3 6z" />
                  <path d="M21 6l-4 7c0 2 1.8 3.5 4 3.5s5-1.5 4-3.5l-4-7z" />
                </g>
                <g transform="translate(6,2)">
                  <rect x="0" y="-8" width="3.5" height="12" rx="0.8" fill="#1d465e" opacity="0.55" />
                  <rect x="5" y="-12" width="3.5" height="16" rx="0.8" fill="#f5ba42" opacity="0.85" />
                  <rect x="10" y="-5" width="3.5" height="9" rx="0.8" fill="#1d465e" opacity="0.35" />
                </g>
              </g>
            </g>
          </g>
        </g>

        <g class="ta-node" data-i="5" transform="translate(101.1 164)">
          <g class="ta-node__entrance">
            <g class="ta-node__float">
              <g class="ta-node__hit" data-label="Explainability" tabindex="0" role="button">
                <circle r="40" class="ta-node__outer" />
                <circle r="40" class="ta-node__accent" fill="none" stroke="#f5ba42" stroke-width="2" stroke-opacity="0.5" stroke-dasharray="251" />
                <circle r="32" class="ta-node__inner" />
                <g transform="translate(-12,-12)" fill="none" stroke="#1d465e" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="2" width="12" height="18" rx="2" />
                  <line x1="8" y1="7" x2="14" y2="7" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                  <line x1="8" y1="15" x2="11" y2="15" />
                </g>
                <circle cx="9" cy="5" r="5.5" fill="none" stroke="#1d465e" stroke-width="1.4" />
                <line x1="13" y1="9" x2="17" y2="13" stroke="#1d465e" stroke-width="1.8" stroke-linecap="round" />
                <circle cx="-18" cy="-16" r="2.5" fill="#f5ba42" />
                <circle cx="-24" cy="-10" r="2" fill="#1d465e" opacity="0.45" />
                <line x1="-18" y1="-16" x2="-24" y2="-10" stroke="#1d465e" stroke-width="0.9" opacity="0.35" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    <div class="trustai-diagram__tooltip" id="ta-tooltip" aria-live="polite" hidden></div>
    </div>
  </div>
  <script>
/**
 * TrustAI circular governance diagram — animations & interactions
 */
(function () {
  'use strict';

  var root = document.getElementById('trustai-diagram');
  if (!root) return;

  var center = document.getElementById('ta-center');
  var lines = root.querySelectorAll('.ta-line');
  var hits = root.querySelectorAll('.ta-node__hit');
  var tooltip = document.getElementById('ta-tooltip');
  var played = false;
  var entranceObserver = null;

  function delay(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  function setLineDashMetrics() {
    lines.forEach(function (line) {
      try {
        var len = line.getTotalLength();
        line.style.setProperty('--ta-dash', String(len));
        line.style.setProperty('--ta-dash-offset', String(len));
      } catch (_) {
        line.style.setProperty('--ta-dash', '1');
        line.style.setProperty('--ta-dash-offset', '0');
      }
    });
  }

  function clearActiveLines() {
    lines.forEach(function (l) {
      l.classList.remove('is-active');
    });
  }

  function highlightLine(index) {
    clearActiveLines();
    var el = root.querySelector('.ta-line[data-i="' + index + '"]');
    if (el) el.classList.add('is-active');
  }

  function showTooltip(label, clientX, clientY) {
    if (!tooltip) return;
    tooltip.textContent = label;
    tooltip.hidden = false;
    var rect = root.getBoundingClientRect();
    tooltip.style.left = clientX - rect.left + 'px';
    tooltip.style.top = clientY - rect.top + 'px';
    tooltip.classList.add('is-visible');
  }

  function hideTooltip() {
    if (!tooltip) return;
    tooltip.classList.remove('is-visible');
    tooltip.hidden = true;
  }

  async function runEntrance() {
    if (played) return;
    played = true;
    if (entranceObserver) {
      entranceObserver.disconnect();
      entranceObserver = null;
    }

    root.classList.add('trustai-diagram--play');
    await delay(720);
    root.classList.add('trustai-diagram--play-lines');
    await delay(520);
    root.classList.add('trustai-diagram--play-flow');
  }

  function bindNodeInteractions() {
    hits.forEach(function (hit) {
      var slot = hit.closest('.ta-node');
      var idx = slot && slot.getAttribute('data-i');
      var label = hit.getAttribute('data-label') || '';

      hit.addEventListener('mouseenter', function (e) {
        if (idx !== null) highlightLine(idx);
        showTooltip(label, e.clientX, e.clientY);
      });

      hit.addEventListener('mousemove', function (e) {
        if (tooltip && tooltip.classList.contains('is-visible')) {
          showTooltip(label, e.clientX, e.clientY);
        }
      });

      hit.addEventListener('mouseleave', function () {
        clearActiveLines();
        hideTooltip();
      });

      hit.addEventListener('focus', function () {
        if (idx !== null) highlightLine(idx);
        var r = hit.getBoundingClientRect();
        showTooltip(label, r.left + r.width / 2, r.top);
      });

      hit.addEventListener('blur', function () {
        clearActiveLines();
        hideTooltip();
      });
    });
  }

  function bindCenterHover() {
    if (!center) return;
    center.addEventListener('mouseenter', function () {
      center.classList.add('is-glow');
      lines.forEach(function (l) {
        l.style.strokeOpacity = '0.38';
      });
    });
    center.addEventListener('mouseleave', function () {
      center.classList.remove('is-glow');
      lines.forEach(function (l) {
        l.style.removeProperty('stroke-opacity');
      });
    });
  }

  function maybeAutoplay() {
    var rect = root.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      runEntrance();
      return true;
    }
    return false;
  }

  function init() {
    setLineDashMetrics();
    bindNodeInteractions();
    bindCenterHover();

    if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      entranceObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runEntrance();
            }
          });
        },
        { threshold: 0.12 }
      );
      entranceObserver.observe(root);
      maybeAutoplay();
    } else {
      root.classList.add('trustai-diagram--play');
      root.classList.add('trustai-diagram--play-lines');
      root.classList.add('trustai-diagram--play-flow');
      played = true;
    }

    window.addEventListener('resize', setLineDashMetrics, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

  <\/script>
</body>
</html>
`,Ek=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TrustAI – AI Governance Diagram</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
/* === ROOT TOKENS === */
:root {
  --background:       #faf7f0;
  --surface:          #fffdf8;
  --primary:          #1d465e;
  --secondary:        #e3ebee;
  --foreground:       #11212b;
  --foreground-muted: #667885;
  --accent:           #f5ba42;
  --border:           #e6dece;
  --radius:           1.25rem;
  --radius-sm:        0.75rem;
  --shadow-card:      0 2px 12px rgba(29,70,94,0.07), 0 1px 3px rgba(29,70,94,0.05);
  --shadow-hover:     0 6px 24px rgba(29,70,94,0.12), 0 2px 6px rgba(29,70,94,0.08);
  --shadow-center:    0 8px 32px rgba(29,70,94,0.14), 0 2px 8px rgba(29,70,94,0.10);
  --shadow-box:       0 8px 40px rgba(29,70,94,0.13), 0 2px 8px rgba(29,70,94,0.07);
}

/* === RESET === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
ul { list-style: none; }

/* === BODY === */
body {
  background: #eae6de;
  font-family: 'Inter', sans-serif;
  color: var(--foreground);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1.5rem;
}

/* === DIAGRAM BOX === */
.diagram-box {
  background: var(--background);
  border: 1.5px solid var(--border);
  border-radius: 1.75rem;
  box-shadow: var(--shadow-box);
  padding: 1.25rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 440px;
}

/* === TITLE === */
.title-pill {
  background: var(--primary);
  color: var(--surface);
  font-size: 13px;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.45rem 1.4rem;
  text-align: center;
  letter-spacing: -0.01em;
  white-space: nowrap;
  box-shadow: 0 3px 12px rgba(29,70,94,0.18);
  width: 100%;
}

/* === GRID === */
.grid-wrapper {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
  gap: 0.7rem 0.6rem;
  align-items: center;
  justify-items: stretch;
}

.card--explainability { grid-column: 1; grid-row: 1; }
.card--robustness     { grid-column: 3; grid-row: 1; }
.card--bias           { grid-column: 1; grid-row: 2; }
.card--calibration    { grid-column: 3; grid-row: 2; }
.center-col {
  grid-column: 2;
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* === CARDS === */
.card {
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  min-height: 130px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  transition:
    transform    0.25s ease,
    box-shadow   0.25s ease,
    border-color 0.25s ease;
}
.card__header {
  height: 38px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: filter 0.25s ease;
}
.card__header--accent      { background: linear-gradient(135deg, #f5ba42, #f0a820); }
.card__header--secondary   { background: var(--secondary); }
.card__header--bias        { background: linear-gradient(135deg, var(--secondary) 0%, #dce8ec 100%); }
.card__header--calibration { background: linear-gradient(135deg, #fdf3d8, #fae7b0); }

.card__title {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--primary);
  letter-spacing: -0.005em;
}
.card__body {
  padding: 8px 10px 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.bullet-list { display: flex; flex-direction: column; gap: 4px; }
.bullet-list li {
  font-size: 10.5px;
  font-weight: 500;
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.25s ease;
}
.bullet-list li::before {
  content: '';
  display: block;
  width: 5px; height: 5px; min-width: 5px;
  border-radius: 50%;
  background: var(--primary);
  transition: background 0.25s ease;
}
.support-text {
  font-size: 10px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--foreground-muted);
  margin-top: 6px;
}

/* === CENTER MODULE === */
.trustai-module {
  width: 148px;
  height: 148px;
  border-radius: 50%;
  background: var(--primary);
  border: 2.5px solid var(--accent);
  box-shadow: var(--shadow-center);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: default;
  position: relative;
  z-index: 5;
  transition:
    border-width 0.25s ease,
    box-shadow   0.30s ease;
}
.trustai-module::after {
  content: '';
  position: absolute;
  inset: -7px;
  border-radius: 50%;
  border: 2px solid transparent;
  pointer-events: none;
  transition: border-color 0.30s ease, opacity 0.30s ease;
  opacity: 0;
}
.trustai-icon {
  width: 52px; height: 52px;
  flex-shrink: 0;
  transition: transform 0.4s ease-out;
}
.trustai-title {
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1;
}
.trustai-sub {
  font-size: 7.5px;
  font-weight: 400;
  color: rgba(255,255,255,0.70);
  text-align: center;
  max-width: 120px;
  line-height: 1.4;
  padding: 0 6px;
}

/* === COMPLIANCE PANEL === */
.compliance-panel {
  width: 100%;
  min-height: 46px;
  background: var(--primary);
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 0.75rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.compliance-panel::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0);
  border-radius: var(--radius-sm);
  pointer-events: none;
  transition: background 0.25s ease;
}
.compliance-title {
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.01em;
}
.compliance-sub {
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(255,255,255,0.72);
  line-height: 1.45;
}

/* === KEYFRAMES === */
@keyframes fadeRise {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes titleDrop {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes springIn {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes pulseCenterGlow {
  0%, 100% { box-shadow: var(--shadow-center), 0 0 0 0 rgba(245,186,66,0); }
  50%      { box-shadow: var(--shadow-center), 0 0 0 10px rgba(245,186,66,0.15); }
}
@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
}

/* === HIDDEN STATE === */
.is-hidden        { opacity: 0; transform: translateY(10px); }
.is-hidden-center { opacity: 0; transform: scale(0.88); }

/* === ANIMATE-IN === */
.anim-fadeRise  { animation: fadeRise  0.50s cubic-bezier(0.22,1,0.36,1) forwards; }
.anim-titleDrop { animation: titleDrop 0.50s cubic-bezier(0.22,1,0.36,1) forwards; }
.anim-springIn  { animation: springIn  0.60s cubic-bezier(0.34,1.56,0.64,1) forwards; }

/* === IDLE === */
.idle-pulse    { animation: pulseCenterGlow 3.5s ease-in-out infinite; }
.idle-float-0  { animation: floatCard 4.0s ease-in-out 0.0s infinite; }
.idle-float-1  { animation: floatCard 4.0s ease-in-out 1.0s infinite; }
.idle-float-2  { animation: floatCard 4.0s ease-in-out 2.0s infinite; }
.idle-float-3  { animation: floatCard 4.0s ease-in-out 3.0s infinite; }

/* === HOVERS === */
.card:hover { transform: translateY(-3px); box-shadow: var(--shadow-hover); border-color: var(--accent); }
.card:hover .card__header { filter: brightness(1.05); }
.card:hover .bullet-list li { color: var(--primary); }
.card:hover .bullet-list li::before { background: var(--accent); }
.card.idle-float-0:hover,
.card.idle-float-1:hover,
.card.idle-float-2:hover,
.card.idle-float-3:hover { animation: none; }

.trustai-module:hover {
  border-width: 3.5px;
  box-shadow: var(--shadow-center), 0 0 0 8px rgba(245,186,66,0.10), 0 0 0 16px rgba(245,186,66,0.05);
}
.trustai-module:hover::after { border-color: rgba(245,186,66,0.40); opacity: 1; }
.trustai-module:hover .trustai-icon { transform: rotate(15deg); }
.compliance-panel:hover::after { background: rgba(255,255,255,0.05); }

/* === RESPONSIVE === */
@media (max-width: 480px) {
  .diagram-box { padding: 1rem 0.75rem 0.75rem; }
  .grid-wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 0.6rem;
  }
  .card--explainability { grid-column: 1; grid-row: 1; }
  .card--robustness     { grid-column: 2; grid-row: 1; }
  .center-col           { grid-column: 1 / 3; grid-row: 2; }
  .card--bias           { grid-column: 1; grid-row: 3; }
  .card--calibration    { grid-column: 2; grid-row: 3; }
}
  </style>
</head>
<body>

  <div class="diagram-box" id="diagram-box">

    <!-- ① Title pill -->
    <div class="title-pill" id="title-pill">
      Our Approach to AI Governance
    </div>

    <!-- ② Grid -->
    <div class="grid-wrapper" id="grid-wrapper">

      <!-- Upper-left: Explainability -->
      <article class="card card--explainability" id="card-explain" data-float="0">
        <header class="card__header card__header--accent">
          <span class="card__title">Explainability</span>
        </header>
        <div class="card__body">
          <ul class="bullet-list">
            <li>SHAP / LIME / Counterfactuals</li>
          </ul>
          <p class="support-text">Generate interpretable insights for audit and review.</p>
        </div>
      </article>

      <!-- Center: TrustAI -->
      <div class="center-col">
        <div class="trustai-module" id="trustai-module">
          <svg class="trustai-icon" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path id="gear-path"
              d="M29.5 10.2 L30.9 14.1 C32.6 13.7 34.3 13.5 36 13.5
                 C37.7 13.5 39.4 13.7 41.1 14.1 L42.5 10.2
                 C43.0 8.9 44.4 8.2 45.7 8.7 L49.6 10.2
                 C50.9 10.7 51.6 12.1 51.1 13.4 L49.7 17.3
                 C51.0 18.3 52.2 19.4 53.2 20.7 L57.1 19.3
                 C58.4 18.8 59.8 19.5 60.3 20.8 L61.8 24.7
                 C62.3 26.0 61.6 27.4 60.3 27.9 L56.4 29.3
                 C56.8 31.0 57.0 32.5 57.0 34.2 C57.0 35.9 56.8 37.6 56.4 39.3
                 L60.3 40.7 C61.6 41.2 62.3 42.6 61.8 43.9 L60.3 47.8
                 C59.8 49.1 58.4 49.8 57.1 49.3 L53.2 47.9
                 C52.2 49.2 51.0 50.3 49.7 51.3 L51.1 55.2
                 C51.6 56.5 50.9 57.9 49.6 58.4 L45.7 59.9
                 C44.4 60.4 43.0 59.7 42.5 58.4 L41.1 54.5
                 C39.4 54.9 37.7 55.1 36 55.1 C34.3 55.1 32.6 54.9 30.9 54.5
                 L29.5 58.4 C29.0 59.7 27.6 60.4 26.3 59.9 L22.4 58.4
                 C21.1 57.9 20.4 56.5 20.9 55.2 L22.3 51.3
                 C21.0 50.3 19.8 49.2 18.8 47.9 L14.9 49.3
                 C13.6 49.8 12.2 49.1 11.7 47.8 L10.2 43.9
                 C9.7 42.6 10.4 41.2 11.7 40.7 L15.6 39.3
                 C15.2 37.6 15.0 35.9 15.0 34.2 C15.0 32.5 15.2 31.0 15.6 29.3
                 L11.7 27.9 C10.4 27.4 9.7 26.0 10.2 24.7 L11.7 20.8
                 C12.2 19.5 13.6 18.8 14.9 19.3 L18.8 20.7
                 C19.8 19.4 21.0 18.3 22.3 17.3 L20.9 13.4
                 C20.4 12.1 21.1 10.7 22.4 10.2 L26.3 8.7
                 C27.6 8.2 29.0 8.9 29.5 10.2 Z"
              fill="none" stroke="rgba(255,255,255,0.30)" stroke-width="1.8" stroke-linejoin="round" />
            <circle cx="36" cy="34" r="12" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.2" />
            <path d="M36 20 L47 25 L47 33 C47 40.5 42.2 47 36 49 C29.8 47 25 40.5 25 33 L25 25 Z"
              fill="rgba(245,186,66,0.18)" stroke="#f5ba42" stroke-width="2" stroke-linejoin="round" />
            <polyline points="29.5,34 33.5,39 42.5,28"
              fill="none" stroke="#ffffff" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="trustai-title">TrustAI</span>
        </div>
      </div>

      <!-- Upper-right: Robustness -->
      <article class="card card--robustness" id="card-robust" data-float="1">
        <header class="card__header card__header--secondary">
          <span class="card__title">Robustness</span>
        </header>
        <div class="card__body">
          <ul class="bullet-list">
            <li>Detect Drift</li>
            <li>Stress Testing</li>
          </ul>
          <p class="support-text">Enhance model reliability and stability.</p>
        </div>
      </article>

      <!-- Lower-left: Bias / Fairness -->
      <article class="card card--bias" id="card-bias" data-float="2">
        <header class="card__header card__header--bias">
          <span class="card__title">Bias / Fairness</span>
        </header>
        <div class="card__body">
          <ul class="bullet-list">
            <li>Segment Metrics</li>
            <li>Bias Mitigation</li>
          </ul>
          <p class="support-text">Promote equity by identifying and reducing bias.</p>
        </div>
      </article>

      <!-- Lower-right: Calibration -->
      <article class="card card--calibration" id="card-calib" data-float="3">
        <header class="card__header card__header--calibration">
          <span class="card__title">Calibration</span>
        </header>
        <div class="card__body">
          <ul class="bullet-list">
            <li>Calibrate (ECE – Brier)</li>
          </ul>
          <p class="support-text">Measure and reduce prediction uncertainty.</p>
        </div>
      </article>

    </div><!-- /grid-wrapper -->

    <!-- ③ Compliance panel -->
    <div class="compliance-panel" id="compliance-panel">
      <p class="compliance-title">Compliance &amp; Reporting</p>
    </div>

  </div>

  <script>
'use strict';

const titlePill       = document.getElementById('title-pill');
const trustaiModule   = document.getElementById('trustai-module');
const compliancePanel = document.getElementById('compliance-panel');
const cardExplain     = document.getElementById('card-explain');
const cardRobust      = document.getElementById('card-robust');
const cardBias        = document.getElementById('card-bias');
const cardCalib       = document.getElementById('card-calib');

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function applyHidden() {
  titlePill.classList.add('is-hidden');
  cardExplain.classList.add('is-hidden');
  cardRobust.classList.add('is-hidden');
  cardBias.classList.add('is-hidden');
  cardCalib.classList.add('is-hidden');
  trustaiModule.classList.add('is-hidden-center');
  compliancePanel.classList.add('is-hidden');
}

function startIdleAnimations() {
  trustaiModule.classList.add('idle-pulse');
  cardExplain.classList.add('idle-float-0');
  cardRobust.classList.add('idle-float-1');
  cardBias.classList.add('idle-float-2');
  cardCalib.classList.add('idle-float-3');
}

function runEntrance() {
  if (prefersReduced) {
    [titlePill, cardExplain, cardRobust, cardBias, cardCalib, trustaiModule, compliancePanel].forEach(el => {
      el.classList.remove('is-hidden', 'is-hidden-center');
      el.style.opacity = '1'; el.style.transform = 'none';
    });
    startIdleAnimations();
    return;
  }
  setTimeout(() => { titlePill.classList.remove('is-hidden'); titlePill.classList.add('anim-titleDrop'); }, 0);
  setTimeout(() => { cardExplain.classList.remove('is-hidden'); cardExplain.classList.add('anim-fadeRise'); }, 150);
  setTimeout(() => { cardRobust.classList.remove('is-hidden'); cardRobust.classList.add('anim-fadeRise'); }, 250);
  setTimeout(() => { cardBias.classList.remove('is-hidden'); cardBias.classList.add('anim-fadeRise'); }, 350);
  setTimeout(() => { cardCalib.classList.remove('is-hidden'); cardCalib.classList.add('anim-fadeRise'); }, 450);
  setTimeout(() => { trustaiModule.classList.remove('is-hidden-center'); trustaiModule.classList.add('anim-springIn'); }, 600);
  setTimeout(() => { compliancePanel.classList.remove('is-hidden'); compliancePanel.classList.add('anim-fadeRise'); }, 900);
  setTimeout(startIdleAnimations, 1300);
}

applyHidden();
document.fonts.ready.then(() => {
  requestAnimationFrame(() => requestAnimationFrame(runEntrance));
});
  <\/script>
</body>
</html>
`,xk={class:"page-shell gap-10"},Ak=["srcdoc"],Tk={class:"space-y-6"},Ik={class:"section-intro"},Ck={class:"section-label"},Pk={class:"section-title max-w-3xl"},Sk={class:"section-description"},Ok={class:"grid gap-5 md:grid-cols-2 xl:grid-cols-4"},Lk={class:"flex size-12 items-center justify-center rounded-[1.2rem] bg-secondary/14 text-primary"},Nk={class:"space-y-2"},Rk={class:"section-divider grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"},Mk={class:"space-y-5"},Dk={class:"section-label"},$k={class:"section-title max-w-3xl"},zk={class:"space-y-4 content-copy-lg"},Fk={class:"overflow-hidden"},Wk=["srcdoc"],Bk={class:"section-divider grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center"},Uk={class:"space-y-6"},jk={class:"section-intro"},Gk={class:"section-label"},Vk={class:"section-title"},Hk={class:"space-y-4"},qk={class:"flex items-start gap-4"},Kk={class:"mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary"},Yk={class:"space-y-2"},Xk={class:"content-subtitle"},Jk={class:"content-copy-lg"},Zk={class:"overflow-hidden"},Qk=["srcdoc"],ew={class:"section-divider space-y-6"},tw={class:"section-intro"},nw={class:"section-label"},rw={class:"section-title"},aw={class:"section-description"},iw={class:"divide-y divide-border rounded-[1.75rem] border border-border bg-white/40"},sw={class:"content-title leading-tight"},ow={class:"content-copy-lg"},lw=["href"],cw={__name:"Home",setup(e){const t=Or(),n=se(()=>va(t.params.locale)),r=(u,c)=>u.replace("</head>",`<style>${c}</style></head>`),a=r(kk.replace('src="logo.png"','src="/logo.png"'),`
    html,
    body {
      width: 100%;
      height: 100%;
      min-height: 0 !important;
      overflow: hidden !important;
      background: transparent !important;
    }

    body {
      padding: 0 !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .card-wrap {
      max-width: min(520px, 100%) !important;
    }

    .dash-card {
      background: transparent !important;
      border: 0 !important;
      opacity: 1 !important;
      transform: none !important;
      transition: box-shadow 0.3s ease !important;
      box-shadow: none !important;
    }
  `),i=r(wk,`
    html,
    body {
      width: 100%;
      height: 100%;
      min-height: 0 !important;
      overflow: hidden !important;
      background: transparent !important;
    }

    body {
      padding: 0 !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .trustai-diagram-embed,
    .trustai-diagram {
      max-width: 100% !important;
    }

    .trustai-diagram {
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
    }
  `),s=r(Ek,`
    html,
    body {
      width: 100%;
      height: 100%;
      min-height: 0 !important;
      overflow: hidden !important;
      background: transparent !important;
    }

    body {
      padding: 0 !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .diagram-box {
      background: transparent !important;
      border: 0 !important;
      max-width: min(440px, 100%) !important;
      box-shadow: none !important;
    }
  `),o=[{icon:Su,titleKey:"whatWeDo.explainability.title",descriptionKey:"whatWeDo.explainability.description"},{icon:Xm,titleKey:"whatWeDo.traceability.title",descriptionKey:"whatWeDo.traceability.description"},{icon:ns,titleKey:"whatWeDo.workflows.title",descriptionKey:"whatWeDo.workflows.description"},{icon:Ga,titleKey:"whatWeDo.audit.title",descriptionKey:"whatWeDo.audit.description"}],l=[{icon:ng,titleKey:"why.foundation.title",descriptionKey:"why.foundation.description"},{icon:Qm,titleKey:"why.sector.title",descriptionKey:"why.sector.description"},{icon:Ou,titleKey:"why.governance.title",descriptionKey:"why.governance.description"},{icon:Ga,titleKey:"why.audit.title",descriptionKey:"why.audit.description"}];return(u,c)=>{const d=Ds("RouterLink"),f=fa("reveal");return D(),J("div",xk,[Pe((D(),ee(Kn,{"aside-width":"32rem","aside-class":"hidden lg:block","aside-chrome":!1,compact:"","content-align":"center",label:u.$t("researchHero.label"),title:u.$t("researchHero.title"),description:u.$t("researchHero.description")},{actions:_(()=>[k(p(wt),{"as-child":"",size:"lg",class:"rounded-full shadow-sm"},{default:_(()=>[k(d,{to:{name:"research",params:{locale:n.value}}},{default:_(()=>[te(M(u.$t("researchHero.button"))+" ",1),k(p(Ar),{class:"size-4"})]),_:1},8,["to"])]),_:1})]),aside:_(()=>[I("iframe",{srcdoc:p(a),title:"TrustAI dashboard card",scrolling:"no",class:"block h-[21rem] w-full overflow-hidden border-0 bg-transparent"},null,8,Ak)]),_:1},8,["label","title","description"])),[[f]]),I("section",Tk,[Pe((D(),J("div",Ik,[I("p",Ck,M(u.$t("whatWeDo.label")),1),I("h2",Pk,M(u.$t("whatWeDo.title")),1),I("p",Sk,M(u.$t("homePage.servicesDescription")),1)])),[[f,{delay:40}]]),I("div",Ok,[(D(),J(_e,null,je(o,(m,A)=>Pe(k(p(Re),{key:m.titleKey,class:"content-card bg-card"},{default:_(()=>[k(p(De),{class:"gap-4"},{default:_(()=>[I("div",Lk,[(D(),ee(Fn(m.icon),{class:"size-5"}))]),I("div",Nk,[k(p($e),{class:"content-subtitle"},{default:_(()=>[te(M(u.$t(m.titleKey)),1)]),_:2},1024),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(u.$t(m.descriptionKey)),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024),[[f,{delay:80+A*60}]])),64))])]),I("section",Rk,[Pe((D(),J("div",Mk,[I("p",Dk,M(u.$t("about.label")),1),I("h2",$k,M(u.$t("about.title")),1),I("div",zk,[I("p",null,M(u.$t("about.intro")),1),I("p",null,M(u.$t("about.sectorFocus")),1),I("p",null,M(u.$t("about.approach")),1),I("p",null,M(u.$t("about.team")),1)])])),[[f,{delay:40}]]),Pe((D(),J("div",Fk,[I("iframe",{srcdoc:p(s),title:"TrustAI governance capabilities",loading:"lazy",scrolling:"no",class:"block h-[38rem] w-full overflow-hidden border-0 bg-transparent sm:h-[34rem]"},null,8,Wk)])),[[f,{delay:120}]])]),I("section",Bk,[I("div",Uk,[Pe((D(),J("div",jk,[I("p",Gk,M(u.$t("why.label")),1),I("h2",Vk,M(u.$t("why.title")),1)])),[[f,{delay:40}]]),I("div",Hk,[(D(),J(_e,null,je(l,(m,A)=>Pe(I("div",{key:m.titleKey,class:"border-b border-border pb-4 last:border-b-0 last:pb-0"},[I("div",qk,[I("div",Kk,[(D(),ee(Fn(m.icon),{class:"size-4"}))]),I("div",Yk,[I("h3",Xk,M(u.$t(m.titleKey)),1),I("p",Jk,M(u.$t(m.descriptionKey)),1)])])]),[[f,{delay:80+A*50}]])),64))])]),Pe((D(),J("div",Zk,[I("iframe",{srcdoc:p(i),title:"Why TrustAI",loading:"lazy",scrolling:"no",class:"block h-[24rem] w-full overflow-hidden border-0 bg-transparent sm:h-[30rem]"},null,8,Qk)])),[[f,{delay:130}]])]),I("section",ew,[Pe((D(),J("div",tw,[I("p",nw,M(u.$t("researchSection.title")),1),I("h2",rw,M(u.$t("researchSection.subtitle")),1),I("p",aw,M(u.$t("homePage.researchDescription")),1)])),[[f,{delay:40}]]),I("div",iw,[(D(!0),J(_e,null,je(p(xd),(m,A)=>Pe((D(),J("article",{key:m.titleKey,class:"space-y-4 px-6 py-6"},[I("h3",sw,M(u.$t(m.titleKey)),1),I("p",ow,M(u.$t(m.descriptionKey)),1),m.href?(D(),ee(p(wt),{key:0,"as-child":"",variant:"outline",class:"rounded-full"},{default:_(()=>[I("a",{href:m.href,target:"_blank",rel:"noreferrer"},[te(M(u.$t("researchSection.publicationBtn"))+" ",1),k(p(Ar),{class:"size-4"})],8,lw)]),_:2},1024)):(D(),ee(p(wt),{key:1,variant:"outline",class:"pointer-events-none rounded-full border-border/80 bg-white/45 text-muted-foreground",disabled:"","aria-disabled":"true"},{default:_(()=>[...c[0]||(c[0]=[te(" Preprint available soon ",-1)])]),_:1}))])),[[f,{delay:100+A*70}]])),128))])]),Pe((D(),ee(p(Re),{class:"content-card overflow-hidden bg-secondary/70"},{default:_(()=>[k(p(De),{class:"space-y-3"},{default:_(()=>[k(p($e),{class:"section-title"},{default:_(()=>[te(M(u.$t("cta.title")),1)]),_:1}),k(p(lt),{class:"section-description"},{default:_(()=>[te(M(u.$t("homePage.ctaDescription")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-6"})]),_:1})),[[f,{delay:120}]])])}}},uw=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},dw={};function fw(e,t){const n=Ds("router-view");return D(),ee(n)}const pw=uw(dw,[["render",fw]]),mw={__name:"Avatar",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),ee(p(Ry),{"data-slot":"avatar",class:Xe(p(ot)("relative flex size-8 shrink-0 overflow-hidden rounded-full",t.class))},{default:_(()=>[he(n.$slots,"default")]),_:3},8,["class"]))}},gw={__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=Tn(t,"class");return(r,a)=>(D(),ee(p(Dy),Ze({"data-slot":"avatar-fallback"},p(n),{class:p(ot)("bg-muted flex size-full items-center justify-center rounded-full",t.class)}),{default:_(()=>[he(r.$slots,"default")]),_:3},16,["class"]))}},hw={__name:"AvatarImage",props:{src:{type:String,required:!0},referrerPolicy:{type:null,required:!1},crossOrigin:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(D(),ee(p(Fy),Ze({"data-slot":"avatar-image"},t,{class:"aspect-square size-full"}),{default:_(()=>[he(n.$slots,"default")]),_:3},16))}},yw={class:"page-shell"},vw={href:"mailto:info@trustai.com.tr"},bw={class:"grid gap-4 lg:grid-cols-2"},_w={class:"content-chip bg-background/80"},kw={class:"content-chip bg-background/80"},ww={class:"content-chip bg-background/80"},Ew={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},xw={class:"space-y-3"},Aw={class:"space-y-2"},Tw={__name:"OurTeams",setup(e){return(t,n)=>(D(),J("div",yw,[k(Kn,{label:t.$t("ourTeamsPage.hero.label"),title:t.$t("ourTeamsPage.hero.title"),description:t.$t("ourTeamsPage.hero.subtitle")},{actions:_(()=>[k(p(wt),{"as-child":"",size:"lg",class:"rounded-full shadow-sm"},{default:_(()=>[I("a",vw,[te(M(t.$t("cta.contact"))+" ",1),k(p(Ar),{class:"size-4"})])]),_:1})]),_:1},8,["label","title","description"]),I("div",bw,[k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title flex items-center gap-2"},{default:_(()=>[k(p(eg),{class:"size-5"}),te(" "+M(t.$t("teamPage.structureTitle")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,M(t.$t("aboutPage.team.p1")),1),I("p",null,M(t.$t("aboutPage.team.p2")),1)]),_:1})]),_:1}),k(p(Re),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(t.$t("teamPage.howWeWorkTitle")),1)]),_:1}),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(t.$t("teamPage.howWeWorkDescription")),1)]),_:1})]),_:1}),k(p(tt),{class:"grid gap-3"},{default:_(()=>[I("div",_w,M(t.$t("teamPage.howWeWorkItems.academic")),1),I("div",kw,M(t.$t("teamPage.howWeWorkItems.engineering")),1),I("div",ww,M(t.$t("teamPage.howWeWorkItems.governance")),1)]),_:1})]),_:1})]),I("section",Ew,[(D(!0),J(_e,null,je(p(Yv),r=>(D(),ee(p(Re),{key:r.name,class:"content-card"},{default:_(()=>[k(p(De),{class:"items-start gap-4"},{default:_(()=>[k(p(mw),{class:"size-28 rounded-[1.75rem] border border-border/70 bg-secondary/55"},{default:_(()=>[k(p(hw),{src:r.image,alt:r.name,class:"object-cover",style:Un({objectPosition:r.imagePosition||"center center"})},null,8,["src","alt","style"]),k(p(gw),{class:"rounded-[1.75rem] bg-secondary text-primary"},{default:_(()=>[te(M(r.initials),1)]),_:2},1024)]),_:2},1024),I("div",xw,[k(p(of),{variant:"secondary",class:"rounded-full px-3 py-1"},{default:_(()=>[te(M(t.$t(r.roleKey)),1)]),_:2},1024),I("div",Aw,[k(p($e),{class:"content-subtitle"},{default:_(()=>[te(M(r.name),1)]),_:2},1024),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(t.$t(r.bioKey)),1)]),_:2},1024)])])]),_:2},1024)]),_:2},1024))),128))])]))}},Iw={class:"page-shell"},Cw={class:"space-y-3 content-copy-lg"},Pw={class:"content-subtitle"},Sw={class:"grid gap-3"},Ow={__name:"Privacy",setup(e){const{tm:t}=dr(),n=se(()=>{const r=t("privacyPage.noticeItems");return Array.isArray(r)?r:[]});return(r,a)=>(D(),J("div",Iw,[k(Kn,{label:r.$t("privacyPage.hero.label"),title:r.$t("privacyPage.hero.title")},null,8,["label","title"]),k(p(Re),{class:"content-card"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(r.$t("privacyPage.policyDetails")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-5"},{default:_(()=>[I("div",Cw,[I("p",Pw,M(r.$t("privacyPage.noticeTitle")),1),I("p",null,M(r.$t("privacyPage.noticeIntro")),1)]),I("ul",Sw,[(D(!0),J(_e,null,je(n.value,i=>(D(),J("li",{key:i,class:"content-chip bg-background/82"},M(i),1))),128))])]),_:1})]),_:1}),k(p(Re),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(r.$t("privacyPage.contactTitle")),1)]),_:1})]),_:1}),k(p(tt),{class:"content-copy flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"},{default:_(()=>[I("p",null,M(r.$t("privacyPage.contactDescription")),1),k(p(wt),{"as-child":"",class:"rounded-full shadow-sm"},{default:_(()=>[...a[0]||(a[0]=[I("a",{href:"mailto:info@trustai.com.tr"},"info@trustai.com.tr",-1)])]),_:1})]),_:1})]),_:1})]))}},Lw={class:"page-shell"},Nw={class:"space-y-6"},Rw={class:"grid items-start gap-4"},Mw={class:"space-y-2"},Dw={class:"section-label"},$w={class:"pt-2"},zw={class:"space-y-4"},Fw={class:"section-intro"},Ww={class:"section-label"},Bw={class:"grid gap-3"},Uw={class:"grid gap-5 sm:grid-cols-2"},jw={class:"space-y-4 rounded-[1.5rem] border border-border/70 bg-background/78 p-5"},Gw={class:"section-label"},Vw={class:"space-y-3"},Hw={class:"space-y-4 rounded-[1.5rem] border border-border/70 bg-background/78 p-5"},qw={class:"section-label"},Kw={class:"space-y-3"},Yw={class:"space-y-4 rounded-[1.5rem] border border-border/70 bg-secondary/55 p-5 sm:col-span-2"},Xw={class:"section-label"},Jw={class:"grid gap-3 md:grid-cols-2"},Zw={class:"section-label"},Qw={class:"grid gap-4 md:grid-cols-3"},eE={class:"content-copy"},tE={__name:"products",setup(e){const{tm:t}=dr(),n=ve(null),r=[{key:"trustaiX",icon:qm,accentClass:"bg-accent/16 text-primary",delay:120,revealClass:"reveal-slide-left"},{key:"trustaiUX",icon:Vm,accentClass:"bg-primary/10 text-primary",delay:200,revealClass:"reveal-slide-right"}],a=[Ga,rs,Hm];function i(o){const l=t(o);return Array.isArray(l)?l:[]}function s(o){n.value=n.value===o?null:o}return(o,l)=>{const u=fa("reveal");return D(),J("div",Lw,[Pe(k(Kn,{label:o.$t("productsPage.hero.label"),title:o.$t("productsPage.hero.title"),description:o.$t("productsPage.hero.subtitle")},null,8,["label","title","description"]),[[u]]),Pe((D(),J("section",Nw,[k(Sr,{label:o.$t("productsPage.overview.label"),title:o.$t("productsPage.overview.title"),description:o.$t("productsPage.overview.description")},null,8,["label","title","description"]),I("div",Rw,[(D(),J(_e,null,je(r,c=>Pe(k(p(Re),{key:c.key,class:Xe(["content-card hover-lift",c.revealClass])},{default:_(()=>[k(p(De),{class:"gap-4"},{default:_(()=>[I("div",{class:Xe(["flex size-12 items-center justify-center rounded-[1.1rem]",c.accentClass])},[(D(),ee(Fn(c.icon),{class:"size-5"}))],2),I("div",Mw,[I("p",Dw,M(o.$t(`productsPage.${c.key}.category`)),1),k(p($e),{class:"content-title"},{default:_(()=>[te(M(o.$t(`productsPage.${c.key}.name`)),1)]),_:2},1024),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(o.$t(`productsPage.${c.key}.overview`)),1)]),_:2},1024)]),I("div",$w,[k(p(wt),{variant:"outline",class:"group rounded-full border-border bg-background/78 text-primary hover:bg-white","aria-expanded":n.value===c.key,onClick:d=>s(c.key)},{default:_(()=>[te(M(n.value===c.key?o.$t("common.hideProductDetails"):o.$t("common.showProductDetails"))+" ",1),k(p(Ar),{class:Xe(["size-4 transition-transform duration-300",n.value===c.key?"rotate-90":"group-hover:translate-x-1"])},null,8,["class"])]),_:2},1032,["aria-expanded","onClick"])])]),_:2},1024),k(Iu,{name:"detail-panel"},{default:_(()=>[n.value===c.key?(D(),ee(p(tt),{key:0,class:"grid gap-5 border-t border-border/70 pt-6 lg:grid-cols-2"},{default:_(()=>[I("div",zw,[I("div",Fw,[I("p",Ww,M(o.$t(`productsPage.${c.key}.whatItDoesTitle`)),1)]),I("div",Bw,[(D(!0),J(_e,null,je(i(`productsPage.${c.key}.whatItDoes`),d=>(D(),J("div",{key:d,class:"content-chip bg-background/82"},M(d),1))),128))])]),I("div",Uw,[I("div",jw,[I("p",Gw,M(o.$t(`productsPage.${c.key}.featuresTitle`)),1),I("ul",Vw,[(D(!0),J(_e,null,je(i(`productsPage.${c.key}.features`),d=>(D(),J("li",{key:d,class:"content-copy"},M(d),1))),128))])]),I("div",Hw,[I("p",qw,M(o.$t(`productsPage.${c.key}.${c.key==="trustaiX"?"deploymentTitle":"compatibilityTitle"}`)),1),I("ul",Kw,[(D(!0),J(_e,null,je(i(`productsPage.${c.key}.${c.key==="trustaiX"?"deployment":"compatibility"}`),d=>(D(),J("li",{key:d,class:"content-copy"},M(d),1))),128))])]),I("div",Yw,[I("p",Xw,M(o.$t(`productsPage.${c.key}.valueTitle`)),1),I("div",Jw,[(D(!0),J(_e,null,je(i(`productsPage.${c.key}.value`),d=>(D(),J("div",{key:d,class:"content-chip bg-background/82"},M(d),1))),128))])])])]),_:2},1024)):Wt("",!0)]),_:2},1024)]),_:2},1032,["class"]),[[u,{delay:c.delay}]])),64))])])),[[u,{delay:120}]]),Pe((D(),ee(p(Re),{class:"content-card overflow-hidden bg-secondary/70"},{default:_(()=>[k(p(De),{class:"space-y-3"},{default:_(()=>[I("p",Zw,M(o.$t("productsPage.ecosystem.label")),1),k(p($e),{class:"section-title max-w-3xl"},{default:_(()=>[te(M(o.$t("productsPage.ecosystem.title")),1)]),_:1}),k(p(lt),{class:"section-description"},{default:_(()=>[te(M(o.$t("productsPage.ecosystem.description")),1)]),_:1})]),_:1}),k(p(tt),{class:"space-y-6"},{default:_(()=>[I("div",Qw,[(D(!0),J(_e,null,je(i("productsPage.ecosystem.items"),(c,d)=>Pe((D(),J("div",{key:c,class:"rounded-[1.5rem] border border-border/70 bg-background/82 p-5 hover-lift"},[(D(),ee(Fn(a[d]),{class:"mb-4 size-5 text-accent"})),I("p",eE,M(c),1)])),[[u,{delay:120*(d+1)}]])),128))])]),_:1})]),_:1})),[[u,{delay:300}]])])}}},nE={class:"page-shell"},rE={class:"space-y-6"},aE={class:"grid gap-4 lg:grid-cols-2"},iE={class:"flex items-center gap-2 text-primary"},sE={class:"text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"},oE={class:"space-y-3"},lE=["href"],cE={__name:"Research",setup(e){return Or(),(t,n)=>{const r=fa("reveal");return D(),J("div",nE,[Pe(k(Kn,{label:t.$t("researchReferences.label"),title:t.$t("researchReferences.title"),description:t.$t("researchReferences.description")},null,8,["label","title","description"]),[[r]]),Pe((D(),J("section",rE,[k(Sr,{title:t.$t("researchReferences.subtitle"),description:t.$t("researchPage.sectionDescription")},null,8,["title","description"]),I("div",aE,[(D(!0),J(_e,null,je(p(xd),a=>(D(),ee(p(Re),{key:a.title,class:"content-card"},{default:_(()=>[k(p(De),{class:"space-y-4"},{default:_(()=>[I("div",iE,[k(p(ig),{class:"size-4"}),I("span",sE,M(t.$t("researchPage.publicationLabel")),1)]),I("div",oE,[k(p($e),{class:"content-title leading-tight"},{default:_(()=>[te(M(t.$t(a.titleKey)),1)]),_:2},1024),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(t.$t(a.descriptionKey)),1)]),_:2},1024)])]),_:2},1024),k(p(tt),null,{default:_(()=>[a.href?(D(),ee(p(wt),{key:0,"as-child":"",variant:"outline",class:"rounded-full"},{default:_(()=>[I("a",{href:a.href,target:"_blank",rel:"noreferrer"},[k(p(Ym),{class:"size-4"}),te(" "+M(t.$t("researchSection.publicationBtn")),1)],8,lE)]),_:2},1024)):(D(),ee(p(wt),{key:1,variant:"outline",class:"pointer-events-none rounded-full border-border/80 bg-white/45 text-muted-foreground",disabled:"","aria-disabled":"true"},{default:_(()=>[...n[0]||(n[0]=[te(" Preprint available soon ",-1)])]),_:1}))]),_:2},1024)]),_:2},1024))),128))])])),[[r,{delay:120}]]),Pe((D(),ee(p(Re),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(De),null,{default:_(()=>[k(p($e),{class:"content-title"},{default:_(()=>[te(M(t.$t("researchPage.collaborateTitle")),1)]),_:1}),k(p(lt),{class:"section-description"},{default:_(()=>[te(M(t.$t("researchPage.collaborateDescription")),1)]),_:1})]),_:1})]),_:1})),[[r,{delay:200}]])])}}},uE={class:"page-shell"},dE={class:"space-y-6"},fE={class:"grid items-start gap-4"},pE={class:"space-y-2"},mE={class:"section-label"},gE={class:"pt-2"},hE={class:"space-y-4"},yE={class:"section-label"},vE={class:"grid gap-3"},bE={class:"grid gap-5"},_E={class:"rounded-[1.5rem] border border-border/70 bg-background/78 p-5"},kE={class:"section-label"},wE={class:"mt-4 space-y-3"},EE={class:"rounded-[1.5rem] border border-border/70 bg-secondary/55 p-5"},xE={class:"section-label"},AE={class:"mt-4 grid gap-3"},TE={class:"space-y-6"},IE={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-5"},CE={class:"flex size-12 items-center justify-center rounded-[1.1rem] bg-accent/16 text-primary"},PE={class:"space-y-2"},SE={class:"section-label"},OE={class:"section-label"},LE={__name:"services",setup(e){const{tm:t}=dr(),n=ve(null),r=[{key:"framework",icon:rs,accentClass:"bg-accent/16 text-primary",delay:120},{key:"assurance",icon:rg,accentClass:"bg-primary/10 text-primary",delay:200}],a=[ns,ag,rs,Ar,ns];function i(o){const l=t(o);return Array.isArray(l)?l:[]}function s(o){n.value=n.value===o?null:o}return(o,l)=>{const u=fa("reveal");return D(),J("div",uE,[Pe(k(Kn,{label:o.$t("servicesPage.hero.label"),title:o.$t("servicesPage.hero.title"),description:o.$t("servicesPage.hero.subtitle")},null,8,["label","title","description"]),[[u]]),Pe((D(),J("section",dE,[k(Sr,{label:o.$t("servicesPage.overview.label"),title:o.$t("servicesPage.overview.title"),description:o.$t("servicesPage.overview.description")},null,8,["label","title","description"]),I("div",fE,[(D(),J(_e,null,je(r,c=>Pe(k(p(Re),{key:c.key,class:Xe(["content-card hover-lift"])},{default:_(()=>[k(p(De),{class:"gap-4"},{default:_(()=>[I("div",{class:Xe(["flex size-12 items-center justify-center rounded-[1.1rem]",c.accentClass])},[(D(),ee(Fn(c.icon),{class:"size-5"}))],2),I("div",pE,[I("p",mE,M(o.$t(`servicesPage.${c.key}.category`)),1),k(p($e),{class:"content-title"},{default:_(()=>[te(M(o.$t(`servicesPage.${c.key}.name`)),1)]),_:2},1024),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(o.$t(`servicesPage.${c.key}.overview`)),1)]),_:2},1024)]),I("div",gE,[k(p(wt),{variant:"outline",class:"group rounded-full border-border bg-background/78 text-primary hover:bg-white","aria-expanded":n.value===c.key,onClick:d=>s(c.key)},{default:_(()=>[te(M(n.value===c.key?o.$t("common.hideServiceDetails"):o.$t("common.showServiceDetails"))+" ",1),k(p(Ar),{class:Xe(["size-4 transition-transform duration-300",n.value===c.key?"rotate-90":"group-hover:translate-x-1"])},null,8,["class"])]),_:2},1032,["aria-expanded","onClick"])])]),_:2},1024),k(Iu,{name:"detail-panel"},{default:_(()=>[n.value===c.key?(D(),ee(p(tt),{key:0,class:"grid gap-5 border-t border-border/70 pt-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"},{default:_(()=>[I("div",hE,[I("p",yE,M(o.$t(`servicesPage.${c.key}.whatWeDoTitle`)),1),I("div",vE,[(D(!0),J(_e,null,je(i(`servicesPage.${c.key}.whatWeDo`),d=>(D(),J("div",{key:d,class:"content-chip bg-background/82"},M(d),1))),128))])]),I("div",bE,[I("div",_E,[I("p",kE,M(o.$t(`servicesPage.${c.key}.${c.key==="framework"?"deliverablesTitle":"capabilitiesTitle"}`)),1),I("ul",wE,[(D(!0),J(_e,null,je(i(`servicesPage.${c.key}.${c.key==="framework"?"deliverables":"capabilities"}`),d=>(D(),J("li",{key:d,class:"content-copy"},M(d),1))),128))])]),I("div",EE,[I("p",xE,M(o.$t(`servicesPage.${c.key}.valueTitle`)),1),I("div",AE,[(D(!0),J(_e,null,je(i(`servicesPage.${c.key}.value`),d=>(D(),J("div",{key:d,class:"content-chip bg-background/82"},M(d),1))),128))])])])]),_:2},1024)):Wt("",!0)]),_:2},1024)]),_:2},1024),[[u,{delay:c.delay}]])),64))])])),[[u,{delay:120}]]),Pe((D(),J("section",TE,[k(Sr,{label:o.$t("servicesPage.process.label"),title:o.$t("servicesPage.process.title"),description:o.$t("servicesPage.process.description")},null,8,["label","title","description"]),I("div",IE,[(D(!0),J(_e,null,je(i("servicesPage.process.steps"),(c,d)=>Pe((D(),ee(p(Re),{key:c.title,class:"content-card hover-lift"},{default:_(()=>[k(p(De),{class:"gap-4"},{default:_(()=>[I("div",CE,[(D(),ee(Fn(a[d]),{class:"size-5"}))]),I("div",PE,[I("p",SE,"0"+M(d+1),1),k(p($e),{class:"content-subtitle"},{default:_(()=>[te(M(c.title),1)]),_:2},1024),k(p(lt),{class:"content-copy"},{default:_(()=>[te(M(c.description),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024)),[[u,{delay:120*(d+1)}]])),128))])])),[[u,{delay:200}]]),Pe((D(),ee(p(Re),{class:"content-card overflow-hidden bg-secondary/70"},{default:_(()=>[k(p(De),{class:"space-y-3"},{default:_(()=>[I("p",OE,M(o.$t("servicesPage.hero.label")),1),k(p($e),{class:"section-title max-w-3xl"},{default:_(()=>[te(M(o.$t("servicesPage.cta.title")),1)]),_:1}),k(p(lt),{class:"section-description"},{default:_(()=>[te(M(o.$t("cta.description")),1)]),_:1})]),_:1})]),_:1})),[[u,{delay:300}]])])}}},NE=[{path:"/:locale(en|tr)",component:pw,children:[{path:"",name:"home",component:cw},{path:"about",name:"about",component:ik},{path:"governance",name:"governance",component:_k},{path:"research",name:"research",component:cE},{path:"services",name:"services",component:LE},{path:"products",name:"products",component:tE},{path:"privacy",name:"privacy",component:Ow},{path:"team",name:"team",component:Tw},{path:"aboutUs",redirect:e=>({name:"about",params:e.params})},{path:"ai-governance",redirect:e=>({name:"governance",params:e.params})},{path:"our-teams",redirect:e=>({name:"team",params:e.params})}]},{path:"/",redirect:()=>`/${fs()}`},{path:"/:pathMatch(.*)*",redirect:()=>`/${fs()}`}],lf=fh({history:Vg(),routes:NE,scrollBehavior(){return{top:0}}});lf.beforeEach(e=>{const t=e.params.locale;if(!t)return`/${fs()}`;if(!Ed.includes(t))return"/en";const n=va(t);return sf.global.locale.value=n,localStorage.setItem("locale",n),!0});function cf(e){return typeof e=="number"?e:e&&typeof e=="object"&&typeof e.delay=="number"?e.delay:0}function RE(e,t){const n=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(e.classList.add("is-visible"),n.unobserve(i.target))})},{threshold:.08,rootMargin:"0px 0px -10% 0px"}),r=cf(t.value);e.classList.add("reveal-on-scroll"),r>0&&e.style.setProperty("--reveal-delay",`${r}ms`),n.observe(e),e.__revealObserver=n}const ME={mounted(e,t){RE(e,t)},updated(e,t){const n=cf(t.value);n>0?e.style.setProperty("--reveal-delay",`${n}ms`):e.style.removeProperty("--reveal-delay")},unmounted(e){e.__revealObserver?.disconnect(),delete e.__revealObserver}},uf=$m(Ob);uf.directive("reveal",ME);uf.use(sf).use(lf).mount("#app");
