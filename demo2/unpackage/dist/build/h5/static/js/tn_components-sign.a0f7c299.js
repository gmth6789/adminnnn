(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tn_components-sign"],{"0237":function(t,e,a){"use strict";var i=a("e981"),n=a.n(i);n.a},"2b1e":function(t,e,a){"use strict";a.r(e);var i=a("b3a0"),n=a("7358");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("0237");var s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"3019fb9a",null,!1,i["a"],void 0);e["default"]=c.exports},"2e44":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-3019fb9a]{background:#fbfbfb;height:auto;overflow:hidden}body.?%PAGE?%[data-v-3019fb9a]{background:#fbfbfb}.wrapper[data-v-3019fb9a]{width:100%;height:95vh;margin:%?30?% 0;overflow:hidden;display:flex;align-content:center;flex-direction:row;justify-content:center;font-size:%?28?%}.handWriting[data-v-3019fb9a]{background:#fff;width:100%;height:95vh}.handRight[data-v-3019fb9a]{display:inline-flex;align-items:center}.handCenter[data-v-3019fb9a]{border:%?4?% dashed #e9e9e9;flex:5;overflow:hidden;box-sizing:border-box}.handTitle[data-v-3019fb9a]{-webkit-transform:rotate(90deg);transform:rotate(90deg);flex:1;color:#666}.handBtn uni-button[data-v-3019fb9a]{font-size:%?28?%}.handBtn[data-v-3019fb9a]{height:95vh;display:inline-flex;flex-direction:column;justify-content:space-between;align-content:space-between;flex:1}.delBtn[data-v-3019fb9a]{position:absolute;top:%?250?%;left:%?0?%;-webkit-transform:rotate(90deg);transform:rotate(90deg);color:#666}.delBtn uni-image[data-v-3019fb9a]{position:absolute;top:%?13?%;left:%?25?%}.subBtn[data-v-3019fb9a]{position:absolute;bottom:%?52?%;left:%?-3?%;display:inline-flex;-webkit-transform:rotate(90deg);transform:rotate(90deg);background:#008ef6;color:#fff;margin-bottom:%?30?%;text-align:center;justify-content:center}\n\n/*Peach - 新增 - 保存*/.saveBtn[data-v-3019fb9a]{position:absolute;top:%?375?%;left:%?0?%;-webkit-transform:rotate(90deg);transform:rotate(90deg);color:#666}.previewBtn[data-v-3019fb9a]{position:absolute;top:%?500?%;left:%?0?%;-webkit-transform:rotate(90deg);transform:rotate(90deg);color:#666}.uploadBtn[data-v-3019fb9a]{position:absolute;top:%?625?%;left:%?0?%;-webkit-transform:rotate(90deg);transform:rotate(90deg);color:#666}\n\n/*Peach - 新增 - 保存*/.black-select[data-v-3019fb9a]{width:%?60?%;height:%?60?%;position:absolute;top:%?30?%;left:%?25?%}.black-select.color_select[data-v-3019fb9a]{width:%?90?%;height:%?90?%;top:%?100?%;left:%?10?%}.red-select[data-v-3019fb9a]{width:%?60?%;height:%?60?%;position:absolute;top:%?140?%;left:%?25?%}.red-select.color_select[data-v-3019fb9a]{width:%?90?%;height:%?90?%;top:%?120?%;left:%?10?%}",""]),t.exports=e},7358:function(t,e,a){"use strict";a.r(e);var i=a("76c8"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"76c8":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac1f"),a("3c65"),a("14d9"),a("acd8"),a("cb29");var i={data:function(){return{canvasName:"handWriting",ctx:"",canvasWidth:0,canvasHeight:0,transparent:1,selectColor:"black",lineColor:"#1A1A1A",lineSize:1.5,lineMin:.5,lineMax:4,pressure:1,smoothness:60,currentPoint:{},currentLine:[],firstTouch:!0,radius:1,cutArea:{top:0,right:0,bottom:0,left:0},bethelPoint:[],lastPoint:0,chirography:[],currentChirography:{},linePrack:[]}},onLoad:function(){var t=this,e=this.canvasName,a=wx.createCanvasContext(e);this.ctx=a;var i=wx.createSelectorQuery();i.select(".handCenter").boundingClientRect((function(e){t.canvasWidth=e.width,t.canvasHeight=e.height,t.setCanvasBg("#fff")})).exec()},methods:{uploadScaleStart:function(t){if("touchstart"!=t.type)return!1;var e=this.ctx;e.setFillStyle(this.lineColor),e.setGlobalAlpha(this.transparent);var a={x:t.touches[0].x,y:t.touches[0].y},i=this.currentLine;i.unshift({time:(new Date).getTime(),dis:0,x:a.x,y:a.y}),this.currentPoint=a,this.firstTouch&&(this.cutArea={top:a.y,right:a.x,bottom:a.y,left:a.x},this.firstTouch=!1),this.pointToLine(i)},uploadScaleMove:function(t){if("touchmove"!=t.type)return!1;t.cancelable&&(t.defaultPrevented||t.preventDefault());var e={x:t.touches[0].x,y:t.touches[0].y};e.y<this.cutArea.top&&(this.cutArea.top=e.y),e.y<0&&(this.cutArea.top=0),e.x>this.cutArea.right&&(this.cutArea.right=e.x),this.canvasWidth-e.x<=0&&(this.cutArea.right=this.canvasWidth),e.y>this.cutArea.bottom&&(this.cutArea.bottom=e.y),this.canvasHeight-e.y<=0&&(this.cutArea.bottom=this.canvasHeight),e.x<this.cutArea.left&&(this.cutArea.left=e.x),e.x<0&&(this.cutArea.left=0),this.lastPoint=this.currentPoint,this.currentPoint=e;var a=this.currentLine;a.unshift({time:(new Date).getTime(),dis:this.distance(this.currentPoint,this.lastPoint),x:e.x,y:e.y}),this.pointToLine(a)},uploadScaleEnd:function(t){if("touchend"!=t.type)return 0;var e={x:t.changedTouches[0].x,y:t.changedTouches[0].y};this.lastPoint=this.currentPoint,this.currentPoint=e;var a=this.currentLine;if(a.unshift({time:(new Date).getTime(),dis:this.distance(this.currentPoint,this.lastPoint),x:e.x,y:e.y}),a.length>2)a[0].time,a[a.length-1].time,a.length;this.pointToLine(a);var i={lineSize:this.lineSize,lineColor:this.lineColor},n=this.chirography;n.unshift(i),this.chirography=n;var o=this.linePrack;o.unshift(this.currentLine),this.linePrack=o,this.currentLine=[]},retDraw:function(){this.ctx.clearRect(0,0,700,730),this.ctx.draw(),this.setCanvasBg("#fff")},pointToLine:function(t){this.calcBethelLine(t)},calcBethelLine:function(t){if(t.length<=1)t[0].r=this.radius;else{var e,a,i,n,o,s,c,r,l,h,u=0,d=0;t.length<=2?(e=t[1].x,n=t[1].y,i=t[1].x+.5*(t[0].x-t[1].x),s=t[1].y+.5*(t[0].y-t[1].y),a=e+.5*(i-e),o=n+.5*(s-n)):(e=t[2].x+.5*(t[1].x-t[2].x),n=t[2].y+.5*(t[1].y-t[2].y),a=t[1].x,o=t[1].y,i=a+.5*(t[0].x-a),s=o+.5*(t[0].y-o)),l=this.distance({x:i,y:s},{x:e,y:n}),h=this.radius;for(var f=0;f<t.length-1;f++)if(u+=t[f].dis,d+=t[f].time-t[f+1].time,u>this.smoothness)break;this.radius=Math.min(d/l*this.pressure+this.lineMin,this.lineMax)*this.lineSize,t[0].r=this.radius,t.length<=2?(c=(h+this.radius)/2,r=c,r):(c=(t[2].r+t[1].r)/2,r=t[1].r,(t[1].r+t[0].r)/2);for(var v=[],p=0;p<5;p++){var x=p/4,y=(1-x)*(1-x)*e+2*x*(1-x)*a+x*x*i,b=(1-x)*(1-x)*n+2*x*(1-x)*o+x*x*s,g=h+(this.radius-h)/5*p;if(v.push({x:y,y:b,r:g}),3==v.length){var m=this.ctaCalc(v[0].x,v[0].y,v[0].r,v[1].x,v[1].y,v[1].r,v[2].x,v[2].y,v[2].r);m[0].color=this.lineColor,this.bethelDraw(m,1),v=[{x:y,y:b,r:g}]}}this.currentLine=t}},distance:function(t,e){var a=e.x-t.x,i=e.y-t.y;return Math.sqrt(a*a+i*i)},ctaCalc:function(t,e,a,i,n,o,s,c,r){var l,h,u,d,f,v,p,x,y,b=[];l=i-t,h=n-e,u=2*Math.sqrt(l*l+h*h+1e-4),l=l/u*a,h=h/u*a,d=h,f=-l,v=i-s,p=n-c,u=2*Math.sqrt(v*v+p*p+1e-4),v=v/u*r,p=p/u*r,x=-p,y=v,b.push({mx:t+d,my:e+f,color:"#1A1A1A"}),b.push({c1x:i+d,c1y:n+f,c2x:i+x,c2y:n+y,ex:s+x,ey:c+y}),b.push({c1x:s+x-v,c1y:c+y-p,c2x:s-x-v,c2y:c-y-p,ex:s-x,ey:c-y}),b.push({c1x:i-x,c1y:n-y,c2x:i-d,c2y:n-f,ex:t-d,ey:e-f}),b.push({c1x:t-d-l,c1y:e-f-h,c2x:t+d-l,c2y:e+f-h,ex:t+d,ey:e+f}),b[0].mx=b[0].mx.toFixed(1),b[0].mx=parseFloat(b[0].mx),b[0].my=b[0].my.toFixed(1),b[0].my=parseFloat(b[0].my);for(var g=1;g<b.length;g++)b[g].c1x=b[g].c1x.toFixed(1),b[g].c1x=parseFloat(b[g].c1x),b[g].c1y=b[g].c1y.toFixed(1),b[g].c1y=parseFloat(b[g].c1y),b[g].c2x=b[g].c2x.toFixed(1),b[g].c2x=parseFloat(b[g].c2x),b[g].c2y=b[g].c2y.toFixed(1),b[g].c2y=parseFloat(b[g].c2y),b[g].ex=b[g].ex.toFixed(1),b[g].ex=parseFloat(b[g].ex),b[g].ey=b[g].ey.toFixed(1),b[g].ey=parseFloat(b[g].ey);return b},bethelDraw:function(t,e,a){var i=this.ctx;i.beginPath(),i.moveTo(t[0].mx,t[0].my),void 0!=a?(i.setFillStyle(a),i.setStrokeStyle(a)):(i.setFillStyle(t[0].color),i.setStrokeStyle(t[0].color));for(var n=1;n<t.length;n++)i.bezierCurveTo(t[n].c1x,t[n].c1y,t[n].c2x,t[n].c2y,t[n].ex,t[n].ey);i.stroke(),void 0!=e&&i.fill(),i.draw(!0)},selectColorEvent:function(t,e){this.selectColor=t,this.lineColor=e},canvasToImg:function(t){this.ctx.draw(!0,(function(){wx.canvasToTempFilePath({canvasId:"handWriting",fileType:"png",quality:1,success:function(e){wx.showToast({title:"执行了吗？"}),t(e.tempFilePath)}})}))},subCanvas:function(){this.ctx.draw(!0,(function(){wx.canvasToTempFilePath({canvasId:"handWriting",fileType:"png",quality:1,success:function(t){wx.showToast({title:"以保存"}),wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(t){wx.showToast({title:"已成功保存到相册",duration:2e3})}})}})}))},saveCanvasAsImg:function(){wx.canvasToTempFilePath({canvasId:"handWriting",fileType:"png",quality:1,success:function(t){wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(t){wx.showToast({title:"已保存到相册",duration:2e3})}})}})},previewCanvasImg:function(){wx.canvasToTempFilePath({canvasId:"handWriting",fileType:"jpg",quality:1,success:function(t){wx.previewImage({urls:[t.tempFilePath]})}})},uploadCanvasImg:function(){wx.canvasToTempFilePath({canvasId:"handWriting",fileType:"png",quality:1,success:function(t){wx.uploadFile({url:"https://example.weixin.qq.com/upload",filePath:t.tempFilePath,name:"file_signature",formData:{user:"test"},success:function(t){t.data}})}})},setCanvasBg:function(t){this.ctx.rect(0,0,this.canvasWidth,this.canvasHeight-4),this.ctx.setFillStyle(t),this.ctx.fill(),this.ctx.draw()}}};e.default=i},b3a0:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"handBtn"},[a("v-uni-image",{class:["black"===t.selectColor?"color_select":"","black-select"],attrs:{src:"black"===t.selectColor?"../static/other/color_black_selected.png":"../static/other/color_black.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectColorEvent("black","#1A1A1A")}}}),a("v-uni-image",{class:["red"===t.selectColor?"color_select":"","black-select"],attrs:{src:"red"===t.selectColor?"../static/other/color_red_selected.png":"../static/other/color_red.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectColorEvent("red","#ca262a")}}}),a("v-uni-button",{staticClass:"delBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.retDraw.apply(void 0,arguments)}}},[t._v("重写")]),a("v-uni-button",{staticClass:"saveBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveCanvasAsImg.apply(void 0,arguments)}}},[t._v("保存")]),a("v-uni-button",{staticClass:"previewBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewCanvasImg.apply(void 0,arguments)}}},[t._v("预览")]),a("v-uni-button",{staticClass:"uploadBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadCanvasImg.apply(void 0,arguments)}}},[t._v("上传")]),a("v-uni-button",{staticClass:"subBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subCanvas.apply(void 0,arguments)}}},[t._v("完成")])],1),a("v-uni-view",{staticClass:"handCenter"},[a("v-uni-canvas",{staticClass:"handWriting",attrs:{"disable-scroll":!0,"canvas-id":"handWriting"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadScaleStart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadScaleMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadScaleEnd.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"handRight"},[a("v-uni-view",{staticClass:"handTitle"},[t._v("请签名")])],1)],1)],1)},n=[]},cb29:function(t,e,a){var i=a("23e7"),n=a("81d5"),o=a("44d2");i({target:"Array",proto:!0},{fill:n}),o("fill")},e981:function(t,e,a){var i=a("2e44");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5c6f7b90",i,!0,{sourceMap:!1,shadowMode:!1})}}]);