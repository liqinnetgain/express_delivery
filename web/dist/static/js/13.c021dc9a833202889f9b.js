webpackJsonp([13],{bmep:function(e,s){},gQzI:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=t("mtWM"),n=t.n(o),r={data:function(){return{joinUsForm:{}}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var e=this,s=this.$loading({lock:!0,text:"玩命加载中..."});n.a.get("/users/userInformation").then(function(t){var o=t.data;s.close(),"0"==o.status?e.joinUsForm=o.result:console.log(o.msg)}).catch(function(e){console.log(e)})},handleJoinUs:function(){var e=this,s=this.$loading({lock:!0,text:"玩命加载中..."});n.a.post("/admin/joinUsApply",{userId:this.joinUsForm.userId}).then(function(t){var o=t.data;s.close(),"0"==o.status?e.$message({message:"恭喜你，申请成功! 请注意消息提醒",type:"success",duration:4e3,showClose:!0}):e.$message({message:o.msg,type:"error",duration:2e3,showClose:!0})}).catch(function(e){console.log(e)})}}},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"user-joinUs"},[t("person-title",[e._v("当前位置 :: 加入我们 >> "),t("em",[e._v("申请")])]),e._v(" "),t("div",{staticClass:"user-joinUs-cont"},[e._m(0),e._v(" "),t("div",{staticClass:"info-cont"},[t("el-form",{staticClass:"joinUs-Form",attrs:{model:e.joinUsForm,"label-position":"left","status-icon":!0,"label-width":"5rem"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"姓名 : ",prop:"userName"}},[t("el-input",{attrs:{disabled:"",placeholder:"为了安全,不可二次修改!"},model:{value:e.joinUsForm.userName,callback:function(s){e.$set(e.joinUsForm,"userName","string"==typeof s?s.trim():s)},expression:"joinUsForm.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别 : ",prop:"gender"}},[t("el-radio-group",{attrs:{disabled:""},model:{value:e.joinUsForm.gender,callback:function(s){e.$set(e.joinUsForm,"gender",e._n(s))},expression:"joinUsForm.gender"}},[t("el-radio",{attrs:{label:1}},[e._v("男")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"联系电话 : ",prop:"phoneNum"}},[t("el-input",{attrs:{disabled:""},model:{value:e.joinUsForm.phoneNum,callback:function(s){e.$set(e.joinUsForm,"phoneNum",s)},expression:"joinUsForm.phoneNum"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系地址 : ",prop:"address"}},[t("el-input",{attrs:{disabled:"",placeholder:"输入您的联系地址便于配送"},model:{value:e.joinUsForm.address,callback:function(s){e.$set(e.joinUsForm,"address",s)},expression:"joinUsForm.address"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary",round:""},on:{click:e.handleJoinUs}},[e._v("申请加入")])],1)],1)],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"joinUs-title"},[s("p",{staticClass:"title"},[this._v("你是否想在校园生活中添加一份乐趣,\n                并且同时获得一份收益? 那就加入我们成为工作人员吧!\n            ")])])}]};var i=t("VU/8")(r,a,!1,function(e){t("bmep")},null,null);s.default=i.exports}});