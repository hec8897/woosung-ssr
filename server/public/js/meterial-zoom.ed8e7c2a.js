(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["meterial-zoom"],{"1dde":function(t,n,o){var e=o("d039"),r=o("b622"),a=o("2d00"),i=r("species");t.exports=function(t){return a>=51||!e((function(){var n=[],o=n.constructor={};return o[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"4a56":function(t,n,o){"use strict";var e=o("68df"),r=o.n(e);r.a},"65f0":function(t,n,o){var e=o("861d"),r=o("e8b5"),a=o("b622"),i=a("species");t.exports=function(t,n){var o;return r(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?e(o)&&(o=o[i],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===n?0:n)}},"68df":function(t,n,o){},8418:function(t,n,o){"use strict";var e=o("c04e"),r=o("9bf2"),a=o("5c6c");t.exports=function(t,n,o){var i=e(n);i in t?r.f(t,i,a(0,o)):t[i]=o}},"99af":function(t,n,o){"use strict";var e=o("23e7"),r=o("d039"),a=o("e8b5"),i=o("861d"),c=o("7b0b"),s=o("50c4"),u=o("8418"),f=o("65f0"),d=o("1dde"),l=o("b622"),p=o("2d00"),v=l("isConcatSpreadable"),m=9007199254740991,b="Maximum allowed index exceeded",h=p>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=d("concat"),w=function(t){if(!i(t))return!1;var n=t[v];return void 0!==n?!!n:a(t)},x=!h||!y;e({target:"Array",proto:!0,forced:x},{concat:function(t){var n,o,e,r,a,i=c(this),d=f(i,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(a=-1===n?i:arguments[n],w(a)){if(r=s(a.length),l+r>m)throw TypeError(b);for(o=0;o<r;o++,l++)o in a&&u(d,l,a[o])}else{if(l>=m)throw TypeError(b);u(d,l++,a)}return d.length=l,d}})},a15b:function(t,n,o){"use strict";var e=o("23e7"),r=o("44ad"),a=o("fc6a"),i=o("a640"),c=[].join,s=r!=Object,u=i("join",",");e({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},a640:function(t,n,o){"use strict";var e=o("d039");t.exports=function(t,n){var o=[][t];return!!o&&e((function(){o.call(null,n||function(){throw 1},1)}))}},b0c0:function(t,n,o){var e=o("83ab"),r=o("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,s="name";e&&!(s in a)&&r(a,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},e8b5:function(t,n,o){var e=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},f25a:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{staticClass:"material_view wrap"},[o("div",{staticClass:"head"},[o("h2",[o("span",{staticClass:"sub_tit"},[t._v(t._s(t.content.company))]),t._v(" - "+t._s(t.content.name)+" ")]),o("p",[t._v(t._s(t.content.exp))]),o("img",{attrs:{src:t.content.img}})]),o("div",{staticClass:"body"},[o("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.content.desc)}}),t.content.file?o("div",{staticClass:"file"},[o("a",{attrs:{href:t.content.file,target:"blank"}},[t._v("첨부파일 다운받기")]),o("b-icon",{attrs:{icon:"download"}})],1):t._e()]),o("div",{staticClass:"btns"},[o("router-link",{staticClass:"btn",attrs:{tag:"div",to:"/information/info4"}},[t._v("목록")])],1)])},r=[],a=(o("99af"),o("a15b"),o("b0c0"),{props:["idx"],metaInfo:function(){return{title:"우성소프트",titleTemplate:"%s | ".concat(this.content.company," - ").concat(this.content.name),meta:[{name:"description",content:"30년전 우성소프트의 사명(社名)은 우성의 프로그램을 사용하는 모든 고객의 성공을 염원하며 만들어 졌습니다. 30년간 1000개가 넘는 고객사의 선택과 만족, 신뢰를 원동력으로 고객의 성공이 회사의 사명(使命)이 되었습니다."},{name:"keyword",content:"".concat(this.content.name,", PLS, pls 판매기록,경농,농협케미컬,동방아그로,바이엘,성보화학,신젠타,인바이오,함국삼공,팜한농,한얼사이언스")}]}},data:function(){return{content:Array}},created:function(){var t=this;this.$Axios.post("http://13.124.215.190/admin/api/farm_item/zoom",{idx:this.idx}).then((function(n){t.content=n.data.result[0],t.$Axios.post("http://13.124.215.190/admin/api/farm_item/join",{idx:t.content.idx,join:t.content.join+1})}))}}),i=a,c=(o("4a56"),o("2877")),s=Object(c["a"])(i,e,r,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=meterial-zoom.ed8e7c2a.js.map