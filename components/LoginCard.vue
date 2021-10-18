<template>
  <div>
    <div class="container login">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque eum fugit ullam esse, voluptas aperiam omnis excepturi delectus quaerat sequi magni deleniti? Ea culpa aut sint? Distinctio, ipsum suscipit.</h1>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: "loginCard",
  data() {
    return {
      name: null,
      surname: null,
      email: null,
      password: null,
      retypepassword: null,
      telephone: null,
      address:null,
    };
  },
  methods: {
    girisDisplay: function () {
      (document.getElementById("login-section").style.display = "none"),
        (document.getElementById("account-section").style.display = "block");
    },
    sendData: function () {
      axios.post("http://192.168.70.125:3000/getSignUpDetails/signUp", {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        retypepassword: this.retypepassword,
        telephone: this.telephone,
        address: this.address,
      }).then(res => {
        console.log(res.data)
        localStorage.setItem('token',res.data.token);
        if(localStorage.token){
          this.$router.push('/menu')
        }
        });
    },
    sendSignInData: function (){
      console.log("works")
      axios.post("http://192.168.70.125:3000/signIn", {
        email: this.email,
        password: this.password,
      }).then(res => {
        console.log(res.data)
        localStorage.setItem('tokenSignIn',res.data.signInToken);
        if (localStorage.tokenSignIn) {
      this.$router.push('/menu');
    }else{
      console.log("nah")
    }
      })
    }
  },
};
</script>

<style scoped>
div.container.login{
  z-index: 999999;
  background-color: #ffff;
}
</style>
