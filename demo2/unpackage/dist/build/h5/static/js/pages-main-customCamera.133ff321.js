(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-customCamera"],{"0e5a":function(t,e,n){"use strict";var o=n("b824"),a=n.n(o);a.a},"11e9":function(t,e,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("6d51")),i=null;uni.getSystemInfo({success:function(t){console.log("系统信息:",t)}});var s={data:function(){return{signImage:"",imgSrc:"",syShow:!0,getHeight:"600",device:"back",flash:"off",nowTime:"",userName:"Admin",weather:"32",address:"",sgdUrl:"https://cdn.zhoukaiwen.com/sgd.png",imgList:[{src:"https://cdn.zhoukaiwen.com/angular.jpg"}],imgListData:"",rreportShow:!1,src:"",w:"",h:""}},onShow:function(){var t,e=this;this.getTime();var n=this;uni.getLocation({type:"wgs84",success:function(e){console.log("当前位置的经度："+e.longitude),console.log("当前位置的纬度："+e.latitude),t=new a.default({key:"662BZ-2EAR6-M34S7-M4NPO-HFV3F-QEBTV"}),t.reverseGeocoder({location:{latitude:e.latitude,longitude:e.longitude},success:function(t){console.log("位置：",t),n.address=t.result.address},fail:function(t){}})}}),uni.request({url:"http://wthrcdn.etouch.cn/weather_mini?city=西安",method:"GET",success:function(t){console.log("天气信息：",t.data.data),e.weather=t.data.data.forecast[0].type+"  "+t.data.data.wendu},fail:function(){e.openmsg("警告","天气接口获取失败")},complete:function(){}})},methods:{a:function(){console.log("aaa")},b:function(){console.log("bbb")},goBack:function(){uni.navigateBack({delta:1})},goAlbum:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){var n={src:e.tempFilePaths[0],nowTime:t.nowTime,weather:t.weather,userName:t.userName,address:t.address};uni.setStorageSync("userInfo",n),uni.navigateTo({url:"../../tn_components/imageEditor"}),console.log(e,123)}})},takePhoto:function(){var t=this,e=uni.createCameraContext();e.takePhoto({quality:"high",success:function(e){console.log(e);var n={src:e.tempImagePath,nowTime:t.nowTime,weather:t.weather,userName:t.userName,address:t.address,syShow:t.syShow};uni.setStorageSync("userInfo",n),uni.navigateTo({url:"../../tn_components/imageEditor"})}})},error:function(t){console.log(t.detail)},getTime:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,o=t.getDate(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),i=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),s=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();n>=1&&n<=9&&(n="0"+n),o>=0&&o<=9&&(o="0"+o);var r=e+"年"+n+"月"+o+"日"+a+":"+i+":"+s;this.nowTime=r,console.log("获取时间",this.nowTime)},history:function(){uni.navigateTo({url:"timeline"})},xzBtn:function(){"front"==this.device?this.device="back":this.device="front"},sgdBtn:function(){"off"==this.flash?(this.flash="on",this.sgdUrl="https://cdn.zhoukaiwen.com/sgd_on.png"):(this.flash="off",this.sgdUrl="https://cdn.zhoukaiwen.com/sgd.png")}},onLoad:function(t){i=uni.createCanvasContext("firstCanvas"),i.setStrokeStyle("#000"),i.setLineWidth(5),i.setLineCap("round"),i.setLineJoin("round")}};e.default=s},"2b0d":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contents[data-v-0fd60a4a]{width:100vw;height:100vh;background-color:#000}.syBtns[data-v-0fd60a4a]{margin-top:%?30?%;display:flex;justify-content:space-around}.syBtns uni-button[data-v-0fd60a4a]{width:%?150?%;background-color:#87ceeb;padding:%?10?%;height:%?70?%;line-height:%?60?%;color:#fff;border-radius:%?10?%}.textInfo[data-v-0fd60a4a]{position:absolute;top:%?10?%;left:%?10?%;width:%?350?%;box-sizing:border-box;color:#eee;font-size:%?16?%;background-color:#393631;opacity:.8;border-radius:%?10?%;overflow:hidden}.textInfo .textInfoTile[data-v-0fd60a4a]{height:%?30?%;text-align:center;line-height:%?30?%;background-color:#394668;margin-bottom:%?15?%}.textInfo .topItem[data-v-0fd60a4a]{padding-left:%?30?%;width:100%;white-space:pre-wrap;margin-bottom:%?15?%}.cameraBtn[data-v-0fd60a4a]{width:%?120?%;height:%?120?%;line-height:%?120?%;border:%?6?% #fff solid;border-radius:50%;padding:%?8?%;position:absolute;left:calc(50% - %?60?%);bottom:%?200?%}.cameraBtn2[data-v-0fd60a4a]{width:100%;height:100%;border-radius:50%;background-color:#fff;text-align:center;color:#007aff}.xzImg[data-v-0fd60a4a]{width:%?52?%;height:auto;position:absolute;right:%?44?%;bottom:%?580?%}.sgdImg[data-v-0fd60a4a]{width:%?40?%;height:auto;position:absolute;right:%?50?%;bottom:%?450?%}.bottomBtn[data-v-0fd60a4a]{width:100%;height:%?150?%;padding-bottom:%?15?%;position:absolute;bottom:0;left:0;text-align:center;display:flex;justify-content:space-between}.bottomBtn .btn[data-v-0fd60a4a]{width:30%;height:%?150?%;font-size:%?34?%;color:#fff;line-height:%?150?%}',""]),t.exports=e},"3ae4":function(t,e,n){"use strict";n.r(e);var o=n("11e9"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"4ddf":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"contents"},[n("v-uni-view",{staticStyle:{position:"relative",width:"100%",height:"750rpx"}},[n("v-uni-camera",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"750rpx"},attrs:{"device-position":t.device,flash:t.flash},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)}}},[n("v-uni-cover-view",{directives:[{name:"show",rawName:"v-show",value:t.syShow,expression:"syShow"}],staticClass:"textInfo"},[n("v-uni-cover-view",{staticClass:"textInfoTile"},[t._v("示例Demo")]),n("v-uni-cover-view",{staticClass:"topItem"},[t._v("拍摄时间："+t._s(t.nowTime))]),n("v-uni-cover-view",{staticClass:"topItem"},[t._v("天气："+t._s(t.weather)+"℃")]),n("v-uni-cover-view",{staticClass:"topItem"},[t._v("拍摄人："+t._s(t.userName))]),n("v-uni-cover-view",{staticClass:"topItem"},[t._v("地点："+t._s(t.address))])],1),n("v-uni-cover-image",{staticClass:"xzImg",attrs:{src:"https://cdn.zhoukaiwen.com/xz.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.xzBtn.apply(void 0,arguments)}}}),n("v-uni-cover-image",{staticClass:"sgdImg",attrs:{src:t.sgdUrl},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sgdBtn.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"syBtns"},[n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.syShow=!0}.apply(void 0,arguments)}}},[t._v("带水印")]),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.syShow=!1}.apply(void 0,arguments)}}},[t._v("无水印")])],1),n("v-uni-view",{staticClass:"cameraBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.takePhoto.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cameraBtn2"})],1),n("v-uni-view",{staticClass:"bottomBtn"},[n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goAlbum.apply(void 0,arguments)}}},[t._v("相册")])],1)],1)},a=[]},7853:function(t,e,n){"use strict";n.r(e);var o=n("4ddf"),a=n("3ae4");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("0e5a");var s=n("f0c5"),r=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"0fd60a4a",null,!1,o["a"],void 0);e["default"]=r.exports},b824:function(t,e,n){var o=n("2b0d");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("483cbc3c",o,!0,{sourceMap:!1,shadowMode:!1})}}]);