(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9babc8a"],{"004c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-layout",{attrs:{avatar:t.avatar}},[a("div",{attrs:{slot:"headerContent"},slot:"headerContent"},[a("div",{staticClass:"title"},[t._v(t._s(t.timeFix)+"，"+t._s(t.nickname())),a("span",{staticClass:"welcome-text"},[t._v("，"+t._s(t.welcome()))])]),a("div",[t._v("前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台")])]),a("div",{attrs:{slot:"extra"},slot:"extra"},[a("a-row",{staticClass:"more-info"},[a("a-col",{attrs:{span:8}},[a("head-info",{attrs:{title:"项目数",content:"56",center:!1,bordered:!1}})],1),a("a-col",{attrs:{span:8}},[a("head-info",{attrs:{title:"团队排名",content:"8/24",center:!1,bordered:!1}})],1),a("a-col",{attrs:{span:8}},[a("head-info",{attrs:{title:"项目访问",content:"2,223",center:!1}})],1)],1)],1),a("div",[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"进行中的项目","body-style":{padding:0}}},[a("a",{attrs:{slot:"extra"},slot:"extra"},[t._v("全部项目")]),a("div",t._l(t.projects,(function(e,r){return a("a-card-grid",{key:r,staticClass:"project-card-grid"},[a("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[a("a-card-meta",[a("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("a-avatar",{attrs:{size:"small",src:e.cover,icon:"user"}}),a("a",[t._v(t._s(e.title))])],1),a("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[t._v("\n                    "+t._s(e.description)+"\n                  ")])]),a("div",{staticClass:"project-item"},[a("a",{attrs:{href:"/#/"}},[t._v("科学搬砖组")]),a("span",{staticClass:"datetime"},[t._v("9小时前")])])],1)],1)})),1)]),a("a-card",{attrs:{loading:t.loading,title:"动态",bordered:!1}},[a("a-list",t._l(t.activities,(function(e,r){return a("a-list-item",{key:r},[a("a-list-item-meta",[a("a-avatar",{attrs:{slot:"avatar",src:e.user.avatar},slot:"avatar"}),a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(e.user.nickname))]),t._v(" \n                  在 "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.project.name))]),t._v(" \n                  "),a("span",[t._v(t._s(e.project.action))]),t._v(" \n                  "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.project.event))])]),a("div",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(e.time))])],1)],1)})),1)],1)],1),a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"快速开始 / 便捷导航",bordered:!1,"body-style":{padding:0}}},[a("div",{staticClass:"item-group"},[a("a",[t._v("操作一")]),a("a",[t._v("操作二")]),a("a",[t._v("操作三")]),a("a",[t._v("操作四")]),a("a",[t._v("操作五")]),a("a",[t._v("操作六")]),a("a-button",{attrs:{size:"small",type:"primary",ghost:"",icon:"plus"}},[t._v("添加")])],1)]),a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"XX 指数",loading:t.radarLoading,bordered:!1,"body-style":{padding:0}}},[a("div",{staticStyle:{"min-height":"400px"}},[a("radar",{attrs:{data:t.radarData}})],1)]),a("a-card",{attrs:{loading:t.loading,title:"团队",bordered:!1}},[a("div",{staticClass:"members"},[a("a-row",t._l(t.teams,(function(e,r){return a("a-col",{key:r,attrs:{span:12}},[a("a",[a("a-avatar",{attrs:{size:"small",src:e.avatar}}),a("span",{staticClass:"member"},[t._v(t._s(e.name))])],1)])})),1)],1)])],1)],1)],1)])},i=[],s=a("ca00"),n=a("2f62"),c=a("b445"),o=a("81d1"),l=a("3981"),d=a("0fea");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v=a("7104"),m={name:"Workplace",components:{PageLayout:c["default"],HeadInfo:o["default"],Radar:l["default"]},data:function(){return{timeFix:Object(s["k"])(),avatar:"",user:{},projects:[],loading:!0,radarLoading:!0,activities:[],teams:[],axis1Opts:{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}],radarData:[]}},computed:{userInfo:function(){return this.$store.getters.userInfo}},created:function(){this.user=this.userInfo,this.avatar=Object(d["d"])(this.userInfo.avatar),Object(d["g"])().then((function(t){})),Object(d["h"])().then((function(t){}))},mounted:function(){this.getProjects(),this.getActivity(),this.getTeams(),this.initRadar()},methods:p(p({},Object(n["c"])(["nickname","welcome"])),{},{getProjects:function(){var t=this;this.$http.get("/api/list/search/projects").then((function(e){t.projects=e.result&&e.result.data,t.loading=!1}))},getActivity:function(){var t=this;this.$http.get("/api/workplace/activity").then((function(e){t.activities=e.result}))},getTeams:function(){var t=this;this.$http.get("/api/workplace/teams").then((function(e){t.teams=e.result}))},initRadar:function(){var t=this;this.radarLoading=!0,this.$http.get("/api/workplace/radar").then((function(e){var a=(new v.View).source(e.result);a.transform({type:"fold",fields:["个人","团队","部门"],key:"user",value:"score"}),t.radarData=a.rows,t.radarLoading=!1}))}})},h=m,g=(a("8598"),a("2877")),y=Object(g["a"])(h,r,i,!1,null,"7ef22fb2",null);e["default"]=y.exports},3981:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.data,padding:[20,20,95,20],scale:t.scale}},[a("v-tooltip"),a("v-axis",{attrs:{dataKey:t.axis1Opts.dataKey,line:t.axis1Opts.line,tickLine:t.axis1Opts.tickLine,grid:t.axis1Opts.grid}}),a("v-axis",{attrs:{dataKey:t.axis2Opts.dataKey,line:t.axis2Opts.line,tickLine:t.axis2Opts.tickLine,grid:t.axis2Opts.grid}}),a("v-legend",{attrs:{dataKey:"user",marker:"circle",offset:30}}),a("v-coord",{attrs:{type:"polar",radius:"0.8"}}),a("v-line",{attrs:{position:"item*score",color:"user",size:2}}),a("v-point",{attrs:{position:"item*score",color:"user",size:4,shape:"circle"}})],1)},i=[],s={dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},n={dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},c=[{dataKey:"score",min:0,max:100},{dataKey:"user",alias:"类型"}],o=[{item:"示例一",score:40},{item:"示例二",score:20},{item:"示例三",score:67},{item:"示例四",score:43},{item:"示例五",score:90}],l={name:"Radar",props:{height:{type:Number,default:254},dataSource:{type:Array,default:function(){return[]}}},data:function(){return{axis1Opts:s,axis2Opts:n,scale:c,data:o}},watch:{dataSource:function(t){0===t.length?this.data=o:this.data=t}}},d=l,u=a("2877"),p=Object(u["a"])(d,r,i,!1,null,"f48462e2",null);e["default"]=p.exports},"401c":function(t,e,a){},"81d1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-info",class:t.center&&"center"},[a("span",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.content))]),t.bordered?a("em"):t._e()])},i=[],s={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},n=s,c=(a("c002"),a("2877")),o=Object(c["a"])(n,r,i,!1,null,"35671dcd",null);e["default"]=o.exports},8598:function(t,e,a){"use strict";a("401c")},c002:function(t,e,a){"use strict";a("facf")},facf:function(t,e,a){}}]);