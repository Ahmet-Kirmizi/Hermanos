<template >
  <div>
    <div class="container-fluid menu-box">
      <div class="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 ">
   <menuCard v-for="(card,index) in cards" :key="index" :title="card.product" :price="card.price"/>
      </div>
  </div>
  </div>
</template>
<script>
import menuCard from '../components/menuCard.vue'
export default {
  components:{
    menuCard,

  },
  data() {
    return {
      cards: [
        { product: "cappuccino", price: "20.00TL" },
        { product: "latte", price: "21.00TL" },
        { product: "americano", price: "22.00TL" },
        { product: "espresso", price: "23.00TL" },
        { product: "cappuccino", price: "20.00TL" },
        { product: "latte", price: "21.00TL" },
        { product: "americano", price: "22.00TL" },
        { product: "espresso", price: "23.00TL" },
        { product: "cappuccino", price: "20.00TL" },
        { product: "latte", price: "21.00TL" },
        { product: "americano", price: "22.00TL" },
        { product: "espresso", price: "23.00TL" },
         { product: "cappuccino", price: "20.00TL" },
        { product: "latte", price: "21.00TL" },
        { product: "americano", price: "22.00TL" },
        { product: "espresso", price: "23.00TL" },
        { product: "cappuccino", price: "20.00TL" },
        { product: "latte", price: "21.00TL" },
        { product: "americano", price: "22.00TL" },
        { product: "espresso", price: "23.00TL" },
        { product: "cappuccino", price: "20.00TL" },
        { product: "latte", price: "21.00TL" },
        { product: "americano", price: "22.00TL" },
        { product: "espresso", price: "23.00TL" },
         { product: "cappuccino", price: "20.00TL" },
        { product: "latte", price: "21.00TL" },
        { product: "americano", price: "22.00TL" },
        { product: "espresso", price: "23.00TL" },
        { product: "cappuccino", price: "20.00TL" },
        { product: "latte", price: "21.00TL" },
        { product: "americano", price: "22.00TL" },
        { product: "espresso", price: "23.00TL" },
        { product: "cappuccino", price: "20.00TL" },
        { product: "latte", price: "21.00TL" },
        { product: "americano", price: "22.00TL" },
        { product: "espresso", price: "23.00TL" },
      ]
    };
  },
};
</script>

<style>
.menu-box {
    display: flex;
    position: absolute;
    width: 90%;
    height: 100%;
    background-color: #9e5e3b2a;
    top: 25%;
    right:5%;
    padding: 50px;
}

::-webkit-scrollbar {
    overflow-y:scroll;
}
</style>