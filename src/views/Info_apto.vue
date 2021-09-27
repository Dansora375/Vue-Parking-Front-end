<template>
  <div class="about">
      <link rel="shortcut icon" href="@/asssets/car_logo.svg" />

    <Header></Header>
    <Navbar></Navbar>
    <button class="btn-open" @click="showApto()">probar pop-ups</button>
    <div>
    <Infoapto v-if="showModal" @close="showModal=false"/>
    </div>
     
    </div>
    
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import Infoapto from '@/components/ModalInfoApto.vue';


export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
    Infoapto
    
  },
  data(){
    return{
      showModal: false
  }
  },
  methods:{
    showApto(){
    this.showModal=true

  }
  }
};
</script>

<style lang="scss" scoped>

</style>
