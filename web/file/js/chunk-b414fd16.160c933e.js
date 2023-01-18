(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b414fd16","chunk-69198a96","chunk-2f6039ec"],{"077e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,okText:"保存并安排任务",cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"任务类名",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jobClassName",{rules:[{required:!0,message:"请输入任务类名!"}]}],expression:"['jobClassName', {rules: [{ required: true, message: '请输入任务类名!' }]}]"}],attrs:{placeholder:"请输入任务类名"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"cron表达式"}},[a("j-cron",{directives:[{name:"decorator",rawName:"v-decorator",value:["cronExpression",{initialValue:"* * * * * ? *"}],expression:"['cronExpression', { initialValue: '* * * * * ? *' }]"}],ref:"innerVueCron",on:{change:e.setCorn}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"参数"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["parameter",{}],expression:"['parameter', {}]"}],attrs:{placeholder:"请输入参数",rows:5}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{}],expression:"['description', {}]"}],attrs:{placeholder:"请输入描述",rows:3}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态"}},[a("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:0}],expression:"[ 'status', {'initialValue':0}]"}],attrs:{type:"radioButton","trigger-change":!0,dictCode:"quartz_status"}})],1)],1)],1)],1)},n=[],s=a("0fea"),i=a("1e29"),o=a("88bc"),l=a.n(o),c={name:"QuartzJobModal",components:{JCron:i["default"]},data:function(){return{title:"操作",buttonStyle:"solid",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},cron:{label:"",value:""},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{cron:{rules:[{required:!0,message:"请输入cron表达式!"}]}},url:{add:"/sys/quartzJob/add",edit:"/sys/quartzJob/edit"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this,a=this;a.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(l()(t.model,"jobClassName","cronExpression","parameter","description","status"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){if("undefined"==typeof r.cronExpression||0==Object.keys(r.cronExpression).length)return e.$message.warning("请输入cron表达式!"),!1;t.confirmLoading=!0;var n="",i="";e.model.id?(n+=e.url.edit,i="put"):(n+=e.url.add,i="post");var o=Object.assign(e.model,r);Object(s["j"])(n,o,i).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},setCorn:function(e){var t=this;this.$nextTick((function(){t.model.cronExpression=e})),0==Object.keys(e).length&&this.$message.warning("请输入cron表达式!")},validateCron:function(e,t,a){t?0==Object.keys(t).length&&a("请输入cron表达式!"):a()}}},u=c,d=a("2877"),m=Object(d["a"])(u,r,n,!1,null,"4c0cef96",null);t["default"]=m.exports},"092e":function(e,t,a){},"7a9d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:10}},[a("a-form-item",{attrs:{label:"任务类名"}},[a("a-input",{attrs:{placeholder:"请输入任务类名"},model:{value:e.queryParam.jobClassName,callback:function(t){e.$set(e.queryParam,"jobClassName",t)},expression:"queryParam.jobClassName"}})],1)],1),a("a-col",{attrs:{md:6,sm:10}},[a("a-form-item",{attrs:{label:"任务状态"}},[a("a-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择状态"},model:{value:e.queryParam.status,callback:function(t){e.$set(e.queryParam,"status",t)},expression:"queryParam.status"}},[a("a-select-option",{attrs:{value:""}},[e._v("全部")]),a("a-select-option",{attrs:{value:"0"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"-1"}},[e._v("停止")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:10}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("定时任务信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"description",fn:function(e){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:20}})],1)}},{key:"parameterRender",fn:function(e){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:20}})],1)}},{key:"action",fn:function(t,r){return a("span",{},[-1==r.status?a("a",{on:{click:function(t){return e.resumeJob(r)}}},[e._v("启动")]):e._e(),0==r.status?a("a",{on:{click:function(t){return e.pauseJob(r)}}},[e._v("停止")]):e._e(),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}},{key:"customRenderStatus",fn:function(t){return[0==t?a("a-tag",{attrs:{color:"green"}},[e._v("已启动")]):e._e(),-1==t?a("a-tag",{attrs:{color:"orange"}},[e._v("已暂停")]):e._e()]}}])})],1),a("quartzJob-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},n=[],s=a("077e"),i=a("0fea"),o=a("b65a"),l=a("d579"),c={name:"QuartzJobList",mixins:[o["a"]],components:{QuartzJobModal:s["default"],JEllipsis:l["default"]},data:function(){return{description:"定时任务在线管理",queryParam:{},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"任务类名",align:"center",dataIndex:"jobClassName",sorter:!0},{title:"cron表达式",align:"center",dataIndex:"cronExpression"},{title:"参数",align:"center",width:150,dataIndex:"parameter",scopedSlots:{customRender:"parameterRender"}},{title:"描述",align:"center",width:250,dataIndex:"description",scopedSlots:{customRender:"description"}},{title:"状态",align:"center",dataIndex:"status",scopedSlots:{customRender:"customRenderStatus"},filterMultiple:!1,filters:[{text:"已启动",value:"0"},{text:"已暂停",value:"-1"}]},{title:"操作",dataIndex:"action",align:"center",width:180,scopedSlots:{customRender:"action"}}],url:{list:"/sys/quartzJob/list",delete:"/sys/quartzJob/delete",deleteBatch:"/sys/quartzJob/deleteBatch",pause:"/sys/quartzJob/pause",resume:"/sys/quartzJob/resume",exportXlsUrl:"sys/quartzJob/exportXls",importExcelUrl:"sys/quartzJob/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.filters.status=t.status[0],this.ipagination=e,this.loadData()},pauseJob:function(e){var t=this;this.$confirm({title:"确认暂停",content:"是否暂停选中任务?",onOk:function(){Object(i["c"])(t.url.pause,{jobClassName:e.jobClassName}).then((function(e){e.success?(t.$message.success(e.message),t.loadData(),t.onClearSelected()):t.$message.warning(e.message)}))}})},resumeJob:function(e){var t=this;this.$confirm({title:"确认启动",content:"是否启动选中任务?",onOk:function(){Object(i["c"])(t.url.resume,{jobClassName:e.jobClassName}).then((function(e){e.success?(t.$message.success(e.message),t.loadData(),t.onClearSelected()):t.$message.warning(e.message)}))}})}}},u=c,d=(a("879a"),a("2877")),m=Object(d["a"])(u,r,n,!1,null,"5dd1db74",null);t["default"]=m.exports},"879a":function(e,t,a){"use strict";a("092e")},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,n="[object Arguments]",s="[object Function]",i="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,r=e?e.length:0,n=Array(r);while(++a<r)n[a]=t(e[a],a,e);return n}function f(e,t){var a=-1,r=t.length,n=e.length;while(++a<r)e[n+a]=t[a];return e}var p=Object.prototype,h=p.hasOwnProperty,g=p.toString,b=u.Symbol,y=p.propertyIsEnumerable,v=b?b.isConcatSpreadable:void 0,w=Math.max;function O(e,t,a,r,n){var s=-1,i=e.length;a||(a=k),n||(n=[]);while(++s<i){var o=e[s];t>0&&a(o)?t>1?O(o,t-1,a,r,n):f(n,o):r||(n[n.length]=o)}return n}function x(e,t){return e=Object(e),C(e,t,(function(t,a){return a in e}))}function C(e,t,a){var r=-1,n=t.length,s={};while(++r<n){var i=t[r],o=e[i];a(o,i)&&(s[i]=o)}return s}function j(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,n=w(a.length-t,0),s=Array(n);while(++r<n)s[r]=a[t+r];r=-1;var i=Array(t+1);while(++r<t)i[r]=a[r];return i[t]=s,d(e,this,i)}}function k(e){return $(e)||_(e)||!!(v&&e&&e[v])}function S(e){if("string"==typeof e||N(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function _(e){return F(e)&&h.call(e,"callee")&&(!y.call(e,"callee")||g.call(e)==n)}var $=Array.isArray;function R(e){return null!=e&&P(e.length)&&!E(e)}function F(e){return q(e)&&R(e)}function E(e){var t=Q(e)?g.call(e):"";return t==s||t==i}function P(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function Q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){return!!e&&"object"==typeof e}function N(e){return"symbol"==typeof e||q(e)&&g.call(e)==o}var J=j((function(e,t){return null==e?{}:x(e,m(O(t,1),S))}));e.exports=J}).call(this,a("c8ba"))},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("ca00"),n=a("0fea"),s=a("2b0e"),i=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{tokenHeader:{"X-Access-Token":s["default"].ls.get(i["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(n["c"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(r["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(n["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(n["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(n["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.style.display="none",n.href=r,n.setAttribute("download",e+".xls"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,r=a.message,n=a.result,s=n.msg,i=n.fileUrl,o=n.fileName,l=window._CONFIG["domianURL"]+i;this.$warning({title:r,content:t("div",[t("span",[s]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(n["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(n["d"])(e);window.open(t)}else this.$message.warning("未知的文件")},getFileAccessHttpUrl:function(e){return Object(n["d"])(e)},getQiniuUrl:function(e){if(e)return e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["qn_base"]+e},getQiniuFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["qn_base"]+e)):this.$message.warning("未知的文件")}}}},d579:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},n=[],s={name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}},i=s,o=a("2877"),l=Object(o["a"])(i,r,n,!1,null,"4de15389",null);t["default"]=l.exports}}]);