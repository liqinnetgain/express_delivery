webpackJsonp([32],{"/5+o":function(e,t){},OiEy:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("aozt"),i=r.n(s),n={data:function(){return{ReceiveOrder:[],rightOptBtn:"receiveOrderBtn",titleList:[{id:1,columnTitle:"发布时间",prop:"createTime",sortable:!0},{id:2,columnTitle:"价格(元)",prop:"Price",sortable:!0},{id:3,columnTitle:"类型",prop:"goodsTpye",sortable:!1},{id:4,columnTitle:"数量",prop:"goodsNumber",sortable:!0}]}},components:{wokerOrderList:r("LHyU").a},mounted:function(){this.getReceivedOrderList()},methods:{getReceivedOrderList:function(){var e=this,t=this.$loading({lock:!0,text:"玩命加载中..."});i.a.get("/wokers/theReceivedOrder").then(function(r){var s=r.data;t.close(),"0"==s.status&&(e.ReceiveOrder=s.result)}).catch(function(e){})},handleCompletedOrder:function(e){var t=this;this.$confirm("是否配送完成? 申请完成订单(此操作会向客户发起完成请求,\n            若客户2天内没有确认则系统自动确认","完成订单",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then(function(){var r=t.$loading({lock:!0,text:"玩命加载中..."});i.a.post("/wokers/completedOrde",e).then(function(e){var s=e.data;r.close(),"0"==s.status?t.$message({type:"success",message:"已向客户发起完成请求!"}):t.$message({type:"error",message:s.msg})}).catch(function(e){})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wokerReceivedOrder"},[t("person-title",[this._v("当前位置 :: 我的订单 >> "),t("em",[this._v("已接订单")])]),this._v(" "),t("div",{staticClass:"wokerReceivedOrder-cont"},[t("wokerOrderList",{attrs:{userOrder:this.ReceiveOrder,rightOptBtn:this.rightOptBtn,titleList:this.titleList},on:{completedOrder:this.handleCompletedOrder}})],1)],1)},staticRenderFns:[]};var c=r("C7Lr")(n,o,!1,function(e){r("/5+o")},null,null);t.default=c.exports}});