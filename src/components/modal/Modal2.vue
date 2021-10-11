<template>
  <div class="">

    <!-- Zona de boton activador -->
    <div @click ="toggle(true)">
      <slot name="toggler" class="prueba">
      </slot>
    </div>

    <!-- Zona de contenido -->
    <div ref="data">
      <slot>
      </slot>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Modal2',
  // funciones que se pueden inyectar a los componentes hijos
  provide() {
    return {
      estadoModal: this.estadoModal,
      toggle: this.toggle,
    };
  },
  data() {
    return {
      estadoModal: {
        activo: false,
      },
    };
  },
  methods: {
    toggle(value) {
      // console.log("hola como estan", value);
      this.estadoModal.activo = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';

// .modal{
//   position: fixed;
//   display: flex; /* establish flex container */
//   justify-content: center; /* center flex items horizontally, in this case */
//   align-items: center; /* center flex items vertically, in this case */
//   background-color: rgba(0, 0, 0, 0.5);
//   height: 100%;
//   width: 100%;
//   top: 0;
//   left: 0;
//   z-index:30;
// }
// #dialog-modal{
//   width: 25%;
//   height:70%;
//   overflow-y:scroll;
//   padding: 30px;
//   display: flex;
//   border-radius: 5px;
//   align-items: center;
//   flex-direction: column;
//   background-color: $background-color;
// }

.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background-color: black;
}
.cancelar{
  background-color: $third-color;
  border: none;
}
.confirmar{
  border: none;
}
::placeholder{

  color:$secondary-color;
}
.cancelar:hover {
  background-color: $secondary-color  ;
  // color:$third-color;
}

.cancelar:active {
  color: $secondary-color;
  background-color: $main-color;
}

.confirmar:hover {
  background-color: $secondary-color;
  color: $main-color;
}

.confirmar:active {
  color: $secondary-color;
  background-color: $main-color;
}

button{

  padding: 2.5% 5% 2.5% 5%;

  // display: inline;
  // background: black;
}

.botones {
    width: 100%;
    padding-top: 25px;
    margin: 0px;
    display:flex;
    flex-direction: row;
    justify-content: space-around  ;

}
</style>
