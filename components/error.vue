<template>
    <div>
        <h1>Oops! Something Went Wrong</h1>
        <p> Check your internet connection <br> Try Reloading the page <br></p>
    </div>
</template>
<script>
export default {
  name: "error",
};
</script>

<style scoped>
    h1{
        font-size: 4rem;
        display: flex;
        justify-content: center;
        align-content: center;
        vertical-align: middle;
        margin-top: 7rem;
    }
    p {
        font-size: 2rem;
         display: flex;
        justify-content: center;
        align-content: center;
        vertical-align: middle;
        margin-top: auto;
        text-align: center;
    }
</style>