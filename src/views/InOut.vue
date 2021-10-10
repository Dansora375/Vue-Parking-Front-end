<template>
  <div class="home" @keyup.esc="changeModal(false)">
    <Header nombre_usuario="Carlos" rol_usuario="Trabajador"></Header>
    <Navbar class="nav"></Navbar>
    <div class="main_entrada">
      <div class="superior-bar">

        <Modal2>
          <template v-slot:toggler>
            <img class='addImage' src="@/assets/add.svg" alt="">
          </template>
          <modal-content>
            <NewEntrada>
            </NewEntrada>
            <template v-slot:cancelar>
              <button @click="resetDataEntrada()">
                Cancelar
              </button>
            </template>
            <template v-slot:confirmar>
              <button @click="agregarEntrada">
                adios mundo
              </button>
            </template>
          </modal-content>
        </Modal2>

        <SearchBar class="search"></SearchBar>
      </div>
      <div class="listado" >
        <!-- <EntradaSalida class="listado"></EntradaSalida> -->
        <!-- eslint-disable-next-line max-len -->
        <EntradaSalida class="listado" v-for="(itemEntrada, index) in entradas" :key="index" v-bind:date_ingreso="transformToDate(itemEntrada)" v-bind:placa="itemEntrada.placa" v-bind:index="index" v-bind:tipo="itemEntrada.tipo" v-bind:id="itemEntrada._id">
        </EntradaSalida>
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
import { mapGetters, mapActions, mapMutations } from 'vuex';

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import SearchBar from '@/components/SearchButton.vue';
import EntradaSalida from '@/components/entrada-vehiculos/EntradaSalida.vue';
// import ModalNew from '@/components/ModalNewEntrada.vue';
// import Modal from '@/components/modal/Modal.vue';
import NewEntrada from '@/components/entrada-vehiculos/NewEntrada.vue';

import Modal2 from '@/components/modal/Modal2.vue';
import ModalContent from '@/components/modal/ModalContent.vue';

const resetData = {
  nombre: '',
  cedula: '',
  apto_num: '',
  tower: '',
  placa: '',
  tipo: '',
  datos_extra: '',
};

export default {
  name: 'InOut',
  components: {
    Header,
    Navbar,
    SearchBar,
    EntradaSalida,
    // ModalNew,
    // Modal,
    NewEntrada,
    Modal2,
    ModalContent,
  },
  provide() {
    return {
      dataEntrada: () => this.dataNewEntrada,
      updateEntrada: this.updateEntrada,
    };
  },
  data() {
    return {
      isActiveModal: false,
      dataNewEntrada: {
        nombre: '',
        cedula: '',
        apto_num: '',
        tower: '',
        placa: '',
        tipo: '',
        datos_extra: '',
      },
    };
  },
  mounted() {
    this.$store.dispatch('entrada_salida/cargarEntradas');
  },
  computed: {
    ...mapGetters('entrada_salida', ['showModalNewEntrada', 'entradas']),

  },
  methods: {
    ...mapMutations('entrada_salida', []),
    ...mapActions('entrada_salida', ['cargarDocs', 'addNewEntrada']),
    agregarEntrada() {
      // console.log(this.dataNewEntrada);
      this.addNewEntrada(this.dataNewEntrada);
      this.resetDataEntrada();
      // this.toggleModal(false);
    },
    transformToDate(item) {
      return new Date(item.hora_entrada);
    },
    resetDataEntrada() {
      this.dataNewEntrada = resetData;
      // console.log(this.dataNewEntrada);
    },
    updateEntrada(values) {
      const { key, val } = values;
      this.dataNewEntrada[key] = val;
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

  .add:hover{
    background-color: $third-color;
  }
  .add:active{
    background-color:$secondary-color ;
  }

</style>
