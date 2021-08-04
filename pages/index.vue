<template>
  <div id="app">
    <navbarTop />
    <backgroundImg />
  </div>
</template>

<script>
import textUnderline from "../components/textUnderline.vue";
import backgroundImg from "../components/backgroundImg.vue";
import navbarTop from "../components/navbarTop.vue";

export default {
  name: "App",
  data() {
    return {
      info: null,
    };
  },
  components: {
    textUnderline,
    navbarTop,
    backgroundImg,
  },
  mounted() {
    if (localStorage.tokenSignIn) {
      this.$router.push({ path: "/menu" });
    } else {
      this.$router.push({ path: "/login" });
    }
  },
};
</script>

<style>
.backgroundImg {
  width: 100vw;
  height: 100vh;
}
</style>

