<template>
  <div class="entradaMain">
    <img v-if="info.tipo === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
    <img v-else-if="info.tipo === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
    <img v-else v-bind:src="info.tipo === imgDefault" class="vehicle"  alt="vehiculos">
    <div class="info">
      <p class="title">
        Nombre
      </p>
      <p class="data">
        {{info.nombre}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Placa
      </p>
      <p class="data">
        {{info.placa.toUpperCase()}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Hora entrada
      </p>
      <p class="data">
        {{getTime.getHours()}}:{{getTime.getMinutes()}}
        <br>
        <!-- eslint-disable-next-line max-len -->
        {{getTime.getDate()+'/'+(Number(getTime.getMonth())+1)+'/'+getTime.getFullYear()}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Apartamento
      </p>
      <p class="data">
        {{info.tower}} {{info.apto_num}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Datos extra
      </p>
      <p class="data">
        {{info.datos_extra}}
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
    ...mapGetters('entrada_salida', ['entradas']),
    info () {
      // console.log(this.entradas);
      return this.entradas[this.index]
    },
    getTime () {
      return new Date(this.info.hora_entrada)
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
