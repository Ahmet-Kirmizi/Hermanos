<template>
    <div>
        <edit/>
    </div>  
</template>

<script>
import edit from '../components/edit.vue'
export default {
  methods: {
    changed: function(event) {
      alert(event.target.value)
    }
  }, components : {
      edit
  }
}
</script>

<style>
.edit{
    z-index: -1;
}
</style>script