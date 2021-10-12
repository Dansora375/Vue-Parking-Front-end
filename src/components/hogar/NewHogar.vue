<template>
  <div class="container">
    <div class="Rows">
      <label for="nombre" >Numero apartamento : </label>
      <input type="number" placeholder="# apto" v-model="numApartment" id="numero">
    </div>
    <div class="Rows">
      <label for="nombre" >Torre : </label>
      <input type="text" placeholder="Torre" v-model="torre" id="numero">
    </div>
  </div>
</template>

<script>
export default {
  inject: ['dataHogar', 'updateEntrada'],
  computed: {
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
        this.updateEntrada({ key: 'tower', val: value });
      },
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
