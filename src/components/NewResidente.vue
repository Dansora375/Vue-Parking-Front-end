
<template>
  <div class="residente">
      <h1>
      Ingreso de nuevos residentes 
    </h1>
       <div class="Rows">
        <label for="nombre" >Nombre : </label>
        <input type="text" placeholder="Nombre del Residente" v-model="nombrer" id="nombrer">
      </div>
      <div class="Rows">
        <label for="cedula" >Cedula : </label>
        <input type="text" placeholder="Cedula del residente" v-model="cedular" id="cedular">
      </div>
      <div class="Rows">
        <label for="cedula" >Teléfono : </label>
        <input type="text" placeholder="Telefono del residente" v-model="telefonor" id="telefonor">
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
export default {
    name:"NewResidente"

}
</script>

<style>

</style>