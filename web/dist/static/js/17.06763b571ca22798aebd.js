webpackJsonp([17],{"+veA":function(e,t){},pCXn:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("tD7u"),i=r("aozt"),n=r.n(i),a={components:{adminOrderList:s.a},data:function(){return{titleList:[{id:1,columnTitle:"发布时间",prop:"createTime",sortable:!0},{id:2,columnTitle:"发布人",prop:"createOrderPeople",sortable:!1},{id:3,columnTitle:"订单状态",prop:"orderState",sortable:!1}],findOrderForm:{condition:"",answers:""},findOrderList:[]}},methods:{searchTest:function(){var e=this.findOrderForm.answers;switch(this.findOrderForm.condition){case"订单号":return/^\d{16}$/.test(e);case"普通用户id":case"工作人员id":return/^1[3-8][0-9]{9}$/.test(e);default:return!1}},searchOrder:function(){var e=this;if(this.searchTest()){var t=this.$loading({lock:!0,text:"玩命加载中..."});n.a.post("/admin/searchOrder",this.findOrderForm).then(function(r){var s=r.data;t.close(),"0"==s.status?e.findOrderList=s.result:e.$message({type:"error",message:s.msg,showClose:!0})}).catch(function(e){t.close()})}else this.$message({type:"error",message:"条件格式不正确!",showClose:!0})},handleDeleteOrder:function(e){var t=this;this.$confirm("此订单删除无法恢复! 确认删除订单?","完成订单",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"findOneOrder-page"},[r("person-title",[e._v("当前位置 :: 所有订单 >> "),r("em",[e._v("查找订单")])]),e._v(" "),r("div",{staticClass:"findOrder-search"},[r("el-form",{staticClass:"admin-findOrder",attrs:{inline:!0,model:e.findOrderForm}},[r("el-form-item",{attrs:{label:"查询条件"}},[r("el-select",{attrs:{placeholder:"选择查询条件"},model:{value:e.findOrderForm.condition,callback:function(t){e.$set(e.findOrderForm,"condition",t)},expression:"findOrderForm.condition"}},[r("el-option",{attrs:{label:"订单号",value:"订单号"}}),e._v(" "),r("el-option",{attrs:{label:"普通用户id",value:"普通用户id"}}),e._v(" "),r("el-option",{attrs:{label:"工作人员id",value:"工作人员id"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"请输入"}},[r("el-input",{attrs:{placeholder:"查询条件"},model:{value:e.findOrderForm.answers,callback:function(t){e.$set(e.findOrderForm,"answers",t)},expression:"findOrderForm.answers"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.searchOrder}},[e._v("查询")])],1)],1)],1),e._v(" "),r("div",{staticClass:"findOneOrder-cont"},[r("adminOrderList",{attrs:{userOrder:e.findOrderList,titleList:e.titleList},on:{deleteOrder:e.handleDeleteOrder}})],1)],1)},staticRenderFns:[]};var d=r("C7Lr")(a,o,!1,function(e){r("+veA")},"data-v-ae181080",null);t.default=d.exports}});