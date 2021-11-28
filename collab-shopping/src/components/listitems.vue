
<template>
<header class="text-gray-600 body-font">
      <div class="topnav">
      <!--this is listitems-->
      <a class="active animate__rubberBand" href="/" id="title">CartFresh</a>      
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
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Cart</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Here's what you have added to your beautiful shopping cart. </p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Item</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Description</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
          </tr>
        </thead>
        <tbody>



          <tr v-for="item in items" :key="item">
            <td class="px-4 py-3">{{item.name}}</td>
            <td class="px-4 py-3">{{item.description}}</td>
            <td class="px-4 py-3">{{item.quantity}}</td>ç
            
            <td class="px-4 py-3 text-lg text-gray-900">{{item.price}}</td>
          </tr>



        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" v-bind:href="'/'">Return Back<i class="fas fa-arrow-left"></i>
      </a>
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Checkout<i class="fas fa-shopping-cart"></i></button>
    </div>
  </div>
</section>
  </template>

  <style>
 @import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
  /*this is hellowrold*/
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
  .topnav a#title, .topnav input[type=text], .topnav .search-container button {
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
i {
  margin-left: 8px;
}
</style>