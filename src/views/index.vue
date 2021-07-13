<template >
  <div>
    <navbarTop/>
    <img class="main-logo" src="@/assets/images/logo.png" alt="Hermanos Coffe" />
    
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

<style >

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

