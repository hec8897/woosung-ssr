(function(t){function e(e){for(var o,a,s=e[0],u=e[1],c=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},a={app:0},r={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"457210c7"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"bf7aa934"}[t]+".css",r=u.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===r))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===o||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],m.parentNode.removeChild(m),n(i)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){a[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var p=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"13b0":function(t,e,n){"use strict";var o=n("614c"),a=n.n(o);a.a},"1d1e":function(t,e,n){},"1e12":function(t,e,n){"use strict";var o=n("796e"),a=n.n(o);a.a},"36ce":function(t,e,n){},"38a0":function(t,e,n){},"42e4":function(t,e,n){"use strict";var o=n("38a0"),a=n.n(o);a.a},"490e":function(t,e,n){t.exports=n.p+"img/consulting.f59f48ae.png"},"4d60":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("fb1b"),r=(n("d3b7"),n("8c4f")),i=n("8206"),s=n.n(i),u=n("3314"),c=n.n(u);n("b256");o["a"].prototype.$Axios=s.a,o["a"].use(c.a),o["a"].use(r["a"]);var l=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/product",name:"product",component:function(){return n.e("about").then(n.bind(null,"d2f1"))},children:[{path:"/",name:"product-pro",component:function(){return n.e("about").then(n.bind(null,"178b"))}},{path:"pro",name:"product-pro",component:function(){return n.e("about").then(n.bind(null,"178b"))}},{path:"pos",name:"product-pos",component:function(){return n.e("about").then(n.bind(null,"fcf8"))}},{path:"plus",name:"product-plus",component:function(){return n.e("about").then(n.bind(null,"f0c2"))}}]},{path:"/information",name:"infomation",component:function(){return n.e("about").then(n.bind(null,"4b13"))},children:[{path:"/",name:"info-movie",component:function(){return n.e("about").then(n.bind(null,"6acc"))}},{path:"info2",name:"info-news",component:function(){return n.e("about").then(n.bind(null,"3d01"))}},{path:"info3",name:"info-movie",component:function(){return n.e("about").then(n.bind(null,"6acc"))}},{path:"info4",name:"info-material",component:function(){return n.e("about").then(n.bind(null,"3514"))}},{path:"info4/zoom/:idx",props:!0,name:"zoom-material",component:function(){return n.e("about").then(n.bind(null,"f25a"))}}]},{path:"/board",name:"board",component:function(){return n.e("about").then(n.bind(null,"2899"))},children:[{name:"board-faq",path:"/",component:function(){return n.e("about").then(n.bind(null,"b91e"))}},{name:"board-faq",path:"faq",component:function(){return n.e("about").then(n.bind(null,"b91e"))}},{name:"zoom-faq",props:!0,path:"zoomfaq/:idx",component:function(){return n.e("about").then(n.bind(null,"12d9"))}},{name:"board-qna",path:"qna",component:function(){return n.e("about").then(n.bind(null,"2a32"))}},{name:"zoom-qna",path:"zoomqna/:idx",props:!0,component:function(){return n.e("about").then(n.bind(null,"394c"))}},{name:"write-qna",path:"qnawrite",component:function(){return n.e("about").then(n.bind(null,"35e2"))}},{name:"board-support",path:"support",component:function(){return n.e("about").then(n.bind(null,"db7f"))}},{name:"zoom-support",props:!0,path:"zoom/:idx",component:function(){return n.e("about").then(n.bind(null,"ab8f"))}}]}],p=new r["a"]({mode:"history",base:"/",routes:l,scrollBehavior:function(){return{x:0,y:0}}}),m=p,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppHeader"),n("router-view"),n("AppWidget"),n("AppFooter")],1)},h=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("moNav",{attrs:{show:t.moNav}}),o("div",{staticClass:"wrap"},[o("router-link",{attrs:{to:{name:"Home"},tag:"h1"}},[o("img",{staticClass:"default",attrs:{src:n("c97f")}}),o("img",{staticClass:"black",attrs:{src:n("cf05")}})]),o("ul",[o("li",[o("router-link",{attrs:{to:"/about",tag:"span"}},[t._v("회사 소개")])],1),o("li",[o("router-link",{attrs:{to:"/product",tag:"span"}},[t._v("제품 소개")]),o("div",{staticClass:"hidden_menu"},[o("router-link",{attrs:{to:"/product/pro",tag:"p"}},[t._v("Win-Win Pro")]),o("router-link",{attrs:{to:"/product/plus",tag:"p"}},[t._v("결제 연동")]),o("router-link",{attrs:{to:"/product/pos",tag:"p"}},[t._v("Win-Win 포스")]),o("router-link",{staticClass:"mini",attrs:{to:"/board/qna",tag:"p"}},[t._v("제품 QnA")])],1)],1),o("li",[o("router-link",{attrs:{to:"/information",tag:"span"}},[t._v("정보 공유")]),o("div",{staticClass:"hidden_menu"},[o("router-link",{attrs:{to:"/information/info3",tag:"p"}},[t._v("정보 동영상")]),o("router-link",{attrs:{to:"/information/info2",tag:"p"}},[t._v("농업계 소식")]),o("router-link",{attrs:{to:"/information/info4",tag:"p"}},[t._v("농자재 정보")]),o("p",{attrs:{onclick:"alert('서비스 준비중입니다.')"}},[t._v("병해충 정보")])],1)],1),o("li",[o("router-link",{attrs:{to:"/board",tag:"span"}},[t._v("고객 지원 센터")]),o("div",{staticClass:"hidden_menu"},[o("router-link",{attrs:{to:"/board/faq",tag:"p"}},[t._v("자주하는 질문")]),o("router-link",{attrs:{to:"/board/qna",tag:"p"}},[t._v("묻고 답하기")]),o("router-link",{attrs:{to:"/board/support",tag:"p"}},[t._v("고객지원센터")])],1)],1),t._m(0)]),o("div",{staticClass:"mo_menu",class:{active:t.moNav},on:{click:t.MoNavOpen}},[o("div"),o("div"),o("div")])],1),o("div",{staticClass:"slide_down"}),o("MoNav",{attrs:{show:t.moNav}})],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{attrs:{onclick:"alert('서비스준비중입니다.')"}},[n("span",[t._v("팜 카페")])])}],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.show?n("div",{staticClass:"mo_nav"},[n("div",{staticClass:"inner"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/about",tag:"span"}},[t._v("회사 소개")])],1),n("li",[n("router-link",{attrs:{to:"/product",tag:"span"}},[t._v("제품 소개")]),n("div",{staticClass:"sub_menu"},[n("router-link",{attrs:{to:"/product/pro",tag:"p"}},[t._v("Win-Win Pro")]),n("router-link",{attrs:{to:"/product/plus",tag:"p"}},[t._v("Win-Win Pro"),n("sup",[t._v("+")])]),n("router-link",{attrs:{to:"/product/pos",tag:"p"}},[t._v("Win-Win 포스")]),n("router-link",{staticClass:"mini",attrs:{to:"/board/qna",tag:"p"}},[t._v("제품 QnA")])],1)],1),n("li",[n("router-link",{attrs:{to:"/information",tag:"span"}},[t._v("정보 공유")]),n("div",{staticClass:"hidden_menu"},[n("router-link",{attrs:{to:"/information/info3",tag:"p"}},[t._v("정보 동영상")]),n("router-link",{attrs:{to:"/information/info2",tag:"p"}},[t._v("농업계 소식")]),n("router-link",{attrs:{to:"/information/info4",tag:"p"}},[t._v("농자재 소식")]),n("p",{attrs:{onclick:"alert('서비스 준비중입니다.')"}},[t._v("병충해 알림")])],1)],1),n("li",[n("router-link",{attrs:{to:"/board",tag:"span"}},[t._v("고객 지원 센터")]),n("div",{staticClass:"sub_menu"},[n("router-link",{attrs:{to:"/board/faq",tag:"p"}},[t._v("자주하는 질문")]),n("router-link",{attrs:{to:"/board/qna",tag:"p"}},[t._v("묻고 답하기")]),n("router-link",{attrs:{to:"/board/support",tag:"p"}},[t._v("고객지원센터")])],1)],1),n("li",[t._v("팜카페")])])])]):t._e()])},b=[],_={props:["show"]},w=_,k=(n("dc08"),n("2877")),x=Object(k["a"])(w,g,b,!1,null,null,null),y=x.exports,C={components:{MoNav:y},data:function(){return{headerActive:!1,moNav:!1}},watch:{$route:function(t,e){this.moNav=!1}},methods:{MoNavOpen:function(){0==this.moNav?this.moNav=!0:this.moNav=!1}}},N=C,E=(n("13b0"),Object(k["a"])(N,f,v,!1,null,null,null)),A=E.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"logos wrap"},[o("Carousel",{attrs:{"per-page-custom":[[1200,5],[1024,4],[767,3]],loop:!0,autoplay:!0,autoplayTimeout:3500}},t._l(t.footerSites,(function(t){return o("Slide",{key:t.idx},[o("div",[o("a",{attrs:{href:t.url,target:"blank"}},[o("img",{attrs:{src:t.logo}})])])])})),1)],1),o("div",{staticClass:"foot"},[o("img",{staticClass:"logo",attrs:{src:n("c97f")}}),o("ul",[o("router-link",{attrs:{to:"/about",tag:"li"}},[t._v("회사소개")]),o("router-link",{attrs:{to:"/product",tag:"li"}},[t._v("제품소개")]),o("router-link",{attrs:{to:"/information",tag:"li"}},[t._v("정보공유")]),o("router-link",{attrs:{to:"/board/faq/all",tag:"li"}},[t._v("고객지원센터")]),t._m(0),o("li",[t._v("팜카페")])],1),t._m(1),t._m(2),t._m(3)])])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8.pdf",target:"blank"}},[t._v("개인정보처리방침")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",[t._v("대표:")]),t._v(" 이태권 "),n("span",[t._v("주소:")]),t._v(" 서울 특별시 강서구 마곡 중앙6로 40 718호")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",[t._v("사업자등록번호:")]),t._v(" 110111-7309283")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",[t._v("전화번호:")]),t._v(" 1544-6301 , 02-6959-8161 "),n("span",[t._v("이메일:")]),t._v(" woosungsoft@naver.com")])}],q=n("ade3"),z=n("40cf"),D=n.n(z),O={components:{Carousel:z["Carousel"],Slide:z["Slide"]},data:function(){return{footerSites:[{idx:0,name:"포유 인포택",url:"http://foryou.inetpia.re.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/logo11.png"},{idx:1,name:"경농",url:"http://www.knco.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/kn.png"},{idx:2,name:"농협 캐미컬",url:"http://www.nhchemical.com/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/nh.png"},{idx:3,name:"동방아그로",url:"http://www.dongbangagro.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/db.png"},{idx:4,name:"bayer",url:"https://www.bayer.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/ba.png"},Object(q["a"])({idx:5,name:"성보화학",url:"http://www.sbcc.kr/",logo:"image/footer/logo5.png"},"logo","https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/sb.png"),{idx:6,name:"syngenta",url:"https://www.syngenta.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/sy.png"},{idx:7,name:"인바이오",url:"http://www.enbio.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/in.png"},{idx:8,name:"팜한농",url:"https://www.farmhannong.com/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/fh.png"},{idx:9,name:"한국삼공",url:"http://www.30agro.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/hs.png"},{idx:10,name:"한얼사이언스",url:"http://www.hescience.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/has.png"}]}}},L=O,j=(n("87d2"),Object(k["a"])(L,P,$,!1,null,null,null)),S=j.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"widget"},[t._m(0),t._m(1),o("div",{staticClass:"teamviewer",on:{click:t.openPopup}},[o("img",{attrs:{src:n("dbef")}}),t._m(2)]),t._m(3),t.show?o("ContactModal",{on:{child:t.PopupClose}}):t._e()],1)},W=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"kakao"},[o("a",{attrs:{href:"http://pf.kakao.com/_Wxkxhnxb/chat",target:"blank"}},[o("img",{attrs:{src:n("7ce1")}}),o("p",[t._v("플러스친구")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"teamviewer"},[o("a",{attrs:{href:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/TeamViewer.exe",download:""}},[o("img",{attrs:{src:n("490e")}}),o("p",[t._v("원격 지원")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{attrs:{href:"tel:02-6959-8161"}},[t._v("상담신청")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"phone"},[o("img",{attrs:{src:n("c7cf")}}),o("div",[o("p",[o("a",{attrs:{href:"tel:02-6959-8161"}},[t._v("02-6959-8161")])]),o("p",[o("a",{attrs:{href:"tel:1544-6301"}},[t._v("1544-6301")])])])])}],M=n("5eb3"),B={components:{ContactModal:M["a"]},data:function(){return{show:!1}},methods:{openPopup:function(){return this.show=!0},PopupClose:function(t){return this.show=t}}},T=B,H=(n("91ef"),Object(k["a"])(T,I,W,!1,null,null,null)),Y=H.exports,F={components:{AppHeader:A,AppFooter:S,AppWidget:Y},metaInfo:function(){return{title:"우성소프트",meta:[{name:"author",content:"woosung"},{name:"keyword",content:"PLS, pls 판매기록, 우성소프트,우성컴퓨터, 농약관리, 작물보호제, 농약판매기록의무화, 농약판매전자기록, \n        농약허용물질목록관리제도, 농약허용기준강화제도, 농촌진흥청, 농진청, 농약판매업, 농약판매관리, 농약재고관리"},{name:"description",content:"PLS 판매기록 우성소프트 우성컴퓨터, 농약안전정보시스템 연동, 농자재판매상 전용 판매관리프로그램, 포스 시스템 구축 , PLS 농약검색"},{property:"og:title",content:"우성소프트",vmid:"og:title"},{property:"og:description",content:"PLS 판매기록, 농자재판매상 전용 판매관리프로그램 포스 시스템 구축",vmid:"og:description"},{property:"og:type",content:"website",vmid:"og:type"},{property:"og:url",content:"http://www.wssw.kr",vmid:"og:url"},{property:"og:image",content:"http://www.wssw.kr/og.jpg",vmid:"og:image"}],link:[{rel:"canonical",href:"http://www.wssw.kr"}]}}},J=F,Q=Object(k["a"])(J,d,h,!1,null,null,null),K=Q.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("ul",[n("li",{staticClass:"btn_page",class:{btn_active:t.prev},on:{click:t.PevPage}},[t._v(" 이전 ")]),t._l(t.NumberLength,(function(e){return e<t.limit&&t.limit-5<e+1?n("li",{key:e,class:{active:t.Active==e},on:{click:function(n){return t.pageNumber(e)}}},[t._v(t._s(e))]):t._e()})),n("li",{staticClass:"btn_page",class:{btn_active:t.next},on:{click:function(e){return t.NextPage()}}},[t._v(" 다음 ")])],2)])},V=[],G=(n("a9e3"),{props:["dataLength","standard"],data:function(){return{Active:1,prev:!1,next:"",limit:"6",NumberLength:null}},created:function(){var t=Number(this.$route.params.page);this.pageNumber(1),this.$route.params.page>5&&(this.limit=10*Math.round(t/10))},mounted:function(){var t=Number(this.standard);this.NumberLength=Math.round(this.dataLength/t)+1,this.prev=this.$route.params.page>5,this.next=this.limit<this.NumberLength},watch:{$route:function(t,e){this.pageNumber(1)},dataLength:function(){var t=Number(this.standard);this.prev=this.$route.params.page>5,this.next=this.limit<this.NumberLength,this.NumberLength=this.dataLength>15?Math.round(this.dataLength/t)+1:Math.round(this.dataLength/t)}},methods:{pageNumber:function(t){var e=Number(t);Number(this.standard);this.Active=e;this.$emit("child",{page:e})},NextPage:function(){if(this.next){var t=Number(this.limit);this.pageNumber(t),this.limit=t+=5,this.prev=!0}},PevPage:function(){if(this.prev){var t=Number(this.limit);this.limit=t-=5,this.pageNumber(this.limit-1)}}}}),R=G,X=(n("1e12"),Object(k["a"])(R,U,V,!1,null,null,null)),Z=X.exports;o["a"].config.productionTip=!1,o["a"].use(a["a"]),o["a"].use(D.a),o["a"].component("list-number",Z),new o["a"]({router:m,render:function(t){return t(K)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"5eb3":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup contact"},[n("div",{staticClass:"contact_box"},[n("h2",[t._v("상담 신청")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.write,expression:"InsertData.write"}],attrs:{type:"text",placeholder:"신청자"},domProps:{value:t.InsertData.write},on:{input:function(e){e.target.composing||t.$set(t.InsertData,"write",e.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.desc,expression:"InsertData.desc"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.InsertData,"desc",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("상담 내용")]),t._l(t.cates,(function(e,o){return n("option",{key:o,domProps:{value:e}},[t._v(" "+t._s(e))])}))],2),n("input",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.contact,expression:"InsertData.contact"}],attrs:{type:"text",placeholder:"연락처"},domProps:{value:t.InsertData.contact},on:{input:function(e){e.target.composing||t.$set(t.InsertData,"contact",e.target.value)}}}),t._m(0),n("div",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox",id:"checkbox_1"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var n=t.checked,o=e.target,a=!!o.checked;if(Array.isArray(n)){var r=null,i=t._i(n,r);o.checked?i<0&&(t.checked=n.concat([r])):i>-1&&(t.checked=n.slice(0,i).concat(n.slice(i+1)))}else t.checked=a}}}),n("label",{attrs:{for:"checkbox_1"}},[t._v("개인정보수집 및 이용에 동의합니다.")])]),n("div",{staticClass:"btns"},[n("div",{staticClass:"btn t_blue",on:{click:t.postData}},[t._v("상담신청하기")]),n("div",{staticClass:"btn t_red",on:{click:t.popupclose}},[t._v("닫기")])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p_box"},[n("p",[t._v("우성소프트 개인정보를 중요시 하며 정보통신망 이용촉진 및 정보보호에 관한 법률을 준수하고 있습니다.")]),n("ol",[n("li",[t._v(" 개인정보의 수집목적 "),n("br"),t._v(" 회사는 수집한 개인정보를 상담 문의 목적을 위해 활용합니다. ")]),n("li",[t._v(" 수집하는 개인정보 항목 "),n("br"),t._v(" 회사는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. "),n("br"),t._v(" 수집항목 : 이름, 이메일주소, 휴대폰번호, 전화번호, 그 외 개인이 직접 입력한 내용 ")]),n("li",[t._v(" 수집하는 개인정보의 처리 및 보존기간"),n("br"),t._v(" 회사는 개인정보의 처리목적이 달성될 때까지 개인정보를 보유하고, 목적이 달성된 후에는 지체없이 파기합니다. "),n("br"),t._v(" 다만, 사전동의를 받은 경우 또는 관련 법규에 의하여 보존 필요성이 있는 경우에는 보존할 수 있습니다. ")]),n("li",[t._v(" 동의 거부 권리 및 동의 거부 시 불이익"),n("br"),t._v(" 고객은 본 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용에 제한이 있을 수있습니다. ")])])])}],r={data:function(){return{checked:!1,cates:["Win-Win Pro","결제 연동","Win-Win 포스","기타"],InsertData:{mode:"insert",cate:"conatct",write:"",contact:"",desc:"",status:"상담 신청",tit:"위젯 온라인 상담 신청",private:!0,password:"woosung",date:this.$moment().format("YYYY-MM-DD")}}},methods:{popupclose:function(){this.$emit("child",!1)},postData:function(){if(0==this.checked)alert("개인정보 수집 및 이용에 동의해주세요");else if(""==this.InsertData.write)alert("사업장 이름을 입력해주세요");else if(""==this.InsertData.contact)alert("연락처를 입력해주세요");else{var t="http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/qna/new";this.$Axios.post(t,this.InsertData).then((function(t){"ok"==t.data.query&&alert("접수되었습니다.")}))}}}},i=r,s=(n("42e4"),n("2877")),u=Object(s["a"])(i,o,a,!1,null,null,null);e["a"]=u.exports},"614c":function(t,e,n){},"796e":function(t,e,n){},"7ce1":function(t,e,n){t.exports=n.p+"img/kakao.83a9d471.png"},"87d2":function(t,e,n){"use strict";var o=n("36ce"),a=n.n(o);a.a},"91ef":function(t,e,n){"use strict";var o=n("4d60"),a=n.n(o);a.a},b256:function(t,e,n){},c7cf:function(t,e,n){t.exports=n.p+"img/phone.4ed2df64.png"},c97f:function(t,e,n){t.exports=n.p+"img/logo_w.5586e80f.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.e47c71f2.png"},dbef:function(t,e,n){t.exports=n.p+"img/consult.2439b586.png"},dc08:function(t,e,n){"use strict";var o=n("1d1e"),a=n.n(o);a.a}});
//# sourceMappingURL=app.a61b2c3b.js.map