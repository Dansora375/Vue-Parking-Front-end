<template>
  <div>
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
          
          <Modal2>
            <template v-slot:toggler>
              <p class="opcion_menu">
            Terminar parqueadero
              </p>
            </template>
            <ModalContent2>
              <Entradatarifa v-bind:index="this.index">
              </Entradatarifa>
              <div>
                <h1>
                  Confirmar
                </h1>
              </div>
              <template v-slot:cancelar>
                <button>
                  Cancelar
                </button>
              </template>
            </ModalContent2>
          </Modal2>

          <Modal2>
            <template v-slot:toggler>
              <p class="opcion_menu">
                Mas informacion
              </p>
            </template>
            <ModalContent>
              <EntradaInformation v-bind:index="this.index">
              </EntradaInformation>
              <div>
                <h1>
                  hola como estan
                </h1>
              </div>
              <template v-slot:cancelar>
                <button>
                  Cancelar
                </button>
              </template>
            </ModalContent>
          </Modal2>

          <!-- <MenuDropDownItem class="opcion_menu" id="Bott_cancel">
            Cancelar
          </MenuDropDownItem> -->
        </MenuDropDownContent>
      </MenuDropDown>
      <!-- <Modal ref="modal">
        <EntradaInformation v-bind:index="this.index">
        </EntradaInformation>
      </Modal> -->
      <!-- <Modal>
        <p>
          akjdhflaksdjhflaksdjfh
        </p>
        <template v-slot:confirmar>
        <button class="confirmar" @click="">
          Confirmar
        </button>
      </template>
      </Modal> -->
      <!-- <select id="opciones_lista" name="" v-model="selected"> -->
      <!-- </select> -->
      <!-- <MenuDropDown>
        <template v-slot:toggler>
          <button>
            Hola mundo
          </button>
        </template>
        <MenuDropDownContent>
          <p>
            hola mundo
          </p>
          <p>
            adios mundo
          </p>
        </MenuDropDownContent>
      </MenuDropDown> -->
    </section>
  </div>
</template>

<script>
import DefaultVehicle from '@/assets/predefined_list.svg';
import Carro from '@/assets/Car.svg';
import Moto from '@/assets/Motorcycle.svg';

import MenuDropDownContent from '../dropDown/MenuDropDownContent.vue';
import MenuDropDown from '../dropDown/MenuDropdown.vue';
import MenuDropDownItem from '../dropDown/MenuDropDownItem.vue';

import Modal2 from '@/components/modal/Modal2.vue';
import ModalContent from '@/components/modal/ModalContent.vue';
import ModalContent2 from '@/components/modal/ModalContent2.vue';
import EntradaInformation from '@/components/entrada-vehiculos/EntradaInformation.vue';
import Entradatarifa from '@/components/entrada-vehiculos/Entradatarifa.vue';
// import ModalContent from '../modal/ModalContent.vue';

export default {
  name: 'EntradaSalida',
  components: {
    MenuDropDown,
    MenuDropDownContent,
    MenuDropDownItem,
    Modal2,
    ModalContent,
    ModalContent2,
    EntradaInformation,
    Entradatarifa,
  },
  data() {
    return {
      lista_opciones: [
        'Terminar sesión',
        'Cancelar',
      ],
      selected: '',
      imgCarro: Carro,
      imgMoto: Moto,
      imgDefault: DefaultVehicle,
    };
  },
  props: {
    index: {
      type: Number,
    },
    date_ingreso: {
      type: Date,
      default: new Date(),
    },
    placa: {
      type: String,
      // default: 'AAA000',
    },
    tipo: {
      type: String,
      default: 'Default',
    },
    id: {
      type: String,
    },
  },
};
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
