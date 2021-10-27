<template>
  <div id="dialog-newParking">
    <div class="tableTI" id="title">
      <h3>
      {{title}}
    </h3>
    </div>
    <div class="table">
      <img src="@/assets/Warning.svg" alt="">
      <h1>
        {{SubTitle}}
      </h1>
    <div class="container">
      <div class="info">
        <p class="title">
          Fecha y hora
        </p>
        <div class="fechaHora">
          <p class="data">
            {{dateEntrada.getDate()+'/'+(Number(dateEntrada.getMonth())+1)+'/'+dateEntrada.getFullYear()}}
          </p>
          <p class="data">
            {{dateEntrada.getHours()}}:{{dateEntrada.getMinutes()}}
          </p>
        </div>
      </div>
    </div>

    <div>

      </div>
    </div>
  </div>

</template>

<script>
import ImgParking from '@/assets/CrearParqueadero.svg'
import { mapGetters } from 'vuex'

export default {
  name: 'LlenarParking',
  inject: ['updateIngreso', 'updateSalida'],
  data () {
    return {

      parqueaderoImg: ImgParking,
      dateEntrada: new Date()

    }
  },
  props: {
    index: {
      type: Number
    },

    inf_estado: {
      type: String
    },
    id: {
      type: String
    },
    title: {
      type: String
    },
    SubTitle: {
      type: String
    }

  },
  mounted () {
    if (this.inf_estado === 'Vacio') {
      this.updateIngreso({ key: 'horaEntrada', val: this.dateEntrada })
      this.updateIngreso({ key: 'id', val: this.id })
    } if (this.inf_estado === 'Lleno') {
      this.updateSalida({ key: 'horaSalida', val: this.dateEntrada })
      this.updateSalida({ key: 'id', val: this.id })
    }
  },

  computed: {
    // ...mapGetters('inf_resident', ['resident_listNF']),
    // ...mapGetters('entrada_salida', ['entradas']),
    // info () {
    //   // console.log(this.entradas);
    //   return this.resident_listNF[this.index]
    // },

    // getTime () {
    //   return new Date(this.info.hora_entrada)
    // }

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
  display: block;
  // vertical-align: middle;
  position: relative;
}

.Rows{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5px;
  font-size: 1em;

}
.fechaHora{
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid $main-color ;
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
#title{
  position: relative;
  background:$main-color ;
  color: white;
}
.info{
  margin: 10px;
}
.title{
  font-size: 1.3em;
  font-weight: bold;
  color: $secondary-color;
}
.data{
  font-weight: bold;
  font-size: 1.3em;
  color: $third-color;
  text-shadow: -1.5px -1.5px 1px $main-color;

}

</style>
