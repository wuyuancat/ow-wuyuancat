(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fail","chunk-783c5b99"],{"0673":function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"exception"},[c("div",{staticClass:"img"},[c("img",{attrs:{src:t.config[t.type].img}})]),c("div",{staticClass:"content"},[c("h1",[t._v(t._s(t.config[t.type].title))]),c("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),c("div",{staticClass:"action"},[c("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},i=[],n={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},a=n,o={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:a}},methods:{handleToHome:function(){this.$router.push({name:"dashboard"})}}},l=o,r=(c("ccc4"),c("2877")),p=Object(r["a"])(l,s,i,!1,null,"6d5e2f4a",null);e["default"]=p.exports},c20d:function(t,e,c){},cc89:function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("exception-page",{attrs:{type:"404"}})},i=[],n=c("0673"),a={components:{ExceptionPage:n["default"]}},o=a,l=c("2877"),r=Object(l["a"])(o,s,i,!1,null,"ec864426",null);e["default"]=r.exports},ccc4:function(t,e,c){"use strict";c("c20d")}}]);