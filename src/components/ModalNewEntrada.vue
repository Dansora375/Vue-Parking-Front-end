<template>
  <div id="dialog-newParking" >
    <h2>
      Ingreso parqueadero visitante
    </h2>
    <div class="Rows">
      <label for="nombre" >Nombre  </label>
      <input type="text" placeholder="Nombre del visitante" v-model="nombre" id="nombre">
    </div>
    <div class="Rows">
      <label for="cedula" >Cedula  </label>
      <input type="text" placeholder="Cedula del visitante" v-model="cedula" id="cedula">
    </div>
    <div class="Rows">
      <label for="apto_num" >Apto  </label>
      <input type="text" placeholder="Número de apartamento" v-model="apto_num" id="apto_num">
    </div>
    <div class="Rows">
      <label for="tower" >Torre  </label>
      <input type="text" placeholder="Letra de la torre" v-model="tower" id="tower">
    </div>
    <div class="Rows">
      <label for="placa" >Placa  </label>
      <input type="text" placeholder="Placa del vehiculo" v-model="placa"
      id="placa">
    </div>
    <div class="Rows" id="para_select">
      <select v-model="selected" class="opt_select">
        <option v-for="option in vehiculos" :key="option">
        {{option}}
        </option>
      </select>
    </div>
    <div class="textArea">
      <h3>Datos extra</h3>
      <textarea name="" id="" cols="500" rows="5" v-model="extra"></textarea>
      <div class="buttons">
        <button class="cancelar" @click="toggleModal(false)">Cancelar</button>
        <button class="confirmar" @click="agregarEntrada({
          nombre:nombre,
          cedula:cedula,
          apto_num:apto_num,
          tower:tower,
          placa: placa,
          tipo: selected,
          fecha: new Date(),
          extra: extra  
        })">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ModalNew',
  inject: ['isActiveModal', 'toggleModal'],
  data() {
    return {
      nombre:'',
      cedula:'',
      apto_num:'',
      tower:'',
      placa: '',
      selected: '',
      extra: ''
    };
  },
  computed: {
    ...mapGetters('entrada_salida', ['showModalNewEntrada', 'vehiculos']),
  },
  methods: {
    ...mapActions('entrada_salida', ['changeModalNewEntrada', 'addNewEntrada']),
    agregarEntrada(value){
      this.addNewEntrada(value);
      this.toggleModal(false);

    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/views/scss/_theme.scss';
#dialog-newParking{
  width: 25%;
  height:70%;
  padding: 0px 30px 60px 30px;
  display: flex;

  border-radius: 5px;
  align-items: flex-start;
  flex-direction: column;
  background-color: $background-color;
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

.Rows{
  display:flex;

  flex-wrap: wrap;
  padding-top: 5px;
  width: 100%;

}

input{

  padding-left: 5px;
  width: 100%;
  text-align: center;
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
  width: 100%;
  text-align: center;

}

select{

  font-size: 0.8rem;
  height:25px;
  width:160px;
  margin: 0px;

}
.opt_select{
  width: 100%;
}
#para_select{
  width: 100%;
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
