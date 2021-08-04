<template>
  <div class="container-fluid edit-box">
    <p class="titleText">{{ this.cardDataName[0].name }}</p>
    <p class="editDescription">{{ description }}</p>

    <!--<button v-on:click="change">Sugar</button>-->
  </div>
</template>

<script>
let cardDataName;
let cardDataDescription;
import axios from "axios";
export default {
  mounted() {
    this.getCardData();
  },
  props: {
    cardDataName: String,
    description: String,
    size: String,
    sugar: String,
    sauces: String,
  },
  methods: {
    changed: function (event) {
      this.$store.commit("change", event.target.value);
      console.log(this.$store);
    },
    async getCardData() {
      try {
        let cardData = await axios.get(
          "http://192.168.70.125:3000/sendCardData"
        );
        this.cardDataName =  cardData.data.cardDetails
        console.log(this.cardDataName)
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.edit-box {
  display: block;
  position: absolute;
  width: 50%;
  height: 70%;
  background: transparent;
  top: 10%;
  left: 5%;
  padding: 10px;
  z-index: -1;
  color: #b8c6cd;
  font-family: "Lobster", cursive;
}
.titleText {
  font-size: 48px;
}
.editDescription {
  font-size: 30px;
}
</style>script