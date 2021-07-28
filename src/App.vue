<template>
  <div id="app">
    <navbarTop />
    <backgroundImg />
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
  },
};
</script>

<style>
.backgroundImg {
  width: 100vw;
  height: 100vh;
}
</style>

