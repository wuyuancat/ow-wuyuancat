(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7015b54","chunk-0568f6a4","chunk-d56e4812","chunk-2f6039ec","chunk-2d0cfe94"],{"1be7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[this.departId?[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的权限"}},[a("a-tree",{staticStyle:{height:"500px",overflow:"auto"},attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var r=t.slotTitle,i=t.ruleFlag;return a("span",{},[e._v("\n            "+e._s(r)+"\n            "),i?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}],null,!1,239970838)})],1)],1),a("div",{staticClass:"anty-form-btn"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-button",{staticStyle:{float:"right"},attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.handleSubmit}},[e._v("保存")])],1)]:a("a-card",{staticStyle:{height:"200px"},attrs:{bordered:!1}},[a("a-empty",[a("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 请先选择一个部门! ")])])],1),a("depart-datarule-modal",{ref:"datarule"})],2)},i=[],s=a("4ec3"),n=a("6675");function o(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=d(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,n=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return n=e.done,e},e:function(e){o=!0,s=e},f:function(){try{n||null==a.return||a.return()}finally{if(o)throw s}}}}function l(e){return h(e)||u(e)||d(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?p(e,t):void 0}}function u(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function h(e){if(Array.isArray(e))return p(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var f={name:"DepartAuthModal",components:{DepartDataruleModal:n["default"]},data:function(){return{departId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],halfCheckedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!1,title:"部门权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.departId)},onCheck:function(e,t){var a=t.halfCheckedKeys;this.checkedKeys=e,this.halfCheckedKeys=a},show:function(e){this.departId=e,this.loadData()},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},handleCancel:function(){this.close()},handleSubmit:function(){var e=this;e.departId||this.$message.warning("请点击选择一个部门!");var t=[].concat(l(e.checkedKeys),l(e.halfCheckedKeys)),a=t.join(","),r={departId:e.departId,permissionIds:a,lastpermissionIds:e.defaultCheckedKeys.join(",")};e.loading=!0,Object(s["T"])(r).then((function(t){t.success?(e.$message.success(t.message),e.loading=!1,e.loadData()):(e.$message.error(t.message),e.loading=!1)}))},convertTreeListToKeyLeafPairs:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=o(e);try{for(r.s();!(t=r.n()).done;){var i=t.value,s=i.key,n=i.isLeaf,l=i.children;a.push({key:s,isLeaf:n}),l&&l.length>0&&this.convertTreeListToKeyLeafPairs(l,a)}}catch(c){r.e(c)}finally{r.f()}return a},emptyCurrForm:function(){this.form.resetFields()},loadData:function(){var e=this;Object(s["P"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids;var a=e.convertTreeListToKeyLeafPairs(e.treeData);Object(s["F"])({departId:e.departId}).then((function(t){var r=l(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&t.isLeaf})),i=l(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&!t.isLeaf}));e.checkedKeys=l(r),e.halfCheckedKeys=l(i),e.defaultCheckedKeys=[].concat(l(i),l(r)),e.expandedKeysss=e.allTreeKeys}))}))}}},m=f,g=a("2877"),y=Object(g["a"])(m,r,i,!1,null,"725d1288",null);t["default"]=y.exports},"212c":function(e,t,a){},6675:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,r){return a("a-col",{key:"dr"+r,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},i=[],s=a("290c"),n=a("da05"),o=a("0fea"),l={name:"DepartDataruleModal",components:{ACol:n["b"],ARow:s["a"]},data:function(){return{functionId:"",departId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartPermission/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(o["c"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,departId:this.departId,dataRuleIds:this.dataruleChecked.join(",")};Object(o["k"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.departId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.departId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=l,d=a("2877"),u=Object(d["a"])(c,r,i,!1,null,"73771a6a",null);t["default"]=u.exports},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,i="[object Arguments]",s="[object Function]",n="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function h(e,t){var a=-1,r=e?e.length:0,i=Array(r);while(++a<r)i[a]=t(e[a],a,e);return i}function p(e,t){var a=-1,r=t.length,i=e.length;while(++a<r)e[i+a]=t[a];return e}var f=Object.prototype,m=f.hasOwnProperty,g=f.toString,y=d.Symbol,b=f.propertyIsEnumerable,v=y?y.isConcatSpreadable:void 0,C=Math.max;function w(e,t,a,r,i){var s=-1,n=e.length;a||(a=K),i||(i=[]);while(++s<n){var o=e[s];t>0&&a(o)?t>1?w(o,t-1,a,r,i):p(i,o):r||(i[i.length]=o)}return i}function k(e,t){return e=Object(e),x(e,t,(function(t,a){return a in e}))}function x(e,t,a){var r=-1,i=t.length,s={};while(++r<i){var n=t[r],o=e[n];a(o,n)&&(s[n]=o)}return s}function S(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,i=C(a.length-t,0),s=Array(i);while(++r<i)s[r]=a[t+r];r=-1;var n=Array(t+1);while(++r<t)n[r]=a[r];return n[t]=s,u(e,this,n)}}function K(e){return D(e)||T(e)||!!(v&&e&&e[v])}function O(e){if("string"==typeof e||R(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function T(e){return j(e)&&m.call(e,"callee")&&(!b.call(e,"callee")||g.call(e)==i)}var D=Array.isArray;function $(e){return null!=e&&F(e.length)&&!I(e)}function j(e){return A(e)&&$(e)}function I(e){var t=_(e)?g.call(e):"";return t==s||t==n}function F(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function _(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){return!!e&&"object"==typeof e}function R(e){return"symbol"==typeof e||A(e)&&g.call(e)==o}var N=S((function(e,t){return null==e?{}:k(e,h(w(t,1),O))}));e.exports=N}).call(this,a("c8ba"))},"8ff4":function(e,t,a){"use strict";a("212c")},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("ca00"),i=a("0fea"),s=a("2b0e"),n=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={data:function(){return{tokenHeader:{"X-Access-Token":s["default"].ls.get(n["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(i["c"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(r["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(i["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(i["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(i["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=r,i.setAttribute("download",e+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,r=a.message,i=a.result,s=i.msg,n=i.fileUrl,o=i.fileName,l=window._CONFIG["domianURL"]+n;this.$warning({title:r,content:t("div",[t("span",[s]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(i["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(i["d"])(e);window.open(t)}else this.$message.warning("未知的文件")},getFileAccessHttpUrl:function(e){return Object(i["d"])(e)},getQiniuUrl:function(e){if(e)return e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["qn_base"]+e},getQiniuFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["qn_base"]+e)):this.$message.warning("未知的文件")}}}},c1af:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,ok:!1,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构ID"}},[a("a-input",{staticStyle:{border:"0px"},attrs:{placeholder:"",readOnly:"true"},model:{value:e.model.id,callback:function(t){e.$set(e.model,"id",t)},expression:"model.id"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称",hidden:!1,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["departName",e.validatorRules.departName],expression:"['departName', validatorRules.departName ]"}],attrs:{id:"departName",placeholder:"请输入机构/部门名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hidden:e.seen,label:"上级部门",hasFeedback:""}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,placeholder:"请选择上级部门",disabled:e.condition},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型"}},[e.seen?[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"1"}},[e._v("\n            机构\n          ")])],1)]:[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"2"}},[e._v("\n              部门\n            ")]),a("a-radio",{attrs:{value:"3"}},[e._v("\n              班级\n            ")])],1)]],2),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"电话"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",e.validatorRules.mobile],expression:"['mobile',validatorRules.mobile]"}],attrs:{placeholder:"请输入电话"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"传真"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["fax",{}],expression:"['fax', {}]"}],attrs:{placeholder:"请输入传真"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{}],expression:"['address', {}]"}],attrs:{placeholder:"请输入地址"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["departOrder",{initialValue:0}],expression:"[ 'departOrder',{'initialValue':0}]"}]})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{}],expression:"['memo', {}]"}],attrs:{placeholder:"请输入备注"}})],1)],1)],1)],1)},i=[],s=a("0fea"),n=a("4ec3"),o=a("88bc"),l=a.n(o),c=a("261e"),d={name:"SysDepartModal",components:{ATextarea:c["a"]},data:function(){return{departTree:[],orgTypeData:[],phoneWarning:"",departName:"",title:"操作",seen:!1,visible:!1,condition:!0,disableSubmit:!1,model:{},menuhidden:!1,menuusing:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{departName:{rules:[{required:!0,message:"请输入机构/部门名称!"}]},orgCode:{rules:[{required:!0,message:"请输入机构编码!"}]},mobile:{rules:[{validator:this.validateMobile}]}},url:{add:"/sys/sysDepart/add"},dictDisabled:!0}},created:function(){},methods:{loadTreeData:function(){var e=this;Object(n["I"])().then((function(t){if(t.success){e.departTree=[];for(var a=0;a<t.result.length;a++){var r=t.result[a];e.departTree.push(r)}}}))},add:function(e){e?(this.seen=!1,this.dictDisabled=!1):(this.seen=!0,this.dictDisabled=!0),this.edit(e)},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},{}),this.visible=!0,this.loadTreeData(),this.model.parentId=null!=e?e.toString():null,this.seen?this.model.orgCategory="1":this.model.orgCategory="2",this.$nextTick((function(){t.form.setFieldsValue(l()(t.model,"orgCategory","departName","departNameEn","departNameAbbr","departOrder","description","orgType","orgCode","mobile","fax","address","memo","status","delFlag"))}))},close:function(){this.$emit("close"),this.disableSubmit=!1,this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var i=Object.assign(e.model,r);Object(s["j"])(e.url.add,i,"post").then((function(e){e.success?(t.$message.success(e.message),t.loadTreeData(),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateMobile:function(e,t,a){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?a():a("您的手机号码格式不正确!")}}},u=d,h=a("2877"),p=Object(h["a"])(u,r,i,!1,null,"66f4a9e4",null);t["default"]=p.exports},c9c2:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:12,sm:24}},[a("a-card",{attrs:{bordered:!1}},[a("a-row",{staticStyle:{"margin-left":"14px"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd(1)}}},[e._v("添加部门")]),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd(2)}}},[e._v("添加下级")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("部门信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("a-button",{attrs:{title:"删除多条数据",type:"default"},on:{click:e.batchDel}},[e._v("批量删除")])],1),a("div",{staticStyle:{background:"#fff","padding-left":"16px",height:"100%","margin-top":"5px"}},[a("a-alert",{attrs:{type:"info",showIcon:!0}},[a("div",{attrs:{slot:"message"},slot:"message"},[e._v("\n            当前选择："),this.currSelected.title?a("span",[e._v(e._s(e.getCurrSelectedTitle()))]):e._e(),this.currSelected.title?a("a",{staticStyle:{"margin-left":"10px"},on:{click:e.onClearSelected}},[e._v("取消选择")]):e._e()])]),a("a-input-search",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{placeholder:"请输入部门名称"},on:{search:e.onSearch}}),a("a-col",{attrs:{md:10,sm:24}},[[a("a-dropdown",{attrs:{trigger:[this.dropTrigger]},on:{visibleChange:e.dropStatus}},[a("span",{staticStyle:{"user-select":"none"}},[a("a-tree",{attrs:{checkable:"",multiple:"",selectedKeys:e.selectedKeys,checkedKeys:e.checkedKeys,treeData:e.departTree,checkStrictly:e.checkStrictly,expandedKeys:e.iExpandedKeys,autoExpandParent:e.autoExpandParent},on:{select:e.onSelect,check:e.onCheck,rightClick:e.rightHandle,expand:e.onExpand}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.handleAdd(3)}}},[e._v("添加")]),a("a-menu-item",{key:"2",on:{click:e.handleDelete}},[e._v("删除")]),a("a-menu-item",{key:"3",on:{click:e.closeDrop}},[e._v("取消")])],1)],1)]],2)],1)],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),a("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1)],1)],1),a("a-col",{attrs:{md:12,sm:24}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"基本信息"}},[e.selectedKeys.length>0?a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["departName",e.validatorRules.departName],expression:"['departName', validatorRules.departName ]"}],attrs:{placeholder:"请输入机构/部门名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"上级部门"}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.treeData,disabled:e.disable,placeholder:"无"},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCode",e.validatorRules.orgCode],expression:"['orgCode', validatorRules.orgCode ]"}],attrs:{disabled:"",placeholder:"请输入机构编码"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型"}},[e.orgCategoryDisabled?[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"1"}},[e._v("\n                    机构\n                  ")])],1)]:[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"2"}},[e._v("\n                    部门\n                  ")]),a("a-radio",{attrs:{value:"3"}},[e._v("\n                    班级\n                  ")])],1)]],2),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["departOrder",{initialValue:0}],expression:"[ 'departOrder',{'initialValue':0}]"}]})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"手机号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{initialValue:""}],expression:"['mobile', {'initialValue':''}]"}],attrs:{placeholder:"请输入手机号"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{initialValue:""}],expression:"['address', {'initialValue':''}]"}],attrs:{placeholder:"请输入地址"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{initialValue:""}],expression:"['memo', {'initialValue':''}]"}],attrs:{placeholder:"请输入备注"}})],1)],1),a("div",{staticClass:"anty-form-btn"},[a("a-button",{attrs:{type:"default",htmlType:"button",icon:"sync"},on:{click:e.emptyCurrForm}},[e._v("重置")]),a("a-button",{attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.submitCurrForm}},[e._v("保存")])],1)],1):a("a-card",[a("a-empty",[a("span",{attrs:{slot:"description"},slot:"description"},[e._v(" 请先选择一个部门! ")])])],1)],1),a("a-tab-pane",{key:"2",attrs:{tab:"部门权限",forceRender:""}},[a("depart-auth-modal",{ref:"departAuth"})],1)],1)],1),a("depart-modal",{ref:"departModal",on:{ok:e.loadTree}})],1)},i=[],s=a("c1af"),n=a("88bc"),o=a.n(n),l=a("4ec3"),c=a("0fea"),d=a("b65a"),u=a("1be7"),h=[{title:"机构名称",dataIndex:"departName"},{title:"机构类型",align:"center",dataIndex:"orgType"},{title:"机构编码",dataIndex:"orgCode"},{title:"手机号",dataIndex:"mobile"},{title:"传真",dataIndex:"fax"},{title:"地址",dataIndex:"address"},{title:"排序",align:"center",dataIndex:"departOrder"},{title:"操作",align:"center",dataIndex:"action",scopedSlots:{customRender:"action"}}],p={name:"DepartList",mixins:[d["a"]],components:{DepartAuthModal:u["default"],DepartModal:s["default"]},data:function(){return{iExpandedKeys:[],loading:!1,autoExpandParent:!0,currFlowId:"",currFlowName:"",disable:!0,treeData:[],visible:!1,departTree:[],rightClickSelectedKey:"",rightClickSelectedOrgCode:"",hiding:!0,model:{},dropTrigger:"",depart:{},columns:h,disableSubmit:!1,checkedKeys:[],selectedKeys:[],autoIncr:1,currSelected:{},allTreeKeys:[],checkStrictly:!0,form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},graphDatasource:{nodes:[],edges:[]},validatorRules:{departName:{rules:[{required:!0,message:"请输入机构/部门名称!"}]},orgCode:{rules:[{required:!0,message:"请输入机构编码!"}]},orgCategory:{rules:[{required:!0,message:"请输入机构类型!"}]},mobile:{rules:[{validator:this.validateMobile}]}},url:{delete:"/sys/sysDepart/delete",edit:"/sys/sysDepart/edit",deleteBatch:"/sys/sysDepart/deleteBatch",exportXlsUrl:"sys/sysDepart/exportXls",importExcelUrl:"sys/sysDepart/importExcel"},orgCategoryDisabled:!1}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{loadData:function(){this.refresh()},loadTree:function(){var e=this,t=this;t.treeData=[],t.departTree=[],Object(l["G"])().then((function(a){if(a.success){e.allTreeKeys=[];for(var r=0;r<a.result.length;r++){var i=a.result[r];t.treeData.push(i),t.departTree.push(i),t.setThisExpandedKeys(i),t.getAllKeys(i)}e.loading=!1}}))},setThisExpandedKeys:function(e){if(e.children&&e.children.length>0){this.iExpandedKeys.push(e.key);for(var t=0;t<e.children.length;t++)this.setThisExpandedKeys(e.children[t])}},refresh:function(){this.loading=!0,this.loadTree()},rightHandle:function(e){this.dropTrigger="contextmenu",this.rightClickSelectedKey=e.node.eventKey,this.rightClickSelectedOrgCode=e.node.dataRef.orgCode},onExpand:function(e){this.iExpandedKeys=e,this.autoExpandParent=!1},backFlowList:function(){this.$router.back(-1)},dropStatus:function(e){0==e&&(this.dropTrigger="")},closeDrop:function(){this.dropTrigger=""},addRootNode:function(){this.$refs.nodeModal.add(this.currFlowId,"")},batchDel:function(){if(this.checkedKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.checkedKeys.length;t++)e+=this.checkedKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"确定要删除所选中的 "+this.checkedKeys.length+" 条数据，以及子节点数据吗?",onOk:function(){Object(c["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadTree(),a.onClearSelected()):a.$message.warning(e.message)}))}})}},onSearch:function(e){var t=this;e?Object(l["W"])({keyWord:e}).then((function(e){if(e.success){t.departTree=[];for(var a=0;a<e.result.length;a++){var r=e.result[a];t.departTree.push(r)}}else t.$message.warning(e.message)})):t.loadTree()},nodeModalOk:function(){this.loadTree()},nodeModalClose:function(){},hide:function(){this.visible=!1},onCheck:function(e,t){this.hiding=!1,this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},onSelect:function(e,t){this.hiding=!1;var a=t.node.dataRef;this.currSelected=Object.assign({},a),this.model=this.currSelected,this.selectedKeys=[a.key],this.model.parentId=a.parentId,this.setValuesToForm(a),this.$refs.departAuth.show(a.id)},setValuesToForm:function(e){var t=this;"1"==e.orgCategory?this.orgCategoryDisabled=!0:this.orgCategoryDisabled=!1,this.$nextTick((function(){t.form.getFieldDecorator("fax",{initialValue:""}),t.form.setFieldsValue(o()(e,"departName","orgCategory","orgCode","departOrder","mobile","fax","address","memo"))}))},getCurrSelectedTitle:function(){return this.currSelected.title?this.currSelected.title:""},onClearSelected:function(){this.hiding=!0,this.checkedKeys=[],this.currSelected={},this.form.resetFields(),this.selectedKeys=[],this.$refs.departAuth.departId=""},handleNodeTypeChange:function(e){this.currSelected.nodeType=e},notifyTriggerTypeChange:function(e){this.currSelected.notifyTriggerType=e},receiptTriggerTypeChange:function(e){this.currSelected.receiptTriggerType=e},submitCurrForm:function(){var e=this;this.form.validateFields((function(t,a){if(!t){if(!e.currSelected.id)return void e.$message.warning("请点击选择要修改部门!");var r=Object.assign(e.currSelected,a);Object(c["j"])(e.url.edit,r,"put").then((function(t){t.success?(e.$message.success("保存成功!"),e.loadTree()):e.$message.error(t.message)}))}}))},emptyCurrForm:function(){this.form.resetFields()},nodeSettingFormSubmit:function(){this.form.validateFields((function(e,t){}))},openSelect:function(){this.$refs.sysDirectiveModal.show()},handleAdd:function(e){if(1==e)this.$refs.departModal.add(),this.$refs.departModal.title="新增";else if(2==e){var t=this.currSelected.key;if(!t)return this.$message.warning("请先点击选中上级部门！"),!1;this.$refs.departModal.add(this.selectedKeys),this.$refs.departModal.title="新增"}else this.$refs.departModal.add(this.rightClickSelectedKey),this.$refs.departModal.title="新增"},handleDelete:function(){var e=this;this.$confirm({title:"确认删除",content:"确定要删除此部门以及子节点数据吗?",onOk:function(){Object(l["k"])({id:e.rightClickSelectedKey}).then((function(t){if(t.success){e.checkedKeys.splice(e.checkedKeys.findIndex((function(t){return t===e.rightClickSelectedKey})),1),e.$message.success("删除成功!"),e.loadTree();var a=e.form.getFieldValue("orgCode");a&&a===e.rightClickSelectedOrgCode&&e.onClearSelected()}else e.$message.warning("删除失败!")}))}})},selectDirectiveOk:function(e){this.nodeSettingForm.setFieldsValue({directiveCode:e.directiveCode}),this.currSelected.sysCode=e.sysCode},getFlowGraphData:function(e){if(this.graphDatasource.nodes.push({id:e.id,text:e.flowNodeName}),e.children.length>0)for(var t=0;t<e.children.length;t++){var a=e.children[t];this.graphDatasource.edges.push({source:e.id,target:a.id}),this.getFlowGraphData(a)}},expandAll:function(){this.iExpandedKeys=this.allTreeKeys},closeAll:function(){this.iExpandedKeys=[]},checkALL:function(){this.checkStriccheckStrictlytly=!1,this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},getAllKeys:function(e){if(this.allTreeKeys.push(e.key),e.children&&e.children.length>0)for(var t=0;t<e.children.length;t++)this.getAllKeys(e.children[t])}},created:function(){this.currFlowId=this.$route.params.id,this.currFlowName=this.$route.params.name}},f=p,m=(a("8ff4"),a("2877")),g=Object(m["a"])(f,r,i,!1,null,"6066f770",null);t["default"]=g.exports}}]);