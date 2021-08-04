<template>
  <div>
    <div>
      <backgroundImg/>
      <loginForm/>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import loginForm from "../components/login.vue";
import backgroundImg from '../components/backgroundImg.vue'
export default {
  components: {
    loginForm,
    backgroundImg
  },
  }
</script>
<style >
</style>
