<template>
  <div id="dialog-newParking">
    <h1 class="fillparking">
      Vaciar Parqueadero
    </h1>
    <div class="container">
      <div class="datos">
        <div class="Rows">
         <div class="warning">
          <img src= "@/assets/Warning.svg" class="Warning" alt="Warn">
          </div>
          <label class= "WarnText"> Esta seguro que desea vaciar el parqueadero?</label>
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

    <!-- <select name="select-vehicle" id="vehicle-type" v-for="opcion of opcionesPark">
      {{opcion}}
    </select> -->
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
    color: $background-color;
    width: 100%;
    margin:0 0;

}
.line{
  font-weight: bold
}
.Row1{
    margin-bottom:-15px
}
.WarnText{
    font-size:20px;
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
  width: 30%;
  height:20%;
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