<template>
  <div>
    <div class="container">
      <div class="account-container d-flex">
        <div class="account-information account-box img-b-overlay">
          <a href=""><h2><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg><br>Hesap</h2></a>
        </div>
        <div class="location-information account-box img-b-overlay">
          <a href=""><h2><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg><br>Adres</h2></a>
        </div>
        <div class="bank-information account-box img-b-overlay">
          <a href=""
            ><h2>
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
              <br>
              Kredi Karti <br />
              Bilgileri
            </h2></a
          >
        </div>
        <div class="orders-information account-box img-b-overlay">
          <a href=""><h2><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M15,3H5C3.9,3,3.01,3.9,3.01,5L3,19c0,1.1,0.89,2,1.99,2H19c1.1,0,2-0.9,2-2V9L15,3z M5,19V5h9v5h5v9H5z M9,8 c0,0.55-0.45,1-1,1S7,8.55,7,8s0.45-1,1-1S9,7.45,9,8z M9,12c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,11.45,9,12z M9,16 c0,0.55-0.45,1-1,1s-1-0.45-1-1s0.45-1,1-1S9,15.45,9,16z"/></g></g></svg><br> Onceki Siparisler</h2></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "accountPage",
};
</script>

<style scoped>

div.container{
  padding-right: 16px;
    padding-left: 16px;
    padding-top: 24px;
    padding-bottom: 0px;  
}

.account-container {
  flex-direction: row;
  flex-wrap: wrap;
}

.account-information {
  color: rgb(0, 0, 0);
  width: 50vw;
  height: 40vh;
  flex: 0 1 50%;
  background-image: url(../assets/images/account-img.jpg);
  background-size: 100% 43vh;
  background-repeat: no-repeat;
}

.account-information h2 {
  justify-content: center;
  justify-items: center;
  text-align: center;
  vertical-align: middle;
  padding-top: 50%;
}

.account-information a{
    text-decoration: none;
    color: white;
}

.location-information {
  color: rgb(0, 0, 0);
  width: 50%;
  height: 40vh;
  background-image: url(../assets/images/location-img.jpg);
  background-size: 100% 43vh;
  background-repeat: no-repeat;
}

.location-information h2 {
  justify-content: center;
  justify-items: center;
  text-align: center;
  vertical-align: middle;
  padding-top: 50%;
}

.location-information a{
    text-decoration: none;
    color: white;
}

.bank-information {
  color: rgb(0, 0, 0);
  width: 50%;
  height: 40vh;
  background-image: url(../assets/images/creditcard-img.jpg);
  background-size: 100% 43vh;
  background-repeat: no-repeat;
}

.bank-information a{
    text-decoration: none;
    color: white;
}

.bank-information h2 {
  justify-content: center;
  justify-items: center;
  text-align: center;
  vertical-align: middle;
  padding-top: 50%;
}


.orders-information {
  color: rgb(0, 0, 0);
  width: 50%;
  height: 40vh;
  background-image: url(../assets/images/orders-img.jpg);
  background-size: 100% 43vh;
  background-repeat: no-repeat;
  z-index: -1;
}

.orders-information h2 {
  justify-content: center;
  justify-items: center;
  text-align: center;
  vertical-align: middle;
  padding-top: 50%;
}

.orders-information a{
    text-decoration: none;
    color: white;
}

.img-b-overlay {
  width: 50%;
  height: 40vh;
  background-size: 100% 43vh;
  background-color: black;
  z-index: 999;
}
</style>