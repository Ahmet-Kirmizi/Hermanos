<template >
  <div>
    <img class="main-logo" src="@/assets/images/logo.png" alt="Hermanos Coffe" />
    <navbarTop/>
  </div>
</template>
<script>
import navbarTop from "../components/navbarTop.vue";

export default {
  component: {
    navbarTop,
  },
};
</script>

<style>


body{
  background-image: url(../assets/images/bg-image4.jpg)
}

.main-logo {
  vertical-align: middle;
  border-style: none;
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

</style>

