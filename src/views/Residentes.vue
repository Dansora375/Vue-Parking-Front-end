<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header/>
    <Nav/>
    <div class="container">
      <Modal2>
          <template v-slot:toggler>
            <img class='addImage' src="@/assets/add.svg" alt="">
          </template>
          <modal-content>
            <NewResidente>
            </NewResidente>
            <template v-slot:cancelar>
              <button @click="resetDataEntrada()">
                Cancelar
              </button>
            </template>
            <template v-slot:confirmar>
              <button @click="agregarEntrada">
                Aceptar
              </button>
            </template>
          </modal-content>
        </Modal2>
      <div class="buscar">
        <form action="">
          <label for="buscar">Buscar</label>
          <input type="text">
        </form>
      </div>
    </div>
    <ListaResidentes />

    

  </div>
</template>

<script>
// @ is an alias to /src
import ListaResidentes from '@/components/ListaResidentes.vue';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
import NewResidente from '@/components/NewResidente.vue';
import Modal2 from '@/components/modal/Modal2.vue';
import ModalContent from '@/components/modal/ModalContent.vue';




export default {
  name: 'Home',
  components: {
    ListaResidentes,
    Header,
    Nav,
    NewResidente,
    Modal2,
    ModalContent
  },

  created() {
    // console.log('inmounted: ');
    this.$store.dispatch('New_Residente/cargarResidentes');
  },
  provide() {
    return {
      dataResidente: () => this.dataNewResidente,
      updateEntrada: this.updateEntrada,
    };
  },
  data() {
    return {
      dataNewResidente: {
        cedula: "",
        tower: '',
      },
    };
  },
  computed: {
    ...mapGetters('hogares_module', ['getHogares']),
  },
  methods: {
    updateEntrada(values) {
      const { key, val } = values;
      this.dataNewHogar[key] = val;
    },
    agregarHogar() {
      console.log(this.dataNewHogar);
    },
  },
};

</script>
<style scoped lang="scss">
@import '@/views/scss/_theme.scss';
.container{
  margin-left: 21%;
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color:$secondary-color ;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.boton{
  margin-top: 5px;
}

.buscar{
  display: flex;
  margin-left: 1100px;
}
label{
  color:white;
}
input{
  background-color: $background-color;
  color:$main-color ;
  height: 10px;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 5px;
}

.usuario{
  margin: 20px ;
  width: 500px;
  border-radius: 10px;
  background-color:$secondary-color ;
  display:flex;
  flex-direction: row;
  

}
.nombre-user{
  font-size: 1.5em;
  color:$main-color ;
  margin: 5px;

}



.addImage{
  width: 2%;
  float: left;
}
</style>
