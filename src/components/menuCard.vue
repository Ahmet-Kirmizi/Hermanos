<template >
<div>
  <b-card 
    title="Card Title"
    img-src="../assets/images/cappuccinobg.png"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 card-main"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
</template>


<script>
export default {
    name: "menuCard",
};
</script>

<style scoped>
 .card-main{
   top: 90px;
 }
</style>