<template>
        <div class="tarifa">
            <div class="ventana">
            <h2>Tarifa Parqueo</h2>
            <div class="info">
                <div class="entradaMain">
                    <img v-if="info.tipo === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
                    <img v-else-if="info.tipo === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
                    <img v-else v-bind:src="info.tipo === imgDefault" class="vehicle"  alt="vehiculos">
                    <div class="">
                        <p class="title">
                        <b>Propietario</b>
                        </p>
                        <p class="data">
                        <b>{{info.nombre}}</b>
                        </p>
                    </div>
                    <div class="">
                        <p class="title">
                        <b>Parqueadero:</b>
                        </p>
                        <p class="data">
                        <b>{{info.tower}} {{info.apto_num}}</b>
                        </p>
                    </div>
                    <div class="">
                        <p class="title">
                        <b>Placa Vehiculo:</b>
                        </p>
                        <p class="data">
                        <b>{{info.placa.toUpperCase()}}</b>
                        </p>
                    </div>
                    <div class="">
                        <p class="title">
                        <b>Hora de ingreso:</b>
                        </p>
                        <p class="data">
                        <b>{{getTime.getHours()}}:{{getTime.getMinutes()}}</b>
                        <br>
                        <!-- eslint-disable-next-line max-len -->
                        <b>{{getTime.getDate()+'/'+(Number(getTime.getMonth())+1)+'/'+getTime.getFullYear()}}</b>
                        </p>
                    </div>
                    <div class="">
                        <p class="title">
                        <b>Hora de Salida:</b>
                        </p>
                        <p class="data">
                            <b>{{date_salida.getHours()}}:{{date_salida.getMinutes()}}</b>
                        <br>
                            <b>{{date_salida.getDate()+'/'+(Number(date_salida.getMonth())+1)+'/'+date_salida.getFullYear()}}</b>
                        </p>
                    </div>
                </div>
                </div>
                <h3>${{tarifa}}</h3>
            </div>
        </div>
        <!-- <template slot:confirmar>
            <button class="confirmar" @click="agregarEntrada()">
            Confirmar
            </button>
        </template> -->
</template>

<script>

import { mapGetters } from 'vuex';

import Carro from '@/assets/Car.svg';
import Moto from '@/assets/Motorcycle.svg';
import DefaultVehicle from '@/assets/predefined_list.svg';

export default {
  props: {
    index: {
      type: Number,
    },
    date_salida: {
      type: Date,
      default: new Date(),
    },
  },
  data() {
    return {
      imgCarro: Carro,
      imgMoto: Moto,
      imgDefault: DefaultVehicle,
      horaE: '',
      horaS: '',
      horaP: '',
      tarifa: '',
      horaPagar: '',
      horas_P: '',
    };
  },
  computed: {
    ...mapGetters('entrada_salida', ['entradas']),
    info() {
      // console.log(this.entradas);
      return this.entradas[this.index];
    },
    getTime() {
      return new Date(this.info.hora_entrada);
    },

    tarifa: function () {
        this.horaE = this.getTime.getTime();
        this.horaS = this.date_salida.getTime();
        this.horas_P = 0;
        this.horaP = 0;
        this.horaPagar = 0;
        this.tarifa = 0;
        this.horaP = (this.horaS - this.horaE);
        this.horas_P = parseInt(((this.horaP/1000)/60)/60);
        if(this.horas_P<8){
            this.tarifa = 0;
            return this.tarifa;
        }
        if(this.horas_P>8){
            this.horaPagar = (this.horas_P-8);
            this.tarifa = (this.horaPagar)*(3000);
            return this.tarifa.toLocaleString('es-CO');
        }
    },
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
        font-size: 1.2em;
        color: $secondary-color;
        text-shadow: -1.5px -1.5px 1px $main-color;
    }
    .info{
        background: $background-color;
        height: 420px;
        padding: 10px;
        width: 230px;
        border-radius: 10px;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 15px;
    }
    h2{
        background: $background-color;
        color: $main-color;
        padding: auto;
        margin: auto;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 1.5em;
        border-radius: 5px;
    }
    h3{
        background: $background-color;
        width: 35%;
        text-align: center;
        border-radius: 5px;
        color: $main-color;
        margin: auto;
    }

</style>
