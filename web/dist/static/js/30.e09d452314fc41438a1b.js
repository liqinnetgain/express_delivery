webpackJsonp([30],{DhMI:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("1t+5"),a=s("aozt"),n=s.n(a),o={components:{joinUsApply:i.a},data:function(){return{titleList:[{id:1,columnTitle:"申请时间",prop:"applyTime",sortable:!0},{id:2,columnTitle:"名字",prop:"userName",sortable:!1},{id:3,columnTitle:"账号",prop:"userId",sortable:!1}],applyList:[]}},created:function(){this.getApplyList()},methods:{getApplyList:function(){var e=this,t=this.$loading({lock:!0,text:"玩命加载中..."});n.a.get("/admin/joinUsApplyList").then(function(s){var i=s.data;t.close(),"0"==i.status?e.applyList=i.result:e.$message({message:i.msg,type:"error",duration:2e3,showClose:!0})}).catch(function(e){})},handleAgreeApply:function(e){var t=this,s=this.$loading({lock:!0,text:"玩命加载中..."});n.a.post("/admin/agreeJoinUsApply",{userId:e.userId}).then(function(e){var i=e.data;s.close(),"0"==i.status?(t.$message({message:"处理成功! 已通过该申请.",type:"success",duration:3e3,showClose:!0}),t.getApplyList()):t.$message({message:i.msg,type:"error",duration:3e3,showClose:!0})}).catch(function(e){})},handleDisAgreeApply:function(e){var t=this,s=this.$loading({lock:!0,text:"玩命加载中..."});n.a.post("/admin/disagreeJoinUsApply",{userId:e.userId}).then(function(e){var i=e.data;s.close(),"0"==i.status?(t.$message({message:"处理成功! 已拒绝该申请.",type:"success",duration:3e3,showClose:!0}),t.getApplyList()):t.$message({message:i.msg,type:"error",duration:3e3,showClose:!0})}).catch(function(e){})}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"joinUsApply-page"},[t("person-title",[this._v("当前位置 :: 加入我们 >> "),t("em",[this._v("申请列表")])]),this._v(" "),t("div",{staticClass:"joinUsApply-page-cont"},[t("joinUsApply",{attrs:{titleList:this.titleList,userList:this.applyList,showBalance:!1,isApply:!0},on:{agreeApply:this.handleAgreeApply,disAgreeApply:this.handleDisAgreeApply}})],1)],1)},staticRenderFns:[]};var p=s("C7Lr")(o,l,!1,function(e){s("bDKO")},null,null);t.default=p.exports},bDKO:function(e,t){}});