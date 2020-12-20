define(function(){"use strict";function a(){}function b(a){return a()}function c(){return Object.create(null)}function d(a){a.forEach(b)}function e(a){return"function"==typeof a}function f(a,b){return a!=a?b==b:a!==b||a&&"object"==typeof a||"function"==typeof a}function g(a,b){a.appendChild(b)}function h(a,b,c){a.insertBefore(b,c||null)}function i(a){a.parentNode.removeChild(a)}function j(a,b){for(var c=0;c<a.length;c+=1)a[c]&&a[c].d(b)}function k(a){return document.createElement(a)}function l(){return a=" ",document.createTextNode(a);var a}function m(a,b,c,d){return a.addEventListener(b,c,d),function(){return a.removeEventListener(b,c,d)}}function n(a){return function(b){return b.preventDefault(),a.call(this,b)}}function o(a){return function(b){return b.stopPropagation(),a.call(this,b)}}function p(a,b,c){null==c?a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}function q(a,b,c,d){a.style.setProperty(b,c,d?"important":"")}var r,s;function t(){if(void 0===r){r=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(a){r=!0}}return r}function u(a,b,c){a.classList[c?"add":"remove"](b)}function v(a){s=a}var w=[],x=[],y=[],z=[],$=Promise.resolve(),A=!1;function B(a){y.push(a)}var C=!1,D=new Set;function E(){if(!C){C=!0;do{for(var a=0;a<w.length;a+=1){var b=w[a];v(b),F(b.$$)}for(w.length=0;x.length;)x.pop()();for(var c=0;c<y.length;c+=1){var d=y[c];D.has(d)||(D.add(d),d())}y.length=0}while(w.length);for(;z.length;)z.pop()();A=!1,C=!1,D.clear()}}function F(a){if(null!==a.fragment){a.update(),d(a.before_update);var b=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,b),a.after_update.forEach(B)}}var G,H=new Set;function I(){G={r:0,c:[],p:G}}function J(){G.r||d(G.c),G=G.p}function K(a,b){a&&a.i&&(H.delete(a),a.i(b))}function L(a,b,c,d){if(a&&a.o){if(H.has(a))return;H.add(a),G.c.push(function(){H.delete(a),d&&(c&&a.d(1),d())}),a.o(b)}}function M(a){a&&a.c()}function N(a,c,f){var g=a.$$,h=g.fragment,i=g.on_mount,j=g.on_destroy,k=g.after_update;h&&h.m(c,f),B(function(){var c=i.map(b).filter(e);j?j.push.apply(j,c):d(c),a.$$.on_mount=[]}),k.forEach(B)}function O(a,b){var c=a.$$;null!==c.fragment&&(d(c.on_destroy),c.fragment&&c.fragment.d(b),c.on_destroy=c.fragment=null,c.ctx=[])}function P(a,b){-1===a.$$.dirty[0]&&(w.push(a),A||(A=!0,$.then(E)),a.$$.dirty.fill(0)),a.$$.dirty[b/31|0]|=1<<b%31}function Q(b,e,f,g,h,j,k){void 0===k&&(k=[-1]);var l=s;v(b);var m=e.props||{},n=b.$$={fragment:null,ctx:null,props:j,update:a,not_equal:h,bound:c(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:c(),dirty:k},o=!1;if(n.ctx=f?f(b,m,function(a,c){for(var d=[],e=arguments.length-2;e-- >0;)d[e]=arguments[e+2];var f=d.length?d[0]:c;return n.ctx&&h(n.ctx[a],n.ctx[a]=f)&&(n.bound[a]&&n.bound[a](f),o&&P(b,a)),c}):[],n.update(),o=!0,d(n.before_update),n.fragment=!!g&&g(n.ctx),e.target){if(e.hydrate){var p=function(a){return Array.from(a.childNodes)}(e.target);n.fragment&&n.fragment.l(p),p.forEach(i)}else n.fragment&&n.fragment.c();e.intro&&K(b.$$.fragment),N(b,e.target,e.anchor),E()}v(l)}var R,S,T,U=function(){};U.prototype.$destroy=function(){O(this,1),this.$destroy=a},U.prototype.$on=function(a,b){var c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);return c.push(b),function(){var a=c.indexOf(b);-1!==a&&c.splice(a,1)}},U.prototype.$set=function(){},function(a){a.top="top",a.right="right",a.bottom="bottom",a.left="left"}(R||(R={})),function(a){a.small="small",a.large="large"}(S||(S={})),function(a){a.mail="mail",a.selfMail="self-mail",a.cloud="cloud"}(T||(T={}));var V=[R.top,R.right,R.bottom,R.left],W=function(a,b){return V.reduce(function(c,d){return c[d]=function(a,b,c){var d=window.innerWidth>1024,e=b===R.top||b===R.bottom,f=!!a[b];return d?c?f?4:16:e?f?14:24:f?12:24:c?f?2:12:f?10:20}(a,d,b),c},{})},X=function(a,b){var c=W(a,b),d=Object.assign(Object.assign({},function(a){var b=a.top;void 0===b&&(b=0);var c=a.right;void 0===c&&(c=0);var d=a.bottom;void 0===d&&(d=0);var e=a.left;return void 0===e&&(e=0),{width:"calc(100% - "+(e+c)+"px)",height:"calc(100% - "+(b+d)+"px)"}}(c)),function(a){return V.reduce(function(b,c){return b[c]=a[c]+"px",b},{})}(c));return Object.entries(d).map(function(a){return a[0]+": "+a[1]+";"}).join(" ")},Y="https://img.imgsmail.ru/static.promo/cross.project.dnd/",Z={};Z[S.large]=300,Z[S.small]=200;var _=[{size:1.5,zones:[{size:1,text:"Перетащите файлы в эту область,<br>чтобы <mark>написать письмо</mark>",radarFunction:function(){return console.log("radarTop")},iconName:T.mail,iconSize:S.large,dropFunction:function(){return console.log("dropFunctionMail")},testId:"drop-zone-top"}]},{size:1,zones:[{size:1,text:"Отправить <mark>письмо себе</mark>",radarFunction:function(){return console.log("radarBottom")},iconName:T.selfMail,iconSize:S.small,dropFunction:function(){return console.log("dropFunctionSelfMail")},testId:"drop-zone-bottom-left"},{size:1,text:"Загрузить <mark>в Облако</mark>",radarFunction:function(){return console.log("radarBottomRight")},iconName:T.cloud,iconSize:S.small,dropFunction:function(){return console.log("dropFunctionCloud")},testId:"drop-zone-bottom-right"}]}];function aa(a){var b,c,d;return{c:function(){(b=k("img")).src!==(c=a[10])&&p(b,"src",c),p(b,"class",d="icon icon-"+a[2]+" svelte-pf7kzj"),p(b,"alt",""),u(b,"iconHover",a[6])},m:function(a,c){h(a,b,c)},p:function(a,e){1024&e&&b.src!==(c=a[10])&&p(b,"src",c),4&e&&d!==(d="icon icon-"+a[2]+" svelte-pf7kzj")&&p(b,"class",d),68&e&&u(b,"iconHover",a[6])},d:function(a){a&&i(b)}}}function ba(a){var b;return{c:function(){p(b=k("p"),"class","text svelte-pf7kzj"),u(b,"textHover",a[6])},m:function(c,d){h(c,b,d),b.innerHTML=a[0]},p:function(a,c){1&c&&(b.innerHTML=a[0]),64&c&&u(b,"textHover",a[6])},d:function(a){a&&i(b)}}}function ca(b){var c,f,j,r,s,v,w,x=b[9]&&b[10]&&aa(b),y=b[0]&&ba(b);return{c:function(){c=k("div"),f=k("div"),j=k("div"),x&&x.c(),r=l(),y&&y.c(),p(j,"class","content svelte-pf7kzj"),u(j,"contentHover",b[6]),p(f,"class","card svelte-pf7kzj"),p(f,"style",b[8]),u(f,"cardHover",b[6]),p(c,"data-qa-id",b[1]),p(c,"class","dragZone svelte-pf7kzj"),q(c,"flex-grow",b[3]),B(function(){return b[19].call(c)}),u(c,"dark",b[5])},m:function(a,d){h(a,c,d),g(c,f),g(f,j),x&&x.m(j,null),g(j,r),y&&y.m(j,null),s=function(a,b){var c=getComputedStyle(a),d=(parseInt(c.zIndex)||0)-1;"static"===c.position&&(a.style.position="relative");var e=k("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: "+d+";"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;var f,h=t();return h?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",f=m(window,"message",function(a){a.source===e.contentWindow&&b()})):(e.src="about:blank",e.onload=function(){f=m(e.contentWindow,"resize",b)}),g(a,e),function(){(h||f&&e.contentWindow)&&f(),i(e)}}(c,b[19].bind(c)),v||(w=[m(c,"drop",o(n(function(){e(b[4])&&b[4].apply(this,arguments)}))),m(c,"dragenter",o(n(b[11]))),m(c,"dragleave",o(n(b[12]))),m(c,"dragover",o(n(b[18])))],v=!0)},p:function(a,d){var e=d[0];(b=a)[9]&&b[10]?x?x.p(b,e):((x=aa(b)).c(),x.m(j,r)):x&&(x.d(1),x=null),b[0]?y?y.p(b,e):((y=ba(b)).c(),y.m(j,null)):y&&(y.d(1),y=null),64&e&&u(j,"contentHover",b[6]),256&e&&p(f,"style",b[8]),64&e&&u(f,"cardHover",b[6]),2&e&&p(c,"data-qa-id",b[1]),8&e&&q(c,"flex-grow",b[3]),32&e&&u(c,"dark",b[5])},i:a,o:a,d:function(a){a&&i(c),x&&x.d(),y&&y.d(),s(),v=!1,d(w)}}}function da(a,b,c){var d={};d[T.cloud]=Y+"cloud.svg",d[T.mail]=Y+"mail.svg",d[T.selfMail]=Y+"self-mail.svg";var e=b.text,f=b.neighbors;void 0===f&&(f={top:!1,right:!1,bottom:!1,left:!1});var g=b.testId,h=b.iconName,i=b.image,j=b.iconSize;void 0===j&&(j=S.large);var k=b.size,l=b.onZoneEnter,m=b.onZoneLeave,n=b.dropHandleEvent,o=b.darkMode;void 0===o&&(o=!1);var p,q,r,s=!1,t=0,u=function(a){a?l():m(),c(6,s=a)};return a.$set=function(a){"text"in a&&c(0,e=a.text),"neighbors"in a&&c(13,f=a.neighbors),"testId"in a&&c(1,g=a.testId),"iconName"in a&&c(14,h=a.iconName),"image"in a&&c(15,i=a.image),"iconSize"in a&&c(2,j=a.iconSize),"size"in a&&c(3,k=a.size),"onZoneEnter"in a&&c(16,l=a.onZoneEnter),"onZoneLeave"in a&&c(17,m=a.onZoneLeave),"dropHandleEvent"in a&&c(4,n=a.dropHandleEvent),"darkMode"in a&&c(5,o=a.darkMode)},a.$$.update=function(){8256&a.$$.dirty&&c(8,p=X(f,s)),132&a.$$.dirty&&c(9,q=t>=Z[j]),49152&a.$$.dirty&&c(10,r=h?d[h]:i)},[e,g,j,k,n,o,s,t,p,q,r,function(){return u(!0)},function(){return u(!1)},f,h,i,l,m,function(b){!function(a,b){var c=a.$$.callbacks[b.type];c&&c.slice().forEach(function(a){return a(b)})}(a,b)},function(){t=this.clientHeight,c(7,t)}]}var ea=function(a){function b(b){var c;a.call(this),document.getElementById("svelte-pf7kzj-style")||((c=k("style")).id="svelte-pf7kzj-style",c.textContent=".font-size1.svelte-pf7kzj.svelte-pf7kzj{font-size:11px;line-height:12px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-size2.svelte-pf7kzj.svelte-pf7kzj{font-size:13px;line-height:20px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-size3.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-size4.svelte-pf7kzj.svelte-pf7kzj{font-size:17px;line-height:24px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-size5.svelte-pf7kzj.svelte-pf7kzj{font-size:20px;line-height:28px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-size6.svelte-pf7kzj.svelte-pf7kzj,.text.svelte-pf7kzj.svelte-pf7kzj,.text.svelte-pf7kzj.svelte-pf7kzj mark{font-size:24px;line-height:32px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-size7.svelte-pf7kzj.svelte-pf7kzj{font-size:32px;line-height:40px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-size8.svelte-pf7kzj.svelte-pf7kzj{font-size:44px;line-height:52px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-h0.svelte-pf7kzj.svelte-pf7kzj{font-size:32px;line-height:40px;font-weight:700;font-family:Helvetica, Arial, sans-serif;margin-bottom:20px\n}@media(min-width: 768px){.font-h0.svelte-pf7kzj.svelte-pf7kzj{margin-bottom:24px\n}}.font-h1.svelte-pf7kzj.svelte-pf7kzj{font-size:24px;line-height:32px;font-weight:700;font-family:Helvetica, Arial, sans-serif;margin-bottom:16px\n}@media(min-width: 768px){.font-h1.svelte-pf7kzj.svelte-pf7kzj{font-weight:400;margin-bottom:20px\n}}.font-h2.svelte-pf7kzj.svelte-pf7kzj{font-size:20px;line-height:28px;font-weight:700;font-family:Helvetica, Arial, sans-serif;margin-bottom:12px\n}@media(min-width: 768px){.font-h2.svelte-pf7kzj.svelte-pf7kzj{font-weight:400;margin-bottom:16px\n}}.font-h3.svelte-pf7kzj.svelte-pf7kzj{font-size:17px;line-height:24px;font-weight:700;font-family:Helvetica, Arial, sans-serif;margin-bottom:12px\n}@media(min-width: 768px){.font-h3.svelte-pf7kzj.svelte-pf7kzj{font-weight:400\n}}.font-h4.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:700;font-family:Helvetica, Arial, sans-serif;margin-bottom:12px\n}@media(min-width: 768px){.font-h4.svelte-pf7kzj.svelte-pf7kzj{margin-bottom:8px\n}}.font-h5.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:700;font-family:Helvetica, Arial, sans-serif;margin-bottom:12px\n}@media(min-width: 768px){.font-h5.svelte-pf7kzj.svelte-pf7kzj{margin-bottom:8px\n}}.font-h6.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:700;font-family:Helvetica, Arial, sans-serif;margin-bottom:12px\n}@media(min-width: 768px){.font-h6.svelte-pf7kzj.svelte-pf7kzj{margin-bottom:8px\n}}.font-body.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-paragraph.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:400;font-family:Helvetica, Arial, sans-serif;margin-bottom:24px}.font-list.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-list-item.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-footnote.svelte-pf7kzj.svelte-pf7kzj{font-size:13px;line-height:20px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-lead.svelte-pf7kzj.svelte-pf7kzj{font-size:17px;line-height:24px;font-weight:400;font-family:Helvetica, Arial, sans-serif\n}@media(min-width: 768px){.font-lead.svelte-pf7kzj.svelte-pf7kzj{font-size:20px;line-height:28px\n}}.font-quote.svelte-pf7kzj.svelte-pf7kzj{font-size:17px;line-height:24px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-table-header.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:700;font-family:Helvetica, Arial, sans-serif}.font-control.svelte-pf7kzj.svelte-pf7kzj{font-size:15px;line-height:20px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.font-control-label.svelte-pf7kzj.svelte-pf7kzj{font-size:13px;line-height:20px;font-weight:700;font-family:Helvetica, Arial, sans-serif}.font-tab.svelte-pf7kzj.svelte-pf7kzj{font-size:13px;line-height:20px;font-weight:400;font-family:Helvetica, Arial, sans-serif\n}@media(min-width: 768px){.font-tab.svelte-pf7kzj.svelte-pf7kzj{font-size:15px\n}}.font-badge.svelte-pf7kzj.svelte-pf7kzj{font-size:11px;line-height:12px;font-weight:700;font-family:Helvetica, Arial, sans-serif;letter-spacing:1px;text-transform:uppercase}.font-disclaimer.svelte-pf7kzj.svelte-pf7kzj{font-size:11px;line-height:12px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.dragZone.svelte-pf7kzj.svelte-pf7kzj{display:flex;justify-content:center;flex-direction:column;align-items:center;flex-shrink:0;position:relative}.card.svelte-pf7kzj.svelte-pf7kzj{position:absolute;display:flex;justify-content:center;align-items:center;flex-direction:column;pointer-events:none;width:100%;height:100%;min-height:150px;background:rgba(235,236,239, 0.32);background:rgba(235,236,239, 0.32);background:rgba(235,236,239, 0.32);border-radius:12px;border-radius:12px;border-radius:12px;overflow:hidden;will-change:top, bottom, left, right, width, height;transition:top 0.2s, bottom 0.2s, left 0.2s, right 0.2s, width 0.2s, height 0.2s}.cardHover.svelte-pf7kzj.svelte-pf7kzj{background:rgba(235,236,239, 1);background:rgba(235,236,239, 1);background:rgba(235,236,239, 1)}.content.svelte-pf7kzj.svelte-pf7kzj{display:flex;justify-content:center;align-items:center;flex-direction:column;will-change:transform;transition:transform 0.2s}.contentHover.svelte-pf7kzj.svelte-pf7kzj{transform:scale(1.1)}.icon.svelte-pf7kzj.svelte-pf7kzj{display:flex;justify-content:center;align-items:center;-webkit-filter:grayscale(1);filter:grayscale(1);opacity:0.4}.iconHover.svelte-pf7kzj.svelte-pf7kzj{-webkit-filter:none;filter:none;opacity:1}.icon-large.svelte-pf7kzj.svelte-pf7kzj{width:112px;height:112px}.icon-small.svelte-pf7kzj.svelte-pf7kzj{width:72px;height:72px}.text.svelte-pf7kzj.svelte-pf7kzj{font-family:MailSans, Helvetica, Arial, sans-serif;font-family:MailSans, Helvetica, Arial, sans-serif;font-family:MailSans, Helvetica, Arial, sans-serif;color:#333333;color:#333333;color:#333333;text-align:center;will-change:transform;transition:transform 0.2s;transform:scale(0.83);margin-top:0.66em;margin-bottom:0}.text.svelte-pf7kzj.svelte-pf7kzj mark{font-family:MailSans, Helvetica, Arial, sans-serif;font-family:MailSans, Helvetica, Arial, sans-serif;font-family:MailSans, Helvetica, Arial, sans-serif;color:#333333;color:#333333;color:#333333;background-color:transparent !important}.textHover.svelte-pf7kzj.svelte-pf7kzj{transform:scale(0.9)}.textHover.svelte-pf7kzj.svelte-pf7kzj mark{color:#005ff9;color:#005ff9;color:#005ff9}@media screen and (max-width: 1024px){.text.svelte-pf7kzj.svelte-pf7kzj,.text.svelte-pf7kzj.svelte-pf7kzj mark{font-size:24px;line-height:32px;font-weight:400;font-family:Helvetica, Arial, sans-serif}.text.svelte-pf7kzj.svelte-pf7kzj{font-family:MailSans, Helvetica, Arial, sans-serif;font-family:MailSans, Helvetica, Arial, sans-serif;font-family:MailSans, Helvetica, Arial, sans-serif;margin-top:0.33em}.text.svelte-pf7kzj.svelte-pf7kzj mark{font-family:MailSans, Helvetica, Arial, sans-serif;font-family:MailSans, Helvetica, Arial, sans-serif;font-family:MailSans, Helvetica, Arial, sans-serif}.icon-small.svelte-pf7kzj.svelte-pf7kzj{width:48px;height:48px}.icon-large.svelte-pf7kzj.svelte-pf7kzj{width:96px;height:96px}}.dark.svelte-pf7kzj .card.svelte-pf7kzj{background:rgba(0, 0, 0, 0.32);background:rgba(0, 0, 0, 0.32);background:rgba(0, 0, 0, 0.32)}.dark.svelte-pf7kzj .cardHover.svelte-pf7kzj{background:rgba(0, 0, 0, 1);background:rgba(0, 0, 0, 1);background:rgba(0, 0, 0, 1)}.dark.svelte-pf7kzj .icon.svelte-pf7kzj{opacity:1}.dark.svelte-pf7kzj .text.svelte-pf7kzj{color:#ffffff;color:#ffffff;color:#ffffff}.dark.svelte-pf7kzj .text.svelte-pf7kzj mark{color:#ffffff;color:#ffffff;color:#ffffff}.dark.svelte-pf7kzj .textHover.svelte-pf7kzj mark{color:#005ff9;color:#005ff9;color:#005ff9}",g(document.head,c)),Q(this,b,da,ca,f,{text:0,neighbors:13,testId:1,iconName:14,image:15,iconSize:2,size:3,onZoneEnter:16,onZoneLeave:17,dropHandleEvent:4,darkMode:5})}return a&&(b.__proto__=a),b.prototype=Object.create(a&&a.prototype),b.prototype.constructor=b,b}(U);function fa(a,b,c){var d=a.slice();return d[19]=void 0!==b[c].size?b[c].size:1,d[20]=b[c].text,d[21]=b[c].dropFunction,d[22]=b[c].testId,d[23]=b[c].iconSize,d[24]=b[c].image,d[25]=b[c].iconName,d[26]=b[c].radarFunction,d[28]=c,d}function ga(a,b,c){var d=a.slice();return d[15]=void 0!==b[c].size?b[c].size:1,d[16]=b[c].zones,d[18]=c,d}function ha(a){for(var b,c,e,f,g=a[1],l=[],n=0;n<g.length;n+=1)l[n]=ja(ga(a,g,n));var o=function(a){return L(l[a],1,1,function(){l[a]=null})};return{c:function(){b=k("div");for(var c=0;c<l.length;c+=1)l[c].c();p(b,"class","dragOver svelte-uz4zpd"),p(b,"data-qa-id","drag-and-drop-component"),u(b,"dark",a[0])},m:function(d,g){h(d,b,g);for(var i=0;i<l.length;i+=1)l[i].m(b,null);c=!0,e||(f=[m(b,"dragleave",a[6]),m(b,"dragover",a[6])],e=!0)},p:function(a,c){if(411&c){var d;for(g=a[1],d=0;d<g.length;d+=1){var e=ga(a,g,d);l[d]?(l[d].p(e,c),K(l[d],1)):(l[d]=ja(e),l[d].c(),K(l[d],1),l[d].m(b,null))}for(I(),d=g.length;d<l.length;d+=1)o(d);J()}1&c&&u(b,"dark",a[0])},i:function(a){if(!c){for(var b=0;b<g.length;b+=1)K(l[b]);c=!0}},o:function(a){l=l.filter(Boolean);for(var b=0;b<l.length;b+=1)L(l[b]);c=!1},d:function(a){a&&i(b),j(l,a),e=!1,d(f)}}}function ia(a){var b,c;return b=new ea({props:{text:a[20],testId:a[22],size:a[19],iconSize:a[23],image:a[24],iconName:a[25],darkMode:a[0],dropHandleEvent:a[7](a[21],a[26]),onZoneEnter:function(){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];return a[11].apply(a,[a[18],a[28]].concat(b))},onZoneLeave:function(){for(var b=[],c=arguments.length;c--;)b[c]=arguments[c];return a[12].apply(a,[a[18],a[28]].concat(b))},neighbors:{top:0!==a[18],bottom:a[18]!==a[8]-1,left:0!==a[28],right:a[28]!==a[16].length-1}}}),{c:function(){M(b.$$.fragment)},m:function(a,d){N(b,a,d),c=!0},p:function(c,d){a=c;var e={};2&d&&(e.text=a[20]),2&d&&(e.testId=a[22]),2&d&&(e.size=a[19]),2&d&&(e.iconSize=a[23]),2&d&&(e.image=a[24]),2&d&&(e.iconName=a[25]),1&d&&(e.darkMode=a[0]),2&d&&(e.dropHandleEvent=a[7](a[21],a[26])),2&d&&(e.neighbors={top:0!==a[18],bottom:a[18]!==a[8]-1,left:0!==a[28],right:a[28]!==a[16].length-1}),b.$set(e)},i:function(a){c||(K(b.$$.fragment,a),c=!0)},o:function(a){L(b.$$.fragment,a),c=!1},d:function(a){O(b,a)}}}function ja(a){for(var b,c,d,e=a[16],f=[],m=0;m<e.length;m+=1)f[m]=ia(fa(a,e,m));var n=function(a){return L(f[a],1,1,function(){f[a]=null})};return{c:function(){b=k("div");for(var d=0;d<f.length;d+=1)f[d].c();c=l(),p(b,"class","row svelte-uz4zpd"),q(b,"flex-grow",a[15])},m:function(a,e){h(a,b,e);for(var i=0;i<f.length;i+=1)f[i].m(b,null);g(b,c),d=!0},p:function(a,g){if(411&g){var h;for(e=a[16],h=0;h<e.length;h+=1){var i=fa(a,e,h);f[h]?(f[h].p(i,g),K(f[h],1)):(f[h]=ia(i),f[h].c(),K(f[h],1),f[h].m(b,c))}for(I(),h=e.length;h<f.length;h+=1)n(h);J()}(!d||2&g)&&q(b,"flex-grow",a[15])},i:function(a){if(!d){for(var b=0;b<e.length;b+=1)K(f[b]);d=!0}},o:function(a){f=f.filter(Boolean);for(var b=0;b<f.length;b+=1)L(f[b]);d=!1},d:function(a){a&&i(b),j(f,a)}}}function ka(a){var b,c,e,f,g=a[2]&&ha(a);return{c:function(){g&&g.c(),b=l()},m:function(d,i){g&&g.m(d,i),h(d,b,i),c=!0,e||(f=[m(document.body,"dragenter",a[5]),m(document.body,"dragleave",a[6])],e=!0)},p:function(a,c){var d=c[0];a[2]?g?(g.p(a,d),4&d&&K(g,1)):((g=ha(a)).c(),K(g,1),g.m(b.parentNode,b)):g&&(I(),L(g,1,1,function(){g=null}),J())},i:function(a){c||(K(g),c=!0)},o:function(a){L(g),c=!1},d:function(a){g&&g.d(a),a&&i(b),e=!1,d(f)}}}function la(a,b,c){var d,e=b.showRule,f=b.isQA,g=b.darkMode,h=b.zones,i=!1,j={},k=function(a){var b=j;b[a]=!0,j=b},l=function(a){var b=j;b[a]=!1,-1===Object.values(j).indexOf(!0)&&c(13,i=!1),j=b},m=h.length;return a.$set=function(a){"showRule"in a&&c(9,e=a.showRule),"isQA"in a&&c(10,f=a.isQA),"darkMode"in a&&c(0,g=a.darkMode),"zones"in a&&c(1,h=a.zones)},a.$$.update=function(){8704&a.$$.dirty&&c(2,d=i&&e())},[g,h,d,k,l,function(a){a.stopImmediatePropagation(),e()&&function(a,b){if(void 0===b&&(b=!1),b)return!0;var c=a.dataTransfer&&a.dataTransfer.types,d=!1,e=!1;return null==c||c.forEach(function(a){a.includes("text")&&(e=!0),a.includes("File")&&(d=!0)}),d&&!e}(a,f)&&c(13,i=!0)},function(a){-1===Object.values(j).indexOf(!0)&&(c(13,i=!1),j={})},function(a,b){return function(d){a(d),null==b||b(),c(13,i=!1),j={}}},m,e,f,function(a,b){return k(a+"_"+b)},function(a,b){return l(a+"_"+b)}]}var ma=function(a){function b(b){var c;a.call(this),document.getElementById("svelte-uz4zpd-style")||((c=k("style")).id="svelte-uz4zpd-style",c.textContent=".dragOver.svelte-uz4zpd{background:rgba(255, 255, 255, 0.96);background:rgba(255, 255, 255, 0.96);background:rgba(255, 255, 255, 0.96);width:100vw;height:100vh;z-index:100001;position:absolute;top:0;overflow:hidden;display:flex;justify-content:space-between;flex-direction:column}.dark.svelte-uz4zpd{background:rgba(31,31,31, 0.96);background:rgba(31,31,31, 0.96);background:rgba(31,31,31, 0.96)}.row.svelte-uz4zpd{display:flex}",g(document.head,c)),Q(this,b,la,ka,f,{showRule:9,isQA:10,darkMode:0,zones:1})}return a&&(b.__proto__=a),b.prototype=Object.create(a&&a.prototype),b.prototype.constructor=b,b}(U);function na(a){var b,c;return b=new ma({props:{showRule:a[0],darkMode:a[2],zones:a[3],isQA:a[1]}}),{c:function(){M(b.$$.fragment)},m:function(a,d){N(b,a,d),c=!0},p:function(a,c){var d=c[0],e={};1&d&&(e.showRule=a[0]),4&d&&(e.darkMode=a[2]),8&d&&(e.zones=a[3]),2&d&&(e.isQA=a[1]),b.$set(e)},i:function(a){c||(K(b.$$.fragment,a),c=!0)},o:function(a){L(b.$$.fragment,a),c=!1},d:function(a){O(b,a)}}}function oa(a,b,c){var d=b.showRule;void 0===d&&(d=function(){return!0});var e=b.isQA;void 0===e&&(e=!1);var f=b.darkMode;void 0===f&&(f=!1);var g=b.zones;return void 0===g&&(g=_),a.$set=function(a){"showRule"in a&&c(0,d=a.showRule),"isQA"in a&&c(1,e=a.isQA),"darkMode"in a&&c(2,f=a.darkMode),"zones"in a&&c(3,g=a.zones)},[d,e,f,g]}var pa=function(a){function b(b){a.call(this),Q(this,b,oa,na,f,{showRule:0,isQA:1,darkMode:2,zones:3})}return a&&(b.__proto__=a),b.prototype=Object.create(a&&a.prototype),b.prototype.constructor=b,b}(U);return function(a){void 0===a&&(a={});var b=a.target;void 0===b&&(b=document.body);var c=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(d=Object.getOwnPropertySymbols(a);e<d.length;e++)b.indexOf(d[e])<0&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]])}return c}(a,["target"]);return new pa({target:b,props:c})}});