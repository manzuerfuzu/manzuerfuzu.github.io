(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-denglu-denglu"],{4438:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("ff36");i.initialize("d120dedc62382103","201068");var o={data:function(){return{username:"",password:"",ts:"",wx:"点击复制"}},onLoad:function(){},methods:{wxdenglu:function(){var n=this;i.User.auth().then((function(t){console.log(t),console.log("一键登陆成功"),n.ts="微信登录成功"})).catch((function(n){console.log(n)})),console.log("App Launch")},denglu:function(){var n=this;console.log(this.username),console.log(this.password);var t=this.username,e=this.password;i.User.login(t,e).then((function(t){console.log(t);var e=i.User.current();console.log(e.objectId);var o=i.Query("_User");o.get(e.objectId).then((function(t){console.log("成功"),console.log("登录成功"),n.ts="登录成功"})).catch((function(n){console.log(n)}))})).catch((function(n){console.log(n)}))},fuzhi:function(){var n=this;uni.setClipboardData({data:"2926027350",success:function(){console.log("wx已复制"),n.wx="微信已复制"}})},appwxdenglu:function(n){var t=n.currentTarget.dataset.logintype;uni.login({provider:t,success:function(n){uni.getUserInfo({provider:t,success:function(n){console.log(JSON.stringify(n))}})}})}}};t.default=o},4625:function(n,t,e){"use strict";e.r(t);var i=e("4438"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a},7225:function(n,t,e){"use strict";e.r(t);var i=e("89d0"),o=e("4625");for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("afa8");var s,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"79e1fd54",null,!1,i["a"],s);t["default"]=c.exports},"896e":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,"uni-page-body[data-v-79e1fd54]{height:100%;background-color:#ffe4e1;font-size:18px;font-weight:700}.content[data-v-79e1fd54]{background-color:#9400d3;margin:%?30?% %?30?%;padding:%?30?%;color:#ff0}.denglu[data-v-79e1fd54]{margin:%?80?% %?50?%}.username-iuput[data-v-79e1fd54]{\n\t/* display: block; */background-color:#fff;margin:%?30?% %?30?%;padding:%?5?% %?20?%;font-size:30px;height:50px;color:indigo;border:1px solid indigo;border-radius:18px}.password-iuput[data-v-79e1fd54]{\n\t/* display: block; */background-color:#fff;margin:%?30?% %?30?%;padding:%?5?% %?20?%;font-size:30px;height:50px;color:indigo;border:1px solid indigo;border-radius:18px}\n\n/* 登录按钮 */.btn uni-button[data-v-79e1fd54]{font-weight:1000;margin:30px 0;background-color:#ff0;color:#8a2be2}.ts-view uni-text[data-v-79e1fd54]{text-align:center;font-size:30px;font-family:LiSu,楷体,楷体_GB2312}.ts-view[data-v-79e1fd54]{margin:10px %?30?%}.me[data-v-79e1fd54]{font-size:15px;padding:5px}.wx[data-v-79e1fd54]{\n\t/* background-color: #F0AD4E; */font-weight:700}.me[data-v-79e1fd54]{color:indigo}.fuzhi[data-v-79e1fd54]{background-color:#ffdc00;font-weight:700;border:1px solid indigo;margin-left:10px}.audio-control[data-v-79e1fd54]{text-align:center}.bottom[data-v-79e1fd54]{height:55px}body.?%PAGE?%[data-v-79e1fd54]{background-color:#ffe4e1}",""]),n.exports=t},"89d0":function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"denglu"},[e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-view",{},[n._v("用户名")]),e("v-uni-input",{staticClass:"username-iuput",model:{value:n.username,callback:function(t){n.username=t},expression:"username"}})],1),e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-view",{},[n._v("密码")]),e("v-uni-input",{staticClass:"password-iuput",attrs:{password:"true"},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}})],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.denglu.apply(void 0,arguments)}}},[n._v("登录")])],1),e("v-uni-view",{staticClass:"ts-view"},[e("v-uni-text",{staticClass:"ts"},[n._v(n._s(n.ts))])],1),e("v-uni-view",{staticClass:"wx-denglu-view"},[e("v-uni-button",{attrs:{type:"warn",size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.wxdenglu()}}},[n._v("微信登录")])],1),e("v-uni-view",{staticClass:"wx-denglu-view"},[e("v-uni-button",{attrs:{type:"warn",size:"mini","data-logintype":"weixin"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.appwxdenglu()}}},[n._v("微信-登录")])],1)],1),e("v-uni-view",{staticClass:"me",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.fuzhi.apply(void 0,arguments)}}},[e("v-uni-label",{attrs:{selectable:"true"}},[n._v("感恩遇见")]),e("v-uni-view",[n._v("微信号:"),e("v-uni-label",{staticClass:"wx"},[n._v("2926027350")]),e("v-uni-label",{staticClass:"fuzhi"},[n._v(n._s(n.wx))])],1)],1),e("v-uni-view",{staticClass:"bottom"})],1)},a=[]},aac3:function(n,t,e){var i=e("896e");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("4f06").default;o("776d52e0",i,!0,{sourceMap:!1,shadowMode:!1})},afa8:function(n,t,e){"use strict";var i=e("aac3"),o=e.n(i);o.a}}]);