
<template>
  <div class="residente">
      <h1>
      Ingreso de nuevos residentes 
    </h1>
       <div class="Rows">
        <label for="nombre" >Nombre : </label>
        <input type="text" placeholder="Nombre del Residente" v-model="nombre" id="nombrer">
      </div>
      <div class="Rows">
        <label for="cedula" >Cedula : </label>
        <input type="text" placeholder="Cedula del residente" v-model="cedula" id="cedular">
      </div>
      <div class="Rows">
        <label for="cedula" >Teléfono : </label>
        <input type="text" placeholder="Telefono del residente" v-model="telefono" id="telefonor">
      </div>
      <div class="Rows">
        <label for="apto_num" >Apto : </label>
        <input type="text" placeholder="Número de apartamento" v-model="apto_num" id="apto_numr">
      </div>
      <div class="Rows">
        <label for="tower" >Torre : </label>
        <input type="text" placeholder="Letra de la torre" v-model="tower" id="towerr">
      </div>
      <div class="Rows">
        <label for="placa" >Placa : </label>
        <input type="text" placeholder="Placa del vehiculo" v-model="placa"
        id="placar">
      </div>
      </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';


export default {
  name: 'NewResidente',
  inject: ['toggle', 'dataResidente', 'updateEntrada'],
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters('entrada_r', ['residentes']),
    nombre: {
      get() {
        return this.dataResidente.nombre;
      },
      set(value) {
        this.updateEntrada({ key: 'nombre', val: value });
      },
    },
    cedula: {
      get() {
        return this.dataResidente.cedula;
      },
      set(value) {
        this.updateEntrada({ key: 'cedula', val: value });
      },
    },

    telefono: {
      get() {
        return this.dataResidente.telefono;
      },
      set(value) {
        this.updateEntrada({ key: 'telefono', val: value });
      },
    },
    apto_num: {
      get() {
        return this.dataResidente.apto_num;
      },
      set(value) {
        this.updateEntrada({ key: 'apto_num', val: value });
      },
    },
    tower: {
      get() {
        return this.dataResidente.tower;
      },
      set(value) {
        this.updateEntrada({ key: 'tower', val: value });
      },
    },
    placa: {
      get() {
        return this.dataResidente.placa;
      },
      set(value) {
        this.updateEntrada({ key: 'placa', val: value });
      },
    },
    
  },
  methods: {
    ...mapMutations('entrada_r', []),
    ...mapActions('entrada_r', ['changeModalNewEntrada', 'addNewEntrada']),
    agregarEntrada(value) {
      this.addNewEntrada(value);
      this.resetDataNewEntrada();
      this.toggleModal(false);
    },
  },
};
</script>

<style>

</style>