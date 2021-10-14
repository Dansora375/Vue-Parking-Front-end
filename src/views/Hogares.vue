<template>
<Header></Header>
    <!-- <Nav/> -->
<Navbar></Navbar>
<div class="container">
  <div class= 'Navigation'>
    <div class = 'Navigation-Buttons'>
      <button class="boton1 button">Asignar Parqueadero</button>
      <!-- eslint-disable-next-line max-len -->
      <!-- <button class="boton2 button" @click="cargarTorres()">TORRE A <img class="menu" src="@/assets/menu.svg" alt=""></button> -->
      <select v-model="Torre" class="button">
        <option v-for="(tower, index) of getTowers" :key="index">
          {{tower.tower}}
        </option>
        <!-- <option disabled @click="alert('hola mundo')">
          <button class="new-tower">
            Crear torre nueva
          </button>
        </option> -->
      </select>
      <modal-2>
        <template v-slot:toggler>
          <button  class="button">
            Crear hogar
          </button>
        </template>
        <modal-content>
          <new-hogar>
          </new-hogar>
          <template v-slot:cancelar>
            <button>
              Cancelar
            </button>
          </template>
          <template v-slot:confirmar>
            <button @click="agregarHogar()">
              Confirmar
            </button>
          </template>
        </modal-content>
      </modal-2>
    </div>
    <div class="buscar">
      <form action="">
        <label class="bus" for="buscar">Buscar</label>
        <input type="text">
      </form>
    </div>
  </div>
  <div>
    <button @click="cambiarOwner()">
      prueba owner
    </button>
  </div>
  <div class="hogares">
    <!-- eslint-disable-next-line max-len -->
    <hogares v-for="(item, index) of getHogaresByTower" :key="index" v-bind:id="item._id" v-bind:aptoNum="item.apto_num">
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
import { mapGetters, mapActions } from 'vuex'

import Header from '@/components/Header.vue'
import Navbar from '@/components/Nav.vue'
import Hogares from '@/components/hogar/ListaHogares.vue'
import NewHogar from '@/components/hogar/NewHogar.vue'

import Modal2 from '@/components/modal/Modal2.vue'
import ModalContent from '@/components/modal/ModalContent.vue'
// import Infoapto from '@/components/ModalInfoApto.vue';

export default {
  name: 'Hogar',
  components: {
    Header,
    Navbar,
    Hogares,
    Modal2,
    ModalContent,
    NewHogar
    // Infoapto,
  },
  created () {
    // console.log('inmounted: ');
    this.$store.dispatch('hogares_module/cargarHomes')
    this.$store.dispatch('hogares_module/cargarTorres')
  },
  provide () {
    return {
      dataHogar: () => this.dataNewHogar,
      updateEntrada: this.updateEntrada,
      contraseña: () => this.contraseña,
      updateContraseña: this.updateContraseña
    }
  },
  data () {
    return {
      dataNewHogar: {
        aptoNum: 0,
        tower: ''
      },
      Torre: '',
      contraseña: ''
    }
  },
  computed: {
    ...mapGetters('hogares_module', ['getHogares', 'getTowers']),
    ...mapGetters(['getUserData']),
    getHogaresByTower () {
      if (this.Torre !== '' && this.Torre !== null && this.Torre !== undefined) {
        return this.getHogares.filter(
          (dato) => dato.tower === this.Torre
        )
      }
      return this.getHogares
    }
  },
  methods: {
    ...mapActions('hogares_module', ['crearHome', 'cambiarOwner']),
    updateEntrada(values) {
      const { key, val } = values;
      this.dataNewHogar[key] = val;
    },
    agregarHogar () {
      // eslint-disable-next-line max-len
      this.crearHome({ ...this.dataNewHogar, user: this.getUserData.user, password: this.contraseña })
    },
    updateContraseña (values) {
      this.contraseña = values
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/views/scss/_theme.scss';

.container{
  padding: 20px;
  margin-left: 20%;
  // display: flex;
  flex-wrap: wrap;
}

.Navigation{
  background-color: $main-color;
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
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
.new-tower{
  // background: $main-color;
  cursor: pointer;
}

// .homes_row{
//   display: flex;
//   margin: -30px 10px 0 20% ;
// }
.button{
  background-color: $background-color;
  border-radius: 5px;
  line-height: 12px;
  min-width: 107px;
  // width: 100px;
  height: 45px;
  color:$main-color ;
  margin: 3px;
  // margin-left: 20px;
  font-weight: bold;
  justify-content: space-around;
  cursor:pointer;
  // background: black;
}
select{
  padding: 0;
}
.menu{
  margin-left: 95%;
  margin-top: -15%;
  width:10px;
  height:20px;
  font-weight: bolder;
}

.buscar{
  margin-top: 5px;
  padding-right: 15px;
  padding-top: 10px;
  line-height: 0;
  color: $main-color;
  
}
.bus{
  font-size: 20px;
  color: $secondary-color;
  // margin-right: 50px;
  padding: 25px;
  flex-wrap: wrap;
}

input{
  background-color: $secondary-color;
  color:$main-color ;
  height: 20px;
  width: 140px;
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

@media (max-width: 900){
  .Navigation-Buttons .button{
    font-size: 0.2em;
  }
}
@media (max-width: 419px){
  input{
  background-color: $secondary-color;
  color:$main-color ;
  height: 20px;
  width: 50px;
  margin-top: 15px;
  border-radius: 5px;
  
}
.bus{
  font-size: 10px;
  color: $secondary-color;
  // margin-right: 50px;
  padding: 25px;
  flex-wrap: wrap;
}
.button{
  background-color: $background-color;
  border-radius: 5px;
  line-height: 12px;
font-size: 8px;
  min-width: 60px;
  // width: 100px;
  height: 39px;
  color:$main-color ;
  margin: 5px;
  // margin-left: 20px;
  font-weight: bold;
  justify-content: space-around;
  cursor:pointer;
  // background: black;
}
}
</style>
