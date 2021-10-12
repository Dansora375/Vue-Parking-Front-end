<template>
  <div id="dialog-newParking" >
    <h1>
      Ingreso parqueadero {{optionChoose}}
    </h1>
    <select v-model="optionChoose">
      <option v-for="(optionEntrada, key) in optionsEntrada" :key="key">
        {{optionEntrada}}
      </option>
    </select>
    <div v-if="optionGet">
      <div class="Rows">
        <label for="nombre" >Nombre : </label>
        <input type="text" placeholder="Nombre del visitante" v-model="nombre" id="nombre">
      </div>
      <div class="Rows">
        <label for="cedula" >Cedula : </label>
        <input type="text" placeholder="Cedula del visitante" v-model="cedula" id="cedula">
      </div>
      <div class="Rows">
        <label for="apto_num" >Apto : </label>
        <input type="text" placeholder="Número de apartamento" v-model="apto_num" id="apto_num">
      </div>
      <div class="Rows">
        <label for="tower" >Torre : </label>
        <input type="text" placeholder="Letra de la torre" v-model="tower" id="tower">
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

const opcionesEntrada = {
  VISITANTE: 'Visitante',
  RESIDENTE: 'Residente',
};

export default {
  name: 'ModalNew',
  inject: ['toggle', 'dataEntrada', 'updateEntrada'],
  data() {
    return {
      optionsEntrada: opcionesEntrada,
      optionChoose: opcionesEntrada.VISITANTE,
    };
  },
  computed: {
    ...mapGetters('entrada_salida', ['vehiculos']),
    nombre: {
      get() {
        return this.dataEntrada.nombre;
      },
      set(value) {
        this.updateEntrada({ key: 'nombre', val: value });
      },
    },
    cedula: {
      get() {
        return this.dataEntrada.cedula;
      },
      set(value) {
        this.updateEntrada({ key: 'cedula', val: value });
      },
    },
    apto_num: {
      get() {
        return this.dataEntrada.apto_num;
      },
      set(value) {
        this.updateEntrada({ key: 'apto_num', val: value });
      },
    },
    tower: {
      get() {
        return this.dataEntrada.tower;
      },
      set(value) {
        this.updateEntrada({ key: 'tower', val: value });
      },
    },
    placa: {
      get() {
        return this.dataEntrada.placa;
      },
      set(value) {
        this.updateEntrada({ key: 'placa', val: value });
      },
    },
    selected: {
      get() {
        return this.dataEntrada.tipo;
      },
      set(value) {
        this.updateEntrada({ key: 'tipo', val: value });
      },
    },
    extra: {
      get() {
        return this.dataEntrada.datos_extra;
      },
      set(value) {
        this.updateEntrada({ key: 'datos_extra', val: value });
      },
    },
    optionGet: {
      get() {
        // console.log(this.optionEntrada);
        return this.optionChoose === this.optionsEntrada.VISITANTE;
      },
    },
  },
  methods: {
    ...mapMutations('entrada_salida', []),
    ...mapActions('entrada_salida', ['changeModalNewEntrada', 'addNewEntrada']),
    agregarEntrada(value) {
      this.addNewEntrada(value);
      this.resetDataNewEntrada();
      this.toggleModal(false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';
#dialog-newParking{
  padding: 30px;
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
  padding: 10px;
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

// .Rows{
//   display:flex;

//   flex-wrap: wrap;
//   padding-top: 5px;

// }

input{

  padding-left: 5px;
  // position:absolute;
  // left: 25px;

}
textarea{
  width: 100%;
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
label{

  font-weight: 900;

}

select{

  font-size: 0.8rem;
  height:25px;
  width:160px;
  margin: 0px;

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
