(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e021d7b4"],{"7ab5":function(e,t,i){},cf74:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{position:"relative"},attrs:{id:e.containerId}},[i("div",{staticClass:"movety-container",staticStyle:{padding:"0 8px",position:"absolute","z-index":"91",height:"32px",width:"104px","text-align":"center"},style:{top:e.top+"px",left:e.left+"px",display:e.moveDisplay}},[i("div",{class:e.showMoverTask?"uploadty-mover-mask":"movety-opt",staticStyle:{"margin-top":"12px"},attrs:{id:e.containerId+"-mover"}},[i("a",{staticStyle:{margin:"0 5px"},on:{click:e.moveLast}},[i("a-icon",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{type:"arrow-left"}})],1),i("a",{staticStyle:{margin:"0 5px"},on:{click:e.moveNext}},[i("a-icon",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{type:"arrow-right"}})],1)])]),i("a-upload",{class:{"uploadty-disabled":e.disabled},attrs:{name:"file",multiple:e.multiple,action:e.getUploadAction(),headers:e.headers,data:e.getUploadData,fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,returnUrl:e.returnUrl,listType:e.complistType},on:{change:e.handleChange,preview:e.handlePreview}},[[e.isImageComp?i("div",[i("a-icon",{attrs:{type:"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1):0==e.fileList.length||e.buttonVisible?i("a-button",[i("a-icon",{attrs:{type:"upload"}}),e._v(e._s(e.text)+"\n      ")],1):e._e()]],2),i("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},n=[],a=i("2b0e"),l=i("9fb0"),o=i("0fea"),r="all",u="image",d="local",c="qiniu",h="oss",p="cos",f=function(){return"-"+parseInt(1e4*Math.random()+1,10)},m=function(){for(var e=[],t="0123456789abcdef",i=0;i<36;i++)e[i]=t.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var s=e.join("");return s=s.replace(/-/g,""),s},g=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},v={name:"JUpload",data:function(){return{urlDownload:"",downloadUrl:{local:window._CONFIG["domianURL"]+"/sys/common/static/",qiniu:window._CONFIG["qn_base"]},uploadAction:{local:window._CONFIG["domianURL"]+"/sys/common/upload",qiniu:"//upload-"+window._CONFIG["qn_area"]+".qiniup.com",oss:"",cos:""},tokenAction:{qiniu:"/common/qiniu/getToken"},headers:{},fileList:[],uploadToken:"",uploadKey:"",newFileList:[],uploadGoOn:!0,previewVisible:!1,previewImage:"",containerId:"",top:"",left:"",moveDisplay:"none",showMoverTask:!1,moverHold:!1,currentImg:""}},props:{text:{type:String,required:!1,default:"点击上传"},fileType:{type:String,required:!1,default:r},uploadPath:{type:String,require:!1,default:""},fileName:{type:String,require:!1},maxFileSize:{type:Number,required:!1,default:1e3},uploadTarget:{type:String,required:!1,default:window._CONFIG["defaultUploadType"]||d},bizPath:{type:String,required:!1,default:"temp"},value:{type:String,required:!1},disabled:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},returnUrl:{type:Boolean,required:!1,default:!0},number:{type:Number,required:!1,default:0},autoDelete:{type:Boolean,required:!1,default:!0},buttonVisible:{type:Boolean,required:!1,default:!0}},watch:{value:{immediate:!0,handler:function(){var e=this.value;e instanceof Array?this.returnUrl?this.initFileList(e.join(",")):this.initFileListArr(e):this.initFileList(e)}}},computed:{isImageComp:function(){return this.fileType===u},complistType:function(){return this.fileType===u?"picture-card":"text"}},created:function(){var e=a["default"].ls.get(l["a"]);this.headers={"X-Access-Token":e},this.containerId="container-ty-"+(new Date).getTime()},methods:{getUploadAction:function(){switch(this.uploadTarget){case d:return this.uploadAction.local;case c:return this.uploadAction.qiniu;case h:return this.uploadAction.oss;case p:return this.uploadAction.cos;default:return this.uploadAction.local}},getDownloadUrl:function(e){switch(this.uploadTarget){case d:return this.downloadUrl.local+e;case c:return this.downloadUrl.qiniu+e;case h:return this.downloadUrl.oss+e;case p:return this.downloadUrl.cos+e;default:return this.uploadAction.local+e}},getUploadData:function(e){switch(this.uploadTarget){case d:return{isup:1,bizPath:this.bizPath};case c:return{token:this.uploadToken,key:this.uploadKey};case h:return{};case p:return{};default:return{isup:1,bizPath:this.bizPath}}},getQiniuToken:function(){var e=this;return new Promise((function(t,i){Object(o["c"])(e.tokenAction.qiniu,{}).then((function(s){if(s.success)return e.uploadToken=s.result,void t();e.$message.error(s.message),i()}))}))},getFileFullName:function(e){return this.uploadPath+(this.fileName?this.fileName:m())+"."+e},saveToDB:function(e,t,i,s){var n=this;return Object(o["k"])("/system/sysFile/add",{fileName:e,filePath:t,fileLocation:i,fileTag:s}).then((function(e){e.success&&n.$emit("saved",e.result)}))},delFromBD:function(e){return Object(o["a"])("/system/sysFile/deleteByPath",{filePath:e})},initFileListArr:function(e){if(e&&0!=e.length){for(var t=[],i=0;i<e.length;i++){var s=getDownloadUrl(e[i].filePath);t.push({uid:f(),name:e[i].fileName,status:"done",url:s,response:{status:"history",message:e[i].filePath}})}this.fileList=t}else this.fileList=[]},initFileList:function(e){if(e&&0!=e.length){for(var t=[],i=e.split(","),s=0;s<i.length;s++){var n=this.getDownloadUrl(i[s]);t.push({uid:f(),name:g(i[s]),status:"done",url:n,response:{status:"history",message:i[s]}})}this.fileList=t}else this.fileList=[]},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");for(var i=[],s=0;s<e.length;s++){if("done"!==e[s].status)return;i.push(e[s].response.message)}i.length>0&&(t=i.join(",")),this.$emit("change",t)},beforeUpload:function(e){this.uploadGoOn=!0;var t=e.type;if(this.fileType===u&&t.indexOf("image")<0)return this.$message.warning("请上传图片"),this.uploadGoOn=!1,!1;if(e.size>1024*this.maxFileSize*1024)return this.$message.warning("文件超过"+this.maxFileSize+"MB"),!1;var i=e.name.split(".");switch(i=i.length>1?i.pop():"",this.uploadKey=this.getFileFullName(i),this.$emit("selected",this.uploadKey,e),this.uploadTarget){case c:return this.getQiniuToken();default:return!0}},handleChange:function(e){var t=this;e.file.status||!1!==this.uploadGoOn||e.fileList.pop();var i=e.fileList;if(this.number>0&&i.length>this.number&&(this.handleDelete(i[0]),i=i.slice(-this.number)),"done"===e.file.status){switch(this.uploadTarget){case d:e.file.response.success&&(i=i.map((function(e){return e.response&&e.response.message&&(e.url=t.getDownloadUrl(e.response.message),t.saveToDB(e.name,e.response.message,1,"后台上传")),e})));case c:e.file.response.key&&(i=i.map((function(e){return e.response&&e.response.key&&(e.response.message=e.response.key,e.url=t.getDownloadUrl(e.response.key),t.saveToDB(e.name,e.response.key,2,"后台上传")),e})))}this.$message.success("".concat(e.file.name," 上传成功!"))}else"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file);if(this.fileList=i,"done"===e.file.status||"removed"===e.file.status)if(this.returnUrl)this.handlePathChange();else{this.newFileList=[];for(var s=0;s<i.length;s++){if("done"!==i[s].status)return;var n={fileName:i[s].name,filePath:i[s].response.message,fileSize:i[s].size};this.newFileList.push(n)}this.$emit("change",this.newFileList)}},handleDelete:function(e){this.autoDelete&&this.delFromBD(e.response.message),this.$emit("delete",e.response.message)},handlePreview:function(e){this.fileType===u?(this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0):location.href=e.url},handleCancel:function(){this.previewVisible=!1},moveLast:function(){var e=this.getIndexByUrl();if(0==e)this.$message.warn("未知的操作");else{for(var t=this.fileList[e].url,i=this.fileList[e-1].url,s=[],n=0;n<this.fileList.length;n++)n==e-1?s.push(t):n==e?s.push(i):s.push(this.fileList[n].url);this.currentImg=i,this.$emit("change",s.join(","))}},moveNext:function(){var e=this.getIndexByUrl();if(e==this.fileList.length-1)this.$message.warn("已到最后~");else{for(var t=this.fileList[e].url,i=this.fileList[e+1].url,s=[],n=0;n<this.fileList.length;n++)n==e+1?s.push(t):n==e?s.push(i):s.push(this.fileList[n].url);this.currentImg=i,this.$emit("change",s.join(","))}},getIndexByUrl:function(){for(var e=0;e<this.fileList.length;e++)if(this.fileList[e].url===this.currentImg||encodeURI(this.fileList[e].url)===this.currentImg)return e;return-1}},mounted:function(){var e=this,t=document.getElementById(this.containerId+"-mover");t.addEventListener("mouseover",(function(){e.moverHold=!0,e.moveDisplay="block"})),t.addEventListener("mouseout",(function(){e.moverHold=!1,e.moveDisplay="none"}));var i=document.getElementById(this.containerId)?document.getElementById(this.containerId).getElementsByClassName("ant-upload-list-picture-card"):[];i&&i.length>0&&(i[0].addEventListener("mouseover",(function(t){t=t||window.event;var i=t.target||t.srcElement;if("ant-upload-list-item-info"==i.className){e.showMoverTask=!1;var s=i.parentElement;e.left=s.offsetLeft,e.top=s.offsetTop+s.offsetHeight-50,e.moveDisplay="block",e.currentImg=i.getElementsByTagName("img")[0].src}})),i[0].addEventListener("mouseout",(function(t){t=t||window.event;var i=t.target||t.srcElement;"ant-upload-list-item-info"==i.className&&(e.showMoverTask=!0,setTimeout((function(){!1===e.moverHold&&(e.moveDisplay="none")}),100)),"ant-upload-list-item ant-upload-list-item-done"!=i.className&&"ant-upload-list ant-upload-list-picture-card"!=i.className||(e.moveDisplay="none")})))},model:{prop:"value",event:"change"}},y=v,w=(i("de21"),i("2877")),b=Object(w["a"])(y,s,n,!1,null,null,null);t["default"]=b.exports},de21:function(e,t,i){"use strict";i("7ab5")}}]);