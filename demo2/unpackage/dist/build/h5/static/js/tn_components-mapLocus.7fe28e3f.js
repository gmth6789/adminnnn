(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tn_components-mapLocus"],{"0993":function(t,e,n){"use strict";var i=n("0b00"),o=n.n(i);o.a},"0aa0":function(t,e,n){"use strict";n.r(e);var i=n("a533"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"0b00":function(t,e,n){var i=n("defb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("3b5c0360",i,!0,{sourceMap:!1,shadowMode:!1})},a533:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d81d"),n("ac1f");var i={data:function(){return{map:null,windowHeight:0,mapHeight:0,timer:null,isDisabled:!1,isStart:!1,playIndex:1,id:0,title:"map",latitude:34.263734,longitude:108.934843,covers:[{id:1,width:42,height:47,rotate:270,latitude:34.259428,longitude:108.94704,iconPath:"http://cdn.zhoukaiwen.com/car.png",callout:{content:"陕A·88888",display:"ALWAYS",fontWeight:"bold",color:"#5A7BEE",fontSize:"12px",bgColor:"#ffffff",padding:5,textAlign:"center"},anchor:{x:.5,y:.5}}],polyline:[],coordinate:[{latitude:34.259428,longitude:108.94704,problem:!1},{latitude:34.252918,longitude:108.946963,problem:!1},{latitude:34.252408,longitude:108.94624,problem:!1},{latitude:34.249286,longitude:108.946184,problem:!1},{latitude:34.24867,longitude:108.94664,problem:!1},{latitude:34.248129,longitude:108.946826,problem:!1},{latitude:34.243537,longitude:108.946816,problem:!0},{latitude:34.243478,longitude:108.939003,problem:!0},{latitude:34.241218,longitude:108.939027,problem:!0},{latitude:34.241192,longitude:108.934802,problem:!0},{latitude:34.241182,longitude:108.932235,problem:!0},{latitude:34.247227,longitude:108.932311,problem:!0},{latitude:34.250833,longitude:108.932352,problem:!0},{latitude:34.250877,longitude:108.931756,problem:!0},{latitude:34.250944,longitude:108.931576,problem:!0},{latitude:34.250834,longitude:108.929662,problem:!0},{latitude:34.250924,longitude:108.926015,problem:!0},{latitude:34.250802,longitude:108.910121,problem:!0},{latitude:34.269718,longitude:108.909921,problem:!0},{latitude:34.269221,longitude:108.922366,problem:!1},{latitude:34.274531,longitude:108.922388,problem:!1},{latitude:34.276201,longitude:108.923433,problem:!1},{latitude:34.276559,longitude:108.924004,problem:!1},{latitude:34.276785,longitude:108.945855,problem:!1}],posi:{id:1,width:32,height:32,latitude:0,longitude:0,iconPath:"http://cdn.zhoukaiwen.com/car.png",callout:{content:"陕A·85Q1Q",display:"BYCLICK",fontWeight:"bold",color:"#5A7BEE",fontSize:"12px",bgColor:"#ffffff",padding:5,textAlign:"center"},anchor:{x:.5,y:.5}}}},watch:{},onShareAppMessage:function(t){return{title:"看看这个小程序多好玩～"}},onReady:function(){var t=this;this.map=uni.createMapContext("map"),uni.getSystemInfo({success:function(e){t.windowHeight=e.windowHeight}})},mounted:function(){this.setNavTop(".navBox"),this.polyline=[{points:this.coordinate,color:"#025ADD",width:4,dottedLine:!1}]},methods:{setNavTop:function(t){var e=this,n=uni.createSelectorQuery().select(t);n.boundingClientRect((function(t){console.log("tabInList基本信息 = "+t.height),e.mapHeight=e.windowHeight-t.height,console.log(e.mapHeight)})).exec()},start:function(){this.isStart=!0,this.isDisabled=!0;var t=this.coordinate,e=t.length,n=t[this.playIndex],i=this;i.map.translateMarker({markerId:1,autoRotate:!0,destination:{longitude:n.longitude,latitude:n.latitude},duration:700,complete:function(){i.playIndex++,i.playIndex<e?i.start(i.playIndex,t):(console.log("okokok"),uni.showToast({title:"播放完成",duration:1400,icon:"none"}),i.playIndex=0,i.isStart=!1,i.isDisabled=!1)},animationEnd:function(){i.playIndex++,i.playIndex<e?i.start(i.playIndex,t):(console.log("okokok"),uni.showToast({title:"播放完成",duration:1400,icon:"none"}),i.playIndex=0,i.isStart=!1,i.isDisabled=!1)},fail:function(t){}})}}};e.default=i},defb:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-a40e5c3a]{position:relative}.btnBox[data-v-a40e5c3a]{width:%?750?%;position:absolute;bottom:%?60?%;z-index:99;display:flex;justify-content:space-around}',""]),t.exports=e},f21c:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{staticClass:"navBox",attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("地图轨迹")])],2),n("v-uni-view",{staticClass:"container"},[n("v-uni-map",{style:{width:"100%",height:t.mapHeight+"px"},attrs:{id:"map",latitude:t.latitude,longitude:t.longitude,markers:t.covers,scale:13,polyline:t.polyline}}),n("v-uni-view",{staticClass:"btnBox"},[n("v-uni-button",{staticClass:"cu-btn bg-blue round shadow lg",attrs:{disabled:t.isDisabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)}}},[t._v("轨迹回放")])],1)],1)],1)},o=[]},faf1:function(t,e,n){"use strict";n.r(e);var i=n("f21c"),o=n("0aa0");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("0993");var l=n("f0c5"),d=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"a40e5c3a",null,!1,i["a"],void 0);e["default"]=d.exports}}]);