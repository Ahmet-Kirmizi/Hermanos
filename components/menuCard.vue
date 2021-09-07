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
      <b-card-title>
        <h2>{{ name }}</h2>
      </b-card-title>

      <b-card-text>
       <h3>{{ price }}</h3>
      </b-card-text>

      <b-button href="#" variant="primary" v-on:click="$store.dispatch('register_push')"
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
  computed: {
    products() {
      return this.$store.state.products
    },
    order(){
      return this.$store.state.order
    }
    },
  mounted (){
    return this.$store.state.order
    console.log(this.name)

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