(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66ff52ff","chunk-e021d7b4"],{"55c1":function(e,t,r){},"7ab5":function(e,t,r){},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,i="[object Arguments]",o="[object Function]",s="[object GeneratorFunction]",l="[object Symbol]",n="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=n||u||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function p(e,t){var r=-1,a=e?e.length:0,i=Array(a);while(++r<a)i[r]=t(e[r],r,e);return i}function m(e,t){var r=-1,a=t.length,i=e.length;while(++r<a)e[i+r]=t[r];return e}var h=Object.prototype,f=h.hasOwnProperty,v=h.toString,g=c.Symbol,b=h.propertyIsEnumerable,w=g?g.isConcatSpreadable:void 0,y=Math.max;function C(e,t,r,a,i){var o=-1,s=e.length;r||(r=N),i||(i=[]);while(++o<s){var l=e[o];t>0&&r(l)?t>1?C(l,t-1,r,a,i):m(i,l):a||(i[i.length]=l)}return i}function k(e,t){return e=Object(e),x(e,t,(function(t,r){return r in e}))}function x(e,t,r){var a=-1,i=t.length,o={};while(++a<i){var s=t[a],l=e[s];r(l,s)&&(o[s]=l)}return o}function L(e,t){return t=y(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,i=y(r.length-t,0),o=Array(i);while(++a<i)o[a]=r[t+a];a=-1;var s=Array(t+1);while(++a<t)s[a]=r[a];return s[t]=o,d(e,this,s)}}function N(e){return V(e)||T(e)||!!(w&&e&&e[w])}function I(e){if("string"==typeof e||R(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function T(e){return j(e)&&f.call(e,"callee")&&(!b.call(e,"callee")||v.call(e)==i)}var V=Array.isArray;function S(e){return null!=e&&F(e.length)&&!U(e)}function j(e){return P(e)&&S(e)}function U(e){var t=O(e)?v.call(e):"";return t==o||t==s}function F(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function P(e){return!!e&&"object"==typeof e}function R(e){return"symbol"==typeof e||P(e)&&v.call(e)==l}var q=L((function(e,t){return null==e?{}:k(e,p(C(t,1),I))}));e.exports=q}).call(this,r("c8ba"))},"8b6f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-drawer",{attrs:{title:e.title,width:e.width,placement:"right",closable:!1,visible:e.visible},on:{close:e.close}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"展示排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderNum"],expression:"[ 'orderNum']"}],attrs:{placeholder:"请输入排序"}})],1),r("a-form-item",{attrs:{label:"所属课程",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseId",e.validatorRules.courseId],expression:"['courseId', validatorRules.courseId]"}],attrs:{rows:"4"}},e._l(e.courseList,(function(t,a){return r("a-select-option",{key:a.toString(),attrs:{value:t.id}},[e._v(e._s(t.courseName))])})),1)],1),r("a-form-item",{attrs:{label:"单元名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["unitName",e.validatorRules.unitName],expression:"[ 'unitName', validatorRules.unitName]"}],attrs:{placeholder:"请输入单元名称"}})],1),r("a-form-item",{attrs:{label:"单元简介",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["unitIntro",e.validatorRules.unitIntro],expression:"[ 'unitIntro', validatorRules.unitIntro]"}],attrs:{placeholder:"请输入单元简介"}})],1),r("a-form-item",{attrs:{label:"课程封面",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("j-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["unitCover",e.validatorRules.unitCover],expression:"['unitCover', validatorRules.unitCover]"}],attrs:{number:1,"trigger-change":!0}})],1),r("a-form-item",{attrs:{label:"课程视频",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-card",[r("a-radio-group",{attrs:{name:"courseVideoSource",defaultValue:1},on:{change:e.onCourseVideoSourceChange},model:{value:e.model.courseVideoSource,callback:function(t){e.$set(e.model,"courseVideoSource",t)},expression:"model.courseVideoSource"}},[r("a-radio",{attrs:{value:1}},[e._v("上传")]),r("a-radio",{attrs:{value:2}},[e._v("链接")]),r("a-radio",{attrs:{value:3}},[e._v("外部")])],1),r("a-divider"),1==e.model.courseVideoSource?r("j-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseVideo",e.validatorRules.courseVideo],expression:"['courseVideo', validatorRules.courseVideo]"}],attrs:{uploadTarget:"qiniu",number:1,"trigger-change":!0}}):e._e(),2==e.model.courseVideoSource?r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseVideo",e.validatorRules.courseVideo],expression:"[ 'courseVideo', validatorRules.courseVideo]"}],attrs:{placeholder:"请输入视频地址"}}):e._e(),3==e.model.courseVideoSource?r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseVideo"],expression:"['courseVideo']"}],attrs:{placeholder:"请输入外部播放器代码"}}):e._e()],1)],1),r("a-form-item",{attrs:{label:"课程案例",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("j-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseCase",e.validatorRules.courseCase],expression:"['courseCase', validatorRules.courseCase]"}],attrs:{number:1,"trigger-change":!0}})],1),r("a-form-item",{attrs:{label:"课程资料",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("j-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["coursePpt",e.validatorRules.coursePpt],expression:"['coursePpt', validatorRules.coursePpt]"}],attrs:{"trigger-change":!0}})],1),r("a-form-item",{attrs:{label:"作业类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseWorkType",{initialValue:2},e.validatorRules.courseWorkType],expression:"['courseWorkType', {initialValue: 2}, validatorRules.courseWorkType]"}],attrs:{type:"list","trigger-change":!0,dictCode:"work_type",placeholder:"请选择作业类型"}})],1),r("a-form-item",{attrs:{label:"课程作业",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("j-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseWork",e.validatorRules.courseWork],expression:"['courseWork', validatorRules.courseWork]"}],attrs:{number:1,"trigger-change":!0}})],1),r("a-form-item",{attrs:{label:"地图坐标",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["mapX",e.validatorRules.mapX],expression:"[ 'mapX', validatorRules.mapX]"}],staticStyle:{width:"40%"},attrs:{placeholder:"请输入地图X坐标"}}),r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["mapY",e.validatorRules.mapY],expression:"[ 'mapY', validatorRules.mapY]"}],staticStyle:{width:"40%"},attrs:{placeholder:"请输入地图Y坐标"}})],1)],1)],1),r("div",{staticClass:"drawer-footer"},[r("a-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("确定")])],1)],1)},i=[],o=r("0fea"),s=r("88bc"),l=r.n(s),n=(r("ca00"),r("cf74")),u=r("7b16"),c={name:"TeachingCourseUnitModal",components:{JUpload:n["default"],JDictSelectTag:u["default"]},data:function(){return{form:this.$form.createForm(this),title:"操作",width:800,visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{unitName:{rules:[{required:!0,message:"请输入单元名称!"}]},unitIntro:{rules:[]},unitCover:{},courseId:{rules:[{required:!0,message:"请选择所属课程!"}]},courseVideo:{rules:[]},courseCase:{rules:[]},coursePpt:{rules:[]},courseWorkType:{rules:[]},courseWork:{rules:[]},courseWorkAnswer:{rules:[]},coursePlan:{rules:[]},mapX:{rules:[{pattern:/^-?\d+$/,message:"请输入整数!"}]},mapY:{rules:[{pattern:/^-?\d+$/,message:"请输入整数!"}]}},courseList:[],url:{add:"/teaching/teachingCourseUnit/add",edit:"/teaching/teachingCourseUnit/edit",courseList:"/teaching/teachingCourse/list"}}},created:function(){this.initCourseList()},methods:{initCourseList:function(){var e=this;Object(o["c"])(this.url.courseList,{pageNo:1,pageSize:999}).then((function(t){t.success?e.courseList=t.result.records:e.$message.warning("课程列表获取失败："+t.message)}))},add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(l()(t.model,"createBy","createTime","unitName","unitIntro","courseId","courseVideo","courseVideoSource","coursePpt","courseWorkType","courseWork","courseWorkAnswer","coursePlan","courseCase","mapX","mapY","orderNum"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var i="",s="";e.model.id?(i+=e.url.edit,s="put"):(i+=e.url.add,s="post");var l=Object.assign(e.model,a);Object(o["j"])(i,l,s).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},onCourseVideoSourceChange:function(e){this.form.setFieldsValue({courseVideo:"",courseVideoExtern:""}),this.model.courseVideoExtern="",this.model.courseVideo="",this.model.courseVideoSource=e.target.value},popupCallback:function(e){this.form.setFieldsValue(l()(e,"createBy","createTime","unitName","unitIntro","courseId","courseVideo","coursePpt","courseWorkType","courseWork","courseWorkAnswer","coursePlan","courseCase","mapX","mapY"))}}},d=c,p=(r("c2ce"),r("2877")),m=Object(p["a"])(d,a,i,!1,null,"75af62d5",null);t["default"]=m.exports},c2ce:function(e,t,r){"use strict";r("55c1")},cf74:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{position:"relative"},attrs:{id:e.containerId}},[r("div",{staticClass:"movety-container",staticStyle:{padding:"0 8px",position:"absolute","z-index":"91",height:"32px",width:"104px","text-align":"center"},style:{top:e.top+"px",left:e.left+"px",display:e.moveDisplay}},[r("div",{class:e.showMoverTask?"uploadty-mover-mask":"movety-opt",staticStyle:{"margin-top":"12px"},attrs:{id:e.containerId+"-mover"}},[r("a",{staticStyle:{margin:"0 5px"},on:{click:e.moveLast}},[r("a-icon",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{type:"arrow-left"}})],1),r("a",{staticStyle:{margin:"0 5px"},on:{click:e.moveNext}},[r("a-icon",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{type:"arrow-right"}})],1)])]),r("a-upload",{class:{"uploadty-disabled":e.disabled},attrs:{name:"file",multiple:e.multiple,action:e.getUploadAction(),headers:e.headers,data:e.getUploadData,fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,returnUrl:e.returnUrl,listType:e.complistType},on:{change:e.handleChange,preview:e.handlePreview}},[[e.isImageComp?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1):0==e.fileList.length||e.buttonVisible?r("a-button",[r("a-icon",{attrs:{type:"upload"}}),e._v(e._s(e.text)+"\n      ")],1):e._e()]],2),r("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},i=[],o=r("2b0e"),s=r("9fb0"),l=r("0fea"),n="all",u="image",c="local",d="qiniu",p="oss",m="cos",h=function(){return"-"+parseInt(1e4*Math.random()+1,10)},f=function(){for(var e=[],t="0123456789abcdef",r=0;r<36;r++)e[r]=t.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var a=e.join("");return a=a.replace(/-/g,""),a},v=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},g={name:"JUpload",data:function(){return{urlDownload:"",downloadUrl:{local:window._CONFIG["domianURL"]+"/sys/common/static/",qiniu:window._CONFIG["qn_base"]},uploadAction:{local:window._CONFIG["domianURL"]+"/sys/common/upload",qiniu:"//upload-"+window._CONFIG["qn_area"]+".qiniup.com",oss:"",cos:""},tokenAction:{qiniu:"/common/qiniu/getToken"},headers:{},fileList:[],uploadToken:"",uploadKey:"",newFileList:[],uploadGoOn:!0,previewVisible:!1,previewImage:"",containerId:"",top:"",left:"",moveDisplay:"none",showMoverTask:!1,moverHold:!1,currentImg:""}},props:{text:{type:String,required:!1,default:"点击上传"},fileType:{type:String,required:!1,default:n},uploadPath:{type:String,require:!1,default:""},fileName:{type:String,require:!1},maxFileSize:{type:Number,required:!1,default:1e3},uploadTarget:{type:String,required:!1,default:window._CONFIG["defaultUploadType"]||c},bizPath:{type:String,required:!1,default:"temp"},value:{type:String,required:!1},disabled:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},returnUrl:{type:Boolean,required:!1,default:!0},number:{type:Number,required:!1,default:0},autoDelete:{type:Boolean,required:!1,default:!0},buttonVisible:{type:Boolean,required:!1,default:!0}},watch:{value:{immediate:!0,handler:function(){var e=this.value;e instanceof Array?this.returnUrl?this.initFileList(e.join(",")):this.initFileListArr(e):this.initFileList(e)}}},computed:{isImageComp:function(){return this.fileType===u},complistType:function(){return this.fileType===u?"picture-card":"text"}},created:function(){var e=o["default"].ls.get(s["a"]);this.headers={"X-Access-Token":e},this.containerId="container-ty-"+(new Date).getTime()},methods:{getUploadAction:function(){switch(this.uploadTarget){case c:return this.uploadAction.local;case d:return this.uploadAction.qiniu;case p:return this.uploadAction.oss;case m:return this.uploadAction.cos;default:return this.uploadAction.local}},getDownloadUrl:function(e){switch(this.uploadTarget){case c:return this.downloadUrl.local+e;case d:return this.downloadUrl.qiniu+e;case p:return this.downloadUrl.oss+e;case m:return this.downloadUrl.cos+e;default:return this.uploadAction.local+e}},getUploadData:function(e){switch(this.uploadTarget){case c:return{isup:1,bizPath:this.bizPath};case d:return{token:this.uploadToken,key:this.uploadKey};case p:return{};case m:return{};default:return{isup:1,bizPath:this.bizPath}}},getQiniuToken:function(){var e=this;return new Promise((function(t,r){Object(l["c"])(e.tokenAction.qiniu,{}).then((function(a){if(a.success)return e.uploadToken=a.result,void t();e.$message.error(a.message),r()}))}))},getFileFullName:function(e){return this.uploadPath+(this.fileName?this.fileName:f())+"."+e},saveToDB:function(e,t,r,a){var i=this;return Object(l["k"])("/system/sysFile/add",{fileName:e,filePath:t,fileLocation:r,fileTag:a}).then((function(e){e.success&&i.$emit("saved",e.result)}))},delFromBD:function(e){return Object(l["a"])("/system/sysFile/deleteByPath",{filePath:e})},initFileListArr:function(e){if(e&&0!=e.length){for(var t=[],r=0;r<e.length;r++){var a=getDownloadUrl(e[r].filePath);t.push({uid:h(),name:e[r].fileName,status:"done",url:a,response:{status:"history",message:e[r].filePath}})}this.fileList=t}else this.fileList=[]},initFileList:function(e){if(e&&0!=e.length){for(var t=[],r=e.split(","),a=0;a<r.length;a++){var i=this.getDownloadUrl(r[a]);t.push({uid:h(),name:v(r[a]),status:"done",url:i,response:{status:"history",message:r[a]}})}this.fileList=t}else this.fileList=[]},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");for(var r=[],a=0;a<e.length;a++){if("done"!==e[a].status)return;r.push(e[a].response.message)}r.length>0&&(t=r.join(",")),this.$emit("change",t)},beforeUpload:function(e){this.uploadGoOn=!0;var t=e.type;if(this.fileType===u&&t.indexOf("image")<0)return this.$message.warning("请上传图片"),this.uploadGoOn=!1,!1;if(e.size>1024*this.maxFileSize*1024)return this.$message.warning("文件超过"+this.maxFileSize+"MB"),!1;var r=e.name.split(".");switch(r=r.length>1?r.pop():"",this.uploadKey=this.getFileFullName(r),this.$emit("selected",this.uploadKey,e),this.uploadTarget){case d:return this.getQiniuToken();default:return!0}},handleChange:function(e){var t=this;e.file.status||!1!==this.uploadGoOn||e.fileList.pop();var r=e.fileList;if(this.number>0&&r.length>this.number&&(this.handleDelete(r[0]),r=r.slice(-this.number)),"done"===e.file.status){switch(this.uploadTarget){case c:e.file.response.success&&(r=r.map((function(e){return e.response&&e.response.message&&(e.url=t.getDownloadUrl(e.response.message),t.saveToDB(e.name,e.response.message,1,"后台上传")),e})));case d:e.file.response.key&&(r=r.map((function(e){return e.response&&e.response.key&&(e.response.message=e.response.key,e.url=t.getDownloadUrl(e.response.key),t.saveToDB(e.name,e.response.key,2,"后台上传")),e})))}this.$message.success("".concat(e.file.name," 上传成功!"))}else"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file);if(this.fileList=r,"done"===e.file.status||"removed"===e.file.status)if(this.returnUrl)this.handlePathChange();else{this.newFileList=[];for(var a=0;a<r.length;a++){if("done"!==r[a].status)return;var i={fileName:r[a].name,filePath:r[a].response.message,fileSize:r[a].size};this.newFileList.push(i)}this.$emit("change",this.newFileList)}},handleDelete:function(e){this.autoDelete&&this.delFromBD(e.response.message),this.$emit("delete",e.response.message)},handlePreview:function(e){this.fileType===u?(this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0):location.href=e.url},handleCancel:function(){this.previewVisible=!1},moveLast:function(){var e=this.getIndexByUrl();if(0==e)this.$message.warn("未知的操作");else{for(var t=this.fileList[e].url,r=this.fileList[e-1].url,a=[],i=0;i<this.fileList.length;i++)i==e-1?a.push(t):i==e?a.push(r):a.push(this.fileList[i].url);this.currentImg=r,this.$emit("change",a.join(","))}},moveNext:function(){var e=this.getIndexByUrl();if(e==this.fileList.length-1)this.$message.warn("已到最后~");else{for(var t=this.fileList[e].url,r=this.fileList[e+1].url,a=[],i=0;i<this.fileList.length;i++)i==e+1?a.push(t):i==e?a.push(r):a.push(this.fileList[i].url);this.currentImg=r,this.$emit("change",a.join(","))}},getIndexByUrl:function(){for(var e=0;e<this.fileList.length;e++)if(this.fileList[e].url===this.currentImg||encodeURI(this.fileList[e].url)===this.currentImg)return e;return-1}},mounted:function(){var e=this,t=document.getElementById(this.containerId+"-mover");t.addEventListener("mouseover",(function(){e.moverHold=!0,e.moveDisplay="block"})),t.addEventListener("mouseout",(function(){e.moverHold=!1,e.moveDisplay="none"}));var r=document.getElementById(this.containerId)?document.getElementById(this.containerId).getElementsByClassName("ant-upload-list-picture-card"):[];r&&r.length>0&&(r[0].addEventListener("mouseover",(function(t){t=t||window.event;var r=t.target||t.srcElement;if("ant-upload-list-item-info"==r.className){e.showMoverTask=!1;var a=r.parentElement;e.left=a.offsetLeft,e.top=a.offsetTop+a.offsetHeight-50,e.moveDisplay="block",e.currentImg=r.getElementsByTagName("img")[0].src}})),r[0].addEventListener("mouseout",(function(t){t=t||window.event;var r=t.target||t.srcElement;"ant-upload-list-item-info"==r.className&&(e.showMoverTask=!0,setTimeout((function(){!1===e.moverHold&&(e.moveDisplay="none")}),100)),"ant-upload-list-item ant-upload-list-item-done"!=r.className&&"ant-upload-list ant-upload-list-picture-card"!=r.className||(e.moveDisplay="none")})))},model:{prop:"value",event:"change"}},b=g,w=(r("de21"),r("2877")),y=Object(w["a"])(b,a,i,!1,null,null,null);t["default"]=y.exports},de21:function(e,t,r){"use strict";r("7ab5")}}]);