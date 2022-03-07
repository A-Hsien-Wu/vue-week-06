"use strict";(self["webpackChunkcli_01"]=self["webpackChunkcli_01"]||[]).push([[66],{1066:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var n=s(3396),o=s(9242),a=s(7139);const i={class:"container mx-auto h-screen flex flex-col fx-center"},r={class:"w-72 h-96 bg-white opacity-100 rounded-lg py-10 px-5 flex-col"},l=(0,n._)("h5",{class:"text-xl text-white -mx-8 p-3 text-center drop-shadow-lg transition ease-in-out bg-blue-500 hover:bg-sky-500 duration-300"},"Hello Stranger",-1),c={for:"emailInput",class:"floating-label mb-8"},u=(0,n._)("span",{class:"floating-assist"},null,-1),p=(0,n._)("span",{class:"mt-2 warning-sentence"},"Please provide a valid email address.",-1),d={for:"passwordInput",class:"floating-label mb-12"},g=["type"],h=(0,n._)("span",{class:"floating-assist after:content-['Password']"},null,-1),w={type:"submit",class:"btn-rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 ring-pink-500/50 mt-auto w-full hover:drop-shadow-lg transition-all"},m={class:"mt-2 text-sm text-red-500 text-center"};function b(t,e,b,f,x,k){const v=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(v),(0,n._)("div",i,[(0,n._)("div",r,[l,(0,n._)("form",{action:"",autocomplete:"off",class:"mt-10 text-gray-500",onSubmit:e[5]||(e[5]=(0,o.iM)(((...t)=>k.clickLogin&&k.clickLogin(...t)),["prevent"]))},[(0,n._)("label",c,[(0,n.wy)((0,n._)("input",{type:"email",id:"emailInput",placeholder:"abc@email.com",name:"input-name",class:"floating-input peer",onFocus:e[0]||(e[0]=(...t)=>k.focusInput&&k.focusInput(...t)),"onUpdate:modelValue":e[1]||(e[1]=t=>x.loginUser.username=t),required:""},null,544),[[o.nr,x.loginUser.username]]),u,p]),(0,n._)("label",d,[(0,n._)("div",{class:"absolute right-0 bottom-2 cursor-pointer",onClick:e[2]||(e[2]=(0,o.iM)((t=>x.showPassword=!x.showPassword),["prevent"]))},[x.showPassword?((0,n.wg)(),(0,n.iD)("span",{key:1,class:"block w-4 h-4 bg-cover",style:(0,a.j5)({backgroundImage:"url('"+s(3263)+"')"})},null,4)):((0,n.wg)(),(0,n.iD)("span",{key:0,class:"block w-4 h-4 bg-cover",style:(0,a.j5)({backgroundImage:"url('"+s(2209)+"')"})},null,4))]),(0,n.wy)((0,n._)("input",{type:x.showPassword?"text":"password",id:"passwordInput",placeholder:"Password",class:"floating-input peer",onFocus:e[3]||(e[3]=(...t)=>k.focusInput&&k.focusInput(...t)),"onUpdate:modelValue":e[4]||(e[4]=t=>x.loginUser.password=t),required:""},null,40,g),[[o.YZ,x.loginUser.password]]),h]),(0,n._)("button",w,(0,a.zw)(x.btnText),1)],32),(0,n._)("p",m,(0,a.zw)(x.warning),1)])])],64)}var f={data(){return{loginUser:{username:"",password:""},token:"",tokenName:"hexApiToken",warning:"",showPassword:!1,btnText:"Login"}},methods:{clickLogin(){if(this.btnText="connecting...",""===this.loginUser.username||""===this.loginUser.password)this.warning="Neither of the text fields can be blank!",this.btnText="Login";else{const t="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(t,this.loginUser).then((t=>{this.btnText="Login",console.log("signin:",t);const{token:e,expired:s}=t.data;document.cookie=`${this.tokenName}=${e}; expires=${new Date(s)}; path=/;`,this.token=e,this.$http.defaults.headers.common.Authorization=e,this.$router.push("/admin/products")})).catch((t=>{const e=t?.response?.data?.error;"auth/invalid-email"===e.code?this.warning="登入失敗! Email 格式錯誤":"auth/user-not-found"===e.code?this.warning="登入失敗! 查無此帳號":"auth/wrong-password"===e.code?this.warning="登入失敗! 密碼不正確，請再重新輸入一次":"auth/too-many-requests"===e.code&&(this.warning="登入失敗! 嘗試登入失敗次數過多，目前無法再登入，請稍後再回來"),this.btnText="Login"}))}},focusInput(){this.warning=""}},created(){}},x=s(89);const k=(0,x.Z)(f,[["render",b]]);var v=k},2209:function(t,e,s){t.exports=s.p+"img/visibility_black_24dp.db5c0ab0.svg"},3263:function(t,e,s){t.exports=s.p+"img/visibility_off_black_24dp.c623145a.svg"}}]);
//# sourceMappingURL=66.115b278c.js.map