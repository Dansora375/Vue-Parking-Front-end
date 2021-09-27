<template>
  <div class="about">
    <Header></Header>
    <Navbar></Navbar>
    <button class="btn-open" @click="showTorre()">probar pop-ups</button>
    <div>
    <STower v-if="showModal" @close="showModal=false"/>
    </div>
     
    </div>
    
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import STower from '@/components/ModalSelecTower.vue';


export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
    STower
    
  },
  data(){
    return{
      showModal: false
  }
  },
  methods:{
    showTorre(){
    this.showModal=true

  }
  }
};
</script>

<style lang="scss" scoped>

</style>
