<template>
  <div class="home" v-on:reset=(resetDataEntrada)>
    <Header></Header>
    <Navbar class="nav"></Navbar>
    <div class="main_entrada" v-on:type="modificarTipo">
      <div class="superior-bar">

        <Modal2>
          <template v-slot:toggler>
            <img class='addImage' src="@/assets/add.svg" alt="">
          </template>
          <modal-content>
            <new-entrada @type="changeOption">
            </new-entrada>
            <template v-slot:cancelar>
              <button @click="resetDataEntrada()" class="btCancel">
                Cancelar
              </button>
            </template>
            <template v-slot:confirmar>
              <button v-if="esVisitante" @click="agregarEntrada" class="btAcept">
                Aceptar V
              </button>
              <button v-else @click="agregarEntrada2" class="btAcept">
                Aceptar R
              </button>
            </template>
          </modal-content>
        </Modal2>

        <SearchBar class="search"></SearchBar>
      </div>

      <div class="opciones">
        <button id="Bt_default" class="buttonMenu" @click="showParkResi">
          Residentes
        </button>
        <button id="Bt_default2" class="buttonMenu" @click="showParkVisitant" >
          Visitantes
        </button>
      </div>

      <div class="listado" v-show="showResidentIng" >
        <entrada-salida  class="lista" v-for="(itemEntradaResi, index) in residentIngresoList" :key="index" v-bind:date_ingreso="transformToDate(itemEntradaResi)" v-bind:placa="itemEntradaResi.residente.vehiculo[0].placa" v-bind:index="index" v-bind:tipo="itemEntradaResi.residente.vehiculo[0].tipo" v-bind:id="itemEntradaResi._id" tipoList="Residente">
        </entrada-salida>
      </div>

      <div class="listado" v-show="showVisitantIng" >
        <entrada-salida  class="lista" v-for="(itemEntrada, index) in entradas" :key="index" v-bind:date_ingreso="transformToDate(itemEntrada)" v-bind:placa="itemEntrada.placa" v-bind:index="index" v-bind:tipo="itemEntrada.tipo" v-bind:id="itemEntrada._id" tipoList="Visitante">
        </entrada-salida>
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
import { mapGetters, mapActions } from 'vuex'

import Header from '@/components/Header.vue'
import Navbar from '@/components/Nav.vue'
import SearchBar from '@/components/SearchButton.vue'
import EntradaSalida from '@/components/entrada-vehiculos/EntradaSalida.vue'
// import ModalNew from '@/components/ModalNewEntrada.vue';
// import Modal from '@/components/modal/Modal.vue';
import NewEntrada from '@/components/entrada-vehiculos/NewEntrada.vue'

import Modal2 from '@/components/modal/Modal2.vue'
import ModalContent from '@/components/modal/ModalContent.vue'
// import NewEntrada from '../components/entrada-vehiculos/NewEntrada.vue'

const resetData = {
  nombre: '',
  cedula: '',
  apto_num: '',
  tower: '',
  placa: '',
  tipo: '',
  datos_extra: '',
  parqueadero: ''
}

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
    ModalContent
    // NewEntrada
  },
  provide () {
    return {
      dataEntrada: () => this.dataNewEntrada,
      updateEntrada: this.updateEntrada,
      agregarEntrada: this.agregarEntrada2
    }
  },
  data () {
    return {
      isActiveModal: false,
      dataNewEntrada: {
        nombre: '',
        cedula: '',
        apto_num: '',
        tower: '',
        placa: '',
        parqueadero: '',
        tipo: '',
        datos_extra: ''
      },
      esVisitante: true,
      showResidentIng: {
        type: Boolean,
        default: true
      },
      showVisitantIng: {
        type: Boolean,
        default: false
      }
      // ResidentIngresos: this.residentIngresoList
    }
  },
  mounted () {
    this.$store.dispatch('inf_resident/cargarListaResidentesParking')
    this.$store.dispatch('entrada_salida/cargarEntradas')
    this.$store.dispatch('ResiIngreso/cargar_data_resi')
    this.showParkResi()
  },
  computed: {
    ...mapGetters('entrada_salida', ['showModalNewEntrada', 'entradas']),
    ...mapGetters('ResiIngreso', ['residentIngresoList'])

  },
  methods: {

    ...mapActions('entrada_salida', ['cargarDocs', 'addNewEntrada']),
    agregarEntrada () {
      // console.log(this.dataNewEntrada);
      this.addNewEntrada(this.dataNewEntrada)
      this.resetDataEntrada()
      // this.toggleModal(false);
    },
    agregarEntrada2 (value) {
      this.addNewEntrada(value)
    },
    transformToDate (item) {
      return new Date(item.hora_entrada)
    },
    resetDataEntrada () {
      this.dataNewEntrada = resetData
      // console.log(this.dataNewEntrada);
    },
    updateEntrada (values) {
      const { key, val } = values
      this.dataNewEntrada[key] = val
    },
    modificarTipo () {
      console.log('hola')
    },

    showParkResi () {
      this.showResidentIng = true
      this.showVisitantIng = false
      const ButtonR = document.getElementById('Bt_default')
      ButtonR.style.fontWeight = 'bold'
      ButtonR.style.borderBottom = '3px solid #22577A'
      const ButtonTwo = document.getElementById('Bt_default2')
      ButtonTwo.style.fontWeight = null
      ButtonTwo.style.borderBottom = null
    },
    showParkVisitant () {
      this.showVisitantIng = true
      this.showResidentIng = false
      const ButtonR = document.getElementById('Bt_default')
      ButtonR.style.fontWeight = null
      ButtonR.style.borderBottom = null

      const ButtonTwo = document.getElementById('Bt_default2')
      ButtonTwo.style.fontWeight = 'bold'
      ButtonTwo.style.borderBottom = '3px solid #22577A'
    }
    // changeOption (data) {
    //   // console.log(data, data.toLowerCase() === "visitante");
    //   this.esVisitante = data.toLowerCase() === 'visitante'
    // }
  }
}
</script>

<style lang="scss" scoped>

@import '@/views/scss/_theme.scss';
.opcion_activa{
  border-bottom: 3px solid $main-color;
  font-weight: bold;
  width: 50%;
}
.home{
  // z-index: 200;
  // background: black;
  height: 100vh;
}
.main_entrada{
  // background: purple;
  height: 70%;
}
.listado{
  display: inline-block;
  height: 100%;
  width: 100%;
  // background: black;
}
.medio{
  // border: 10px solid black;
  height: 50%;
  width: 100%;
  margin-bottom: 20px;
  // flex-basis: 50%;
}
.content-medio{
  overflow-x: auto;
  // height: 30vh;
  // max-height: 30%;
  // height: 200px;
}
.residentes{
  height: 85%;
  // height:;
  direction: rtl;
  // background: yellow;
}
.visitantes{
  height: 85%;
  direction: ltr;
  //

}
.title{
  font-size: 2em;
}

  .main_entrada{
    padding: 20px;
    margin-left: 20%;
  }

  .superior-bar{
    display: flex;
    justify-content: space-between;
  }
  .btAcept{
    color:$third-color;

  }
  .btAcept:hover{
    color:$main-color;
  }

  .btCancel:hover{
    color:$background-color;
  }
  .buttonMenu{
      width: 50%;
      border-bottom: 1px solid $main-color;

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
    .buttonMenu{
      font-size: 0.8em;

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

  .addImage:hover{
    background-color: $third-color;
  }
  .addImage:active{
    background-color:$secondary-color ;
  }
.opciones{
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 20px;
  background:$background-color;
  padding-bottom: 10px;
  // margin: 15px;

}

</style>
