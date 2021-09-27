<template>
  <div class="about">
      <link rel="shortcut icon" href="@/asssets/car_logo.svg" />

    <Header></Header>
    <Navbar></Navbar>
    <button class="btn-open" @click="showParqueado()">probar pop-ups</button>
    <div>
    <Infovehiculoparqueado v-if="showModal" @close="showModal=false"/>
    </div>
     
    </div>
    
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import Infovehiculoparqueado from '@/components/ModalInfoVehiculoParqueadero.vue';


export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
    Infovehiculoparqueado
    
  },
  data(){
    return{
      showModal: false
  }
  },
  methods:{
    showParqueado(){
    this.showModal=true

  }
  }
};
</script>

<style lang="scss" scoped>

</style>
