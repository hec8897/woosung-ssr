(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["qna"],{"2a32":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"section1"},[a("div",{staticClass:"wrap"},[a("h2",[t._v("묻고 답하기")]),a("nav",[t.writeMode?a("div",{staticClass:"btn",on:{click:t.changeMode}},[t._v("문의 게시판")]):t._e(),t.boardMode?a("router-link",{staticClass:"btn",attrs:{tag:"div",to:"qnawrite/"}},[t._v("문의하기")]):t._e()],1),t.boardMode?a("table",[t._m(0),a("tbody",t._l(t.boards,(function(e,n){return n<t.limit&&n>=t.limit-t.Standard?a("router-link",{key:n,attrs:{tag:"tr",to:"zoomqna/"+e.idx}},[a("td",[t._v(t._s(n+1))]),a("td",[t._v(t._s(e.status))]),e.private?a("td",{staticClass:"r_text"},[t._v("비공개 글입니다")]):a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.writer))]),a("td",[t._v(t._s(t.$moment(e.date).format("YYYY-MM-DD")))])]):t._e()})),1)]):t._e(),a("list-number",{attrs:{dataLength:t.boards.length,standard:t.Standard},on:{child:t.parent}})],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v("접수번호")]),a("td",[t._v("상태")]),a("td",[t._v("제목")]),a("td",[t._v("작성자")]),a("td",[t._v("작성일")])])])}],d={metaInfo:function(){return{title:"우성소프트",titleTemplate:"%s | 묻고 답하기",meta:[{name:"description",content:"30년전 우성소프트의 사명(社名)은 우성의 프로그램을 사용하는 모든 고객의 성공을 염원하며 만들어 졌습니다. 30년간 1000개가 넘는 고객사의 선택과 만족, 신뢰를 원동력으로 고객의 성공이 회사의 사명(使命)이 되었습니다."},{name:"keyword",content:"PLS, pls 판매기록, 우성소프트,우성컴퓨터, 지도, 작물보호제, 기업 역량, 회사 연혁"}]}},data:function(){return{login:!1,Standard:15,boardMode:!0,writeMode:!1,file:"",limit:10,start:0,boards:""}},created:function(){var t=this,e="http://ec2-13-124-19-117.ap-northeast-2.compute.amazonaws.com/admin/api/qna";this.$Axios.get(e).then((function(e){t.boards=e.data.result}))},methods:{parent:function(t){this.limit=t.page*this.Standard},changeMode:function(){1==this.boardMode?this.boardMode=!1:this.boardMode=!0,1==this.writeMode?this.writeMode=!1:this.writeMode=!0}}},r=d,o=(a("d339"),a("2877")),s=Object(o["a"])(r,n,i,!1,null,null,null);e["default"]=s.exports},"7ff8":function(t,e,a){},d339:function(t,e,a){"use strict";var n=a("7ff8"),i=a.n(n);i.a}}]);
//# sourceMappingURL=qna.1416b16b.js.map