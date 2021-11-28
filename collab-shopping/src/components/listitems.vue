<script setup>
import { ref } from 'vue'



const count = ref(0)
</script>

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
<!-- header opcional?--> 
  <button @click="goTo('/')">Go to home</button>



  </template>
  <style>
   @import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
 
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
} </style>