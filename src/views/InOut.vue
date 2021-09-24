<template>
  <div class="home">
    <Header nombre_usuario="Carlos" rol_usuario="Trabajador"></Header>
    <Navbar class="nav"></Navbar>
    <div class="main_entrada">
      <div class="superior-bar">
        <img src="@/assets/add.svg" @click="changeModal(true)" alt="">
        <SearchBar></SearchBar>
      </div>
      <div class="listado">
        <EntradaSalida class="listado"></EntradaSalida>
      </div>
    </div>
    <div class="modal" v-if="showModalNewEntrada" >
      <ModalNew></ModalNew>
  </div>

  </div>

  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import { mapState, mapMutations } from 'vuex';

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
  data() {
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
      // alert(value);
      this.$store.dispatch('changeModalNewEntrada', value);
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

</style>
