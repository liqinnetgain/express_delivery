webpackJsonp([5],{GdAq:function(e,t,n){"use strict";var s=n("4YfN"),i=n.n(s),l=n("6T4k"),o=n("9rMa"),a={props:{leftMenuData:Array},data:function(){return{isCollapse:!1,menuData:this.leftMenuData,defaultActive:"userInformation"}},watch:{isCollapse:function(e){this.$emit("isCollapse",e)}},computed:i()({},Object(o.b)({msgLen:function(e){return e.user.userInfo.msgLen}})),methods:{handleOpen:function(e,t){},handleClose:function(e,t){},handleSelect:function(e,t){}},mounted:function(){var e=this,t=this.$route.path.split("/")[2];this.$refs.leftMenu.activeIndex=t,this.defaultActive=t,l.a.$on("goNewOrder",function(t,n){try{e.$refs.leftMenu.activeIndex=t,n&&!e.isCollapse&&e.$refs.leftMenu.open(n)}catch(e){}}),l.a.$on("readMessage",function(){e.$store.commit("saveUserInfo",{msgLen:e.msgLen-1})})}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"personLeftMenu"},[n("div",{staticClass:"menu-btn",on:{click:function(t){e.isCollapse=!e.isCollapse}}},[e.isCollapse?n("div",{staticClass:"on"},[n("i",{staticClass:"el-icon-menu"})]):n("div",{staticClass:"off"},[n("i",{staticClass:"el-icon-close"})])]),e._v(" "),n("el-menu",{ref:"leftMenu",staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.defaultActive,router:!0,"unique-opened":"","menu-trigger":"click",collapse:e.isCollapse}},e._l(e.menuData,function(t){return n("el-submenu",{key:t.index,attrs:{index:t.index}},[n("template",{slot:"title"},[n("i",{class:t.icon}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])]),e._v(" "),"我的消息"==t.title?n("el-badge",{staticClass:"message-badeg",attrs:{slot:"title",value:e.msgLen,max:9,hidden:!e.msgLen},slot:"title"}):e._e(),e._v(" "),n("el-menu-item-group",e._l(t.menuItem,function(t){return n("el-menu-item",{key:t.route,attrs:{index:t.route}},[e._v(e._s(t.listTitle))])}),1)],2)}),1)],1)},staticRenderFns:[]};var u=n("C7Lr")(a,r,!1,function(e){n("tEO5")},null,null);t.a=u.exports},b40a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("GdAq"),i=n("XZh7"),l=n("aozt"),o=n.n(l),a={components:{leftMenu:s.a,appFooter:i.a},data:function(){return{leftMenuData:[{index:"1",icon:"el-icon-location",title:"个人中心",menuItem:[{route:"userInformation",listTitle:"我的信息"},{route:"changePassword",listTitle:"修改密码"},{route:"addInformation",listTitle:"完善个人信息"}]},{index:"2",icon:"el-icon-tickets",title:"我的订单",menuItem:[{route:"currentOrder",listTitle:"当前订单"},{route:"newOrder",listTitle:"发布订单"},{route:"historyOrder",listTitle:"历史订单"},{route:"userFindOrder",listTitle:"查找订单"}]},{index:"3",icon:"el-icon-message",title:"我的消息",menuItem:[{route:"myMessage",listTitle:"消息"}]},{index:"4",icon:"el-icon-edit-outline",title:"加入我们",menuItem:[{route:"joinUs",listTitle:"申请"}]}],isCollapse:!1}},methods:{checkLogin:function(){var e=this,t=this.$loading({lock:!0,text:"正在加载..."});o.a.get("/users/checkLogin").then(function(n){var s=n.data;t.close(),"0"==s.status||(e.$message({message:"当前未登录!",type:"error",showClose:!0}),e.$router.push({path:"/login"}))}).catch(function(e){t.close()})},handleIsCollapse:function(e){this.isCollapse=e}},created:function(){this.checkLogin()}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"person-user"},[n("div",{staticClass:"person-user-body"},[n("div",{staticClass:"user-left-menu"},[n("leftMenu",{attrs:{leftMenuData:e.leftMenuData},on:{isCollapse:e.handleIsCollapse}})],1),e._v(" "),n("div",{staticClass:"pserson-router-cont",class:{"isCollapse-w":e.isCollapse}},[n("transition",{attrs:{name:"opa-keep",mode:"in-out"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1)],1),e._v(" "),n("transition",{attrs:{name:"opa-mini",mode:"out-in"}},[e.$route.meta.keepAlive?e._e():n("router-view")],1)],1)]),e._v(" "),n("appFooter")],1)},staticRenderFns:[]};var u=n("C7Lr")(a,r,!1,function(e){n("pRox")},null,null);t.default=u.exports},pRox:function(e,t){},tEO5:function(e,t){}});