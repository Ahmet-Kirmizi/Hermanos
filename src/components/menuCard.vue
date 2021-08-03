<template >
  <div class="coffe-cards col-lg-6  col-md-6 col-sm-7 col-6">
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

      <b-button href="#" variant="primary" v-on:click="register_push(name, price)"
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
  methods: {
    register_push: function (productname, price) {
      this.$router.push({ path: "/edit" })
      console.log(productname, price);
    },
  },

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