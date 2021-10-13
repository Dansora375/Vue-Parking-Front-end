<template>
  <div id="dialog-newParking">

    <div class="table">
      <h1>
      Llenar Parqueadero
    </h1>

    <div class="container">
      <img src='@/assets/CrearParqueadero.svg' alt="" class="im">
    </div>
    <div >

      <div class="datos">

         <div class="Rows">
          <label for="Parqueadero" >Nuevo parqueadero : </label>
          <input type="text" placeholder="Nombre del parqueadero" id="Parqueadero" v-model="Parqueadero">
        </div>
        <!-- Podria implementarse el elegir si es parqueadero de moto o carro -->
        <!-- <div class="Rows">
          <select name="">
          <option selected disabled id="S_disabled">Tipo de vehiculo</option>
          <option value="gerente">Carro</option>

          <option value="supervisor">Moto</option>
          <option value="celador">Ambos</option>
        </select>
        </div> -->

      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ImgParking from '@/assets/CrearParqueadero.svg'

export default {
  name: 'LlenarParking',
  data () {
    return {

      parqueaderoImg: ImgParking
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/views/scss/_theme.scss';

::placeholder{

  color:$secondary-color;
}
// h1{
//   padding-top:20px ;
//   position:absolute;
//   margin:auto
// }
.table{
  display: table-cell;
  vertical-align: middle;
}

.Rows{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5px;
  font-size: 1em;

}

input{
  padding-left: 5px;
  font-size: 1.2em;
  text-align:center;
  // position:absolute;
  // left: 25px;

}
#dialog-newParking{
  display: table;
  // height: 450px;
  align-items: center;
  flex-direction: column;
  vertical-align: middle;
}

label{

  font-weight: 900;
  font-size: 1.2em;

}
.im{
  width: 38%;
  padding-top: 20px;
  padding-bottom: 40px;
}
.title{
  position: relative;
}

</style>
