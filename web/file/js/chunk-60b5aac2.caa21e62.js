(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60b5aac2","chunk-6b4655b1"],{"0755":function(t,e,n){"use strict";n("4104")},4104:function(t,e,n){},8409:function(t,e,n){},8615:function(t,e,n){"use strict";n("8409")},a1f0:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-settings-info-view"},[n("div",{style:{background:"url("+t.getFileAccessHttpUrl(t.courseInfo.courseMap)+") no-repeat",backgroundSize:"auto",height:"1000px"}},[t._l(t.unitList,(function(e){return n("div",{key:e.id,staticClass:"unit",style:{left:e.mapX-25+"px",top:e.mapY-25+"px"},on:{click:function(n){return t.viewUnit(e)}}},[n("i",{staticClass:"flag"}),n("div",{staticClass:"unit-title"},[t._v(t._s(e.unitName))])])})),n("unitView-modal",{ref:"unitViewModal"})],2)])},r=[],s=n("0fea"),o=n("c6cb"),c={components:{UnitViewModal:o["default"]},data:function(){return{preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},courseInfo:{},unitList:[],url:{courseInfo:"/teaching/teachingCourse/queryById",unitList:"/teaching/teachingCourseUnit/list"},visible:!1,unit:{}}},created:function(){var t=this.$route.query.id;t&&(this.getCourseInfo(t),this.getUnitList(t))},methods:{getFileAccessHttpUrl:s["d"],getCourseInfo:function(t){var e=this;Object(s["c"])(this.url.courseInfo,{id:t}).then((function(t){t.success&&(e.courseInfo=t.result,e.$route.meta.title="我的课程-"+e.courseInfo.courseName,e.courseInfo.map=e.getFileAccessHttpUrl(e.courseInfo.map))}))},getUnitList:function(t){var e=this;Object(s["c"])(this.url.unitList,{courseId:t,pageNo:1,pageSize:99}).then((function(t){t.success&&(e.unitList=t.result.records)}))},viewUnit:function(t){this.$refs.unitViewModal.visible=!0,this.$refs.unitViewModal.unit=t}}},a=c,u=(n("8615"),n("2877")),l=Object(u["a"])(a,i,r,!1,null,"362c7d02",null);e["default"]=l.exports},c6cb:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("j-modal",{attrs:{visible:t.visible,title:t.unit.unitName,switchFullscreen:"",footer:null,maskClosable:!1,width:800},on:{cancel:t.handleCancel}},[n("div",{staticClass:"video-area"},[t.unit.courseVideo||t.unit.courseCase?n("a-tabs",[t.unit.courseVideo?n("a-tab-pane",{key:"video",attrs:{tab:"视频"}},[1==t.unit.courseVideoSource?n("video",{attrs:{src:t.getFileAccessHttpUrl(t.unit.courseVideo),controls:"true",controlsList:"nodownload noremote footbar",oncontextmenu:"return false;"}}):t._e(),2==t.unit.courseVideoSource?n("video",{attrs:{src:t.unit.courseVideo,controls:"true",controlsList:"nodownload noremote footbar",oncontextmenu:"return false;"}}):t._e(),3==t.unit.courseVideoSource?n("div",{domProps:{innerHTML:t._s(t.unit.courseVideo)}}):t._e()]):t._e(),t.unit.courseCase?n("a-tab-pane",{key:"scratch",attrs:{tab:"案例"}},[n("iframe",{attrs:{id:"player",src:t.previewCourseCase(t.unit),scrolling:"no"}})]):t._e()],1):t._e()],1),n("a-divider",[t._v("本节课资料")]),n("div",[n("a-row",{attrs:{gutter:24}},[n("a-col",{attrs:{span:16}},[n("a-card",{attrs:{size:"small",title:"课程说明"}},[n("div",{domProps:{innerHTML:t._s(t.unit.unitIntro?t.unit.unitIntro.replace(/\n/g,"<br>"):"")}})])],1),n("a-col",{attrs:{span:8}},[n("a-collapse",{attrs:{defaultActiveKey:"0",bordered:!1},scopedSlots:t._u([{key:"expandIcon",fn:function(t){return[n("a-icon",{attrs:{type:"caret-right",rotate:t.isActive?90:0}})]}}])},[n("a-collapse-panel",{style:t.customStyle,attrs:{header:"课后作业"}},[n("a",{attrs:{target:"_blank"},on:{click:function(e){return t.handleViewCode(t.unit)}}},[n("a-icon",{attrs:{type:"edit"}}),t._v("去做作业")],1)]),t.unit.coursePpt?n("a-collapse-panel",{style:t.customStyle,attrs:{header:"课程资料"}},t._l(t.unit.coursePpt_url.split(","),(function(e,i){return n("div",{key:i},[e.endsWith("sb3")?n("a",{attrs:{target:"_blank",href:"/scratch3/index.html?scene=create&workFile="+e}},[n("a-icon",{attrs:{type:"code"}}),t._v(" 查看代码 "+t._s(i+1))],1):n("a",{attrs:{target:"_blank",href:e}},[n("a-icon",{attrs:{type:"file"}}),t._v(" 查看资料 "+t._s(i+1))],1)])})),0):t._e()],1)],1)],1)],1)],1)],1)},r=[],s=n("0fea"),o={name:"UnitViewModal",data:function(){return{customStyle:"background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden",visible:!1,unit:{},scratchFrameHref:""}},mounted:function(){document.addEventListener("scratchFullScreen",(function(t){window.launchIntoFullscreen(document.getElementById("player"))})),document.addEventListener("scratchUnFullScreen",(function(t){window.exitFullscreen()})),document.addEventListener("scratchInit",(function(t){var e=document.getElementById("player"),n=e.contentDocument.getElementById("scratch");n.addEventListener("click",(function(){e.focus()}))}))},methods:{getFileAccessHttpUrl:s["d"],handleCancel:function(t){this.unit={},this.visible=!1},previewCourseCase:function(t){var e=this.getFileAccessHttpUrl(t.courseCase);switch(t.courseWorkType){case 1:return"/scratch3/player.html?workUrl="+e;case 2:return"/scratch3/player.html?workUrl="+e;case 3:return"/scratchjr/editor.html?mode=edit&filepath="+e;case 4:return"/python/player.html?lang=turtle&url="+e}},handleViewCode:function(t){switch(t.courseWorkType){case 1:window.open("/scratch3/index.html?scene=course&unitId="+t.id);break;case 2:window.open("/scratch3/index.html?scene=course&unitId="+t.id);break;case 3:window.open("/scratchjr/editor.html?mode=edit&filepath="+this.getFileAccessHttpUrl(t.courseWork));break;case 4:window.open("/python/index.html?lang=turtle&unitId="+t.id+"&url="+this.getFileAccessHttpUrl(t.courseWork));break;default:window.open(this.getFileAccessHttpUrl(t.mediaPath))}}}},c=o,a=(n("0755"),n("2877")),u=Object(a["a"])(c,i,r,!1,null,"bb05c064",null);e["default"]=u.exports}}]);