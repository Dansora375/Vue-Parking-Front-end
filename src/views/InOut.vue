<template>
  <div class="home" @keyup.esc="changeModal(false)">
    <Header nombre_usuario="Carlos" rol_usuario="Trabajador"></Header>
    <Navbar class="nav"></Navbar>
    <div class="main_entrada">
      <div class="superior-bar">
        <img class='add' src="@/assets/add.svg" @click="changeShowModalNewEntrada(true)" alt="">
        <SearchBar></SearchBar>
      </div>
      <div class="listado" >
        <!-- <EntradaSalida class="listado"></EntradaSalida> -->
        <!-- eslint-disable-next-line max-len -->
        <EntradaSalida class="listado" v-for="entrada in entradas" :key="entrada" v-bind:hora_ingreso="entrada.fecha.getHours() +':'+ entrada.fecha.getMinutes()" v-bind:fecha_ingreso="entrada.fecha.getDate()+'/'+(Number(entrada.fecha.getMonth())+1)+'/'+entrada.fecha.getFullYear()" v-bind:placa="entrada.placa" v-bind:tipo="entrada.tipo">
        </EntradaSalida>
      </div>
    </div>
    <div class="modal" v-if="showModalNewEntrada" >
      <ModalNew>
      </ModalNew>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import { mapState, mapMutations } from 'vuex';
import { mapGetters, mapMutations } from 'vuex';

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import SearchBar from '@/components/SearchButton.vue';
import EntradaSalida from '@/components/EntradaSalida.vue';
import ModalNew from '@/components/ModalNewEntrada.vue';

export default {
  name: 'InOut',
  created: {
    function() {
      // cargarDocs();
    },
  },
  components: {
    Header,
    Navbar,
    SearchBar,
    EntradaSalida,
    ModalNew,
  },
  computed: {
    ...mapGetters('entrada_salida', ['showModalNewEntrada', 'entradas']),
  },
  methods: {
    ...mapMutations('entrada_salida', ['changeShowModalNewEntrada', 'cargarDocs']),
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

  .add:hover{
    background-color: $third-color;
  }
  .add:active{
    background-color:$secondary-color ;
  }

</style>
