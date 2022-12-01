// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).inheritedNonEnumerablePropertyNames=r()}(this,(function(){"use strict";var t=9007199254740991,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&g.call(t,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[h],r=d(t,h);try{t[h]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[h]=e:delete t[h],n}:function(t){return v.call(t)},j=Number,O=j.prototype.toString;var w=b();function _(t){return"object"==typeof t&&(t instanceof j||(w?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function S(t){return s(t)||_(t)}p(S,"isPrimitive",s),p(S,"isObject",_);var P=Number.POSITIVE_INFINITY,E=j.NEGATIVE_INFINITY,I=Math.floor;function T(t){return I(t)===t}function A(t){return t<P&&t>E&&T(t)}function N(t){return s(t)&&A(t)}function k(t){return _(t)&&A(t.valueOf())}function x(t){return N(t)||k(t)}function B(t){return N(t)&&t>0}function V(t){return k(t)&&t.valueOf()>0}function F(t){return B(t)||V(t)}function L(t){return"string"==typeof t}p(x,"isPrimitive",N),p(x,"isObject",k),p(F,"isPrimitive",B),p(F,"isObject",V);var C=String.prototype.valueOf;var G=b();function Y(t){return"object"==typeof t&&(t instanceof String||(G?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object String]"===m(t)))}function M(t){return L(t)||Y(t)}function X(t){return t!=t}function H(t){return s(t)&&X(t)}function R(t){return _(t)&&X(t.valueOf())}function U(t){return H(t)||R(t)}p(M,"isPrimitive",L),p(M,"isObject",Y),p(U,"isPrimitive",H),p(U,"isObject",R);var W=Object.prototype.propertyIsEnumerable;var D=!W.call("beep","0");function q(t,r){var e;return null!=t&&(!(e=W.call(t,r))&&D&&M(t)?!H(r=+r)&&N(r)&&r>=0&&r<t.length:e)}function z(t,r){return!1!==d(t,r)&&!1===q(t,r)}var J=void 0!==Object.getOwnPropertyNames,K=Object.getOwnPropertyNames;function Q(t){return Object.keys(Object(t))}var Z,$=void 0!==Object.keys;function tt(t){return"[object Arguments]"===m(t)}Z=function(){return tt(arguments)}();var rt,et=Z;rt=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};var nt,ot=rt;nt=et?tt:function(t){return null!==t&&"object"==typeof t&&!ot(t)&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!q(t,"callee")};var ut=nt,it=Array.prototype.slice;function ct(t){return null!==t&&"object"==typeof t}var ft=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!ot(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(ct);p(ct,"isObjectLikeArray",ft);var lt=q((function(){}),"prototype"),at=!q({toString:null},"toString");function pt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=9007199254740991}function st(t,r,e){var n,o;if(!pt(t)&&!L(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!N(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(U(r)){for(;o<n;o++)if(U(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var yt=/./;function bt(t){return"boolean"==typeof t}var vt=Boolean.prototype.toString;var gt=b();function dt(t){return"object"==typeof t&&(t instanceof Boolean||(gt?function(t){try{return vt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function ht(t){return bt(t)||dt(t)}function mt(){return new Function("return this;")()}p(ht,"isPrimitive",bt),p(ht,"isObject",dt);var jt="object"==typeof self?self:null,Ot="object"==typeof window?window:null,wt="object"==typeof global?global:null;var _t=function(t){if(arguments.length){if(!bt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return mt()}if(jt)return jt;if(Ot)return Ot;if(wt)return wt;throw new Error("unexpected error. Unable to resolve global object.")}(),St=_t.document&&_t.document.childNodes,Pt=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;function Tt(t){var r,e,n,o;if(("Object"===(e=m(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=It.exec(n.toString()))return r[1]}return ct(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(Et,"REGEXP",It);var At="function"==typeof yt||"object"==typeof Pt||"function"==typeof St?function(t){return Tt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Tt(t).toLowerCase():r};function Nt(t){return t.constructor&&t.constructor.prototype===t}var kt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xt="undefined"==typeof window?void 0:window;var Bt=function(){var t;if("undefined"===At(xt))return!1;for(t in xt)try{-1===st(kt,t)&&d(xt,t)&&null!==xt[t]&&"object"===At(xt[t])&&Nt(xt[t])}catch(t){return!0}return!1}(),Vt="undefined"!=typeof window;var Ft,Lt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ft=$?function(){return 2!==(Q(arguments)||"").length}(1,2)?function(t){return ut(t)?Q(it.call(t)):Q(t)}:Q:function(t){var r,e,n,o,u,i,c;if(o=[],ut(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!ct(t))return o;e=lt&&n}for(u in t)e&&"prototype"===u||!d(t,u)||o.push(String(u));if(at)for(r=function(t){if(!1===Vt&&!Bt)return Nt(t);try{return Nt(t)}catch(t){return!1}}(t),c=0;c<Lt.length;c++)i=Lt[c],r&&"constructor"===i||!d(t,i)||o.push(String(i));return o};var Ct,Gt=Ft;Ct=J?function(t){return K(Object(t))}:function(t){return Gt(Object(t))};var Yt=Ct;var Mt,Xt,Ht=Object.getPrototypeOf;Xt=Object.getPrototypeOf,Mt="function"===At(Xt)?Ht:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Rt=Mt;function Ut(t){return null==t?null:(t=Object(t),Rt(t))}function Wt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(r,e){var n,o,u,i,c,f,l,a;if(arguments.length>1){if(!B(e))throw new TypeError(Wt("0kA4I",e));c=e}else c=t;if(null==r)return[];for(u=Ut(r),n=[],o={},f=1;u&&f<=c;){for(i=Yt(u),a=0;a<i.length;a++)!1===d(o,l=i[a])&&z(u,l)&&n.push(l),o[l]=!0;u=Ut(u),f+=1}return n}}));
//# sourceMappingURL=index.js.map
