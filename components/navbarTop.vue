<template>
  <div id="navBar">
    <b-navbar toggleable="lg" variant="info">
      <b-navbar-brand class="navigation-main" style="font-size: 3rem">
          <NuxtLink to="/main">Hermanos</NuxtLink>

      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="navbar navbar-expand-lg">
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="text-center">
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="navigationlinks"
            ><NuxtLink to="/menu">Menü</NuxtLink></b-nav-item
          >
          <b-nav-item class="navigationlinks"
            ><NuxtLink to="/sepet">Sepet</NuxtLink></b-nav-item
          >
          <b-nav-item class="navigationlinks"
            ><NuxtLink to="/cuzdan">Cüzdan</NuxtLink></b-nav-item
          >
          <b-nav-item class="navigationlinks"
            ><NuxtLink to="/hesap">Hesap</NuxtLink></b-nav-item
          >
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    </div>
</template>
<script>
export default {
  name: "navbarTop",
  components: {},
  };
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.navbar-toggler {
  background-color: white;
}

/* a.nav-link {
    text-align: center;
    background-color: black;
} */

.bg-info {
  background-color: transparent !important;
}

a {
  color: white;
  font-family: "Lobster", cursive;
}

.navigationlinks {
  font-size: 2.5rem;
  padding-right: 3rem;
  position: relative;
}

.navigationlinks a:hover {
  color: white;
  text-decoration: none;
}

.navigationlinks::after {
  position: absolute;
  bottom: 10px;
  right: 0;
  left: -30%;
  margin: auto;
  background-color: white;
  width: 0;
  height: 3px;
  transition: all 0.5s;
  content: "";
}

.navigationlinks:hover::after {
  width: 60%;
}

/* .navbar-left-heading a {
  font-size: 5rem;
  color: rgb(238, 0, 0);
} */

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: none;
  color: burlywood;
}



@media screen and (max-width: 990px) {
  .navigationlinks::after {
    background: none;
  }
  .navigationlinks {
    padding-right: 0;
    top: 15%;
  }
  .navbar-nav.ml-auto {
    /* background-color: #a85f1ff3; */
    background-color: #171413f8;
    height: 80vh;
  }
}


</style>


