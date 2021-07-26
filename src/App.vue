<template>
  <div id="app">
    <navbarTop />
    <backgroundImg />
    <div> {{ info }} </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios"
import textUnderline from "../src/components/textUnderline.vue";
import backgroundImg from "../src/components/backgroundImg.vue";
import navbarTop from "../src/components/navbarTop.vue";
export default {
  data() {
    return {
      info : null
    }
  },
  components: {
    textUnderline,
    navbarTop,
    backgroundImg,
  },
  mounted() {
    this.$router.push({ path: "/index" });
    axios.get(API_URL).then(response => (this.info = response))
  },
};
const API_URL = "http://192.168.70.125:3000/getSignUpDetails/signUp";
</script>

<style>
.backgroundImg {
  width: 100vw;
  height: 100vh;
}
</style>

