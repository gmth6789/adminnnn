(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video"],{"74b3":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-7925fc9e]{background-color:#f2f5f9}body.?%PAGE?%[data-v-7925fc9e]{background-color:#f2f5f9}.MainBox[data-v-7925fc9e]{width:%?750?%}.MainBox uni-video[data-v-7925fc9e]{width:%?750?%}.cssBox[data-v-7925fc9e]{padding:%?20?% %?30?%;background-color:#fff;margin-bottom:%?15?%}.rightBox[data-v-7925fc9e]{width:%?150?%;height:100%;position:absolute;right:%?20?%;top:0;text-align:center;line-height:%?120?%;padding:0;background:none}.list_title[data-v-7925fc9e]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;font-size:%?30?%;font-weight:600;color:#333}.list_content[data-v-7925fc9e]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;word-break:break-all;font-size:%?28?%;color:#888}.courseBox[data-v-7925fc9e]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-left:-10px}.courseBox uni-view[data-v-7925fc9e]{width:%?240?%;height:%?58?%;border:%?2?% solid #909399;text-align:center;line-height:%?58?%;-webkit-border-radius:6px;border-radius:%?12?%;margin:%?10?% 0 %?20?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;word-break:break-all;font-size:%?24?%;color:#909399;padding:0 %?6?%}.courseBox .active[data-v-7925fc9e]{border:%?2?% solid #2979ff;background-color:#2979ff;color:#fff}.courseBox[data-v-7925fc9e]::after{content:"";flex:auto}.courseBox > uni-view[data-v-7925fc9e]{margin-left:10px;margin-bottom:10px;width:-webkit-calc((100% - 10px*3)/3);width:calc((100% - 10px*3)/ 3)}uni-button[data-v-7925fc9e]::after{border:none;padding:0}',""]),t.exports=i},"7fa3":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uIcon:e("2d66").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"MainBox"},[e("txv-video",{attrs:{vid:t.videoUrl,playerid:"txv1"}}),e("v-uni-view",{staticClass:"cssBox",staticStyle:{position:"relative"}},[e("v-uni-view",{staticClass:"leftBox"},[e("v-uni-view",{staticClass:"margin-bottom-sm"},[e("v-uni-text",{staticClass:"text-bold text-xl"},[t._v("第一节课·测试数据")])],1),e("v-uni-view",[e("v-uni-view",{staticClass:"fl margin-right text-df text-gray"},[e("u-icon",{staticStyle:{"margin-right":"5rpx"},attrs:{name:"play-circle"}}),e("v-uni-text",[t._v("11.2w")])],1),e("v-uni-view",{staticClass:"fl margin-right text-df text-gray"},[e("u-icon",{staticStyle:{"margin-right":"5rpx"},attrs:{name:"order"}}),e("v-uni-text",[t._v("1852")])],1),e("v-uni-view",{staticClass:"fl margin-right text-df text-gray"},[e("u-icon",{staticStyle:{"margin-right":"6rpx"},attrs:{name:"clock"}}),e("v-uni-text",[t._v("2020-11-18")])],1),e("v-uni-view",{staticStyle:{clear:"both"}})],1)],1),e("v-uni-button",{staticClass:"rightBox",attrs:{"hover-class":"none","open-type":"share"}},[e("u-icon",{attrs:{"label-color":"#2979ff","label-size":"26","margin-top":"12","label-pos":"bottom",label:"分享一下",name:"share",color:"#2979ff",size:"54"}})],1)],1),e("v-uni-view",{staticClass:"cssBox"},[e("v-uni-view",{staticClass:"margin-bottom-sm"},[e("v-uni-text",{staticClass:"text-bold text-lg"},[t._v("简介：")])],1),e("v-uni-text",{staticClass:"text-df"},[t._v("这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频这是一个很有内容的视频")])],1),e("v-uni-view",{staticClass:"cssBox"},[e("v-uni-view",{staticClass:"margin-bottom-sm flex justify-between"},[e("v-uni-text",{staticClass:"text-bold text-lg"},[t._v("选择课程：")]),e("v-uni-text",{staticClass:"text-gray text-df"},[t._v("共5节课/当前播放：第2节")])],1),e("v-uni-view",{staticClass:"courseBox flex justify-around"},[e("v-uni-view",[t._v("第一课 初识uniapp")]),e("v-uni-view",{staticClass:"active"},[t._v("第二课 项目工具及搭建")]),e("v-uni-view",[t._v("第三课 案例分析")]),e("v-uni-view",[t._v("第四课 制作项目")]),e("v-uni-view",[t._v("第五课 打包上线")])],1)],1),e("v-uni-view",{staticClass:"cssBox"},[e("v-uni-view",{staticClass:"margin-bottom-sm"},[e("v-uni-text",{staticClass:"text-bold text-lg"},[t._v("相关推荐")])],1),e("v-uni-view",{staticClass:"cu-card article no-card"},[e("v-uni-view",{staticClass:"cu-item shadow"},[e("v-uni-view",{staticClass:"content",staticStyle:{padding:"0"}},[e("v-uni-image",{attrs:{src:"http://cdn.zhoukaiwen.com/web2.jpg",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"desc"},[e("v-uni-view",{staticClass:"list_title"},[t._v("测试标题测试标题测试标题")]),e("v-uni-view",{staticClass:"list_content"},[t._v("折磨生出苦难苦难又会加剧折磨凡间这无穷的循环将有我来终结真正的恩典因不完整而美丽因情感而真诚因脆弱而自由")]),e("v-uni-view",{staticClass:"flex justify-between"},[e("v-uni-view",{staticClass:"cu-tag bg-grey light sm round"},[e("u-icon",{staticStyle:{"margin-right":"2rpx"},attrs:{name:"play-circle"}}),t._v("1000阅读量")],1),e("v-uni-view",{staticClass:"cu-tag bg-grey light sm round"},[e("u-icon",{staticStyle:{"margin-right":"5rpx"},attrs:{name:"clock"}}),t._v("2020-11-03")],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"cu-item shadow"},[e("v-uni-view",{staticClass:"content",staticStyle:{padding:"0"}},[e("v-uni-image",{attrs:{src:"http://cdn.zhoukaiwen.com/web2.jpg",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"desc"},[e("v-uni-view",{staticClass:"list_title"},[t._v("标题标题标题标题")]),e("v-uni-view",{staticClass:"list_content"},[t._v("折磨生出苦难苦难又会加剧折磨凡间这无穷的循环将有我来终结真正的恩典因不完整而美丽因情感而真诚因脆弱而自由")]),e("v-uni-view",{staticClass:"flex justify-between"},[e("v-uni-view",{staticClass:"cu-tag bg-grey light sm round"},[e("u-icon",{staticStyle:{"margin-right":"2rpx"},attrs:{name:"play-circle"}}),t._v("1000阅读量")],1),e("v-uni-view",{staticClass:"cu-tag bg-grey light sm round"},[e("u-icon",{staticStyle:{"margin-right":"5rpx"},attrs:{name:"clock"}}),t._v("2020-11-03")],1)],1)],1)],1)],1)],1)],1)],1)],1)},s=[]},"83dc":function(t,i,e){var a=e("74b3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("5aad3b51",a,!0,{sourceMap:!1,shadowMode:!1})},"953d":function(t,i,e){"use strict";var a=e("83dc"),n=e.n(a);n.a},ae4d:function(t,i,e){"use strict";e.r(i);var a=e("7fa3"),n=e("d714");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("953d");var r=e("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"7925fc9e",null,!1,a["a"],void 0);i["default"]=o.exports},d4e5:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={components:{},data:function(){return{videoUrl:"x3032spkh1m",getData:[{title:"uniapp开发",studyNum:"335",review:"35",time:"2020-12-11",synopsis:"uni-app是一个使用Vue.js开发跨平台个人文库应用的前端框架,开发者编写一套代码,可编译到的iOS,安卓,H5,小程序等多个平台。",item:[{title:"第一课",name:"初识uniapp",vidUrl:"x3032spkh1m"}]}]}},onLoad:function(){},onShareAppMessage:function(t){return{title:"零基础学习IT知识，直指万元高薪！"}},methods:{videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})}}};i.default=a},d714:function(t,i,e){"use strict";e.r(i);var a=e("d4e5"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a}}]);