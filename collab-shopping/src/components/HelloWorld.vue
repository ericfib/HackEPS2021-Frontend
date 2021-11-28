<template>
<header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl">Shopper</span>
        </a>

      <button style="align-items: flex-end;" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        <img src="./../assets/shopping-cart-solid.svg" alt="" width="10%">
      </button>
      </div>
    </header>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/4">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog">
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Fruits</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">aaaaaa</h1>
                  <p class="leading-relaxed mb-3"></p>
                  <div class="flex items-center flex-wrap justify-content:right">
                    
                    <button style="justify-content: right" class="justify-content:right inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                      <img src="./../assets/minus-solid.svg" alt="" width="25em"> 
                    </button>
                    <button style="justify-content: right" class="float:right inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                      <img src="./../assets/plus-solid.svg" alt="" width="25em"> 
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
import { myApi } from '../utils/backend-api';

export default {
  data() {
    return {
      info: null,
    }
  },
  created(){
    this.reload();
  },

  methods : {
    async reload() {
      const {data:d}=await myApi.get("/products")
      this.info = d.products
    }
  },

};
</script>



<style scoped>

</style>
