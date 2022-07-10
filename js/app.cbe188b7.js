(function(){"use strict";var e={8137:function(e,n,t){var o=t(9242),r=t(3396),i=t(7139);function a(e,n,t,o,a,l){const u=(0,r.up)("Header"),s=(0,r.up)("SideBar"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u,{mobileView:o.mobileView},null,8,["mobileView"]),o.mobileView?((0,r.wg)(),(0,r.j4)(s,{key:0})):(0,r.kq)("",!0),(0,r._)("main",{style:(0,i.j5)({"margin-right":o.sidebarWidth})},[(0,r.Wm)(c)],4)],64)}var l=t.p+"img/icon-close.f5ec4485.svg";const u=e=>((0,r.dD)("data-v-2c70b656"),e=e(),(0,r.Cn)(),e),s={class:"collapse-icon"},c={class:"links"},d=u((()=>(0,r._)("b",null,"00",-1))),f=u((()=>(0,r._)("span",null,"HOME",-1))),p=u((()=>(0,r._)("b",null,"01",-1))),v=(0,r.Uk)("DESTINATION"),g=u((()=>(0,r._)("b",null,"02",-1))),m=(0,r.Uk)("CREW"),b=u((()=>(0,r._)("b",null,"03",-1))),h=(0,r.Uk)("TECHNOLOGY");function w(e,n,t,o,a,u){const w=(0,r.up)("SidebarLink");return(0,r.wg)(),(0,r.iD)("div",{class:"sidebar",style:(0,i.j5)({width:o.sidebarWidth})},[(0,r._)("span",s,[(0,r._)("img",{src:l,alt:"logo",onClick:n[0]||(n[0]=(...e)=>o.toggleSidebar&&o.toggleSidebar(...e)),style:{cursor:"pointer"}})]),(0,r._)("div",c,[(0,r.Wm)(w,{to:"/"},{default:(0,r.w5)((()=>[d,f])),_:1}),(0,r.Wm)(w,{to:"/destination"},{default:(0,r.w5)((()=>[p,v])),_:1}),(0,r.Wm)(w,{to:"/crew"},{default:(0,r.w5)((()=>[g,m])),_:1}),(0,r.Wm)(w,{to:"/technology"},{default:(0,r.w5)((()=>[b,h])),_:1})])],4)}var _=t(4870);const y=(0,_.iH)(!0),k=()=>y.value=!y.value,O=250,S=0,C=(0,r.Fl)((()=>`${y.value?S:O}px`)),E={key:0,class:"info"};function W(e,n,t,o,a,l){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(u,{to:t.to,class:(0,i.C_)(["link",{active:o.isActive}]),onClick:o.toggleSidebar},{default:(0,r.w5)((()=>[o.collapsed?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",E,[(0,r.WI)(e.$slots,"default")]))])),_:3},8,["to","class","onClick"])}var T=t(678),j={props:{to:{type:String,required:!0}},setup(e){const n=(0,T.yj)(),t=(0,r.Fl)((()=>n.path===e.to));return{isActive:t,collapsed:y,toggleSidebar:k}}},A=t(89);const N=(0,A.Z)(j,[["render",W]]);var D=N,L={name:"Sidebar",components:{SidebarLink:D},setup(){return{collapsed:y,toggleSidebar:k,sidebarWidth:C}}};const H=(0,A.Z)(L,[["render",w],["__scopeId","data-v-2c70b656"]]);var x=H,U=t.p+"img/logo.bc447a32.svg",I=t.p+"img/icon-hamburger.04a0cf6b.svg";const P=e=>((0,r.dD)("data-v-365308ea"),e=e(),(0,r.Cn)(),e),V={class:"header"},q=P((()=>(0,r._)("div",{class:"logo"},[(0,r._)("img",{src:U,alt:"logo"})],-1))),B=P((()=>(0,r._)("span",{class:"line"},null,-1))),F=P((()=>(0,r._)("img",{src:I,alt:"menu"},null,-1))),Z=[F];function M(e,n,t,o,i,a){const l=(0,r.up)("Navigation");return(0,r.wg)(),(0,r.iD)("div",V,[q,B,o.collapsed&&t.mobileView?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"nav-btn",onClick:n[0]||(n[0]=(...e)=>o.toggleSidebar&&o.toggleSidebar(...e))},Z)):(0,r.kq)("",!0),t.mobileView?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(l,{key:1}))])}const R=(0,r._)("span",{class:"num"},"00",-1),Y=(0,r.Uk)(),G=(0,r._)("span",null,"HOME",-1),$=(0,r._)("span",{class:"num"},"01",-1),z=(0,r.Uk)(),K=(0,r._)("span",null,"DESTINATION",-1),X=(0,r._)("span",{class:"num"},"02",-1),J=(0,r.Uk)(),Q=(0,r._)("span",null,"CREW",-1),ee=(0,r._)("span",{class:"num"},"03",-1),ne=(0,r.Uk)(),te=(0,r._)("span",null,"TECHNOLOGY",-1);function oe(e,n,t,o,i,a){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",null,[(0,r.Wm)(l,{to:"/"},{default:(0,r.w5)((()=>[R,Y,G])),_:1}),(0,r.Wm)(l,{to:"/destination"},{default:(0,r.w5)((()=>[$,z,K])),_:1}),(0,r.Wm)(l,{to:"/crew"},{default:(0,r.w5)((()=>[X,J,Q])),_:1}),(0,r.Wm)(l,{to:"/technology"},{default:(0,r.w5)((()=>[ee,ne,te])),_:1})])}var re={};const ie=(0,A.Z)(re,[["render",oe]]);var ae=ie,le={name:"Header",components:{Navigation:ae},props:{mobileView:Boolean},setup(){return{toggleSidebar:k,collapsed:y}}};const ue=(0,A.Z)(le,[["render",M],["__scopeId","data-v-365308ea"]]);var se=ue,ce={components:{Header:se,SideBar:x},setup(){let e=(0,_.iH)(!0);return(0,r.bv)((()=>{e.value=window.innerWidth<=768,window.addEventListener("resize",(()=>{e.value=window.innerWidth<=768}))})),{sidebarWidth:C,mobileView:e}}};const de=(0,A.Z)(ce,[["render",a]]);var fe=de;const pe=e=>((0,r.dD)("data-v-1f8459ea"),e=e(),(0,r.Cn)(),e),ve={class:"home"},ge={class:"content"},me=pe((()=>(0,r._)("div",{class:"text"},[(0,r._)("h5",{class:"subtitle"},"SO, YOU WANT TO TRAVEL TO"),(0,r._)("h1",{class:"title"},"SPACE"),(0,r._)("p",{class:"welcome-msg"}," Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! ")],-1))),be=(0,r.Uk)(" EXPLORE "),he=pe((()=>(0,r._)("div",{class:"circle"},null,-1)));function we(e,n){const t=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",ve,[(0,r._)("div",ge,[me,(0,r.Wm)(t,{to:"/destination/",class:"explore"},{default:(0,r.w5)((()=>[be,he])),_:1})])])}const _e={},ye=(0,A.Z)(_e,[["render",we],["__scopeId","data-v-1f8459ea"]]);var ke=ye;const Oe=[{path:"/",name:"home",component:ke},{path:"/destination",name:"destination",component:()=>t.e(666).then(t.bind(t,5666))},{path:"/crew",name:"crew",component:()=>t.e(917).then(t.bind(t,6917))},{path:"/technology",name:"technology",component:()=>t.e(112).then(t.bind(t,1463))}],Se=(0,T.p7)({history:(0,T.r5)(),routes:Oe});var Ce=Se;(0,o.ri)(fe).use(Ce).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{112:"5aceea40",666:"4951b104",917:"2debaee0"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{112:"39c63f17",666:"7bc95f10",917:"8941c1b4"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="space-vue:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var l,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+i),l.src=o),e[o]=[r];var f=function(n,t){l.onerror=l.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=l,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),l=t.p+a;if(n(a,l))return r();e(o,l,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={112:1,666:1,917:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),l=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],l=o[1],u=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(u)var c=u(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkspace_vue"]=self["webpackChunkspace_vue"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(8137)}));o=t.O(o)})();
//# sourceMappingURL=app.cbe188b7.js.map