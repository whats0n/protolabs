!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="js/",n(n.s=0)}([function(e,t,n){"use strict";(0,function(e){return e&&e.__esModule?e:{default:e}}(n(1)).default)(),document.addEventListener("DOMContentLoaded",function(){"ontouchstart"in window||document.querySelector("body").classList.add("no-touch")})},function(e,t,n){var r;!function(n,o){void 0===(r=function(){return n.svg4everybody=function(){
/*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
function e(e,t,n){if(n){var r=document.createDocumentFragment(),o=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");o&&t.setAttribute("viewBox",o);for(var i=n.cloneNode(!0);i.childNodes.length;)r.appendChild(i.firstChild);e.appendChild(r)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var n=t._cachedDocument;n||((n=t._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map(function(r){var o=t._cachedTarget[r.id];o||(o=t._cachedTarget[r.id]=n.getElementById(r.id)),e(r.parent,r.svg,o)})}},t.onreadystatechange()}function n(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return function(r){var o,i=Object(r),a=window.top!==window.self;o="polyfill"in i?i.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&a;var u={},d=window.requestAnimationFrame||setTimeout,c=document.getElementsByTagName("use"),l=0;o&&function r(){for(var a=0;a<c.length;){var s=c[a],f=s.parentNode,p=n(f),b=s.getAttribute("xlink:href")||s.getAttribute("href");if(!b&&i.attributeName&&(b=s.getAttribute(i.attributeName)),p&&b){if(o)if(!i.validate||i.validate(b,p,s)){f.removeChild(s);var g=b.split("#"),v=g.shift(),m=g.join("#");if(v.length){var h=u[v];h||((h=u[v]=new XMLHttpRequest).open("GET",v),h.send(),h._embeds=[]),h._embeds.push({parent:f,svg:p,id:m}),t(h)}else e(f,p,document.getElementById(m))}else++a,++l}else++a}(!c.length||c.length-l>0)&&d(r,67)}()}}()}.apply(t,[]))||(e.exports=r)}(this)}]);
//# sourceMappingURL=app.js.map