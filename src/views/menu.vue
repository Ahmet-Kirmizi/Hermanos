<template >
  <div>
    <div class="container-fluid menu-box">
      <div class="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 ">
   <menuCard v-for="(card,index) in cards" :key="index" :title="card.product" :price="card.price" :img-src="card.imgurl"/>
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
        { product: "cappuccino", price: "20.00TL", imgurl: "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",},
        { product: "latte", price: "21.00TL", imgurl: "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",},
        { product: "americano", price: "22.00TL", imgurl: "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",},
        { product: "espresso", price: "23.00TL", imgurl: "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",},
        { product: "cappuccino", price: "20.00TL", imgurl: "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",},
        { product: "latte", price: "21.00TL", imgurl: "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",},
        { product: "americano", price: "22.00TL", imgurl: "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",},
        
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
    z-index: -1;
}


</style>