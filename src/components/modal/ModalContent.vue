<template>
  <div class="modal" v-if="active">
    <div class="content">

      <!-- Zona de contenido -->
      <div>
        <slot>
        </slot>
      </div>

      <!--Botones posibles, en este caso solo hay opcion para dos botones-->
      <div class="botones">
        <div class="cancelar" @click="toggle(false)">
          <slot name="cancelar">
            <button>
              Salir
            </button>
          </slot>
        </div>
        <div class="confirmar" @click="toggle(false)">
          <slot name="confirmar">
          </slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalContent',
  inject: ['toggle', 'estadoModal'],
  computed: {
    active() {
      // console.log(this.estadoModal.activo);
      // console.log(this.estadoModal.activo, 'Hola que tal que hace que hay de nuevo');
      return this.estadoModal.activo;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';
.modal{
  position: fixed;
  display: flex; /* establish flex container */
  justify-content: center; /* center flex items horizontally, in this case */
  align-items: center; /* center flex items vertically, in this case */

  background-color: rgba(0, 0, 0, 0.5);

  height: 100%;
  width: 100%;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:200;
}

.content{
  width: 400px;
  min-width: 300px;
  max-width: 90%;
  height: fit-content;
  max-height:70%;
  overflow-y:scroll;
  padding: 30px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  background-color: $background-color;
  // background-color: black;
}
.cancelar{
  background-color: $third-color;
  border: none;
}
.confirmar{
  color: white;
  width: auto;
  border: none;
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
  width: 100%;
  height: 100%;

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
