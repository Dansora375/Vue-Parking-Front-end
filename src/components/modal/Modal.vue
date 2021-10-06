<template>
  <div class="modal">
    <div id="dialog-modal">
      <slot class="content">
      </slot>
      <div class="botones">
        <button class="cancelar" @click="toggle(false)">
          Cancelar
        </button>
        <slot name="confirmar">
          <button class="confirmar" @click="agregarFuncionalidad()">
            (Agregar funcionalidad)
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Modal',
  inject: ['isActiveModal', 'toggleModal'],
  provide() {
    return {
      toggleModal: this.toggleModal,
      // dataEntrada: this.dataEntrada,
    };
  },
  data() {
    return {
      dataEntrada: {
        nombre: '',
        cedula: '',
        apto_num: '',
        tower: '',
        placa: '',
        selected: '',
        extra: '',
      },
    };
  },
  methods: {
    ...mapMutations('entrada_salida', ['resetDataNewEntrada']),
    ...mapActions('entrada_salida', ['changeModalNewEntrada', 'addNewEntradaFromStore']),
    agregarEntrada() {
      this.addNewEntradaFromStore();
      this.resetDataNewEntrada();
      this.toggleModal(false);
    },
    toggle(value) {
      this.toggleModal(value);
    },
    agregarFuncionalidad() {
      // eslint-disable-next-line no-alert
      alert('Agregue un boton personalizado');
    },
  },
//   data() {
//     return {
//       estadoDialog: {
//         isActivo: false,
//       },
//     };
//   },
// }
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
  z-index:30;
}
#dialog-modal{
  width: 25%;
  height:70%;
  overflow-y:scroll;
  padding: 30px;
  display: flex;

  border-radius: 5px;
  align-items: flex-start;
  flex-direction: column;
  background-color: $background-color;
}

.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
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
