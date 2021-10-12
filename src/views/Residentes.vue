<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header/>
    <Nav/>
    <ListaResidentes />

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
};
</script>
