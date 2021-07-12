<template>
  <div id="app">
    <div id="nav">
      <navbarTop/>
    </div>
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