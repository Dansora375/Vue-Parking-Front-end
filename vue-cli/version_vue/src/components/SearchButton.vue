<template>
  <div>
    <input type="text" >
    <img src="@/assets/Frame.svg"  class="SVG search">
  </div>
</template>

<script>
  export default {
    name:'SearchBar',
    data() {
      return {
        show_input:false,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/views/scss/_theme.scss';
  input{
    border-bottom: 2px solid $main-color;
    width: 30px;
    font-size: medium;
    transition: all 0.5s ease;
    color: $background-color;
  }
  

  .search:hover{
      background-color: $third-color;
    }
  .search:active{
      background-color:$secondary-color ;
  }
  
  .incoming_input{
    width: 300px;
  }

  input:focus{
    width: 300px;
    color: $main-color;
  }

  img{
    width: 45px;
  }
  
  .letra_x{
    display: inline-block;
    width: 30px;
    align-content: center;
  }
  .hide_letra_x{
    display: none;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  @media(max-width: 500px){
    input:focus{
      width: calc(100% - 50px);
    }
  }

</style>