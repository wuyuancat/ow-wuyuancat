(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5be4339a","chunk-d56e4812"],{"444c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(r)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("sysDepart-modal",{ref:"sysDepartModal",on:{ok:e.modalFormOk}})],1)},o=[],l=a("c1af"),n=a("4ec3"),s=a("0fea"),i=[{title:"机构名称",dataIndex:"departName"},{title:"机构类型",align:"center",dataIndex:"orgType"},{title:"机构编码",dataIndex:"orgCode"},{title:"手机号",dataIndex:"mobile"},{title:"传真",dataIndex:"fax"},{title:"地址",dataIndex:"address"},{title:"排序",align:"center",dataIndex:"departOrder"},{title:"操作",align:"center",dataIndex:"action",scopedSlots:{customRender:"action"}}],d={name:"DepartList2",components:{SysDepartModal:l["default"]},data:function(){return{description:"jeecg 生成SysDepart代码管理页面",queryParam:{},factories:"",dataSource:[],columns:i,isorter:{column:"createTime",order:"desc"},loading:!1,selectedRowKeys:[],selectedRows:[],url:{list:"/sys/sysDepart/list",delete:"/sys/sysDepart/delete",deleteBatch:"/sys/sysDepart/deleteBatch"}}},created:function(){this.loadData()},methods:{loadData:function(){var e=this;this.dataSource=[],Object(n["G"])().then((function(t){t.success&&(e.dataSource=t.result)}))},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},handleDelete:function(e){var t=this;Object(s["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))},handleDetail:function(e){this.$refs.sysDepartModal.edit(e),this.$refs.sysDepartModal.title="详情",this.$refs.sysDepartModal.disableSubmit=!0},batchDel:function(){if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){Object(s["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)}))}})}},handleEdit:function(e){this.$refs.sysDepartModal.edit(e),this.$refs.sysDepartModal.title="编辑"},handleAdd:function(){this.$refs.sysDepartModal.add(),this.$refs.sysDepartModal.title="新增"},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.loadData()},modalFormOk:function(){this.loadData()}}},c=d,u=(a("6b65"),a("2877")),p=Object(u["a"])(c,r,o,!1,null,"3f65c8a4",null);t["default"]=p.exports},5944:function(e,t,a){},"6b65":function(e,t,a){"use strict";a("5944")},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,o="[object Arguments]",l="[object Function]",n="[object GeneratorFunction]",s="[object Symbol]",i="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,c=i||d||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function p(e,t){var a=-1,r=e?e.length:0,o=Array(r);while(++a<r)o[a]=t(e[a],a,e);return o}function m(e,t){var a=-1,r=t.length,o=e.length;while(++a<r)e[o+a]=t[a];return e}var f=Object.prototype,h=f.hasOwnProperty,b=f.toString,g=c.Symbol,v=f.propertyIsEnumerable,y=g?g.isConcatSpreadable:void 0,w=Math.max;function C(e,t,a,r,o){var l=-1,n=e.length;a||(a=k),o||(o=[]);while(++l<n){var s=e[l];t>0&&a(s)?t>1?C(s,t-1,a,r,o):m(o,s):r||(o[o.length]=s)}return o}function x(e,t){return e=Object(e),D(e,t,(function(t,a){return a in e}))}function D(e,t,a){var r=-1,o=t.length,l={};while(++r<o){var n=t[r],s=e[n];a(s,n)&&(l[n]=s)}return l}function S(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,o=w(a.length-t,0),l=Array(o);while(++r<o)l[r]=a[t+r];r=-1;var n=Array(t+1);while(++r<t)n[r]=a[r];return n[t]=l,u(e,this,n)}}function k(e){return R(e)||O(e)||!!(y&&e&&e[y])}function j(e){if("string"==typeof e||M(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function O(e){return _(e)&&h.call(e,"callee")&&(!v.call(e,"callee")||b.call(e)==o)}var R=Array.isArray;function $(e){return null!=e&&I(e.length)&&!N(e)}function _(e){return F(e)&&$(e)}function N(e){var t=T(e)?b.call(e):"";return t==l||t==n}function I(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function F(e){return!!e&&"object"==typeof e}function M(e){return"symbol"==typeof e||F(e)&&b.call(e)==s}var K=S((function(e,t){return null==e?{}:x(e,p(C(t,1),j))}));e.exports=K}).call(this,a("c8ba"))},c1af:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,ok:!1,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构ID"}},[a("a-input",{staticStyle:{border:"0px"},attrs:{placeholder:"",readOnly:"true"},model:{value:e.model.id,callback:function(t){e.$set(e.model,"id",t)},expression:"model.id"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称",hidden:!1,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["departName",e.validatorRules.departName],expression:"['departName', validatorRules.departName ]"}],attrs:{id:"departName",placeholder:"请输入机构/部门名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hidden:e.seen,label:"上级部门",hasFeedback:""}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,placeholder:"请选择上级部门",disabled:e.condition},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型"}},[e.seen?[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"1"}},[e._v("\n            机构\n          ")])],1)]:[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"2"}},[e._v("\n              部门\n            ")]),a("a-radio",{attrs:{value:"3"}},[e._v("\n              班级\n            ")])],1)]],2),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"电话"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",e.validatorRules.mobile],expression:"['mobile',validatorRules.mobile]"}],attrs:{placeholder:"请输入电话"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"传真"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["fax",{}],expression:"['fax', {}]"}],attrs:{placeholder:"请输入传真"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{}],expression:"['address', {}]"}],attrs:{placeholder:"请输入地址"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["departOrder",{initialValue:0}],expression:"[ 'departOrder',{'initialValue':0}]"}]})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{}],expression:"['memo', {}]"}],attrs:{placeholder:"请输入备注"}})],1)],1)],1)],1)},o=[],l=a("0fea"),n=a("4ec3"),s=a("88bc"),i=a.n(s),d=a("261e"),c={name:"SysDepartModal",components:{ATextarea:d["a"]},data:function(){return{departTree:[],orgTypeData:[],phoneWarning:"",departName:"",title:"操作",seen:!1,visible:!1,condition:!0,disableSubmit:!1,model:{},menuhidden:!1,menuusing:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{departName:{rules:[{required:!0,message:"请输入机构/部门名称!"}]},orgCode:{rules:[{required:!0,message:"请输入机构编码!"}]},mobile:{rules:[{validator:this.validateMobile}]}},url:{add:"/sys/sysDepart/add"},dictDisabled:!0}},created:function(){},methods:{loadTreeData:function(){var e=this;Object(n["I"])().then((function(t){if(t.success){e.departTree=[];for(var a=0;a<t.result.length;a++){var r=t.result[a];e.departTree.push(r)}}}))},add:function(e){e?(this.seen=!1,this.dictDisabled=!1):(this.seen=!0,this.dictDisabled=!0),this.edit(e)},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},{}),this.visible=!0,this.loadTreeData(),this.model.parentId=null!=e?e.toString():null,this.seen?this.model.orgCategory="1":this.model.orgCategory="2",this.$nextTick((function(){t.form.setFieldsValue(i()(t.model,"orgCategory","departName","departNameEn","departNameAbbr","departOrder","description","orgType","orgCode","mobile","fax","address","memo","status","delFlag"))}))},close:function(){this.$emit("close"),this.disableSubmit=!1,this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var o=Object.assign(e.model,r);Object(l["j"])(e.url.add,o,"post").then((function(e){e.success?(t.$message.success(e.message),t.loadTreeData(),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateMobile:function(e,t,a){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?a():a("您的手机号码格式不正确!")}}},u=c,p=a("2877"),m=Object(p["a"])(u,r,o,!1,null,"66f4a9e4",null);t["default"]=m.exports}}]);