<template>
  <div class="navegation">
    <nav class="nav">
      <router-link to="/" class="completed">Home</router-link>
      <router-link to="/Vehicle_zone" class="completed">Vehicle zone</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/Residentes">Residentes</router-link>
      <router-link to="/Hogares">Hogares</router-link>
      
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  // data(){
  //   return {
  //     opciones_nav: options_nav,
  //   };
  // },
};
</script>

<style scoped lang="scss">
//importando Tema de la app(solo colores)
@import '@/views/scss/_theme.scss';
.navegation{
  position:fixed;
  padding-top: 100px;
  top: 0;
  width: 20%;
  background-color: $main-color;//Llamando a la variable del color
  // align-items: start;
  height: 100%;
}
.nav{
  display: flex;
  flex-direction: column;

}
a{
  width: 100%;
  padding-top:10px ;
  padding-bottom: 10px;
  color: $third-color;
  &:hover{
    color: $background-color;
  }
  &:active{
    color: $background-color;
    background-color:$third-color ;
  }
}

// .navegation{
//     display: inline-block;
//     // position: fixed;
//     width: 20%;
//     background-color: $main-color;
//     // height: 100%;
// }
// .navegation nav{
//     list-style: none;
//     font-weight: 700;
//     color: $secondary-color;
// }
// .navegation nav li{
//     text-align: center;
//     width: 100%;
//     padding-top: 15px;
//     padding-bottom: 15px;
// }

// .navegation .completed:hover{
//     color: $third-color;
//     cursor: pointer ;
// }

// .navegation .uncompleted{
//     font-weight:200 ;
//     color: $background-color;
// }
</style>
