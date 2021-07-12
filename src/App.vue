<template>
  <div id="app">
    <img class="main-logo" src="@/assets/images/logo.png" alt="Hermanos Coffe" />
    <navbarTop/>
    <router-view></router-view>
  </div>
</template>

<script>
import navbarTop from '../src/components/navbarTop.vue'
export default {
  components:{
    navbarTop,
  }
}
</script>

