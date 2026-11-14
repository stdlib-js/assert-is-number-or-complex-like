"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(q){throw (e=0, q)}};};var s=i(function(l,m){
var a=require('@stdlib/assert-is-number/dist').isPrimitive,b=require('@stdlib/assert-is-complex-like/dist');function p(r){return a(r)||b(r)}m.exports=p
});var t=i(function(d,o){
var x=require('@stdlib/assert-is-number/dist').isObject,O=require('@stdlib/assert-is-complex-like/dist');function k(r){return x(r)||O(r)}o.exports=k
});var n=i(function(y,c){
var C=s(),L=t();function N(r){return C(r)||L(r)}c.exports=N
});var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=n(),j=s(),P=t();v(u,"isPrimitive",j);v(u,"isObject",P);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
