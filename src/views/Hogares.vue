<template>
<Header></Header>
    <!-- <Nav/> -->
<Navbar></Navbar>
<div class="container">
  <div class= 'Navigation'>
    <div class = 'Navigation-Buttons'>
      <button class="boton1 button">Asignar Parqueadero</button>
      <!-- eslint-disable-next-line max-len -->
      <button class="boton2 button">TORRE A <img class="menu" src="@/assets/menu.svg" alt=""></button>
      <modal-2>
        <template v-slot:toggler>
          <button  class="button">
            Crear hogar
          </button>
        </template>
        <modal-content>
          <div>
            <h1>
              Crear opciones para nuevo parqueadero
            </h1>
          </div>
          <template v-slot:cancelar>
            <button>
              Cancelar
            </button>
          </template>
          <template v-slot:confirmar>
            <button>
              Confirmar
            </button>
          </template>
        </modal-content>
      </modal-2>
    </div>
    <div class="buscar">
      <form action="">
        <label for="buscar">Buscar</label>
        <input type="text">
      </form>
    </div>
  </div>

  <div class="hogares">
    <hogares v-for="(item, index) of getHogares" :key="index" v-bind:index="index">
  </hogares>
  </div>

  <!-- <div class= "homes_row"> -->
    <!-- <div class="contenedor" v-for="(item, index) of apto" :key="index">
      <Hogares :apto="item"></Hogares>
    </div> -->
  <!-- </div> -->
</div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

import Header from '@/components/Header.vue';
import Navbar from '@/components/Nav.vue';
import Hogares from '@/components/hogar/ListaHogares.vue';

import Modal2 from '@/components/modal/Modal2.vue';
import ModalContent from '@/components/modal/ModalContent.vue';
// import Infoapto from '@/components/ModalInfoApto.vue';

export default {
  name: 'Hogar',
  components: {
    Header,
    Navbar,
    Hogares,
    Modal2,
    ModalContent,
    // Infoapto,
  },
  created() {
    // console.log('inmounted: ');
    this.$store.dispatch('hogares_module/cargarHomes');
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('hogares_module', ['getHogares']),
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
@import '@/views/scss/_theme.scss';

.container{
  padding: 20px;
  margin-left: 20%;
}

.Navigation{
  background-color: $main-color;
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  height:fit-content;
  padding: 10px;
  // margin: 5px 10px 0 21% ;
  // justify-content: space-between;
  border-radius:5px;
  line-height: 20px;
}

.Navigation-Buttons{
  display: flex;
  justify-content: space-around;
  line-height: 30px;
  padding-top: 5px;
}
.prueba{
   background: black;
 }

// .homes_row{
//   display: flex;
//   margin: -30px 10px 0 20% ;
// }
.button{
  background-color: $background-color;
  border-radius: 5px;
  line-height: 5px;
  // width: 100px;
  height: 30px;
  color:$main-color ;
  margin: 5px;
  // margin-left: 20px;
  font-weight: bold;
  justify-content: space-around;
  cursor:pointer;
  // background: black;
}
.menu{
  margin-left: 95%;
  margin-top: -15%;
  width:10px;
  height:20px;
  font-weight: bolder;
}

.buscar{
  padding-right: 15px;
  padding-top: 10px;
  line-height: 0;
}

input{
  background-color: $secondary-color;
  color:$main-color ;
  height: 20px;
  // margin-left: 5px;
  border-radius: 5px;
}
// .contenedor{
//   margin-right: -70px;
//   margin-left: -70px;
//   padding-bottom: 10%;
// }
// Arreglando algunos detalles
.hogares{
    display: flex;
    flex-wrap: wrap;
  }
</style>
