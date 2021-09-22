<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header/>
    <Nav/>
    <ListaResidentes />
  </div>
</template>

<script>
// @ is an alias to /src
import ListaResidentes from '@/components/ListaResidentes.vue';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    ListaResidentes,
    Header,
    Nav,
  },
};
</script>
