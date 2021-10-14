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
            <div class="vehicle_list">
                <ZonaParqueadero  v-for=" (ItemResi,index) in resident_listNF" :key="index" :inf_estado="ItemResi.ocupado ?  'Lleno':'Vacio'" :index="index" :parqueadero_numero="ItemResi.residente.vehiculo[0].parqueadero.nombre_Parqueadero" tipoList="Residente" :tipoVehicle="ItemResi.residente.vehiculo[0].tipo" >

                </ZonaParqueadero>
            </div>

            <div class="vehicle-list" >
                <ZonaParqueadero v-for=" (ItemVisitant,index) in entradas" :key="index" :inf_estado="ItemVisitant.ocupado ?  'Lleno':'Vacio'" :parqueadero_numero="ItemVisitant.tower + ItemVisitant.apto_num + ' -V' "  >

                </ZonaParqueadero>
            </div>
        </div>
             <!-- <Options_zona_P>

                                </Options_zona_P>   -->
                <!-- <div class="modal"  >
                     <info_parqueadero/>
                </div>   -->
                <!-- <div class="modal">
                     <Ing_vclo_visitante/>
                </div>
            -->

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
      }
    }
  },

  mounted () {
    this.$store.dispatch('entrada_salida/cargarEntradas')
    this.$store.dispatch('inf_resident/cargar_data_resiNF')
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

  @media (max-width: 600px){
    .superior-bar{
      display: flex;

    }
     .Imageadd{
        width: 40px;

    }
    .search{
        display: flex;
        justify-content: flex-end;

    }
    .menu{
        width: 20px;

    }
     .opcion_M{
        padding: 2.5px;
        font-size: 0.7em;
    }
  }

</style>
