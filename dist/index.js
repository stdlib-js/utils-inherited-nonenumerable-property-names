"use strict";var g=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var f=g(function(b,p){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,P=require('@stdlib/assert-is-nonenumerable-property/dist'),c=require('@stdlib/utils-property-names/dist'),m=require('@stdlib/utils-get-prototype-of/dist'),E=require('@stdlib/assert-has-own-property/dist'),N=require('@stdlib/error-tools-fmtprodmsg/dist');function l(i,r){var n,s,e,u,o,v,t,a;if(arguments.length>1){if(!q(r))throw new TypeError(N('1Ud45',r));o=r}else o=h;if(i==null)return[];for(e=m(i),n=[],s={},v=1;e&&v<=o;){for(u=c(e),a=0;a<u.length;a++)t=u[a],E(s,t)===!1&&P(e,t)&&n.push(t),s[t]=!0;e=m(e),v+=1}return n}p.exports=l
});var w=f();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
