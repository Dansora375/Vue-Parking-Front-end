<template>
  <div >
    <section class="item">
      <!-- <img v-bind:src="img_route" class="vehicle"  alt="vehiculos"> -->

        <img v-if="tipo === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
        <img v-else-if="tipo === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
        <img v-else v-bind:src="imgDefault" class="vehicle"  alt="vehiculos">

      <!-- <img v-bind:src="img_route" class="vehicle"  alt="vehiculos">
      <img v-bind:src="img_route" class="vehicle"  alt="vehiculos"> -->
      <div class="container-double">

        <div class="tiempo-data">
          <p class="hora-title trescuatro-em">
            Hora de ingreso
          </p>
          <p class="hora-ingreso doble-em">
            {{date_ingreso.getHours()}}:{{date_ingreso.getMinutes()}}
          </p>
          <p class="fecha-ingreso trescuatro-em">
            <!-- eslint-disable-next-line max-len -->
            {{date_ingreso.getDate()+'/'+(Number(date_ingreso.getMonth())+1)+'/'+date_ingreso.getFullYear()}}
          </p>

        </div>
        <div class="placa-data">
          <p class="placa-titulo trescuatro-em">
            Placa
          </p>
          <p class="placa-numero doble-em">
            {{placa}}
          </p>
        </div>
      </div>
      <!-- <img class="icon-menu" src="@/assets/menu.svg" alt="">  -->
      <MenuDropDown>
        <template v-slot:toggler>
          <img class="icon-menu" src="@/assets/menu.svg" alt="">
        </template>
        <MenuDropDownContent class="menu-options">

          <!-- <Modal2>
            <template v-slot:toggler>
              <p class="opcion_menu">
                Terminar parqueadero
              </p>
            </template>
            <ModalContent>
              <Entradatarifa v-bind:index="this.index" :tipoList="this.tipoList">
              </Entradatarifa>
              <template v-slot:cancelar >
                <button>
                  Cancelar
                </button>
              </template>
              <template v-slot:confirmar v-if="estaConfirmado">
                <button >
                  Terminar proceso
                </button>
              </template>
            </ModalContent>
          </Modal2> -->
          <!-- Modal para informacion de visitantes -->
          <Modal2  v-if="tipoList==='Visitante'">
            <template v-slot:toggler>
              <p class="opcion_menu">
                Mas informacion
              </p>
            </template>
            <ModalContent>
              <EntradaInformation :index="this.index" :tipoList="this.tipoList" :tipoVehicle="infoVisitant.tipo" :nombre="infoVisitant.nombre" :placa="infoVisitant.placa" :HoraEntrada="infoVisitant.hora_entrada" :apartamento="infoVisitant.apto_num" :datosExtra="infoVisitant.datos_extra" :tower="infoVisitant.tower" :parqueadero="infoVisitant.parqueadero.nombre_Parqueadero">
              </EntradaInformation>
              <template v-slot:cancelar>
                <button>
                  Cancelar
                </button>
              </template>
              <template v-slot:confirmar>
                <button class="btAcept">
                    OK
                </button>
              </template>
            </ModalContent>
          </Modal2>
          <!-- Modal para informacion de residentes 1-->
          <Modal2 v-if="tipoList=='Residente' && ComprobarHogarHabitando ">
            <template v-slot:toggler>
              <p class="opcion_menu">
                Mas informacion
              </p>
            </template>
            <ModalContent>
              <EntradaInformation :tipoVehicle="infoResident.residente.vehiculo[0].tipo" :nombre="infoResident.residente.nombre" :placa="infoResident.residente.vehiculo[0].placa" :HoraEntrada="infoResident.hora_entrada" :apartamento="infoResident.residente.hogar_habitando.apto_num" :datosExtra="infoResident.residente.vehiculo[0].datos_extra" :tower="infoResident.residente.hogar_habitando.tower"
              :parqueadero="infoResident.residente.vehiculo[0].parqueadero.nombre_Parqueadero ">
              </EntradaInformation>
              <template v-slot:cancelar>
                <button>
                  Cancelar
                </button>
              </template>
              <template v-slot:confirmar>
                <button class="btAcept">
                    OK
                </button>
              </template>
            </ModalContent>
          </Modal2>

          <!-- Modal para informacion de residentes 2-->
          <Modal2 v-if="tipoList=='Residente' && ComprobarHogar && ComprobarHogarHabitando === false  ">
            <template v-slot:toggler>
              <p class="opcion_menu">
                Mas informacion
              </p>
            </template>
            <ModalContent>
              <EntradaInformation :tipoVehicle="infoResident.residente.vehiculo[0].tipo" :nombre="infoResident.residente.nombre" :placa="infoResident.residente.vehiculo[0].placa" :HoraEntrada="infoResident.hora_entrada" :apartamento="infoResident.residente.hogar[0].apto_num" :datosExtra="infoResident.residente.vehiculo[0].datos_extra" :tower="infoResident.residente.hogar[0].tower" :parqueadero="infoResident.residente.vehiculo[0].parqueadero.nombre_Parqueadero" >
              </EntradaInformation>
              <template v-slot:cancelar>
                <button>
                  Cancelar
                </button>
              </template>
              <template v-slot:confirmar>
                <button class="btAcept">
                    OK
                </button>
              </template>
            </ModalContent>
          </Modal2>

          <!-- <MenuDropDownItem class="opcion_menu" id="Bott_cancel">
            Cancelar
          </MenuDropDownItem> -->
        </MenuDropDownContent>
      </MenuDropDown>
    </section>
  </div>
</template>

<script>
import DefaultVehicle from '@/assets/predefined_list.svg'
import Carro from '@/assets/Car.svg'
import Moto from '@/assets/Motorcycle.svg'

import MenuDropDownContent from '../dropDown/MenuDropDownContent.vue'
import MenuDropDown from '../dropDown/MenuDropdown.vue'
import MenuDropDownItem from '../dropDown/MenuDropDownItem.vue'

import Modal2 from '@/components/modal/Modal2.vue'
import ModalContent from '@/components/modal/ModalContent.vue'
// import ModalContent2 from '@/components/modal/ModalContent2.vue';
import EntradaInformation from '@/components/entrada-vehiculos/EntradaInformation.vue'
import Entradatarifa from '@/components/entrada-vehiculos/Entradatarifa.vue'
import { mapGetters, mapActions } from 'vuex'
// import ModalContent from '../modal/ModalContent.vue';

export default {
  name: 'EntradaSalida',
  components: {
    MenuDropDown,
    MenuDropDownContent,
    MenuDropDownItem,
    Modal2,
    ModalContent,
    // ModalContent2,
    EntradaInformation,
    Entradatarifa
  },
  data () {
    return {
      lista_opciones: [
        'Terminar sesión',
        'Cancelar'
      ],
      selected: '',
      imgCarro: Carro,
      imgMoto: Moto,
      imgDefault: DefaultVehicle,
      isConfirmed: false,
      dataForFinish: ''
    }
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    date_ingreso: {
      type: Date,
      default: new Date()
    },
    placa: {
      type: String
      // default: 'AAA000',
    },
    tipoList: {
      type: String
    },
    tipo: {
      type: String
    },
    id: {
      type: String
    }
  },
  computed: {
    ...mapGetters('entrada_salida', ['entradas']),
    ...mapGetters('ResiIngreso', ['residentIngresoList']),
    // estaConfirmado () {
    //   return this.dataForFinish
    // },
    // getIndex () {
    //   return this.index
    // },
    infoVisitant () {
      return this.entradas[this.index]
    },
    infoResident () {
      return this.residentIngresoList[this.index]
    },
    ComprobarHogarHabitando () {
      if (this.infoResident.residente.hogar_habitando) {
        return true
      } else {
        return false
      }
    },
    ComprobarHogar () {
      if (this.infoResident.residente.hogar) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    // ...mapActions('entrada_salida', ['deleteEntrada']),
    // confirmar (value) {
    //   this.dataForFinish = value
    //   console.log(value)
    // }

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
        margin-top: 10px ;
        border-radius: 5px;
        padding:10px ;
        position: relative;
        background:$third-color;

        display: flex;
        border: 2px solid $main-color;
        align-items: center;
        justify-content: space-between;
        align-items: center;
    }

    // .item div{
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     /* color: white; */
    //     /* display: block; */
    //     /* justify-content: center; */
    // }
    .container-double{

        display: flex;
        // flex-direction:row;
        justify-content: space-between;
        // flex-direction: column;
        align-items: center;
        width: 50%;

    }

    .vehicle{
        width: 70px;
        padding-left: 10px;
    }
    .menu{
        width: 30px;
    }

    .tiempo-data{
        color: $secondary-color;
        font-weight: bold;
        display:block;
        text-shadow: -1.5px -1.5px 1px $main-color;
        flex-direction: column;
        // margin-right: 20px;
        margin-left: 20px;
    }

    .trescuatro-em{
        font-size: 0.75em;
    }
    .doble-em{
        font-size: 2em;
    }
    .tiempo-placa *{
        display: none;
    }

    .placa-data{
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      margin-right: 20px;
      font-weight: bold;
    }
    .placa-numero{

      font-size: 1.8em;
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
        #Bott_cancel{

        border-bottom:none;
      }

    .icon-menu{
      width: 30px;
    }

@media (max-width: 550px){
  .item div{

      flex-direction:column;
  }
  .tiempo-placa *{
      display: block;
  }
  .trescuatro-em{
      font-size: 0.5em;
  }
  .doble-em{
      font-size: 1.5em;
  }
  .data *{
      display: none;
  }
  .icon-menu{
  width: 20px;
  }
  .opcion_menu{
    padding: 2.5px;
    font-size: 0.7em;
  }
  .vehicle{
  width: 50px;
      padding-left: 0px;
      padding-right: 8px;
  }

}
</style>
