// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function o(t,e,r){var o=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(o=!0,t=t.substr(1)),t=r?t+n(i):n(i)+t,o&&(t="-"+t)),t}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(t){var e,n,a;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,a=parseInt(n,10),!isFinite(a)){if(!r(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===t.specifier||10!==e)&&(a=4294967295+a+1),a<0?(n=(-a).toString(e),t.precision&&(n=o(n,t.precision,t.padRight)),n="-"+n):(n=a.toString(e),a||t.precision?t.precision&&(n=o(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===u.call(t.specifier)?u.call(n):i.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var e,n,o=parseFloat(t.arg);if(!isFinite(o)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);o=t.arg}switch(t.specifier){case"e":case"E":n=o.toExponential(t.precision);break;case"f":case"F":n=o.toFixed(t.precision);break;case"g":case"G":l(o)<1e-4?((e=t.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(t.precision),t.alternate||(n=s.call(n,m,"$1e"),n=s.call(n,h,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,g,"e-0$1"),t.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,v,"$1.e")),o>=0&&t.sign&&(n=t.sign+n),n=t.specifier===p.call(t.specifier)?p.call(n):f.call(n)}function j(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function _(t,e,r){var n=e-t.length;return n<0?t:t=r?t+j(n):j(n)+t}var O=String.fromCharCode,S=isNaN,E=Array.isArray;function x(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function T(t){var e,r,n,i,u,l,f,p,s;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,p=0;p<t.length;p++)if(c(n=t[p]))l+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(i=r.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(u)?String(n.arg):O(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function k(t){var e,r,n,o;for(r=[],o=0,n=I.exec(t);n;)(e=t.slice(o,I.lastIndex-n[0].length)).length&&r.push(e),r.push(P(n)),o=I.lastIndex,n=I.exec(t);return(e=t.slice(o)).length&&r.push(e),r}function A(t){return"string"==typeof t}function V(t){var e,r,n;if(!A(t))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=k(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return T.apply(null,r)}var N,F=Object.prototype,B=F.toString,L=F.__defineGetter__,C=F.__defineSetter__,G=F.__lookupGetter__,Y=F.__lookupSetter__;N=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(G.call(t,e)||Y.call(t,e)?(n=t.__proto__,t.__proto__=F,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(t,e,r.get),u&&C&&C.call(t,e,r.set),t};var R=N;function X(t,e,r){R(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var M=Math.floor;function W(t){return M(t)===t}function $(t){return"number"==typeof t}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return H&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function z(t,e){return null!=t&&D.call(t,e)}var q="function"==typeof Symbol?Symbol:void 0,J="function"==typeof q?q.toStringTag:"";var K=U()?function(t){var e,r,n;if(null==t)return Z.call(t);r=t[J],e=z(t,J);try{t[J]=void 0}catch(e){return Z.call(t)}return n=Z.call(t),e?t[J]=r:delete t[J],n}:function(t){return Z.call(t)},Q=Number,tt=Q.prototype.toString;var et=U();function rt(t){return"object"==typeof t&&(t instanceof Q||(et?function(t){try{return tt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===K(t)))}function nt(t){return $(t)||rt(t)}X(nt,"isPrimitive",$),X(nt,"isObject",rt);var ot=Number.POSITIVE_INFINITY,it=Q.NEGATIVE_INFINITY;function ut(t){return t<ot&&t>it&&W(t)}function at(t){return $(t)&&ut(t)}function ct(t){return rt(t)&&ut(t.valueOf())}function lt(t){return at(t)||ct(t)}function ft(t){return at(t)&&t>=0}function pt(t){return ct(t)&&t.valueOf()>=0}function st(t){return ft(t)||pt(t)}function yt(t){return Object.keys(Object(t))}X(lt,"isPrimitive",at),X(lt,"isObject",ct),X(st,"isPrimitive",ft),X(st,"isObject",pt);var gt=void 0!==Object.keys;var bt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function vt(){return bt&&"symbol"==typeof Symbol.toStringTag}var dt=Object.prototype.toString;var ht=Object.prototype.hasOwnProperty;function mt(t,e){return null!=t&&ht.call(t,e)}var wt="function"==typeof Symbol?Symbol.toStringTag:"";var jt=vt()?function(t){var e,r,n;if(null==t)return dt.call(t);r=t[wt],e=mt(t,wt);try{t[wt]=void 0}catch(e){return dt.call(t)}return n=dt.call(t),e?t[wt]=r:delete t[wt],n}:function(t){return dt.call(t)};function _t(t){return"[object Arguments]"===jt(t)}var Ot=function(){return _t(arguments)}(),St="function"==typeof Object.defineProperty?Object.defineProperty:null;var Et,xt=Object.defineProperty,Tt=Object.prototype,It=Tt.toString,Pt=Tt.__defineGetter__,kt=Tt.__defineSetter__,At=Tt.__lookupGetter__,Vt=Tt.__lookupSetter__;Et=function(){try{return St({},"x",{}),!0}catch(t){return!1}}()?xt:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===It.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===It.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(At.call(t,e)||Vt.call(t,e)?(n=t.__proto__,t.__proto__=Tt,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Pt&&Pt.call(t,e,r.get),u&&kt&&kt.call(t,e,r.set),t};var Nt=Et;function Ft(t,e,r){Nt(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function Bt(t){return"string"==typeof t}var Lt=String.prototype.valueOf;var Ct=vt();function Gt(t){return"object"==typeof t&&(t instanceof String||(Ct?function(t){try{return Lt.call(t),!0}catch(t){return!1}}(t):"[object String]"===jt(t)))}function Yt(t){return Bt(t)||Gt(t)}function Rt(t){return"number"==typeof t}Ft(Yt,"isPrimitive",Bt),Ft(Yt,"isObject",Gt);var Xt=Number,Mt=Xt.prototype.toString;var Wt=vt();function $t(t){return"object"==typeof t&&(t instanceof Xt||(Wt?function(t){try{return Mt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===jt(t)))}function Ht(t){return Rt(t)||$t(t)}function Ut(t){return t!=t}function Zt(t){return Rt(t)&&Ut(t)}function Dt(t){return $t(t)&&Ut(t.valueOf())}function zt(t){return Zt(t)||Dt(t)}Ft(Ht,"isPrimitive",Rt),Ft(Ht,"isObject",$t),Ft(zt,"isPrimitive",Zt),Ft(zt,"isObject",Dt);var qt=Number.POSITIVE_INFINITY,Jt=Xt.NEGATIVE_INFINITY,Kt=Math.floor;function Qt(t){return Kt(t)===t}function te(t){return t<qt&&t>Jt&&Qt(t)}function ee(t){return Rt(t)&&te(t)}function re(t){return $t(t)&&te(t.valueOf())}function ne(t){return ee(t)||re(t)}Ft(ne,"isPrimitive",ee),Ft(ne,"isObject",re);var oe=Object.prototype.propertyIsEnumerable;var ie=!oe.call("beep","0");function ue(t,e){var r;return null!=t&&(!(r=oe.call(t,e))&&ie&&Yt(t)?!Zt(e=+e)&&ee(e)&&e>=0&&e<t.length:r)}var ae=Array.isArray?Array.isArray:function(t){return"[object Array]"===jt(t)};var ce=Ot?_t:function(t){return null!==t&&"object"==typeof t&&!ae(t)&&"number"==typeof t.length&&Qt(t.length)&&t.length>=0&&t.length<=4294967295&&mt(t,"callee")&&!ue(t,"callee")},le=Array.prototype.slice;function fe(t){return null!==t&&"object"==typeof t}Ft(fe,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!ae(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(fe));var pe=ue((function(){}),"prototype"),se=!ue({toString:null},"toString");function ye(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Qt(t.length)&&t.length>=0&&t.length<=9007199254740991}function ge(t,e,r){var n,o;if(!ye(t)&&!Bt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!ee(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(zt(e)){for(;o<n;o++)if(zt(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var be=/./;function ve(t){return"boolean"==typeof t}var de=Boolean.prototype.toString;var he=vt();function me(t){return"object"==typeof t&&(t instanceof Boolean||(he?function(t){try{return de.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===jt(t)))}function we(t){return ve(t)||me(t)}function je(){return new Function("return this;")()}Ft(we,"isPrimitive",ve),Ft(we,"isObject",me);var _e="object"==typeof self?self:null,Oe="object"==typeof window?window:null,Se="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ee="object"==typeof Se?Se:null;var xe=function(t){if(arguments.length){if(!ve(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return je()}if(_e)return _e;if(Oe)return Oe;if(Ee)return Ee;throw new Error("unexpected error. Unable to resolve global object.")}(),Te=xe.document&&xe.document.childNodes,Ie=Int8Array;function Pe(){return/^\s*function\s*([^(]*)/i}var ke=/^\s*function\s*([^(]*)/i;function Ae(t){var e,r,n,o;if(("Object"===(r=jt(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ke.exec(n.toString()))return e[1]}return fe(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}Ft(Pe,"REGEXP",ke);var Ve="function"==typeof be||"object"==typeof Ie||"function"==typeof Te?function(t){return Ae(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ae(t).toLowerCase():e};function Ne(t){return t.constructor&&t.constructor.prototype===t}var Fe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Be="undefined"==typeof window?void 0:window;var Le=function(){var t;if("undefined"===Ve(Be))return!1;for(t in Be)try{-1===ge(Fe,t)&&mt(Be,t)&&null!==Be[t]&&"object"===Ve(Be[t])&&Ne(Be[t])}catch(t){return!0}return!1}(),Ce="undefined"!=typeof window;var Ge=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ye=gt?function(){return 2!==(yt(arguments)||"").length}(1,2)?function(t){return ce(t)?yt(le.call(t)):yt(t)}:yt:function(t){var e,r,n,o,i,u,a;if(o=[],ce(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!mt(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!fe(t))return o;r=pe&&n}for(i in t)r&&"prototype"===i||!mt(t,i)||o.push(String(i));if(se)for(e=function(t){if(!1===Ce&&!Le)return Ne(t);try{return Ne(t)}catch(t){return!1}}(t),a=0;a<Ge.length;a++)u=Ge[a],e&&"constructor"===u||!mt(t,u)||o.push(String(u));return o};function Re(t){return"function"===Ve(t)}var Xe,Me=Object.getPrototypeOf;Xe=Re(Object.getPrototypeOf)?Me:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===jt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var We=Xe;var $e=Object.prototype;function He(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!ae(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),We(t))}(t),!e||!mt(t,"constructor")&&mt(e,"constructor")&&Re(e.constructor)&&"[object Function]"===jt(e.constructor)&&mt(e,"isPrototypeOf")&&Re(e.isPrototypeOf)&&(e===$e||function(t){var e;for(e in t)if(!mt(t,e))return!1;return!0}(t)))}var Ue="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ze,De=Object.defineProperty,ze=Object.prototype,qe=ze.toString,Je=ze.__defineGetter__,Ke=ze.__defineSetter__,Qe=ze.__lookupGetter__,tr=ze.__lookupSetter__;Ze=function(){try{return Ue({},"x",{}),!0}catch(t){return!1}}()?De:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===qe.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===qe.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(Qe.call(t,e)||tr.call(t,e)?(n=t.__proto__,t.__proto__=ze,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Je&&Je.call(t,e,r.get),u&&Ke&&Ke.call(t,e,r.set),t};var er=Ze;function rr(t,e,r){er(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var nr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function or(){return nr.slice()}var ir=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function ur(){return ir.slice()}function ar(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function cr(t,e,r){er(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function lr(t){return Object.keys(Object(t))}var fr=void 0!==Object.keys;var pr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function sr(){return pr&&"symbol"==typeof Symbol.toStringTag}var yr=Object.prototype.toString;var gr=Object.prototype.hasOwnProperty;function br(t,e){return null!=t&&gr.call(t,e)}var vr="function"==typeof Symbol?Symbol.toStringTag:"";var dr=sr()?function(t){var e,r,n;if(null==t)return yr.call(t);r=t[vr],e=br(t,vr);try{t[vr]=void 0}catch(e){return yr.call(t)}return n=yr.call(t),e?t[vr]=r:delete t[vr],n}:function(t){return yr.call(t)};function hr(t){return"[object Arguments]"===dr(t)}var mr=function(){return hr(arguments)}();function wr(t){return"string"==typeof t}var jr=String.prototype.valueOf;var _r=sr();function Or(t){return"object"==typeof t&&(t instanceof String||(_r?function(t){try{return jr.call(t),!0}catch(t){return!1}}(t):"[object String]"===dr(t)))}function Sr(t){return wr(t)||Or(t)}function Er(t){return"number"==typeof t}rr(Sr,"isPrimitive",wr),rr(Sr,"isObject",Or);var xr=Number,Tr=xr.prototype.toString;var Ir=sr();function Pr(t){return"object"==typeof t&&(t instanceof xr||(Ir?function(t){try{return Tr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===dr(t)))}function kr(t){return Er(t)||Pr(t)}function Ar(t){return t!=t}function Vr(t){return Er(t)&&Ar(t)}function Nr(t){return Pr(t)&&Ar(t.valueOf())}function Fr(t){return Vr(t)||Nr(t)}rr(kr,"isPrimitive",Er),rr(kr,"isObject",Pr),rr(Fr,"isPrimitive",Vr),rr(Fr,"isObject",Nr);var Br=Number.POSITIVE_INFINITY,Lr=xr.NEGATIVE_INFINITY,Cr=Math.floor;function Gr(t){return Cr(t)===t}function Yr(t){return t<Br&&t>Lr&&Gr(t)}function Rr(t){return Er(t)&&Yr(t)}function Xr(t){return Pr(t)&&Yr(t.valueOf())}function Mr(t){return Rr(t)||Xr(t)}rr(Mr,"isPrimitive",Rr),rr(Mr,"isObject",Xr);var Wr=Object.prototype.propertyIsEnumerable;var $r=!Wr.call("beep","0");function Hr(t,e){var r;return null!=t&&(!(r=Wr.call(t,e))&&$r&&Sr(t)?!Vr(e=+e)&&Rr(e)&&e>=0&&e<t.length:r)}var Ur=Array.isArray?Array.isArray:function(t){return"[object Array]"===dr(t)};var Zr=mr?hr:function(t){return null!==t&&"object"==typeof t&&!Ur(t)&&"number"==typeof t.length&&Gr(t.length)&&t.length>=0&&t.length<=4294967295&&br(t,"callee")&&!Hr(t,"callee")},Dr=Array.prototype.slice;function zr(t){return null!==t&&"object"==typeof t}rr(zr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Ur(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(zr));var qr=Hr((function(){}),"prototype"),Jr=!Hr({toString:null},"toString");function Kr(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Gr(t.length)&&t.length>=0&&t.length<=9007199254740991}function Qr(t,e,r){var n,o;if(!Kr(t)&&!wr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Rr(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(Fr(e)){for(;o<n;o++)if(Fr(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var tn=/./;function en(t){return"boolean"==typeof t}var rn=Boolean.prototype.toString;var nn=sr();function on(t){return"object"==typeof t&&(t instanceof Boolean||(nn?function(t){try{return rn.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===dr(t)))}function un(t){return en(t)||on(t)}function an(){return new Function("return this;")()}rr(un,"isPrimitive",en),rr(un,"isObject",on);var cn="object"==typeof self?self:null,ln="object"==typeof window?window:null,fn="object"==typeof Se?Se:null;var pn=function(t){if(arguments.length){if(!en(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return an()}if(cn)return cn;if(ln)return ln;if(fn)return fn;throw new Error("unexpected error. Unable to resolve global object.")}(),sn=pn.document&&pn.document.childNodes,yn=Int8Array;function gn(){return/^\s*function\s*([^(]*)/i}var bn=/^\s*function\s*([^(]*)/i;function vn(t){var e,r,n,o;if(("Object"===(r=dr(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=bn.exec(n.toString()))return e[1]}return zr(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}rr(gn,"REGEXP",bn);var dn="function"==typeof tn||"object"==typeof yn||"function"==typeof sn?function(t){return vn(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?vn(t).toLowerCase():e};function hn(t){return t.constructor&&t.constructor.prototype===t}var mn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wn="undefined"==typeof window?void 0:window;var jn=function(){var t;if("undefined"===dn(wn))return!1;for(t in wn)try{-1===Qr(mn,t)&&br(wn,t)&&null!==wn[t]&&"object"===dn(wn[t])&&hn(wn[t])}catch(t){return!0}return!1}(),_n="undefined"!=typeof window;var On=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Sn=fr?function(){return 2!==(lr(arguments)||"").length}(1,2)?function(t){return Zr(t)?lr(Dr.call(t)):lr(t)}:lr:function(t){var e,r,n,o,i,u,a;if(o=[],Zr(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!br(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!zr(t))return o;r=qr&&n}for(i in t)r&&"prototype"===i||!br(t,i)||o.push(String(i));if(Jr)for(e=function(t){if(!1===_n&&!jn)return hn(t);try{return hn(t)}catch(t){return!1}}(t),a=0;a<On.length;a++)u=On[a],e&&"constructor"===u||!br(t,u)||o.push(String(u));return o};rr(ur,"enum",ar),function(t,e){var r,n,o;for(r=Sn(e),o=0;o<r.length;o++)cr(t,n=r[o],e[n])}(ur,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var En={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function xn(){return{bool:En.bool,int8:En.int8,uint8:En.uint8,uint8c:En.uint8c,int16:En.int16,uint16:En.uint16,int32:En.int32,uint32:En.uint32,int64:En.int64,uint64:En.uint64,float32:En.float32,float64:En.float64,complex64:En.complex64,complex128:En.complex128,binary:En.binary,generic:En.generic,notype:En.notype,userdefined_type:En.userdefined_type}}rr(or,"enum",xn),function(t,e){var r,n,o;for(r=Sn(e),o=0;o<r.length;o++)cr(t,n=r[o],e[n])}(or,xn());var Tn=function(t,e){var r,n,o,i,u,a,c,l=!0;if(!fe(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!He(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(mt(e,"duplicates")&&!ve(l=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(n=(r=Ye(t)).length,u={},l)for(c=0;c<n;c++)mt(u,i=t[o=r[c]])?(a=u[i],ae(a)?u[i].push(o):u[i]=[a,o]):u[i]=o;else for(c=0;c<n;c++)u[t[o=r[c]]]=o;return u}(xn(),{duplicates:!1});var In={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Pn(){var t;return 0===arguments.length?In.all.slice():(t=In[arguments[0]])?t.slice():[]}function kn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function An(t,e,r){R(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Vn(t){return Object.keys(Object(t))}var Nn=void 0!==Object.keys;function Fn(t){return"[object Arguments]"===K(t)}var Bn=function(){return Fn(arguments)}();function Ln(t){return"string"==typeof t}var Cn=String.prototype.valueOf;var Gn=U();function Yn(t){return"object"==typeof t&&(t instanceof String||(Gn?function(t){try{return Cn.call(t),!0}catch(t){return!1}}(t):"[object String]"===K(t)))}function Rn(t){return Ln(t)||Yn(t)}function Xn(t){return t!=t}function Mn(t){return $(t)&&Xn(t)}function Wn(t){return rt(t)&&Xn(t.valueOf())}function $n(t){return Mn(t)||Wn(t)}X(Rn,"isPrimitive",Ln),X(Rn,"isObject",Yn),X($n,"isPrimitive",Mn),X($n,"isObject",Wn);var Hn=Object.prototype.propertyIsEnumerable;var Un=!Hn.call("beep","0");function Zn(t,e){var r;return null!=t&&(!(r=Hn.call(t,e))&&Un&&Rn(t)?!Mn(e=+e)&&at(e)&&e>=0&&e<t.length:r)}var Dn=Array.isArray?Array.isArray:function(t){return"[object Array]"===K(t)};var zn=Bn?Fn:function(t){return null!==t&&"object"==typeof t&&!Dn(t)&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=4294967295&&z(t,"callee")&&!Zn(t,"callee")},qn=Array.prototype.slice;function Jn(t){return null!==t&&"object"==typeof t}X(Jn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Dn(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Jn));var Kn=Zn((function(){}),"prototype"),Qn=!Zn({toString:null},"toString");function to(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=9007199254740991}function eo(t,e,r){var n,o;if(!to(t)&&!Ln(t))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!at(r))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if($n(e)){for(;o<n;o++)if($n(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var ro=/./;function no(t){return"boolean"==typeof t}var oo=Boolean,io=Boolean.prototype.toString;var uo=U();function ao(t){return"object"==typeof t&&(t instanceof oo||(uo?function(t){try{return io.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===K(t)))}function co(t){return no(t)||ao(t)}function lo(){return new Function("return this;")()}X(co,"isPrimitive",no),X(co,"isObject",ao);var fo="object"==typeof self?self:null,po="object"==typeof window?window:null,so="object"==typeof Se?Se:null,yo="object"==typeof globalThis?globalThis:null;var go=function(t){if(arguments.length){if(!no(t))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return lo()}if(yo)return yo;if(fo)return fo;if(po)return po;if(so)return so;throw new Error("unexpected error. Unable to resolve global object.")}(),bo=go.document&&go.document.childNodes,vo=Int8Array;function ho(){return/^\s*function\s*([^(]*)/i}var mo=/^\s*function\s*([^(]*)/i;function wo(t){var e,r,n,o;if(("Object"===(r=K(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=mo.exec(n.toString()))return e[1]}return Jn(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}X(ho,"REGEXP",mo);var jo="function"==typeof ro||"object"==typeof vo||"function"==typeof bo?function(t){return wo(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?wo(t).toLowerCase():e};function _o(t){return t.constructor&&t.constructor.prototype===t}var Oo=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],So="undefined"==typeof window?void 0:window;var Eo=function(){var t;if("undefined"===jo(So))return!1;for(t in So)try{-1===eo(Oo,t)&&z(So,t)&&null!==So[t]&&"object"===jo(So[t])&&_o(So[t])}catch(t){return!0}return!1}(),xo="undefined"!=typeof window;var To=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Io=Nn?function(){return 2!==(Vn(arguments)||"").length}(1,2)?function(t){return zn(t)?Vn(qn.call(t)):Vn(t)}:Vn:function(t){var e,r,n,o,i,u,a;if(o=[],zn(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!z(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!Jn(t))return o;r=Kn&&n}for(i in t)r&&"prototype"===i||!z(t,i)||o.push(String(i));if(Qn)for(e=function(t){if(!1===xo&&!Eo)return _o(t);try{return _o(t)}catch(t){return!1}}(t),a=0;a<To.length;a++)u=To[a],e&&"constructor"===u||!z(t,u)||o.push(String(u));return o};X(Pn,"enum",kn),function(t,e){var r,n,o;for(r=Io(e),o=0;o<r.length;o++)An(t,n=r[o],e[n])}(Pn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Po={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function ko(t){var e=typeof t;return"string"===e?null===function(t){var e=Po[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=Tn[t];return"string"==typeof e?e:null}(t):null}function Ao(t,e,r){var n,o,i,u,a,c,l,f,p;if(!("object"==typeof(p=t)&&null!==p&&"number"==typeof p.length&&W(p.length)&&p.length>=0&&p.length<=4294967295))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(!ft(e))throw new TypeError(V("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(!ft(r))throw new TypeError(V("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",r));if(0===(n=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(n%(a=e+r)!=0)throw new RangeError("invalid arguments. Length of the first argument is incompatible with the second and third arguments.");for(o=[],i=[],c=2*a,f=2*e,l=0;l<=c;l++)0===l?l===f?i.push("() => ("):i.push("("):l===c?l===f?i.push(") => ()"):i.push(")"):l===f?i.push(") => ("):l%2==1?i.push(""):i.push(", ");for(l=0;l<n;l++)null===(u=ko(t[l]))&&(u=t[l]),i[2*(f=l%a)+1]=u,f===a-1&&o.push(i.join(""));return o}function Vo(t,e,r,n){return X(r,"nargs",n?t.nargs+t.nin+t.nout:t.nargs),X(r,"nin",t.nin),X(r,"nout",t.nout),function(t,e,r){R(t,e,{configurable:!1,enumerable:!1,get:r})}(r,"types",(function(){return Ao(e,t.nin,t.nout)})),r}export{Vo as default};
//# sourceMappingURL=mod.js.map
