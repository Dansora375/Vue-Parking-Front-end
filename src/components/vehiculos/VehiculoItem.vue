<template>
  <div class="container">
    <div class="imagen">
      <img v-if="vehiculo.tipo === 'Carro'" v-bind:src="imgCarro" class="vehicle"  alt="vehiculos">
      <!-- eslint-disable-next-line max-len -->
      <img v-else-if="vehiculo.tipo === 'Moto'" v-bind:src="imgMoto" class="vehicle"  alt="vehiculos">
      <img v-else v-bind:src="imgDefault" class="vehicle"  alt="vehiculos">
    </div>
    <p>
      {{vehiculo.placa}}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import DefaultVehicle from '@/assets/predefined_list.svg';
import Carro from '@/assets/Car.svg';
import Moto from '@/assets/Motorcycle.svg';

export default {
  data() {
    return {
      imgCarro: Carro,
      imgMoto: Moto,
      imgDefault: DefaultVehicle,
    };
  },
  props: {
    indexVehiculo: {
      type: Number,
    },
  },
  computed: {
    ...mapGetters('vehiculos_module', ['getVehiculoByIndex', 'getVehiculos']),
    vehiculo() {
      return this.getVehiculos[this.indexVehiculo];
    },
  },
};
</script>

<style lang="scss" scoped>
.container{
  max-width: 15%;
  min-width: 50px;
  height: auto;
  padding: 5px;
  margin: 10px;
}
.imagen img{
  width: 80%;
  height: auto;
}
</style>
