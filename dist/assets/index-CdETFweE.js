(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function os(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Fe={},fr=[],Zt=()=>{},jl=()=>!1,Fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ls=e=>e.startsWith("onUpdate:"),pt=Object.assign,cs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Dd=Object.prototype.hasOwnProperty,Oe=(e,t)=>Dd.call(e,t),ce=Array.isArray,pr=e=>Zr(e)==="[object Map]",Gl=e=>Zr(e)==="[object Set]",Ys=e=>Zr(e)==="[object Date]",de=e=>typeof e=="function",Ye=e=>typeof e=="string",jt=e=>typeof e=="symbol",Ne=e=>e!==null&&typeof e=="object",Vl=e=>(Ne(e)||de(e))&&de(e.then)&&de(e.catch),Hl=Object.prototype.toString,Zr=e=>Hl.call(e),zd=e=>Zr(e).slice(8,-1),ql=e=>Zr(e)==="[object Object]",Wa=e=>Ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Rr=os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Fd=/-\w/g,Pt=Ua(e=>e.replace(Fd,t=>t.slice(1).toUpperCase())),Wd=/\B([A-Z])/g,Mn=Ua(e=>e.replace(Wd,"-$1").toLowerCase()),Ba=Ua(e=>e.charAt(0).toUpperCase()+e.slice(1)),va=Ua(e=>e?`on${Ba(e)}`:""),On=(e,t)=>!Object.is(e,t),ai=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Kl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ud=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xs;const ja=()=>Xs||(Xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nr(e){if(ce(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Ye(r)?Vd(r):nr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(Ye(e)||Ne(e))return e}const Bd=/;(?![^(]*\))/g,jd=/:([^]+)/,Gd=/\/\*[^]*?\*\//g;function Vd(e){const t={};return e.replace(Gd,"").split(Bd).forEach(n=>{if(n){const r=n.split(jd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ge(e){let t="";if(Ye(e))t=e;else if(ce(e))for(let n=0;n<e.length;n++){const r=Ge(e[n]);r&&(t+=r+" ")}else if(Ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Ga(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ye(t)&&(e.class=Ge(t)),n&&(e.style=nr(n)),e}const Hd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qd=os(Hd);function Yl(e){return!!e||e===""}function Kd(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=us(e[r],t[r]);return n}function us(e,t){if(e===t)return!0;let n=Ys(e),r=Ys(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=jt(e),r=jt(t),n||r)return e===t;if(n=ce(e),r=ce(t),n||r)return n&&r?Kd(e,t):!1;if(n=Ne(e),r=Ne(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const s in e){const l=e.hasOwnProperty(s),o=t.hasOwnProperty(s);if(l&&!o||!l&&o||!us(e[s],t[s]))return!1}}return String(e)===String(t)}const Xl=e=>!!(e&&e.__v_isRef===!0),O=e=>Ye(e)?e:e==null?"":ce(e)||Ne(e)&&(e.toString===Hl||!de(e.toString))?Xl(e)?O(e.value):JSON.stringify(e,Jl,2):String(e),Jl=(e,t)=>Xl(t)?Jl(e,t.value):pr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a],i)=>(n[ii(r,i)+" =>"]=a,n),{})}:Gl(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ii(n))}:jt(t)?ii(t):Ne(t)&&!ce(t)&&!ql(t)?String(t):t,ii=(e,t="")=>{var n;return jt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let yt;class Zl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=yt,!t&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=yt;try{return yt=this,t()}finally{yt=n}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function ds(e){return new Zl(e)}function Ql(){return yt}function Yd(e,t=!1){yt&&yt.cleanups.push(e)}let We;const si=new WeakSet;class ec{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,si.has(this)&&(si.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Js(this),rc(this);const t=We,n=Ut;We=this,Ut=!0;try{return this.fn()}finally{ac(this),We=t,Ut=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ms(t);this.deps=this.depsTail=void 0,Js(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?si.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pi(this)&&this.run()}get dirty(){return Pi(this)}}let tc=0,Nr,Mr;function nc(e,t=!1){if(e.flags|=8,t){e.next=Mr,Mr=e;return}e.next=Nr,Nr=e}function fs(){tc++}function ps(){if(--tc>0)return;if(Mr){let t=Mr;for(Mr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Nr;){let t=Nr;for(Nr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function rc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ac(e){let t,n=e.depsTail,r=n;for(;r;){const a=r.prevDep;r.version===-1?(r===n&&(n=a),ms(r),Xd(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=a}e.deps=t,e.depsTail=n}function Pi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ic(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ic(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ur)||(e.globalVersion=Ur,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Pi(e))))return;e.flags|=2;const t=e.dep,n=We,r=Ut;We=e,Ut=!0;try{rc(e);const a=e.fn(e._value);(t.version===0||On(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{We=n,Ut=r,ac(e),e.flags&=-3}}function ms(e,t=!1){const{dep:n,prevSub:r,nextSub:a}=e;if(r&&(r.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ms(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xd(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ut=!0;const sc=[];function yn(){sc.push(Ut),Ut=!1}function bn(){const e=sc.pop();Ut=e===void 0?!0:e}function Js(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=We;We=void 0;try{t()}finally{We=n}}}let Ur=0;class Jd{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!We||!Ut||We===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==We)n=this.activeLink=new Jd(We,this),We.deps?(n.prevDep=We.depsTail,We.depsTail.nextDep=n,We.depsTail=n):We.deps=We.depsTail=n,oc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=We.depsTail,n.nextDep=void 0,We.depsTail.nextDep=n,We.depsTail=n,We.deps===n&&(We.deps=r)}return n}trigger(t){this.version++,Ur++,this.notify(t)}notify(t){fs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ps()}}}function oc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)oc(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ea=new WeakMap,Qn=Symbol(""),Si=Symbol(""),Br=Symbol("");function bt(e,t,n){if(Ut&&We){let r=Ea.get(e);r||Ea.set(e,r=new Map);let a=r.get(n);a||(r.set(n,a=new gs),a.map=r,a.key=n),a.track()}}function mn(e,t,n,r,a,i){const s=Ea.get(e);if(!s){Ur++;return}const l=o=>{o&&o.trigger()};if(fs(),t==="clear")s.forEach(l);else{const o=ce(e),c=o&&Wa(n);if(o&&n==="length"){const u=Number(r);s.forEach((d,f)=>{(f==="length"||f===Br||!jt(f)&&f>=u)&&l(d)})}else switch((n!==void 0||s.has(void 0))&&l(s.get(n)),c&&l(s.get(Br)),t){case"add":o?c&&l(s.get("length")):(l(s.get(Qn)),pr(e)&&l(s.get(Si)));break;case"delete":o||(l(s.get(Qn)),pr(e)&&l(s.get(Si)));break;case"set":pr(e)&&l(s.get(Qn));break}}ps()}function Zd(e,t){const n=Ea.get(e);return n&&n.get(t)}function sr(e){const t=Te(e);return t===e?t:(bt(t,"iterate",Br),Rt(e)?t:t.map(Gt))}function Va(e){return bt(e=Te(e),"iterate",Br),e}function Cn(e,t){return vn(e)?br(er(e)?Gt(t):t):Gt(t)}const Qd={__proto__:null,[Symbol.iterator](){return oi(this,Symbol.iterator,e=>Cn(this,e))},concat(...e){return sr(this).concat(...e.map(t=>ce(t)?sr(t):t))},entries(){return oi(this,"entries",e=>(e[1]=Cn(this,e[1]),e))},every(e,t){return on(this,"every",e,t,void 0,arguments)},filter(e,t){return on(this,"filter",e,t,n=>n.map(r=>Cn(this,r)),arguments)},find(e,t){return on(this,"find",e,t,n=>Cn(this,n),arguments)},findIndex(e,t){return on(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return on(this,"findLast",e,t,n=>Cn(this,n),arguments)},findLastIndex(e,t){return on(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return on(this,"forEach",e,t,void 0,arguments)},includes(...e){return li(this,"includes",e)},indexOf(...e){return li(this,"indexOf",e)},join(e){return sr(this).join(e)},lastIndexOf(...e){return li(this,"lastIndexOf",e)},map(e,t){return on(this,"map",e,t,void 0,arguments)},pop(){return Ar(this,"pop")},push(...e){return Ar(this,"push",e)},reduce(e,...t){return Zs(this,"reduce",e,t)},reduceRight(e,...t){return Zs(this,"reduceRight",e,t)},shift(){return Ar(this,"shift")},some(e,t){return on(this,"some",e,t,void 0,arguments)},splice(...e){return Ar(this,"splice",e)},toReversed(){return sr(this).toReversed()},toSorted(e){return sr(this).toSorted(e)},toSpliced(...e){return sr(this).toSpliced(...e)},unshift(...e){return Ar(this,"unshift",e)},values(){return oi(this,"values",e=>Cn(this,e))}};function oi(e,t,n){const r=Va(e),a=r[t]();return r!==e&&!Rt(e)&&(a._next=a.next,a.next=()=>{const i=a._next();return i.done||(i.value=n(i.value)),i}),a}const ef=Array.prototype;function on(e,t,n,r,a,i){const s=Va(e),l=s!==e&&!Rt(e),o=s[t];if(o!==ef[t]){const d=o.apply(e,i);return l?Gt(d):d}let c=n;s!==e&&(l?c=function(d,f){return n.call(this,Cn(e,d),f,e)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,e)}));const u=o.call(s,c,r);return l&&a?a(u):u}function Zs(e,t,n,r){const a=Va(e);let i=n;return a!==e&&(Rt(e)?n.length>3&&(i=function(s,l,o){return n.call(this,s,l,o,e)}):i=function(s,l,o){return n.call(this,s,Cn(e,l),o,e)}),a[t](i,...r)}function li(e,t,n){const r=Te(e);bt(r,"iterate",Br);const a=r[t](...n);return(a===-1||a===!1)&&Ha(n[0])?(n[0]=Te(n[0]),r[t](...n)):a}function Ar(e,t,n=[]){yn(),fs();const r=Te(e)[t].apply(e,n);return ps(),bn(),r}const tf=os("__proto__,__v_isRef,__isVue"),lc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jt));function nf(e){jt(e)||(e=String(e));const t=Te(this);return bt(t,"has",e),t.hasOwnProperty(e)}class cc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?pf:pc:i?fc:dc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=ce(t);if(!a){let o;if(s&&(o=Qd[n]))return o;if(n==="hasOwnProperty")return nf}const l=Reflect.get(t,n,Ke(t)?t:r);if((jt(n)?lc.has(n):tf(n))||(a||bt(t,"get",n),i))return l;if(Ke(l)){const o=s&&Wa(n)?l:l.value;return a&&Ne(o)?Li(o):o}return Ne(l)?a?Li(l):Ln(l):l}}class uc extends cc{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];const s=ce(t)&&Wa(n);if(!this._isShallow){const c=vn(i);if(!Rt(r)&&!vn(r)&&(i=Te(i),r=Te(r)),!s&&Ke(i)&&!Ke(r))return c||(i.value=r),!0}const l=s?Number(n)<t.length:Oe(t,n),o=Reflect.set(t,n,r,Ke(t)?t:a);return t===Te(a)&&(l?On(r,i)&&mn(t,"set",n,r):mn(t,"add",n,r)),o}deleteProperty(t,n){const r=Oe(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&mn(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!jt(n)||!lc.has(n))&&bt(t,"has",n),r}ownKeys(t){return bt(t,"iterate",ce(t)?"length":Qn),Reflect.ownKeys(t)}}class rf extends cc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const af=new uc,sf=new rf,of=new uc(!0);const Oi=e=>e,la=e=>Reflect.getPrototypeOf(e);function lf(e,t,n){return function(...r){const a=this.__v_raw,i=Te(a),s=pr(i),l=e==="entries"||e===Symbol.iterator&&s,o=e==="keys"&&s,c=a[e](...r),u=n?Oi:t?br:Gt;return!t&&bt(i,"iterate",o?Si:Qn),pt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:l?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function ca(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function cf(e,t){const n={get(a){const i=this.__v_raw,s=Te(i),l=Te(a);e||(On(a,l)&&bt(s,"get",a),bt(s,"get",l));const{has:o}=la(s),c=t?Oi:e?br:Gt;if(o.call(s,a))return c(i.get(a));if(o.call(s,l))return c(i.get(l));i!==s&&i.get(a)},get size(){const a=this.__v_raw;return!e&&bt(Te(a),"iterate",Qn),a.size},has(a){const i=this.__v_raw,s=Te(i),l=Te(a);return e||(On(a,l)&&bt(s,"has",a),bt(s,"has",l)),a===l?i.has(a):i.has(a)||i.has(l)},forEach(a,i){const s=this,l=s.__v_raw,o=Te(l),c=t?Oi:e?br:Gt;return!e&&bt(o,"iterate",Qn),l.forEach((u,d)=>a.call(i,c(u),c(d),s))}};return pt(n,e?{add:ca("add"),set:ca("set"),delete:ca("delete"),clear:ca("clear")}:{add(a){!t&&!Rt(a)&&!vn(a)&&(a=Te(a));const i=Te(this);return la(i).has.call(i,a)||(i.add(a),mn(i,"add",a,a)),this},set(a,i){!t&&!Rt(i)&&!vn(i)&&(i=Te(i));const s=Te(this),{has:l,get:o}=la(s);let c=l.call(s,a);c||(a=Te(a),c=l.call(s,a));const u=o.call(s,a);return s.set(a,i),c?On(i,u)&&mn(s,"set",a,i):mn(s,"add",a,i),this},delete(a){const i=Te(this),{has:s,get:l}=la(i);let o=s.call(i,a);o||(a=Te(a),o=s.call(i,a)),l&&l.call(i,a);const c=i.delete(a);return o&&mn(i,"delete",a,void 0),c},clear(){const a=Te(this),i=a.size!==0,s=a.clear();return i&&mn(a,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=lf(a,e,t)}),n}function hs(e,t){const n=cf(e,t);return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Oe(n,a)&&a in r?n:r,a,i)}const uf={get:hs(!1,!1)},df={get:hs(!1,!0)},ff={get:hs(!0,!1)};const dc=new WeakMap,fc=new WeakMap,pc=new WeakMap,pf=new WeakMap;function mf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gf(e){return e.__v_skip||!Object.isExtensible(e)?0:mf(zd(e))}function Ln(e){return vn(e)?e:ys(e,!1,af,uf,dc)}function mc(e){return ys(e,!1,of,df,fc)}function Li(e){return ys(e,!0,sf,ff,pc)}function ys(e,t,n,r,a){if(!Ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=gf(e);if(i===0)return e;const s=a.get(e);if(s)return s;const l=new Proxy(e,i===2?r:n);return a.set(e,l),l}function er(e){return vn(e)?er(e.__v_raw):!!(e&&e.__v_isReactive)}function vn(e){return!!(e&&e.__v_isReadonly)}function Rt(e){return!!(e&&e.__v_isShallow)}function Ha(e){return e?!!e.__v_raw:!1}function Te(e){const t=e&&e.__v_raw;return t?Te(t):e}function gc(e){return!Oe(e,"__v_skip")&&Object.isExtensible(e)&&Kl(e,"__v_skip",!0),e}const Gt=e=>Ne(e)?Ln(e):e,br=e=>Ne(e)?Li(e):e;function Ke(e){return e?e.__v_isRef===!0:!1}function he(e){return hc(e,!1)}function Qr(e){return hc(e,!0)}function hc(e,t){return Ke(e)?e:new hf(e,t)}class hf{constructor(t,n){this.dep=new gs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Te(t),this._value=n?t:Gt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Rt(t)||vn(t);t=r?t:Te(t),On(t,n)&&(this._rawValue=t,this._value=r?t:Gt(t),this.dep.trigger())}}function yf(e){e.dep&&e.dep.trigger()}function p(e){return Ke(e)?e.value:e}function Bt(e){return de(e)?e():p(e)}const bf={get:(e,t,n)=>t==="__v_raw"?e:p(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Ke(a)&&!Ke(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function yc(e){return er(e)?e:new Proxy(e,bf)}function Rn(e){const t=ce(e)?new Array(e.length):{};for(const n in e)t[n]=bc(e,n);return t}class vf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=Te(t);let a=!0,i=t;if(!ce(t)||!Wa(String(n)))do a=!Ha(i)||Rt(i);while(a&&(i=i.__v_raw));this._shallow=a}get value(){let t=this._object[this._key];return this._shallow&&(t=p(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Ke(this._raw[this._key])){const n=this._object[this._key];if(Ke(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return Zd(this._raw,this._key)}}class _f{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function kf(e,t,n){return Ke(e)?e:de(e)?new _f(e):Ne(e)&&arguments.length>1?bc(e,t,n):he(e)}function bc(e,t,n){return new vf(e,t,n)}class wf{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new gs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&We!==this)return nc(this,!0),!0}get value(){const t=this.dep.track();return ic(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function xf(e,t,n=!1){let r,a;return de(e)?r=e:(r=e.get,a=e.set),new wf(r,a,n)}const ua={},Aa=new WeakMap;let Xn;function Ef(e,t=!1,n=Xn){if(n){let r=Aa.get(n);r||Aa.set(n,r=[]),r.push(e)}}function Af(e,t,n=Fe){const{immediate:r,deep:a,once:i,scheduler:s,augmentJob:l,call:o}=n,c=x=>a?x:Rt(x)||a===!1||a===0?gn(x,1):gn(x);let u,d,f,g,A=!1,E=!1;if(Ke(e)?(d=()=>e.value,A=Rt(e)):er(e)?(d=()=>c(e),A=!0):ce(e)?(E=!0,A=e.some(x=>er(x)||Rt(x)),d=()=>e.map(x=>{if(Ke(x))return x.value;if(er(x))return c(x);if(de(x))return o?o(x,2):x()})):de(e)?t?d=o?()=>o(e,2):e:d=()=>{if(f){yn();try{f()}finally{bn()}}const x=Xn;Xn=u;try{return o?o(e,3,[g]):e(g)}finally{Xn=x}}:d=Zt,t&&a){const x=d,D=a===!0?1/0:a;d=()=>gn(x(),D)}const T=Ql(),C=()=>{u.stop(),T&&T.active&&cs(T.effects,u)};if(i&&t){const x=t;t=(...D)=>{x(...D),C()}}let R=E?new Array(e.length).fill(ua):ua;const w=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const D=u.run();if(a||A||(E?D.some((M,j)=>On(M,R[j])):On(D,R))){f&&f();const M=Xn;Xn=u;try{const j=[D,R===ua?void 0:E&&R[0]===ua?[]:R,g];R=D,o?o(t,3,j):t(...j)}finally{Xn=M}}}else u.run()};return l&&l(w),u=new ec(d),u.scheduler=s?()=>s(w,!1):w,g=x=>Ef(x,!1,u),f=u.onStop=()=>{const x=Aa.get(u);if(x){if(o)o(x,4);else for(const D of x)D();Aa.delete(u)}},t?r?w(!0):R=u.run():s?s(w.bind(null,!0),!0):u.run(),C.pause=u.pause.bind(u),C.resume=u.resume.bind(u),C.stop=C,C}function gn(e,t=1/0,n){if(t<=0||!Ne(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ke(e))gn(e.value,t,n);else if(ce(e))for(let r=0;r<e.length;r++)gn(e[r],t,n);else if(Gl(e)||pr(e))e.forEach(r=>{gn(r,t,n)});else if(ql(e)){for(const r in e)gn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&gn(e[r],t,n)}return e}function ea(e,t,n,r){try{return r?e(...r):e()}catch(a){qa(a,t,n)}}function nn(e,t,n,r){if(de(e)){const a=ea(e,t,n,r);return a&&Vl(a)&&a.catch(i=>{qa(i,t,n)}),a}if(ce(e)){const a=[];for(let i=0;i<e.length;i++)a.push(nn(e[i],t,n,r));return a}}function qa(e,t,n,r=!0){const a=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||Fe;if(t){let l=t.parent;const o=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,c)===!1)return}l=l.parent}if(i){yn(),ea(i,null,10,[e,o,c]),bn();return}}If(e,n,a,r,s)}function If(e,t,n,r=!0,a=!1){if(a)throw e;console.error(e)}const It=[];let Kt=-1;const mr=[];let Pn=null,lr=0;const vc=Promise.resolve();let Ia=null;function rn(e){const t=Ia||vc;return e?t.then(this?e.bind(this):e):t}function Tf(e){let t=Kt+1,n=It.length;for(;t<n;){const r=t+n>>>1,a=It[r],i=jr(a);i<e||i===e&&a.flags&2?t=r+1:n=r}return t}function bs(e){if(!(e.flags&1)){const t=jr(e),n=It[It.length-1];!n||!(e.flags&2)&&t>=jr(n)?It.push(e):It.splice(Tf(t),0,e),e.flags|=1,_c()}}function _c(){Ia||(Ia=vc.then(wc))}function Cf(e){ce(e)?mr.push(...e):Pn&&e.id===-1?Pn.splice(lr+1,0,e):e.flags&1||(mr.push(e),e.flags|=1),_c()}function Qs(e,t,n=Kt+1){for(;n<It.length;n++){const r=It[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;It.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function kc(e){if(mr.length){const t=[...new Set(mr)].sort((n,r)=>jr(n)-jr(r));if(mr.length=0,Pn){Pn.push(...t);return}for(Pn=t,lr=0;lr<Pn.length;lr++){const n=Pn[lr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pn=null,lr=0}}const jr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wc(e){try{for(Kt=0;Kt<It.length;Kt++){const t=It[Kt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ea(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Kt<It.length;Kt++){const t=It[Kt];t&&(t.flags&=-2)}Kt=-1,It.length=0,kc(),Ia=null,(It.length||mr.length)&&wc()}}let dt=null,xc=null;function Ta(e){const t=dt;return dt=e,xc=e&&e.type.__scopeId||null,t}function _(e,t=dt,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Sa(-1);const i=Ta(t);let s;try{s=e(...a)}finally{Ta(i),r._d&&Sa(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Ae(e,t){if(dt===null)return e;const n=Xa(dt),r=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[i,s,l,o=Fe]=t[a];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&gn(s),r.push({dir:i,instance:n,value:s,oldValue:void 0,arg:l,modifiers:o}))}return e}function Vn(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const l=a[s];i&&(l.oldValue=i[s].value);let o=l.dir[r];o&&(yn(),nn(o,n,8,[e.el,l,e,t]),bn())}}function gr(e,t){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[e]=t}}function Nt(e,t,n=!1){const r=St();if(r||yr){let a=yr?yr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return n&&de(t)?t.call(r&&r.proxy):t}}const Pf=Symbol.for("v-scx"),Sf=()=>Nt(Pf);function _n(e,t){return vs(e,null,t)}function ot(e,t,n){return vs(e,t,n)}function vs(e,t,n=Fe){const{immediate:r,deep:a,flush:i,once:s}=n,l=pt({},n),o=t&&r||!t&&i!=="post";let c;if(Hr){if(i==="sync"){const g=Sf();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!o){const g=()=>{};return g.stop=Zt,g.resume=Zt,g.pause=Zt,g}}const u=vt;l.call=(g,A,E)=>nn(g,u,A,E);let d=!1;i==="post"?l.scheduler=g=>{ht(g,u&&u.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(g,A)=>{A?g():bs(g)}),l.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const f=Af(e,t,l);return Hr&&(c?c.push(f):o&&f()),f}function Of(e,t,n){const r=this.proxy,a=Ye(e)?e.includes(".")?Ec(r,e):()=>r[e]:e.bind(r,r);let i;de(t)?i=t:(i=t.handler,n=t);const s=aa(this),l=vs(a,i.bind(r),n);return s(),l}function Ec(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}const Ac=Symbol("_vte"),Lf=e=>e.__isTeleport,$r=e=>e&&(e.disabled||e.disabled===""),eo=e=>e&&(e.defer||e.defer===""),to=e=>typeof SVGElement<"u"&&e instanceof SVGElement,no=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ri=(e,t)=>{const n=e&&e.to;return Ye(n)?t?t(n):null:n},Ic={name:"Teleport",__isTeleport:!0,process(e,t,n,r,a,i,s,l,o,c){const{mc:u,pc:d,pbc:f,o:{insert:g,querySelector:A,createText:E,createComment:T}}=c,C=$r(t.props);let{shapeFlag:R,children:w,dynamicChildren:x}=t;if(e==null){const D=t.el=E(""),M=t.anchor=E("");g(D,n,r),g(M,n,r);const j=(B,be)=>{R&16&&u(w,B,be,a,i,s,l,o)},$=()=>{const B=t.target=Ri(t.props,A),be=Ni(B,t,E,g);B&&(s!=="svg"&&to(B)?s="svg":s!=="mathml"&&no(B)&&(s="mathml"),a&&a.isCE&&(a.ce._teleportTargets||(a.ce._teleportTargets=new Set)).add(B),C||(j(B,be),_a(t,!1)))};C&&(j(n,M),_a(t,!0)),eo(t.props)?(t.el.__isMounted=!1,ht(()=>{$(),delete t.el.__isMounted},i)):$()}else{if(eo(t.props)&&e.el.__isMounted===!1){ht(()=>{Ic.process(e,t,n,r,a,i,s,l,o,c)},i);return}t.el=e.el,t.targetStart=e.targetStart;const D=t.anchor=e.anchor,M=t.target=e.target,j=t.targetAnchor=e.targetAnchor,$=$r(e.props),B=$?n:M,be=$?D:j;if(s==="svg"||to(M)?s="svg":(s==="mathml"||no(M))&&(s="mathml"),x?(f(e.dynamicChildren,x,B,a,i,s,l),Ts(e,t,!0)):o||d(e,t,B,be,a,i,s,l,!1),C)$?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):da(t,n,D,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const $e=t.target=Ri(t.props,A);$e&&da(t,$e,null,c,0)}else $&&da(t,M,j,c,1);_a(t,C)}},remove(e,t,n,{um:r,o:{remove:a}},i){const{shapeFlag:s,children:l,anchor:o,targetStart:c,targetAnchor:u,target:d,props:f}=e;if(d&&(a(c),a(u)),i&&a(o),s&16){const g=i||!$r(f);for(let A=0;A<l.length;A++){const E=l[A];r(E,t,n,g,!!E.dynamicChildren)}}},move:da,hydrate:Rf};function da(e,t,n,{o:{insert:r},m:a},i=2){i===0&&r(e.targetAnchor,t,n);const{el:s,anchor:l,shapeFlag:o,children:c,props:u}=e,d=i===2;if(d&&r(s,t,n),(!d||$r(u))&&o&16)for(let f=0;f<c.length;f++)a(c[f],t,n,2);d&&r(l,t,n)}function Rf(e,t,n,r,a,i,{o:{nextSibling:s,parentNode:l,querySelector:o,insert:c,createText:u}},d){function f(T,C){let R=C;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")t.targetStart=R;else if(R.data==="teleport anchor"){t.targetAnchor=R,T._lpa=t.targetAnchor&&s(t.targetAnchor);break}}R=s(R)}}function g(T,C){C.anchor=d(s(T),C,l(T),n,r,a,i)}const A=t.target=Ri(t.props,o),E=$r(t.props);if(A){const T=A._lpa||A.firstChild;t.shapeFlag&16&&(E?(g(e,t),f(A,T),t.targetAnchor||Ni(A,t,u,c,l(e)===A?e:null)):(t.anchor=s(e),f(A,T),t.targetAnchor||Ni(A,t,u,c),d(T&&s(T),t,A,n,r,a,i))),_a(t,E)}else E&&t.shapeFlag&16&&(g(e,t),t.targetStart=e,t.targetAnchor=s(e));return t.anchor&&s(t.anchor)}const Nf=Ic;function _a(e,t){const n=e.ctx;if(n&&n.ut){let r,a;for(t?(r=e.el,a=e.anchor):(r=e.targetStart,a=e.targetAnchor);r&&r!==a;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Ni(e,t,n,r,a=null){const i=t.targetStart=n(""),s=t.targetAnchor=n("");return i[Ac]=s,e&&(r(i,e,a),r(s,e,a)),s}const Mf=Symbol("_leaveCb");function _s(e,t){e.shapeFlag&6&&e.component?(e.transition=t,_s(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ee(e,t){return de(e)?pt({name:e.name},t,{setup:e}):e}function $f(){const e=St();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function Tc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ro(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Ca=new WeakMap;function Dr(e,t,n,r,a=!1){if(ce(e)){e.forEach((E,T)=>Dr(E,t&&(ce(t)?t[T]:t),n,r,a));return}if(hr(r)&&!a){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Dr(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Xa(r.component):r.el,s=a?null:i,{i:l,r:o}=e,c=t&&t.r,u=l.refs===Fe?l.refs={}:l.refs,d=l.setupState,f=Te(d),g=d===Fe?jl:E=>ro(u,E)?!1:Oe(f,E),A=(E,T)=>!(T&&ro(u,T));if(c!=null&&c!==o){if(ao(t),Ye(c))u[c]=null,g(c)&&(d[c]=null);else if(Ke(c)){const E=t;A(c,E.k)&&(c.value=null),E.k&&(u[E.k]=null)}}if(de(o))ea(o,l,12,[s,u]);else{const E=Ye(o),T=Ke(o);if(E||T){const C=()=>{if(e.f){const R=E?g(o)?d[o]:u[o]:A()||!e.k?o.value:u[e.k];if(a)ce(R)&&cs(R,i);else if(ce(R))R.includes(i)||R.push(i);else if(E)u[o]=[i],g(o)&&(d[o]=u[o]);else{const w=[i];A(o,e.k)&&(o.value=w),e.k&&(u[e.k]=w)}}else E?(u[o]=s,g(o)&&(d[o]=s)):T&&(A(o,e.k)&&(o.value=s),e.k&&(u[e.k]=s))};if(s){const R=()=>{C(),Ca.delete(e)};R.id=-1,Ca.set(e,R),ht(R,n)}else ao(e),C()}}}function ao(e){const t=Ca.get(e);t&&(t.flags|=8,Ca.delete(e))}ja().requestIdleCallback;ja().cancelIdleCallback;const hr=e=>!!e.type.__asyncLoader,Cc=e=>e.type.__isKeepAlive;function Df(e,t){Pc(e,"a",t)}function zf(e,t){Pc(e,"da",t)}function Pc(e,t,n=vt){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ka(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Cc(a.parent.vnode)&&Ff(r,t,n,a),a=a.parent}}function Ff(e,t,n,r){const a=Ka(t,e,r,!0);rr(()=>{cs(r[t],a)},n)}function Ka(e,t,n=vt,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{yn();const l=aa(n),o=nn(t,n,e,s);return l(),bn(),o});return r?a.unshift(i):a.push(i),i}}const kn=e=>(t,n=vt)=>{(!Hr||e==="sp")&&Ka(e,(...r)=>t(...r),n)},Sc=kn("bm"),$n=kn("m"),Wf=kn("bu"),Oc=kn("u"),ks=kn("bum"),rr=kn("um"),Uf=kn("sp"),Bf=kn("rtg"),jf=kn("rtc");function Gf(e,t=vt){Ka("ec",e,t)}const ws="components",Vf="directives";function xs(e,t){return Es(ws,e,!0,t)||e}const Lc=Symbol.for("v-ndc");function Qt(e){return Ye(e)?Es(ws,e,!1)||e:e||Lc}function ta(e){return Es(Vf,e)}function Es(e,t,n=!0,r=!1){const a=dt||vt;if(a){const i=a.type;if(e===ws){const l=Tp(i,!1);if(l&&(l===t||l===Pt(t)||l===Ba(Pt(t))))return i}const s=io(a[e]||i[e],t)||io(a.appContext[e],t);return!s&&r?i:s}}function io(e,t){return e&&(e[t]||e[Pt(t)]||e[Ba(Pt(t))])}function De(e,t,n,r){let a;const i=n,s=ce(e);if(s||Ye(e)){const l=s&&er(e);let o=!1,c=!1;l&&(o=!Rt(e),c=vn(e),e=Va(e)),a=new Array(e.length);for(let u=0,d=e.length;u<d;u++)a[u]=t(o?c?br(Gt(e[u])):Gt(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){a=new Array(e);for(let l=0;l<e;l++)a[l]=t(l+1,l,void 0,i)}else if(Ne(e))if(e[Symbol.iterator])a=Array.from(e,(l,o)=>t(l,o,void 0,i));else{const l=Object.keys(e);a=new Array(l.length);for(let o=0,c=l.length;o<c;o++){const u=l[o];a[o]=t(e[u],u,o,i)}}else a=[];return a}function pe(e,t,n={},r,a){if(dt.ce||dt.parent&&hr(dt.parent)&&dt.parent.ce){const c=Object.keys(n).length>0;return t!=="default"&&(n.name=t),L(),ee(me,null,[k("slot",n,r)],c?-2:64)}let i=e[t];i&&i._c&&(i._d=!1),L();const s=i&&Rc(i(n)),l=n.key||s&&s.key,o=ee(me,{key:(l&&!jt(l)?l:`_${t}`)+(!s&&r?"_fb":"")},s||[],s&&e._===1?64:-2);return o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),i&&i._c&&(i._d=!0),o}function Rc(e){return e.some(t=>Vr(t)?!(t.type===an||t.type===me&&!Rc(t.children)):!0)?e:null}const Mi=e=>e?Zc(e)?Xa(e):Mi(e.parent):null,zr=pt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mi(e.parent),$root:e=>Mi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Mc(e),$forceUpdate:e=>e.f||(e.f=()=>{bs(e.update)}),$nextTick:e=>e.n||(e.n=rn.bind(e.proxy)),$watch:e=>Of.bind(e)}),ci=(e,t)=>e!==Fe&&!e.__isScriptSetup&&Oe(e,t),Hf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:l,appContext:o}=e;if(t[0]!=="$"){const f=s[t];if(f!==void 0)switch(f){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(ci(r,t))return s[t]=1,r[t];if(a!==Fe&&Oe(a,t))return s[t]=2,a[t];if(Oe(i,t))return s[t]=3,i[t];if(n!==Fe&&Oe(n,t))return s[t]=4,n[t];$i&&(s[t]=0)}}const c=zr[t];let u,d;if(c)return t==="$attrs"&&bt(e.attrs,"get",""),c(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(n!==Fe&&Oe(n,t))return s[t]=4,n[t];if(d=o.config.globalProperties,Oe(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return ci(a,t)?(a[t]=n,!0):r!==Fe&&Oe(r,t)?(r[t]=n,!0):Oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,props:i,type:s}},l){let o;return!!(n[l]||e!==Fe&&l[0]!=="$"&&Oe(e,l)||ci(t,l)||Oe(i,l)||Oe(r,l)||Oe(zr,l)||Oe(a.config.globalProperties,l)||(o=s.__cssModules)&&o[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Oe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function so(e){return ce(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let $i=!0;function qf(e){const t=Mc(e),n=e.proxy,r=e.ctx;$i=!1,t.beforeCreate&&oo(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:l,provide:o,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:g,updated:A,activated:E,deactivated:T,beforeDestroy:C,beforeUnmount:R,destroyed:w,unmounted:x,render:D,renderTracked:M,renderTriggered:j,errorCaptured:$,serverPrefetch:B,expose:be,inheritAttrs:$e,components:oe,directives:Pe,filters:_t}=t;if(c&&Kf(c,r,null),s)for(const ge in s){const ve=s[ge];de(ve)&&(r[ge]=ve.bind(n))}if(a){const ge=a.call(n,n);Ne(ge)&&(e.data=Ln(ge))}if($i=!0,i)for(const ge in i){const ve=i[ge],nt=de(ve)?ve.bind(n,n):de(ve.get)?ve.get.bind(n,n):Zt,te=!de(ve)&&de(ve.set)?ve.set.bind(n):Zt,Be=ie({get:nt,set:te});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Be.value,set:je=>Be.value=je})}if(l)for(const ge in l)Nc(l[ge],r,n,ge);if(o){const ge=de(o)?o.call(n):o;Reflect.ownKeys(ge).forEach(ve=>{gr(ve,ge[ve])})}u&&oo(u,e,"c");function ye(ge,ve){ce(ve)?ve.forEach(nt=>ge(nt.bind(n))):ve&&ge(ve.bind(n))}if(ye(Sc,d),ye($n,f),ye(Wf,g),ye(Oc,A),ye(Df,E),ye(zf,T),ye(Gf,$),ye(jf,M),ye(Bf,j),ye(ks,R),ye(rr,x),ye(Uf,B),ce(be))if(be.length){const ge=e.exposed||(e.exposed={});be.forEach(ve=>{Object.defineProperty(ge,ve,{get:()=>n[ve],set:nt=>n[ve]=nt,enumerable:!0})})}else e.exposed||(e.exposed={});D&&e.render===Zt&&(e.render=D),$e!=null&&(e.inheritAttrs=$e),oe&&(e.components=oe),Pe&&(e.directives=Pe),B&&Tc(e)}function Kf(e,t,n=Zt){ce(e)&&(e=Di(e));for(const r in e){const a=e[r];let i;Ne(a)?"default"in a?i=Nt(a.from||r,a.default,!0):i=Nt(a.from||r):i=Nt(a),Ke(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function oo(e,t,n){nn(ce(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nc(e,t,n,r){let a=r.includes(".")?Ec(n,r):()=>n[r];if(Ye(e)){const i=t[e];de(i)&&ot(a,i)}else if(de(e))ot(a,e.bind(n));else if(Ne(e))if(ce(e))e.forEach(i=>Nc(i,t,n,r));else{const i=de(e.handler)?e.handler.bind(n):t[e.handler];de(i)&&ot(a,i,e)}}function Mc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(t);let o;return l?o=l:!a.length&&!n&&!r?o=t:(o={},a.length&&a.forEach(c=>Pa(o,c,s,!0)),Pa(o,t,s)),Ne(t)&&i.set(t,o),o}function Pa(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Pa(e,i,n,!0),a&&a.forEach(s=>Pa(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const l=Yf[s]||n&&n[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const Yf={data:lo,props:co,emits:co,methods:Lr,computed:Lr,beforeCreate:xt,created:xt,beforeMount:xt,mounted:xt,beforeUpdate:xt,updated:xt,beforeDestroy:xt,beforeUnmount:xt,destroyed:xt,unmounted:xt,activated:xt,deactivated:xt,errorCaptured:xt,serverPrefetch:xt,components:Lr,directives:Lr,watch:Jf,provide:lo,inject:Xf};function lo(e,t){return t?e?function(){return pt(de(e)?e.call(this,this):e,de(t)?t.call(this,this):t)}:t:e}function Xf(e,t){return Lr(Di(e),Di(t))}function Di(e){if(ce(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xt(e,t){return e?[...new Set([].concat(e,t))]:t}function Lr(e,t){return e?pt(Object.create(null),e,t):t}function co(e,t){return e?ce(e)&&ce(t)?[...new Set([...e,...t])]:pt(Object.create(null),so(e),so(t??{})):t}function Jf(e,t){if(!e)return t;if(!t)return e;const n=pt(Object.create(null),e);for(const r in t)n[r]=xt(e[r],t[r]);return n}function $c(){return{app:null,config:{isNativeTag:jl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zf=0;function Qf(e,t){return function(r,a=null){de(r)||(r=pt({},r)),a!=null&&!Ne(a)&&(a=null);const i=$c(),s=new WeakSet,l=[];let o=!1;const c=i.app={_uid:Zf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Pp,get config(){return i.config},set config(u){},use(u,...d){return s.has(u)||(u&&de(u.install)?(s.add(u),u.install(c,...d)):de(u)&&(s.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,f){if(!o){const g=c._ceVNode||k(r,a);return g.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(g,u,f),o=!0,c._container=u,u.__vue_app__=c,Xa(g.component)}},onUnmount(u){l.push(u)},unmount(){o&&(nn(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=yr;yr=c;try{return u()}finally{yr=d}}};return c}}let yr=null;const ep=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Pt(t)}Modifiers`]||e[`${Mn(t)}Modifiers`];function tp(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Fe;let a=n;const i=t.startsWith("update:"),s=i&&ep(r,t.slice(7));s&&(s.trim&&(a=n.map(u=>Ye(u)?u.trim():u)),s.number&&(a=n.map(Ud)));let l,o=r[l=va(t)]||r[l=va(Pt(t))];!o&&i&&(o=r[l=va(Mn(t))]),o&&nn(o,e,6,a);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,nn(c,e,6,a)}}const np=new WeakMap;function Dc(e,t,n=!1){const r=n?np:t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},l=!1;if(!de(e)){const o=c=>{const u=Dc(c,t,!0);u&&(l=!0,pt(s,u))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!i&&!l?(Ne(e)&&r.set(e,null),null):(ce(i)?i.forEach(o=>s[o]=null):pt(s,i),Ne(e)&&r.set(e,s),s)}function Ya(e,t){return!e||!Fa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Oe(e,t[0].toLowerCase()+t.slice(1))||Oe(e,Mn(t))||Oe(e,t))}function uo(e){const{type:t,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:s,attrs:l,emit:o,render:c,renderCache:u,props:d,data:f,setupState:g,ctx:A,inheritAttrs:E}=e,T=Ta(e);let C,R;try{if(n.shapeFlag&4){const x=a||r,D=x;C=Yt(c.call(D,x,u,d,g,f,A)),R=l}else{const x=t;C=Yt(x.length>1?x(d,{attrs:l,slots:s,emit:o}):x(d,null)),R=t.props?l:rp(l)}}catch(x){Fr.length=0,qa(x,e,1),C=k(an)}let w=C;if(R&&E!==!1){const x=Object.keys(R),{shapeFlag:D}=w;x.length&&D&7&&(i&&x.some(ls)&&(R=ap(R,i)),w=tr(w,R,!1,!0))}return n.dirs&&(w=tr(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&_s(w,n.transition),C=w,Ta(T),C}const rp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fa(n))&&((t||(t={}))[n]=e[n]);return t},ap=(e,t)=>{const n={};for(const r in e)(!ls(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ip(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:l,patchFlag:o}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return r?fo(r,s,c):!!s;if(o&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(zc(s,r,f)&&!Ya(c,f))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?fo(r,s,c):!0:!!s;return!1}function fo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(zc(t,e,i)&&!Ya(n,i))return!0}return!1}function zc(e,t,n){const r=e[n],a=t[n];return n==="style"&&Ne(r)&&Ne(a)?!us(r,a):r!==a}function sp({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Fc={},Wc=()=>Object.create(Fc),Uc=e=>Object.getPrototypeOf(e)===Fc;function op(e,t,n,r=!1){const a={},i=Wc();e.propsDefaults=Object.create(null),Bc(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:mc(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function lp(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,l=Te(a),[o]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ya(e.emitsOptions,f))continue;const g=t[f];if(o)if(Oe(i,f))g!==i[f]&&(i[f]=g,c=!0);else{const A=Pt(f);a[A]=zi(o,l,A,g,e,!1)}else g!==i[f]&&(i[f]=g,c=!0)}}}else{Bc(e,t,a,i)&&(c=!0);let u;for(const d in l)(!t||!Oe(t,d)&&((u=Mn(d))===d||!Oe(t,u)))&&(o?n&&(n[d]!==void 0||n[u]!==void 0)&&(a[d]=zi(o,l,d,void 0,e,!0)):delete a[d]);if(i!==l)for(const d in i)(!t||!Oe(t,d))&&(delete i[d],c=!0)}c&&mn(e.attrs,"set","")}function Bc(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,l;if(t)for(let o in t){if(Rr(o))continue;const c=t[o];let u;a&&Oe(a,u=Pt(o))?!i||!i.includes(u)?n[u]=c:(l||(l={}))[u]=c:Ya(e.emitsOptions,o)||(!(o in r)||c!==r[o])&&(r[o]=c,s=!0)}if(i){const o=Te(n),c=l||Fe;for(let u=0;u<i.length;u++){const d=i[u];n[d]=zi(a,o,d,c[d],e,!Oe(c,d))}}return s}function zi(e,t,n,r,a,i){const s=e[n];if(s!=null){const l=Oe(s,"default");if(l&&r===void 0){const o=s.default;if(s.type!==Function&&!s.skipFactory&&de(o)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const u=aa(a);r=c[n]=o.call(null,t),u()}}else r=o;a.ce&&a.ce._setProp(n,r)}s[0]&&(i&&!l?r=!1:s[1]&&(r===""||r===Mn(n))&&(r=!0))}return r}const cp=new WeakMap;function jc(e,t,n=!1){const r=n?cp:t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},l=[];let o=!1;if(!de(e)){const u=d=>{o=!0;const[f,g]=jc(d,t,!0);pt(s,f),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!o)return Ne(e)&&r.set(e,fr),fr;if(ce(i))for(let u=0;u<i.length;u++){const d=Pt(i[u]);po(d)&&(s[d]=Fe)}else if(i)for(const u in i){const d=Pt(u);if(po(d)){const f=i[u],g=s[d]=ce(f)||de(f)?{type:f}:pt({},f),A=g.type;let E=!1,T=!0;if(ce(A))for(let C=0;C<A.length;++C){const R=A[C],w=de(R)&&R.name;if(w==="Boolean"){E=!0;break}else w==="String"&&(T=!1)}else E=de(A)&&A.name==="Boolean";g[0]=E,g[1]=T,(E||Oe(g,"default"))&&l.push(d)}}const c=[s,l];return Ne(e)&&r.set(e,c),c}function po(e){return e[0]!=="$"&&!Rr(e)}const As=e=>e==="_"||e==="_ctx"||e==="$stable",Is=e=>ce(e)?e.map(Yt):[Yt(e)],up=(e,t,n)=>{if(t._n)return t;const r=_((...a)=>Is(t(...a)),n);return r._c=!1,r},Gc=(e,t,n)=>{const r=e._ctx;for(const a in e){if(As(a))continue;const i=e[a];if(de(i))t[a]=up(a,i,r);else if(i!=null){const s=Is(i);t[a]=()=>s}}},Vc=(e,t)=>{const n=Is(t);e.slots.default=()=>n},Hc=(e,t,n)=>{for(const r in t)(n||!As(r))&&(e[r]=t[r])},dp=(e,t,n)=>{const r=e.slots=Wc();if(e.vnode.shapeFlag&32){const a=t._;a?(Hc(r,t,n),n&&Kl(r,"_",a,!0)):Gc(t,r)}else t&&Vc(e,t)},fp=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=Fe;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Hc(a,t,n):(i=!t.$stable,Gc(t,a)),s=t}else t&&(Vc(e,t),s={default:1});if(i)for(const l in a)!As(l)&&s[l]==null&&delete a[l]},ht=yp;function pp(e){return mp(e)}function mp(e,t){const n=ja();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:l,createComment:o,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:g=Zt,insertStaticContent:A}=e,E=(y,v,b,N=null,G=null,U=null,K=void 0,q=null,m=!!v.dynamicChildren)=>{if(y===v)return;y&&!Ir(y,v)&&(N=W(y),je(y,G,U,!0),y=null),v.patchFlag===-2&&(m=!1,v.dynamicChildren=null);const{type:h,ref:S,shapeFlag:z}=v;switch(h){case na:T(y,v,b,N);break;case an:C(y,v,b,N);break;case di:y==null&&R(v,b,N,K);break;case me:oe(y,v,b,N,G,U,K,q,m);break;default:z&1?D(y,v,b,N,G,U,K,q,m):z&6?Pe(y,v,b,N,G,U,K,q,m):(z&64||z&128)&&h.process(y,v,b,N,G,U,K,q,m,re)}S!=null&&G?Dr(S,y&&y.ref,U,v||y,!v):S==null&&y&&y.ref!=null&&Dr(y.ref,null,U,y,!0)},T=(y,v,b,N)=>{if(y==null)r(v.el=l(v.children),b,N);else{const G=v.el=y.el;v.children!==y.children&&c(G,v.children)}},C=(y,v,b,N)=>{y==null?r(v.el=o(v.children||""),b,N):v.el=y.el},R=(y,v,b,N)=>{[y.el,y.anchor]=A(y.children,v,b,N,y.el,y.anchor)},w=({el:y,anchor:v},b,N)=>{let G;for(;y&&y!==v;)G=f(y),r(y,b,N),y=G;r(v,b,N)},x=({el:y,anchor:v})=>{let b;for(;y&&y!==v;)b=f(y),a(y),y=b;a(v)},D=(y,v,b,N,G,U,K,q,m)=>{if(v.type==="svg"?K="svg":v.type==="math"&&(K="mathml"),y==null)M(v,b,N,G,U,K,q,m);else{const h=y.el&&y.el._isVueCE?y.el:null;try{h&&h._beginPatch(),B(y,v,G,U,K,q,m)}finally{h&&h._endPatch()}}},M=(y,v,b,N,G,U,K,q)=>{let m,h;const{props:S,shapeFlag:z,transition:Y,dirs:H}=y;if(m=y.el=s(y.type,U,S&&S.is,S),z&8?u(m,y.children):z&16&&$(y.children,m,null,N,G,ui(y,U),K,q),H&&Vn(y,null,N,"created"),j(m,y,y.scopeId,K,N),S){for(const F in S)F!=="value"&&!Rr(F)&&i(m,F,null,S[F],U,N);"value"in S&&i(m,"value",null,S.value,U),(h=S.onVnodeBeforeMount)&&qt(h,N,y)}H&&Vn(y,null,N,"beforeMount");const P=gp(G,Y);P&&Y.beforeEnter(m),r(m,v,b),((h=S&&S.onVnodeMounted)||P||H)&&ht(()=>{h&&qt(h,N,y),P&&Y.enter(m),H&&Vn(y,null,N,"mounted")},G)},j=(y,v,b,N,G)=>{if(b&&g(y,b),N)for(let U=0;U<N.length;U++)g(y,N[U]);if(G){let U=G.subTree;if(v===U||Yc(U.type)&&(U.ssContent===v||U.ssFallback===v)){const K=G.vnode;j(y,K,K.scopeId,K.slotScopeIds,G.parent)}}},$=(y,v,b,N,G,U,K,q,m=0)=>{for(let h=m;h<y.length;h++){const S=y[h]=q?pn(y[h]):Yt(y[h]);E(null,S,v,b,N,G,U,K,q)}},B=(y,v,b,N,G,U,K)=>{const q=v.el=y.el;let{patchFlag:m,dynamicChildren:h,dirs:S}=v;m|=y.patchFlag&16;const z=y.props||Fe,Y=v.props||Fe;let H;if(b&&Hn(b,!1),(H=Y.onVnodeBeforeUpdate)&&qt(H,b,v,y),S&&Vn(v,y,b,"beforeUpdate"),b&&Hn(b,!0),(z.innerHTML&&Y.innerHTML==null||z.textContent&&Y.textContent==null)&&u(q,""),h?be(y.dynamicChildren,h,q,b,N,ui(v,G),U):K||ve(y,v,q,null,b,N,ui(v,G),U,!1),m>0){if(m&16)$e(q,z,Y,b,G);else if(m&2&&z.class!==Y.class&&i(q,"class",null,Y.class,G),m&4&&i(q,"style",z.style,Y.style,G),m&8){const P=v.dynamicProps;for(let F=0;F<P.length;F++){const se=P[F],we=z[se],qe=Y[se];(qe!==we||se==="value")&&i(q,se,we,qe,G,b)}}m&1&&y.children!==v.children&&u(q,v.children)}else!K&&h==null&&$e(q,z,Y,b,G);((H=Y.onVnodeUpdated)||S)&&ht(()=>{H&&qt(H,b,v,y),S&&Vn(v,y,b,"updated")},N)},be=(y,v,b,N,G,U,K)=>{for(let q=0;q<v.length;q++){const m=y[q],h=v[q],S=m.el&&(m.type===me||!Ir(m,h)||m.shapeFlag&198)?d(m.el):b;E(m,h,S,null,N,G,U,K,!0)}},$e=(y,v,b,N,G)=>{if(v!==b){if(v!==Fe)for(const U in v)!Rr(U)&&!(U in b)&&i(y,U,v[U],null,G,N);for(const U in b){if(Rr(U))continue;const K=b[U],q=v[U];K!==q&&U!=="value"&&i(y,U,q,K,G,N)}"value"in b&&i(y,"value",v.value,b.value,G)}},oe=(y,v,b,N,G,U,K,q,m)=>{const h=v.el=y?y.el:l(""),S=v.anchor=y?y.anchor:l("");let{patchFlag:z,dynamicChildren:Y,slotScopeIds:H}=v;H&&(q=q?q.concat(H):H),y==null?(r(h,b,N),r(S,b,N),$(v.children||[],b,S,G,U,K,q,m)):z>0&&z&64&&Y&&y.dynamicChildren&&y.dynamicChildren.length===Y.length?(be(y.dynamicChildren,Y,b,G,U,K,q),(v.key!=null||G&&v===G.subTree)&&Ts(y,v,!0)):ve(y,v,b,S,G,U,K,q,m)},Pe=(y,v,b,N,G,U,K,q,m)=>{v.slotScopeIds=q,y==null?v.shapeFlag&512?G.ctx.activate(v,b,N,K,m):_t(v,b,N,G,U,K,m):tt(y,v,m)},_t=(y,v,b,N,G,U,K)=>{const q=y.component=wp(y,N,G);if(Cc(y)&&(q.ctx.renderer=re),xp(q,!1,K),q.asyncDep){if(G&&G.registerDep(q,ye,K),!y.el){const m=q.subTree=k(an);C(null,m,v,b),y.placeholder=m.el}}else ye(q,y,v,b,G,U,K)},tt=(y,v,b)=>{const N=v.component=y.component;if(ip(y,v,b))if(N.asyncDep&&!N.asyncResolved){ge(N,v,b);return}else N.next=v,N.update();else v.el=y.el,N.vnode=v},ye=(y,v,b,N,G,U,K)=>{const q=()=>{if(y.isMounted){let{next:z,bu:Y,u:H,parent:P,vnode:F}=y;{const ut=qc(y);if(ut){z&&(z.el=F.el,ge(y,z,K)),ut.asyncDep.then(()=>{ht(()=>{y.isUnmounted||h()},G)});return}}let se=z,we;Hn(y,!1),z?(z.el=F.el,ge(y,z,K)):z=F,Y&&ai(Y),(we=z.props&&z.props.onVnodeBeforeUpdate)&&qt(we,P,z,F),Hn(y,!0);const qe=uo(y),wt=y.subTree;y.subTree=qe,E(wt,qe,d(wt.el),W(wt),y,G,U),z.el=qe.el,se===null&&sp(y,qe.el),H&&ht(H,G),(we=z.props&&z.props.onVnodeUpdated)&&ht(()=>qt(we,P,z,F),G)}else{let z;const{el:Y,props:H}=v,{bm:P,m:F,parent:se,root:we,type:qe}=y,wt=hr(v);Hn(y,!1),P&&ai(P),!wt&&(z=H&&H.onVnodeBeforeMount)&&qt(z,se,v),Hn(y,!0);{we.ce&&we.ce._hasShadowRoot()&&we.ce._injectChildStyle(qe);const ut=y.subTree=uo(y);E(null,ut,b,N,y,G,U),v.el=ut.el}if(F&&ht(F,G),!wt&&(z=H&&H.onVnodeMounted)){const ut=v;ht(()=>qt(z,se,ut),G)}(v.shapeFlag&256||se&&hr(se.vnode)&&se.vnode.shapeFlag&256)&&y.a&&ht(y.a,G),y.isMounted=!0,v=b=N=null}};y.scope.on();const m=y.effect=new ec(q);y.scope.off();const h=y.update=m.run.bind(m),S=y.job=m.runIfDirty.bind(m);S.i=y,S.id=y.uid,m.scheduler=()=>bs(S),Hn(y,!0),h()},ge=(y,v,b)=>{v.component=y;const N=y.vnode.props;y.vnode=v,y.next=null,lp(y,v.props,N,b),fp(y,v.children,b),yn(),Qs(y),bn()},ve=(y,v,b,N,G,U,K,q,m=!1)=>{const h=y&&y.children,S=y?y.shapeFlag:0,z=v.children,{patchFlag:Y,shapeFlag:H}=v;if(Y>0){if(Y&128){te(h,z,b,N,G,U,K,q,m);return}else if(Y&256){nt(h,z,b,N,G,U,K,q,m);return}}H&8?(S&16&&xe(h,G,U),z!==h&&u(b,z)):S&16?H&16?te(h,z,b,N,G,U,K,q,m):xe(h,G,U,!0):(S&8&&u(b,""),H&16&&$(z,b,N,G,U,K,q,m))},nt=(y,v,b,N,G,U,K,q,m)=>{y=y||fr,v=v||fr;const h=y.length,S=v.length,z=Math.min(h,S);let Y;for(Y=0;Y<z;Y++){const H=v[Y]=m?pn(v[Y]):Yt(v[Y]);E(y[Y],H,b,null,G,U,K,q,m)}h>S?xe(y,G,U,!0,!1,z):$(v,b,N,G,U,K,q,m,z)},te=(y,v,b,N,G,U,K,q,m)=>{let h=0;const S=v.length;let z=y.length-1,Y=S-1;for(;h<=z&&h<=Y;){const H=y[h],P=v[h]=m?pn(v[h]):Yt(v[h]);if(Ir(H,P))E(H,P,b,null,G,U,K,q,m);else break;h++}for(;h<=z&&h<=Y;){const H=y[z],P=v[Y]=m?pn(v[Y]):Yt(v[Y]);if(Ir(H,P))E(H,P,b,null,G,U,K,q,m);else break;z--,Y--}if(h>z){if(h<=Y){const H=Y+1,P=H<S?v[H].el:N;for(;h<=Y;)E(null,v[h]=m?pn(v[h]):Yt(v[h]),b,P,G,U,K,q,m),h++}}else if(h>Y)for(;h<=z;)je(y[h],G,U,!0),h++;else{const H=h,P=h,F=new Map;for(h=P;h<=Y;h++){const Ot=v[h]=m?pn(v[h]):Yt(v[h]);Ot.key!=null&&F.set(Ot.key,h)}let se,we=0;const qe=Y-P+1;let wt=!1,ut=0;const Gn=new Array(qe);for(h=0;h<qe;h++)Gn[h]=0;for(h=H;h<=z;h++){const Ot=y[h];if(we>=qe){je(Ot,G,U,!0);continue}let Ht;if(Ot.key!=null)Ht=F.get(Ot.key);else for(se=P;se<=Y;se++)if(Gn[se-P]===0&&Ir(Ot,v[se])){Ht=se;break}Ht===void 0?je(Ot,G,U,!0):(Gn[Ht-P]=h+1,Ht>=ut?ut=Ht:wt=!0,E(Ot,v[Ht],b,null,G,U,K,q,m),we++)}const ri=wt?hp(Gn):fr;for(se=ri.length-1,h=qe-1;h>=0;h--){const Ot=P+h,Ht=v[Ot],qs=v[Ot+1],Ks=Ot+1<S?qs.el||Kc(qs):N;Gn[h]===0?E(null,Ht,b,Ks,G,U,K,q,m):wt&&(se<0||h!==ri[se]?Be(Ht,b,Ks,2):se--)}}},Be=(y,v,b,N,G=null)=>{const{el:U,type:K,transition:q,children:m,shapeFlag:h}=y;if(h&6){Be(y.component.subTree,v,b,N);return}if(h&128){y.suspense.move(v,b,N);return}if(h&64){K.move(y,v,b,re);return}if(K===me){r(U,v,b);for(let z=0;z<m.length;z++)Be(m[z],v,b,N);r(y.anchor,v,b);return}if(K===di){w(y,v,b);return}if(N!==2&&h&1&&q)if(N===0)q.beforeEnter(U),r(U,v,b),ht(()=>q.enter(U),G);else{const{leave:z,delayLeave:Y,afterLeave:H}=q,P=()=>{y.ctx.isUnmounted?a(U):r(U,v,b)},F=()=>{U._isLeaving&&U[Mf](!0),z(U,()=>{P(),H&&H()})};Y?Y(U,P,F):F()}else r(U,v,b)},je=(y,v,b,N=!1,G=!1)=>{const{type:U,props:K,ref:q,children:m,dynamicChildren:h,shapeFlag:S,patchFlag:z,dirs:Y,cacheIndex:H}=y;if(z===-2&&(G=!1),q!=null&&(yn(),Dr(q,null,b,y,!0),bn()),H!=null&&(v.renderCache[H]=void 0),S&256){v.ctx.deactivate(y);return}const P=S&1&&Y,F=!hr(y);let se;if(F&&(se=K&&K.onVnodeBeforeUnmount)&&qt(se,v,y),S&6)Me(y.component,b,N);else{if(S&128){y.suspense.unmount(b,N);return}P&&Vn(y,null,v,"beforeUnmount"),S&64?y.type.remove(y,v,b,re,N):h&&!h.hasOnce&&(U!==me||z>0&&z&64)?xe(h,v,b,!1,!0):(U===me&&z&384||!G&&S&16)&&xe(m,v,b),N&&kt(y)}(F&&(se=K&&K.onVnodeUnmounted)||P)&&ht(()=>{se&&qt(se,v,y),P&&Vn(y,null,v,"unmounted")},b)},kt=y=>{const{type:v,el:b,anchor:N,transition:G}=y;if(v===me){ct(b,N);return}if(v===di){x(y);return}const U=()=>{a(b),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(y.shapeFlag&1&&G&&!G.persisted){const{leave:K,delayLeave:q}=G,m=()=>K(b,U);q?q(y.el,U,m):m()}else U()},ct=(y,v)=>{let b;for(;y!==v;)b=f(y),a(y),y=b;a(v)},Me=(y,v,b)=>{const{bum:N,scope:G,job:U,subTree:K,um:q,m,a:h}=y;mo(m),mo(h),N&&ai(N),G.stop(),U&&(U.flags|=8,je(K,y,v,b)),q&&ht(q,v),ht(()=>{y.isUnmounted=!0},v)},xe=(y,v,b,N=!1,G=!1,U=0)=>{for(let K=U;K<y.length;K++)je(y[K],v,b,N,G)},W=y=>{if(y.shapeFlag&6)return W(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const v=f(y.anchor||y.el),b=v&&v[Ac];return b?f(b):v};let Z=!1;const V=(y,v,b)=>{let N;y==null?v._vnode&&(je(v._vnode,null,null,!0),N=v._vnode.component):E(v._vnode||null,y,v,null,null,null,b),v._vnode=y,Z||(Z=!0,Qs(N),kc(),Z=!1)},re={p:E,um:je,m:Be,r:kt,mt:_t,mc:$,pc:ve,pbc:be,n:W,o:e};return{render:V,hydrate:void 0,createApp:Qf(V)}}function ui({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Hn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function gp(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ts(e,t,n=!1){const r=e.children,a=t.children;if(ce(r)&&ce(a))for(let i=0;i<r.length;i++){const s=r[i];let l=a[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[i]=pn(a[i]),l.el=s.el),!n&&l.patchFlag!==-2&&Ts(s,l)),l.type===na&&(l.patchFlag===-1&&(l=a[i]=pn(l)),l.el=s.el),l.type===an&&!l.el&&(l.el=s.el)}}function hp(e){const t=e.slice(),n=[0];let r,a,i,s,l;const o=e.length;for(r=0;r<o;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)l=i+s>>1,e[n[l]]<c?i=l+1:s=l;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}function qc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qc(t)}function mo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Kc(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Kc(t.subTree):null}const Yc=e=>e.__isSuspense;function yp(e,t){t&&t.pendingBranch?ce(e)?t.effects.push(...e):t.effects.push(e):Cf(e)}const me=Symbol.for("v-fgt"),na=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),di=Symbol.for("v-stc"),Fr=[];let Lt=null;function L(e=!1){Fr.push(Lt=e?null:[])}function bp(){Fr.pop(),Lt=Fr[Fr.length-1]||null}let Gr=1;function Sa(e,t=!1){Gr+=e,e<0&&Lt&&t&&(Lt.hasOnce=!0)}function Xc(e){return e.dynamicChildren=Gr>0?Lt||fr:null,bp(),Gr>0&&Lt&&Lt.push(e),e}function X(e,t,n,r,a,i){return Xc(I(e,t,n,r,a,i,!0))}function ee(e,t,n,r,a){return Xc(k(e,t,n,r,a,!0))}function Vr(e){return e?e.__v_isVNode===!0:!1}function Ir(e,t){return e.type===t.type&&e.key===t.key}const Jc=({key:e})=>e??null,ka=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ye(e)||Ke(e)||de(e)?{i:dt,r:e,k:t,f:!!n}:e:null);function I(e,t=null,n=null,r=0,a=null,i=e===me?0:1,s=!1,l=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jc(t),ref:t&&ka(t),scopeId:xc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:dt};return l?(Cs(o,n),i&128&&e.normalize(o)):n&&(o.shapeFlag|=Ye(n)?8:16),Gr>0&&!s&&Lt&&(o.patchFlag>0||i&6)&&o.patchFlag!==32&&Lt.push(o),o}const k=vp;function vp(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Lc)&&(e=an),Vr(e)){const l=tr(e,t,!0);return n&&Cs(l,n),Gr>0&&!i&&Lt&&(l.shapeFlag&6?Lt[Lt.indexOf(e)]=l:Lt.push(l)),l.patchFlag=-2,l}if(Cp(e)&&(e=e.__vccOpts),t){t=ra(t);let{class:l,style:o}=t;l&&!Ye(l)&&(t.class=Ge(l)),Ne(o)&&(Ha(o)&&!ce(o)&&(o=pt({},o)),t.style=nr(o))}const s=Ye(e)?1:Yc(e)?128:Lf(e)?64:Ne(e)?4:de(e)?2:0;return I(e,t,n,r,a,s,i,!0)}function ra(e){return e?Ha(e)||Uc(e)?pt({},e):e:null}function tr(e,t,n=!1,r=!1){const{props:a,ref:i,patchFlag:s,children:l,transition:o}=e,c=t?Xe(a||{},t):a,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Jc(c),ref:t&&t.ref?n&&i?ce(i)?i.concat(ka(t)):[i,ka(t)]:ka(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:o,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tr(e.ssContent),ssFallback:e.ssFallback&&tr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return o&&r&&_s(u,o.clone(u)),u}function Q(e=" ",t=0){return k(na,null,e,t)}function Xt(e="",t=!1){return t?(L(),ee(an,null,e)):k(an,null,e)}function Yt(e){return e==null||typeof e=="boolean"?k(an):ce(e)?k(me,null,e.slice()):Vr(e)?pn(e):k(na,null,String(e))}function pn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tr(e)}function Cs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ce(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Cs(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!Uc(t)?t._ctx=dt:a===3&&dt&&(dt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else de(t)?(t={default:t,_ctx:dt},n=32):(t=String(t),r&64?(n=16,t=[Q(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xe(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ge([t.class,r.class]));else if(a==="style")t.style=nr([t.style,r.style]);else if(Fa(a)){const i=t[a],s=r[a];s&&i!==s&&!(ce(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function qt(e,t,n,r=null){nn(e,t,7,[n,r])}const _p=$c();let kp=0;function wp(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||_p,i={uid:kp++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jc(r,a),emitsOptions:Dc(r,a),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=tp.bind(null,i),e.ce&&e.ce(i),i}let vt=null;const St=()=>vt||dt;let Oa,Fi;{const e=ja(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(s=>s(i)):a[0](i)}};Oa=t("__VUE_INSTANCE_SETTERS__",n=>vt=n),Fi=t("__VUE_SSR_SETTERS__",n=>Hr=n)}const aa=e=>{const t=vt;return Oa(e),e.scope.on(),()=>{e.scope.off(),Oa(t)}},go=()=>{vt&&vt.scope.off(),Oa(null)};function Zc(e){return e.vnode.shapeFlag&4}let Hr=!1;function xp(e,t=!1,n=!1){t&&Fi(t);const{props:r,children:a}=e.vnode,i=Zc(e);op(e,r,i,t),dp(e,a,n||t);const s=i?Ep(e,t):void 0;return t&&Fi(!1),s}function Ep(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Hf);const{setup:r}=n;if(r){yn();const a=e.setupContext=r.length>1?Ip(e):null,i=aa(e),s=ea(r,e,0,[e.props,a]),l=Vl(s);if(bn(),i(),(l||e.sp)&&!hr(e)&&Tc(e),l){if(s.then(go,go),t)return s.then(o=>{ho(e,o)}).catch(o=>{qa(o,e,0)});e.asyncDep=s}else ho(e,s)}else Qc(e)}function ho(e,t,n){de(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ne(t)&&(e.setupState=yc(t)),Qc(e)}function Qc(e,t,n){const r=e.type;e.render||(e.render=r.render||Zt);{const a=aa(e);yn();try{qf(e)}finally{bn(),a()}}}const Ap={get(e,t){return bt(e,"get",""),e[t]}};function Ip(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ap),slots:e.slots,emit:e.emit,expose:t}}function Xa(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(yc(gc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zr)return zr[n](e)},has(t,n){return n in t||n in zr}})):e.proxy}function Tp(e,t=!0){return de(e)?e.displayName||e.name:e.name||t&&e.__name}function Cp(e){return de(e)&&"__vccOpts"in e}const ie=(e,t)=>xf(e,t,Hr);function Mt(e,t,n){try{Sa(-1);const r=arguments.length;return r===2?Ne(t)&&!ce(t)?Vr(t)?k(e,null,[t]):k(e,t):k(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vr(n)&&(n=[n]),k(e,t,n))}finally{Sa(1)}}const Pp="3.5.28";let Wi;const yo=typeof window<"u"&&window.trustedTypes;if(yo)try{Wi=yo.createPolicy("vue",{createHTML:e=>e})}catch{}const eu=Wi?e=>Wi.createHTML(e):e=>e,Sp="http://www.w3.org/2000/svg",Op="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,bo=fn&&fn.createElement("template"),Lp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?fn.createElementNS(Sp,e):t==="mathml"?fn.createElementNS(Op,e):n?fn.createElement(e,{is:n}):fn.createElement(e);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>fn.createTextNode(e),createComment:e=>fn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>fn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{bo.innerHTML=eu(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=bo.content;if(r==="svg"||r==="mathml"){const o=l.firstChild;for(;o.firstChild;)l.appendChild(o.firstChild);l.removeChild(o)}t.insertBefore(l,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Rp=Symbol("_vtc");function Np(e,t,n){const r=e[Rp];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const La=Symbol("_vod"),tu=Symbol("_vsh"),Mp={name:"show",beforeMount(e,{value:t},{transition:n}){e[La]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Tr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Tr(e,!0),r.enter(e)):r.leave(e,()=>{Tr(e,!1)}):Tr(e,t))},beforeUnmount(e,{value:t}){Tr(e,t)}};function Tr(e,t){e.style.display=t?e[La]:"none",e[tu]=!t}const $p=Symbol(""),Dp=/(?:^|;)\s*display\s*:/;function zp(e,t,n){const r=e.style,a=Ye(n);let i=!1;if(n&&!a){if(t)if(Ye(t))for(const s of t.split(";")){const l=s.slice(0,s.indexOf(":")).trim();n[l]==null&&wa(r,l,"")}else for(const s in t)n[s]==null&&wa(r,s,"");for(const s in n)s==="display"&&(i=!0),wa(r,s,n[s])}else if(a){if(t!==n){const s=r[$p];s&&(n+=";"+s),r.cssText=n,i=Dp.test(n)}}else t&&e.removeAttribute("style");La in e&&(e[La]=i?r.display:"",e[tu]&&(r.display="none"))}const vo=/\s*!important$/;function wa(e,t,n){if(ce(n))n.forEach(r=>wa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Fp(e,t);vo.test(n)?e.setProperty(Mn(r),n.replace(vo,""),"important"):e[r]=n}}const _o=["Webkit","Moz","ms"],fi={};function Fp(e,t){const n=fi[t];if(n)return n;let r=Pt(t);if(r!=="filter"&&r in e)return fi[t]=r;r=Ba(r);for(let a=0;a<_o.length;a++){const i=_o[a]+r;if(i in e)return fi[t]=i}return t}const ko="http://www.w3.org/1999/xlink";function wo(e,t,n,r,a,i=qd(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ko,t.slice(6,t.length)):e.setAttributeNS(ko,t,n):n==null||i&&!Yl(n)?e.removeAttribute(t):e.setAttribute(t,i?"":jt(n)?String(n):n)}function xo(e,t,n,r,a){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?eu(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,o=n==null?e.type==="checkbox"?"on":"":String(n);(l!==o||!("_value"in e))&&(e.value=o),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Yl(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(a||t)}function Wp(e,t,n,r){e.addEventListener(t,n,r)}function Up(e,t,n,r){e.removeEventListener(t,n,r)}const Eo=Symbol("_vei");function Bp(e,t,n,r,a=null){const i=e[Eo]||(e[Eo]={}),s=i[t];if(r&&s)s.value=r;else{const[l,o]=jp(t);if(r){const c=i[t]=Hp(r,a);Wp(e,l,c,o)}else s&&(Up(e,l,s,o),i[t]=void 0)}}const Ao=/(?:Once|Passive|Capture)$/;function jp(e){let t;if(Ao.test(e)){t={};let r;for(;r=e.match(Ao);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mn(e.slice(2)),t]}let pi=0;const Gp=Promise.resolve(),Vp=()=>pi||(Gp.then(()=>pi=0),pi=Date.now());function Hp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn(qp(r,n.value),t,5,[r])};return n.value=e,n.attached=Vp(),n}function qp(e,t){if(ce(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Io=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Kp=(e,t,n,r,a,i)=>{const s=a==="svg";t==="class"?Np(e,r,s):t==="style"?zp(e,n,r):Fa(t)?ls(t)||Bp(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yp(e,t,r,s))?(xo(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&wo(e,t,r,s,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ye(r))?xo(e,Pt(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wo(e,t,r,s))};function Yp(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Io(t)&&de(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Io(t)&&Ye(n)?!1:t in e}const Xp=["ctrl","shift","alt","meta"],Jp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Xp.some(n=>e[`${n}Key`]&&!t.includes(n))},Zp=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((a,...i)=>{for(let s=0;s<t.length;s++){const l=Jp[t[s]];if(l&&l(a,t))return}return e(a,...i)}))},Qp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},em=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(a=>{if(!("key"in a))return;const i=Mn(a.key);if(t.some(s=>s===i||Qp[s]===i))return e(a)}))},tm=pt({patchProp:Kp},Lp);let To;function nm(){return To||(To=pp(tm))}const rm=((...e)=>{const t=nm().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=im(r);if(!a)return;const i=t._component;!de(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const s=n(a,!1,am(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t});function am(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function im(e){return Ye(e)?document.querySelector(e):e}const nu="/logo.png";const sm=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const Co=e=>e==="";const om=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();const Po=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const lm=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());const cm=e=>{const t=lm(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Cr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const um=({name:e,iconNode:t,absoluteStrokeWidth:n,"absolute-stroke-width":r,strokeWidth:a,"stroke-width":i,size:s=Cr.width,color:l=Cr.stroke,...o},{slots:c})=>Mt("svg",{...Cr,...o,width:s,height:s,stroke:l,"stroke-width":Co(n)||Co(r)||n===!0||r===!0?Number(a||i||Cr["stroke-width"])*24/Number(s):a||i||Cr["stroke-width"],class:om("lucide",o.class,...e?[`lucide-${Po(cm(e))}-icon`,`lucide-${Po(e)}`]:["lucide-icon"]),...!c.default&&!sm(o)&&{"aria-hidden":"true"}},[...t.map(u=>Mt(...u)),...c.default?[c.default()]:[]]);const He=(e,t)=>(n,{slots:r,attrs:a})=>Mt(um,{...a,...n,iconNode:t,name:e},r);const Ra=He("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const dm=He("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);const fm=He("boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);const pm=He("brain-circuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);const mm=He("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);const Ui=He("clipboard-check",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);const gm=He("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);const ru=He("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const Na=He("file-search",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);const hm=He("git-branch",[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]);const So=He("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);const Ma=He("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);const ym=He("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);const bm=He("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);const vm=He("network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);const _m=He("orbit",[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]);const km=He("scale",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]);const wm=He("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);const xm=He("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);const au=He("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const Em=He("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);const Am=He("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);const Im=He("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const Bi=He("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);const Tm=He("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const cr=typeof document<"u";function iu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Cm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&iu(e.default)}const Se=Object.assign;function mi(e,t){const n={};for(const r in t){const a=t[r];n[r]=Vt(a)?a.map(e):e(a)}return n}const Wr=()=>{},Vt=Array.isArray;function Oo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}let Je=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const su=Symbol("");Je.MATCHER_NOT_FOUND+"",Je.NAVIGATION_GUARD_REDIRECT+"",Je.NAVIGATION_ABORTED+"",Je.NAVIGATION_CANCELLED+"",Je.NAVIGATION_DUPLICATED+"";function vr(e,t){return Se(new Error,{type:e,[su]:!0},t)}function ln(e,t){return e instanceof Error&&su in e&&(t==null||!!(e.type&t))}const Pm=["params","query","hash"];function Sm(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Pm)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const Om=Symbol(""),Lo=Symbol(""),Ps=Symbol(""),Ss=Symbol(""),ji=Symbol("");function Dn(e){return Nt(Ss)}const ou=/#/g,Lm=/&/g,Rm=/\//g,Nm=/=/g,Mm=/\?/g,lu=/\+/g,$m=/%5B/g,Dm=/%5D/g,cu=/%5E/g,zm=/%60/g,uu=/%7B/g,Fm=/%7C/g,du=/%7D/g,Wm=/%20/g;function Os(e){return e==null?"":encodeURI(""+e).replace(Fm,"|").replace($m,"[").replace(Dm,"]")}function Um(e){return Os(e).replace(uu,"{").replace(du,"}").replace(cu,"^")}function Gi(e){return Os(e).replace(lu,"%2B").replace(Wm,"+").replace(ou,"%23").replace(Lm,"%26").replace(zm,"`").replace(uu,"{").replace(du,"}").replace(cu,"^")}function Bm(e){return Gi(e).replace(Nm,"%3D")}function jm(e){return Os(e).replace(ou,"%23").replace(Mm,"%3F")}function Gm(e){return jm(e).replace(Rm,"%2F")}function qr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Vm=/\/$/,Hm=e=>e.replace(Vm,"");function gi(e,t,n="/"){let r,a={},i="",s="";const l=t.indexOf("#");let o=t.indexOf("?");return o=l>=0&&o>l?-1:o,o>=0&&(r=t.slice(0,o),i=t.slice(o,l>0?l:t.length),a=e(i.slice(1))),l>=0&&(r=r||t.slice(0,l),s=t.slice(l,t.length)),r=Xm(r??t,n),{fullPath:r+i+s,path:r,query:a,hash:qr(s)}}function qm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ro(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Km(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&_r(t.matched[r],n.matched[a])&&fu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function _r(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function fu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Ym(e[n],t[n]))return!1;return!0}function Ym(e,t){return Vt(e)?No(e,t):Vt(t)?No(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function No(e,t){return Vt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Xm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,s,l;for(s=0;s<r.length;s++)if(l=r[s],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s).join("/")}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Vi=(function(e){return e.pop="pop",e.push="push",e})({}),hi=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Jm(e){if(!e)if(cr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Hm(e)}const Zm=/^[^#]+#/;function Qm(e,t){return e.replace(Zm,"#")+t}function eg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ja=()=>({left:window.scrollX,top:window.scrollY});function tg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=eg(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Mo(e,t){return(history.state?history.state.position-t:-1)+e}const Hi=new Map;function ng(e,t){Hi.set(e,t)}function rg(e){const t=Hi.get(e);return Hi.delete(e),t}function ag(e){return typeof e=="string"||e&&typeof e=="object"}function pu(e){return typeof e=="string"||typeof e=="symbol"}function ig(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const a=n[r].replace(lu," "),i=a.indexOf("="),s=qr(i<0?a:a.slice(0,i)),l=i<0?null:qr(a.slice(i+1));if(s in t){let o=t[s];Vt(o)||(o=t[s]=[o]),o.push(l)}else t[s]=l}return t}function $o(e){let t="";for(let n in e){const r=e[n];if(n=Bm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Vt(r)?r.map(a=>a&&Gi(a)):[r&&Gi(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function sg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Vt(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function Pr(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Sn(e,t,n,r,a,i=s=>s()){const s=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((l,o)=>{const c=f=>{f===!1?o(vr(Je.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?o(f):ag(f)?o(vr(Je.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(s&&r.enterCallbacks[a]===s&&typeof f=="function"&&s.push(f),l())},u=i(()=>e.call(r&&r.instances[a],t,n,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(f=>o(f))})}function yi(e,t,n,r,a=i=>i()){const i=[];for(const s of e)for(const l in s.components){let o=s.components[l];if(!(t!=="beforeRouteEnter"&&!s.instances[l]))if(iu(o)){const c=(o.__vccOpts||o)[t];c&&i.push(Sn(c,n,r,s,l,a))}else{let c=o();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const d=Cm(u)?u.default:u;s.mods[l]=u,s.components[l]=d;const f=(d.__vccOpts||d)[t];return f&&Sn(f,n,r,s,l,a)()}))}}return i}function og(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const l=t.matched[s];l&&(e.matched.find(c=>_r(c,l))?r.push(l):n.push(l));const o=e.matched[s];o&&(t.matched.find(c=>_r(c,o))||a.push(o))}return[n,r,a]}let lg=()=>location.protocol+"//"+location.host;function mu(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ro(l,"")}return Ro(n,e)+r+a}function cg(e,t,n,r){let a=[],i=[],s=null;const l=({state:f})=>{const g=mu(e,location),A=n.value,E=t.value;let T=0;if(f){if(n.value=g,t.value=f,s&&s===A){s=null;return}T=E?f.position-E.position:0}else r(g);a.forEach(C=>{C(n.value,A,{delta:T,type:Vi.pop,direction:T?T>0?hi.forward:hi.back:hi.unknown})})};function o(){s=n.value}function c(f){a.push(f);const g=()=>{const A=a.indexOf(f);A>-1&&a.splice(A,1)};return i.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Se({},f.state,{scroll:Ja()}),"")}}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:o,listen:c,destroy:d}}function Do(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Ja():null}}function ug(e){const{history:t,location:n}=window,r={value:mu(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(o,c,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+o:lg()+e+o;try{t[u?"replaceState":"pushState"](c,"",f),a.value=c}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function s(o,c){i(o,Se({},t.state,Do(a.value.back,o,a.value.forward,!0),c,{position:a.value.position}),!0),r.value=o}function l(o,c){const u=Se({},a.value,t.state,{forward:o,scroll:Ja()});i(u.current,u,!0),i(o,Se({},Do(r.value,o,null),{position:u.position+1},c),!1),r.value=o}return{location:r,state:a,push:l,replace:s}}function dg(e){e=Jm(e);const t=ug(e),n=cg(e,t.state,t.location,t.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const a=Se({location:"",base:e,go:r,createHref:Qm.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}let Zn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var at=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(at||{});const fg={type:Zn.Static,value:""},pg=/[a-zA-Z0-9_]/;function mg(e){if(!e)return[[]];if(e==="/")return[[fg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=at.Static,r=n;const a=[];let i;function s(){i&&a.push(i),i=[]}let l=0,o,c="",u="";function d(){c&&(n===at.Static?i.push({type:Zn.Static,value:c}):n===at.Param||n===at.ParamRegExp||n===at.ParamRegExpEnd?(i.length>1&&(o==="*"||o==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Zn.Param,value:c,regexp:u,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=o}for(;l<e.length;){if(o=e[l++],o==="\\"&&n!==at.ParamRegExp){r=n,n=at.EscapeNext;continue}switch(n){case at.Static:o==="/"?(c&&d(),s()):o===":"?(d(),n=at.Param):f();break;case at.EscapeNext:f(),n=r;break;case at.Param:o==="("?n=at.ParamRegExp:pg.test(o)?f():(d(),n=at.Static,o!=="*"&&o!=="?"&&o!=="+"&&l--);break;case at.ParamRegExp:o===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+o:n=at.ParamRegExpEnd:u+=o;break;case at.ParamRegExpEnd:d(),n=at.Static,o!=="*"&&o!=="?"&&o!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===at.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),s(),a}const zo="[^/]+?",gg={sensitive:!1,strict:!1,start:!0,end:!0};var At=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(At||{});const hg=/[.+*?^${}()[\]/\\]/g;function yg(e,t){const n=Se({},gg,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[At.Root];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const f=c[d];let g=At.Segment+(n.sensitive?At.BonusCaseSensitive:0);if(f.type===Zn.Static)d||(a+="/"),a+=f.value.replace(hg,"\\$&"),g+=At.Static;else if(f.type===Zn.Param){const{value:A,repeatable:E,optional:T,regexp:C}=f;i.push({name:A,repeatable:E,optional:T});const R=C||zo;if(R!==zo){g+=At.BonusCustomRegExp;try{new RegExp(`(${R})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${A}" (${R}): `+x.message)}}let w=E?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(w=T&&c.length<2?`(?:/${w})`:"/"+w),T&&(w+="?"),a+=w,g+=At.Dynamic,T&&(g+=At.BonusOptional),E&&(g+=At.BonusRepeatable),R===".*"&&(g+=At.BonusWildcard)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=At.BonusStrict}n.strict||(a+="/?"),n.end?a+="$":n.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const s=new RegExp(a,n.sensitive?"":"i");function l(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",A=i[f-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function o(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of f)if(g.type===Zn.Static)u+=g.value;else if(g.type===Zn.Param){const{value:A,repeatable:E,optional:T}=g,C=A in c?c[A]:"";if(Vt(C)&&!E)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const R=Vt(C)?C.join("/"):C;if(!R)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);u+=R}}return u||"/"}return{re:s,score:r,keys:i,parse:l,stringify:o}}function bg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===At.Static+At.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===At.Static+At.Segment?1:-1:0}function gu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=bg(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Fo(r))return 1;if(Fo(a))return-1}return a.length-r.length}function Fo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const vg={strict:!1,end:!0,sensitive:!1};function _g(e,t,n){const r=yg(mg(e.path),n),a=Se(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function kg(e,t){const n=[],r=new Map;t=Oo(vg,t);function a(d){return r.get(d)}function i(d,f,g){const A=!g,E=Uo(d);E.aliasOf=g&&g.record;const T=Oo(t,d),C=[E];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of x)C.push(Uo(Se({},E,{components:g?g.record.components:E.components,path:D,aliasOf:g?g.record:E})))}let R,w;for(const x of C){const{path:D}=x;if(f&&D[0]!=="/"){const M=f.record.path,j=M[M.length-1]==="/"?"":"/";x.path=f.record.path+(D&&j+D)}if(R=_g(x,f,T),g?g.alias.push(R):(w=w||R,w!==R&&w.alias.push(R),A&&d.name&&!Bo(R)&&s(d.name)),hu(R)&&o(R),E.children){const M=E.children;for(let j=0;j<M.length;j++)i(M[j],R,g&&g.children[j])}g=g||R}return w?()=>{s(w)}:Wr}function s(d){if(pu(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function l(){return n}function o(d){const f=Eg(d,n);n.splice(f,0,d),d.record.name&&!Bo(d)&&r.set(d.record.name,d)}function c(d,f){let g,A={},E,T;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw vr(Je.MATCHER_NOT_FOUND,{location:d});T=g.record.name,A=Se(Wo(f.params,g.keys.filter(w=>!w.optional).concat(g.parent?g.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&Wo(d.params,g.keys.map(w=>w.name))),E=g.stringify(A)}else if(d.path!=null)E=d.path,g=n.find(w=>w.re.test(E)),g&&(A=g.parse(E),T=g.record.name);else{if(g=f.name?r.get(f.name):n.find(w=>w.re.test(f.path)),!g)throw vr(Je.MATCHER_NOT_FOUND,{location:d,currentLocation:f});T=g.record.name,A=Se({},f.params,d.params),E=g.stringify(A)}const C=[];let R=g;for(;R;)C.unshift(R.record),R=R.parent;return{name:T,path:E,params:A,matched:C,meta:xg(C)}}e.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:s,clearRoutes:u,getRoutes:l,getRecordMatcher:a}}function Wo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Uo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:wg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function wg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Bo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xg(e){return e.reduce((t,n)=>Se(t,n.meta),{})}function Eg(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;gu(e,t[i])<0?r=i:n=i+1}const a=Ag(e);return a&&(r=t.lastIndexOf(a,r-1)),r}function Ag(e){let t=e;for(;t=t.parent;)if(hu(t)&&gu(e,t)===0)return t}function hu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function jo(e){const t=Nt(Ps),n=Nt(Ss),r=ie(()=>{const o=p(e.to);return t.resolve(o)}),a=ie(()=>{const{matched:o}=r.value,{length:c}=o,u=o[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(_r.bind(null,u));if(f>-1)return f;const g=Go(o[c-2]);return c>1&&Go(u)===g&&d[d.length-1].path!==g?d.findIndex(_r.bind(null,o[c-2])):f}),i=ie(()=>a.value>-1&&Pg(n.params,r.value.params)),s=ie(()=>a.value>-1&&a.value===n.matched.length-1&&fu(n.params,r.value.params));function l(o={}){if(Cg(o)){const c=t[p(e.replace)?"replace":"push"](p(e.to)).catch(Wr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:i,isExactActive:s,navigate:l}}function Ig(e){return e.length===1?e[0]:e}const Tg=Ee({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jo,setup(e,{slots:t}){const n=Ln(jo(e)),{options:r}=Nt(Ps),a=ie(()=>({[Vo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Ig(t.default(n));return e.custom?i:Mt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Jn=Tg;function Cg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Pg(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Vt(a)||a.length!==r.length||r.some((i,s)=>i.valueOf()!==a[s].valueOf()))return!1}return!0}function Go(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Vo=(e,t,n)=>e??t??n,Sg=Ee({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Nt(ji),a=ie(()=>e.route||r.value),i=Nt(Lo,0),s=ie(()=>{let c=p(i);const{matched:u}=a.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=ie(()=>a.value.matched[s.value]);gr(Lo,ie(()=>s.value+1)),gr(Om,l),gr(ji,a);const o=he();return ot(()=>[o.value,l.value,e.name],([c,u,d],[f,g,A])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!_r(u,g)||!f)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=a.value,u=e.name,d=l.value,f=d&&d.components[u];if(!f)return Ho(n.default,{Component:f,route:c});const g=d.props[u],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,T=Mt(f,Se({},A,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[u]=null)},ref:o}));return Ho(n.default,{Component:T,route:c})||T}}});function Ho(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Og=Sg;function Lg(e){const t=kg(e.routes,e),n=e.parseQuery||ig,r=e.stringifyQuery||$o,a=e.history,i=Pr(),s=Pr(),l=Pr(),o=Qr(xn);let c=xn;cr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=mi.bind(null,W=>""+W),d=mi.bind(null,Gm),f=mi.bind(null,qr);function g(W,Z){let V,re;return pu(W)?(V=t.getRecordMatcher(W),re=Z):re=W,t.addRoute(re,V)}function A(W){const Z=t.getRecordMatcher(W);Z&&t.removeRoute(Z)}function E(){return t.getRoutes().map(W=>W.record)}function T(W){return!!t.getRecordMatcher(W)}function C(W,Z){if(Z=Se({},Z||o.value),typeof W=="string"){const b=gi(n,W,Z.path),N=t.resolve({path:b.path},Z),G=a.createHref(b.fullPath);return Se(b,N,{params:f(N.params),hash:qr(b.hash),redirectedFrom:void 0,href:G})}let V;if(W.path!=null)V=Se({},W,{path:gi(n,W.path,Z.path).path});else{const b=Se({},W.params);for(const N in b)b[N]==null&&delete b[N];V=Se({},W,{params:d(b)}),Z.params=d(Z.params)}const re=t.resolve(V,Z),ue=W.hash||"";re.params=u(f(re.params));const y=qm(r,Se({},W,{hash:Um(ue),path:re.path})),v=a.createHref(y);return Se({fullPath:y,hash:ue,query:r===$o?sg(W.query):W.query||{}},re,{redirectedFrom:void 0,href:v})}function R(W){return typeof W=="string"?gi(n,W,o.value.path):Se({},W)}function w(W,Z){if(c!==W)return vr(Je.NAVIGATION_CANCELLED,{from:Z,to:W})}function x(W){return j(W)}function D(W){return x(Se(R(W),{replace:!0}))}function M(W,Z){const V=W.matched[W.matched.length-1];if(V&&V.redirect){const{redirect:re}=V;let ue=typeof re=="function"?re(W,Z):re;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=R(ue):{path:ue},ue.params={}),Se({query:W.query,hash:W.hash,params:ue.path!=null?{}:W.params},ue)}}function j(W,Z){const V=c=C(W),re=o.value,ue=W.state,y=W.force,v=W.replace===!0,b=M(V,re);if(b)return j(Se(R(b),{state:typeof b=="object"?Se({},ue,b.state):ue,force:y,replace:v}),Z||V);const N=V;N.redirectedFrom=Z;let G;return!y&&Km(r,re,V)&&(G=vr(Je.NAVIGATION_DUPLICATED,{to:N,from:re}),Be(re,re,!0,!1)),(G?Promise.resolve(G):be(N,re)).catch(U=>ln(U)?ln(U,Je.NAVIGATION_GUARD_REDIRECT)?U:te(U):ve(U,N,re)).then(U=>{if(U){if(ln(U,Je.NAVIGATION_GUARD_REDIRECT))return j(Se({replace:v},R(U.to),{state:typeof U.to=="object"?Se({},ue,U.to.state):ue,force:y}),Z||N)}else U=oe(N,re,!0,v,ue);return $e(N,re,U),U})}function $(W,Z){const V=w(W,Z);return V?Promise.reject(V):Promise.resolve()}function B(W){const Z=ct.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(W):W()}function be(W,Z){let V;const[re,ue,y]=og(W,Z);V=yi(re.reverse(),"beforeRouteLeave",W,Z);for(const b of re)b.leaveGuards.forEach(N=>{V.push(Sn(N,W,Z))});const v=$.bind(null,W,Z);return V.push(v),xe(V).then(()=>{V=[];for(const b of i.list())V.push(Sn(b,W,Z));return V.push(v),xe(V)}).then(()=>{V=yi(ue,"beforeRouteUpdate",W,Z);for(const b of ue)b.updateGuards.forEach(N=>{V.push(Sn(N,W,Z))});return V.push(v),xe(V)}).then(()=>{V=[];for(const b of y)if(b.beforeEnter)if(Vt(b.beforeEnter))for(const N of b.beforeEnter)V.push(Sn(N,W,Z));else V.push(Sn(b.beforeEnter,W,Z));return V.push(v),xe(V)}).then(()=>(W.matched.forEach(b=>b.enterCallbacks={}),V=yi(y,"beforeRouteEnter",W,Z,B),V.push(v),xe(V))).then(()=>{V=[];for(const b of s.list())V.push(Sn(b,W,Z));return V.push(v),xe(V)}).catch(b=>ln(b,Je.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function $e(W,Z,V){l.list().forEach(re=>B(()=>re(W,Z,V)))}function oe(W,Z,V,re,ue){const y=w(W,Z);if(y)return y;const v=Z===xn,b=cr?history.state:{};V&&(re||v?a.replace(W.fullPath,Se({scroll:v&&b&&b.scroll},ue)):a.push(W.fullPath,ue)),o.value=W,Be(W,Z,V,v),te()}let Pe;function _t(){Pe||(Pe=a.listen((W,Z,V)=>{if(!Me.listening)return;const re=C(W),ue=M(re,Me.currentRoute.value);if(ue){j(Se(ue,{replace:!0,force:!0}),re).catch(Wr);return}c=re;const y=o.value;cr&&ng(Mo(y.fullPath,V.delta),Ja()),be(re,y).catch(v=>ln(v,Je.NAVIGATION_ABORTED|Je.NAVIGATION_CANCELLED)?v:ln(v,Je.NAVIGATION_GUARD_REDIRECT)?(j(Se(R(v.to),{force:!0}),re).then(b=>{ln(b,Je.NAVIGATION_ABORTED|Je.NAVIGATION_DUPLICATED)&&!V.delta&&V.type===Vi.pop&&a.go(-1,!1)}).catch(Wr),Promise.reject()):(V.delta&&a.go(-V.delta,!1),ve(v,re,y))).then(v=>{v=v||oe(re,y,!1),v&&(V.delta&&!ln(v,Je.NAVIGATION_CANCELLED)?a.go(-V.delta,!1):V.type===Vi.pop&&ln(v,Je.NAVIGATION_ABORTED|Je.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),$e(re,y,v)}).catch(Wr)}))}let tt=Pr(),ye=Pr(),ge;function ve(W,Z,V){te(W);const re=ye.list();return re.length?re.forEach(ue=>ue(W,Z,V)):console.error(W),Promise.reject(W)}function nt(){return ge&&o.value!==xn?Promise.resolve():new Promise((W,Z)=>{tt.add([W,Z])})}function te(W){return ge||(ge=!W,_t(),tt.list().forEach(([Z,V])=>W?V(W):Z()),tt.reset()),W}function Be(W,Z,V,re){const{scrollBehavior:ue}=e;if(!cr||!ue)return Promise.resolve();const y=!V&&rg(Mo(W.fullPath,0))||(re||!V)&&history.state&&history.state.scroll||null;return rn().then(()=>ue(W,Z,y)).then(v=>v&&tg(v)).catch(v=>ve(v,W,Z))}const je=W=>a.go(W);let kt;const ct=new Set,Me={currentRoute:o,listening:!0,addRoute:g,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:E,resolve:C,options:e,push:x,replace:D,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:ye.add,isReady:nt,install(W){W.component("RouterLink",Jn),W.component("RouterView",Og),W.config.globalProperties.$router=Me,Object.defineProperty(W.config.globalProperties,"$route",{enumerable:!0,get:()=>p(o)}),cr&&!kt&&o.value===xn&&(kt=!0,x(a.location).catch(re=>{}));const Z={};for(const re in xn)Object.defineProperty(Z,re,{get:()=>o.value[re],enumerable:!0});W.provide(Ps,Me),W.provide(Ss,mc(Z)),W.provide(ji,o);const V=W.unmount;ct.add(W),W.unmount=function(){ct.delete(W),ct.size<1&&(c=xn,Pe&&Pe(),Pe=null,o.value=xn,kt=!1,ge=!1),V()}}};function xe(W){return W.reduce((Z,V)=>Z.then(()=>B(V)),Promise.resolve())}return Me}function yu(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=yu(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function bu(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=yu(e))&&(r&&(r+=" "),r+=t);return r}const qo=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Ko=bu,vu=(e,t)=>n=>{var r;if(t?.variants==null)return Ko(e,n?.class,n?.className);const{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(c=>{const u=n?.[c],d=i?.[c];if(u===null)return null;const f=qo(u)||qo(d);return a[c][f]}),l=n&&Object.entries(n).reduce((c,u)=>{let[d,f]=u;return f===void 0||(c[d]=f),c},{}),o=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:d,className:f,...g}=u;return Object.entries(g).every(A=>{let[E,T]=A;return Array.isArray(T)?T.includes({...i,...l}[E]):{...i,...l}[E]===T})?[...c,d,f]:c},[]);return Ko(e,s,o,n?.class,n?.className)};function ia(e,t){const n=typeof e=="string"&&!t?`${e}Context`:t,r=Symbol(n);return[s=>{const l=Nt(r,s);if(l||l===null)return l;throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},s=>(gr(r,s),s)]}function en(){let e=document.activeElement;if(e==null)return null;for(;e!=null&&e.shadowRoot!=null&&e.shadowRoot.activeElement!=null;)e=e.shadowRoot.activeElement;return e}function _u(e,t,n){const r=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),r.dispatchEvent(a)}function Rg(e){return e==null}function Ng(e,t){return Ql()?(Yd(e,t),!0):!1}function Mg(e){let t=!1,n;const r=ds(!0);return((...a)=>(t||(n=r.run(()=>e(...a)),t=!0),n))}const sn=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const $g=e=>typeof e<"u",Dg=Object.prototype.toString,zg=e=>Dg.call(e)==="[object Object]",Yo=Fg();function Fg(){var e,t,n;return sn&&!!(!((e=window)===null||e===void 0||(e=e.navigator)===null||e===void 0)&&e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window)===null||t===void 0||(t=t.navigator)===null||t===void 0?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test((n=window)===null||n===void 0?void 0:n.navigator.userAgent))}function bi(e){return Array.isArray(e)?e:[e]}function Wg(e){return St()}function Ug(e){if(!sn)return e;let t=0,n,r;const a=()=>{t-=1,r&&t<=0&&(r.stop(),n=void 0,r=void 0)};return((...i)=>(t+=1,r||(r=ds(!0),n=r.run(()=>e(...i))),Ng(a),n))}function Bg(e){return Ln(Ke(e)?new Proxy({},{get(t,n,r){return p(Reflect.get(e.value,n,r))},set(t,n,r){return Ke(e.value[n])&&!Ke(r)?e.value[n].value=r:e.value[n]=r,!0},deleteProperty(t,n){return Reflect.deleteProperty(e.value,n)},has(t,n){return Reflect.has(e.value,n)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}}):e)}function jg(e){return Bg(ie(e))}function wn(e,...t){const n=t.flat(),r=n[0];return jg(()=>Object.fromEntries(typeof r=="function"?Object.entries(Rn(e)).filter(([a,i])=>!r(Bt(i),a)):Object.entries(Rn(e)).filter(a=>!n.includes(a[0]))))}function Gg(e,t){Wg()&&ks(e,t)}function Vg(e,t,n){return ot(e,t,{...n,immediate:!0})}const Ls=sn?window:void 0;function sa(e){var t;const n=Bt(e);return(t=n?.$el)!==null&&t!==void 0?t:n}function ku(...e){const t=(r,a,i,s)=>(r.addEventListener(a,i,s),()=>r.removeEventListener(a,i,s)),n=ie(()=>{const r=bi(Bt(e[0])).filter(a=>a!=null);return r.every(a=>typeof a!="string")?r:void 0});return Vg(()=>{var r,a;return[(r=(a=n.value)===null||a===void 0?void 0:a.map(i=>sa(i)))!==null&&r!==void 0?r:[Ls].filter(i=>i!=null),bi(Bt(n.value?e[1]:e[0])),bi(p(n.value?e[2]:e[1])),Bt(n.value?e[3]:e[2])]},([r,a,i,s],l,o)=>{if(!r?.length||!a?.length||!i?.length)return;const c=zg(s)?{...s}:s,u=r.flatMap(d=>a.flatMap(f=>i.map(g=>t(d,f,g,c))));o(()=>{u.forEach(d=>d())})},{flush:"post"})}function Hg(){const e=Qr(!1),t=St();return t&&$n(()=>{e.value=!0},t),e}function qg(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function Kg(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:a=Ls,eventName:i="keydown",passive:s=!1,dedupe:l=!1}=r,o=qg(t);return ku(a,i,u=>{u.repeat&&Bt(l)||o(u)&&n(u)},s)}function Yg(e){return JSON.parse(JSON.stringify(e))}function Rs(e,t,n,r={}){var a,i;const{clone:s=!1,passive:l=!1,eventName:o,deep:c=!1,defaultValue:u,shouldEmit:d}=r,f=St(),g=n||f?.emit||(f==null||(a=f.$emit)===null||a===void 0?void 0:a.bind(f))||(f==null||(i=f.proxy)===null||i===void 0||(i=i.$emit)===null||i===void 0?void 0:i.bind(f?.proxy));let A=o;t||(t="modelValue"),A=A||`update:${t.toString()}`;const E=R=>s?typeof s=="function"?s(R):Yg(R):R,T=()=>$g(e[t])?E(e[t]):u,C=R=>{d?d(R)&&g(A,R):g(A,R)};if(l){const R=he(T());let w=!1;return ot(()=>e[t],x=>{w||(w=!0,R.value=E(x),rn(()=>w=!1))}),ot(R,x=>{!w&&(x!==e[t]||c)&&C(x)},{deep:c}),R}else return ie({get(){return T()},set(R){C(R)}})}function Ns(e){return e?e.flatMap(t=>t.type===me?Ns(t.children):[t]):[]}const[wu]=ia("ConfigProvider");function vi(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function qi(e,t,n=".",r){if(!vi(t))return qi(e,{},n,r);const a={...t};for(const i of Object.keys(e)){if(i==="__proto__"||i==="constructor")continue;const s=e[i];s!=null&&(r&&r(a,i,s,n)||(Array.isArray(s)&&Array.isArray(a[i])?a[i]=[...s,...a[i]]:vi(s)&&vi(a[i])?a[i]=qi(s,a[i],(n?`${n}.`:"")+i.toString(),r):a[i]=s))}return a}function Xg(e){return(...t)=>t.reduce((n,r)=>qi(n,r,"",e),{})}const Jg=Xg(),Zg=Ug(()=>{const e=he(new Map),t=he(),n=ie(()=>{for(const s of e.value.values())if(s)return!0;return!1}),r=wu({scrollBody:he(!0)});let a=null;const i=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.documentElement.style.removeProperty("--scrollbar-width"),document.body.style.overflow=t.value??"",Yo&&a?.(),t.value=void 0};return ot(n,(s,l)=>{if(!sn)return;if(!s){l&&i();return}t.value===void 0&&(t.value=document.body.style.overflow);const o=window.innerWidth-document.documentElement.clientWidth,c={padding:o,margin:0},u=r.scrollBody?.value?typeof r.scrollBody.value=="object"?Jg({padding:r.scrollBody.value.padding===!0?o:r.scrollBody.value.padding,margin:r.scrollBody.value.margin===!0?o:r.scrollBody.value.margin},c):c:{padding:0,margin:0};o>0&&(document.body.style.paddingRight=typeof u.padding=="number"?`${u.padding}px`:String(u.padding),document.body.style.marginRight=typeof u.margin=="number"?`${u.margin}px`:String(u.margin),document.documentElement.style.setProperty("--scrollbar-width",`${o}px`),document.body.style.overflow="hidden"),Yo&&(a=ku(document,"touchmove",d=>eh(d),{passive:!1})),rn(()=>{n.value&&(document.body.style.pointerEvents="none",document.body.style.overflow="hidden")})},{immediate:!0,flush:"sync"}),e});function Qg(e){const t=Math.random().toString(36).substring(2,7),n=Zg();n.value.set(t,e);const r=ie({get:()=>n.value.get(t)??!1,set:a=>n.value.set(t,a)});return Gg(()=>{n.value.delete(t)}),r}function xu(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!(n instanceof Element)||n.tagName==="BODY"?!1:xu(n)}}function eh(e){const t=e||window.event,n=t.target;return n instanceof Element&&xu(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.cancelable&&t.preventDefault(),!1)}function Eu(e){const t=wu({dir:he("ltr")});return ie(()=>e?.value||t.dir?.value||"ltr")}function Za(e){const t=St(),n=t?.type.emits,r={};return n?.length||console.warn(`No emitted event found. Please check component: ${t?.type.__name}`),n?.forEach(a=>{r[va(Pt(a))]=(...i)=>e(a,...i)}),r}function mt(){const e=St(),t=he(),n=ie(()=>r());Oc(()=>{n.value!==r()&&yf(t)});function r(){return t.value&&"$el"in t.value&&["#text","#comment"].includes(t.value.$el.nodeName)?t.value.$el.nextElementSibling:sa(t)}const a=Object.assign({},e.exposed),i={};for(const l in e.props)Object.defineProperty(i,l,{enumerable:!0,configurable:!0,get:()=>e.props[l]});if(Object.keys(a).length>0)for(const l in a)Object.defineProperty(i,l,{enumerable:!0,configurable:!0,get:()=>a[l]});Object.defineProperty(i,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=i;function s(l){if(t.value=l,!!l&&(Object.defineProperty(i,"$el",{enumerable:!0,configurable:!0,get:()=>l instanceof Element?l:l.$el}),!(l instanceof Element)&&!Object.hasOwn(l,"$el"))){const o=l.$.exposed,c=Object.assign({},i);for(const u in o)Object.defineProperty(c,u,{enumerable:!0,configurable:!0,get:()=>o[u]});e.exposed=c}}return{forwardRef:s,currentRef:t,currentElement:n}}function Au(e){const t=St(),n=Object.keys(t?.type.props??{}).reduce((a,i)=>{const s=(t?.type.props[i]).default;return s!==void 0&&(a[i]=s),a},{}),r=kf(e);return ie(()=>{const a={},i=t?.vnode.props??{};return Object.keys(i).forEach(s=>{a[Pt(s)]=i[s]}),Object.keys({...n,...a}).reduce((s,l)=>(r.value[l]!==void 0&&(s[l]=r.value[l]),s),{})})}function Ms(e,t){const n=Au(e),r=t?Za(t):{};return ie(()=>({...n.value,...r}))}var th=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},or=new WeakMap,fa=new WeakMap,pa={},_i=0,Iu=function(e){return e&&(e.host||Iu(e.parentNode))},nh=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Iu(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},rh=function(e,t,n,r){var a=nh(t,Array.isArray(e)?e:[e]);pa[n]||(pa[n]=new WeakMap);var i=pa[n],s=[],l=new Set,o=new Set(a),c=function(d){!d||l.has(d)||(l.add(d),c(d.parentNode))};a.forEach(c);var u=function(d){!d||o.has(d)||Array.prototype.forEach.call(d.children,function(f){if(l.has(f))u(f);else try{var g=f.getAttribute(r),A=g!==null&&g!=="false",E=(or.get(f)||0)+1,T=(i.get(f)||0)+1;or.set(f,E),i.set(f,T),s.push(f),E===1&&A&&fa.set(f,!0),T===1&&f.setAttribute(n,"true"),A||f.setAttribute(r,"true")}catch(C){console.error("aria-hidden: cannot operate on ",f,C)}})};return u(t),l.clear(),_i++,function(){s.forEach(function(d){var f=or.get(d)-1,g=i.get(d)-1;or.set(d,f),i.set(d,g),f||(fa.has(d)||d.removeAttribute(r),fa.delete(d)),g||d.removeAttribute(n)}),_i--,_i||(or=new WeakMap,or=new WeakMap,fa=new WeakMap,pa={})}},ah=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=th(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live], script"))),rh(r,a,n,"aria-hidden")):function(){return null}};function ih(e){let t;ot(()=>sa(e),n=>{let r=!1;try{r=!!n?.closest("[popover]:not(:popover-open)")}catch{}n&&!r?t=ah(n):t&&t()}),rr(()=>{t&&t()})}function Kr(e,t="reka"){let n;return n=$f?.(),t?`${t}-${n}`:n}function sh(e,t){const n=he(e);function r(i){return t[n.value][i]??n.value}return{state:n,dispatch:i=>{n.value=r(i)}}}function oh(e,t){const n=he({}),r=he("none"),a=he(e),i=e.value?"mounted":"unmounted";let s;const l=t.value?.ownerDocument.defaultView??Ls,{state:o,dispatch:c}=sh(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),u=T=>{if(sn){const C=new CustomEvent(T,{bubbles:!1,cancelable:!1});t.value?.dispatchEvent(C)}};ot(e,async(T,C)=>{const R=C!==T;if(await rn(),R){const w=r.value,x=ma(t.value);T?(c("MOUNT"),u("enter"),x==="none"&&u("after-enter")):x==="none"||x==="undefined"||n.value?.display==="none"?(c("UNMOUNT"),u("leave"),u("after-leave")):C&&w!==x?(c("ANIMATION_OUT"),u("leave")):(c("UNMOUNT"),u("after-leave"))}},{immediate:!0});const d=T=>{const C=ma(t.value),R=C.includes(CSS.escape(T.animationName)),w=o.value==="mounted"?"enter":"leave";if(T.target===t.value&&R&&(u(`after-${w}`),c("ANIMATION_END"),!a.value)){const x=t.value.style.animationFillMode;t.value.style.animationFillMode="forwards",s=l?.setTimeout(()=>{t.value?.style.animationFillMode==="forwards"&&(t.value.style.animationFillMode=x)})}T.target===t.value&&C==="none"&&c("ANIMATION_END")},f=T=>{T.target===t.value&&(r.value=ma(t.value))},g=ot(t,(T,C)=>{T?(n.value=getComputedStyle(T),T.addEventListener("animationstart",f),T.addEventListener("animationcancel",d),T.addEventListener("animationend",d)):(c("ANIMATION_END"),s!==void 0&&l?.clearTimeout(s),C?.removeEventListener("animationstart",f),C?.removeEventListener("animationcancel",d),C?.removeEventListener("animationend",d))},{immediate:!0}),A=ot(o,()=>{const T=ma(t.value);r.value=o.value==="mounted"?T:"none"});return rr(()=>{g(),A()}),{isPresent:ie(()=>["mounted","unmountSuspended"].includes(o.value))}}function ma(e){return e&&getComputedStyle(e).animationName||"none"}var $s=Ee({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(e,{slots:t,expose:n}){const{present:r,forceMount:a}=Rn(e),i=he(),{isPresent:s}=oh(r,i);n({present:s});let l=t.default({present:s.value});l=Ns(l||[]);const o=St();if(l&&l?.length>1){const c=o?.parent?.type.name?`<${o.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${c}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(u=>`  - ${u}`).join(`
`)].join(`
`))}return()=>a.value||r.value||s.value?Mt(t.default({present:s.value})[0],{ref:c=>{const u=sa(c);return typeof u?.hasAttribute>"u"||(u?.hasAttribute("data-reka-popper-content-wrapper")?i.value=u.firstElementChild:i.value=u),u}}):null}});const Ki=Ee({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:n}){return()=>{if(!n.default)return null;const r=Ns(n.default()),a=r.findIndex(o=>o.type!==an);if(a===-1)return r;const i=r[a];delete i.props?.ref;const s=i.props?Xe(t,i.props):t,l=tr({...i,props:{}},s);return r.length===1?l:(r[a]=l,r)}}}),lh=["area","img","input"],gt=Ee({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:n}){const r=e.asChild?"template":e.as;return typeof r=="string"&&lh.includes(r)?()=>Mt(r,t):r!=="template"?()=>Mt(e.as,t,{default:n.default}):()=>Mt(Ki,t,{default:n.default})}});function Xo(){const e=he(),t=ie(()=>["#text","#comment"].includes(e.value?.$el.nodeName)?e.value?.$el.nextElementSibling:sa(e));return{primitiveElement:e,currentElement:t}}const[zn,ch]=ia("DialogRoot");var uh=Ee({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,required:!1,default:void 0},defaultOpen:{type:Boolean,required:!1,default:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(e,{emit:t}){const n=e,a=Rs(n,"open",t,{defaultValue:n.defaultOpen,passive:n.open===void 0}),i=he(),s=he(),{modal:l}=Rn(n);return ch({open:a,modal:l,openModal:()=>{a.value=!0},onOpenChange:o=>{a.value=o},onOpenToggle:()=>{a.value=!a.value},contentId:"",titleId:"",descriptionId:"",triggerElement:i,contentElement:s}),(o,c)=>pe(o.$slots,"default",{open:p(a),close:()=>a.value=!1})}}),dh=uh,fh=Ee({__name:"DialogClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e;mt();const n=zn();return(r,a)=>(L(),ee(p(gt),Xe(t,{type:r.as==="button"?"button":void 0,onClick:a[0]||(a[0]=i=>p(n).onOpenChange(!1))}),{default:_(()=>[pe(r.$slots,"default")]),_:3},16,["type"]))}}),ph=fh;const mh="dismissableLayer.pointerDownOutside",gh="dismissableLayer.focusOutside";function Tu(e,t){if(!(t instanceof Element))return!1;const n=t.closest("[data-dismissable-layer]"),r=e.dataset.dismissableLayer===""?e:e.querySelector("[data-dismissable-layer]"),a=Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));return!!(n&&(r===n||a.indexOf(r)<a.indexOf(n)))}function hh(e,t,n=!0){const r=t?.value?.ownerDocument??globalThis?.document,a=he(!1),i=he(()=>{});return _n(s=>{if(!sn||!Bt(n))return;const l=async c=>{const u=c.target;if(!(!t?.value||!u)){if(Tu(t.value,u)){a.value=!1;return}if(c.target&&!a.value){let g=function(){_u(mh,e,f)};var d=g;const f={originalEvent:c};c.pointerType==="touch"?(r.removeEventListener("click",i.value),i.value=g,r.addEventListener("click",i.value,{once:!0})):g()}else r.removeEventListener("click",i.value);a.value=!1}},o=window.setTimeout(()=>{r.addEventListener("pointerdown",l)},0);s(()=>{window.clearTimeout(o),r.removeEventListener("pointerdown",l),r.removeEventListener("click",i.value)})}),{onPointerDownCapture:()=>{Bt(n)&&(a.value=!0)}}}function yh(e,t,n=!0){const r=t?.value?.ownerDocument??globalThis?.document,a=he(!1);return _n(i=>{if(!sn||!Bt(n))return;const s=async l=>{if(!t?.value)return;await rn(),await rn();const o=l.target;!t.value||!o||Tu(t.value,o)||l.target&&!a.value&&_u(gh,e,{originalEvent:l})};r.addEventListener("focusin",s),i(()=>r.removeEventListener("focusin",s))}),{onFocusCapture:()=>{Bt(n)&&(a.value=!0)},onBlurCapture:()=>{Bt(n)&&(a.value=!1)}}}const $t=Ln({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,originalBodyPointerEvents:void 0,branches:new Set});var bh=Ee({__name:"DismissableLayer",props:{disableOutsidePointerEvents:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(e,{emit:t}){const n=e,r=t,{forwardRef:a,currentElement:i}=mt(),s=ie(()=>i.value?.ownerDocument??globalThis.document),l=ie(()=>$t.layersRoot),o=ie(()=>i.value?Array.from(l.value).indexOf(i.value):-1),c=ie(()=>$t.layersWithOutsidePointerEventsDisabled.size>0),u=ie(()=>{const g=Array.from(l.value),[A]=[...$t.layersWithOutsidePointerEventsDisabled].slice(-1),E=g.indexOf(A);return o.value>=E}),d=hh(async g=>{const A=[...$t.branches].some(E=>E?.contains(g.target));!u.value||A||(r("pointerDownOutside",g),r("interactOutside",g),await rn(),g.defaultPrevented||r("dismiss"))},i),f=yh(g=>{[...$t.branches].some(E=>E?.contains(g.target))||(r("focusOutside",g),r("interactOutside",g),g.defaultPrevented||r("dismiss"))},i);return Kg("Escape",g=>{o.value===l.value.size-1&&(r("escapeKeyDown",g),g.defaultPrevented||r("dismiss"))}),_n(g=>{i.value&&(n.disableOutsidePointerEvents&&($t.layersWithOutsidePointerEventsDisabled.size===0&&($t.originalBodyPointerEvents=s.value.body.style.pointerEvents,s.value.body.style.pointerEvents="none"),$t.layersWithOutsidePointerEventsDisabled.add(i.value)),l.value.add(i.value),g(()=>{n.disableOutsidePointerEvents&&$t.layersWithOutsidePointerEventsDisabled.size===1&&!Rg($t.originalBodyPointerEvents)&&(s.value.body.style.pointerEvents=$t.originalBodyPointerEvents)}))}),_n(g=>{g(()=>{i.value&&(l.value.delete(i.value),$t.layersWithOutsidePointerEventsDisabled.delete(i.value))})}),(g,A)=>(L(),ee(p(gt),{ref:p(a),"as-child":g.asChild,as:g.as,"data-dismissable-layer":"",style:nr({pointerEvents:c.value?u.value?"auto":"none":void 0}),onFocusCapture:p(f).onFocusCapture,onBlurCapture:p(f).onBlurCapture,onPointerdownCapture:p(d).onPointerDownCapture},{default:_(()=>[pe(g.$slots,"default")]),_:3},8,["as-child","as","style","onFocusCapture","onBlurCapture","onPointerdownCapture"]))}}),vh=bh;const _h=Mg(()=>he([]));function kh(){const e=_h();return{add(t){const n=e.value[0];t!==n&&n?.pause(),e.value=Jo(e.value,t),e.value.unshift(t)},remove(t){e.value=Jo(e.value,t),e.value[0]?.resume()}}}function Jo(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}const ki="focusScope.autoFocusOnMount",wi="focusScope.autoFocusOnUnmount",Zo={bubbles:!1,cancelable:!0};function wh(e,{select:t=!1}={}){const n=en();for(const r of e)if(Tn(r,{select:t}),en()!==n)return!0}function xh(e){const t=Cu(e),n=Qo(t,e),r=Qo(t.reverse(),e);return[n,r]}function Cu(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Qo(e,t){for(const n of e)if(!Eh(n,{upTo:t}))return n}function Eh(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ah(e){return e instanceof HTMLInputElement&&"select"in e}function Tn(e,{select:t=!1}={}){if(e&&e.focus){const n=en();e.focus({preventScroll:!0}),e!==n&&Ah(e)&&t&&e.select()}}var Ih=Ee({__name:"FocusScope",props:{loop:{type:Boolean,required:!1,default:!1},trapped:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["mountAutoFocus","unmountAutoFocus"],setup(e,{emit:t}){const n=e,r=t,{currentRef:a,currentElement:i}=mt(),s=he(null),l=kh(),o=Ln({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});_n(u=>{if(!sn)return;const d=i.value;if(!n.trapped)return;function f(T){if(o.paused||!d)return;const C=T.target;d.contains(C)?s.value=C:Tn(s.value,{select:!0})}function g(T){if(o.paused||!d)return;const C=T.relatedTarget;C!==null&&(d.contains(C)||Tn(s.value,{select:!0}))}function A(T){const C=s.value;if(C===null||!T.some(x=>x.removedNodes.length>0))return;d.contains(C)||Tn(d)}document.addEventListener("focusin",f),document.addEventListener("focusout",g);const E=new MutationObserver(A);d&&E.observe(d,{childList:!0,subtree:!0}),u(()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",g),E.disconnect()})}),_n(async u=>{const d=i.value;if(await rn(),!d)return;l.add(o);const f=en();if(!d.contains(f)){const A=new CustomEvent(ki,Zo);d.addEventListener(ki,E=>r("mountAutoFocus",E)),d.dispatchEvent(A),A.defaultPrevented||(wh(Cu(d),{select:!0}),en()===f&&Tn(d))}u(()=>{d.removeEventListener(ki,T=>r("mountAutoFocus",T));const A=new CustomEvent(wi,Zo),E=T=>{r("unmountAutoFocus",T)};d.addEventListener(wi,E),d.dispatchEvent(A),setTimeout(()=>{A.defaultPrevented||Tn(f??document.body,{select:!0}),d.removeEventListener(wi,E),l.remove(o)},0)})});function c(u){if(!n.loop&&!n.trapped||o.paused)return;const d=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,f=en();if(d&&f){const g=u.currentTarget,[A,E]=xh(g);A&&E?!u.shiftKey&&f===E?(u.preventDefault(),n.loop&&Tn(A,{select:!0})):u.shiftKey&&f===A&&(u.preventDefault(),n.loop&&Tn(E,{select:!0})):f===g&&u.preventDefault()}}return(u,d)=>(L(),ee(p(gt),{ref_key:"currentRef",ref:a,tabindex:"-1","as-child":u.asChild,as:u.as,onKeydown:c},{default:_(()=>[pe(u.$slots,"default")]),_:3},8,["as-child","as"]))}}),Th=Ih;function Ch(e){return e?"open":"closed"}var Ph=Ee({__name:"DialogContentImpl",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,r=t,a=zn(),{forwardRef:i,currentElement:s}=mt();return a.titleId||=Kr(void 0,"reka-dialog-title"),a.descriptionId||=Kr(void 0,"reka-dialog-description"),$n(()=>{a.contentElement=s,en()!==document.body&&(a.triggerElement.value=en())}),(l,o)=>(L(),ee(p(Th),{"as-child":"",loop:"",trapped:n.trapFocus,onMountAutoFocus:o[5]||(o[5]=c=>r("openAutoFocus",c)),onUnmountAutoFocus:o[6]||(o[6]=c=>r("closeAutoFocus",c))},{default:_(()=>[k(p(vh),Xe({id:p(a).contentId,ref:p(i),as:l.as,"as-child":l.asChild,"disable-outside-pointer-events":l.disableOutsidePointerEvents,role:"dialog","aria-describedby":p(a).descriptionId,"aria-labelledby":p(a).titleId,"data-state":p(Ch)(p(a).open.value)},l.$attrs,{onDismiss:o[0]||(o[0]=c=>p(a).onOpenChange(!1)),onEscapeKeyDown:o[1]||(o[1]=c=>r("escapeKeyDown",c)),onFocusOutside:o[2]||(o[2]=c=>r("focusOutside",c)),onInteractOutside:o[3]||(o[3]=c=>r("interactOutside",c)),onPointerDownOutside:o[4]||(o[4]=c=>r("pointerDownOutside",c))}),{default:_(()=>[pe(l.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),Pu=Ph,Sh=Ee({__name:"DialogContentModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,r=t,a=zn(),i=Za(r),{forwardRef:s,currentElement:l}=mt();return ih(l),(o,c)=>(L(),ee(Pu,Xe({...n,...p(i)},{ref:p(s),"trap-focus":p(a).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:c[0]||(c[0]=u=>{u.defaultPrevented||(u.preventDefault(),p(a).triggerElement.value?.focus())}),onPointerDownOutside:c[1]||(c[1]=u=>{const d=u.detail.originalEvent,f=d.button===0&&d.ctrlKey===!0;(d.button===2||f)&&u.preventDefault()}),onFocusOutside:c[2]||(c[2]=u=>{u.preventDefault()})}),{default:_(()=>[pe(o.$slots,"default")]),_:3},16,["trap-focus"]))}}),Oh=Sh,Lh=Ee({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,a=Za(t);mt();const i=zn(),s=he(!1),l=he(!1);return(o,c)=>(L(),ee(Pu,Xe({...n,...p(a)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:c[0]||(c[0]=u=>{u.defaultPrevented||(s.value||p(i).triggerElement.value?.focus(),u.preventDefault()),s.value=!1,l.value=!1}),onInteractOutside:c[1]||(c[1]=u=>{u.defaultPrevented||(s.value=!0,u.detail.originalEvent.type==="pointerdown"&&(l.value=!0));const d=u.target;p(i).triggerElement.value?.contains(d)&&u.preventDefault(),u.detail.originalEvent.type==="focusin"&&l.value&&u.preventDefault()})}),{default:_(()=>[pe(o.$slots,"default")]),_:3},16))}}),Rh=Lh,Nh=Ee({__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,r=t,a=zn(),i=Za(r),{forwardRef:s}=mt();return(l,o)=>(L(),ee(p($s),{present:l.forceMount||p(a).open.value},{default:_(()=>[p(a).modal.value?(L(),ee(Oh,Xe({key:0,ref:p(s)},{...n,...p(i),...l.$attrs}),{default:_(()=>[pe(l.$slots,"default")]),_:3},16)):(L(),ee(Rh,Xe({key:1,ref:p(s)},{...n,...p(i),...l.$attrs}),{default:_(()=>[pe(l.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),Mh=Nh,$h=Ee({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=zn();return Qg(!0),mt(),(n,r)=>(L(),ee(p(gt),{as:n.as,"as-child":n.asChild,"data-state":p(t).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:_(()=>[pe(n.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),Dh=$h,zh=Ee({__name:"DialogOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=zn(),{forwardRef:n}=mt();return(r,a)=>p(t)?.modal.value?(L(),ee(p($s),{key:0,present:r.forceMount||p(t).open.value},{default:_(()=>[k(Dh,Xe(r.$attrs,{ref:p(n),as:r.as,"as-child":r.asChild}),{default:_(()=>[pe(r.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):Xt("v-if",!0)}}),Fh=zh,Wh=Ee({__name:"Teleport",props:{to:{type:null,required:!1,default:"body"},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const t=Hg();return(n,r)=>p(t)||n.forceMount?(L(),ee(Nf,{key:0,to:n.to,disabled:n.disabled,defer:n.defer},[pe(n.$slots,"default")],8,["to","disabled","defer"])):Xt("v-if",!0)}}),Uh=Wh,Bh=Ee({__name:"DialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const t=e;return(n,r)=>(L(),ee(p(Uh),Ga(ra(t)),{default:_(()=>[pe(n.$slots,"default")]),_:3},16))}}),jh=Bh,Gh=Ee({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e,n=zn(),{forwardRef:r,currentElement:a}=mt();return n.contentId||=Kr(void 0,"reka-dialog-content"),$n(()=>{n.triggerElement.value=a.value}),(i,s)=>(L(),ee(p(gt),Xe(t,{ref:p(r),type:i.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":p(n).open.value||!1,"aria-controls":p(n).open.value?p(n).contentId:void 0,"data-state":p(n).open.value?"open":"closed",onClick:p(n).onOpenToggle}),{default:_(()=>[pe(i.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),Vh=Gh;const el="data-reka-collection-item";function Su(e={}){const{key:t="",isProvider:n=!1}=e,r=`${t}CollectionProvider`;let a;n?(a={collectionRef:he(),itemMap:he(new Map)},gr(r,a)):a=Nt(r);const i=(u=!1)=>{const d=a.collectionRef.value;if(!d)return[];const f=Array.from(d.querySelectorAll(`[${el}]`)),A=Array.from(a.itemMap.value.values()).sort((E,T)=>f.indexOf(E.ref)-f.indexOf(T.ref));return u?A:A.filter(E=>E.ref.dataset.disabled!=="")},s=Ee({name:"CollectionSlot",inheritAttrs:!1,setup(u,{slots:d,attrs:f}){const{primitiveElement:g,currentElement:A}=Xo();return ot(A,()=>{a.collectionRef.value=A.value}),()=>Mt(Ki,{ref:g,...f},d)}}),l=Ee({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(u,{slots:d,attrs:f}){const{primitiveElement:g,currentElement:A}=Xo();return _n(E=>{if(A.value){const T=gc(A.value);a.itemMap.value.set(T,{ref:A.value,value:u.value}),E(()=>a.itemMap.value.delete(T))}}),()=>Mt(Ki,{...f,[el]:"",ref:g},d)}}),o=ie(()=>Array.from(a.itemMap.value.values())),c=ie(()=>a.itemMap.value.size);return{getItems:i,reactiveItems:o,itemMapSize:c,CollectionSlot:s,CollectionItem:l}}const Hh="rovingFocusGroup.onEntryFocus",qh={bubbles:!1,cancelable:!0},Kh={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Yh(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Xh(e,t,n){const r=Yh(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Kh[r]}function Ou(e,t=!1){const n=en();for(const r of e)if(r===n||(r.focus({preventScroll:t}),en()!==n))return}function Jh(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const[Lu,Zh]=ia("AvatarRoot");var Qh=Ee({__name:"AvatarRoot",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){return mt(),Zh({imageLoadingStatus:he("idle")}),(t,n)=>(L(),ee(p(gt),{"as-child":t.asChild,as:t.as},{default:_(()=>[pe(t.$slots,"default")]),_:3},8,["as-child","as"]))}}),ey=Qh,ty=Ee({__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const t=e,n=Lu();mt();const r=he(t.delayMs===void 0);return _n(a=>{if(t.delayMs&&sn){const i=window.setTimeout(()=>{r.value=!0},t.delayMs);a(()=>{window.clearTimeout(i)})}}),(a,i)=>r.value&&p(n).imageLoadingStatus.value!=="loaded"?(L(),ee(p(gt),{key:0,"as-child":a.asChild,as:a.as},{default:_(()=>[pe(a.$slots,"default")]),_:3},8,["as-child","as"])):Xt("v-if",!0)}}),ny=ty;function tl(e,t){return e?t?(e.src!==t&&(e.src=t),e.complete&&e.naturalWidth>0?"loaded":"loading"):"error":"idle"}function ry(e,{referrerPolicy:t,crossOrigin:n}={}){const r=he(!1),a=he(null),i=ie(()=>r.value?(!a.value&&sn&&(a.value=new window.Image),a.value):null),s=he(tl(i.value,e.value)),l=o=>()=>{r.value&&(s.value=o)};return $n(()=>{r.value=!0,_n(o=>{const c=i.value;if(!c)return;s.value=tl(c,e.value);const u=l("loaded"),d=l("error");c.addEventListener("load",u),c.addEventListener("error",d),t?.value&&(c.referrerPolicy=t.value),typeof n?.value=="string"&&(c.crossOrigin=n.value),o(()=>{c.removeEventListener("load",u),c.removeEventListener("error",d)})})}),rr(()=>{r.value=!1}),s}var ay=Ee({__name:"AvatarImage",props:{src:{type:String,required:!0},referrerPolicy:{type:null,required:!1},crossOrigin:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"img"}},emits:["loadingStatusChange"],setup(e,{emit:t}){const n=e,r=t,{src:a,referrerPolicy:i,crossOrigin:s}=Rn(n);mt();const l=Lu(),o=ry(a,{referrerPolicy:i,crossOrigin:s});return ot(o,c=>{r("loadingStatusChange",c),c!=="idle"&&(l.imageLoadingStatus.value=c)},{immediate:!0}),(c,u)=>Ae((L(),ee(p(gt),{role:"img","as-child":c.asChild,as:c.as,src:p(a),referrerpolicy:p(i),crossorigin:p(s)},{default:_(()=>[pe(c.$slots,"default")]),_:3},8,["as-child","as","src","referrerpolicy","crossorigin"])),[[Mp,p(o)==="loaded"]])}}),iy=ay;const[sy,oy]=ia("RovingFocusGroup");var ly=Ee({__name:"RovingFocusGroup",props:{orientation:{type:String,required:!1,default:void 0},dir:{type:String,required:!1},loop:{type:Boolean,required:!1,default:!1},currentTabStopId:{type:[String,null],required:!1},defaultCurrentTabStopId:{type:String,required:!1},preventScrollOnEntryFocus:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["entryFocus","update:currentTabStopId"],setup(e,{expose:t,emit:n}){const r=e,a=n,{loop:i,orientation:s,dir:l}=Rn(r),o=Eu(l),c=Rs(r,"currentTabStopId",a,{defaultValue:r.defaultCurrentTabStopId,passive:r.currentTabStopId===void 0}),u=he(!1),d=he(!1),f=he(0),{getItems:g,CollectionSlot:A}=Su({isProvider:!0});function E(C){const R=!d.value;if(C.currentTarget&&C.target===C.currentTarget&&R&&!u.value){const w=new CustomEvent(Hh,qh);if(C.currentTarget.dispatchEvent(w),a("entryFocus",w),!w.defaultPrevented){const x=g().map(B=>B.ref).filter(B=>B.dataset.disabled!==""),D=x.find(B=>B.getAttribute("data-active")===""),M=x.find(B=>B.getAttribute("data-highlighted")===""),j=x.find(B=>B.id===c.value),$=[D,M,j,...x].filter(Boolean);Ou($,r.preventScrollOnEntryFocus)}}d.value=!1}function T(){setTimeout(()=>{d.value=!1},1)}return t({getItems:g}),oy({loop:i,dir:o,orientation:s,currentTabStopId:c,onItemFocus:C=>{c.value=C},onItemShiftTab:()=>{u.value=!0},onFocusableItemAdd:()=>{f.value++},onFocusableItemRemove:()=>{f.value--}}),(C,R)=>(L(),ee(p(A),null,{default:_(()=>[k(p(gt),{tabindex:u.value||f.value===0?-1:0,"data-orientation":p(s),as:C.as,"as-child":C.asChild,dir:p(o),style:{outline:"none"},onMousedown:R[0]||(R[0]=w=>d.value=!0),onMouseup:T,onFocus:E,onBlur:R[1]||(R[1]=w=>u.value=!1)},{default:_(()=>[pe(C.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"])]),_:3}))}}),cy=ly,uy=Ee({__name:"RovingFocusItem",props:{tabStopId:{type:String,required:!1},focusable:{type:Boolean,required:!1,default:!0},active:{type:Boolean,required:!1},allowShiftKey:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const t=e,n=sy(),r=Kr(),a=ie(()=>t.tabStopId||r),i=ie(()=>n.currentTabStopId.value===a.value),{getItems:s,CollectionItem:l}=Su();$n(()=>{t.focusable&&n.onFocusableItemAdd()}),rr(()=>{t.focusable&&n.onFocusableItemRemove()});function o(c){if(c.key==="Tab"&&c.shiftKey){n.onItemShiftTab();return}if(c.target!==c.currentTarget)return;const u=Xh(c,n.orientation.value,n.dir.value);if(u!==void 0){if(c.metaKey||c.ctrlKey||c.altKey||!t.allowShiftKey&&c.shiftKey)return;c.preventDefault();let d=[...s().map(f=>f.ref).filter(f=>f.dataset.disabled!=="")];if(u==="last")d.reverse();else if(u==="prev"||u==="next"){u==="prev"&&d.reverse();const f=d.indexOf(c.currentTarget);d=n.loop.value?Jh(d,f+1):d.slice(f+1)}rn(()=>Ou(d))}}return(c,u)=>(L(),ee(p(l),null,{default:_(()=>[k(p(gt),{tabindex:i.value?0:-1,"data-orientation":p(n).orientation.value,"data-active":c.active?"":void 0,"data-disabled":c.focusable?void 0:"",as:c.as,"as-child":c.asChild,onMousedown:u[0]||(u[0]=d=>{c.focusable?p(n).onItemFocus(a.value):d.preventDefault()}),onFocus:u[1]||(u[1]=d=>p(n).onItemFocus(a.value)),onKeydown:o},{default:_(()=>[pe(c.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),dy=uy,fy=Ee({__name:"BaseSeparator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e,n=["horizontal","vertical"];function r(l){return n.includes(l)}const a=ie(()=>r(t.orientation)?t.orientation:"horizontal"),i=ie(()=>a.value==="vertical"?t.orientation:void 0),s=ie(()=>t.decorative?{role:"none"}:{"aria-orientation":i.value,role:"separator"});return(l,o)=>(L(),ee(p(gt),Xe({as:l.as,"as-child":l.asChild,"data-orientation":a.value},s.value),{default:_(()=>[pe(l.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),py=fy,my=Ee({__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),ee(py,Ga(ra(t)),{default:_(()=>[pe(n.$slots,"default")]),_:3},16))}}),gy=my;const[Ds,hy]=ia("TabsRoot");var yy=Ee({__name:"TabsRoot",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},activationMode:{type:String,required:!1,default:"automatic"},modelValue:{type:null,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,{orientation:a,unmountOnHide:i,dir:s}=Rn(n),l=Eu(s);mt();const o=Rs(n,"modelValue",r,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),c=he(),u=Qr(new Set);return hy({modelValue:o,changeModelValue:d=>{o.value=d},orientation:a,dir:l,unmountOnHide:i,activationMode:n.activationMode,baseId:Kr(void 0,"reka-tabs"),tabsList:c,contentIds:u,registerContent:d=>{u.value=new Set([...u.value,d])},unregisterContent:d=>{const f=new Set(u.value);f.delete(d),u.value=f}}),(d,f)=>(L(),ee(p(gt),{dir:p(l),"data-orientation":p(a),"as-child":d.asChild,as:d.as},{default:_(()=>[pe(d.$slots,"default",{modelValue:p(o)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),by=yy;function Ru(e,t){return`${e}-trigger-${t}`}function Nu(e,t){return`${e}-content-${t}`}var vy=Ee({__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e,{forwardRef:n}=mt(),r=Ds(),a=ie(()=>Ru(r.baseId,t.value)),i=ie(()=>Nu(r.baseId,t.value)),s=ie(()=>t.value===r.modelValue.value),l=he(s.value);return $n(()=>{r.registerContent(t.value),requestAnimationFrame(()=>{l.value=!1})}),ks(()=>{r.unregisterContent(t.value)}),(o,c)=>(L(),ee(p($s),{present:o.forceMount||s.value,"force-mount":""},{default:_(({present:u})=>[k(p(gt),{id:i.value,ref:p(n),"as-child":o.asChild,as:o.as,role:"tabpanel","data-state":s.value?"active":"inactive","data-orientation":p(r).orientation.value,"aria-labelledby":a.value,hidden:!u,tabindex:"0",style:nr({animationDuration:l.value?"0s":void 0})},{default:_(()=>[!p(r).unmountOnHide.value||u?pe(o.$slots,"default",{key:0}):Xt("v-if",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),_y=vy,ky=Ee({__name:"TabsList",props:{loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e,{loop:n}=Rn(t),{forwardRef:r,currentElement:a}=mt(),i=Ds();return i.tabsList=a,(s,l)=>(L(),ee(p(cy),{"as-child":"",orientation:p(i).orientation.value,dir:p(i).dir.value,loop:p(n)},{default:_(()=>[k(p(gt),{ref:p(r),role:"tablist","as-child":s.asChild,as:s.as,"aria-orientation":p(i).orientation.value},{default:_(()=>[pe(s.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}}),wy=ky,xy=Ee({__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e,{forwardRef:n}=mt(),r=Ds(),a=ie(()=>Ru(r.baseId,t.value)),i=ie(()=>r.contentIds.value.has(t.value)?Nu(r.baseId,t.value):void 0),s=ie(()=>t.value===r.modelValue.value);return(l,o)=>(L(),ee(p(dy),{"as-child":"",focusable:!l.disabled,active:s.value},{default:_(()=>[k(p(gt),{id:a.value,ref:p(n),role:"tab",type:l.as==="button"?"button":void 0,as:l.as,"as-child":l.asChild,"aria-selected":s.value?"true":"false","aria-controls":i.value,"data-state":s.value?"active":"inactive",disabled:l.disabled,"data-disabled":l.disabled?"":void 0,"data-orientation":p(r).orientation.value,onMousedown:o[0]||(o[0]=Zp(c=>{!l.disabled&&c.ctrlKey===!1?p(r).changeModelValue(l.value):c.preventDefault()},["left"])),onKeydown:o[1]||(o[1]=em(c=>p(r).changeModelValue(l.value),["enter","space"])),onFocus:o[2]||(o[2]=()=>{const c=p(r).activationMode!=="manual";!s.value&&!l.disabled&&c&&p(r).changeModelValue(l.value)})},{default:_(()=>[pe(l.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),Ey=xy;const Ay=(e,t)=>{const n=new Array(e.length+t.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Iy=(e,t)=>({classGroupId:e,validator:t}),Mu=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),$a="-",nl=[],Ty="arbitrary..",Cy=e=>{const t=Sy(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{if(s.startsWith("[")&&s.endsWith("]"))return Py(s);const l=s.split($a),o=l[0]===""&&l.length>1?1:0;return $u(l,o,t)},getConflictingClassGroupIds:(s,l)=>{if(l){const o=r[s],c=n[s];return o?c?Ay(c,o):o:c||nl}return n[s]||nl}}},$u=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const a=e[t],i=n.nextPart.get(a);if(i){const c=$u(e,t+1,i);if(c)return c}const s=n.validators;if(s===null)return;const l=t===0?e.join($a):e.slice(t).join($a),o=s.length;for(let c=0;c<o;c++){const u=s[c];if(u.validator(l))return u.classGroupId}},Py=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),r=t.slice(0,n);return r?Ty+r:void 0})(),Sy=e=>{const{theme:t,classGroups:n}=e;return Oy(n,t)},Oy=(e,t)=>{const n=Mu();for(const r in e){const a=e[r];zs(a,n,r,t)}return n},zs=(e,t,n,r)=>{const a=e.length;for(let i=0;i<a;i++){const s=e[i];Ly(s,t,n,r)}},Ly=(e,t,n,r)=>{if(typeof e=="string"){Ry(e,t,n);return}if(typeof e=="function"){Ny(e,t,n,r);return}My(e,t,n,r)},Ry=(e,t,n)=>{const r=e===""?t:Du(t,e);r.classGroupId=n},Ny=(e,t,n,r)=>{if($y(e)){zs(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(Iy(n,e))},My=(e,t,n,r)=>{const a=Object.entries(e),i=a.length;for(let s=0;s<i;s++){const[l,o]=a[s];zs(o,Du(t,l),n,r)}},Du=(e,t)=>{let n=e;const r=t.split($a),a=r.length;for(let i=0;i<a;i++){const s=r[i];let l=n.nextPart.get(s);l||(l=Mu(),n.nextPart.set(s,l)),n=l}return n},$y=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,Dy=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null);const a=(i,s)=>{n[i]=s,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(i){let s=n[i];if(s!==void 0)return s;if((s=r[i])!==void 0)return a(i,s),s},set(i,s){i in n?n[i]=s:a(i,s)}}},Yi="!",rl=":",zy=[],al=(e,t,n,r,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:a}),Fy=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=a=>{const i=[];let s=0,l=0,o=0,c;const u=a.length;for(let E=0;E<u;E++){const T=a[E];if(s===0&&l===0){if(T===rl){i.push(a.slice(o,E)),o=E+1;continue}if(T==="/"){c=E;continue}}T==="["?s++:T==="]"?s--:T==="("?l++:T===")"&&l--}const d=i.length===0?a:a.slice(o);let f=d,g=!1;d.endsWith(Yi)?(f=d.slice(0,-1),g=!0):d.startsWith(Yi)&&(f=d.slice(1),g=!0);const A=c&&c>o?c-o:void 0;return al(i,g,f,A)};if(t){const a=t+rl,i=r;r=s=>s.startsWith(a)?i(s.slice(a.length)):al(zy,!1,s,void 0,!0)}if(n){const a=r;r=i=>n({className:i,parseClassName:a})}return r},Wy=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{t.set(n,1e6+r)}),n=>{const r=[];let a=[];for(let i=0;i<n.length;i++){const s=n[i],l=s[0]==="[",o=t.has(s);l||o?(a.length>0&&(a.sort(),r.push(...a),a=[]),r.push(s)):a.push(s)}return a.length>0&&(a.sort(),r.push(...a)),r}},Uy=e=>({cache:Dy(e.cacheSize),parseClassName:Fy(e),sortModifiers:Wy(e),...Cy(e)}),By=/\s+/,jy=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=t,s=[],l=e.trim().split(By);let o="";for(let c=l.length-1;c>=0;c-=1){const u=l[c],{isExternal:d,modifiers:f,hasImportantModifier:g,baseClassName:A,maybePostfixModifierPosition:E}=n(u);if(d){o=u+(o.length>0?" "+o:o);continue}let T=!!E,C=r(T?A.substring(0,E):A);if(!C){if(!T){o=u+(o.length>0?" "+o:o);continue}if(C=r(A),!C){o=u+(o.length>0?" "+o:o);continue}T=!1}const R=f.length===0?"":f.length===1?f[0]:i(f).join(":"),w=g?R+Yi:R,x=w+C;if(s.indexOf(x)>-1)continue;s.push(x);const D=a(C,T);for(let M=0;M<D.length;++M){const j=D[M];s.push(w+j)}o=u+(o.length>0?" "+o:o)}return o},Gy=(...e)=>{let t=0,n,r,a="";for(;t<e.length;)(n=e[t++])&&(r=zu(n))&&(a&&(a+=" "),a+=r);return a},zu=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=zu(e[r]))&&(n&&(n+=" "),n+=t);return n},Vy=(e,...t)=>{let n,r,a,i;const s=o=>{const c=t.reduce((u,d)=>d(u),e());return n=Uy(c),r=n.cache.get,a=n.cache.set,i=l,l(o)},l=o=>{const c=r(o);if(c)return c;const u=jy(o,n);return a(o,u),u};return i=s,(...o)=>i(Gy(...o))},Hy=[],rt=e=>{const t=n=>n[e]||Hy;return t.isThemeGetter=!0,t},Fu=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Wu=/^\((?:(\w[\w-]*):)?(.+)\)$/i,qy=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Ky=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Yy=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Xy=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Jy=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Zy=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,En=e=>qy.test(e),_e=e=>!!e&&!Number.isNaN(Number(e)),An=e=>!!e&&Number.isInteger(Number(e)),xi=e=>e.endsWith("%")&&_e(e.slice(0,-1)),cn=e=>Ky.test(e),Uu=()=>!0,Qy=e=>Yy.test(e)&&!Xy.test(e),Fs=()=>!1,eb=e=>Jy.test(e),tb=e=>Zy.test(e),nb=e=>!ne(e)&&!ae(e),rb=e=>Fn(e,Gu,Fs),ne=e=>Fu.test(e),qn=e=>Fn(e,Vu,Qy),il=e=>Fn(e,db,_e),ab=e=>Fn(e,qu,Uu),ib=e=>Fn(e,Hu,Fs),sl=e=>Fn(e,Bu,Fs),sb=e=>Fn(e,ju,tb),ga=e=>Fn(e,Ku,eb),ae=e=>Wu.test(e),Sr=e=>ar(e,Vu),ob=e=>ar(e,Hu),ol=e=>ar(e,Bu),lb=e=>ar(e,Gu),cb=e=>ar(e,ju),ha=e=>ar(e,Ku,!0),ub=e=>ar(e,qu,!0),Fn=(e,t,n)=>{const r=Fu.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},ar=(e,t,n=!1)=>{const r=Wu.exec(e);return r?r[1]?t(r[1]):n:!1},Bu=e=>e==="position"||e==="percentage",ju=e=>e==="image"||e==="url",Gu=e=>e==="length"||e==="size"||e==="bg-size",Vu=e=>e==="length",db=e=>e==="number",Hu=e=>e==="family-name",qu=e=>e==="number"||e==="weight",Ku=e=>e==="shadow",fb=()=>{const e=rt("color"),t=rt("font"),n=rt("text"),r=rt("font-weight"),a=rt("tracking"),i=rt("leading"),s=rt("breakpoint"),l=rt("container"),o=rt("spacing"),c=rt("radius"),u=rt("shadow"),d=rt("inset-shadow"),f=rt("text-shadow"),g=rt("drop-shadow"),A=rt("blur"),E=rt("perspective"),T=rt("aspect"),C=rt("ease"),R=rt("animate"),w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],x=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],D=()=>[...x(),ae,ne],M=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],$=()=>[ae,ne,o],B=()=>[En,"full","auto",...$()],be=()=>[An,"none","subgrid",ae,ne],$e=()=>["auto",{span:["full",An,ae,ne]},An,ae,ne],oe=()=>[An,"auto",ae,ne],Pe=()=>["auto","min","max","fr",ae,ne],_t=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],tt=()=>["start","end","center","stretch","center-safe","end-safe"],ye=()=>["auto",...$()],ge=()=>[En,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...$()],ve=()=>[En,"screen","full","dvw","lvw","svw","min","max","fit",...$()],nt=()=>[En,"screen","full","lh","dvh","lvh","svh","min","max","fit",...$()],te=()=>[e,ae,ne],Be=()=>[...x(),ol,sl,{position:[ae,ne]}],je=()=>["no-repeat",{repeat:["","x","y","space","round"]}],kt=()=>["auto","cover","contain",lb,rb,{size:[ae,ne]}],ct=()=>[xi,Sr,qn],Me=()=>["","none","full",c,ae,ne],xe=()=>["",_e,Sr,qn],W=()=>["solid","dashed","dotted","double"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>[_e,xi,ol,sl],re=()=>["","none",A,ae,ne],ue=()=>["none",_e,ae,ne],y=()=>["none",_e,ae,ne],v=()=>[_e,ae,ne],b=()=>[En,"full",...$()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[cn],breakpoint:[cn],color:[Uu],container:[cn],"drop-shadow":[cn],ease:["in","out","in-out"],font:[nb],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[cn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[cn],shadow:[cn],spacing:["px",_e],text:[cn],"text-shadow":[cn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",En,ne,ae,T]}],container:["container"],columns:[{columns:[_e,ne,ae,l]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:D()}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:B()}],"inset-x":[{"inset-x":B()}],"inset-y":[{"inset-y":B()}],start:[{"inset-s":B(),start:B()}],end:[{"inset-e":B(),end:B()}],"inset-bs":[{"inset-bs":B()}],"inset-be":[{"inset-be":B()}],top:[{top:B()}],right:[{right:B()}],bottom:[{bottom:B()}],left:[{left:B()}],visibility:["visible","invisible","collapse"],z:[{z:[An,"auto",ae,ne]}],basis:[{basis:[En,"full","auto",l,...$()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[_e,En,"auto","initial","none",ne]}],grow:[{grow:["",_e,ae,ne]}],shrink:[{shrink:["",_e,ae,ne]}],order:[{order:[An,"first","last","none",ae,ne]}],"grid-cols":[{"grid-cols":be()}],"col-start-end":[{col:$e()}],"col-start":[{"col-start":oe()}],"col-end":[{"col-end":oe()}],"grid-rows":[{"grid-rows":be()}],"row-start-end":[{row:$e()}],"row-start":[{"row-start":oe()}],"row-end":[{"row-end":oe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Pe()}],"auto-rows":[{"auto-rows":Pe()}],gap:[{gap:$()}],"gap-x":[{"gap-x":$()}],"gap-y":[{"gap-y":$()}],"justify-content":[{justify:[..._t(),"normal"]}],"justify-items":[{"justify-items":[...tt(),"normal"]}],"justify-self":[{"justify-self":["auto",...tt()]}],"align-content":[{content:["normal",..._t()]}],"align-items":[{items:[...tt(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...tt(),{baseline:["","last"]}]}],"place-content":[{"place-content":_t()}],"place-items":[{"place-items":[...tt(),"baseline"]}],"place-self":[{"place-self":["auto",...tt()]}],p:[{p:$()}],px:[{px:$()}],py:[{py:$()}],ps:[{ps:$()}],pe:[{pe:$()}],pbs:[{pbs:$()}],pbe:[{pbe:$()}],pt:[{pt:$()}],pr:[{pr:$()}],pb:[{pb:$()}],pl:[{pl:$()}],m:[{m:ye()}],mx:[{mx:ye()}],my:[{my:ye()}],ms:[{ms:ye()}],me:[{me:ye()}],mbs:[{mbs:ye()}],mbe:[{mbe:ye()}],mt:[{mt:ye()}],mr:[{mr:ye()}],mb:[{mb:ye()}],ml:[{ml:ye()}],"space-x":[{"space-x":$()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":$()}],"space-y-reverse":["space-y-reverse"],size:[{size:ge()}],"inline-size":[{inline:["auto",...ve()]}],"min-inline-size":[{"min-inline":["auto",...ve()]}],"max-inline-size":[{"max-inline":["none",...ve()]}],"block-size":[{block:["auto",...nt()]}],"min-block-size":[{"min-block":["auto",...nt()]}],"max-block-size":[{"max-block":["none",...nt()]}],w:[{w:[l,"screen",...ge()]}],"min-w":[{"min-w":[l,"screen","none",...ge()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[s]},...ge()]}],h:[{h:["screen","lh",...ge()]}],"min-h":[{"min-h":["screen","lh","none",...ge()]}],"max-h":[{"max-h":["screen","lh",...ge()]}],"font-size":[{text:["base",n,Sr,qn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,ub,ab]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",xi,ne]}],"font-family":[{font:[ob,ib,t]}],"font-features":[{"font-features":[ne]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,ae,ne]}],"line-clamp":[{"line-clamp":[_e,"none",ae,il]}],leading:[{leading:[i,...$()]}],"list-image":[{"list-image":["none",ae,ne]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ae,ne]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:te()}],"text-color":[{text:te()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:[_e,"from-font","auto",ae,qn]}],"text-decoration-color":[{decoration:te()}],"underline-offset":[{"underline-offset":[_e,"auto",ae,ne]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ae,ne]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ae,ne]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Be()}],"bg-repeat":[{bg:je()}],"bg-size":[{bg:kt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},An,ae,ne],radial:["",ae,ne],conic:[An,ae,ne]},cb,sb]}],"bg-color":[{bg:te()}],"gradient-from-pos":[{from:ct()}],"gradient-via-pos":[{via:ct()}],"gradient-to-pos":[{to:ct()}],"gradient-from":[{from:te()}],"gradient-via":[{via:te()}],"gradient-to":[{to:te()}],rounded:[{rounded:Me()}],"rounded-s":[{"rounded-s":Me()}],"rounded-e":[{"rounded-e":Me()}],"rounded-t":[{"rounded-t":Me()}],"rounded-r":[{"rounded-r":Me()}],"rounded-b":[{"rounded-b":Me()}],"rounded-l":[{"rounded-l":Me()}],"rounded-ss":[{"rounded-ss":Me()}],"rounded-se":[{"rounded-se":Me()}],"rounded-ee":[{"rounded-ee":Me()}],"rounded-es":[{"rounded-es":Me()}],"rounded-tl":[{"rounded-tl":Me()}],"rounded-tr":[{"rounded-tr":Me()}],"rounded-br":[{"rounded-br":Me()}],"rounded-bl":[{"rounded-bl":Me()}],"border-w":[{border:xe()}],"border-w-x":[{"border-x":xe()}],"border-w-y":[{"border-y":xe()}],"border-w-s":[{"border-s":xe()}],"border-w-e":[{"border-e":xe()}],"border-w-bs":[{"border-bs":xe()}],"border-w-be":[{"border-be":xe()}],"border-w-t":[{"border-t":xe()}],"border-w-r":[{"border-r":xe()}],"border-w-b":[{"border-b":xe()}],"border-w-l":[{"border-l":xe()}],"divide-x":[{"divide-x":xe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":xe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...W(),"hidden","none"]}],"divide-style":[{divide:[...W(),"hidden","none"]}],"border-color":[{border:te()}],"border-color-x":[{"border-x":te()}],"border-color-y":[{"border-y":te()}],"border-color-s":[{"border-s":te()}],"border-color-e":[{"border-e":te()}],"border-color-bs":[{"border-bs":te()}],"border-color-be":[{"border-be":te()}],"border-color-t":[{"border-t":te()}],"border-color-r":[{"border-r":te()}],"border-color-b":[{"border-b":te()}],"border-color-l":[{"border-l":te()}],"divide-color":[{divide:te()}],"outline-style":[{outline:[...W(),"none","hidden"]}],"outline-offset":[{"outline-offset":[_e,ae,ne]}],"outline-w":[{outline:["",_e,Sr,qn]}],"outline-color":[{outline:te()}],shadow:[{shadow:["","none",u,ha,ga]}],"shadow-color":[{shadow:te()}],"inset-shadow":[{"inset-shadow":["none",d,ha,ga]}],"inset-shadow-color":[{"inset-shadow":te()}],"ring-w":[{ring:xe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:te()}],"ring-offset-w":[{"ring-offset":[_e,qn]}],"ring-offset-color":[{"ring-offset":te()}],"inset-ring-w":[{"inset-ring":xe()}],"inset-ring-color":[{"inset-ring":te()}],"text-shadow":[{"text-shadow":["none",f,ha,ga]}],"text-shadow-color":[{"text-shadow":te()}],opacity:[{opacity:[_e,ae,ne]}],"mix-blend":[{"mix-blend":[...Z(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Z()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[_e]}],"mask-image-linear-from-pos":[{"mask-linear-from":V()}],"mask-image-linear-to-pos":[{"mask-linear-to":V()}],"mask-image-linear-from-color":[{"mask-linear-from":te()}],"mask-image-linear-to-color":[{"mask-linear-to":te()}],"mask-image-t-from-pos":[{"mask-t-from":V()}],"mask-image-t-to-pos":[{"mask-t-to":V()}],"mask-image-t-from-color":[{"mask-t-from":te()}],"mask-image-t-to-color":[{"mask-t-to":te()}],"mask-image-r-from-pos":[{"mask-r-from":V()}],"mask-image-r-to-pos":[{"mask-r-to":V()}],"mask-image-r-from-color":[{"mask-r-from":te()}],"mask-image-r-to-color":[{"mask-r-to":te()}],"mask-image-b-from-pos":[{"mask-b-from":V()}],"mask-image-b-to-pos":[{"mask-b-to":V()}],"mask-image-b-from-color":[{"mask-b-from":te()}],"mask-image-b-to-color":[{"mask-b-to":te()}],"mask-image-l-from-pos":[{"mask-l-from":V()}],"mask-image-l-to-pos":[{"mask-l-to":V()}],"mask-image-l-from-color":[{"mask-l-from":te()}],"mask-image-l-to-color":[{"mask-l-to":te()}],"mask-image-x-from-pos":[{"mask-x-from":V()}],"mask-image-x-to-pos":[{"mask-x-to":V()}],"mask-image-x-from-color":[{"mask-x-from":te()}],"mask-image-x-to-color":[{"mask-x-to":te()}],"mask-image-y-from-pos":[{"mask-y-from":V()}],"mask-image-y-to-pos":[{"mask-y-to":V()}],"mask-image-y-from-color":[{"mask-y-from":te()}],"mask-image-y-to-color":[{"mask-y-to":te()}],"mask-image-radial":[{"mask-radial":[ae,ne]}],"mask-image-radial-from-pos":[{"mask-radial-from":V()}],"mask-image-radial-to-pos":[{"mask-radial-to":V()}],"mask-image-radial-from-color":[{"mask-radial-from":te()}],"mask-image-radial-to-color":[{"mask-radial-to":te()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":x()}],"mask-image-conic-pos":[{"mask-conic":[_e]}],"mask-image-conic-from-pos":[{"mask-conic-from":V()}],"mask-image-conic-to-pos":[{"mask-conic-to":V()}],"mask-image-conic-from-color":[{"mask-conic-from":te()}],"mask-image-conic-to-color":[{"mask-conic-to":te()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Be()}],"mask-repeat":[{mask:je()}],"mask-size":[{mask:kt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ae,ne]}],filter:[{filter:["","none",ae,ne]}],blur:[{blur:re()}],brightness:[{brightness:[_e,ae,ne]}],contrast:[{contrast:[_e,ae,ne]}],"drop-shadow":[{"drop-shadow":["","none",g,ha,ga]}],"drop-shadow-color":[{"drop-shadow":te()}],grayscale:[{grayscale:["",_e,ae,ne]}],"hue-rotate":[{"hue-rotate":[_e,ae,ne]}],invert:[{invert:["",_e,ae,ne]}],saturate:[{saturate:[_e,ae,ne]}],sepia:[{sepia:["",_e,ae,ne]}],"backdrop-filter":[{"backdrop-filter":["","none",ae,ne]}],"backdrop-blur":[{"backdrop-blur":re()}],"backdrop-brightness":[{"backdrop-brightness":[_e,ae,ne]}],"backdrop-contrast":[{"backdrop-contrast":[_e,ae,ne]}],"backdrop-grayscale":[{"backdrop-grayscale":["",_e,ae,ne]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_e,ae,ne]}],"backdrop-invert":[{"backdrop-invert":["",_e,ae,ne]}],"backdrop-opacity":[{"backdrop-opacity":[_e,ae,ne]}],"backdrop-saturate":[{"backdrop-saturate":[_e,ae,ne]}],"backdrop-sepia":[{"backdrop-sepia":["",_e,ae,ne]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":$()}],"border-spacing-x":[{"border-spacing-x":$()}],"border-spacing-y":[{"border-spacing-y":$()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ae,ne]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[_e,"initial",ae,ne]}],ease:[{ease:["linear","initial",C,ae,ne]}],delay:[{delay:[_e,ae,ne]}],animate:[{animate:["none",R,ae,ne]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[E,ae,ne]}],"perspective-origin":[{"perspective-origin":D()}],rotate:[{rotate:ue()}],"rotate-x":[{"rotate-x":ue()}],"rotate-y":[{"rotate-y":ue()}],"rotate-z":[{"rotate-z":ue()}],scale:[{scale:y()}],"scale-x":[{"scale-x":y()}],"scale-y":[{"scale-y":y()}],"scale-z":[{"scale-z":y()}],"scale-3d":["scale-3d"],skew:[{skew:v()}],"skew-x":[{"skew-x":v()}],"skew-y":[{"skew-y":v()}],transform:[{transform:[ae,ne,"","none","gpu","cpu"]}],"transform-origin":[{origin:D()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:b()}],"translate-x":[{"translate-x":b()}],"translate-y":[{"translate-y":b()}],"translate-z":[{"translate-z":b()}],"translate-none":["translate-none"],accent:[{accent:te()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:te()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ae,ne]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mbs":[{"scroll-mbs":$()}],"scroll-mbe":[{"scroll-mbe":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pbs":[{"scroll-pbs":$()}],"scroll-pbe":[{"scroll-pbe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ae,ne]}],fill:[{fill:["none",...te()]}],"stroke-w":[{stroke:[_e,Sr,qn,il]}],stroke:[{stroke:["none",...te()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},pb=Vy(fb);function st(...e){return pb(bu(e))}const Ct={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e;return(n,r)=>(L(),ee(p(gt),{"data-slot":"button","data-variant":e.variant,"data-size":e.size,as:e.as,"as-child":e.asChild,class:Ge(p(st)(p(mb)({variant:e.variant,size:e.size}),t.class))},{default:_(()=>[pe(n.$slots,"default")]),_:3},8,["data-variant","data-size","as","as-child","class"]))}},mb=vu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",outline:"border border-border bg-background shadow-xs hover:bg-card",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-card",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),Yu={__name:"Separator",props:{orientation:{type:String,required:!1,default:"horizontal"},decorative:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=wn(t,"class");return(r,a)=>(L(),ee(p(gy),Xe({"data-slot":"separator"},p(n),{class:p(st)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",t.class)}),null,16,["class"]))}},Xu=["en","tr"],Xi=[{name:"home",labelKey:"navbar.home"},{name:"about",labelKey:"navbar.about"},{name:"governance",labelKey:"navbar.governance"},{name:"research",labelKey:"navbar.research"},{name:"services",labelKey:"navbar.services"},{name:"products",labelKey:"navbar.products"},{name:"privacy",labelKey:"navbar.privacy"},{name:"team",labelKey:"navbar.ourTeams"}],Ju=[{titleKey:"publications.diceExtended.title",descriptionKey:"publications.diceExtended.description",href:"https://link.springer.com/chapter/10.1007/978-3-032-08384-5_25"},{titleKey:"publications.highStakes.title",descriptionKey:"publications.highStakes.description",href:""}],gb=[{name:"Prof. Dr. Sureyya Ozogur-Akyuz",roleKey:"teamMembers.sureyya.role",bioKey:"teamMembers.sureyya.bio",image:"/SA.JPG",initials:"SA"},{name:"Qazaleh Afrough",roleKey:"teamMembers.qazaleh.role",bioKey:"teamMembers.qazaleh.bio",image:"/QA.JPG",initials:"QA"},{name:"Faramarz Mehrnami",roleKey:"teamMembers.faramarz.role",bioKey:"teamMembers.faramarz.bio",image:"/FM.JPG",initials:"FM"},{name:"Dilara Karaduman",roleKey:"teamMembers.dilara.role",bioKey:"teamMembers.dilara.bio",image:"/DL.JPG",initials:"DK"},{name:"Nisa Yegin",roleKey:"teamMembers.nisa.role",bioKey:"teamMembers.nisa.bio",image:"/NY.JPG",initials:"NY"}];function oa(e){return Xu.includes(e)?e:"en"}function Ji(){return typeof window>"u"?"en":oa(window.localStorage.getItem("locale")||"en")}const hb={class:"px-4 pb-8 sm:px-6 lg:px-8"},yb={class:"mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-primary/10 bg-primary px-6 py-8 text-white shadow-[0_24px_54px_-36px_rgba(23,56,75,0.38)]"},bb={class:"grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]"},vb={class:"space-y-4"},_b={class:"flex items-center gap-3"},kb={class:"text-sm text-white/72"},wb={href:"mailto:info@trustai.com.tr"},xb={class:"space-y-3"},Eb={class:"text-sm font-bold uppercase tracking-[0.2em] text-accent"},Ab={class:"grid gap-1"},Ib={class:"space-y-3"},Tb={class:"text-sm font-bold uppercase tracking-[0.2em] text-accent"},Cb={class:"flex items-start gap-3 text-sm leading-7 text-white/72"},Pb={class:"flex items-start gap-3 text-sm leading-7 text-white/72"},Sb={class:"text-sm text-white/60"},Ob={__name:"Footer",setup(e){const t=Dn(),n=ie(()=>oa(t.params.locale));return(r,a)=>(L(),X("footer",hb,[I("div",yb,[a[4]||(a[4]=I("div",{class:"absolute"},null,-1)),I("div",bb,[I("div",vb,[I("div",_b,[a[1]||(a[1]=I("img",{src:nu,alt:"TrustAI",class:"h-14 w-auto object-contain"},null,-1)),I("div",null,[a[0]||(a[0]=I("p",{class:"text-sm font-black uppercase tracking-[0.28em] text-accent"},"TrustAI",-1)),I("p",kb,O(r.$t("footer.tagline")),1)])]),k(p(Ct),{"as-child":"",class:"rounded-full bg-accent text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.5)] hover:bg-accent/90"},{default:_(()=>[I("a",wb,[k(p(Ma),{class:"size-4"}),a[2]||(a[2]=Q(" info@trustai.com.tr ",-1))])]),_:1})]),I("div",xb,[I("p",Eb,O(r.$t("footer.navigation")),1),I("div",Ab,[(L(!0),X(me,null,De(p(Xi),i=>(L(),ee(p(Jn),{key:i.name,to:{name:i.name,params:{locale:n.value}},class:"w-fit text-sm font-medium text-white/72 transition hover:text-white"},{default:_(()=>[Q(O(r.$t(i.labelKey)),1)]),_:2},1032,["to"]))),128))])]),I("div",Ib,[I("p",Tb,O(r.$t("footer.contact")),1),I("div",Cb,[k(p(ym),{class:"mt-1 size-4 text-accent"}),I("p",null,O(r.$t("footer.address")),1)]),I("div",Pb,[k(p(Ma),{class:"mt-1 size-4 text-accent"}),a[3]||(a[3]=I("a",{class:"transition hover:text-white",href:"mailto:info@trustai.com.tr"}," info@trustai.com.tr ",-1))])])]),k(p(Yu),{class:"my-6 bg-white/10"}),I("p",Sb," © "+O(new Date().getFullYear())+" "+O(r.$t("footer.rights")),1)])]))}},Lb={__name:"Sheet",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(e,{emit:t}){const a=Ms(e,t);return(i,s)=>(L(),ee(p(dh),Xe({"data-slot":"sheet"},p(a)),{default:_(l=>[pe(i.$slots,"default",Ga(ra(l)))]),_:3},16))}},Rb={__name:"SheetOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=wn(t,"class");return(r,a)=>(L(),ee(p(Fh),Xe({"data-slot":"sheet-overlay",class:p(st)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",t.class)},p(n)),{default:_(()=>[pe(r.$slots,"default")]),_:3},16,["class"]))}},Nb=Object.assign({inheritAttrs:!1},{__name:"SheetContent",props:{class:{type:null,required:!1},side:{type:String,required:!1,default:"right"},forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,r=t,a=wn(n,"class","side"),i=Ms(a,r);return(s,l)=>(L(),ee(p(jh),null,{default:_(()=>[k(Rb),k(p(Mh),Xe({"data-slot":"sheet-content",class:p(st)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",e.side==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",e.side==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",e.side==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",e.side==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",n.class)},{...s.$attrs,...p(i)}),{default:_(()=>[pe(s.$slots,"default"),k(p(ph),{class:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"},{default:_(()=>[k(p(Tm),{class:"size-4"}),l[0]||(l[0]=I("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),Mb={__name:"SheetTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),ee(p(Vh),Xe({"data-slot":"sheet-trigger"},t),{default:_(()=>[pe(n.$slots,"default")]),_:3},16))}},$b={class:"fixed inset-x-0 top-0 z-50 px-4 pb-3 pt-[17px] sm:px-6 lg:px-8"},Db={class:"mx-auto flex max-w-7xl items-center justify-between rounded-full bg-linear-to-l from-[#4d7984] via-primary to-[#213d48] px-3 py-2 shadow-[0_20px_44px_-28px_rgba(48,86,105,0.4)]"},zb={class:"hidden items-center gap-1 lg:flex"},Fb={class:"hidden items-center gap-2 lg:flex"},Wb={href:"mailto:info@trustai.com.tr"},Ub={class:"flex items-center gap-2 lg:hidden"},Bb={class:"flex h-full flex-col"},jb={class:"px-6 pb-4 pt-8"},Gb={class:"mt-2 text-sm leading-7 text-muted-foreground"},Vb={class:"flex flex-1 flex-col gap-1 px-3"},Hb={class:"space-y-3 border-t border-border px-6 py-6"},qb={href:"mailto:info@trustai.com.tr"},Kb={__name:"Navbar",setup(e){const t=Dn(),n=he(!1),r=ie(()=>oa(t.params.locale)),a=ie(()=>typeof t.name=="string"?t.name:"home"),i=ie(()=>r.value==="en"?"tr":"en"),s=ie(()=>({name:a.value,params:{...t.params,locale:i.value}}));ot(()=>t.fullPath,()=>{n.value=!1});function l(o){return t.name===o}return(o,c)=>(L(),X("header",$b,[I("div",Db,[k(p(Jn),{to:{name:"home",params:{locale:r.value}},class:"inline-flex h-12 shrink-0 items-center rounded-full px-1"},{default:_(()=>[...c[1]||(c[1]=[I("img",{src:nu,alt:"TrustAI",class:"pointer-events-none block h-8 w-auto rounded-full object-contain drop-shadow-[0_6px_18px_rgba(44,104,123,0.12)]"},null,-1)])]),_:1},8,["to"]),I("nav",zb,[(L(!0),X(me,null,De(p(Xi),u=>(L(),ee(p(Jn),{key:u.name,to:{name:u.name,params:{locale:r.value}},class:Ge(p(st)("inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold transition",l(u.name)?"bg-white text-primary shadow-[0_10px_26px_-20px_rgba(17,33,43,0.22)]":"text-white/84 hover:bg-white/12 hover:text-white"))},{default:_(()=>[Q(O(o.$t(u.labelKey)),1)]),_:2},1032,["to","class"]))),128))]),I("div",Fb,[k(p(Ct),{"as-child":"",variant:"outline",class:"rounded-full border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white"},{default:_(()=>[k(p(Jn),{to:s.value},{default:_(()=>[k(p(So),{class:"size-4"}),Q(" "+O(r.value.toUpperCase()),1)]),_:1},8,["to"])]),_:1}),k(p(Ct),{"as-child":"",class:"rounded-full bg-accent text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.6)] hover:bg-accent/90"},{default:_(()=>[I("a",Wb,[k(p(Ma),{class:"size-4"}),Q(" "+O(o.$t("cta.contact")),1)])]),_:1})]),I("div",Ub,[k(p(Ct),{"as-child":"",variant:"outline",size:"icon",class:"rounded-full border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white"},{default:_(()=>[k(p(Jn),{to:s.value,"aria-label":o.$t("common.switchLanguage",{locale:i.value.toUpperCase()})},{default:_(()=>[k(p(So),{class:"size-4"})]),_:1},8,["to","aria-label"])]),_:1}),k(p(Lb),{open:n.value,"onUpdate:open":c[0]||(c[0]=u=>n.value=u)},{default:_(()=>[k(p(Mb),{"as-child":""},{default:_(()=>[k(p(Ct),{variant:"outline",size:"icon",class:"rounded-full border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white"},{default:_(()=>[k(p(bm),{class:"size-4"})]),_:1})]),_:1}),k(p(Nb),{side:"right",class:"w-[310px] border-l border-border bg-card px-0"},{default:_(()=>[I("div",Bb,[I("div",jb,[c[2]||(c[2]=I("p",{class:"text-sm font-black uppercase tracking-[0.28em] text-primary"},"TrustAI",-1)),I("p",Gb,O(o.$t("footer.tagline")),1)]),I("div",Vb,[(L(!0),X(me,null,De(p(Xi),u=>(L(),ee(p(Jn),{key:u.name,to:{name:u.name,params:{locale:r.value}},class:Ge(p(st)("rounded-2xl px-4 py-3 text-sm font-semibold transition",l(u.name)?"bg-white text-primary":"text-muted-foreground hover:bg-white hover:text-foreground"))},{default:_(()=>[Q(O(o.$t(u.labelKey)),1)]),_:2},1032,["to","class"]))),128))]),I("div",Hb,[k(p(Ct),{"as-child":"",class:"w-full rounded-full bg-accent text-accent-foreground shadow-[0_18px_32px_-22px_rgba(245,186,66,0.6)] hover:bg-accent/90"},{default:_(()=>[I("a",qb,[k(p(Ma),{class:"size-4"}),Q(" "+O(o.$t("cta.contact")),1)])]),_:1})])])]),_:1})]),_:1},8,["open"])])])]))}},Yb={class:"min-h-screen"},Xb={class:"px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8"},Jb={__name:"App",setup(e){return(t,n)=>{const r=xs("router-view");return L(),X("div",Yb,[k(Kb),I("main",Xb,[k(r)]),k(Ob)])}}};function Zb(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const Da=typeof window<"u",Wn=(e,t=!1)=>t?Symbol.for(e):Symbol(e),Qb=(e,t,n)=>ev({l:e,k:t,s:n}),ev=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Ze=e=>typeof e=="number"&&isFinite(e),tv=e=>Qu(e)==="[object Date]",Nn=e=>Qu(e)==="[object RegExp]",Qa=e=>fe(e)&&Object.keys(e).length===0,ft=Object.assign,nv=Object.create,ze=(e=null)=>nv(e);let ll;const hn=()=>ll||(ll=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:ze());function cl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function ul(e){return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rv(e){return e=e.replace(/(\w+)\s*=\s*"([^"]*)"/g,(r,a,i)=>`${a}="${ul(i)}"`),e=e.replace(/(\w+)\s*=\s*'([^']*)'/g,(r,a,i)=>`${a}='${ul(i)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e)&&(e=e.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(r=>{e=e.replace(r,"$1javascript&#58;")}),e}const av=Object.prototype.hasOwnProperty;function Ft(e,t){return av.call(e,t)}const Ve=Array.isArray,Ue=e=>typeof e=="function",J=e=>typeof e=="string",ke=e=>typeof e=="boolean",Ie=e=>e!==null&&typeof e=="object",iv=e=>Ie(e)&&Ue(e.then)&&Ue(e.catch),Zu=Object.prototype.toString,Qu=e=>Zu.call(e),fe=e=>{if(!Ie(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t.constructor===Object},sv=e=>e==null?"":Ve(e)||fe(e)&&e.toString===Zu?JSON.stringify(e,null,2):String(e);function ov(e,t=""){return e.reduce((n,r,a)=>a===0?n+r:n+t+r,"")}function ei(e){let t=e;return()=>++t}const ya=e=>!Ie(e)||Ve(e);function xa(e,t){if(ya(e)||ya(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:r,des:a}=n.pop();Object.keys(r).forEach(i=>{i!=="__proto__"&&(Ie(r[i])&&!Ie(a[i])&&(a[i]=Array.isArray(r[i])?[]:ze()),ya(a[i])||ya(r[i])?a[i]=r[i]:n.push({src:r[i],des:a[i]}))})}}function lv(e,t,n){return{line:e,column:t,offset:n}}function za(e,t,n){return{start:e,end:t}}const cv=/\{([0-9a-zA-Z]+)\}/g;function ed(e,...t){return t.length===1&&uv(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(cv,(n,r)=>t.hasOwnProperty(r)?t[r]:"")}const td=Object.assign,dl=e=>typeof e=="string",uv=e=>e!==null&&typeof e=="object";function nd(e,t=""){return e.reduce((n,r,a)=>a===0?n+r:n+t+r,"")}const Ws={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},dv={[Ws.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function fv(e,t,...n){const r=ed(dv[e],...n||[]),a={message:String(r),code:e};return t&&(a.location=t),a}const le={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},pv={[le.EXPECTED_TOKEN]:"Expected token: '{0}'",[le.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[le.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[le.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[le.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[le.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[le.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[le.EMPTY_PLACEHOLDER]:"Empty placeholder",[le.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[le.INVALID_LINKED_FORMAT]:"Invalid linked format",[le.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[le.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[le.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[le.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[le.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[le.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Er(e,t,n={}){const{domain:r,messages:a,args:i}=n,s=ed((a||pv)[e]||"",...i||[]),l=new SyntaxError(String(s));return l.code=e,t&&(l.location=t),l.domain=r,l}function mv(e){throw e}const un=" ",gv="\r",Et=`
`,hv="\u2028",yv="\u2029";function bv(e){const t=e;let n=0,r=1,a=1,i=0;const s=j=>t[j]===gv&&t[j+1]===Et,l=j=>t[j]===Et,o=j=>t[j]===yv,c=j=>t[j]===hv,u=j=>s(j)||l(j)||o(j)||c(j),d=()=>n,f=()=>r,g=()=>a,A=()=>i,E=j=>s(j)||o(j)||c(j)?Et:t[j],T=()=>E(n),C=()=>E(n+i);function R(){return i=0,u(n)&&(r++,a=0),s(n)&&n++,n++,a++,t[n]}function w(){return s(n+i)&&i++,i++,t[n+i]}function x(){n=0,r=1,a=1,i=0}function D(j=0){i=j}function M(){const j=n+i;for(;j!==n;)R();i=0}return{index:d,line:f,column:g,peekOffset:A,charAt:E,currentChar:T,currentPeek:C,next:R,peek:w,reset:x,resetPeek:D,skipToPeek:M}}const In=void 0,vv=".",fl="'",_v="tokenizer";function kv(e,t={}){const n=t.location!==!1,r=bv(e),a=()=>r.index(),i=()=>lv(r.line(),r.column(),r.index()),s=i(),l=a(),o={currentType:14,offset:l,startLoc:s,endLoc:s,lastType:14,lastOffset:l,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},c=()=>o,{onError:u}=t;function d(m,h,S,...z){const Y=c();if(h.column+=S,h.offset+=S,u){const H=n?za(Y.startLoc,h):null,P=Er(m,H,{domain:_v,args:z});u(P)}}function f(m,h,S){m.endLoc=i(),m.currentType=h;const z={type:h};return n&&(z.loc=za(m.startLoc,m.endLoc)),S!=null&&(z.value=S),z}const g=m=>f(m,14);function A(m,h){return m.currentChar()===h?(m.next(),h):(d(le.EXPECTED_TOKEN,i(),0,h),"")}function E(m){let h="";for(;m.currentPeek()===un||m.currentPeek()===Et;)h+=m.currentPeek(),m.peek();return h}function T(m){const h=E(m);return m.skipToPeek(),h}function C(m){if(m===In)return!1;const h=m.charCodeAt(0);return h>=97&&h<=122||h>=65&&h<=90||h===95}function R(m){if(m===In)return!1;const h=m.charCodeAt(0);return h>=48&&h<=57}function w(m,h){const{currentType:S}=h;if(S!==2)return!1;E(m);const z=C(m.currentPeek());return m.resetPeek(),z}function x(m,h){const{currentType:S}=h;if(S!==2)return!1;E(m);const z=m.currentPeek()==="-"?m.peek():m.currentPeek(),Y=R(z);return m.resetPeek(),Y}function D(m,h){const{currentType:S}=h;if(S!==2)return!1;E(m);const z=m.currentPeek()===fl;return m.resetPeek(),z}function M(m,h){const{currentType:S}=h;if(S!==8)return!1;E(m);const z=m.currentPeek()===".";return m.resetPeek(),z}function j(m,h){const{currentType:S}=h;if(S!==9)return!1;E(m);const z=C(m.currentPeek());return m.resetPeek(),z}function $(m,h){const{currentType:S}=h;if(!(S===8||S===12))return!1;E(m);const z=m.currentPeek()===":";return m.resetPeek(),z}function B(m,h){const{currentType:S}=h;if(S!==10)return!1;const z=()=>{const H=m.currentPeek();return H==="{"?C(m.peek()):H==="@"||H==="%"||H==="|"||H===":"||H==="."||H===un||!H?!1:H===Et?(m.peek(),z()):oe(m,!1)},Y=z();return m.resetPeek(),Y}function be(m){E(m);const h=m.currentPeek()==="|";return m.resetPeek(),h}function $e(m){const h=E(m),S=m.currentPeek()==="%"&&m.peek()==="{";return m.resetPeek(),{isModulo:S,hasSpace:h.length>0}}function oe(m,h=!0){const S=(Y=!1,H="",P=!1)=>{const F=m.currentPeek();return F==="{"?H==="%"?!1:Y:F==="@"||!F?H==="%"?!0:Y:F==="%"?(m.peek(),S(Y,"%",!0)):F==="|"?H==="%"||P?!0:!(H===un||H===Et):F===un?(m.peek(),S(!0,un,P)):F===Et?(m.peek(),S(!0,Et,P)):!0},z=S();return h&&m.resetPeek(),z}function Pe(m,h){const S=m.currentChar();return S===In?In:h(S)?(m.next(),S):null}function _t(m){const h=m.charCodeAt(0);return h>=97&&h<=122||h>=65&&h<=90||h>=48&&h<=57||h===95||h===36}function tt(m){return Pe(m,_t)}function ye(m){const h=m.charCodeAt(0);return h>=97&&h<=122||h>=65&&h<=90||h>=48&&h<=57||h===95||h===36||h===45}function ge(m){return Pe(m,ye)}function ve(m){const h=m.charCodeAt(0);return h>=48&&h<=57}function nt(m){return Pe(m,ve)}function te(m){const h=m.charCodeAt(0);return h>=48&&h<=57||h>=65&&h<=70||h>=97&&h<=102}function Be(m){return Pe(m,te)}function je(m){let h="",S="";for(;h=nt(m);)S+=h;return S}function kt(m){T(m);const h=m.currentChar();return h!=="%"&&d(le.EXPECTED_TOKEN,i(),0,h),m.next(),"%"}function ct(m){let h="";for(;;){const S=m.currentChar();if(S==="{"||S==="}"||S==="@"||S==="|"||!S)break;if(S==="%")if(oe(m))h+=S,m.next();else break;else if(S===un||S===Et)if(oe(m))h+=S,m.next();else{if(be(m))break;h+=S,m.next()}else h+=S,m.next()}return h}function Me(m){T(m);let h="",S="";for(;h=ge(m);)S+=h;return m.currentChar()===In&&d(le.UNTERMINATED_CLOSING_BRACE,i(),0),S}function xe(m){T(m);let h="";return m.currentChar()==="-"?(m.next(),h+=`-${je(m)}`):h+=je(m),m.currentChar()===In&&d(le.UNTERMINATED_CLOSING_BRACE,i(),0),h}function W(m){return m!==fl&&m!==Et}function Z(m){T(m),A(m,"'");let h="",S="";for(;h=Pe(m,W);)h==="\\"?S+=V(m):S+=h;const z=m.currentChar();return z===Et||z===In?(d(le.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),z===Et&&(m.next(),A(m,"'")),S):(A(m,"'"),S)}function V(m){const h=m.currentChar();switch(h){case"\\":case"'":return m.next(),`\\${h}`;case"u":return re(m,h,4);case"U":return re(m,h,6);default:return d(le.UNKNOWN_ESCAPE_SEQUENCE,i(),0,h),""}}function re(m,h,S){A(m,h);let z="";for(let Y=0;Y<S;Y++){const H=Be(m);if(!H){d(le.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${h}${z}${m.currentChar()}`);break}z+=H}return`\\${h}${z}`}function ue(m){return m!=="{"&&m!=="}"&&m!==un&&m!==Et}function y(m){T(m);let h="",S="";for(;h=Pe(m,ue);)S+=h;return S}function v(m){let h="",S="";for(;h=tt(m);)S+=h;return S}function b(m){const h=S=>{const z=m.currentChar();return z==="{"||z==="%"||z==="@"||z==="|"||z==="("||z===")"||!z||z===un?S:(S+=z,m.next(),h(S))};return h("")}function N(m){T(m);const h=A(m,"|");return T(m),h}function G(m,h){let S=null;switch(m.currentChar()){case"{":return h.braceNest>=1&&d(le.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),m.next(),S=f(h,2,"{"),T(m),h.braceNest++,S;case"}":return h.braceNest>0&&h.currentType===2&&d(le.EMPTY_PLACEHOLDER,i(),0),m.next(),S=f(h,3,"}"),h.braceNest--,h.braceNest>0&&T(m),h.inLinked&&h.braceNest===0&&(h.inLinked=!1),S;case"@":return h.braceNest>0&&d(le.UNTERMINATED_CLOSING_BRACE,i(),0),S=U(m,h)||g(h),h.braceNest=0,S;default:{let Y=!0,H=!0,P=!0;if(be(m))return h.braceNest>0&&d(le.UNTERMINATED_CLOSING_BRACE,i(),0),S=f(h,1,N(m)),h.braceNest=0,h.inLinked=!1,S;if(h.braceNest>0&&(h.currentType===5||h.currentType===6||h.currentType===7))return d(le.UNTERMINATED_CLOSING_BRACE,i(),0),h.braceNest=0,K(m,h);if(Y=w(m,h))return S=f(h,5,Me(m)),T(m),S;if(H=x(m,h))return S=f(h,6,xe(m)),T(m),S;if(P=D(m,h))return S=f(h,7,Z(m)),T(m),S;if(!Y&&!H&&!P)return S=f(h,13,y(m)),d(le.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,S.value),T(m),S;break}}return S}function U(m,h){const{currentType:S}=h;let z=null;const Y=m.currentChar();switch((S===8||S===9||S===12||S===10)&&(Y===Et||Y===un)&&d(le.INVALID_LINKED_FORMAT,i(),0),Y){case"@":return m.next(),z=f(h,8,"@"),h.inLinked=!0,z;case".":return T(m),m.next(),f(h,9,".");case":":return T(m),m.next(),f(h,10,":");default:return be(m)?(z=f(h,1,N(m)),h.braceNest=0,h.inLinked=!1,z):M(m,h)||$(m,h)?(T(m),U(m,h)):j(m,h)?(T(m),f(h,12,v(m))):B(m,h)?(T(m),Y==="{"?G(m,h)||z:f(h,11,b(m))):(S===8&&d(le.INVALID_LINKED_FORMAT,i(),0),h.braceNest=0,h.inLinked=!1,K(m,h))}}function K(m,h){let S={type:14};if(h.braceNest>0)return G(m,h)||g(h);if(h.inLinked)return U(m,h)||g(h);switch(m.currentChar()){case"{":return G(m,h)||g(h);case"}":return d(le.UNBALANCED_CLOSING_BRACE,i(),0),m.next(),f(h,3,"}");case"@":return U(m,h)||g(h);default:{if(be(m))return S=f(h,1,N(m)),h.braceNest=0,h.inLinked=!1,S;const{isModulo:Y,hasSpace:H}=$e(m);if(Y)return H?f(h,0,ct(m)):f(h,4,kt(m));if(oe(m))return f(h,0,ct(m));break}}return S}function q(){const{currentType:m,offset:h,startLoc:S,endLoc:z}=o;return o.lastType=m,o.lastOffset=h,o.lastStartLoc=S,o.lastEndLoc=z,o.offset=a(),o.startLoc=i(),r.currentChar()===In?f(o,14):K(r,o)}return{nextToken:q,currentOffset:a,currentPosition:i,context:c}}const wv="parser",xv=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Ev(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(t||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function Av(e={}){const t=e.location!==!1,{onError:n,onWarn:r}=e;function a(w,x,D,M,...j){const $=w.currentPosition();if($.offset+=M,$.column+=M,n){const B=t?za(D,$):null,be=Er(x,B,{domain:wv,args:j});n(be)}}function i(w,x,D,M,...j){const $=w.currentPosition();if($.offset+=M,$.column+=M,r){const B=t?za(D,$):null;r(fv(x,B,j))}}function s(w,x,D){const M={type:w};return t&&(M.start=x,M.end=x,M.loc={start:D,end:D}),M}function l(w,x,D,M){t&&(w.end=x,w.loc&&(w.loc.end=D))}function o(w,x){const D=w.context(),M=s(3,D.offset,D.startLoc);return M.value=x,l(M,w.currentOffset(),w.currentPosition()),M}function c(w,x){const D=w.context(),{lastOffset:M,lastStartLoc:j}=D,$=s(5,M,j);return $.index=parseInt(x,10),w.nextToken(),l($,w.currentOffset(),w.currentPosition()),$}function u(w,x,D){const M=w.context(),{lastOffset:j,lastStartLoc:$}=M,B=s(4,j,$);return B.key=x,D===!0&&(B.modulo=!0),w.nextToken(),l(B,w.currentOffset(),w.currentPosition()),B}function d(w,x){const D=w.context(),{lastOffset:M,lastStartLoc:j}=D,$=s(9,M,j);return $.value=x.replace(xv,Ev),w.nextToken(),l($,w.currentOffset(),w.currentPosition()),$}function f(w){const x=w.nextToken(),D=w.context(),{lastOffset:M,lastStartLoc:j}=D,$=s(8,M,j);return x.type!==12?(a(w,le.UNEXPECTED_EMPTY_LINKED_MODIFIER,D.lastStartLoc,0),$.value="",l($,M,j),{nextConsumeToken:x,node:$}):(x.value==null&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,D.lastStartLoc,0,zt(x)),$.value=x.value||"",l($,w.currentOffset(),w.currentPosition()),{node:$})}function g(w,x){const D=w.context(),M=s(7,D.offset,D.startLoc);return M.value=x,l(M,w.currentOffset(),w.currentPosition()),M}function A(w){const x=w.context(),D=s(6,x.offset,x.startLoc);let M=w.nextToken();if(M.type===9){const j=f(w);D.modifier=j.node,M=j.nextConsumeToken||w.nextToken()}switch(M.type!==10&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,zt(M)),M=w.nextToken(),M.type===2&&(M=w.nextToken()),M.type){case 11:M.value==null&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,zt(M)),D.key=g(w,M.value||"");break;case 5:M.value==null&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,zt(M)),D.key=u(w,M.value||"");break;case 6:M.value==null&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,zt(M)),D.key=c(w,M.value||"");break;case 7:M.value==null&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,zt(M)),D.key=d(w,M.value||"");break;default:{a(w,le.UNEXPECTED_EMPTY_LINKED_KEY,x.lastStartLoc,0);const j=w.context(),$=s(7,j.offset,j.startLoc);return $.value="",l($,j.offset,j.startLoc),D.key=$,l(D,j.offset,j.startLoc),{nextConsumeToken:M,node:D}}}return l(D,w.currentOffset(),w.currentPosition()),{node:D}}function E(w){const x=w.context(),D=x.currentType===1?w.currentOffset():x.offset,M=x.currentType===1?x.endLoc:x.startLoc,j=s(2,D,M);j.items=[];let $=null,B=null;do{const oe=$||w.nextToken();switch($=null,oe.type){case 0:oe.value==null&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,zt(oe)),j.items.push(o(w,oe.value||""));break;case 6:oe.value==null&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,zt(oe)),j.items.push(c(w,oe.value||""));break;case 4:B=!0;break;case 5:oe.value==null&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,zt(oe)),j.items.push(u(w,oe.value||"",!!B)),B&&(i(w,Ws.USE_MODULO_SYNTAX,x.lastStartLoc,0,zt(oe)),B=null);break;case 7:oe.value==null&&a(w,le.UNEXPECTED_LEXICAL_ANALYSIS,x.lastStartLoc,0,zt(oe)),j.items.push(d(w,oe.value||""));break;case 8:{const Pe=A(w);j.items.push(Pe.node),$=Pe.nextConsumeToken||null;break}}}while(x.currentType!==14&&x.currentType!==1);const be=x.currentType===1?x.lastOffset:w.currentOffset(),$e=x.currentType===1?x.lastEndLoc:w.currentPosition();return l(j,be,$e),j}function T(w,x,D,M){const j=w.context();let $=M.items.length===0;const B=s(1,x,D);B.cases=[],B.cases.push(M);do{const be=E(w);$||($=be.items.length===0),B.cases.push(be)}while(j.currentType!==14);return $&&a(w,le.MUST_HAVE_MESSAGES_IN_PLURAL,D,0),l(B,w.currentOffset(),w.currentPosition()),B}function C(w){const x=w.context(),{offset:D,startLoc:M}=x,j=E(w);return x.currentType===14?j:T(w,D,M,j)}function R(w){const x=kv(w,td({},e)),D=x.context(),M=s(0,D.offset,D.startLoc);return t&&M.loc&&(M.loc.source=w),M.body=C(x),e.onCacheKey&&(M.cacheKey=e.onCacheKey(w)),D.currentType!==14&&a(x,le.UNEXPECTED_LEXICAL_ANALYSIS,D.lastStartLoc,0,w[D.offset]||""),l(M,x.currentOffset(),x.currentPosition()),M}return{parse:R}}function zt(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function Iv(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function pl(e,t){for(let n=0;n<e.length;n++)Us(e[n],t)}function Us(e,t){switch(e.type){case 1:pl(e.cases,t),t.helper("plural");break;case 2:pl(e.items,t);break;case 6:{Us(e.key,t),t.helper("linked"),t.helper("type");break}case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function Tv(e,t={}){const n=Iv(e);n.helper("normalize"),e.body&&Us(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function Cv(e){const t=e.body;return t.type===2?ml(t):t.cases.forEach(n=>ml(n)),e}function ml(e){if(e.items.length===1){const t=e.items[0];(t.type===3||t.type===9)&&(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;t.push(r.value)}if(t.length===e.items.length){e.static=nd(t);for(let n=0;n<e.items.length;n++){const r=e.items[n];(r.type===3||r.type===9)&&delete r.value}}}}const Pv="minifier";function ur(e){switch(e.t=e.type,e.type){case 0:{const t=e;ur(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let r=0;r<n.length;r++)ur(n[r]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let r=0;r<n.length;r++)ur(n[r]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;ur(t.key),t.k=t.key,delete t.key,t.modifier&&(ur(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}default:throw Er(le.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:Pv,args:[e.type]})}delete e.type}const Sv="parser";function Ov(e,t){const{filename:n,breakLineCode:r,needIndent:a}=t,i=t.location!==!1,s={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:a,indentLevel:0};i&&e.loc&&(s.source=e.loc.source);const l=()=>s;function o(E,T){s.code+=E}function c(E,T=!0){const C=T?r:"";o(a?C+"  ".repeat(E):C)}function u(E=!0){const T=++s.indentLevel;E&&c(T)}function d(E=!0){const T=--s.indentLevel;E&&c(T)}function f(){c(s.indentLevel)}return{context:l,push:o,indent:u,deindent:d,newline:f,helper:E=>`_${E}`,needIndent:()=>s.needIndent}}function Lv(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),kr(e,t.key),t.modifier?(e.push(", "),kr(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function Rv(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const a=t.items.length;for(let i=0;i<a&&(kr(e,t.items[i]),i!==a-1);i++)e.push(", ");e.deindent(r()),e.push("])")}function Nv(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const a=t.cases.length;for(let i=0;i<a&&(kr(e,t.cases[i]),i!==a-1);i++)e.push(", ");e.deindent(r()),e.push("])")}}function Mv(e,t){t.body?kr(e,t.body):e.push("null")}function kr(e,t){const{helper:n}=e;switch(t.type){case 0:Mv(e,t);break;case 1:Nv(e,t);break;case 2:Rv(e,t);break;case 6:Lv(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:throw Er(le.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:Sv,args:[t.type]})}}const $v=(e,t={})=>{const n=dl(t.mode)?t.mode:"normal",r=dl(t.filename)?t.filename:"message.intl";t.sourceMap;const a=t.breakLineCode!=null?t.breakLineCode:n==="arrow"?";":`
`,i=t.needIndent?t.needIndent:n!=="arrow",s=e.helpers||[],l=Ov(e,{filename:r,breakLineCode:a,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),s.length>0&&(l.push(`const { ${nd(s.map(u=>`${u}: _${u}`),", ")} } = ctx`),l.newline()),l.push("return "),kr(l,e),l.deindent(i),l.push("}"),delete e.helpers;const{code:o,map:c}=l.context();return{ast:e,code:o,map:c?c.toJSON():void 0}};function Dv(e,t={}){const n=td({},t),r=!!n.jit,a=!!n.minify,i=n.optimize==null?!0:n.optimize,l=Av(n).parse(e);return r?(i&&Cv(l),a&&ur(l),{ast:l,code:""}):(Tv(l,n),$v(l,n))}function zv(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(hn().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(hn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(hn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function tn(e){return Ie(e)&&Bs(e)===0&&(Ft(e,"b")||Ft(e,"body"))}const rd=["b","body"];function Fv(e){return Un(e,rd)}const ad=["c","cases"];function Wv(e){return Un(e,ad,[])}const id=["s","static"];function Uv(e){return Un(e,id)}const sd=["i","items"];function Bv(e){return Un(e,sd,[])}const od=["t","type"];function Bs(e){return Un(e,od)}const ld=["v","value"];function ba(e,t){const n=Un(e,ld);if(n!=null)return n;throw Yr(t)}const cd=["m","modifier"];function jv(e){return Un(e,cd)}const ud=["k","key"];function Gv(e){const t=Un(e,ud);if(t)return t;throw Yr(6)}function Un(e,t,n){for(let r=0;r<t.length;r++){const a=t[r];if(Ft(e,a)&&e[a]!=null)return e[a]}return n}const dd=[...rd,...ad,...id,...sd,...ud,...cd,...ld,...od];function Yr(e){return new Error(`unhandled node type: ${e}`)}const Bn=[];Bn[0]={w:[0],i:[3,0],"[":[4],o:[7]};Bn[1]={w:[1],".":[2],"[":[4],o:[7]};Bn[2]={w:[2],i:[3,0],0:[3,0]};Bn[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Bn[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Bn[5]={"'":[4,0],o:8,l:[5,0]};Bn[6]={'"':[4,0],o:8,l:[6,0]};const Vv=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Hv(e){return Vv.test(e)}function qv(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function Kv(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Yv(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Hv(t)?qv(t):"*"+t}function Xv(e){const t=[];let n=-1,r=0,a=0,i,s,l,o,c,u,d;const f=[];f[0]=()=>{s===void 0?s=l:s+=l},f[1]=()=>{s!==void 0&&(t.push(s),s=void 0)},f[2]=()=>{f[0](),a++},f[3]=()=>{if(a>0)a--,r=4,f[0]();else{if(a=0,s===void 0||(s=Yv(s),s===!1))return!1;f[1]()}};function g(){const A=e[n+1];if(r===5&&A==="'"||r===6&&A==='"')return n++,l="\\"+A,f[0](),!0}for(;r!==null;)if(n++,i=e[n],!(i==="\\"&&g())){if(o=Kv(i),d=Bn[r],c=d[o]||d.l||8,c===8||(r=c[0],c[1]!==void 0&&(u=f[c[1]],u&&(l=i,u()===!1))))return;if(r===7)return t}}const gl=new Map;function Jv(e,t){return Ie(e)?e[t]:null}function Zv(e,t){if(!Ie(e))return null;let n=gl.get(t);if(n||(n=Xv(t),n&&gl.set(t,n)),!n)return null;const r=n.length;let a=e,i=0;for(;i<r;){const s=n[i];if(dd.includes(s)&&tn(a))return null;const l=a[s];if(l===void 0||Ue(a))return null;a=l,i++}return a}const Qv=e=>e,e_=e=>"",t_="text",n_=e=>e.length===0?"":ov(e),r_=sv;function hl(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function a_(e){const t=Ze(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Ze(e.named.count)||Ze(e.named.n))?Ze(e.named.count)?e.named.count:Ze(e.named.n)?e.named.n:t:t}function i_(e,t){t.count||(t.count=e),t.n||(t.n=e)}function s_(e={}){const t=e.locale,n=a_(e),r=Ie(e.pluralRules)&&J(t)&&Ue(e.pluralRules[t])?e.pluralRules[t]:hl,a=Ie(e.pluralRules)&&J(t)&&Ue(e.pluralRules[t])?hl:void 0,i=C=>C[r(n,C.length,a)],s=e.list||[],l=C=>s[C],o=e.named||ze();Ze(e.pluralIndex)&&i_(n,o);const c=C=>o[C];function u(C){const R=Ue(e.messages)?e.messages(C):Ie(e.messages)?e.messages[C]:!1;return R||(e.parent?e.parent.message(C):e_)}const d=C=>e.modifiers?e.modifiers[C]:Qv,f=fe(e.processor)&&Ue(e.processor.normalize)?e.processor.normalize:n_,g=fe(e.processor)&&Ue(e.processor.interpolate)?e.processor.interpolate:r_,A=fe(e.processor)&&J(e.processor.type)?e.processor.type:t_,T={list:l,named:c,plural:i,linked:(C,...R)=>{const[w,x]=R;let D="text",M="";R.length===1?Ie(w)?(M=w.modifier||M,D=w.type||D):J(w)&&(M=w||M):R.length===2&&(J(w)&&(M=w||M),J(x)&&(D=x||D));const j=u(C)(T),$=D==="vnode"&&Ve(j)&&M?j[0]:j;return M?d(M)($,D):$},message:u,type:A,interpolate:g,normalize:f,values:ft(ze(),s,o)};return T}let Xr=null;function o_(e){Xr=e}function l_(e,t,n){Xr&&Xr.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}const c_=u_("function:translate");function u_(e){return t=>Xr&&Xr.emit(e,t)}const d_=Ws.__EXTEND_POINT__,Kn=ei(d_),f_={FALLBACK_TO_TRANSLATE:Kn(),CANNOT_FORMAT_NUMBER:Kn(),FALLBACK_TO_NUMBER_FORMAT:Kn(),CANNOT_FORMAT_DATE:Kn(),FALLBACK_TO_DATE_FORMAT:Kn(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Kn(),__EXTEND_POINT__:Kn()},fd=le.__EXTEND_POINT__,Yn=ei(fd),Wt={INVALID_ARGUMENT:fd,INVALID_DATE_ARGUMENT:Yn(),INVALID_ISO_DATE_ARGUMENT:Yn(),NOT_SUPPORT_NON_STRING_MESSAGE:Yn(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Yn(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Yn(),NOT_SUPPORT_LOCALE_TYPE:Yn(),__EXTEND_POINT__:Yn()};function Jt(e){return Er(e,null,void 0)}function js(e,t){return t.locale!=null?yl(t.locale):yl(e.locale)}let Ei;function yl(e){if(J(e))return e;if(Ue(e)){if(e.resolvedOnce&&Ei!=null)return Ei;if(e.constructor.name==="Function"){const t=e();if(iv(t))throw Jt(Wt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Ei=t}else throw Jt(Wt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Jt(Wt.NOT_SUPPORT_LOCALE_TYPE)}function p_(e,t,n){return[...new Set([n,...Ve(t)?t:Ie(t)?Object.keys(t):J(t)?[t]:[n]])]}function pd(e,t,n){const r=J(n)?n:wr,a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let i=a.__localeChainCache.get(r);if(!i){i=[];let s=[n];for(;Ve(s);)s=bl(i,s,t);const l=Ve(t)||!fe(t)?t:t.default?t.default:null;s=J(l)?[l]:l,Ve(s)&&bl(i,s,!1),a.__localeChainCache.set(r,i)}return i}function bl(e,t,n){let r=!0;for(let a=0;a<t.length&&ke(r);a++){const i=t[a];J(i)&&(r=m_(e,t[a],n))}return r}function m_(e,t,n){let r;const a=t.split("-");do{const i=a.join("-");r=g_(e,i,n),a.splice(-1,1)}while(a.length&&r===!0);return r}function g_(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const a=t.replace(/!/g,"");e.push(a),(Ve(n)||fe(n))&&n[a]&&(r=n[a])}return r}const h_="9.14.5",ti=-1,wr="en-US",vl="",_l=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function y_(){return{upper:(e,t)=>t==="text"&&J(e)?e.toUpperCase():t==="vnode"&&Ie(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&J(e)?e.toLowerCase():t==="vnode"&&Ie(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&J(e)?_l(e):t==="vnode"&&Ie(e)&&"__v_isVNode"in e?_l(e.children):e}}let md;function kl(e){md=e}let gd;function b_(e){gd=e}let hd;function v_(e){hd=e}let yd=null;const __=e=>{yd=e},k_=()=>yd;let bd=null;const wl=e=>{bd=e},w_=()=>bd;let xl=0;function x_(e={}){const t=Ue(e.onWarn)?e.onWarn:Zb,n=J(e.version)?e.version:h_,r=J(e.locale)||Ue(e.locale)?e.locale:wr,a=Ue(r)?wr:r,i=Ve(e.fallbackLocale)||fe(e.fallbackLocale)||J(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:a,s=fe(e.messages)?e.messages:Ai(a),l=fe(e.datetimeFormats)?e.datetimeFormats:Ai(a),o=fe(e.numberFormats)?e.numberFormats:Ai(a),c=ft(ze(),e.modifiers,y_()),u=e.pluralRules||ze(),d=Ue(e.missing)?e.missing:null,f=ke(e.missingWarn)||Nn(e.missingWarn)?e.missingWarn:!0,g=ke(e.fallbackWarn)||Nn(e.fallbackWarn)?e.fallbackWarn:!0,A=!!e.fallbackFormat,E=!!e.unresolving,T=Ue(e.postTranslation)?e.postTranslation:null,C=fe(e.processor)?e.processor:null,R=ke(e.warnHtmlMessage)?e.warnHtmlMessage:!0,w=!!e.escapeParameter,x=Ue(e.messageCompiler)?e.messageCompiler:md,D=Ue(e.messageResolver)?e.messageResolver:gd||Jv,M=Ue(e.localeFallbacker)?e.localeFallbacker:hd||p_,j=Ie(e.fallbackContext)?e.fallbackContext:void 0,$=e,B=Ie($.__datetimeFormatters)?$.__datetimeFormatters:new Map,be=Ie($.__numberFormatters)?$.__numberFormatters:new Map,$e=Ie($.__meta)?$.__meta:{};xl++;const oe={version:n,cid:xl,locale:r,fallbackLocale:i,messages:s,modifiers:c,pluralRules:u,missing:d,missingWarn:f,fallbackWarn:g,fallbackFormat:A,unresolving:E,postTranslation:T,processor:C,warnHtmlMessage:R,escapeParameter:w,messageCompiler:x,messageResolver:D,localeFallbacker:M,fallbackContext:j,onWarn:t,__meta:$e};return oe.datetimeFormats=l,oe.numberFormats=o,oe.__datetimeFormatters=B,oe.__numberFormatters=be,__INTLIFY_PROD_DEVTOOLS__&&l_(oe,n,$e),oe}const Ai=e=>({[e]:ze()});function Gs(e,t,n,r,a){const{missing:i,onWarn:s}=e;if(i!==null){const l=i(e,n,t,a);return J(l)?l:t}else return t}function Or(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function E_(e,t){return e===t?!1:e.split("-")[0]===t.split("-")[0]}function A_(e,t){const n=t.indexOf(e);if(n===-1)return!1;for(let r=n+1;r<t.length;r++)if(E_(e,t[r]))return!0;return!1}function Ii(e){return n=>I_(n,e)}function I_(e,t){const n=Fv(t);if(n==null)throw Yr(0);if(Bs(n)===1){const i=Wv(n);return e.plural(i.reduce((s,l)=>[...s,El(e,l)],[]))}else return El(e,n)}function El(e,t){const n=Uv(t);if(n!=null)return e.type==="text"?n:e.normalize([n]);{const r=Bv(t).reduce((a,i)=>[...a,Zi(e,i)],[]);return e.normalize(r)}}function Zi(e,t){const n=Bs(t);switch(n){case 3:return ba(t,n);case 9:return ba(t,n);case 4:{const r=t;if(Ft(r,"k")&&r.k)return e.interpolate(e.named(r.k));if(Ft(r,"key")&&r.key)return e.interpolate(e.named(r.key));throw Yr(n)}case 5:{const r=t;if(Ft(r,"i")&&Ze(r.i))return e.interpolate(e.list(r.i));if(Ft(r,"index")&&Ze(r.index))return e.interpolate(e.list(r.index));throw Yr(n)}case 6:{const r=t,a=jv(r),i=Gv(r);return e.linked(Zi(e,i),a?Zi(e,a):void 0,e.type)}case 7:return ba(t,n);case 8:return ba(t,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const vd=e=>e;let dr=ze();function _d(e,t={}){let n=!1;const r=t.onError||mv;return t.onError=a=>{n=!0,r(a)},{...Dv(e,t),detectError:n}}const T_=(e,t)=>{if(!J(e))throw Jt(Wt.NOT_SUPPORT_NON_STRING_MESSAGE);{ke(t.warnHtmlMessage)&&t.warnHtmlMessage;const r=(t.onCacheKey||vd)(e),a=dr[r];if(a)return a;const{code:i,detectError:s}=_d(e,t),l=new Function(`return ${i}`)();return s?l:dr[r]=l}};function C_(e,t){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&J(e)){ke(t.warnHtmlMessage)&&t.warnHtmlMessage;const r=(t.onCacheKey||vd)(e),a=dr[r];if(a)return a;const{ast:i,detectError:s}=_d(e,{...t,location:!1,jit:!0}),l=Ii(i);return s?l:dr[r]=l}else{const n=e.cacheKey;if(n){const r=dr[n];return r||(dr[n]=Ii(e))}else return Ii(e)}}const Al=()=>"",Dt=e=>Ue(e);function Il(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:a,messageCompiler:i,fallbackLocale:s,messages:l}=e,[o,c]=Qi(...t),u=ke(c.missingWarn)?c.missingWarn:e.missingWarn,d=ke(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,f=ke(c.escapeParameter)?c.escapeParameter:e.escapeParameter,g=!!c.resolvedMessage,A=J(c.default)||ke(c.default)?ke(c.default)?i?o:()=>o:c.default:n?i?o:()=>o:"",E=n||A!=="",T=js(e,c);f&&P_(c);let[C,R,w]=g?[o,T,l[T]||ze()]:kd(e,o,T,s,d,u),x=C,D=o;if(!g&&!(J(x)||tn(x)||Dt(x))&&E&&(x=A,D=x),!g&&(!(J(x)||tn(x)||Dt(x))||!J(R)))return a?ti:o;let M=!1;const j=()=>{M=!0},$=Dt(x)?x:wd(e,o,R,x,D,j);if(M)return x;const B=L_(e,R,w,c),be=s_(B),$e=S_(e,$,be);let oe=r?r($e,o):$e;if(f&&J(oe)&&(oe=rv(oe)),__INTLIFY_PROD_DEVTOOLS__){const Pe={timestamp:Date.now(),key:J(o)?o:Dt(x)?x.key:"",locale:R||(Dt(x)?x.locale:""),format:J(x)?x:Dt(x)?x.source:"",message:oe};Pe.meta=ft({},e.__meta,k_()||{}),c_(Pe)}return oe}function P_(e){Ve(e.list)?e.list=e.list.map(t=>J(t)?cl(t):t):Ie(e.named)&&Object.keys(e.named).forEach(t=>{J(e.named[t])&&(e.named[t]=cl(e.named[t]))})}function kd(e,t,n,r,a,i){const{messages:s,onWarn:l,messageResolver:o,localeFallbacker:c}=e,u=c(e,r,n);let d=ze(),f,g=null;const A="translate";for(let E=0;E<u.length&&(f=u[E],d=s[f]||ze(),(g=o(d,t))===null&&(g=d[t]),!(J(g)||tn(g)||Dt(g)));E++)if(!A_(f,u)){const T=Gs(e,t,f,i,A);T!==t&&(g=T)}return[g,f,d]}function wd(e,t,n,r,a,i){const{messageCompiler:s,warnHtmlMessage:l}=e;if(Dt(r)){const c=r;return c.locale=c.locale||n,c.key=c.key||t,c}if(s==null){const c=(()=>r);return c.locale=n,c.key=t,c}const o=s(r,O_(e,n,a,r,l,i));return o.locale=n,o.key=t,o.source=r,o}function S_(e,t,n){return t(n)}function Qi(...e){const[t,n,r]=e,a=ze();if(!J(t)&&!Ze(t)&&!Dt(t)&&!tn(t))throw Jt(Wt.INVALID_ARGUMENT);const i=Ze(t)?String(t):(Dt(t),t);return Ze(n)?a.plural=n:J(n)?a.default=n:fe(n)&&!Qa(n)?a.named=n:Ve(n)&&(a.list=n),Ze(r)?a.plural=r:J(r)?a.default=r:fe(r)&&ft(a,r),[i,a]}function O_(e,t,n,r,a,i){return{locale:t,key:n,warnHtmlMessage:a,onError:s=>{throw i&&i(s),s},onCacheKey:s=>Qb(t,n,s)}}function L_(e,t,n,r){const{modifiers:a,pluralRules:i,messageResolver:s,fallbackLocale:l,fallbackWarn:o,missingWarn:c,fallbackContext:u}=e,f={locale:t,modifiers:a,pluralRules:i,messages:g=>{let A=s(n,g);if(A==null&&u){const[,,E]=kd(u,g,t,l,o,c);A=s(E,g)}if(J(A)||tn(A)){let E=!1;const C=wd(e,g,t,A,g,()=>{E=!0});return E?Al:C}else return Dt(A)?A:Al}};return e.processor&&(f.processor=e.processor),r.list&&(f.list=r.list),r.named&&(f.named=r.named),Ze(r.plural)&&(f.pluralIndex=r.plural),f}function Tl(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:a,onWarn:i,localeFallbacker:s}=e,{__datetimeFormatters:l}=e,[o,c,u,d]=es(...t),f=ke(u.missingWarn)?u.missingWarn:e.missingWarn;ke(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const g=!!u.part,A=js(e,u),E=s(e,a,A);if(!J(o)||o==="")return new Intl.DateTimeFormat(A,d).format(c);let T={},C,R=null;const w="datetime format";for(let M=0;M<E.length&&(C=E[M],T=n[C]||{},R=T[o],!fe(R));M++)Gs(e,o,C,f,w);if(!fe(R)||!J(C))return r?ti:o;let x=`${C}__${o}`;Qa(d)||(x=`${x}__${JSON.stringify(d)}`);let D=l.get(x);return D||(D=new Intl.DateTimeFormat(C,ft({},R,d)),l.set(x,D)),g?D.formatToParts(c):D.format(c)}const xd=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function es(...e){const[t,n,r,a]=e,i=ze();let s=ze(),l;if(J(t)){const o=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw Jt(Wt.INVALID_ISO_DATE_ARGUMENT);const c=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();l=new Date(c);try{l.toISOString()}catch{throw Jt(Wt.INVALID_ISO_DATE_ARGUMENT)}}else if(tv(t)){if(isNaN(t.getTime()))throw Jt(Wt.INVALID_DATE_ARGUMENT);l=t}else if(Ze(t))l=t;else throw Jt(Wt.INVALID_ARGUMENT);return J(n)?i.key=n:fe(n)&&Object.keys(n).forEach(o=>{xd.includes(o)?s[o]=n[o]:i[o]=n[o]}),J(r)?i.locale=r:fe(r)&&(s=r),fe(a)&&(s=a),[i.key||"",l,i,s]}function Cl(e,t,n){const r=e;for(const a in n){const i=`${t}__${a}`;r.__datetimeFormatters.has(i)&&r.__datetimeFormatters.delete(i)}}function Pl(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:a,onWarn:i,localeFallbacker:s}=e,{__numberFormatters:l}=e,[o,c,u,d]=ts(...t),f=ke(u.missingWarn)?u.missingWarn:e.missingWarn;ke(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const g=!!u.part,A=js(e,u),E=s(e,a,A);if(!J(o)||o==="")return new Intl.NumberFormat(A,d).format(c);let T={},C,R=null;const w="number format";for(let M=0;M<E.length&&(C=E[M],T=n[C]||{},R=T[o],!fe(R));M++)Gs(e,o,C,f,w);if(!fe(R)||!J(C))return r?ti:o;let x=`${C}__${o}`;Qa(d)||(x=`${x}__${JSON.stringify(d)}`);let D=l.get(x);return D||(D=new Intl.NumberFormat(C,ft({},R,d)),l.set(x,D)),g?D.formatToParts(c):D.format(c)}const Ed=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function ts(...e){const[t,n,r,a]=e,i=ze();let s=ze();if(!Ze(t))throw Jt(Wt.INVALID_ARGUMENT);const l=t;return J(n)?i.key=n:fe(n)&&Object.keys(n).forEach(o=>{Ed.includes(o)?s[o]=n[o]:i[o]=n[o]}),J(r)?i.locale=r:fe(r)&&(s=r),fe(a)&&(s=a),[i.key||"",l,i,s]}function Sl(e,t,n){const r=e;for(const a in n){const i=`${t}__${a}`;r.__numberFormatters.has(i)&&r.__numberFormatters.delete(i)}}zv();const R_="9.14.5";function N_(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(hn().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(hn().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(hn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(hn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(hn().__INTLIFY_PROD_DEVTOOLS__=!1)}const M_=f_.__EXTEND_POINT__,dn=ei(M_);dn(),dn(),dn(),dn(),dn(),dn(),dn(),dn(),dn();const Ad=Wt.__EXTEND_POINT__,Tt=ei(Ad),it={UNEXPECTED_RETURN_TYPE:Ad,INVALID_ARGUMENT:Tt(),MUST_BE_CALL_SETUP_TOP:Tt(),NOT_INSTALLED:Tt(),NOT_AVAILABLE_IN_LEGACY_MODE:Tt(),REQUIRED_VALUE:Tt(),INVALID_VALUE:Tt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Tt(),NOT_INSTALLED_WITH_PROVIDE:Tt(),UNEXPECTED_ERROR:Tt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Tt(),BRIDGE_SUPPORT_VUE_2_ONLY:Tt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Tt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Tt(),__EXTEND_POINT__:Tt()};function lt(e,...t){return Er(e,null,void 0)}const ns=Wn("__translateVNode"),rs=Wn("__datetimeParts"),as=Wn("__numberParts"),Id=Wn("__setPluralRules"),Td=Wn("__injectWithOption"),is=Wn("__dispose");function Jr(e){if(!Ie(e)||tn(e))return e;for(const t in e)if(Ft(e,t))if(!t.includes("."))Ie(e[t])&&Jr(e[t]);else{const n=t.split("."),r=n.length-1;let a=e,i=!1;for(let s=0;s<r;s++){if(n[s]==="__proto__")throw new Error(`unsafe key: ${n[s]}`);if(n[s]in a||(a[n[s]]=ze()),!Ie(a[n[s]])){i=!0;break}a=a[n[s]]}if(i||(tn(a)?dd.includes(n[r])||delete e[t]:(a[n[r]]=e[t],delete e[t])),!tn(a)){const s=a[n[r]];Ie(s)&&Jr(s)}}return e}function ni(e,t){const{messages:n,__i18n:r,messageResolver:a,flatJson:i}=t,s=fe(n)?n:Ve(r)?ze():{[e]:ze()};if(Ve(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:o,resource:c}=l;o?(s[o]=s[o]||ze(),xa(c,s[o])):xa(c,s)}else J(l)&&xa(JSON.parse(l),s)}),a==null&&i)for(const l in s)Ft(s,l)&&Jr(s[l]);return s}function Cd(e){return e.type}function Pd(e,t,n){let r=Ie(t.messages)?t.messages:ze();"__i18nGlobal"in n&&(r=ni(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const a=Object.keys(r);a.length&&a.forEach(i=>{e.mergeLocaleMessage(i,r[i])});{if(Ie(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(s=>{e.mergeDateTimeFormat(s,t.datetimeFormats[s])})}if(Ie(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(s=>{e.mergeNumberFormat(s,t.numberFormats[s])})}}}function Ol(e){return k(na,null,e,0)}const Ll="__INTLIFY_META__",Rl=()=>[],$_=()=>!1;let Nl=0;function Ml(e){return((t,n,r,a)=>e(n,r,St()||void 0,a))}const D_=()=>{const e=St();let t=null;return e&&(t=Cd(e)[Ll])?{[Ll]:t}:null};function Vs(e={},t){const{__root:n,__injectWithOption:r}=e,a=n===void 0,i=e.flatJson,s=Da?he:Qr,l=!!e.translateExistCompatible;let o=ke(e.inheritLocale)?e.inheritLocale:!0;const c=s(n&&o?n.locale.value:J(e.locale)?e.locale:wr),u=s(n&&o?n.fallbackLocale.value:J(e.fallbackLocale)||Ve(e.fallbackLocale)||fe(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:c.value),d=s(ni(c.value,e)),f=s(fe(e.datetimeFormats)?e.datetimeFormats:{[c.value]:{}}),g=s(fe(e.numberFormats)?e.numberFormats:{[c.value]:{}});let A=n?n.missingWarn:ke(e.missingWarn)||Nn(e.missingWarn)?e.missingWarn:!0,E=n?n.fallbackWarn:ke(e.fallbackWarn)||Nn(e.fallbackWarn)?e.fallbackWarn:!0,T=n?n.fallbackRoot:ke(e.fallbackRoot)?e.fallbackRoot:!0,C=!!e.fallbackFormat,R=Ue(e.missing)?e.missing:null,w=Ue(e.missing)?Ml(e.missing):null,x=Ue(e.postTranslation)?e.postTranslation:null,D=n?n.warnHtmlMessage:ke(e.warnHtmlMessage)?e.warnHtmlMessage:!0,M=!!e.escapeParameter;const j=n?n.modifiers:fe(e.modifiers)?e.modifiers:{};let $=e.pluralRules||n&&n.pluralRules,B;B=(()=>{a&&wl(null);const P={version:R_,locale:c.value,fallbackLocale:u.value,messages:d.value,modifiers:j,pluralRules:$,missing:w===null?void 0:w,missingWarn:A,fallbackWarn:E,fallbackFormat:C,unresolving:!0,postTranslation:x===null?void 0:x,warnHtmlMessage:D,escapeParameter:M,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};P.datetimeFormats=f.value,P.numberFormats=g.value,P.__datetimeFormatters=fe(B)?B.__datetimeFormatters:void 0,P.__numberFormatters=fe(B)?B.__numberFormatters:void 0;const F=x_(P);return a&&wl(F),F})(),Or(B,c.value,u.value);function $e(){return[c.value,u.value,d.value,f.value,g.value]}const oe=ie({get:()=>c.value,set:P=>{c.value=P,B.locale=c.value}}),Pe=ie({get:()=>u.value,set:P=>{u.value=P,B.fallbackLocale=u.value,Or(B,c.value,P)}}),_t=ie(()=>d.value),tt=ie(()=>f.value),ye=ie(()=>g.value);function ge(){return Ue(x)?x:null}function ve(P){x=P,B.postTranslation=P}function nt(){return R}function te(P){P!==null&&(w=Ml(P)),R=P,B.missing=w}const Be=(P,F,se,we,qe,wt)=>{$e();let ut;try{__INTLIFY_PROD_DEVTOOLS__,a||(B.fallbackContext=n?w_():void 0),ut=P(B)}finally{__INTLIFY_PROD_DEVTOOLS__,a||(B.fallbackContext=void 0)}if(se!=="translate exists"&&Ze(ut)&&ut===ti||se==="translate exists"&&!ut){const[Gn,ri]=F();return n&&T?we(n):qe(Gn)}else{if(wt(ut))return ut;throw lt(it.UNEXPECTED_RETURN_TYPE)}};function je(...P){return Be(F=>Reflect.apply(Il,null,[F,...P]),()=>Qi(...P),"translate",F=>Reflect.apply(F.t,F,[...P]),F=>F,F=>J(F))}function kt(...P){const[F,se,we]=P;if(we&&!Ie(we))throw lt(it.INVALID_ARGUMENT);return je(F,se,ft({resolvedMessage:!0},we||{}))}function ct(...P){return Be(F=>Reflect.apply(Tl,null,[F,...P]),()=>es(...P),"datetime format",F=>Reflect.apply(F.d,F,[...P]),()=>vl,F=>J(F))}function Me(...P){return Be(F=>Reflect.apply(Pl,null,[F,...P]),()=>ts(...P),"number format",F=>Reflect.apply(F.n,F,[...P]),()=>vl,F=>J(F))}function xe(P){return P.map(F=>J(F)||Ze(F)||ke(F)?Ol(String(F)):F)}const Z={normalize:xe,interpolate:P=>P,type:"vnode"};function V(...P){return Be(F=>{let se;const we=F;try{we.processor=Z,se=Reflect.apply(Il,null,[we,...P])}finally{we.processor=null}return se},()=>Qi(...P),"translate",F=>F[ns](...P),F=>[Ol(F)],F=>Ve(F))}function re(...P){return Be(F=>Reflect.apply(Pl,null,[F,...P]),()=>ts(...P),"number format",F=>F[as](...P),Rl,F=>J(F)||Ve(F))}function ue(...P){return Be(F=>Reflect.apply(Tl,null,[F,...P]),()=>es(...P),"datetime format",F=>F[rs](...P),Rl,F=>J(F)||Ve(F))}function y(P){$=P,B.pluralRules=$}function v(P,F){return Be(()=>{if(!P)return!1;const se=J(F)?F:c.value,we=G(se),qe=B.messageResolver(we,P);return l?qe!=null:tn(qe)||Dt(qe)||J(qe)},()=>[P],"translate exists",se=>Reflect.apply(se.te,se,[P,F]),$_,se=>ke(se))}function b(P){let F=null;const se=pd(B,u.value,c.value);for(let we=0;we<se.length;we++){const qe=d.value[se[we]]||{},wt=B.messageResolver(qe,P);if(wt!=null){F=wt;break}}return F}function N(P){const F=b(P);return F??(n?n.tm(P)||{}:{})}function G(P){return d.value[P]||{}}function U(P,F){if(i){const se={[P]:F};for(const we in se)Ft(se,we)&&Jr(se[we]);F=se[P]}d.value[P]=F,B.messages=d.value}function K(P,F){d.value[P]=d.value[P]||{};const se={[P]:F};if(i)for(const we in se)Ft(se,we)&&Jr(se[we]);F=se[P],xa(F,d.value[P]),B.messages=d.value}function q(P){return f.value[P]||{}}function m(P,F){f.value[P]=F,B.datetimeFormats=f.value,Cl(B,P,F)}function h(P,F){f.value[P]=ft(f.value[P]||{},F),B.datetimeFormats=f.value,Cl(B,P,F)}function S(P){return g.value[P]||{}}function z(P,F){g.value[P]=F,B.numberFormats=g.value,Sl(B,P,F)}function Y(P,F){g.value[P]=ft(g.value[P]||{},F),B.numberFormats=g.value,Sl(B,P,F)}Nl++,n&&Da&&(ot(n.locale,P=>{o&&(c.value=P,B.locale=P,Or(B,c.value,u.value))}),ot(n.fallbackLocale,P=>{o&&(u.value=P,B.fallbackLocale=P,Or(B,c.value,u.value))}));const H={id:Nl,locale:oe,fallbackLocale:Pe,get inheritLocale(){return o},set inheritLocale(P){o=P,P&&n&&(c.value=n.locale.value,u.value=n.fallbackLocale.value,Or(B,c.value,u.value))},get availableLocales(){return Object.keys(d.value).sort()},messages:_t,get modifiers(){return j},get pluralRules(){return $||{}},get isGlobal(){return a},get missingWarn(){return A},set missingWarn(P){A=P,B.missingWarn=A},get fallbackWarn(){return E},set fallbackWarn(P){E=P,B.fallbackWarn=E},get fallbackRoot(){return T},set fallbackRoot(P){T=P},get fallbackFormat(){return C},set fallbackFormat(P){C=P,B.fallbackFormat=C},get warnHtmlMessage(){return D},set warnHtmlMessage(P){D=P,B.warnHtmlMessage=P},get escapeParameter(){return M},set escapeParameter(P){M=P,B.escapeParameter=P},t:je,getLocaleMessage:G,setLocaleMessage:U,mergeLocaleMessage:K,getPostTranslationHandler:ge,setPostTranslationHandler:ve,getMissingHandler:nt,setMissingHandler:te,[Id]:y};return H.datetimeFormats=tt,H.numberFormats=ye,H.rt=kt,H.te=v,H.tm=N,H.d=ct,H.n=Me,H.getDateTimeFormat=q,H.setDateTimeFormat=m,H.mergeDateTimeFormat=h,H.getNumberFormat=S,H.setNumberFormat=z,H.mergeNumberFormat=Y,H[Td]=r,H[ns]=V,H[rs]=ue,H[as]=re,H}function z_(e){const t=J(e.locale)?e.locale:wr,n=J(e.fallbackLocale)||Ve(e.fallbackLocale)||fe(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,r=Ue(e.missing)?e.missing:void 0,a=ke(e.silentTranslationWarn)||Nn(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,i=ke(e.silentFallbackWarn)||Nn(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,s=ke(e.fallbackRoot)?e.fallbackRoot:!0,l=!!e.formatFallbackMessages,o=fe(e.modifiers)?e.modifiers:{},c=e.pluralizationRules,u=Ue(e.postTranslation)?e.postTranslation:void 0,d=J(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,f=!!e.escapeParameterHtml,g=ke(e.sync)?e.sync:!0;let A=e.messages;if(fe(e.sharedMessages)){const M=e.sharedMessages;A=Object.keys(M).reduce(($,B)=>{const be=$[B]||($[B]={});return ft(be,M[B]),$},A||{})}const{__i18n:E,__root:T,__injectWithOption:C}=e,R=e.datetimeFormats,w=e.numberFormats,x=e.flatJson,D=e.translateExistCompatible;return{locale:t,fallbackLocale:n,messages:A,flatJson:x,datetimeFormats:R,numberFormats:w,missing:r,missingWarn:a,fallbackWarn:i,fallbackRoot:s,fallbackFormat:l,modifiers:o,pluralRules:c,postTranslation:u,warnHtmlMessage:d,escapeParameter:f,messageResolver:e.messageResolver,inheritLocale:g,translateExistCompatible:D,__i18n:E,__root:T,__injectWithOption:C}}function ss(e={},t){{const n=Vs(z_(e)),{__extender:r}=e,a={id:n.id,get locale(){return n.locale.value},set locale(i){n.locale.value=i},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(i){n.fallbackLocale.value=i},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(i){},get missing(){return n.getMissingHandler()},set missing(i){n.setMissingHandler(i)},get silentTranslationWarn(){return ke(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(i){n.missingWarn=ke(i)?!i:i},get silentFallbackWarn(){return ke(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(i){n.fallbackWarn=ke(i)?!i:i},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(i){n.fallbackFormat=i},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(i){n.setPostTranslationHandler(i)},get sync(){return n.inheritLocale},set sync(i){n.inheritLocale=i},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(i){n.warnHtmlMessage=i!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(i){n.escapeParameter=i},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(i){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...i){const[s,l,o]=i,c={};let u=null,d=null;if(!J(s))throw lt(it.INVALID_ARGUMENT);const f=s;return J(l)?c.locale=l:Ve(l)?u=l:fe(l)&&(d=l),Ve(o)?u=o:fe(o)&&(d=o),Reflect.apply(n.t,n,[f,u||d||{},c])},rt(...i){return Reflect.apply(n.rt,n,[...i])},tc(...i){const[s,l,o]=i,c={plural:1};let u=null,d=null;if(!J(s))throw lt(it.INVALID_ARGUMENT);const f=s;return J(l)?c.locale=l:Ze(l)?c.plural=l:Ve(l)?u=l:fe(l)&&(d=l),J(o)?c.locale=o:Ve(o)?u=o:fe(o)&&(d=o),Reflect.apply(n.t,n,[f,u||d||{},c])},te(i,s){return n.te(i,s)},tm(i){return n.tm(i)},getLocaleMessage(i){return n.getLocaleMessage(i)},setLocaleMessage(i,s){n.setLocaleMessage(i,s)},mergeLocaleMessage(i,s){n.mergeLocaleMessage(i,s)},d(...i){return Reflect.apply(n.d,n,[...i])},getDateTimeFormat(i){return n.getDateTimeFormat(i)},setDateTimeFormat(i,s){n.setDateTimeFormat(i,s)},mergeDateTimeFormat(i,s){n.mergeDateTimeFormat(i,s)},n(...i){return Reflect.apply(n.n,n,[...i])},getNumberFormat(i){return n.getNumberFormat(i)},setNumberFormat(i,s){n.setNumberFormat(i,s)},mergeNumberFormat(i,s){n.mergeNumberFormat(i,s)},getChoiceIndex(i,s){return-1}};return a.__extender=r,a}}const Hs={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function F_({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,a)=>[...r,...a.type===me?a.children:[a]],[]):t.reduce((n,r)=>{const a=e[r];return a&&(n[r]=a()),n},ze())}function Sd(e){return me}const W_=Ee({name:"i18n-t",props:ft({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>Ze(e)||!isNaN(e)}},Hs),setup(e,t){const{slots:n,attrs:r}=t,a=e.i18n||ir({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(d=>d!=="_"),s=ze();e.locale&&(s.locale=e.locale),e.plural!==void 0&&(s.plural=J(e.plural)?+e.plural:e.plural);const l=F_(t,i),o=a[ns](e.keypath,l,s),c=ft(ze(),r),u=J(e.tag)||Ie(e.tag)?e.tag:Sd();return Mt(u,c,o)}}}),$l=W_;function U_(e){return Ve(e)&&!J(e[0])}function Od(e,t,n,r){const{slots:a,attrs:i}=t;return()=>{const s={part:!0};let l=ze();e.locale&&(s.locale=e.locale),J(e.format)?s.key=e.format:Ie(e.format)&&(J(e.format.key)&&(s.key=e.format.key),l=Object.keys(e.format).reduce((f,g)=>n.includes(g)?ft(ze(),f,{[g]:e.format[g]}):f,ze()));const o=r(e.value,s,l);let c=[s.key];Ve(o)?c=o.map((f,g)=>{const A=a[f.type],E=A?A({[f.type]:f.value,index:g,parts:o}):[f.value];return U_(E)&&(E[0].key=`${f.type}-${g}`),E}):J(o)&&(c=[o]);const u=ft(ze(),i),d=J(e.tag)||Ie(e.tag)?e.tag:Sd();return Mt(d,u,c)}}const B_=Ee({name:"i18n-n",props:ft({value:{type:Number,required:!0},format:{type:[String,Object]}},Hs),setup(e,t){const n=e.i18n||ir({useScope:e.scope,__useComponent:!0});return Od(e,t,Ed,(...r)=>n[as](...r))}}),Dl=B_,j_=Ee({name:"i18n-d",props:ft({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Hs),setup(e,t){const n=e.i18n||ir({useScope:e.scope,__useComponent:!0});return Od(e,t,xd,(...r)=>n[rs](...r))}}),zl=j_;function G_(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function V_(e){const t=s=>{const{instance:l,modifiers:o,value:c}=s;if(!l||!l.$)throw lt(it.UNEXPECTED_ERROR);const u=G_(e,l.$),d=Fl(c);return[Reflect.apply(u.t,u,[...Wl(d)]),u]};return{created:(s,l)=>{const[o,c]=t(l);Da&&e.global===c&&(s.__i18nWatcher=ot(c.locale,()=>{l.instance&&l.instance.$forceUpdate()})),s.__composer=c,s.textContent=o},unmounted:s=>{Da&&s.__i18nWatcher&&(s.__i18nWatcher(),s.__i18nWatcher=void 0,delete s.__i18nWatcher),s.__composer&&(s.__composer=void 0,delete s.__composer)},beforeUpdate:(s,{value:l})=>{if(s.__composer){const o=s.__composer,c=Fl(l);s.textContent=Reflect.apply(o.t,o,[...Wl(c)])}},getSSRProps:s=>{const[l]=t(s);return{textContent:l}}}}function Fl(e){if(J(e))return{path:e};if(fe(e)){if(!("path"in e))throw lt(it.REQUIRED_VALUE,"path");return e}else throw lt(it.INVALID_VALUE)}function Wl(e){const{path:t,locale:n,args:r,choice:a,plural:i}=e,s={},l=r||{};return J(n)&&(s.locale=n),Ze(a)&&(s.plural=a),Ze(i)&&(s.plural=i),[t,l,s]}function H_(e,t,...n){const r=fe(n[0])?n[0]:{},a=!!r.useI18nComponentName;(!ke(r.globalInstall)||r.globalInstall)&&([a?"i18n":$l.name,"I18nT"].forEach(s=>e.component(s,$l)),[Dl.name,"I18nN"].forEach(s=>e.component(s,Dl)),[zl.name,"I18nD"].forEach(s=>e.component(s,zl))),e.directive("t",V_(t))}function q_(e,t,n){return{beforeCreate(){const r=St();if(!r)throw lt(it.UNEXPECTED_ERROR);const a=this.$options;if(a.i18n){const i=a.i18n;if(a.__i18n&&(i.__i18n=a.__i18n),i.__root=t,this===this.$root)this.$i18n=Ul(e,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=ss(i);const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}}else if(a.__i18n)if(this===this.$root)this.$i18n=Ul(e,a);else{this.$i18n=ss({__i18n:a.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:t});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=e;a.__i18nGlobal&&Pd(t,a,a),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,s)=>this.$i18n.te(i,s),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=St();if(!r)throw lt(it.UNEXPECTED_ERROR);const a=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,a.__disposer&&(a.__disposer(),delete a.__disposer,delete a.__extender),n.__deleteInstance(r),delete this.$i18n}}}function Ul(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[Id](t.pluralizationRules||e.pluralizationRules);const n=ni(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(r=>e.mergeLocaleMessage(r,n[r])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r,t.datetimeFormats[r])),t.numberFormats&&Object.keys(t.numberFormats).forEach(r=>e.mergeNumberFormat(r,t.numberFormats[r])),e}const K_=Wn("global-vue-i18n");function Y_(e={},t){const n=__VUE_I18N_LEGACY_API__&&ke(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,r=ke(e.globalInjection)?e.globalInjection:!0,a=__VUE_I18N_LEGACY_API__&&n?!!e.allowComposition:!0,i=new Map,[s,l]=X_(e,n),o=Wn("");function c(f){return i.get(f)||null}function u(f,g){i.set(f,g)}function d(f){i.delete(f)}{const f={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return a},async install(g,...A){if(g.__VUE_I18N_SYMBOL__=o,g.provide(g.__VUE_I18N_SYMBOL__,f),fe(A[0])){const C=A[0];f.__composerExtend=C.__composerExtend,f.__vueI18nExtend=C.__vueI18nExtend}let E=null;!n&&r&&(E=i1(g,f.global)),__VUE_I18N_FULL_INSTALL__&&H_(g,f,...A),__VUE_I18N_LEGACY_API__&&n&&g.mixin(q_(l,l.__composer,f));const T=g.unmount;g.unmount=()=>{E&&E(),f.dispose(),T()}},get global(){return l},dispose(){s.stop()},__instances:i,__getInstance:c,__setInstance:u,__deleteInstance:d};return f}}function ir(e={}){const t=St();if(t==null)throw lt(it.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw lt(it.NOT_INSTALLED);const n=J_(t),r=Q_(n),a=Cd(t),i=Z_(e,a);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!e.__useComponent){if(!n.allowComposition)throw lt(it.NOT_AVAILABLE_IN_LEGACY_MODE);return r1(t,i,r,e)}if(i==="global")return Pd(r,e,a),r;if(i==="parent"){let o=e1(n,t,e.__useComponent);return o==null&&(o=r),o}const s=n;let l=s.__getInstance(t);if(l==null){const o=ft({},e);"__i18n"in a&&(o.__i18n=a.__i18n),r&&(o.__root=r),l=Vs(o),s.__composerExtend&&(l[is]=s.__composerExtend(l)),n1(s,t,l),s.__setInstance(t,l)}return l}function X_(e,t,n){const r=ds();{const a=__VUE_I18N_LEGACY_API__&&t?r.run(()=>ss(e)):r.run(()=>Vs(e));if(a==null)throw lt(it.UNEXPECTED_ERROR);return[r,a]}}function J_(e){{const t=Nt(e.isCE?K_:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw lt(e.isCE?it.NOT_INSTALLED_WITH_PROVIDE:it.UNEXPECTED_ERROR);return t}}function Z_(e,t){return Qa(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function Q_(e){return e.mode==="composition"?e.global:e.global.__composer}function e1(e,t,n=!1){let r=null;const a=t.root;let i=t1(t,n);for(;i!=null;){const s=e;if(e.mode==="composition")r=s.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=s.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[Td]&&(r=null))}if(r!=null||a===i)break;i=i.parent}return r}function t1(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function n1(e,t,n){$n(()=>{},t),rr(()=>{const r=n;e.__deleteInstance(t);const a=r[is];a&&(a(),delete r[is])},t)}function r1(e,t,n,r={}){const a=t==="local",i=Qr(null);if(a&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw lt(it.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const s=ke(r.inheritLocale)?r.inheritLocale:!J(r.locale),l=he(!a||s?n.locale.value:J(r.locale)?r.locale:wr),o=he(!a||s?n.fallbackLocale.value:J(r.fallbackLocale)||Ve(r.fallbackLocale)||fe(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:l.value),c=he(ni(l.value,r)),u=he(fe(r.datetimeFormats)?r.datetimeFormats:{[l.value]:{}}),d=he(fe(r.numberFormats)?r.numberFormats:{[l.value]:{}}),f=a?n.missingWarn:ke(r.missingWarn)||Nn(r.missingWarn)?r.missingWarn:!0,g=a?n.fallbackWarn:ke(r.fallbackWarn)||Nn(r.fallbackWarn)?r.fallbackWarn:!0,A=a?n.fallbackRoot:ke(r.fallbackRoot)?r.fallbackRoot:!0,E=!!r.fallbackFormat,T=Ue(r.missing)?r.missing:null,C=Ue(r.postTranslation)?r.postTranslation:null,R=a?n.warnHtmlMessage:ke(r.warnHtmlMessage)?r.warnHtmlMessage:!0,w=!!r.escapeParameter,x=a?n.modifiers:fe(r.modifiers)?r.modifiers:{},D=r.pluralRules||a&&n.pluralRules;function M(){return[l.value,o.value,c.value,u.value,d.value]}const j=ie({get:()=>i.value?i.value.locale.value:l.value,set:b=>{i.value&&(i.value.locale.value=b),l.value=b}}),$=ie({get:()=>i.value?i.value.fallbackLocale.value:o.value,set:b=>{i.value&&(i.value.fallbackLocale.value=b),o.value=b}}),B=ie(()=>i.value?i.value.messages.value:c.value),be=ie(()=>u.value),$e=ie(()=>d.value);function oe(){return i.value?i.value.getPostTranslationHandler():C}function Pe(b){i.value&&i.value.setPostTranslationHandler(b)}function _t(){return i.value?i.value.getMissingHandler():T}function tt(b){i.value&&i.value.setMissingHandler(b)}function ye(b){return M(),b()}function ge(...b){return i.value?ye(()=>Reflect.apply(i.value.t,null,[...b])):ye(()=>"")}function ve(...b){return i.value?Reflect.apply(i.value.rt,null,[...b]):""}function nt(...b){return i.value?ye(()=>Reflect.apply(i.value.d,null,[...b])):ye(()=>"")}function te(...b){return i.value?ye(()=>Reflect.apply(i.value.n,null,[...b])):ye(()=>"")}function Be(b){return i.value?i.value.tm(b):{}}function je(b,N){return i.value?i.value.te(b,N):!1}function kt(b){return i.value?i.value.getLocaleMessage(b):{}}function ct(b,N){i.value&&(i.value.setLocaleMessage(b,N),c.value[b]=N)}function Me(b,N){i.value&&i.value.mergeLocaleMessage(b,N)}function xe(b){return i.value?i.value.getDateTimeFormat(b):{}}function W(b,N){i.value&&(i.value.setDateTimeFormat(b,N),u.value[b]=N)}function Z(b,N){i.value&&i.value.mergeDateTimeFormat(b,N)}function V(b){return i.value?i.value.getNumberFormat(b):{}}function re(b,N){i.value&&(i.value.setNumberFormat(b,N),d.value[b]=N)}function ue(b,N){i.value&&i.value.mergeNumberFormat(b,N)}const y={get id(){return i.value?i.value.id:-1},locale:j,fallbackLocale:$,messages:B,datetimeFormats:be,numberFormats:$e,get inheritLocale(){return i.value?i.value.inheritLocale:s},set inheritLocale(b){i.value&&(i.value.inheritLocale=b)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(c.value)},get modifiers(){return i.value?i.value.modifiers:x},get pluralRules(){return i.value?i.value.pluralRules:D},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:f},set missingWarn(b){i.value&&(i.value.missingWarn=b)},get fallbackWarn(){return i.value?i.value.fallbackWarn:g},set fallbackWarn(b){i.value&&(i.value.missingWarn=b)},get fallbackRoot(){return i.value?i.value.fallbackRoot:A},set fallbackRoot(b){i.value&&(i.value.fallbackRoot=b)},get fallbackFormat(){return i.value?i.value.fallbackFormat:E},set fallbackFormat(b){i.value&&(i.value.fallbackFormat=b)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:R},set warnHtmlMessage(b){i.value&&(i.value.warnHtmlMessage=b)},get escapeParameter(){return i.value?i.value.escapeParameter:w},set escapeParameter(b){i.value&&(i.value.escapeParameter=b)},t:ge,getPostTranslationHandler:oe,setPostTranslationHandler:Pe,getMissingHandler:_t,setMissingHandler:tt,rt:ve,d:nt,n:te,tm:Be,te:je,getLocaleMessage:kt,setLocaleMessage:ct,mergeLocaleMessage:Me,getDateTimeFormat:xe,setDateTimeFormat:W,mergeDateTimeFormat:Z,getNumberFormat:V,setNumberFormat:re,mergeNumberFormat:ue};function v(b){b.locale.value=l.value,b.fallbackLocale.value=o.value,Object.keys(c.value).forEach(N=>{b.mergeLocaleMessage(N,c.value[N])}),Object.keys(u.value).forEach(N=>{b.mergeDateTimeFormat(N,u.value[N])}),Object.keys(d.value).forEach(N=>{b.mergeNumberFormat(N,d.value[N])}),b.escapeParameter=w,b.fallbackFormat=E,b.fallbackRoot=A,b.fallbackWarn=g,b.missingWarn=f,b.warnHtmlMessage=R}return Sc(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw lt(it.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const b=i.value=e.proxy.$i18n.__composer;t==="global"?(l.value=b.locale.value,o.value=b.fallbackLocale.value,c.value=b.messages.value,u.value=b.datetimeFormats.value,d.value=b.numberFormats.value):a&&v(b)}),y}const a1=["locale","fallbackLocale","availableLocales"],Bl=["t","rt","d","n","tm","te"];function i1(e,t){const n=Object.create(null);return a1.forEach(a=>{const i=Object.getOwnPropertyDescriptor(t,a);if(!i)throw lt(it.UNEXPECTED_ERROR);const s=Ke(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,a,s)}),e.config.globalProperties.$i18n=n,Bl.forEach(a=>{const i=Object.getOwnPropertyDescriptor(t,a);if(!i||!i.value)throw lt(it.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,i)}),()=>{delete e.config.globalProperties.$i18n,Bl.forEach(a=>{delete e.config.globalProperties[`$${a}`]})}}N_();__INTLIFY_JIT_COMPILATION__?kl(C_):kl(T_);b_(Zv);v_(pd);if(__INTLIFY_PROD_DEVTOOLS__){const e=hn();e.__INTLIFY__=!0,o_(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const s1={home:"Home",about:"About",governance:"AI Governance",research:"Research",services:"Services",products:"Products",privacy:"Privacy",ourTeams:"Our Team"},o1={tagline:"Research-based AI governance for regulated environments.",rights:"All Rights Reserved",navigation:"Navigation",contact:"Contact",address:"Dijital Park Teknokent, Atasehir / Istanbul"},l1={switchLanguage:"Switch language to {locale}"},c1={title:"Ready to Strengthen Your AI Governance Framework?",description:"We help your teams turn AI governance questions into clear controls, evidence, and operating practices.",contact:"Contact Us",research:"Explore Our Research"},u1={eyebrow:"Contact Request",title:"Tell us what you need",description:"Share a few details and we will use this as the starting point for the right conversation.",close:"Close contact form",cancel:"Close",fields:{name:"Full name",email:"Email",organization:"Organization",topic:"Topic",message:"Message"},placeholders:{name:"Your name",email:"name@company.com",organization:"Company or institution",message:"Tell us what you are working on or what kind of support you need."},topics:[{value:"governance",label:"AI governance or compliance"},{value:"products",label:"TrustAI products"},{value:"research",label:"Research collaboration"},{value:"other",label:"Other"}],button:{idle:"Send request",sending:"Preparing your note...",sent:"Request ready"},toastTitle:"Request received",toastDescription:"Thank you. We will review your message and get back to you soon."},d1={label:"Research-Driven AI Governance",title:"AI Governance and Explainability for High-Risk Models",description:"We develop research-based solutions that improve model transparency, traceability, and audit readiness in regulated environments.",button:"Explore Our Research"},f1={focusAreas:"Focus Areas",servicesDescription:"Composable governance workflows built for transparent, regulated AI delivery.",researchDescription:"Selected work that informs our platform architecture, governance patterns, and explainability methods.",ctaDescription:"Have a question about TrustAI or our research? We would be happy to hear from you."},p1={label:"What We Do?",title:"We provide structured AI governance and explainability solutions for regulated environments.",explainability:{title:"Explainability",description:"Generate interpretable insights into model decisions for audit and regulatory review."},traceability:{title:"Model Traceability",description:"Track model versions, changes, and decision logic across the lifecycle."},workflows:{title:"Governance Workflows",description:"Structured approval processes and documentation for high-risk AI systems."},audit:{title:"Audit Readiness",description:"Produce compliance-ready reports aligned with regulatory expectations."}},m1={label:"About Us",title:"Research-Based AI Governance for Regulated Environments",intro:"We help organizations apply research-based AI governance from Türkiye to improve explainability, reliability, and oversight.",sectorFocus:"Our current solutions are tailored to the financial sector, where regulatory oversight, transparency, and risk management are of critical importance. In the near future, we plan to expand our services to high-impact domains such as healthcare, manufacturing, and public services.",approach:"We transform the latest research into practical solutions that are transparent, fair, and audit-ready for high-risk financial applications such as credit risk scoring, fraud detection, and compliance monitoring.",team:"We bring together experts in explainable AI (XAI), optimization, model risk, and MLOps, combining academic depth with industry experience for financial institutions that value trust, compliance, and resilience."},g1={label:"Why TrustAI?",title:"We combine academic rigor with practical governance solutions for high-risk AI systems.",foundation:{title:"Research-Driven Foundation",description:"Built on peer-reviewed research and academic expertise in explainable and trustworthy AI."},sector:{title:"Financial Sector Focus",description:"Designed specifically for regulated financial environments and high-impact AI applications."},governance:{title:"Governance by Design",description:"Structured workflows, documentation, and traceability embedded from the start."},audit:{title:"Audit-Ready Architecture",description:"Clear model explanations and reporting aligned with regulatory expectations."}},h1={title:"Research & Publications",subtitle:"Advancing Trustworthy and Explainable AI",publicationBtn:"View Publication"},y1={label:"Evidence Base",title:"Research & References",description:"TrustAI integrates rigorous academic inquiry with practical governance solutions. Below are publications and references that exemplify our contribution to trustworthy and explainable artificial intelligence.",subtitle:"Our Publications"},b1={hero:{label:"Research-Led Foundations",title:"About TrustAI",subtitle:"TrustAI combines academic rigor with production-ready engineering to help organizations build transparent, auditable, and regulation-ready AI systems in high-risk sectors."},whoWeAre:{title:"Who We Are",p1:"We help organizations in Türkiye and regulated markets connect academic AI governance research with practical implementation.",p2:"We help teams address explainability, fairness, robustness, and regulatory compliance for high-risk AI systems — particularly in regulated sectors such as finance.",p3:"We combine academic rigor with production-ready engineering to help organizations deliver AI systems that are transparent, auditable, and compliant by design."},vision:{title:"Our Vision",description:"To build a Türkiye-based, academically grounded governance platform that helps financial institutions and other regulated sectors deploy high-risk AI systems with transparency, auditability, and confidence."},mission:{title:"Our Mission",items:["Make AI systems explainable and accountable","Reduce model risk in regulated environments","Support compliance with EU AI Act, ISO/IEC 42001, and national AI regulations","Build domestic AI technology with strong scientific foundations"]},difference:{title:"What Makes TrustAI Different",p1:"We provide more than a toolkit: an integrated governance framework that brings together explainability, fairness analysis, robustness monitoring, automated compliance reporting, and MLOps-native architecture within a unified and structured system.",p2:"We ensure AI systems are designed to be compliant, transparent, and operationally resilient from inception."},platform:{title:"TrustAI-X Platform",description:"We provide TrustAI-X as a trustworthy and auditable artificial intelligence infrastructure for high-risk environments."},coreCapabilities:{title:"Core Capabilities",items:["SHAP, LIME, and DiCE-Extended counterfactual explanations","Bias detection and mitigation algorithms","Drift detection (PSI, KS, ADWIN)","Calibration monitoring (ECE, Brier, Platt Scaling)","EU AI Act compliant technical documentation","Automated audit trail and reporting"]},architecture:{title:"Platform Architecture",items:["MLOps-native","Container-based","API-first","Kubernetes compatible","On-Prem / SaaS / Hybrid deployable"]},scientific:{title:"Scientific Foundation",p1:"We build TrustAI on peer-reviewed research, including DiCE-Extended: A Robust Approach to Counterfactual Explanations, presented at MCO 2025 and published by Springer.",p2:"Our research focuses on the stability of counterfactual explanations, multi-criteria optimization, and robust and fair AI decision systems.",p3:"We aim to produce SCI/SSCI indexed publications, patent applications, graduate-level research outputs, and open-source contributions."},regulatory:{title:"Regulatory Alignment",p1:"We embed regulatory compliance from the beginning and align our framework with:",items:["EU AI Act (2024/1689)","ISO/IEC 42001:2023","ISO/IEC 24029","NIST AI Risk Management Framework","National AI Strategy (2021–2025)"],p2:"We ensure AI systems are documented, traceable, auditable, and continuously monitored."},sectors:{title:"Target Sectors",p1:"We focus primarily on high-risk AI systems in banking, credit scoring, fraud detection, financial risk modeling, and regulated enterprise AI environments.",p2:"We help adapt the platform for manufacturing, public sector, and healthcare domains that require structured governance frameworks."},team:{title:"Our Team",p1:"We operate through a multidisciplinary structure that combines academic leadership, AI and data science researchers, software engineers, MLOps specialists, regulatory experts, and industry advisors.",p2:"We work with university R&D infrastructure and research networks to ensure scientific depth and applied innovation."},closing:{statement:"AI must be explainable. AI must be measurable. AI must be accountable. AI must be scientifically grounded and regulation-ready.",highlight:"TrustAI exists to make that possible."},tabs:{whoWeAre:"Who We Are",platform:"Platform",alignment:"Alignment"}},v1={diceExtended:{title:"DiCE-Extended: A Robust Approach to Counterfactual Explanations in Machine Learning",description:"DiCE-Extended enhances counterfactual explanation generation by integrating multi-objective optimization to improve robustness while preserving interpretability. It introduces a stability-aware design that produces more reliable and decision-aligned explanations across diverse machine learning models."},highStakes:{title:"Trustworthy and Responsible AI for High-Stakes Decision Environments",description:"This work designs an optimization-based ensemble pruning approach that strengthens model stability, interpretability, and robustness, helping organizations build transparent and accountable decision-support systems."}},_1={hero:{label:"Trust, Risk & Accountability",title:"AI Governance: Importance and Impact",subtitle:"We help organizations design and implement AI governance frameworks for high-impact systems across finance, healthcare, public services, and critical infrastructure, addressing risks related to bias, opacity, accountability, and regulatory exposure."},whatIs:{title:"What is AI Governance?",p1:"AI governance refers to the structured framework of principles, policies, operational controls, and accountability mechanisms that guide how artificial intelligence systems are designed, deployed, monitored, and corrected.",p2:"It ensures that AI systems operate in alignment with legal standards, ethical norms, institutional objectives, and long-term societal interests. Governance is not a single compliance checkbox; it is a continuous lifecycle discipline."},whyItMatters:{title:"Why AI Governance Matters",cards:{bias:{title:"Bias & Discrimination Risks",description:"Without governance, AI models can reinforce historical biases, leading to unfair credit decisions, exclusionary outcomes, or systemic discrimination."},opacity:{title:"Opacity & Explainability Gaps",description:"Black-box models undermine trust. Governance frameworks require transparent documentation, explainability techniques, and interpretability controls."},regulatory:{title:"Regulatory & Legal Exposure",description:"Regulatory environments increasingly demand traceability, auditability, and documented risk controls for AI systems."}}},pillars:{title:"Core Governance Pillars",accountability:{title:"Accountability",description:"Clear ownership of model decisions, defined responsibility structures, and escalation mechanisms for high-risk AI systems."},traceability:{title:"Traceability",description:"Full documentation of model versions, training data sources, validation procedures, and deployment changes across the lifecycle."},monitoring:{title:"Monitoring & Risk Management",description:"Continuous oversight of model drift, performance degradation, and emerging compliance risks."}},financialSector:{title:"AI Governance in the Financial Sector",p1:"In regulated financial environments, AI systems influence credit risk scoring, fraud detection, anti-money laundering processes, and compliance monitoring. These applications directly impact individuals, institutions, and markets.",p2:"Financial regulators require demonstrable transparency, fairness, and model validation standards. Governance frameworks provide structured workflows, documentation, and reporting mechanisms that ensure models remain defensible and audit-ready."},closing:{title:"Building Trust Through Structured Governance",description:"Effective AI governance transforms advanced machine learning systems into transparent, accountable, and resilient decision infrastructures. It bridges academic research with practical regulatory implementation, ensuring innovation does not compromise fairness, legality, or public trust.",cta:"Contact TrustAI"}},k1={sectionDescription:"Selected publications and working directions behind TrustAI's explainability and governance tooling.",publicationLabel:"Publication",publicationRequest:"Publication details are available upon request.",collaborateTitle:"Collaborate With TrustAI Research",collaborateDescription:"We turn academic work into deployable governance practices for finance and other high-impact sectors."},w1={hero:{label:"Policy & Transparency",title:"Privacy Policy",subtitle:"This notice reflects the current website setup while TrustAI does not run a backend, active contact form storage, cookies, or analytics."},policyDetails:"Privacy Notice",noticeTitle:"Website Data Practices",noticeIntro:"This website is provided for informational purposes. Personal data is not collected or stored through the website itself.",noticeItems:["Cookies, advertising trackers, and website analytics tools are not used.","Contact form submissions are not collected or stored.","Email inquiries are used only to respond to the sender's request.","The hosting provider may process basic technical logs for security and site delivery."],contactTitle:"Questions",contactDescription:"If you have questions about this notice, contact us directly.",generalPrinciples:{title:"1. General Principles",p1:"We only collect personal data that you provide voluntarily, such as email addresses or contact information submitted through forms or correspondence. We respect your rights to privacy and transparency regarding your personal information.",p2:"We do not sell, rent, or share your personal data with third parties for marketing purposes. Any sharing of data is limited and governed by legal obligations or trusted service requirements."},whatWeCollect:{title:"2. What We Collect",intro:"When you interact with us, we may collect the following types of information:",items:{"contact-title":"Contact Information:",contact:"Email addresses, names, and titles.","usage-title":"Usage Data:",usage:"We do not run website analytics. Basic technical logs may be processed by the hosting provider for security and delivery.","communications-title":"Communications:",communications:"Any message content you voluntarily send by email."}},howWeUse:{title:"3. How We Use Your Information",intro:"We use your information to:",items:["Respond to inquiries and requests","Respond to messages you voluntarily send by email","Improve the functionality and performance of our services","Meet legal or regulatory obligations"]},dataSecurity:{title:"4. Data Security",description:"We implement reasonable administrative, technical, and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no system is completely secure — absolute protection cannot be guaranteed."},yourRights:{title:"5. Your Rights",intro:"Depending on your jurisdiction, you may have the right to:",items:["Request access to the personal data we hold about you","Correct or update your information","Withdraw consent for processing","Request deletion of your data"],contact:"To exercise any of these rights, contact us at info{'@'}trustai.com.tr."},cookies:{title:"6. Cookies & Tracking",description:"We do not currently use cookies, advertising trackers, or website analytics tools."},updates:{title:"7. Updates to This Policy",description:"This policy may be updated to reflect legal, technological, or business changes. Updated versions will be posted on this page with a revised effective date."}},x1={hero:{label:"People Behind The Work",title:"Team",subtitle:"Meet the multidisciplinary team behind TrustAI, combining academic rigor with practical expertise in AI governance and trustworthy artificial intelligence."}},E1={structureTitle:"Team Structure",howWeWorkTitle:"How We Work",howWeWorkDescription:"Research depth, product execution, and governance discipline move together in every delivery.",howWeWorkItems:{academic:"Academic and applied research aligned",engineering:"Engineering focused on trustworthy deployment",governance:"Governance and compliance embedded by design"}},A1={sureyya:{role:"Founder & CEO, TrustAI",bio:"Founder and CEO of TrustAI, driving the development of explainable, reliable, and compliant AI solutions for high-risk systems."},qazaleh:{role:"Researcher, AI & Software Engineer | UI/Web Developer",bio:"Designing and building intelligent, reliable, and user-friendly web and software solutions."},faramarz:{role:"Researcher, AI & Software Engineer | Backend Developer",bio:"Designing and building intelligent, reliable, and robust backend and software solutions."},dilara:{role:"Researcher | AI Governance & Ethics",bio:"Researching algorithmic fairness, AI governance, and the ethical dimensions of high-risk AI systems with a background in psychology and human-centered AI."},nisa:{role:"Intern",bio:"An artificial intelligence engineering student focusing on AI safety, AI governance, and responsible AI systems."}},I1={hero:{label:"Governance Product Suite",title:"Platforms For Models, Agents, and AI Oversight",subtitle:"We help organizations govern predictive models and agent-based systems with the same principles: transparency, control, auditability, and operational trust."},overview:{label:"Product Ecosystem",title:"Two complementary layers for modern AI governance",description:"We help organizations govern machine learning systems across their lifecycle with TrustAI-X and control autonomous behavior at runtime with TrustAI-UX."},trustaiX:{name:"TrustAI-X",category:"AI Governance Platform",overview:"We help teams govern machine learning models with clear controls for transparency, fairness, robustness, and compliance.",whatItDoesTitle:"What It Does",whatItDoes:["We explain model decisions","We detect bias and evaluate fairness across outcomes and groups","We monitor performance, data drift, and model drift","We provide structured audit trails and reporting outputs"],featuresTitle:"Key Features",features:["Explainability tools","Bias and fairness checks","Drift monitoring","Audit-ready reporting"],deploymentTitle:"Deployment",deployment:["On-premise","Cloud (SaaS)","Hybrid"],valueTitle:"Value",value:["We reduce compliance risk","We improve trust and transparency","We centralize model governance"]},trustaiUX:{name:"TrustAI-UX",category:"Agent Governance Layer",overview:"We help teams control autonomous and agent-based AI systems with policy enforcement, monitoring, and audit logs.",whatItDoesTitle:"What It Does",whatItDoes:["We control agent permissions and actions","We monitor behavior in real time","We enforce governance policies","We log decisions for auditability"],featuresTitle:"Key Features",features:["Policy-based controls","Real-time monitoring","Human-in-the-loop workflows","Full audit logs"],compatibilityTitle:"Compatibility",compatibility:["LangChain","CrewAI","Other agent frameworks","API-first integration"],valueTitle:"Value",value:["We prevent unsafe agent behavior","We ensure compliance for agent systems","We provide full visibility and control"]},ecosystem:{label:"How They Work Together",title:"One stack for lifecycle governance and runtime control",description:"We help teams explain and evaluate models with TrustAI-X before and after deployment, then enforce policy and control agent behavior with TrustAI-UX during execution.",items:["We explain, evaluate, and document model behavior with TrustAI-X","We govern agent permissions, actions, and interventions at runtime with TrustAI-UX","We connect model governance with live operational oversight"]}},T1={hero:{label:"Advisory & Delivery Services",title:"Services For Governance, Compliance, and AI Safety",subtitle:"We help organizations design governance frameworks, implement responsible AI controls, and build compliance-ready operating models for high-risk systems."},cta:{title:"Need Support With Governance, Compliance, or AI Safety?"},overview:{label:"How We Support Teams",title:"From framework design to continuous assurance",description:"We combine governance strategy, technical implementation, and ongoing monitoring to help organizations move from fragmented controls to a structured and defensible AI operating model."},framework:{name:"AI Governance Framework Consulting",category:"Design & Implementation",overview:"We help teams design practical AI governance frameworks for their systems, risks, and regulatory requirements.",whatWeDoTitle:"What We Do",whatWeDo:["We identify AI use cases and risk levels","We define governance structure and internal policies","We align workflows with EU AI Act, ISO 42001","We support implementation across legal, risk, product, and engineering teams"],deliverablesTitle:"Deliverables",deliverables:["Governance framework design","Policy definitions","Risk classification","Documentation templates"],valueTitle:"Value",value:["We provide clear governance structure","We accelerate compliance readiness","We reduce operational risk"]},assurance:{name:"Responsible AI Governance, Compliance & AI Safety",category:"Assessment, Implementation & Monitoring",overview:"We ensure your AI systems are compliant, safe, and continuously monitored in real operations.",whatWeDoTitle:"What We Do",whatWeDo:["We evaluate current AI systems through gap analysis","We implement explainability, fairness, and monitoring tools","We prepare audit-ready documentation","We enable continuous compliance tracking"],capabilitiesTitle:"Core Capabilities",capabilities:["Explainability and transparency","Fairness and bias mitigation","Drift and performance monitoring","Audit and compliance reporting"],valueTitle:"Value",value:["We support EU AI Act, and ISO-aligned readiness","We help build safer and more reliable AI systems","We prepare audit-ready outputs"]},process:{label:"Delivery Process",title:"A practical path from discovery to continuous monitoring",description:"We use a structured, collaborative, and implementation-focused engagement model so governance becomes part of daily operations rather than a disconnected compliance exercise.",steps:[{title:"Discovery",description:"We understand systems, stakeholders, use cases, and risk exposure."},{title:"Assessment",description:"We evaluate governance maturity, control gaps, and regulatory readiness."},{title:"Implementation",description:"We apply governance workflows, technical controls, and reporting structures."},{title:"Assurance",description:"We prepare evidence, documentation, and review-ready outputs."},{title:"Monitoring",description:"We track compliance, performance, and governance signals over time."}]}},C1={services:{label:"What We Deliver",title:"Service Views Can Now Use the Same UI System",description:"This placeholder keeps the file aligned with the shadcn-vue and Tailwind rewrite, even though it is not currently wired into the router.",cardTitle:"Future Service Page",cardDescription:"Add service-specific content here when you are ready to expand the navigation."},products:{label:"Platform & Modules",title:"Product Views Are Ready For shadcn-vue",description:"This file is no longer part of the active router, but it now follows the same Tailwind and shadcn-vue patterns as the rest of the project.",contact:"Contact TrustAI",cardTitle:"Placeholder Product Surface",cardDescription:"This view is available if you want to add product-specific routes later."}},P1={navbar:s1,footer:o1,common:l1,cta:c1,contactForm:u1,researchHero:d1,homePage:f1,whatWeDo:p1,about:m1,why:g1,researchSection:h1,researchReferences:y1,aboutPage:b1,publications:v1,aiGovernancePage:_1,researchPage:k1,privacyPage:w1,ourTeamsPage:x1,teamPage:E1,teamMembers:A1,productsPage:I1,servicesPage:T1,placeholderPages:C1},S1={home:"Ana Sayfa",about:"Hakkımızda",governance:"Yapay Zeka Yönetişimi",research:"Araştırma",services:"Hizmetler",products:"Ürünler",privacy:"Gizlilik",ourTeams:"Ekibimiz"},O1={tagline:"Regüle edilmiş sektörler için araştırma temelli yapay zeka yönetişimi.",rights:"Tüm Hakları Saklıdır",navigation:"Navigasyon",contact:"İletişim",address:"Dijital Park Teknokent, Ataşehir / İstanbul"},L1={switchLanguage:"Dili {locale} olarak değiştir"},R1={title:"Yapay Zeka Yönetişimi Çerçevenizi Güçlendirmeye Hazır mısınız?",description:"Ekiplerinizin yapay zeka yönetişimi sorularını net kontrollere, kanıtlara ve uygulanabilir işleyiş pratiklerine dönüştürmesine yardımcı oluyoruz.",contact:"Bizimle İletişime Geçin",research:"Araştırmalarımızı Keşfedin"},N1={eyebrow:"İletişim Talebi",title:"Nasıl destek olabileceğimizi anlatın",description:"Birkaç detay paylaşın; doğru görüşme için başlangıç noktası olarak kullanalım.",close:"İletişim formunu kapat",cancel:"Kapat",fields:{name:"Ad soyad",email:"E-posta",organization:"Kurum",topic:"Konu",message:"Mesaj"},placeholders:{name:"Adınız",email:"ad@kurum.com",organization:"Şirket veya kurum",message:"Üzerinde çalıştığınız konuyu veya ihtiyaç duyduğunuz desteği yazın."},topics:[{value:"governance",label:"Yapay zeka yönetişimi veya uyum"},{value:"products",label:"TrustAI ürünleri"},{value:"research",label:"Araştırma iş birliği"},{value:"other",label:"Diğer"}],button:{idle:"Talebi gönder",sending:"Notunuz hazırlanıyor...",sent:"Talep hazır"},toastTitle:"Talebiniz alındı",toastDescription:"Teşekkürler. Mesajınızı inceleyip en kısa sürede size dönüş yapacağız."},M1={label:"Araştırma Odaklı Yapay Zeka Yönetişimi",title:"Yüksek Riskli Modeller için Yapay Zeka Yönetişimi ve Açıklanabilirlik",description:"Regüle edilmiş sektörlerde model şeffaflığını, izlenebilirliğini ve denetim hazırlığını artıran araştırma temelli çözümler geliştiriyoruz.",button:"Araştırmalarımızı Keşfedin"},$1={focusAreas:"Odak Alanları",servicesDescription:"Şeffaf ve regüle ortamlarda yapay zeka sunumu için bileşen bazlı yönetişim iş akışları.",researchDescription:"Platform mimarimizi, yönetişim kalıplarımızı ve açıklanabilirlik yöntemlerimizi şekillendiren seçili çalışmalar.",ctaDescription:"TrustAI veya araştırmalarımız hakkında sorularınız varsa sizinle konuşmaktan memnuniyet duyarız."},D1={label:"Ne Yapıyoruz?",title:"Regüle edilmiş sektörler için yapılandırılmış yapay zeka yönetişimi ve açıklanabilirlik çözümleri sunuyoruz.",explainability:{title:"Açıklanabilirlik",description:"Denetim ve düzenleyici incelemeler için model kararlarına yönelik yorumlanabilir içgörüler üretir."},traceability:{title:"Model İzlenebilirliği",description:"Model versiyonlarını, değişiklikleri ve karar mantığını yaşam döngüsü boyunca takip eder."},workflows:{title:"Yönetişim İş Akışları",description:"Yüksek riskli yapay zeka sistemleri için yapılandırılmış onay süreçleri ve dokümantasyon sağlar."},audit:{title:"Denetim Hazırlığı",description:"Düzenleyici beklentilerle uyumlu, uyumluluk odaklı raporlar üretir."}},z1={label:"Hakkımızda",title:"Regüle Edilmiş Sektörler için Araştırma Temelli Yapay Zeka Yönetişimi",intro:"Türkiye merkezli araştırma temelli yapay zeka yönetişimini kullanarak kurumların açıklanabilirliği, güvenilirliği ve gözetimi güçlendirmesine yardımcı oluyoruz.",sectorFocus:"Mevcut çözümlerimiz, düzenleyici denetimin, şeffaflığın ve risk yönetiminin kritik öneme sahip olduğu finans sektörüne yöneliktir. Yakın gelecekte sağlık, üretim ve kamu hizmetleri gibi yüksek etki alanlarına açılmayı planlıyoruz.",approach:"En güncel araştırmaları; kredi riski skorlama, dolandırıcılık tespiti ve uyum izleme gibi yüksek riskli finansal uygulamalar için şeffaf, adil ve denetime hazır pratik çözümlere dönüştürüyoruz.",team:"Açıklanabilir yapay zeka (XAI), optimizasyon, model riski ve MLOps uzmanlarını bir araya getirerek güven, uyum ve dayanıklılığı önemseyen finans kuruluşları için akademik derinliği sektör deneyimiyle birleştiriyoruz."},F1={label:"Neden TrustAI?",title:"Yüksek riskli yapay zeka sistemleri için akademik titizliği pratik yönetişim çözümleriyle birleştiriyoruz.",foundation:{title:"Araştırma Temelli Altyapı",description:"Açıklanabilir ve güvenilir yapay zeka alanında hakemli akademik araştırmalara ve uzmanlığa dayanır."},sector:{title:"Finans Sektörüne Odaklılık",description:"Regüle edilmiş finansal ortamlar ve yüksek etki alanlı yapay zeka uygulamaları için özel olarak tasarlanmıştır."},governance:{title:"Tasarımdan İtibaren Yönetişim",description:"Yapılandırılmış iş akışları, dokümantasyon ve izlenebilirlik başlangıçtan itibaren entegre edilir."},audit:{title:"Denetime Hazır Mimari",description:"Düzenleyici beklentilerle uyumlu, açık model açıklamaları ve raporlama yapısı sunar."}},W1={title:"Araştırmalar ve Yayınlar",subtitle:"Güvenilir ve Açıklanabilir Yapay Zeka Alanında İleri Araştırmalar",publicationBtn:"Araştırmayi gör"},U1={label:"Bilimsel Dayanak",title:"Araştırmalar ve Referanslar",description:"TrustAI, akademik titizliği pratik yönetişim çözümleriyle birleştirir. Aşağıda, güvenilir ve açıklanabilir yapay zeka alanındaki katkılarımızı yansıtan yayınlar ve referanslar yer almaktadır.",subtitle:"Yayınlarımız"},B1={hero:{label:"Araştırma Odaklı Temeller",title:"TrustAI Hakkında",subtitle:"TrustAI, akademik titizliği üretime hazır mühendislikle birleştirerek kurumların yüksek riskli sektörlerde şeffaf, denetlenebilir ve regülasyona hazır yapay zeka sistemleri kurmasına yardımcı olur."},whoWeAre:{title:"Biz Kimiz",p1:"Türkiye’deki ve regüle pazarlardaki kurumların akademik yapay zeka yönetişimi araştırmasını pratik uygulamayla birleştirmesine yardımcı oluyoruz.",p2:"Özellikle finans gibi regüle sektörlerde yüksek riskli yapay zeka sistemleri için açıklanabilirlik, adillik, dayanıklılık ve düzenleyici uyumu ele almalarına yardımcı oluyoruz.",p3:"Akademik titizliği üretime hazır mühendislikle birleştirerek kurumların tasarımdan itibaren şeffaf, denetlenebilir ve uyumlu yapay zeka sistemleri sunmasına yardımcı oluyoruz."},vision:{title:"Vizyonumuz",description:"Türkiye merkezli ve akademik temelli bir yönetişim platformu geliştirerek finans kurumlarının ve diğer regüle sektörlerin yüksek riskli yapay zeka sistemlerini şeffaf, denetlenebilir ve güvenle devreye almasına yardımcı olmak."},mission:{title:"Misyonumuz",items:["Yapay zeka sistemlerini açıklanabilir ve hesap verebilir hale getirmek","Regüle edilmiş ortamlarda model riskini azaltmak","EU AI Act, ISO/IEC 42001 ve ulusal yapay zeka düzenlemeleriyle uyumu desteklemek","Güçlü bilimsel temellere dayalı yerli yapay zeka teknolojileri geliştirmek"]},difference:{title:"TrustAI’ı Farklı Kılan Nedir",p1:"Yalnızca bir araç seti değil; açıklanabilirlik, adillik analizi, dayanıklılık izleme, otomatik uyum raporlama ve MLOps uyumlu mimariyi tek ve yapılandırılmış bir sistemde birleştiren entegre bir yönetişim çerçevesi sunuyoruz.",p2:"Yapay zeka sistemlerinin başlangıçtan itibaren uyumlu, şeffaf ve operasyonel olarak dayanıklı şekilde tasarlanmasını sağlıyoruz."},platform:{title:"TrustAI-X Platformu",description:"TrustAI-X’i yüksek riskli ortamlar için güvenilir ve denetlenebilir bir yapay zeka altyapısı olarak sunuyoruz."},coreCapabilities:{title:"Temel Yetenekler"},architecture:{title:"Platform Mimarisi"},scientific:{title:"Bilimsel Temel",p1:"TrustAI’ı hakemli akademik araştırmalar üzerine inşa ediyoruz. Çalışmalarımız arasında MCO 2025’te sunulan ve Springer tarafından yayımlanan DiCE-Extended yer almaktadır.",p2:"Araştırmalarımız karşı-olgusal açıklamaların istikrarı, çok kriterli optimizasyon ve dayanıklı ve adil yapay zeka karar sistemleri üzerine odaklanmaktadır.",p3:"SCI/SSCI indeksli yayınlar, patent başvuruları, lisansüstü araştırma çıktıları ve açık kaynak katkıları üretmeyi hedefliyoruz."},regulatory:{title:"Düzenleyici Uyum",p1:"Düzenleyici uyumu başlangıçtan itibaren sürece entegre ediyor ve çerçevemizi aşağıdaki düzenlemelerle uyumlu hale getiriyoruz:",p2:"Yapay zeka sistemlerinin dokümante edilmiş, izlenebilir, denetlenebilir ve sürekli izlenen bir yapıda olmasını sağlıyoruz."},sectors:{title:"Hedef Sektörler",p1:"Bankacılık, kredi skorlama, dolandırıcılık tespiti, finansal risk modelleme ve regüle edilmiş kurumsal yapay zeka ortamlarında yüksek riskli sistemlere odaklanıyoruz.",p2:"Platformu; üretim, kamu ve sağlık gibi yapılandırılmış yönetişim çerçeveleri gerektiren alanlara uyarlamanıza yardımcı oluyoruz."},team:{title:"Ekibimiz",p1:"Akademik liderlik, yapay zeka ve veri bilimi araştırmacıları, yazılım mühendisleri, MLOps uzmanları, düzenleyici uzmanlar ve sektör danışmanlarını bir araya getiren çok disiplinli bir yapıyla çalışıyoruz.",p2:"Bilimsel derinlik ve uygulamalı inovasyon sağlamak için üniversite Ar-Ge altyapısı ve araştırma ağlarıyla çalışıyoruz."},closing:{statement:"Yapay zeka açıklanabilir olmalıdır. Ölçülebilir olmalıdır. Hesap verebilir olmalıdır. Bilimsel temellere dayanmalı ve regülasyona hazır olmalıdır.",highlight:"TrustAI bunu mümkün kılmak için vardır."},tabs:{whoWeAre:"Biz Kimiz",platform:"Platform",alignment:"Uyum"}},j1={diceExtended:{title:"DiCE-Extended: A Robust Approach to Counterfactual Explanations in Machine Learning",description:"DiCE-Extended, çok amaçlı optimizasyon yaklaşımını entegre ederek karşı-olgusal açıklama üretimini daha dayanıklı hale getirirken yorumlanabilirliği korur. Çeşitli makine öğrenimi modellerinde daha güvenilir ve kararlarla daha uyumlu açıklamalar üreten istikrar odaklı bir tasarım sunar."},highStakes:{title:"Trustworthy and Responsible AI for High-Stakes Decision Environments",description:"Bu çalışma, model istikrarını, yorumlanabilirliği ve dayanıklılığı güçlendiren optimizasyon tabanlı bir topluluk budama yaklaşımı tasarlayarak kuruluşların daha şeffaf ve hesap verebilir karar destek sistemleri kurmasına yardımcı olur."}},G1={hero:{label:"Güven, Risk ve Hesap Verebilirlik",title:"Yapay Zeka Yönetişimi: Önemi ve Etkisi",subtitle:"Finans, sağlık, kamu hizmetleri ve kritik altyapı gibi alanlardaki yüksek etkili sistemler için kurumların yapay zeka yönetişimi çerçeveleri tasarlamasına ve uygulamasına yardımcı oluruz; önyargı, şeffaflık eksikliği, hesap verebilirlik ve düzenleyici riskleri birlikte ele alırız."},whatIs:{title:"Yapay Zeka Yönetişimi Nedir?",p1:"Yapay zeka yönetişimi; yapay zeka sistemlerinin tasarımı, devreye alınması, izlenmesi ve gerektiğinde düzeltilmesini yönlendiren ilke, politika, operasyonel kontrol ve hesap verebilirlik mekanizmalarından oluşan yapılandırılmış bir çerçevedir.",p2:"Bu yaklaşım, yapay zeka sistemlerinin hukuki standartlara, etik normlara, kurumsal hedeflere ve uzun vadeli toplumsal çıkarlara uygun şekilde çalışmasını sağlar. Yönetişim tek seferlik bir uyum kontrolü değil, yaşam döngüsü boyunca devam eden bir disiplindir."},whyItMatters:{title:"Neden Yapay Zeka Yönetişimi Önemlidir?",cards:{bias:{title:"Önyargı ve Ayrımcılık Riskleri",description:"Yönetişim olmadan yapay zeka modelleri tarihsel önyargıları pekiştirebilir; bu da adil olmayan kredi kararlarına, dışlayıcı sonuçlara veya sistematik ayrımcılığa yol açabilir."},opacity:{title:"Şeffaflık ve Açıklanabilirlik Eksiklikleri",description:"Kara kutu modeller güveni zedeler. Yönetişim çerçeveleri şeffaf dokümantasyon, açıklanabilirlik teknikleri ve yorumlanabilirlik kontrolleri gerektirir."},regulatory:{title:"Düzenleyici ve Hukuki Riskler",description:"Düzenleyici ortamlar, yapay zeka sistemleri için izlenebilirlik, denetlenebilirlik ve belgelenmiş risk kontrolleri talep etmektedir."}}},pillars:{title:"Temel Yönetişim Sütunları",accountability:{title:"Hesap Verebilirlik",description:"Model kararları için açık sahiplik, tanımlanmış sorumluluk yapıları ve yüksek riskli sistemler için eskalasyon mekanizmaları."},traceability:{title:"İzlenebilirlik",description:"Model versiyonları, eğitim verisi kaynakları, doğrulama süreçleri ve dağıtım değişikliklerinin yaşam döngüsü boyunca eksiksiz şekilde belgelenmesi."},monitoring:{title:"İzleme ve Risk Yönetimi",description:"Model sapması, performans düşüşü ve ortaya çıkan uyum risklerinin sürekli gözetimi."}},financialSector:{title:"Finans Sektöründe Yapay Zeka Yönetişimi",p1:"Regüle edilmiş finansal ortamlarda yapay zeka sistemleri; kredi risk skorlama, dolandırıcılık tespiti, kara para aklama ile mücadele süreçleri ve uyum izleme alanlarında kullanılmaktadır. Bu uygulamalar bireyleri, kurumları ve piyasaları doğrudan etkiler.",p2:"Finansal düzenleyiciler; kanıtlanabilir şeffaflık, adillik ve model doğrulama standartları talep etmektedir. Yönetişim çerçeveleri, modellerin savunulabilir ve denetime hazır kalmasını sağlayan yapılandırılmış iş akışları, dokümantasyon ve raporlama mekanizmaları sunar."},closing:{title:"Yapılandırılmış Yönetişim ile Güven İnşa Etmek",description:"Etkili yapay zeka yönetişimi, gelişmiş makine öğrenimi sistemlerini şeffaf, hesap verebilir ve dayanıklı karar altyapılarına dönüştürür. Akademik araştırma ile düzenleyici uygulamayı birleştirerek inovasyonun adalet, hukuk ve kamu güvenini zedelememesini sağlar.",cta:"TrustAI ile İletişime Geçin"}},V1={sectionDescription:"TrustAI’ın açıklanabilirlik ve yönetişim araçlarını şekillendiren seçili yayınlar ve çalışma başlıkları.",publicationLabel:"Yayın",publicationRequest:"Yayın detayları talep üzerine paylaşılabilir.",collaborateTitle:"TrustAI Araştırmaları ile İş Birliği Yapın",collaborateDescription:"Akademik çalışmaları finans ve diğer yüksek etkili sektörler için uygulanabilir yönetişim pratiklerine dönüştürüyoruz."},H1={hero:{label:"Politika ve Şeffaflık",title:"Gizlilik Politikası",subtitle:"Bu bilgilendirme, TrustAI web sitesinde şu anda backend, aktif iletişim formu kaydı, çerez veya analitik kullanılmadığı mevcut durumu yansıtır."},policyDetails:"Gizlilik Bildirimi",noticeTitle:"Web Sitesi Veri Uygulamaları",noticeIntro:"Bu web sitesi bilgilendirme amaçlı sunulmaktadır. Kişisel veriler web sitesinin kendisi üzerinden toplanmaz veya saklanmaz.",noticeItems:["Çerezler, reklam takip araçları ve web sitesi analitik araçları kullanılmaz.","İletişim formu gönderimleri toplanmaz veya saklanmaz.","E-posta yoluyla iletilen talepler yalnızca gönderen kişinin talebine yanıt vermek için kullanılır.","Barındırma sağlayıcısı güvenlik ve site sunumu için temel teknik kayıtları işleyebilir."],contactTitle:"Sorular",contactDescription:"Bu bilgilendirme hakkında sorularınız varsa bizimle doğrudan iletişime geçin.",generalPrinciples:{title:"1. Genel İlkeler",p1:"Yalnızca gönüllü olarak sağladığınız kişisel verileri toplarız; örneğin formlar veya yazışmalar aracılığıyla ilettiğiniz e-posta adresleri ve iletişim bilgileri. Kişisel verileriniz konusunda gizlilik ve şeffaflık haklarınıza saygı gösteririz.",p2:"Kişisel verilerinizi pazarlama amacıyla üçüncü taraflara satmayız, kiralamayız veya paylaşmayız. Herhangi bir veri paylaşımı yalnızca yasal yükümlülükler veya güvenilir hizmet gereklilikleri kapsamında ve sınırlı şekilde yapılır."},whatWeCollect:{title:"2. Hangi Verileri Topluyoruz",intro:"Bizimle etkileşime geçtiğinizde aşağıdaki türde bilgileri toplayabiliriz:",items:{"contact-title":"İletişim Bilgileri:",contact:"E-posta adresleri, isimler ve unvanlar.","usage-title":"Kullanım Verileri:",usage:"Web sitesi analitik aracı çalıştırmıyoruz. Temel teknik kayıtlar güvenlik ve site sunumu için barındırma sağlayıcısı tarafından işlenebilir.","communications-title":"İletişim İçeriği:",communications:"E-posta ile gönüllü olarak gönderdiğiniz mesaj içerikleri."}},howWeUse:{title:"3. Bilgilerinizi Nasıl Kullanıyoruz",intro:"Bilgilerinizi şu amaçlarla kullanırız:",items:["Taleplerinize ve sorularınıza yanıt vermek","E-posta ile gönüllü olarak gönderdiğiniz mesajlara yanıt vermek","Hizmetlerimizin işlevselliğini ve performansını iyileştirmek","Yasal veya düzenleyici yükümlülükleri yerine getirmek"]},dataSecurity:{title:"4. Veri Güvenliği",description:"Kişisel verilerinizi yetkisiz erişim, değişiklik, ifşa veya imhaya karşı korumak amacıyla makul idari, teknik ve organizasyonel önlemler uygularız. Ancak hiçbir sistem tamamen güvenli değildir — mutlak koruma garanti edilemez."},yourRights:{title:"5. Haklarınız",intro:"Bulunduğunuz yargı alanına bağlı olarak aşağıdaki haklara sahip olabilirsiniz:",items:["Hakkınızda tuttuğumuz kişisel verilere erişim talep etmek","Bilgilerinizi düzeltmek veya güncellemek","İşleme faaliyetleri için verdiğiniz onayı geri çekmek","Verilerinizin silinmesini talep etmek"],contact:"Bu haklardan herhangi birini kullanmak için info{'@'}trustai.com.tr adresinden bizimle iletişime geçebilirsiniz."},cookies:{title:"6. Çerezler ve İzleme",description:"Şu anda çerez, reklam takip aracı veya web sitesi analitik aracı kullanmıyoruz."},updates:{title:"7. Politika Güncellemeleri",description:"Bu politika; hukuki, teknolojik veya ticari değişiklikleri yansıtmak amacıyla güncellenebilir. Güncellenmiş sürümler, revize edilmiş yürürlük tarihi ile birlikte bu sayfada yayımlanacaktır."}},q1={hero:{label:"İşin Arkasındaki Ekip",title:"Ekibimiz",subtitle:"TrustAI’ın arkasındaki çok disiplinli ekibi tanıyın; akademik titizliği yapay zeka yönetişimi ve güvenilir yapay zeka konusundaki pratik uzmanlıkla birleştiriyoruz."}},K1={structureTitle:"Ekip Yapısı",howWeWorkTitle:"Nasıl Çalışıyoruz",howWeWorkDescription:"Araştırma derinliği, ürün geliştirme ve yönetişim disiplini her teslimatta birlikte ilerler.",howWeWorkItems:{academic:"Akademik ve uygulamalı araştırma uyum içinde ilerler",engineering:"Mühendislik, güvenilir dağıtımı merkeze alır",governance:"Yönetişim ve uyumluluk tasarımdan itibaren entegredir"}},Y1={sureyya:{role:"Kurucu & CEO, TrustAI",bio:"TrustAI’ın kurucusu ve CEO’su olarak yüksek riskli sistemler için açıklanabilir, güvenilir ve uyumlu yapay zeka çözümlerinin geliştirilmesine liderlik etmektedir."},qazaleh:{role:"Araştırmacı, Yapay Zeka ve Yazılım Mühendisi | UI/Web Geliştirici",bio:"Akıllı, güvenilir ve kullanıcı dostu web ve yazılım çözümleri tasarlayıp geliştirir."},faramarz:{role:"Araştırmacı, Yapay Zeka ve Yazılım Mühendisi | Backend Geliştirici",bio:"Akıllı, güvenilir ve sağlam backend ile yazılım çözümleri tasarlayıp geliştirir."},dilara:{role:"Araştırmacı | Yapay Zeka Yönetişimi ve Etik",bio:"Psikoloji ve insan odaklı yapay zeka altyapısıyla, yüksek riskli yapay zeka sistemlerinde algoritmik adalet, yönetişim ve etik boyutları araştırır."},nisa:{role:"Stajyer",bio:"Yapay zeka güvenliği, yapay zeka yönetişimi ve sorumlu yapay zeka sistemlerine odaklanan bir yapay zeka mühendisliği öğrencisidir."}},X1={hero:{label:"Yönetişim Ürün Paketi",title:"Modeller, Ajanlar ve Yapay Zeka Gözetimi İçin Platformlar",subtitle:"Kestirimsel modelleri ve ajan tabanlı sistemleri aynı ilkelerle yönetmenize yardımcı oluyoruz: şeffaflık, kontrol, denetlenebilirlik ve operasyonel güven."},overview:{label:"Ürün Ekosistemi",title:"Modern yapay zeka yönetişimi için iki tamamlayıcı katman",description:"TrustAI-X ile makine öğrenmesi sistemlerini yaşam döngüsü boyunca yönetmenize, TrustAI-UX ile otonom davranışı çalışma anında kontrol etmenize yardımcı oluyoruz."},trustaiX:{name:"TrustAI-X",category:"Yapay Zeka Yönetişim Platformu",overview:"Ekiplerin TrustAI-X ile makine öğrenmesi modellerini şeffaflık, adillik, dayanıklılık ve uyumluluk kontrolleriyle yönetmesine yardımcı oluyoruz.",whatItDoesTitle:"Ne Yapar",whatItDoes:["Model kararlarını açıklıyoruz","Önyargıyı tespit ediyor ve adillik değerlendirmesi yapıyoruz","Performans, veri sapması ve model sapmasını izliyoruz","Yapılandırılmış denetim izi ve raporlama çıktıları sağlıyoruz"],featuresTitle:"Temel Özellikler",features:["Açıklanabilirlik araçları","Önyargı ve adillik kontrolleri","Sapma ve performans izleme","Denetime hazır raporlama"],deploymentTitle:"Dağıtım",deployment:["On-premise","Bulut (SaaS)","Hibrit"],valueTitle:"Sağladığı Değer",value:["Uyumluluk riskini azaltıyoruz","Güven ve şeffaflığı artırıyoruz","Model yönetişimini merkezileştiriyoruz"]},trustaiUX:{name:"TrustAI-UX",category:"Ajan Yönetişim Katmanı",overview:"TrustAI-UX ile otonom ve ajan tabanlı sistemleri politika uygulama, izleme ve denetim kayıtlarıyla kontrol etmenize yardımcı oluyoruz.",whatItDoesTitle:"Ne Yapar",whatItDoes:["Ajan izinlerini ve eylemlerini kontrol ediyoruz","Davranışı gerçek zamanlı izliyoruz","Yönetişim politikalarını uyguluyoruz","Kararları denetlenebilirlik için kaydediyoruz"],featuresTitle:"Temel Özellikler",features:["Politika tabanlı kontroller","Gerçek zamanlı izleme","Human-in-the-loop iş akışları","Tam denetim kayıtları"],compatibilityTitle:"Uyumluluk",compatibility:["LangChain","CrewAI","Diğer ajan frameworkleri","API-first entegrasyon"],valueTitle:"Sağladığı Değer",value:["Güvensiz ajan davranışını önlüyoruz","Ajan sistemleri için uyumluluğu destekliyoruz","Tam görünürlük ve kontrol sunuyoruz"]},ecosystem:{label:"Birlikte Nasıl Çalışırlar",title:"Yaşam döngüsü yönetişimi ve çalışma anı kontrolü için tek yapı",description:"TrustAI-X ile modelleri dağıtımdan önce ve sonra açıklamanıza ve değerlendirmenize, TrustAI-UX ile çalışma sırasında ajan davranışını politika ve kontrol mekanizmalarıyla yönetmenize yardımcı oluyoruz.",items:["TrustAI-X ile model davranışını açıklıyor, değerlendiriyor ve belgeliyoruz","TrustAI-UX ile ajan izinlerini, eylemlerini ve müdahaleleri çalışma anında yönetiyoruz","Model yönetişimini canlı operasyonel gözetimle birleştiriyoruz"]}},J1={hero:{label:"Danışmanlık ve Uygulama Hizmetleri",title:"Yönetişim, Uyumluluk ve Yapay Zeka Güvenliği İçin Hizmetler",subtitle:"Kurumların yönetişim çerçeveleri tasarlamasına, sorumlu yapay zeka kontrolleri uygulamasına ve yüksek riskli sistemler için uyumluluğa hazır işletim modelleri kurmasına yardımcı oluyoruz."},cta:{title:"Yönetişim, Uyumluluk veya Yapay Zeka Güvenliği İçin Desteğe mi İhtiyacınız Var?"},overview:{label:"Nasıl Destek Veriyoruz",title:"Çerçeve tasarımından sürekli güvenceye",description:"Yönetişim stratejisini, teknik uygulamayı ve sürekli izlemeyi bir araya getirerek kurumların parçalı kontrollerden yapılandırılmış ve savunulabilir bir yapay zeka işletim modeline geçmesine yardımcı oluyoruz."},framework:{name:"Yapay Zeka Yönetişimi Çerçeve Danışmanlığı",category:"Tasarım ve Uygulama",overview:"Ekiplerin sistem, risk ve düzenleyici gereksinimlerine uygun pratik yapay zeka yönetişimi çerçeveleri tasarlamasına yardımcı oluyoruz.",whatWeDoTitle:"Ne Yapıyoruz",whatWeDo:["Yapay zeka kullanım alanlarını ve risk seviyelerini belirleriz","Yönetişim yapısını ve iç politika setlerini tanımlarız","İş akışlarını EU AI Act, ISO 42001","Hukuk, risk, ürün ve mühendislik ekipleri arasında uygulamayı destekleriz"],deliverablesTitle:"Teslimatlar",deliverables:["Yönetişim çerçevesi tasarımı","Politika tanımları","Risk sınıflandırması","Dokümantasyon şablonları"],valueTitle:"Sağladığı Değer",value:["Net yönetişim yapısı sağlıyoruz","Uyumluluk hazırlığını hızlandırıyoruz","Operasyonel riski azaltıyoruz"]},assurance:{name:"Sorumlu Yapay Zeka Yönetişimi, Uyumluluk ve Yapay Zeka Güvenliği",category:"Değerlendirme, Uygulama ve İzleme",overview:"Yapay zeka sistemlerinizin gerçek operasyonlarda uyumlu, güvenli ve sürekli izlenebilir olmasını sağlıyoruz.",whatWeDoTitle:"Ne Yapıyoruz",whatWeDo:["Mevcut yapay zeka sistemlerini gap analysis ile değerlendiririz","Açıklanabilirlik, adillik ve izleme araçlarını hayata geçiririz","Denetime hazır dokümantasyon hazırlarız","Sürekli uyumluluk takibini mümkün kılarız"],capabilitiesTitle:"Temel Yetenekler",capabilities:["Açıklanabilirlik ve şeffaflık","Adillik ve önyargı azaltımı","Sapma ve performans izleme","Denetim ve uyumluluk raporlama"],valueTitle:"Sağladığı Değer",value:["EU AI Act, ve ISO uyumlu hazırlığı destekliyoruz","Daha güvenli ve daha güvenilir yapay zeka sistemleri kurmanıza yardımcı oluyoruz","Denetime hazır çıktılar hazırlıyoruz"]},process:{label:"Teslim Süreci",title:"Keşiften sürekli izlemeye pratik bir yol",description:"Yapılandırılmış, iş birliğine açık ve uygulama odaklı bir çalışma modeli kullanarak yönetişimin kopuk bir uyum faaliyeti olmak yerine günlük operasyonların parçası haline gelmesine yardımcı oluyoruz.",steps:[{title:"Keşif",description:"Sistemleri, paydaşları, kullanım senaryolarını ve risk maruziyetini anlıyoruz."},{title:"Değerlendirme",description:"Yönetişim olgunluğunu, kontrol açıklarını ve düzenleyici hazırlığı değerlendiriyoruz."},{title:"Uygulama",description:"Yönetişim iş akışlarını, teknik kontrolleri ve raporlama yapılarını hayata geçiriyoruz."},{title:"Güvence",description:"Kanıtları, dokümantasyonu ve incelemeye hazır çıktıları hazırlıyoruz."},{title:"İzleme",description:"Uyumluluk, performans ve yönetişim sinyallerini zaman içinde takip ediyoruz."}]}},Z1={services:{label:"Neler Sunuyoruz",title:"Hizmet Görünümleri Artık Aynı UI Sistemini Kullanabilir",description:"Bu yer tutucu sayfa, şu anda router'a bağlı olmasa da shadcn-vue ve Tailwind yeniden düzenlemesiyle uyumlu kalır.",cardTitle:"Gelecekteki Hizmet Sayfası",cardDescription:"Navigasyonu genişletmeye hazır olduğunuzda hizmete özel içeriği buraya ekleyebilirsiniz."},products:{label:"Platform ve Modüller",title:"Ürün Görünümleri shadcn-vue İçin Hazır",description:"Bu dosya artık aktif router'ın bir parçası değil, ancak projenin geri kalanı gibi shadcn-vue desenlerini takip ediyor.",contact:"TrustAI ile İletişime Geçin",cardTitle:"Yer Tutucu Ürün Alanı",cardDescription:"Daha sonra ürün odaklı route'lar eklemek isterseniz bu görünüm kullanılabilir."}},Q1={navbar:S1,footer:O1,common:L1,cta:R1,contactForm:N1,researchHero:M1,homePage:$1,whatWeDo:D1,about:z1,why:F1,researchSection:W1,researchReferences:U1,aboutPage:B1,publications:j1,aiGovernancePage:G1,researchPage:V1,privacyPage:H1,ourTeamsPage:q1,teamPage:K1,teamMembers:Y1,productsPage:X1,servicesPage:J1,placeholderPages:Z1},e0=()=>{const e=localStorage.getItem("locale");if(e)return e;const t=navigator.language.split("-")[0];return["en","tr"].includes(t)?t:"en"},Ld=Y_({legacy:!1,locale:e0(),fallbackLocale:"en",globalInjection:!0,messages:{en:P1,tr:Q1}}),t0={class:"space-y-5"},n0={key:0,class:"section-label"},r0={class:"space-y-3"},a0={class:"hero-title text-balance"},i0={key:0,class:"hero-description"},s0={key:1,class:"flex flex-col gap-3 sm:flex-row"},jn={__name:"PageHero",props:{label:{type:String,default:""},title:{type:String,required:!0},description:{type:String,default:""},asideWidth:{type:String,default:"22rem"},asideClass:{type:String,default:""},contentAlign:{type:String,default:"end"},asideChrome:{type:Boolean,default:!0},compact:{type:Boolean,default:!1}},setup(e){const t=e,n=ie(()=>t.contentAlign==="center"?"lg:items-center":"lg:items-end");return(r,a)=>(L(),X("section",{class:Ge(["relative overflow-hidden rounded-[2.25rem] border border-border/80 bg-card px-6 text-foreground shadow-[0_18px_40px_-34px_rgba(23,56,75,0.14)] sm:px-8 lg:px-10",e.compact?"py-7 lg:py-8":"py-10 lg:py-12"]),style:nr({"--page-hero-aside-width":e.asideWidth})},[a[0]||(a[0]=I("div",{class:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"},null,-1)),a[1]||(a[1]=I("div",{class:"absolute -left-16 top-0 size-56 rounded-full bg-accent/12 blur-3xl"},null,-1)),a[2]||(a[2]=I("div",{class:"absolute right-0 bottom-0 size-56 rounded-full bg-primary/8 blur-3xl"},null,-1)),I("div",{class:Ge(["relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,var(--page-hero-aside-width))]",n.value])},[I("div",t0,[e.label?(L(),X("p",n0,O(e.label),1)):Xt("",!0),I("div",r0,[I("h1",a0,O(e.title),1),e.description?(L(),X("p",i0,O(e.description),1)):Xt("",!0)]),r.$slots.actions?(L(),X("div",s0,[pe(r.$slots,"actions")])):Xt("",!0)]),r.$slots.aside?(L(),X("div",{key:0,class:Ge([e.asideChrome?"rounded-[1.9rem] border border-border/80 bg-background/82 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-sm":"",e.asideClass])},[pe(r.$slots,"aside")],2)):Xt("",!0)],2)],6))}},Rd={__name:"Badge",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},variant:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=wn(t,"class");return(r,a)=>(L(),ee(p(gt),Xe({"data-slot":"badge",class:p(st)(p(o0)({variant:e.variant}),t.class)},p(n)),{default:_(()=>[pe(r.$slots,"default")]),_:3},16,["class"]))}},o0=vu("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20",outline:"text-foreground [a&]:hover:bg-card"}},defaultVariants:{variant:"default"}}),Ce={__name:"Card",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),X("div",{"data-slot":"card",class:Ge(p(st)("bg-card text-card-foreground flex flex-col gap-6 rounded-[1.85rem] border border-border/80 py-6 shadow-[0_18px_45px_-34px_rgba(23,56,75,0.12)]",t.class))},[pe(n.$slots,"default")],2))}},Qe={__name:"CardContent",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),X("div",{"data-slot":"card-content",class:Ge(p(st)("px-6",t.class))},[pe(n.$slots,"default")],2))}},et={__name:"CardDescription",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),X("p",{"data-slot":"card-description",class:Ge(p(st)("text-foreground text-sm leading-7",t.class))},[pe(n.$slots,"default")],2))}},Le={__name:"CardHeader",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),X("div",{"data-slot":"card-header",class:Ge(p(st)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t.class))},[pe(n.$slots,"default")],2))}},Re={__name:"CardTitle",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),X("h3",{"data-slot":"card-title",class:Ge(p(st)("leading-none font-semibold",t.class))},[pe(n.$slots,"default")],2))}},l0={__name:"Tabs",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1},dir:{type:String,required:!1},activationMode:{type:String,required:!1},modelValue:{type:null,required:!1},unmountOnHide:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,r=t,a=wn(n,"class"),i=Ms(a,r);return(s,l)=>(L(),ee(p(by),Xe({"data-slot":"tabs"},p(i),{class:p(st)("flex flex-col gap-2",n.class)}),{default:_(o=>[pe(s.$slots,"default",Ga(ra(o)))]),_:3},16,["class"]))}},Ti={__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=wn(t,"class");return(r,a)=>(L(),ee(p(_y),Xe({"data-slot":"tabs-content",class:p(st)("flex-1 outline-none",t.class)},p(n)),{default:_(()=>[pe(r.$slots,"default")]),_:3},16,["class"]))}},c0={__name:"TabsList",props:{loop:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=wn(t,"class");return(r,a)=>(L(),ee(p(wy),Xe({"data-slot":"tabs-list"},p(n),{class:p(st)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",t.class)}),{default:_(()=>[pe(r.$slots,"default")]),_:3},16,["class"]))}},Ci={__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=wn(t,"class"),r=Au(n);return(a,i)=>(L(),ee(p(Ey),Xe({"data-slot":"tabs-trigger",class:p(st)("text-muted-foreground data-[state=active]:border-border data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t.class)},p(r)),{default:_(()=>[pe(a.$slots,"default")]),_:3},16,["class"]))}},u0={class:"page-shell"},d0={href:"mailto:info@trustai.com.tr"},f0={class:"grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"},p0={class:"grid gap-4"},m0={class:"space-y-3"},g0={class:"grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"},h0={class:"grid gap-4"},y0={class:"space-y-3"},b0={class:"space-y-3"},v0={class:"grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"},_0={class:"grid gap-4"},k0={class:"flex flex-wrap gap-2"},w0={class:"content-copy"},x0={class:"content-copy-lg"},E0={class:"content-title max-w-none"},A0={__name:"About",setup(e){Dn();const{tm:t}=ir(),n=ie(()=>{const s=t("aboutPage.mission.items");return Array.isArray(s)?s:[]}),r=ie(()=>{const s=t("aboutPage.coreCapabilities.items");return Array.isArray(s)?s:[]}),a=ie(()=>{const s=t("aboutPage.architecture.items");return Array.isArray(s)?s:[]}),i=ie(()=>{const s=t("aboutPage.regulatory.items");return Array.isArray(s)?s:[]});return(s,l)=>(L(),X("div",u0,[k(jn,{label:s.$t("aboutPage.hero.label"),title:s.$t("aboutPage.hero.title"),description:s.$t("aboutPage.hero.subtitle")},{actions:_(()=>[k(p(Ct),{"as-child":"",variant:"outline",size:"lg",class:"rounded-full"},{default:_(()=>[I("a",d0,O(s.$t("cta.contact")),1)]),_:1})]),_:1},8,["label","title","description"]),k(p(l0),{"default-value":"who-we-are",class:"gap-6"},{default:_(()=>[k(p(c0),{class:"grid w-full grid-cols-1 rounded-[1.5rem] bg-secondary/80 p-1 md:grid-cols-3"},{default:_(()=>[k(p(Ci),{value:"who-we-are"},{default:_(()=>[Q(O(s.$t("aboutPage.tabs.whoWeAre")),1)]),_:1}),k(p(Ci),{value:"platform"},{default:_(()=>[Q(O(s.$t("aboutPage.tabs.platform")),1)]),_:1}),k(p(Ci),{value:"alignment"},{default:_(()=>[Q(O(s.$t("aboutPage.tabs.alignment")),1)]),_:1})]),_:1}),k(p(Ti),{value:"who-we-are"},{default:_(()=>[I("div",f0,[k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(s.$t("aboutPage.whoWeAre.title")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,O(s.$t("aboutPage.whoWeAre.p1")),1),I("p",null,O(s.$t("aboutPage.whoWeAre.p2")),1),I("p",null,O(s.$t("aboutPage.whoWeAre.p3")),1)]),_:1})]),_:1}),I("div",p0,[k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(s.$t("aboutPage.vision.title")),1)]),_:1}),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(s.$t("aboutPage.vision.description")),1)]),_:1})]),_:1})]),_:1}),k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(s.$t("aboutPage.mission.title")),1)]),_:1})]),_:1}),k(p(Qe),null,{default:_(()=>[I("ul",m0,[(L(!0),X(me,null,De(n.value,o=>(L(),X("li",{key:o,class:"content-chip"},O(o),1))),128))])]),_:1})]),_:1})])])]),_:1}),k(p(Ti),{value:"platform"},{default:_(()=>[I("div",g0,[k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(s.$t("aboutPage.platform.title")),1)]),_:1}),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(s.$t("aboutPage.platform.description")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,O(s.$t("aboutPage.difference.p1")),1),I("p",null,O(s.$t("aboutPage.difference.p2")),1)]),_:1})]),_:1}),I("div",h0,[k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(s.$t("aboutPage.coreCapabilities.title")),1)]),_:1})]),_:1}),k(p(Qe),null,{default:_(()=>[I("ul",y0,[(L(!0),X(me,null,De(r.value,o=>(L(),X("li",{key:o,class:"content-chip"},O(o),1))),128))])]),_:1})]),_:1}),k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(s.$t("aboutPage.architecture.title")),1)]),_:1})]),_:1}),k(p(Qe),null,{default:_(()=>[I("ul",b0,[(L(!0),X(me,null,De(a.value,o=>(L(),X("li",{key:o,class:"content-chip"},O(o),1))),128))])]),_:1})]),_:1})])])]),_:1}),k(p(Ti),{value:"alignment"},{default:_(()=>[I("div",v0,[k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(s.$t("aboutPage.scientific.title")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,O(s.$t("aboutPage.scientific.p1")),1),I("p",null,O(s.$t("aboutPage.scientific.p2")),1),I("p",null,O(s.$t("aboutPage.scientific.p3")),1)]),_:1})]),_:1}),I("div",_0,[k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(s.$t("aboutPage.regulatory.title")),1)]),_:1}),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(s.$t("aboutPage.regulatory.p1")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-4"},{default:_(()=>[I("div",k0,[(L(!0),X(me,null,De(i.value,o=>(L(),ee(p(Rd),{key:o,variant:"secondary",class:"rounded-full px-3 py-1"},{default:_(()=>[Q(O(o),1)]),_:2},1024))),128))]),k(p(Yu)),I("p",w0,O(s.$t("aboutPage.regulatory.p2")),1)]),_:1})]),_:1}),k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(s.$t("aboutPage.sectors.title")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,O(s.$t("aboutPage.sectors.p1")),1),I("p",null,O(s.$t("aboutPage.sectors.p2")),1)]),_:1})]),_:1})])])]),_:1})]),_:1}),k(p(Ce),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(Qe),{class:"space-y-4 px-6 py-8 text-center"},{default:_(()=>[I("p",x0,O(s.$t("aboutPage.closing.statement")),1),I("p",E0,O(s.$t("aboutPage.closing.highlight")),1)]),_:1})]),_:1})]))}},I0={key:0,class:"section-label"},T0={class:"space-y-2"},C0={class:"section-title max-w-3xl"},P0={key:0,class:"section-description"},xr={__name:"SectionHeading",props:{label:{type:String,default:""},title:{type:String,required:!0},description:{type:String,default:""},class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),X("div",{class:Ge(p(st)("space-y-4",t.class))},[e.label?(L(),X("p",I0,O(e.label),1)):Xt("",!0),I("div",T0,[I("h2",C0,O(e.title),1),e.description?(L(),X("p",P0,O(e.description),1)):Xt("",!0)])],2))}},S0={class:"page-shell"},O0={class:"grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"},L0={class:"space-y-6"},R0={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},N0={class:"flex size-11 items-center justify-center rounded-2xl bg-accent/50 text-primary"},M0={class:"space-y-2"},$0={class:"space-y-6"},D0={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},z0={class:"flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary"},F0={class:"space-y-2"},W0={__name:"AIGovernance",setup(e){Dn();const t=[{icon:Im,titleKey:"aiGovernancePage.whyItMatters.cards.bias.title",descriptionKey:"aiGovernancePage.whyItMatters.cards.bias.description"},{icon:ru,titleKey:"aiGovernancePage.whyItMatters.cards.opacity.title",descriptionKey:"aiGovernancePage.whyItMatters.cards.opacity.description"},{icon:km,titleKey:"aiGovernancePage.whyItMatters.cards.regulatory.title",descriptionKey:"aiGovernancePage.whyItMatters.cards.regulatory.description"}],n=[{icon:au,titleKey:"aiGovernancePage.pillars.accountability.title",descriptionKey:"aiGovernancePage.pillars.accountability.description"},{icon:Na,titleKey:"aiGovernancePage.pillars.traceability.title",descriptionKey:"aiGovernancePage.pillars.traceability.description"},{icon:mm,titleKey:"aiGovernancePage.pillars.monitoring.title",descriptionKey:"aiGovernancePage.pillars.monitoring.description"}];return(r,a)=>{const i=ta("reveal");return L(),X("div",S0,[Ae(k(jn,{label:r.$t("aiGovernancePage.hero.label"),title:r.$t("aiGovernancePage.hero.title"),description:r.$t("aiGovernancePage.hero.subtitle")},null,8,["label","title","description"]),[[i]]),Ae((L(),X("section",O0,[k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(r.$t("aiGovernancePage.whatIs.title")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,O(r.$t("aiGovernancePage.whatIs.p1")),1),I("p",null,O(r.$t("aiGovernancePage.whatIs.p2")),1)]),_:1})]),_:1}),k(p(Ce),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(r.$t("aiGovernancePage.financialSector.title")),1)]),_:1}),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(r.$t("aiGovernancePage.financialSector.p1")),1)]),_:1})]),_:1}),k(p(Qe),{class:"content-copy"},{default:_(()=>[Q(O(r.$t("aiGovernancePage.financialSector.p2")),1)]),_:1})]),_:1})])),[[i,{delay:120}]]),Ae((L(),X("section",L0,[k(xr,{title:r.$t("aiGovernancePage.whyItMatters.title")},null,8,["title"]),I("div",R0,[(L(),X(me,null,De(t,s=>k(p(Ce),{key:s.titleKey,class:"content-card"},{default:_(()=>[k(p(Le),{class:"gap-4"},{default:_(()=>[I("div",N0,[(L(),ee(Qt(s.icon),{class:"size-5"}))]),I("div",M0,[k(p(Re),{class:"content-subtitle"},{default:_(()=>[Q(O(r.$t(s.titleKey)),1)]),_:2},1024),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(r.$t(s.descriptionKey)),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024)),64))])])),[[i,{delay:180}]]),Ae((L(),X("section",$0,[k(xr,{title:r.$t("aiGovernancePage.pillars.title")},null,8,["title"]),I("div",D0,[(L(),X(me,null,De(n,s=>k(p(Ce),{key:s.titleKey,class:"content-card"},{default:_(()=>[k(p(Le),{class:"gap-4"},{default:_(()=>[I("div",z0,[(L(),ee(Qt(s.icon),{class:"size-5"}))]),I("div",F0,[k(p(Re),{class:"content-subtitle"},{default:_(()=>[Q(O(r.$t(s.titleKey)),1)]),_:2},1024),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(r.$t(s.descriptionKey)),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024)),64))])])),[[i,{delay:220}]]),Ae((L(),ee(p(Ce),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(Le),{class:"space-y-3"},{default:_(()=>[k(p(Re),{class:"section-title max-w-3xl"},{default:_(()=>[Q(O(r.$t("aiGovernancePage.closing.title")),1)]),_:1}),k(p(et),{class:"section-description"},{default:_(()=>[Q(O(r.$t("aiGovernancePage.closing.description")),1)]),_:1})]),_:1})]),_:1})),[[i,{delay:280}]])])}}},U0=`<!DOCTYPE html>\r
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
`,B0=`<!DOCTYPE html>
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
`,j0=`<!DOCTYPE html>
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
`,G0={class:"page-shell gap-10"},V0=["srcdoc"],H0={class:"space-y-6"},q0={class:"section-intro"},K0={class:"section-label"},Y0={class:"section-title max-w-3xl"},X0={class:"section-description"},J0={class:"grid gap-5 md:grid-cols-2 xl:grid-cols-4"},Z0={class:"flex size-12 items-center justify-center rounded-[1.2rem] bg-secondary/14 text-primary"},Q0={class:"space-y-2"},ek={class:"section-divider grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"},tk={class:"space-y-5"},nk={class:"section-label"},rk={class:"section-title max-w-3xl"},ak={class:"space-y-4 content-copy-lg"},ik={class:"overflow-hidden"},sk=["srcdoc"],ok={class:"section-divider grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center"},lk={class:"space-y-6"},ck={class:"section-intro"},uk={class:"section-label"},dk={class:"section-title"},fk={class:"space-y-4"},pk={class:"flex items-start gap-4"},mk={class:"mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary"},gk={class:"space-y-2"},hk={class:"content-subtitle"},yk={class:"content-copy-lg"},bk={class:"overflow-hidden"},vk=["srcdoc"],_k={class:"section-divider space-y-6"},kk={class:"section-intro"},wk={class:"section-label"},xk={class:"section-title"},Ek={class:"section-description"},Ak={class:"divide-y divide-border rounded-[1.75rem] border border-border bg-white/40"},Ik={class:"content-title leading-tight"},Tk={class:"content-copy-lg"},Ck=["href"],Pk={__name:"Home",setup(e){const t=Dn(),n=ie(()=>oa(t.params.locale)),r=(c,u)=>c.replace("</head>",`<style>${u}</style></head>`),a=r(U0.replace('src="logo.png"','src="/logo.png"'),`
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
  `),i=r(B0,`
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
  `),s=r(j0,`
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
  `),l=[{icon:ru,titleKey:"whatWeDo.explainability.title",descriptionKey:"whatWeDo.explainability.description"},{icon:hm,titleKey:"whatWeDo.traceability.title",descriptionKey:"whatWeDo.traceability.description"},{icon:Ui,titleKey:"whatWeDo.workflows.title",descriptionKey:"whatWeDo.workflows.description"},{icon:Na,titleKey:"whatWeDo.audit.title",descriptionKey:"whatWeDo.audit.description"}],o=[{icon:wm,titleKey:"why.foundation.title",descriptionKey:"why.foundation.description"},{icon:vm,titleKey:"why.sector.title",descriptionKey:"why.sector.description"},{icon:au,titleKey:"why.governance.title",descriptionKey:"why.governance.description"},{icon:Na,titleKey:"why.audit.title",descriptionKey:"why.audit.description"}];return(c,u)=>{const d=xs("RouterLink"),f=ta("reveal");return L(),X("div",G0,[Ae((L(),ee(jn,{"aside-width":"32rem","aside-class":"hidden lg:block","aside-chrome":!1,compact:"","content-align":"center",label:c.$t("researchHero.label"),title:c.$t("researchHero.title"),description:c.$t("researchHero.description")},{actions:_(()=>[k(p(Ct),{"as-child":"",size:"lg",class:"rounded-full shadow-sm"},{default:_(()=>[k(d,{to:{name:"research",params:{locale:n.value}}},{default:_(()=>[Q(O(c.$t("researchHero.button"))+" ",1),k(p(Ra),{class:"size-4"})]),_:1},8,["to"])]),_:1})]),aside:_(()=>[I("iframe",{srcdoc:p(a),title:"TrustAI dashboard card",scrolling:"no",class:"block h-[21rem] w-full overflow-hidden border-0 bg-transparent"},null,8,V0)]),_:1},8,["label","title","description"])),[[f]]),I("section",H0,[Ae((L(),X("div",q0,[I("p",K0,O(c.$t("whatWeDo.label")),1),I("h2",Y0,O(c.$t("whatWeDo.title")),1),I("p",X0,O(c.$t("homePage.servicesDescription")),1)])),[[f,{delay:40}]]),I("div",J0,[(L(),X(me,null,De(l,(g,A)=>Ae(k(p(Ce),{key:g.titleKey,class:"content-card bg-card"},{default:_(()=>[k(p(Le),{class:"gap-4"},{default:_(()=>[I("div",Z0,[(L(),ee(Qt(g.icon),{class:"size-5"}))]),I("div",Q0,[k(p(Re),{class:"content-subtitle"},{default:_(()=>[Q(O(c.$t(g.titleKey)),1)]),_:2},1024),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(c.$t(g.descriptionKey)),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024),[[f,{delay:80+A*60}]])),64))])]),I("section",ek,[Ae((L(),X("div",tk,[I("p",nk,O(c.$t("about.label")),1),I("h2",rk,O(c.$t("about.title")),1),I("div",ak,[I("p",null,O(c.$t("about.intro")),1),I("p",null,O(c.$t("about.sectorFocus")),1),I("p",null,O(c.$t("about.approach")),1),I("p",null,O(c.$t("about.team")),1)])])),[[f,{delay:40}]]),Ae((L(),X("div",ik,[I("iframe",{srcdoc:p(s),title:"TrustAI governance capabilities",loading:"lazy",scrolling:"no",class:"block h-[38rem] w-full overflow-hidden border-0 bg-transparent sm:h-[34rem]"},null,8,sk)])),[[f,{delay:120}]])]),I("section",ok,[I("div",lk,[Ae((L(),X("div",ck,[I("p",uk,O(c.$t("why.label")),1),I("h2",dk,O(c.$t("why.title")),1)])),[[f,{delay:40}]]),I("div",fk,[(L(),X(me,null,De(o,(g,A)=>Ae(I("div",{key:g.titleKey,class:"border-b border-border pb-4 last:border-b-0 last:pb-0"},[I("div",pk,[I("div",mk,[(L(),ee(Qt(g.icon),{class:"size-4"}))]),I("div",gk,[I("h3",hk,O(c.$t(g.titleKey)),1),I("p",yk,O(c.$t(g.descriptionKey)),1)])])]),[[f,{delay:80+A*50}]])),64))])]),Ae((L(),X("div",bk,[I("iframe",{srcdoc:p(i),title:"Why TrustAI",loading:"lazy",scrolling:"no",class:"block h-[24rem] w-full overflow-hidden border-0 bg-transparent sm:h-[30rem]"},null,8,vk)])),[[f,{delay:130}]])]),I("section",_k,[Ae((L(),X("div",kk,[I("p",wk,O(c.$t("researchSection.title")),1),I("h2",xk,O(c.$t("researchSection.subtitle")),1),I("p",Ek,O(c.$t("homePage.researchDescription")),1)])),[[f,{delay:40}]]),I("div",Ak,[(L(!0),X(me,null,De(p(Ju),(g,A)=>Ae((L(),X("article",{key:g.titleKey,class:"space-y-4 px-6 py-6"},[I("h3",Ik,O(c.$t(g.titleKey)),1),I("p",Tk,O(c.$t(g.descriptionKey)),1),g.href?(L(),ee(p(Ct),{key:0,"as-child":"",variant:"outline",class:"rounded-full"},{default:_(()=>[I("a",{href:g.href,target:"_blank",rel:"noreferrer"},[Q(O(c.$t("researchSection.publicationBtn"))+" ",1),k(p(Ra),{class:"size-4"})],8,Ck)]),_:2},1024)):(L(),ee(p(Ct),{key:1,variant:"outline",class:"pointer-events-none rounded-full border-border/80 bg-white/45 text-muted-foreground",disabled:"","aria-disabled":"true"},{default:_(()=>[...u[0]||(u[0]=[Q(" Preprint available soon ",-1)])]),_:1}))])),[[f,{delay:100+A*70}]])),128))])]),Ae((L(),ee(p(Ce),{class:"content-card overflow-hidden bg-secondary/70"},{default:_(()=>[k(p(Le),{class:"space-y-3"},{default:_(()=>[k(p(Re),{class:"section-title"},{default:_(()=>[Q(O(c.$t("cta.title")),1)]),_:1}),k(p(et),{class:"section-description"},{default:_(()=>[Q(O(c.$t("homePage.ctaDescription")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-6"})]),_:1})),[[f,{delay:120}]])])}}},Sk=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Ok={};function Lk(e,t){const n=xs("router-view");return L(),ee(n)}const Rk=Sk(Ok,[["render",Lk]]),Nk={__name:"Avatar",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),ee(p(ey),{"data-slot":"avatar",class:Ge(p(st)("relative flex size-8 shrink-0 overflow-hidden rounded-full",t.class))},{default:_(()=>[pe(n.$slots,"default")]),_:3},8,["class"]))}},Mk={__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=wn(t,"class");return(r,a)=>(L(),ee(p(ny),Xe({"data-slot":"avatar-fallback"},p(n),{class:p(st)("bg-muted flex size-full items-center justify-center rounded-full",t.class)}),{default:_(()=>[pe(r.$slots,"default")]),_:3},16,["class"]))}},$k={__name:"AvatarImage",props:{src:{type:String,required:!0},referrerPolicy:{type:null,required:!1},crossOrigin:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e;return(n,r)=>(L(),ee(p(iy),Xe({"data-slot":"avatar-image"},t,{class:"aspect-square size-full"}),{default:_(()=>[pe(n.$slots,"default")]),_:3},16))}},Dk={class:"page-shell"},zk={href:"mailto:info@trustai.com.tr"},Fk={class:"grid gap-4 lg:grid-cols-2"},Wk={class:"content-chip bg-background/80"},Uk={class:"content-chip bg-background/80"},Bk={class:"content-chip bg-background/80"},jk={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},Gk={class:"space-y-3"},Vk={class:"space-y-2"},Hk={__name:"OurTeams",setup(e){return(t,n)=>(L(),X("div",Dk,[k(jn,{label:t.$t("ourTeamsPage.hero.label"),title:t.$t("ourTeamsPage.hero.title"),description:t.$t("ourTeamsPage.hero.subtitle")},{actions:_(()=>[k(p(Ct),{"as-child":"",size:"lg",class:"rounded-full shadow-sm"},{default:_(()=>[I("a",zk,[Q(O(t.$t("cta.contact"))+" ",1),k(p(Ra),{class:"size-4"})])]),_:1})]),_:1},8,["label","title","description"]),I("div",Fk,[k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title flex items-center gap-2"},{default:_(()=>[k(p(_m),{class:"size-5"}),Q(" "+O(t.$t("teamPage.structureTitle")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-4 content-copy"},{default:_(()=>[I("p",null,O(t.$t("aboutPage.team.p1")),1),I("p",null,O(t.$t("aboutPage.team.p2")),1)]),_:1})]),_:1}),k(p(Ce),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(t.$t("teamPage.howWeWorkTitle")),1)]),_:1}),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(t.$t("teamPage.howWeWorkDescription")),1)]),_:1})]),_:1}),k(p(Qe),{class:"grid gap-3"},{default:_(()=>[I("div",Wk,O(t.$t("teamPage.howWeWorkItems.academic")),1),I("div",Uk,O(t.$t("teamPage.howWeWorkItems.engineering")),1),I("div",Bk,O(t.$t("teamPage.howWeWorkItems.governance")),1)]),_:1})]),_:1})]),I("section",jk,[(L(!0),X(me,null,De(p(gb),r=>(L(),ee(p(Ce),{key:r.name,class:"content-card"},{default:_(()=>[k(p(Le),{class:"items-start gap-4"},{default:_(()=>[k(p(Nk),{class:"size-28 rounded-[1.75rem] border border-border/70"},{default:_(()=>[k(p($k),{src:r.image,alt:r.name,class:"object-cover"},null,8,["src","alt"]),k(p(Mk),{class:"rounded-[1.75rem] bg-secondary text-primary"},{default:_(()=>[Q(O(r.initials),1)]),_:2},1024)]),_:2},1024),I("div",Gk,[k(p(Rd),{variant:"secondary",class:"rounded-full px-3 py-1"},{default:_(()=>[Q(O(t.$t(r.roleKey)),1)]),_:2},1024),I("div",Vk,[k(p(Re),{class:"content-subtitle"},{default:_(()=>[Q(O(r.name),1)]),_:2},1024),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(t.$t(r.bioKey)),1)]),_:2},1024)])])]),_:2},1024)]),_:2},1024))),128))])]))}},qk={class:"page-shell"},Kk={class:"space-y-3 content-copy-lg"},Yk={class:"content-subtitle"},Xk={class:"grid gap-3"},Jk={__name:"Privacy",setup(e){const{tm:t}=ir(),n=ie(()=>{const r=t("privacyPage.noticeItems");return Array.isArray(r)?r:[]});return(r,a)=>(L(),X("div",qk,[k(jn,{label:r.$t("privacyPage.hero.label"),title:r.$t("privacyPage.hero.title")},null,8,["label","title"]),k(p(Ce),{class:"content-card"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(r.$t("privacyPage.policyDetails")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-5"},{default:_(()=>[I("div",Kk,[I("p",Yk,O(r.$t("privacyPage.noticeTitle")),1),I("p",null,O(r.$t("privacyPage.noticeIntro")),1)]),I("ul",Xk,[(L(!0),X(me,null,De(n.value,i=>(L(),X("li",{key:i,class:"content-chip bg-background/82"},O(i),1))),128))])]),_:1})]),_:1}),k(p(Ce),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(r.$t("privacyPage.contactTitle")),1)]),_:1})]),_:1}),k(p(Qe),{class:"content-copy flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"},{default:_(()=>[I("p",null,O(r.$t("privacyPage.contactDescription")),1),k(p(Ct),{"as-child":"",class:"rounded-full shadow-sm"},{default:_(()=>[...a[0]||(a[0]=[I("a",{href:"mailto:info@trustai.com.tr"},"info@trustai.com.tr",-1)])]),_:1})]),_:1})]),_:1})]))}},Zk={class:"page-shell"},Qk={class:"space-y-6"},ew={class:"grid gap-4 lg:grid-cols-2"},tw={class:"space-y-2"},nw={class:"section-label"},rw={class:"space-y-6"},aw={class:"flex items-start gap-4"},iw={class:"space-y-2"},sw={class:"section-label"},ow={class:"space-y-4"},lw={class:"section-intro"},cw={class:"section-label"},uw={class:"grid gap-3"},dw={class:"grid gap-5 sm:grid-cols-2"},fw={class:"space-y-4 rounded-[1.5rem] border border-border/70 bg-background/78 p-5"},pw={class:"section-label"},mw={class:"space-y-3"},gw={class:"space-y-4 rounded-[1.5rem] border border-border/70 bg-background/78 p-5"},hw={class:"section-label"},yw={class:"space-y-3"},bw={class:"space-y-4 rounded-[1.5rem] border border-border/70 bg-secondary/55 p-5 sm:col-span-2"},vw={class:"section-label"},_w={class:"grid gap-3 md:grid-cols-2"},kw={class:"section-label"},ww={class:"grid gap-4 md:grid-cols-3"},xw={class:"content-copy"},Ew={__name:"products",setup(e){Dn();const{tm:t}=ir(),n=[{key:"trustaiX",icon:pm,accentClass:"bg-accent/16 text-primary",delay:120,revealClass:"reveal-slide-left"},{key:"trustaiUX",icon:dm,accentClass:"bg-primary/10 text-primary",delay:200,revealClass:"reveal-slide-right"}],r=[Na,Bi,fm];function a(i){const s=t(i);return Array.isArray(s)?s:[]}return(i,s)=>{const l=ta("reveal");return L(),X("div",Zk,[Ae(k(jn,{label:i.$t("productsPage.hero.label"),title:i.$t("productsPage.hero.title"),description:i.$t("productsPage.hero.subtitle")},null,8,["label","title","description"]),[[l]]),Ae((L(),X("section",Qk,[k(xr,{label:i.$t("productsPage.overview.label"),title:i.$t("productsPage.overview.title"),description:i.$t("productsPage.overview.description")},null,8,["label","title","description"]),I("div",ew,[(L(),X(me,null,De(n,o=>Ae(k(p(Ce),{key:o.key,class:Ge(["content-card hover-lift",o.revealClass])},{default:_(()=>[k(p(Le),{class:"gap-4"},{default:_(()=>[I("div",{class:Ge(["flex size-12 items-center justify-center rounded-[1.1rem]",o.accentClass])},[(L(),ee(Qt(o.icon),{class:"size-5"}))],2),I("div",tw,[I("p",nw,O(i.$t(`productsPage.${o.key}.category`)),1),k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(i.$t(`productsPage.${o.key}.name`)),1)]),_:2},1024),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(i.$t(`productsPage.${o.key}.overview`)),1)]),_:2},1024)])]),_:2},1024)]),_:2},1032,["class"]),[[l,{delay:o.delay}]])),64))])])),[[l,{delay:120}]]),I("section",rw,[(L(),X(me,null,De(n,o=>Ae(k(p(Ce),{key:`${o.key}-detail`,class:Ge(["content-card overflow-hidden hover-lift"])},{default:_(()=>[k(p(Le),{class:"gap-4 border-b border-border/70 pb-6"},{default:_(()=>[I("div",aw,[I("div",{class:Ge(["flex size-14 items-center justify-center rounded-[1.3rem]",o.accentClass])},[(L(),ee(Qt(o.icon),{class:"size-6"}))],2),I("div",iw,[I("p",sw,O(i.$t(`productsPage.${o.key}.category`)),1),k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(i.$t(`productsPage.${o.key}.name`)),1)]),_:2},1024),k(p(et),{class:"section-description"},{default:_(()=>[Q(O(i.$t(`productsPage.${o.key}.overview`)),1)]),_:2},1024)])])]),_:2},1024),k(p(Qe),{class:"grid gap-5 pt-6 lg:grid-cols-2"},{default:_(()=>[I("div",ow,[I("div",lw,[I("p",cw,O(i.$t(`productsPage.${o.key}.whatItDoesTitle`)),1)]),I("div",uw,[(L(!0),X(me,null,De(a(`productsPage.${o.key}.whatItDoes`),c=>(L(),X("div",{key:c,class:"content-chip bg-background/82"},O(c),1))),128))])]),I("div",dw,[I("div",fw,[I("p",pw,O(i.$t(`productsPage.${o.key}.featuresTitle`)),1),I("ul",mw,[(L(!0),X(me,null,De(a(`productsPage.${o.key}.features`),c=>(L(),X("li",{key:c,class:"content-copy"},O(c),1))),128))])]),I("div",gw,[I("p",hw,O(i.$t(`productsPage.${o.key}.${o.key==="trustaiX"?"deploymentTitle":"compatibilityTitle"}`)),1),I("ul",yw,[(L(!0),X(me,null,De(a(`productsPage.${o.key}.${o.key==="trustaiX"?"deployment":"compatibility"}`),c=>(L(),X("li",{key:c,class:"content-copy"},O(c),1))),128))])]),I("div",bw,[I("p",vw,O(i.$t(`productsPage.${o.key}.valueTitle`)),1),I("div",_w,[(L(!0),X(me,null,De(a(`productsPage.${o.key}.value`),c=>(L(),X("div",{key:c,class:"content-chip bg-background/82"},O(c),1))),128))])])])]),_:2},1024)]),_:2},1024),[[l,{delay:o.delay}]])),64))]),Ae((L(),ee(p(Ce),{class:"content-card overflow-hidden bg-secondary/70"},{default:_(()=>[k(p(Le),{class:"space-y-3"},{default:_(()=>[I("p",kw,O(i.$t("productsPage.ecosystem.label")),1),k(p(Re),{class:"section-title max-w-3xl"},{default:_(()=>[Q(O(i.$t("productsPage.ecosystem.title")),1)]),_:1}),k(p(et),{class:"section-description"},{default:_(()=>[Q(O(i.$t("productsPage.ecosystem.description")),1)]),_:1})]),_:1}),k(p(Qe),{class:"space-y-6"},{default:_(()=>[I("div",ww,[(L(!0),X(me,null,De(a("productsPage.ecosystem.items"),(o,c)=>Ae((L(),X("div",{key:o,class:"rounded-[1.5rem] border border-border/70 bg-background/82 p-5 hover-lift"},[(L(),ee(Qt(r[c]),{class:"mb-4 size-5 text-accent"})),I("p",xw,O(o),1)])),[[l,{delay:120*(c+1)}]])),128))])]),_:1})]),_:1})),[[l,{delay:300}]])])}}},Aw={class:"page-shell"},Iw={class:"space-y-6"},Tw={class:"grid gap-4 lg:grid-cols-2"},Cw={class:"flex items-center gap-2 text-primary"},Pw={class:"text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"},Sw={class:"space-y-3"},Ow=["href"],Lw={__name:"Research",setup(e){return Dn(),(t,n)=>{const r=ta("reveal");return L(),X("div",Aw,[Ae(k(jn,{label:t.$t("researchReferences.label"),title:t.$t("researchReferences.title"),description:t.$t("researchReferences.description")},null,8,["label","title","description"]),[[r]]),Ae((L(),X("section",Iw,[k(xr,{title:t.$t("researchReferences.subtitle"),description:t.$t("researchPage.sectionDescription")},null,8,["title","description"]),I("div",Tw,[(L(!0),X(me,null,De(p(Ju),a=>(L(),ee(p(Ce),{key:a.title,class:"content-card"},{default:_(()=>[k(p(Le),{class:"space-y-4"},{default:_(()=>[I("div",Cw,[k(p(Am),{class:"size-4"}),I("span",Pw,O(t.$t("researchPage.publicationLabel")),1)]),I("div",Sw,[k(p(Re),{class:"content-title leading-tight"},{default:_(()=>[Q(O(t.$t(a.titleKey)),1)]),_:2},1024),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(t.$t(a.descriptionKey)),1)]),_:2},1024)])]),_:2},1024),k(p(Qe),null,{default:_(()=>[a.href?(L(),ee(p(Ct),{key:0,"as-child":"",variant:"outline",class:"rounded-full"},{default:_(()=>[I("a",{href:a.href,target:"_blank",rel:"noreferrer"},[k(p(gm),{class:"size-4"}),Q(" "+O(t.$t("researchSection.publicationBtn")),1)],8,Ow)]),_:2},1024)):(L(),ee(p(Ct),{key:1,variant:"outline",class:"pointer-events-none rounded-full border-border/80 bg-white/45 text-muted-foreground",disabled:"","aria-disabled":"true"},{default:_(()=>[...n[0]||(n[0]=[Q(" Preprint available soon ",-1)])]),_:1}))]),_:2},1024)]),_:2},1024))),128))])])),[[r,{delay:120}]]),Ae((L(),ee(p(Ce),{class:"content-card bg-secondary/70"},{default:_(()=>[k(p(Le),null,{default:_(()=>[k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(t.$t("researchPage.collaborateTitle")),1)]),_:1}),k(p(et),{class:"section-description"},{default:_(()=>[Q(O(t.$t("researchPage.collaborateDescription")),1)]),_:1})]),_:1})]),_:1})),[[r,{delay:200}]])])}}},Rw={class:"page-shell"},Nw={class:"space-y-6"},Mw={class:"grid gap-4 lg:grid-cols-2"},$w={class:"space-y-2"},Dw={class:"section-label"},zw={class:"space-y-6"},Fw={class:"flex items-start gap-4"},Ww={class:"space-y-2"},Uw={class:"section-label"},Bw={class:"space-y-4"},jw={class:"section-label"},Gw={class:"grid gap-3"},Vw={class:"grid gap-5"},Hw={class:"rounded-[1.5rem] border border-border/70 bg-background/78 p-5"},qw={class:"section-label"},Kw={class:"mt-4 space-y-3"},Yw={class:"rounded-[1.5rem] border border-border/70 bg-secondary/55 p-5"},Xw={class:"section-label"},Jw={class:"mt-4 grid gap-3"},Zw={class:"space-y-6"},Qw={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-5"},ex={class:"flex size-12 items-center justify-center rounded-[1.1rem] bg-accent/16 text-primary"},tx={class:"space-y-2"},nx={class:"section-label"},rx={class:"section-label"},ax={__name:"services",setup(e){Dn();const{tm:t}=ir(),n=[{key:"framework",icon:Bi,accentClass:"bg-accent/16 text-primary",delay:120},{key:"assurance",icon:xm,accentClass:"bg-primary/10 text-primary",delay:200}],r=[Ui,Em,Bi,Ra,Ui];function a(i){const s=t(i);return Array.isArray(s)?s:[]}return(i,s)=>{const l=ta("reveal");return L(),X("div",Rw,[Ae(k(jn,{label:i.$t("servicesPage.hero.label"),title:i.$t("servicesPage.hero.title"),description:i.$t("servicesPage.hero.subtitle")},null,8,["label","title","description"]),[[l]]),Ae((L(),X("section",Nw,[k(xr,{label:i.$t("servicesPage.overview.label"),title:i.$t("servicesPage.overview.title"),description:i.$t("servicesPage.overview.description")},null,8,["label","title","description"]),I("div",Mw,[(L(),X(me,null,De(n,o=>Ae(k(p(Ce),{key:o.key,class:Ge(["content-card hover-lift"])},{default:_(()=>[k(p(Le),{class:"gap-4"},{default:_(()=>[I("div",{class:Ge(["flex size-12 items-center justify-center rounded-[1.1rem]",o.accentClass])},[(L(),ee(Qt(o.icon),{class:"size-5"}))],2),I("div",$w,[I("p",Dw,O(i.$t(`servicesPage.${o.key}.category`)),1),k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(i.$t(`servicesPage.${o.key}.name`)),1)]),_:2},1024),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(i.$t(`servicesPage.${o.key}.overview`)),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024),[[l,{delay:o.delay}]])),64))])])),[[l,{delay:120}]]),I("section",zw,[(L(),X(me,null,De(n,o=>Ae(k(p(Ce),{key:`${o.key}-detail`,class:Ge(["content-card overflow-hidden hover-lift"])},{default:_(()=>[k(p(Le),{class:"gap-4 border-b border-border/70 pb-6"},{default:_(()=>[I("div",Fw,[I("div",{class:Ge(["flex size-14 items-center justify-center rounded-[1.3rem]",o.accentClass])},[(L(),ee(Qt(o.icon),{class:"size-6"}))],2),I("div",Ww,[I("p",Uw,O(i.$t(`servicesPage.${o.key}.category`)),1),k(p(Re),{class:"content-title"},{default:_(()=>[Q(O(i.$t(`servicesPage.${o.key}.name`)),1)]),_:2},1024),k(p(et),{class:"section-description"},{default:_(()=>[Q(O(i.$t(`servicesPage.${o.key}.overview`)),1)]),_:2},1024)])])]),_:2},1024),k(p(Qe),{class:"grid gap-5 pt-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"},{default:_(()=>[I("div",Bw,[I("p",jw,O(i.$t(`servicesPage.${o.key}.whatWeDoTitle`)),1),I("div",Gw,[(L(!0),X(me,null,De(a(`servicesPage.${o.key}.whatWeDo`),c=>(L(),X("div",{key:c,class:"content-chip bg-background/82"},O(c),1))),128))])]),I("div",Vw,[I("div",Hw,[I("p",qw,O(i.$t(`servicesPage.${o.key}.${o.key==="framework"?"deliverablesTitle":"capabilitiesTitle"}`)),1),I("ul",Kw,[(L(!0),X(me,null,De(a(`servicesPage.${o.key}.${o.key==="framework"?"deliverables":"capabilities"}`),c=>(L(),X("li",{key:c,class:"content-copy"},O(c),1))),128))])]),I("div",Yw,[I("p",Xw,O(i.$t(`servicesPage.${o.key}.valueTitle`)),1),I("div",Jw,[(L(!0),X(me,null,De(a(`servicesPage.${o.key}.value`),c=>(L(),X("div",{key:c,class:"content-chip bg-background/82"},O(c),1))),128))])])])]),_:2},1024)]),_:2},1024),[[l,{delay:o.delay}]])),64))]),Ae((L(),X("section",Zw,[k(xr,{label:i.$t("servicesPage.process.label"),title:i.$t("servicesPage.process.title"),description:i.$t("servicesPage.process.description")},null,8,["label","title","description"]),I("div",Qw,[(L(!0),X(me,null,De(a("servicesPage.process.steps"),(o,c)=>Ae((L(),ee(p(Ce),{key:o.title,class:"content-card hover-lift"},{default:_(()=>[k(p(Le),{class:"gap-4"},{default:_(()=>[I("div",ex,[(L(),ee(Qt(r[c]),{class:"size-5"}))]),I("div",tx,[I("p",nx,"0"+O(c+1),1),k(p(Re),{class:"content-subtitle"},{default:_(()=>[Q(O(o.title),1)]),_:2},1024),k(p(et),{class:"content-copy"},{default:_(()=>[Q(O(o.description),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024)),[[l,{delay:120*(c+1)}]])),128))])])),[[l,{delay:200}]]),Ae((L(),ee(p(Ce),{class:"content-card overflow-hidden bg-secondary/70"},{default:_(()=>[k(p(Le),{class:"space-y-3"},{default:_(()=>[I("p",rx,O(i.$t("servicesPage.hero.label")),1),k(p(Re),{class:"section-title max-w-3xl"},{default:_(()=>[Q(O(i.$t("servicesPage.cta.title")),1)]),_:1}),k(p(et),{class:"section-description"},{default:_(()=>[Q(O(i.$t("cta.description")),1)]),_:1})]),_:1})]),_:1})),[[l,{delay:300}]])])}}},ix=[{path:"/:locale(en|tr)",component:Rk,children:[{path:"",name:"home",component:Pk},{path:"about",name:"about",component:A0},{path:"governance",name:"governance",component:W0},{path:"research",name:"research",component:Lw},{path:"services",name:"services",component:ax},{path:"products",name:"products",component:Ew},{path:"privacy",name:"privacy",component:Jk},{path:"team",name:"team",component:Hk},{path:"aboutUs",redirect:e=>({name:"about",params:e.params})},{path:"ai-governance",redirect:e=>({name:"governance",params:e.params})},{path:"our-teams",redirect:e=>({name:"team",params:e.params})}]},{path:"/",redirect:()=>`/${Ji()}`},{path:"/:pathMatch(.*)*",redirect:()=>`/${Ji()}`}],Nd=Lg({history:dg(),routes:ix,scrollBehavior(){return{top:0}}});Nd.beforeEach(e=>{const t=e.params.locale;if(!t)return`/${Ji()}`;if(!Xu.includes(t))return"/en";const n=oa(t);return Ld.global.locale.value=n,localStorage.setItem("locale",n),!0});function Md(e){return typeof e=="number"?e:e&&typeof e=="object"&&typeof e.delay=="number"?e.delay:0}function sx(e,t){const n=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(e.classList.add("is-visible"),n.unobserve(i.target))})},{threshold:.08,rootMargin:"0px 0px -10% 0px"}),r=Md(t.value);e.classList.add("reveal-on-scroll"),r>0&&e.style.setProperty("--reveal-delay",`${r}ms`),n.observe(e),e.__revealObserver=n}const ox={mounted(e,t){sx(e,t)},updated(e,t){const n=Md(t.value);n>0?e.style.setProperty("--reveal-delay",`${n}ms`):e.style.removeProperty("--reveal-delay")},unmounted(e){e.__revealObserver?.disconnect(),delete e.__revealObserver}},$d=rm(Jb);$d.directive("reveal",ox);$d.use(Ld).use(Nd).mount("#app");
