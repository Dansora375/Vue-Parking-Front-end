<template>
    <div>
        <section class="item" >
                <img v-if="inf_estado ==='Lleno' && tipoVehicle==='Carro'" :src=Img_ocupado class="parking-img"  alt="parqueadero" >
                <img  v-else-if="inf_estado==='Vacio'" :src=Img_vacio class="parking-img"  alt="parqueadero" >
                <img v-else-if="inf_estado ==='Lleno' && tipoVehicle==='Moto'" :src=Img_ocupadoMoto class="parking-img"  alt="parqueadero" >
                <img v-else :src=Img_vacio class="parking-img"  alt="parqueadero" >
            <div class="container-double">
                <div class="State-parking" >
                    <p class="sub-title trescuatro-em" >
                        ESTADO DE PARQUEADERO
                    </p>
                    <p class="inf-estado doble-em" >
                        {{inf_estado}}
                    </p>
                </div>
                <div class="parking-num">
                    <p class="sub-title  trescuatro-em">
                        Parqueadero número
                    </p>
                    <p class="placa-numero doble-em">
                        {{parqueadero_numero}}
                    </p>
                </div>
            </div>
            <MenuDropDown>
                <template v-slot:toggler>
                    <img class="icon-menu" src="@/assets/menu.svg" alt="">
                </template>
                <MenuDropDownContent class="menu-options">
                    <Modal2 >
                        <template v-slot:toggler>
                            <p class="opcion_menu" >
                                Mas informacion
                            </p>
                        </template>

                        <ModalContent class="prueba_content ">
                            <ModalInfResident :index="this.index" :tipoList="this.tipoList">
                            </ModalInfResident>

                            <template v-slot:cancelar>
                                <button class="btCancel">
                                    Cancelar
                                </button>
                            </template>
                            <template v-slot:confirmar>
                                <button class="btAcept">
                                    OK
                                </button>
                         </template>
                        </ModalContent>
                        <!-- </div> -->
                    </Modal2>
                    <Modal2  v-if="inf_estado ==='Vacio'">
                        <template v-slot:toggler >
                            <p class="opcion_menu" id="bordeInferior">
                                Llenar parqueadero
                            </p>
                        </template>
                        <!-- <div class="modal"> -->
                        <ModalContent class="prueba_content ">
                            <ModalLlenarParking :index="this.index" :tipoList="this.tipoList">
                            </ModalLlenarParking>

                            <template v-slot:cancelar>
                                <button class="btCancel">
                                    Cancelar
                                </button>
                            </template>
                            <template v-slot:confirmar>
                                <button class="btAcept" @click="llenarParqueadero">
                                    Confirmar
                                </button>
                         </template>
                        </ModalContent>
                        <!-- </div> -->
                    </Modal2>
                    <Modal2 v-if="inf_estado ==='Lleno'">
                        <template v-slot:toggler >
                            <p class="opcion_menu" id="bordeInferior">
                                Vaciar parqueadero
                            </p>
                        </template>
                        <!-- <div class="modal"> -->
                        <ModalContent class="prueba_content ">
                            <ModalVaciarParking :index="this.index" :tipoList="this.tipoList">
                            </ModalVaciarParking>

                            <template v-slot:cancelar>
                                <button class="btCancel">
                                    Cancelar
                                </button>
                            </template>
                            <template v-slot:confirmar>
                                <button class="btAcept" @click="VaciarParqueadero">
                                    Confirmar
                                </button>
                         </template>
                        </ModalContent>
                        <!-- </div> -->
                    </Modal2>
                </MenuDropDownContent>
            </MenuDropDown>
        </section>
    </div>
</template>

<script>
// import Options_zona_P from '@/components/Options_zona_P.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex'
import ParqOcupado from '@/assets/P_ocupado.svg'
import ParqVacio from '@/assets/P_vacio.svg'
import ImgParkingMoto from '@/assets/ImgParkingMoto.svg'

import MenuDropDownContent from '@/components/dropDown/MenuDropDownContent.vue'
import MenuDropDown from '@/components/dropDown/MenuDropdown.vue'
import Modal2 from '@/components/modal/Modal2.vue'
import ModalContent from '@/components/modal/ModalContent.vue'
import ModalInfResident from '@/components/Parking/ModalInfResident.vue'
import ModalLlenarParking from '@/components/Parking/ModalLlenarparking.vue'
import ModalVaciarParking from '@/components/Parking/ModalVaciarParking.vue'
import { ref } from 'vue'

// import { mapGetters, mapMutations } from 'vuex'

const resetData = {
  id: '',
  horaSalida: ''
}

const resetDataIngreso = {
  id: '',
  horaEntrada: ''
}

export default {
  name: 'ZonaParqueadero',

  components: {
    Modal2,
    ModalContent,
    MenuDropDown,
    MenuDropDownContent,
    ModalInfResident,
    ModalLlenarParking,
    ModalVaciarParking

  },

  provide () {
    return {
      dataNewIngresoResi: () => this.dateIngrResident,
      dataNewSalidaResi: () => this.dateSalidaResident,
      updateIngresoRes: this.updateIngresoRes,
      updateSalida: this.updateSalidaRes
    }
  },
  data () {
    return {
      Img_ocupado: ParqOcupado,
      Img_vacio: ParqVacio,
      Img_ocupadoMoto: ImgParkingMoto,

      dateIngrResident: {
        id: '',
        horaEntrada: ''
      },
      dateSalidaResident: {
        id: '',
        horaSalida: ''
      }

    }
  },

  computed: {

    ...mapGetters('inf_resident', ['resident_listNF'])
    //   ...mapGetters
    // dateIngrResi () {
    //   return new Date()
    // }
  },
  methods: {
    ...mapActions('inf_resident', ['AgregarEntradaResi', 'AgregarSalidaResi']),
    llenarParqueadero () {
      // Lo comentado serviria para implementar pruebas
      // o para implmentar la actualiazacion de horas
      // utilizando el emit

      //   const result = this.AgregarEntradaResi(this.dateIngrResident)
      this.AgregarEntradaResi(this.dateIngrResident)
      //   this.ejecutarEmit(result)
      this.resetDataEntrada()
    },
    // ejecutarEmit (data) {
    //   this.$emit('eventIngrResi', data)
    // },
    resetDataEntrada () {
      this.dateIngrResident = resetDataIngreso
    },
    resetDataSalida () {
      this.dateIngrResident = resetData
    },
    updateIngresoRes (values) {
      const { key, val } = values
      this.dateIngrResident[key] = val
    },
    VaciarParqueadero () {
      this.AgregarSalidaResi(this.dateSalidaResident)

      this.resetDataSalida()
    },
    updateSalidaRes (values) {
      const { key, val } = values
      this.dateSalidaResident[key] = val
    }

    // newdateIngrResi () {
    //   this.dateIngrResi()
    // }

  },

  props: {
    inf_estado: {
      // Se podria pensar en implementar un Boolean
      type: String,
      default: 'vacio'
    },
    parqueadero_numero: {
      type: String,
      default: 'A1'
    },
    index: {
      type: Number
    },
    tipoList: {
      type: String
    },
    tipoVehicle: {
      type: String
    }

  }
}
</script>

<style lang="scss" scoped>
    @import '@/views/scss/_theme.scss';
    .item *{
        margin:0;
        font-size: medium;
    }
    .item{
        margin-top: 10px;
        border-radius: 5px;
        padding:10px ;
        position: relative;
        background:$third-color;

        display: flex;
        border: 2px solid $main-color;
        justify-content: space-between;
        align-items: center;
    }
    .icon-menu{
        width: 30px;
    }
    .container-double{

        display: flex;
        // flex-direction:row;
        justify-content: space-between;
        // flex-direction: column;
        align-items: center;
        width: 50%;

    }

    .state-parking{

        display:block;
        flex-direction: column;
        // margin-right: 20px;
        margin-left: 20px;
     }

    .parking-num{
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            margin-right: 20px;
        }

    .parking-img{
        width: 70px;

        padding-left: 10px;
    }
    .menu{
        width: 30px;
    }

    .sub-title{
        color: $main-color;
        font-weight: bold;
        // display: block;
    }

    .trescuatro-em{
        font-size: 0.75em;
    }
    .doble-em{
        font-size: 2em;
        font-weight: 900;
    }

    .inf-estado {
        color:$secondary-color;
        display: block;
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
  left: 0;
  right: 0;
  bottom: 0;
  z-index:200;
  }
  .menu-options{

      position: absolute;
        display: flex-flow ;
        right: 25px;
        top:70%;
        border-radius:10px;
        border:1px solid $main-color;
        min-width:105px;
        width: 25%;
        background:$secondary-color;
        z-index: 10;
    }

    .opcion_menu{

        color: $main-color;
        border-bottom:1px solid $main-color;
        padding: 5px;

        font-size: 0.9em;
        min-width:49px;
        cursor: pointer;
        // border-radius:1.5px;
}
    #bordeInferior{
      border-bottom:none;
    }
    // .prueba_content{
    //      width: 25%;
    //     height:70%;
    //     overflow-y:scroll;
    //     padding: 30px;
    //     display: flex;
    //     border-radius: 5px;
    //     align-items: center;
    //     flex-direction: column;
    //     background-color: $background-color;
    //     // background-color: black;
    //     z-index: 300;
    // }

    @media (max-width: 530px){

        .item div{

            flex-direction:column;
        }
        .trescuatro-em{
            font-size: 0.5em;
        }
        .doble-em{
            font-size: 1.5em;
        }
        // .data *{
        //     display: none;
        // }
        .menu{
            width: 20px;
        }
        .icon-menu{
            width: 20px;
        }
        .opcion_menu{
        padding: 2.5px;
        font-size: 0.7em;
        }
        .parking-img{
            width: 38px;
            padding-left: 0px;
            padding-right: 8px;
        }

    }
</style>
