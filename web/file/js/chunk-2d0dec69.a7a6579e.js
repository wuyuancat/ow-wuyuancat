(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dec69"],{"86a6":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板标题"}},[t("a-input",{attrs:{disabled:""},model:{value:e.templateName,callback:function(a){e.templateName=a},expression:"templateName"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板内容"}},[t("a-textarea",{attrs:{disabled:"",autosize:{minRows:5,maxRows:8}},model:{value:e.templateContent,callback:function(a){e.templateContent=a},expression:"templateContent"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"测试数据"}},[t("a-textarea",{attrs:{placeholder:"请输入json格式测试数据",autosize:{minRows:5,maxRows:8}},model:{value:e.testData,callback:function(a){e.testData=a},expression:"testData"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"消息类型"}},[t("j-dict-select-tag",{attrs:{placeholder:"请选择消息类型",dictCode:"msgType"},model:{value:e.msgType,callback:function(a){e.msgType=a},expression:"msgType"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"消息接收方"}},[t("a-input",{attrs:{placeholder:"请输入消息接收方"},model:{value:e.receiver,callback:function(a){e.receiver=a},expression:"receiver"}})],1)],1)],1)],1)},l=[],n=t("0fea"),o={name:"SysMessageTestModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,url:{send:"/message/sysMessageTemplate/sendMsg"},templateName:"",templateContent:"",receiver:"",msgType:"",testData:"",sendParams:{}}},methods:{open:function(e){this.sendParams.templateCode=e.templateCode,this.templateName=e.templateName,this.templateContent=e.templateContent,this.testData=e.templateTestJson,this.visible=!0},close:function(){this.receiver="",this.msgType="",this.sendParams={},this.visible=!1},handleOk:function(){var e=this,a=this.url.send,t="post";this.sendParams.testData=this.testData,this.sendParams.receiver=this.receiver,this.sendParams.msgType=this.msgType,Object(n["j"])(a,this.sendParams,t).then((function(a){a.success?e.$message.success(a.message):e.$message.warning(a.message)})).finally((function(){e.confirmLoading=!1,e.close()}))},handleCancel:function(){this.close()}}},i=o,r=t("2877"),m=Object(r["a"])(i,s,l,!1,null,"0a67d4a2",null);a["default"]=m.exports}}]);