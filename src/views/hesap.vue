<template>
  <div>
    <div id="login-section">
      <loginPage />
    </div>
    <div id="account-section">
      <accountPage />
    </div>
    <div>
      <button class="btn btn-primary" v-on:click="getToken()">asdas</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import loginPage from "../components/login.vue";
import accountPage from "../components/account-page.vue";
export default {
  components: {
    loginPage,
    accountPage,
  },
  methods: {
    getToken: function(){
      axios.get("http://192.168.70.125:3000/menu/token").then(res => {console.log(res.data)})
    },

  },
};
</script>
<style >
</style>
