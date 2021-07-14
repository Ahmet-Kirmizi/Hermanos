<template >

    <div class="container">
        <div class="tab">
            <div class="tablinks" id="logintab" data-form-id="login">Giriş</div>
            <div class="tablinks" id="signuptab" data-form-id="signup">Kaydol</div>
        </div>
        <div class="tabcontent" id="login">
            <form>
                <label for="loginEmail">E-posta:</label>
                <input required type="email" id="loginEmail" placeholder="isim@gmail.com" />
                <label for="loginPassword">Parola:</label>
                <input required type="password" id="loginPassword" placeholder="**********" />
                <button type="submit">Giriş</button>
            </form>
        </div>
        <div class="tabcontent" id="signup">
            <form>
                <label for="signupName">İsim:</label>
                <input required type="name" id="signupName" placeholder="Abdurrazak" />
                <label for="signupSurname">Soyisim:</label>
                <input required type="surname" id="signupsurname" placeholder="kıllı-bacak" />
                <label for="signupEmail">Email:</label>
                <input required type="email" id="signupEmail" placeholder="isim@gmail.com" />
                <label for="signupPhone">Telefon:</label>
                <input required type="phone" id="signup" placeholder="(90 +)" />
                <label for="signupPassword">Parola:</label>
                <input required type="password" id="signupPassword" placeholder="**********" />
                <label for="signupConfirmPasssword">Parola Tekrarla:</label>
                <input required type="password" id="signupConfirmPasssword" placeholder="**********" />
                
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>
</template>


<script>
export default {
  name: "loginform",
  mounted() {
      var tablinks = document.querySelectorAll("div.tablinks");

for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].onclick = function(e) {
        openForm(e.target.getAttribute('data-form-id'), e.target.getAttribute('id'));
    }
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
  }
  
</script>

<style scoped>
   @import url('https://fonts.googleapis.com/css?family=Roboto');
body {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
}


/*
Container div
*/

div.container {
    margin: 4em auto 2em auto;
    padding: 1em;
    overflow: hidden;
    border: 2px solid black;
    background: rgba(255, 255, 255, 0.822);
}


/*

Styles for form filelds

*/

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
    border-bottom: 2px solid black;
    margin: 0.5em auto 0.5em auto;
}

div.container button {
    outline: none;
    margin: 2em auto 1em auto;
    padding: 1.2em;
    cursor: pointer;
    letter-spacing: 0.2em;
    box-shadow: 0 0 2px 2px #888;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
}


/*

tab styles

*/

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
    border: 0.4px solid black;
    transition: all 0.2s linear;
}

.active {
    animation-name: activetab;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    background-color: black;
    color: white;
}

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
    padding: 2em 0 2em 0;
    overflow: hidden;
}


/*

device specific styles

*/

@media only screen and (min-width: 1224px) {
    div.container {
        overflow: hidden;
        width: 400px;
    }
}

@media only screen and (min-width: 1824px) {
    div.container {
        width: 400px;
    }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    div.container {
        width: 80%;
    }
}

.tabcontent {
  overflow: scroll;
}

</style>