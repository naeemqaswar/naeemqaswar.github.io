(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),i=c.n(s),o=(c(14),c(5)),r=c(7),l=c(2),d=a.a.createContext({popupContent:void 0,setPopupContent:function(){},portfolio:void 0,setPortfolio:function(){},selectedFilter:void 0,setSelectedFilter:function(){}}),j=c(4),b=c(8),u=c(0);function f(e){var t=e.details,c=Object(n.useContext)(d),a=c.setPopupContent,s=c.selectedFilter,i=t.title,o=t.platform,r=t.filter,l=t.images,j=t.coverFocus,f=void 0===j?"top":j,m=l[0],h=Object(b.isArray)(r)?r.join(" "):r,O=!s||"*"==s||("string"===typeof r?r==s:r.includes(s));console.log("_isSelected",O);return Object(u.jsx)("div",{className:"item ".concat(h," col-sm-12 col-md-12 col-lg-6 mb-6"),children:Object(u.jsx)("a",{href:"javascript:void(0);",className:"item-wrap img-fluid",onClick:function(){return a(t)},style:{backgroundImage:"url(".concat(m,")"),backgroundPositionX:f},children:Object(u.jsxs)("div",{className:"work-info",children:[Object(u.jsx)("h3",{children:i}),Object(u.jsx)("span",{children:o})]})})})}var m=c(9);var h=function(e){var t=e.data,c=Object(n.useState)([]),a=Object(l.a)(c,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){i(t.slice(0,10))}),[t]),t?Object(u.jsx)("div",{id:"portfolio-grid","data-aos":"fade-up","data-aos-delay":"200",className:"row no-gutter portfolio-section",children:Object(u.jsx)(m.a,{className:"row no-gutter portfolio-section",dataLength:s.length,next:function(){i(s.concat(t.slice(s.length,s.length+10)))},hasMore:s.length<t.length,loader:Object(u.jsx)("h4",{children:"Loading..."}),style:{display:"flex"},scrollThreshold:.5,children:s.map((function(e,t){return Object(u.jsx)(f,{index:t,details:e},t)}))})}):Object(u.jsx)("div",{})};function O(e){var t=e.contact;return Object(u.jsxs)("div",{children:[Object(u.jsx)("footer",{className:"footer footer-section",role:"contentinfo",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"social text-md-center",children:t&&Object.keys(t).map((function(e,c){return Object(u.jsx)("a",{target:"_blank",href:t[e],children:Object(u.jsx)("span",{className:"bi bi-".concat(e.toLowerCase())})},c)}))})})}),Object(u.jsx)("a",{href:"#",className:"back-to-top d-flex align-items-center justify-content-center",children:Object(u.jsx)("i",{className:"bi bi-arrow-up-short"})})]})}function v(){var e=Object(n.useContext)(d),t=e.portfolio,c=(e.setPortfolio,e.selectedFilter),a=e.setSelectedFilter,s=Object(n.useState)(),i=Object(l.a)(s,2),o=i[0],r=i[1],b=Object(n.useState)(),f=Object(l.a)(b,2),m=f[0],v=f[1],p=Object(n.useState)([]),x=Object(l.a)(p,2),g=x[0],N=x[1],y=Object(n.useState)([]),k=Object(l.a)(y,2),C=k[0],S=k[1],w=Object(n.useState)([]),F=Object(l.a)(w,2),P=F[0],E=F[1];Object(n.useEffect)((function(){if(t){var e=t.info,c=t.contact,n=t.filters,a=t.projects.filter((function(e){var t=e.secure,c=e.live;return 1==L(t)&&(1==c||void 0==c)}));r(e),N(n),S(a),E(a),v(c)}}),[t]);var L=function(e){if(!e)return!0;var t=Object(j.getParameterByName)("secret");return!(!t||"fuck off"!=Object(j.base64Decode)(t))};return C?Object(u.jsxs)("div",{id:"main",className:"content-available",children:[Object(u.jsx)("section",{className:"section site-portfolio",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row mb-5 align-items-center header-section",children:[Object(u.jsxs)("div",{className:"col-md-12 col-lg-6 mb-4 mb-lg-0 info-section","data-aos":"fade-up","data-aos-delay":"100",children:[Object(u.jsx)("h2",{children:null===o||void 0===o?void 0:o.title}),Object(u.jsx)("p",{className:"mb-0",children:null===o||void 0===o?void 0:o.headline})]}),Object(u.jsx)("div",{className:"col-md-12 col-lg-6 text-start text-lg-end filters-section","data-aos":"fade-up","data-aos-delay":"100",children:Object(u.jsx)("div",{id:"filters",className:"filters",children:g.map((function(e,t){var n=e.name,s=e.title;return Object(u.jsx)("a",{href:"javascript:void(0);","data-filter":"*"==n?n:".".concat(n),className:c||0!=t?c==n?"active":"":"active",onClick:function(){return function(e){if(e&&C&&0!=C.length){if(console.log("filter",e),"*"==e)E(C);else{var t=C.filter((function(t){return"string"===typeof t.filter?t.filter==e:t.filter.includes(e)}));E(t)}a(e)}}(n)},children:s},t)}))})})]}),Object(u.jsx)(h,{data:P})]})}),Object(u.jsx)(O,{contact:m})]}):Object(u.jsx)("div",{})}var p=Object.freeze({development:"development",live:"live"});function x(e){var t=e.display,c=void 0!==t&&t,n=e.details,a=e.hide;if(!c)return Object(u.jsx)("div",{});var s=n.title,i=n.platform,o=n.images,r=n.description,l=n.demo,d=n.stack,j=n.source,b=(n.filter,n.live,n.secure,n.status),f=void 0===b?p.live:b;return Object(u.jsx)("div",{style:{display:c?"block":"none"},className:"modal ".concat(c?"show":""),"aria-labelledby":"...","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog modal-fullscreen",children:Object(u.jsx)("div",{className:"modal-content project-details",children:Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsx)("div",{className:"top-action",children:Object(u.jsx)("button",{type:"button",className:"btn-close",onClick:a})}),Object(u.jsx)("section",{className:"section",children:Object(u.jsx)("div",{className:"site-section pb-0",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row align-items-stretch",children:[Object(u.jsx)("div",{className:"col-md-8 portfolio-container","data-aos":"fade-up",children:o.map((function(e,t){return Object(u.jsx)("img",{src:e,alt:s,className:"img-fluid"},t)}))}),Object(u.jsx)("div",{className:"col-md-4 ml-auto","data-aos":"fade-up","data-aos-delay":"100",children:Object(u.jsxs)("div",{className:"sticky-content",children:[Object(u.jsxs)("div",{className:"mb-4",children:[Object(u.jsx)("h2",{className:"h2 title",children:s}),Object(u.jsx)("span",{className:"text-muted platform",children:i}),"\xa0",f!==p.development?null:Object(u.jsx)("span",{className:"badge bg-".concat(p.live?"secondary":"success"),children:f==p.development?"Coming Soon":f})]}),Object(u.jsx)("div",{className:"mb-4",children:Object(u.jsx)("p",{children:r})}),Object(u.jsx)("h4",{className:"h4 mb-3 fw-bold",children:"Technology Stack"}),Object(u.jsx)("div",{className:"mb-5 project-stack",children:Object(u.jsx)("ul",{children:d.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)("i",{title:e[0].toUpperCase()+e.slice(1),className:"devicon-".concat(e,"-plain tech-icon colored")})},t)}))})}),Object(u.jsxs)("div",{children:[l?Object(u.jsx)("a",{href:l,className:"readmore",target:"_blank",children:"View Demo"}):null,j?Object(u.jsx)("a",{href:j,className:"readmore",target:"_blank",children:"Source Code"}):null]})]})})]})})})})]})})})})}var g=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(void 0),i=Object(l.a)(s,2),j=i[0],b=i[1],f=Object(n.useState)(void 0),m=Object(l.a)(f,2),h=m[0],O=m[1];Object(n.useEffect)((function(){})),Object(n.useEffect)((function(){fetch("https://api.npoint.io/1ffea4028e30ebccfbd6").then(function(){var e=Object(r.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,t.json();case 3:e.t1=e.sent,(0,e.t0)(e.t1),p();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){return p()}))}),[]);var p=function(){var e=document.querySelector(".loading-container");e&&e.remove()};return Object(u.jsxs)(d.Provider,{value:{popupContent:c,setPopupContent:a,portfolio:j,setPortfolio:b,selectedFilter:h,setSelectedFilter:O},children:[Object(u.jsx)(x,{display:"object"==typeof c,details:c,hide:function(){return a(void 0)}}),Object(u.jsx)(v,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),N()},4:function(e,t){e.exports={base64Decode:function(e){try{return e?atob(e):""}catch(t){return}},base64Encode:function(e){try{return e?btoa(e):""}catch(t){return}},getParameterByName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;if(e){e=e.replace(/[\[\]]/g,"\\$&");var c=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return c?c[2]?decodeURIComponent(c[2].replace(/\+/g," ")):"":null}}}}},[[19,1,2]]]);
//# sourceMappingURL=main.9e9ebf34.chunk.js.map