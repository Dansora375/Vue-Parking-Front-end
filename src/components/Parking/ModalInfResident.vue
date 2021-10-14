<template>

  <div class="entradaMain">
    <h2>Info Residente</h2>
    <img v-if="info.residente.vehiculo[0].tipo === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
    <img v-else-if="info.residente.vehiculo[0].tipo === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
    <img v-else v-bind:src="info.residente.vehiculo[0].tipo  === imgDefault" class="vehicle"  alt="vehiculos">
    <div class="info">
      <p class="title">
        Nombre
      </p>
      <p class="data">
        {{info.residente.nombre}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        C.C.
      </p>
      <p class="data">
        {{info.residente.cedula}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Telefono
      </p>
      <p class="data">
        {{info.residente.telefono}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Placa
      </p>
      <p class="data">
        {{info.residente.vehiculo[0].placa}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Marca
      </p>
      <p class="data">
        {{info.residente.vehiculo[0].marca}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Color
      </p>
      <p class="data">
        {{info.residente.vehiculo[0].color}}
      </p>
    </div>
  <div class="info" v-show="TipoList=='Visitante'" >
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
        {{info.residente.hogar[0].apto_num}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Datos extra
      </p>
      <p class="data">
        {{info.residente.vehiculo[0].datos_extra}}
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
  name: 'MasInfResident',
  props: {
    index: {
      type: Number
    },
    tipoList: {
      type: String
    }
  },
  data () {
    return {
      imgCarro: Carro,
      imgMoto: Moto,
      imgDefault: DefaultVehicle,
      TipoList: this.tipoList
    }
  },
  computed: {
    ...mapGetters('inf_resident', ['resident_list']),
    ...mapGetters('entrada_salida', ['entradas']),
    info () {
      // console.log(this.entradas);
      return this.resident_list[this.index]
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
  font-size: 1.3em;
  font-weight: bold;
}
.data{
  font-size: 0.9em;
  color: $secondary-color;
}
</style>
