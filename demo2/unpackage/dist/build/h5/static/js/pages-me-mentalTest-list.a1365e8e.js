(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-mentalTest-list"],{"2c83":function(t,a,n){var e=n("e064");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("5e9c4b5f",e,!0,{sourceMap:!1,shadowMode:!1})},"4ade":function(t,a,n){"use strict";n.r(a);var e=n("c9aa"),i=n("b842");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(r);n("e0a6");var o=n("f0c5"),s=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"03c79036",null,!1,e["a"],void 0);a["default"]=s.exports},"53d7":function(t,a,n){"use strict";n("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{list:[{name:"技术"},{name:"心理"},{name:"娱乐"},{name:"其他"}],current:0,dataL:{data1:[{id:"1",name:"测测你的web前端技术水平～",num:"31",isAnswer:1}],data2:[{id:"2",name:"[心理测评]国际标准版测试题目",num:"48",isAnswer:1}]}}},onLoad:function(){console.log(this.dataL)},watch:{},methods:{goIndex:function(t){uni.navigateTo({url:"index?mid="+t})},change:function(t){this.current=t}}};a.default=e},b842:function(t,a,n){"use strict";n.r(a);var e=n("53d7"),i=n.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=i.a},c9aa:function(t,a,n){"use strict";n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"warp"},[n("v-uni-view",{staticClass:"status_bar"}),n("v-uni-view",{staticClass:"title b-fontw7"},[t._v("答题测试")]),n("v-uni-view",{staticClass:"nav-box b-card"},[n("v-uni-view",{staticClass:"nav-bar-box"},t._l(t.list,(function(a,e){return n("v-uni-view",{key:e,staticClass:"nav-bar-item",class:{"nav-bar-item-check":e==t.current,"nav-bar-left":0==e&&t.current==e,"nav-bar-center":e>0&&e<t.list.length-1&&t.current==e,"nav-bar-right":e==t.list.length-1&&t.current==e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(e)}}},[n("v-uni-view",{}),n("v-uni-view",{staticStyle:{flex:"1","text-align":"center"}},[n("v-uni-view",{staticClass:"nav-bar-title"},[t._v(t._s(a.name)),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e==t.current,expression:"index == current"}],staticClass:"title-line"})],1)],1),e<t.list.length-1&&e!=t.current&&e!=t.current-1?n("v-uni-view",{staticClass:"nav-bar-line"}):t._e(),n("v-uni-view",{})],1)})),1),n("v-uni-view",{staticClass:"nav-content-box"},[n("v-uni-view",{},[n("v-uni-view",{staticClass:"nav-content-title b-fontw6"},[t._v("「每日更新」Web开发面试题")]),n("v-uni-view",{staticClass:"nav-content-text b-flex-item-cent"},[n("v-uni-text",{staticClass:"b-traiangle"}),n("v-uni-text",[t._v("题目总数")]),n("v-uni-text",{staticClass:"nav-content-line"}),n("v-uni-text",{staticClass:"b-fontw6"},[t._v("25")])],1),n("v-uni-view",{staticClass:"nav-content-text b-flex-item-cent"},[n("v-uni-text",{staticClass:"b-traiangle"}),n("v-uni-text",[t._v("已答数量")]),n("v-uni-text",{staticClass:"nav-content-line"}),n("v-uni-text",{staticClass:"b-fontw6"},[t._v("7")])],1)],1),n("v-uni-view",{},[n("v-uni-view",{staticClass:"img"},[n("v-uni-view",{staticClass:"img-refresh"},[t._v("更换答题")])],1)],1)],1),n("v-uni-view",{staticClass:"nav-btn-box"},[n("v-uni-view",{staticClass:"nav-btn b-fontw6 bg-gradual-blue",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goIndex(1)}}},[t._v("继续答题")])],1)],1),n("v-uni-view",{staticClass:"bannerBox"},[n("v-uni-image",{attrs:{mode:"widthFix",src:"http://cdn.zhoukaiwen.com/Banner4.jpg"}})],1),n("v-uni-view",[n("v-uni-view",{staticClass:"cu-bar bg-white margin-top-xs"},[n("v-uni-view",{staticClass:"action sub-title"},[n("v-uni-text",{staticClass:"text-xl text-bold text-blue text-shadow"},[t._v("技术测试")]),n("v-uni-text",{staticClass:"text-ABC text-blue"},[t._v("psychology")])],1)],1),t._l(t.dataL.data1,(function(a,e){return n("v-uni-view",{key:e,staticClass:"cu-list menu sm-border margin-bottom",staticStyle:{"box-shadow":"0 2px 8px rgba(0,0,0,0.15)"}},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content padding-tb-sm"},[n("v-uni-view",{staticClass:"text-lg"},[n("v-uni-text",{staticClass:"cuIcon-text text-blue margin-right-xs"}),t._v(t._s(a.name))],1),n("v-uni-view",{staticClass:"text-gray text-df margin-top-xs"},[n("v-uni-text",{staticClass:"cuIcon-hotfill margin-right-xs"}),t._v("已有"+t._s(a.num)+"位小伙伴已答题")],1)],1),n("v-uni-view",{staticClass:"action"},[2!=a.isAnswer?n("v-uni-button",{staticClass:"cu-btn round bg-gradual-blue shadow",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goIndex(a.id)}}},[t._v("前往答题")]):t._e(),2==a.isAnswer?n("v-uni-button",{staticClass:"cu-btn round bg-gradual-orange shadow",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goIndex(a.id)}}},[t._v("已经答题")]):t._e()],1)],1)],1)})),n("v-uni-view",{staticClass:"cu-bar bg-white margin-top-xs"},[n("v-uni-view",{staticClass:"action sub-title"},[n("v-uni-text",{staticClass:"text-xl text-bold text-blue text-shadow"},[t._v("其他测试")]),n("v-uni-text",{staticClass:"text-ABC text-blue"},[t._v("psychology")])],1)],1),t._l(t.dataL.data2,(function(a,e){return n("v-uni-view",{key:e,staticClass:"cu-list menu sm-border margin-bottom",staticStyle:{"box-shadow":"0 2px 8px rgba(0,0,0,0.15)"}},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content padding-tb-sm"},[n("v-uni-view",{staticClass:"text-lg"},[n("v-uni-text",{staticClass:"cuIcon-text text-blue margin-right-xs"}),t._v(t._s(a.name))],1),n("v-uni-view",{staticClass:"text-gray text-df margin-top-xs"},[n("v-uni-text",{staticClass:"cuIcon-hotfill margin-right-xs"}),t._v("已有"+t._s(a.num)+"位小伙伴已答题")],1)],1),n("v-uni-view",{staticClass:"action"},[2!=a.isAnswer?n("v-uni-button",{staticClass:"cu-btn round bg-gradual-blue shadow",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goIndex(a.id)}}},[t._v("前往答题")]):t._e(),2==a.isAnswer?n("v-uni-button",{staticClass:"cu-btn round bg-gradual-orange shadow",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goIndex(a.id)}}},[t._v("已经答题")]):t._e()],1)],1)],1)}))],2)],1)},i=[]},e064:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.b-fontw6[data-v-03c79036]{font-weight:600}.b-fontw7[data-v-03c79036]{font-weight:700}.b-card[data-v-03c79036]{background-color:#fefefe;border-radius:%?20?%;box-shadow:%?2?% %?2?% %?4?% #efeef3}.b-traiangle[data-v-03c79036]{display:inline-block;width:%?0?%;height:%?0?%;border-width:%?10?%;border-style:solid;border-color:transparent transparent transparent #5bc5f9;border-radius:%?2?%}.b-flex-item-cent[data-v-03c79036]{display:flex;align-items:center}.warp[data-v-03c79036]{color:#404e75;min-height:100vh;background:url(https://zhoukaiwen.com/img/learnImg/background2.jpg) no-repeat;background-size:cover;background-attachment:fixed;padding:%?30?%\r\n  /* 导航栏 */}.warp .status_bar[data-v-03c79036]{width:100%;height:36px}.warp .title[data-v-03c79036]{font-size:%?36?%}.warp .nav-box[data-v-03c79036]{margin-top:%?40?%}.warp .nav-box .nav-prompt-box[data-v-03c79036]{width:100%;position:relative}.warp .nav-box .nav-prompt-box .nav-prompt[data-v-03c79036]{width:calc(100% - %?60?%);position:absolute;top:%?-54?%;font-size:%?28?%;font-weight:600;background-color:#4cd964;color:#f9f9f9;background-image:linear-gradient(-90deg,#906cf0,#3f5aef);margin:0 %?30?%;border-radius:%?20?%;padding:%?10?% %?20?%}.warp .nav-box .nav-bar-box[data-v-03c79036]{display:flex;align-items:center;justify-content:space-around}.warp .nav-box .nav-bar-box .nav-bar-item[data-v-03c79036]{background-color:#f7f7f9;flex:1;height:%?100?%;font-size:%?28?%;font-weight:600;color:#8d94ae;display:flex;justify-content:center;align-items:center}.warp .nav-box .nav-bar-box .nav-bar-item .nav-bar-line[data-v-03c79036]{width:0;height:%?30?%;border-left:%?2?% solid #d9d9db}.warp .nav-box .nav-bar-box .nav-bar-item[data-v-03c79036]:nth-child(1){border-radius:%?20?% 0 0 0}.warp .nav-box .nav-bar-box .nav-bar-item[data-v-03c79036]:nth-last-child(1){border-radius:0 %?20?% 0 0}.warp .nav-box .nav-bar-box .nav-bar-item .nav-bar-title[data-v-03c79036]{position:relative;height:%?100?%;line-height:%?100?%}.warp .nav-box .nav-bar-box .nav-bar-item .nav-bar-title .title-line[data-v-03c79036]{position:absolute;width:%?30?%;height:%?0?%;bottom:%?2?%;left:calc(50% - %?15?%);border-bottom:%?2?% solid #5fc4fa}.warp .nav-box .nav-bar-box .nav-bar-item .nav-bar-title .nav-bar-title-angle[data-v-03c79036]{position:absolute;width:%?0?%;height:%?0?%;border-width:%?20?%;border-style:solid;border-color:#6660f4 transparent transparent transparent;border-radius:%?2?%;top:%?0?%;left:calc(50% - %?20?%)}.warp .nav-box .nav-bar-box .nav-bar-item-check[data-v-03c79036]{width:calc(25% + %?100?%);color:#54c8fb;background-repeat:no-repeat;background-size:100% 100%}.warp .nav-box .nav-bar-box .nav-bar-left[data-v-03c79036]{background-image:url(https://zhoukaiwen.com/img/learnImg/icon-nav-left.png)}.warp .nav-box .nav-bar-box .nav-bar-center[data-v-03c79036]{background-image:url(https://zhoukaiwen.com/img/learnImg/icon-nav-center.png)}.warp .nav-box .nav-bar-box .nav-bar-right[data-v-03c79036]{background-image:url(https://zhoukaiwen.com/img/learnImg/icon-nav-right.png)}.warp .nav-box .nav-bar-box .nav-bar-item-line[data-v-03c79036]{border-right:%?2?% solid #54c8fb}.warp .nav-box .nav-content-box[data-v-03c79036]{padding:%?30?%;display:flex;justify-content:space-between;align-items:center}.warp .nav-box .nav-content-box .nav-content-title[data-v-03c79036]{font-size:%?28?%;color:#3d4c6d;line-height:%?60?%}.warp .nav-box .nav-content-box .nav-content-text[data-v-03c79036]{font-size:%?24?%;color:#8d93a3;line-height:%?48?%}.warp .nav-box .nav-content-box .nav-content-text .nav-content-line[data-v-03c79036]{display:inline-block;width:0;height:%?16?%;border-left:%?2?% solid #8d93a3;margin:0 %?16?%}.warp .nav-box .nav-content-box .img[data-v-03c79036]{width:%?160?%;height:%?200?%;background-color:#5bc5f9;border-radius:%?10?%;position:relative;overflow:hidden;background-image:url(http://cdn.zhoukaiwen.com/vue.jpg);width:80px;height:100px;background-size:100%;background-repeat:no-repeat}.warp .nav-box .nav-content-box .img .img-refresh[data-v-03c79036]{position:absolute;bottom:0;left:0;width:100%;color:#fff;font-size:%?20?%;padding:%?6?% %?10?%;background-color:rgba(0,0,0,.3);text-align:center}.warp .nav-box .nav-btn-box[data-v-03c79036]{padding:%?30?%}.warp .nav-box .nav-btn-box .nav-btn[data-v-03c79036]{width:100%;height:%?80?%;border-radius:%?100?%;text-align:center;line-height:%?80?%;color:#fffafe;font-size:%?28?%;box-shadow:%?2?% %?2?% %?2?% #efeef3}.bannerBox[data-v-03c79036]{width:100%;margin:%?30?% 0 %?25?% 0}.bannerBox uni-image[data-v-03c79036]{width:100%;border-radius:%?12?%}',""]),t.exports=a},e0a6:function(t,a,n){"use strict";var e=n("2c83"),i=n.n(e);i.a}}]);