webpackJsonp([24],{"9Wlw":function(t,e){},zN3x:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("gUGA"),n=r.n(o),s=r("LHyU"),i=r("aozt"),a=r.n(i),c={data:function(){return{historyOrder:[],currentPage:1,pageSize:10,totalOrder:0,showPagination:!0,rightOptBtn:"historyBtn",titleList:[{id:1,columnTitle:"完成时间",prop:"completedData",sortable:!0},{id:2,columnTitle:"价格(元)",prop:"Price",sortable:!0},{id:3,columnTitle:"类型",prop:"goodsTpye",sortable:!1},{id:4,columnTitle:"数量",prop:"goodsNumber",sortable:!0}]}},components:{wokerOrderList:s.a},mounted:function(){this.gehistoryOrderList()},methods:{gehistoryOrderList:function(){var t=this,e=this.$loading({lock:!0,text:"玩命加载中..."});a.a.get("/wokers/historyOrder?size="+this.pageSize+"&page="+this.currentPage).then(function(r){var o=r.data;e.close(),"0"==o.status&&(t.historyOrder=o.result.historyOrder,t.totalOrder=n()(o.result.totalOrder),t.totalOrder<=t.pageSize&&(t.showPagination=!1))}).catch(function(t){})},handleDeleteOrder:function(t){var e=this;this.$confirm("此订单删除无法恢复! 确认删除订单?","完成订单",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){var r=e.$loading({lock:!0,text:"玩命加载中..."});a.a.post("/wokers/deleteHistoryOrder",{orderId:t.orderId}).then(function(t){var o=t.data;r.close(),"0"==o.status?(e.$message({type:"success",message:"删除成功!"}),e.gehistoryOrderList()):e.$message({type:"error",message:o.msg})}).catch(function(t){r.close()})}).catch(function(){e.$message({type:"info",message:"已取消操作"})})},handleCurrentChange:function(t){this.currentPage=t,this.gehistoryOrderList()}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wokerHistoryOrder"},[r("person-title",[t._v("当前位置 :: 我的订单 >> "),r("em",[t._v("历史订单")])]),t._v(" "),r("div",{staticClass:"wokerHistoryOrder-cont"},[r("wokerOrderList",{attrs:{userOrder:t.historyOrder,rightOptBtn:t.rightOptBtn,titleList:t.titleList},on:{deleteOrder:t.handleDeleteOrder}})],1),t._v(" "),r("div",{staticClass:"pageination-oder"},[t.showPagination?r("el-pagination",{attrs:{background:"","current-page":t.currentPage,"pager-count":5,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalOrder},on:{"current-change":t.handleCurrentChange}}):t._e()],1)],1)},staticRenderFns:[]};var d=r("C7Lr")(c,l,!1,function(t){r("9Wlw")},null,null);e.default=d.exports}});