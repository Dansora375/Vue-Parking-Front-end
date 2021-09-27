<template>
<!-- <div></div> -->
  <router-view/>
</template>

<style lang="scss">
@import '@/views/scss/_theme.scss';

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

/* Para cambiar el color de la letra despues de seleccionar el atocomplete o autofill */
/*Change text in autofill textbox*/

input:-webkit-autofill {
  -webkit-text-fill-color: $main-color !important;
}

body{
  background-color: $background-color;
  margin: 0;
}
// Color de placeholder de los input
::placeholder {
  color: $secondary-color;
  // font-size: 1.2 rem;
}

#app {
  font-family: 'PT Sans Caption', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $main-color;
}

/* las etiquetas button requieren una eliminacion de estilos anterior a su uso */
button {
  color: $main-color;
  background: none; 
  border: none;
  font-size: medium;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;

  border: 2px solid $main-color;
  text-align: center;
  
}

.cancelar {
  border: 2px solid $main-color;
}
.confirmar {
  color: $secondary-color;
  background-color: $main-color;
}

.cancelar:hover {
  background-color: $background-color;
}

.cancelar:active {
  color: $secondary-color;
}

.confirmar:hover {
  background-color: $third-color;
    color: $main-color;
    }

.confirmar:active {
  color: $main-color;
}



    


  select {


    border: 2px solid $main-color;
    border-radius: 7px;
    color: $main-color;
    background: none;
    margin-top: 40px;
    box-shadow: 0 3px 0 1px $main-color;
    width: 100%;

    height: 50px;     
    font-size: 1.1rem;
    font-weight: 900;
    text-align-last: center;
    cursor: pointer;

    /* Replace default styling (arrow) para quitarle la flechita */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    /* Poniendo la flecha como fondo del select */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"> <polygon points="0,0 100,0 50,50" style="fill:%23666666;" /></svg>  ');

    background-position: right 10px top 50%;
    background-repeat: no-repeat;
    background-size: 10px;
    padding-right: 30px;


}



// #nav {
//   padding: 0px;
//   a {
//     font-weight: bold;
//     color: $third-color;
//     :visited{
//       background: #42b983;
//     }

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
a{
  text-decoration: none;
  // color: $background-color;
}
.nav{
  height: 100%;
}

/* las etiquetas input requieren una eliminacion de estilos anterior a su uso */
input{
    color: var(--main-color);
    font-family: 'PT Sans Caption', sans-serif;
    background:none;
    border:none;
    outline:0;
}

</style>
