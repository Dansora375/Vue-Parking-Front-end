<template>
  <div class="home" @keyup.esc="changeModal(false)">
    <Header nombre_usuario="Carlos" rol_usuario="Trabajador"></Header>
    <Navbar class="nav"></Navbar>
    <div class="main_entrada">
      <div class="superior-bar">
        <img class='add' src="@/assets/add.svg" @click="toggleModal(true)" alt="">
        <SearchBar class="search"></SearchBar>
      </div>
      <div class="listado" >
        <!-- <EntradaSalida class="listado"></EntradaSalida> -->
        <!-- eslint-disable-next-line max-len -->
        <EntradaSalida class="listado" v-for="(itemEntrada, index) in entradas" :key="index" v-bind:date_ingreso="transformToDate(itemEntrada)" v-bind:placa="itemEntrada.placa" v-bind:index=index v-bind:tipo="itemEntrada.tipo">
        </EntradaSalida>
      </div>
    </div>
    <div class="modal" v-if="isActiveModal" >
      <ModalNew>
      </ModalNew>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import { mapState, mapMutations } from 'vuex';
import { mapGetters, mapActions } from 'vuex';

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import SearchBar from '@/components/SearchButton.vue';
import EntradaSalida from '@/components/EntradaSalida.vue';
import ModalNew from '@/components/ModalNewEntrada.vue';

export default {
  name: 'InOut',
  components: {
    Header,
    Navbar,
    SearchBar,
    EntradaSalida,
    ModalNew,
  },
  provide() {
    return {
      isActiveModal: this.isActiveModal,
      toggleModal: this.toggleModal,
      toggleModal2: this.toggleModal2,
    };
  },
  data() {
    return {
      isActiveModal: false,
    };
  },
  mounted() {
    this.$store.dispatch('entrada_salida/cargarEntradas');
  },
  computed: {
    ...mapGetters('entrada_salida', ['showModalNewEntrada', 'entradas']),

  },
  methods: {
    ...mapActions('entrada_salida', ['changeModalNewEntrada', 'cargarDocs']),
    transformToDate(item) {
      return new Date(item.hora_entrada);
    },

    toggleModal(value) {
      this.isActiveModal = value;
    },
    toggleModal2() {
      this.isActiveModal = !this.isActiveModal;
    },
  },
};
</script>

<style lang="scss" scoped>

@import '@/views/scss/_theme.scss';
  .listado{
    margin-top: 20px;
  }

  .main_entrada{
    padding: 20px;
    margin-left: 20%;
  }

  .superior-bar{
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 600px){
    .superior-bar{
      display: block;

    }
    #addImage{
        display:block;
        width: 40px;
    }
    .search{
      display: flex;
      justify-content: flex-end;
    }
  }

  .modal{
    position: fixed;
    display: flex; /* establish flex container */
    justify-content: center; /* center flex items horizontally, in this case */
    align-items: center; /* center flex items vertically, in this case */
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    top: 0;
  }

  // .add:hover{
  //   background-color: $third-color;
  // }
  .add:active{
    background-color:$secondary-color ;
  }

</style>
