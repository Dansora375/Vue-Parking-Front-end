<template>
  <div class="home" @keyup.esc="changeModal(false)">
    <Header></Header>
    <Navbar class="nav"></Navbar>
    <div class="main_vehicles">
      <div class="superior-bar">

        <Modal2>
          <template v-slot:toggler>
            <img class='addImage' src="@/assets/add.svg" alt="">
          </template>
          <modal-content>
            <div>
              <h1>hola</h1>
              <h1>adios</h1>
              <h1>que tal</h1>
              <h1> adlskjfas</h1>
              <h1>a;sjdfl</h1>
            </div>
            <template v-slot:cancelar>
              <button>
                Cancelar
              </button>
            </template>
            <template v-slot:confirmar>
              <button>
                confirmar
              </button>
            </template>
          </modal-content>
        </Modal2>

      </div>
      <div class="vehiculos">
        <!--  eslint-disable-next-line max-len -->
        <vehiculo-item v-for="(vehiculo, index) in getVehiculos" :key="index" v-bind:indexVehiculo="index"></vehiculo-item>
      </div>
    </div>
    <!-- <div class="modal" v-if="isActiveModal" >
      <ModalNew>
      </ModalNew>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import { mapState, mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';

import VehiculoItem from '@/components/vehiculos/VehiculoItem.vue';

import Modal2 from '@/components/modal/Modal2.vue';
import ModalContent from '@/components/modal/ModalContent.vue';

export default {
  name: 'Vehicle',
  components: {
    Header,
    Navbar,
    Modal2,
    ModalContent,
    VehiculoItem,
  },
  mounted() {
    this.$store.dispatch('vehiculos_module/cargarVehiculos');
  },
  computed: {
    ...mapGetters('vehiculos_module', ['getVehiculos']),
  },
};
</script>

<style lang="scss" scoped>

@import '@/views/scss/_theme.scss';
  .listado{
    margin-top: 20px;
  }

  .main_vehicles{
    padding: 20px;
    margin-left: 20%;
  }

  .superior-bar{
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 600px){
    .superior-bar{
      display: flex;

    }
    .addImage{
        display:inline;
        width: 40px;
    }
    .search{
      display: flex;
      justify-content: flex-end;
    }
  }
  .superior-bar{
    position: sticky;
    top: 0px;
    background:$background-color;
    z-index: 10;
    padding-bottom: 10px;
  }
  // .modal{
  //   position: fixed;
  //   display: flex; /* establish flex container */
  //   justify-content: center; /* center flex items horizontally, in this case */
  //   align-items: center; /* center flex items vertically, in this case */
  //   background-color: rgba(0, 0, 0, 0.5);
  //   height: 100%;
  //   width: 100%;
  //   top: 0;
  //   z-index:30;
  // }

  .addImage:hover{
    background-color: $third-color;
  }
  .addImage:active{
    background-color:$secondary-color ;
  }
  .vehiculos{
    display: flex;
    flex-wrap: wrap;
  }
  .vehiculos div{
    width: fit-content;
  }

</style>
