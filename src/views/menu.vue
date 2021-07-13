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
        { product: "cappuccino", price: "20.00TL", imgurl: "../assets/images/cappuccino.jpg",},
        { product: "latte", price: "21.00TL", imgurl: "../assets/images/cappuccino.jpg",},
        { product: "americano", price: "22.00TL", imgurl: "../assets/images/cappuccino.jpg",},
        { product: "espresso", price: "23.00TL", imgurl: "../assets/images/cappuccino.jpg",},
        { product: "cappuccino", price: "20.00TL", imgurl: "../assets/images/cappuccino.jpg",},
        { product: "latte", price: "21.00TL", imgurl: "../assets/images/cappuccino.jpg",},
        { product: "americano", price: "22.00TL", imgurl: "../assets/images/cappuccino.jpg",},
        
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


</style>