<template>
  <div>
    <div>
      <backgroundImg/>
      <nav-bar-top/>
      <loginForm/>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import loginForm from "../components/login.vue";
import backgroundImg from '../components/backgroundImg.vue'
import navBarTop from '../components/navbarTop.vue'
export default {
  components: {
    loginForm,
    backgroundImg,
    navBarTop
  },
  }
</script>
<style >

</style>
