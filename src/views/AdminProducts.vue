<script>
import Pagination from '../components/PaginationComp.vue';
import VueLoading from '../components/VueLoading.vue';

export default {
   data() {
      return {
         products: [],
         pagination: {},
      };
   },
   methods: {
      apiGetProducts(page = 1) { // 取得所有產品列（更新產品列表）
         this.$refs.vueLoading.onLoading();
         const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
         this.$http.get(url).then(response => {
            // console.log('取出產品列表:', response.data);
            this.$refs.vueLoading.onCancel();
            this.products = [...response.data.products];
            this.pagination = { ...response.data.pagination };
         }).catch(error => {
            console.log('取出產品列表 error:', error?.response);
         });
      },
   },
   components: { Pagination, VueLoading },
   mounted() {
      this.apiGetProducts();
   },
};
</script>

<template>
   <div class="container mx-auto h-screen flex flex-col fx-center">
      <div class="p-4">
         <div class="flex-row sm:flex justify-between sm:items-end">
            <h2 class="text-3xl mb-3 text-white">後台產品列表</h2>
         </div>
         <div class="rounded-lg text-center bg-gray-50">
            <div class="grid grid-cols-[1fr_3fr_1fr_1fr_2fr]
               border-b-2 bg-blue-700 rounded-t-lg items-center text-white">
               <span class="p-4">#</span>
               <span class="p-4 text-left">產品名稱</span>
               <span class="p-4 text-right">原價</span>
               <span class="p-4 text-right">售價</span>
               <span class="p-4">是否啟用</span>
            </div>
            <ul class="divide-y-2 divide-gray-200 mt-0">
               <li class="grid grid-cols-[1fr_3fr_1fr_1fr_2fr]
                  text-gray-700 items-center odd:bg-zinc-50 even:bg-slate-50"
                  v-for="(item,index) in products" :key="item.title+index">
                  <div class="p-4" :class="{'text-orange-500':index===0,'italic':index===0}">
                     {{ index===0 ? 'New' : index  }}
                  </div>
                  <div class="p-4 text-left">{{ item.title }}</div>
                  <div class="p-4 text-right">${{ new Intl.NumberFormat().format(item.origin_price) }}</div>
                  <div class="p-4 text-right">${{ new Intl.NumberFormat().format(item.price) }}</div>
                  <div class="p-4">
                     <span class="text-green-500" v-if="item.is_enabled">啟用</span>
                     <span class="text-red-500" v-else>未啟用</span>
                  </div>
               </li>
            </ul>
         </div>
         <div class="flex justify-end py-4 text-white">
            <span>目前有 {{ products.length }} 項產品</span>
         </div>

         <!-- pagination -->
         <Pagination :pages="pagination" @emit_change_page="apiGetProducts"></Pagination>
         <VueLoading ref="vueLoading"></VueLoading>
      </div>
   </div>
</template>
