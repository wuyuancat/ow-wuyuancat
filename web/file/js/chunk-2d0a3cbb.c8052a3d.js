(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3cbb"],{"0467":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("a-table",{attrs:{rowKey:"id",bordered:"",columns:e.columns,dataSource:e.dataSource,pagination:!1}})],1)},d=[];function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o={name:"TableTotal",data:function(){return{columns:[{title:"#",width:"180px",align:"center",dataIndex:"rowIndex",customRender:function(e,t,a){return"合计"!==e?parseInt(a)+1:e}},{title:"姓名",dataIndex:"name"},{title:"贡献点",dataIndex:"point"},{title:"等级",dataIndex:"level"},{title:"更新时间",dataIndex:"updateTime"}],dataSource:[{name:"张三",point:23,level:3,updateTime:"2019-8-14"},{name:"小王",point:6,level:1,updateTime:"2019-8-13"},{name:"李四",point:53,level:8,updateTime:"2019-8-12"},{name:"小红",point:44,level:5,updateTime:"2019-8-11"},{name:"王五",point:97,level:10,updateTime:"2019-8-10"},{name:"小明",point:33,level:2,updateTime:"2019-8-10"}]}},mounted:function(){this.tableAddTotalRow(this.columns,this.dataSource)},methods:{tableAddTotalRow:function(e,t){var a="rowIndex",n=i({},a,"合计");e.forEach((function(e){var d=e.key,i=e.dataIndex;if(![d,i].includes(a)){var o=0;t.forEach((function(e){o+=/^\d+\.?\d?$/.test(e[i])?Number.parseInt(e[i]):Number.NaN})),Number.isNaN(o)&&(o="-"),n[i]=o}})),t.push(n)}}},r=o,u=a("2877"),l=Object(u["a"])(r,n,d,!1,null,"eb00ea5c",null);t["default"]=l.exports}}]);