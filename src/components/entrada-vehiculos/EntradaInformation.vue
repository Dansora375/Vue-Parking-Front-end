<template>
  <div class="entradaMain">
    <img v-if="tipoVehicle === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
    <img v-else-if="tipoVehicle === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
    <img v-else v-bind:src="imgDefault" class="vehicle"  alt="vehiculos">
    <div class="info">
      <p class="title">
        Nombre
      </p>
      <p class="data" v-if="this.nombre">
        {{nombre}}
      </p>
      <p class="data" v-else>
        No establecido
      </p>
    </div>
    <div class="info">
      <p class="title">
        Placa
      </p>
      <p class="data" v-if="this.placa">
        {{placa}}
      </p>
      <p class="data" v-else>
        No establecida
      </p>
    </div>
    <div class="info">
      <p class="title">
        Hora entrada
      </p>
      <p class="data" v-if="this.getTime">
        {{getTime.getHours()}}:{{getTime.getMinutes()}}
        <br>
        <!-- eslint-disable-next-line max-len -->
        {{getTime.getDate()+'/'+(Number(getTime.getMonth())+1)+'/'+getTime.getFullYear()}}
      </p>
      <p class="data" v-else>
        No establecida
      </p>
    </div>
    <div class="info">
      <p class="title">
        Apartamento
      </p>
      <p class="data" v-if="this.tower  && this.apartamento">
        {{tower}} {{apartamento}}
      </p>
      <p class="data" v-else>
        No establecida
      </p>
    </div>
    <div class="info">
      <p class="title">
        Parqueadero
      </p>
      <p class="data" v-if="this.parqueadero">
        {{parqueadero}}
      </p>
      <p class="data" v-else>
        No establecida
      </p>
    </div>
    <div class="info">
      <p class="title">
        Datos extra
      </p>
      <p class="data" v-if="this.datosExtra">
        {{datosExtra}}
      </p>
      <p class="data" v-else>
        No establecida
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Carro from '@/assets/Car.svg'
import Moto from '@/assets/Motorcycle.svg'
import DefaultVehicle from '@/assets/predefined_list.svg'
export default {
  props: {
    index: {
      type: Number
    },
    tipoVehicle: {
      type: String
    },
    nombre: {
      type: String
    },
    placa: {
      type: String
    },
    HoraEntrada: {
      type: String
    },
    apartamento: {
      type: Number
    },
    datosExtra: {
      type: String
    },
    tower: {
      type: String
    },
    parqueadero: {
      type: String
    }

  },
  data () {
    return {
      imgCarro: Carro,
      imgMoto: Moto,
      imgDefault: DefaultVehicle
    }
  },
  computed: {
    // ...mapGetters('entrada_salida', ['entradas']),
    // info () {
    //   // console.log(this.entradas);
    //   return this.entradas[this.index]
    // },
    getTime () {
      return new Date(this.HoraEntrada)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';
.entradaMain{
  // background: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  // flex-wrap: wrap;
}
p{
  // padding: 0px;
  margin: 0px;
  // background: black;
}
.info{
  margin: 10px;
}
.title{
  font-size: 1.5em;
  font-weight: bold;
}
.data{
  font-size: 0.9em;
  color: $secondary-color;
}
</style>
