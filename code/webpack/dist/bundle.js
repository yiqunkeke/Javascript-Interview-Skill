!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){let t=o(1),r=o(2),u=o(3),f=o(4);r.foo(),u(),f.foo(),console.log(t(f.arr))},function(e,n,o){"use strict";e.exports=function(e,n,o){return 0===e.length?e:n?(o||e.sort(n),function(e,n){for(var o=1,t=e.length,r=e[0],u=e[0],f=1;f<t;++f)if(u=r,n(r=e[f],u)){if(f===o){o++;continue}e[o++]=r}return e.length=o,e}(e,n)):(o||e.sort(),function(e){for(var n=1,o=e.length,t=e[0],r=e[0],u=1;u<o;++u,r=t)if(r=t,(t=e[u])!==r){if(u===n){n++;continue}e[n++]=t}return e.length=n,e}(e))}},function(e,n){e.exports={msg:"module1",foo(){console.log(this.msg)}}},function(e,n){e.exports=function(){console.log("module2")}},function(e,n){n.foo=function(){console.log("foo() module3")},n.arr=[1,2,3,3,2]}]);