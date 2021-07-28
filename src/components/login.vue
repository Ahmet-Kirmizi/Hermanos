<template>
  <div>
    <div class="container login-box">
      <div class="loginsbox">
        <div class="tab">
          <div class="tablinks" id="logintab" data-form-id="login">Giriş</div>
          <div class="tablinks" id="signuptab" data-form-id="signup">
            Kaydol
          </div>
        </div>
        <div class="tabcontent" id="login">
          <form>
            <label for="loginEmail">E-posta:</label>
            <input
              v-model="email"
              required
              type="email"
              id="loginEmail"
              placeholder="isim@gmail.com"
            />
            <label for="loginPassword">Parola:</label>
            <input
              v-model="password"
              required
              type="password"
              id="loginPassword"
              placeholder="**********"
            />
            <button
              v-on:click="sendSignInData()"
              type="submit"
              id="giris"
              class="btn btn-success"
            >
              Giriş
            </button>
          </form>
          <img
            class="signinpicture d-flex"
            src="../assets/images/luke.jpg"
            width="50%"
          />
          <br />
        </div>
        <div class="tabcontent" id="signup">
          <form>
            <label for="signupName">İsim:</label>
            <input required type="name" id="signupName " placeholder="Arda" v-model="name"/>
            <label for="signupSurname">Soyisim:</label>
            <input
             v-model="surname"
              required
              type="surname"
              id="signupsurname"
              placeholder="turker"
            />
            <label for="signupEmail">Email:</label>
            <input
              v-model="email"
              required
              type="email"
              id="signupEmail"
              placeholder="isim@gmail.com"
            />
            <label for="signupPhone">Telefon:</label>
            <input required type="phone" id="signup" placeholder="(90 +)" v-model="telephone" />
            <label for="signupPassword">Parola:</label>
            <input
              v-model="password"
              required
              type="password"
              id="signupPassword"
              placeholder="**********"
            />
            <label for="signupConfirmPasssword">Parola Tekrarla:</label>
            <input
             v-model="retypepassword"
              required
              type="password"
              id="signupConfirmPasssword"
              placeholder="**********"
            />

             <label for="signupAddress">Address:</label>
            <input
              v-model="address"
              type="address"
              id="signupAddress"
              placeholder="Lekosa Sehitpolat ali sokak no.2 apt."
            />

            <button v-on:click="sendData()" type="submit" class="btn btn-primary kayıtol ">
              Kayıt ol
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: "loginform",
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
  mounted() {
    var tablinks = document.querySelectorAll("div.tablinks");

    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].onclick = function (e) {
        openForm(
          e.target.getAttribute("data-form-id"),
          e.target.getAttribute("id")
        );
      };
    }

    function openForm(formid, tabid) {
      var tabcontent = document.querySelectorAll("div.tabcontent");
      var links = document.querySelectorAll("div.tablinks");
      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      document.getElementById(formid).style.display = "block";
      document.getElementById(tabid).classList.add("active");
    }
    document.getElementById("logintab").click();
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
      }).then(res => {console.log(res.data)});
    },
    sendSignInData: function (){
      axios.post("http://192.168.70.125:3000/signIn", {
        email: this.email,
        password: this.password,
      })
    }
  },
};
</script>

<style>
#account-section {
  display: none;
}

@import url("https://fonts.googleapis.com/css?family=Roboto");
body {
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
}

.signinpicture {
  /* margin-top: ; */
  margin: auto;
  flex-direction: column;
}

div.tab.si div.tab {
  width: 87%;
}

div.tab {
  margin-top: 5%;
}

div.container {
  padding: 2em;
  overflow: hidden;
  /* background: rgba(255, 255, 255, 0.822); */
  /* background-image:url(../assets/images/anan4.jpg) ; */
  /* background: white; */
  background-color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  border-radius: 35px;
  height: 86vh;
}

div.container.login-box {
  background-color: #deb887;
}

div.container label,
div.container input,
div.container button {
  display: block;
  width: 80%;
  font-size: 1em;
}

div.container label {
  margin: 0.5em auto 0.5em auto;
}

div.container input {
  padding: 0.8em 0 0.8em 0.8em;
  outline: none;
  border: none;
  border-bottom: 2px solid rgb(0, 0, 0);
  margin: 0.5em auto 0.5em auto;
}

div.container button {
  outline: none;
  margin: 2em auto 2em auto;
  padding: 1.2em;
  cursor: pointer;
  letter-spacing: 0.2em;
  box-shadow: 0 0 2px 2px #888;
  color: rgb(255, 255, 255);
  font-weight: 600;
  border: none;
  border-radius: 5px;
}

.tab {
  margin: 0 auto 0 auto;
  display: flex;
  width: 100%;
}

.tablinks {
  padding: 1em 0 1em 0;
  width: 50%;
  text-align: center;
  cursor: pointer;
  border: 0.4px solid rgb(0, 0, 0);
  transition: all 0.2s linear;
  color: rgb(0, 0, 0);
  font-weight: 500;
  background: rgb(255, 255, 255);
}

.active {
  animation-name: activetab;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-weight: 600;
}

/* form {
  background: rgba(0, 0, 0, 0.466);
} */

@keyframes activetab {
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

.tabcontent {
  width: 100%;
  margin: 0 auto 0 auto;
  display: none;

  overflow: hidden;
  color: rgb(0, 0, 0);
  font-weight: 800;
}

@media only screen and (min-width: 420px) {
  div.container {
    overflow: hidden;
    width: 640px;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 420px) {
  div.container {
    width: 80%;
  }
}

#element::-webkit-scrollbar {
  display: none;
}
</style>