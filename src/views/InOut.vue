<template>
  <div class="home">
    <Header nombre_usuario="Carlos" rol_usuario="Trabajador"></Header>
    <Navbar class="nav"></Navbar>
    <div class="main_entrada">
      <div class="superior-bar">
        <img src="@/assets/add.svg" alt="">
        <SearchBar></SearchBar>
      </div>
      <div class="listado">
        <EntradaSalida class="listado"></EntradaSalida>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import SearchBar from '@/components/SearchButton.vue';
import EntradaSalida from '@/components/EntradaSalida.vue';

export default {
  name: 'InOut',
  components: {
    Header,
    Navbar,
    SearchBar,
    EntradaSalida,
  },
};
</script>

<style lang="scss" scoped>
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

</style>
