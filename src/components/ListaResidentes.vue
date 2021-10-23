<template>
<div>
<section class="item">
    
    
<div class="conteiner">
  <div class="icono">
      
  </div>
  
    
    </div>
    
    <MenuDropDown>
        <template v-slot:toggler>
          <div class="lisresi">
            <img :src= imgUser>
            <div class="nombre-user"><b>{{Nombre}}</b></div>
          </div>
        </template>
         <MenuDropDownContent class="menu-options">
          <MenuDropDownItem class="opcion_menu">
            <Modal2>
            <template v-slot:toggler>
              <p class="opcion_menu">
                Mas informacion
              </p>
              <p class="opcion_menu">
                Editar Residente
              </p>
              <p class="opcion_menu">
                Eliminar Residente
              </p>
            </template>
            
          </Modal2>
          </MenuDropDownItem>
           </MenuDropDownContent>   
      </MenuDropDown>
      
  



          
          <!-- <MenuDropDownItem class="opcion_menu" id="Bott_cancel">
            Cancelar
          </MenuDropDownItem> -->
       
  </section>
</div>

</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
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
      
    },
    
    
    },
    computed: {
    ...mapGetters('New_Residente', ['getNewResidente']),
    residente() {
      console.log(this.getNewResidente[this.index]);
      return this.getNewResidente[this.index];
    },
  },
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
.item{
        margin-top: 10px ;
        margin-right: 15px;
        border-radius: 10px;
        padding:10px ;
        position: relative;
        background:$third-color;

        display: flex;
        border: 2px solid $main-color;
        align-items: center;
        justify-content: space-between;
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
  margin: 5px;
}
// .lisresi{
 
// }
// Arreglando algunos detalles

</style>
