webpackJsonp([38],{"hF+f":function(t,n){},zAzb:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("aozt"),a=e.n(i),r={data:function(){return{inputType:"password",adminForm:{adminId:"",adminPassWord:""},adminFormRules:{adminId:[{required:!0,message:"请输入账号",trigger:"blur"},{pattern:/^1[3-8][0-9]{9}$/,message:"手机号格式不正确",trigger:"blur"}],adminPassWord:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){var t=this;window.onkeydown=function(n){13==window.event.keyCode&&t.submitForm("adminForm")}},methods:{changeInputType:function(){this.inputType="password"==this.inputType?"text":"password"},submitForm:function(t){var n=this;this.$refs[t].validate(function(t){if(!t)return!1;var e={adminId:n.adminForm.adminId,adminPassWord:n.adminForm.adminPassWord};a.a.post("/admin/login",e).then(function(t){var e=t.data;"0"==e.status?(n.$notify({title:"登录",message:"登录成功",duration:2e3,type:"success"}),n.$router.push({path:"/admin"})):n.$notify({title:"登录失败",message:e.msg,duration:2e3,type:"error"})}).catch(function(t){})})},resetForm:function(t){this.$refs[t].resetFields()}},destroyed:function(){window.onkeydown=null}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"admin-login-page"},[e("div",{staticClass:"admin-login-cont"},[t._m(0),t._v(" "),e("div",{staticClass:"form-cont"},[e("el-form",{ref:"adminForm",staticClass:"admin-Form",attrs:{model:t.adminForm,rules:t.adminFormRules,"label-width":"3rem"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"账号",prop:"adminId"}},[e("el-input",{attrs:{placeholder:"管理员账号"},model:{value:t.adminForm.adminId,callback:function(n){t.$set(t.adminForm,"adminId",n)},expression:"adminForm.adminId"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"密码",prop:"adminPassWord"}},[e("el-input",{attrs:{type:t.inputType,placeholder:"管理员密码"},model:{value:t.adminForm.adminPassWord,callback:function(n){t.$set(t.adminForm,"adminPassWord",n)},expression:"adminForm.adminPassWord"}}),t._v(" "),e("i",{staticClass:"toggle el-icon-view",class:{color:""==t.adminForm.adminPassWord},on:{click:t.changeInputType}})],1)],1),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){t.submitForm("adminForm")}}},[t._v("登录")]),t._v(" "),e("el-button",{on:{click:function(n){t.resetForm("adminForm")}}},[t._v("重置")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header-title"},[n("h2",{staticClass:"title"},[this._v("admin")])])}]};var o=e("C7Lr")(r,s,!1,function(t){e("hF+f")},null,null);n.default=o.exports}});