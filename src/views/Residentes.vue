<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header/>
    <Nav/>
     <div class="main_entrada">
      <div class="superior-bar">

        <Modal2>
          <template v-slot:toggler>
            <img class='addImage' src="@/assets/add.svg" alt="">
          </template>
          <modal-content>
            <new-residente>
            </new-residente>
            <template v-slot:cancelar>
              <button >
                Cancelar
              </button>
            </template>
            <template v-slot:confirmar>
              <button @click="agregarResidente()">
                Agregar
              </button>
            </template>
          </modal-content>
        </Modal2>

        <SearchBar class="search"></SearchBar>
      </div>

    <div class="hogares">
    <lista-residentes v-for="(item, index) of getNewResidente" :key="index" v-bind:id="item._id" v-bind:Nombre="item.nombre">
    </lista-residentes>
  </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaResidentes from '@/components/ListaResidentes.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import NewResidente from '@/components/NewResidente.vue'
import Modal2 from '@/components/modal/Modal2.vue'
import ModalContent from '@/components/modal/ModalContent.vue'
import SearchBar from '@/components/SearchButton.vue'
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    ListaResidentes,
    Header,
    Nav,
    NewResidente,
    Modal2,
    ModalContent,
    SearchBar
  },

  created () {
    // console.log('inmounted: ');
    this.$store.dispatch('New_Residente/cargarResidentes')
  },
  provide () {
    return {
      dataResidente: () => this.dataNewResidente,
      updateEntrada: this.updateEntrada
    }
  },
  data () {
    return {
      dataNewResidente: {
        nombre: '',
        cedula: 0,
        telefono: 0,
        apto_num: 0,
        tower: ''

      }
    }
  },
  computed: {
    ...mapGetters('New_Residente', ['getNewResidente'])
  },
  methods: {
    updateEntrada (values) {
      const { key, val } = values
      this.dataNewResidente[key] = val
    },
    ...mapActions('New_Residente', ['addNewResidente']),
    agregarResidente () {
      //console.log(this.dataNewResidente)
      this.addNewResidente(this.dataNewResidente)
    }
  }
}

</script>
<style scoped lang="scss">
@import '@/views/scss/_theme.scss';
.main_entrada{
    padding: 20px;
    margin-left: 20%;
  }

  .superior-bar{
    display: flex;
    justify-content: space-between;
  }

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

}

.addImage{
  display:inline;
  width: 40px;

}
.hogares{
  display: flex;
    flex-wrap: wrap;

}
</style>
