<template>
  <header class="text-gray-600 body-font">
    <div class="topnav">
      <a class="active animate__rubberBand" href="/" id="title">CartFresh</a>
      <div class="search-container">
        <router-link
          :to="{ path: '/items' }"
          class=""
          style="float: right; padding: 0px"
        >
          <button type="submit" id="carro">
            <img src="./../assets/shopping-cart-solid.svg" alt="" />
          </button>
        </router-link>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          v-model="search_word"
        />
        <button type="carro" id="search" :to="{ path: '/items' }">
          <img src="./../assets/search-solid.svg" alt="" />
        </button>
      </div>
    </div>
    
    </header>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">


          <!--targeta here--> 
            <div class="p-4 md:w-1/4" v-for="item in info" :key="item">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src='item.ProdImageURL'  alt="blog">
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Fruits</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ item.ProdName }}</h1>
                  <p class="leading-relaxed mb-3"></p>
                  <div class="items-center flex">
                    
                    <button @click="addProduct(item.ProdID, (item.RoomProdQuantity||0)-1)" style="float:right;" class="card-btn inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                      <img class="iconimg" src="./../assets/minus-solid.svg" alt="" width="25px"> 
                    </button>
                    <button @click="addProduct(item.ProdID,(item.RoomProdQuantity||0)+1)"
                    style="float:right;" class="card-btn inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                      <img class="iconimg" src="./../assets/plus-solid.svg" alt="" width="25px"> 
                    </button>
                    <button @click="addProduct(item.ProdID,(item.RoomProdQuantity||0)-(item.RoomProdQuantity||0))" style="float:right;" class="card-btn inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                      <img class="iconimg" src="./../assets/trash-alt-solid.svg" alt="" width="25px"> 
                    </button>
                    {{ item.RoomProdQuantity || 0}} ud&ensp;
                      <p class="price">
                        {{ item.ProdPrice }}
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { myApi } from "../utils/backend-api";

export default {
  data() {
    return {
      info: null,
      search_word: "",
    };
  },
  created() {
    this.reload();
    this.timer= setInterval(this.reload,1000);
  },

  methods: {
    async reload() {
<<<<<<< HEAD
      const {data:d}=await myApi.get("/roomProducts")
      this.info = d.products
    },
    addProduct(id,quantity){
      console.log('hola')
      myApi.post("/roomProducts",{
        prodId: id,
        quantity: quantity
        } )
    },
    SubstractProducts(id,quantity) {
      console.log('hola')
      myApi.post("/roomProducts",{
        prodId: id,
        quantity: quantity
        } )
    },
  },
  beforeUnmount(){
    clearInterval(this.timer);
  }

=======
      const { data: d } = await myApi.get("/products");
      this.info = d.products;
    },
  },
>>>>>>> c1f66ad943899bb974b03b6a0232771c9ca7b969
};



</script>

<style scoped>
@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
/*this is hellowrold*/
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: var(--lt-color-gray-200);
}

.topnav a#title {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a#title.active {
  background-color: #f7a072;
  font-weight: bold;
  color: white;
}

.topnav .search-container {
  float: right;
}

.topnav input[type="text"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: 2px solid var(--lt-color-gray-300);
  border-radius: 10px 0px 0px 10px;
}
.topnav input[type="text"]:hover {
  border: 2px solid var(--lt-color-gray-400);
}

.topnav input[type="text"]:focus-border {
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

#search:hover {
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
  .topnav a#title,
  .topnav input[type="text"],
  .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
}

.card-btn {
  margin: 0px 2px 0px 2px;
}

#cantidad {
  color: var(--lt-color-gray-400);
}

#carro,
#search {
  width: 40px;
}
.iconimg{
  width:25px;
}

</style>
