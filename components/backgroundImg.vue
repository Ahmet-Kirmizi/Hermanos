<template>
  <div>
    <div class="pageBackground"></div>
  </div>
</template>
<script>
export default {
  name: 'backgroundImg',
  components: {},
}
</script>

<style scoped>

.pageBackground {
  position: fixed;
  background: url('../assets/images/coffee-bg.jpg');
  width: 100vw;
  height: 100vh;
}
</style>
