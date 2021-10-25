<template>
<div class="colum">
  <section class="item">

    <div class="conteiner">

      <!-- Mostrar las opciones del residente al cliquear el icono -->
    <MenuDropDown>
      <template v-slot:toggler>
        <div class="icono">
          <img :src= imgUser>
        </div>
        <div class="nombre-user"><b>{{Nombre}}</b>
        </div>
      </template>
      <MenuDropDownContent class="menu-options">
        <MenuDropDownItem class="opcion_menu">

          <!-- Ver mas informacion del residente -->
          <Modal2>
            <template v-slot:toggler>
              <menu-drop-down-item>
                Mas informacion
              </menu-drop-down-item>
            </template>
            <ModalContent>
              <div>
                <h1>
                  Aun no se tiene informacion de este residente
                </h1>
              </div>
              <template v-slot:cancelar>
                <button>
                  Cancelar
                </button>
              </template>
            </ModalContent>
          </Modal2>

          <!-- Editar la informacion del residente -->
          <Modal2>
            <template v-slot:toggler>
              <menu-drop-down-item>
                Editar Residente
              </menu-drop-down-item>
            </template>
            <ModalContent>
              <div>
                <h1>
                  De momento el residente no puede ser modificado
                </h1>
              </div>
              <template v-slot:cancelar>
                <button>
                  Cancelar
                </button>
              </template>
            </ModalContent>
          </Modal2>

          <!-- Eliminar a un residente -->
          <Modal2>
            <template v-slot:toggler>
              <menu-drop-down-item >
                Eliminar Residente
              </menu-drop-down-item>
            </template>
            <ModalContent>
              <div>
                <h1>
                  Porque lo quieres eliminar? :c
                </h1>
              </div>
              <template v-slot:cancelar>
                <button>
                  Cancelar
                </button>
              </template>
            </ModalContent>
          </Modal2>
        </MenuDropDownItem>
        </MenuDropDownContent>
    </MenuDropDown>

    </div>

    <!-- <MenuDropDownItem class="opcion_menu" id="Bott_cancel">
      Cancelar
    </MenuDropDownItem> -->
  </section>
</div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapMutations, mapActions } from 'vuex'
import user from '@/assets/user.svg'

import MenuDropDownContent from '@/components/dropDown/MenuDropDownContent.vue'
import MenuDropDown from '@/components//dropDown/MenuDropdown.vue'
import MenuDropDownItem from '@/components//dropDown/MenuDropDownItem.vue'
import NewResidente from '@/components/NewResidente.vue'
import Modal2 from '@/components/modal/Modal2.vue'
import ModalContent from '@/components/modal/ModalContent.vue'

export default {
  name: 'ListaResidentes',
  components: {
    MenuDropDownContent,
    MenuDropDown,
    MenuDropDownItem,
    // eslint-disable-next-line vue/no-unused-components
    NewResidente,
    Modal2,
    // eslint-disable-next-line vue/no-unused-components
    ModalContent

  },
  data () {
    return {

      imgUser: user

    }
  },
  props: {
    index: {
      type: Number
    },
    Nombre: {
      type: String

    }

  },
  computed: {
    ...mapGetters('New_Residente', ['getNewResidente']),
    residente () {
      console.log(this.getNewResidente[this.index])
      return this.getNewResidente[this.index]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/views/scss/_theme.scss';
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.item{
        margin-top: 10px ;
        margin-right: 15px;
        border-radius: 10px;
        padding:10px ;
        width: 90px;
        position: relative;
        background:$third-color;
        
        border: 2px solid $main-color;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.container{

        display: flex;
        flex-direction:column;
        justify-content: space-between;
        
        // flex-direction: column;
        align-items: center;
        width: 50%;

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

.opcion_menu {
  font-size: 0.9em;
  padding-bottom: 0px;
  padding-right: 0px;
  padding-left: 0px;
}

.model-opcions {
  right: 60%;
  top: 65%;
}

// .usuario{
//   margin: 20px ;
//   width: 500px;
//   border-radius: 10px;
//   background-color:$secondary-color ;
//   display:flex;
//   flex-direction: row;

// }
.nombre-user{
  font-size: 1em;
  color:$main-color ;
}
// Arreglando algunos detalles

</style>
