(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03b19fbe","chunk-783c5b99"],{"0673":function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"exception"},[c("div",{staticClass:"img"},[c("img",{attrs:{src:t.config[t.type].img}})]),c("div",{staticClass:"content"},[c("h1",[t._v(t._s(t.config[t.type].title))]),c("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),c("div",{staticClass:"action"},[c("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},n=[],i={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},a=i,o={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:a}},methods:{handleToHome:function(){this.$router.push({name:"dashboard"})}}},r=o,l=(c("ccc4"),c("2877")),p=Object(l["a"])(r,s,n,!1,null,"6d5e2f4a",null);e["default"]=p.exports},c20d:function(t,e,c){},ccc4:function(t,e,c){"use strict";c("c20d")},e409:function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("exception-page",{attrs:{type:"403"}})},n=[],i=c("0673"),a={components:{ExceptionPage:i["default"]}},o=a,r=c("2877"),l=Object(r["a"])(o,s,n,!1,null,"e1fa96e6",null);e["default"]=l.exports}}]);