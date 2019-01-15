webpackJsonp([14],{INXk:function(e,r){},d7QO:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("aozt"),o=t.n(s),i=t("M5pJ"),a=t.n(i),n={data:function(){var e=this,r=function(r,t,s){t!=e.$data.registerForm.passWord?s(new Error("两次密码不一样 !")):s()};return{inputType:"password",questionList:["最喜欢的食物","最敬爱的人","小学班主任老师","最喜欢的电影"],registerForm:{userId:"",passWord:"",agPassword:"",passwordQuestion:"",questionAnswer:""},registerRules:{userId:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:function(e,r,t){/^1[3-8][0-9]{9}$/.test(r)?o.a.get("/users/userExistence?userId="+r).then(function(e){"1"==e.data.status?t(new Error("此账号已存在!")):t()}).catch(function(e){}):t(new Error("手机号码格式不正确!"))},trigger:"blur"}],passWord:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"},{message:"请输入密码",trigger:"blur"}],agPassword:[{required:!0,message:"请再次输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"},{validator:r,trigger:"change"},{validator:r,trigger:"blur"}],passwordQuestion:[{required:!0,message:"请选择密保问题",trigger:"change"}],questionAnswer:[{required:!0,message:"请选择密保答案",trigger:"blur"}]}}},mounted:function(){var e=this;window.onkeydown=function(r){13==window.event.keyCode&&e.submitForm("registerForm")}},methods:{changeInputType:function(){this.inputType="password"==this.inputType?"text":"password"},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;var t=r.registerForm.passWord,s=a.a.utils.utf8.toBytes(t),i=new a.a.ModeOfOperation.ctr([9,6,13,11,7,6,2,8,4,6,8,2,7,4,9,3],new a.a.Counter(5)).encrypt(s),n=a.a.utils.hex.fromBytes(i);o.a.post("/users/register",{userId:r.registerForm.userId,passWord:n,passwordQuestion:r.registerForm.passwordQuestion,questionAnswer:r.registerForm.questionAnswer}).then(function(e){var t=e.data;"0"==t.status?(r.$notify({title:"注册成功",message:"恭喜你! 注册成功!",duration:2e3,type:"success"}),r.$router.push({path:"/login"})):r.$notify({title:"注册失败",message:t.msg,duration:2e3,type:"error"})}).catch(function(e){})})},resetForm:function(e){this.$refs[e].resetFields()}}},l={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"right-register-body"},[e._m(0),e._v(" "),t("div",{staticClass:"form-cont"},[t("el-form",{ref:"registerForm",staticClass:"user-registerForm",attrs:{model:e.registerForm,rules:e.registerRules,"label-width":"7rem"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"账号",prop:"userId"}},[t("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.registerForm.userId,callback:function(r){e.$set(e.registerForm,"userId",r)},expression:"registerForm.userId"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"passWord"}},[t("el-input",{attrs:{type:e.inputType,placeholder:"请输入密码"},model:{value:e.registerForm.passWord,callback:function(r){e.$set(e.registerForm,"passWord",r)},expression:"registerForm.passWord"}}),e._v(" "),t("i",{staticClass:"toggle el-icon-view",class:{color:""==e.registerForm.passWord},on:{click:e.changeInputType}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"agPassword"}},[t("el-input",{attrs:{type:e.inputType,placeholder:"请再次输入密码"},model:{value:e.registerForm.agPassword,callback:function(r){e.$set(e.registerForm,"agPassword",r)},expression:"registerForm.agPassword"}}),e._v(" "),t("i",{staticClass:"toggle el-icon-view",class:{color:""==e.registerForm.agPassword},on:{click:e.changeInputType}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密保问题",prop:"passwordQuestion"}},[t("el-select",{attrs:{placeholder:"用于找回密码"},model:{value:e.registerForm.passwordQuestion,callback:function(r){e.$set(e.registerForm,"passwordQuestion",r)},expression:"registerForm.passwordQuestion"}},e._l(e.questionList,function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"密保答案",prop:"questionAnswer"}},[t("el-input",{attrs:{type:e.inputType,placeholder:"请输入密保答案"},model:{value:e.registerForm.questionAnswer,callback:function(r){e.$set(e.registerForm,"questionAnswer",r)},expression:"registerForm.questionAnswer"}}),e._v(" "),t("i",{staticClass:"toggle el-icon-view",class:{color:""==e.registerForm.agPassword},on:{click:e.changeInputType}})],1)],1)],1),e._v(" "),t("div",{staticClass:"right-cont-btn"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(r){e.submitForm("registerForm")}}},[e._v("注册")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("registerForm")}}},[e._v("重置")])],1),e._v(" "),t("div",{staticClass:"footer"},[t("router-link",{staticClass:"link footer-left",attrs:{to:"/login"}},[e._v("登录")]),e._v(" "),t("router-link",{staticClass:"link footer-right",attrs:{to:"/forgotPassword"}},[e._v("忘记密码?")])],1)])},staticRenderFns:[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"header-title"},[r("h2",{staticClass:"title"},[this._v("register")])])}]};var u=t("C7Lr")(n,l,!1,function(e){t("INXk")},null,null);r.default=u.exports}});