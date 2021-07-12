<template>
  <div id="app">
    <navbarTop/>
    <router-view></router-view>
  </div>
</template>

<script>
import navbarTop from '../src/components/navbarTop.vue'
export default {
  components:{
    navbarTop,
  },
  mounted() {
    this.$router.push({path: '/index'})
  }
}
</script>

