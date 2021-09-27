<template>
  <div id="dialog-newParking">
    <h1>
      Ingreso de vehciulo visitante
    </h1>
    <div class="container">
      <div class="datos">

       
         <div class="Rows">
          <label for="Placa" >Placa : </label>
          <input type="text" placeholder="Placa" id="Placa">
        </div>

        <div class="Rows">
          <label for="apto" >Apartamento : </label>
          <input type="text" placeholder="Número de apartamento" id="apto">
        </div>


         <div class="Rows">
          <label for="Torre" >Torre : </label>
          <input type="text" placeholder="Letra de la torre" id="Torre">
        </div>
      
        

        <div class="Rows">
          <select name="">
          <option selected disabled id="S_disabled">Tipo de vehiculo</option>
          <option value="gerente">Carro</option>
          <!-- Desactivar en un futuro -->
          <option value="supervisor">Moto</option>
          <option value="celador">Ambos</option>
        </select>
        </div>
        
        </div>
    </div> 

       

    
    <!-- <select name="select-vehicle" id="vehicle-type" v-for="opcion of opcionesPark">
      {{opcion}}
    </select> -->
    <div class="textArea">
      <h3>Datos del vehiculo</h3>
      <textarea name="" id=" " cols="500" rows="5"></textarea>
      <div class="buttons">
        <button class="cancelar" @click="changeModal(false)">Cancelar</button>
        <button class="confirmar">Confirmar</button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name:"Ingreso_vclo_visitante"
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
button{

  padding: 2.5% 5% 2.5% 5%;
  
}
.buttons {
    
    padding-top: 25px;
    margin: 0px;
    display:flex;
    justify-content: space-between  ;

}


label{

  font-weight: 900;    

}

select{

  font-size: 0.8rem;
  height:25px;
  width:160px;  
  margin: 0px;
  
}


</style>