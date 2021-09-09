<template >
  <div class="coffe-cards col-lg-2  col-md-6 col-sm-7 col-12">
    <b-card
      h-100
      :img-src="imgSrc"
      img-alt="Image"
      img-top
      style="max-width: 15rem"
      class="mb-2 kart"
    >
      <b-card-title v-model="name">
        <h2>{{ name }}</h2>
      </b-card-title>

      <b-card-text v-model="price">
       <h3>{{ price }}</h3>
      </b-card-text>

      <b-button href="#" variant="primary" v-on:click="addToCart()"
        >Sepete Ekle</b-button
      >
    </b-card>
  </div>
</template>


<script>
export default {
  name: "menuCard",
  props: {
    name: String,
    price: String,
    imgSrc:String,
  },
  methods : {
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        name  : this.name,
        price :  this.price,
        quantity : 1
      })
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    },
  mounted (){
    return this.$store.state.order;
  }
};
</script>

<style scoped>

.card-main {
  top: 90px;
}

.coffe-cards{
  padding: 1rem;
}

h3{
  font-weight:400;
}

.kart{
  border: none;
}


</style>