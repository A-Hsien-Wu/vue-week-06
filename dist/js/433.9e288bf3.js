"use strict";(self["webpackChunkcli_01"]=self["webpackChunkcli_01"]||[]).push([[433],{4433:function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var c=o(3396);const i={class:"container mx-auto h-screen"};function n(e,t,o,n,s,h){const a=(0,c.up)("router-view");return(0,c.wg)(),(0,c.iD)("div",i,[(0,c.Wm)(a)])}var s={data(){return{tokenName:"hexApiToken"}},methods:{checkToken(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexApiToken\s*=\s*([^;]*).*$)|^.*$/,"$1");e?(this.$http.defaults.headers.common.Authorization=e,this.apiCheckLogin()):this.$router.push("/login")},apiCheckLogin(){this.$http.post("https://vue3-course-api.hexschool.io/v2/api/user/check").then((e=>{console.log("apiCheckLogin",e),this.$emit("update:hasLogin",!0)})).catch((e=>{console.log("apiCheckLogin fail",e)}))}},created(){this.checkToken()}},h=o(89);const a=(0,h.Z)(s,[["render",n]]);var r=a}}]);
//# sourceMappingURL=433.9e288bf3.js.map