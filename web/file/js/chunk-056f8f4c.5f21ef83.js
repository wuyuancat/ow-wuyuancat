(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-056f8f4c"],{"3d18":function(e,t,a){"use strict";a("82e4")},"82e4":function(e,t,a){},"9eee":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"文件名称"}},[a("a-input",{attrs:{placeholder:"请输入文件名称"},model:{value:e.queryParam.fileName,callback:function(t){e.$set(e.queryParam,"fileName",t)},expression:"queryParam.fileName"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"文件地址"}},[a("a-input",{attrs:{placeholder:"请输入文件地址"},model:{value:e.queryParam.url,callback:function(t){e.$set(e.queryParam,"url",t)},expression:"queryParam.url"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-upload",{attrs:{name:"file",multiple:!1,action:e.uploadAction,headers:e.tokenHeader,showUploadList:!1,beforeUpload:e.beforeUpload},on:{change:e.handleChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v("\n        OSS文件上传\n      ")],1)],1),a("a-upload",{attrs:{name:"file",multiple:!1,action:e.minioUploadAction,headers:e.tokenHeader,showUploadList:!1,beforeUpload:e.beforeUpload},on:{change:e.handleChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v("\n        MINIO文件上传\n      ")],1)],1)],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.handlePreview(n)}}},[e._v("预览")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.ossDelete(n.id)}}},[e._v("删除")])],1)}}])})],1)])},i=[],s=a("b65a"),r={name:"OSSFileList",mixins:[s["a"]],data:function(){return{description:"文件列表",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"文件名称",align:"center",dataIndex:"fileName"},{title:"文件地址",align:"center",dataIndex:"url"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{upload:"/oss/file/upload",list:"/oss/file/list",delete:"/oss/file/delete",minioUpload:"/sys/upload/uploadMinio"}}},computed:{uploadAction:function(){return window._CONFIG["domianURL"]+this.url.upload},minioUploadAction:function(){return window._CONFIG["domianURL"]+this.url.minioUpload}},methods:{beforeUpload:function(e){var t=e.type;if("image"===t){if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1}else if("file"===t&&t.indexOf("image")>=0)return this.$message.warning("请上传文件"),!1;return!0},handleChange:function(e){"done"===e.file.status?e.file.response.success?(this.loadData(),this.$message.success("".concat(e.file.name," 上传成功!"))):this.$message.error("".concat(e.file.response.message)):"error"===e.file.status&&this.$message.error("".concat(e.file.response.message))},ossDelete:function(e){var t=this;t.$confirm({title:"确认删除",content:"是否删除选中文件?",onOk:function(){t.handleDelete(e)}})},handlePreview:function(e){if(e&&e.url){var t=window._CONFIG["onlinePreviewDomainURL"]+"?url="+encodeURIComponent(e.url);window.open(t,"_blank")}}}},o=r,l=(a("3d18"),a("2877")),c=Object(l["a"])(o,n,i,!1,null,"76b88ccc",null);t["default"]=c.exports},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("ca00"),i=a("0fea"),s=a("2b0e"),r=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{tokenHeader:{"X-Access-Token":s["default"].ls.get(r["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(i["c"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(n["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(i["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(i["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(i["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var n=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=n,i.setAttribute("download",e+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(n)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,n=a.message,i=a.result,s=i.msg,r=i.fileUrl,o=i.fileName,l=window._CONFIG["domianURL"]+r;this.$warning({title:n,content:t("div",[t("span",[s]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(i["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(i["d"])(e);window.open(t)}else this.$message.warning("未知的文件")},getFileAccessHttpUrl:function(e){return Object(i["d"])(e)},getQiniuUrl:function(e){if(e)return e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["qn_base"]+e},getQiniuFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["qn_base"]+e)):this.$message.warning("未知的文件")}}}}}]);