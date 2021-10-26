<template>
  <div class="entradaMain">
    <img v-if="tipoVehicle === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
    <img v-else-if="tipoVehicle === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
    <img v-else v-bind:src="imgDefault" class="vehicle"  alt="vehiculos">
    <div class="info">
      <p class="title">
        Nombre
      </p>
      <p class="data" >
        {{nombre}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        C.C
      </p>
      <p class="data" >
        {{cedula}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Telefono
      </p>
      <p class="data" >
        {{telefono}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Placa
      </p>
      <p class="data" >
        {{placa}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Marca
      </p>
      <p class="data" >
        {{marca}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Color
      </p>
      <p class="data" >
        {{color}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Hora entrada
      </p>
      <p class="data" v-if="getTime==='No establecida'">
        {{getTime}}
      </p>
      <p class="data" v-else>
        {{getTime.getHours()}}:{{getTime.getMinutes()}}
        <br>
        <!-- eslint-disable-next-line max-len -->
        {{getTime.getDate()+'/'+(Number(getTime.getMonth())+1)+'/'+getTime.getFullYear()}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Hora Salida
      </p>
      <p class="data" v-if="getTimeSaldia==='No establecida'">
        {{getTimeSaldia}}
      </p>
      <p class="data" v-else>
        {{getTimeSaldia.getHours()}}:{{getTimeSaldia.getMinutes()}}
        <br>
        <!-- eslint-disable-next-line max-len -->
        {{getTimeSaldia.getDate()+'/'+(Number(getTimeSaldia.getMonth())+1)+'/'+getTimeSaldia.getFullYear()}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Apartamento
      </p>
      <p class="data" >
        {{tower}} {{apartamento}}
      </p>

    </div>
    <div class="info">
      <p class="title">
        Parqueadero
      </p>
      <p class="data" >
        {{parqueadero}}
      </p>

    </div>
    <div class="info">
      <p class="title">
        Datos extra
      </p>
      <p class="data" >
        {{datosExtra}}
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

    tipoVehicle: {
      type: String
    },
    nombre: {
      type: String
    },
    cedula: {
      type: String
    },
    telefono: {
      type: String
    },
    marca: {
      type: String
    },
    color: {
      type: String
    },
    placa: {
      type: String
    },
    HoraEntrada: {
      type: String
    },
    HoraSalida: {
      type: String
    },
    apartamento: {
      type: String
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
      if (this.HoraEntrada === 'No establecida') {
        return 'No establecida'
      } else {
        return new Date(this.HoraEntrada)
      }
    },
    getTimeSaldia () {
      if (this.HoraSalida === 'No establecida') {
        return 'No establecida'
      } else {
        return new Date(this.HoraSalida)
      }
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
