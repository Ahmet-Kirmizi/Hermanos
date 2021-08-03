<template>
    <div class="edit">
    <input @input="changed" name="product">
    </div>  
</template>

<script>
export default {
  methods: {
    changed: function(event) {
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>

<style>
.edit{
    z-index: -1;
}
</style>script