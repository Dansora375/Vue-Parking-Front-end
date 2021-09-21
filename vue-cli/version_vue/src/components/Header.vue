<template>
  <div>
    <header>
      <img src="@/assets/car_second.svg" class="SVG-secondary" alt="car logo icon hat minimalist">
      <h1 class="title">
        VUEPARKING
      </h1>
      <div>
        <p>{{nombre_usuario}}</p>
        <p>{{ rol_usuario }}</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    nombre_usuario: {
      type: String,
      default: 'Nombre',
    },
    rol_usuario: {
      type: String,
      default: 'Rol',
    },
  },
};
</script>

<style scoped lang="scss">
  @import '@/views/scss/_theme.scss';
header{
  /* Modificando el fondo del header*/
  background-color :$main-color;
  /* Dado el backgroun de la etiqueta, toca cambiar el color del texto para ser legible */
  color: $secondary-color;
  padding-left: 20%;
  padding-right: 20%; 

  /* Altura de la etiqueta */
  height: 100px;

  /* Modificacion del display(forma de ordenamiento de las etiquetas hijo) */
  display: flex;
  /* alineamiento vertical */
  justify-content: space-around;
  /* alineamiento horizontal */
  align-items: center;
  // height: 100%;

  // color: $secondary-color;
}

/* Configuracion del Titulo de la barra superior */
header h1{
    /* tipo de letra bold */
    font-weight: 700;
}

/* Icono de logo */
.SVG-secondary{
    /* La relacion se mantiene, por lo que solo es necesario modificar un valor */
    width: 70px;
}


@media(max-width: 700px){
  .title{
    display: none;
  }
}
</style>
