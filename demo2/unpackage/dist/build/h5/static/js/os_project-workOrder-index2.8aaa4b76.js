(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["os_project-workOrder-index2"],{"22ec":function(t,i,s){var a=s("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contaier[data-v-441dbc2c]{background-color:#f0f2f6}.cardBox[data-v-441dbc2c]{width:%?680?%;background-color:#fff;border-radius:%?10?%;padding:%?20?% %?25?%;margin:%?30?% auto}.cardBox .cardTitle[data-v-441dbc2c]{color:#000;font-size:%?34?%;font-weight:500}.fgLine[data-v-441dbc2c]{width:100%;height:1px;background-color:#ddd;margin:%?20?% auto}.cu-list.menu > .cu-item[data-v-441dbc2c]{padding:0!important;min-height:%?25?%;margin-top:%?16?%!important}.cu-list + .cu-list[data-v-441dbc2c]{margin:0!important}.cu-list.menu > .cu-item .content[data-v-441dbc2c]{font-size:%?28?%!important}.cu-list.menu > .cu-item[data-v-441dbc2c]:after{border:none}.cu-timeline > .cu-item[data-v-441dbc2c]::after{background-color:#1cbbb4}.bottomBox[data-v-441dbc2c]{width:%?750?%;height:%?160?%;background-color:#fff;position:fixed;bottom:0;box-shadow:0 %?-8?% 4px #f2f2f2}.bottomBox .bottomBtn[data-v-441dbc2c]{width:90%;height:%?72?%;line-height:%?72?%;margin:%?20?% auto;border-radius:%?10?%;overflow:hidden;display:flex;justify-content:space-around}.bottomBox .bottomBtn uni-view[data-v-441dbc2c]{width:50%;text-align:center;color:#fff}.bottomBox .bottomBtn .noBtn[data-v-441dbc2c]{background-color:#b6d5ff}.bottomBox .bottomBtn .yesBtn[data-v-441dbc2c]{background-color:#1378ff}',""]),t.exports=i},"3d03":function(t,i,s){"use strict";s.r(i);var a=s("8f98"),e=s.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return a[t]}))}(n);i["default"]=e.a},"8f98":function(t,i,s){"use strict";s("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{ordersList:[{title:"计划编号：",content:"20201061638848"},{title:"发起部门：",content:"工程部-李富贵"},{title:"发起时间：",content:"2020-06-16 13:33:13"},{title:"收货人：",content:"技术部-常峰"}],plansList:[{title:"32#公寓外墙浇筑采购计划",supplier:"佛山市金鸿混凝土有限公司",supplyTime:"2021-06-21 10:33:12",c30:"20m³",c35:"15m³",total:"35m³",position:"承台"}]}},methods:{goIndex3:function(){uni.navigateTo({url:"index3"})}}};i.default=a},bdce:function(t,i,s){"use strict";s.r(i);var a=s("ce5f"),e=s("3d03");for(var n in e)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return e[t]}))}(n);s("dd4d");var c=s("f0c5"),v=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"441dbc2c",null,!1,a["a"],void 0);i["default"]=v.exports},ce5f:function(t,i,s){"use strict";s.d(i,"b",(function(){return a})),s.d(i,"c",(function(){return e})),s.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"contaier"},[s("v-uni-view",{staticClass:"cardBox"},[s("v-uni-view",{staticClass:"cardTitle"},[t._v("计划信息")]),s("v-uni-view",{staticClass:"fgLine"}),t._l(t.ordersList,(function(i,a){return s("v-uni-view",{key:a,staticClass:"cu-list menu"},[s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(i.title))])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-balck text-df"},[t._v(t._s(i.content))])],1)],1)],1)}))],2),t._l(t.plansList,(function(i,a){return s("v-uni-view",{key:a,staticClass:"cardBox"},[s("v-uni-view",{staticClass:"cardTitle"},[t._v(t._s(i.title))]),s("v-uni-view",{staticClass:"fgLine"}),s("v-uni-view",{staticClass:"cu-list menu"},[s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("供应商单位：")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-balck text-df"},[t._v(t._s(i.supplier))])],1)],1),s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("要求供应时间：")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-balck text-df"},[t._v(t._s(i.supplyTime))])],1)],1),s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("普通混凝土C30：")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-balck text-df"},[t._v(t._s(i.c30))])],1)],1),s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("普通混凝土C35：")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-balck text-df"},[t._v(t._s(i.c35))])],1)],1),s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("总计预算量：")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-balck text-df"},[t._v(t._s(i.total))])],1)],1),s("v-uni-view",{staticClass:"cu-item"},[s("v-uni-view",{staticClass:"content"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("计划浇筑部位：")])],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-balck text-df"},[t._v(t._s(i.position))])],1)],1)],1)],1)})),s("v-uni-view",{staticClass:"cardBox"},[s("v-uni-view",{staticClass:"cardTitle"},[t._v("审批流程")]),s("v-uni-view",{staticClass:"fgLine"}),s("v-uni-view",{staticClass:"cu-timeline"},[s("v-uni-view",{staticClass:"cu-time"},[t._v("发起申请")]),s("v-uni-view",{staticClass:"cu-item text-blue"},[s("v-uni-view",{staticClass:"margin-bottom-xs"},[s("v-uni-text",{staticClass:"text-black"},[t._v("工程部-李富贵")])],1),s("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("2021/05/16 12:33:31")])],1),s("v-uni-view",{staticClass:"cu-time"},[t._v("审批人")]),s("v-uni-view",{staticClass:"cu-item text-blue"},[s("v-uni-view",{staticClass:"margin-bottom-xs"},[s("v-uni-text",{staticClass:"text-black"},[t._v("工程部-李富贵")]),s("v-uni-view",{staticClass:"cu-tag bg-green sm margin-left-xs"},[t._v("已通过")])],1),s("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("2021/05/16 12:33:31")])],1),s("v-uni-view",{staticClass:"cu-time"},[t._v("审批人")]),s("v-uni-view",{staticClass:"cu-item text-blue"},[s("v-uni-view",{staticClass:"margin-bottom-xs"},[s("v-uni-text",{staticClass:"text-black"},[t._v("项目经理-王亮")]),s("v-uni-view",{staticClass:"cu-tag bg-blue sm margin-left-xs"},[t._v("审核中")])],1),s("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("2021/05/16 12:33:31")])],1)],1)],1),s("v-uni-view",{staticClass:"bottomBox"},[s("v-uni-view",{staticClass:"bottomBtn"},[s("v-uni-view",{staticClass:"noBtn"},[t._v("拒绝")]),s("v-uni-view",{staticClass:"yesBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goIndex3()}}},[t._v("同意并填写预算量")])],1)],1),s("v-uni-view",{staticStyle:{width:"1px",height:"200rpx"}})],2)},e=[]},cf88:function(t,i,s){var a=s("22ec");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=s("4f06").default;e("5e2c3e39",a,!0,{sourceMap:!1,shadowMode:!1})},dd4d:function(t,i,s){"use strict";var a=s("cf88"),e=s.n(a);e.a}}]);