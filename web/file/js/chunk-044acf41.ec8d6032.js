(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-044acf41"],{"0052":function(e,t,a){},2977:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-tabs",{attrs:{defaultActiveKey:"1"},on:{change:e.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"登录日志"}}),a("a-tab-pane",{key:"2",attrs:{tab:"操作日志"}})],1)],1),a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"搜索日志"}},[a("a-input",{attrs:{placeholder:"请输入搜索关键词"},model:{value:e.queryParam.keyWord,callback:function(t){e.$set(e.queryParam,"keyWord",t)},expression:"queryParam.keyWord"}})],1)],1),a("a-col",{attrs:{md:6,sm:10}},[a("a-form-item",{attrs:{label:"创建时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-range-picker",{staticStyle:{width:"210px"},attrs:{format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:e.onDateChange,ok:e.onDateOk},model:{value:e.queryParam.createTimeRange,callback:function(t){e.$set(e.queryParam,"createTimeRange",t)},expression:"queryParam.createTimeRange"}})],1)],1),"2"===e.tabKey?a("a-col",{attrs:{md:5,sm:8}},[a("a-form-item",{staticStyle:{left:"10px"},attrs:{label:"操作类型"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择操作类型",dictCode:"operate_type"},model:{value:e.queryParam.operateType,callback:function(t){e.$set(e.queryParam,"operateType",t)},expression:"queryParam.operateType"}})],1)],1):e._e(),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{left:"10px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px",left:"10px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("a-table",{ref:"table",attrs:{size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.queryParam.logType,expression:"queryParam.logType==2"}],staticStyle:{margin:"0"}},[a("div",{staticStyle:{"margin-bottom":"5px"}},[a("a-badge",{staticStyle:{"vertical-align":"middle"},attrs:{status:"success"}}),a("span",{staticStyle:{"vertical-align":"middle"}},[e._v("请求方法:"+e._s(t.method))])],1),a("div",[a("a-badge",{staticStyle:{"vertical-align":"middle"},attrs:{status:"processing"}}),a("span",{staticStyle:{"vertical-align":"middle"}},[e._v("请求参数:"+e._s(t.requestParam))])],1)])}},{key:"logContent",fn:function(e,t){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:40}})],1)}}])})],1)},s=[],i=a("ca00"),n=a("b65a"),o=a("d579"),l={name:"LogList",mixins:[n["a"]],components:{JEllipsis:o["default"]},data:function(){return{description:"这是日志管理页面",queryParam:{ipInfo:"",createTimeRange:[],logType:"1",keyWord:""},tabKey:"1",columns:[{title:"#",dataIndex:"",key:"rowIndex",align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"日志内容",align:"left",dataIndex:"logContent",scopedSlots:{customRender:"logContent"},sorter:!0},{title:"操作人ID",dataIndex:"userid",align:"center",sorter:!0},{title:"操作人名称",dataIndex:"username",align:"center",sorter:!0},{title:"IP",dataIndex:"ip",align:"center",sorter:!0},{title:"耗时(毫秒)",dataIndex:"costTime",align:"center",sorter:!0},{title:"日志类型",dataIndex:"logType_dictText",align:"center"},{title:"创建时间",dataIndex:"createTime",align:"center",sorter:!0}],operateColumn:{title:"操作类型",dataIndex:"operateType_dictText",align:"center"},labelCol:{xs:{span:1},sm:{span:2}},wrapperCol:{xs:{span:10},sm:{span:16}},url:{list:"/sys/log/list"}}},methods:{getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,delete e.createTimeRange,this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType),Object(i["d"])(e)},searchReset:function(){var e=this,t=e.queryParam.logType;e.queryParam={},e.queryParam.logType=t,e.loadData(this.ipagination.current)},callback:function(e){2==e?(this.tabKey="2",this.columns.splice(7,0,this.operateColumn)):9==this.columns.length&&(this.tabKey="1",this.columns.splice(7,1));var t=this;t.queryParam.logType=e,t.loadData()},onDateChange:function(e,t){this.queryParam.createTime_begin=t[0],this.queryParam.createTime_end=t[1]},onDateOk:function(e){}}},c=l,u=(a("7e5c"),a("2877")),d=Object(u["a"])(c,r,s,!1,null,"8b39f4ae",null);t["default"]=d.exports},"7e5c":function(e,t,a){"use strict";a("0052")},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("ca00"),s=a("0fea"),i=a("2b0e"),n=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{tokenHeader:{"X-Access-Token":i["default"].ls.get(n["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(s["c"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(r["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(s["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(s["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(s["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=r,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,r=a.message,s=a.result,i=s.msg,n=s.fileUrl,o=s.fileName,l=window._CONFIG["domianURL"]+n;this.$warning({title:r,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(s["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(s["d"])(e);window.open(t)}else this.$message.warning("未知的文件")},getFileAccessHttpUrl:function(e){return Object(s["d"])(e)},getQiniuUrl:function(e){if(e)return e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["qn_base"]+e},getQiniuFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["qn_base"]+e)):this.$message.warning("未知的文件")}}}},d579:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},s=[],i={name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}},n=i,o=a("2877"),l=Object(o["a"])(n,r,s,!1,null,"4de15389",null);t["default"]=l.exports}}]);