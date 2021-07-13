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
        { product: "cappuccino", price: "20.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/216991470_101965968839118_7616420094217531027_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=GHW7wX6C-rcAX8-gLhd&_nc_ht=scontent.fecn7-1.fna&oh=a8309de358888e61355b6fc43bf8c891&oe=60F245F9",},
        { product: "latte", price: "21.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/216991470_101965968839118_7616420094217531027_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=GHW7wX6C-rcAX8-gLhd&_nc_ht=scontent.fecn7-1.fna&oh=a8309de358888e61355b6fc43bf8c891&oe=60F245F9",},
        { product: "americano", price: "22.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/216991470_101965968839118_7616420094217531027_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=GHW7wX6C-rcAX8-gLhd&_nc_ht=scontent.fecn7-1.fna&oh=a8309de358888e61355b6fc43bf8c891&oe=60F245F9",},
        { product: "espresso", price: "23.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/216991470_101965968839118_7616420094217531027_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=GHW7wX6C-rcAX8-gLhd&_nc_ht=scontent.fecn7-1.fna&oh=a8309de358888e61355b6fc43bf8c891&oe=60F245F9",},
        { product: "cappuccino", price: "20.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/216991470_101965968839118_7616420094217531027_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=GHW7wX6C-rcAX8-gLhd&_nc_ht=scontent.fecn7-1.fna&oh=a8309de358888e61355b6fc43bf8c891&oe=60F245F9",},
        { product: "latte", price: "21.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/216991470_101965968839118_7616420094217531027_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=GHW7wX6C-rcAX8-gLhd&_nc_ht=scontent.fecn7-1.fna&oh=a8309de358888e61355b6fc43bf8c891&oe=60F245F9",},
        { product: "americano", price: "22.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/217392436_101965985505783_3195504378779882822_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=QVgKr6bo9U0AX-ErAZ6&_nc_ht=scontent.fecn7-1.fna&oh=77a90673e6f6e46adbf8bcab8770e021&oe=60F2726A",},
        { product: "cappuccino", price: "20.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/217392436_101965985505783_3195504378779882822_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=QVgKr6bo9U0AX-ErAZ6&_nc_ht=scontent.fecn7-1.fna&oh=77a90673e6f6e46adbf8bcab8770e021&oe=60F2726A",},
        { product: "latte", price: "21.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/217392436_101965985505783_3195504378779882822_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=QVgKr6bo9U0AX-ErAZ6&_nc_ht=scontent.fecn7-1.fna&oh=77a90673e6f6e46adbf8bcab8770e021&oe=60F2726A",},
        { product: "americano", price: "22.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/217392436_101965985505783_3195504378779882822_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=QVgKr6bo9U0AX-ErAZ6&_nc_ht=scontent.fecn7-1.fna&oh=77a90673e6f6e46adbf8bcab8770e021&oe=60F2726A",},
        { product: "espresso", price: "23.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/217392436_101965985505783_3195504378779882822_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=QVgKr6bo9U0AX-ErAZ6&_nc_ht=scontent.fecn7-1.fna&oh=77a90673e6f6e46adbf8bcab8770e021&oe=60F2726A",},
        { product: "cappuccino", price: "20.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/217392436_101965985505783_3195504378779882822_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=QVgKr6bo9U0AX-ErAZ6&_nc_ht=scontent.fecn7-1.fna&oh=77a90673e6f6e46adbf8bcab8770e021&oe=60F2726A",},
        { product: "latte", price: "21.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/217392436_101965985505783_3195504378779882822_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=QVgKr6bo9U0AX-ErAZ6&_nc_ht=scontent.fecn7-1.fna&oh=77a90673e6f6e46adbf8bcab8770e021&oe=60F2726A",},
        { product: "americano", price: "22.00TL", imgurl: "https://scontent.fecn7-1.fna.fbcdn.net/v/t1.6435-9/217392436_101965985505783_3195504378779882822_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=QVgKr6bo9U0AX-ErAZ6&_nc_ht=scontent.fecn7-1.fna&oh=77a90673e6f6e46adbf8bcab8770e021&oe=60F2726A",},
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

body{
  overflow: hidden;
}

.menu-box{
  overflow: scroll;
}

::-webkit-scrollbar {
    display: none;
    visibility: hidden;
    opacity: 0;
}
</style>