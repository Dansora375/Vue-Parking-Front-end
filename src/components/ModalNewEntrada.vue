<template>
  <div id="dialog-newParking">
    <h1>
      Zona de ingreso al parqueadero
    </h1>
    <input type="text" placeholder="Placa">
    <input type="text" placeholder="Tipo de vehiculo">
    <!-- <select name="select-vehicle" id="vehicle-type" v-for="opcion of opcionesPark">
      {{opcion}}
    </select> -->
    <div class="textArea">
      <p>
          Datos extra
      </p>
      <textarea name="" id="" cols="50" rows="10"></textarea>
      <div class="buttons">
        <button class="cancelar" @click="changeModal(false)">Cancelar</button>
        <button class="confirmar">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ModalNew',
  data() {
    // return {
    //   showModal: false,
    // };
  },
  computed: {
    // ...mapState('showModalNewEntrada'),
    showModal() {
      return this.$store.getters.showModalNewEntrada;
    },
  },
  methods: {
    // ...mapMutations('changeShowModalNewEntrada'),
    changeModal(value) {
      this.$store.dispatch('changeModalNewEntrada', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';
#dialog-newParking{
  width: 320px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: $third-color;
}

textarea{
  width: 100%;
  resize: vertical;
}
// .modal-overlay {
//  position: absolute;
//  top: 0;
//  left: 0;
//  right: 0;
//  bottom: 0;
//  z-index: 98;
//  background-color: rgba(0, 0, 0, 0.3);
// }

// .modal {
//  position: fixed;
//  top: 50%;
//  left: 50%;
//  transform: translate(-50%, -50%);
//  z-index: 99;

//  width: 100%;
//  max-width: 400px;
//  background-color: #FFF;
//  border-radius: 16px;

//  padding: 25px;

//  h1 {
//   color: #222;
//   font-size: 32px;
//   font-weight: 900;
//   margin-bottom: 15px;
//  }
//  p {
//   color: #666;
//   font-size: 18px;
//   font-weight: 400;
//   margin-bottom: 15px;
//  }
// }

// .fade-enter-active,
// .fade-leave-active {
//  transition: opacity .5s;
// }

// .fade-enter,
// .fade-leave-to {
//  opacity: 0;
// }

// .slide-enter-active,
// .slide-leave-active {
//  transition: transform .5s;
// }

// .slide-enter,
// .slide-leave-to {
//  transform: translateY(-50%) translateX(100vw);
// }
</style>
