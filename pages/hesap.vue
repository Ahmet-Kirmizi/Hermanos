<template>
  <div>
<background-img />
      <nav-bar-top />
      <accountPage />

      
  </div>
</template>
<script>
import axios from 'axios'
import accountPage from '../components/account-page.vue'
import backgroundImg from '../components/backgroundImg.vue'
import navBarTop from '../components/navbarTop.vue'
export default {
  components: {
    accountPage,
    backgroundImg,
    navBarTop,
  },
}
</script>
<style >
</style>
