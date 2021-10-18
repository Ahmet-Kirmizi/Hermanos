<template>
  <div>
      <backgroundImg/>
      <nav-bar-top/>
  </div>
</template>

<script>
import loginCard from '../components/LoginCard.vue'
import backgroundImg from '../components/backgroundImg.vue'
import navBarTop from '../components/navbarTop.vue'

export default {
  components: {
    loginCard,
    backgroundImg,
    navBarTop
  },
}
</script>