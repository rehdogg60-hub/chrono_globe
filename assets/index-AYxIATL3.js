(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function bx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Gf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function Tx(){if(m_)return Ro;m_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var g_;function Ax(){return g_||(g_=1,Gf.exports=Tx()),Gf.exports}var fe=Ax(),Vf={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function Cx(){if(__)return rt;__=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),x=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function g(L,ne,ve){this.props=L,this.context=ne,this.refs=S,this.updater=ve||E}g.prototype.isReactComponent={},g.prototype.setState=function(L,ne){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ne,"setState")},g.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function z(){}z.prototype=g.prototype;function O(L,ne,ve){this.props=L,this.context=ne,this.refs=S,this.updater=ve||E}var w=O.prototype=new z;w.constructor=O,A(w,g.prototype),w.isPureReactComponent=!0;var K=Array.isArray;function G(){}var B={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(L,ne,ve){var q=ve.ref;return{$$typeof:o,type:L,key:ne,ref:q!==void 0?q:null,props:ve}}function R(L,ne){return D(L.type,ne,L.props)}function F(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function le(L){var ne={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ve){return ne[ve]})}var te=/\/+/g;function me(L,ne){return typeof L=="object"&&L!==null&&L.key!=null?le(""+L.key):ne.toString(36)}function he(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(ne){L.status==="pending"&&(L.status="fulfilled",L.value=ne)},function(ne){L.status==="pending"&&(L.status="rejected",L.reason=ne)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,ne,ve,q,oe){var Ee=typeof L;(Ee==="undefined"||Ee==="boolean")&&(L=null);var xe=!1;if(L===null)xe=!0;else switch(Ee){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(L.$$typeof){case o:case t:xe=!0;break;case v:return xe=L._init,P(xe(L._payload),ne,ve,q,oe)}}if(xe)return oe=oe(L),xe=q===""?"."+me(L,0):q,K(oe)?(ve="",xe!=null&&(ve=xe.replace(te,"$&/")+"/"),P(oe,ne,ve,"",function(et){return et})):oe!=null&&(F(oe)&&(oe=R(oe,ve+(oe.key==null||L&&L.key===oe.key?"":(""+oe.key).replace(te,"$&/")+"/")+xe)),ne.push(oe)),1;xe=0;var Be=q===""?".":q+":";if(K(L))for(var Ie=0;Ie<L.length;Ie++)q=L[Ie],Ee=Be+me(q,Ie),xe+=P(q,ne,ve,Ee,oe);else if(Ie=M(L),typeof Ie=="function")for(L=Ie.call(L),Ie=0;!(q=L.next()).done;)q=q.value,Ee=Be+me(q,Ie++),xe+=P(q,ne,ve,Ee,oe);else if(Ee==="object"){if(typeof L.then=="function")return P(he(L),ne,ve,q,oe);throw ne=String(L),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return xe}function j(L,ne,ve){if(L==null)return L;var q=[],oe=0;return P(L,q,"","",function(Ee){return ne.call(ve,Ee,oe++)}),q}function Y(L){if(L._status===-1){var ne=L._result;ne=ne(),ne.then(function(ve){(L._status===0||L._status===-1)&&(L._status=1,L._result=ve)},function(ve){(L._status===0||L._status===-1)&&(L._status=2,L._result=ve)}),L._status===-1&&(L._status=0,L._result=ne)}if(L._status===1)return L._result.default;throw L._result}var Se=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Me={map:j,forEach:function(L,ne,ve){j(L,function(){ne.apply(this,arguments)},ve)},count:function(L){var ne=0;return j(L,function(){ne++}),ne},toArray:function(L){return j(L,function(ne){return ne})||[]},only:function(L){if(!F(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=y,rt.Children=Me,rt.Component=g,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=O,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,ne,ve){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var q=A({},L.props),oe=L.key;if(ne!=null)for(Ee in ne.key!==void 0&&(oe=""+ne.key),ne)!Z.call(ne,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&ne.ref===void 0||(q[Ee]=ne[Ee]);var Ee=arguments.length-2;if(Ee===1)q.children=ve;else if(1<Ee){for(var xe=Array(Ee),Be=0;Be<Ee;Be++)xe[Be]=arguments[Be+2];q.children=xe}return D(L.type,oe,q)},rt.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},rt.createElement=function(L,ne,ve){var q,oe={},Ee=null;if(ne!=null)for(q in ne.key!==void 0&&(Ee=""+ne.key),ne)Z.call(ne,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(oe[q]=ne[q]);var xe=arguments.length-2;if(xe===1)oe.children=ve;else if(1<xe){for(var Be=Array(xe),Ie=0;Ie<xe;Ie++)Be[Ie]=arguments[Ie+2];oe.children=Be}if(L&&L.defaultProps)for(q in xe=L.defaultProps,xe)oe[q]===void 0&&(oe[q]=xe[q]);return D(L,Ee,oe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:d,render:L}},rt.isValidElement=F,rt.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Y}},rt.memo=function(L,ne){return{$$typeof:p,type:L,compare:ne===void 0?null:ne}},rt.startTransition=function(L){var ne=B.T,ve={};B.T=ve;try{var q=L(),oe=B.S;oe!==null&&oe(ve,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(G,Se)}catch(Ee){Se(Ee)}finally{ne!==null&&ve.types!==null&&(ne.types=ve.types),B.T=ne}},rt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},rt.use=function(L){return B.H.use(L)},rt.useActionState=function(L,ne,ve){return B.H.useActionState(L,ne,ve)},rt.useCallback=function(L,ne){return B.H.useCallback(L,ne)},rt.useContext=function(L){return B.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,ne){return B.H.useDeferredValue(L,ne)},rt.useEffect=function(L,ne){return B.H.useEffect(L,ne)},rt.useEffectEvent=function(L){return B.H.useEffectEvent(L)},rt.useId=function(){return B.H.useId()},rt.useImperativeHandle=function(L,ne,ve){return B.H.useImperativeHandle(L,ne,ve)},rt.useInsertionEffect=function(L,ne){return B.H.useInsertionEffect(L,ne)},rt.useLayoutEffect=function(L,ne){return B.H.useLayoutEffect(L,ne)},rt.useMemo=function(L,ne){return B.H.useMemo(L,ne)},rt.useOptimistic=function(L,ne){return B.H.useOptimistic(L,ne)},rt.useReducer=function(L,ne,ve){return B.H.useReducer(L,ne,ve)},rt.useRef=function(L){return B.H.useRef(L)},rt.useState=function(L){return B.H.useState(L)},rt.useSyncExternalStore=function(L,ne,ve){return B.H.useSyncExternalStore(L,ne,ve)},rt.useTransition=function(){return B.H.useTransition()},rt.version="19.2.6",rt}var v_;function yd(){return v_||(v_=1,Vf.exports=Cx()),Vf.exports}var st=yd();const Rx=bx(st);var kf={exports:{}},wo={},Wf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function wx(){return y_||(y_=1,(function(o){function t(P,j){var Y=P.length;P.push(j);e:for(;0<Y;){var Se=Y-1>>>1,Me=P[Se];if(0<l(Me,j))P[Se]=j,P[Y]=Me,Y=Se;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],Y=P.pop();if(Y!==j){P[0]=Y;e:for(var Se=0,Me=P.length,L=Me>>>1;Se<L;){var ne=2*(Se+1)-1,ve=P[ne],q=ne+1,oe=P[q];if(0>l(ve,Y))q<Me&&0>l(oe,ve)?(P[Se]=oe,P[q]=Y,Se=q):(P[Se]=ve,P[ne]=Y,Se=ne);else if(q<Me&&0>l(oe,Y))P[Se]=oe,P[q]=Y,Se=q;else break e}}return j}function l(P,j){var Y=P.sortIndex-j.sortIndex;return Y!==0?Y:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,y=null,x=3,M=!1,E=!1,A=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function K(P){if(A=!1,w(P),!E)if(i(m)!==null)E=!0,G||(G=!0,le());else{var j=i(p);j!==null&&he(K,j.startTime-P)}}var G=!1,B=-1,Z=5,D=-1;function R(){return S?!0:!(o.unstable_now()-D<Z)}function F(){if(S=!1,G){var P=o.unstable_now();D=P;var j=!0;try{e:{E=!1,A&&(A=!1,z(B),B=-1),M=!0;var Y=x;try{t:{for(w(P),y=i(m);y!==null&&!(y.expirationTime>P&&R());){var Se=y.callback;if(typeof Se=="function"){y.callback=null,x=y.priorityLevel;var Me=Se(y.expirationTime<=P);if(P=o.unstable_now(),typeof Me=="function"){y.callback=Me,w(P),j=!0;break t}y===i(m)&&r(m),w(P)}else r(m);y=i(m)}if(y!==null)j=!0;else{var L=i(p);L!==null&&he(K,L.startTime-P),j=!1}}break e}finally{y=null,x=Y,M=!1}j=void 0}}finally{j?le():G=!1}}}var le;if(typeof O=="function")le=function(){O(F)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,me=te.port2;te.port1.onmessage=F,le=function(){me.postMessage(null)}}else le=function(){g(F,0)};function he(P,j){B=g(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var Y=x;x=j;try{return P()}finally{x=Y}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=x;x=P;try{return j()}finally{x=Y}},o.unstable_scheduleCallback=function(P,j,Y){var Se=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Se+Y:Se):Y=Se,P){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Y+Me,P={id:v++,callback:j,priorityLevel:P,startTime:Y,expirationTime:Me,sortIndex:-1},Y>Se?(P.sortIndex=Y,t(p,P),i(m)===null&&P===i(p)&&(A?(z(B),B=-1):A=!0,he(K,Y-Se))):(P.sortIndex=Me,t(m,P),E||M||(E=!0,G||(G=!0,le()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var j=x;return function(){var Y=x;x=j;try{return P.apply(this,arguments)}finally{x=Y}}}})(qf)),qf}var x_;function Dx(){return x_||(x_=1,Wf.exports=wx()),Wf.exports}var Xf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Ux(){if(S_)return bn;S_=1;var o=yd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},bn.flushSync=function(m){var p=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=v,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,y=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:y,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,y=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.6",bn}var M_;function Nx(){if(M_)return Xf.exports;M_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Xf.exports=Ux(),Xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function Lx(){if(E_)return wo;E_=1;var o=Dx(),t=yd(),i=Nx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,T=c.child;T;){if(T===a){_=!0,a=c,s=f;break}if(T===s){_=!0,s=c,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,s=c;break}if(T===s){_=!0,s=f,a=c;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case K:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case O:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var he=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Se=[],Me=-1;function L(e){return{current:e}}function ne(e){0>Me||(e.current=Se[Me],Se[Me]=null,Me--)}function ve(e,n){Me++,Se[Me]=e.current,e.current=n}var q=L(null),oe=L(null),Ee=L(null),xe=L(null);function Be(e,n){switch(ve(Ee,n),ve(oe,e),ve(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ig(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ig(n),e=Fg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(q),ve(q,e)}function Ie(){ne(q),ne(oe),ne(Ee)}function et(e){e.memoizedState!==null&&ve(xe,e);var n=q.current,a=Fg(n,e.type);n!==a&&(ve(oe,e),ve(q,a))}function Et(e){oe.current===e&&(ne(q),ne(oe)),xe.current===e&&(ne(xe),bo._currentValue=Y)}var lt,Ut;function U(e){if(lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);lt=n&&n[1]||"",Ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+e+Ut}var Te=!1;function Ae(e,n){if(!e||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(se){var ie=se}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(se){ie=se}e.call(_e.prototype)}}else{try{throw Error()}catch(se){ie=se}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(se){if(se&&ie&&typeof se.stack=="string")return[se.stack,ie.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var I=_.split(`
`),$=T.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===$.length)for(s=I.length-1,c=$.length-1;1<=s&&0<=c&&I[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==$[c]){var ue=`
`+I[s].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=s&&0<=c);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?U(a):""}function Qe(e,n){switch(e.tag){case 26:case 27:case 5:return U(e.type);case 16:return U("Lazy");case 13:return e.child!==n&&n!==null?U("Suspense Fallback"):U("Suspense");case 19:return U("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return U("Activity");default:return""}}function Fe(e){try{var n="",a=null;do n+=Qe(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var ct=Object.prototype.hasOwnProperty,Ge=o.unstable_scheduleCallback,N=o.unstable_cancelCallback,b=o.unstable_shouldYield,ee=o.unstable_requestPaint,de=o.unstable_now,be=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,je=o.unstable_UserBlockingPriority,Le=o.unstable_NormalPriority,He=o.unstable_LowPriority,_t=o.unstable_IdlePriority,Re=o.log,Ve=o.unstable_setDisableYieldValue,Je=null,Ze=null;function Pe(e){if(typeof Re=="function"&&Ve(e),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(Je,e)}catch{}}var nt=Math.clz32?Math.clz32:V,ut=Math.log,Pt=Math.LN2;function V(e){return e>>>=0,e===0?32:31-(ut(e)/Pt|0)|0}var we=256,ce=262144,ye=4194304;function De(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Oe(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=De(s):(_&=T,_!==0?c=De(_):a||(a=T&~e,a!==0&&(c=De(a))))):(T=s&~f,T!==0?c=De(T):_!==0?c=De(_):a||(a=s&~e,a!==0&&(c=De(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function it(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Yt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sn(){var e=ye;return ye<<=1,(ye&62914560)===0&&(ye=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hi(e,n,a,s,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(a=_&~a;0<a;){var ue=31-nt(a),_e=1<<ue;T[ue]=0,I[ue]=-1;var ie=$[ue];if(ie!==null)for($[ue]=null,ue=0;ue<ie.length;ue++){var se=ie[ue];se!==null&&(se.lane&=-536870913)}a&=~_e}s!==0&&Ps(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Ps(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-nt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Bs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-nt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Ai(e,n){var a=n&-n;return a=(a&42)!==0?1:ja(a),(a&(e.suspendedLanes|n))!==0?0:a}function ja(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Is(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:l_(e.type))}function Za(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var di=Math.random().toString(36).slice(2),Zt="__reactFiber$"+di,mn="__reactProps$"+di,Oi="__reactContainer$"+di,Fs="__reactEvents$"+di,Oc="__reactListeners$"+di,zc="__reactHandles$"+di,C="__reactResources$"+di,k="__reactMarker$"+di;function re(e){delete e[Zt],delete e[mn],delete e[Fs],delete e[Oc],delete e[zc]}function ae(e){var n=e[Zt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oi]||a[Zt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Xg(e);e!==null;){if(a=e[Zt])return a;e=Xg(e)}return n}e=a,a=e.parentNode}return null}function W(e){if(e=e[Zt]||e[Oi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ce(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ue(e){var n=e[C];return n||(n=e[C]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ne(e){e[k]=!0}var qe=new Set,at={};function tt(e,n){ke(e,n),ke(e+"Capture",n)}function ke(e,n){for(at[e]=n,e=0;e<n.length;e++)qe.add(n[e])}var Mt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lt={},Bt={};function Mn(e){return ct.call(Bt,e)?!0:ct.call(Lt,e)?!1:Mt.test(e)?Bt[e]=!0:(Lt[e]=!0,!1)}function xt(e,n,a){if(Mn(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function on(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ln(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ca(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gn(e){if(!e._valueTracker){var n=Ln(e)?"checked":"value";e._valueTracker=ca(e,n,""+e[n])}}function ua(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ln(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Nt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $n=/[\n"\\]/g;function fn(e){return e.replace($n,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,s,c,f,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ot(n)):e.value!==""+ot(n)&&(e.value=""+ot(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?ei(e,_,ot(n)):a!=null?ei(e,_,ot(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ot(T):e.removeAttribute("name")}function pi(e,n,a,s,c,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){gn(e);return}a=a!=null?""+ot(a):"",n=n!=null?""+ot(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),gn(e)}function ei(e,n,a){n==="number"&&Nt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function zi(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Ld(e,n,a){if(n!=null&&(n=""+ot(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ot(a):""}function Od(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(he(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ot(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),gn(e)}function Rr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var yv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||yv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&zd(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&zd(e,f,n[f])}function Pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return Sv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var Bc=null;function Ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function Bd(e){var n=W(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;e:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[mn]||null;if(!c)throw Error(r(90));En(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&ua(s)}break e;case"textarea":Ld(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&zi(e,!!a.multiple,n,!1)}}}var Fc=!1;function Id(e,n,a){if(Fc)return e(n,a);Fc=!0;try{var s=e(n);return s}finally{if(Fc=!1,(wr!==null||Dr!==null)&&(Dl(),wr&&(n=wr,e=Dr,Dr=wr=null,Bd(n),e)))for(n=0;n<e.length;n++)Bd(e[n])}}function Hs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[mn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Bi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Hc=!1}var fa=null,Gc=null,Wo=null;function Fd(){if(Wo)return Wo;var e,n=Gc,a=n.length,s,c="value"in fa?fa.value:fa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return Wo=c.slice(e,1<s?1-s:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function Hd(){return!1}function On(e){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Hd,this.isPropagationStopped=Hd,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=On(Qa),Vs=y({},Qa,{view:0,detail:0}),Mv=On(Vs),Vc,kc,ks,jo=y({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ks&&(ks&&e.type==="mousemove"?(Vc=e.screenX-ks.screenX,kc=e.screenY-ks.screenY):kc=Vc=0,ks=e),Vc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),Gd=On(jo),Ev=y({},jo,{dataTransfer:0}),bv=On(Ev),Tv=y({},Vs,{relatedTarget:0}),Wc=On(Tv),Av=y({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=On(Av),Rv=y({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wv=On(Rv),Dv=y({},Qa,{data:0}),Vd=On(Dv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lv[e])?!!n[e]:!1}function qc(){return Ov}var zv=y({},Vs,{key:function(e){if(e.key){var n=Uv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pv=On(zv),Bv=y({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=On(Bv),Iv=y({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),Fv=On(Iv),Hv=y({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=On(Hv),Vv=y({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=On(Vv),Wv=y({},Qa,{newState:0,oldState:0}),qv=On(Wv),Xv=[9,13,27,32],Xc=Bi&&"CompositionEvent"in window,Ws=null;Bi&&"documentMode"in document&&(Ws=document.documentMode);var Yv=Bi&&"TextEvent"in window&&!Ws,Wd=Bi&&(!Xc||Ws&&8<Ws&&11>=Ws),qd=" ",Xd=!1;function Yd(e,n){switch(e){case"keyup":return Xv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function jv(e,n){switch(e){case"compositionend":return jd(n);case"keypress":return n.which!==32?null:(Xd=!0,qd);case"textInput":return e=n.data,e===qd&&Xd?null:e;default:return null}}function Zv(e,n){if(Ur)return e==="compositionend"||!Xc&&Yd(e,n)?(e=Fd(),Wo=Gc=fa=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wd&&n.locale!=="ko"?null:n.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qv[e.type]:n==="textarea"}function Qd(e,n,a,s){wr?Dr?Dr.push(s):Dr=[s]:wr=s,n=Bl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var qs=null,Xs=null;function Kv(e){Ng(e,0)}function Zo(e){var n=Ce(e);if(ua(n))return e}function Kd(e,n){if(e==="change")return n}var Jd=!1;if(Bi){var Yc;if(Bi){var jc="oninput"in document;if(!jc){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),jc=typeof $d.oninput=="function"}Yc=jc}else Yc=!1;Jd=Yc&&(!document.documentMode||9<document.documentMode)}function ep(){qs&&(qs.detachEvent("onpropertychange",tp),Xs=qs=null)}function tp(e){if(e.propertyName==="value"&&Zo(Xs)){var n=[];Qd(n,Xs,e,Ic(e)),Id(Kv,n)}}function Jv(e,n,a){e==="focusin"?(ep(),qs=n,Xs=a,qs.attachEvent("onpropertychange",tp)):e==="focusout"&&ep()}function $v(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(Xs)}function ey(e,n){if(e==="click")return Zo(n)}function ty(e,n){if(e==="input"||e==="change")return Zo(n)}function ny(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:ny;function Ys(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ct.call(n,c)||!Vn(e[c],n[c]))return!1}return!0}function np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ip(e,n){var a=np(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=np(a)}}function ap(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ap(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Nt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Nt(e.document)}return n}function Zc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var iy=Bi&&"documentMode"in document&&11>=document.documentMode,Nr=null,Qc=null,js=null,Kc=!1;function sp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Nr==null||Nr!==Nt(s)||(s=Nr,"selectionStart"in s&&Zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Ys(js,s)||(js=s,s=Bl(Qc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Nr)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Jc={},op={};Bi&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ja(e){if(Jc[e])return Jc[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return Jc[e]=n[a];return e}var lp=Ja("animationend"),cp=Ja("animationiteration"),up=Ja("animationstart"),ay=Ja("transitionrun"),ry=Ja("transitionstart"),sy=Ja("transitioncancel"),fp=Ja("transitionend"),hp=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function mi(e,n){hp.set(e,n),tt(n,[e])}var Qo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ti=[],Or=0,eu=0;function Ko(){for(var e=Or,n=eu=Or=0;n<e;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&dp(a,c,f)}}function Jo(e,n,a,s){ti[Or++]=e,ti[Or++]=n,ti[Or++]=a,ti[Or++]=s,eu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function tu(e,n,a,s){return Jo(e,n,a,s),$o(e)}function $a(e,n){return Jo(e,null,null,n),$o(e)}function dp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-nt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(e){if(50<_o)throw _o=0,ff=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function oy(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,s){return new oy(e,n,a,s)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function pp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function el(e,n,a,s,c,f){var _=0;if(s=e,typeof e=="function")nu(e)&&(_=1);else if(typeof e=="string")_=hx(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=kn(31,a,n,c),e.elementType=D,e.lanes=f,e;case A:return er(a.children,c,f,n);case S:_=8,c|=24;break;case g:return e=kn(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case K:return e=kn(13,a,n,c),e.elementType=K,e.lanes=f,e;case G:return e=kn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:_=10;break e;case z:_=9;break e;case w:_=11;break e;case B:_=14;break e;case Z:_=16,s=null;break e}_=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=kn(_,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function er(e,n,a,s){return e=kn(7,e,s,n),e.lanes=a,e}function iu(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function mp(e){var n=kn(18,null,null,0);return n.stateNode=e,n}function au(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var gp=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=gp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Fe(n)},gp.set(e,n),n)}return{value:e,source:n,stack:Fe(n)}}var Pr=[],Br=0,tl=null,Zs=0,ii=[],ai=0,ha=null,Ci=1,Ri="";function Fi(e,n){Pr[Br++]=Zs,Pr[Br++]=tl,tl=e,Zs=n}function _p(e,n,a){ii[ai++]=Ci,ii[ai++]=Ri,ii[ai++]=ha,ha=e;var s=Ci;e=Ri;var c=32-nt(s)-1;s&=~(1<<c),a+=1;var f=32-nt(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Ci=1<<32-nt(n)+c|a<<c|s,Ri=f+e}else Ci=1<<f|a<<c|s,Ri=e}function ru(e){e.return!==null&&(Fi(e,1),_p(e,1,0))}function su(e){for(;e===tl;)tl=Pr[--Br],Pr[Br]=null,Zs=Pr[--Br],Pr[Br]=null;for(;e===ha;)ha=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null,Ci=ii[--ai],ii[ai]=null}function vp(e,n){ii[ai++]=Ci,ii[ai++]=Ri,ii[ai++]=ha,Ci=n.id,Ri=n.overflow,ha=e}var _n=null,Wt=null,St=!1,da=null,ri=!1,ou=Error(r(519));function pa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(ni(n,e)),ou}function yp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[Zt]=e,n[mn]=s,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)gt(yo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),pi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Od(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Pg(n.textContent,a)?(s.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),s.onScroll!=null&&gt("scroll",n),s.onScrollEnd!=null&&gt("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||pa(e,!0)}function xp(e){for(_n=e.return;_n;)switch(_n.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:_n=_n.return}}function Ir(e){if(e!==_n)return!1;if(!St)return xp(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Af(e.type,e.memoizedProps)),a=!a),a&&Wt&&pa(e),xp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=qg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=qg(e)}else n===27?(n=Wt,Ra(e.type)?(e=Uf,Uf=null,Wt=e):Wt=n):Wt=_n?oi(e.stateNode.nextSibling):null;return!0}function tr(){Wt=_n=null,St=!1}function lu(){var e=da;return e!==null&&(In===null?In=e:In.push.apply(In,e),da=null),e}function Qs(e){da===null?da=[e]:da.push(e)}var cu=L(null),nr=null,Hi=null;function ma(e,n,a){ve(cu,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=cu.current,ne(cu)}function uu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function fu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),uu(f.return,a,e),s||(_=null);break e}f=T.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),uu(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Fr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=c.type;Vn(c.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(c===xe.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}c=c.return}e!==null&&fu(n,e,a,s),n.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ir(e){nr=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vn(e){return Sp(nr,e)}function il(e,n){return nr===null&&ir(e),Sp(e,n)}function Sp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(r(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var ly=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},cy=o.unstable_scheduleCallback,uy=o.unstable_NormalPriority,en={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new ly,data:new Map,refCount:0}}function Ks(e){e.refCount--,e.refCount===0&&cy(uy,function(){e.controller.abort()})}var Js=null,du=0,Hr=0,Gr=null;function fy(e,n){if(Js===null){var a=Js=[];du=0,Hr=_f(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return du++,n.then(Mp,Mp),n}function Mp(){if(--du===0&&Js!==null){Gr!==null&&(Gr.status="fulfilled");var e=Js;Js=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function hy(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ep=P.S;P.S=function(e,n){sg=de(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fy(e,n),Ep!==null&&Ep(e,n)};var ar=L(null);function pu(){var e=ar.current;return e!==null?e:kt.pooledCache}function al(e,n){n===null?ve(ar,ar.current):ve(ar,n.pool)}function bp(){var e=pu();return e===null?null:{parent:en._currentValue,pool:e}}var Vr=Error(r(460)),mu=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function Tp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ap(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rp(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rp(e),e}throw sr=n,Vr}}function rr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(sr=a,Vr):a}}var sr=null;function Cp(){if(sr===null)throw Error(r(459));var e=sr;return sr=null,e}function Rp(e){if(e===Vr||e===rl)throw Error(r(483))}var kr=null,$s=0;function ol(e){var n=$s;return $s+=1,kr===null&&(kr=[]),Ap(kr,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ll(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function wp(e){function n(X,H){if(e){var J=X.deletions;J===null?(X.deletions=[H],X.flags|=16):J.push(H)}}function a(X,H){if(!e)return null;for(;H!==null;)n(X,H),H=H.sibling;return null}function s(X){for(var H=new Map;X!==null;)X.key!==null?H.set(X.key,X):H.set(X.index,X),X=X.sibling;return H}function c(X,H){return X=Ii(X,H),X.index=0,X.sibling=null,X}function f(X,H,J){return X.index=J,e?(J=X.alternate,J!==null?(J=J.index,J<H?(X.flags|=67108866,H):J):(X.flags|=67108866,H)):(X.flags|=1048576,H)}function _(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function T(X,H,J,pe){return H===null||H.tag!==6?(H=iu(J,X.mode,pe),H.return=X,H):(H=c(H,J),H.return=X,H)}function I(X,H,J,pe){var Ke=J.type;return Ke===A?ue(X,H,J.props.children,pe,J.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&rr(Ke)===H.type)?(H=c(H,J.props),eo(H,J),H.return=X,H):(H=el(J.type,J.key,J.props,null,X.mode,pe),eo(H,J),H.return=X,H)}function $(X,H,J,pe){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=au(J,X.mode,pe),H.return=X,H):(H=c(H,J.children||[]),H.return=X,H)}function ue(X,H,J,pe,Ke){return H===null||H.tag!==7?(H=er(J,X.mode,pe,Ke),H.return=X,H):(H=c(H,J),H.return=X,H)}function _e(X,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=iu(""+H,X.mode,J),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return J=el(H.type,H.key,H.props,null,X.mode,J),eo(J,H),J.return=X,J;case E:return H=au(H,X.mode,J),H.return=X,H;case Z:return H=rr(H),_e(X,H,J)}if(he(H)||le(H))return H=er(H,X.mode,J,null),H.return=X,H;if(typeof H.then=="function")return _e(X,ol(H),J);if(H.$$typeof===O)return _e(X,il(X,H),J);ll(X,H)}return null}function ie(X,H,J,pe){var Ke=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ke!==null?null:T(X,H,""+J,pe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Ke?I(X,H,J,pe):null;case E:return J.key===Ke?$(X,H,J,pe):null;case Z:return J=rr(J),ie(X,H,J,pe)}if(he(J)||le(J))return Ke!==null?null:ue(X,H,J,pe,null);if(typeof J.then=="function")return ie(X,H,ol(J),pe);if(J.$$typeof===O)return ie(X,H,il(X,J),pe);ll(X,J)}return null}function se(X,H,J,pe,Ke){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return X=X.get(J)||null,T(H,X,""+pe,Ke);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case M:return X=X.get(pe.key===null?J:pe.key)||null,I(H,X,pe,Ke);case E:return X=X.get(pe.key===null?J:pe.key)||null,$(H,X,pe,Ke);case Z:return pe=rr(pe),se(X,H,J,pe,Ke)}if(he(pe)||le(pe))return X=X.get(J)||null,ue(H,X,pe,Ke,null);if(typeof pe.then=="function")return se(X,H,J,ol(pe),Ke);if(pe.$$typeof===O)return se(X,H,J,il(H,pe),Ke);ll(H,pe)}return null}function We(X,H,J,pe){for(var Ke=null,Ct=null,Ye=H,ht=H=0,yt=null;Ye!==null&&ht<J.length;ht++){Ye.index>ht?(yt=Ye,Ye=null):yt=Ye.sibling;var Rt=ie(X,Ye,J[ht],pe);if(Rt===null){Ye===null&&(Ye=yt);break}e&&Ye&&Rt.alternate===null&&n(X,Ye),H=f(Rt,H,ht),Ct===null?Ke=Rt:Ct.sibling=Rt,Ct=Rt,Ye=yt}if(ht===J.length)return a(X,Ye),St&&Fi(X,ht),Ke;if(Ye===null){for(;ht<J.length;ht++)Ye=_e(X,J[ht],pe),Ye!==null&&(H=f(Ye,H,ht),Ct===null?Ke=Ye:Ct.sibling=Ye,Ct=Ye);return St&&Fi(X,ht),Ke}for(Ye=s(Ye);ht<J.length;ht++)yt=se(Ye,X,ht,J[ht],pe),yt!==null&&(e&&yt.alternate!==null&&Ye.delete(yt.key===null?ht:yt.key),H=f(yt,H,ht),Ct===null?Ke=yt:Ct.sibling=yt,Ct=yt);return e&&Ye.forEach(function(La){return n(X,La)}),St&&Fi(X,ht),Ke}function $e(X,H,J,pe){if(J==null)throw Error(r(151));for(var Ke=null,Ct=null,Ye=H,ht=H=0,yt=null,Rt=J.next();Ye!==null&&!Rt.done;ht++,Rt=J.next()){Ye.index>ht?(yt=Ye,Ye=null):yt=Ye.sibling;var La=ie(X,Ye,Rt.value,pe);if(La===null){Ye===null&&(Ye=yt);break}e&&Ye&&La.alternate===null&&n(X,Ye),H=f(La,H,ht),Ct===null?Ke=La:Ct.sibling=La,Ct=La,Ye=yt}if(Rt.done)return a(X,Ye),St&&Fi(X,ht),Ke;if(Ye===null){for(;!Rt.done;ht++,Rt=J.next())Rt=_e(X,Rt.value,pe),Rt!==null&&(H=f(Rt,H,ht),Ct===null?Ke=Rt:Ct.sibling=Rt,Ct=Rt);return St&&Fi(X,ht),Ke}for(Ye=s(Ye);!Rt.done;ht++,Rt=J.next())Rt=se(Ye,X,ht,Rt.value,pe),Rt!==null&&(e&&Rt.alternate!==null&&Ye.delete(Rt.key===null?ht:Rt.key),H=f(Rt,H,ht),Ct===null?Ke=Rt:Ct.sibling=Rt,Ct=Rt);return e&&Ye.forEach(function(Ex){return n(X,Ex)}),St&&Fi(X,ht),Ke}function Ht(X,H,J,pe){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var Ke=J.key;H!==null;){if(H.key===Ke){if(Ke=J.type,Ke===A){if(H.tag===7){a(X,H.sibling),pe=c(H,J.props.children),pe.return=X,X=pe;break e}}else if(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Z&&rr(Ke)===H.type){a(X,H.sibling),pe=c(H,J.props),eo(pe,J),pe.return=X,X=pe;break e}a(X,H);break}else n(X,H);H=H.sibling}J.type===A?(pe=er(J.props.children,X.mode,pe,J.key),pe.return=X,X=pe):(pe=el(J.type,J.key,J.props,null,X.mode,pe),eo(pe,J),pe.return=X,X=pe)}return _(X);case E:e:{for(Ke=J.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(X,H.sibling),pe=c(H,J.children||[]),pe.return=X,X=pe;break e}else{a(X,H);break}else n(X,H);H=H.sibling}pe=au(J,X.mode,pe),pe.return=X,X=pe}return _(X);case Z:return J=rr(J),Ht(X,H,J,pe)}if(he(J))return We(X,H,J,pe);if(le(J)){if(Ke=le(J),typeof Ke!="function")throw Error(r(150));return J=Ke.call(J),$e(X,H,J,pe)}if(typeof J.then=="function")return Ht(X,H,ol(J),pe);if(J.$$typeof===O)return Ht(X,H,il(X,J),pe);ll(X,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(X,H.sibling),pe=c(H,J),pe.return=X,X=pe):(a(X,H),pe=iu(J,X.mode,pe),pe.return=X,X=pe),_(X)):a(X,H)}return function(X,H,J,pe){try{$s=0;var Ke=Ht(X,H,J,pe);return kr=null,Ke}catch(Ye){if(Ye===Vr||Ye===rl)throw Ye;var Ct=kn(29,Ye,null,X.mode);return Ct.lanes=pe,Ct.return=X,Ct}finally{}}}var or=wp(!0),Dp=wp(!1),ga=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Dt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=$o(e),dp(e,null,a),n}return Jo(e,s,n,a),$o(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Bs(e,a)}}function vu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var yu=!1;function no(){if(yu){var e=Gr;if(e!==null)throw e}}function io(e,n,a,s){yu=!1;var c=e.updateQueue;ga=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,$=I.next;I.next=null,_===null?f=$:_.next=$,_=I;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,T=ue.lastBaseUpdate,T!==_&&(T===null?ue.firstBaseUpdate=$:T.next=$,ue.lastBaseUpdate=I))}if(f!==null){var _e=c.baseState;_=0,ue=$=I=null,T=f;do{var ie=T.lane&-536870913,se=ie!==T.lane;if(se?(vt&ie)===ie:(s&ie)===ie){ie!==0&&ie===Hr&&(yu=!0),ue!==null&&(ue=ue.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var We=e,$e=T;ie=n;var Ht=a;switch($e.tag){case 1:if(We=$e.payload,typeof We=="function"){_e=We.call(Ht,_e,ie);break e}_e=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=$e.payload,ie=typeof We=="function"?We.call(Ht,_e,ie):We,ie==null)break e;_e=y({},_e,ie);break e;case 2:ga=!0}}ie=T.callback,ie!==null&&(e.flags|=64,se&&(e.flags|=8192),se=c.callbacks,se===null?c.callbacks=[ie]:se.push(ie))}else se={lane:ie,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ue===null?($=ue=se,I=_e):ue=ue.next=se,_|=ie;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;se=T,T=se.next,se.next=null,c.lastBaseUpdate=se,c.shared.pending=null}}while(!0);ue===null&&(I=_e),c.baseState=I,c.firstBaseUpdate=$,c.lastBaseUpdate=ue,f===null&&(c.shared.lanes=0),Ea|=_,e.lanes=_,e.memoizedState=_e}}function Up(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Np(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Up(a[e],n)}var Wr=L(null),cl=L(0);function Lp(e,n){e=Qi,ve(cl,e),ve(Wr,n),Qi=e|n.baseLanes}function xu(){ve(cl,Qi),ve(Wr,Wr.current)}function Su(){Qi=cl.current,ne(Wr),ne(cl)}var Wn=L(null),si=null;function ya(e){var n=e.alternate;ve(Jt,Jt.current&1),ve(Wn,e),si===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(si=e)}function Mu(e){ve(Jt,Jt.current),ve(Wn,e),si===null&&(si=e)}function Op(e){e.tag===22?(ve(Jt,Jt.current),ve(Wn,e),si===null&&(si=e)):xa()}function xa(){ve(Jt,Jt.current),ve(Wn,Wn.current)}function qn(e){ne(Wn),si===e&&(si=null),ne(Jt)}var Jt=L(0);function ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wf(a)||Df(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,ft=null,It=null,tn=null,fl=!1,qr=!1,lr=!1,hl=0,ao=0,Xr=null,dy=0;function Qt(){throw Error(r(321))}function Eu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function bu(e,n,a,s,c,f){return Vi=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?_m:Fu,lr=!1,f=a(s,c),lr=!1,qr&&(f=Pp(n,a,s,c)),zp(e),f}function zp(e){P.H=oo;var n=It!==null&&It.next!==null;if(Vi=0,tn=It=ft=null,fl=!1,ao=0,Xr=null,n)throw Error(r(300));e===null||nn||(e=e.dependencies,e!==null&&nl(e)&&(nn=!0))}function Pp(e,n,a,s){ft=e;var c=0;do{if(qr&&(Xr=null),ao=0,qr=!1,25<=c)throw Error(r(301));if(c+=1,tn=It=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=vm,f=n(a,s)}while(qr);return f}function py(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(It!==null?It.memoizedState:null)!==e&&(ft.flags|=1024),n}function Tu(){var e=hl!==0;return hl=0,e}function Au(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Cu(e){if(fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fl=!1}Vi=0,tn=It=ft=null,qr=!1,ao=hl=0,Xr=null}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ft.memoizedState=tn=e:tn=tn.next=e,tn}function $t(){if(It===null){var e=ft.alternate;e=e!==null?e.memoizedState:null}else e=It.next;var n=tn===null?ft.memoizedState:tn.next;if(n!==null)tn=n,It=e;else{if(e===null)throw ft.alternate===null?Error(r(467)):Error(r(310));It=e,e={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},tn===null?ft.memoizedState=tn=e:tn=tn.next=e}return tn}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=ao;return ao+=1,Xr===null&&(Xr=[]),e=Ap(Xr,e,n),n=ft,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?_m:Fu),e}function pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===O)return vn(e)}throw Error(r(438,String(e)))}function Ru(e){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ft.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=R;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function ml(e){var n=$t();return wu(n,It,e)}function wu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=_=null,I=null,$=n,ue=!1;do{var _e=$.lane&-536870913;if(_e!==$.lane?(vt&_e)===_e:(Vi&_e)===_e){var ie=$.revertLane;if(ie===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_e===Hr&&(ue=!0);else if((Vi&ie)===ie){$=$.next,ie===Hr&&(ue=!0);continue}else _e={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(T=I=_e,_=f):I=I.next=_e,ft.lanes|=ie,Ea|=ie;_e=$.action,lr&&a(f,_e),f=$.hasEagerState?$.eagerState:a(f,_e)}else ie={lane:_e,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(T=I=ie,_=f):I=I.next=ie,ft.lanes|=_e,Ea|=_e;$=$.next}while($!==null&&$!==n);if(I===null?_=f:I.next=T,!Vn(f,e.memoizedState)&&(nn=!0,ue&&(a=Gr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Du(e){var n=$t(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);Vn(f,n.memoizedState)||(nn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Bp(e,n,a){var s=ft,c=$t(),f=St;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Vn((It||c).memoizedState,a);if(_&&(c.memoizedState=a,nn=!0),c=c.queue,Lu(Hp.bind(null,s,c,e),[e]),c.getSnapshot!==n||_||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,Yr(9,{destroy:void 0},Fp.bind(null,s,c,a,n),null),kt===null)throw Error(r(349));f||(Vi&127)!==0||Ip(s,n,a)}return a}function Ip(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=dl(),ft.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Fp(e,n,a,s){n.value=a,n.getSnapshot=s,Gp(n)&&Vp(e)}function Hp(e,n,a){return a(function(){Gp(n)&&Vp(e)})}function Gp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function Vp(e){var n=$a(e,2);n!==null&&Fn(n,e,2)}function Uu(e){var n=wn();if(typeof e=="function"){var a=e;if(e=a(),lr){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function kp(e,n,a,s){return e.baseState=a,wu(e,It,typeof s=="function"?s:ki)}function my(e,n,a,s,c){if(vl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var T=a(c,s),I=P.S;I!==null&&I(_,T),qp(e,n,T)}catch($){Nu(e,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(c,s),qp(e,n,f)}catch($){Nu(e,n,$)}}function qp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Xp(e,n,s)},function(s){return Nu(e,n,s)}):Xp(e,n,a)}function Xp(e,n,a){n.status="fulfilled",n.value=a,Yp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wp(e,a)))}function Nu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yp(n),n=n.next;while(n!==s)}e.action=null}function Yp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function jp(e,n){return n}function Zp(e,n){if(St){var a=kt.formState;if(a!==null){e:{var s=ft;if(St){if(Wt){t:{for(var c=Wt,f=ri;c.nodeType!==8;){if(!f){c=null;break t}if(c=oi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Wt=oi(c.nextSibling),s=c.data==="F!";break e}}pa(s)}s=!1}s&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jp,lastRenderedState:n},a.queue=s,a=pm.bind(null,ft,s),s.dispatch=a,s=Uu(!1),f=Iu.bind(null,ft,!1,s.queue),s=wn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=my.bind(null,ft,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Qp(e){var n=$t();return Kp(n,It,e)}function Kp(e,n,a){if(n=wu(e,n,jp)[0],e=ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(_){throw _===Vr?rl:_}else s=n;n=$t();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,Yr(9,{destroy:void 0},gy.bind(null,c,a),null)),[s,f,e]}function gy(e,n){e.action=n}function Jp(e){var n=$t(),a=It;if(a!==null)return Kp(n,a,e);$t(),n=n.memoizedState,a=$t();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Yr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ft.updateQueue,n===null&&(n=dl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function $p(){return $t().memoizedState}function gl(e,n,a,s){var c=wn();ft.flags|=e,c.memoizedState=Yr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(e,n,a,s){var c=$t();s=s===void 0?null:s;var f=c.memoizedState.inst;It!==null&&s!==null&&Eu(s,It.memoizedState.deps)?c.memoizedState=Yr(n,f,a,s):(ft.flags|=e,c.memoizedState=Yr(1|n,f,a,s))}function em(e,n){gl(8390656,8,e,n)}function Lu(e,n){_l(2048,8,e,n)}function _y(e){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=dl(),ft.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function tm(e){var n=$t().memoizedState;return _y({ref:n,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function nm(e,n){return _l(4,2,e,n)}function im(e,n){return _l(4,4,e,n)}function am(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rm(e,n,a){a=a!=null?a.concat([e]):null,_l(4,4,am.bind(null,n,e),a)}function Ou(){}function sm(e,n){var a=$t();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Eu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function om(e,n){var a=$t();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Eu(n,s[1]))return s[0];if(s=e(),lr){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[s,n],s}function zu(e,n,a){return a===void 0||(Vi&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=lg(),ft.lanes|=e,Ea|=e,a)}function lm(e,n,a,s){return Vn(a,n)?a:Wr.current!==null?(e=zu(e,a,s),Vn(e,n)||(nn=!0),e):(Vi&42)===0||(Vi&1073741824)!==0&&(vt&261930)===0?(nn=!0,e.memoizedState=a):(e=lg(),ft.lanes|=e,Ea|=e,n)}function cm(e,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var _=P.T,T={};P.T=T,Iu(e,!1,n,a);try{var I=c(),$=P.S;if($!==null&&$(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ue=hy(I,s);so(e,n,ue,jn(e))}else so(e,n,s,jn(e))}catch(_e){so(e,n,{then:function(){},status:"rejected",reason:_e},jn())}finally{j.p=f,_!==null&&T.types!==null&&(_.types=T.types),P.T=_}}function vy(){}function Pu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=um(e).queue;cm(e,c,n,Y,a===null?vy:function(){return fm(e),a(s)})}function um(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function fm(e){var n=um(e);n.next===null&&(n=e.alternate.memoizedState),so(e,n.next.queue,{},jn())}function Bu(){return vn(bo)}function hm(){return $t().memoizedState}function dm(){return $t().memoizedState}function yy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=_a(a);var s=va(n,e,a);s!==null&&(Fn(s,n,a),to(s,n,a)),n={cache:hu()},e.payload=n;return}n=n.return}}function xy(e,n,a){var s=jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(e)?mm(n,a):(a=tu(e,n,a,s),a!==null&&(Fn(a,e,s),gm(a,n,s)))}function pm(e,n,a){var s=jn();so(e,n,a,s)}function so(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(e))mm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(c.hasEagerState=!0,c.eagerState=T,Vn(T,_))return Jo(e,n,c,0),kt===null&&Ko(),!1}catch{}finally{}if(a=tu(e,n,c,s),a!==null)return Fn(a,e,s),gm(a,n,s),!0}return!1}function Iu(e,n,a,s){if(s={lane:2,revertLane:_f(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(n)throw Error(r(479))}else n=tu(e,a,s,2),n!==null&&Fn(n,e,2)}function vl(e){var n=e.alternate;return e===ft||n!==null&&n===ft}function mm(e,n){qr=fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function gm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Bs(e,a)}}var oo={readContext:vn,use:pl,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useLayoutEffect:Qt,useInsertionEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useSyncExternalStore:Qt,useId:Qt,useHostTransitionStatus:Qt,useFormState:Qt,useActionState:Qt,useOptimistic:Qt,useMemoCache:Qt,useCacheRefresh:Qt};oo.useEffectEvent=Qt;var _m={readContext:vn,use:pl,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:vn,useEffect:em,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,gl(4194308,4,am.bind(null,n,e),a)},useLayoutEffect:function(e,n){return gl(4194308,4,e,n)},useInsertionEffect:function(e,n){gl(4,2,e,n)},useMemo:function(e,n){var a=wn();n=n===void 0?null:n;var s=e();if(lr){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=wn();if(a!==void 0){var c=a(n);if(lr){Pe(!0);try{a(n)}finally{Pe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=xy.bind(null,ft,e),[s.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:function(e){e=Uu(e);var n=e.queue,a=pm.bind(null,ft,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(e,n){var a=wn();return zu(a,e,n)},useTransition:function(){var e=Uu(!1);return e=cm.bind(null,ft,e.queue,!0,!1),wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ft,c=wn();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(vt&127)!==0||Ip(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,em(Hp.bind(null,s,f,e),[e]),s.flags|=2048,Yr(9,{destroy:void 0},Fp.bind(null,s,f,a,n),null),a},useId:function(){var e=wn(),n=kt.identifierPrefix;if(St){var a=Ri,s=Ci;a=(s&~(1<<32-nt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Bu,useFormState:Zp,useActionState:Zp,useOptimistic:function(e){var n=wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Iu.bind(null,ft,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ru,useCacheRefresh:function(){return wn().memoizedState=yy.bind(null,ft)},useEffectEvent:function(e){var n=wn(),a={impl:e};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Fu={readContext:vn,use:pl,useCallback:sm,useContext:vn,useEffect:Lu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:ml,useRef:$p,useState:function(){return ml(ki)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=$t();return lm(a,It.memoizedState,e,n)},useTransition:function(){var e=ml(ki)[0],n=$t().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Bp,useId:hm,useHostTransitionStatus:Bu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e,n){var a=$t();return kp(a,It,e,n)},useMemoCache:Ru,useCacheRefresh:dm};Fu.useEffectEvent=tm;var vm={readContext:vn,use:pl,useCallback:sm,useContext:vn,useEffect:Lu,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Du,useRef:$p,useState:function(){return Du(ki)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=$t();return It===null?zu(a,e,n):lm(a,It.memoizedState,e,n)},useTransition:function(){var e=Du(ki)[0],n=$t().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Bp,useId:hm,useHostTransitionStatus:Bu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=$t();return It!==null?kp(a,It,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:dm};vm.useEffectEvent=tm;function Hu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=jn(),c=_a(s);c.payload=n,a!=null&&(c.callback=a),n=va(e,c,s),n!==null&&(Fn(n,e,s),to(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=jn(),c=_a(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=va(e,c,s),n!==null&&(Fn(n,e,s),to(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),s=_a(a);s.tag=2,n!=null&&(s.callback=n),n=va(e,s,a),n!==null&&(Fn(n,e,a),to(n,e,a))}};function ym(e,n,a,s,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(c,f):!0}function xm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function cr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Sm(e){Qo(e)}function Mm(e){console.error(e)}function Em(e){Qo(e)}function yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function bm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(e,n)},a}function Tm(e){return e=_a(e),e.tag=3,e}function Am(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){bm(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){bm(n,a,s),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Sy(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fr(n,a,c,!0),a=Wn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Ul():a.alternate===null&&Kt===0&&(Kt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),pf(e,s,c)),!1;case 22:return a.flags|=65536,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),pf(e,s,c)),!1}throw Error(r(435,a.tag))}return pf(e,s,c),Ul(),!1}if(St)return n=Wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ou&&(e=Error(r(422),{cause:s}),Qs(ni(e,a)))):(s!==ou&&(n=Error(r(423),{cause:s}),Qs(ni(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ni(s,a),c=Vu(e.stateNode,s,c),vu(e,c),Kt!==4&&(Kt=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),go===null?go=[f]:go.push(f),Kt!==4&&(Kt=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Vu(a.stateNode,s,e),vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Tm(c),Am(c,e,a,s),vu(a,c),!1}a=a.return}while(a!==null);return!1}var ku=Error(r(461)),nn=!1;function yn(e,n,a,s){n.child=e===null?Dp(n,null,a,s):or(n,e.child,a,s)}function Cm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var T in s)T!=="ref"&&(_[T]=s[T])}else _=s;return ir(n),s=bu(e,n,a,_,f,c),T=Tu(),e!==null&&!nn?(Au(e,n,c),Wi(e,n,c)):(St&&T&&ru(n),n.flags|=1,yn(e,n,s,c),n.child)}function Rm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wm(e,n,f,s,c)):(e=el(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ku(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(_,s)&&e.ref===n.ref)return Wi(e,n,c)}return n.flags|=1,e=Ii(f,s),e.ref=n.ref,e.return=n,n.child=e}function wm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ys(f,s)&&e.ref===n.ref)if(nn=!1,n.pendingProps=s=f,Ku(e,c))(e.flags&131072)!==0&&(nn=!0);else return n.lanes=e.lanes,Wi(e,n,c)}return Wu(e,n,a,s,c)}function Dm(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Um(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(n,f!==null?f.cachePool:null),f!==null?Lp(n,f):xu(),Op(n);else return s=n.lanes=536870912,Um(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(al(n,f.cachePool),Lp(n,f),xa(),n.memoizedState=null):(e!==null&&al(n,null),xu(),xa());return yn(e,n,c,a),n.child}function lo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(e,n,a,s,c){var f=pu();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&al(n,null),xu(),Op(n),e!==null&&Fr(e,n,s,!0),n.childLanes=c,null}function xl(e,n){return n=Ml({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Nm(e,n,a){return or(n,e.child,null,a),e=xl(n,n.pendingProps),e.flags|=2,qn(n),n.memoizedState=null,e}function My(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(s.mode==="hidden")return e=xl(n,s),n.lanes=536870912,lo(null,e);if(Mu(n),(e=Wt)?(e=Wg(e,ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=mp(e),a.return=n,n.child=a,_n=n,Wt=null)):e=null,e===null)throw pa(n);return n.lanes=536870912,null}return xl(n,s)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Mu(n),c)if(n.flags&256)n.flags&=-257,n=Nm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(nn||Fr(e,n,a,!1),c=(a&e.childLanes)!==0,nn||c){if(s=kt,s!==null&&(_=Ai(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,$a(e,_),Fn(s,e,_),ku;Ul(),n=Nm(e,n,a)}else e=f.treeContext,Wt=oi(_.nextSibling),_n=n,St=!0,da=null,ri=!1,e!==null&&vp(n,e),n=xl(n,s),n.flags|=4096;return n}return e=Ii(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Sl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Wu(e,n,a,s,c){return ir(n),a=bu(e,n,a,s,void 0,c),s=Tu(),e!==null&&!nn?(Au(e,n,c),Wi(e,n,c)):(St&&s&&ru(n),n.flags|=1,yn(e,n,a,c),n.child)}function Lm(e,n,a,s,c,f){return ir(n),n.updateQueue=null,a=Pp(n,s,a,c),zp(e),s=Tu(),e!==null&&!nn?(Au(e,n,f),Wi(e,n,f)):(St&&s&&ru(n),n.flags|=1,yn(e,n,a,f),n.child)}function Om(e,n,a,s,c){if(ir(n),n.stateNode===null){var f=zr,_=a.contextType;typeof _=="object"&&_!==null&&(f=vn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},gu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?vn(_):zr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Hu(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Gu.enqueueReplaceState(f,f.state,null),io(n,s,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=cr(a,T);f.props=I;var $=f.context,ue=a.contextType;_=zr,typeof ue=="object"&&ue!==null&&(_=vn(ue));var _e=a.getDerivedStateFromProps;ue=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==_)&&xm(n,f,s,_),ga=!1;var ie=n.memoizedState;f.state=ie,io(n,s,f,c),no(),$=n.memoizedState,T||ie!==$||ga?(typeof _e=="function"&&(Hu(n,a,_e,s),$=n.memoizedState),(I=ga||ym(n,a,I,s,ie,$,_))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=_,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,_u(e,n),_=n.memoizedProps,ue=cr(a,_),f.props=ue,_e=n.pendingProps,ie=f.context,$=a.contextType,I=zr,typeof $=="object"&&$!==null&&(I=vn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_e||ie!==I)&&xm(n,f,s,I),ga=!1,ie=n.memoizedState,f.state=ie,io(n,s,f,c),no();var se=n.memoizedState;_!==_e||ie!==se||ga||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof T=="function"&&(Hu(n,a,T,s),se=n.memoizedState),(ue=ga||ym(n,a,ue,s,ie,se,I)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,se,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,se,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=se),f.props=s,f.state=se,f.context=I,s=ue):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Sl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=or(n,e.child,null,c),n.child=or(n,null,a,c)):yn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Wi(e,n,c),e}function zm(e,n,a,s){return tr(),n.flags|=256,yn(e,n,a,s),n.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(e){return{baseLanes:e,cachePool:bp()}}function Yu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Yn),e}function Pm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(Jt.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(c?ya(n):xa(),(e=Wt)?(e=Wg(e,ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ha!==null?{id:Ci,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=mp(e),a.return=n,n.child=a,_n=n,Wt=null)):e=null,e===null)throw pa(n);return Df(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(xa(),c=n.mode,T=Ml({mode:"hidden",children:T},c),s=er(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Xu(a),s.childLanes=Yu(e,_,a),n.memoizedState=qu,lo(null,s)):(ya(n),ju(n,T))}var I=e.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=Zu(e,n,a)):n.memoizedState!==null?(xa(),n.child=e.child,n.flags|=128,n=null):(xa(),T=s.fallback,c=n.mode,s=Ml({mode:"visible",children:s.children},c),T=er(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,or(n,e.child,null,a),s=n.child,s.memoizedState=Xu(a),s.childLanes=Yu(e,_,a),n.memoizedState=qu,n=lo(null,s));else if(ya(n),Df(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var $=_.dgst;_=$,s=Error(r(419)),s.stack="",s.digest=_,Qs({value:s,source:null,stack:null}),n=Zu(e,n,a)}else if(nn||Fr(e,n,a,!1),_=(a&e.childLanes)!==0,nn||_){if(_=kt,_!==null&&(s=Ai(_,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,$a(e,s),Fn(_,e,s),ku;wf(T)||Ul(),n=Zu(e,n,a)}else wf(T)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Wt=oi(T.nextSibling),_n=n,St=!0,da=null,ri=!1,e!==null&&vp(n,e),n=ju(n,s.children),n.flags|=4096);return n}return c?(xa(),T=s.fallback,c=n.mode,I=e.child,$=I.sibling,s=Ii(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,$!==null?T=Ii($,T):(T=er(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,lo(null,s),s=n.child,T=e.child.memoizedState,T===null?T=Xu(a):(c=T.cachePool,c!==null?(I=en._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=bp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=Yu(e,_,a),n.memoizedState=qu,lo(e.child,s)):(ya(n),a=e.child,e=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function ju(e,n){return n=Ml({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ml(e,n){return e=kn(22,e,null,n),e.lanes=0,e}function Zu(e,n,a){return or(n,e.child,null,a),e=ju(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Bm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),uu(e.return,n,a)}function Qu(e,n,a,s,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Im(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=Jt.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,ve(Jt,_),yn(e,n,s,a),s=St?Zs:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bm(e,a,n);else if(e.tag===19)Bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&ul(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Qu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&ul(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Qu(n,!0,a,null,f,s);break;case"together":Qu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ii(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ii(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ku(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function Ey(e,n,a){switch(n.tag){case 3:Be(n,n.stateNode.containerInfo),ma(n,en,e.memoizedState.cache),tr();break;case 27:case 5:et(n);break;case 4:Be(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Pm(e,n,a):(ya(n),e=Wi(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Im(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ve(Jt,Jt.current),s)break;return null;case 22:return n.lanes=0,Dm(e,n,a,n.pendingProps);case 24:ma(n,en,e.memoizedState.cache)}return Wi(e,n,a)}function Fm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)nn=!0;else{if(!Ku(e,a)&&(n.flags&128)===0)return nn=!1,Ey(e,n,a);nn=(e.flags&131072)!==0}else nn=!1,St&&(n.flags&1048576)!==0&&_p(n,Zs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=rr(n.elementType),n.type=e,typeof e=="function")nu(e)?(s=cr(e,s),n.tag=1,n=Om(null,n,e,s,a)):(n.tag=0,n=Wu(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===w){n.tag=11,n=Cm(null,n,e,s,a);break e}else if(c===B){n.tag=14,n=Rm(null,n,e,s,a);break e}}throw n=me(e)||e,Error(r(306,n,""))}}return n;case 0:return Wu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=cr(s,n.pendingProps),Om(e,n,s,c,a);case 3:e:{if(Be(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,_u(e,n),io(n,s,null,a);var _=n.memoizedState;if(s=_.cache,ma(n,en,s),s!==f.cache&&fu(n,[en],a,!0),no(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=zm(e,n,s,a);break e}else if(s!==c){c=ni(Error(r(424)),n),Qs(c),n=zm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Wt=oi(e.firstChild),_n=n,St=!0,da=null,ri=!0,a=Dp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(tr(),s===c){n=Wi(e,n,a);break e}yn(e,n,s,a)}n=n.child}return n;case 26:return Sl(e,n),e===null?(a=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,e=n.pendingProps,s=Il(Ee.current).createElement(a),s[Zt]=n,s[mn]=e,xn(s,a,e),Ne(s),n.stateNode=s):n.memoizedState=Qg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return et(n),e===null&&St&&(s=n.stateNode=Yg(n.type,n.pendingProps,Ee.current),_n=n,ri=!0,c=Wt,Ra(n.type)?(Uf=c,Wt=oi(s.firstChild)):Wt=c),yn(e,n,n.pendingProps.children,a),Sl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((c=s=Wt)&&(s=$y(s,n.type,n.pendingProps,ri),s!==null?(n.stateNode=s,_n=n,Wt=oi(s.firstChild),ri=!1,c=!0):c=!1),c||pa(n)),et(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,s=f.children,Af(c,f)?s=null:_!==null&&Af(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=bu(e,n,py,null,null,a),bo._currentValue=c),Sl(e,n),yn(e,n,s,a),n.child;case 6:return e===null&&St&&((e=a=Wt)&&(a=ex(a,n.pendingProps,ri),a!==null?(n.stateNode=a,_n=n,Wt=null,e=!0):e=!1),e||pa(n)),null;case 13:return Pm(e,n,a);case 4:return Be(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=or(n,null,s,a):yn(e,n,s,a),n.child;case 11:return Cm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ma(n,n.type,s.value),yn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ir(n),c=vn(c),s=s(c),n.flags|=1,yn(e,n,s,a),n.child;case 14:return Rm(e,n,n.type,n.pendingProps,a);case 15:return wm(e,n,n.type,n.pendingProps,a);case 19:return Im(e,n,a);case 31:return My(e,n,a);case 22:return Dm(e,n,a,n.pendingProps);case 24:return ir(n),s=vn(en),e===null?(c=pu(),c===null&&(c=kt,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},gu(n),ma(n,en,c)):((e.lanes&a)!==0&&(_u(e,n),io(n,null,null,a),no()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ma(n,en,s)):(s=f.cache,ma(n,en,s),s!==c.cache&&fu(n,[en],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(e){e.flags|=4}function Ju(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(hg())e.flags|=8192;else throw sr=sl,mu}else e.flags&=-16777217}function Hm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n))if(hg())e.flags|=8192;else throw sr=sl,mu}function El(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?sn():536870912,e.lanes|=n,Kr|=n)}function co(e,n){if(!St)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function by(e,n,a){var s=n.pendingProps;switch(su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(en),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lu())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(qi(n),f!==null?(qt(n),Hm(n,f)):(qt(n),Ju(n,c,null,s,a))):f?f!==e.memoizedState?(qi(n),qt(n),Hm(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&qi(n),qt(n),Ju(n,c,e,s,a)),null;case 27:if(Et(n),a=Ee.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}e=q.current,Ir(n)?yp(n):(e=Yg(c,s,a),n.stateNode=e,qi(n))}return qt(n),null;case 5:if(Et(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(f=q.current,Ir(n))yp(n);else{var _=Il(Ee.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[Zt]=n,f[mn]=s;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(xn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&qi(n)}}return qt(n),Ju(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Ee.current,Ir(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=_n,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[Zt]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Pg(e.nodeValue,a)),e||pa(n,!0)}else e=Il(e).createTextNode(s),e[Zt]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Ir(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Zt]=n}else tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ir(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Zt]=n}else tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),El(n,n.updateQueue),qt(n),null);case 4:return Ie(),e===null&&Sf(n.stateNode.containerInfo),qt(n),null;case 10:return Gi(n.type),qt(n),null;case 19:if(ne(Jt),s=n.memoizedState,s===null)return qt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)co(s,!1);else{if(Kt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ul(e),f!==null){for(n.flags|=128,co(s,!1),e=f.updateQueue,n.updateQueue=e,El(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)pp(a,e),a=a.sibling;return ve(Jt,Jt.current&1|2),St&&Fi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&de()>Rl&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304)}else{if(!c)if(e=ul(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,El(n,e),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!St)return qt(n),null}else 2*de()-s.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,c=!0,co(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,a=Jt.current,ve(Jt,c?a&1|2:a&1),St&&Fi(n,s.treeForkCount),e):(qt(n),null);case 22:case 23:return qn(n),Su(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ne(ar),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(en),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ty(e,n){switch(su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(en),Ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Et(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(r(340));tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(Jt),null;case 4:return Ie(),null;case 10:return Gi(n.type),null;case 22:case 23:return qn(n),Su(),e!==null&&ne(ar),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(en),null;case 25:return null;default:return null}}function Gm(e,n){switch(su(n),n.tag){case 3:Gi(en),Ie();break;case 26:case 27:case 5:Et(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:ne(Jt);break;case 10:Gi(n.type);break;case 22:case 23:qn(n),Su(),e!==null&&ne(ar);break;case 24:Gi(en)}}function uo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(T){zt(n,n.return,T)}}function Sa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var _=s.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,c=n;var I=a,$=T;try{$()}catch(ue){zt(c,I,ue)}}}s=s.next}while(s!==f)}}catch(ue){zt(n,n.return,ue)}}function Vm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Np(n,a)}catch(s){zt(e,e.return,s)}}}function km(e,n,a){a.props=cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){zt(e,n,s)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){zt(e,n,c)}}function wi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function Wm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function $u(e,n,a){try{var s=e.stateNode;Yy(s,e.type,a,n),s[mn]=n}catch(c){zt(e,e.return,c)}}function qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(tf(e,n,a),e=e.sibling;e!==null;)tf(e,n,a),e=e.sibling}function bl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bl(e,n,a),e=e.sibling;e!==null;)bl(e,n,a),e=e.sibling}function Xm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);xn(n,s,a),n[Zt]=e,n[mn]=a}catch(f){zt(e,e.return,f)}}var Xi=!1,an=!1,nf=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,hn=null;function Ay(e,n){if(e=e.containerInfo,bf=ql,e=rp(e),Zc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,T=-1,I=-1,$=0,ue=0,_e=e,ie=null;t:for(;;){for(var se;_e!==a||c!==0&&_e.nodeType!==3||(T=_+c),_e!==f||s!==0&&_e.nodeType!==3||(I=_+s),_e.nodeType===3&&(_+=_e.nodeValue.length),(se=_e.firstChild)!==null;)ie=_e,_e=se;for(;;){if(_e===e)break t;if(ie===a&&++$===c&&(T=_),ie===f&&++ue===s&&(I=_),(se=_e.nextSibling)!==null)break;_e=ie,ie=_e.parentNode}_e=se}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:e,selectionRange:a},ql=!1,hn=n;hn!==null;)if(n=hn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,hn=e;else for(;hn!==null;){switch(n=hn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var We=cr(a.type,c);e=s.getSnapshotBeforeUpdate(We,f),s.__reactInternalSnapshotBeforeUpdate=e}catch($e){zt(a,a.return,$e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Rf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,hn=e;break}hn=n.return}}function jm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&uo(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){zt(a,a.return,_)}else{var c=cr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){zt(a,a.return,_)}}s&64&&Vm(a),s&512&&fo(a,a.return);break;case 3:if(ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Np(e,n)}catch(_){zt(a,a.return,_)}}break;case 27:n===null&&s&4&&Xm(a);case 26:case 5:ji(e,a),n===null&&s&4&&Wm(a),s&512&&fo(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),s&4&&Km(e,a);break;case 13:ji(e,a),s&4&&Jm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zy.bind(null,a),tx(e,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||an,c=Xi;var f=an;Xi=s,(an=n)&&!f?Zi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Xi=c,an=f}break;case 30:break;default:ji(e,a)}}function Zm(e){var n=e.alternate;n!==null&&(e.alternate=null,Zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&re(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var jt=null,zn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)Qm(e,n,a),a=a.sibling}function Qm(e,n,a){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:an||wi(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||wi(a,n);var s=jt,c=zn;Ra(a.type)&&(jt=a.stateNode,zn=!1),Yi(e,n,a),So(a.stateNode),jt=s,zn=c;break;case 5:an||wi(a,n);case 6:if(s=jt,c=zn,jt=null,Yi(e,n,a),jt=s,zn=c,jt!==null)if(zn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{jt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:jt!==null&&(zn?(e=jt,Vg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rs(e)):Vg(jt,a.stateNode));break;case 4:s=jt,c=zn,jt=a.stateNode.containerInfo,zn=!0,Yi(e,n,a),jt=s,zn=c;break;case 0:case 11:case 14:case 15:Sa(2,a,n),an||Sa(4,a,n),Yi(e,n,a);break;case 1:an||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&km(a,n,s)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:an=(s=an)||a.memoizedState!==null,Yi(e,n,a),an=s;break;default:Yi(e,n,a)}}function Km(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(a){zt(n,n.return,a)}}}function Jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(a){zt(n,n.return,a)}}function Cy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ym),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ym),n;default:throw Error(r(435,e.tag))}}function Tl(e,n){var a=Cy(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Py.bind(null,e,s);s.then(c,c)}})}function Pn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,_=n,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){jt=T.stateNode,zn=!1;break e}break;case 5:jt=T.stateNode,zn=!1;break e;case 3:case 4:jt=T.stateNode.containerInfo,zn=!0;break e}T=T.return}if(jt===null)throw Error(r(160));Qm(f,_,c),jt=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,e),n=n.sibling}var gi=null;function $m(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pn(n,e),Bn(e),s&4&&(Sa(3,e,e.return),uo(3,e),Sa(5,e,e.return));break;case 1:Pn(n,e),Bn(e),s&512&&(an||a===null||wi(a,a.return)),s&64&&Xi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=gi;if(Pn(n,e),Bn(e),s&512&&(an||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[k]||f[Zt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),xn(f,s,a),f[Zt]=e,Ne(f),s=f;break e;case"link":var _=$g("link","href",c).get(s+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(f=_[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}f=c.createElement(s),xn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=$g("meta","content",c).get(s+(a.content||""))){for(T=0;T<_.length;T++)if(f=_[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}f=c.createElement(s),xn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Zt]=e,Ne(f),s=f}e.stateNode=s}else e_(c,e.type,e.stateNode);else e.stateNode=Jg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?e_(c,e.type,e.stateNode):Jg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&$u(e,e.memoizedProps,a.memoizedProps)}break;case 27:Pn(n,e),Bn(e),s&512&&(an||a===null||wi(a,a.return)),a!==null&&s&4&&$u(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Pn(n,e),Bn(e),s&512&&(an||a===null||wi(a,a.return)),e.flags&32){c=e.stateNode;try{Rr(c,"")}catch(We){zt(e,e.return,We)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,$u(e,c,a!==null?a.memoizedProps:c)),s&1024&&(nf=!0);break;case 6:if(Pn(n,e),Bn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(We){zt(e,e.return,We)}}break;case 3:if(Gl=null,c=gi,gi=Fl(n.containerInfo),Pn(n,e),gi=c,Bn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(We){zt(e,e.return,We)}nf&&(nf=!1,eg(e));break;case 4:s=gi,gi=Fl(e.stateNode.containerInfo),Pn(n,e),Bn(e),gi=s;break;case 12:Pn(n,e),Bn(e);break;case 31:Pn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Tl(e,s)));break;case 13:Pn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=de()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Tl(e,s)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,$=Xi,ue=an;if(Xi=$||c,an=ue||I,Pn(n,e),an=ue,Xi=$,Bn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Xi||an||ur(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var _e=I.memoizedProps.style,ie=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(We){zt(I,I.return,We)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(We){zt(I,I.return,We)}}}else if(n.tag===18){if(a===null){I=n;try{var se=I.stateNode;c?kg(se,!0):kg(I.stateNode,!1)}catch(We){zt(I,I.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Tl(e,a))));break;case 19:Pn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Tl(e,s)));break;case 30:break;case 21:break;default:Pn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(qm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=ef(e);bl(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Rr(_,""),a.flags&=-33);var T=ef(e);bl(e,T,_);break;case 3:case 4:var I=a.stateNode.containerInfo,$=ef(e);tf(e,$,I);break;default:throw Error(r(161))}}catch(ue){zt(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jm(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),ur(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),ur(n);break;case 27:So(n.stateNode);case 26:case 5:wi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function Zi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),uo(4,f);break;case 1:if(Zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){zt(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Up(I[c],T)}catch($){zt(s,s.return,$)}}a&&_&64&&Vm(f),fo(f,f.return);break;case 27:Xm(f);case 26:case 5:Zi(c,f,a),a&&s===null&&_&4&&Wm(f),fo(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&_&4&&Km(c,f);break;case 13:Zi(c,f,a),a&&_&4&&Jm(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),fo(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ks(a))}function rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e))}function _i(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tg(e,n,a,s),n=n.sibling}function tg(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,s),c&2048&&uo(9,n);break;case 1:_i(e,n,a,s);break;case 3:_i(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e)));break;case 12:if(c&2048){_i(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,T=f.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){zt(n,n.return,I)}}else _i(e,n,a,s);break;case 31:_i(e,n,a,s);break;case 13:_i(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?_i(e,n,a,s):ho(e,n):f._visibility&2?_i(e,n,a,s):(f._visibility|=2,jr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&af(_,n);break;case 24:_i(e,n,a,s),c&2048&&rf(n.alternate,n);break;default:_i(e,n,a,s)}}function jr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,T=a,I=s,$=_.flags;switch(_.tag){case 0:case 11:case 15:jr(f,_,T,I,c),uo(8,_);break;case 23:break;case 22:var ue=_.stateNode;_.memoizedState!==null?ue._visibility&2?jr(f,_,T,I,c):ho(f,_):(ue._visibility|=2,jr(f,_,T,I,c)),c&&$&2048&&af(_.alternate,_);break;case 24:jr(f,_,T,I,c),c&&$&2048&&rf(_.alternate,_);break;default:jr(f,_,T,I,c)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:ho(a,s),c&2048&&af(s.alternate,s);break;case 24:ho(a,s),c&2048&&rf(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function Zr(e,n,a){if(e.subtreeFlags&po)for(e=e.child;e!==null;)ng(e,n,a),e=e.sibling}function ng(e,n,a){switch(e.tag){case 26:Zr(e,n,a),e.flags&po&&e.memoizedState!==null&&dx(a,gi,e.memoizedState,e.memoizedProps);break;case 5:Zr(e,n,a);break;case 3:case 4:var s=gi;gi=Fl(e.stateNode.containerInfo),Zr(e,n,a),gi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=po,po=16777216,Zr(e,n,a),po=s):Zr(e,n,a));break;default:Zr(e,n,a)}}function ig(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];hn=s,rg(s,e)}ig(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ag(e),e=e.sibling}function ag(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Al(e)):mo(e);break;default:mo(e)}}function Al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];hn=s,rg(s,e)}ig(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}e=e.sibling}}function rg(e,n){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ks(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,hn=s;else e:for(a=e;hn!==null;){s=hn;var c=s.sibling,f=s.return;if(Zm(s),s===a){hn=null;break e}if(c!==null){c.return=f,hn=c;break e}hn=f}}}var Ry={getCacheForType:function(e){var n=vn(en),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return vn(en).controller.signal}},wy=typeof WeakMap=="function"?WeakMap:Map,Dt=0,kt=null,mt=null,vt=0,Ot=0,Xn=null,Ma=!1,Qr=!1,sf=!1,Qi=0,Kt=0,Ea=0,fr=0,of=0,Yn=0,Kr=0,go=null,In=null,lf=!1,Cl=0,sg=0,Rl=1/0,wl=null,ba=null,ln=0,Ta=null,Jr=null,Ki=0,cf=0,uf=null,og=null,_o=0,ff=null;function jn(){return(Dt&2)!==0&&vt!==0?vt&-vt:P.T!==null?_f():Is()}function lg(){if(Yn===0)if((vt&536870912)===0||St){var e=ce;ce<<=1,(ce&3932160)===0&&(ce=262144),Yn=e}else Yn=536870912;return e=Wn.current,e!==null&&(e.flags|=32),Yn}function Fn(e,n,a){(e===kt&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)&&($r(e,0),Aa(e,vt,Yn,!1)),pn(e,a),((Dt&2)===0||e!==kt)&&(e===kt&&((Dt&2)===0&&(fr|=a),Kt===4&&Aa(e,vt,Yn,!1)),Di(e))}function cg(e,n,a){if((Dt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||it(e,n),c=s?Ny(e,n):df(e,n,!0),f=s;do{if(c===0){Qr&&!s&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Dy(a)){c=df(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var T=e;c=go;var I=T.current.memoizedState.isDehydrated;if(I&&($r(T,_).flags|=256),_=df(T,_,!1),_!==2){if(sf&&!I){T.errorRecoveryDisabledLanes|=f,fr|=f,c=4;break e}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){$r(e,0),Aa(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Aa(s,n,Yn,!Ma);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Cl+300-de(),10<c)){if(Aa(s,n,Yn,!Ma),Oe(s,0,!0)!==0)break e;Ki=n,s.timeoutHandle=Hg(ug.bind(null,s,a,In,wl,lf,n,Yn,fr,Kr,Ma,f,"Throttled",-0,0),c);break e}ug(s,a,In,wl,lf,n,Yn,fr,Kr,Ma,f,null,-0,0)}}break}while(!0);Di(e)}function ug(e,n,a,s,c,f,_,T,I,$,ue,_e,ie,se){if(e.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},ng(n,f,_e);var We=(f&62914560)===f?Cl-de():(f&4194048)===f?sg-de():0;if(We=px(_e,We),We!==null){Ki=f,e.cancelPendingCommit=We(vg.bind(null,e,n,f,a,s,c,_,T,I,ue,_e,null,ie,se)),Aa(e,f,_,!$);return}}vg(e,n,f,a,s,c,_,T,I)}function Dy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,s){n&=~of,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-nt(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Ps(e,a,n)}function Dl(){return(Dt&6)===0?(vo(0),!1):!0}function hf(){if(mt!==null){if(Ot===0)var e=mt.return;else e=mt,Hi=nr=null,Cu(e),kr=null,$s=0,e=mt;for(;e!==null;)Gm(e.alternate,e),e=e.return;mt=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ki=0,hf(),kt=e,mt=a=Ii(e.current,null),vt=n,Ot=0,Xn=null,Ma=!1,Qr=it(e,n),sf=!1,Kr=Yn=of=fr=Ea=Kt=0,In=go=null,lf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-nt(s),f=1<<c;n|=e[c],s&=~f}return Qi=n,Ko(),a}function fg(e,n){ft=null,P.H=oo,n===Vr||n===rl?(n=Cp(),Ot=3):n===mu?(n=Cp(),Ot=4):Ot=n===ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,mt===null&&(Kt=1,yl(e,ni(n,e.current)))}function hg(){var e=Wn.current;return e===null?!0:(vt&4194048)===vt?si===null:(vt&62914560)===vt||(vt&536870912)!==0?e===si:!1}function dg(){var e=P.H;return P.H=oo,e===null?oo:e}function pg(){var e=P.A;return P.A=Ry,e}function Ul(){Kt=4,Ma||(vt&4194048)!==vt&&Wn.current!==null||(Qr=!0),(Ea&134217727)===0&&(fr&134217727)===0||kt===null||Aa(kt,vt,Yn,!1)}function df(e,n,a){var s=Dt;Dt|=2;var c=dg(),f=pg();(kt!==e||vt!==n)&&(wl=null,$r(e,n)),n=!1;var _=Kt;e:do try{if(Ot!==0&&mt!==null){var T=mt,I=Xn;switch(Ot){case 8:hf(),_=6;break e;case 3:case 2:case 9:case 6:Wn.current===null&&(n=!0);var $=Ot;if(Ot=0,Xn=null,es(e,T,I,$),a&&Qr){_=0;break e}break;default:$=Ot,Ot=0,Xn=null,es(e,T,I,$)}}Uy(),_=Kt;break}catch(ue){fg(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Hi=nr=null,Dt=s,P.H=c,P.A=f,mt===null&&(kt=null,vt=0,Ko()),_}function Uy(){for(;mt!==null;)mg(mt)}function Ny(e,n){var a=Dt;Dt|=2;var s=dg(),c=pg();kt!==e||vt!==n?(wl=null,Rl=de()+500,$r(e,n)):Qr=it(e,n);e:do try{if(Ot!==0&&mt!==null){n=mt;var f=Xn;t:switch(Ot){case 1:Ot=0,Xn=null,es(e,n,f,1);break;case 2:case 9:if(Tp(f)){Ot=0,Xn=null,gg(n);break}n=function(){Ot!==2&&Ot!==9||kt!==e||(Ot=7),Di(e)},f.then(n,n);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:Tp(f)?(Ot=0,Xn=null,gg(n)):(Ot=0,Xn=null,es(e,n,f,7));break;case 5:var _=null;switch(mt.tag){case 26:_=mt.memoizedState;case 5:case 27:var T=mt;if(_?t_(_):T.stateNode.complete){Ot=0,Xn=null;var I=T.sibling;if(I!==null)mt=I;else{var $=T.return;$!==null?(mt=$,Nl($)):mt=null}break t}}Ot=0,Xn=null,es(e,n,f,5);break;case 6:Ot=0,Xn=null,es(e,n,f,6);break;case 8:hf(),Kt=6;break e;default:throw Error(r(462))}}Ly();break}catch(ue){fg(e,ue)}while(!0);return Hi=nr=null,P.H=s,P.A=c,Dt=a,mt!==null?0:(kt=null,vt=0,Ko(),Kt)}function Ly(){for(;mt!==null&&!b();)mg(mt)}function mg(e){var n=Fm(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Nl(e):mt=n}function gg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Lm(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Lm(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Cu(n);default:Gm(a,n),n=mt=pp(n,Qi),n=Fm(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Nl(e):mt=n}function es(e,n,a,s){Hi=nr=null,Cu(n),kr=null,$s=0;var c=n.return;try{if(Sy(e,c,n,a,vt)){Kt=1,yl(e,ni(a,e.current)),mt=null;return}}catch(f){if(c!==null)throw mt=c,f;Kt=1,yl(e,ni(a,e.current)),mt=null;return}n.flags&32768?(St||s===1?e=!0:Qr||(vt&536870912)!==0?e=!1:(Ma=e=!0,(s===2||s===9||s===3||s===6)&&(s=Wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),_g(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){_g(n,Ma);return}e=n.return;var a=by(n.alternate,n,Qi);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=e}while(n!==null);Kt===0&&(Kt=5)}function _g(e,n){do{var a=Ty(e.alternate,e);if(a!==null){a.flags&=32767,mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){mt=e;return}mt=e=a}while(e!==null);Kt=6,mt=null}function vg(e,n,a,s,c,f,_,T,I){e.cancelPendingCommit=null;do Ll();while(ln!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=eu,hi(e,a,f,_,T,I),e===kt&&(mt=kt=null,vt=0),Jr=n,Ta=e,Ki=a,cf=f,uf=c,og=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,By(Le,function(){return Eg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=j.p,j.p=2,_=Dt,Dt|=4;try{Ay(e,n,a)}finally{Dt=_,j.p=c,P.T=s}}ln=1,yg(),xg(),Sg()}}function yg(){if(ln===1){ln=0;var e=Ta,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var c=Dt;Dt|=4;try{$m(n,e);var f=Tf,_=rp(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(_!==T&&T&&T.ownerDocument&&ap(T.ownerDocument.documentElement,T)){if(I!==null&&Zc(T)){var $=I.start,ue=I.end;if(ue===void 0&&(ue=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ue,T.value.length);else{var _e=T.ownerDocument||document,ie=_e&&_e.defaultView||window;if(ie.getSelection){var se=ie.getSelection(),We=T.textContent.length,$e=Math.min(I.start,We),Ht=I.end===void 0?$e:Math.min(I.end,We);!se.extend&&$e>Ht&&(_=Ht,Ht=$e,$e=_);var X=ip(T,$e),H=ip(T,Ht);if(X&&H&&(se.rangeCount!==1||se.anchorNode!==X.node||se.anchorOffset!==X.offset||se.focusNode!==H.node||se.focusOffset!==H.offset)){var J=_e.createRange();J.setStart(X.node,X.offset),se.removeAllRanges(),$e>Ht?(se.addRange(J),se.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),se.addRange(J))}}}}for(_e=[],se=T;se=se.parentNode;)se.nodeType===1&&_e.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var pe=_e[T];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}ql=!!bf,Tf=bf=null}finally{Dt=c,j.p=s,P.T=a}}e.current=n,ln=2}}function xg(){if(ln===2){ln=0;var e=Ta,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var c=Dt;Dt|=4;try{jm(e,n.alternate,n)}finally{Dt=c,j.p=s,P.T=a}}ln=3}}function Sg(){if(ln===4||ln===3){ln=0,ee();var e=Ta,n=Jr,a=Ki,s=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,Jr=Ta=null,Mg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ba=null),Cr(a),n=n.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=j.p,j.p=2,P.T=null;try{for(var f=e.onRecoverableError,_=0;_<s.length;_++){var T=s[_];f(T.value,{componentStack:T.stack})}}finally{P.T=n,j.p=c}}(Ki&3)!==0&&Ll(),Di(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===ff?_o++:(_o=0,ff=e):_o=0,vo(0)}}function Mg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ks(n)))}function Ll(){return yg(),xg(),Sg(),Eg()}function Eg(){if(ln!==5)return!1;var e=Ta,n=cf;cf=0;var a=Cr(Ki),s=P.T,c=j.p;try{j.p=32>a?32:a,P.T=null,a=uf,uf=null;var f=Ta,_=Ki;if(ln=0,Jr=Ta=null,Ki=0,(Dt&6)!==0)throw Error(r(331));var T=Dt;if(Dt|=4,ag(f.current),tg(f,f.current,_,a),Dt=T,vo(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Je,f)}catch{}return!0}finally{j.p=c,P.T=s,Mg(e,n)}}function bg(e,n,a){n=ni(a,n),n=Vu(e.stateNode,n,2),e=va(e,n,2),e!==null&&(pn(e,2),Di(e))}function zt(e,n,a){if(e.tag===3)bg(e,e,a);else for(;n!==null;){if(n.tag===3){bg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){e=ni(a,e),a=Tm(2),s=va(n,a,2),s!==null&&(Am(a,s,n,e),pn(s,2),Di(s));break}}n=n.return}}function pf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new wy;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(sf=!0,c.add(a),e=Oy.bind(null,e,n,a),n.then(e,e))}function Oy(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,kt===e&&(vt&a)===a&&(Kt===4||Kt===3&&(vt&62914560)===vt&&300>de()-Cl?(Dt&2)===0&&$r(e,0):of|=a,Kr===vt&&(Kr=0)),Di(e)}function Tg(e,n){n===0&&(n=sn()),e=$a(e,n),e!==null&&(pn(e,n),Di(e))}function zy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Tg(e,a)}function Py(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Tg(e,a)}function By(e,n){return Ge(e,n)}var Ol=null,ts=null,mf=!1,zl=!1,gf=!1,Ca=0;function Di(e){e!==ts&&e.next===null&&(ts===null?Ol=ts=e:ts=ts.next=e),zl=!0,mf||(mf=!0,Fy())}function vo(e,n){if(!gf&&zl){gf=!0;do for(var a=!1,s=Ol;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-nt(42|e)+1)-1,f&=c&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,wg(s,f))}else f=vt,f=Oe(s,s===kt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||it(s,f)||(a=!0,wg(s,f));s=s.next}while(a);gf=!1}}function Iy(){Ag()}function Ag(){zl=mf=!1;var e=0;Ca!==0&&Zy()&&(e=Ca);for(var n=de(),a=null,s=Ol;s!==null;){var c=s.next,f=Cg(s,n);f===0?(s.next=null,a===null?Ol=c:a.next=c,c===null&&(ts=a)):(a=s,(e!==0||(f&3)!==0)&&(zl=!0)),s=c}ln!==0&&ln!==5||vo(e),Ca!==0&&(Ca=0)}function Cg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-nt(f),T=1<<_,I=c[_];I===-1?((T&a)===0||(T&s)!==0)&&(c[_]=Yt(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=kt,a=vt,a=Oe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&N(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||it(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&N(s),Cr(a)){case 2:case 8:a=je;break;case 32:a=Le;break;case 268435456:a=_t;break;default:a=Le}return s=Rg.bind(null,e),a=Ge(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&N(s),e.callbackPriority=2,e.callbackNode=null,2}function Rg(e,n){if(ln!==0&&ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ll()&&e.callbackNode!==a)return null;var s=vt;return s=Oe(e,e===kt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(cg(e,s,n),Cg(e,de()),e.callbackNode!=null&&e.callbackNode===a?Rg.bind(null,e):null)}function wg(e,n){if(Ll())return null;cg(e,n,!0)}function Fy(){Ky(function(){(Dt&6)!==0?Ge(ge,Iy):Ag()})}function _f(){if(Ca===0){var e=Hr;e===0&&(e=we,we<<=1,(we&261888)===0&&(we=256)),Ca=e}return Ca}function Dg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function Ug(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Hy(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Dg((c[mn]||null).action),_=s.submitter;_&&(n=(n=_[mn]||null)?Dg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new Yo("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ca!==0){var I=_?Ug(c,_):new FormData(c);Pu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=_?Ug(c,_):new FormData(c),Pu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var vf=0;vf<$c.length;vf++){var yf=$c[vf],Gy=yf.toLowerCase(),Vy=yf[0].toUpperCase()+yf.slice(1);mi(Gy,"on"+Vy)}mi(lp,"onAnimationEnd"),mi(cp,"onAnimationIteration"),mi(up,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(ay,"onTransitionRun"),mi(ry,"onTransitionStart"),mi(sy,"onTransitionCancel"),mi(fp,"onTransitionEnd"),ke("onMouseEnter",["mouseout","mouseover"]),ke("onMouseLeave",["mouseout","mouseover"]),ke("onPointerEnter",["pointerout","pointerover"]),ke("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Ng(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var T=s[_],I=T.instance,$=T.currentTarget;if(T=T.listener,I!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(ue){Qo(ue)}c.currentTarget=null,f=I}else for(_=0;_<s.length;_++){if(T=s[_],I=T.instance,$=T.currentTarget,T=T.listener,I!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(ue){Qo(ue)}c.currentTarget=null,f=I}}}}function gt(e,n){var a=n[Fs];a===void 0&&(a=n[Fs]=new Set);var s=e+"__bubble";a.has(s)||(Lg(n,e,2,!1),a.add(s))}function xf(e,n,a){var s=0;n&&(s|=4),Lg(a,e,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Sf(e){if(!e[Pl]){e[Pl]=!0,qe.forEach(function(a){a!=="selectionchange"&&(ky.has(a)||xf(a,!1,e),xf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,xf("selectionchange",!1,n))}}function Lg(e,n,a,s){switch(l_(n)){case 2:var c=_x;break;case 8:c=vx;break;default:c=Pf}a=c.bind(null,n,a,e),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Mf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var T=s.stateNode.containerInfo;if(T===c)break;if(_===4)for(_=s.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;T!==null;){if(_=ae(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){s=f=_;continue e}T=T.parentNode}}s=s.return}Id(function(){var $=f,ue=Ic(a),_e=[];e:{var ie=hp.get(e);if(ie!==void 0){var se=Yo,We=e;switch(e){case"keypress":if(qo(a)===0)break e;case"keydown":case"keyup":se=Pv;break;case"focusin":We="focus",se=Wc;break;case"focusout":We="blur",se=Wc;break;case"beforeblur":case"afterblur":se=Wc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Fv;break;case lp:case cp:case up:se=Cv;break;case fp:se=Gv;break;case"scroll":case"scrollend":se=Mv;break;case"wheel":se=kv;break;case"copy":case"cut":case"paste":se=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=kd;break;case"toggle":case"beforetoggle":se=qv}var $e=(n&4)!==0,Ht=!$e&&(e==="scroll"||e==="scrollend"),X=$e?ie!==null?ie+"Capture":null:ie;$e=[];for(var H=$,J;H!==null;){var pe=H;if(J=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||J===null||X===null||(pe=Hs(H,X),pe!=null&&$e.push(xo(H,pe,J))),Ht)break;H=H.return}0<$e.length&&(ie=new se(ie,We,null,a,ue),_e.push({event:ie,listeners:$e}))}}if((n&7)===0){e:{if(ie=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",ie&&a!==Bc&&(We=a.relatedTarget||a.fromElement)&&(ae(We)||We[Oi]))break e;if((se||ie)&&(ie=ue.window===ue?ue:(ie=ue.ownerDocument)?ie.defaultView||ie.parentWindow:window,se?(We=a.relatedTarget||a.toElement,se=$,We=We?ae(We):null,We!==null&&(Ht=u(We),$e=We.tag,We!==Ht||$e!==5&&$e!==27&&$e!==6)&&(We=null)):(se=null,We=$),se!==We)){if($e=Gd,pe="onMouseLeave",X="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&($e=kd,pe="onPointerLeave",X="onPointerEnter",H="pointer"),Ht=se==null?ie:Ce(se),J=We==null?ie:Ce(We),ie=new $e(pe,H+"leave",se,a,ue),ie.target=Ht,ie.relatedTarget=J,pe=null,ae(ue)===$&&($e=new $e(X,H+"enter",We,a,ue),$e.target=J,$e.relatedTarget=Ht,pe=$e),Ht=pe,se&&We)t:{for($e=Wy,X=se,H=We,J=0,pe=X;pe;pe=$e(pe))J++;pe=0;for(var Ke=H;Ke;Ke=$e(Ke))pe++;for(;0<J-pe;)X=$e(X),J--;for(;0<pe-J;)H=$e(H),pe--;for(;J--;){if(X===H||H!==null&&X===H.alternate){$e=X;break t}X=$e(X),H=$e(H)}$e=null}else $e=null;se!==null&&Og(_e,ie,se,$e,!1),We!==null&&Ht!==null&&Og(_e,Ht,We,$e,!0)}}e:{if(ie=$?Ce($):window,se=ie.nodeName&&ie.nodeName.toLowerCase(),se==="select"||se==="input"&&ie.type==="file")var Ct=Kd;else if(Zd(ie))if(Jd)Ct=ty;else{Ct=$v;var Ye=Jv}else se=ie.nodeName,!se||se.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&Pc($.elementType)&&(Ct=Kd):Ct=ey;if(Ct&&(Ct=Ct(e,$))){Qd(_e,Ct,a,ue);break e}Ye&&Ye(e,ie,$),e==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&ei(ie,"number",ie.value)}switch(Ye=$?Ce($):window,e){case"focusin":(Zd(Ye)||Ye.contentEditable==="true")&&(Nr=Ye,Qc=$,js=null);break;case"focusout":js=Qc=Nr=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,sp(_e,a,ue);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":sp(_e,a,ue)}var ht;if(Xc)e:{switch(e){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Ur?Yd(e,a)&&(yt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Wd&&a.locale!=="ko"&&(Ur||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Ur&&(ht=Fd()):(fa=ue,Gc="value"in fa?fa.value:fa.textContent,Ur=!0)),Ye=Bl($,yt),0<Ye.length&&(yt=new Vd(yt,e,null,a,ue),_e.push({event:yt,listeners:Ye}),ht?yt.data=ht:(ht=jd(a),ht!==null&&(yt.data=ht)))),(ht=Yv?jv(e,a):Zv(e,a))&&(yt=Bl($,"onBeforeInput"),0<yt.length&&(Ye=new Vd("onBeforeInput","beforeinput",null,a,ue),_e.push({event:Ye,listeners:yt}),Ye.data=ht)),Hy(_e,e,$,a,ue)}Ng(_e,n)})}function xo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Bl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hs(e,a),c!=null&&s.unshift(xo(e,c,f)),c=Hs(e,n),c!=null&&s.push(xo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Wy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Og(e,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var T=a,I=T.alternate,$=T.stateNode;if(T=T.tag,I!==null&&I===s)break;T!==5&&T!==26&&T!==27||$===null||(I=$,c?($=Hs(a,f),$!=null&&_.unshift(xo(a,$,I))):c||($=Hs(a,f),$!=null&&_.push(xo(a,$,I)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var qy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function zg(e){return(typeof e=="string"?e:""+e).replace(qy,`
`).replace(Xy,"")}function Pg(e,n){return n=zg(n),zg(e)===n}function Ft(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Rr(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Rr(e,""+s);break;case"className":Xe(e,"class",s);break;case"tabIndex":Xe(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(e,a,s);break;case"style":Pd(e,s,f);break;case"data":if(n!=="object"){Xe(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ft(e,n,"name",c.name,c,null),Ft(e,n,"formEncType",c.formEncType,c,null),Ft(e,n,"formMethod",c.formMethod,c,null),Ft(e,n,"formTarget",c.formTarget,c,null)):(Ft(e,n,"encType",c.encType,c,null),Ft(e,n,"method",c.method,c,null),Ft(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ko(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":gt("beforetoggle",e),gt("toggle",e),xt(e,"popover",s);break;case"xlinkActuate":on(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":on(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":on(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":on(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":on(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":on(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":on(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":on(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":on(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":xt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xv.get(a)||a,xt(e,a,s))}}function Ef(e,n,a,s,c,f){switch(a){case"style":Pd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Rr(e,s):(typeof s=="number"||typeof s=="bigint")&&Rr(e,""+s);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):xt(e,a,s)}}}function xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,f,_,a,null)}}c&&Ft(e,n,"srcSet",a.srcSet,a,null),s&&Ft(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var T=f=_=c=null,I=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ue=a[s];if(ue!=null)switch(s){case"name":c=ue;break;case"type":_=ue;break;case"checked":I=ue;break;case"defaultChecked":$=ue;break;case"value":f=ue;break;case"defaultValue":T=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Ft(e,n,s,ue,a,null)}}pi(e,f,T,I,$,_,c,!1);return;case"select":gt("invalid",e),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":s=T;default:Ft(e,n,c,T,a,null)}n=f,a=_,e.multiple=!!s,n!=null?zi(e,!!s,n,!1):a!=null&&zi(e,!!s,a,!0);return;case"textarea":gt("invalid",e),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ft(e,n,_,T,a,null)}Od(e,s,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ft(e,n,I,s,a,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(s=0;s<yo.length;s++)gt(yo[s],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,$,s,a,null)}return;default:if(Pc(n)){for(ue in a)a.hasOwnProperty(ue)&&(s=a[ue],s!==void 0&&Ef(e,n,ue,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ft(e,n,T,s,a,null))}function Yy(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,T=null,I=null,$=null,ue=null;for(se in a){var _e=a[se];if(a.hasOwnProperty(se)&&_e!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=_e;default:s.hasOwnProperty(se)||Ft(e,n,se,null,s,_e)}}for(var ie in s){var se=s[ie];if(_e=a[ie],s.hasOwnProperty(ie)&&(se!=null||_e!=null))switch(ie){case"type":f=se;break;case"name":c=se;break;case"checked":$=se;break;case"defaultChecked":ue=se;break;case"value":_=se;break;case"defaultValue":T=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==_e&&Ft(e,n,ie,se,s,_e)}}En(e,_,T,I,$,ue,f,c);return;case"select":se=_=T=ie=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":se=I;default:s.hasOwnProperty(f)||Ft(e,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":ie=f;break;case"defaultValue":T=f;break;case"multiple":_=f;default:f!==I&&Ft(e,n,c,f,s,I)}n=T,a=_,s=se,ie!=null?zi(e,!!a,ie,!1):!!s!=!!a&&(n!=null?zi(e,!!a,n,!0):zi(e,!!a,a?[]:"",!1));return;case"textarea":se=ie=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ft(e,n,T,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":ie=c;break;case"defaultValue":se=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ft(e,n,_,c,s,f)}Ld(e,ie,se);return;case"option":for(var We in a)if(ie=a[We],a.hasOwnProperty(We)&&ie!=null&&!s.hasOwnProperty(We))switch(We){case"selected":e.selected=!1;break;default:Ft(e,n,We,null,s,ie)}for(I in s)if(ie=s[I],se=a[I],s.hasOwnProperty(I)&&ie!==se&&(ie!=null||se!=null))switch(I){case"selected":e.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Ft(e,n,I,ie,s,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)ie=a[$e],a.hasOwnProperty($e)&&ie!=null&&!s.hasOwnProperty($e)&&Ft(e,n,$e,null,s,ie);for($ in s)if(ie=s[$],se=a[$],s.hasOwnProperty($)&&ie!==se&&(ie!=null||se!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Ft(e,n,$,ie,s,se)}return;default:if(Pc(n)){for(var Ht in a)ie=a[Ht],a.hasOwnProperty(Ht)&&ie!==void 0&&!s.hasOwnProperty(Ht)&&Ef(e,n,Ht,void 0,s,ie);for(ue in s)ie=s[ue],se=a[ue],!s.hasOwnProperty(ue)||ie===se||ie===void 0&&se===void 0||Ef(e,n,ue,ie,s,se);return}}for(var X in a)ie=a[X],a.hasOwnProperty(X)&&ie!=null&&!s.hasOwnProperty(X)&&Ft(e,n,X,null,s,ie);for(_e in s)ie=s[_e],se=a[_e],!s.hasOwnProperty(_e)||ie===se||ie==null&&se==null||Ft(e,n,_e,ie,s,se)}function Bg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,T=c.duration;if(f&&T&&Bg(_)){for(_=0,T=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],$=I.startTime;if($>T)break;var ue=I.transferSize,_e=I.initiatorType;ue&&Bg(_e)&&(I=I.responseEnd,_+=ue*(I<T?1:(T-$)/(I-$)))}if(--s,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bf=null,Tf=null;function Il(e){return e.nodeType===9?e:e.ownerDocument}function Ig(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Af(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cf=null;function Zy(){var e=window.event;return e&&e.type==="popstate"?e===Cf?!1:(Cf=e,!0):(Cf=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(e){return Gg.resolve(null).then(e).catch(Jy)}:Hg;function Jy(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function Vg(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),rs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")So(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,So(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[k]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&So(e.ownerDocument.body);a=c}while(a);rs(n)}function kg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Rf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rf(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $y(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[k])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=oi(e.nextSibling),e===null)break}return null}function ex(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=oi(e.nextSibling),e===null))return null;return e}function Wg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oi(e.nextSibling),e===null))return null;return e}function wf(e){return e.data==="$?"||e.data==="$~"}function Df(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function oi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Uf=null;function qg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return oi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Xg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Yg(e,n,a){switch(n=Il(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);re(e)}var li=new Map,jg=new Set;function Fl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=j.d;j.d={f:nx,r:ix,D:ax,C:rx,L:sx,m:ox,X:cx,S:lx,M:ux};function nx(){var e=Ji.f(),n=Dl();return e||n}function ix(e){var n=W(e);n!==null&&n.tag===5&&n.type==="form"?fm(n):Ji.r(e)}var ns=typeof document>"u"?null:document;function Zg(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=fn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jg.has(c)||(jg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),xn(n,"link",e),Ne(n),s.head.appendChild(n)))}}function ax(e){Ji.D(e),Zg("dns-prefetch",e,null)}function rx(e,n){Ji.C(e,n),Zg("preconnect",e,n)}function sx(e,n,a){Ji.L(e,n,a);var s=ns;if(s&&e&&n){var c='link[rel="preload"][as="'+fn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+fn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+fn(a.imageSizes)+'"]')):c+='[href="'+fn(e)+'"]';var f=c;switch(n){case"style":f=is(e);break;case"script":f=as(e)}li.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(Mo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),xn(n,"link",e),Ne(n),s.head.appendChild(n)))}}function ox(e,n){Ji.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+fn(s)+'"][href="'+fn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!li.has(f)&&(e=y({rel:"modulepreload",href:e},n),li.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),xn(s,"link",e),Ne(s),a.head.appendChild(s)}}}function lx(e,n,a){Ji.S(e,n,a);var s=ns;if(s&&e){var c=Ue(s).hoistableStyles,f=is(e);n=n||"default";var _=c.get(f);if(!_){var T={loading:0,preload:null};if(_=s.querySelector(Mo(f)))T.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(f))&&Nf(e,a);var I=_=s.createElement("link");Ne(I),xn(I,"link",e),I._p=new Promise(function($,ue){I.onload=$,I.onerror=ue}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:T},c.set(f,_)}}}function cx(e,n){Ji.X(e,n);var a=ns;if(a&&e){var s=Ue(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=y({src:e,async:!0},n),(n=li.get(c))&&Lf(e,n),f=a.createElement("script"),Ne(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function ux(e,n){Ji.M(e,n);var a=ns;if(a&&e){var s=Ue(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(Eo(c)),f||(e=y({src:e,async:!0,type:"module"},n),(n=li.get(c))&&Lf(e,n),f=a.createElement("script"),Ne(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Qg(e,n,a,s){var c=(c=Ee.current)?Fl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=Ue(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=Ue(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(Mo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),f||fx(c,e,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=Ue(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+fn(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function fx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xn(n,"link",a),Ne(n),e.head.appendChild(n))}function as(e){return'[src="'+fn(e)+'"]'}function Eo(e){return"script[async]"+e}function Jg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+fn(a.href)+'"]');if(s)return n.instance=s,Ne(s),s;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ne(s),xn(s,"style",c),Hl(s,a.precedence,e),n.instance=s;case"stylesheet":c=is(a.href);var f=e.querySelector(Mo(c));if(f)return n.state.loading|=4,n.instance=f,Ne(f),f;s=Kg(a),(c=li.get(c))&&Nf(s,c),f=(e.ownerDocument||e).createElement("link"),Ne(f);var _=f;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),xn(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(c=e.querySelector(Eo(f)))?(n.instance=c,Ne(c),c):(s=a,(c=li.get(f))&&(s=y({},a),Lf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ne(c),xn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,e));return n.instance}function Hl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var T=s[_];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gl=null;function $g(e,n,a){if(Gl===null){var s=new Map,c=Gl=new Map;c.set(a,s)}else c=Gl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[k]||f[Zt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var T=s.get(_);T?T.push(f):s.set(_,[f])}}return s}function e_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function hx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dx(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=is(s.href),f=n.querySelector(Mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Vl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Ne(f);return}f=n.ownerDocument||n,s=Kg(s),(c=li.get(c))&&Nf(s,c),f=f.createElement("link"),Ne(f);var _=f;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),xn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function px(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Of===0&&(Of=62500*jy());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Of?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kl=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kl=new Map,n.forEach(mx,e),kl=null,Vl.call(e))}function mx(e,n){if(!(n.state.loading&4)){var a=kl.get(e);if(a)var s=a.get(null);else{a=new Map,kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Vl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:O,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function gx(e,n,a,s,c,f,_,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function n_(e,n,a,s,c,f,_,T,I,$,ue,_e){return e=new gx(e,n,a,_,I,$,ue,_e,T),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),e.current=f,f.stateNode=e,n=hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},gu(f),e}function i_(e){return e?(e=zr,e):zr}function a_(e,n,a,s,c,f){c=i_(c),s.context===null?s.context=c:s.pendingContext=c,s=_a(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=va(e,s,n),a!==null&&(Fn(a,e,n),to(a,e,n))}function r_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function zf(e,n){r_(e,n),(e=e.alternate)&&r_(e,n)}function s_(e){if(e.tag===13||e.tag===31){var n=$a(e,67108864);n!==null&&Fn(n,e,67108864),zf(e,67108864)}}function o_(e){if(e.tag===13||e.tag===31){var n=jn();n=ja(n);var a=$a(e,n);a!==null&&Fn(a,e,n),zf(e,n)}}var ql=!0;function _x(e,n,a,s){var c=P.T;P.T=null;var f=j.p;try{j.p=2,Pf(e,n,a,s)}finally{j.p=f,P.T=c}}function vx(e,n,a,s){var c=P.T;P.T=null;var f=j.p;try{j.p=8,Pf(e,n,a,s)}finally{j.p=f,P.T=c}}function Pf(e,n,a,s){if(ql){var c=Bf(s);if(c===null)Mf(e,n,s,Xl,a),c_(e,s);else if(xx(c,e,n,a,s))s.stopPropagation();else if(c_(e,s),n&4&&-1<yx.indexOf(e)){for(;c!==null;){var f=W(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=De(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-nt(_);T.entanglements[1]|=I,_&=~I}Di(f),(Dt&6)===0&&(Rl=de()+500,vo(0))}}break;case 31:case 13:T=$a(f,2),T!==null&&Fn(T,f,2),Dl(),zf(f,2)}if(f=Bf(s),f===null&&Mf(e,n,s,Xl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Mf(e,n,s,null,a)}}function Bf(e){return e=Ic(e),If(e)}var Xl=null;function If(e){if(Xl=null,e=ae(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Xl=e,null}function l_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(be()){case ge:return 2;case je:return 8;case Le:case He:return 32;case _t:return 268435456;default:return 32}default:return 32}}var Ff=!1,wa=null,Da=null,Ua=null,To=new Map,Ao=new Map,Na=[],yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Co(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=W(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function xx(e,n,a,s,c){switch(n){case"focusin":return wa=Co(wa,e,n,a,s,c),!0;case"dragenter":return Da=Co(Da,e,n,a,s,c),!0;case"mouseover":return Ua=Co(Ua,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Co(To.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Co(Ao.get(f)||null,e,n,a,s,c)),!0}return!1}function u_(e){var n=ae(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Za(e.priority,function(){o_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Za(e.priority,function(){o_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Bf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Bc=s,a.target.dispatchEvent(s),Bc=null}else return n=W(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function f_(e,n,a){Yl(e)&&a.delete(n)}function Sx(){Ff=!1,wa!==null&&Yl(wa)&&(wa=null),Da!==null&&Yl(Da)&&(Da=null),Ua!==null&&Yl(Ua)&&(Ua=null),To.forEach(f_),Ao.forEach(f_)}function jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Sx)))}var Zl=null;function h_(e){Zl!==e&&(Zl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===e&&(Zl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(If(s||a)===null)continue;break}var f=W(a);f!==null&&(e.splice(n,3),n-=3,Pu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function rs(e){function n(I){return jl(I,e)}wa!==null&&jl(wa,e),Da!==null&&jl(Da,e),Ua!==null&&jl(Ua,e),To.forEach(n),Ao.forEach(n);for(var a=0;a<Na.length;a++){var s=Na[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[mn]||null;if(typeof f=="function")_||h_(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[mn]||null)T=_.formAction;else if(If(c)!==null)continue}else T=_.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),h_(a)}}}function d_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(e){this._internalRoot=e}Ql.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();a_(a,s,e,n,null,null)},Ql.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;a_(e.current,2,null,e,null,null),Dl(),n[Oi]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=Is();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&u_(e)}};var p_=t.version;if(p_!=="19.2.6")throw Error(r(527,p_,"19.2.6"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Mx={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Je=Kl.inject(Mx),Ze=Kl}catch{}}return wo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Sm,f=Mm,_=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=n_(e,1,!1,null,null,a,s,null,c,f,_,d_),e[Oi]=n.current,Sf(e),new Hf(n)},wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Sm,_=Mm,T=Em,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=n_(e,1,!0,n,a??null,s,c,I,f,_,T,d_),n.context=i_(null),a=n.current,s=jn(),s=ja(s),c=_a(s),c.callback=null,va(a,c,s),a=s,n.current.lanes=a,pn(n,a),Di(n),e[Oi]=n.current,Sf(e),new Ql(n)},wo.version="19.2.6",wo}var b_;function Ox(){if(b_)return kf.exports;b_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kf.exports=Lx(),kf.exports}var zx=Ox();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P0=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=st.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>st.createElement("svg",{ref:m,...Bx,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:P0("lucide",l),...d},[...h.map(([p,v])=>st.createElement(p,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=(o,t)=>{const i=st.forwardRef(({className:r,...l},u)=>st.createElement(Ix,{ref:u,iconNode:t,className:P0(`lucide-${Px(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=fi("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=fi("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=fi("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=fi("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=fi("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=fi("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=fi("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=fi("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=fi("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=fi("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=fi("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=fi("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="170",qx=0,C_=1,Xx=2,I0=1,Yx=2,aa=3,Xa=0,Rn=1,Ni=2,Wa=0,Ms=1,R_=2,w_=3,D_=4,jx=5,xr=100,Zx=101,Qx=102,Kx=103,Jx=104,$x=200,eS=201,tS=202,nS=203,wh=204,Dh=205,iS=206,aS=207,rS=208,sS=209,oS=210,lS=211,cS=212,uS=213,fS=214,Uh=0,Nh=1,Lh=2,Ts=3,Oh=4,zh=5,Ph=6,Bh=7,F0=0,hS=1,dS=2,qa=0,pS=1,mS=2,gS=3,_S=4,vS=5,yS=6,xS=7,H0=300,As=301,Cs=302,Ih=303,Fh=304,wc=306,Hh=1e3,Mr=1001,Gh=1002,Ei=1003,SS=1004,Jl=1005,Li=1006,Yf=1007,Er=1008,la=1009,G0=1010,V0=1011,Io=1012,Sd=1013,Tr=1014,ra=1015,Fo=1016,Md=1017,Ed=1018,Rs=1020,k0=35902,W0=1021,q0=1022,Mi=1023,X0=1024,Y0=1025,Es=1026,ws=1027,j0=1028,bd=1029,Z0=1030,Td=1031,Ad=1033,Sc=33776,Mc=33777,Ec=33778,bc=33779,Vh=35840,kh=35841,Wh=35842,qh=35843,Xh=36196,Yh=37492,jh=37496,Zh=37808,Qh=37809,Kh=37810,Jh=37811,$h=37812,ed=37813,td=37814,nd=37815,id=37816,ad=37817,rd=37818,sd=37819,od=37820,ld=37821,Tc=36492,cd=36494,ud=36495,Q0=36283,fd=36284,hd=36285,dd=36286,MS=3200,ES=3201,K0=0,bS=1,ka="",Un="srgb",Us="srgb-linear",Dc="linear",Gt="srgb",ss=7680,U_=519,TS=512,AS=513,CS=514,J0=515,RS=516,wS=517,DS=518,US=519,N_=35044,L_="300 es",sa=2e3,Cc=2001;class Ns{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,pd=180/Math.PI;function Ho(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function Gn(o,t,i){return Math.max(t,Math.min(i,o))}function NS(o,t){return(o%t+t)%t}function Zf(o,t,i){return(1-i)*o+i*t}function Do(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,i=0){At.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Gn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(t,i,r,l,u,h,d,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],y=r[7],x=r[2],M=r[5],E=r[8],A=l[0],S=l[3],g=l[6],z=l[1],O=l[4],w=l[7],K=l[2],G=l[5],B=l[8];return u[0]=h*A+d*z+m*K,u[3]=h*S+d*O+m*G,u[6]=h*g+d*w+m*B,u[1]=p*A+v*z+y*K,u[4]=p*S+v*O+y*G,u[7]=p*g+v*w+y*B,u[2]=x*A+M*z+E*K,u[5]=x*S+M*O+E*G,u[8]=x*g+M*w+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-r*u*v+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],y=v*h-d*p,x=d*m-v*u,M=p*u-h*m,E=i*y+r*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=y*A,t[1]=(l*p-v*r)*A,t[2]=(d*r-l*h)*A,t[3]=x*A,t[4]=(v*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Qf.makeScale(t,i)),this}rotate(t){return this.premultiply(Qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new dt;function $0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function LS(){const o=Rc("canvas");return o.style.display="block",o}const O_={};function Po(o){o in O_||(O_[o]=!0,console.warn(o))}function OS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function zS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function PS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Tt={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(o,t,i){return this.enabled===!1||t===i||!t||!i||(this.spaces[t].transfer===Gt&&(o.r=oa(o.r),o.g=oa(o.g),o.b=oa(o.b)),this.spaces[t].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[t].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Gt&&(o.r=bs(o.r),o.g=bs(o.g),o.b=bs(o.b))),o},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ka?Dc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,t=this.workingColorSpace){return o.fromArray(this.spaces[t].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,t,i){return o.copy(this.spaces[t].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const z_=[.64,.33,.3,.6,.15,.06],P_=[.2126,.7152,.0722],B_=[.3127,.329],I_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Tt.define({[Us]:{primaries:z_,whitePoint:B_,transfer:Dc,toXYZ:I_,fromXYZ:F_,luminanceCoefficients:P_,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:z_,whitePoint:B_,transfer:Gt,toXYZ:I_,fromXYZ:F_,luminanceCoefficients:P_,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}});let os;class BS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{os===void 0&&(os=Rc("canvas")),os.width=t.width,os.height=t.height;const r=os.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=os}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Rc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let IS=0;class ev{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Ho(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Kf(l[h].image)):u.push(Kf(l[h]))}else u=Kf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?BS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FS=0;class Nn extends Ns{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=Mr,l=Mr,u=Li,h=Er,d=Mi,m=la,p=Nn.DEFAULT_ANISOTROPY,v=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Ho(),this.name="",this.source=new ev(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==H0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hh:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case Gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hh:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case Gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=H0;Nn.DEFAULT_ANISOTROPY=1;class Vt{constructor(t=0,i=0,r=0,l=1){Vt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],v=m[4],y=m[8],x=m[1],M=m[5],E=m[9],A=m[2],S=m[6],g=m[10];if(Math.abs(v-x)<.01&&Math.abs(y-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,w=(M+1)/2,K=(g+1)/2,G=(v+x)/4,B=(y+A)/4,Z=(E+S)/4;return O>w&&O>K?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=G/r,u=B/r):w>K?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=G/l,u=Z/l):K<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(K),r=B/u,l=Z/u),this.set(r,l,u,i),this}let z=Math.sqrt((S-E)*(S-E)+(y-A)*(y-A)+(x-v)*(x-v));return Math.abs(z)<.001&&(z=1),this.x=(S-E)/z,this.y=(y-A)/z,this.z=(x-v)/z,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HS extends Ns{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Vt(0,0,t,i),this.scissorTest=!1,this.viewport=new Vt(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Nn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new ev(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends HS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class tv extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class GS extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],y=r[l+3];const x=u[h+0],M=u[h+1],E=u[h+2],A=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=y;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=A;return}if(y!==A||m!==x||p!==M||v!==E){let S=1-d;const g=m*x+p*M+v*E+y*A,z=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const K=Math.sqrt(O),G=Math.atan2(K,g*z);S=Math.sin(S*G)/K,d=Math.sin(d*G)/K}const w=d*z;if(m=m*S+x*w,p=p*S+M*w,v=v*S+E*w,y=y*S+A*w,S===1-d){const K=1/Math.sqrt(m*m+p*p+v*v+y*y);m*=K,p*=K,v*=K,y*=K}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],y=u[h],x=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+v*y+m*M-p*x,t[i+1]=m*E+v*x+p*y-d*M,t[i+2]=p*E+v*M+d*x-m*y,t[i+3]=v*E-d*y-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),y=d(u/2),x=m(r/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=x*v*y+p*M*E,this._y=p*M*y-x*v*E,this._z=p*v*E+x*M*y,this._w=p*v*y-x*M*E;break;case"YXZ":this._x=x*v*y+p*M*E,this._y=p*M*y-x*v*E,this._z=p*v*E-x*M*y,this._w=p*v*y+x*M*E;break;case"ZXY":this._x=x*v*y-p*M*E,this._y=p*M*y+x*v*E,this._z=p*v*E+x*M*y,this._w=p*v*y-x*M*E;break;case"ZYX":this._x=x*v*y-p*M*E,this._y=p*M*y+x*v*E,this._z=p*v*E-x*M*y,this._w=p*v*y+x*M*E;break;case"YZX":this._x=x*v*y+p*M*E,this._y=p*M*y+x*v*E,this._z=p*v*E-x*M*y,this._w=p*v*y-x*M*E;break;case"XZY":this._x=x*v*y-p*M*E,this._y=p*M*y-x*v*E,this._z=p*v*E+x*M*y,this._w=p*v*y+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],y=i[10],x=r+d+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gn(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-r*p,this._z=u*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),y=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=h*y+this._w*x,this._x=r*y+this._x*x,this._y=l*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(H_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(H_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),v=2*(d*i-u*l),y=2*(u*r-h*i);return this.x=i+m*p+h*y-d*v,this.y=r+m*v+d*p-u*y,this.z=l+m*y+u*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Jf.copy(this).projectOnVector(t),this.sub(Jf)}reflect(t){return this.sub(Jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Gn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new Q,H_=new Ls;class Go{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(u,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$l.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(t.matrixWorld),this.union($l)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),ec.subVectors(this.max,Uo),ls.subVectors(t.a,Uo),cs.subVectors(t.b,Uo),us.subVectors(t.c,Uo),Oa.subVectors(cs,ls),za.subVectors(us,cs),hr.subVectors(ls,us);let i=[0,-Oa.z,Oa.y,0,-za.z,za.y,0,-hr.z,hr.y,Oa.z,0,-Oa.x,za.z,0,-za.x,hr.z,0,-hr.x,-Oa.y,Oa.x,0,-za.y,za.x,0,-hr.y,hr.x,0];return!$f(i,ls,cs,us,ec)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,ls,cs,us,ec))?!1:(tc.crossVectors(Oa,za),i=[tc.x,tc.y,tc.z],$f(i,ls,cs,us,ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],vi=new Q,$l=new Go,ls=new Q,cs=new Q,us=new Q,Oa=new Q,za=new Q,hr=new Q,Uo=new Q,ec=new Q,tc=new Q,dr=new Q;function $f(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){dr.fromArray(o,u);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=t.dot(dr),p=i.dot(dr),v=r.dot(dr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const VS=new Go,No=new Q,eh=new Q;class Uc{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):VS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(eh)),this.expandByPoint(No.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new Q,th=new Q,nc=new Q,Pa=new Q,nh=new Q,ic=new Q,ih=new Q;class Cd{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){th.copy(t).add(i).multiplyScalar(.5),nc.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(th);const u=t.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Pa.dot(this.direction),m=-Pa.dot(nc),p=Pa.lengthSq(),v=Math.abs(1-h*h);let y,x,M,E;if(v>0)if(y=h*m-d,x=h*d-m,E=u*v,y>=0)if(x>=-E)if(x<=E){const A=1/v;y*=A,x*=A,M=y*(y+h*x+2*d)+x*(h*y+x+2*m)+p}else x=u,y=Math.max(0,-(h*x+d)),M=-y*y+x*(x+2*m)+p;else x=-u,y=Math.max(0,-(h*x+d)),M=-y*y+x*(x+2*m)+p;else x<=-E?(y=Math.max(0,-(-h*u+d)),x=y>0?-u:Math.min(Math.max(-u,-m),u),M=-y*y+x*(x+2*m)+p):x<=E?(y=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(y=Math.max(0,-(h*u+d)),x=y>0?u:Math.min(Math.max(-u,-m),u),M=-y*y+x*(x+2*m)+p);else x=h>0?-u:u,y=Math.max(0,-(h*x+d)),M=-y*y+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(th).addScaledVector(nc,x),M}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(u=(t.min.y-x.y)*v,h=(t.max.y-x.y)*v):(u=(t.max.y-x.y)*v,h=(t.min.y-x.y)*v),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),y>=0?(d=(t.min.z-x.z)*y,m=(t.max.z-x.z)*y):(d=(t.max.z-x.z)*y,m=(t.min.z-x.z)*y),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,u){nh.subVectors(i,t),ic.subVectors(r,t),ih.crossVectors(nh,ic);let h=this.direction.dot(ih),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,t);const m=d*this.direction.dot(ic.crossVectors(Pa,ic));if(m<0)return null;const p=d*this.direction.dot(nh.cross(Pa));if(p<0||m+p>h)return null;const v=-d*Pa.dot(ih);return v<0?null:this.at(v/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,i,r,l,u,h,d,m,p,v,y,x,M,E,A,S){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,v,y,x,M,E,A,S)}set(t,i,r,l,u,h,d,m,p,v,y,x,M,E,A,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=v,g[10]=y,g[14]=x,g[3]=M,g[7]=E,g[11]=A,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),h=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),y=Math.sin(u);if(t.order==="XYZ"){const x=h*v,M=h*y,E=d*v,A=d*y;i[0]=m*v,i[4]=-m*y,i[8]=p,i[1]=M+E*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*v,M=m*y,E=p*v,A=p*y;i[0]=x+A*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*y,i[5]=h*v,i[9]=-d,i[2]=M*d-E,i[6]=A+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*v,M=m*y,E=p*v,A=p*y;i[0]=x-A*d,i[4]=-h*y,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*v,i[9]=A-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*v,M=h*y,E=d*v,A=d*y;i[0]=m*v,i[4]=E*p-M,i[8]=x*p+A,i[1]=m*y,i[5]=A*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*v,i[4]=A-x*y,i[8]=E*y+M,i[1]=y,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*y+E,i[10]=x-A*y}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*v,i[4]=-y,i[8]=p*v,i[1]=x*y+A,i[5]=h*v,i[9]=M*y-E,i[2]=E*y-M,i[6]=d*v,i[10]=A*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kS,t,WS)}lookAt(t,i,r){const l=this.elements;return Zn.subVectors(t,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Ba.crossVectors(r,Zn),Ba.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Ba.crossVectors(r,Zn)),Ba.normalize(),ac.crossVectors(Zn,Ba),l[0]=Ba.x,l[4]=ac.x,l[8]=Zn.x,l[1]=Ba.y,l[5]=ac.y,l[9]=Zn.y,l[2]=Ba.z,l[6]=ac.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],y=r[5],x=r[9],M=r[13],E=r[2],A=r[6],S=r[10],g=r[14],z=r[3],O=r[7],w=r[11],K=r[15],G=l[0],B=l[4],Z=l[8],D=l[12],R=l[1],F=l[5],le=l[9],te=l[13],me=l[2],he=l[6],P=l[10],j=l[14],Y=l[3],Se=l[7],Me=l[11],L=l[15];return u[0]=h*G+d*R+m*me+p*Y,u[4]=h*B+d*F+m*he+p*Se,u[8]=h*Z+d*le+m*P+p*Me,u[12]=h*D+d*te+m*j+p*L,u[1]=v*G+y*R+x*me+M*Y,u[5]=v*B+y*F+x*he+M*Se,u[9]=v*Z+y*le+x*P+M*Me,u[13]=v*D+y*te+x*j+M*L,u[2]=E*G+A*R+S*me+g*Y,u[6]=E*B+A*F+S*he+g*Se,u[10]=E*Z+A*le+S*P+g*Me,u[14]=E*D+A*te+S*j+g*L,u[3]=z*G+O*R+w*me+K*Y,u[7]=z*B+O*F+w*he+K*Se,u[11]=z*Z+O*le+w*P+K*Me,u[15]=z*D+O*te+w*j+K*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],y=t[6],x=t[10],M=t[14],E=t[3],A=t[7],S=t[11],g=t[15];return E*(+u*m*y-l*p*y-u*d*x+r*p*x+l*d*M-r*m*M)+A*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*v-u*m*v)+S*(+i*p*y-i*d*M-u*h*y+r*h*M+u*d*v-r*p*v)+g*(-l*d*v-i*m*y+i*d*x+l*h*y-r*h*x+r*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],y=t[9],x=t[10],M=t[11],E=t[12],A=t[13],S=t[14],g=t[15],z=y*S*p-A*x*p+A*m*M-d*S*M-y*m*g+d*x*g,O=E*x*p-v*S*p-E*m*M+h*S*M+v*m*g-h*x*g,w=v*A*p-E*y*p+E*d*M-h*A*M-v*d*g+h*y*g,K=E*y*m-v*A*m-E*d*x+h*A*x+v*d*S-h*y*S,G=i*z+r*O+l*w+u*K;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/G;return t[0]=z*B,t[1]=(A*x*u-y*S*u-A*l*M+r*S*M+y*l*g-r*x*g)*B,t[2]=(d*S*u-A*m*u+A*l*p-r*S*p-d*l*g+r*m*g)*B,t[3]=(y*m*u-d*x*u-y*l*p+r*x*p+d*l*M-r*m*M)*B,t[4]=O*B,t[5]=(v*S*u-E*x*u+E*l*M-i*S*M-v*l*g+i*x*g)*B,t[6]=(E*m*u-h*S*u-E*l*p+i*S*p+h*l*g-i*m*g)*B,t[7]=(h*x*u-v*m*u+v*l*p-i*x*p-h*l*M+i*m*M)*B,t[8]=w*B,t[9]=(E*y*u-v*A*u-E*r*M+i*A*M+v*r*g-i*y*g)*B,t[10]=(h*A*u-E*d*u+E*r*p-i*A*p-h*r*g+i*d*g)*B,t[11]=(v*d*u-h*y*u-v*r*p+i*y*p+h*r*M-i*d*M)*B,t[12]=K*B,t[13]=(v*A*l-E*y*l+E*r*x-i*A*x-v*r*S+i*y*S)*B,t[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*S-i*d*S)*B,t[15]=(h*y*l-v*d*l+v*r*m-i*y*m-h*r*x+i*d*x)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,v=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,y=d+d,x=u*p,M=u*v,E=u*y,A=h*v,S=h*y,g=d*y,z=m*p,O=m*v,w=m*y,K=r.x,G=r.y,B=r.z;return l[0]=(1-(A+g))*K,l[1]=(M+w)*K,l[2]=(E-O)*K,l[3]=0,l[4]=(M-w)*G,l[5]=(1-(x+g))*G,l[6]=(S+z)*G,l[7]=0,l[8]=(E+O)*B,l[9]=(S-z)*B,l[10]=(1-(x+A))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const h=fs.set(l[4],l[5],l[6]).length(),d=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/u,v=1/h,y=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=y,yi.elements[9]*=y,yi.elements[10]*=y,i.setFromRotationMatrix(yi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=sa){const m=this.elements,p=2*u/(i-t),v=2*u/(r-l),y=(i+t)/(i-t),x=(r+l)/(r-l);let M,E;if(d===sa)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Cc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=sa){const m=this.elements,p=1/(i-t),v=1/(r-l),y=1/(h-u),x=(i+t)*p,M=(r+l)*v;let E,A;if(d===sa)E=(h+u)*y,A=-2*y;else if(d===Cc)E=u*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new Q,yi=new Xt,kS=new Q(0,0,0),WS=new Q(1,1,1),Ba=new Q,ac=new Q,Zn=new Q,G_=new Xt,V_=new Ls;class ui{constructor(t=0,i=0,r=0,l=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],y=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Gn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Gn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Gn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return G_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(G_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return V_.setFromEuler(this),this.setFromQuaternion(V_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Rd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qS=0;const k_=new Q,hs=new Ls,ta=new Xt,rc=new Q,Lo=new Q,XS=new Q,YS=new Ls,W_=new Q(1,0,0),q_=new Q(0,1,0),X_=new Q(0,0,1),Y_={type:"added"},jS={type:"removed"},ds={type:"childadded",child:null},ah={type:"childremoved",child:null};class Sn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new Q,i=new ui,r=new Ls,l=new Q(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xt},normalMatrix:{value:new dt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(W_,t)}rotateY(t){return this.rotateOnAxis(q_,t)}rotateZ(t){return this.rotateOnAxis(X_,t)}translateOnAxis(t,i){return k_.copy(t).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(W_,t)}translateY(t){return this.translateOnAxis(q_,t)}translateZ(t){return this.translateOnAxis(X_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?rc.copy(t):rc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Lo,rc,this.up):ta.lookAt(rc,Lo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(ta),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Y_),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jS),ah.child=t,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Y_),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,XS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,YS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const y=m[p];u(t.shapes,y)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),y=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new Q(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Q,na=new Q,rh=new Q,ia=new Q,ps=new Q,ms=new Q,j_=new Q,sh=new Q,oh=new Q,lh=new Q,ch=new Vt,uh=new Vt,fh=new Vt;class Si{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),xi.subVectors(t,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){xi.subVectors(l,i),na.subVectors(r,i),rh.subVectors(t,i);const h=xi.dot(xi),d=xi.dot(na),m=xi.dot(rh),p=na.dot(na),v=na.dot(rh),y=h*p-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,M=(p*m-d*v)*x,E=(h*v-d*m)*x;return u.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(t,i),uh.fromBufferAttribute(t,r),fh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ch,u.x),h.addScaledVector(uh,u.y),h.addScaledVector(fh,u.z),h}static isFrontFacing(t,i,r,l){return xi.subVectors(r,i),na.subVectors(t,i),xi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),xi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;ps.subVectors(l,r),ms.subVectors(u,r),sh.subVectors(t,r);const m=ps.dot(sh),p=ms.dot(sh);if(m<=0&&p<=0)return i.copy(r);oh.subVectors(t,l);const v=ps.dot(oh),y=ms.dot(oh);if(v>=0&&y<=v)return i.copy(l);const x=m*y-v*p;if(x<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(ps,h);lh.subVectors(t,u);const M=ps.dot(lh),E=ms.dot(lh);if(E>=0&&M<=E)return i.copy(u);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(ms,d);const S=v*E-M*y;if(S<=0&&y-v>=0&&M-E>=0)return j_.subVectors(u,l),d=(y-v)/(y-v+(M-E)),i.copy(l).addScaledVector(j_,d);const g=1/(S+A+x);return h=A*g,d=x*g,i.copy(r).addScaledVector(ps,h).addScaledVector(ms,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},sc={h:0,s:0,l:0};function hh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class wt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Tt.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Tt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Tt.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Tt.workingColorSpace){if(t=NS(t,1),i=Gn(i,0,1),r=Gn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=hh(h,u,t+1/3),this.g=hh(h,u,t),this.b=hh(h,u,t-1/3)}return Tt.toWorkingColorSpace(this,l),this}setStyle(t,i=Un){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Un){const r=nv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return Tt.fromWorkingColorSpace(An.copy(this),t),Math.round(Gn(An.r*255,0,255))*65536+Math.round(Gn(An.g*255,0,255))*256+Math.round(Gn(An.b*255,0,255))}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Tt.workingColorSpace){Tt.fromWorkingColorSpace(An.copy(this),i);const r=An.r,l=An.g,u=An.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const y=h-d;switch(p=v<=.5?y/(h+d):y/(2-h-d),h){case r:m=(l-u)/y+(l<u?6:0);break;case l:m=(u-r)/y+2;break;case u:m=(r-l)/y+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(An.copy(this),i),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=Un){Tt.fromWorkingColorSpace(An.copy(this),t);const i=An.r,r=An.g,l=An.b;return t!==Un?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(sc);const r=Zf(Ia.h,sc.h,i),l=Zf(Ia.s,sc.s,i),u=Zf(Ia.l,sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new wt;wt.NAMES=nv;let ZS=0;class Os extends Ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Ho(),this.name="",this.blending=Ms,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wh&&(r.blendSrc=this.blendSrc),this.blendDst!==Dh&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ga extends Os{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new Q,oc=new At;class bi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=N_,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(t),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==N_&&(t.usage=this.usage),t}}class iv extends bi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class av extends bi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Jn extends bi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let QS=0;const ci=new Xt,dh=new Sn,gs=new Q,Qn=new Go,Oo=new Go,dn=new Q;class Ti extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($0(t)?av:iv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new dt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Jn(r,3))}else{for(let r=0,l=i.count;r<l;r++){const u=t[r];i.setXYZ(r,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(Qn.min,Oo.min),Qn.expandByPoint(dn),dn.addVectors(Qn.max,Oo.max),Qn.expandByPoint(dn)):(Qn.expandByPoint(Oo.min),Qn.expandByPoint(Oo.max))}Qn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)dn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(dn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)dn.fromBufferAttribute(d,p),m&&(gs.fromBufferAttribute(t,p),dn.add(gs)),l=Math.max(l,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new Q,m[Z]=new Q;const p=new Q,v=new Q,y=new Q,x=new At,M=new At,E=new At,A=new Q,S=new Q;function g(Z,D,R){p.fromBufferAttribute(r,Z),v.fromBufferAttribute(r,D),y.fromBufferAttribute(r,R),x.fromBufferAttribute(u,Z),M.fromBufferAttribute(u,D),E.fromBufferAttribute(u,R),v.sub(p),y.sub(p),M.sub(x),E.sub(x);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(y,-M.y).multiplyScalar(F),S.copy(y).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(F),d[Z].add(A),d[D].add(A),d[R].add(A),m[Z].add(S),m[D].add(S),m[R].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let Z=0,D=z.length;Z<D;++Z){const R=z[Z],F=R.start,le=R.count;for(let te=F,me=F+le;te<me;te+=3)g(t.getX(te+0),t.getX(te+1),t.getX(te+2))}const O=new Q,w=new Q,K=new Q,G=new Q;function B(Z){K.fromBufferAttribute(l,Z),G.copy(K);const D=d[Z];O.copy(D),O.sub(K.multiplyScalar(K.dot(D))).normalize(),w.crossVectors(G,D);const F=w.dot(m[Z])<0?-1:1;h.setXYZW(Z,O.x,O.y,O.z,F)}for(let Z=0,D=z.length;Z<D;++Z){const R=z[Z],F=R.start,le=R.count;for(let te=F,me=F+le;te<me;te+=3)B(t.getX(te+0)),B(t.getX(te+1)),B(t.getX(te+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new Q,u=new Q,h=new Q,d=new Q,m=new Q,p=new Q,v=new Q,y=new Q;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),A=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),v.subVectors(h,u),y.subVectors(l,u),v.cross(y),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(v),m.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,u),y.subVectors(l,u),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)dn.fromBufferAttribute(t,i),dn.normalize(),t.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,y=d.normalized,x=new p.constructor(m.length*v);let M=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*v;for(let g=0;g<v;g++)x[E++]=p[M++]}return new bi(x,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ti,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,y=p.length;v<y;v++){const x=p[v],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let y=0,x=p.length;y<x;y++){const M=p[y];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],y=u[p];for(let x=0,M=y.length;x<M;x++)v.push(y[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const y=h[p];this.addGroup(y.start,y.count,y.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z_=new Xt,pr=new Cd,lc=new Uc,Q_=new Q,cc=new Q,uc=new Q,fc=new Q,ph=new Q,hc=new Q,K_=new Q,dc=new Q;class Cn extends Sn{constructor(t=new Ti,i=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],y=u[m];v!==0&&(ph.fromBufferAttribute(y,t),h?hc.addScaledVector(ph,v):hc.addScaledVector(ph.sub(i),v))}i.add(hc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),pr.copy(t.ray).recast(t.near),!(lc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(lc,Q_)===null||pr.origin.distanceToSquared(Q_)>(t.far-t.near)**2))&&(Z_.copy(u).invert(),pr.copy(t.ray).applyMatrix4(Z_),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,y=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const S=x[E],g=h[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let w=z,K=O;w<K;w+=3){const G=d.getX(w),B=d.getX(w+1),Z=d.getX(w+2);l=pc(this,g,t,r,p,v,y,G,B,Z),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=E,g=A;S<g;S+=3){const z=d.getX(S),O=d.getX(S+1),w=d.getX(S+2);l=pc(this,h,t,r,p,v,y,z,O,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const S=x[E],g=h[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=z,K=O;w<K;w+=3){const G=w,B=w+1,Z=w+2;l=pc(this,g,t,r,p,v,y,G,B,Z),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=E,g=A;S<g;S+=3){const z=S,O=S+1,w=S+2;l=pc(this,h,t,r,p,v,y,z,O,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function KS(o,t,i,r,l,u,h,d){let m;if(t.side===Rn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Xa,d),m===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function pc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const v=KS(o,t,i,r,cc,uc,fc,K_);if(v){const y=new Q;Si.getBarycoord(K_,cc,uc,fc,y),l&&(v.uv=Si.getInterpolatedAttribute(l,d,m,p,y,new At)),u&&(v.uv1=Si.getInterpolatedAttribute(u,d,m,p,y,new At)),h&&(v.normal=Si.getInterpolatedAttribute(h,d,m,p,y,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Q,materialIndex:0};Si.getNormal(cc,uc,fc,x.normal),v.face=x,v.barycoord=y}return v}class Vo extends Ti{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],y=[];let x=0,M=0;E("z","y","x",-1,-1,r,i,t,h,u,0),E("z","y","x",1,-1,r,i,-t,h,u,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Jn(p,3)),this.setAttribute("normal",new Jn(v,3)),this.setAttribute("uv",new Jn(y,2));function E(A,S,g,z,O,w,K,G,B,Z,D){const R=w/B,F=K/Z,le=w/2,te=K/2,me=G/2,he=B+1,P=Z+1;let j=0,Y=0;const Se=new Q;for(let Me=0;Me<P;Me++){const L=Me*F-te;for(let ne=0;ne<he;ne++){const ve=ne*R-le;Se[A]=ve*z,Se[S]=L*O,Se[g]=me,p.push(Se.x,Se.y,Se.z),Se[A]=0,Se[S]=0,Se[g]=G>0?1:-1,v.push(Se.x,Se.y,Se.z),y.push(ne/B),y.push(1-Me/Z),j+=1}}for(let Me=0;Me<Z;Me++)for(let L=0;L<B;L++){const ne=x+L+he*Me,ve=x+L+he*(Me+1),q=x+(L+1)+he*(Me+1),oe=x+(L+1)+he*Me;m.push(ne,ve,oe),m.push(ve,q,oe),Y+=6}d.addGroup(M,Y,D),M+=Y,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Dn(o){const t={};for(let i=0;i<o.length;i++){const r=Ds(o[i]);for(const l in r)t[l]=r[l]}return t}function JS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function rv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Tt.workingColorSpace}const $S={clone:Ds,merge:Dn};var eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Os{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=JS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class sv extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new Q,J_=new At,$_=new At;class Kn extends sv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=pd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,i){return this.getViewBounds(t,J_,$_),i.subVectors($_,J_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class nM extends Sn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Kn(_s,vs,t,i);l.layers=this.layers,this.add(l);const u=new Kn(_s,vs,t,i);u.layers=this.layers,this.add(u);const h=new Kn(_s,vs,t,i);h.layers=this.layers,this.add(h);const d=new Kn(_s,vs,t,i);d.layers=this.layers,this.add(d);const m=new Kn(_s,vs,t,i);m.layers=this.layers,this.add(m);const p=new Kn(_s,vs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,y=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(y,x,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class ov extends Nn{constructor(t,i,r,l,u,h,d,m,p,v){t=t!==void 0?t:[],i=i!==void 0?i:As,super(t,i,r,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iM extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new ov(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vo(5,5,5),u=new Ya({name:"CubemapFromEquirect",uniforms:Ds(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rn,blending:Wa});u.uniforms.tEquirect.value=i;const h=new Cn(l,u),d=i.minFilter;return i.minFilter===Er&&(i.minFilter=Li),new nM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}const mh=new Q,aM=new Q,rM=new dt;class vr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=mh.subVectors(r,i).cross(aM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(mh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||rM.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Uc,mc=new Q;class wd{constructor(t=new vr,i=new vr,r=new vr,l=new vr,u=new vr,h=new vr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=sa){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],y=l[6],x=l[7],M=l[8],E=l[9],A=l[10],S=l[11],g=l[12],z=l[13],O=l[14],w=l[15];if(r[0].setComponents(m-u,x-p,S-M,w-g).normalize(),r[1].setComponents(m+u,x+p,S+M,w+g).normalize(),r[2].setComponents(m+h,x+v,S+E,w+z).normalize(),r[3].setComponents(m-h,x-v,S-E,w-z).normalize(),r[4].setComponents(m-d,x-y,S-A,w-O).normalize(),i===sa)r[5].setComponents(m+d,x+y,S+A,w+O).normalize();else if(i===Cc)r[5].setComponents(d,y,A,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(mc.x=l.normal.x>0?t.max.x:t.min.x,mc.y=l.normal.y>0?t.max.y:t.min.y,mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lv(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function sM(o){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,y=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,m,p){const v=m.array,y=m.updateRanges;if(o.bindBuffer(p,d),y.length===0)o.bufferSubData(p,0,v);else{y.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<y.length;M++){const E=y[x],A=y[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,y[x]=A)}y.length=x+1;for(let M=0,E=y.length;M<E;M++){const A=y[M];o.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}class Nc extends Ti{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,y=t/d,x=i/m,M=[],E=[],A=[],S=[];for(let g=0;g<v;g++){const z=g*x-h;for(let O=0;O<p;O++){const w=O*y-u;E.push(w,-z,0),A.push(0,0,1),S.push(O/d),S.push(1-g/m)}}for(let g=0;g<m;g++)for(let z=0;z<d;z++){const O=z+p*g,w=z+p*(g+1),K=z+1+p*(g+1),G=z+1+p*g;M.push(O,w,G),M.push(w,K,G)}this.setIndex(M),this.setAttribute("position",new Jn(E,3)),this.setAttribute("normal",new Jn(A,3)),this.setAttribute("uv",new Jn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.width,t.height,t.widthSegments,t.heightSegments)}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$M=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,d1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:oM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:uM,alphatest_fragment:fM,alphatest_pars_fragment:hM,aomap_fragment:dM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:_M,beginnormal_vertex:vM,bsdfs:yM,iridescence_fragment:xM,bumpmap_pars_fragment:SM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:TM,color_fragment:AM,color_pars_fragment:CM,color_pars_vertex:RM,color_vertex:wM,common:DM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:NM,displacementmap_pars_vertex:LM,displacementmap_vertex:OM,emissivemap_fragment:zM,emissivemap_pars_fragment:PM,colorspace_fragment:BM,colorspace_pars_fragment:IM,envmap_fragment:FM,envmap_common_pars_fragment:HM,envmap_pars_fragment:GM,envmap_pars_vertex:VM,envmap_physical_pars_fragment:$M,envmap_vertex:kM,fog_vertex:WM,fog_pars_vertex:qM,fog_fragment:XM,fog_pars_fragment:YM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:ZM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:KM,lights_pars_begin:JM,lights_toon_fragment:eE,lights_toon_pars_fragment:tE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:aE,lights_physical_pars_fragment:rE,lights_fragment_begin:sE,lights_fragment_maps:oE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:hE,map_fragment:dE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:vE,morphinstance_vertex:yE,morphcolor_vertex:xE,morphnormal_vertex:SE,morphtarget_pars_vertex:ME,morphtarget_vertex:EE,normal_fragment_begin:bE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:CE,normal_vertex:RE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:LE,opaque_fragment:OE,packing:zE,premultiplied_alpha_fragment:PE,project_vertex:BE,dithering_fragment:IE,dithering_pars_fragment:FE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:kE,shadowmap_vertex:WE,shadowmask_pars_fragment:qE,skinbase_vertex:XE,skinning_pars_vertex:YE,skinning_vertex:jE,skinnormal_vertex:ZE,specularmap_fragment:QE,specularmap_pars_fragment:KE,tonemapping_fragment:JE,tonemapping_pars_fragment:$E,transmission_fragment:e1,transmission_pars_fragment:t1,uv_pars_fragment:n1,uv_pars_vertex:i1,uv_vertex:a1,worldpos_vertex:r1,background_vert:s1,background_frag:o1,backgroundCube_vert:l1,backgroundCube_frag:c1,cube_vert:u1,cube_frag:f1,depth_vert:h1,depth_frag:d1,distanceRGBA_vert:p1,distanceRGBA_frag:m1,equirect_vert:g1,equirect_frag:_1,linedashed_vert:v1,linedashed_frag:y1,meshbasic_vert:x1,meshbasic_frag:S1,meshlambert_vert:M1,meshlambert_frag:E1,meshmatcap_vert:b1,meshmatcap_frag:T1,meshnormal_vert:A1,meshnormal_frag:C1,meshphong_vert:R1,meshphong_frag:w1,meshphysical_vert:D1,meshphysical_frag:U1,meshtoon_vert:N1,meshtoon_frag:L1,points_vert:O1,points_frag:z1,shadow_vert:P1,shadow_frag:B1,sprite_vert:I1,sprite_frag:F1},ze={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ui={basic:{uniforms:Dn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Dn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Dn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Dn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Dn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Dn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Dn([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Dn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Dn([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Dn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Dn([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Dn([ze.common,ze.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Dn([ze.lights,ze.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ui.physical={uniforms:Dn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const gc={r:0,b:0,g:0},gr=new ui,H1=new Xt;function G1(o,t,i,r,l,u,h){const d=new wt(0);let m=u===!0?0:1,p,v,y=null,x=0,M=null;function E(z){let O=z.isScene===!0?z.background:null;return O&&O.isTexture&&(O=(z.backgroundBlurriness>0?i:t).get(O)),O}function A(z){let O=!1;const w=E(z);w===null?g(d,m):w&&w.isColor&&(g(w,1),O=!0);const K=o.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,h):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(z,O){const w=E(O);w&&(w.isCubeTexture||w.mapping===wc)?(v===void 0&&(v=new Cn(new Vo(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Ds(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(K,G,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),gr.copy(O.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),v.material.uniforms.envMap.value=w,v.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(H1.makeRotationFromEuler(gr)),v.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Gt,(y!==w||x!==w.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,y=w,x=w.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Cn(new Nc(2,2),new Ya({name:"BackgroundMaterial",uniforms:Ds(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(y!==w||x!==w.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,y=w,x=w.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function g(z,O){z.getRGB(gc,rv(o)),r.buffers.color.setClear(gc.r,gc.g,gc.b,O,h)}return{getClearColor:function(){return d},setClearColor:function(z,O=1){d.set(z),m=O,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,g(d,m)},render:A,addToRenderList:S}}function V1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(R,F,le,te,me){let he=!1;const P=y(te,le,F);u!==P&&(u=P,p(u.object)),he=M(R,te,le,me),he&&E(R,te,le,me),me!==null&&t.update(me,o.ELEMENT_ARRAY_BUFFER),(he||h)&&(h=!1,w(R,F,le,te),me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function y(R,F,le){const te=le.wireframe===!0;let me=r[R.id];me===void 0&&(me={},r[R.id]=me);let he=me[F.id];he===void 0&&(he={},me[F.id]=he);let P=he[te];return P===void 0&&(P=x(m()),he[te]=P),P}function x(R){const F=[],le=[],te=[];for(let me=0;me<i;me++)F[me]=0,le[me]=0,te[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:le,attributeDivisors:te,object:R,attributes:{},index:null}}function M(R,F,le,te){const me=u.attributes,he=F.attributes;let P=0;const j=le.getAttributes();for(const Y in j)if(j[Y].location>=0){const Me=me[Y];let L=he[Y];if(L===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),Me===void 0||Me.attribute!==L||L&&Me.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==te}function E(R,F,le,te){const me={},he=F.attributes;let P=0;const j=le.getAttributes();for(const Y in j)if(j[Y].location>=0){let Me=he[Y];Me===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor));const L={};L.attribute=Me,Me&&Me.data&&(L.data=Me.data),me[Y]=L,P++}u.attributes=me,u.attributesNum=P,u.index=te}function A(){const R=u.newAttributes;for(let F=0,le=R.length;F<le;F++)R[F]=0}function S(R){g(R,0)}function g(R,F){const le=u.newAttributes,te=u.enabledAttributes,me=u.attributeDivisors;le[R]=1,te[R]===0&&(o.enableVertexAttribArray(R),te[R]=1),me[R]!==F&&(o.vertexAttribDivisor(R,F),me[R]=F)}function z(){const R=u.newAttributes,F=u.enabledAttributes;for(let le=0,te=F.length;le<te;le++)F[le]!==R[le]&&(o.disableVertexAttribArray(le),F[le]=0)}function O(R,F,le,te,me,he,P){P===!0?o.vertexAttribIPointer(R,F,le,me,he):o.vertexAttribPointer(R,F,le,te,me,he)}function w(R,F,le,te){A();const me=te.attributes,he=le.getAttributes(),P=F.defaultAttributeValues;for(const j in he){const Y=he[j];if(Y.location>=0){let Se=me[j];if(Se===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Se=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Se=R.instanceColor)),Se!==void 0){const Me=Se.normalized,L=Se.itemSize,ne=t.get(Se);if(ne===void 0)continue;const ve=ne.buffer,q=ne.type,oe=ne.bytesPerElement,Ee=q===o.INT||q===o.UNSIGNED_INT||Se.gpuType===Sd;if(Se.isInterleavedBufferAttribute){const xe=Se.data,Be=xe.stride,Ie=Se.offset;if(xe.isInstancedInterleavedBuffer){for(let et=0;et<Y.locationSize;et++)g(Y.location+et,xe.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let et=0;et<Y.locationSize;et++)S(Y.location+et);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let et=0;et<Y.locationSize;et++)O(Y.location+et,L/Y.locationSize,q,Me,Be*oe,(Ie+L/Y.locationSize*et)*oe,Ee)}else{if(Se.isInstancedBufferAttribute){for(let xe=0;xe<Y.locationSize;xe++)g(Y.location+xe,Se.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let xe=0;xe<Y.locationSize;xe++)S(Y.location+xe);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let xe=0;xe<Y.locationSize;xe++)O(Y.location+xe,L/Y.locationSize,q,Me,L*oe,L/Y.locationSize*xe*oe,Ee)}}else if(P!==void 0){const Me=P[j];if(Me!==void 0)switch(Me.length){case 2:o.vertexAttrib2fv(Y.location,Me);break;case 3:o.vertexAttrib3fv(Y.location,Me);break;case 4:o.vertexAttrib4fv(Y.location,Me);break;default:o.vertexAttrib1fv(Y.location,Me)}}}}z()}function K(){Z();for(const R in r){const F=r[R];for(const le in F){const te=F[le];for(const me in te)v(te[me].object),delete te[me];delete F[le]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const F=r[R.id];for(const le in F){const te=F[le];for(const me in te)v(te[me].object),delete te[me];delete F[le]}delete r[R.id]}function B(R){for(const F in r){const le=r[F];if(le[R.id]===void 0)continue;const te=le[R.id];for(const me in te)v(te[me].object),delete te[me];delete le[R.id]}}function Z(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:D,dispose:K,releaseStatesOfGeometry:G,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:S,disableUnusedAttributes:z}}function k1(o,t,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,y){y!==0&&(o.drawArraysInstanced(r,p,v,y),i.update(v,r,y))}function d(p,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,y);let M=0;for(let E=0;E<y;E++)M+=v[E];i.update(M,r,1)}function m(p,v,y,x){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],v[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,y);let E=0;for(let A=0;A<y;A++)E+=v[A]*x[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function W1(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Mi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const Z=B===Fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==la&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ra&&!Z)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const y=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),K=E>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:w,vertexTextures:K,maxSamples:G}}function q1(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new vr,d=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||l;return l=x,r=y.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){i=v(y,x,0)},this.setState=function(y,x,M){const E=y.clippingPlanes,A=y.clipIntersection,S=y.clipShadows,g=o.get(y);if(!l||E===null||E.length===0||u&&!S)u?v(null):p();else{const z=u?0:r,O=z*4;let w=g.clippingState||null;m.value=w,w=v(E,x,O,M);for(let K=0;K!==O;++K)w[K]=i[K];g.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(y,x,M,E){const A=y!==null?y.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const g=M+A*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(S===null||S.length<g)&&(S=new Float32Array(g));for(let O=0,w=M;O!==A;++O,w+=4)h.copy(y[O]).applyMatrix4(z,d),h.normal.toArray(S,w),S[w+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function X1(o){let t=new WeakMap;function i(h,d){return d===Ih?h.mapping=As:d===Fh&&(h.mapping=Cs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ih||d===Fh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new iM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}class cv extends sv{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ss=4,e0=[.125,.215,.35,.446,.526,.582],Sr=20,gh=new cv,t0=new wt;let _h=null,vh=0,yh=0,xh=!1;const yr=(1+Math.sqrt(5))/2,ys=1/yr,n0=[new Q(-yr,ys,0),new Q(yr,ys,0),new Q(-ys,0,yr),new Q(ys,0,yr),new Q(0,yr,-ys),new Q(0,yr,ys),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class i0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_h,vh,yh),this._renderer.xr.enabled=xh,t.scissorTest=!1,_c(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===As||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Fo,format:Mi,colorSpace:Us,depthBuffer:!1},l=a0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y1(u)),this._blurMaterial=j1(u,t,i)}return l}_compileMaterial(t){const i=new Cn(this._lodPlanes[0],t);this._renderer.compile(i,gh)}_sceneToCubeUV(t,i,r,l){const d=new Kn(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor(t0),v.toneMapping=qa,v.autoClear=!1;const M=new Ga({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),E=new Cn(new Vo,M);let A=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,A=!0):(M.color.copy(t0),A=!0);for(let g=0;g<6;g++){const z=g%3;z===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):z===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const O=this._cubeSize;_c(l,z*O,g>2?O:0,O,O),v.setRenderTarget(l),A&&v.render(E,d),v.render(t,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=y,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===As||t.mapping===Cs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Cn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;_c(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,gh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=n0[(l-u-1)%n0.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Cn(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Sr-1),A=u/E,S=isFinite(u)?1+Math.floor(v*A):Sr;S>Sr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Sr}`);const g=[];let z=0;for(let B=0;B<Sr;++B){const Z=B/A,D=Math.exp(-Z*Z/2);g.push(D),B===0?z+=D:B<S&&(z+=2*D)}for(let B=0;B<g.length;B++)g[B]=g[B]/z;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=E,x.mipInt.value=O-r;const w=this._sizeLods[l],K=3*w*(l>O-Ss?l-O+Ss:0),G=4*(this._cubeSize-w);_c(i,K,G,3*w,2*w),m.setRenderTarget(i),m.render(y,gh)}}function Y1(o){const t=[],i=[],r=[];let l=o;const u=o-Ss+1+e0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ss?m=e0[h-o+Ss-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,y=1+p,x=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,E=6,A=3,S=2,g=1,z=new Float32Array(A*E*M),O=new Float32Array(S*E*M),w=new Float32Array(g*E*M);for(let G=0;G<M;G++){const B=G%3*2/3-1,Z=G>2?0:-1,D=[B,Z,0,B+2/3,Z,0,B+2/3,Z+1,0,B,Z,0,B+2/3,Z+1,0,B,Z+1,0];z.set(D,A*E*G),O.set(x,S*E*G);const R=[G,G,G,G,G,G];w.set(R,g*E*G)}const K=new Ti;K.setAttribute("position",new bi(z,A)),K.setAttribute("uv",new bi(O,S)),K.setAttribute("faceIndex",new bi(w,g)),t.push(K),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function a0(o,t,i){const r=new Ar(o,t,i);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _c(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function j1(o,t,i){const r=new Float32Array(Sr),l=new Q(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function r0(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function s0(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z1(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ih||m===Fh,v=m===As||m===Cs;if(p||v){let y=t.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new i0(o)),y=p?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,t.set(d,y),y.texture;if(y!==void 0)return y.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new i0(o)),y=p?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,t.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Q1(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Po("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function K1(o,t,i,r){const l={},u=new WeakMap;function h(y){const x=y.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);for(const E in x.morphAttributes){const A=x.morphAttributes[E];for(let S=0,g=A.length;S<g;S++)t.remove(A[S])}x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(y,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(y){const x=y.attributes;for(const E in x)t.update(x[E],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const E in M){const A=M[E];for(let S=0,g=A.length;S<g;S++)t.update(A[S],o.ARRAY_BUFFER)}}function p(y){const x=[],M=y.index,E=y.attributes.position;let A=0;if(M!==null){const z=M.array;A=M.version;for(let O=0,w=z.length;O<w;O+=3){const K=z[O+0],G=z[O+1],B=z[O+2];x.push(K,G,G,B,B,K)}}else if(E!==void 0){const z=E.array;A=E.version;for(let O=0,w=z.length/3-1;O<w;O+=3){const K=O+0,G=O+1,B=O+2;x.push(K,G,G,B,B,K)}}else return;const S=new($0(x)?av:iv)(x,1);S.version=A;const g=u.get(y);g&&t.remove(g),u.set(y,S)}function v(y){const x=u.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&p(y)}else p(y);return u.get(y)}return{get:d,update:m,getWireframeAttribute:v}}function J1(o,t,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*h),i.update(M,r,1)}function p(x,M,E){E!==0&&(o.drawElementsInstanced(r,M,u,x*h,E),i.update(M,r,E))}function v(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,E);let S=0;for(let g=0;g<E;g++)S+=M[g];i.update(S,r,1)}function y(x,M,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],A[g]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,A,0,E);let g=0;for(let z=0;z<E;z++)g+=M[z]*A[z];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function $1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function eb(o,t,i){const r=new WeakMap,l=new Vt;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let R=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),S===!0&&(w=3);let K=d.attributes.position.count*w,G=1;K>t.maxTextureSize&&(G=Math.ceil(K/t.maxTextureSize),K=t.maxTextureSize);const B=new Float32Array(K*G*4*y),Z=new tv(B,K,G,y);Z.type=ra,Z.needsUpdate=!0;const D=w*4;for(let F=0;F<y;F++){const le=g[F],te=z[F],me=O[F],he=K*G*4*F;for(let P=0;P<le.count;P++){const j=P*D;E===!0&&(l.fromBufferAttribute(le,P),B[he+j+0]=l.x,B[he+j+1]=l.y,B[he+j+2]=l.z,B[he+j+3]=0),A===!0&&(l.fromBufferAttribute(te,P),B[he+j+4]=l.x,B[he+j+5]=l.y,B[he+j+6]=l.z,B[he+j+7]=0),S===!0&&(l.fromBufferAttribute(me,P),B[he+j+8]=l.x,B[he+j+9]=l.y,B[he+j+10]=l.z,B[he+j+11]=me.itemSize===4?l.w:1)}}x={count:y,texture:Z,size:new At(K,G)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function tb(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,y=t.get(m,v);if(l.get(y)!==p&&(t.update(y),l.set(y,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return y}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class uv extends Nn{constructor(t,i,r,l,u,h,d,m,p,v=Es){if(v!==Es&&v!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Es&&(r=Tr),r===void 0&&v===ws&&(r=Rs),super(null,l,u,h,d,m,v,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ei,this.minFilter=m!==void 0?m:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const fv=new Nn,o0=new uv(1,1),hv=new tv,dv=new GS,pv=new ov,l0=[],c0=[],u0=new Float32Array(16),f0=new Float32Array(9),h0=new Float32Array(4);function zs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=l0[l];if(u===void 0&&(u=new Float32Array(l),l0[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function cn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function un(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Lc(o,t){let i=c0[t];i===void 0&&(i=new Int32Array(t),c0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function nb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function ib(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2fv(this.addr,t),un(i,t)}}function ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;o.uniform3fv(this.addr,t),un(i,t)}}function rb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4fv(this.addr,t),un(i,t)}}function sb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;h0.set(r),o.uniformMatrix2fv(this.addr,!1,h0),un(i,r)}}function ob(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;f0.set(r),o.uniformMatrix3fv(this.addr,!1,f0),un(i,r)}}function lb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;u0.set(r),o.uniformMatrix4fv(this.addr,!1,u0),un(i,r)}}function cb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2iv(this.addr,t),un(i,t)}}function fb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3iv(this.addr,t),un(i,t)}}function hb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4iv(this.addr,t),un(i,t)}}function db(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2uiv(this.addr,t),un(i,t)}}function mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3uiv(this.addr,t),un(i,t)}}function gb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4uiv(this.addr,t),un(i,t)}}function _b(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(o0.compareFunction=J0,u=o0):u=fv,i.setTexture2D(t||u,l)}function vb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||dv,l)}function yb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||pv,l)}function xb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||hv,l)}function Sb(o){switch(o){case 5126:return nb;case 35664:return ib;case 35665:return ab;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return hb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return xb}}function Mb(o,t){o.uniform1fv(this.addr,t)}function Eb(o,t){const i=zs(t,this.size,2);o.uniform2fv(this.addr,i)}function bb(o,t){const i=zs(t,this.size,3);o.uniform3fv(this.addr,i)}function Tb(o,t){const i=zs(t,this.size,4);o.uniform4fv(this.addr,i)}function Ab(o,t){const i=zs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Cb(o,t){const i=zs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Rb(o,t){const i=zs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function wb(o,t){o.uniform1iv(this.addr,t)}function Db(o,t){o.uniform2iv(this.addr,t)}function Ub(o,t){o.uniform3iv(this.addr,t)}function Nb(o,t){o.uniform4iv(this.addr,t)}function Lb(o,t){o.uniform1uiv(this.addr,t)}function Ob(o,t){o.uniform2uiv(this.addr,t)}function zb(o,t){o.uniform3uiv(this.addr,t)}function Pb(o,t){o.uniform4uiv(this.addr,t)}function Bb(o,t,i){const r=this.cache,l=t.length,u=Lc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||fv,u[h])}function Ib(o,t,i){const r=this.cache,l=t.length,u=Lc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||dv,u[h])}function Fb(o,t,i){const r=this.cache,l=t.length,u=Lc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||pv,u[h])}function Hb(o,t,i){const r=this.cache,l=t.length,u=Lc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||hv,u[h])}function Gb(o){switch(o){case 5126:return Mb;case 35664:return Eb;case 35665:return bb;case 35666:return Tb;case 35674:return Ab;case 35675:return Cb;case 35676:return Rb;case 5124:case 35670:return wb;case 35667:case 35671:return Db;case 35668:case 35672:return Ub;case 35669:case 35673:return Nb;case 5125:return Lb;case 36294:return Ob;case 36295:return zb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Vb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Sb(i.type)}}class kb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Gb(i.type)}}class Wb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function d0(o,t){o.seq.push(t),o.map[t.id]=t}function qb(o,t,i){const r=o.name,l=r.length;for(Sh.lastIndex=0;;){const u=Sh.exec(r),h=Sh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){d0(i,p===void 0?new Vb(d,o,t):new kb(d,o,t));break}else{let y=i.map[d];y===void 0&&(y=new Wb(d),d0(i,y)),i=y}}}class Ac{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);qb(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function p0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const Xb=37297;let Yb=0;function jb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const m0=new dt;function Zb(o){Tt._getMatrix(m0,Tt.workingColorSpace,o);const t=`mat3( ${m0.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Dc:return[t,"LinearTransferOETF"];case Gt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function g0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+jb(o.getShaderSource(t),h)}else return l}function Qb(o,t){const i=Zb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Kb(o,t){let i;switch(t){case pS:i="Linear";break;case mS:i="Reinhard";break;case gS:i="Cineon";break;case _S:i="ACESFilmic";break;case yS:i="AgX";break;case xS:i="Neutral";break;case vS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new Q;function Jb(){Tt.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),t=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $b(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function eT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function tT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Bo(o){return o!==""}function _0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function v0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nT=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(o){return o.replace(nT,aT)}const iT=new Map;function aT(o,t){let i=pt[t];if(i===void 0){const r=iT.get(t);if(r!==void 0)i=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return md(i)}const rT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(o){return o.replace(rT,sT)}function sT(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function x0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function oT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===I0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Yx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function lT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case Cs:t="ENVMAP_TYPE_CUBE";break;case wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function uT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case F0:t="ENVMAP_BLENDING_MULTIPLY";break;case hS:t="ENVMAP_BLENDING_MIX";break;case dS:t="ENVMAP_BLENDING_ADD";break}return t}function fT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function hT(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=oT(i),p=lT(i),v=cT(i),y=uT(i),x=fT(i),M=$b(i),E=eT(u),A=l.createProgram();let S,g,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),g.length>0&&(g+=`
`)):(S=[x0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),g=[x0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?pt.tonemapping_pars_fragment:"",i.toneMapping!==qa?Kb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Qb("linearToOutputTexel",i.outputColorSpace),Jb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=md(h),h=_0(h,i),h=v0(h,i),d=md(d),d=_0(d,i),d=v0(d,i),h=y0(h),d=y0(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=z+S+h,w=z+g+d,K=p0(l,l.VERTEX_SHADER,O),G=p0(l,l.FRAGMENT_SHADER,w);l.attachShader(A,K),l.attachShader(A,G),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(F){if(o.debug.checkShaderErrors){const le=l.getProgramInfoLog(A).trim(),te=l.getShaderInfoLog(K).trim(),me=l.getShaderInfoLog(G).trim();let he=!0,P=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,K,G);else{const j=g0(l,K,"vertex"),Y=g0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+le+`
`+j+`
`+Y)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(te===""||me==="")&&(P=!1);P&&(F.diagnostics={runnable:he,programLog:le,vertexShader:{log:te,prefix:S},fragmentShader:{log:me,prefix:g}})}l.deleteShader(K),l.deleteShader(G),Z=new Ac(l,A),D=tT(l,A)}let Z;this.getUniforms=function(){return Z===void 0&&B(this),Z};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,Xb)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Yb++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=K,this.fragmentShader=G,this}let dT=0;class pT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new mT(t),i.set(t,r)),r}}class mT{constructor(t){this.id=dT++,this.code=t,this.usedTimes=0}}function gT(o,t,i,r,l,u,h){const d=new Rd,m=new pT,p=new Set,v=[],y=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,R,F,le,te){const me=le.fog,he=te.geometry,P=D.isMeshStandardMaterial?le.environment:null,j=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),Y=j&&j.mapping===wc?j.image.height:null,Se=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Me=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,L=Me!==void 0?Me.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let ve,q,oe,Ee;if(Se){const bt=Ui[Se];ve=bt.vertexShader,q=bt.fragmentShader}else ve=D.vertexShader,q=D.fragmentShader,m.update(D),oe=m.getVertexShaderID(D),Ee=m.getFragmentShaderID(D);const xe=o.getRenderTarget(),Be=o.state.buffers.depth.getReversed(),Ie=te.isInstancedMesh===!0,et=te.isBatchedMesh===!0,Et=!!D.map,lt=!!D.matcap,Ut=!!j,U=!!D.aoMap,Te=!!D.lightMap,Ae=!!D.bumpMap,Qe=!!D.normalMap,Fe=!!D.displacementMap,ct=!!D.emissiveMap,Ge=!!D.metalnessMap,N=!!D.roughnessMap,b=D.anisotropy>0,ee=D.clearcoat>0,de=D.dispersion>0,be=D.iridescence>0,ge=D.sheen>0,je=D.transmission>0,Le=b&&!!D.anisotropyMap,He=ee&&!!D.clearcoatMap,_t=ee&&!!D.clearcoatNormalMap,Re=ee&&!!D.clearcoatRoughnessMap,Ve=be&&!!D.iridescenceMap,Je=be&&!!D.iridescenceThicknessMap,Ze=ge&&!!D.sheenColorMap,Pe=ge&&!!D.sheenRoughnessMap,nt=!!D.specularMap,ut=!!D.specularColorMap,Pt=!!D.specularIntensityMap,V=je&&!!D.transmissionMap,we=je&&!!D.thicknessMap,ce=!!D.gradientMap,ye=!!D.alphaMap,De=D.alphaTest>0,Oe=!!D.alphaHash,it=!!D.extensions;let Yt=qa;D.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Yt=o.toneMapping);const sn={shaderID:Se,shaderType:D.type,shaderName:D.name,vertexShader:ve,fragmentShader:q,defines:D.defines,customVertexShaderID:oe,customFragmentShaderID:Ee,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:et,batchingColor:et&&te._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,instancingMorph:Ie&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?o.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Us,alphaToCoverage:!!D.alphaToCoverage,map:Et,matcap:lt,envMap:Ut,envMapMode:Ut&&j.mapping,envMapCubeUVHeight:Y,aoMap:U,lightMap:Te,bumpMap:Ae,normalMap:Qe,displacementMap:x&&Fe,emissiveMap:ct,normalMapObjectSpace:Qe&&D.normalMapType===bS,normalMapTangentSpace:Qe&&D.normalMapType===K0,metalnessMap:Ge,roughnessMap:N,anisotropy:b,anisotropyMap:Le,clearcoat:ee,clearcoatMap:He,clearcoatNormalMap:_t,clearcoatRoughnessMap:Re,dispersion:de,iridescence:be,iridescenceMap:Ve,iridescenceThicknessMap:Je,sheen:ge,sheenColorMap:Ze,sheenRoughnessMap:Pe,specularMap:nt,specularColorMap:ut,specularIntensityMap:Pt,transmission:je,transmissionMap:V,thicknessMap:we,gradientMap:ce,opaque:D.transparent===!1&&D.blending===Ms&&D.alphaToCoverage===!1,alphaMap:ye,alphaTest:De,alphaHash:Oe,combine:D.combine,mapUv:Et&&A(D.map.channel),aoMapUv:U&&A(D.aoMap.channel),lightMapUv:Te&&A(D.lightMap.channel),bumpMapUv:Ae&&A(D.bumpMap.channel),normalMapUv:Qe&&A(D.normalMap.channel),displacementMapUv:Fe&&A(D.displacementMap.channel),emissiveMapUv:ct&&A(D.emissiveMap.channel),metalnessMapUv:Ge&&A(D.metalnessMap.channel),roughnessMapUv:N&&A(D.roughnessMap.channel),anisotropyMapUv:Le&&A(D.anisotropyMap.channel),clearcoatMapUv:He&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:_t&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&A(D.sheenRoughnessMap.channel),specularMapUv:nt&&A(D.specularMap.channel),specularColorMapUv:ut&&A(D.specularColorMap.channel),specularIntensityMapUv:Pt&&A(D.specularIntensityMap.channel),transmissionMapUv:V&&A(D.transmissionMap.channel),thicknessMapUv:we&&A(D.thicknessMap.channel),alphaMapUv:ye&&A(D.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Qe||b),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(Et||ye),fog:!!me,useFog:D.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Be,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Et&&D.map.isVideoTexture===!0&&Tt.getTransfer(D.map.colorSpace)===Gt,decodeVideoTextureEmissive:ct&&D.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(D.emissiveMap.colorSpace)===Gt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ni,flipSided:D.side===Rn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:it&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&D.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return sn.vertexUv1s=p.has(1),sn.vertexUv2s=p.has(2),sn.vertexUv3s=p.has(3),p.clear(),sn}function g(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)R.push(F),R.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(z(R,D),O(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function z(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function O(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const R=E[D.type];let F;if(R){const le=Ui[R];F=$S.clone(le.uniforms)}else F=D.uniforms;return F}function K(D,R){let F;for(let le=0,te=v.length;le<te;le++){const me=v[le];if(me.cacheKey===R){F=me,++F.usedTimes;break}}return F===void 0&&(F=new hT(o,R,D,u),v.push(F)),F}function G(D){if(--D.usedTimes===0){const R=v.indexOf(D);v[R]=v[v.length-1],v.pop(),D.destroy()}}function B(D){m.remove(D)}function Z(){m.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:w,acquireProgram:K,releaseProgram:G,releaseShaderCache:B,programs:v,dispose:Z}}function _T(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function vT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function S0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function M0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(y,x,M,E,A,S){let g=o[t];return g===void 0?(g={id:y.id,object:y,geometry:x,material:M,groupOrder:E,renderOrder:y.renderOrder,z:A,group:S},o[t]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=y.renderOrder,g.z=A,g.group=S),t++,g}function d(y,x,M,E,A,S){const g=h(y,x,M,E,A,S);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(y,x,M,E,A,S){const g=h(y,x,M,E,A,S);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(y,x){i.length>1&&i.sort(y||vT),r.length>1&&r.sort(x||S0),l.length>1&&l.sort(x||S0)}function v(){for(let y=t,x=o.length;y<x;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function yT(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new M0,o.set(r,[h])):l>=u.length?(h=new M0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function xT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new wt};break;case"SpotLight":i={position:new Q,direction:new Q,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[t.id]=i,i}}}function ST(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let MT=0;function ET(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function bT(o){const t=new xT,i=ST(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,u=new Xt,h=new Xt;function d(p){let v=0,y=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,A=0,S=0,g=0,z=0,O=0,w=0,K=0,G=0,B=0;p.sort(ET);for(let D=0,R=p.length;D<R;D++){const F=p[D],le=F.color,te=F.intensity,me=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=le.r*te,y+=le.g*te,x+=le.b*te;else if(F.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(F.sh.coefficients[P],te);B++}else if(F.isDirectionalLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,Y=i.get(F);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=F.shadow.matrix,z++}r.directional[M]=P,M++}else if(F.isSpotLight){const P=t.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(le).multiplyScalar(te),P.distance=me,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,r.spot[A]=P;const j=F.shadow;if(F.map&&(r.spotLightMap[K]=F.map,K++,j.updateMatrices(F),F.castShadow&&G++),r.spotLightMatrix[A]=j.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=he,w++}A++}else if(F.isRectAreaLight){const P=t.get(F);P.color.copy(le).multiplyScalar(te),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=P,S++}else if(F.isPointLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const j=F.shadow,Y=i.get(F);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=F.shadow.matrix,O++}r.point[E]=P,E++}else if(F.isHemisphereLight){const P=t.get(F);P.skyColor.copy(F.color).multiplyScalar(te),P.groundColor.copy(F.groundColor).multiplyScalar(te),r.hemi[g]=P,g++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==E||Z.spotLength!==A||Z.rectAreaLength!==S||Z.hemiLength!==g||Z.numDirectionalShadows!==z||Z.numPointShadows!==O||Z.numSpotShadows!==w||Z.numSpotMaps!==K||Z.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=w+K-G,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=B,Z.directionalLength=M,Z.pointLength=E,Z.spotLength=A,Z.rectAreaLength=S,Z.hemiLength=g,Z.numDirectionalShadows=z,Z.numPointShadows=O,Z.numSpotShadows=w,Z.numSpotMaps=K,Z.numLightProbes=B,r.version=MT++)}function m(p,v){let y=0,x=0,M=0,E=0,A=0;const S=v.matrixWorldInverse;for(let g=0,z=p.length;g<z;g++){const O=p[g];if(O.isDirectionalLight){const w=r.directional[y];w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),y++}else if(O.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(S),h.identity(),u.copy(O.matrixWorld),u.premultiply(S),h.extractRotation(u),w.halfWidth.set(O.width*.5,0,0),w.halfHeight.set(0,O.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(S),x++}else if(O.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(O.matrixWorld),w.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function E0(o){const t=new bT(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function TT(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new E0(o),t.set(l,[d])):u>=h.length?(d=new E0(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}class AT extends Os{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CT extends Os{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const RT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DT(o,t,i){let r=new wd;const l=new At,u=new At,h=new Vt,d=new AT({depthPacking:ES}),m=new CT,p={},v=i.maxTextureSize,y={[Xa]:Rn,[Rn]:Xa,[Ni]:Ni},x=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:RT,fragmentShader:wT}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ti;E.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Cn(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0;let g=this.type;this.render=function(G,B,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),le=o.state;le.setBlending(Wa),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const te=g!==aa&&this.type===aa,me=g===aa&&this.type!==aa;for(let he=0,P=G.length;he<P;he++){const j=G[he],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Se=Y.getFrameExtents();if(l.multiply(Se),u.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/Se.x),l.x=u.x*Se.x,Y.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/Se.y),l.y=u.y*Se.y,Y.mapSize.y=u.y)),Y.map===null||te===!0||me===!0){const L=this.type!==aa?{minFilter:Ei,magFilter:Ei}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ar(l.x,l.y,L),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Me=Y.getViewportCount();for(let L=0;L<Me;L++){const ne=Y.getViewport(L);h.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),le.viewport(h),Y.updateMatrices(j,L),r=Y.getFrustum(),w(B,Z,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&z(Y,Z),Y.needsUpdate=!1}g=this.type,S.needsUpdate=!1,o.setRenderTarget(D,R,F)};function z(G,B){const Z=t.update(A);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ar(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(B,null,Z,x,A,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(B,null,Z,M,A,null)}function O(G,B,Z,D){let R=null;const F=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(F!==void 0)R=F;else if(R=Z.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const le=R.uuid,te=B.uuid;let me=p[le];me===void 0&&(me={},p[le]=me);let he=me[te];he===void 0&&(he=R.clone(),me[te]=he,B.addEventListener("dispose",K)),R=he}if(R.visible=B.visible,R.wireframe=B.wireframe,D===aa?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:y[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=o.properties.get(R);le.light=Z}return R}function w(G,B,Z,D,R){if(G.visible===!1)return;if(G.layers.test(B.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===aa)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const te=t.update(G),me=G.material;if(Array.isArray(me)){const he=te.groups;for(let P=0,j=he.length;P<j;P++){const Y=he[P],Se=me[Y.materialIndex];if(Se&&Se.visible){const Me=O(G,Se,D,R);G.onBeforeShadow(o,G,B,Z,te,Me,Y),o.renderBufferDirect(Z,null,te,Me,G,Y),G.onAfterShadow(o,G,B,Z,te,Me,Y)}}}else if(me.visible){const he=O(G,me,D,R);G.onBeforeShadow(o,G,B,Z,te,he,null),o.renderBufferDirect(Z,null,te,he,G,null),G.onAfterShadow(o,G,B,Z,te,he,null)}}const le=G.children;for(let te=0,me=le.length;te<me;te++)w(le[te],B,Z,D,R)}function K(G){G.target.removeEventListener("dispose",K);for(const Z in p){const D=p[Z],R=G.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const UT={[Uh]:Nh,[Lh]:Ph,[Oh]:Bh,[Ts]:zh,[Nh]:Uh,[Ph]:Lh,[Bh]:Oh,[zh]:Ts};function NT(o,t){function i(){let V=!1;const we=new Vt;let ce=null;const ye=new Vt(0,0,0,0);return{setMask:function(De){ce!==De&&!V&&(o.colorMask(De,De,De,De),ce=De)},setLocked:function(De){V=De},setClear:function(De,Oe,it,Yt,sn){sn===!0&&(De*=Yt,Oe*=Yt,it*=Yt),we.set(De,Oe,it,Yt),ye.equals(we)===!1&&(o.clearColor(De,Oe,it,Yt),ye.copy(we))},reset:function(){V=!1,ce=null,ye.set(-1,0,0,0)}}}function r(){let V=!1,we=!1,ce=null,ye=null,De=null;return{setReversed:function(Oe){if(we!==Oe){const it=t.get("EXT_clip_control");we?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Yt=De;De=null,this.setClear(Yt)}we=Oe},getReversed:function(){return we},setTest:function(Oe){Oe?xe(o.DEPTH_TEST):Be(o.DEPTH_TEST)},setMask:function(Oe){ce!==Oe&&!V&&(o.depthMask(Oe),ce=Oe)},setFunc:function(Oe){if(we&&(Oe=UT[Oe]),ye!==Oe){switch(Oe){case Uh:o.depthFunc(o.NEVER);break;case Nh:o.depthFunc(o.ALWAYS);break;case Lh:o.depthFunc(o.LESS);break;case Ts:o.depthFunc(o.LEQUAL);break;case Oh:o.depthFunc(o.EQUAL);break;case zh:o.depthFunc(o.GEQUAL);break;case Ph:o.depthFunc(o.GREATER);break;case Bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ye=Oe}},setLocked:function(Oe){V=Oe},setClear:function(Oe){De!==Oe&&(we&&(Oe=1-Oe),o.clearDepth(Oe),De=Oe)},reset:function(){V=!1,ce=null,ye=null,De=null,we=!1}}}function l(){let V=!1,we=null,ce=null,ye=null,De=null,Oe=null,it=null,Yt=null,sn=null;return{setTest:function(bt){V||(bt?xe(o.STENCIL_TEST):Be(o.STENCIL_TEST))},setMask:function(bt){we!==bt&&!V&&(o.stencilMask(bt),we=bt)},setFunc:function(bt,pn,hi){(ce!==bt||ye!==pn||De!==hi)&&(o.stencilFunc(bt,pn,hi),ce=bt,ye=pn,De=hi)},setOp:function(bt,pn,hi){(Oe!==bt||it!==pn||Yt!==hi)&&(o.stencilOp(bt,pn,hi),Oe=bt,it=pn,Yt=hi)},setLocked:function(bt){V=bt},setClear:function(bt){sn!==bt&&(o.clearStencil(bt),sn=bt)},reset:function(){V=!1,we=null,ce=null,ye=null,De=null,Oe=null,it=null,Yt=null,sn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},y={},x=new WeakMap,M=[],E=null,A=!1,S=null,g=null,z=null,O=null,w=null,K=null,G=null,B=new wt(0,0,0),Z=0,D=!1,R=null,F=null,le=null,te=null,me=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=j>=2);let Se=null,Me={};const L=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),ve=new Vt().fromArray(L),q=new Vt().fromArray(ne);function oe(V,we,ce,ye){const De=new Uint8Array(4),Oe=o.createTexture();o.bindTexture(V,Oe),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ce;it++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,ye,0,o.RGBA,o.UNSIGNED_BYTE,De):o.texImage2D(we+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,De);return Oe}const Ee={};Ee[o.TEXTURE_2D]=oe(o.TEXTURE_2D,o.TEXTURE_2D,1),Ee[o.TEXTURE_CUBE_MAP]=oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[o.TEXTURE_2D_ARRAY]=oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ee[o.TEXTURE_3D]=oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),xe(o.DEPTH_TEST),h.setFunc(Ts),Ae(!1),Qe(C_),xe(o.CULL_FACE),U(Wa);function xe(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function Be(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function Ie(V,we){return y[V]!==we?(o.bindFramebuffer(V,we),y[V]=we,V===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=we),V===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=we),!0):!1}function et(V,we){let ce=M,ye=!1;if(V){ce=x.get(we),ce===void 0&&(ce=[],x.set(we,ce));const De=V.textures;if(ce.length!==De.length||ce[0]!==o.COLOR_ATTACHMENT0){for(let Oe=0,it=De.length;Oe<it;Oe++)ce[Oe]=o.COLOR_ATTACHMENT0+Oe;ce.length=De.length,ye=!0}}else ce[0]!==o.BACK&&(ce[0]=o.BACK,ye=!0);ye&&o.drawBuffers(ce)}function Et(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const lt={[xr]:o.FUNC_ADD,[Zx]:o.FUNC_SUBTRACT,[Qx]:o.FUNC_REVERSE_SUBTRACT};lt[Kx]=o.MIN,lt[Jx]=o.MAX;const Ut={[$x]:o.ZERO,[eS]:o.ONE,[tS]:o.SRC_COLOR,[wh]:o.SRC_ALPHA,[oS]:o.SRC_ALPHA_SATURATE,[rS]:o.DST_COLOR,[iS]:o.DST_ALPHA,[nS]:o.ONE_MINUS_SRC_COLOR,[Dh]:o.ONE_MINUS_SRC_ALPHA,[sS]:o.ONE_MINUS_DST_COLOR,[aS]:o.ONE_MINUS_DST_ALPHA,[lS]:o.CONSTANT_COLOR,[cS]:o.ONE_MINUS_CONSTANT_COLOR,[uS]:o.CONSTANT_ALPHA,[fS]:o.ONE_MINUS_CONSTANT_ALPHA};function U(V,we,ce,ye,De,Oe,it,Yt,sn,bt){if(V===Wa){A===!0&&(Be(o.BLEND),A=!1);return}if(A===!1&&(xe(o.BLEND),A=!0),V!==jx){if(V!==S||bt!==D){if((g!==xr||w!==xr)&&(o.blendEquation(o.FUNC_ADD),g=xr,w=xr),bt)switch(V){case Ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R_:o.blendFunc(o.ONE,o.ONE);break;case w_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case D_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case R_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case w_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case D_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}z=null,O=null,K=null,G=null,B.set(0,0,0),Z=0,S=V,D=bt}return}De=De||we,Oe=Oe||ce,it=it||ye,(we!==g||De!==w)&&(o.blendEquationSeparate(lt[we],lt[De]),g=we,w=De),(ce!==z||ye!==O||Oe!==K||it!==G)&&(o.blendFuncSeparate(Ut[ce],Ut[ye],Ut[Oe],Ut[it]),z=ce,O=ye,K=Oe,G=it),(Yt.equals(B)===!1||sn!==Z)&&(o.blendColor(Yt.r,Yt.g,Yt.b,sn),B.copy(Yt),Z=sn),S=V,D=!1}function Te(V,we){V.side===Ni?Be(o.CULL_FACE):xe(o.CULL_FACE);let ce=V.side===Rn;we&&(ce=!ce),Ae(ce),V.blending===Ms&&V.transparent===!1?U(Wa):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const ye=V.stencilWrite;d.setTest(ye),ye&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ct(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):Be(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function Qe(V){V!==qx?(xe(o.CULL_FACE),V!==F&&(V===C_?o.cullFace(o.BACK):V===Xx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Be(o.CULL_FACE),F=V}function Fe(V){V!==le&&(P&&o.lineWidth(V),le=V)}function ct(V,we,ce){V?(xe(o.POLYGON_OFFSET_FILL),(te!==we||me!==ce)&&(o.polygonOffset(we,ce),te=we,me=ce)):Be(o.POLYGON_OFFSET_FILL)}function Ge(V){V?xe(o.SCISSOR_TEST):Be(o.SCISSOR_TEST)}function N(V){V===void 0&&(V=o.TEXTURE0+he-1),Se!==V&&(o.activeTexture(V),Se=V)}function b(V,we,ce){ce===void 0&&(Se===null?ce=o.TEXTURE0+he-1:ce=Se);let ye=Me[ce];ye===void 0&&(ye={type:void 0,texture:void 0},Me[ce]=ye),(ye.type!==V||ye.texture!==we)&&(Se!==ce&&(o.activeTexture(ce),Se=ce),o.bindTexture(V,we||Ee[V]),ye.type=V,ye.texture=we)}function ee(){const V=Me[Se];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function de(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(V){ve.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),ve.copy(V))}function Pe(V){q.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),q.copy(V))}function nt(V,we){let ce=p.get(we);ce===void 0&&(ce=new WeakMap,p.set(we,ce));let ye=ce.get(V);ye===void 0&&(ye=o.getUniformBlockIndex(we,V.name),ce.set(V,ye))}function ut(V,we){const ye=p.get(we).get(V);m.get(we)!==ye&&(o.uniformBlockBinding(we,ye,V.__bindingPointIndex),m.set(we,ye))}function Pt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Se=null,Me={},y={},x=new WeakMap,M=[],E=null,A=!1,S=null,g=null,z=null,O=null,w=null,K=null,G=null,B=new wt(0,0,0),Z=0,D=!1,R=null,F=null,le=null,te=null,me=null,ve.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:xe,disable:Be,bindFramebuffer:Ie,drawBuffers:et,useProgram:Et,setBlending:U,setMaterial:Te,setFlipSided:Ae,setCullFace:Qe,setLineWidth:Fe,setPolygonOffset:ct,setScissorTest:Ge,activeTexture:N,bindTexture:b,unbindTexture:ee,compressedTexImage2D:de,compressedTexImage3D:be,texImage2D:Ve,texImage3D:Je,updateUBOMapping:nt,uniformBlockBinding:ut,texStorage2D:_t,texStorage3D:Re,texSubImage2D:ge,texSubImage3D:je,compressedTexSubImage2D:Le,compressedTexSubImage3D:He,scissor:Ze,viewport:Pe,reset:Pt}}function b0(o,t,i,r){const l=LT(r);switch(i){case W0:return o*t;case X0:return o*t;case Y0:return o*t*2;case j0:return o*t/l.components*l.byteLength;case bd:return o*t/l.components*l.byteLength;case Z0:return o*t*2/l.components*l.byteLength;case Td:return o*t*2/l.components*l.byteLength;case q0:return o*t*3/l.components*l.byteLength;case Mi:return o*t*4/l.components*l.byteLength;case Ad:return o*t*4/l.components*l.byteLength;case Sc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ec:case bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kh:case qh:return Math.max(o,16)*Math.max(t,8)/4;case Vh:case Wh:return Math.max(o,8)*Math.max(t,8)/2;case Xh:case Yh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case jh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case $h:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ed:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case td:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case nd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case id:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ad:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case rd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case sd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case od:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ld:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tc:case cd:case ud:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Q0:case fd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case hd:case dd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LT(o){switch(o){case la:case G0:return{byteLength:1,components:1};case Io:case V0:case Fo:return{byteLength:2,components:1};case Md:case Ed:return{byteLength:2,components:4};case Tr:case Sd:case ra:return{byteLength:4,components:1};case k0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function OT(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,v=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return M?new OffscreenCanvas(N,b):Rc("canvas")}function A(N,b,ee){let de=1;const be=Ge(N);if((be.width>ee||be.height>ee)&&(de=ee/Math.max(be.width,be.height)),de<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ge=Math.floor(de*be.width),je=Math.floor(de*be.height);y===void 0&&(y=E(ge,je));const Le=b?E(ge,je):y;return Le.width=ge,Le.height=je,Le.getContext("2d").drawImage(N,0,0,ge,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ge+"x"+je+")."),Le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),N;return N}function S(N){return N.generateMipmaps}function g(N){o.generateMipmap(N)}function z(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(N,b,ee,de,be=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge=b;if(b===o.RED&&(ee===o.FLOAT&&(ge=o.R32F),ee===o.HALF_FLOAT&&(ge=o.R16F),ee===o.UNSIGNED_BYTE&&(ge=o.R8)),b===o.RED_INTEGER&&(ee===o.UNSIGNED_BYTE&&(ge=o.R8UI),ee===o.UNSIGNED_SHORT&&(ge=o.R16UI),ee===o.UNSIGNED_INT&&(ge=o.R32UI),ee===o.BYTE&&(ge=o.R8I),ee===o.SHORT&&(ge=o.R16I),ee===o.INT&&(ge=o.R32I)),b===o.RG&&(ee===o.FLOAT&&(ge=o.RG32F),ee===o.HALF_FLOAT&&(ge=o.RG16F),ee===o.UNSIGNED_BYTE&&(ge=o.RG8)),b===o.RG_INTEGER&&(ee===o.UNSIGNED_BYTE&&(ge=o.RG8UI),ee===o.UNSIGNED_SHORT&&(ge=o.RG16UI),ee===o.UNSIGNED_INT&&(ge=o.RG32UI),ee===o.BYTE&&(ge=o.RG8I),ee===o.SHORT&&(ge=o.RG16I),ee===o.INT&&(ge=o.RG32I)),b===o.RGB_INTEGER&&(ee===o.UNSIGNED_BYTE&&(ge=o.RGB8UI),ee===o.UNSIGNED_SHORT&&(ge=o.RGB16UI),ee===o.UNSIGNED_INT&&(ge=o.RGB32UI),ee===o.BYTE&&(ge=o.RGB8I),ee===o.SHORT&&(ge=o.RGB16I),ee===o.INT&&(ge=o.RGB32I)),b===o.RGBA_INTEGER&&(ee===o.UNSIGNED_BYTE&&(ge=o.RGBA8UI),ee===o.UNSIGNED_SHORT&&(ge=o.RGBA16UI),ee===o.UNSIGNED_INT&&(ge=o.RGBA32UI),ee===o.BYTE&&(ge=o.RGBA8I),ee===o.SHORT&&(ge=o.RGBA16I),ee===o.INT&&(ge=o.RGBA32I)),b===o.RGB&&ee===o.UNSIGNED_INT_5_9_9_9_REV&&(ge=o.RGB9_E5),b===o.RGBA){const je=be?Dc:Tt.getTransfer(de);ee===o.FLOAT&&(ge=o.RGBA32F),ee===o.HALF_FLOAT&&(ge=o.RGBA16F),ee===o.UNSIGNED_BYTE&&(ge=je===Gt?o.SRGB8_ALPHA8:o.RGBA8),ee===o.UNSIGNED_SHORT_4_4_4_4&&(ge=o.RGBA4),ee===o.UNSIGNED_SHORT_5_5_5_1&&(ge=o.RGB5_A1)}return(ge===o.R16F||ge===o.R32F||ge===o.RG16F||ge===o.RG32F||ge===o.RGBA16F||ge===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ge}function w(N,b){let ee;return N?b===null||b===Tr||b===Rs?ee=o.DEPTH24_STENCIL8:b===ra?ee=o.DEPTH32F_STENCIL8:b===Io&&(ee=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Tr||b===Rs?ee=o.DEPTH_COMPONENT24:b===ra?ee=o.DEPTH_COMPONENT32F:b===Io&&(ee=o.DEPTH_COMPONENT16),ee}function K(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ei&&N.minFilter!==Li?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function G(N){const b=N.target;b.removeEventListener("dispose",G),Z(b),b.isVideoTexture&&v.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),R(b)}function Z(N){const b=r.get(N);if(b.__webglInit===void 0)return;const ee=N.source,de=x.get(ee);if(de){const be=de[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&D(N),Object.keys(de).length===0&&x.delete(ee)}r.remove(N)}function D(N){const b=r.get(N);o.deleteTexture(b.__webglTexture);const ee=N.source,de=x.get(ee);delete de[b.__cacheKey],h.memory.textures--}function R(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let be=0;be<b.__webglFramebuffer[de].length;be++)o.deleteFramebuffer(b.__webglFramebuffer[de][be]);else o.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)o.deleteFramebuffer(b.__webglFramebuffer[de]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=N.textures;for(let de=0,be=ee.length;de<be;de++){const ge=r.get(ee[de]);ge.__webglTexture&&(o.deleteTexture(ge.__webglTexture),h.memory.textures--),r.remove(ee[de])}r.remove(N)}let F=0;function le(){F=0}function te(){const N=F;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),F+=1,N}function me(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function he(N,b){const ee=r.get(N);if(N.isVideoTexture&&Fe(N),N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){const de=N.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(ee,N,b);return}}i.bindTexture(o.TEXTURE_2D,ee.__webglTexture,o.TEXTURE0+b)}function P(N,b){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){q(ee,N,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ee.__webglTexture,o.TEXTURE0+b)}function j(N,b){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){q(ee,N,b);return}i.bindTexture(o.TEXTURE_3D,ee.__webglTexture,o.TEXTURE0+b)}function Y(N,b){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){oe(ee,N,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture,o.TEXTURE0+b)}const Se={[Hh]:o.REPEAT,[Mr]:o.CLAMP_TO_EDGE,[Gh]:o.MIRRORED_REPEAT},Me={[Ei]:o.NEAREST,[SS]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[Yf]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},L={[TS]:o.NEVER,[US]:o.ALWAYS,[AS]:o.LESS,[J0]:o.LEQUAL,[CS]:o.EQUAL,[DS]:o.GEQUAL,[RS]:o.GREATER,[wS]:o.NOTEQUAL};function ne(N,b){if(b.type===ra&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Li||b.magFilter===Yf||b.magFilter===Jl||b.magFilter===Er||b.minFilter===Li||b.minFilter===Yf||b.minFilter===Jl||b.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Se[b.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Se[b.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Se[b.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Me[b.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Me[b.minFilter]),b.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ei||b.minFilter!==Jl&&b.minFilter!==Er||b.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ee=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ve(N,b){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",G));const de=b.source;let be=x.get(de);be===void 0&&(be={},x.set(de,be));const ge=me(b);if(ge!==N.__cacheKey){be[ge]===void 0&&(be[ge]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ee=!0),be[ge].usedTimes++;const je=be[N.__cacheKey];je!==void 0&&(be[N.__cacheKey].usedTimes--,je.usedTimes===0&&D(b)),N.__cacheKey=ge,N.__webglTexture=be[ge].texture}return ee}function q(N,b,ee){let de=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=o.TEXTURE_3D);const be=ve(N,b),ge=b.source;i.bindTexture(de,N.__webglTexture,o.TEXTURE0+ee);const je=r.get(ge);if(ge.version!==je.__version||be===!0){i.activeTexture(o.TEXTURE0+ee);const Le=Tt.getPrimaries(Tt.workingColorSpace),He=b.colorSpace===ka?null:Tt.getPrimaries(b.colorSpace),_t=b.colorSpace===ka||Le===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Re=A(b.image,!1,l.maxTextureSize);Re=ct(b,Re);const Ve=u.convert(b.format,b.colorSpace),Je=u.convert(b.type);let Ze=O(b.internalFormat,Ve,Je,b.colorSpace,b.isVideoTexture);ne(de,b);let Pe;const nt=b.mipmaps,ut=b.isVideoTexture!==!0,Pt=je.__version===void 0||be===!0,V=ge.dataReady,we=K(b,Re);if(b.isDepthTexture)Ze=w(b.format===ws,b.type),Pt&&(ut?i.texStorage2D(o.TEXTURE_2D,1,Ze,Re.width,Re.height):i.texImage2D(o.TEXTURE_2D,0,Ze,Re.width,Re.height,0,Ve,Je,null));else if(b.isDataTexture)if(nt.length>0){ut&&Pt&&i.texStorage2D(o.TEXTURE_2D,we,Ze,nt[0].width,nt[0].height);for(let ce=0,ye=nt.length;ce<ye;ce++)Pe=nt[ce],ut?V&&i.texSubImage2D(o.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ve,Je,Pe.data):i.texImage2D(o.TEXTURE_2D,ce,Ze,Pe.width,Pe.height,0,Ve,Je,Pe.data);b.generateMipmaps=!1}else ut?(Pt&&i.texStorage2D(o.TEXTURE_2D,we,Ze,Re.width,Re.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Re.width,Re.height,Ve,Je,Re.data)):i.texImage2D(o.TEXTURE_2D,0,Ze,Re.width,Re.height,0,Ve,Je,Re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ut&&Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ze,nt[0].width,nt[0].height,Re.depth);for(let ce=0,ye=nt.length;ce<ye;ce++)if(Pe=nt[ce],b.format!==Mi)if(Ve!==null)if(ut){if(V)if(b.layerUpdates.size>0){const De=b0(Pe.width,Pe.height,b.format,b.type);for(const Oe of b.layerUpdates){const it=Pe.data.subarray(Oe*De/Pe.data.BYTES_PER_ELEMENT,(Oe+1)*De/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,Oe,Pe.width,Pe.height,1,Ve,it)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,Re.depth,Ve,Pe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ce,Ze,Pe.width,Pe.height,Re.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,Re.depth,Ve,Je,Pe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ce,Ze,Pe.width,Pe.height,Re.depth,0,Ve,Je,Pe.data)}else{ut&&Pt&&i.texStorage2D(o.TEXTURE_2D,we,Ze,nt[0].width,nt[0].height);for(let ce=0,ye=nt.length;ce<ye;ce++)Pe=nt[ce],b.format!==Mi?Ve!==null?ut?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ve,Pe.data):i.compressedTexImage2D(o.TEXTURE_2D,ce,Ze,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?V&&i.texSubImage2D(o.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ve,Je,Pe.data):i.texImage2D(o.TEXTURE_2D,ce,Ze,Pe.width,Pe.height,0,Ve,Je,Pe.data)}else if(b.isDataArrayTexture)if(ut){if(Pt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ze,Re.width,Re.height,Re.depth),V)if(b.layerUpdates.size>0){const ce=b0(Re.width,Re.height,b.format,b.type);for(const ye of b.layerUpdates){const De=Re.data.subarray(ye*ce/Re.data.BYTES_PER_ELEMENT,(ye+1)*ce/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ye,Re.width,Re.height,1,Ve,Je,De)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ve,Je,Re.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ze,Re.width,Re.height,Re.depth,0,Ve,Je,Re.data);else if(b.isData3DTexture)ut?(Pt&&i.texStorage3D(o.TEXTURE_3D,we,Ze,Re.width,Re.height,Re.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ve,Je,Re.data)):i.texImage3D(o.TEXTURE_3D,0,Ze,Re.width,Re.height,Re.depth,0,Ve,Je,Re.data);else if(b.isFramebufferTexture){if(Pt)if(ut)i.texStorage2D(o.TEXTURE_2D,we,Ze,Re.width,Re.height);else{let ce=Re.width,ye=Re.height;for(let De=0;De<we;De++)i.texImage2D(o.TEXTURE_2D,De,Ze,ce,ye,0,Ve,Je,null),ce>>=1,ye>>=1}}else if(nt.length>0){if(ut&&Pt){const ce=Ge(nt[0]);i.texStorage2D(o.TEXTURE_2D,we,Ze,ce.width,ce.height)}for(let ce=0,ye=nt.length;ce<ye;ce++)Pe=nt[ce],ut?V&&i.texSubImage2D(o.TEXTURE_2D,ce,0,0,Ve,Je,Pe):i.texImage2D(o.TEXTURE_2D,ce,Ze,Ve,Je,Pe);b.generateMipmaps=!1}else if(ut){if(Pt){const ce=Ge(Re);i.texStorage2D(o.TEXTURE_2D,we,Ze,ce.width,ce.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ve,Je,Re)}else i.texImage2D(o.TEXTURE_2D,0,Ze,Ve,Je,Re);S(b)&&g(de),je.__version=ge.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function oe(N,b,ee){if(b.image.length!==6)return;const de=ve(N,b),be=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+ee);const ge=r.get(be);if(be.version!==ge.__version||de===!0){i.activeTexture(o.TEXTURE0+ee);const je=Tt.getPrimaries(Tt.workingColorSpace),Le=b.colorSpace===ka?null:Tt.getPrimaries(b.colorSpace),He=b.colorSpace===ka||je===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const _t=b.isCompressedTexture||b.image[0].isCompressedTexture,Re=b.image[0]&&b.image[0].isDataTexture,Ve=[];for(let ye=0;ye<6;ye++)!_t&&!Re?Ve[ye]=A(b.image[ye],!0,l.maxCubemapSize):Ve[ye]=Re?b.image[ye].image:b.image[ye],Ve[ye]=ct(b,Ve[ye]);const Je=Ve[0],Ze=u.convert(b.format,b.colorSpace),Pe=u.convert(b.type),nt=O(b.internalFormat,Ze,Pe,b.colorSpace),ut=b.isVideoTexture!==!0,Pt=ge.__version===void 0||de===!0,V=be.dataReady;let we=K(b,Je);ne(o.TEXTURE_CUBE_MAP,b);let ce;if(_t){ut&&Pt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,Je.width,Je.height);for(let ye=0;ye<6;ye++){ce=Ve[ye].mipmaps;for(let De=0;De<ce.length;De++){const Oe=ce[De];b.format!==Mi?Ze!==null?ut?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,0,0,Oe.width,Oe.height,Ze,Oe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,nt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,0,0,Oe.width,Oe.height,Ze,Pe,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De,nt,Oe.width,Oe.height,0,Ze,Pe,Oe.data)}}}else{if(ce=b.mipmaps,ut&&Pt){ce.length>0&&we++;const ye=Ge(Ve[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Re){ut?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ve[ye].width,Ve[ye].height,Ze,Pe,Ve[ye].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,nt,Ve[ye].width,Ve[ye].height,0,Ze,Pe,Ve[ye].data);for(let De=0;De<ce.length;De++){const it=ce[De].image[ye].image;ut?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,0,0,it.width,it.height,Ze,Pe,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,nt,it.width,it.height,0,Ze,Pe,it.data)}}else{ut?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ze,Pe,Ve[ye]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,nt,Ze,Pe,Ve[ye]);for(let De=0;De<ce.length;De++){const Oe=ce[De];ut?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,0,0,Ze,Pe,Oe.image[ye]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,De+1,nt,Ze,Pe,Oe.image[ye])}}}S(b)&&g(o.TEXTURE_CUBE_MAP),ge.__version=be.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Ee(N,b,ee,de,be,ge){const je=u.convert(ee.format,ee.colorSpace),Le=u.convert(ee.type),He=O(ee.internalFormat,je,Le,ee.colorSpace),_t=r.get(b),Re=r.get(ee);if(Re.__renderTarget=b,!_t.__hasExternalTextures){const Ve=Math.max(1,b.width>>ge),Je=Math.max(1,b.height>>ge);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,ge,He,Ve,Je,b.depth,0,je,Le,null):i.texImage2D(be,ge,He,Ve,Je,0,je,Le,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Qe(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,be,Re.__webglTexture,0,Ae(b)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,be,Re.__webglTexture,ge),i.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(N,b,ee){if(o.bindRenderbuffer(o.RENDERBUFFER,N),b.depthBuffer){const de=b.depthTexture,be=de&&de.isDepthTexture?de.type:null,ge=w(b.stencilBuffer,be),je=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=Ae(b);Qe(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Le,ge,b.width,b.height):ee?o.renderbufferStorageMultisample(o.RENDERBUFFER,Le,ge,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ge,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,N)}else{const de=b.textures;for(let be=0;be<de.length;be++){const ge=de[be],je=u.convert(ge.format,ge.colorSpace),Le=u.convert(ge.type),He=O(ge.internalFormat,je,Le,ge.colorSpace),_t=Ae(b);ee&&Qe(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,_t,He,b.width,b.height):Qe(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_t,He,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,He,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Be(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(b.depthTexture);de.__renderTarget=b,(!de.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const be=de.__webglTexture,ge=Ae(b);if(b.depthTexture.format===Es)Qe(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0);else if(b.depthTexture.format===ws)Qe(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Ie(N){const b=r.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const de=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",be)};de.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=de}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Be(b.__webglFramebuffer,N)}else if(ee){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=o.createRenderbuffer(),xe(b.__webglDepthbuffer[de],N,!1);else{const be=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=b.__webglDepthbuffer[de];o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,ge)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),xe(b.__webglDepthbuffer,N,!1);else{const de=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,be),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,be)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function et(N,b,ee){const de=r.get(N);b!==void 0&&Ee(de.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ee!==void 0&&Ie(N)}function Et(N){const b=N.texture,ee=r.get(N),de=r.get(b);N.addEventListener("dispose",B);const be=N.textures,ge=N.isWebGLCubeRenderTarget===!0,je=be.length>1;if(je||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=b.version,h.memory.textures++),ge){ee.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[Le]=[];for(let He=0;He<b.mipmaps.length;He++)ee.__webglFramebuffer[Le][He]=o.createFramebuffer()}else ee.__webglFramebuffer[Le]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Le=0;Le<b.mipmaps.length;Le++)ee.__webglFramebuffer[Le]=o.createFramebuffer()}else ee.__webglFramebuffer=o.createFramebuffer();if(je)for(let Le=0,He=be.length;Le<He;Le++){const _t=r.get(be[Le]);_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Qe(N)===!1){ee.__webglMultisampledFramebuffer=o.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Le=0;Le<be.length;Le++){const He=be[Le];ee.__webglColorRenderbuffer[Le]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ee.__webglColorRenderbuffer[Le]);const _t=u.convert(He.format,He.colorSpace),Re=u.convert(He.type),Ve=O(He.internalFormat,_t,Re,He.colorSpace,N.isXRRenderTarget===!0),Je=Ae(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Je,Ve,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,ee.__webglColorRenderbuffer[Le])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=o.createRenderbuffer(),xe(ee.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ge){i.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),ne(o.TEXTURE_CUBE_MAP,b);for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)Ee(ee.__webglFramebuffer[Le][He],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He);else Ee(ee.__webglFramebuffer[Le],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(b)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Le=0,He=be.length;Le<He;Le++){const _t=be[Le],Re=r.get(_t);i.bindTexture(o.TEXTURE_2D,Re.__webglTexture),ne(o.TEXTURE_2D,_t),Ee(ee.__webglFramebuffer,N,_t,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,0),S(_t)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Le=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Le,de.__webglTexture),ne(Le,b),b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)Ee(ee.__webglFramebuffer[He],N,b,o.COLOR_ATTACHMENT0,Le,He);else Ee(ee.__webglFramebuffer,N,b,o.COLOR_ATTACHMENT0,Le,0);S(b)&&g(Le),i.unbindTexture()}N.depthBuffer&&Ie(N)}function lt(N){const b=N.textures;for(let ee=0,de=b.length;ee<de;ee++){const be=b[ee];if(S(be)){const ge=z(N),je=r.get(be).__webglTexture;i.bindTexture(ge,je),g(ge),i.unbindTexture()}}}const Ut=[],U=[];function Te(N){if(N.samples>0){if(Qe(N)===!1){const b=N.textures,ee=N.width,de=N.height;let be=o.COLOR_BUFFER_BIT;const ge=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=r.get(N),Le=b.length>1;if(Le)for(let He=0;He<b.length;He++)i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let He=0;He<b.length;He++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),Le){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[He]);const _t=r.get(b[He]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_t,0)}o.blitFramebuffer(0,0,ee,de,0,0,ee,de,be,o.NEAREST),m===!0&&(Ut.length=0,U.length=0,Ut.push(o.COLOR_ATTACHMENT0+He),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ut.push(ge),U.push(ge),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,U)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ut))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Le)for(let He=0;He<b.length;He++){i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.RENDERBUFFER,je.__webglColorRenderbuffer[He]);const _t=r.get(b[He]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+He,o.TEXTURE_2D,_t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ae(N){return Math.min(l.maxSamples,N.samples)}function Qe(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Fe(N){const b=h.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function ct(N,b){const ee=N.colorSpace,de=N.format,be=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Us&&ee!==ka&&(Tt.getTransfer(ee)===Gt?(de!==Mi||be!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function Ge(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=et,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Qe}function zT(o,t){function i(r,l=ka){let u;const h=Tt.getTransfer(l);if(r===la)return o.UNSIGNED_BYTE;if(r===Md)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ed)return o.UNSIGNED_SHORT_5_5_5_1;if(r===k0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===G0)return o.BYTE;if(r===V0)return o.SHORT;if(r===Io)return o.UNSIGNED_SHORT;if(r===Sd)return o.INT;if(r===Tr)return o.UNSIGNED_INT;if(r===ra)return o.FLOAT;if(r===Fo)return o.HALF_FLOAT;if(r===W0)return o.ALPHA;if(r===q0)return o.RGB;if(r===Mi)return o.RGBA;if(r===X0)return o.LUMINANCE;if(r===Y0)return o.LUMINANCE_ALPHA;if(r===Es)return o.DEPTH_COMPONENT;if(r===ws)return o.DEPTH_STENCIL;if(r===j0)return o.RED;if(r===bd)return o.RED_INTEGER;if(r===Z0)return o.RG;if(r===Td)return o.RG_INTEGER;if(r===Ad)return o.RGBA_INTEGER;if(r===Sc||r===Mc||r===Ec||r===bc)if(h===Gt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vh||r===kh||r===Wh||r===qh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Vh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xh||r===Yh||r===jh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Xh||r===Yh)return h===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===jh)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zh||r===Qh||r===Kh||r===Jh||r===$h||r===ed||r===td||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Zh)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qh)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kh)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jh)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$h)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ed)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===td)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===id)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ad)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===od)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ld)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tc||r===cd||r===ud)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Tc)return h===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ud)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Q0||r===fd||r===hd||r===dd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Tc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===fd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class PT extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class br extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BT={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),g=this._getHandJoint(p,A);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],x=v.position.distanceTo(y.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new br;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const IT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Nn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ya({vertexShader:IT,fragmentShader:FT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Cn(new Nc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GT extends Ns{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,y=null,x=null,M=null,E=null;const A=new HT,S=i.getContextAttributes();let g=null,z=null;const O=[],w=[],K=new At;let G=null;const B=new Kn;B.viewport=new Vt;const Z=new Kn;Z.viewport=new Vt;const D=[B,Z],R=new PT;let F=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=O[q];return oe===void 0&&(oe=new Mh,O[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=O[q];return oe===void 0&&(oe=new Mh,O[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=O[q];return oe===void 0&&(oe=new Mh,O[q]=oe),oe.getHandSpace()};function te(q){const oe=w.indexOf(q.inputSource);if(oe===-1)return;const Ee=O[oe];Ee!==void 0&&(Ee.update(q.inputSource,q.frame,p||h),Ee.dispatchEvent({type:q.type,data:q.inputSource}))}function me(){l.removeEventListener("select",te),l.removeEventListener("selectstart",te),l.removeEventListener("selectend",te),l.removeEventListener("squeeze",te),l.removeEventListener("squeezestart",te),l.removeEventListener("squeezeend",te),l.removeEventListener("end",me),l.removeEventListener("inputsourceschange",he);for(let q=0;q<O.length;q++){const oe=w[q];oe!==null&&(w[q]=null,O[q].disconnect(oe))}F=null,le=null,A.reset(),t.setRenderTarget(g),M=null,x=null,y=null,l=null,z=null,ve.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",te),l.addEventListener("selectstart",te),l.addEventListener("selectend",te),l.addEventListener("squeeze",te),l.addEventListener("squeezestart",te),l.addEventListener("squeezeend",te),l.addEventListener("end",me),l.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(K),l.renderState.layers===void 0){const oe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,oe),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Ar(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:la,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let oe=null,Ee=null,xe=null;S.depth&&(xe=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,oe=S.stencil?ws:Es,Ee=S.stencil?Rs:Tr);const Be={colorFormat:i.RGBA8,depthFormat:xe,scaleFactor:u};y=new XRWebGLBinding(l,i),x=y.createProjectionLayer(Be),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),z=new Ar(x.textureWidth,x.textureHeight,{format:Mi,type:la,depthTexture:new uv(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),ve.setContext(l),ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(q){for(let oe=0;oe<q.removed.length;oe++){const Ee=q.removed[oe],xe=w.indexOf(Ee);xe>=0&&(w[xe]=null,O[xe].disconnect(Ee))}for(let oe=0;oe<q.added.length;oe++){const Ee=q.added[oe];let xe=w.indexOf(Ee);if(xe===-1){for(let Ie=0;Ie<O.length;Ie++)if(Ie>=w.length){w.push(Ee),xe=Ie;break}else if(w[Ie]===null){w[Ie]=Ee,xe=Ie;break}if(xe===-1)break}const Be=O[xe];Be&&Be.connect(Ee)}}const P=new Q,j=new Q;function Y(q,oe,Ee){P.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(Ee.matrixWorld);const xe=P.distanceTo(j),Be=oe.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,et=Be[14]/(Be[10]-1),Et=Be[14]/(Be[10]+1),lt=(Be[9]+1)/Be[5],Ut=(Be[9]-1)/Be[5],U=(Be[8]-1)/Be[0],Te=(Ie[8]+1)/Ie[0],Ae=et*U,Qe=et*Te,Fe=xe/(-U+Te),ct=Fe*-U;if(oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ct),q.translateZ(Fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Be[10]===-1)q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ge=et+Fe,N=Et+Fe,b=Ae-ct,ee=Qe+(xe-ct),de=lt*Et/N*Ge,be=Ut*Et/N*Ge;q.projectionMatrix.makePerspective(b,ee,de,be,Ge,N),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Se(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let oe=q.near,Ee=q.far;A.texture!==null&&(A.depthNear>0&&(oe=A.depthNear),A.depthFar>0&&(Ee=A.depthFar)),R.near=Z.near=B.near=oe,R.far=Z.far=B.far=Ee,(F!==R.near||le!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,le=R.far),B.layers.mask=q.layers.mask|2,Z.layers.mask=q.layers.mask|4,R.layers.mask=B.layers.mask|Z.layers.mask;const xe=q.parent,Be=R.cameras;Se(R,xe);for(let Ie=0;Ie<Be.length;Ie++)Se(Be[Ie],xe);Be.length===2?Y(R,B,Z):R.projectionMatrix.copy(B.projectionMatrix),Me(q,R,xe)};function Me(q,oe,Ee){Ee===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(Ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(q){m=q,x!==null&&(x.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let L=null;function ne(q,oe){if(v=oe.getViewerPose(p||h),E=oe,v!==null){const Ee=v.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let xe=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let Ie=0;Ie<Ee.length;Ie++){const et=Ee[Ie];let Et=null;if(M!==null)Et=M.getViewport(et);else{const Ut=y.getViewSubImage(x,et);Et=Ut.viewport,Ie===0&&(t.setRenderTargetTextures(z,Ut.colorTexture,x.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(z))}let lt=D[Ie];lt===void 0&&(lt=new Kn,lt.layers.enable(Ie),lt.viewport=new Vt,D[Ie]=lt),lt.matrix.fromArray(et.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(et.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Et.x,Et.y,Et.width,Et.height),Ie===0&&(R.matrix.copy(lt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(lt)}const Be=l.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ie=y.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&A.init(t,Ie,l.renderState)}}for(let Ee=0;Ee<O.length;Ee++){const xe=w[Ee],Be=O[Ee];xe!==null&&Be!==void 0&&Be.update(xe,oe,p||h)}L&&L(q,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),E=null}const ve=new lv;ve.setAnimationLoop(ne),this.setAnimationLoop=function(q){L=q},this.dispose=function(){}}}const _r=new ui,VT=new Xt;function kT(o,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,rv(o)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,z,O,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),y(S,g)):g.isMeshPhongMaterial?(u(S,g),v(S,g)):g.isMeshStandardMaterial?(u(S,g),x(S,g),g.isMeshPhysicalMaterial&&M(S,g,w)):g.isMeshMatcapMaterial?(u(S,g),E(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),A(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(h(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?m(S,g,z,O):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Rn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Rn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const z=t.get(g),O=z.envMap,w=z.envMapRotation;O&&(S.envMap.value=O,_r.copy(w),_r.x*=-1,_r.y*=-1,_r.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),S.envMapRotation.value.setFromMatrix4(VT.makeRotationFromEuler(_r)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function h(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function m(S,g,z,O){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*z,S.scale.value=O*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function y(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,z){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function A(S,g){const z=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function WT(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,O){const w=O.program;r.uniformBlockBinding(z,w)}function p(z,O){let w=l[z.id];w===void 0&&(E(z),w=v(z),l[z.id]=w,z.addEventListener("dispose",S));const K=O.program;r.updateUBOMapping(z,K);const G=t.render.frame;u[z.id]!==G&&(x(z),u[z.id]=G)}function v(z){const O=y();z.__bindingPointIndex=O;const w=o.createBuffer(),K=z.__size,G=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,K,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,w),w}function y(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const O=l[z.id],w=z.uniforms,K=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let G=0,B=w.length;G<B;G++){const Z=Array.isArray(w[G])?w[G]:[w[G]];for(let D=0,R=Z.length;D<R;D++){const F=Z[D];if(M(F,G,D,K)===!0){const le=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let me=0;for(let he=0;he<te.length;he++){const P=te[he],j=A(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,le+me,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,me),me+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,O,w,K){const G=z.value,B=O+"_"+w;if(K[B]===void 0)return typeof G=="number"||typeof G=="boolean"?K[B]=G:K[B]=G.clone(),!0;{const Z=K[B];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return K[B]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function E(z){const O=z.uniforms;let w=0;const K=16;for(let B=0,Z=O.length;B<Z;B++){const D=Array.isArray(O[B])?O[B]:[O[B]];for(let R=0,F=D.length;R<F;R++){const le=D[R],te=Array.isArray(le.value)?le.value:[le.value];for(let me=0,he=te.length;me<he;me++){const P=te[me],j=A(P),Y=w%K,Se=Y%j.boundary,Me=Y+Se;w+=Se,Me!==0&&K-Me<j.storage&&(w+=K-Me),le.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=w,w+=j.storage}}}const G=w%K;return G>0&&(w+=K-G),z.__size=w,z.__cache={},this}function A(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),O}function S(z){const O=z.target;O.removeEventListener("dispose",S);const w=h.indexOf(O.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class qT{constructor(t={}){const{canvas:i=LS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,g=null;const z=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=qa,this.toneMappingExposure=1;const w=this;let K=!1,G=0,B=0,Z=null,D=-1,R=null;const F=new Vt,le=new Vt;let te=null;const me=new wt(0);let he=0,P=i.width,j=i.height,Y=1,Se=null,Me=null;const L=new Vt(0,0,P,j),ne=new Vt(0,0,P,j);let ve=!1;const q=new wd;let oe=!1,Ee=!1;const xe=new Xt,Be=new Xt,Ie=new Q,et=new Vt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ut(){return Z===null?Y:1}let U=r;function Te(C,k){return i.getContext(C,k)}try{const C={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xd}`),i.addEventListener("webglcontextlost",ye,!1),i.addEventListener("webglcontextrestored",De,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),U===null){const k="webgl2";if(U=Te(k,C),U===null)throw Te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ae,Qe,Fe,ct,Ge,N,b,ee,de,be,ge,je,Le,He,_t,Re,Ve,Je,Ze,Pe,nt,ut,Pt,V;function we(){Ae=new Q1(U),Ae.init(),ut=new zT(U,Ae),Qe=new W1(U,Ae,t,ut),Fe=new NT(U,Ae),Qe.reverseDepthBuffer&&x&&Fe.buffers.depth.setReversed(!0),ct=new $1(U),Ge=new _T,N=new OT(U,Ae,Fe,Ge,Qe,ut,ct),b=new X1(w),ee=new Z1(w),de=new sM(U),Pt=new V1(U,de),be=new K1(U,de,ct,Pt),ge=new tb(U,be,de,ct),Ze=new eb(U,Qe,N),Re=new q1(Ge),je=new gT(w,b,ee,Ae,Qe,Pt,Re),Le=new kT(w,Ge),He=new yT,_t=new TT(Ae),Je=new G1(w,b,ee,Fe,ge,M,m),Ve=new DT(w,ge,Qe),V=new WT(U,ct,Qe,Fe),Pe=new k1(U,Ae,ct),nt=new J1(U,Ae,ct),ct.programs=je.programs,w.capabilities=Qe,w.extensions=Ae,w.properties=Ge,w.renderLists=He,w.shadowMap=Ve,w.state=Fe,w.info=ct}we();const ce=new GT(w,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(P,j,!1))},this.getSize=function(C){return C.set(P,j)},this.setSize=function(C,k,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,j=k,i.width=Math.floor(C*Y),i.height=Math.floor(k*Y),re===!0&&(i.style.width=C+"px",i.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(P*Y,j*Y).floor()},this.setDrawingBufferSize=function(C,k,re){P=C,j=k,Y=re,i.width=Math.floor(C*re),i.height=Math.floor(k*re),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,k,re,ae){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,k,re,ae),Fe.viewport(F.copy(L).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,k,re,ae){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,k,re,ae),Fe.scissor(le.copy(ne).multiplyScalar(Y).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(C){Fe.setScissorTest(ve=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,k=!0,re=!0){let ae=0;if(C){let W=!1;if(Z!==null){const Ce=Z.texture.format;W=Ce===Ad||Ce===Td||Ce===bd}if(W){const Ce=Z.texture.type,Ue=Ce===la||Ce===Tr||Ce===Io||Ce===Rs||Ce===Md||Ce===Ed,Ne=Je.getClearColor(),qe=Je.getClearAlpha(),at=Ne.r,tt=Ne.g,ke=Ne.b;Ue?(E[0]=at,E[1]=tt,E[2]=ke,E[3]=qe,U.clearBufferuiv(U.COLOR,0,E)):(A[0]=at,A[1]=tt,A[2]=ke,A[3]=qe,U.clearBufferiv(U.COLOR,0,A))}else ae|=U.COLOR_BUFFER_BIT}k&&(ae|=U.DEPTH_BUFFER_BIT),re&&(ae|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ye,!1),i.removeEventListener("webglcontextrestored",De,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),He.dispose(),_t.dispose(),Ge.dispose(),b.dispose(),ee.dispose(),ge.dispose(),Pt.dispose(),V.dispose(),je.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ps),ce.removeEventListener("sessionend",Bs),Ai.stop()};function ye(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const C=ct.autoReset,k=Ve.enabled,re=Ve.autoUpdate,ae=Ve.needsUpdate,W=Ve.type;we(),ct.autoReset=C,Ve.enabled=k,Ve.autoUpdate=re,Ve.needsUpdate=ae,Ve.type=W}function Oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function it(C){const k=C.target;k.removeEventListener("dispose",it),Yt(k)}function Yt(C){sn(C),Ge.remove(C)}function sn(C){const k=Ge.get(C).programs;k!==void 0&&(k.forEach(function(re){je.releaseProgram(re)}),C.isShaderMaterial&&je.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,re,ae,W,Ce){k===null&&(k=Et);const Ue=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Fs(C,k,re,ae,W);Fe.setMaterial(ae,Ue);let qe=re.index,at=1;if(ae.wireframe===!0){if(qe=be.getWireframeAttribute(re),qe===void 0)return;at=2}const tt=re.drawRange,ke=re.attributes.position;let Mt=tt.start*at,Lt=(tt.start+tt.count)*at;Ce!==null&&(Mt=Math.max(Mt,Ce.start*at),Lt=Math.min(Lt,(Ce.start+Ce.count)*at)),qe!==null?(Mt=Math.max(Mt,0),Lt=Math.min(Lt,qe.count)):ke!=null&&(Mt=Math.max(Mt,0),Lt=Math.min(Lt,ke.count));const Bt=Lt-Mt;if(Bt<0||Bt===1/0)return;Pt.setup(W,ae,Ne,re,qe);let Mn,xt=Pe;if(qe!==null&&(Mn=de.get(qe),xt=nt,xt.setIndex(Mn)),W.isMesh)ae.wireframe===!0?(Fe.setLineWidth(ae.wireframeLinewidth*Ut()),xt.setMode(U.LINES)):xt.setMode(U.TRIANGLES);else if(W.isLine){let Xe=ae.linewidth;Xe===void 0&&(Xe=1),Fe.setLineWidth(Xe*Ut()),W.isLineSegments?xt.setMode(U.LINES):W.isLineLoop?xt.setMode(U.LINE_LOOP):xt.setMode(U.LINE_STRIP)}else W.isPoints?xt.setMode(U.POINTS):W.isSprite&&xt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)xt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,on=W._multiDrawCounts,ot=W._multiDrawCount,Ln=qe?de.get(qe).bytesPerElement:1,ca=Ge.get(ae).currentProgram.getUniforms();for(let gn=0;gn<ot;gn++)ca.setValue(U,"_gl_DrawID",gn),xt.render(Xe[gn]/Ln,on[gn])}else if(W.isInstancedMesh)xt.renderInstances(Mt,Bt,W.count);else if(re.isInstancedBufferGeometry){const Xe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,on=Math.min(re.instanceCount,Xe);xt.renderInstances(Mt,Bt,on)}else xt.render(Mt,Bt)};function bt(C,k,re){C.transparent===!0&&C.side===Ni&&C.forceSinglePass===!1?(C.side=Rn,C.needsUpdate=!0,Zt(C,k,re),C.side=Xa,C.needsUpdate=!0,Zt(C,k,re),C.side=Ni):Zt(C,k,re)}this.compile=function(C,k,re=null){re===null&&(re=C),g=_t.get(re),g.init(k),O.push(g),re.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),C!==re&&C.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const ae=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ce=W.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const Ne=Ce[Ue];bt(Ne,re,W),ae.add(Ne)}else bt(Ce,re,W),ae.add(Ce)}),O.pop(),g=null,ae},this.compileAsync=function(C,k,re=null){const ae=this.compile(C,k,re);return new Promise(W=>{function Ce(){if(ae.forEach(function(Ue){Ge.get(Ue).currentProgram.isReady()&&ae.delete(Ue)}),ae.size===0){W(C);return}setTimeout(Ce,10)}Ae.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let pn=null;function hi(C){pn&&pn(C)}function Ps(){Ai.stop()}function Bs(){Ai.start()}const Ai=new lv;Ai.setAnimationLoop(hi),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){pn=C,ce.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},ce.addEventListener("sessionstart",Ps),ce.addEventListener("sessionend",Bs),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,k,Z),g=_t.get(C,O.length),g.init(k),O.push(g),Be.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(Be),Ee=this.localClippingEnabled,oe=Re.init(this.clippingPlanes,Ee),S=He.get(C,z.length),S.init(),z.push(S),ce.enabled===!0&&ce.isPresenting===!0){const Ce=w.xr.getDepthSensingMesh();Ce!==null&&ja(Ce,k,-1/0,w.sortObjects)}ja(C,k,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Se,Me),lt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,lt&&Je.addToRenderList(S,C),this.info.render.frame++,oe===!0&&Re.beginShadows();const re=g.state.shadowsArray;Ve.render(re,C,k),oe===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=S.opaque,W=S.transmissive;if(g.setupLights(),k.isArrayCamera){const Ce=k.cameras;if(W.length>0)for(let Ue=0,Ne=Ce.length;Ue<Ne;Ue++){const qe=Ce[Ue];Is(ae,W,C,qe)}lt&&Je.render(C);for(let Ue=0,Ne=Ce.length;Ue<Ne;Ue++){const qe=Ce[Ue];Cr(S,C,qe,qe.viewport)}}else W.length>0&&Is(ae,W,C,k),lt&&Je.render(C),Cr(S,C,k);Z!==null&&(N.updateMultisampleRenderTarget(Z),N.updateRenderTargetMipmap(Z)),C.isScene===!0&&C.onAfterRender(w,C,k),Pt.resetDefaultState(),D=-1,R=null,O.pop(),O.length>0?(g=O[O.length-1],oe===!0&&Re.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,z.pop(),z.length>0?S=z[z.length-1]:S=null};function ja(C,k,re,ae){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){ae&&et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Be);const Ue=ge.update(C),Ne=C.material;Ne.visible&&S.push(C,Ue,Ne,re,et.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Ue=ge.update(C),Ne=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),et.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),et.copy(Ue.boundingSphere.center)),et.applyMatrix4(C.matrixWorld).applyMatrix4(Be)),Array.isArray(Ne)){const qe=Ue.groups;for(let at=0,tt=qe.length;at<tt;at++){const ke=qe[at],Mt=Ne[ke.materialIndex];Mt&&Mt.visible&&S.push(C,Ue,Mt,re,et.z,ke)}}else Ne.visible&&S.push(C,Ue,Ne,re,et.z,null)}}const Ce=C.children;for(let Ue=0,Ne=Ce.length;Ue<Ne;Ue++)ja(Ce[Ue],k,re,ae)}function Cr(C,k,re,ae){const W=C.opaque,Ce=C.transmissive,Ue=C.transparent;g.setupLightsView(re),oe===!0&&Re.setGlobalState(w.clippingPlanes,re),ae&&Fe.viewport(F.copy(ae)),W.length>0&&Za(W,k,re),Ce.length>0&&Za(Ce,k,re),Ue.length>0&&Za(Ue,k,re),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Is(C,k,re,ae){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ae.id]===void 0&&(g.state.transmissionRenderTarget[ae.id]=new Ar(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Fo:la,minFilter:Er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ce=g.state.transmissionRenderTarget[ae.id],Ue=ae.viewport||F;Ce.setSize(Ue.z,Ue.w);const Ne=w.getRenderTarget();w.setRenderTarget(Ce),w.getClearColor(me),he=w.getClearAlpha(),he<1&&w.setClearColor(16777215,.5),w.clear(),lt&&Je.render(re);const qe=w.toneMapping;w.toneMapping=qa;const at=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),g.setupLightsView(ae),oe===!0&&Re.setGlobalState(w.clippingPlanes,ae),Za(C,re,ae),N.updateMultisampleRenderTarget(Ce),N.updateRenderTargetMipmap(Ce),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ke=0,Mt=k.length;ke<Mt;ke++){const Lt=k[ke],Bt=Lt.object,Mn=Lt.geometry,xt=Lt.material,Xe=Lt.group;if(xt.side===Ni&&Bt.layers.test(ae.layers)){const on=xt.side;xt.side=Rn,xt.needsUpdate=!0,di(Bt,re,ae,Mn,xt,Xe),xt.side=on,xt.needsUpdate=!0,tt=!0}}tt===!0&&(N.updateMultisampleRenderTarget(Ce),N.updateRenderTargetMipmap(Ce))}w.setRenderTarget(Ne),w.setClearColor(me,he),at!==void 0&&(ae.viewport=at),w.toneMapping=qe}function Za(C,k,re){const ae=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Ce=C.length;W<Ce;W++){const Ue=C[W],Ne=Ue.object,qe=Ue.geometry,at=ae===null?Ue.material:ae,tt=Ue.group;Ne.layers.test(re.layers)&&di(Ne,k,re,qe,at,tt)}}function di(C,k,re,ae,W,Ce){C.onBeforeRender(w,k,re,ae,W,Ce),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(w,k,re,ae,C,Ce),W.transparent===!0&&W.side===Ni&&W.forceSinglePass===!1?(W.side=Rn,W.needsUpdate=!0,w.renderBufferDirect(re,k,ae,W,C,Ce),W.side=Xa,W.needsUpdate=!0,w.renderBufferDirect(re,k,ae,W,C,Ce),W.side=Ni):w.renderBufferDirect(re,k,ae,W,C,Ce),C.onAfterRender(w,k,re,ae,W,Ce)}function Zt(C,k,re){k.isScene!==!0&&(k=Et);const ae=Ge.get(C),W=g.state.lights,Ce=g.state.shadowsArray,Ue=W.state.version,Ne=je.getParameters(C,W.state,Ce,k,re),qe=je.getProgramCacheKey(Ne);let at=ae.programs;ae.environment=C.isMeshStandardMaterial?k.environment:null,ae.fog=k.fog,ae.envMap=(C.isMeshStandardMaterial?ee:b).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,at===void 0&&(C.addEventListener("dispose",it),at=new Map,ae.programs=at);let tt=at.get(qe);if(tt!==void 0){if(ae.currentProgram===tt&&ae.lightsStateVersion===Ue)return Oi(C,Ne),tt}else Ne.uniforms=je.getUniforms(C),C.onBeforeCompile(Ne,w),tt=je.acquireProgram(Ne,qe),at.set(qe,tt),ae.uniforms=Ne.uniforms;const ke=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=Re.uniform),Oi(C,Ne),ae.needsLights=zc(C),ae.lightsStateVersion=Ue,ae.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),ae.currentProgram=tt,ae.uniformsList=null,tt}function mn(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Ac.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Oi(C,k){const re=Ge.get(C);re.outputColorSpace=k.outputColorSpace,re.batching=k.batching,re.batchingColor=k.batchingColor,re.instancing=k.instancing,re.instancingColor=k.instancingColor,re.instancingMorph=k.instancingMorph,re.skinning=k.skinning,re.morphTargets=k.morphTargets,re.morphNormals=k.morphNormals,re.morphColors=k.morphColors,re.morphTargetsCount=k.morphTargetsCount,re.numClippingPlanes=k.numClippingPlanes,re.numIntersection=k.numClipIntersection,re.vertexAlphas=k.vertexAlphas,re.vertexTangents=k.vertexTangents,re.toneMapping=k.toneMapping}function Fs(C,k,re,ae,W){k.isScene!==!0&&(k=Et),N.resetTextureUnits();const Ce=k.fog,Ue=ae.isMeshStandardMaterial?k.environment:null,Ne=Z===null?w.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Us,qe=(ae.isMeshStandardMaterial?ee:b).get(ae.envMap||Ue),at=ae.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,tt=!!re.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ke=!!re.morphAttributes.position,Mt=!!re.morphAttributes.normal,Lt=!!re.morphAttributes.color;let Bt=qa;ae.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Bt=w.toneMapping);const Mn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,xt=Mn!==void 0?Mn.length:0,Xe=Ge.get(ae),on=g.state.lights;if(oe===!0&&(Ee===!0||C!==R)){const En=C===R&&ae.id===D;Re.setState(ae,C,En)}let ot=!1;ae.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==on.state.version||Xe.outputColorSpace!==Ne||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==qe||ae.fog===!0&&Xe.fog!==Ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Re.numPlanes||Xe.numIntersection!==Re.numIntersection)||Xe.vertexAlphas!==at||Xe.vertexTangents!==tt||Xe.morphTargets!==ke||Xe.morphNormals!==Mt||Xe.morphColors!==Lt||Xe.toneMapping!==Bt||Xe.morphTargetsCount!==xt)&&(ot=!0):(ot=!0,Xe.__version=ae.version);let Ln=Xe.currentProgram;ot===!0&&(Ln=Zt(ae,k,W));let ca=!1,gn=!1,ua=!1;const Nt=Ln.getUniforms(),$n=Xe.uniforms;if(Fe.useProgram(Ln.program)&&(ca=!0,gn=!0,ua=!0),ae.id!==D&&(D=ae.id,gn=!0),ca||R!==C){Fe.buffers.depth.getReversed()?(xe.copy(C.projectionMatrix),zS(xe),PS(xe),Nt.setValue(U,"projectionMatrix",xe)):Nt.setValue(U,"projectionMatrix",C.projectionMatrix),Nt.setValue(U,"viewMatrix",C.matrixWorldInverse);const pi=Nt.map.cameraPosition;pi!==void 0&&pi.setValue(U,Ie.setFromMatrixPosition(C.matrixWorld)),Qe.logarithmicDepthBuffer&&Nt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Nt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,gn=!0,ua=!0)}if(W.isSkinnedMesh){Nt.setOptional(U,W,"bindMatrix"),Nt.setOptional(U,W,"bindMatrixInverse");const En=W.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Nt.setValue(U,"boneTexture",En.boneTexture,N))}W.isBatchedMesh&&(Nt.setOptional(U,W,"batchingTexture"),Nt.setValue(U,"batchingTexture",W._matricesTexture,N),Nt.setOptional(U,W,"batchingIdTexture"),Nt.setValue(U,"batchingIdTexture",W._indirectTexture,N),Nt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Nt.setValue(U,"batchingColorTexture",W._colorsTexture,N));const fn=re.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Ze.update(W,re,Ln),(gn||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Nt.setValue(U,"receiveShadow",W.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&($n.envMap.value=qe,$n.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&k.environment!==null&&($n.envMapIntensity.value=k.environmentIntensity),gn&&(Nt.setValue(U,"toneMappingExposure",w.toneMappingExposure),Xe.needsLights&&Oc($n,ua),Ce&&ae.fog===!0&&Le.refreshFogUniforms($n,Ce),Le.refreshMaterialUniforms($n,ae,Y,j,g.state.transmissionRenderTarget[C.id]),Ac.upload(U,mn(Xe),$n,N)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ac.upload(U,mn(Xe),$n,N),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Nt.setValue(U,"center",W.center),Nt.setValue(U,"modelViewMatrix",W.modelViewMatrix),Nt.setValue(U,"normalMatrix",W.normalMatrix),Nt.setValue(U,"modelMatrix",W.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const En=ae.uniformsGroups;for(let pi=0,ei=En.length;pi<ei;pi++){const zi=En[pi];V.update(zi,Ln),V.bind(zi,Ln)}}return Ln}function Oc(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function zc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,k,re){Ge.get(C.texture).__webglTexture=k,Ge.get(C.depthTexture).__webglTexture=re;const ae=Ge.get(C);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=re===void 0,ae.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const re=Ge.get(C);re.__webglFramebuffer=k,re.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,re=0){Z=C,G=k,B=re;let ae=!0,W=null,Ce=!1,Ue=!1;if(C){const qe=Ge.get(C);if(qe.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(U.FRAMEBUFFER,null),ae=!1;else if(qe.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(qe.__hasExternalTextures)N.rebindTextures(C,Ge.get(C.texture).__webglTexture,Ge.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ke=C.depthTexture;if(qe.__boundDepthTexture!==ke){if(ke!==null&&Ge.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ue=!0);const tt=Ge.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(tt[k])?W=tt[k][re]:W=tt[k],Ce=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?W=Ge.get(C).__webglMultisampledFramebuffer:Array.isArray(tt)?W=tt[re]:W=tt,F.copy(C.viewport),le.copy(C.scissor),te=C.scissorTest}else F.copy(L).multiplyScalar(Y).floor(),le.copy(ne).multiplyScalar(Y).floor(),te=ve;if(Fe.bindFramebuffer(U.FRAMEBUFFER,W)&&ae&&Fe.drawBuffers(C,W),Fe.viewport(F),Fe.scissor(le),Fe.setScissorTest(te),Ce){const qe=Ge.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,qe.__webglTexture,re)}else if(Ue){const qe=Ge.get(C.texture),at=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,qe.__webglTexture,re||0,at)}D=-1},this.readRenderTargetPixels=function(C,k,re,ae,W,Ce,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){Fe.bindFramebuffer(U.FRAMEBUFFER,Ne);try{const qe=C.texture,at=qe.format,tt=qe.type;if(!Qe.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-ae&&re>=0&&re<=C.height-W&&U.readPixels(k,re,ae,W,ut.convert(at),ut.convert(tt),Ce)}finally{const qe=Z!==null?Ge.get(Z).__webglFramebuffer:null;Fe.bindFramebuffer(U.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,k,re,ae,W,Ce,Ue){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){const qe=C.texture,at=qe.format,tt=qe.type;if(!Qe.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-ae&&re>=0&&re<=C.height-W){Fe.bindFramebuffer(U.FRAMEBUFFER,Ne);const ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.bufferData(U.PIXEL_PACK_BUFFER,Ce.byteLength,U.STREAM_READ),U.readPixels(k,re,ae,W,ut.convert(at),ut.convert(tt),0);const Mt=Z!==null?Ge.get(Z).__webglFramebuffer:null;Fe.bindFramebuffer(U.FRAMEBUFFER,Mt);const Lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await OS(U,Lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ce),U.deleteBuffer(ke),U.deleteSync(Lt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,re=0){C.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const ae=Math.pow(2,-re),W=Math.floor(C.image.width*ae),Ce=Math.floor(C.image.height*ae),Ue=k!==null?k.x:0,Ne=k!==null?k.y:0;N.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,re,0,0,Ue,Ne,W,Ce),Fe.unbindTexture()},this.copyTextureToTexture=function(C,k,re=null,ae=null,W=0){C.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,C=arguments[1],k=arguments[2],W=arguments[3]||0,re=null);let Ce,Ue,Ne,qe,at,tt,ke,Mt,Lt;const Bt=C.isCompressedTexture?C.mipmaps[W]:C.image;re!==null?(Ce=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Ne=re.isBox3?re.max.z-re.min.z:1,qe=re.min.x,at=re.min.y,tt=re.isBox3?re.min.z:0):(Ce=Bt.width,Ue=Bt.height,Ne=Bt.depth||1,qe=0,at=0,tt=0),ae!==null?(ke=ae.x,Mt=ae.y,Lt=ae.z):(ke=0,Mt=0,Lt=0);const Mn=ut.convert(k.format),xt=ut.convert(k.type);let Xe;k.isData3DTexture?(N.setTexture3D(k,0),Xe=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(N.setTexture2DArray(k,0),Xe=U.TEXTURE_2D_ARRAY):(N.setTexture2D(k,0),Xe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const on=U.getParameter(U.UNPACK_ROW_LENGTH),ot=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ln=U.getParameter(U.UNPACK_SKIP_PIXELS),ca=U.getParameter(U.UNPACK_SKIP_ROWS),gn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Bt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,qe),U.pixelStorei(U.UNPACK_SKIP_ROWS,at),U.pixelStorei(U.UNPACK_SKIP_IMAGES,tt);const ua=C.isDataArrayTexture||C.isData3DTexture,Nt=k.isDataArrayTexture||k.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const $n=Ge.get(C),fn=Ge.get(k),En=Ge.get($n.__renderTarget),pi=Ge.get(fn.__renderTarget);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,En.__webglFramebuffer),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let ei=0;ei<Ne;ei++)ua&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ge.get(C).__webglTexture,W,tt+ei),C.isDepthTexture?(Nt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ge.get(k).__webglTexture,W,Lt+ei),U.blitFramebuffer(qe,at,Ce,Ue,ke,Mt,Ce,Ue,U.DEPTH_BUFFER_BIT,U.NEAREST)):Nt?U.copyTexSubImage3D(Xe,W,ke,Mt,Lt+ei,qe,at,Ce,Ue):U.copyTexSubImage2D(Xe,W,ke,Mt,Lt+ei,qe,at,Ce,Ue);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Nt?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Xe,W,ke,Mt,Lt,Ce,Ue,Ne,Mn,xt,Bt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Xe,W,ke,Mt,Lt,Ce,Ue,Ne,Mn,Bt.data):U.texSubImage3D(Xe,W,ke,Mt,Lt,Ce,Ue,Ne,Mn,xt,Bt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,ke,Mt,Ce,Ue,Mn,xt,Bt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,ke,Mt,Bt.width,Bt.height,Mn,Bt.data):U.texSubImage2D(U.TEXTURE_2D,W,ke,Mt,Ce,Ue,Mn,xt,Bt);U.pixelStorei(U.UNPACK_ROW_LENGTH,on),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,ca),U.pixelStorei(U.UNPACK_SKIP_IMAGES,gn),W===0&&k.generateMipmaps&&U.generateMipmap(Xe),Fe.unbindTexture()},this.copyTextureToTexture3D=function(C,k,re=null,ae=null,W=0){return C.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,ae=arguments[1]||null,C=arguments[2],k=arguments[3],W=arguments[4]||0),Po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,re,ae,W)},this.initRenderTarget=function(C){Ge.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){G=0,B=0,Z=null,Fe.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Tt._getUnpackColorSpace()}}class XT extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class mv extends Os{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const T0=new Xt,gd=new Cd,yc=new Uc,xc=new Q;class YT extends Sn{constructor(t=new Ti,i=new mv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(l),yc.radius+=u,t.ray.intersectsSphere(yc)===!1)return;T0.copy(l).invert(),gd.copy(t.ray).applyMatrix4(T0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,y=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=x,A=M;E<A;E++){const S=p.getX(E);xc.fromBufferAttribute(y,S),A0(xc,S,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(y.count,h.start+h.count);for(let E=x,A=M;E<A;E++)xc.fromBufferAttribute(y,E),A0(xc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function A0(o,t,i,r,l,u,h){const d=gd.distanceSqToPoint(o);if(d<i){const m=new Q;gd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class gv extends Nn{constructor(t,i,r,l,u,h,d,m,p){super(t,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ud extends Ti{constructor(t=.5,i=1,r=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],m=[],p=[],v=[];let y=t;const x=(i-t)/l,M=new Q,E=new At;for(let A=0;A<=l;A++){for(let S=0;S<=r;S++){const g=u+S/r*h;M.x=y*Math.cos(g),M.y=y*Math.sin(g),m.push(M.x,M.y,M.z),p.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,v.push(E.x,E.y)}y+=x}for(let A=0;A<l;A++){const S=A*(r+1);for(let g=0;g<r;g++){const z=g+S,O=z,w=z+r+1,K=z+r+2,G=z+1;d.push(O,w,G),d.push(w,K,G)}}this.setIndex(d),this.setAttribute("position",new Jn(m,3)),this.setAttribute("normal",new Jn(p,3)),this.setAttribute("uv",new Jn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ud(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Va extends Ti{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const v=[],y=new Q,x=new Q,M=[],E=[],A=[],S=[];for(let g=0;g<=r;g++){const z=[],O=g/r;let w=0;g===0&&h===0?w=.5/i:g===r&&m===Math.PI&&(w=-.5/i);for(let K=0;K<=i;K++){const G=K/i;y.x=-t*Math.cos(l+G*u)*Math.sin(h+O*d),y.y=t*Math.cos(h+O*d),y.z=t*Math.sin(l+G*u)*Math.sin(h+O*d),E.push(y.x,y.y,y.z),x.copy(y).normalize(),A.push(x.x,x.y,x.z),S.push(G+w,1-O),z.push(p++)}v.push(z)}for(let g=0;g<r;g++)for(let z=0;z<i;z++){const O=v[g][z+1],w=v[g][z],K=v[g+1][z],G=v[g+1][z+1];(g!==0||h>0)&&M.push(O,w,G),(g!==r-1||m<Math.PI)&&M.push(w,K,G)}this.setIndex(M),this.setAttribute("position",new Jn(E,3)),this.setAttribute("normal",new Jn(A,3)),this.setAttribute("uv",new Jn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jT extends Os{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nd extends Sn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Eh=new Xt,C0=new Q,R0=new Q;class _v{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;C0.setFromMatrixPosition(t.matrixWorld),i.position.copy(C0),R0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(R0),i.updateMatrixWorld(),Eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const w0=new Xt,zo=new Q,bh=new Q;class ZT extends _v{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),zo.setFromMatrixPosition(t.matrixWorld),r.position.copy(zo),bh.copy(r.position),bh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(bh),r.updateMatrixWorld(),l.makeTranslation(-zo.x,-zo.y,-zo.z),w0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(w0)}}class QT extends Nd{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new ZT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class KT extends _v{constructor(){super(new cv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JT extends Nd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new KT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $T extends Nd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const D0=new Xt;class eA{constructor(t,i,r=0,l=1/0){this.ray=new Cd(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Rd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return D0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D0),this}intersectObject(t,i=!0,r=[]){return _d(t,this,r,i),r.sort(U0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)_d(t[l],this,r,i);return r.sort(U0),r}}function U0(o,t){return o.distance-t.distance}function _d(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)_d(u[h],t,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);function N0(o,t,i){const r=(90-o)*(Math.PI/180),l=(t+180)*(Math.PI/180);return new Q(-i*Math.sin(r)*Math.cos(l),i*Math.cos(r),i*Math.sin(r)*Math.sin(l))}function tA(o){return o==="Biblical History"?16762967:o==="World History"?5093375:o==="Christian Church History"||o==="American Christian Heritage"?6553510:16735324}function nA(){const o=document.createElement("canvas");o.width=1024,o.height=512;const t=o.getContext("2d"),i=t.createLinearGradient(0,0,0,o.height);i.addColorStop(0,"#0a3a6f"),i.addColorStop(.55,"#0b6c9e"),i.addColorStop(1,"#06345d"),t.fillStyle=i,t.fillRect(0,0,o.width,o.height),t.globalAlpha=.78,[[135,155,190,95],[235,255,120,150],[470,210,140,160],[610,160,250,110],[720,250,105,165],[805,335,150,70],[540,295,110,135],[410,105,90,45]].forEach(([u,h,d,m],p)=>{const v=t.createRadialGradient(u,h,10,u,h,Math.max(d,m));v.addColorStop(0,p%2?"#d6b05e":"#75a85a"),v.addColorStop(1,"#345b37"),t.fillStyle=v,t.beginPath(),t.ellipse(u,h,d,m,p*.4,0,Math.PI*2),t.fill()}),t.globalAlpha=.32,t.strokeStyle="#c8f5ff",t.lineWidth=2;for(let u=0;u<34;u++){const h=20+Math.random()*470;t.beginPath(),t.moveTo(0,h);for(let d=0;d<o.width;d+=80)t.quadraticCurveTo(d+40,h+Math.sin(d*.03+u)*18,d+80,h+Math.cos(d*.02+u)*12);t.stroke()}const l=new gv(o);return l.colorSpace=Un,l}function iA(){const o=document.createElement("canvas");o.width=1024,o.height=512;const t=o.getContext("2d");t.clearRect(0,0,o.width,o.height);for(let r=0;r<90;r++){const l=Math.random()*o.width,u=Math.random()*o.height,h=18+Math.random()*58,d=t.createRadialGradient(l,u,1,l,u,h);d.addColorStop(0,"rgba(255,255,255,0.34)"),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.beginPath(),t.arc(l,u,h,0,Math.PI*2),t.fill()}const i=new gv(o);return i.colorSpace=Un,i}function aA({events:o,selectedEvent:t,navigationTarget:i,completedIds:r,onSelectEvent:l}){const u=st.useRef(null),h=st.useRef(t),d=st.useRef(i),m=st.useRef(o),p=st.useRef(r),v=st.useRef(l);return st.useEffect(()=>{h.current=t},[t]),st.useEffect(()=>{d.current=i},[i]),st.useEffect(()=>{p.current=r},[r]),st.useEffect(()=>{m.current=o},[o]),st.useEffect(()=>{v.current=l},[l]),st.useEffect(()=>{if(!u.current)return;const y=u.current,x=new XT,M=new Kn(42,y.clientWidth/y.clientHeight,.1,100);M.position.set(0,.35,4.8);const E=new qT({antialias:!0,alpha:!0});E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.setSize(y.clientWidth,y.clientHeight),E.outputColorSpace=Un,y.appendChild(E.domElement);const A=new br;x.add(A);const S=new br,g=new Ti,z=new Float32Array(2300*3);for(let Te=0;Te<z.length;Te+=3){const Ae=28+Math.random()*34,Qe=Math.random()*Math.PI*2,Fe=Math.acos(Math.random()*2-1);z[Te]=Math.sin(Fe)*Math.cos(Qe)*Ae,z[Te+1]=Math.cos(Fe)*Ae,z[Te+2]=Math.sin(Fe)*Math.sin(Qe)*Ae}g.setAttribute("position",new bi(z,3)),S.add(new YT(g,new mv({color:15202303,size:.04,transparent:!0,opacity:.86}))),x.add(S);const O=nA(),w=iA(),K=new Cn(new Va(1.55,128,128),new jT({map:O,metalness:.02,roughness:.66,emissive:201513,emissiveIntensity:.12}));A.add(K);const G=new Cn(new Va(1.575,96,96),new Ga({map:w,color:16777215,transparent:!0,opacity:.28,depthWrite:!1}));A.add(G);const B=new Cn(new Va(1.552,64,64),new Ga({color:397343,transparent:!0,opacity:.22,side:Rn}));A.add(B);const Z=new Cn(new Va(1.565,48,48),new Ga({color:6741503,wireframe:!0,transparent:!0,opacity:.08}));A.add(Z);const D=new Cn(new Va(1.78,96,96),new Ga({color:3922431,transparent:!0,opacity:.11,side:Rn}));A.add(D),x.add(new $T(3431815,.45));const R=new JT(16770488,4.8);R.position.set(4.2,2.4,5.4),x.add(R);const F=new QT(2997759,12,9);F.position.set(-3.5,-1.2,2.4),x.add(F);const le=new br;A.add(le);const te=new eA,me=new At,he=[],P=[],j=new Va(.034,18,18),Y=new Ud(.052,.078,32);function Se(){le.clear(),he.length=0,P.length=0,m.current.forEach(Te=>{const Ae=p.current.includes(Te.id)?9371592:tA(Te.category),Qe=N0(Te.latitude,Te.longitude,1.66),Fe=new Ga({color:Ae}),ct=new Cn(j,Fe);ct.position.copy(Qe),ct.userData.eventId=Te.id,le.add(ct),he.push(ct);const Ge=new Cn(Y,new Ga({color:Ae,transparent:!0,opacity:.48,side:Ni}));Ge.position.copy(Qe.clone().multiplyScalar(1.002)),Ge.lookAt(new Q(0,0,0)),le.add(Ge),P.push(Ge)})}Se();let Me=new ui(.22,-.55,0),L=.0016,ne=!1,ve=!1,q=0,oe=0,Ee=!0,xe=p.current.join("|");function Be(Te){const Ae=N0(Te.latitude,Te.longitude,1.55).normalize(),Qe=new Ls().setFromUnitVectors(Ae,new Q(0,0,1));Me=new ui().setFromQuaternion(Qe),Ee=!1}function Ie(Te){ne=!0,ve=!1,q=Te.clientX,oe=Te.clientY,Ee=!1,E.domElement.setPointerCapture(Te.pointerId)}function et(Te){if(!ne)return;const Ae=Te.clientX-q,Qe=Te.clientY-oe;Math.abs(Ae)+Math.abs(Qe)>2&&(ve=!0),q=Te.clientX,oe=Te.clientY,L=Ae*8e-5,Me.y+=Ae*.006,Me.x+=Qe*.004,Me.x=Math.max(-1.18,Math.min(1.18,Me.x))}function Et(Te){if(ne=!1,E.domElement.releasePointerCapture(Te.pointerId),ve)return;const Ae=E.domElement.getBoundingClientRect();me.x=(Te.clientX-Ae.left)/Ae.width*2-1,me.y=-((Te.clientY-Ae.top)/Ae.height)*2+1,te.setFromCamera(me,M);const Qe=te.intersectObjects(he)[0];if(!Qe)return;const Fe=m.current.find(ct=>ct.id===Qe.object.userData.eventId);Fe&&v.current(Fe)}E.domElement.addEventListener("pointerdown",Ie),E.domElement.addEventListener("pointermove",et),E.domElement.addEventListener("pointerup",Et);function lt(){M.aspect=y.clientWidth/y.clientHeight,M.updateProjectionMatrix(),E.setSize(y.clientWidth,y.clientHeight)}window.addEventListener("resize",lt);let Ut=0;function U(){Ut=requestAnimationFrame(U);const Te=h.current,Ae=p.current.join("|");Ae!==xe&&(xe=Ae,Se());const Qe=d.current,Fe=Te||Qe;Fe&&Be(Fe),Ee&&!Fe&&(Me.y+=.0015+L),L*=.985,A.rotation.x+=(Me.x-A.rotation.x)*.055,A.rotation.y+=(Me.y-A.rotation.y)*.055,G.rotation.y-=75e-5,D.rotation.y+=4e-4,S.rotation.y+=25e-5,S.rotation.x+=8e-5,he.forEach((ct,Ge)=>{const N=m.current[Ge],b=(Te==null?void 0:Te.id)===(N==null?void 0:N.id),ee=1+Math.sin(performance.now()*.006+Ge)*(b?.5:.22);ct.scale.setScalar(b?1.7+ee*.2:ee)}),P.forEach((ct,Ge)=>{const N=m.current[Ge],b=(Te==null?void 0:Te.id)===(N==null?void 0:N.id),ee=1+Math.sin(performance.now()*.004+Ge)*.22;ct.scale.setScalar(b?1.85*ee:ee)}),E.render(x,M)}return U(),()=>{cancelAnimationFrame(Ut),window.removeEventListener("resize",lt),E.domElement.removeEventListener("pointerdown",Ie),E.domElement.removeEventListener("pointermove",et),E.domElement.removeEventListener("pointerup",Et),E.dispose(),O.dispose(),w.dispose(),y.removeChild(E.domElement)}},[]),fe.jsx("div",{className:"globe-stage",ref:u})}const L0=["World History","Biblical History","Christian Church History","American Christian Heritage","Ancient Civilizations"],Ha=[{id:"creation-garden-eden",title:"Garden of Eden: Creation and Calling",category:"Biblical History",era:"Primeval History",year:"Biblical primeval era",locationName:"Mesopotamian region",latitude:33.3152,longitude:44.3661,cameraHeight:1.55,summary:"Genesis opens with creation, human dignity, vocation, and the tragic rupture of fellowship with God.",scriptureOrReference:"Genesis 1-3",quizQuestion:"Which book describes Eden and the creation account?",quizChoices:["Genesis","Exodus","Psalms","Isaiah"],correctAnswer:"Genesis"},{id:"ur-abraham-call",title:"Ur: Call of Abraham",category:"Biblical History",era:"Patriarchs",year:"c. 2000 BC",locationName:"Tell el-Muqayyar, Iraq",latitude:30.9625,longitude:46.1033,cameraHeight:1.5,summary:"Abraham's journey from Ur begins the covenant story of promise, land, blessing, and faith.",scriptureOrReference:"Genesis 11:31; Genesis 12:1-9",quizQuestion:"Who was called by God to leave his country and go to a promised land?",quizChoices:["Abraham","Moses","David","Daniel"],correctAnswer:"Abraham"},{id:"mount-sinai-law",title:"Mount Sinai: Covenant and Commandments",category:"Biblical History",era:"Exodus",year:"Traditional setting: 2nd millennium BC",locationName:"Sinai Peninsula, Egypt",latitude:28.5397,longitude:33.9733,cameraHeight:1.55,summary:"Sinai stands for deliverance shaped into covenant life through worship, law, and the presence of God.",scriptureOrReference:"Exodus 19-20",quizQuestion:"What major biblical event is associated with Mount Sinai?",quizChoices:["Giving of the Ten Commandments","Birth of Jesus","Conversion of Paul","Fall of Jericho"],correctAnswer:"Giving of the Ten Commandments"},{id:"jericho-fall",title:"Jericho: Israel Enters the Land",category:"Biblical History",era:"Conquest",year:"Traditional setting: Late Bronze Age",locationName:"Jericho",latitude:31.856,longitude:35.4599,cameraHeight:1.35,summary:"Jericho marks a dramatic threshold in the story of Israel's entrance into Canaan.",scriptureOrReference:"Joshua 6",quizQuestion:"Which leader is connected with the fall of Jericho?",quizChoices:["Joshua","Saul","Nehemiah","Solomon"],correctAnswer:"Joshua"},{id:"jerusalem-temple-solomon",title:"Jerusalem: Solomon's Temple Dedicated",category:"Biblical History",era:"United Monarchy",year:"c. 10th century BC",locationName:"Jerusalem",latitude:31.778,longitude:35.2354,cameraHeight:1.3,summary:"The temple became Israel's central place of worship, prayer, sacrifice, and covenant memory.",scriptureOrReference:"1 Kings 8; 2 Chronicles 5-7",quizQuestion:"Which king is traditionally associated with building the first temple in Jerusalem?",quizChoices:["Solomon","Hezekiah","Josiah","Herod"],correctAnswer:"Solomon"},{id:"babylon-exile",title:"Babylon: Exile and Prophetic Hope",category:"Biblical History",era:"Exile",year:"586 BC",locationName:"Babylon, Iraq",latitude:32.5364,longitude:44.4208,cameraHeight:1.5,summary:"The Babylonian exile reshaped Israel's faith through judgment, lament, perseverance, and hope for restoration.",scriptureOrReference:"2 Kings 25; Jeremiah 29; Psalm 137",quizQuestion:"Which empire destroyed Jerusalem and carried many Judeans into exile in 586 BC?",quizChoices:["Babylon","Rome","Assyria","Persia"],correctAnswer:"Babylon"},{id:"bethlehem-nativity",title:"Bethlehem: Birth of Jesus Christ",category:"Biblical History",era:"New Testament",year:"c. 6-4 BC",locationName:"Bethlehem",latitude:31.7054,longitude:35.2024,cameraHeight:1.35,summary:"Bethlehem is remembered as the birthplace of Jesus, where the Gospel story frames humility and glory together.",scriptureOrReference:"Luke 2:1-20; Matthew 2:1-12",quizQuestion:"Which town is traditionally remembered as the birthplace of Jesus?",quizChoices:["Bethlehem","Nazareth","Capernaum","Damascus"],correctAnswer:"Bethlehem"},{id:"nazareth-jesus-youth",title:"Nazareth: Hidden Years of Jesus",category:"Biblical History",era:"New Testament",year:"1st century",locationName:"Nazareth",latitude:32.6996,longitude:35.3035,cameraHeight:1.35,summary:"Nazareth anchors the ordinary, faithful setting of Jesus' upbringing before His public ministry.",scriptureOrReference:"Luke 2:39-52",quizQuestion:"Where did Jesus grow up according to the Gospel tradition?",quizChoices:["Nazareth","Athens","Rome","Babylon"],correctAnswer:"Nazareth"},{id:"sea-galilee-ministry",title:"Sea of Galilee: Ministry and Miracles",category:"Biblical History",era:"New Testament",year:"c. AD 27-30",locationName:"Sea of Galilee",latitude:32.8333,longitude:35.5833,cameraHeight:1.35,summary:"Around Galilee, Jesus taught crowds, called disciples, healed the sick, and displayed authority over creation.",scriptureOrReference:"Matthew 4:18-22; Mark 4:35-41",quizQuestion:"Which body of water is closely linked with Jesus' Galilean ministry?",quizChoices:["Sea of Galilee","Red Sea","Dead Sea","Mediterranean Sea"],correctAnswer:"Sea of Galilee"},{id:"jerusalem-resurrection",title:"Jerusalem: Crucifixion and Resurrection",category:"Biblical History",era:"New Testament",year:"c. AD 30",locationName:"Jerusalem",latitude:31.7683,longitude:35.2137,cameraHeight:1.28,summary:"Jerusalem stands at the center of the Gospel narrative: cross, empty tomb, and the proclamation of resurrection.",scriptureOrReference:"Matthew 27-28; John 19-20",quizQuestion:"Which city is central to the Gospel accounts of Jesus' crucifixion and resurrection?",quizChoices:["Jerusalem","Antioch","Ephesus","Alexandria"],correctAnswer:"Jerusalem"},{id:"mount-olives-ascension",title:"Mount of Olives: Ascension of Christ",category:"Biblical History",era:"New Testament",year:"c. AD 30",locationName:"Mount of Olives, Jerusalem",latitude:31.778,longitude:35.2432,cameraHeight:1.28,summary:"The Mount of Olives is associated with Jesus' teaching, prayer, and the account of His ascension.",scriptureOrReference:"Acts 1:6-12; Luke 24:50-53",quizQuestion:"Which event is associated with the Mount of Olives in Acts 1?",quizChoices:["Ascension of Christ","Council of Nicaea","Crossing the Red Sea","Dedication of the temple"],correctAnswer:"Ascension of Christ"},{id:"damascus-conversion-paul",title:"Damascus Road: Conversion of Paul",category:"Biblical History",era:"Apostolic Church",year:"c. AD 33-36",locationName:"Damascus, Syria",latitude:33.5138,longitude:36.2765,cameraHeight:1.42,summary:"The road to Damascus marks Saul's dramatic encounter with the risen Christ and his calling as the Apostle Paul.",scriptureOrReference:"Acts 9:1-19",quizQuestion:"Who was converted on the road to Damascus?",quizChoices:["Paul","Peter","Stephen","Barnabas"],correctAnswer:"Paul"},{id:"antioch-christians",title:"Antioch: Believers First Called Christians",category:"Biblical History",era:"Apostolic Church",year:"1st century",locationName:"Antakya, Turkey",latitude:36.2021,longitude:36.1613,cameraHeight:1.42,summary:"Antioch became a missionary center where followers of Jesus were first called Christians.",scriptureOrReference:"Acts 11:19-26; Acts 13:1-3",quizQuestion:"Where were disciples first called Christians according to Acts?",quizChoices:["Antioch","Rome","Corinth","Jericho"],correctAnswer:"Antioch"},{id:"rome-early-church",title:"Rome: Witness of the Early Church",category:"Christian Church History",era:"Early Church",year:"1st-4th centuries",locationName:"Rome, Italy",latitude:41.9028,longitude:12.4964,cameraHeight:1.5,summary:"Rome was both an imperial capital and a place where Christian witness endured persecution and eventually public recognition.",scriptureOrReference:"Romans; 1 Clement; early martyr traditions",quizQuestion:"Which city was the imperial center where many early Christians bore witness?",quizChoices:["Rome","Geneva","Wittenberg","Philadelphia"],correctAnswer:"Rome"},{id:"nicaea-council",title:"Nicaea: Council and Creed",category:"Christian Church History",era:"Early Councils",year:"AD 325",locationName:"Iznik, Turkey",latitude:40.4286,longitude:29.7211,cameraHeight:1.45,summary:"The Council of Nicaea addressed the confession of Christ and shaped language used in historic Christian orthodoxy.",scriptureOrReference:"Nicene Creed; Eusebius, Life of Constantine",quizQuestion:"What major council met in AD 325?",quizChoices:["Council of Nicaea","Council of Trent","Westminster Assembly","Diet of Worms"],correctAnswer:"Council of Nicaea"},{id:"constantinople-council",title:"Constantinople: Creed Confirmed",category:"Christian Church History",era:"Early Councils",year:"AD 381",locationName:"Istanbul, Turkey",latitude:41.0082,longitude:28.9784,cameraHeight:1.45,summary:"The council at Constantinople strengthened Trinitarian confession and helped clarify the church's public teaching.",scriptureOrReference:"Niceno-Constantinopolitan Creed",quizQuestion:"Which doctrine was strongly clarified by the early ecumenical councils?",quizChoices:["The Trinity","The Mayflower Compact","Magna Carta","The Rosetta Stone"],correctAnswer:"The Trinity"},{id:"hippo-augustine",title:"Hippo Regius: Augustine's Ministry",category:"Christian Church History",era:"Patristic Era",year:"AD 395-430",locationName:"Annaba, Algeria",latitude:36.9,longitude:7.7667,cameraHeight:1.5,summary:"Augustine's preaching and writing at Hippo shaped Christian thought on grace, worship, history, and the human heart.",scriptureOrReference:"Augustine, Confessions; City of God",quizQuestion:"Which theologian served as bishop of Hippo?",quizChoices:["Augustine","Athanasius","Luther","Calvin"],correctAnswer:"Augustine"},{id:"cluny-reform",title:"Cluny Abbey: Monastic Reform",category:"Christian Church History",era:"Medieval Church",year:"AD 910 onward",locationName:"Cluny, France",latitude:46.434,longitude:4.658,cameraHeight:1.45,summary:"Cluny became a center of monastic renewal, worship, learning, and reform across medieval Europe.",scriptureOrReference:"Cluniac reform records",quizQuestion:"What kind of renewal was Cluny especially known for?",quizChoices:["Monastic reform","Naval exploration","Industrial production","Roman gladiator games"],correctAnswer:"Monastic reform"},{id:"canterbury-anselm",title:"Canterbury: Faith Seeking Understanding",category:"Christian Church History",era:"Medieval Theology",year:"11th century",locationName:"Canterbury, England",latitude:51.2802,longitude:1.0789,cameraHeight:1.45,summary:"Canterbury evokes the medieval pursuit of theology, worship, and the phrase 'faith seeking understanding.'",scriptureOrReference:"Anselm, Proslogion; Cur Deus Homo",quizQuestion:"Which thinker is associated with the phrase 'faith seeking understanding'?",quizChoices:["Anselm","Zwingli","Tyndale","Patrick Henry"],correctAnswer:"Anselm"},{id:"wittenberg-reformation",title:"Wittenberg: Spark of the Reformation",category:"Christian Church History",era:"Reformation",year:"1517",locationName:"Wittenberg, Germany",latitude:51.8663,longitude:12.6469,cameraHeight:1.45,summary:"Wittenberg became a flashpoint of reform through Martin Luther's preaching, teaching, and public debate.",scriptureOrReference:"Luther's Ninety-Five Theses; Romans 1:17",quizQuestion:"Who is most closely associated with Wittenberg in 1517?",quizChoices:["Martin Luther","John Wesley","George Whitefield","Augustine"],correctAnswer:"Martin Luther"},{id:"zurich-reformation",title:"Zurich: Reformation in the City",category:"Christian Church History",era:"Reformation",year:"1520s",locationName:"Zurich, Switzerland",latitude:47.3769,longitude:8.5417,cameraHeight:1.45,summary:"Zurich became a major Reformation center through preaching, biblical exposition, and civic religious reform.",scriptureOrReference:"Zwingli's sermons and reform writings",quizQuestion:"Which reformer is strongly associated with Zurich?",quizChoices:["Huldrych Zwingli","John Knox","Jonathan Edwards","Basil the Great"],correctAnswer:"Huldrych Zwingli"},{id:"geneva-reformation",title:"Geneva: Bible Teaching Center",category:"Christian Church History",era:"Reformation",year:"16th century",locationName:"Geneva, Switzerland",latitude:46.2044,longitude:6.1432,cameraHeight:1.45,summary:"Geneva became influential for preaching, Bible translation, theological education, and church reform.",scriptureOrReference:"Calvin, Institutes of the Christian Religion",quizQuestion:"Which city became a major Reformation teaching center associated with John Calvin?",quizChoices:["Geneva","Athens","Cairo","Hiroshima"],correctAnswer:"Geneva"},{id:"london-tyndale-bible",title:"London: English Bible and Reform",category:"Christian Church History",era:"Reformation",year:"16th century",locationName:"London, England",latitude:51.5072,longitude:-.1276,cameraHeight:1.45,summary:"The English Reformation era intensified debates over Scripture, worship, authority, and vernacular Bible reading.",scriptureOrReference:"Tyndale New Testament; Book of Common Prayer",quizQuestion:"What major Reformation concern involved putting Scripture into common language?",quizChoices:["Bible translation","Pyramid building","Steam power","Space flight"],correctAnswer:"Bible translation"},{id:"aldersgate-wesley",title:"Aldersgate: Wesley's Heart Warmed",category:"Christian Church History",era:"Evangelical Revival",year:"1738",locationName:"London, England",latitude:51.5175,longitude:-.096,cameraHeight:1.45,summary:"John Wesley's Aldersgate experience became a defining moment in Methodist spirituality and evangelical renewal.",scriptureOrReference:"Wesley's Journal, May 24, 1738",quizQuestion:"Whose heart was famously 'strangely warmed' at Aldersgate?",quizChoices:["John Wesley","John Calvin","Martin Luther King Jr.","William Bradford"],correctAnswer:"John Wesley"},{id:"jamestown-church",title:"Jamestown: Worship in Early Virginia",category:"American Christian Heritage",era:"Colonial America",year:"1607",locationName:"Jamestown, Virginia",latitude:37.2108,longitude:-76.7752,cameraHeight:1.45,summary:"Jamestown connects early English settlement with the public religious life of colonial Virginia.",scriptureOrReference:"Jamestown settlement records",quizQuestion:"Which colony was founded at Jamestown in 1607?",quizChoices:["Virginia","Massachusetts","Georgia","Pennsylvania"],correctAnswer:"Virginia"},{id:"plymouth-pilgrims",title:"Plymouth: Pilgrims and Covenant Community",category:"American Christian Heritage",era:"Colonial America",year:"1620",locationName:"Plymouth, Massachusetts",latitude:41.9584,longitude:-70.6673,cameraHeight:1.45,summary:"Plymouth is remembered for the Pilgrims, the Mayflower Compact, and a community shaped by religious conviction.",scriptureOrReference:"Mayflower Compact; William Bradford, Of Plymouth Plantation",quizQuestion:"Which document did the Pilgrims sign before settling at Plymouth?",quizChoices:["Mayflower Compact","Declaration of Independence","Federalist Papers","Bill of Rights"],correctAnswer:"Mayflower Compact"},{id:"boston-puritan-meetinghouse",title:"Boston: Puritan Meetinghouse Culture",category:"American Christian Heritage",era:"Colonial America",year:"1630s",locationName:"Boston, Massachusetts",latitude:42.3601,longitude:-71.0589,cameraHeight:1.45,summary:"Boston's early public life reflected Puritan worship, education, preaching, and civic covenant ideals.",scriptureOrReference:"John Winthrop, A Model of Christian Charity",quizQuestion:"Which phrase is linked with John Winthrop's vision for the colony?",quizChoices:["City upon a hill","Crossing the Rubicon","Iron Curtain","New Frontier"],correctAnswer:"City upon a hill"},{id:"new-haven-yale",title:"New Haven: Yale and Ministerial Learning",category:"American Christian Heritage",era:"Colonial Education",year:"1701",locationName:"New Haven, Connecticut",latitude:41.3083,longitude:-72.9279,cameraHeight:1.45,summary:"Yale's founding reflected colonial commitments to learned ministry, classical study, and Christian education.",scriptureOrReference:"Yale founding records",quizQuestion:"Which institution was founded in New Haven in 1701?",quizChoices:["Yale","Harvard","Princeton","William and Mary"],correctAnswer:"Yale"},{id:"northampton-awakening",title:"Northampton: Great Awakening Preaching",category:"American Christian Heritage",era:"Great Awakening",year:"1730s-1740s",locationName:"Northampton, Massachusetts",latitude:42.3251,longitude:-72.6412,cameraHeight:1.45,summary:"Northampton became associated with revival preaching, spiritual renewal, and Jonathan Edwards' ministry.",scriptureOrReference:"Jonathan Edwards, A Faithful Narrative",quizQuestion:"Which preacher is closely associated with Northampton and the Great Awakening?",quizChoices:["Jonathan Edwards","Roger Williams","George Washington","Billy Sunday"],correctAnswer:"Jonathan Edwards"},{id:"philadelphia-independence",title:"Philadelphia: Liberty and Public Conviction",category:"American Christian Heritage",era:"American Founding",year:"1776",locationName:"Philadelphia, Pennsylvania",latitude:39.9489,longitude:-75.15,cameraHeight:1.45,summary:"Independence Hall is tied to debates over liberty, rights, providence, and the moral language of the American founding.",scriptureOrReference:"Declaration of Independence; founding-era sermons",quizQuestion:"Which document was approved in Philadelphia in 1776?",quizChoices:["Declaration of Independence","Mayflower Compact","Emancipation Proclamation","Magna Carta"],correctAnswer:"Declaration of Independence"},{id:"washington-dc-first-inaugural",title:"New York: Washington's First Inaugural Oath",category:"American Christian Heritage",era:"Early Republic",year:"1789",locationName:"New York, New York",latitude:40.7074,longitude:-74.0108,cameraHeight:1.45,summary:"Washington's inauguration blended constitutional order with public appeals to providence and national responsibility.",scriptureOrReference:"George Washington, First Inaugural Address",quizQuestion:"Who took the first presidential oath of office in 1789?",quizChoices:["George Washington","Thomas Jefferson","John Adams","James Madison"],correctAnswer:"George Washington"},{id:"cane-ridge-revival",title:"Cane Ridge: Frontier Revival",category:"American Christian Heritage",era:"Second Great Awakening",year:"1801",locationName:"Cane Ridge, Kentucky",latitude:38.1781,longitude:-84.2983,cameraHeight:1.45,summary:"Cane Ridge became one of the most famous frontier revival gatherings of the Second Great Awakening.",scriptureOrReference:"Second Great Awakening accounts",quizQuestion:"Which movement is Cane Ridge most associated with?",quizChoices:["Second Great Awakening","Civil Rights Movement","Industrial Revolution","Harlem Renaissance"],correctAnswer:"Second Great Awakening"},{id:"seneca-falls-reform",title:"Seneca Falls: Reform and Moral Appeal",category:"American Christian Heritage",era:"Reform Movements",year:"1848",locationName:"Seneca Falls, New York",latitude:42.9106,longitude:-76.7966,cameraHeight:1.45,summary:"Seneca Falls reflects the reform energy of the era, where religious and moral arguments often shaped public causes.",scriptureOrReference:"Declaration of Sentiments; reform-era writings",quizQuestion:"What 1848 convention took place at Seneca Falls?",quizChoices:["Women's rights convention","Constitutional Convention","Council of Nicaea","Potsdam Conference"],correctAnswer:"Women's rights convention"},{id:"montgomery-civil-rights",title:"Montgomery: Faith and Civil Rights",category:"American Christian Heritage",era:"Civil Rights Era",year:"1955-1956",locationName:"Montgomery, Alabama",latitude:32.3668,longitude:-86.3,cameraHeight:1.45,summary:"Montgomery highlights church-centered organizing, prayer, courage, and moral witness during the civil rights movement.",scriptureOrReference:"Martin Luther King Jr., early civil rights sermons",quizQuestion:"Which protest began in Montgomery in 1955?",quizChoices:["Bus boycott","Boston Tea Party","Gold Rush","D-Day landing"],correctAnswer:"Bus boycott"},{id:"giza-pyramids",title:"Giza: Pyramids of the Old Kingdom",category:"World History",era:"Ancient World",year:"c. 2600-2500 BC",locationName:"Giza, Egypt",latitude:29.9792,longitude:31.1342,cameraHeight:1.55,summary:"The pyramid complex at Giza remains one of the clearest symbols of ancient engineering, kingship, and monumental ambition.",scriptureOrReference:"Ancient Egyptian Old Kingdom records",quizQuestion:"Which civilization built the Pyramids of Giza?",quizChoices:["Ancient Egypt","Ancient Rome","Maya","Han China"],correctAnswer:"Ancient Egypt"},{id:"rome-colosseum",title:"Rome: Colosseum and Imperial Spectacle",category:"World History",era:"Roman Empire",year:"AD 80",locationName:"Rome, Italy",latitude:41.8902,longitude:12.4922,cameraHeight:1.5,summary:"The Colosseum embodied Roman engineering, public entertainment, imperial power, and urban spectacle.",scriptureOrReference:"Flavian Amphitheatre inscriptions and Roman sources",quizQuestion:"What was the Colosseum primarily used for?",quizChoices:["Public spectacles","Astronomical observations","Printing books","Launching ships"],correctAnswer:"Public spectacles"},{id:"constantinople-founding",title:"Constantinople: New Rome Founded",category:"World History",era:"Late Antiquity",year:"AD 330",locationName:"Istanbul, Turkey",latitude:41.0082,longitude:28.9784,cameraHeight:1.45,summary:"Constantinople's strategic position helped it become a powerful capital linking Europe, Asia, and the Mediterranean world.",scriptureOrReference:"Late Roman imperial records",quizQuestion:"Which emperor refounded Byzantium as Constantinople?",quizChoices:["Constantine","Augustus","Nero","Justinian II"],correctAnswer:"Constantine"},{id:"mecca-hijra",title:"Mecca and Medina: Rise of Islam",category:"World History",era:"Early Islamic World",year:"AD 622",locationName:"Mecca, Saudi Arabia",latitude:21.3891,longitude:39.8579,cameraHeight:1.55,summary:"The Hijra became a turning point in Islamic history and the beginning of the Islamic calendar.",scriptureOrReference:"Early Islamic historical tradition",quizQuestion:"Which event begins the Islamic calendar?",quizChoices:["Hijra","Magna Carta","Fall of Rome","Battle of Hastings"],correctAnswer:"Hijra"},{id:"hastings-1066",title:"Hastings: Norman Conquest",category:"World History",era:"Medieval Europe",year:"1066",locationName:"Battle, England",latitude:50.9115,longitude:.4871,cameraHeight:1.45,summary:"The Norman Conquest transformed English rule, language, landholding, and connections with continental Europe.",scriptureOrReference:"Bayeux Tapestry; Anglo-Saxon Chronicle",quizQuestion:"Who won the Battle of Hastings?",quizChoices:["William the Conqueror","Charlemagne","Richard III","Oliver Cromwell"],correctAnswer:"William the Conqueror"},{id:"magna-carta",title:"Runnymede: Magna Carta Sealed",category:"World History",era:"Medieval Europe",year:"1215",locationName:"Runnymede, England",latitude:51.4446,longitude:-.5654,cameraHeight:1.45,summary:"Magna Carta became a landmark in the long history of law, limits on power, and inherited liberties.",scriptureOrReference:"Magna Carta",quizQuestion:"What was sealed at Runnymede in 1215?",quizChoices:["Magna Carta","Treaty of Versailles","Nicene Creed","Mayflower Compact"],correctAnswer:"Magna Carta"},{id:"constantinople-1453",title:"Constantinople: Empire Falls",category:"World History",era:"Early Modern Threshold",year:"1453",locationName:"Istanbul, Turkey",latitude:41.0082,longitude:28.9784,cameraHeight:1.45,summary:"The Ottoman capture of Constantinople ended the Byzantine Empire and reshaped trade, diplomacy, and regional power.",scriptureOrReference:"Ottoman and Byzantine chronicles",quizQuestion:"Which empire captured Constantinople in 1453?",quizChoices:["Ottoman Empire","British Empire","Mongol Empire","Aztec Empire"],correctAnswer:"Ottoman Empire"},{id:"versailles-treaty",title:"Versailles: Treaty After World War I",category:"World History",era:"Modern World",year:"1919",locationName:"Versailles, France",latitude:48.8049,longitude:2.1204,cameraHeight:1.45,summary:"The Treaty of Versailles redrew borders, assigned responsibility, and left tensions that shaped the twentieth century.",scriptureOrReference:"Treaty of Versailles",quizQuestion:"Which war did the Treaty of Versailles formally help conclude?",quizChoices:["World War I","World War II","American Civil War","Crimean War"],correctAnswer:"World War I"},{id:"normandy-dday",title:"Normandy: D-Day Landings",category:"World History",era:"World War II",year:"1944",locationName:"Normandy, France",latitude:49.4144,longitude:-.8322,cameraHeight:1.45,summary:"The Allied landings opened a major western front in Europe and became a defining operation of World War II.",scriptureOrReference:"Operation Overlord records",quizQuestion:"What was the code name for the Normandy invasion campaign?",quizChoices:["Operation Overlord","Operation Desert Storm","Operation Torch","Operation Market Garden"],correctAnswer:"Operation Overlord"},{id:"hiroshima-peace",title:"Hiroshima: Peace Memorial",category:"World History",era:"World War II",year:"1945",locationName:"Hiroshima, Japan",latitude:34.3955,longitude:132.4536,cameraHeight:1.5,summary:"Hiroshima's memorial landscape preserves memory of nuclear devastation and the urgent call for peace.",scriptureOrReference:"Hiroshima Peace Memorial Museum records",quizQuestion:"What happened at Hiroshima in 1945?",quizChoices:["Atomic bombing","Signing of Magna Carta","Moon landing","Fall of Jericho"],correctAnswer:"Atomic bombing"},{id:"berlin-wall",title:"Berlin: Wall Divides and Falls",category:"World History",era:"Cold War",year:"1961-1989",locationName:"Berlin, Germany",latitude:52.52,longitude:13.405,cameraHeight:1.45,summary:"The Berlin Wall became a global symbol of Cold War division, surveillance, resistance, and eventual reunification.",scriptureOrReference:"Cold War-era public records",quizQuestion:"What did the Berlin Wall symbolize during the Cold War?",quizChoices:["Division between East and West","Roman conquest","Medieval monastic reform","Ancient irrigation"],correctAnswer:"Division between East and West"},{id:"catalhoyuk",title:"Catalhoyuk: Neolithic Urban Life",category:"Ancient Civilizations",era:"Neolithic",year:"c. 7500-5700 BC",locationName:"Catalhoyuk, Turkey",latitude:37.6685,longitude:32.8266,cameraHeight:1.5,summary:"Catalhoyuk offers a remarkable window into early settled life, dense housing, ritual spaces, and agriculture.",scriptureOrReference:"Archaeological excavations at Catalhoyuk",quizQuestion:"What is Catalhoyuk best known for?",quizChoices:["Early settled urban life","Roman amphitheaters","Medieval cathedrals","Steam engines"],correctAnswer:"Early settled urban life"},{id:"sumer-uruk",title:"Uruk: Writing and City Power",category:"Ancient Civilizations",era:"Ancient Mesopotamia",year:"c. 3500-3000 BC",locationName:"Warka, Iraq",latitude:31.3222,longitude:45.6367,cameraHeight:1.5,summary:"Uruk was a major Sumerian city where administration, monumental building, and early writing expanded.",scriptureOrReference:"Uruk archaeological records",quizQuestion:"Which civilization is closely associated with Uruk?",quizChoices:["Sumerian","Viking","Inca","Frankish"],correctAnswer:"Sumerian"},{id:"indus-mohenjo-daro",title:"Mohenjo-daro: Planned Ancient City",category:"Ancient Civilizations",era:"Indus Valley",year:"c. 2500 BC",locationName:"Mohenjo-daro, Pakistan",latitude:27.3294,longitude:68.1386,cameraHeight:1.55,summary:"Mohenjo-daro reveals urban planning, drainage, craft production, and organization in the Indus Valley civilization.",scriptureOrReference:"Indus Valley archaeological reports",quizQuestion:"Mohenjo-daro belonged to which ancient civilization?",quizChoices:["Indus Valley","Roman","Aztec","Byzantine"],correctAnswer:"Indus Valley"},{id:"babylon-hammurabi",title:"Babylon: Hammurabi's Law",category:"Ancient Civilizations",era:"Ancient Near East",year:"c. 18th century BC",locationName:"Babylon, Iraq",latitude:32.5364,longitude:44.4208,cameraHeight:1.5,summary:"Hammurabi's law code shows how royal authority, justice, social order, and public inscription could be joined.",scriptureOrReference:"Code of Hammurabi",quizQuestion:"Which ruler is associated with a famous ancient law code?",quizChoices:["Hammurabi","Pericles","Julius Caesar","Akbar"],correctAnswer:"Hammurabi"},{id:"athens-democracy",title:"Athens: Democracy and Philosophy",category:"Ancient Civilizations",era:"Classical Greece",year:"5th century BC",locationName:"Athens, Greece",latitude:37.9838,longitude:23.7275,cameraHeight:1.45,summary:"Athens shaped philosophy, drama, art, civic debate, and the contested legacy of democracy.",scriptureOrReference:"Thucydides; Plato; Aristotle",quizQuestion:"Which ancient city is famous for classical democracy and philosophy?",quizChoices:["Athens","Memphis","Nineveh","Teotihuacan"],correctAnswer:"Athens"},{id:"persepolis-persia",title:"Persepolis: Persian Imperial Vision",category:"Ancient Civilizations",era:"Achaemenid Persia",year:"c. 518 BC onward",locationName:"Persepolis, Iran",latitude:29.935,longitude:52.8916,cameraHeight:1.5,summary:"Persepolis displayed the scale, ceremony, diversity, and administrative reach of the Achaemenid Empire.",scriptureOrReference:"Achaemenid inscriptions; Greek historical sources",quizQuestion:"Persepolis was a ceremonial center of which empire?",quizChoices:["Persian Empire","Roman Empire","British Empire","Song Dynasty"],correctAnswer:"Persian Empire"},{id:"qin-xianyang",title:"Xianyang: Qin Unification",category:"Ancient Civilizations",era:"Imperial China",year:"221 BC",locationName:"Xianyang, China",latitude:34.3296,longitude:108.7089,cameraHeight:1.65,summary:"The Qin unification standardized rule across China and left a durable imperial model.",scriptureOrReference:"Records of the Grand Historian",quizQuestion:"Which dynasty first unified imperial China in 221 BC?",quizChoices:["Qin","Tang","Ming","Han"],correctAnswer:"Qin"},{id:"teotihuacan",title:"Teotihuacan: City of Pyramids",category:"Ancient Civilizations",era:"Ancient Americas",year:"c. AD 100-550",locationName:"Teotihuacan, Mexico",latitude:19.6925,longitude:-98.8438,cameraHeight:1.55,summary:"Teotihuacan was one of the ancient Americas' great urban centers, known for monumental avenues, pyramids, and regional influence.",scriptureOrReference:"Mesoamerican archaeological research",quizQuestion:"Where is Teotihuacan located?",quizChoices:["Mexico","Egypt","Greece","Iraq"],correctAnswer:"Mexico"}],vv="chronoglobe-progress-v2",vd={explored:[],completed:[],quizScore:0,answered:{}},rA=[{id:"city-new-york",label:"New York, United States",latitude:40.7128,longitude:-74.006},{id:"city-tokyo",label:"Tokyo, Japan",latitude:35.6762,longitude:139.6503},{id:"city-paris",label:"Paris, France",latitude:48.8566,longitude:2.3522},{id:"city-london",label:"London, United Kingdom",latitude:51.5072,longitude:-.1276},{id:"city-cairo",label:"Cairo, Egypt",latitude:30.0444,longitude:31.2357},{id:"city-istanbul",label:"Istanbul, Turkey",latitude:41.0082,longitude:28.9784},{id:"city-athens",label:"Athens, Greece",latitude:37.9838,longitude:23.7275},{id:"city-berlin",label:"Berlin, Germany",latitude:52.52,longitude:13.405}],Th={all:null,faith:["Biblical History","Christian Church History","American Christian Heritage"],world:["World History","Ancient Civilizations"]};function xs(o){return o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function sA(o,t){var r;return((r=[{label:"Title",value:o.title},{label:"Location",value:o.locationName},{label:"Category",value:o.category}].find(l=>xs(l.value).includes(t)))==null?void 0:r.label)||"Event"}function O0(){try{return{...vd,...JSON.parse(localStorage.getItem(vv)||"{}")}}catch{return vd}}function z0(o){return o==="Biblical History"?fe.jsx(Ah,{size:16}):o==="Christian Church History"?fe.jsx(Rh,{size:16}):o==="American Christian Heritage"?fe.jsx(B0,{size:16}):o==="Ancient Civilizations"?fe.jsx(Ch,{size:16}):fe.jsx(Hx,{size:16})}function oA(o){return o.quizQuestion&&o.quizChoices&&o.correctAnswer?{question:o.quizQuestion,choices:o.quizChoices,correctAnswer:o.correctAnswer}:{question:`Where is "${o.title}" located?`,choices:[o.locationName,"Rome, Italy","Jerusalem","Athens, Greece","Giza, Egypt","Wittenberg, Germany"].filter((t,i,r)=>r.indexOf(t)===i).slice(0,4),correctAnswer:o.locationName}}function lA(o){const t=Ha.filter(i=>o.explored.includes(i.id));return[{name:"Explorer",unlocked:o.explored.length>=5,detail:"Explore 5 locations"},{name:"Historian",unlocked:o.explored.length>=15,detail:"Explore 15 locations"},{name:"Bible Scholar",unlocked:t.filter(i=>i.category==="Biblical History").length>=5,detail:"Explore 5 Biblical sites"},{name:"World Traveler",unlocked:new Set(t.map(i=>i.category)).size>=4,detail:"Explore 4 categories"}]}function cA(){const[o,t]=st.useState(!0),[i,r]=st.useState("all"),[l,u]=st.useState(!1),[h,d]=st.useState(Ha[0]),[m,p]=st.useState(null),[v,y]=st.useState("All"),[x,M]=st.useState(""),[E,A]=st.useState(!1),[S,g]=st.useState(0),[z,O]=st.useState(O0),[w,K]=st.useState(!1),[G,B]=st.useState(0),[Z,D]=st.useState(!1),[R,F]=st.useState(null),le=st.useRef(null),te=st.useMemo(()=>{const U=Th[i];return U?Ha.filter(Te=>U.includes(Te.category)):Ha},[i]),me=st.useMemo(()=>{const U=Th[i];return U?L0.filter(Te=>U.includes(Te)):L0},[i]);st.useEffect(()=>{localStorage.setItem(vv,JSON.stringify(z))},[z]),st.useEffect(()=>{if(!h||z.explored.includes(h.id))return;const U=window.setTimeout(()=>{O(Te=>({...Te,explored:Te.explored.includes(h.id)?Te.explored:[...Te.explored,h.id]}))},850);return()=>window.clearTimeout(U)},[h,z.explored]),st.useEffect(()=>{if(!w||l||o||te.length===0)return;const U=window.setInterval(()=>{B(Te=>{const Ae=(Te+1)%te.length;return d(te[Ae]),p(null),D(!1),F(null),Ae})},5600);return()=>window.clearInterval(U)},[w,l,o,te]);const he=st.useCallback(U=>{d(U),p(null),A(!1),g(0),D(!1),F(null),K(!1)},[]),P=st.useMemo(()=>{const U=xs(x.trim());if(!U)return[];const Te=te.filter(Ae=>xs(Ae.title).includes(U)||xs(Ae.locationName).includes(U)||xs(Ae.category).includes(U)).map(Ae=>({id:`event-${Ae.id}`,type:"event",event:Ae,title:Ae.title,subtitle:`${Ae.locationName} · ${Ae.category}`,matchLabel:sA(Ae,U)}));return Te.length?Te.slice(0,8):rA.filter(Ae=>xs(Ae.label).includes(U)).slice(0,5).map(Ae=>({id:Ae.id,type:"city",target:Ae,title:Ae.label,subtitle:"Geographic lookup · no local event card",matchLabel:"City"}))},[te,x]);st.useEffect(()=>{g(0)},[P.length,x]),st.useEffect(()=>{function U(Te){var Ae;(Ae=le.current)!=null&&Ae.contains(Te.target)||A(!1)}return document.addEventListener("pointerdown",U),()=>document.removeEventListener("pointerdown",U)},[]);function j(U){if(U.type==="event"){M(U.event.locationName),he(U.event);return}M(U.target.label),d(null),p(U.target),D(!1),F(null),K(!1),A(!1)}function Y(U){if(U.key==="Escape"){A(!1);return}P.length&&(U.key==="ArrowDown"&&(U.preventDefault(),A(!0),g(Te=>(Te+1)%P.length)),U.key==="ArrowUp"&&(U.preventDefault(),A(!0),g(Te=>(Te-1+P.length)%P.length)),U.key==="Enter"&&(U.preventDefault(),j(P[S]||P[0])))}const Se=st.useMemo(()=>{const U=x.trim().toLowerCase();return te.filter(Te=>{const Ae=v==="All"||Te.category===v,Qe=!U||Te.title.toLowerCase().includes(U)||Te.locationName.toLowerCase().includes(U)||Te.category.toLowerCase().includes(U)||Te.summary.toLowerCase().includes(U);return Ae&&Qe})},[v,te,x]),Me=lA(z),L=h?oA(h):null,ne=h?`event-${h.id}`:m==null?void 0:m.id,ve=st.useMemo(()=>te.filter(U=>v==="All"||U.category===v),[v,te]),q=h?ve.findIndex(U=>U.id===h.id):-1;function oe(U,Te=!1,Ae=null){const Qe=Th[U],Fe=Qe?Ha.filter(ct=>Qe.includes(ct.category)):Ha;r(U),y("All"),M(""),A(!1),g(0),O(Ae||z),d(Fe[0]||null),p(null),D(!1),F(null),B(0),K(Te),u(!1),t(!1)}function Ee(){oe("all",!1,O0())}function xe(){t(!0),u(!1),K(!1),A(!1)}function Be(){d(null),p(null),A(!1),D(!1),F(null),K(!1)}function Ie(){const U=te[0]||null;K(!0),B(0),d(U),p(null),A(!1),u(!1),D(!1),F(null)}function et(U){if(!ve.length)return;const Ae=((q>=0?q:0)+U+ve.length)%ve.length;he(ve[Ae])}function Et(U){O(Te=>({...Te,explored:Te.explored.includes(U.id)?Te.explored:[...Te.explored,U.id],completed:Te.completed.includes(U.id)?Te.completed:[...Te.completed,U.id]}))}function lt(U){if(!h||!L||h.id in z.answered)return;const Te=U===L.correctAnswer;F(Te?"correct":"incorrect"),O(Ae=>({...Ae,quizScore:Ae.quizScore+(Te?100:0),answered:{...Ae.answered,[h.id]:Te}}))}function Ut(){O(vd),F(null)}return fe.jsxs("main",{className:"app-shell",children:[fe.jsx(aA,{events:o?Ha:te,selectedEvent:o?null:h,navigationTarget:o?null:m,completedIds:z.explored,onSelectEvent:he}),o&&fe.jsx("section",{className:"start-screen",children:fe.jsxs("div",{className:"start-panel glass-panel",children:[fe.jsx("p",{className:"eyebrow",children:"Reh Dogg Games Plus presents"}),fe.jsx("h1",{children:"ChronoGlobe: Faith & History Explorer"}),fe.jsx("p",{className:"start-subtitle",children:"Travel the Earth. Discover history. Follow the faith."}),fe.jsxs("div",{className:"start-actions",children:[fe.jsxs("button",{className:"gold-button start-primary",onClick:()=>oe("all"),children:[fe.jsx(Rh,{size:18})," Start Journey"]}),fe.jsxs("button",{className:"mode-button",onClick:()=>oe("faith"),children:[fe.jsx(Ah,{size:18})," Faith & History Mode"]}),fe.jsxs("button",{className:"mode-button",onClick:()=>oe("world"),children:[fe.jsx(Ch,{size:18})," World History Mode"]}),fe.jsxs("button",{className:"mode-button",onClick:()=>oe("all",!0),children:[fe.jsx(A_,{size:18})," Take Guided Tour"]}),fe.jsxs("button",{className:"ghost-button start-continue",onClick:Ee,children:[fe.jsx(B0,{size:18})," Continue Progress"]})]}),fe.jsxs("div",{className:"start-stats",children:[fe.jsxs("span",{children:[Ha.length," landmarks"]}),fe.jsxs("span",{children:[z.explored.length," explored"]}),fe.jsxs("span",{children:[z.quizScore," score"]})]})]})}),!o&&fe.jsxs(fe.Fragment,{children:[fe.jsxs("header",{className:"topbar glass-panel",children:[fe.jsxs("div",{children:[fe.jsx("p",{className:"eyebrow",children:"ChronoGlobe Command Deck"}),fe.jsx("h1",{children:"Faith & History Explorer"})]}),fe.jsxs("div",{className:"topbar-actions",children:[fe.jsxs("div",{className:"score-chip",children:["Quiz Score: ",z.quizScore]}),fe.jsxs("button",{className:"ghost-button",onClick:()=>u(!0),children:[fe.jsx(Vx,{size:17})," Pause/Menu"]}),fe.jsxs("button",{className:"ghost-button",onClick:Be,children:[fe.jsx(kx,{size:17})," Reset Globe"]}),fe.jsxs("button",{className:w?"gold-button active":"gold-button",onClick:w?()=>K(!1):Ie,children:[fe.jsx(A_,{size:17})," ",w?"Stop Tour":"Take Tour"]})]})]}),fe.jsxs("aside",{className:"side-panel glass-panel",children:[fe.jsxs("div",{className:"panel-heading",children:[fe.jsx("p",{className:"eyebrow",children:"Event Archive"}),fe.jsxs("strong",{children:["Explored: ",z.explored.filter(U=>te.some(Te=>Te.id===U)).length,"/",te.length]})]}),fe.jsxs("div",{className:"search-wrap",ref:le,children:[fe.jsxs("label",{className:"search-box",children:[fe.jsx(Wx,{size:17}),fe.jsx("input",{value:x,onChange:U=>{M(U.target.value),A(!0)},onFocus:()=>A(!0),onKeyDown:Y,placeholder:"Search Jerusalem, Rome, Reformation..."})]}),E&&x.trim()&&fe.jsx("div",{className:"search-dropdown",children:P.length?P.map((U,Te)=>fe.jsxs("button",{className:["search-result",S===Te?"highlighted":"",ne===U.id?"selected":""].filter(Boolean).join(" "),onMouseEnter:()=>g(Te),onMouseDown:Ae=>{Ae.preventDefault(),j(U)},children:[fe.jsxs("span",{children:[fe.jsx("strong",{children:U.title}),fe.jsx("small",{children:U.subtitle})]}),fe.jsx("em",{children:U.matchLabel})]},U.id)):fe.jsx("div",{className:"search-empty",children:"No landmark or common city found."})})]}),fe.jsxs("div",{className:"category-grid",children:[fe.jsxs("button",{className:v==="All"?"category-pill active":"category-pill",onClick:()=>y("All"),children:[fe.jsx(Rh,{size:16})," All"]}),me.map(U=>fe.jsxs("button",{className:v===U?"category-pill active":"category-pill",onClick:()=>y(U),children:[z0(U)," ",U]},U))]}),fe.jsx("div",{className:"achievement-strip",children:Me.map(U=>fe.jsxs("div",{className:U.unlocked?"badge unlocked":"badge",title:U.detail,children:[fe.jsx(Fx,{size:15})," ",U.name]},U.name))}),fe.jsxs("div",{className:"legend",children:[fe.jsxs("span",{children:[fe.jsx("i",{className:"gold-dot"})," Biblical"]}),fe.jsxs("span",{children:[fe.jsx("i",{className:"blue-dot"})," World"]}),fe.jsxs("span",{children:[fe.jsx("i",{className:"green-dot"})," Christian"]}),fe.jsxs("span",{children:[fe.jsx("i",{className:"red-dot"})," Ancient"]})]}),fe.jsx("div",{className:"event-list",children:Se.map(U=>fe.jsxs("button",{className:(h==null?void 0:h.id)===U.id?"event-row active":"event-row",onClick:()=>he(U),children:[fe.jsxs("span",{children:[fe.jsx("strong",{children:U.title}),fe.jsxs("small",{children:[U.year," • ",U.locationName]})]}),z.explored.includes(U.id)?fe.jsx(T_,{className:"check",size:18}):fe.jsx(Gx,{size:17})]},U.id))}),fe.jsx("button",{className:"reset-progress",onClick:Ut,children:"Reset Progress"})]}),fe.jsx("section",{className:h?"event-card glass-panel open":"event-card glass-panel",children:h?fe.jsxs(fe.Fragment,{children:[fe.jsxs("div",{className:"event-card-topline",children:[fe.jsxs("span",{className:"category-badge",children:[z0(h.category)," ",h.category]}),fe.jsx("span",{className:"era-chip",children:h.era})]}),fe.jsx("h2",{children:h.title}),fe.jsxs("div",{className:"meta-line",children:[fe.jsx("span",{children:h.year}),fe.jsx("span",{children:h.locationName})]}),fe.jsx("p",{children:h.summary}),h.scriptureOrReference&&fe.jsxs("div",{className:"reference",children:[fe.jsx(Ah,{size:18}),fe.jsxs("span",{children:[fe.jsx("strong",{children:"Scripture / Reference"}),h.scriptureOrReference]})]}),fe.jsxs("div",{className:"card-actions",children:[fe.jsx("button",{className:"ghost-button",onClick:()=>et(-1),children:"Previous Event"}),fe.jsx("button",{className:"ghost-button",onClick:()=>et(1),children:"Next Event"}),fe.jsxs("button",{className:"gold-button",onClick:()=>D(!Z),children:[fe.jsx(Ch,{size:17})," Quiz"]}),fe.jsxs("button",{className:"ghost-button",onClick:()=>Et(h),children:[fe.jsx(T_,{size:17})," Mark Explored"]}),fe.jsx("button",{className:"ghost-button",onClick:Be,children:"Close"})]}),Z&&L&&fe.jsxs("div",{className:"quiz-box",children:[fe.jsx("strong",{children:L.question}),fe.jsx("div",{className:"quiz-choices",children:L.choices.map(U=>fe.jsx("button",{disabled:h.id in z.answered,onClick:()=>lt(U),children:U},U))}),R&&fe.jsx("p",{className:R==="correct"?"quiz-result correct":"quiz-result incorrect",children:R==="correct"?"Correct! +100 command score.":`Incorrect. Correct answer: ${L.correctAnswer}`})]})]}):fe.jsxs(fe.Fragment,{children:[fe.jsx("p",{className:"eyebrow",children:"Global View"}),fe.jsx("h2",{children:"Select an event to begin"}),fe.jsx("p",{children:"Click a glowing marker or choose a location from the archive. The globe will fly to the selected place."})]})}),l&&fe.jsx("section",{className:"pause-overlay",children:fe.jsxs("div",{className:"pause-panel glass-panel",children:[fe.jsx("p",{className:"eyebrow",children:"Mission Paused"}),fe.jsx("h2",{children:"Command Menu"}),fe.jsxs("div",{className:"pause-actions",children:[fe.jsx("button",{className:"gold-button",onClick:()=>u(!1),children:"Resume"}),fe.jsx("button",{className:"ghost-button",onClick:()=>{Be(),u(!1)},children:"Reset Globe"}),fe.jsx("button",{className:"ghost-button danger-lite",onClick:()=>{Ut(),u(!1)},children:"Reset Progress"}),fe.jsx("button",{className:"mode-button",onClick:xe,children:"Back to Start Screen"})]})]})})]})]})}zx.createRoot(document.getElementById("root")).render(fe.jsx(Rx.StrictMode,{children:fe.jsx(cA,{})}));
