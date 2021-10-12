<template>
  <div class= 'Hogares'>
    <div class = "apartments">
      <div class ="Number">
        {{hogar.apto_num}}
      </div>

      <Modal2>
        <template v-slot:toggler>
          <div class="Buildings">
            <img class="" src="@/assets/Torre.svg" alt="torre">
          </div>
        </template>
        <ModalContent>
          <div>
            <h1>
              hola como estan
            </h1>
          </div>
          <template v-slot:cancelar>
            <button>
              Cancelar
            </button>
          </template>
        </ModalContent>
      </Modal2>

      <!-- <div class="Buildings">
        <img class="" @click="showApto()" src='@/assets/Torre.svg' alt="torre">
      </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

import Modal2 from '@/components/modal/Modal2.vue';
import ModalContent from '@/components/modal/ModalContent.vue';
// import Infoapto from '@/components/ModalInfoApto.vue';

export default {
  name: 'Hogares',
  components: {
    Modal2,
    ModalContent,
  },

  data() {
    return {
      showModal: false,
    };
  },
  methods: {
  },
  props: {
    index: {
      type: Number,
    },
  },
  computed: {
    ...mapGetters('hogares_module', ['getHogares']),
    hogar() {
      return this.getHogares[this.index];
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/views/scss/_theme.scss';

.Navigation{
  background-color: $main-color;
  display: flex;
  height:45px;
  margin: 5px 10px 0 21% ;
  justify-content: space-between;
  border-radius:10px;
  line-height: 20px;
}
.menu{
  width:10px;
  height:10px;
  font-weight: bolder;
}
.boton2{
  background-color: $background-color;
  border-radius: 5px;
  width: 90px;
  height: 30px;
  color:$main-color ;
  margin-left: 20px;
  margin-top: 5%;
  margin-bottom: 5%;
  font-weight: bold;
  justify-content: space-between;
  cursor:pointer;
}
.boton1{
  background-color: $background-color;
  border-radius: 5px;
  width: 180px;
  height: 30px;
  color:$main-color ;
  margin-left: 20px;
  margin-top: 5%;
  font-weight: bold;
  cursor:pointer;
}
.Navigation-Buttons{

  margin-bottom:10px;

}
.buscar{
  padding-right: 15px;
  padding-top: 10px;
  line-height: 0;
}
label{
  color:white;
  font-weight : bold;
}
input{
  background-color: $secondary-color;
  color:$main-color ;
  height: 20px;
  margin-left: 5px;
  border-radius: 20px;
}
.Apt-numbers{
  display:flex;
  justify-content:left;
  color: $main-color;
  font-weight: bold;
  margin: 5px 10px -10px 21%;
  list-style: none;
}

.Number{
  padding-left: 60px;
  padding-right:57px;
}

.apartments{
  display: flex;
  flex-direction: row;
  padding: 25px;
  margin: 5px 10px 0 23%;
}
.Apt-button{
  border-radius: 10px;
  margin:0 30px;
  padding-right:10px;
}

.Buildings{
  margin-left: -115px;
  margin-top: 25%;
  width: 25%;
  display:flex;
  flex-direction: row;

}
// .Hogares{
//   margin: 50px;
//   padding: 0, 50px;
// }

// Arreglando algunos detalles

</style>
