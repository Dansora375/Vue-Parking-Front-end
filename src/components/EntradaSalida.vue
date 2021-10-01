<template>
  <div>
    <section class="item">
      <!-- <img v-bind:src="img_route" class="vehicle"  alt="vehiculos"> -->
      <img v-if="tipo === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
      <img v-else-if="tipo === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
      <img v-else v-bind:src="imgDefault" class="vehicle"  alt="vehiculos">
      <!-- <img v-bind:src="img_route" class="vehicle"  alt="vehiculos">
      <img v-bind:src="img_route" class="vehicle"  alt="vehiculos"> -->
      <div class="tiempo data">
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
      <div class="placa data">
        <p class="placa-titulo trescuatro-em">
          Placa
        </p>
        <p class="placa-numero doble-em">
          {{placa}}
        </p>
      </div>
      <img class="icon-menu" src="@/assets/menu.svg" alt="">
      <!-- <div class='menu'>
        <div class="drop-menu">
          <p  class="drop-item">Mas info</p>
          <p  class="drop-item">Terminar parqueo</p>
          <p  class="drop-item">Cancelar</p>
        </div>
      </div> -->
      <!-- <select id="opciones_lista" name="" v-model="selected"> -->
      <!-- </select> -->
    </section>
  </div>
</template>

<script>
import DefaultVehicle from '@/assets/predefined_list.svg';
import Carro from '@/assets/Car.svg';
import Moto from '@/assets/Motorcycle.svg';

export default {
  name: 'EntradaSalida',
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
    date_ingreso: {
      type: Date,
      default: new Date(),
    },
    placa: {
      type: String,
      default: 'AAA000',
    },
    tipo: {
      type: String,
      default: 'Default',
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
        border-radius: 5px;
        padding:10px ;

        display: flex;
        border: 2px solid $main-color;
        align-items: center;
        justify-content: space-between; align-items: center;
    }

    .item div{
        display: flex;
        flex-direction: column;
        align-items: center;
        /* color: white; */
        /* display: block; */
        /* justify-content: center; */
    }

    .vehicle{
        width: 70px;
        height: 70px;
    }
    .menu{
        width: 30px;
    }

    .tiempo{
        color: $third-color;
        font-weight: bold;
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
    //Estilos del menu desplegable
    .drop-menu{
      // color: $main-color;
      display: none;
      position: absolute;
      // left: 0;
    }

    @media (max-width: 530px){
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
    }
</style>
