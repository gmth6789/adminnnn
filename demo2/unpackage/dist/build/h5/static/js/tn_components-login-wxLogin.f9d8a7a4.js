(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tn_components-login-wxLogin"],{"1eee":function(t,n,e){"use strict";var i=e("41d7"),o=e.n(i);o.a},2572:function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(e("c122")),i(e("6d51"));var o={data:function(){return{encryptedData:"",phoneIv:""}},onLoad:function(){},methods:{login:function(){uni.getUserProfile({desc:"获取您的微信信息以授权小程序",lang:"zh_CN",success:function(t){console.log(t),uni.login({provider:"weixin",success:function(n){console.log("----1:",n),console.log("----2:",t),uni.navigateBack({delta:1})}})},fail:function(t){console.log(t)}})},goBack:function(){uni.navigateBack({delta:1})}}};n.default=o},"3f1c":function(t,n,e){"use strict";e.r(n);var i=e("2572"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"41d7":function(t,n,e){var i=e("5559");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("5b64101f",i,!0,{sourceMap:!1,shadowMode:!1})},5559:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.mainBox[data-v-9ef51f9a]{height:100vh}.mainBox .logoImg[data-v-9ef51f9a]{width:%?140?%;height:%?140?%;border-radius:50%;position:absolute;left:50%;margin-left:%?-70?%;top:%?170?%;display:block}.mainBox .logoName[data-v-9ef51f9a]{width:%?750?%;position:absolute;left:0;top:%?340?%;text-align:center}.bottom_bg[data-v-9ef51f9a]{width:%?750?%;position:fixed;bottom:0}.bottom_bg uni-image[data-v-9ef51f9a]{width:%?750?%}',""]),t.exports=n},a752:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"mainBox bg-white"},[i("v-uni-view",{staticClass:"text-xxl",staticStyle:{height:"486rpx",position:"relative"}},[i("v-uni-image",{staticClass:"png",staticStyle:{width:"100%",height:"486rpx"},attrs:{src:"https://cdn.zhoukaiwen.com/login_top2.jpg",mode:"widthFix"}}),i("v-uni-text",{staticClass:"cuIcon-back",staticStyle:{position:"absolute",left:"40rpx",top:"100rpx",color:"#000000"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goBack.apply(void 0,arguments)}}}),i("v-uni-image",{staticClass:"logoImg",attrs:{src:e("fb15")}}),i("v-uni-view",{staticClass:"logoName text-white text-bold text-xl"},[t._v("前端铺子")])],1),i("v-uni-view",{staticClass:"padding text-center margin-top-xl"},[i("v-uni-view",{staticClass:"padding-xl radius shadow-warp bg-white margin-top"},[i("v-uni-view",{staticClass:"text-bold text-black text-xl"},[t._v("前端铺子")]),i("v-uni-view",{staticClass:"describe margin-top-sm"},[t._v("这是一段描述，「前端铺子」授权登录页面，UI模仿图鸟UI，感谢作者开源。")]),i("v-uni-button",{staticClass:"margin-top-lg bg-gradual-blue",attrs:{type:"primary",lang:"zh_CN"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.login()}}},[t._v("授权登录")]),i("v-uni-button",{staticClass:"margin-top bg-gradual-red",attrs:{type:"warn",lang:"zh_CN"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goBack()}}},[t._v("我再看看")]),i("v-uni-view",{staticClass:"describe margin-top text-gray"},[t._v("授权信息仅用于测试小程序登录")]),i("v-uni-view",{staticClass:"describe margin-top-xs text-gray"},[t._v("头像和昵称仅用于测试数功能展示")])],1)],1),i("v-uni-view",{staticClass:"bottom_bg"},[i("v-uni-image",{attrs:{src:"https://cdn.zhoukaiwen.com/login_bottom_bg.jpg",mode:"widthFix"}})],1)],1)},o=[]},c122:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("d3b7");var i="https://www.zhoukaiwen.com/",o={baseUrl:i,httpRequest:function(t,n){uni.onNetworkStatusChange((function(t){return t.isConnected||uni.showToast({title:"网络连接不可用！",icon:"none"}),!1}));var e={url:i+t.url,data:n,method:t.method,header:"get"==t.method?{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json; charset=UTF-8"},dataType:"json"},o=new Promise((function(t,n){uni.request(e).then((function(n){t(n[1])})).catch((function(t){n(t)}))}));return o},httpTokenRequest:function(t,n){uni.onNetworkStatusChange((function(t){return t.isConnected||uni.showToast({title:"网络连接不可用！",icon:"none"}),!1}));var e=uni.getStorageSync("token");if(""!=e&&void 0!=e&&null!=e){var o={url:i+t.url,data:n,method:t.method,header:"get"==t.method?{"X-Access-Token":e,"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}:{"X-Access-Token":e,"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json; charset=UTF-8"},dataType:"json"},a=new Promise((function(t,n){uni.request(o).then((function(n){200==n[1].data.code?t(n[1]):5e3==n[1].data.code?(uni.reLaunch({url:"/pages/login/index"}),uni.clearStorageSync()):t(n[1])})).catch((function(t){n(t)}))}));return a}uni.showToast({title:"账号已过期，请重新登录",icon:"none",complete:function(){uni.reLaunch({url:"/pages/login/index"})}})},hadToken:function(){var t=uni.getStorageSync("token");return""!=t&&void 0!=t&&null!=t||(uni.showToast({title:"账号已过期，请重新登录",icon:"none",complete:function(){uni.reLaunch({url:"/pages/login/index"})}}),!1)}};n.default=o},da3b:function(t,n,e){"use strict";e.r(n);var i=e("a752"),o=e("3f1c");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("1eee");var s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"9ef51f9a",null,!1,i["a"],void 0);n["default"]=c.exports},fb15:function(t,n,e){t.exports=e.p+"static/img/logo.437566d1.png"}}]);