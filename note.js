mounted() {
    if (localStorage.tokenSignIn) {
      this.$router.push({ path: "/menu" });
    }
    else{
      this.$router.push({ path: "/login" });
    }
  },

//   appdaydi bu