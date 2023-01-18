(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdb087f2","chunk-e9ca8404","chunk-2f6039ec"],{"315e":function(e,t,r){"use strict";r("d90d")},"56cd1":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-drawer",{attrs:{title:"数据权限规则",width:e.drawerWidth,visible:e.visible},on:{close:e.onClose}},[r("div",{style:{padding:"10px",border:"1px solid #e9e9e9",background:"#fff"}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:8,sm:8}},[r("a-form-item",{attrs:{label:"规则名称",labelCol:{span:8},wrapperCol:{span:14,offset:1}}},[r("a-input",{attrs:{placeholder:"请输入规则名称"},model:{value:e.queryParam.ruleName,callback:function(t){e.$set(e.queryParam,"ruleName",t)},expression:"queryParam.ruleName"}})],1)],1),r("a-col",{attrs:{md:8,sm:8}},[r("a-form-item",{attrs:{label:"规则值",labelCol:{span:8},wrapperCol:{span:14,offset:1}}},[r("a-input",{attrs:{placeholder:"请输入规则值"},model:{value:e.queryParam.ruleValue,callback:function(t){e.$set(e.queryParam,"ruleValue",t)},expression:"queryParam.ruleValue"}})],1)],1),r("a-col",{attrs:{md:7,sm:8}},[r("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[r("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1),r("a-row",[r("a-col",{attrs:{md:24,sm:24}},[r("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"plus"},on:{click:e.addPermissionRule}},[e._v("添加")])],1)],1)],1),r("a-table",{ref:"table",attrs:{rowKey:"id",size:"middle",columns:e.columns,dataSource:e.dataSource,loading:e.loading,rowClassName:e.getRowClassname},scopedSlots:e._u([{key:"action",fn:function(t,a){return r("span",{},[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[r("a-icon",{attrs:{type:"edit"}}),e._v("编辑\n          ")],1),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(a.id)}}},[r("a",[e._v("删除")])])],1)}}])})],1)]),r("permission-data-rule-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],s=r("4ec3"),n=r("b65a"),o=r("7c33"),l=[{title:"规则名称",dataIndex:"ruleName",key:"ruleName"},{title:"规则字段",dataIndex:"ruleColumn",key:"ruleColumn"},{title:"规则值",dataIndex:"ruleValue",key:"ruleValue"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center"}],u={name:"PermissionDataRuleList",mixins:[n["a"]],components:{PermissionDataRuleModal:o["default"]},data:function(){return{queryParam:{},drawerWidth:650,columns:l,permId:"",visible:!1,form:this.$form.createForm(this),loading:!1,url:{list:"/sys/permission/getPermRuleListByPermId",delete:"/sys/permission/deletePermissionRule"}}},created:function(){this.resetScreenSize()},methods:{loadData:function(){if(this.permId){var e=this;this.dataSource=[];var t=this.getQueryParams();Object(s["z"])(t).then((function(t){t.success&&(e.dataSource=t.result)}))}},edit:function(e){e.id&&(this.visible=!0,this.permId=e.id),this.queryParam={},this.queryParam.permissionId=e.id,this.visible=!0,this.loadData(),this.resetScreenSize()},addPermissionRule:function(){this.$refs.modalForm.add(this.permId),this.$refs.modalForm.title="新增"},searchQuery:function(){var e=this,t=this.getQueryParams();t.permissionId=this.permId,Object(s["K"])(t).then((function(t){t.success&&(e.dataSource=t.result)}))},searchReset:function(){this.queryParam={},this.queryParam.permissionId=this.permId,this.loadData(1)},onClose:function(){this.visible=!1},resetScreenSize:function(){var e=document.body.clientWidth;this.drawerWidth=e<500?e:650},getRowClassname:function(e){if(1!=e.status)return"data-rule-invalid"}}},c=u,d=(r("315e"),r("2877")),m=Object(d["a"])(c,a,i,!1,null,null,null);t["default"]=m.exports},"7c33":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则名称"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleName",e.validatorRules.ruleName],expression:"['ruleName', validatorRules.ruleName]"}],attrs:{placeholder:"请输入规则名称"}})],1),r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showRuleColumn,expression:"showRuleColumn"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则字段"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleColumn",e.validatorRules.ruleColumn],expression:"['ruleColumn', validatorRules.ruleColumn]"}],attrs:{placeholder:"请输入规则字段"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"条件规则"}},[r("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleConditions",e.validatorRules.ruleConditions],expression:"['ruleConditions', validatorRules.ruleConditions]"}],attrs:{placeholder:"请输入条件规则",triggerChange:!0,dictCode:"rule_conditions"},on:{change:e.handleChangeRuleCondition}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"规则值"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ruleValue",e.validatorRules.ruleValue],expression:"['ruleValue', validatorRules.ruleValue]"}],attrs:{placeholder:"请输入规则值"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:"1"}],expression:"['status',{initialValue:'1'}]"}],attrs:{buttonStyle:"solid"}},[r("a-radio-button",{attrs:{value:"1"}},[e._v("有效")]),r("a-radio-button",{attrs:{value:"0"}},[e._v("无效")])],1)],1)],1)],1)],1)},i=[],s=r("0fea"),n=r("88bc"),o=r.n(n),l={name:"PermissionDataRuleModal",data:function(){return{queryParam:{},title:"操作",visible:!1,model:{},ruleConditionList:[],labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),permissionId:"",validatorRules:{ruleConditions:{rules:[{required:!0,message:"请选择条件!"}]},ruleName:{rules:[{required:!0,message:"请输入规则名称!"}]},ruleValue:{rules:[{required:!0,message:"请输入规则值!"}]},ruleColumn:{rules:[]}},url:{list:"/sys/dictItem/list",add:"/sys/permission/addPermissionRule",edit:"/sys/permission/editPermissionRule"},showRuleColumn:!0}},created:function(){},methods:{add:function(e){this.permissionId=e,this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),e.permissionId?this.model.permissionId=e.permissionId:this.model.permissionId=this.permissionId,this.visible=!0,this.initRuleCondition(),this.$nextTick((function(){t.form.setFieldsValue(o()(t.model,"status","ruleName","ruleColumn","ruleConditions","ruleValue"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var i="",n="";e.model.id?(i+=e.url.edit,n="put"):(i+=e.url.add,n="post");var o=Object.assign(e.model,a);o.ruleColumn&&o.ruleColumn.length>0&&(o.ruleColumn=o.ruleColumn.trim()),o.ruleValue&&o.ruleValue.length>0&&(o.ruleValue=o.ruleValue.trim()),Object(s["j"])(i,o,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},initRuleCondition:function(){this.model.ruleConditions&&"USE_SQL_RULES"==this.model.ruleConditions?this.showRuleColumn=!1:this.showRuleColumn=!0},handleChangeRuleCondition:function(e){"USE_SQL_RULES"==e?(this.form.setFieldsValue({ruleColumn:""}),this.showRuleColumn=!1):this.showRuleColumn=!0}}},u=l,c=r("2877"),d=Object(c["a"])(u,a,i,!1,null,"3e96f1f8",null);t["default"]=d.exports},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,i="[object Arguments]",s="[object Function]",n="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,a=e?e.length:0,i=Array(a);while(++r<a)i[r]=t(e[r],r,e);return i}function h(e,t){var r=-1,a=t.length,i=e.length;while(++r<a)e[i+r]=t[r];return e}var f=Object.prototype,p=f.hasOwnProperty,g=f.toString,b=c.Symbol,y=f.propertyIsEnumerable,v=b?b.isConcatSpreadable:void 0,w=Math.max;function C(e,t,r,a,i){var s=-1,n=e.length;r||(r=j),i||(i=[]);while(++s<n){var o=e[s];t>0&&r(o)?t>1?C(o,t-1,r,a,i):h(i,o):a||(i[i.length]=o)}return i}function O(e,t){return e=Object(e),R(e,t,(function(t,r){return r in e}))}function R(e,t,r){var a=-1,i=t.length,s={};while(++a<i){var n=t[a],o=e[n];r(o,n)&&(s[n]=o)}return s}function S(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,i=w(r.length-t,0),s=Array(i);while(++a<i)s[a]=r[t+a];a=-1;var n=Array(t+1);while(++a<t)n[a]=r[a];return n[t]=s,d(e,this,n)}}function j(e){return $(e)||x(e)||!!(v&&e&&e[v])}function P(e){if("string"==typeof e||_(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function x(e){return F(e)&&p.call(e,"callee")&&(!y.call(e,"callee")||g.call(e)==i)}var $=Array.isArray;function k(e){return null!=e&&Q(e.length)&&!I(e)}function F(e){return N(e)&&k(e)}function I(e){var t=D(e)?g.call(e):"";return t==s||t==n}function Q(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function N(e){return!!e&&"object"==typeof e}function _(e){return"symbol"==typeof e||N(e)&&g.call(e)==o}var q=S((function(e,t){return null==e?{}:O(e,m(C(t,1),P))}));e.exports=q}).call(this,r("c8ba"))},b65a:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("ca00"),i=r("0fea"),s=r("2b0e"),n=r("9fb0");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={data:function(){return{tokenHeader:{"X-Access-Token":s["default"].ls.get(n["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var r=this.getQueryParams();this.loading=!0,Object(i["c"])(this.url.list,r).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(a["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var r=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){r.loading=!0,Object(i["a"])(r.url.deleteBatch,{ids:e}).then((function(e){e.success?(r.$message.success(e.message),r.loadData(),r.onClearSelected()):r.$message.warning(e.message)})).finally((function(){r.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(i["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,r){Object.keys(r).length>0&&(this.isorter.column=r.field,this.isorter.order="ascend"==r.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var r=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(r["selections"]=this.selectedRowKeys.join(",")),Object(i["b"])(this.url.exportXlsUrl,r).then((function(r){if(r)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([r],{type:"application/vnd.ms-excel"}),e+".xls");else{var a=window.URL.createObjectURL(new Blob([r],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=a,i.setAttribute("download",e+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(a)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var r=e.file.response,a=r.message,i=r.result,s=i.msg,n=i.fileUrl,o=i.fileName,l=window._CONFIG["domianURL"]+n;this.$warning({title:a,content:t("div",[t("span",[s]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(i["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(i["d"])(e);window.open(t)}else this.$message.warning("未知的文件")},getFileAccessHttpUrl:function(e){return Object(i["d"])(e)},getQiniuUrl:function(e){if(e)return e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["qn_base"]+e},getQiniuFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["qn_base"]+e)):this.$message.warning("未知的文件")}}}},d90d:function(e,t,r){}}]);