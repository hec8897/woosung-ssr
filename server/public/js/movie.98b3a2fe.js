(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["movie"],{"1dde":function(t,e,n){var i=n("d039"),o=n("b622"),r=n("2d00"),a=o("species");t.exports=function(t){return r>=51||!i((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"28d4":function(t,e,n){"use strict";var i=n("c7c8"),o=n.n(i);o.a},"3b7c":function(t,e,n){},"4de4":function(t,e,n){"use strict";var i=n("23e7"),o=n("b727").filter,r=n("1dde"),a=n("ae40"),s=r("filter"),c=a("filter");i({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var i=n("861d"),o=n("e8b5"),r=n("b622"),a=r("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6acc":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"movie wrap"},[n("h2",[t._v("정보 동영상")]),n("ul",{staticClass:"nav"},[n("li",{class:{active:"전체"==t.mode},on:{click:function(e){return t.CateFilter("전체")}}},[t._v(" 전체 ")]),t._l(t.midCates,(function(e){return n("li",{key:e.idx,class:{active:t.mode==e},on:{click:function(n){return t.CateFilter(e)}}},[t._v(" "+t._s(e)+" ")])}))],2),n("ul",{staticClass:"content"},[void 0==t.filters[0]?n("li",{staticClass:"none"},[n("p",[t._v("등록된 영상이 없습니다.")])]):t._e(),t._l(t.filters,(function(e,i){return i<t.limit&&i>=t.limit-t.Standard?n("li",{key:i},[n("div",{staticClass:"thumbnail",on:{click:function(n){return t.youtubeBoxShow(e)}}},[n("img",{attrs:{src:"https://i.ytimg.com/vi/"+e.youtubeId+"/0.jpg"}}),t._v(" 썸네일 이미지 ")]),n("div",{staticClass:"text-box"},[n("h3",{on:{click:function(n){return t.youtubeBoxShow(e)}}},[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.desc))]),n("p",{staticClass:"date"},[t._v("게시일 : "+t._s(t.$moment(e.date).format("YYYY-MM-DD")))])])]):t._e()}))],2),n("list-number",{attrs:{dataLength:t.filters.length,standard:t.Standard},on:{child:t.parent}}),n("MoviePopup",{attrs:{show:t.show,data:t.popupData},on:{child:t.closePopup}})],1)},o=[],r=(n("4de4"),n("c18e")),a={components:{MoviePopup:r["a"]},metaInfo:function(){return{title:"우성소프트",titleTemplate:"%s | 정보 동영상",meta:[{name:"description",content:"30년전 우성소프트의 사명(社名)은 우성의 프로그램을 사용하는 모든 고객의 성공을 염원하며 만들어 졌습니다. 30년간 1000개가 넘는 고객사의 선택과 만족, 신뢰를 원동력으로 고객의 성공이 회사의 사명(使命)이 되었습니다."},{name:"keyword",content:"PLS, pls 판매기록, 우성소프트, 우성컴퓨터, 작물보호제, 기업 역량, 회사 연혁"}]}},data:function(){return{mode:"전체",filters:"",movies:"",start:0,limit:10,Standard:10,midCates:["우성소프트","농사 정보","농약 정보","농진청 유튜브","유용한 정보"],show:!1,popupData:""}},watch:{},created:function(){var t=this,e="http://13.124.215.190/admin/api/youtube_data";this.$Axios.get(e).then((function(e){t.movies=e.data.result.filter((function(t){return 1==t.private})),t.mode="전체",t.filters=t.movies}))},methods:{parent:function(t){this.limit=t.page*this.Standard},closePopup:function(t){this.show=t},youtubeBoxShow:function(t){this.show=!0,this.popupData=t},CateFilter:function(t){"전체"==t?(this.mode="전체",this.filters=this.movies):(this.mode=t,this.filters=this.movies.filter((function(e){return e.cate==t})))}}},s=a,c=(n("28d4"),n("2877")),u=Object(c["a"])(s,i,o,!1,null,null,null);e["default"]=u.exports},ae40:function(t,e,n){var i=n("83ab"),o=n("d039"),r=n("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(r(s,t))return s[t];e||(e={});var n=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,f=r(e,1)?e[1]:void 0;return s[t]=!!n&&!o((function(){if(u&&!i)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,f)}))}},b727:function(t,e,n){var i=n("0366"),o=n("44ad"),r=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(p,h,v,m){for(var b,w,y=r(p),_=o(y),C=i(h,v,3),x=a(_.length),g=0,S=m||s,k=e?S(p,x):n?S(p,0):void 0;x>g;g++)if((d||g in _)&&(b=_[g],w=C(b,g,y),t))if(e)k[g]=w;else if(w)switch(t){case 3:return!0;case 5:return b;case 6:return g;case 2:c.call(k,b)}else if(l)return!1;return f?-1:u||l?l:k}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c18e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"popup",on:{click:t.closePopup}},[n("div",{staticClass:"youtube_popup"},[n("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube.com/embed/"+t.data.youtubeId,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]):t._e()},o=[],r={props:["data","show"],methods:{closePopup:function(){this.$emit("child",!1)}}},a=r,s=(n("c89b"),n("2877")),c=Object(s["a"])(a,i,o,!1,null,null,null);e["a"]=c.exports},c7c8:function(t,e,n){},c89b:function(t,e,n){"use strict";var i=n("3b7c"),o=n.n(i);o.a},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=movie.98b3a2fe.js.map