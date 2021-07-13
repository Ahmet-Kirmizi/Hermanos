<template >
  <div class="coffe-cards">
    <b-card
      h-100
      :img-src=" imgSrc"
      img-alt="Image"
      img-top
      style="max-width: 15rem"
      class="mb-2"
    >
      <b-card-title>
        <h2>{{ title }}</h2>
      </b-card-title>

      <b-card-text>
       <h3>{{ price }}</h3>
      </b-card-text>

      <b-button href="#" variant="primary" v-on:click="register(title, price)"
        >Sepete Ekle</b-button
      >
    </b-card>
  </div>
</template>


<script>
export default {
  name: "menuCard",
  props: {
    title: String,
    price: String,
    product: String,
    imgSrc:String,
  },
  methods: {
    register: function (productname, price) {
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
  padding:1rem;
}

h3{
  font-weight:400;
}
</style>