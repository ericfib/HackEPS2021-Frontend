<script setup>
import { ref } from 'vue'



defineProps({
  imageurls: String,
  name: String,
  description: String,
  price: Number,
})

const count = ref(0)
</script>

<template>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      
      
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Fruits</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ name }}</h1>
            <p class="leading-relaxed mb-3">{{ description }}</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Buy
                
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

  </template>
  <style>
  @import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
  </style>