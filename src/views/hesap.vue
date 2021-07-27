<template>
  <div>
    <div id="login-section">
      <loginPage />
    </div>
    <div id="account-section">
      <accountPage />
    </div>
  </div>
</template>
<script>
import loginPage from "../components/login.vue";
import accountPage from "../components/account-page.vue";
export default {
  components: {
    loginPage,
    accountPage,
  },
};
</script>
<style >
</style>
