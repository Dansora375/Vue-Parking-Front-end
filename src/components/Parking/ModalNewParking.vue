<template>
  <div id="dialog-newParking">
    <div class="table">
    <h1>
      Agregar nuevo parqueadero
    </h1>
    <div class="container">
      <img src="@/assets/ImgNewParking.svg" alt="" class="Im">
    </div>
    <div >

      <div class="datos">
         <div class="Rows">
          <label for="Parqueadero" >Nuevo parqueadero : </label>
          <input type="text" placeholder="Nombre del parqueadero" id="Parqueadero" v-model="Parqueadero">
        </div>
         <div class="Rows">
          <select v-model="selectedVehicle" class="S_Vehicle">
          <option v-for="option1 in tipoVehicle" :key="option1">
          {{option1}}
          </option>
        </select>
        </div>
        <div class="Rows">
          <select v-model="selectedPerson" class="S_Vehicle">
          <option v-for="option in tipoPersonIngr" :key="option">
          {{option}}
          </option>
        </select>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NewParking',
  inject: ['dataEntradaParking', 'updateEntradaParking'],
  data () {
    return {

      parqueaderoImg: ImgParking
    }
  },
  computed: {
    ...mapGetters('parqueadero_module', ['tipoVehicle', 'tipoPersonIngr']),
    Parqueadero: {
      get () {
        return this.dataEntradaParking.nombreParqueadero
      },
      set (value) {
        this.updateEntradaParking({ key: 'nombreParqueadero', val: value })
      }
    },
    selectedVehicle: {
      get () {
        return this.dataEntradaParking.tipoVehicle
      },
      set (value) {
        this.updateEntradaParking({ key: 'tipoVehicle', val: value })
      }
    },
    selectedPerson: {
      get () {
        return this.dataEntradaParking.tipoPersonIngr
      },
      set (value) {
        this.updateEntradaParking({ key: 'tipoPersonIngr', val: value })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/views/scss/_theme.scss';

::placeholder{

  color:$secondary-color;
}
h1{
  padding-top:20px ;
}
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
  font-size: 1.05em;
  text-align:center;
  // position:absolute;
  // left: 25px;

}
#dialog-newParking{
  display: table;
  height: 450px;
  align-items: center;
  flex-direction: column;
  vertical-align: middle;
}

label{

  font-weight: 900;
  font-size: 1.4em;

}
.container{
  max-width: 125px;
  padding-top: 5px;
  padding-bottom: 15px;
  margin: auto;
}
select{

  font-size: 1rem;
  height:30px;
  width:160px;
  margin: 10px;
  // margin-bottom: 10px;

}

</style>
