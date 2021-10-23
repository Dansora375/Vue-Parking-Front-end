<template>
  <div id="dialog-newParking" >
    <h1>
      Ingreso parqueadero {{optionChoose}}
    </h1>
    <select v-model="optionChoose" @click="resetear(optionChoose)">
      <option v-for="(optionEntrada, key) in optionsEntrada" :key="key">
        {{optionEntrada}}
      </option>
    </select>
    <div v-if="optionGet">
      <div class="Rows">
        <label for="tower" >Torre : </label>
        <select v-model="tower">
          <option v-for="(torre, index) of getTowers" :key="index">
            {{torre.tower}}
          </option>
        </select>
      </div>

      <div class="Rows">
        <label for="apto_num" >Apto : </label>
        <select v-model="apto_num">
          <option v-for="(hogar, index) in getHogaresByTower" :key="index">
            {{hogar.apto_num}}
          </option>
        </select>
      </div>

      <div class="Rows">
        <label for="nombre" >Nombre : </label>
        <input type="text" placeholder="Nombre del visitante" v-model="nombre" id="nombre">
      </div>
      <div class="Rows">
        <label for="cedula" >Cedula : </label>
        <input type="text" placeholder="Cedula del visitante" v-model="cedula" id="cedula">
      </div>

      <div class="Rows">
        <label for="placa" >Placa : </label>
        <input type="text" placeholder="Placa del vehiculo" v-model="placa"
        id="placa">
      </div>
      <div class="Rows">
        <label>Tipo : </label>
        <select v-model="selected">
          <option v-for="option in vehiculos" :key="option">
          {{option}}
          </option>
        </select>
      </div>
      <div class="Rows">
        <label for="tower" >Parqueadero : </label>
        <select v-model="parqueadero">
          <option v-for="(parking, index) of getListV" :key="index" v-bind:value="parking">
            {{parking.nombre_Parqueadero}}
          </option>
        </select>
      </div>
      <div class="textArea">
        <h3>Datos extra</h3>
        <textarea name="" id="" cols="500" rows="5" v-model="extra"></textarea>
      </div>
    </div>

    <div v-else>
      <div class="Rows">
        <label for="res">lista de residentes: </label>
        <select id="res" v-model="residente" @click="$emit('type')">
          <option v-for="(residentParking, index) of residentListParking" :key="index" v-bind:value="residentParking">
            {{residentParking.nombre}}
          </option>
        </select>
      </div>

      <div class="Rows" v-show="residente">
        <label for="">
          Parqueaderos:
        </label>
        <select v-model="parqueaderoResidente">
          <option v-for="(parqueadero, index) of getParqueaderos" :key="index" v-bind:value="parqueadero">
            {{parqueadero.parqueadero.nombre_Parqueadero}}
          </option>
        </select>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const opcionesEntrada = {
  VISITANTE: 'Visitante',
  RESIDENTE: 'Residente'
}

export default {
  name: 'ModalNew',
  inject: ['toggle', 'dataEntrada', 'updateEntrada', 'agregarEntrada'],
  data () {
    return {
      optionsEntrada: opcionesEntrada,
      optionChoose: opcionesEntrada.VISITANTE,
      torre: '',
      residente: '',
      parqueaderoResidente: ''
    }
  },
  props: {
    isVisitant: {
      type: Boolean,
      default: true
    }
  },
  created () {
    // recargando los datos de torres y de apartamentos
    this.$store.dispatch('hogares_module/cargarHomes')
    this.$store.dispatch('hogares_module/cargarTorres')
    // this.$store.dispatch('parqueadero_module/cargarPV');
    this.$store.dispatch('inf_resident/cargarListaResidentesParking')
    // this.$store
  },
  computed: {
    ...mapGetters('entrada_salida', ['vehiculos']),
    ...mapGetters('hogares_module', ['getHogares', 'getTowers']),
    ...mapGetters('parqueadero_module', ['getListV']),
    ...mapGetters('inf_resident', ['residentListParking']),
    nombre: {
      get () {
        return this.dataEntrada.nombre
      },
      set (value) {
        this.updateEntrada({ key: 'nombre', val: value })
      }
    },
    parqueadero: {
      set (value) {
        // console.log(value);
        this.updateEntrada({ key: 'parqueadero', val: value._id })
      }
    },
    cedula: {
      get () {
        return this.dataEntrada.cedula
      },
      set (value) {
        this.updateEntrada({ key: 'cedula', val: value })
      }
    },
    apto_num: {
      get () {
        return this.dataEntrada.apto_num
      },
      set (value) {
        this.updateEntrada({ key: 'apto_num', val: value })
      }
    },
    tower: {
      get () {
        return this.torre
      },
      set (value) {
        this.torre = value
        this.updateEntrada({ key: 'tower', val: value })
      }
    },
    placa: {
      get () {
        return this.dataEntrada.placa
      },
      set (value) {
        this.updateEntrada({ key: 'placa', val: value })
      }
    },
    selected: {
      get () {
        return this.dataEntrada.tipo
      },
      set (value) {
        this.updateEntrada({ key: 'tipo', val: value })
      }
    },
    extra: {
      get () {
        return this.dataEntrada.datos_extra
      },
      set (value) {
        this.updateEntrada({ key: 'datos_extra', val: value })
      }
    },
    optionGet: {
      get () {
        // console.log(this.optionEntrada);
        return this.optionChoose === this.optionsEntrada.VISITANTE
      }
    },
    getHogaresByTower () {
      // const torre = this.dataEntrada.tower;
      // console.log(torre);
      if (this.torre !== '' && this.torre !== null && this.torre !== undefined) {
        return this.getHogares.filter(
          (dato) => dato.tower === this.torre
        )
      }
      return this.getHogares
    },
    getParqueaderos () {
      try {
        console.log(this.residente)
        const list = this.residente.vehiculo.filter(
          (dato) => dato.hasOwnProperty('parqueadero')
        )
        // list.forEach(element => {
        //   console.log(element);
        // });
        return list
      } catch (error) {
        console.log(error)
        return []
      }
    }
  },
  methods: {
    // ...mapMutations('entrada_salida', []),
    ...mapActions('entrada_salida', ['changeModalNewEntrada', 'addNewEntrada']),
    ...mapActions('inf_resident', ['cargarListaResidentesParking']),
    // agregarEntrada(value) {
    //   this.addNewEntrada(value);
    //   this.resetDataNewEntrada();
    //   this.toggleModal(false);
    // },
    changeTower (event) {
      console.log(event.target.value)
    },
    changeParking (data) {
      console.log(data)
    },
    resetear (optionchoose) {
      this.torre = ''
      this.residente = ''
      this.parqueaderoResidente = ''
      this.$emit('reset')
      this.$emit('type', optionchoose)
      // console.log("hola mundo")
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';
#dialog-newParking{
  // padding: ;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.cancelar{
  background-color: $third-color;
  border: none;
}
.confirmar{
  border: none;
}
::placeholder{

  color:$secondary-color;
}
.cancelar:hover {
  background-color: $secondary-color  ;
  // color:$third-color;
}
.Rows{
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.cancelar:active {
  color: $secondary-color;
  background-color: $main-color;
}

.confirmar:hover {
  background-color: $secondary-color;
  color: $main-color;
}

.confirmar:active {
  color: $secondary-color;
  background-color: $main-color;
}

input{

  padding-left: 5px;
  // position:absolute;
  // left: 25px;

}
textarea{
  width: 95%;
  resize: vertical;
  align-items: center;
  justify-content:center;
  color:$main-color ;
  font-weight: bold;

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
.S_Vehicle{
  width:100%;
}
label{

  font-weight: 900;

}

select{

  font-size: 0.8rem;
  height:25px;
  width:160px;
  margin: 10px;
  // margin-bottom: 10px;

}
// .modal-overlay {
//  position: absolute;
//  top: 0;
//  left: 0;
//  right: 0;
//  bottom: 0;
//  z-index: 98;
//  background-color: rgba(0, 0, 0, 0.3);
// }

// .modal {
//  position: fixed;
//  top: 50%;
//  left: 50%;
//  transform: translate(-50%, -50%);
//  z-index: 99;

//  width: 100%;
//  max-width: 400px;
//  background-color: #FFF;
//  border-radius: 16px;

//  padding: 25px;

//  h1 {
//   color: #222;
//   font-size: 32px;
//   font-weight: 900;
//   margin-bottom: 15px;
//  }
//  p {
//   color: #666;
//   font-size: 18px;
//   font-weight: 400;
//   margin-bottom: 15px;
//  }
// }

// .fade-enter-active,
// .fade-leave-active {
//  transition: opacity .5s;
// }

// .fade-enter,
// .fade-leave-to {
//  opacity: 0;
// }

// .slide-enter-active,
// .slide-leave-active {
//  transition: transform .5s;
// }

// .slide-enter,
// .slide-leave-to {
//  transform: translateY(-50%) translateX(100vw);
// }
</style>
