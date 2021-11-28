<template>
<header class="text-gray-600 body-font">
      <div class="topnav">
      <a class="active animate__rubberBand" href="/">Shopper</a>      
      <div class="search-container">
        <form>
          <input type="text" placeholder="Search.." name="search" v-model="search_word">
          <button type="submit" id="search"><img src="./../assets/shopping-cart-solid.svg" alt=""></button>
          <button type="carro" id="carro"><img src="./../assets/search-solid.svg" alt=""></button>
        </form>
      </div>
    </div>
    </header>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">


          <!--targeta here--> 
            <div class="p-4 md:w-1/4" v-for="item in info" :key="item">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="{{ item.imageurl }}" alt="blog">
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Fruits</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ item.name }}</h1>
                  <p class="leading-relaxed mb-3"></p>
                  <div class="items-center flex">
                    
                    <button  style="float:right;" class="card-btn inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                      <img src="./../assets/minus-solid.svg" alt="" width="25em"> 
                    </button>
                    <button  style="float:right;" class="card-btn inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                      <img src="./../assets/plus-solid.svg" alt="" width="25em"> 
                    </button>
                    <button  style="float:right;" class="card-btn inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                      <img src="./../assets/trash-alt-solid.svg" alt="" width="25em"> 
                    </button>
                    <select name="quantity" id="cantidad">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                      <p class="price">
                        {{ item.pice }}
                      </p>
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
      search_word: "",
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"); 
* {box-sizing: border-box;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: var(--lt-color-gray-200);
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #F7A072;
  font-weight: bold;
  color: white;
}

.topnav .search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: 2px solid var(--lt-color-gray-300);
  border-radius: 10px 0px 0px 10px;
}
.topnav input[type=text]:hover {
  border: 2px solid var(--lt-color-gray-400);
}

.topnav input[type=text]:focus-border {
  border: 2px solid var(--lt-color-gray-400);
}

.topnav .search-container button {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: var(--lt-color-gray-200);
  font-size: 17px;
  border: none;
  cursor: pointer;
}

#carro:hover {
  border-radius: 0% 20% 20% 0px !important;
}

.topnav .search-container button:hover {
  background: var(--lt-color-gray-300);
  border-radius: 20%;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }

}


.card-btn {
  margin:0px 2px 0px 2px;
}

#cantidad {
  color: var(--lt-color-gray-400)
}

#carro, #search {
  width: 40px;
}
</style>
