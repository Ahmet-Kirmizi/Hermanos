<template >
  <div class="coffe-cards">
    <b-card
      :title="title"
      img-src="../assets/images/cappuccinobg.png"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2"
    >
      <b-card-text>
        {{ price }}
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
    imgUrl: String,
    price: String,
    product: String,
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

</style>