(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["qna-zoom"],{"1ad5":function(t,a,s){"use strict";var n=s("64b8"),i=s.n(n);i.a},"394c":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"section1 zoom"},["1"==t.board.private?s("passwordQna",{attrs:{password:t.board.password},on:{child:t.parent}}):s("div",{staticClass:"wrap"},[s("h2",[t._v("묻고 답하기")]),s("div",{staticClass:"zoom_table"},[s("div",{staticClass:"head"},[s("p",[t._v("묻고 답하기 "+t._s(t.board.cate)+" "),s("span",[t._v(" "+t._s(t.$moment(t.board.date).format("YYYY-MM-DD")))])]),s("h4",[t._v(t._s(t.board.title))]),s("p",[t._v("작성자: "+t._s(t.board.writer))])]),s("div",{staticClass:"desc"},[s("p",[t._v(t._s(t.board.desc))]),s("div",{staticClass:"answer"},[s("h3",{staticClass:"b_text"},[t._v("답변")]),null!=t.board.recive?s("textarea",{attrs:{resize:"none",readonly:""},domProps:{innerHTML:t._s(t.board.recive)}}):s("p",[t._v("답변 대기 중 입니다.")])])])]),s("router-link",{staticClass:"btn",attrs:{tag:"div",to:"/board/qna"}},[t._v("목록")])],1)],1)},i=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"login_page wrap"},[s("h2",[t._v("패스워드 입력")]),s("div",{staticClass:"login_inputs"},[s("ul",[s("li",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPassword,expression:"inputPassword"}],attrs:{type:"password",placeholder:"비밀번호를 입력하세요"},domProps:{value:t.inputPassword},on:{input:function(a){a.target.composing||(t.inputPassword=a.target.value)}}})]),s("li",[s("div",{staticClass:"btn",on:{click:t.login}},[t._v("로그인")])])])])])},e=[],r={props:["password"],data:function(){return{inputPassword:""}},methods:{login:function(){this.inputPassword===this.password?this.$emit("child",!0):alert("패스워드가 다릅니다.")}}},d=r,c=(s("ac950"),s("2877")),l=Object(c["a"])(d,o,e,!1,null,null,null),p=l.exports,u={props:["idx"],components:{passwordQna:p},created:function(){var t=this,a=this.idx,s="http://13.124.215.190/admin/api/qna/".concat(a);this.$Axios.post(s,{idx:a}).then((function(a){t.board=a.data.result[0],t.mode="load"}))},data:function(){return{board:{no:0,cate:"",tit:"",desc:"",recive:"",status:"",date:""}}},methods:{parent:function(){this.board.private=0}}},v=u,_=(s("1ad5"),Object(c["a"])(v,n,i,!1,null,null,null));a["default"]=_.exports},"48a3":function(t,a,s){},"64b8":function(t,a,s){},ac950:function(t,a,s){"use strict";var n=s("48a3"),i=s.n(n);i.a}}]);
//# sourceMappingURL=qna-zoom.5d4851d5.js.map