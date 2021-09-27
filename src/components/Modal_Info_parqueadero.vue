<template>
  <div id="dialog-newParking">
    <h1>
      Information del parqueadero
    </h1>
    <div class="container">
      <div class="datos">
        <div class="Rows">
          <label for="residente" >Residente : </label>
          <input type="text" placeholder="Nombre del residente" id="residente">
        </div>
        
        <div class="Rows">
          <label for="cedula" >C.C : </label>
          <input type="text" placeholder="Cedula" id="cedula">
          
        </div>
        <div class="Rows">
          <label for="apto" >Apartamento : </label>
          <input type="text" placeholder="Número de apartamento" id="apto">
        </div>
      
      
        <div class="Rows">
          <label for="Tel" >Teléfono : </label>
          <input type="text" placeholder="Telefono" id="Tel">
        </div>
        
        <div class="Rows">
          <label for="marca" > Marca : </label>
          <input type="text" placeholder="Marca del vehiculo" id="marca">
          
        </div>
        <div class="Rows">
          <label for="apto" >Apartamento : </label>
          <input type="text" placeholder="Número de apartamento" id="apto">
        </div>
      </div>
    </div> 
    
    <!-- <select name="select-vehicle" id="vehicle-type" v-for="opcion of opcionesPark">
      {{opcion}}
    </select> -->
    <div class="textArea">
      <p>
          Datos extra
      </p>
      <textarea name="" id="" cols="500" rows="5"></textarea>
      <div class="buttons">
        <button class="cancelar" @click="changeModal(false)">Cancelar</button>
        <button class="confirmar">Confirmar</button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name:"info_parqueadero"
}
</script>




<style lang="scss" scoped>
  @import '@/views/scss/_theme.scss';


::placeholder{

  color:$secondary-color;
}


.Rows{
  display:flex;
  flex-wrap: wrap;
  padding-top: 5px;
  // padding-right: 100%; 
  // position: relative;
  // margin-right: 100%;
  // width: 100%;  
  // background:red;
  // justify-content:end;  

}

input{

  padding-left: 5px;
  // position:absolute;
  // left: 25px;
  
}
#dialog-newParking{
  width: 25%;
  height:70%;
  padding: 30px;
  display: flex;
  
  align-items: flex-start;
  flex-direction: column;
  background-color: $background-color;
}

textarea{
  width: 100%;
  resize: vertical;
  align-items: center;
  justify-content:center;
}

// .datos{

//   // display: inline;
// }


</style>