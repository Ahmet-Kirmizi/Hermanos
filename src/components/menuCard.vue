<template >
  <div>
    <b-col>
      <b-card
        title="this Is a Card"
        :img-src='require("../assets/images/cappuccinobg.png")'
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mt-2"
        footer="amınakoyim"
      >
        <b-card-text
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
          enim!</b-card-text
        >
        <b-button variant="primary">Apply</b-button>
      </b-card>
    </b-col>
  </div>
</template>
<script>
export default {
    name: "menuCard",
};
</script>
