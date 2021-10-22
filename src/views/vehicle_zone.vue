<template>
<div class="vehicle_zone" >
    <Header ></Header>
    <Navbar></Navbar>
    <div class=" cont-flex" >
        <div class="superior-bar">
            <Modal2>
                <template v-slot:toggler>
                    <img class='Imageadd' src="@/assets/add.svg"  alt="">
                </template>
                <modal-content>
                    <NewParking>
                    </NewParking>
                    <template v-slot:cancelar>
                        <button class="btCancel">
                        Cancelar
                        </button>
                    </template>
                    <template v-slot:confirmar>
                        <button @click="agregarEntrada" class="btAcept"> <!-- MIRAR LA FUNCIONALIDAD DEL BOTON -->
                        Aceptar
                        </button>
                    </template>
                </modal-content>
            </Modal2>
            <SearchBar class="search"></SearchBar>
        </div>
        <div class="subMenu">
          <button class="buttonMenu" id="Bt_default" @click="showParkResi">Residentes</button>
          <button class="buttonMenu" id="Bt_default2"  @click="showParkVisitant">Visitantes</button>
        </div>
        <div v-show="showResidentPark">
            <div class="vehicle_list" >
                <ZonaParqueadero  v-for=" (ItemResi,index) in resident_listNF" :key="index" :inf_estado="ItemResi.Ocupado ?  'Lleno':'Vacio'" :index="index" :parqueadero_numero="ItemResi.nombre_Parqueadero" tipoList="Residente" :tipoVehicle="ItemResi.tipoVehicle" >
                </ZonaParqueadero>
            </div>
        </div>
        <div v-show="showVisitantPark">
            <div class="vehicle-list" >
                <ZonaParqueadero v-for=" (ItemVisitant,index) in entradas" :key="index" :inf_estado="ItemVisitant.ocupado ?  'Lleno':'Vacio'" :index="index" :parqueadero_numero="ItemVisitant.tower + ItemVisitant.apto_num + ' -V' " tipoList="Visitante" :tipoVehicle="ItemVisitant.tower" >

                </ZonaParqueadero>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

import NewParking from '@/components/Parking/ModalNewParking.vue'
import Header from '@/components/Header.vue'
import Navbar from '@/components/Nav.vue'
import SearchBar from '@/components/SearchButton.vue'
import ZonaParqueadero from '@/components/Parking/ZonaParqueadero.vue'
import info_parqueadero from '@/components/Modal_Info_parqueadero.vue'
import Ing_vclo_visitante from '@/components/Mdl_Ingreso_vclo_visitante.vue'

import Modal2 from '@/components/modal/Modal2.vue'
import ModalContent from '@/components/modal/ModalContent.vue'

// ---------------------------------------
const resetData = {
  nombreParqueadero: '',
  tipoVehicle: '',
  tipoPersonIngr: ''

}
export default {
  name: 'Vehicle_zone',
  components: {
    Header,
    Navbar,
    SearchBar,
    ZonaParqueadero,
    // info_parqueadero,
    // Ing_vclo_visitante,

    NewParking,
    Modal2,
    ModalContent
  },
  provide () {
    return {
      dataEntradaParking: () => this.dataNewParking,
      updateEntradaParking: this.updateEntradaParking
    }
  },
  data () {
    return {
      dataNewParking: {
        nombreParqueadero: '',
        tipoVehicle: '',
        tipoPersonIngr: ''
      },
      showResidentPark: {
        type: Boolean,
        default: true
      },
      showVisitantPark: {
        type: Boolean,
        default: false
      }
    }
  },

  mounted () {
    this.$store.dispatch('entrada_salida/cargarEntradas')
    this.$store.dispatch('inf_resident/cargar_data_resiNF')
    this.showParkResi()
  },
  computed: {

    // ...mapState('options_zona_p',['showOptions']),
    ...mapGetters('inf_resident', ['resident_listNF']),
    ...mapGetters('entrada_salida', ['entradas'])
  },

  methods: {
    ...mapActions('parqueadero_module', ['addNewParking']),

    agregarEntrada () {
      // console.log(this.dataNewEntrada);
      this.addNewParking(this.dataNewParking)
      this.resetDataEntrada()
      // this.toggleModal(false);
    },
    resetDataEntrada () {
      this.dataNewParking = resetData
    },
    updateEntradaParking (values) {
      const { key, val } = values
      this.dataNewParking[key] = val
    },
    showParkResi () {
      this.showResidentPark = true
      this.showVisitantPark = false
      const ButtonR = document.getElementById('Bt_default')
      ButtonR.style.fontWeight = 'bold'
      ButtonR.style.borderBottom = '3px solid #22577A'
      const ButtonTwo = document.getElementById('Bt_default2')
      ButtonTwo.style.fontWeight = null
      ButtonTwo.style.borderBottom = null
    },
    showParkVisitant () {
      this.showVisitantPark = true
      this.showResidentPark = false
      const ButtonR = document.getElementById('Bt_default')
      ButtonR.style.fontWeight = null
      ButtonR.style.borderBottom = null

      const ButtonTwo = document.getElementById('Bt_default2')
      ButtonTwo.style.fontWeight = 'bold'
      ButtonTwo.style.borderBottom = '3px solid #22577A'
    }
    // ...mapMutations('inf_resident', ['changeShowOptions']),

    // ...mapActions('inf_resident', ['cargar_data_resi']),
    // ...mapActions('entrada_salida', ['cargar_parq_list'])

  }
}
</script>

<style lang="scss" scoped >
    @import '@/views/scss/_theme.scss';

    .main {

        display:flex;

    }

    .cont-flex{

        margin-left: 20%;

        padding: 20px;

    }

    .prue{

        color: transparent;
         /* background:white; */
    }

    #addImage{
         width: 100%;
        max-width: 40px;

        /* background:red; */

    }

    .vehicle-list{

        padding-top: 20px;
        /* background: orange; */
        height: 100%;
    }

    .superior-bar{
    display: flex;
    justify-content: space-between;
     position: sticky;
    top: 0px;
    background:$background-color;
    z-index: 5;
    padding-bottom: 10px;
  }
  .menu{
        width: 30px;

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

  .modal_2{
    position: absolute;
    display: flex; /* establish flex container */
    justify-content: center; /* center flex items horizontally, in this case */
    align-items: center; /* center flex items vertically, in this case */
    /* background-color: rgba(0, 0, 0, 0.5); */
    height: 100%;
    width: 100%;
    top: 0;
  }
  .opcion_M{

       padding: 5px;
       font-size: 0.9em;
        min-width:49px;
        cursor: pointer;
        color: $main-color;
        border-bottom:1px solid $main-color;
        position: relative;
        z-index: 100;

    }

    #Bott_cancel{
        border-bottom:none;

    }
    .Imageadd{

        width: 50px;
    }

    .subMenu{
      display: flex;
      justify-content: space-around;
      position: sticky;
      top: 20px;
      background:$background-color;
      padding-bottom: 10px;
      // background:Red;

    }
    .buttonMenu{
      width: 50%;
      border-bottom: 1px solid $main-color;

    }

  @media (max-width: 600px){
    .superior-bar{
      display: flex;

    }
     .Imageadd{
        width: 40px;

    }
    .search{
        display: flex;
        /* margin-left: 85px; */
        justify-content: flex-end;

    }
    .menu{
        width: 20px;

    }
     .opcion_M{
        padding: 2.5px;
        font-size: 0.7em;
    }
    .buttonMenu{
      font-size: 0.8em;

    }
  }

</style>
