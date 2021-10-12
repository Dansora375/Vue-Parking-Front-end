<template>
  <div class="hello">
    
    
<div class="usuario">
  <div class="icono">
    <img :src= imgUser>
  </div>
  <div>
    <div class="nombre-user">{{Nombre}}</div>
    <div>
    <MenuDropDown>
        <template v-slot:toggler>
          <img class="icon-menu" src="@/assets/menu.svg" alt="">
        </template>
        <MenuDropDownContent class="menu-options">
          <MenuDropDownItem class="opcion_menu">
            <Modal2>
            <template v-slot:toggler>
              <p class="opcion_menu">
                Mas informacion
              </p>
            </template>
            <ModalContent>
              <EntradaInformation v-bind:index="this.index">
              </EntradaInformation>
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
  </div>
</div>


          
          <!-- <MenuDropDownItem class="opcion_menu" id="Bott_cancel">
            Cancelar
          </MenuDropDownItem> -->
       
</div>
</template>

<script>
import user from '@/assets/user.svg'

import MenuDropDownContent from '@/components/dropDown/MenuDropDownContent.vue';
import MenuDropDown from '@/components//dropDown/MenuDropdown.vue';
import MenuDropDownItem from '@/components//dropDown/MenuDropDownItem.vue';
;
import NewResidente from '@/components/NewResidente.vue';
import Modal2 from '@/components/modal/Modal2.vue';
import ModalContent from '@/components/modal/ModalContent.vue';

export default {
  name: 'ListaResidentes',
  components:{
    MenuDropDownContent,
    MenuDropDown,
    MenuDropDownItem,
    NewResidente,
    Modal2,
    ModalContent

  },
  data(){

   return{

      imgUser:user
           
            
        }
    },
    props:{
      index: {
      type: Number,
    },
    Nombre: {
      type: String,
      default:"Nombre" ,
    },
    
    id: {
      type: String,
    },
    }
};
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
.hello{
  margin-left:20%;
}

.container{
  margin: 20px;
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color:$secondary-color ;
  display: flex;
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
// Arreglando algunos detalles

</style>
