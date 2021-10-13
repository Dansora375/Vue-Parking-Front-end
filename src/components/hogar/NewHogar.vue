<template>
  <div class="container">
    <div class="Rows">
      <h1>
        Creacion de nuevo hogar
      </h1>
    </div>
    <div class="Rows">
      <label for="nombre" >Numero apartamento : </label>
      <input type="number" placeholder="# apto" v-model="numApartment" id="numero">
    </div>
    <div class="Rows">
      <label for="nombre" >Torre : </label>
      <select v-model="torre" >
        <option v-for="(tower, index) of getTowers" :key="index">
          {{tower.tower}}
        </option>
      </select>
    </div>
    <div class="rows">
      <input type="checkbox" id="useHomeOwner" v-model="homeOwner">
      <label for="useHomeOwner" class="homeLabel">
        Quiere agregar el representante de la casa?
      </label>
      <select v-if="homeOwner">
      </select>
    </div>
    <div class="Rows">
      <modal-password></modal-password>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ModalPassword from '@/components/modal/ModalPassword.vue';

export default {
  inject: ['dataHogar', 'updateEntrada', 'contraseña', 'updateContraseña'],
  components: {
    ModalPassword,
  },
  provide() {
    return {
      contraseña: () => this.contraseña,
      updateContraseña: this.updateContraseña,
    };
  },
  data() {
    return {
      homeOwner: false,
    };
  },
  computed: {
    ...mapGetters('hogares_module', ['getHogares', 'getTowers']),
    numApartment: {
      get() {
        return this.dataHogar.aptoNum;
      },
      set(value) {
        this.updateEntrada({ key: 'aptoNum', val: value });
      },
    },
    torre: {
      get() {
        return this.dataHogar.tower;
      },
      set(value) {
        this.updateEntrada({ key: 'tower', val: value});
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.Rows{
  margin-bottom: 30px;
}

.Rows select{
  margin: 0;
}
.homeLabel{
  font-size: 12px;
}
</style>
