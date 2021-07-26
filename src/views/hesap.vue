<template>
  <div id="hesap">
    <loginPage/>
    <anaHesap/>
  </div>
</template>
<script>
import loginPage from "../components/login.vue";
import anaHesap from "../components/hesap.vue";
export default {
  components: {
    loginPage,
    anaHesap
  },
};

</script>
<style >
navbarTop {
  display: none;
}
</style>
