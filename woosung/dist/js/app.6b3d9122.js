(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},a={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({about:"about",board:"board",faq:"faq","faq-zoom":"faq-zoom",home:"home",info:"info",material:"material","meterial-zoom":"meterial-zoom",movie:"movie",news:"news",plus:"plus","pos~pro":"pos~pro",pos:"pos",pro:"pro",product:"product",qna:"qna","qna-write":"qna-write","qna-zoom":"qna-zoom",support:"support","support-zoom":"support-zoom"}[t]||t)+"."+{about:"c9fd1522",board:"c71fcd39",faq:"e95a04e4","faq-zoom":"ed563825",home:"d9dd72e1",info:"b3f54129",material:"e0ad494a","meterial-zoom":"4302b405",movie:"98b3a2fe",news:"b0ed061b",plus:"546548cb","pos~pro":"36d2207f",pos:"93b56d7b",pro:"7ced1061",product:"6a9f3611",qna:"1416b16b","qna-write":"d4dee343","qna-zoom":"d560f466",support:"bb49302f","support-zoom":"14c1fd34"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={about:1,board:1,faq:1,"faq-zoom":1,home:1,info:1,material:1,"meterial-zoom":1,movie:1,news:1,plus:1,"pos~pro":1,pos:1,pro:1,qna:1,"qna-write":1,"qna-zoom":1,support:1,"support-zoom":1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=new Promise((function(e,o){for(var n="css/"+({about:"about",board:"board",faq:"faq","faq-zoom":"faq-zoom",home:"home",info:"info",material:"material","meterial-zoom":"meterial-zoom",movie:"movie",news:"news",plus:"plus","pos~pro":"pos~pro",pos:"pos",pro:"pro",product:"product",qna:"qna","qna-write":"qna-write","qna-zoom":"qna-zoom",support:"support","support-zoom":"support-zoom"}[t]||t)+"."+{about:"954b537a",board:"07f820dc",faq:"c61bbf00","faq-zoom":"5381e02d",home:"c07c1c21",info:"ad054d56",material:"e153683f","meterial-zoom":"52f0d7b3",movie:"577514b4",news:"37e98265",plus:"47e56002","pos~pro":"389aeb85",pos:"6f973f59",pro:"5fc64f55",product:"31d6cfe0",qna:"5381e02d","qna-write":"5381e02d","qna-zoom":"dd40075f",support:"5381e02d","support-zoom":"5381e02d"}[t]+".css",r=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===n||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],m.parentNode.removeChild(m),o(i)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){a[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,o[1](p)}r[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var m=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"13b0":function(t,e,o){"use strict";var n=o("614c"),a=o.n(n);a.a},"1d1e":function(t,e,o){},"1e12":function(t,e,o){"use strict";var n=o("796e"),a=o.n(n);a.a},"36ce":function(t,e,o){},"38a0":function(t,e,o){},"42e4":function(t,e,o){"use strict";var n=o("38a0"),a=o.n(n);a.a},"490e":function(t,e,o){t.exports=o.p+"img/consulting.f59f48ae.png"},"4d60":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=o("fb1b"),r=(o("d3b7"),o("8c4f")),i=o("8206"),s=o.n(i),c=o("2ead"),u=o.n(c);o("b256");n["a"].prototype.$Axios=s.a,n["a"].use(u.a),n["a"].use(r["a"]);var l=[{path:"/",name:"Home",component:function(){return o.e("home").then(o.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/product",name:"product",component:function(){return o.e("product").then(o.bind(null,"d2f1"))},children:[{path:"/",name:"product-pro",component:function(){return Promise.all([o.e("pos~pro"),o.e("pro")]).then(o.bind(null,"178b"))}},{path:"pro",name:"product-pro",component:function(){return Promise.all([o.e("pos~pro"),o.e("pro")]).then(o.bind(null,"178b"))}},{path:"pos",name:"product-pos",component:function(){return Promise.all([o.e("pos~pro"),o.e("pos")]).then(o.bind(null,"fcf8"))}},{path:"plus",name:"product-plus",component:function(){return o.e("plus").then(o.bind(null,"f0c2"))}}]},{path:"/information",name:"infomation",component:function(){return o.e("info").then(o.bind(null,"4b13"))},children:[{path:"/",name:"info-movie",component:function(){return o.e("movie").then(o.bind(null,"6acc"))}},{path:"info2",name:"info-news",component:function(){return o.e("news").then(o.bind(null,"3d01"))}},{path:"info3",name:"info-movie",component:function(){return o.e("movie").then(o.bind(null,"6acc"))}},{path:"info4",name:"info-material",component:function(){return o.e("material").then(o.bind(null,"3514"))}},{path:"info4/zoom/:idx",props:!0,name:"zoom-material",component:function(){return o.e("meterial-zoom").then(o.bind(null,"f25a"))}}]},{path:"/board",name:"board",component:function(){return o.e("board").then(o.bind(null,"2899"))},children:[{name:"board-faq",path:"/",component:function(){return o.e("faq").then(o.bind(null,"b91e"))}},{name:"board-faq",path:"faq",component:function(){return o.e("faq").then(o.bind(null,"b91e"))}},{name:"zoom-faq",props:!0,path:"zoomfaq/:idx",component:function(){return o.e("faq-zoom").then(o.bind(null,"12d9"))}},{name:"board-qna",path:"qna",component:function(){return o.e("qna").then(o.bind(null,"2a32"))}},{name:"zoom-qna",path:"zoomqna/:idx",props:!0,component:function(){return o.e("qna-zoom").then(o.bind(null,"394c"))}},{name:"write-qna",path:"qnawrite",component:function(){return o.e("qna-write").then(o.bind(null,"35e2"))}},{name:"board-support",path:"support",component:function(){return o.e("support").then(o.bind(null,"db7f"))}},{name:"zoom-support",props:!0,path:"zoom/:idx",component:function(){return o.e("support-zoom").then(o.bind(null,"ab8f"))}}]}],p=new r["a"]({mode:"history",base:"/",routes:l,scrollBehavior:function(){return{x:0,y:0}}}),m=p,d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AppHeader"),o("router-view"),o("AppWidget"),o("Adsense",{attrs:{"data-ad-client":"ca-pub-3666966640936806","ins-style":"{position: fixed; z-index:999; width:200px; height:200px; top:0px left:10%; top:10%;} ","data-ad-slot":"1234567890"}}),o("AppFooter")],1)},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("moNav",{attrs:{show:t.moNav}}),n("div",{staticClass:"wrap"},[n("router-link",{attrs:{to:{name:"Home"},tag:"h1"}},[n("img",{staticClass:"default",attrs:{src:o("c97f")}}),n("img",{staticClass:"black",attrs:{src:o("cf05")}})]),n("ul",[n("li",[n("router-link",{attrs:{to:"/about",tag:"span"}},[t._v("회사 소개")])],1),n("li",[n("router-link",{attrs:{to:"/product",tag:"span"}},[t._v("제품 소개")]),n("div",{staticClass:"hidden_menu"},[n("router-link",{attrs:{to:"/product/pro",tag:"p"}},[t._v("Win-Win Pro")]),n("router-link",{attrs:{to:"/product/plus",tag:"p"}},[t._v("결제 연동")]),n("router-link",{attrs:{to:"/product/pos",tag:"p"}},[t._v("Win-Win 포스")]),n("router-link",{staticClass:"mini",attrs:{to:"/board/qna",tag:"p"}},[t._v("제품 QnA")])],1)],1),n("li",[n("router-link",{attrs:{to:"/information",tag:"span"}},[t._v("정보 공유")]),n("div",{staticClass:"hidden_menu"},[n("router-link",{attrs:{to:"/information/info3",tag:"p"}},[t._v("정보 동영상")]),n("router-link",{attrs:{to:"/information/info2",tag:"p"}},[t._v("농업계 소식")]),n("router-link",{attrs:{to:"/information/info4",tag:"p"}},[t._v("농자재 정보")]),n("p",{attrs:{onclick:"alert('서비스 준비중입니다.')"}},[t._v("병해충 정보")])],1)],1),n("li",[n("router-link",{attrs:{to:"/board",tag:"span"}},[t._v("고객 지원 센터")]),n("div",{staticClass:"hidden_menu"},[n("router-link",{attrs:{to:"/board/faq",tag:"p"}},[t._v("자주하는 질문")]),n("router-link",{attrs:{to:"/board/qna",tag:"p"}},[t._v("묻고 답하기")]),n("router-link",{attrs:{to:"/board/support",tag:"p"}},[t._v("고객지원센터")])],1)],1),t._m(0)]),n("div",{staticClass:"mo_menu",class:{active:t.moNav},on:{click:t.MoNavOpen}},[n("div"),n("div"),n("div")])],1),n("div",{staticClass:"slide_down"}),n("MoNav",{attrs:{show:t.moNav}})],1)},v=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{attrs:{onclick:"alert('서비스준비중입니다.')"}},[o("span",[t._v("팜 카페")])])}],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"}},[t.show?o("div",{staticClass:"mo_nav"},[o("div",{staticClass:"inner"},[o("ul",[o("li",[o("router-link",{attrs:{to:"/about",tag:"span"}},[t._v("회사 소개")])],1),o("li",[o("router-link",{attrs:{to:"/product",tag:"span"}},[t._v("제품 소개")]),o("div",{staticClass:"sub_menu"},[o("router-link",{attrs:{to:"/product/pro",tag:"p"}},[t._v("Win-Win Pro")]),o("router-link",{attrs:{to:"/product/plus",tag:"p"}},[t._v("Win-Win Pro"),o("sup",[t._v("+")])]),o("router-link",{attrs:{to:"/product/pos",tag:"p"}},[t._v("Win-Win 포스")]),o("router-link",{staticClass:"mini",attrs:{to:"/board/qna",tag:"p"}},[t._v("제품 QnA")])],1)],1),o("li",[o("router-link",{attrs:{to:"/information",tag:"span"}},[t._v("정보 공유")]),o("div",{staticClass:"hidden_menu"},[o("router-link",{attrs:{to:"/information/info3",tag:"p"}},[t._v("정보 동영상")]),o("router-link",{attrs:{to:"/information/info2",tag:"p"}},[t._v("농업계 소식")]),o("router-link",{attrs:{to:"/information/info4",tag:"p"}},[t._v("농자재 소식")]),o("p",{attrs:{onclick:"alert('서비스 준비중입니다.')"}},[t._v("병충해 알림")])],1)],1),o("li",[o("router-link",{attrs:{to:"/board",tag:"span"}},[t._v("고객 지원 센터")]),o("div",{staticClass:"sub_menu"},[o("router-link",{attrs:{to:"/board/faq",tag:"p"}},[t._v("자주하는 질문")]),o("router-link",{attrs:{to:"/board/qna",tag:"p"}},[t._v("묻고 답하기")]),o("router-link",{attrs:{to:"/board/support",tag:"p"}},[t._v("고객지원센터")])],1)],1),o("li",[t._v("팜카페")])])])]):t._e()])},b=[],_={props:["show"]},w=_,k=(o("dc08"),o("2877")),x=Object(k["a"])(w,g,b,!1,null,null,null),q=x.exports,y={components:{MoNav:q},data:function(){return{headerActive:!1,moNav:!1}},watch:{$route:function(t,e){this.moNav=!1}},methods:{MoNavOpen:function(){0==this.moNav?this.moNav=!0:this.moNav=!1}}},z=y,C=(o("13b0"),Object(k["a"])(z,h,v,!1,null,null,null)),N=C.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"logos wrap"},[n("Carousel",{attrs:{"per-page-custom":[[1200,5],[1024,4],[767,3]],loop:!0,autoplay:!0,autoplayTimeout:3500}},t._l(t.footerSites,(function(t){return n("Slide",{key:t.idx},[n("div",[n("a",{attrs:{href:t.url,target:"blank"}},[n("img",{attrs:{src:t.logo}})])])])})),1)],1),n("div",{staticClass:"foot"},[n("img",{staticClass:"logo",attrs:{src:o("c97f")}}),n("ul",[n("router-link",{attrs:{to:"/about",tag:"li"}},[t._v("회사소개")]),n("router-link",{attrs:{to:"/product",tag:"li"}},[t._v("제품소개")]),n("router-link",{attrs:{to:"/information",tag:"li"}},[t._v("정보공유")]),n("router-link",{attrs:{to:"/board/faq/all",tag:"li"}},[t._v("고객지원센터")]),t._m(0),n("li",[t._v("팜카페")])],1),t._m(1),t._m(2),t._m(3)])])},E=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("a",{attrs:{href:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8.pdf",target:"blank"}},[t._v("개인정보처리방침")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("span",[t._v("대표:")]),t._v(" 이태권 "),o("span",[t._v("주소:")]),t._v(" 서울 특별시 강서구 마곡 중앙6로 40 718호")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("span",[t._v("사업자등록번호:")]),t._v(" 605-87-01348")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("span",[t._v("전화번호:")]),t._v(" 1544-6301 , 02-6959-8161 "),o("span",[t._v("이메일:")]),t._v(" woosungsoft@naver.com")])}],P=o("ade3"),$=o("40cf"),D=o.n($),O={components:{Carousel:$["Carousel"],Slide:$["Slide"]},data:function(){return{footerSites:[{idx:0,name:"포유 인포택",url:"http://foryou.inetpia.re.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/logo11.png"},{idx:1,name:"경농",url:"http://www.knco.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/kn.png"},{idx:2,name:"농협 캐미컬",url:"http://www.nhchemical.com/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/nh.png"},{idx:3,name:"동방아그로",url:"http://www.dongbangagro.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/db.png"},{idx:4,name:"bayer",url:"https://www.bayer.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/ba.png"},Object(P["a"])({idx:5,name:"성보화학",url:"http://www.sbcc.kr/",logo:"image/footer/logo5.png"},"logo","https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/sb.png"),{idx:6,name:"syngenta",url:"https://www.syngenta.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/sy.png"},{idx:7,name:"인바이오",url:"http://www.enbio.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/in.png"},{idx:8,name:"팜한농",url:"https://www.farmhannong.com/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/fh.png"},{idx:9,name:"한국삼공",url:"http://www.30agro.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/hs.png"},{idx:10,name:"한얼사이언스",url:"http://www.hescience.co.kr/",logo:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/com_logo/has.png"}]}}},L=O,j=(o("87d2"),Object(k["a"])(L,A,E,!1,null,null,null)),I=j.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget"},[t._m(0),t._m(1),n("div",{staticClass:"teamviewer",on:{click:t.openPopup}},[n("img",{attrs:{src:o("dbef")}}),t._m(2)]),t._m(3),t.show?n("ContactModal",{on:{child:t.PopupClose}}):t._e()],1)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kakao"},[n("a",{attrs:{href:"http://pf.kakao.com/_Wxkxhnxb/chat",target:"blank"}},[n("img",{attrs:{src:o("7ce1")}}),n("p",[t._v("플러스친구")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teamviewer"},[n("a",{attrs:{href:"https://woosung.s3.ap-northeast-2.amazonaws.com/default/TeamViewer.exe",download:""}},[n("img",{attrs:{src:o("490e")}}),n("p",[t._v("원격 지원")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("a",{attrs:{href:"tel:02-6959-8161"}},[t._v("상담신청")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"phone"},[n("img",{attrs:{src:o("c7cf")}}),n("div",[n("p",[n("a",{attrs:{href:"tel:02-6959-8161"}},[t._v("02-6959-8161")])]),n("p",[n("a",{attrs:{href:"tel:1544-6301"}},[t._v("1544-6301")])])])])}],M=o("5eb3"),B={components:{ContactModal:M["a"]},data:function(){return{show:!1}},methods:{openPopup:function(){return this.show=!0},PopupClose:function(t){return this.show=t}}},T=B,H=(o("91ef"),Object(k["a"])(T,S,W,!1,null,null,null)),F=H.exports,Y={components:{AppHeader:N,AppFooter:I,AppWidget:F},metaInfo:function(){return{title:"우성소프트",meta:[{name:"author",content:"woosung"},{name:"keyword",content:"PLS, pls 판매기록, 우성소프트,우성컴퓨터, 농약관리, 작물보호제, 농약판매기록의무화, 농약판매전자기록, \n        농약허용물질목록관리제도, 농약허용기준강화제도, 농촌진흥청, 농진청, 농약판매업, 농약판매관리, 농약재고관리"},{name:"description",content:"PLS 판매기록 우성소프트 우성컴퓨터, 농약안전정보시스템 연동, 농자재판매상 전용 판매관리프로그램, 포스 시스템 구축 , PLS 농약검색"},{property:"og:title",content:"우성소프트",vmid:"og:title"},{property:"og:description",content:"PLS 판매기록, 농자재판매상 전용 판매관리프로그램 포스 시스템 구축",vmid:"og:description"},{property:"og:type",content:"website",vmid:"og:type"},{property:"og:url",content:"http://www.wssw.kr",vmid:"og:url"},{property:"og:image",content:"http://www.wssw.kr/og.jpg",vmid:"og:image"}],link:[{rel:"canonical",href:"http://www.wssw.kr"}]}}},J=Y,Q=Object(k["a"])(J,d,f,!1,null,null,null),K=Q.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("ul",[o("li",{staticClass:"btn_page",class:{btn_active:t.prev},on:{click:t.PevPage}},[t._v(" 이전 ")]),t._l(t.NumberLength,(function(e){return e<t.limit&&t.limit-5<e+1?o("li",{key:e,class:{active:t.Active==e},on:{click:function(o){return t.pageNumber(e)}}},[t._v(t._s(e))]):t._e()})),o("li",{staticClass:"btn_page",class:{btn_active:t.next},on:{click:function(e){return t.NextPage()}}},[t._v(" 다음 ")])],2)])},V=[],G=(o("a9e3"),{props:["dataLength","standard"],data:function(){return{Active:1,prev:!1,next:"",limit:"6",NumberLength:null}},created:function(){var t=Number(this.$route.params.page);this.pageNumber(1),this.$route.params.page>5&&(this.limit=10*Math.round(t/10))},mounted:function(){var t=Number(this.standard);this.NumberLength=Math.round(this.dataLength/t)+1,this.prev=this.$route.params.page>5,this.next=this.limit<this.NumberLength},watch:{$route:function(t,e){this.pageNumber(1)},dataLength:function(){var t=Number(this.standard);this.prev=this.$route.params.page>5,this.next=this.limit<this.NumberLength,this.NumberLength=this.dataLength>15?Math.round(this.dataLength/t)+1:Math.round(this.dataLength/t)}},methods:{pageNumber:function(t){var e=Number(t);Number(this.standard);this.Active=e;this.$emit("child",{page:e})},NextPage:function(){if(this.next){var t=Number(this.limit);this.pageNumber(t),this.limit=t+=5,this.prev=!0}},PevPage:function(){if(this.prev){var t=Number(this.limit);this.limit=t-=5,this.pageNumber(this.limit-1)}}}}),R=G,X=(o("1e12"),Object(k["a"])(R,U,V,!1,null,null,null)),Z=X.exports,tt=o("119b");n["a"].use(o("395c")),n["a"].use(tt["a"].Adsense),n["a"].use(tt["a"].InArticleAdsense),n["a"].use(tt["a"].InFeedAdsense),n["a"].config.productionTip=!1,n["a"].use(a["a"]),n["a"].use(D.a),n["a"].component("list-number",Z),new n["a"]({router:m,render:function(t){return t(K)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"5eb3":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"popup contact"},[o("div",{staticClass:"contact_box"},[o("h2",[t._v("상담 신청")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.write,expression:"InsertData.write"}],attrs:{type:"text",placeholder:"신청자"},domProps:{value:t.InsertData.write},on:{input:function(e){e.target.composing||t.$set(t.InsertData,"write",e.target.value)}}}),o("select",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.desc,expression:"InsertData.desc"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.InsertData,"desc",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("상담 내용")]),t._l(t.cates,(function(e,n){return o("option",{key:n,domProps:{value:e}},[t._v(" "+t._s(e))])}))],2),o("input",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.contact,expression:"InsertData.contact"}],attrs:{type:"text",placeholder:"연락처"},domProps:{value:t.InsertData.contact},on:{input:function(e){e.target.composing||t.$set(t.InsertData,"contact",e.target.value)}}}),t._m(0),o("div",{staticClass:"checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox",id:"checkbox_1"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var o=t.checked,n=e.target,a=!!n.checked;if(Array.isArray(o)){var r=null,i=t._i(o,r);n.checked?i<0&&(t.checked=o.concat([r])):i>-1&&(t.checked=o.slice(0,i).concat(o.slice(i+1)))}else t.checked=a}}}),o("label",{attrs:{for:"checkbox_1"}},[t._v("개인정보수집 및 이용에 동의합니다.")])]),o("div",{staticClass:"btns"},[o("div",{staticClass:"btn t_blue",on:{click:t.postData}},[t._v("상담신청하기")]),o("div",{staticClass:"btn t_red",on:{click:t.popupclose}},[t._v("닫기")])])])])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p_box"},[o("p",[t._v("우성소프트 개인정보를 중요시 하며 정보통신망 이용촉진 및 정보보호에 관한 법률을 준수하고 있습니다.")]),o("ol",[o("li",[t._v(" 개인정보의 수집목적 "),o("br"),t._v(" 회사는 수집한 개인정보를 상담 문의 목적을 위해 활용합니다. ")]),o("li",[t._v(" 수집하는 개인정보 항목 "),o("br"),t._v(" 회사는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. "),o("br"),t._v(" 수집항목 : 이름, 이메일주소, 휴대폰번호, 전화번호, 그 외 개인이 직접 입력한 내용 ")]),o("li",[t._v(" 수집하는 개인정보의 처리 및 보존기간"),o("br"),t._v(" 회사는 개인정보의 처리목적이 달성될 때까지 개인정보를 보유하고, 목적이 달성된 후에는 지체없이 파기합니다. "),o("br"),t._v(" 다만, 사전동의를 받은 경우 또는 관련 법규에 의하여 보존 필요성이 있는 경우에는 보존할 수 있습니다. ")]),o("li",[t._v(" 동의 거부 권리 및 동의 거부 시 불이익"),o("br"),t._v(" 고객은 본 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용에 제한이 있을 수있습니다. ")])])])}],r={data:function(){return{checked:!1,cates:["Win-Win Pro","결제 연동","Win-Win 포스","기타"],InsertData:{mode:"insert",cate:"conatct",write:"",contact:"",desc:"",status:"상담 신청",tit:"위젯 온라인 상담 신청",private:!0,password:"woosung",date:this.$moment().format("YYYY-MM-DD")}}},methods:{popupclose:function(){this.$emit("child",!1)},postData:function(){if(0==this.checked)alert("개인정보 수집 및 이용에 동의해주세요");else if(""==this.InsertData.write)alert("사업장 이름을 입력해주세요");else if(""==this.InsertData.contact)alert("연락처를 입력해주세요");else{var t="http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/qna/new";this.$Axios.post(t,this.InsertData).then((function(t){"ok"==t.data.query&&alert("접수되었습니다.")}))}}}},i=r,s=(o("42e4"),o("2877")),c=Object(s["a"])(i,n,a,!1,null,null,null);e["a"]=c.exports},"614c":function(t,e,o){},"796e":function(t,e,o){},"7ce1":function(t,e,o){t.exports=o.p+"img/kakao.83a9d471.png"},"87d2":function(t,e,o){"use strict";var n=o("36ce"),a=o.n(n);a.a},"91ef":function(t,e,o){"use strict";var n=o("4d60"),a=o.n(n);a.a},b256:function(t,e,o){},c7cf:function(t,e,o){t.exports=o.p+"img/phone.4ed2df64.png"},c97f:function(t,e,o){t.exports=o.p+"img/logo_w.5586e80f.png"},cf05:function(t,e,o){t.exports=o.p+"img/logo.e47c71f2.png"},dbef:function(t,e,o){t.exports=o.p+"img/consult.2439b586.png"},dc08:function(t,e,o){"use strict";var n=o("1d1e"),a=o.n(n);a.a}});
//# sourceMappingURL=app.6b3d9122.js.map