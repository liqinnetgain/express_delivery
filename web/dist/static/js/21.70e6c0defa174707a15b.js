webpackJsonp([21],{eker:function(t,r){},s3Ce:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("aozt"),s=e.n(o),i={data:function(){return{questionList:["最喜欢的食物","最敬爱的人","小学班主任老师","最喜欢的电影"],forgotForm:{userId:"",passwordQuestion:"",questionAnswer:"",grade:0},forgotFormRules:{userId:[{required:!0,message:"请输入账号",trigger:"blur"},{pattern:/^1[3-8][0-9]{9}$/,message:"手机号格式不正确",trigger:"blur"}],passwordQuestion:[{required:!0,message:"请选择密保问题",trigger:"change"}],questionAnswer:[{required:!0,message:"请选择密保答案",trigger:"blur"}]}}},mounted:function(){var t=this;window.onkeydown=function(r){13==window.event.keyCode&&t.submitForm("forgotForm")}},methods:{submitForm:function(t){var r=this;this.$refs[t].validate(function(t){if(!t)return!1;var e={userId:r.forgotForm.userId,passwordQuestion:r.forgotForm.passwordQuestion,questionAnswer:r.forgotForm.questionAnswer,grade:r.forgotForm.grade};s.a.post("/users/forgotPassWord",e).then(function(t){var e=t.data;"0"==e.status?(r.$notify({title:"找回成功",message:"您的密码为"+e.result.passWord,duration:0,type:"success"}),r.$router.push({path:"/login"})):r.$notify({title:"登录失败",message:e.msg,duration:2e3,type:"error"})}).catch(function(t){})})},resetForm:function(t){this.$refs[t].resetFields()}}},n={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"right-forgotPassword-body"},[t._m(0),t._v(" "),e("div",{staticClass:"form-cont"},[e("el-form",{ref:"forgotForm",staticClass:"user-forgotForm",attrs:{model:t.forgotForm,rules:t.forgotFormRules,"label-width":"7rem"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"账号",prop:"userId"}},[e("el-input",{attrs:{placeholder:"请输入注册手机号"},model:{value:t.forgotForm.userId,callback:function(r){t.$set(t.forgotForm,"userId",r)},expression:"forgotForm.userId"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"密保问题",prop:"passwordQuestion"}},[e("el-select",{attrs:{placeholder:"您设置的密保问题"},model:{value:t.forgotForm.passwordQuestion,callback:function(r){t.$set(t.forgotForm,"passwordQuestion",r)},expression:"forgotForm.passwordQuestion"}},t._l(t.questionList,function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),e("el-form-item",{attrs:{label:"密保答案",prop:"questionAnswer"}},[e("el-input",{attrs:{placeholder:"您设置的密保答案"},model:{value:t.forgotForm.questionAnswer,callback:function(r){t.$set(t.forgotForm,"questionAnswer",r)},expression:"forgotForm.questionAnswer"}})],1),t._v(" "),e("el-form-item",{staticClass:"grade",attrs:{label:"级别 : ",prop:"grade"}},[e("el-radio-group",{model:{value:t.forgotForm.grade,callback:function(r){t.$set(t.forgotForm,"grade",t._n(r))},expression:"forgotForm.grade"}},[e("el-radio",{attrs:{label:0}},[t._v("普通用户")]),t._v(" "),e("el-radio",{attrs:{label:1}},[t._v("工作人员")])],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"right-cont-btn"},[e("el-button",{attrs:{type:"primary"},on:{click:function(r){t.submitForm("forgotForm")}}},[t._v("找回")]),t._v(" "),e("el-button",{on:{click:function(r){t.resetForm("forgotForm")}}},[t._v("重置")])],1),t._v(" "),e("div",{staticClass:"footer"},[e("router-link",{staticClass:"link footer-left",attrs:{to:"/login"}},[t._v("登录")]),t._v(" "),e("router-link",{staticClass:"link footer-right",attrs:{to:"/register"}},[t._v("注册")])],1)])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"header-title"},[r("h2",{staticClass:"title"},[this._v("forgot")])])}]};var a=e("C7Lr")(i,n,!1,function(t){e("eker")},null,null);r.default=a.exports}});