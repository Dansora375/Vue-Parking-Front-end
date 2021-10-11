
<template>
  <div class="residente">
      <h1>
      Ingreso de nuevos residentes {{optionChoose}}
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
        id="placa">
      </div>
      <div class="Rows">
        <select v-model="selected">
          <option v-for="option in vehiculos" :key="option">
          {{option}}
          </option>
        </select>
      </div>
      <div class="textArea">
        <h3>Datos extra</h3>
        <textarea name="" id="" cols="500" rows="5" v-model="extra"></textarea>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>