(this["webpackJsonpinhouse-web"]=this["webpackJsonpinhouse-web"]||[]).push([[0],{27:function(e,t,a){e.exports=a(50)},37:function(e,t,a){e.exports=a.p+"static/media/inHouse_logo.0d382895.png"},39:function(e,t,a){e.exports=a.p+"static/media/app-store-download.81bb07a3.svg"},40:function(e,t,a){e.exports=a.p+"static/media/google-play-download.602b375f.svg"},41:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a127d686.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/tasks-icon.d5189e19.svg"},43:function(e,t,a){e.exports=a.p+"static/media/expenses-icon.9c1da5f6.svg"},44:function(e,t,a){e.exports=a.p+"static/media/chat-icon.27284773.svg"},45:function(e,t,a){e.exports=a.p+"static/media/expenses-demo-resize.09e479ef.png"},46:function(e,t,a){e.exports=a.p+"static/media/tasks-demo.2ae87ad0.png"},47:function(e,t,a){e.exports=a.p+"static/media/notifications-demo.c37e8cb1.png"},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(23),s=a.n(r),l=a(11),o=a(6),c=a(8),m=a(2),d=function(e){var t=e.component,a=e.layout,i=Object(m.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(l.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},u=a(9),v=a(3),p=a.n(v),h=a(17),b=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(u.a)(a,2),s=r[0],l=r[1],o=Object(i.useState)([]),c=Object(u.a)(o,2),m=c[0],d=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=s-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",g)),p())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",g))},f=Object(h.throttle)((function(){b(),p()}),30),g=Object(h.throttle)((function(){l(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),p()}),[s]),n.a.createElement(n.a.Fragment,null,e.children())}));b.propTypes={children:p.a.func.isRequired};var f=b,g=a(13),E=a(1),N=a.n(E),w=function(e){var t=e.className,a=e.src,r=e.width,s=e.height,l=e.alt,o=Object(m.a)(e,["className","src","width","height","alt"]),c=Object(i.useRef)(null);Object(i.useEffect)((function(){var e=document.createElement("img");d(c.current,e)}),[]);var d=function(e,t){var a,i;e.style.display="none",e.before(t),t.src=(a=e.getAttribute("width")||0,i=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(a," ").concat(i,'"%3E%3C/svg%3E')),t.width=e.getAttribute("width"),t.height=e.getAttribute("height"),t.style.opacity="0",e.className&&t.classList.add(e.className),e.addEventListener("load",(function(){t.remove(),e.style.display=""}))};return n.a.createElement("img",Object.assign({},o,{ref:c,className:t,src:a,width:r,height:s,alt:l}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=w,O=function(e){var t=e.className,i=Object(m.a)(e,["className"]),r=N()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(c.b,{to:"/"},n.a.createElement(y,{src:a(37),alt:"Open",width:32,height:32}))))},x=function(e){var t=e.className,a=(e.navPosition,e.hideNav,e.hideSignin,e.bottomOuterDivider),r=e.bottomDivider,s=Object(m.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),l=Object(i.useState)(!1),o=Object(u.a)(l,2),c=o[0],d=o[1],v=Object(i.useRef)(null),p=Object(i.useRef)(null);Object(i.useEffect)((function(){return c&&h(),document.addEventListener("keydown",f),document.addEventListener("click",g),function(){document.removeEventListener("keydown",f),document.addEventListener("click",g),b()}}));var h=function(){document.body.classList.add("off-nav-is-active"),v.current.style.maxHeight=v.current.scrollHeight+"px",d(!0)},b=function(){document.body.classList.remove("off-nav-is-active"),v.current&&(v.current.style.maxHeight=null),d(!1)},f=function(e){c&&27===e.keyCode&&b()},g=function(e){v.current&&c&&!v.current.contains(e.target)&&e.target!==p.current&&b()},E=N()("site-header",a&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},s,{className:E}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:N()("site-header-inner",r&&"has-bottom-divider")},n.a.createElement(O,null))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var j=x,D=function(e){var t=e.className,a=Object(m.a)(e,["className"]),i=N()("footer-social",t);return n.a.createElement("div",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/theinhouseapp"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Facebook"),n.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/inhouse_app"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Twitter"),n.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/inHouse_app/"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Instagram"),n.a.createElement("g",null,n.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),n.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),n.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},k=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(m.a)(e,["className","topOuterDivider","topDivider"]),s=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:s}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:N()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(O,null),n.a.createElement(D,null)),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement("div",{className:"footer-copyright"},"Made with \u2665 by inHouse Technologies. All right reserved")))))};k.defaultProps={topOuterDivider:!1,topDivider:!1};var C=k,H=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(C,null))},L=a(5),S={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},A={types:Object(L.a)({},S.types),defaults:Object(L.a)({},S.defaults)},P={types:Object(L.a)({},S.types,{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(L.a)({},S.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},F={types:Object(L.a)({},S.types,{pushLeft:p.a.bool}),defaults:Object(L.a)({},S.defaults,{pushLeft:!1})},T=function(e){var t=e.className,a=Object(m.a)(e,["className"]),i=N()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},z=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,s=e.loading,l=e.wide,o=e.wideMobile,c=e.disabled,d=Object(m.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=N()("button",i&&"button-".concat(i),r&&"button-".concat(r),s&&"is-loading",l&&"button-block",o&&"button-wide-mobile",t),v=a;return n.a.createElement(v,Object.assign({},d,{className:u,disabled:c}))};z.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var B=z,_=function(e){var t=e.className,a=e.children,r=e.handleClose,s=e.show,l=e.closeHidden,o=e.video,c=e.videoTag,d=Object(m.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},h=N()("modal",s&&"is-active",o&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,s&&n.a.createElement("div",Object.assign({},d,{className:h,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:p},o?n.a.createElement("div",{className:"responsive-video"},"iframe"===c?n.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:o})):n.a.createElement(n.a.Fragment,null,!l&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};_.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var R=_,M=(a(38),Object(L.a)({},A.defaults)),W=function(e){var t=e.className,r=e.topOuterDivider,s=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,c=e.hasBgColor,d=e.invertColor,v=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),h=Object(u.a)(p,2),b=h[0],f=h[1],g=N()("hero section center-content",r&&"has-top-divider",s&&"has-bottom-divider",c&&"has-bg-color",d&&"invert-color",t),E=N()("hero-inner section-inner",l&&"has-top-divider",o&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:g}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:E},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Harmonious house sharing with ",n.a.createElement("span",{className:"text-color-primary"},"inHouse")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Shared living can be tough. From bugging your housemates for rent to working out who paid what after a night out. We think shared living should be easy - that's why we made inHouse."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(T,null,n.a.createElement("a",{href:"https://apps.apple.com/gb/app/inhouse/id1488409238?mt=8"},n.a.createElement(y,{className:"has-shadow",src:a(39),width:180,height:80,style:{marginRight:10}})),n.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=io.inhouseapp.inhouse&hl=en_GB"},n.a.createElement(y,{className:"has-shadow",src:a(40),width:180,height:80,style:{marginLeft:10}})))))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement("a",{"data-video":"https://player.vimeo.com/video/438740646",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},n.a.createElement(y,{className:"has-shadow",src:a(41),alt:"Hero",width:896,height:504}))),n.a.createElement(R,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/438740646",videoTag:"iframe"}))))};W.defaultProps=M;var q=W,G=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,s=Object(m.a)(e,["className","data","children","tag"]),l=N()("section-header",t),o=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},s,{className:l}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(o,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};G.defaultProps={children:null,tag:"h2"};var I=G,K=Object(L.a)({},F.defaults),U=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.pushLeft,u=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=N()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),p=N()("features-tiles-inner section-inner pt-0",s&&"has-top-divider",l&&"has-bottom-divider"),h=N()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},u,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:p},n.a.createElement(I,{data:{title:"Features",paragraph:"inHouse addresses the common problems with house sharing and we're building more great features all the time."},className:"center-content"}),n.a.createElement("div",{className:h},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(42),alt:"Features tile icon 01",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Tasks"),n.a.createElement("p",{className:"m-0 text-sm"},"Keep track of shared tasks and notify your housemates when tasks are done.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(43),alt:"Features tile icon 02",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Expenses"),n.a.createElement("p",{className:"m-0 text-sm"},"Always know when all your bills are due and how much you owe. Send reminders to your housemates to pay and get notified when you've been paid. Seamlessly split the bills between your housemates in just a few taps.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(44),alt:"Features tile icon 03",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Chat"),n.a.createElement("p",{className:"m-0 text-sm"},"Chat with your housemates without leaving the app."))))),n.a.createElement("div",{class:"center-content"},n.a.createElement("a",{href:"https://www.producthunt.com/posts/inhouse-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-inhouse-2",target:"_blank"},n.a.createElement("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=223951&theme=dark",alt:"inHouse - House sharing made easy | Product Hunt Embed",style:{width:"250px",height:"54px"},width:"250px",height:"54px"}))))))};U.defaultProps=K;var V=U,Y=Object(L.a)({},P.defaults),Q=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,h=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=N()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),f=N()("features-split-inner section-inner",s&&"has-top-divider",l&&"has-bottom-divider"),g=N()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({},h,{className:b}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f},n.a.createElement(I,{data:{title:"How it works",paragraph:""},className:"center-content"}),n.a.createElement("div",{className:g},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Expense Spltting"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Never get left out of pocket"),n.a.createElement("p",{className:"m-0"},"inHouse makes it easy to see your financial position with your housemates. Tap on expenses to pay them individually or settle up all at once, minimising the number of transfers you need to make.")),n.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(45),alt:"Features split 01",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Shared Todo List"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Keep on top of everything"),n.a.createElement("p",{className:"m-0"},"Queue up household tasks or use it as your shared grocery list. Everyone can contribute.")),n.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(46),alt:"Features split 02",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Notifications and Reminders"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Stay informed"),n.a.createElement("p",{className:"m-0"},"Your housemates get notified when tasks and expenses are added and completed, so everyone knows what's going on. You can also send settle up notifications to remind your housemates when it's time to pay.")),n.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(47),alt:"Features split 03",width:528,height:396})))))))};Q.defaultProps=Y;var J=Q,$=Object(L.a)({},F.defaults),X=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,l=e.hasBgColor,o=e.invertColor,c=e.pushLeft,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=N()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",l&&"has-bg-color",o&&"invert-color",t),v=N()("testimonial-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider"),p=N()("tiles-wrap",c&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement(I,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName")))))))))};X.defaultProps=$;var Z=a(18),ee=a.n(Z),te=a(26),ae=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,s=Object(m.a)(e,["className","children","labelHidden","id"]),l=N()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},s,{className:l,htmlFor:r}),a)};ae.defaultProps={children:null,labelHidden:!1,id:null};var ie=ae,ne=function(e){var t=e.children,a=e.className,i=e.status,r=Object(m.a)(e,["children","className","status"]),s=N()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},r,{className:s}),t)};ne.defaultProps={children:null,status:!1};var re=ne,se=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,s=e.type,l=e.name,o=e.status,c=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,h=e.placeholder,b=e.rows,f=e.hint,g=Object(m.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),E=N()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),w=N()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),y="textarea"===s?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(ie,{labelHidden:r,id:g.id},i),n.a.createElement("div",{className:E},n.a.createElement(y,Object.assign({},g,{type:"textarea"!==s?s:null,className:w,name:l,disabled:c,value:d,placeholder:h,rows:"textarea"===s?b:null})),a),f&&n.a.createElement(re,{status:o},f))};se.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var le=se,oe=Object(L.a)({},A.defaults,{split:!1}),ce=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,d=e.split,v=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),p=Object(i.useState)(""),h=Object(u.a)(p,2),b=h[0],f=h[1],g=Object(i.useState)(!1),E=Object(u.a)(g,2),w=E[0],y=E[1],O=function(){var e=Object(te.a)(ee.a.mark((function e(t){var a,i;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),"15RW7f9c4y-A-h9x28FEwWVysKDLUnY7lUGd-g2hvy0A","https://pushtogsheet.herokuapp.com","valueInputOption=RAW&pizzly_pkey=pope8Qy8qfYyppnHRMgLMpQ8MuEUKDGeyhfGCj",a=new URL("/proxy/google-sheets/spreadsheets/".concat("15RW7f9c4y-A-h9x28FEwWVysKDLUnY7lUGd-g2hvy0A","/values/A1:append?").concat("valueInputOption=RAW&pizzly_pkey=pope8Qy8qfYyppnHRMgLMpQ8MuEUKDGeyhfGCj"),"https://pushtogsheet.herokuapp.com"),i=[[b]],fetch(a.href,{method:"POST",body:JSON.stringify({values:i}),headers:{"Pizzly-Auth-Id":"eeabbcd0-c9fe-11ea-9a92-d7fa3fa06bce"}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),j=N()("cta-inner section-inner",s&&"has-top-divider",l&&"has-bottom-divider",d&&"cta-split");return n.a.createElement("section",Object.assign({},v,{className:x}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:j},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"We'd love to hear from you")),n.a.createElement("div",{className:"cta-action",style:{}},n.a.createElement(le,{id:"newsletter",type:"email",label:"Subscribe",value:b,labelHidden:!0,hasIcon:"right",placeholder:"Your best email",onChange:function(e){f(e.target.value),y(!0)}}),w&&n.a.createElement(B,{style:{width:"100%",marginTop:10},onClick:function(e){O(e).then((function(){f("Thanks!"),y(!1)}))}},"Submit")))))};ce.defaultProps=oe;var me=ce,de=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(q,{className:"illustration-section-01"}),n.a.createElement(V,null),n.a.createElement(J,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(me,{split:!0}))};g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ue=function(){var e=Object(i.useRef)(),t=Object(l.e)();return Object(i.useEffect)((function(){t.pathname;document.body.classList.add("is-loaded"),e.current.init()}),[t]),n.a.createElement(f,{ref:e,children:function(){return n.a.createElement(c.a,null,n.a.createElement(d,{basename:"/inhouse-web",component:de,layout:H}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);var ve=Object(o.a)();s.a.render(n.a.createElement(l.b,{history:ve},n.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.ccb1a927.chunk.js.map