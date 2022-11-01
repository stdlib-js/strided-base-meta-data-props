// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,c=r.__lookupGetter__,l=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var f,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,n)||l.call(t,n)?(f=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=f):t[n]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,n,e.get),s&&u&&u.call(t,n,e.set),t};var f=n;function a(t,n,e){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=Math.floor;function s(t){return p(t)===t}function y(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function d(t,n){return null!=t&&m.call(t,n)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var w=g()?function(t){var n,e,r;if(null==t)return v.call(t);e=t[h],n=d(t,h);try{t[h]=void 0}catch(n){return v.call(t)}return r=v.call(t),n?t[h]=e:delete t[h],r}:function(t){return v.call(t)},j=Number,O=j.prototype.toString;var _=g();function S(t){return"object"==typeof t&&(t instanceof j||(_?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function E(t){return y(t)||S(t)}a(E,"isPrimitive",y),a(E,"isObject",S);var x=Number.POSITIVE_INFINITY,T=j.NEGATIVE_INFINITY;function P(t){return t<x&&t>T&&s(t)}function I(t){return y(t)&&P(t)}function V(t){return S(t)&&P(t.valueOf())}function A(t){return I(t)||V(t)}function k(t){return I(t)&&t>=0}function F(t){return V(t)&&t.valueOf()>=0}function N(t){return k(t)||F(t)}function B(t){return Object.keys(Object(t))}a(A,"isPrimitive",I),a(A,"isObject",V),a(N,"isPrimitive",k),a(N,"isObject",F);var L=void 0!==Object.keys;function G(t){return"[object Arguments]"===w(t)}var Y=function(){return G(arguments)}();function C(t){return"string"==typeof t}var M=String.prototype.valueOf;var R=g();function X(t){return"object"==typeof t&&(t instanceof String||(R?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object String]"===w(t)))}function H(t){return C(t)||X(t)}function W(t){return t!=t}function D(t){return y(t)&&W(t)}function U(t){return S(t)&&W(t.valueOf())}function q(t){return D(t)||U(t)}a(H,"isPrimitive",C),a(H,"isObject",X),a(q,"isPrimitive",D),a(q,"isObject",U);var z=Object.prototype.propertyIsEnumerable;var J=!z.call("beep","0");function K(t,n){var e;return null!=t&&(!(e=z.call(t,n))&&J&&H(t)?!D(n=+n)&&I(n)&&n>=0&&n<t.length:e)}var Q=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};var Z=Y?G:function(t){return null!==t&&"object"==typeof t&&!Q(t)&&"number"==typeof t.length&&s(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!K(t,"callee")},$=Array.prototype.slice;function tt(t){return null!==t&&"object"==typeof t}a(tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!Q(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(tt));var nt=K((function(){}),"prototype"),et=!K({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&s(t.length)&&t.length>=0&&t.length<=9007199254740991}function ot(t,n,e){var r,o;if(!rt(t)&&!C(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!I(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(q(n)){for(;o<r;o++)if(q(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var it=/./;function ut(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var lt=g();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function at(t){return ut(t)||ft(t)}function pt(){return new Function("return this;")()}a(at,"isPrimitive",ut),a(at,"isObject",ft);var st="object"==typeof self?self:null,yt="object"==typeof window?window:null,bt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},gt="object"==typeof bt?bt:null;var vt=function(t){if(arguments.length){if(!ut(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(st)return st;if(yt)return yt;if(gt)return gt;throw new Error("unexpected error. Unable to resolve global object.")}(),mt=vt.document&&vt.document.childNodes,dt=Int8Array;function ht(){return/^\s*function\s*([^(]*)/i}var wt=/^\s*function\s*([^(]*)/i;function jt(t){var n,e,r,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=wt.exec(r.toString()))return n[1]}return tt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(ht,"REGEXP",wt);var Ot="function"==typeof it||"object"==typeof dt||"function"==typeof mt?function(t){return jt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?jt(t).toLowerCase():n};function _t(t){return t.constructor&&t.constructor.prototype===t}var St=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Et="undefined"==typeof window?void 0:window;var xt=function(){var t;if("undefined"===Ot(Et))return!1;for(t in Et)try{-1===ot(St,t)&&d(Et,t)&&null!==Et[t]&&"object"===Ot(Et[t])&&_t(Et[t])}catch(t){return!0}return!1}(),Tt="undefined"!=typeof window;var Pt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var It=L?function(){return 2!==(B(arguments)||"").length}(1,2)?function(t){return Z(t)?B($.call(t)):B(t)}:B:function(t){var n,e,r,o,i,u,c;if(o=[],Z(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!tt(t))return o;e=nt&&r}for(i in t)e&&"prototype"===i||!d(t,i)||o.push(String(i));if(et)for(n=function(t){if(!1===Tt&&!xt)return _t(t);try{return _t(t)}catch(t){return!1}}(t),c=0;c<Pt.length;c++)u=Pt[c],n&&"constructor"===u||!d(t,u)||o.push(String(u));return o};function Vt(t){return"function"===Ot(t)}var At,kt=Object.getPrototypeOf;At=Vt(Object.getPrototypeOf)?kt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===w(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ft=At;var Nt=Object.prototype;function Bt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Q(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Ft(t))}(t),!n||!d(t,"constructor")&&d(n,"constructor")&&Vt(n.constructor)&&"[object Function]"===w(n.constructor)&&d(n,"isPrototypeOf")&&Vt(n.isPrototypeOf)&&(n===Nt||function(t){var n;for(n in t)if(!d(t,n))return!1;return!0}(t)))}var Lt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Gt(){return Lt.slice()}var Yt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ct(){return Yt.slice()}function Mt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Rt(t,n,e){f(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}a(Ct,"enum",Mt),function(t,n){var e,r,o;for(e=It(n),o=0;o<e.length;o++)Rt(t,r=e[o],n[r])}(Ct,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Xt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ht(){return{bool:Xt.bool,int8:Xt.int8,uint8:Xt.uint8,uint8c:Xt.uint8c,int16:Xt.int16,uint16:Xt.uint16,int32:Xt.int32,uint32:Xt.uint32,int64:Xt.int64,uint64:Xt.uint64,float32:Xt.float32,float64:Xt.float64,complex64:Xt.complex64,complex128:Xt.complex128,binary:Xt.binary,generic:Xt.generic,notype:Xt.notype,userdefined_type:Xt.userdefined_type}}a(Gt,"enum",Ht),function(t,n){var e,r,o;for(e=It(n),o=0;o<e.length;o++)Rt(t,r=e[o],n[r])}(Gt,Ht());var Wt=function(t,n){var e,r,o,i,u,c,l,f=!0;if(!tt(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Bt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(d(n,"duplicates")&&!ut(f=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(r=(e=It(t)).length,u={},f)for(l=0;l<r;l++)d(u,i=t[o=e[l]])?(c=u[i],Q(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(l=0;l<r;l++)u[t[o=e[l]]]=o;return u}(Ht(),{duplicates:!1});var Dt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ut(t){var n=typeof t;return"string"===n?null===function(t){var n=Dt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Wt[t];return"string"==typeof n?n:null}(t):null}function qt(t,n,e){var r,o,i,u,c,l,f,a,p;if(!("object"==typeof(p=t)&&null!==p&&"number"==typeof p.length&&s(p.length)&&p.length>=0&&p.length<=4294967295))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(!k(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!k(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(c=n+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(o=[],i=[],l=2*c,a=2*n,f=0;f<=l;f++)0===f?f===a?i.push("() => ("):i.push("("):f===l?f===a?i.push(") => ()"):i.push(")"):f===a?i.push(") => ("):f%2==1?i.push(""):i.push(", ");for(f=0;f<r;f++)null===(u=Ut(t[f]))&&(u=t[f]),i[2*(a=f%c)+1]=u,a===c-1&&o.push(i.join(""));return o}function zt(t,n,e,r){return a(e,"nargs",r?t.nargs+t.nin+t.nout:t.nargs),a(e,"nin",t.nin),a(e,"nout",t.nout),function(t,n,e){f(t,n,{configurable:!1,enumerable:!1,get:e})}(e,"types",(function(){return qt(n,t.nin,t.nout)})),e}export{zt as default};
//# sourceMappingURL=mod.js.map
