(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],f=0,d=[];f<u.length;f++)o=u[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({basicLayout:"basicLayout",breadcrumb:"breadcrumb",page:"page"}[e]||e)+"."+{basicLayout:"e75d858c",breadcrumb:"09a74fb2",page:"d0084ad4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={basicLayout:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({basicLayout:"basicLayout",breadcrumb:"breadcrumb",page:"page"}[e]||e)+"."+{basicLayout:"06795082",breadcrumb:"31d6cfe0",page:"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e),s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=f;c.push(["56d7","chunk-vendors"]),n()})({1625:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],a={},c=a,u=n("a6c2"),i=Object(u["a"])(c,r,o,!1,null,null,null),s=i.exports,f="skeleton",d="homeview",p="example",l="page",b="breadcrumb",m="三级菜单",h="test",g="隐藏菜单",v={name:p,path:"example",component:s,redirect:"/example/page",icon:"desktop",children:[{name:l,path:"page",icon:"cloud",component:function(){return n.e("page").then(n.bind(null,"fe94"))}},{name:b,path:"breadcrumb",icon:"smile",component:function(){return n.e("breadcrumb").then(n.bind(null,"c8f6"))}},{name:g,path:"hidePage",component:function(){return n.e("breadcrumb").then(n.bind(null,"c8f6"))},meta:{hiddenMenu:!0}},{name:m,path:"thirdLevelMenu",component:s,icon:"folder-open",children:[{name:h,path:"test",icon:"tag",component:function(){return n.e("breadcrumb").then(n.bind(null,"1e5e"))}}]}]};n.d(t,"a",function(){return y});var y=[{path:"/",name:f,redirect:"/homeview",component:function(){return n.e("basicLayout").then(n.bind(null,"6707"))},meta:{hiddenMenu:!0},children:[{path:"homeview",name:d,icon:"fund",component:function(){return n.e("basicLayout").then(n.bind(null,"7abe"))}},v,{path:"404",name:"404NotFound",icon:"mobile-phone",meta:{hiddenMenu:!0,pass:!0},component:function(){return n.e("basicLayout").then(n.bind(null,"1f89"))}}]}]},"56d7":function(e,t,n){"use strict";n.r(t);n("2bf3"),n("0dbc"),n("e612"),n("8cf6");var r=n("e832"),o=(n("fb98"),n("f686"),n("799d")),a=(n("9c0d"),n("a3a6")),c=(n("49e7"),n("cfb0")),u=(n("ba5c"),n("1240")),i=(n("5fdb"),n("e6fd")),s=function(){r["a"].use(i["a"]),r["a"].use(u["a"]),r["a"].use(c["a"]),r["a"].use(a["a"]),r["a"].prototype.$notify=o["a"]},f=n("d74d"),d=n("4af9"),p=n("1625"),l=n("64b0"),b=n.n(l),m=new d["a"]({mode:"hash",routes:p["a"]});r["a"].use(d["a"]),m.beforeEach(function(e,t,n){b.a.start();var r=e.meta,o=e.matched;r&&r.hiddenMenu&&!r.pass||!o.length?n({path:"/404"}):n()}),m.afterEach(function(){setTimeout(function(){b.a.done()},1e3)});var h,g,v,y,O=m,j=(n("d93a"),n("5b54"),n("ef92"),n("6b3c")),w=n("94ea"),E=n("62b0"),L=n("5a50"),_={collapsed:!1,collapseConfig:{position:"header",icon:"",style:{}}},S=(h={},Object(j["a"])(h,L["c"],function(e,t){e.collapsed=t}),Object(j["a"])(h,L["e"],function(e,t){e.collapseConfig=t}),h),P=(g={},Object(j["a"])(g,L["d"],function(e,t){e.commit(L["c"],t)}),Object(j["a"])(g,L["f"],function(e,t){e.commit(L["e"],t)}),g),C={state:_,mutations:S,actions:P},T=(n("d946"),n("d2d3")),M={crumbs:[]},k={getCrumbs:function(e){return e.crumbs}},N=(v={},Object(j["a"])(v,L["g"],function(e,t){e.crumbs=[].concat(Object(T["a"])(e.crumbs),[t])}),Object(j["a"])(v,L["a"],function(e,t){var n=t.path,r=e.crumbs.findIndex(function(e){return e.path===n});e.crumbs.splice(r,1);var o=e.crumbs.length,a=!!o&&e.crumbs[o-1];O.push({path:a?a.path:"/"})}),v),x=function(e){var t=M.crumbs;return t.some(function(t){return t.path===e})},A=(y={},Object(j["a"])(y,L["h"],function(e,t){var n=t.path,r=t.meta;r&&Object.keys(r).length&&r.hiddenMenu||!x(n)&&e.commit(L["g"],t)}),Object(j["a"])(y,L["b"],function(e,t){e.commit(L["a"],t)}),y),D={namespaced:!0,state:M,mutations:N,getters:k,actions:A};function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach(function(t){Object(j["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}r["a"].use(w["a"]);var R=B({strict:!1},C,{modules:{breadcrumb:D}}),U=new w["a"].Store(R);Object(E["sync"])(U,O);var I=U;s(),r["a"].config.productionTip=!1,f["b"].registerHooks(["beforeRouteEnter","beforeRouteLeave","beforeRouteUpdate"]),new r["a"]({router:O,store:I,render:function(e){return e("div",{attrs:{id:"app"}},[e("router-view")])}}).$mount("#app")},"5a50":function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"h",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return f});var r="SET_COLLAPSED",o="SET_COLLAPSED_FN",a="SET_COLLAPSE_CONFIG",c="SET_COLLAPSE_CONFIG_FN",u="SET_CRUMBS",i="SET_CRUMBS_FN",s="DEL_CRUMB",f="DEL_CRUMB_FN"},fb98:function(e,t,n){}});
//# sourceMappingURL=app.227efe62.js.map