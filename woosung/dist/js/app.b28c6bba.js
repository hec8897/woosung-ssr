(function(t){function n(n){for(var e,a,u=n[0],s=n[1],l=n[2],c=0,p=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);m&&m(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,n=0;n<i.length;n++){for(var o=i[n],e=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(e=!1)}e&&(i.splice(n--,1),t=s(s.s=o[0]))}return t}var e={},a={app:0},r={app:0},i=[];function u(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7450e35a"}[t]+".js"}function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var n=[],o={about:1};a[t]?n.push(a[t]):0!==a[t]&&o[t]&&n.push(a[t]=new Promise((function(n,o){for(var e="css/"+({about:"about"}[t]||t)+"."+{about:"535991a6"}[t]+".css",r=s.p+e,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===e||c===r))return n()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){l=p[u],c=l.getAttribute("data-href");if(c===e||c===r)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var e=n&&n.target&&n.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+e+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=e,delete a[t],m.parentNode.removeChild(m),o(i)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){a[t]=0})));var e=r[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise((function(n,o){e=r[t]=[n,o]}));n.push(e[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=u(t);var p=new Error;l=function(n){c.onerror=c.onload=null,clearTimeout(m);var o=r[t];if(0!==o){if(o){var e=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;p.message="Loading chunk "+t+" failed.\n("+e+": "+a+")",p.name="ChunkLoadError",p.type=e,p.request=a,o[1](p)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(n)},s.m=t,s.c=e,s.d=function(t,n,o){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)s.d(o,e,function(n){return t[n]}.bind(null,e));return o},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var p=0;p<l.length;p++)n(l[p]);var m=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,n,o){t.exports=o("56d7")},"13b0":function(t,n,o){"use strict";var e=o("614c"),a=o.n(e);a.a},"1d1e":function(t,n,o){},"1e12":function(t,n,o){"use strict";var e=o("796e"),a=o.n(e);a.a},"36ce":function(t,n,o){},"56d7":function(t,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d");var e=o("2b0e"),a=o("fb1b"),r=(o("d3b7"),o("8c4f")),i=o("8206"),u=o.n(i),s=o("3314"),l=o.n(s);o("b256");e["a"].prototype.$Axios=u.a,e["a"].use(l.a),e["a"].use(r["a"]);var c=[{path:"/",name:"Home",component:function(){return o.e("about").then(o.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/product",name:"product",component:function(){return o.e("about").then(o.bind(null,"d2f1"))},children:[{path:"/",name:"product-pro",component:function(){return o.e("about").then(o.bind(null,"178b"))}},{path:"pro",name:"product-pro",component:function(){return o.e("about").then(o.bind(null,"178b"))}},{path:"pos",name:"product-pos",component:function(){return o.e("about").then(o.bind(null,"fcf8"))}},{path:"plus",name:"product-plus",component:function(){return o.e("about").then(o.bind(null,"f0c2"))}}]},{path:"/information",name:"infomation",component:function(){return o.e("about").then(o.bind(null,"4b13"))},children:[{path:"/",name:"info-movie",component:function(){return o.e("about").then(o.bind(null,"6acc"))}},{path:"info2",name:"info-news",component:function(){return o.e("about").then(o.bind(null,"3d01"))}},{path:"info3",name:"info-movie",component:function(){return o.e("about").then(o.bind(null,"6acc"))}},{path:"info4",name:"info-material",component:function(){return o.e("about").then(o.bind(null,"3514"))}},{path:"info4/zoom/:idx",props:!0,name:"zoom-material",component:function(){return o.e("about").then(o.bind(null,"f25a"))}}]},{path:"/board",name:"board",component:function(){return o.e("about").then(o.bind(null,"2899"))},children:[{name:"board-faq",path:"/",component:function(){return o.e("about").then(o.bind(null,"b91e"))}},{name:"board-faq",path:"faq",component:function(){return o.e("about").then(o.bind(null,"b91e"))}},{name:"zoom-faq",props:!0,path:"zoomfaq/:idx",component:function(){return o.e("about").then(o.bind(null,"12d9"))}},{name:"board-qna",path:"qna",component:function(){return o.e("about").then(o.bind(null,"2a32"))}},{name:"zoom-qna",path:"zoomqna/:idx",props:!0,component:function(){return o.e("about").then(o.bind(null,"394c"))}},{name:"write-qna",path:"qnawrite",component:function(){return o.e("about").then(o.bind(null,"35e2"))}},{name:"board-support",path:"support",component:function(){return o.e("about").then(o.bind(null,"db7f"))}},{name:"zoom-support",props:!0,path:"zoom/:idx",component:function(){return o.e("about").then(o.bind(null,"ab8f"))}}]}],p=new r["a"]({mode:"history",base:"/",routes:c}),m=p,d=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("AppHeader"),o("router-view"),o("AppFooter")],1)},h=[],f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("moNav",{attrs:{show:t.moNav}}),e("div",{staticClass:"wrap"},[e("router-link",{attrs:{to:{name:"Home"},tag:"h1"}},[e("img",{staticClass:"default",attrs:{src:o("c97f")}}),e("img",{staticClass:"black",attrs:{src:o("cf05")}})]),e("ul",[e("li",[e("router-link",{attrs:{to:"/about",tag:"span"}},[t._v("회사 소개")])],1),e("li",[e("router-link",{attrs:{to:"/product",tag:"span"}},[t._v("제품 소개")]),e("div",{staticClass:"hidden_menu"},[e("router-link",{attrs:{to:"/product/pro",tag:"p"}},[t._v("Win-Win Pro")]),e("router-link",{attrs:{to:"/product/plus",tag:"p"}},[t._v("결제 연동")]),e("router-link",{attrs:{to:"/product/pos",tag:"p"}},[t._v("Win-Win 포스")]),e("router-link",{staticClass:"mini",attrs:{to:"/board/qna",tag:"p"}},[t._v("제품 QnA")])],1)],1),e("li",[e("router-link",{attrs:{to:"/information",tag:"span"}},[t._v("정보 공유")]),e("div",{staticClass:"hidden_menu"},[e("router-link",{attrs:{to:"/information/info3",tag:"p"}},[t._v("정보 동영상")]),e("router-link",{attrs:{to:"/information/info2",tag:"p"}},[t._v("농업계 소식")]),e("router-link",{attrs:{to:"/information/info4",tag:"p"}},[t._v("농자재 정보")]),e("p",{attrs:{onclick:"alert('서비스 준비중입니다.')"}},[t._v("병해충 정보")])],1)],1),e("li",[e("router-link",{attrs:{to:"/board",tag:"span"}},[t._v("고객 지원 센터")]),e("div",{staticClass:"hidden_menu"},[e("router-link",{attrs:{to:"/board/faq",tag:"p"}},[t._v("자주하는 질문")]),e("router-link",{attrs:{to:"/board/qna",tag:"p"}},[t._v("묻고 답하기")]),e("router-link",{attrs:{to:"/board/support",tag:"p"}},[t._v("고객지원센터")])],1)],1),t._m(0)]),e("div",{staticClass:"mo_menu",class:{active:t.moNav},on:{click:t.MoNavOpen}},[e("div"),e("div"),e("div")])],1),e("div",{staticClass:"slide_down"}),e("MoNav",{attrs:{show:t.moNav}})],1)},g=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("li",{attrs:{onclick:"alert('서비스준비중입니다.')"}},[o("span",[t._v("팜 카페")])])}],v=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("transition",{attrs:{name:"fade"}},[t.show?o("div",{staticClass:"mo_nav"},[o("div",{staticClass:"inner"},[o("ul",[o("li",[o("router-link",{attrs:{to:"/about",tag:"span"}},[t._v("회사 소개")])],1),o("li",[o("router-link",{attrs:{to:"/product",tag:"span"}},[t._v("제품 소개")]),o("div",{staticClass:"sub_menu"},[o("router-link",{attrs:{to:"/product/pro",tag:"p"}},[t._v("Win-Win Pro")]),o("router-link",{attrs:{to:"/product/plus",tag:"p"}},[t._v("Win-Win Pro"),o("sup",[t._v("+")])]),o("router-link",{attrs:{to:"/product/pos",tag:"p"}},[t._v("Win-Win 포스")]),o("router-link",{staticClass:"mini",attrs:{to:"/board/qna",tag:"p"}},[t._v("제품 QnA")])],1)],1),o("li",[o("router-link",{attrs:{to:"/information",tag:"span"}},[t._v("정보 공유")]),o("div",{staticClass:"hidden_menu"},[o("router-link",{attrs:{to:"/information/info3",tag:"p"}},[t._v("정보 동영상")]),o("router-link",{attrs:{to:"/information/info2",tag:"p"}},[t._v("농업계 소식")]),o("router-link",{attrs:{to:"/information/info4",tag:"p"}},[t._v("농자재 소식")]),o("p",{attrs:{onclick:"alert('서비스 준비중입니다.')"}},[t._v("병충해 알림")])],1)],1),o("li",[o("router-link",{attrs:{to:"/board",tag:"span"}},[t._v("고객 지원 센터")]),o("div",{staticClass:"sub_menu"},[o("router-link",{attrs:{to:"/board/faq",tag:"p"}},[t._v("자주하는 질문")]),o("router-link",{attrs:{to:"/board/qna",tag:"p"}},[t._v("묻고 답하기")]),o("router-link",{attrs:{to:"/board/support",tag:"p"}},[t._v("고객지원센터")])],1)],1),o("li",[t._v("팜카페")])])])]):t._e()])},b=[],_={props:["show"]},w=_,k=(o("dc08"),o("2877")),y=Object(k["a"])(w,v,b,!1,null,null,null),x=y.exports,N={components:{MoNav:x},data:function(){return{headerActive:!1,moNav:!1}},watch:{$route:function(t,n){this.moNav=!1}},methods:{MoNavOpen:function(){0==this.moNav?this.moNav=!0:this.moNav=!1}}},C=N,E=(o("13b0"),Object(k["a"])(C,f,g,!1,null,null,null)),q=E.exports,O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("div",{staticClass:"logos wrap"},[e("Carousel",{attrs:{"per-page-custom":[[1200,5],[1024,4],[767,3]],loop:!0,autoplay:!0,autoplayTimeout:3500}},t._l(t.footerSites,(function(t){return e("Slide",{key:t.idx},[e("div",[e("a",{attrs:{href:t.url,target:"blank"}},[e("img",{attrs:{src:t.logo}})])])])})),1)],1),e("div",{staticClass:"foot"},[e("img",{staticClass:"logo",attrs:{src:o("c97f")}}),e("ul",[e("router-link",{attrs:{to:"/about",tag:"li"}},[t._v("회사소개")]),e("router-link",{attrs:{to:"/product",tag:"li"}},[t._v("제품소개")]),e("router-link",{attrs:{to:"/information",tag:"li"}},[t._v("정보공유")]),e("router-link",{attrs:{to:"/board/faq/all",tag:"li"}},[t._v("고객지원센터")]),t._m(0),e("li",[t._v("팜카페")])],1),t._m(1),t._m(2),t._m(3)])])},z=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("li",[o("a",{attrs:{href:"pdf/개인정보처리방침.pdf",target:"blank"}},[t._v("개인정보처리방침")])])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("p",[o("span",[t._v("대표:")]),t._v(" 이태권 "),o("span",[t._v("주소:")]),t._v(" 서울 특별시 강서구 마곡 중앙6로 40 718호")])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("p",[o("span",[t._v("사업자등록번호:")]),t._v(" 110111-7309283")])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("p",[o("span",[t._v("전화번호:")]),t._v(" 1544-6301 , 02-6959-8161 "),o("span",[t._v("이메일:")]),t._v(" woosungsoft@naver.com")])}],P=o("ade3"),$=o("40cf"),A=o.n($),j={components:{Carousel:$["Carousel"],Slide:$["Slide"]},data:function(){return{footerSites:[{idx:0,name:"포유 인포택",url:"http://foryou.inetpia.re.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/logo11.png"},{idx:1,name:"경농",url:"http://www.knco.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/kn.png"},{idx:2,name:"농협 캐미컬",url:"http://www.nhchemical.com/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/nh.png"},{idx:3,name:"동방아그로",url:"http://www.dongbangagro.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/db.png"},{idx:4,name:"bayer",url:"https://www.bayer.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/ba.png"},Object(P["a"])({idx:5,name:"성보화학",url:"http://www.sbcc.kr/",logo:"image/footer/logo5.png"},"logo","https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/sb.png"),{idx:6,name:"syngenta",url:"https://www.syngenta.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/sy.png"},{idx:7,name:"인바이오",url:"http://www.enbio.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/in.png"},{idx:8,name:"팜한농",url:"https://www.farmhannong.com/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/fh.png"},{idx:9,name:"한국삼공",url:"http://www.30agro.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/hs.png"},{idx:10,name:"한얼사이언스",url:"http://www.hescience.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/has.png"}]}}},L=j,S=(o("87d2"),Object(k["a"])(L,O,z,!1,null,null,null)),M=S.exports,W={components:{AppHeader:q,AppFooter:M}},T=W,H=Object(k["a"])(T,d,h,!1,null,null,null),B=H.exports,F=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"page"},[o("ul",[o("li",{staticClass:"btn_page",class:{btn_active:t.prev},on:{click:t.PevPage}},[t._v(" 이전 ")]),t._l(t.NumberLength,(function(n){return n<t.limit&&t.limit-5<n+1?o("li",{key:n,class:{active:t.Active==n},on:{click:function(o){return t.pageNumber(n)}}},[t._v(t._s(n))]):t._e()})),o("li",{staticClass:"btn_page",class:{btn_active:t.next},on:{click:function(n){return t.NextPage()}}},[t._v(" 다음 ")])],2)])},D=[],J=(o("a9e3"),{props:["dataLength","standard"],data:function(){return{Active:1,prev:!1,next:"",limit:"6",NumberLength:null}},created:function(){var t=Number(this.$route.params.page);this.pageNumber(1),this.$route.params.page>5&&(this.limit=10*Math.round(t/10))},mounted:function(){var t=Number(this.standard);this.NumberLength=Math.round(this.dataLength/t)+1,this.prev=this.$route.params.page>5,this.next=this.limit<this.NumberLength},watch:{$route:function(t,n){this.pageNumber(1)},dataLength:function(){var t=Number(this.standard);this.prev=this.$route.params.page>5,this.next=this.limit<this.NumberLength,this.NumberLength=this.dataLength>15?Math.round(this.dataLength/t)+1:Math.round(this.dataLength/t)}},methods:{pageNumber:function(t){var n=Number(t);Number(this.standard);this.Active=n;this.$emit("child",{page:n})},NextPage:function(){if(this.next){var t=Number(this.limit);this.pageNumber(t),this.limit=t+=5,this.prev=!0}},PevPage:function(){if(this.prev){var t=Number(this.limit);this.limit=t-=5,this.pageNumber(this.limit-1)}}}}),Q=J,I=(o("1e12"),Object(k["a"])(Q,F,D,!1,null,null,null)),K=I.exports;e["a"].config.productionTip=!1,e["a"].use(a["a"]),e["a"].use(A.a),e["a"].component("list-number",K),new e["a"]({router:m,render:function(t){return t(B)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"614c":function(t,n,o){},"796e":function(t,n,o){},"87d2":function(t,n,o){"use strict";var e=o("36ce"),a=o.n(e);a.a},b256:function(t,n,o){},c97f:function(t,n,o){t.exports=o.p+"img/logo_w.5586e80f.png"},cf05:function(t,n,o){t.exports=o.p+"img/logo.e47c71f2.png"},dc08:function(t,n,o){"use strict";var e=o("1d1e"),a=o.n(e);a.a}});
//# sourceMappingURL=app.b28c6bba.js.map