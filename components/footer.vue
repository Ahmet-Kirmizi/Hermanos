<template>

    <div >
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>Cafe<span> Hermanos</span></h3>

          <p class="footer-links">
            <NuxtLink to="/main" class="Hermanos">Anasayfa</NuxtLink>

            <NuxtLink to="/menu" class="Hermanos">Menü</NuxtLink>

            <NuxtLink to="/sepet" class="Hermanos">Sepet</NuxtLink>

            <NuxtLink to="/cuzdan" class="Hermanos">Cüzdan</NuxtLink>

            <NuxtLink to="/hesap" class="Hermanos">Hesap</NuxtLink>
          <p class="footer-company-name">Ahmet Kırmızı & Arda Türker &copy; 2019</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Bolu Caddesi no.80</span> Lefkoşa, Kıbrıs</p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+90 5338533538</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">ahmetk5113@hotmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Cafe Hermanos is a coffee shop for web designers, graphic designers, web
            developers
          </p>

          <div class="footer-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </footer>
    </div>

</template>


<script>
export default {
  name: 'footerHermanos',
}
</script>

<style scoped>
.footerMain {
  background-color: #ffff;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
}
footer {
  height: 250px;
}
.footer-distributed {
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100vw;
  text-align: left;
  font: bold 16px sans-serif;

  padding: 30px 30px;
  margin-top: 20px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

.footer-distributed .footer-left {
  width: 40%;
}

.footer-distributed h3 {
  color: #ffffff;
  font: normal 36px 'Cookie', cursive;
  margin: 0;
}

.footer-distributed h3 span {
  color: #5383d3;
}

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  padding-right: 10px;
  font-size: 20px;
}

.footer-distributed .footer-company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: #5383d3;
  text-decoration: none;
}

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
  .main {
    line-height: normal;
    font-size: auto;
  }
}
</style>
