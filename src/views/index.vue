<template >
    <div>
        <img src="@/assets/images/logo.png" alt="Hermanos Coffe">
    </div>
</template>
<script>
export default {
    component: {
    }
}
</script>

<style>

div img {
    vertical-align: middle;
    border-style: none;
    position:absolute;
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

 }

 /* @media screen and (max-width: 990px){
    div img{
      top:70%;  
    } 
 } */
</style>

