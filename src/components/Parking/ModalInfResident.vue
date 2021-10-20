<template>

  <div class="entradaMain">
    <div v-if="tipoList==='Residente'">
      <h2 >Info Residente</h2>
      <img v-if="info.residente.vehiculo[0].tipo === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
      <img v-else-if="info.residente.vehiculo[0].tipo === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
      <img v-else v-bind:src="info.residente.vehiculo[0].tipo  === imgDefault" class="vehicle"  alt="vehiculos">
    </div>
    <div v-if="tipoList==='Visitante'">
      <h2 >Info Visitante</h2>
      <img v-if="infoVisitant.tipo === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
      <img v-else-if="infoVisitant.tipo === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
      <img v-else v-bind:src="imgDefault" class="vehicle"  alt="vehiculos">
    </div>
    <div class="info">
      <p class="title">
        Nombre
      </p>
      <p class="data" v-if="tipoList==='Residente'">
        {{info.residente.nombre}}
      </p>
      <p class="data" v-if="tipoList==='Visitante'">
        {{infoVisitant.nombre}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        C.C.
      </p>
      <p class="data"  v-if="tipoList==='Residente'">
        {{info.residente.cedula}}
      </p>
      <p class="data" v-if="tipoList==='Visitante'">
        {{infoVisitant.cedula}}
      </p>
    </div>
    <div class="info"  v-if="tipoList==='Residente'">
      <p class="title">
        Telefono
      </p>
      <p class="data" >
        {{info.residente.telefono}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Placa
      </p>
      <p class="data"  v-if="tipoList==='Residente'">
        {{info.residente.vehiculo[0].placa}}
      </p>
      <p class="data"  v-if="tipoList==='Visitante'">
        {{infoVisitant.placa}}
      </p>
    </div>
    <div class="info"  v-if="tipoList==='Residente'">
      <p class="title">
        Marca
      </p>
      <p class="data"  >
        {{info.residente.vehiculo[0].marca}}
      </p>
    </div>
    <div class="info"  v-if="tipoList==='Residente'">
      <p class="title">
        Color
      </p>
      <p class="data"  >
        {{info.residente.vehiculo[0].color}}
      </p>
    </div>
    <div class="info"  >
      <p class="title">
        Hora entrada
      </p>
      <p class="data" v-if="tipoList==='Visitante'">
        {{getTimeVisitant.getHours()}}:{{getTimeVisitant.getMinutes()}}
        <br>
        {{getTimeVisitant.getDate()+'/'+(Number(getTimeVisitant.getMonth())+1)+'/'+getTimeVisitant.getFullYear()}}
      </p>
      <p class="data" v-if="tipoList==='Residente'">
        {{getTimeResident.getHours()}}:{{getTimeResident.getMinutes()}}
        <br>
        {{getTimeResident.getDate()+'/'+(Number(getTimeResident.getMonth())+1)+'/'+getTimeResident.getFullYear()}}
      </p>
    </div>
    <div class="info"  v-if="tipoList==='Residente' && info.hora_salida">
      <p class="title">
        Hora salida
      </p>
      <p class="data" >
        {{getTimeSalidaResident.getHours()}}:{{getTimeSalidaResident.getMinutes()}}
        <br>
        {{getTimeSalidaResident.getDate()+'/'+(Number(getTimeSalidaResident.getMonth())+1)+'/'+getTimeSalidaResident.getFullYear()}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Apartamento
      </p>
      <p class="data" v-if=" ComprobarHogar && ComprobarHogarHabitando === false && tipoList=='Residente'">
         {{info.residente.hogar[0].tower}} {{info.residente.hogar[0].apto_num}}
      </p>
      <p class="data" v-if="ComprobarHogarHabitando && tipoList=='Residente'">
        {{info.residente.hogar_habitando.tower}} {{info.residente.hogar_habitando.apto_num}}
      </p>
      <p class="data" v-if="tipoList=='Visitante'">
        {{infoVisitant.tower}} {{infoVisitant.apto_num}}
      </p>
    </div>
    <div class="info"  >
      <p class="title">
        Parqueadero
      </p>
      <p class="data"  v-if="tipoList==='Residente'">
        {{info.residente.vehiculo[0].parqueadero.nombre_Parqueadero}}
      </p>
    </div>
    <div class="info">
      <p class="title">
        Datos extra
      </p>
      <p class="data"  v-if="tipoList==='Residente'">
        {{info.residente.vehiculo[0].datos_extra}}
      </p>
      <p class="data"  v-if="tipoList==='Visitante'">
        {{infoVisitant.datos_extra}}
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
      imgDefault: DefaultVehicle

    }
  },
  computed: {

    ...mapGetters('inf_resident', ['resident_listNF']),
    ...mapGetters('entrada_salida', ['entradas']),
    info () {
      // console.log(this.entradas);
      return this.resident_listNF[this.index]
    },
    infoVisitant () {
      return this.entradas[this.index]
    },

    getTimeVisitant () {
      return new Date(this.infoVisitant.hora_entrada)
    },
    getTimeResident () {
      return new Date(this.info.hora_entrada)
    },
    getTimeSalidaResident () {
      return new Date(this.info.hora_salida)
    },
    ComprobarHogarHabitando () {
      if (this.info.residente.hogar_habitando) {
        return true
      } else {
        return false
      }
    },
    ComprobarHogar () {
      if (this.info.residente.hogar) {
        return true
      } else {
        return false
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
  font-size: 1.3em;
  font-weight: bold;
}
.data{
  font-size: 0.9em;
  color: $secondary-color;
}
</style>
