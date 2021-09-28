<template>
  <div id="dialog-newParking">
    <h1 class="fillparking">
      Llenar Parqueadero
    </h1>
    <div class="container">
      <div class="datos">
        <div class="Rows">
         <div class="warning">
          <img src= "@/assets/Warning.svg" class="Warning" alt="Warn">
          </div>
          <div>
          <label class= "WarnText"> Esta seguro que desea llenar este parqueadero?</label>
          </div>
        </div>

        <div class="Row1">
          <label for="Fecha" >Fecha: </label>
          <input type="text" placeholder="Fecha" id="Fecha">
          <label for="Hora"> Hora: </label>
          <input type="Text" placeholder="Hora" id= "Hora">
        </div>
        <div class=line>________________________________________________________________</div>

      </div>

      </div>
    </div>

    <!-- <select name="select-vehicle" id="vehicle-type" v-for="opcion of opcionesPark">
      {{opcion}}
    </select> -->
    <div class="textArea">
      <textarea name="" placeholder="Estado del vehiculo" id="" cols="500" rows="5"></textarea>
      <div class="Buttons">
        <button class="cancelar" @click="changeModal(false)">Cancelar</button>
        <button class="confirmar">Confirmar</button>
        </div>
      </div>

</template>

<script>
export default {
  name: 'AddVehicle',
};
</script>

<style lang="scss" scoped>
  @import '@/views/scss/_theme.scss';

.EstadoVehiculo{
    width: 100%;
    display: center;
    justify-content: center;
    margin: 5px 40px -30px;
}

.fillparking{
    background-color: $main-color;
    color: white;
    width: 100%;
    margin:0 0;

}

.WarnText{
    font-size:20px;
}
.row1{
    justify-content:left;
}

.Rows{
  display:flex;
  flex-wrap: wrap;
  padding-top: 10px;
  align-items: center;

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
  width: 35%;
  height:30%;
  padding: 30px;
  display: flex;

  align-items: flex-start;
  flex-direction: column;
  background-color: $third-color;
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